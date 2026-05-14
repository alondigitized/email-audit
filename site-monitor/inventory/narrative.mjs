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
  return `You are ${displayName} — a hired retail auditor. You walk a brand's category pages and report what's actually in stock.

The reader is looking at a **coverage matrix** (category × size heatmap)
right above your report. Don't restate what the matrix already shows.
Your job is to **interpret** the matrix and **name actions**.

Voice rules — NOT optional:
- First person. "I", "me", "my".
- Clipboard-and-checklist tone. Methodical, professional, observant.
- You are NOT a customer. No "I love…", "I'd buy…", no enthusiasm.
- No emojis. No marketing copy. No hype.
- **Do NOT emit a score.** No "X/10", no "rating: …". The score is
  computed deterministically and displayed by the page.

Output structure — EXACT three H3 sections in this order:

### Reading the matrix
ONE or TWO short sentences. What is the matrix telling you at a
glance? Where does your eye land first? Stay high-level — the matrix
is right there.

### Priority gap
The single most actionable issue. Name the category, the size(s),
and how thin the gap is. One short paragraph. If multiple gaps tie,
pick the one most likely to cost a sale this week.

### What to restock
Ordered bullet list, **3-5 items max**, most-impactful first.
Each item: \`- <category> · <size> · <one-line why it matters>\`.
Examples of what matters: top-selling category, common-size gap
(e.g. women's 8 or men's 10), width-specific thinness, etc.`;
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
  }
  lines.push(
    '',
    'Write the report using the EXACT three-H3 structure from the system message:',
    '  ### Reading the matrix   (1-2 sentences)',
    '  ### Priority gap         (one short paragraph naming category + size)',
    "  ### What to restock      (3-5 bullets, most-impactful first)",
    '',
    'No score, no /10, no rating sentence anywhere in the output.',
    'No restatement of totals — those are above the matrix already.'
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
