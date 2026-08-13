---
slug: 2026-08-13-back-to-school-with-nike
type: email
date: 2026-08-13
persona: walker
score: "4/10"
sender: Famous Footwear
subject: Back-to-school with Nike
tags: [email, score-4, sender/famous-footwear]
---
# Back-to-school with Nike
**Score:** 4/10 · **Type:** Email audit · **2026-08-13**
## Full review
## Technical Audit

1. Technical Summary
Transactional-style HTML email using a legacy table-based layout with Responsys click-tracking redirects; overall QA pass rate is 88% with 1 warning category (missing alt text) and no hard errors detected.

2. Link & Tracking Issues
- Open-tracking pixel present: `https://click.email.famousfootwear.com/open.aspx?DMWB4WWILKIURG6RHEWAH775ZE.70250&d=70250&bmt=0` (1×1, `font-size:0;line-height:0` wrapper) — standard Responsys open beacon, functioning as expected.
- All hyperlinks route through Responsys click-tracking redirects (`click.email.famousfootwear.com/?qs=...`), consistent with the platform's link-wrapping. 48 tracking/redirect links were skipped by the automated HTTP prober by design (redirect domains excluded from probing) — destination URLs behind these tokens are not independently verified by this audit.
- No broken/malformed `href` attributes observed in the visible source.

3. Rendering & Accessibility
- 6 distinct `<img>` elements (7 occurrences counting a duplicated logo/divider image) are missing `alt` attributes, per QA:
  - `4ccff4ad-f402-43de-a027-5eb147b6f238.jpg` (divider image, ×3 occurrences)
  - `d2e7b456-fdf2-488a-ab78-50a59c8ea8d9.jpg`
  - `c3d3ca4f-baca-4fbb-a96a-16eee45ad00e.gif`
  - `0af0ec29-013a-456d-a92f-5ea98e189530.jpg`
  - `9d38b06c-aad6-4eb3-a5a8-da0afa90ff12.jpg`
  - `8714175e-3f77-449d-8db4-e5fd06696592.jpg`
  This degrades screen-reader and images-blocked experiences. The logo image does have `alt="Famous Footwear Logo"`; the tracking pixel correctly uses `alt=""`.
- Legacy DOCTYPE (`HTML 4.01 Transitional`) with nested tables and Outlook/`ExternalClass`/`ReadMsgBody` conditioning — appropriate defensive pattern for cross-client email rendering, no issues found there.
- Responsive media queries (480px/640px breakpoints) are present and cover mobile font-size, fluid images, and column stacking — no issues found.

4. Personalization & Merge Tokens
No merge tags, personalization fields (e.g., `{{FirstName}}`), or dynamic content blocks are visible in the truncated source. No issues found in the visible portion; cannot confirm the fully rendered/truncated remainder.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- The provided HTML is truncated before any footer/unsubscribe block, physical mailing address, or "why am I receiving this" language — cannot confirm CAN-SPAM footer compliance from the given source.
- Sending domain is `email.famousfootwear.com` (subdomain-based sending, common for SPF/DKIM alignment) — no SMTP/auth headers (SPF/DKIM/DMARC results) were provided for review, so authentication cannot be verified from this data.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- Outbound links use Responsys token-based redirects (`?qs=ABB7...`) rather than plain UTM query parameters (`utm_source`, `utm_medium`, `utm_campaign`). UTM attribution, if present, is encoded inside the opaque token and not verifiable from the HTML alone.
- Because 48 links were skipped by the HTTP prober, landing-page resolution/alignment (e.g., confirming links land on a matching Nike/back-to-school PDP or category page) is unconfirmed.

7. Recommendations
- Add descriptive `alt` text to the 6 flagged images (or `alt=""` if purely decorative, e.g., the 2px spacer divider) to resolve the accessibility warning.
- Request the full (untruncated) HTML to verify the unsubscribe/footer block and physical address for CAN-SPAM compliance.
- Spot-check a sample of the 48 skipped tracking links by manually resolving redirects to confirm final landing pages match campaign intent and are live (non-404).
- If UTM-based attribution is needed downstream (e.g., GA4), confirm the token payload decodes to equivalent UTM values, since no plain-text UTM params are present in the markup.
## Recent history

- [[2026-08-13-your-seasonal-swap-starts-here]] — 8/10 (2026-08-13)
- [[2026-08-13-bogo-50-off-trending-this-school-year]] — 4/10 (2026-08-13)
- [[2026-08-13-we-hired-a-crocodile]] — 3/10 (2026-08-13)

