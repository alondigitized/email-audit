# Audit types — contract for refactors

There are **three** audit types in etell. Each one has a distinct
**producer**, a distinct **prompt**, and a distinct **rendering
contract**. Refactoring "the audit IA" without looking at all three
will leave one of them broken.

This doc is the canonical reference. **Every PR that changes audit
content, sections, scoring, or rendering must update this table.**

## The matrix

| Type | Producer | Prompt lives in | Persona-voice prose? | Hero visual | Renders via | What it answers | Personas iterated |
|---|---|---|---|---|---|---|---|
| `email` | `email-monitor/index.mjs` | `buildContentPrompt` | yes — Overview / Worked / Didn't / I'd change | screenshot of rendered email | `CollapsibleReview` | Would *this persona* open + click this email? | every active persona with `profile.audit_kinds` including `'email'` (default for legacy rows) |
| `site` | `site-monitor/homepage/sweep.mjs` + `site-monitor/site-review.mjs` | `generateReview` content prompt | yes — same Overview/Worked/Didn't/I'd change shape | screenshot strip per journey step | `CollapsibleReview` + journey strip | What did this persona experience walking through this homepage? | every active persona with `profile.journey.site` set AND `profile.audit_kinds` including `'site'` (default for legacy rows). See `audit-pipeline/publish.mjs::listActivePersonasWithSite`. |
| `inventory` | `site-monitor/inventory/audit.mjs` | inline narrative prompt | **caption-style**, short — interprets the matrix | **coverage matrix (category × size heatmap)** + variant grid + CSV | matrix card + narrative card + variant card (NOT CollapsibleReview) | What's missing from this category's size run that a merchandiser should restock? | the four hard-coded inventory personas (`ivy-inventory`, `ian-inventory`, `ida-inventory`, `ike-inventory`), each stamped `profile.audit_kinds: ['inventory']` so the email + homepage producers leave them alone. |

## Audit-kind opt-in

Personas declare which producers iterate them via `profile.audit_kinds`
(see `site/lib/schema/persona.mjs::personaAuditKindSchema`). The field is
optional — when missing, legacy back-compat says **`['email', 'site']`**
(the historical implicit behavior). Set it explicitly for any persona
that wants in or out of a non-default producer.

| Persona type | `profile.audit_kinds` |
|---|---|
| Brand-customer persona with inbox + homepage | omit (legacy default) or `['email', 'site']` |
| Brand-customer persona, email-only | `['email']` |
| Industry-critic persona (no inbox) | omit — industry personas don't have a journey.site so the sweep already skips them |
| Inventory-producer persona | `['inventory']` (mandatory; without this they get caught by the homepage sweep too) |

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
- [ ] **`audit_kinds` opt-in** — if you're adding a new producer or a new persona shape, does the persona-list query for the new producer filter on `profile.audit_kinds`?
- [ ] **This doc** — table updated to reflect the new state?

## Adding a fourth audit type

If you're adding a new audit type:

1. Add it to `auditTypeSchema` enum in `site/lib/schema/audit.mjs`. TypeScript will then list every site that branches on type — fix each one.
2. Add it to `personaAuditKindSchema` enum in `site/lib/schema/persona.mjs` so personas can opt in via `profile.audit_kinds`.
3. Add a row to the matrix above. Specify which personas the producer iterates and how the new field gates it.
4. Decide whether it uses `CollapsibleReview` (prose-first) or builds its own rendering surface (visualization-first).
5. Add score labels in `site/lib/score-labels.ts` if the funnel steps differ from open/click or engage/conversion.
6. Add the producer's prompt to the refactor checklist.
7. Backfill `audit_kinds` on existing personas if the new type should default-on for them; otherwise leave it opt-in.
