---
slug: 2026-09-22-decorating-for-halloween-shop-outdoor-picks-from-15--felix-plinth-home-furniture-fap6e
type: email
date: 2026-09-22
persona: felix-plinth-home-furniture-fap6e
score: "5/10"
sender: Wayfair
subject: Decorating for Halloween? Shop outdoor picks from $15 🎃 👻 💀
tags: [email, score-5, sender/wayfair]
---
# Decorating for Halloween? Shop outdoor picks from $15 🎃 👻 💀
**Score:** 5/10 · **Type:** Email audit · **2026-09-22**
## Full review
## Technical Audit

## 1. Technical Summary
Standard UnRoll.me/ESP-templated (Unbounce-style "u-" classes) Wayfair promotional email; core structural elements are sound, but the build has pervasive missing `alt` attributes, several plaintext-HTTP tracking pixels, and unconfirmed unsubscribe/authentication headers.

## 2. Link & Tracking Issues
- 12 of 65 total links were probed (rest deprioritized as footer/utility/social); all probed material links returned `429 Rate Limited`, not a confirmed failure — indicative of aggressive bot/rate protection on `wayfair.com` and `wayfairapp.onelink.me`, not necessarily broken links. Cannot confirm live status from this data.
- 3 links were unprobed due to time budget (`trick-out-your-lawn`, `-DELE1001.html`, `-W115112428.html`) — status unknown.
- All checked links carry consistent tracking params (`_emr`, `_eml`, `wfcs`, `refid=MKTEML_140714`, `emlid=101`, `maiid=16285`, `mdlid=...`) — tracking taxonomy is internally consistent across CTAs.
- 20 tracking pixels (`http://li.wayfair.com/imp?s=124126000`–`124126019`) are served over **plain HTTP**, not HTTPS. Many mail clients (Outlook, Gmail image proxy over HTTPS-only policies) will block or fail to load these, silently degrading engagement/attribution data.

## 3. Rendering & Accessibility
- 23 images are missing `alt` text, including content images (`Pumpkin+Head+Ghost+Inflatable.jpg`, `Porch+Decor+Halloween+Bat+Banners.jpg`) and multiple `default_image.jpg` product fallbacks — screen readers and blocked-image fallback text will show nothing.
- The 20 HTTP tracking pixels are also flagged as missing `alt`, but as 1x1/open-tracking pixels this is standard practice, not a defect.
- CSS uses standard Outlook/Gmail/mobile hacks (`u-MobileHide`, `data-outlook-cycle`, `u ~ div` Gmail min-width fix, `@supports (-webkit-touch-callout: none)` iOS fix) — no structural rendering issues detected in the visible markup.

## 4. Personalization & Merge Tokens
No merge-token or personalization syntax (`{{...}}`, `[[...]]`, `%%...%%`) observed in the truncated source. No issues found.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- `List-Unsubscribe` header: not detected — may be a relay-capture gap (AgentMail) rather than a true absence; cannot confirm compliance status from this data alone.
- `List-Unsubscribe-Post` (RFC 8058 one-click unsubscribe): not detected — same caveat.
- `Authentication-Results` (SPF/DKIM/DMARC): not detected — cannot verify sender authentication passed.
- An in-body unsubscribe link is confirmed present per QA probing notes ("an unsubscribe link is always included" in probe methodology), but its target URL was not surfaced in the findings for direct verification.
- **Recommend verifying these three header checks directly against raw SMTP/MIME source** rather than the relay-parsed copy, since AgentMail relay is the suspected point of header loss.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- No `utm_source`/`utm_medium`/`utm_campaign` params observed; Wayfair uses its own proprietary tracking schema (`refid`, `emlid`, `maiid`, `mdlid`, `sltid`, `brcid`, `csnid`) instead of UTM — consistent across all sampled links, so no mismatch, just a non-UTM convention.
- Landing destinations are directionally aligned with subject/creative (`trick-out-your-lawn`, `daily-sales`, halloween-themed PDP images) — no mismatched or generic-homepage-only CTAs detected among probed links.
- App-deep-link CTA (`wayfairapp.onelink.me`) correctly includes `af_web_dp` fallback to `www.wayfair.com/the-wayfair-app` for non-app users.

## 7. Recommendations
1. Re-probe the 12 rate-limited links and 3 time-budget-skipped links with backoff/delay or a whitelisted UA to get a real pass/fail signal — current data is inconclusive, not a confirmed break.
2. Migrate the 20 `li.wayfair.com/imp` tracking pixels from `http://` to `https://` to avoid silent drops in HTTPS-enforcing clients.
3. Add descriptive `alt` text to the 23 flagged content/product images (especially the two hero creative images) for accessibility and image-blocked fallback.
4. Capture and verify `List-Unsubscribe`, `List-Unsubscribe-Post`, and `Authentication-Results` directly from raw MIME headers (bypassing the relay) to close the compliance-verification gap flagged by QA.
## Recent history

- [[2026-09-22-best-sellers-up-to-40-off-just-one-more-day--felix-plinth-home-furniture-fap6e]] — 6/10 (2026-09-22)
- [[2026-09-22-a-montessori-inspired-toddler-space--felix-plinth-home-furniture-fap6e]] — 5/10 (2026-09-22)
- [[2026-09-22-what-responsible-design-means-to-us--felix-plinth-home-furniture-fap6e]] — 4/10 (2026-09-22)

