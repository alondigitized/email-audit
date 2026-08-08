// Writer for the opportunity board.
//
// Used by producer-side journeys (merchandiser/marketer personas) and batch
// synthesis. Everything lands at status='hypothesis' — the machine proposes,
// a human promotes on /brands/{slug}. That trust boundary is not optional.

import { neon } from '@neondatabase/serverless';

function db() {
  const url = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL_UNPOOLED or DATABASE_URL required');
  return neon(url);
}

/**
 * Insert opportunities with their evidence trail.
 *
 * rows: [{ brandSlug, title, thesis, impact, category, confidence, metrics,
 *          createdBy, evidence: [{ experienceId?, defectId?, note? }] }]
 *
 * Near-duplicate guard: a brand's OPEN opportunities (hypothesis/validated/
 * presented) are compared by normalised title — persona journeys repeat, and
 * "Improve PLP badge strategy" proposed every run would flood the board the
 * same way un-deduped defects flooded the queue. Matching titles are skipped;
 * refining an existing opportunity is a human edit, not a re-file.
 */
export async function insertOpportunities(rows) {
  const sql = db();
  const out = { inserted: 0, skippedSimilar: 0 };
  if (!rows?.length) return out;

  const norm = (t) =>
    String(t || '')
      .toLowerCase()
      .replace(/[^a-z0-9 ]+/g, '')
      .split(/\s+/)
      .filter((w) => w.length > 3)
      .sort()
      .join(' ');

  for (const r of rows) {
    const existing = await sql`
      SELECT title FROM opportunity
      WHERE brand_slug = ${r.brandSlug}
        AND status IN ('hypothesis', 'validated', 'presented')`;
    const mine = norm(r.title);
    const similar = existing.some((e) => {
      const theirs = norm(e.title);
      if (!mine || !theirs) return false;
      const a = new Set(mine.split(' '));
      const b = new Set(theirs.split(' '));
      const overlap = [...a].filter((w) => b.has(w)).length;
      return overlap / Math.max(a.size, b.size) >= 0.6;
    });
    if (similar) {
      out.skippedSimilar += 1;
      continue;
    }

    const [opp] = await sql`
      INSERT INTO opportunity
        (brand_slug, title, thesis, impact, category, confidence, metrics, created_by)
      VALUES
        (${r.brandSlug}, ${String(r.title).slice(0, 200)},
         ${String(r.thesis).slice(0, 3000)}, ${String(r.impact ?? '').slice(0, 2000)},
         ${r.category ?? null},
         ${typeof r.confidence === 'number' ? r.confidence : null},
         ${JSON.stringify(r.metrics ?? {})}::jsonb,
         ${r.createdBy ?? 'synthesis'})
      RETURNING id`;

    for (const ev of (r.evidence ?? []).slice(0, 25)) {
      const kind = ev.experienceId ? 'experience' : ev.defectId ? 'defect' : 'stat';
      await sql`
        INSERT INTO opportunity_evidence (opportunity_id, kind, experience_id, defect_id, note)
        VALUES (${opp.id}, ${kind}, ${ev.experienceId ?? null}, ${ev.defectId ?? null},
                ${ev.note ? String(ev.note).slice(0, 500) : null})`;
    }
    out.inserted += 1;
  }
  return out;
}
