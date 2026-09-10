---
slug: 2026-09-10-20-off-those-shoes-you-ve-been-wanting
type: email
date: 2026-09-10
persona: walker
score: "8/10"
sender: SKECHERS
subject: "20% off those shoes you've been wanting"
tags: [email, score-8, sender/skechers]
---
# 20% off those shoes you've been wanting
**Score:** 8/10 · **Type:** Email audit · **2026-09-10**
## Full review
## Technical Audit

## 1. Technical Summary
The email uses standard SFMC tracking/beacon infrastructure and responsive table-based markup, but ships with a broken personalization token, a malformed tracking pixel URL, and widespread use of unencrypted `http://` image sources.

## 2. Link & Tracking Issues
- **Malformed pixel URL (no protocol):** `<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" width="1" height="1" />` is missing the `https://` scheme. As a relative URL, most mail clients will fail to resolve it (no base href defined), so this Return Path deliverability-tracking pixel will not fire.
- 38 tracking/click-redirect links (`click.emails.skechers.com/...`) were skipped by automated HTTP probing per QA output — link destinations were not validated end-to-end and should be manually confirmed before send.
- Open-tracking pixel (`click.emails.skechers.com/open.aspx?LOHX7U2FPNAUNAJJT4IDTH7LYI.100227...`) and three Krux/beacon pixels (`beacon.krxd.net/1x1_usermatch.gif` ×2, `1x1_ad_impression.gif`) are present and correctly formed with full `https://` URLs.
- Secondary open-tracking pixel via `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8107766165&mi_ecmp=MKG_US_NONPUR_U_MULTI_NONPURCH_EN_09102026_A` uses `http://`, not `https://` (see §3).

## 3. Rendering & Accessibility
- **Non-HTTPS image sources (9 instances):** `o.gif` (ink1000.com), the main "Skechers" logo (`dde00662-...png`), and 7 footer/social/app-badge images (`49468f73`, App Store, Google Play, Curbside Pickup, AfterPay, Find A Store, Instagram, Facebook, YouTube icons) are all served over `http://` from `image.emails.skechers.com` and `www.ink1000.com`. Many mail clients (Outlook, Gmail proxy) block or flag mixed-content/non-TLS images, risking broken images and the logo not rendering for a portion of recipients.
- **Missing alt text (3 instances):** `o.gif` tracking pixel, `02b2f0d1-23ff-4a0f-aed0-ece8beddfd53.jpg`, and `49468f73-4651-4af3-bea2-61d1ae5db486.png` have no `alt` attribute — screen reader users and clients with images-off will see nothing in place of content images.
- CSS includes standard Outlook/Gmail/Apple Mail reset rules (`.ExternalClass`, `x-apple-data-detectors`, `-ms-interpolation-mode`) and mobile breakpoints at 375px/480px/640px/680px/768px — structurally sound responsive scaffolding, no issues found there.

## 4. Personalization & Merge Tokens
- **[FAIL] Empty greeting slot:** greeting renders as "Hi ," — the first-name merge field resolved to an empty string with no fallback value (e.g., no default like "there"). This will visibly ship a broken greeting to any recipient/profile missing a first-name attribute.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- The provided HTML is truncated before the footer/legal block, so the unsubscribe link, physical mailing address, and CAN-SPAM footer text could not be verified in this pass — recommend confirming these are present and functional in the full template before send.
- No email headers (SPF/DKIM/DMARC, `List-Unsubscribe`) were included in the supplied data, so authentication compliance cannot be assessed from this audit — flagging as unverified rather than fabricating a result.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- Campaign identifier `MKG_US_NONPUR_U_MULTI_NONPURCH_EN_09102026_A` is consistently used across the Krux ad-impression beacon and the ink1000.com pixel, indicating consistent campaign tagging at the tracking layer.
- CTA/product links and their UTM parameters are not present in the truncated HTML source, so landing-page alignment and UTM consistency could not be verified in this pass.

## 7. Recommendations
1. Fix the Return Path pixel: prepend `https://` to `pixel.app.returnpath.net/pixel.gif?...` so it resolves correctly.
2. Migrate all `http://` image sources (logo, footer icons, ink1000.com pixel) to `https://` to avoid mixed-content blocking.
3. Add a fallback value to the first-name merge token (e.g., `Hi {{FirstName|there}},`) to eliminate the empty "Hi ," greeting.
4. Add descriptive/empty `alt=""` attributes to all `<img>` tags, including tracking pixels, for accessibility and images-off rendering.
5. Manually verify the 38 skipped tracking-redirect links and confirm the unsubscribe link, physical address, and CTA UTM parameters in the full (non-truncated) template before send.
## Recent history

- [[2026-08-19-the-new-caf-slipper-is-here]] — 5/10 (2026-08-19)
- [[2026-08-19-intro-to-style-sneaker-trends]] — 4/10 (2026-08-19)
- [[2026-08-19-did-you-forget-something]] — 5/10 (2026-08-19)

