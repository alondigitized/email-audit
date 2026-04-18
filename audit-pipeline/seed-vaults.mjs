#!/usr/bin/env node
// One-shot: seed vaults/{persona}/README.md from site-monitor/personas/{slug}.json.
// Skips if a README already exists so human edits are preserved.

import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const REPO = path.resolve(__dirname, '..');
const PERSONAS_DIR = path.join(REPO, 'site-monitor', 'personas');
const VAULTS_DIR = path.join(REPO, 'vaults');

function personaMd(slug, p) {
  return [
    '---',
    `slug: ${slug}`,
    `name: ${yaml(p.name ?? slug)}`,
    p.age ? `age: ${p.age}` : null,
    p.generation ? `generation: ${yaml(p.generation)}` : null,
    p.gender ? `gender: ${yaml(p.gender)}` : null,
    '---',
    '',
    `# ${p.name ?? slug}`,
    '',
    oneLiner(p),
    '',
    '## Focus areas',
    ...(Array.isArray(p.focus_areas) && p.focus_areas.length
      ? p.focus_areas.map((f) => `- ${f}`)
      : ['_(none defined)_']),
    '',
    '## Shopping habits',
    p.shopping_habits ? p.shopping_habits : '_(none defined)_',
    '',
    '## Tech comfort',
    p.tech_comfort ? p.tech_comfort : '_(none defined)_',
    '',
    '## Journey hints',
    p.search_term ? `- Primary search term: \`${p.search_term}\`` : null,
    Array.isArray(p.category_path) && p.category_path.length
      ? `- Category path: ${p.category_path.join(' > ')}`
      : null,
    p.site ? `- Site: ${p.site}` : null,
    '',
    '---',
    '',
    'This file is the persona\'s identity card. The pipeline does not overwrite it — treat as human-maintained canon. Per-audit notes live under `audits/`.',
    '',
  ]
    .filter((l) => l !== null)
    .join('\n');
}

function oneLiner(p) {
  const bits = [];
  if (p.age) bits.push(`${p.age}`);
  if (p.generation) bits.push(p.generation);
  if (p.gender) bits.push(p.gender.toLowerCase());
  const desc = bits.join(' · ');
  return p.style ? `${desc} — ${p.style}` : desc;
}

function yaml(s) {
  if (!/[:#"'\n]/.test(s)) return s;
  return `"${String(s).replace(/"/g, '\\"')}"`;
}

function writeTopLevelReadme() {
  const p = path.join(VAULTS_DIR, 'README.md');
  if (fs.existsSync(p)) return;
  fs.mkdirSync(VAULTS_DIR, { recursive: true });
  fs.writeFileSync(
    p,
    [
      '# Persona brains',
      '',
      'Each subdirectory is a persona\'s Obsidian-compatible vault — accumulated memory from every audit they\'ve experienced.',
      '',
      '## How to open',
      '',
      'Obsidian → Open folder as vault → select the persona\'s subdirectory (not this one).',
      '',
      '## Why this matters',
      '',
      'Swapping model vendors stays cheap. Rebuilding a persona\'s 18-month audit history does not. The vault is the durable asset.',
      '',
      '## Contents',
      '',
      '- `{persona}/README.md` — identity card (human-maintained)',
      '- `{persona}/audits/{slug}.md` — one note per audit (pipeline-written)',
      '',
    ].join('\n'),
  );
}

function main() {
  if (!fs.existsSync(PERSONAS_DIR)) {
    console.error(`no personas dir at ${PERSONAS_DIR}`);
    process.exit(1);
  }
  writeTopLevelReadme();

  const files = fs
    .readdirSync(PERSONAS_DIR)
    .filter((f) => f.endsWith('.json'));
  let wrote = 0;
  let skipped = 0;
  for (const f of files) {
    const slug = path.basename(f, '.json');
    const data = JSON.parse(fs.readFileSync(path.join(PERSONAS_DIR, f), 'utf8'));
    const dir = path.join(VAULTS_DIR, slug);
    fs.mkdirSync(dir, { recursive: true });
    const dst = path.join(dir, 'README.md');
    if (fs.existsSync(dst)) {
      console.log(`skip   ${slug}/README.md (already present)`);
      skipped++;
      continue;
    }
    fs.writeFileSync(dst, personaMd(slug, data));
    console.log(`write  ${slug}/README.md`);
    wrote++;
  }
  console.log(`\ndone. ${wrote} created, ${skipped} skipped.`);
}

main();
