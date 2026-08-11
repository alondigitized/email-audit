# etell.app — Experience Intelligence Roadmap

**North star:** the best experience-intelligence platform, built on *realistic*
experience audits — session-based, render-first, human-paced, credibility-split —
proven publicly by winning the Skechers "See Something? SAY Something!" contest.

---

## Where we actually stand (measured 2026-08-10)

| Metric | Value |
|---|---|
| Findings **filed** to Smartsheet | **0** ← the only contest score |
| Findings staged file-ready | 3 (all human-found) |
| Machine findings that ever reached the human queue | 3 (of 16 proposed, lifetime) |
| Machine yield last night | 3 journeys / 15 min → 1 candidate → **0 survived** |
| One manual walk | → 5 findings, 3 file-ready |

**One human session out-produced the entire machine's lifetime output.** That is
the finding that should drive everything below.

### The credibility layer works — proven, not asserted

Last night ada-qa proposed a High-urgency `dead_control` on `/cart/`: *"clicked
Add to Cart, mini-cart still read 0."* The adjudicator voted **FILE**. That is
byte-for-byte the false positive Alon personally disproved by adding to cart by
hand. The `provenance=bot_flagged` quarantine caught it and it never reached the
queue. Phase 0 paid for itself in one night.

Note what this means: **the adjudicator cannot be the last line of defense.**
It reasons about plausibility, and the claim was plausible. Only the mechanical
provenance gate knew the session was compromised.

### The real bottleneck is SUPPLY, and it is a design problem

The machine isn't producing few findings because it's broken. It's producing few
findings because **it is doing the wrong kind of work.**

Agentic shopping journeys generate *interaction* findings ("I clicked and nothing
happened") — which are exactly the class that (a) gets quarantined whenever the
session is bot-flagged, and (b) can't be trusted when it isn't. Meanwhile every
finding a human actually validated was **observational**: read the rendered page,
compare it to something else, notice the mismatch. Observational findings need no
action to succeed, so they are immune to the bot flag entirely.

**Thesis: a human finds the pattern once; an engine finds every instance.**
That is the whole platform in one line, and it is what separates etell.app from a
bug scanner.

---

## Track A — Contest engine (this week)

**A1. File the three staged findings.** Human-gated by design. `/admin/defect-queue`
→ Approved: Deuschland typo, PDP price-transparency gap (92/92), color→size
stranding. Drip 2–3 the first day — the receiving program is four humans holding
~15 lifetime items; a dump reads like spam, a drip reads like a sharp colleague.

**A2. Stage the two remaining human-verified findings** → gets the filable set to 5.
- **Mobile full-screen popup wall** — Location *Mobile Site*, their biggest
  category (40% of program findings). Observational, screenshot-proven.
- **Offer-drawer scrim occluding Add to Cart** — render-only (button present in
  DOM, click swallowed by overlay). Screenshot-proven.

**A3. Build the observational ENGINES — this is how supply gets fixed.**
Each one productizes a pattern a human already validated. All are observational
(read the render, no cart writes) → immune to the bot flag → never quarantined.

| Engine | Productizes | Yield shape |
|---|---|---|
| **Variant-coverage sweep** | color→size stranding | For each product × each colorway, read the rendered size grid. Every colorway with a collapsed run is a distinct concrete finding. ~31 products × 3–8 colorways = **100–250 checks**; expect dozens of hits. |
| **Promo-coherence checker** | price-transparency gap | Capture banner promises (25% kids / up to 40% / 20% signup), then verify each on the pages it points to. Promos rotate near-daily → **fresh findings every day**, which is exactly what a contest rewards. |
| **Copy & locale sweep** | "Deuschland" | Enumerate every rendered string in long enumerated lists (country selector, size charts, nav, filters) and spell/consistency-check. Humans skim these; machines don't. |
| **Occlusion / overlay detector** | offer-drawer scrim, popup wall | Render-first: is an interactive element covered at its own click point? Catches what DOM-only checks structurally cannot see. |

Yield numbers above are estimates from the sampled catalog, not measured — the
variant sweep should be built first precisely because it's the cheapest to prove.

**A4. Close the loop.** Morning digest after the nightly run (counts + top
finding), `submitted` tracking, and watch the sheet's status column to measure
**acceptance rate** — the real quality score, and the number that makes
credibility demonstrable rather than claimed.

**A5. Fix the nightly reliability bug.** `verify.mjs` hung 30 min and was killed
(`code:null`) on the 08-10 run. A verify pass that dies takes the whole night's
candidates with it.

## Track B — Realistic-audit core (1–2 weeks)

- **B1. Rebalance the journey lens toward observational findings.** Journeys stay
  (they're how new patterns get discovered), but the lens should be told to
  prefer cross-page and render-level observations over "I clicked and nothing
  happened" — the class we can't trust.
- **B2. Automated ~100%-frequency quarantine.** A flag firing on every page is a
  detector bug, not a defect. Proven twice by hand; make it a rule.
- **B3. Cold-visit vs warm-visit modes.** The popup wall only exists on first
  visit; audit both states explicitly.
- **B4. Style-level PDP dedup** (92 URLs = 31 products today).
- **B5. Member journeys revived** (refresh walker cookies) → MyAccount / Loyalty,
  near-zero contest competition.

## Track C — Intelligence & productization (2–4 weeks)

- **C1. Opportunity lifecycle:** review the 11 hypotheses on `/brands/skechers`;
  weekly synthesis with dedupe against validated items.
- **C2. Precision dashboard:** per-persona accepted/rejected + adjudicator audit
  trail — credibility becomes a measurable number we can show a brand.
- **C3. Brand health trending** on `/brands/skechers` (score over time, by channel).
- **C4. Opportunity one-pagers** via existing share tokens — the artifact a brand
  exec receives.
- **C5. Second brand** (crateandbarrel: 1,225 emails already resolved) — proves
  the platform generalizes; the contest win becomes the case study.

## Infrastructure (parallel, as needed)

- **Residential IP / warmed profile** — the only path to trustworthy cart/checkout
  coverage (currently quarantined by the bot flag). Unlocks the most uncontested
  contest territory. Note this is now *lower* priority than the engines: the
  engines sidestep the bot flag rather than fighting it.
- Chrome-uptime + cookie-freshness checks in the nightly wrapper.

---

## Operating rhythm

Nightly: engines (deterministic sweeps) + rotation journeys → verify →
adjudicate → morning digest.
Morning (you): triage queue (~5 min), file 1–3, mark submitted.
Weekly: synthesis → board review → promote/dismiss; check acceptance rate.

## Principles (hard-won, non-negotiable)

1. **Never file what a human hasn't stood behind.** The approve click is the product.
2. **Interaction findings from a flagged session are not findings.** Quarantine,
   always — and never let the adjudicator be the last line of defense, because a
   compromised session produces *plausible* claims.
3. **A flag firing on ~100% of pages is a detector bug, not a defect.** Observed
   twice (cta_occluded 110/110; review-burial depth 0 on 80 PDPs).
4. **Prefer observational findings over interaction findings.** They need no
   action to succeed, so they survive bot-flagging and re-testing.
5. **"I can't check this" is never "the site is broken."** Every recurring false
   positive in this project has been that one substitution.
6. **A human finds the pattern once; an engine finds every instance.**
