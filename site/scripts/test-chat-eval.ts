/**
 * Chat eval suite — runs canned prompts against a persona's real
 * chat pipeline (system prompt assembly + retrieval + LLM) and asserts
 * shape/quality properties on the responses.
 *
 * Bypasses the HTTP route to keep the suite fast: we re-build the same
 * system prompt that /api/chat assembles, then call generateText against
 * the same chatModel(). Auth is skipped — this script is for local /
 * pre-deploy spot-checks, not for production users.
 *
 * Usage:
 *   npm run test:chat-eval                         # default persona = walker
 *   npm run test:chat-eval -- --persona=martha
 *   npm run test:chat-eval -- --case=meta-count-uses-stats
 *
 * Exit code: 0 if all cases pass, 1 if any fail. Prints per-case detail
 * on failure so you can see exactly what the persona said.
 */

import fs from "node:fs";
import path from "node:path";
import { generateText } from "ai";
import { eq, sql as drizzleSql } from "drizzle-orm";
import {
  retrieveAllAudits,
  retrieveRelevantAudits,
  loadPersonaIdentity,
  getAuditMemoryCount,
  STUFF_ALL_THRESHOLD,
} from "../lib/chat/retrieve";
import { buildSystemPrompt } from "../lib/chat/prompt";
import { chatModel } from "../lib/chat/provider";
import { db, personas, reactions } from "../lib/db/client";

type Asserts = {
  contains?: string | string[];
  containsAny?: string[];
  notContains?: string | string[];
  regex?: string;
  notRegex?: string;
  linkPattern?: string;
  firstPerson?: boolean;
  englishOnly?: boolean;
  mentionsTotalCount?: boolean;
  noInventedAuditLinks?: boolean;
  noExternalLinks?: boolean;
  maxHeadingCount?: number;
};

type Case = {
  id: string;
  description: string;
  prompt: string;
  asserts: Asserts;
  /** If set, skip the case unless the persona has at least one reaction
   *  whose source experience came from a brand domain matching the substr. */
  skipIfNoBrandMatch?: string;
};

const args = process.argv.slice(2);
function getArg(name: string, fallback?: string): string | undefined {
  const m = args.find((a) => a.startsWith(`--${name}=`));
  return m ? m.split("=")[1] : fallback;
}

const PERSONA = getArg("persona", "walker")!;
const CASE_FILTER = getArg("case");
const FIXTURE = path.join(__dirname, "chat-eval-cases.json");

type AssertResult = { ok: true } | { ok: false; reason: string };

const ASCII_LATIN_RE = /^[\x00-\x7F\xA0-\xFF‐-⁯←-⇿─-╿€]*$/;
const NON_ASCII_DENSITY_THRESHOLD = 0.05;

function evalEnglishOnly(text: string): AssertResult {
  // Heuristic: ASCII + Latin-1 + a few common punctuation blocks.
  // High density of CJK/Cyrillic/Arabic chars → fail.
  if (ASCII_LATIN_RE.test(text)) return { ok: true };
  let nonAscii = 0;
  for (const ch of text) {
    if (ch.codePointAt(0)! > 0x024f) nonAscii++;
  }
  const density = nonAscii / Math.max(1, text.length);
  if (density > NON_ASCII_DENSITY_THRESHOLD) {
    return {
      ok: false,
      reason: `non-English character density ${(density * 100).toFixed(1)}% (threshold ${NON_ASCII_DENSITY_THRESHOLD * 100}%)`,
    };
  }
  return { ok: true };
}

function evalFirstPerson(text: string): AssertResult {
  if (/\b(I|I'm|I've|I'll|me|my|mine)\b/.test(text)) return { ok: true };
  return { ok: false, reason: "no first-person pronoun (I/me/my)" };
}

function evalContains(text: string, needle: string | string[]): AssertResult {
  const arr = Array.isArray(needle) ? needle : [needle];
  for (const n of arr) {
    if (!text.toLowerCase().includes(n.toLowerCase())) {
      return { ok: false, reason: `missing "${n}"` };
    }
  }
  return { ok: true };
}
function evalContainsAny(text: string, options: string[]): AssertResult {
  for (const o of options) {
    if (text.toLowerCase().includes(o.toLowerCase())) return { ok: true };
  }
  return { ok: false, reason: `expected one of ${JSON.stringify(options)}` };
}
function evalNotContains(text: string, needle: string | string[]): AssertResult {
  const arr = Array.isArray(needle) ? needle : [needle];
  for (const n of arr) {
    if (text.toLowerCase().includes(n.toLowerCase())) {
      return { ok: false, reason: `contains banned "${n}"` };
    }
  }
  return { ok: true };
}

function evalRegex(text: string, re: string, mustMatch: boolean): AssertResult {
  const r = new RegExp(re);
  const hit = r.test(text);
  if (mustMatch && !hit)
    return { ok: false, reason: `does not match /${re}/` };
  if (!mustMatch && hit) return { ok: false, reason: `matches /${re}/` };
  return { ok: true };
}

function evalLinkPattern(text: string, pat: string): AssertResult {
  const r = new RegExp(pat);
  if (r.test(text)) return { ok: true };
  return { ok: false, reason: `no match for link pattern /${pat}/` };
}

function evalMentionsTotalCount(text: string, total: number): AssertResult {
  if (total <= 0) return { ok: true };
  // Word-boundary match on the exact total. Substring matches on "29" inside
  // dates like "2026-04-29" used to false-pass; the boundary is what makes
  // this assertion meaningful.
  const exactRe = new RegExp(`\\b${total}\\b`);
  if (exactRe.test(text)) {
    // Also confirm the number is being used in a count-like context — it
    // must appear near words like audit / email / review / experience / total.
    const ctxRe = new RegExp(
      `\\b${total}\\b[^.\\n]{0,40}(audit|email|review|experience|memor|inbox)|(audit|email|review|experience|memor|inbox)[^.\\n]{0,40}\\b${total}\\b`,
      "i"
    );
    if (ctxRe.test(text)) return { ok: true };
  }
  return {
    ok: false,
    reason: `expected exact count ${total} mentioned in an audit/email/review context`,
  };
}

function evalNoInventedAuditLinks(
  text: string,
  knownSlugs: Set<string>
): AssertResult {
  const re = /\/audits\/([a-z0-9-]+)/g;
  for (const m of text.matchAll(re)) {
    const slug = m[1];
    if (!knownSlugs.has(slug)) {
      return { ok: false, reason: `referenced unknown audit slug "${slug}"` };
    }
  }
  return { ok: true };
}

function evalNoExternalLinks(text: string): AssertResult {
  // Match any http(s) URL except internal /audits/ ones (which use no scheme).
  const re = /https?:\/\/\S+/g;
  const ext = text.match(re);
  if (ext && ext.length) {
    return { ok: false, reason: `external link(s): ${ext.slice(0, 2).join(", ")}` };
  }
  return { ok: true };
}

function evalMaxHeadings(text: string, max: number): AssertResult {
  const headings = (text.match(/^#+\s/gm) ?? []).length;
  if (headings > max)
    return { ok: false, reason: `${headings} markdown headings > max ${max}` };
  return { ok: true };
}

async function knownAuditSlugs(personaSlug: string): Promise<Set<string>> {
  // Walk reactions for the persona — same surface the chat retrieval grounds in.
  const rows = await db
    .select({ slug: reactions.slug })
    .from(reactions)
    .where(eq(reactions.personaSlug, personaSlug));
  return new Set(rows.map((r) => r.slug));
}

async function brandsForPersona(personaSlug: string): Promise<Set<string>> {
  const rows = await db.execute(drizzleSql`
    SELECT DISTINCT lower(e.brand_domain) AS brand
    FROM reaction r
    JOIN experience e ON e.id = r.experience_id
    WHERE r.persona_slug = ${personaSlug}
  `);
  const brands = new Set<string>();
  for (const row of rows.rows ?? []) {
    const b = row.brand as string | null;
    if (b) brands.add(b);
  }
  return brands;
}

async function assertPersonaExists(slug: string): Promise<boolean> {
  const [p] = await db
    .select({ slug: personas.slug })
    .from(personas)
    .where(eq(personas.slug, slug))
    .limit(1);
  return !!p;
}

async function buildSystemForCase(personaSlug: string, prompt: string) {
  const [identity, total] = await Promise.all([
    loadPersonaIdentity(personaSlug),
    getAuditMemoryCount(personaSlug),
  ]);
  const retrieved =
    total > 0 && total <= STUFF_ALL_THRESHOLD
      ? await retrieveAllAudits(personaSlug)
      : await retrieveRelevantAudits(personaSlug, prompt);
  return { system: buildSystemPrompt(identity, retrieved, total), total };
}

async function runCase(
  c: Case,
  personaSlug: string,
  knownSlugs: Set<string>,
  brands: Set<string>
): Promise<{ status: "pass" | "fail" | "skip"; details: string[] }> {
  if (c.skipIfNoBrandMatch) {
    const wanted = c.skipIfNoBrandMatch.toLowerCase();
    const hit = [...brands].some((b) => b.includes(wanted));
    if (!hit)
      return {
        status: "skip",
        details: [`no brand matching "${wanted}" in corpus`],
      };
  }

  const { system, total } = await buildSystemForCase(personaSlug, c.prompt);
  const { text } = await generateText({
    model: chatModel(),
    system,
    prompt: c.prompt,
    maxOutputTokens: 800,
    temperature: 0.4,
  });

  const failures: string[] = [];
  const a = c.asserts;
  const checks: AssertResult[] = [];
  if (a.contains !== undefined) checks.push(evalContains(text, a.contains));
  if (a.containsAny) checks.push(evalContainsAny(text, a.containsAny));
  if (a.notContains !== undefined)
    checks.push(evalNotContains(text, a.notContains));
  if (a.regex) checks.push(evalRegex(text, a.regex, true));
  if (a.notRegex) checks.push(evalRegex(text, a.notRegex, false));
  if (a.linkPattern) checks.push(evalLinkPattern(text, a.linkPattern));
  if (a.firstPerson) checks.push(evalFirstPerson(text));
  if (a.englishOnly) checks.push(evalEnglishOnly(text));
  if (a.mentionsTotalCount) checks.push(evalMentionsTotalCount(text, total));
  if (a.noInventedAuditLinks)
    checks.push(evalNoInventedAuditLinks(text, knownSlugs));
  if (a.noExternalLinks) checks.push(evalNoExternalLinks(text));
  if (a.maxHeadingCount !== undefined)
    checks.push(evalMaxHeadings(text, a.maxHeadingCount));

  for (const r of checks) if (!r.ok) failures.push(r.reason);

  return {
    status: failures.length === 0 ? "pass" : "fail",
    details:
      failures.length === 0
        ? [text.replaceAll("\n", " ⏎ ").slice(0, 220) + "…"]
        : [
            `failures: ${failures.join("; ")}`,
            `response: ${text.replaceAll("\n", " ⏎ ").slice(0, 280)}…`,
          ],
  };
}

async function main() {
  if (!(await assertPersonaExists(PERSONA))) {
    console.error(`Persona "${PERSONA}" not found in DB.`);
    process.exit(1);
  }

  const cases = JSON.parse(fs.readFileSync(FIXTURE, "utf8")) as Case[];
  const filtered = CASE_FILTER ? cases.filter((c) => c.id === CASE_FILTER) : cases;
  if (filtered.length === 0) {
    console.error(`No cases matched ${CASE_FILTER ? `id="${CASE_FILTER}"` : ""}`);
    process.exit(1);
  }

  const [knownSlugs, brands, total] = await Promise.all([
    knownAuditSlugs(PERSONA),
    brandsForPersona(PERSONA),
    getAuditMemoryCount(PERSONA),
  ]);

  console.log(
    `\n══ chat eval — persona=${PERSONA}, ${total} memories, ${brands.size} brands, ${filtered.length} case(s) ══\n`
  );

  let pass = 0;
  let fail = 0;
  let skip = 0;
  for (const c of filtered) {
    process.stdout.write(`  · ${c.id} … `);
    const t0 = Date.now();
    try {
      const { status, details } = await runCase(c, PERSONA, knownSlugs, brands);
      const ms = Date.now() - t0;
      const tag =
        status === "pass" ? "✓ PASS" : status === "skip" ? "⊘ SKIP" : "✗ FAIL";
      console.log(`${tag} (${ms}ms)`);
      for (const d of details) console.log(`      ${d}`);
      if (status === "pass") pass++;
      else if (status === "skip") skip++;
      else fail++;
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.log(`✗ FAIL (error)`);
      console.log(`      ${msg}`);
      fail++;
    }
  }

  console.log(
    `\n${pass} passed · ${fail} failed · ${skip} skipped · ${filtered.length} total\n`
  );
  process.exit(fail === 0 ? 0 : 1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
