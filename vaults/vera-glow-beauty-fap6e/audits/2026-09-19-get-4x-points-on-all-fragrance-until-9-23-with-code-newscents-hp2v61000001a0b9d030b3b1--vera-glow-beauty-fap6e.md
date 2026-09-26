---
slug: 2026-09-19-get-4x-points-on-all-fragrance-until-9-23-with-code-newscents-hp2v61000001a0b9d030b3b1--vera-glow-beauty-fap6e
type: email
date: 2026-09-19
persona: vera-glow-beauty-fap6e
score: "5/10"
sender: Sephora Insider
subject: Get 4X points on all fragrance until 9/23 with code NEWSCENTS
tags: [email, score-5, sender/sephora-insider]
---
# Get 4X points on all fragrance until 9/23 with code NEWSCENTS
**Score:** 5/10 · **Type:** Email audit · **2026-09-19**
## Full review
## Technical Audit

1. Technical Summary
Standard Sephora/Epsilon-Harmony transactional-marketing template; core mechanics (links, personalization tokens) render correctly, but compliance headers and plain-text fallback fail automated checks.

2. Link & Tracking Issues
No issues found in the truncated HTML source itself (no broken/malformed hrefs observed). Note: QA probing covered only 12 of 62 material links (50 skipped, deprioritized footer/utility/social), so untested links cannot be confirmed clean — treat as unverified rather than passing.

3. Rendering & Accessibility
- Missing `alt` text on 4 images flagged by QA:
  - `https://app.sephora.com/O/AQEAAZcF2gAndjYxMDAwMDAxYS0wYjlkLTAzMGItM2IxYi01OD...` (tracking pixel/open-tracker — low impact but should still have `alt=""`)
  - `2021_Navs_Header_06.jpg` (nav header image — user-facing, needs descriptive alt)
  - `o.gif` (`mi.sephora.com` open-tracking pixel — should have `alt=""`)
  - `EN_NEWSCENTS_Barcode.jpg` (promo barcode — needs alt text since it conveys the offer code visually)
- Template includes standard Outlook/mso conditional CSS and mobile media-query hide/show classes; no rendering-breaking issues observed in the supplied markup.

4. Personalization & Merge Tokens
No merge-token or personalization-field issues found in the visible source (no unresolved `{{...}}` or empty-value tokens present in the truncated HTML).

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **[WARN]** `List-Unsubscribe` header not detected — may be a relay-capture limitation (AgentMail) rather than a true absence; cannot confirm compliance from this check alone.
- **[WARN]** `List-Unsubscribe-Post` (RFC 8058 one-click unsubscribe) not detected — same caveat.
- **[WARN]** `Authentication-Results` header (SPF/DKIM/DMARC) not found — authentication status unknown via this relay.
- QA notes an unsubscribe link is always included in probing, consistent with CAN-SPAM's visible opt-out requirement, but the header-level mechanisms above are unverified.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- Tracking pixel URL includes campaign parameter `mi_ecmp=20260919_Beauty_for_All_NonRouges`, indicating campaign-level tracking is present.
- Insufficient visibility into destination CTA URLs (only 12/62 links probed) to confirm UTM parameter consistency or landing-page alignment with the "NEWSCENTS" fragrance promo — flag as unverified rather than pass/fail.

7. Recommendations
- Add descriptive `alt` text to `2021_Navs_Header_06.jpg` and `EN_NEWSCENTS_Barcode.jpg`; add empty `alt=""` to the two tracking pixels to satisfy accessibility scanners.
- **[FAIL]** Generate a non-empty plain-text MIME part (currently 0 chars) — this is a functional deliverability defect affecting text-only clients and spam filtering.
- Confirm `List-Unsubscribe` / `List-Unsubscribe-Post` and `Authentication-Results` headers are actually present at the raw SMTP/MIME level (outside the AgentMail relay capture) to rule out a monitoring gap vs. a real compliance gap.
- Expand link probing coverage (or manually spot-check skipped footer/social links) to confirm no broken destinations before next send.
## Recent history

- [[2026-09-19-get-4x-points-on-all-fragrance-until-9-23-with-code-newscents--vera-glow-beauty-fap6e]] — 5/10 (2026-09-19)
- [[2026-09-18-new-thirst-burst-lip-bffs--vera-glow-beauty-fap6e]] — 6/10 (2026-09-18)
- [[2026-09-18-yes-please-grab-up-to-50-off-hp2v61000001a0b545fd54a7--vera-glow-beauty-fap6e]] — 6/10 (2026-09-18)

