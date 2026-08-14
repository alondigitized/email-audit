---
slug: 2026-08-14-black-outdoor-privacy-screens-find-one-that-s-all-you--felix-plinth-home-furniture-fap6e
type: email
date: 2026-08-14
persona: felix-plinth-home-furniture-fap6e
score: "6/10"
sender: Wayfair
subject: "BLACK OUTDOOR PRIVACY SCREENS 🔎 Find one that's all you →"
tags: [email, score-6, sender/wayfair]
---
# BLACK OUTDOOR PRIVACY SCREENS 🔎 Find one that's all you →
**Score:** 6/10 · **Type:** Email audit · **2026-08-14**
## Full review
## Technical Audit

1. Technical Summary
Standard Wayfair ESP marketing template (Uniform-style architecture) with widespread missing alt attributes and mixed-content tracking pixels; core click-tracking and unsubscribe infrastructure could not be verified due to link probing rate-limits and missing SMTP headers.

2. Link & Tracking Issues
- 12 of 73 links were probed (61 skipped by relevance ranking); of those probed, 7 returned HTTP 429 rather than a definitive pass/fail, including primary CTAs ("Shop Sale," "Get Exclusive Deals on the App," the header banner image link, and "Wayfair" logo link). No confirmed-broken links were found, but rate limiting means link validity is unconfirmed for these.
- 4 additional links were unprobed due to a 70s time budget cutoff, including two `daily-sales` category links and a PDP link (`/pdp/basics-by-wayfair-outdoor-chaise-lounge-cushion-weat...`).
- All probed/tracked URLs carry consistent tracking parameters (`_emr`, `_eml`, `wfcs`, `csnid`, `refid=MKTEML_121815`, `emlid=101`, `maiid=15962`), indicating tracking parameter structure is intact where visible.
- 20 first-party impression-tracking pixels (`li.wayfair.com/imp?s=124126000` through `...019`) are served over plain **http://**, not https — see Rendering & Accessibility below for client-blocking implications.

3. Rendering & Accessibility
- 20 `<img>` elements are missing `alt` attributes, spanning: content/promo banners (`wfna_0331_new-markdowns_2024_email_banner-02.jpg`, `...top-steals-goin`, `...scores-in-your-`, `...sales-sales-mor`), the repeated header logo (`header_desktop_copy_22.png`, appearing 5×), review-star rating images (`stars_10.png`, `stars_11.png`, 5× combined), the open-tracking pixel (`t.wayfair.com/b.php?x=...`), and 20× `li.wayfair.com/imp` impression pixels. Missing alt text degrades screen-reader output and shows blank/broken-image placeholders when images are blocked.
- 20 `imp` tracking pixels load via `http://li.wayfair.com/imp?...` (not https). Mail clients that enforce HTTPS-only remote content (e.g., Outlook, iOS Mail with mixed-content blocking) will likely block these, undercounting impressions.
- Template uses standard MSO/Outlook conditional-safe patterns (`u-OutlookAppStackingFix`, `mso-font-alt`) and mobile media queries (max-width 480px/320px) — no structural rendering issues found in the visible source.

4. Personalization & Merge Tokens
No merge tokens or personalization placeholders (e.g., `{{first_name}}`, `%%FIELD%%`) are present in the visible/truncated HTML. No issues found.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- `List-Unsubscribe` header not detected — one-click/mailbox-level unsubscribe cannot be confirmed present (QA notes this may be an artifact of the AgentMail relay not capturing the header rather than true absence).
- `List-Unsubscribe-Post` (RFC 8058) not detected — one-click unsubscribe support unconfirmed for the same reason.
- `Authentication-Results` header not found — SPF/DKIM/DMARC pass/fail status cannot be verified from available data.
- QA confirms an unsubscribe link is present in the footer (deprioritized from probing but flagged as always included) — visible unsubscribe mechanism exists, satisfying baseline CAN-SPAM footer requirement, though its functional status wasn't probed.
- Sender uses a subdomain (`members.wayfair.com`) consistent with typical list-hygiene/reputation isolation practice; no issue flagged.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- Links do not use standard UTM parameters (`utm_source`/`utm_medium`/`utm_campaign`); instead they use Wayfair's proprietary tracking schema (`_emr`, `_eml`, `wfcs`, `refid=MKTEML_121815`, `emlid`, `maiid`, `batchid`, `varid`, `csnid`). This is an internal convention, not a defect — no GA/UTM continuity to validate against.
- Destination paths (`/daily-sales`, `/daily-sales/area-rug-clearance~e368602.html`, `/daily-sales/filters/...`, `/the-wayfair-app`) are consistent with the email's promotional content categories (outdoor/markdown themes); no mismatch found in visible link text vs. destination.
- App deep-link CTA uses OneLink (`wayfairapp.onelink.me`) with `af_web_dp` fallback to `www.wayfair.com/the-wayfair-app` — correct deferred-deep-linking pattern.

7. Recommendations
- Add descriptive `alt` text to all 20 flagged images, particularly the 4 primary content banners (decorative/pixel-tracking images can use `alt=""`).
- Migrate the 20 `li.wayfair.com/imp` tracking pixels from `http://` to `https://` to prevent mixed-content blocking in modern mail clients.
- Re-run link probing with a longer time budget / backoff-aware retry to get definitive pass/fail on the 7 rate-limited (429) links and 4 unprobed links, especially the primary "Shop Sale" and app-download CTAs.
- Confirm `List-Unsubscribe` / `List-Unsubscribe-Post` and `Authentication-Results` presence via raw header capture at the MTA (not through the AgentMail relay) to close out the compliance and deliverability warnings definitively.
## Recent history

- [[2026-08-14-your-life-your-living-room--felix-plinth-home-furniture-fap6e]] — 5/10 (2026-08-14)
- [[2026-08-14-a-collection-with-impeccable-energy-16b92712-4438-4698-9759---felix-plinth-home-furniture-fap6e]] — 6/10 (2026-08-14)
- [[2026-08-14-new-high-chair-that-will-look-beautiful-in-your-dining-room--felix-plinth-home-furniture-fap6e]] — 5/10 (2026-08-14)

