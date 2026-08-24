---
slug: 2026-08-24-labor-day-deals-worth-celebrating
type: email
date: 2026-08-24
persona: buck-field-tractorsupply-fap6e
score: "8/10"
sender: Tractor Supply Company
subject: Labor Day Deals Worth Celebrating 🎉
tags: [email, score-8, sender/tractor-supply-company]
---
# Labor Day Deals Worth Celebrating 🎉
**Score:** 8/10 · **Type:** Email audit · **2026-08-24**
## Full review
## Technical Audit

## 1. Technical Summary
The email uses a standard MSO/Outlook-hardened HTML email template with a third-party click-tracking redirector (`e.ez.tractorsupply.com`), but automated QA shows a 19% pass rate driven by 9 timed-out tracked links and a 403 on the unsubscribe link, plus missing unsubscribe/authentication headers.

## 2. Link & Tracking Issues
- **9 of 12 probed material links timed out** ("The read operation timed out") on the `e.ez.tractorsupply.com/click?...` redirector, including the primary hero CTA ("Tractor Supply Co."), both `FW35ValueBanner` CTAs (each appears twice, likely desktop/mobile duplicate anchors), and two product CTAs ("ProducersPrideChickenCoops", "BlueMountainJeansandPants"). This indicates the click-tracking redirect endpoint itself is unresponsive/unreliable, not a destination-page issue — every tracked link routes through the same `e.ez.tractorsupply.com/click?` host.
- **Unsubscribe/preferences link returns HTTP 403**: `https://e.ez.tractorsupply.com/click?ZdJHdb...` (link text: "Update your preferences or unsubscribe"). This is a functional failure, not just a tracking timeout.
- All links use an obfuscated encrypted-token query string rather than plain destination URLs, so downstream URL/UTM structure cannot be inspected pre-click — see Section 6.
- Open-tracking pixel present: `https://e.ez.tractorsupply.com/open?ZPM1N...`.

## 3. Rendering & Accessibility
- Standard Outlook/Gmail/iOS reset CSS present (`.ExternalClass`, `mso-table-lspace`, `-ms-text-size-adjust`, `x-apple-data-detectors` handling, `.a6S` Gmail download-button suppression) — no issues found here.
- Responsive breakpoint at 639px with mobile-specific classes (`.mobile-off`, `.mobile-on`, `.mobile-img`, etc.) — no issues found.
- **3 images missing `alt` text**, all tracking/analytics pixels: `o.gif` (`mi.tractorsupply.com`), `eaAnalyticsTSC.everestengagement.com` pixel, and the `open` tracking pixel. Low visual impact (1x1 pixels) but fails basic accessibility/HTML validation checks and should carry `alt=""` to be explicit rather than omitted.
- No alt-text issues reported for content/product images in the truncated source.

## 4. Personalization & Merge Tokens
No merge tags, personalization placeholders (e.g., `{{first_name}}`, AMPscript, Handlebars), or dynamic content blocks are visible in the provided HTML source or flagged by QA. No issues found.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **Unsubscribe link is broken (403)** — this is a functional CAN-SPAM risk: the visible unsubscribe mechanism does not resolve.
- **`List-Unsubscribe` header not found** — no header-level unsubscribe mechanism was captured.
- **`List-Unsubscribe-Post` header not found (RFC 8058)** — one-click unsubscribe is not confirmed supported. Combined with the broken unsubscribe link, this is the most significant compliance finding.
- **`Authentication-Results` header not found** — SPF/DKIM/DMARC pass/fail status could not be verified via the relay used for capture; note this may be a capture-path limitation (AgentMail relay) rather than a sender-side authentication failure, so treat as unconfirmed rather than a defect.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
All CTAs route through the `e.ez.tractorsupply.com/click?` tracking redirector with opaque encrypted tokens rather than direct URLs, so the final landing-page destination and UTM parameters cannot be inspected from the source alone. Because 9 of these links also timed out during probing, landing-page alignment (correct product/category pages, matching UTM campaign tags) could not be verified for this send. Recommend re-probing once the redirector is stable to confirm final destinations resolve to the intended Labor Day promo pages.

## 7. Recommendations
1. Investigate the `e.ez.tractorsupply.com/click` redirector for availability/timeout issues — 9/12 probed links failed, suggesting an infrastructure problem on the ESP/tracking side rather than isolated broken links.
2. Fix the 403 on the unsubscribe/preferences link immediately — this is a compliance-blocking defect, not cosmetic.
3. Add `List-Unsubscribe` and `List-Unsubscribe-Post` headers to support RFC 8058 one-click unsubscribe (required by Gmail/Yahoo bulk sender guidelines).
4. Confirm SPF/DKIM/DMARC alignment via a direct mailbox capture (not just the AgentMail relay) since `Authentication-Results` wasn't observable here.
5. Add `alt=""` to the three tracking pixel `<img>` tags for accessibility/HTML-validation cleanliness.
6. Once the redirector is stable, re-verify that click-tracked URLs decode to landing pages with correct UTM parameters matching the FW35 Labor Day campaign.
## Recent history

- [[2026-08-17-exclusive-animal-days-savings-are-live]] — 9/10 (2026-08-17)
- [[2026-08-14-animal-days-in-store-event-is-tomorrow-8-15]] — 8/10 (2026-08-14)
- [[2026-08-10-animal-days-starts-now-save-big-on-tsc-exclusives]] — 9/10 (2026-08-10)

