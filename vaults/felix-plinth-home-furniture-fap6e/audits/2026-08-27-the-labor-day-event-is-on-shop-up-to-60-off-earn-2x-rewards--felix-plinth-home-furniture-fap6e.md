---
slug: 2026-08-27-the-labor-day-event-is-on-shop-up-to-60-off-earn-2x-rewards--felix-plinth-home-furniture-fap6e
type: email
date: 2026-08-27
persona: felix-plinth-home-furniture-fap6e
score: "5/10"
sender: Crate & Barrel SALE
subject: The Labor Day Event is ON! Shop up to 60% off + Earn 2x Rewards!
tags: [email, score-5, sender/crate-barrel-sale]
---
# The Labor Day Event is ON! Shop up to 60% off + Earn 2x Rewards!
**Score:** 5/10 · **Type:** Email audit · **2026-08-27**
## Full review
## Technical Audit

1. Technical Summary
Standard ESP-templated (MessageGears/Iterable-style) commercial email with heavy tracking instrumentation; core compliance headers could not be verified via the relay, and no `alt` text is present on any image.

2. Link & Tracking Issues
- 95 tracking/click-redirect links detected and skipped by the automated probe (not independently verified as reachable/non-broken).
- Multiple third-party tracking pixels present: `mi.crateandbarrel.com/p/rp/*.png` (7 instances), `mi.crateandbarrel.com/p/up/*/o.gif`, and `sr.rlcdn.com/448796.gif` (LiveRamp/RampID, fired 5x with incrementing `n=` param) — all beaconing/open-tracking pixels, consistent with standard ESP + data-partner tracking.
- One `dv.crateandbarrel.com/o/{uuid}?mi_mid=...&cp_tp=v` view-tracking call present.
- No conversion evidence of broken/dead links since all destination URLs were redirect-wrapped and skipped by the prober — cannot confirm final landing URLs from this data alone.

3. Rendering & Accessibility
- All 51 images in the QA scan are missing `alt` text, including content images (product/hero shots), decorative separators (`.gif` spacers), and tracking pixels. Content images lacking alt text fail WCAG 1.1.1 and degrade the message for screen-reader users and when images are blocked by default (a common state in Outlook/Gmail).
- Template includes standard multi-client CSS resets (Outlook MSO conditionals, `-webkit-text-size-adjust`, `ExternalClass` fixes for Outlook.com) and responsive breakpoints at 460px/640px/768px — no structural rendering defects observed in the truncated source.

4. Personalization & Merge Tokens
- No unresolved merge tags (e.g. `{{first_name}}`, `%%FIELD%%`) or broken personalization syntax found in the visible source.
- No issues found.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- `List-Unsubscribe` header not detected — may be a relay-side capture limitation (AgentMail) rather than a true absence; cannot confirm compliance from this data alone.
- `List-Unsubscribe-Post` (RFC 8058, one-click unsubscribe per Gmail/Yahoo 2024 bulk-sender requirements) not detected — same caveat.
- `Authentication-Results` (SPF/DKIM/DMARC) not detected — SPF/DKIM pass/fail status cannot be verified from this data.
- Recommend confirming these three headers via a direct raw-source pull (not through the AgentMail relay) before concluding a real compliance gap.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- All outbound links are wrapped in tracking/redirect domains (skipped by the prober), so destination UTM parameters and landing-page alignment could not be verified in this pass.

7. Recommendations
- Add descriptive `alt` text to all content/product images and `alt=""` to purely decorative spacers/pixels to fix the 51 flagged accessibility warnings.
- Re-pull raw email headers outside the AgentMail relay path to confirm presence/values of `List-Unsubscribe`, `List-Unsubscribe-Post`, and `Authentication-Results` (SPF/DKIM/DMARC) — current absence is unconfirmed due to relay capture limits, not necessarily a true gap.
- Follow at least a sample of the 95 skipped tracking redirects to their final destination to confirm no broken links and to validate UTM parameters against landing pages.
## Recent history

- [[2026-08-27-shipping-free-new-throw-blankets--felix-plinth-home-furniture-fap6e]] — 6/10 (2026-08-27)
- [[2026-08-27-black-adirondack-chairs-are-here--felix-plinth-home-furniture-fap6e]] — 5/10 (2026-08-27)
- [[2026-08-26-the-perfect-sofa-does-exist--felix-plinth-home-furniture-fap6e]] — 5/10 (2026-08-26)

