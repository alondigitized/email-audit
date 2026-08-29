---
slug: 2026-08-29-employee-sale-access-ends-soon
type: email
date: 2026-08-29
persona: esme-radical-everlane-fap6e
score: "4/10"
sender: Everlane
subject: Employee Sale Access Ends Soon
tags: [email, score-4, sender/everlane]
---
# Employee Sale Access Ends Soon
**Score:** 4/10 · **Type:** Email audit · **2026-08-29**
## Executive summary

- This is the same broken plain-text-fallback template Everlane sent on 08/27 ("New Markdowns Added: Up to 70% Off") — no hero image, no product grid, just stacked paragraph text and a broken personalization token: "Hi There, ," with a dangling comma where a first name should be. That's twice in three days this exact bug has shipped, which means it's not a one-off render glitch, it's a template that's live in rotation without QA.
- The offer itself — 70% off, no code needed — is aggressive and would normally be a strong hook, but "employee sale" framing plus zero visual proof (no products shown, no imagery) makes it read more like a stripped-down internal test send than a finished campaign email. There's nothing here to look at, nothing to click toward except one generic link, and the broken greeting undercuts the "exclusive access" premise the subject line is selling.
- Judgement: this is a bottom-tier send — the offer is real but the execution is a rerun of the same failure pattern seen two days ago. Fix the token bug before this template goes out again.

## What's working

- The offer is concrete and prominent: "Get 70% off and more... No code needed" is unambiguous.
- Urgency framing ("almost up," "before it ends," "before the best finds are gone") is consistent and credible, reinforced by the fine-print expiration date (09/07/2026).
- The single CTA ("SHOP THE SALE") is clearly a hyperlink and impossible to miss given how little else is on the page.
- Footer navigation (Shop Women/Men, New Arrivals, Best-Sellers) gives a fallback path to browse even without a product grid.

## What's weak

- Broken personalization token: "Hi There, ," — visible, unresolved merge artifact, identical bug to the 08/27 send.
- Zero product imagery or grid — no hero shot, no items shown, nothing to visually anchor a 70%-off claim.
- "Employee sale" is a vague, slightly confusing frame — no explanation of why the recipient has "access," which undercuts the exclusivity hook.
- No visual hierarchy at all — it's a wall of left-aligned text with one blue link, which reads as unfinished or spam-adjacent, not like an on-brand Everlane send.

## Recommendations

- 1. Fix the name token before this template ships again — "Hi There, ," has now gone out at least twice; add a fallback ("Hi there," with no comma) if the first-name field is empty.
- 2. Add a hero product image or small grid (3-4 items) showing what's actually included in the "employee sale" — the 70% claim needs visual proof to convert.
- 3. Clarify "employee sale" — either explain the conceit (friends-and-family style access) or drop the term in favor of clearer sale naming, since it reads as unclear/confusing without context.
- 4. Add a second CTA button (styled, not just a text link) below the copy for users skimming past the paragraph.
- **Subject Alt A:** `Your 70% Off Access Ends This Week`
- **Subject Alt B:** `Last Call: Employee Pricing, No Code Needed`
- **Preheader Alt A:** `70% off best-sellers — ends 9/7, no code required`
- **Preheader Alt B:** `Final days to shop before employee pricing disappears`

## Full review
## 1. Overview

This is the same broken plain-text-fallback template Everlane sent on 08/27 ("New Markdowns Added: Up to 70% Off") — no hero image, no product grid, just stacked paragraph text and a broken personalization token: "Hi There, ," with a dangling comma where a first name should be. That's twice in three days this exact bug has shipped, which means it's not a one-off render glitch, it's a template that's live in rotation without QA.

The offer itself — 70% off, no code needed — is aggressive and would normally be a strong hook, but "employee sale" framing plus zero visual proof (no products shown, no imagery) makes it read more like a stripped-down internal test send than a finished campaign email. There's nothing here to look at, nothing to click toward except one generic link, and the broken greeting undercuts the "exclusive access" premise the subject line is selling.

Judgement: this is a bottom-tier send — the offer is real but the execution is a rerun of the same failure pattern seen two days ago. Fix the token bug before this template goes out again.

## 2. What worked

- The offer is concrete and prominent: "Get 70% off and more... No code needed" is unambiguous.
- Urgency framing ("almost up," "before it ends," "before the best finds are gone") is consistent and credible, reinforced by the fine-print expiration date (09/07/2026).
- The single CTA ("SHOP THE SALE") is clearly a hyperlink and impossible to miss given how little else is on the page.
- Footer navigation (Shop Women/Men, New Arrivals, Best-Sellers) gives a fallback path to browse even without a product grid.

## 3. What didn't

- Broken personalization token: "Hi There, ," — visible, unresolved merge artifact, identical bug to the 08/27 send.
- Zero product imagery or grid — no hero shot, no items shown, nothing to visually anchor a 70%-off claim.
- "Employee sale" is a vague, slightly confusing frame — no explanation of why the recipient has "access," which undercuts the exclusivity hook.
- No visual hierarchy at all — it's a wall of left-aligned text with one blue link, which reads as unfinished or spam-adjacent, not like an on-brand Everlane send.

## 4. What I'd change

1. Fix the name token before this template ships again — "Hi There, ," has now gone out at least twice; add a fallback ("Hi there," with no comma) if the first-name field is empty.
2. Add a hero product image or small grid (3-4 items) showing what's actually included in the "employee sale" — the 70% claim needs visual proof to convert.
3. Clarify "employee sale" — either explain the conceit (friends-and-family style access) or drop the term in favor of clearer sale naming, since it reads as unclear/confusing without context.
4. Add a second CTA button (styled, not just a text link) below the copy for users skimming past the paragraph.
   - **Subject Alt A:** `Your 70% Off Access Ends This Week`
   - **Subject Alt B:** `Last Call: Employee Pricing, No Code Needed`
   - **Preheader Alt A:** `70% off best-sellers — ends 9/7, no code required`
   - **Preheader Alt B:** `Final days to shop before employee pricing disappears`

## 5. Business Impact Score (1-10)

**4/10**
- One concrete offer is visible (70% off, no code)
- Primary CTA is unambiguous (clear link text)
- Offer feels honest relative to the stated terms (final sale/expiration disclosed in fine print)

## 6. Open Likelihood (persona-grounded)

- **Score:** `6/10`
- **Signals counted:** Sender display name is recognizable; Subject is concrete (specific offer type + urgency); Subject is relevant to persona's focus area; Subject is under ~50 chars; No spam signals (no caps/exclamations)
- **Rationale:** "Employee Sale Access Ends Soon" is short, urgent, and brand-recognizable, but it's generic enough that it blends into the past week's near-identical urgency subjects from this same sender.

## 7. Click-Through Likelihood (persona-grounded)

- **Score:** `3/10`
- **Signals counted:** Primary CTA is in the shopping category; Offer reduces price; Offer is time-bounded with credible deadline
- **Rationale:** The 70%-off deadline is compelling, but with no product shown, a broken name token, and zero visual hierarchy, there's nothing here to pull the eye toward a click beyond the offer text itself.

## 8. Subject

- **Subject:** `Employee Sale Access Ends Soon`
- **Length:** 31
- **Scores (1-10):** Clarity `6`, Curiosity `5`, Personalization `2`, Urgency `6`, Specificity `4`

## 9. Preview

- **Preview:** `(none / leaking junk)`
- **Length:** 0
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`

---

## Technical Audit

Technical Audit — Everlane "Employee Sale Access Ends Soon"

**1. Technical Summary**
Email is a standard Klaviyo-generated MJML/HTML build; two tracked links resolve to malformed destination URLs, and expected compliance/authentication headers are absent from the delivered message.

**2. Link & Tracking Issues**
- Broken link: "Shop Men" CTA → `https://trk.send.everlane.com/l/01M17ME2BYH6GXS1EVTSSV4228_3` redirects to `/collections/shop-all-mens-clothing?_kx=yTMOVl1XHu7UHBDiF3ftE_vrVfv5mitFkHfllJRzCOILn81Cmts0GyJlgCoeJqhg.USb9mf&bxid=01KRSAQRJKNNCK` — target is a relative path with no scheme/host ("unknown url type"), so the redirect fails.
- Broken link: "Everlane Logo" → `https://trk.send.everlane.com/l/01M17ME2BYH6GXS1EVTSSV4228_0` redirects to `/pages/womens?_kx=yTMOVl1XHu7UHBDiF3ftE_vrVfv5mitFkHfllJRzCOILn81Cmts0GyJlgCoeJqhg.USb9mf&bxid=01KRSAQRJKNNCKD9WS2NMXDB0V&cm_flow_i` — same relative-path defect, and the query string appears truncated at `cm_flow_i`.
- Both use Klaviyo's `trk.send.everlane.com` link-tracking domain with `_kx`/`bxid` click-tracking params; tracking infrastructure itself is functioning, the fault is in the resolved target URL.
- 12 material links were probed automatically; 5 lower-priority (footer/utility/social) links were deprioritized and not verified — coverage gap, not a defect.

**3. Rendering & Accessibility**
- Missing `alt` text on tracking/open pixel image: `src="https://trk.send.everlane.com/o/01M17ME2BYH6GXS1EVTSSV4228"`. This is the open-tracking pixel, so the missing alt has no visible accessibility impact but should still be `alt=""` for semantic correctness.
- MSO/Outlook conditional comments and `@media` mobile rules are present and well-formed in the truncated source; no other markup defects detected in the supplied excerpt.

**4. Personalization & Merge Tokens**
- No unresolved merge tags (e.g. `{{ }}`, `*|MERGE|*`) found in the visible source.
- `_kx` value present is a resolved Klaviyo exponea/identity token, not a broken merge field — no issues found.

**5. Compliance (CAN-SPAM, unsubscribe, authentication headers)**
- `List-Unsubscribe` header not detected — may be a relay capture limitation (AgentMail) rather than sender omission; cannot confirm compliance status from this data alone.
- `List-Unsubscribe-Post` (RFC 8058, one-click unsubscribe) not detected — same caveat.
- `Authentication-Results` (SPF/DKIM/DMARC) header not detected via the AgentMail relay — authentication status unverifiable from available data.
- An in-body unsubscribe link is confirmed present per QA notes (always probed), but its destination was not included in the truncated findings.

**6. Email-to-Site Continuity (UTM params, landing page alignment)**
- Neither broken destination URL carries standard UTM parameters (`utm_source`/`utm_medium`/`utm_campaign`); only Klaviyo-native `_kx` and `bxid` tracking params are present. If GA/analytics attribution depends on UTMs, this campaign will not be attributed there.
- Landing page alignment cannot be verified: both destinations are truncated/malformed relative paths (`/collections/shop-all-mens-clothing...`, `/pages/womens...`) rather than resolvable absolute URLs, so it's unconfirmed whether they'd land on the intended category pages even if the scheme/host were fixed.

**7. Recommendations**
- Fix the redirect target generation for link IDs `_0` and `_3` so resolved URLs include scheme + host (`https://www.everlane.com/...`) instead of bare relative paths.
- Verify the `_3` and `_0` query strings aren't being truncated at export/template-render time (the `cm_flow_i` cutoff suggests a possible template variable or logging truncation, not necessarily the live link).
- Add `alt=""` to the tracking pixel for markup hygiene.
- Confirm with the ESP/mail platform directly (outside this relay) that `List-Unsubscribe` / `List-Unsubscribe-Post` and DKIM/SPF/DMARC authentication headers are actually being sent — this audit cannot confirm compliance status from the AgentMail-relayed copy.
- If cross-platform (GA/analytics) attribution is required, add standard UTM parameters alongside the existing Klaviyo tracking params.
## Recent history

- [[2026-08-19-don-t-miss-your-exclusive-access]] — 5/10 (2026-08-19)
- [[2026-08-18-way-high-denim-now-way-lower-price]] — 5/10 (2026-08-18)
- [[2026-08-17-forget-sale-try-better-prices]] — 5/10 (2026-08-17)

