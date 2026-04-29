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
  /** Reply doesn't start with report/assistant preambles (Based on…, Sure!,
   *  Certainly!, As {persona}…). */
  noPreamble?: boolean;
  /** Reply doesn't refer to the persona by name in third person ("Walker
   *  thinks", "as Walker"). Persona name pulled from the DB at runtime. */
  noThirdPersonSelf?: boolean;
  /** Reply doesn't break character to disclose AI / language-model status. */
  noAiSelfReference?: boolean;
  /** No raw audit slugs (e.g. "2026-04-27-…") in prose outside of
   *  markdown link targets. */
  noBareSlugInProse?: boolean;
  /** Word-count bounds. Soft signals for brevity / depth. */
  maxWords?: number;
  minWords?: number;
};

/** A single conversational turn the runner sends as `user`. The last turn
 *  in a multi-turn case is the one whose response we evaluate. Earlier
 *  turns are context-only — their assistant replies are appended to the
 *  message list passed into the next turn. */
type Turn = { user: string; asserts?: Asserts };

type Case = {
  id: string;
  description: string;
  /** Single-turn shorthand. Mutually exclusive with `turns`. */
  prompt?: string;
  asserts?: Asserts;
  /** Multi-turn conversation. The final turn must define `asserts`. */
  turns?: Turn[];
  tags?: string[];
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
const TAG_FILTER = getArg("tag");
const JSON_OUT = args.includes("--json");
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

const PREAMBLE_PATTERNS = [
  /^based\s+on\b/i,
  /^as\s+(an?\s+)?(ai|assistant|language\s+model)\b/i,
  /^sure[!,]/i,
  /^certainly[!,]/i,
  /^of\s+course[!,]/i,
  /^great\s+question/i,
  /^absolutely[!,]/i,
];
function evalNoPreamble(text: string): AssertResult {
  const head = text.trim().split("\n")[0] ?? "";
  for (const re of PREAMBLE_PATTERNS) {
    if (re.test(head)) {
      return { ok: false, reason: `preamble detected: ${re} matched "${head.slice(0, 60)}"` };
    }
  }
  return { ok: true };
}

function evalNoThirdPersonSelf(
  text: string,
  personaName: string
): AssertResult {
  // Persona row stores the full name (e.g. "Walker Miles"). Treat any token
  // ≥3 chars that's appearing word-bounded as a third-person self-reference.
  const tokens = personaName
    .split(/\s+/)
    .filter((t) => t.length >= 3)
    .map((t) => t.replace(/[^a-zA-Z]/g, ""))
    .filter(Boolean);
  for (const t of tokens) {
    const re = new RegExp(`\\b${t}\\b`);
    if (re.test(text)) {
      return { ok: false, reason: `third-person self-reference "${t}" in reply` };
    }
  }
  // Also catch generic phrasing.
  if (/\bthe persona\b/i.test(text)) {
    return { ok: false, reason: `phrase "the persona" in reply` };
  }
  return { ok: true };
}

// Catches "I'm an AI", "I'm actually an AI", "I'm essentially a chatbot",
// "as an AI", "I am a language model", etc. The middle adverb slot
// (`(\w+\s+){0,3}`) is what previously let "I'm actually an AI" slip
// through.
const AI_SELF_REF_RE =
  /\b(I'?m|I\s+am)\s+(\w+\s+){0,3}(an?\s+)?(ai|assistant|language\s+model|chatbot|bot|llm)\b|\bas\s+(an?\s+)?(ai|assistant|language\s+model|chatbot)\b|\b(large\s+language\s+model)\b/i;
function evalNoAiSelfReference(text: string): AssertResult {
  if (AI_SELF_REF_RE.test(text)) {
    return { ok: false, reason: `AI self-disclosure detected` };
  }
  return { ok: true };
}

function evalNoBareSlugInProse(text: string): AssertResult {
  // Strip markdown link targets first; we only care about slugs left in the
  // visible text. Pattern: yyyy-mm-dd-... or similar slug shape.
  const stripped = text.replace(/\]\(\/audits\/[a-z0-9-]+\)/g, "]()");
  const slugRe = /\b\d{4}-\d{2}-\d{2}-[a-z0-9-]{4,}\b/i;
  if (slugRe.test(stripped)) {
    const m = stripped.match(slugRe);
    return {
      ok: false,
      reason: `raw slug in prose: "${m?.[0]}"`,
    };
  }
  return { ok: true };
}

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}
function evalMaxWords(text: string, max: number): AssertResult {
  const n = countWords(text);
  if (n > max) return { ok: false, reason: `${n} words > max ${max}` };
  return { ok: true };
}
function evalMinWords(text: string, min: number): AssertResult {
  const n = countWords(text);
  if (n < min) return { ok: false, reason: `${n} words < min ${min}` };
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

async function loadPersonaName(slug: string): Promise<string | null> {
  const [p] = await db
    .select({ name: personas.name })
    .from(personas)
    .where(eq(personas.slug, slug))
    .limit(1);
  return p?.name ?? null;
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

function runAsserts(opts: {
  text: string;
  asserts: Asserts;
  knownSlugs: Set<string>;
  total: number;
  personaName: string;
}): string[] {
  const { text, asserts: a, knownSlugs, total, personaName } = opts;
  const failures: string[] = [];
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
  if (a.noPreamble) checks.push(evalNoPreamble(text));
  if (a.noThirdPersonSelf)
    checks.push(evalNoThirdPersonSelf(text, personaName));
  if (a.noAiSelfReference) checks.push(evalNoAiSelfReference(text));
  if (a.noBareSlugInProse) checks.push(evalNoBareSlugInProse(text));
  if (a.maxWords !== undefined) checks.push(evalMaxWords(text, a.maxWords));
  if (a.minWords !== undefined) checks.push(evalMinWords(text, a.minWords));
  for (const r of checks) if (!r.ok) failures.push(r.reason);
  return failures;
}

async function runCase(
  c: Case,
  personaSlug: string,
  personaName: string,
  knownSlugs: Set<string>,
  brands: Set<string>
): Promise<{
  status: "pass" | "fail" | "skip";
  details: string[];
  finalText?: string;
}> {
  if (c.skipIfNoBrandMatch) {
    const wanted = c.skipIfNoBrandMatch.toLowerCase();
    const hit = [...brands].some((b) => b.includes(wanted));
    if (!hit)
      return {
        status: "skip",
        details: [`no brand matching "${wanted}" in corpus`],
      };
  }

  // Normalize single-turn shorthand (`prompt`) into the multi-turn shape.
  const turns: Turn[] = c.turns
    ? c.turns
    : c.prompt !== undefined
      ? [{ user: c.prompt, asserts: c.asserts ?? {} }]
      : [];
  if (turns.length === 0)
    return { status: "fail", details: ["case has no prompt or turns"] };

  // Build the system prompt off the FIRST turn (retrieval can drift between
  // queries; we pin it to the opening turn so multi-turn anaphora cases
  // keep the same memory context).
  const { system, total } = await buildSystemForCase(personaSlug, turns[0].user);

  const messages: Array<{ role: "user" | "assistant"; content: string }> = [];
  let lastText = "";
  let lastAsserts: Asserts | undefined;
  for (let i = 0; i < turns.length; i++) {
    const t = turns[i];
    messages.push({ role: "user", content: t.user });
    const { text } = await generateText({
      model: chatModel(),
      system,
      messages,
      maxOutputTokens: 800,
      // Lower than the live chat default (0.4) to reduce run-to-run drift
      // in the suite. Trades a hair of naturalness for regression-friendly
      // stability — single-run flakes catch real issues less often.
      temperature: 0.2,
    });
    messages.push({ role: "assistant", content: text });
    lastText = text;
    if (t.asserts) lastAsserts = t.asserts;
  }
  // Fall back to top-level asserts if final turn didn't provide its own.
  const evalAsserts = lastAsserts ?? c.asserts ?? {};
  const failures = runAsserts({
    text: lastText,
    asserts: evalAsserts,
    knownSlugs,
    total,
    personaName,
  });

  return {
    status: failures.length === 0 ? "pass" : "fail",
    details:
      failures.length === 0
        ? [lastText.replaceAll("\n", " ⏎ ").slice(0, 220) + "…"]
        : [
            `failures: ${failures.join("; ")}`,
            `response: ${lastText.replaceAll("\n", " ⏎ ").slice(0, 280)}…`,
          ],
    finalText: lastText,
  };
}

async function main() {
  const personaName = await loadPersonaName(PERSONA);
  if (!personaName) {
    console.error(`Persona "${PERSONA}" not found in DB.`);
    process.exit(1);
  }

  const cases = JSON.parse(fs.readFileSync(FIXTURE, "utf8")) as Case[];
  let filtered = cases;
  if (CASE_FILTER) filtered = filtered.filter((c) => c.id === CASE_FILTER);
  if (TAG_FILTER)
    filtered = filtered.filter((c) => (c.tags ?? []).includes(TAG_FILTER));
  if (filtered.length === 0) {
    const f = [
      CASE_FILTER ? `case="${CASE_FILTER}"` : null,
      TAG_FILTER ? `tag="${TAG_FILTER}"` : null,
    ]
      .filter(Boolean)
      .join(" ");
    console.error(`No cases matched ${f}`);
    process.exit(1);
  }

  const [knownSlugs, brands, total] = await Promise.all([
    knownAuditSlugs(PERSONA),
    brandsForPersona(PERSONA),
    getAuditMemoryCount(PERSONA),
  ]);

  if (!JSON_OUT) {
    console.log(
      `\n══ chat eval — persona=${PERSONA} (${personaName}), ${total} memories, ${brands.size} brands, ${filtered.length} case(s) ══\n`
    );
  }

  type Result = {
    id: string;
    status: "pass" | "fail" | "skip";
    ms: number;
    details: string[];
    finalText?: string;
  };
  const results: Result[] = [];

  let pass = 0;
  let fail = 0;
  let skip = 0;
  for (const c of filtered) {
    if (!JSON_OUT) process.stdout.write(`  · ${c.id} … `);
    const t0 = Date.now();
    try {
      const r = await runCase(c, PERSONA, personaName, knownSlugs, brands);
      const ms = Date.now() - t0;
      results.push({ id: c.id, status: r.status, ms, details: r.details, finalText: r.finalText });
      if (!JSON_OUT) {
        const tag =
          r.status === "pass"
            ? "✓ PASS"
            : r.status === "skip"
              ? "⊘ SKIP"
              : "✗ FAIL";
        console.log(`${tag} (${ms}ms)`);
        for (const d of r.details) console.log(`      ${d}`);
      }
      if (r.status === "pass") pass++;
      else if (r.status === "skip") skip++;
      else fail++;
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      const ms = Date.now() - t0;
      results.push({ id: c.id, status: "fail", ms, details: [msg] });
      if (!JSON_OUT) {
        console.log(`✗ FAIL (error)`);
        console.log(`      ${msg}`);
      }
      fail++;
    }
  }

  if (JSON_OUT) {
    console.log(
      JSON.stringify(
        {
          persona: PERSONA,
          personaName,
          totalMemories: total,
          summary: { pass, fail, skip, total: filtered.length },
          results,
        },
        null,
        2
      )
    );
  } else {
    console.log(
      `\n${pass} passed · ${fail} failed · ${skip} skipped · ${filtered.length} total\n`
    );
  }
  process.exit(fail === 0 ? 0 : 1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
