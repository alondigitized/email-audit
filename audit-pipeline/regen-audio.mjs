import fs from 'fs';
import { neon } from '@neondatabase/serverless';
import { generateAndPublishAudio } from './audio-publish.mjs';

function loadEnv(p) {
  if (!fs.existsSync(p)) return;
  for (const line of fs.readFileSync(p, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (!m) continue;
    let v = m[2];
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
    if (process.env[m[1]] === undefined) process.env[m[1]] = v;
  }
}
loadEnv('/Users/alontsang/.openclaw-walker/workspace/email-monitor/.env');
loadEnv('/Users/alontsang/.openclaw-walker/workspace/site/.env.local');

const sql = neon(process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL);
let target = process.argv[2];
if (!target) {
  const rows = await sql`
    SELECT r.slug FROM reaction r
    JOIN experience e ON e.id = r.experience_id
    JOIN persona p ON p.slug = r.persona_slug
    WHERE p.kind = 'brand' AND e.type = 'email'
    ORDER BY e.received_at DESC LIMIT 1`;
  if (!rows[0]) { console.log('no reactions'); process.exit(0); }
  target = rows[0].slug;
}

const [row] = await sql`
  SELECT r.slug, r.persona_slug, r.review_data, e.email_data
  FROM reaction r JOIN experience e ON e.id = r.experience_id
  WHERE r.slug = ${target} LIMIT 1`;
if (!row) { console.log('no row for', target); process.exit(1); }

const artifactDir = `/Users/alontsang/.openclaw-walker/workspace/reports/email-artifacts/${row.slug}`;
console.log('regenerating audio for', row.slug, '→', row.persona_slug);
const out = await generateAndPublishAudio({
  slug: row.slug,
  persona: row.persona_slug,
  sections: row.review_data?.sections ?? {},
  email: row.email_data ?? {},
  artifactDir: fs.existsSync(artifactDir) ? artifactDir : null,
  force: true,
});
console.log('result:', JSON.stringify(out, null, 2));
