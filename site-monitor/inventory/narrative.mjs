// Ivy's secret-shopper voice. Runs after the scrape completes and turns
// the structured inventory blob into a first-person POV report. Same
// LLM endpoint everything else uses (LLM_BASE_URL, LLM_API_KEY,
// LLM_CHAT_MODEL — defaults match audit-pipeline/embed.mjs and
// site/lib/chat/provider.ts).
//
// Voice rules: Ivy is a hired retail auditor, not a customer. She does
// not gush, does not get excited, does not roleplay shopping. She
// counts, tallies, calls out patterns, names the worst offenders. The
// prompt below is what enforces that.

const DEFAULT_BASE = 'http://localhost:11434/v1';
const DEFAULT_MODEL = 'llama3.1:8b';

function cfg() {
  return {
    baseUrl: process.env.LLM_BASE_URL ?? DEFAULT_BASE,
    apiKey: process.env.LLM_API_KEY ?? 'ollama',
    model: process.env.LLM_CHAT_MODEL ?? DEFAULT_MODEL,
  };
}

function buildSystem(displayName) {
  return `You are ${displayName} — a hired retail auditor. Your job is **size-coverage analysis** for the brand's catalog. You walk every category, count what's in stock, and report patterns by size and by width.

The reader sees a **coverage matrix** (category × size heatmap) right
above your report and a **variant detail grid** (per color/width × size)
below it. Your job is to add what the visuals CAN'T show alone:
**which size patterns repeat across categories**, **which widths are
chronically thin**, **which categories deserve restock priority**.
Reference specific category names, specific sizes, specific widths
throughout. Numbers are good. Verbatim category names matter.

Voice rules — NOT optional:
- First person. "I", "me", "my".
- Clipboard-and-checklist tone. Methodical, professional, observant.
- You are NOT a customer. No "I love…", "I'd buy…", no enthusiasm.
- No emojis. No marketing copy. No hype.
- **Do NOT emit a score.** No "X/10", no "rating: …". The score is
  computed deterministically and displayed by the page.

Output structure — EXACT three H3 sections in this order:

### Coverage read
A short paragraph (3-5 sentences) calling out the pattern across
categories. Name the strongest-covered categories and the weakest
ones by name (e.g. "Hands Free Slip-ins is healthy at 78%; Slip-Ons
is the floor at 46%"). Call out any width-specific pattern (e.g.
"Wide is thin across the men's catalog — most Wide variants are
missing two or more sizes"). Call out common-size gaps that
repeat across categories (e.g. "Size 6.5 and 14.0 are gone in
three out of five categories").

### Worst offenders
Identify the 2-3 weakest categories. For each:
- Lead with the category name + its coverage %.
- Name the specific missing sizes that hurt it most (e.g. "11.5,
  14.0, 15.0 absent across all Wide variants").
- Note width-specific thinness if any.
One short paragraph per category, or a tight bulleted block.

### What to restock
Ordered bullet list, **5-8 items**, most-impactful first.
Each item: \`- <category> · <size or size range> · <width if relevant> · <one-line why it matters>\`.
Prefer high-volume categories with common-size gaps (men's 9-11,
women's 7-9) over edge sizes. If a width is chronically thin across
multiple categories, call that out as a single horizontal item
(e.g. "Wide widths across men's catalog · all categories · suspect
allocation issue, not stock-out").`;
}

function buildUserPrompt({ scope, totals, plps }) {
  const pct = (totals.avg_size_coverage * 100).toFixed(1);
  const lines = [
    `Inventory audit results — ${scope}.`,
    ``,
    `Totals: ${totals.plps_audited} categories audited, ${totals.styles} styles examined, ${totals.variants} (style, color, width) variants.`,
    `Average size coverage across variants: ${pct}%.`,
    `Failed categories: ${totals.plps_failed}.`,
    ``,
    `Per-category breakdown:`,
  ];
  for (const p of plps) {
    if (p.error) {
      lines.push(`- ${p.category}: PLP fetch failed (${p.error.slice(0, 80)})`);
      continue;
    }
    let v = 0;
    let cov = 0;
    let denom = 0;
    const missingSizes = new Map();
    const widthsSeen = new Set();
    for (const s of p.styles) {
      for (const x of s.variants) {
        v++;
        if (x.width) widthsSeen.add(x.width);
        if (x.total_count > 0) {
          cov += x.available_count / x.total_count;
          denom++;
        }
        for (const sz of x.sizes) {
          if (!sz.available) {
            missingSizes.set(sz.size, (missingSizes.get(sz.size) ?? 0) + 1);
          }
        }
      }
    }
    const cPct = denom > 0 ? ((cov / denom) * 100).toFixed(0) : '—';
    const top3Missing = [...missingSizes.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([sz, n]) => `${sz} (gone in ${n} variants)`)
      .join(', ');
    const widthStr = widthsSeen.size > 0 ? ` widths: ${[...widthsSeen].join('/')}.` : '';
    lines.push(
      `- ${p.category}: ${p.styles.length} styles, ${v} variants, ${cPct}% avg coverage.${widthStr} Most-missing sizes: ${top3Missing || 'n/a'}`
    );
    // Per-style position within the merchandised order. Position is
    // leverage: a stocked-out style at position #1 of a category is a
    // wasted top slot, which matters far more than the same gap at #12.
    for (const s of p.styles) {
      let sCov = 0;
      let sDen = 0;
      for (const x of s.variants) {
        if (x.total_count > 0) { sCov += x.available_count / x.total_count; sDen++; }
      }
      const sPct = sDen > 0 ? ((sCov / sDen) * 100).toFixed(0) : '—';
      lines.push(`    · position #${s.rank} in ${p.category}: ${s.name} — ${sPct}% size coverage`);
    }
  }
  lines.push(
    '',
    'Write the report using the EXACT three-H3 structure from the system message:',
    '  ### Coverage read     (3-5 sentences, name categories + width pattern + common-size gaps)',
    '  ### Worst offenders   (2-3 weakest categories with names, %, specific missing sizes)',
    "  ### What to restock   (5-8 bullets, each: category · size(s) · width · why)",
    '',
    'Use specific category names, specific sizes, specific widths. Numbers help.',
    'When you name a style, state its merchandised position in its category',
    '(e.g. "position #2 in Sale — Top of Rack") — a gap high on the page wastes',
    'prime real estate and outranks the same gap further down.',
    'No score, no /10, no rating sentence anywhere.',
    'No restatement of grand totals — those are above the matrix already.'
  );
  return lines.join('\n');
}

export async function generateNarrative(input) {
  const { baseUrl, apiKey, model } = cfg();
  const userPrompt = buildUserPrompt(input);
  const displayName = input.displayName ?? 'Ivy Inventory';
  const body = {
    model,
    messages: [
      { role: 'system', content: buildSystem(displayName) },
      { role: 'user', content: userPrompt },
    ],
    temperature: 0.4,
    stream: false,
  };
  const url = `${baseUrl.replace(/\/$/, '')}/chat/completions`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const t = await res.text().catch(() => '');
    throw new Error(`narrative: HTTP ${res.status} — ${t.slice(0, 200)}`);
  }
  const data = await res.json();
  const content = data?.choices?.[0]?.message?.content;
  if (!content || typeof content !== 'string') {
    throw new Error('narrative: empty completion');
  }
  return content.trim();
}
