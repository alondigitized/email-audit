---
slug: 2026-08-14-your-recliner-style-found--felix-plinth-home-furniture-fap6e
type: email
date: 2026-08-14
persona: felix-plinth-home-furniture-fap6e
score: "6/10"
sender: Wayfair
subject: Your RECLINER STYLE = FOUND
tags: [email, score-6, sender/wayfair]
---
# Your RECLINER STYLE = FOUND
**Score:** 6/10 · **Type:** Email audit · **2026-08-14**
## Full review
## Technical Audit

1. Technical Summary
Standard vendor-batch marketing email (Wayfair) built with an Unbounce/BEE-style templating engine; delivers correctly but carries systemic accessibility gaps and non-HTTPS tracking pixels; email-side compliance headers could not be verified through this relay.

2. Link & Tracking Issues
- 12/73 links were probed (rest deprioritized as footer/utility/social); 7 of the probed material links returned HTTP 429 (rate-limited, not necessarily broken) — includes the primary CTAs "Shop Sale," "Get Exclusive Deals on the App" (x2), the masthead "Wayfair" logo link, and two product-image links (recliners category, daily-sales). Cannot confirm live status from this data; recommend re-probing outside rate-limit window.
- 4 links were unprobed due to time budget (70s cap): includes a gazebo-deals filter link, a sectionals-from-$200 filter link, and a buy-now-pay-later link — status unknown, neither pass nor fail.
- All probed/observed links carry a consistent tracking query-string schema (`_emr`, `wfcs`, `_eml`, `source=graymatter_batch`, `batchid`, `varid`, `csnid`, `sltid`, `refid`, `emlid`, `maiid`, `mdlid`), indicating a working per-send/per-slot click-tracking implementation.
- 20 sequential open-tracking beacons (`li.wayfair.com/imp?s=124126000` through `...019`) are loaded over **plain HTTP**, not HTTPS (see Rendering & Accessibility below for the duplicated compliance flag — these are the same URLs).

3. Rendering & Accessibility
- 22 flagged images are missing `alt` text, including the primary hero/banner creatives (`WFUS_0824_LaborDay-...`, `wfus_jt800_batch9_livingroom_recliners_...`, `wfus_batchheaderrevamp_event_top_3_purple.png`, `0811_SummerMarkdowns_SkinnyHero-General.jpg`), the BNPL banner, review star-rating icons (`stars_10.png` x4, `stars_11.png` x2), the legal disclaimer image (`bnpl_legal_disclaimer.png`), and all 20 `li.wayfair.com/imp` tracking pixels. Screen-reader users get no fallback text for hero content or the review-star widget; missing alt on the disclaimer image is also a legibility/compliance concern since it appears to carry legal text as an image.
- 20 `li.wayfair.com/imp?...` tracking-pixel images are served over `http://` instead of `https://`. Mixed-content blocking in modern mail clients/webmail may silently drop these, undercounting opens; also flagged as missing `alt`.
- HTML uses legacy XHTML 1.0 Transitional doctype with extensive `!important`-laden media-query overrides (Unbounce/BEE-style boilerplate) — consistent with typical ESP-generated markup, no structural rendering defects observed beyond the above.

4. Personalization & Merge Tokens
No unresolved merge tokens, template placeholders, or broken personalization variables found in the visible source. (Truncated source limits full-document confirmation.)

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- `List-Unsubscribe` header: not found in the captured headers. Per the QA tool's own caveat, this may be an artifact of the AgentMail relay not capturing/forwarding the header rather than the sender omitting it — cannot confirm true absence.
- `List-Unsubscribe-Post` (RFC 8058, required for Gmail/Yahoo bulk-sender one-click unsubscribe): also not found — same relay-capture caveat applies.
- `Authentication-Results` header (SPF/DKIM/DMARC outcome): not found — SPF/DKIM pass/fail status is unknown from this data; likely stripped by the relay rather than absent at origin.
- An unsubscribe link is confirmed present in-body per the QA tool's link-probing notes ("an unsubscribe link is always included"), though it was not one of the 12 probed links, so its destination/functionality is unverified.
- Cannot confirm physical mailing address (CAN-SPAM requirement) from the truncated HTML provided.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- Links do not use standard `utm_source`/`utm_medium`/`utm_campaign` parameters; Wayfair uses a proprietary tracking schema instead (`_emr`, `wfcs`, `refid=MKTEML_121670`, `maiid=15949`, `source=graymatter_batch`, etc.). This is internally consistent across all sampled links, so no cross-link mismatch was found.
- Subject line promises recliner-specific content ("Your RECLINER STYLE = FOUND"); the sampled links resolve to a mix of destinations — recliners category page (`/furniture/sb0/recliners-c413904.html`), general daily-sales page, homepage, and unrelated category filters (pergolas, gazebos, sectionals) — indicating the email bundles multiple merchandising blocks beyond the recliner theme stated in the subject. This is a content/targeting observation, not a broken-link defect.
- App deep link (`wayfairapp://home` via `wayfairapp.onelink.me`) includes a valid `af_web_dp` HTTPS fallback (`http://www.wayfair.com/the-wayfair-app` — note fallback itself is HTTP, not HTTPS).

7. Recommendations
- Add descriptive `alt` text to all 22 flagged images at minimum for hero/banner creatives and the BNPL legal-disclaimer image (legal text should not rely solely on an unlabeled image).
- Migrate the 20 `li.wayfair.com/imp` open-tracking pixels from `http://` to `https://` to prevent mixed-content blocking and open-tracking undercounts.
- Re-run link probing outside the current rate-limit window to confirm true status of the 7 x 429'd links and the 4 time-budget-skipped links, particularly the primary "Shop Sale" and app-download CTAs.
- Re-capture headers via a path that preserves `List-Unsubscribe`, `List-Unsubscribe-Post`, and `Authentication-Results` (current AgentMail relay appears to strip them) to get a real compliance/deliverability read rather than an inconclusive one.
- Fix the app-deep-link fallback URL (`af_web_dp`) to use `https://` instead of `http://`.
## Recent history

- [[2026-08-13-win-a-5k-design-refresh--felix-plinth-home-furniture-fap6e]] — 6/10 (2026-08-13)
- [[2026-08-13-this-bestselling-collab-is-back--felix-plinth-home-furniture-fap6e]] — 5/10 (2026-08-13)
- [[2026-08-13-you-ll-use-these-every-single-day--felix-plinth-home-furniture-fap6e]] — 5/10 (2026-08-13)

