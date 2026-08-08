# QA Secret Shopper Squad

Greenfield quality assurance on skechers.com — functional, content, SEO and
accessibility — producing *defects* that a human reviews and files by hand
into Skechers' internal feedback program.

## Why the human step is not optional

Defects are filed into **"See Something? SAY Something! Skechers.com Site
Experience Feedback"** — a live Smartsheet program that, when we inspected it,
held roughly **15 items total** filed by **four named Skechers employees**.

Two consequences shape this whole design:

1. **A wrong report costs real credibility.** These land with people, not a
   bug tracker. Nothing is filed automatically.
2. **Volume is a threat in its own right.** A four-persona squad sweeping
   daily could out-produce that program's lifetime volume in a week and bury
   the High-urgency item someone actually needs. Be sparing.

The intake form is also reCAPTCHA-protected. We deliberately do **not**
automate around that — the captcha is a control Skechers installed, and
defeating it would forfeit exactly the credibility this design protects.
Filing is manual; the queue makes it copy-paste.

## The squad

| Persona | Lens | Category |
|---|---|---|
| `quinn-qa` — Quinn Flow | Functional journeys; broken paths, dead ends, bad search | `functional` |
| `cora-qa` — Cora Copy | Typos, placeholders, promo/price contradictions | `copy` |
| `sergio-qa` — Sergio Index | Titles, canonical, structured data, H1, alt | `seo` |
| `ada-qa` — Ada Access | Serious/critical axe violations, keyboard, contrast, LCP/CLS | `accessibility` |

Defined in `personas.json`, seeded into the `persona` table (tenant
`skechers`, kind `brand`) by `seed-personas.mjs`.

## Pipeline

```
sweep.mjs        Playwright visits each route once, captures evidence
                 (screenshot, console/network errors, axe, SEO head, text),
                 then each persona's lens turns evidence into candidates.
                 Deterministic dedupe runs at insert.
                   -> defect rows at status='candidate'

verify.mjs       Independently RE-TESTS every candidate against the live page.
                 Deterministic, NOT an LLM — an LLM asked "is this still
                 broken?" tends to agree with itself.
                   reproduced   -> 'verified'
                   unverifiable -> 'verified'  (flagged; see below)
                   not reproduced / partial -> 'refuted' (never seen by a human)

adjudicate.mjs   Adversarial agent. Answers a different question than verify:
                 not "is it still happening?" but "is it worth filing, and
                 have we filed it already?". Prompted to REJECT by default.
                   file      -> stays 'verified', reaches the queue
                   reject    -> 'rejected'   (reason recorded)
                   duplicate -> 'suppressed' (semantic dupe of prior art)

/admin/defect-queue    Human approves / rejects / suppresses. Approved items
                       render as a copy-ready form payload. You file it and
                       click "Mark filed".
```

Run them in order: `sweep` → `verify --apply` → `adjudicate --apply`.

### Why `unverifiable` survives

If the verifier has no re-check strategy for a claim, that means *we can't
check it* — not that it's false. Refuting those would silently discard true
findings and quietly hollow out the sweep. They pass to a human, clearly
flagged. The human is the gate before Skechers either way.

Partial reproduction (`inconclusive`) **is** refuted — that's the flaky
signal we're filtering.

## Credibility controls

- **Evidence is mandatory.** The intake form requires a screenshot;
  `validateDefect()` enforces it before a row is written.
- **Form vocabulary is enforced.** Location / Area / Device / Browser /
  Urgency must match the live form's dropdowns exactly or the row is rejected.
  Source of truth is `site/lib/db/schema.ts`; `audit-pipeline/defects.mjs`
  mirrors it for the `.mjs` side.
- **Dedupe by class, two layers.**
  1. *Deterministic, at insert.* `dedupe_key` = `persona | area | normalised
     URL path | defect_type`. Nothing model-authored enters the hash.
     **This matters:** the first implementation hashed a free-text
     `signature` the model emitted per finding, and it did not work — two
     sweeps of one page produced four rows, because the model phrased the
     same defect differently each run. `defect_type` comes from a fixed list
     (`DEFECT_TYPES`) precisely so the fingerprint is stable. Verified: a
     second sweep of the same page now reports `skippedDuplicate`.
  2. *Component-level.* Global nav, the offer drawer and the country-selector
     modal render on every page, so a URL-scoped key files the same bug once
     per page — the first full sweep produced 12 rows for 4 real issues.
     `component_key` fingerprints the component itself (element srcs /
     selectors, ignoring URL) and extra pages accumulate in `also_seen_on`,
     so the surviving report reads "site-wide, also on N pages".
  3. *Semantic, in the adjudicator.* Catches what neither key can — the same
     nav described with different selectors, or a text typo with no elements.
     It sees prior art of the same defect_type across **all** URLs.

  **A duplicate must point at a LIVE report.** An earlier version let rows
  duplicate against already-suppressed siblings, and entire defect types
  (axe_violation, missing_alt, the 'Deuschland' typo) collapsed to zero
  survivors. Prior art for duplicate detection is now restricted to
  verified/approved/submitted; previously-declined items are shown separately
  and can only justify a *reject*, never a *duplicate*.

  Suppressing one row suppresses the whole class forever, so the same issue
  never re-files sweep after sweep.
- **Refutation before review.** Flaky findings die without costing you time.
- **Approval is guarded on `status='verified'`** — an unverified candidate
  cannot be approved even by clicking fast.

## Commands

```bash
# Sweep (dry run prints what it would file, writes nothing)
node site-monitor/qa/sweep.mjs --dry-run
node site-monitor/qa/sweep.mjs --persona sergio-qa --max-routes 1
node site-monitor/qa/sweep.mjs

# Refutation pass (deterministic re-test)
node site-monitor/qa/verify.mjs                 # dry run
node site-monitor/qa/verify.mjs --apply --runs 2

# Adjudicator (adversarial agent — worth filing? already filed?)
node site-monitor/qa/adjudicate.mjs             # dry run
node site-monitor/qa/adjudicate.mjs --apply

# Personas
node site-monitor/qa/seed-personas.mjs --apply

# Demo data for the queue UI
node site-monitor/qa/seed-fixture-defects.mjs --apply
node site-monitor/qa/seed-fixture-defects.mjs --clean
```

Then review at `/admin/defect-queue`.

## Scope (v1)

Public surfaces only — Homepage, Site search, PLP, PDP. `Cart`, `Checkout`,
`MyAccount / Order History` and `Loyalty Dashboard` are valid form Areas but
need an authenticated session and write actions, so they stay out until the
queue has earned trust.

## Known gaps

- No submission automation (deliberate — see above). If Skechers grants a
  **Smartsheet API token**, that is the right integration: structured rows,
  attachment upload, no captcha, no scraping. Slot it in behind
  `markSubmittedAction`.
- No weekly submission budget yet. Given the program's ~15-item lifetime
  volume, a cap is worth adding before the squad runs daily.
- The form's **Browser dropdown only offers "Chrome" and "Mac OS Sonoma"** —
  an OS in a browser list. We submit `Chrome`. Worth flagging to the sheet's
  owner.
- No per-persona precision tracking yet (accepted vs rejected over time),
  which is how credibility becomes measurable rather than asserted. The
  `adjudication` column already records every machine rejection with a
  reason, so the data to build it is accumulating.
- Quinn (functional) finds little, by design: the sweep only *observes* pages,
  it never clicks, filters or adds to cart, so there is almost nothing for a
  functional lens to catch beyond errors present at load. Making Quinn useful
  means driving real interactions, like site-review.mjs does.
- PDP coverage only started working once the product-URL pattern was fixed
  (`/{slug}/{style}_{color}.html`); earlier sweeps silently skipped it.
