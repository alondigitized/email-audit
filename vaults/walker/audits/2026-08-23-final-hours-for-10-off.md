---
slug: 2026-08-23-final-hours-for-10-off
type: email
date: 2026-08-23
persona: walker
score: "4/10"
sender: DSW
subject: Final hours for $10 off…
tags: [email, score-4, sender/dsw]
---
# Final hours for $10 off…
**Score:** 4/10 · **Type:** Email audit · **2026-08-23**
## Full review
## Technical Audit

## 1. Technical Summary
The email is a Braze-sent DSW promo with one confirmed broken CTA link (400 error) and a plain-text version that is over 70% raw URLs, both of which pose deliverability/functional risk.

## 2. Link & Tracking Issues
- **Broken link (400)**: CTA "Opt-In to Texts Get 15% Off" resolves to a 400 error at `https://ablink.dsw.com/f/a/A7tcSD28syL-WRTaMtUmuA~~/AAQRxRA~/...` (Braze `ablink.dsw.com` redirect wrapper). This link is non-functional and should be fixed before send.
- All links use Braze's `ablink.dsw.com` click-tracking redirect domain — consistent with expected Braze-instrumented tracking.
- 12 of 86 total links were probed (ranked by click likelihood); 74 were skipped per the probing methodology (footer/utility/social deprioritized, unsubscribe always checked). Only the CTA above failed; no other broken links confirmed within probed set.

## 3. Rendering & Accessibility
- Two images missing `alt` text:
  - `https://ablink.dsw.com/q/6W4ZGV_GEFnxf5hr6ZFcsA~~/AAQRxRA~/TyYCudfrXjy_BV2qs6vFHlRd0jDkOApqTaIOm5mR2_qq-nFpMi-vIkEWUNnn7`
  - `o.gif` tracking pixel (`https://mi.dsw.com/p/up/e6f23fb024fdcb2cc855b9ed672710d4/o.gif?mi_u=225090073&mi_ecmp=20260823_P260598_V1_WM-_Offer_MI_1`) — pixel missing alt is low-impact (tracking pixel, not content-bearing), but the first missing-alt image should be fixed for screen-reader accessibility.
- Head includes standard client-compatibility meta (`x-apple-disable-message-reformatting`, `format-detection`, `color-scheme`/`supported-color-schemes` for dark mode), Outlook MSO table resets, and responsive gutter-hack media queries for 320/375/414px breakpoints — no issues found in this markup.
- Font loading uses 10 custom `@font-face` declarations (Futura PT, HelveticaNow variants) hosted on `braze-images.com`, each with a single `.woff`/`.ttf` source and no fallback format (e.g., no `.woff2`/`.eot`) — not a defect per se, but no format-cascade means clients that block/fail the single hosted font file fall back directly to system fonts.

## 4. Personalization & Merge Tokens
No merge tags, Liquid/Braze personalization syntax (`{{...}}`), or unresolved tokens are visible in the truncated HTML/head section provided. No issues found based on available source (note: body content was truncated, so personalization in the body could not be fully verified).

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- Sender: `DSW <dsw@e.dsw.com>` — uses a dedicated subdomain (`e.dsw.com`), consistent with standard ESP/Braze sending-domain practice for SPF/DKIM alignment.
- QA confirms an unsubscribe link is always included in the probe set (footer link deprioritized but present) — no issues found.
- Authentication headers (SPF/DKIM/DMARC) are not present in the data provided (HTML source and QA findings do not include raw headers), so pass/fail cannot be confirmed — recommend pulling raw headers separately if authentication needs verification.
- No physical mailing address or CAN-SPAM footer content is visible in the truncated source — cannot confirm compliance from available data; flagging as unverified rather than a failure.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- Tracking pixel URL includes campaign metadata `mi_ecmp=20260823_P260598_V1_WM-_Offer_MI_1`, suggesting consistent internal campaign tagging.
- No UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`) are visible on the sampled links — all destination links are wrapped in Braze `ablink.dsw.com` redirects, which obscures the final landing URL and its UTM params from static inspection. Cannot confirm email-to-site UTM continuity without following redirects to final destination URLs.

## 7. Recommendations
1. Fix the broken "Opt-In to Texts – Get 15% Off" CTA link (currently 400) before send — this is a functional blocker, not cosmetic.
2. Add `alt` text to the content image (`TyYCudfrXjy_...`) for accessibility; alt on the `o.gif` tracking pixel is optional/low-priority.
3. Investigate the plain-text alternative: 34,715/40,421 characters (86%) are raw URLs, which raises spam-filter risk (poor text-to-link ratio) and degrades the plain-text reading experience — trim/shorten tracked URLs or reduce link count in the text version.
4. Pull raw email headers separately to confirm SPF/DKIM/DMARC alignment for `e.dsw.com`, since this is not verifiable from HTML source alone.
5. Follow the `ablink.dsw.com` redirects on final CTAs to confirm landing-page UTM parameters match campaign attribution expectations.
## Recent history

- [[2026-08-19-the-new-caf-slipper-is-here]] — 5/10 (2026-08-19)
- [[2026-08-19-intro-to-style-sneaker-trends]] — 4/10 (2026-08-19)
- [[2026-08-19-did-you-forget-something]] — 5/10 (2026-08-19)

