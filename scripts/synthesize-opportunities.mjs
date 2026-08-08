#!/usr/bin/env node
/**
 * Opportunity synthesis for one brand.
 *
 * Gathers everything the system knows about a brand across channels —
 * email review scores and their worst offenders, live QA defects, inventory
 * availability, QA journey narratives, peer benchmarks — and asks the model
 * to propose OPPORTUNITIES: evidence-backed theses about what the brand
 * should fix or exploit, with a stated business impact.
 *
 * Everything lands at status='hypothesis'. Nothing is shown as validated
 * until a human promotes it on /brands/{slug} — the same trust boundary the
 * defect queue uses, one level up.
 *
 *   node scripts/synthesize-opportunities.mjs --brand skechers            # dry run
 *   node scripts/synthesize-opportunities.mjs --brand skechers --apply
 *   node scripts/synthesize-opportunities.mjs --brand skechers --peers nike,adidas,newbalance --apply
 */
import path from 'node:path';
import { execFile } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import dotenv from '../site-monitor/node_modules/dotenv/lib/main.js';
import { neon } from '../audit-pipeline/node_modules/@neondatabase/serverless/index.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '..', 'email-monitor', '.env') });

const argOf = (f) => {
  const i = process.argv.indexOf(f);
  return i === -1 ? null : process.argv[i + 1];
};
const BRAND = argOf('--brand');
const PEERS = (argOf('--peers') || '').split(',').map((s) => s.trim()).filter(Boolean);
const APPLY = process.argv.includes('--apply');
const CLAUDE_BIN = process.env.CLAUDE_BIN || '/Users/alontsang/.local/bin/claude';

if (!BRAND) {
  console.error('usage: synthesize-opportunities.mjs --brand <slug> [--peers a,b,c] [--apply]');
  process.exit(1);
}
const sql = neon(process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL);
const log = (m, e) => console.log(`[${new Date().toISOString()}] ${m}${e ? ' ' + JSON.stringify(e) : ''}`);

// ── evidence gathering ────────────────────────────────────────────────────

const brandRow = (await sql`SELECT slug, name, domains FROM brand WHERE slug = ${BRAND} LIMIT 1`)[0];
if (!brandRow) { console.error(`brand '${BRAND}' not found`); process.exit(1); }

const coverage = await sql`
  SELECT type, count(*)::int c, round(avg(rc.score),1) avg_score,
         min(received_at)::date since, max(received_at)::date until
  FROM experience e LEFT JOIN reaction rc ON rc.experience_id = e.id
  WHERE e.brand_slug = ${BRAND} GROUP BY 1 ORDER BY 2 DESC`;

const trend = await sql`
  SELECT date_trunc('month', received_at)::date m, round(avg(rc.score),1) s, count(*)::int n
  FROM experience e JOIN reaction rc ON rc.experience_id = e.id
  WHERE e.brand_slug = ${BRAND} AND e.type='email'
  GROUP BY 1 ORDER BY 1`;

const peerScores = PEERS.length
  ? await sql`
      SELECT e.brand_slug, round(avg(rc.score),1) s, count(*)::int n
      FROM experience e JOIN reaction rc ON rc.experience_id = e.id
      WHERE e.brand_slug = ANY(${PEERS}) AND e.type='email'
      GROUP BY 1`
  : [];
const globalAvg = (await sql`
  SELECT round(avg(rc.score),1) s FROM experience e
  JOIN reaction rc ON rc.experience_id = e.id WHERE e.type='email'`)[0];

const worstEmails = await sql`
  SELECT rc.slug, rc.score, e.email_data->>'subject' subject, e.received_at::date d,
         left(rc.review_data->>'raw_markdown', 600) excerpt
  FROM experience e JOIN reaction rc ON rc.experience_id = e.id
  WHERE e.brand_slug = ${BRAND} AND e.type='email' AND rc.score IS NOT NULL
  ORDER BY rc.score ASC, e.received_at DESC LIMIT 8`;

// Live defects whose URL belongs to this brand (defects predate brand_slug).
const domains = brandRow.domains ?? [];
const defects = await sql`
  SELECT id, urgency, defect_type, area, url, description, business_impact,
         jsonb_array_length(affected_elements) els, status
  FROM defect
  WHERE status IN ('verified','approved','submitted')
  ORDER BY CASE urgency WHEN 'High' THEN 0 WHEN 'Medium' THEN 1 ELSE 2 END
  LIMIT 20`;
const brandDefects = defects.filter((d) => {
  try { return domains.some((dom) => new URL(d.url).hostname.endsWith(dom)); }
  catch { return false; }
});

const inventory = await sql`
  SELECT rc.slug, e.received_at::date d, e.inventory->'totals' totals
  FROM experience e JOIN reaction rc ON rc.experience_id = e.id
  WHERE e.brand_slug = ${BRAND} AND e.type='inventory'
  ORDER BY e.received_at DESC LIMIT 4`;

const qaJourneys = await sql`
  SELECT rc.slug, rc.score, left(rc.review_data->>'raw_markdown', 1200) narrative
  FROM experience e JOIN reaction rc ON rc.experience_id = e.id
  WHERE e.brand_slug = ${BRAND} AND e.type='qa'
  ORDER BY e.received_at DESC LIMIT 4`;

log('evidence gathered', {
  coverage: coverage.map((c) => `${c.type}=${c.c}`).join(' '),
  brandDefects: brandDefects.length,
  worstEmails: worstEmails.length,
  inventorySnapshots: inventory.length,
  qaJourneys: qaJourneys.length,
});

// ── synthesis prompt ──────────────────────────────────────────────────────

const prompt = [
  `You are a retail experience strategist. Your client relationship depends on`,
  `credibility: every opportunity you propose will be challenged by the brand's`,
  `own team, so a thesis without evidence — or with inflated impact — costs more`,
  `than proposing nothing. Propose FEWER, stronger opportunities.`,
  '',
  `=== BRAND: ${brandRow.name} (${BRAND}) ===`,
  `Channel coverage: ${coverage.map((c) => `${c.type}: ${c.c} experiences, avg score ${c.avg_score ?? '-'} (${c.since} → ${c.until})`).join('; ')}`,
  '',
  `Email score trend by month: ${trend.map((t) => `${String(t.m).slice(0, 7)}=${t.s}(n=${t.n})`).join(' ')}`,
  `Global average email score across all brands: ${globalAvg.s}`,
  PEERS.length ? `Peer email scores: ${peerScores.map((p) => `${p.brand_slug}=${p.s}(n=${p.n})`).join(' ')}` : '',
  '',
  `=== WORST-SCORING EMAILS (subject · score · review excerpt) ===`,
  ...worstEmails.map((w) => `--- [${w.slug}] "${w.subject}" · ${w.score}/10 · ${w.d}\n${w.excerpt}`),
  '',
  `=== LIVE SITE DEFECTS (verified by re-test, human-approved queue) ===`,
  brandDefects.length
    ? brandDefects.map((d) => `--- [defect:${d.id}] ${d.urgency} ${d.defect_type} on ${d.area} (${d.els} elements)\n${d.description}\nImpact: ${d.business_impact ?? '-'}`).join('\n')
    : '(none currently open)',
  '',
  `=== INVENTORY SNAPSHOTS (size-availability totals) ===`,
  inventory.length
    ? inventory.map((i) => `--- [${i.slug}] ${i.d}: ${JSON.stringify(i.totals)}`).join('\n')
    : '(none)',
  '',
  `=== QA SECRET-SHOPPER JOURNEYS ===`,
  qaJourneys.length
    ? qaJourneys.map((q) => `--- [${q.slug}] score ${q.score}\n${q.narrative}`).join('\n')
    : '(none)',
  '',
  `=== TASK ===`,
  `Propose 2-5 opportunities. Each must:`,
  `- Rest on evidence ABOVE (cite slugs/defect ids in evidence_refs — never invent).`,
  `- Cross channels where the data allows: an email pattern plus a site defect`,
  `  plus an inventory gap is one opportunity, not three.`,
  `- State impact concretely: who is affected, what behaviour changes, what it`,
  `  is plausibly worth. No "improves user experience" filler.`,
  `- Be actionable by the brand within a quarter.`,
  '',
  `Respond with ONLY a JSON array:`,
  `{`,
  `  "title": "short, specific",`,
  `  "thesis": "the claim: what is wrong/missing and what fixing it unlocks",`,
  `  "impact": "who is affected and what it costs / is worth",`,
  `  "category": "email" | "site" | "inventory" | "qa" | "cross-channel" | "competitive",`,
  `  "confidence": 0.0-1.0,`,
  `  "metrics": { "any_supporting_numbers": 0 },`,
  `  "evidence_refs": ["<experience slug>", "defect:<id>", ...],`,
  `  "stats": ["named statistic sentences derived from the data above"]`,
  `}`,
].filter(Boolean).join('\n');

function runClaude(p) {
  return new Promise((resolve, reject) => {
    const child = execFile(CLAUDE_BIN,
      ['-p', '--model', process.env.CLAUDE_MODEL || 'sonnet', '--effort', 'high',
       '--no-session-persistence', '--permission-mode', 'bypassPermissions'],
      { cwd: path.join(__dirname, '..'), maxBuffer: 1024 * 1024 * 20, timeout: 480000, env: { ...process.env } },
      (err, stdout) => (err ? reject(err) : resolve(stdout.trim()))
    );
    child.stdin.write(p);
    child.stdin.end();
  });
}

log('synthesizing…');
const raw = await runClaude(prompt);
let proposals = [];
{
  let t = raw;
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fence) t = fence[1];
  const s = t.indexOf('['), e = t.lastIndexOf(']');
  if (s !== -1 && e !== -1) { try { proposals = JSON.parse(t.slice(s, e + 1)); } catch { /* below */ } }
}
if (!Array.isArray(proposals) || !proposals.length) {
  console.error('no parseable proposals; raw output head:\n' + raw.slice(0, 400));
  process.exit(1);
}

// ── file at hypothesis with evidence trail ────────────────────────────────
for (const [i, p] of proposals.entries()) {
  console.log(`\n${i + 1}. [${p.category}] ${p.title} (confidence ${p.confidence})`);
  console.log(`   ${String(p.thesis).slice(0, 160)}`);
  console.log(`   impact: ${String(p.impact).slice(0, 140)}`);
  console.log(`   evidence: ${(p.evidence_refs ?? []).length} refs, ${(p.stats ?? []).length} stats`);
  if (!APPLY) continue;

  const [opp] = await sql`
    INSERT INTO opportunity (brand_slug, title, thesis, impact, category, confidence, metrics)
    VALUES (${BRAND}, ${String(p.title).slice(0, 200)}, ${String(p.thesis).slice(0, 3000)},
            ${String(p.impact ?? '').slice(0, 2000)}, ${p.category ?? null},
            ${typeof p.confidence === 'number' ? p.confidence : null},
            ${JSON.stringify(p.metrics ?? {})}::jsonb)
    RETURNING id`;

  for (const ref of (p.evidence_refs ?? []).slice(0, 25)) {
    const r = String(ref);
    if (r.startsWith('defect:')) {
      const id = r.slice(7);
      if (/^[0-9a-f-]{36}$/i.test(id)) {
        await sql`INSERT INTO opportunity_evidence (opportunity_id, kind, defect_id) VALUES (${opp.id}, 'defect', ${id})`;
      }
    } else {
      const exp = await sql`
        SELECT e.id FROM reaction rc JOIN experience e ON e.id = rc.experience_id
        WHERE rc.slug = ${r} LIMIT 1`;
      if (exp.length) {
        await sql`INSERT INTO opportunity_evidence (opportunity_id, kind, experience_id, note) VALUES (${opp.id}, 'experience', ${exp[0].id}, ${r})`;
      }
    }
  }
  for (const stat of (p.stats ?? []).slice(0, 10)) {
    await sql`INSERT INTO opportunity_evidence (opportunity_id, kind, note) VALUES (${opp.id}, 'stat', ${String(stat).slice(0, 500)})`;
  }
}

log(APPLY ? `filed ${proposals.length} opportunities at status=hypothesis` : 'DRY RUN — pass --apply to file');
