---
slug: 2026-08-17-more-than-just-makeup--vera-glow-beauty-fap6e
type: email
date: 2026-08-17
persona: vera-glow-beauty-fap6e
score: "5/10"
sender: ILIA
subject: More than just makeup
tags: [email, score-5, sender/ilia]
---
# More than just makeup
**Score:** 5/10 · **Type:** Email audit · **2026-08-17**
## Full review
## Technical Audit

## Technical Audit — ILIA "More than just makeup"

**1. Technical Summary**
Email is a standard Klaviyo-generated MJML/table-based HTML build with MSO conditional comments and responsive breakpoints; core structure is sound, but header-level compliance/authentication data could not be confirmed and two images are missing alt text.

**2. Link & Tracking Issues**
No issues found in the visible source — links use Klaviyo tracked-redirect domains (`trk.send.iliabeauty.com`) as expected. Note: QA probing covered only 1 of 12 material links (11 deprioritized as footer/utility/social); link-destination validation is therefore incomplete, not passing.

**3. Rendering & Accessibility**
- Two images missing `alt` text:
  - `https://d3k81ch9hvuctc.cloudfront.net/company/SguDsz/images/c9cefca7-6b18-443a-896b-9e98ec5d842a.jpeg`
  - `https://trk.send.iliabeauty.com/o/01M08A8F8SY90KDP980G80K7X3` (this is the open-tracking pixel — missing alt is low-impact but should still be `alt=""` for spec cleanliness)
- MSO conditional comments (`<!--[if mso]>`, `<!--[if lte mso 11]>`) and Outlook fallback styles present — Outlook rendering handled correctly.
- Responsive breakpoints (`@media max-width:480px`) and mobile-stacking rules (`.kl-row.colstack`) present — no issues found.
- Preheader text present and properly hidden (`display:none` + zero-dimension div with whitespace entities for preview-text padding).

**4. Personalization & Merge Tokens**
No merge tags (e.g. `{{ first_name }}`) visible in the truncated source. No issues found based on available content.

**5. Compliance (CAN-SPAM, unsubscribe, authentication headers)**
- **List-Unsubscribe header not found** — may indicate the header isn't being emitted, or isn't being captured by the AgentMail relay. Impacts one-click unsubscribe visibility in Gmail/Yahoo inbox UI.
- **List-Unsubscribe-Post header not found (RFC 8058)** — one-click (POST-based) unsubscribe cannot be confirmed as supported; this is required by Gmail/Yahoo's 2024 bulk-sender rules for lists sending >5,000 msgs/day.
- **Authentication-Results header not found** — SPF/DKIM pass/fail status unknown; cannot confirm domain authentication from this data (likely a relay-capture gap rather than an actual auth failure).
- Visible unsubscribe link presence could not be verified directly in the truncated HTML, but QA confirms an unsubscribe link is always included in probing.

**6. Email-to-Site Continuity (UTM params, landing page alignment)**
Cannot be assessed — the HTML was truncated before any CTA `<a href>` blocks were reached, so no destination URLs or UTM parameters are available for review.

**7. Recommendations**
- Confirm List-Unsubscribe and List-Unsubscribe-Post headers are actually being sent by the ESP (Klaviyo normally sets both); if present at send-time, this is a relay-capture gap in AgentMail rather than a real compliance issue — verify against raw SMTP headers outside the relay.
- Add empty `alt=""` to the tracking pixel and descriptive `alt` text to the CloudFront hero/product image for screen-reader and image-blocked clients.
- Re-run link probing with full coverage (or manually pull all 12 hrefs) to validate destination URLs and UTM tagging before sign-off — current pass rate (57%) is understated by incomplete link coverage, not confirmed defects.
- Verify SPF/DKIM/DMARC alignment via a direct header capture (e.g., mail-tester.com or raw source from a non-relay inbox) since Authentication-Results wasn't observable here.
## Recent history

- [[2026-08-17-more-beauty-more-savings-0d147dd4-a325-4cb2-a1b2---vera-glow-beauty-fap6e]] — 6/10 (2026-08-17)
- [[2026-08-17-here-s-a-bright-idea--vera-glow-beauty-fap6e]] — 7/10 (2026-08-17)
- [[2026-08-17-kamo-the-killer--vera-glow-beauty-fap6e]] — 6/10 (2026-08-17)

