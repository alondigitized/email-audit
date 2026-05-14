# Audit types — contract for refactors

There are **three** audit types in etell. Each one has a distinct
**producer**, a distinct **prompt**, and a distinct **rendering
contract**. Refactoring "the audit IA" without looking at all three
will leave one of them broken.

This doc is the canonical reference. **Every PR that changes audit
content, sections, scoring, or rendering must update this table.**

## The matrix

| Type | Producer | Prompt lives in | Persona-voice prose? | Hero visual | Renders via | What it answers |
|---|---|---|---|---|---|---|
| `email` | `email-monitor/index.mjs` | `buildContentPrompt` | yes — Overview / Worked / Didn't / I'd change | screenshot of rendered email | `CollapsibleReview` | Would *this persona* open + click this email? |
| `site` | `site-monitor/site-review.mjs` | `generateReview` content prompt | yes — same Overview/Worked/Didn't/I'd change shape | screenshot strip per journey step | `CollapsibleReview` + journey strip | What did this persona experience walking through this homepage? |
| `inventory` | `site-monitor/inventory/audit.mjs` | inline narrative prompt | **caption-style**, short — interprets the matrix | **coverage matrix (category × size heatmap)** + variant grid + CSV | matrix card + narrative card + variant card (NOT CollapsibleReview) | What's missing from this category's size run that a merchandiser should restock? |

## Why these are different (not "one prompt with flags")

- **Email** and **site** are both **prose-first** audits where the
  persona's first-person reaction is the product. The Overview /
  What worked / What didn't / What I'd change IA fits both because
  the rendered email and the rendered homepage are both *creative
  surfaces being judged*.
- **Inventory** is **visualization-first**. The matrix is the
  product; the persona's narrative is a caption that interprets
  what the matrix shows. The IA inverts: short prose, no scoring
  rubric in the narrative (score is computed deterministically
  from `avg_size_coverage`), focus on **gaps + restock priorities**.

## Refactor checklist (paste into every audit-IA PR description)

When you change anything about audit content, scoring, sections, or
rendering, **check each row** of this table:

- [ ] **Email producer** — `email-monitor/index.mjs::buildContentPrompt` updated?
- [ ] **Industry-fanout copy** — `audit-pipeline/backfill-industry-fanout.mjs::buildContentPrompt` matches?
- [ ] **Site producer** — `site-monitor/site-review.mjs` content prompt updated?
- [ ] **Inventory producer** — `site-monitor/inventory/audit.mjs` narrative prompt — **does the change make sense for an inventory audit, or should inventory keep its current shape?**
- [ ] **Parser** — `audit-pipeline/extract.mjs::SECTION_HEADINGS` recognizes new section names?
- [ ] **Renderer (email + site)** — `site/app/audits/[slug]/CollapsibleReview.tsx` labels?
- [ ] **Renderer (inventory)** — `site/app/audits/[slug]/AuditBody.tsx` inventory branch + `InventoryHeatmap` + `InventoryPane` — does it still make sense?
- [ ] **Score labels** — `site/lib/score-labels.ts` covers the type?
- [ ] **TTS narration** — `audit-pipeline/tts.mjs::buildSpokenScript` narrates the right sections?
- [ ] **Schema** — `site/lib/schema/audit.mjs::reviewSectionsSchema` includes any new keys?
- [ ] **This doc** — table updated to reflect the new state?

## Adding a fourth audit type

If you're adding a new audit type:

1. Add it to `auditTypeSchema` enum in `site/lib/schema/audit.mjs`. TypeScript will then list every site that branches on type — fix each one.
2. Add a row to the matrix above.
3. Decide whether it uses `CollapsibleReview` (prose-first) or builds its own rendering surface (visualization-first).
4. Add score labels in `site/lib/score-labels.ts` if the funnel steps differ from open/click or engage/conversion.
5. Add the producer's prompt to the refactor checklist.
