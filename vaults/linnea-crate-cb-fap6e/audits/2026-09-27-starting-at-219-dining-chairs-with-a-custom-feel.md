---
slug: 2026-09-27-starting-at-219-dining-chairs-with-a-custom-feel
type: email
date: 2026-09-27
persona: linnea-crate-cb-fap6e
score: "7/10"
sender: Crate & Barrel
subject: "Starting at $219: Dining chairs with a custom feel"
tags: [email, score-7, sender/crate-barrel]
---
# Starting at $219: Dining chairs with a custom feel
**Score:** 7/10 · **Type:** Email audit · **2026-09-27**
## Full review
## Technical Audit

1. Technical Summary
Email renders via standard MSO/Outlook-conditional table markup with tracking pixels and redirect links; core compliance headers (List-Unsubscribe) and authentication results were not captured by the relay, and all images lack alt text.

2. Link & Tracking Issues
- 70 tracking/click-redirect links detected and skipped from HTTP probing (redirect domain, likely `dv.crateandbarrel.com` or `mi.crateandbarrel.com` wrappers) — destination validity unconfirmed.
- Multiple open/tracking pixels present: `mi.crateandbarrel.com/p/rp/*.png` (7 instances), `mi.crateandbarrel.com/p/up/.../o.gif`, `sr.rlcdn.com/448796.gif` (5 instances, sequential `n=1`–`n=5` — LiveRamp/RampID identity sync pixels), and a conversion pixel at `dv.crateandbarrel.com/o/2dac8d64-ef6d-4d8c-b454-ee54967f7b6b`.

3. Rendering & Accessibility
- 33 images with missing `alt` text across product photography, header/hero art, and all tracking pixels (pixels should carry `alt=""` for semantic correctness, not omit the attribute).
- Responsive breakpoints defined at both 460px and 640/768px with duplicate/overlapping `@media` rules for `img {max-width}` — no functional conflict observed but redundant.
- MSO conditional comments and Outlook font-fix classes (`.mso-font-fix-*`) present, indicating standard Outlook/desktop client fallback handling.

4. Personalization & Merge Tokens
- No unresolved merge tags (e.g. `{{first_name}}`, `%%FIELD%%`) visible in the truncated source.
- No issues found.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- `List-Unsubscribe` header not found — cannot confirm one-click unsubscribe availability at the header level (may be relay capture gap rather than sender omission).
- `List-Unsubscribe-Post` (RFC 8058) not found — same caveat.
- `Authentication-Results` header absent — SPF/DKIM/DMARC pass status cannot be verified via this relay.
- Physical mailing address / footer unsubscribe link not visible in truncated HTML — cannot confirm CAN-SPAM footer compliance from available source.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- All CTA/product links route through tracking redirects (`dv.crateandbarrel.com`, `mi.crateandbarrel.com` wrappers), so UTM parameters and final landing-page destinations are not visible in the truncated/skipped source — continuity unverifiable from this data.
- No issues found in visible non-tracking asset URLs (Scene7 image paths resolve to expected `s7d5.scene7.com` CDN).

7. Recommendations
- Add descriptive `alt` text to all 33 product/content images; set `alt=""` explicitly on the 20+ tracking pixels to avoid screen-reader noise.
- Confirm with AgentMail relay whether `List-Unsubscribe`/`List-Unsubscribe-Post` headers are being stripped in transit vs. never sent — if the latter, add RFC 8058 one-click unsubscribe support.
- Confirm SPF/DKIM/DMARC authentication independently (e.g., via raw header capture outside the relay) since `Authentication-Results` was not observed.
- Deduplicate the two overlapping `@media` breakpoint blocks (460px vs. 640/768px `img {max-width}` rules) for maintainability.
- Since 70 links were skipped from probing, spot-check a sample of tracking-redirect URLs manually to confirm they resolve to correct, live product pages.
## Recent history

- [[2026-08-19-can-t-figure-it-out-let-our-designers-help-for-free]] — 5/10 (2026-08-19)
- [[2026-08-19-the-ultimate-bedroom-makeover-inspo]] — 7/10 (2026-08-19)
- [[2026-08-18-bestselling-sofas-made-even-more-beautiful]] — 6/10 (2026-08-18)

