---
slug: 2026-09-15-fall-preview-savings-2-for-100
type: email
date: 2026-09-15
persona: walker
score: "7/10"
sender: SKECHERS
subject: "Fall preview savings: 2 for $100"
tags: [email, score-7, sender/skechers]
---
# Fall preview savings: 2 for $100
**Score:** 7/10 · **Type:** Email audit · **2026-09-15**
## Full review
## Technical Audit

1. **Technical Summary**
Email renders via standard SFMC-style tracking/tagging infrastructure but ships an unpersonalized empty greeting token and multiple insecure (HTTP) asset references.

2. **Link & Tracking Issues**
- 33 tracking/click-redirect links (`click.emails.skechers.com`, etc.) were present but skipped by automated HTTP probing — no destination validation performed; manual click-through spot check recommended before send.
- Open-tracking pixel present: `https://click.emails.skechers.com/open.aspx?YDM6BJJ3FZ6ERPYP37Z6HW2OBQ.100226&d=100226&bmt=0` — served over HTTPS, no issue.
- Third-party pixels (Kantar/Krux `beacon.krxd.net`, Return Path `pixel.app.returnpath.net`) load over HTTPS except the ink1000.com pixel (see below).
- `pixel.app.returnpath.net/pixel.gif?...` src is missing the `https://` scheme prefix in the `src` attribute (`src="pixel.app.returnpath.net/pixel.gif?..."`) — this will resolve as a relative path in most mail clients and fail to load, breaking that tracking pixel.

3. **Rendering & Accessibility**
- Two images missing `alt` text: `o.gif` (ink1000.com tracking pixel — low impact, 1x1) and `49468f73-4651-4af3-bea2-61d1ae5db486.png` (a content image, m/11 asset) — the latter should have descriptive alt text for accessibility/screen readers and for when images are blocked.
- Extensive vendor-prefix mobile CSS (Outlook/Gmail/Apple Mail hacks) present and structured normally; no malformed media query or missing `!important` override detected in the truncated source.

4. **Personalization & Merge Tokens**
- **[FAIL]** Empty greeting slot: greeting renders as "Hi ," — the first-name merge field resolved to an empty string with no fallback value configured. This will show a visibly broken personalization to any recipient missing profile data. Recommend adding a default/fallback string (e.g., "Hi there,") to the AMPscript/merge logic.

5. **Compliance (CAN-SPAM, unsubscribe, authentication headers)**
- Truncated HTML does not include the footer/unsubscribe block, so unsubscribe link presence/physical mailing address cannot be confirmed from the provided source — flag for follow-up review of the full email footer.
- No SPF/DKIM/DMARC header data was provided in this payload — authentication headers cannot be assessed from HTML source alone; recommend checking via a header-inspection tool (e.g., Google Postmaster Tools or a seed-list test) separately.

6. **Email-to-Site Continuity (UTM params, landing page alignment)**
- Campaign tagging is consistent across tracked pixels/links via `PRO_US_NA_U_SELECTEXTRA_FULL_EN_09152026` (used in both the Krux ad-impression beacon and the ink1000.com pixel `mi_ecmp` param), suggesting coherent campaign ID tagging.
- Landing page URLs are within the 33 skipped tracking-redirect links, so UTM parameter alignment with the destination landing page cannot be verified from this data — recommend resolving redirects and confirming UTM source/medium/campaign match analytics expectations.

7. **Recommendations**
- Fix the empty greeting merge field with a fallback value to avoid "Hi ," rendering for recipients with missing name data.
- Convert all `http://` image sources to `https://` (9 assets affected: Skechers logo, hero content image, app store badges, curbside/AfterPay/Find A Store icons, and social icons) to prevent mixed-content blocking in modern mail clients.
- Fix the malformed `pixel.app.returnpath.net` src (add `https://` scheme) so that tracking pixel actually fires.
- Add descriptive `alt` text to the `49468f73-4651-4af3-bea2-61d1ae5db486.png` content image.
- Manually verify a sample of the 33 skipped tracking links to confirm they resolve to correct, live landing pages with matching UTM parameters.
- Obtain and review the full footer (unsubscribe + physical address) and send-domain authentication headers, which were not included in this truncated payload.
## Recent history

- [[2026-08-19-the-new-caf-slipper-is-here]] — 5/10 (2026-08-19)
- [[2026-08-19-intro-to-style-sneaker-trends]] — 4/10 (2026-08-19)
- [[2026-08-19-did-you-forget-something]] — 5/10 (2026-08-19)

