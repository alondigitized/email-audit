---
slug: 2026-08-12-ends-today-up-to-20-off-backpacks-more--felix-plinth-home-furniture-fap6e
type: email
date: 2026-08-12
persona: felix-plinth-home-furniture-fap6e
score: "5/10"
sender: Crate & Kids SALE
subject: "ENDS TODAY: Up to 20% off backpacks & more!"
tags: [email, score-5, sender/crate-kids-sale]
---
# ENDS TODAY: Up to 20% off backpacks & more!
**Score:** 5/10 · **Type:** Email audit · **2026-08-12**
## Full review
## Technical Audit

1. Technical Summary
Email is a standard C&B/Crate & Kids ESP template (MessageGears/"MI" markup) with heavy tracking instrumentation; no broken personalization detected, but header-level authentication/unsubscribe data was unavailable to this scan and all images lack alt text.

2. Link & Tracking Issues
- 70 tracking/click-redirect links were present but skipped from HTTP probing (redirect domains not resolvable via automated check) — destination validity unconfirmed.
- Multiple pixel trackers present: `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png` (6 instances), `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif`, `dv.crateandbarrel.com/o/30c3c3e2-45f7-4661-82bd-ea5e7f582c21` (LiveIntent/dv pixel), and `sr.rlcdn.com/448796.gif` (5 instances, LiveRamp/RampID pixel) — expected ESP/ad-tech instrumentation, not a defect, but volume (13 pixels total) is notable.

3. Rendering & Accessibility
- All 21 content images (product photos + tracking pixels) are missing `alt` attributes, including customer-facing product imagery (e.g., `bbf6f9d4-...png`, `36da8a90-...jpg`). This fails WCAG 1.1.1 and degrades the experience for screen-reader users and when images are blocked.
- Head markup includes standard Outlook/MSO conditional comments, `x-apple-disable-message-reformatting`, and mobile media queries — no structural rendering defects observed in the truncated source.

4. Personalization & Merge Tokens
- No unresolved merge tags (e.g., `{{...}}`, `%%...%%`) or broken personalization tokens found in the visible source.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- `List-Unsubscribe` header not detected by the scan — may be a relay capture gap (AgentMail) rather than a true absence; cannot confirm CAN-SPAM one-click compliance from this data alone.
- `List-Unsubscribe-Post` (RFC 8058) not detected — one-click unsubscribe support unconfirmed.
- `Authentication-Results` header not found — SPF/DKIM pass/fail status unknown via this relay.
- Recommend verifying these three headers directly against the originating MTA (not just the AgentMail-relayed copy) before treating as a real compliance gap.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- Cannot confirm UTM parameter presence/consistency — the 70 tracking links were skipped from probing, so destination query strings and landing-page alignment are unverified in this pass.

7. Recommendations
- Add descriptive `alt` text to all 21 product/content images (empty `alt=""` is acceptable for the pure tracking pixels, but product images should carry real descriptions).
- Independently verify `List-Unsubscribe`/`List-Unsubscribe-Post`/`Authentication-Results` against raw source headers (not the AgentMail relay copy) to rule out a header-passthrough gap vs. a true compliance issue.
- Spot-check a sample of the 70 skipped tracking links manually to confirm redirect targets resolve and carry correct UTM parameters to the intended landing pages.
## Recent history

- [[2026-08-12-the-elements-of-a-welcoming-entryway--felix-plinth-home-furniture-fap6e]] — 5/10 (2026-08-12)
- [[2026-08-12-going-fast-up-to-60-off-the-summer-sale-a6826661-5d3e-4c76-83db---felix-plinth-home-furniture-fap6e]] — 5/10 (2026-08-12)
- [[2026-08-12-going-fast-up-to-60-off-the-summer-sale--felix-plinth-home-furniture-fap6e]] — 6/10 (2026-08-12)

