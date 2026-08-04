---
slug: 2026-07-29-very-sexy-our-boldest-bras-lingerie-fragrances
type: email
date: 2026-07-29
persona: lacey-belle-vs-fap6e
score: "9/10"
sender: "Victoria's Secret"
subject: "Very Sexy: Our Boldest Bras, Lingerie & Fragrances"
tags: [email, score-9, sender/victoria-s-secret]
---
# Very Sexy: Our Boldest Bras, Lingerie & Fragrances
**Score:** 9/10 · **Type:** Email audit · **2026-07-29**
## Full review
## Technical Audit

# Technical Audit: Victoria's Secret — "Very Sexy" Campaign

## 1. Technical Summary
Standard Salesforce Marketing Cloud (SFMC) table-based HTML email with MSO conditional styling; one confirmed broken redirect (SMS signup) and no verifiable email-authentication or unsubscribe headers reached the relay. 43% automated QA pass rate driven mainly by missing alt text and legacy HTTP ad-tech pixels.

## 2. Link & Tracking Issues
- **Broken link (400):** SMS opt-in CTA ("Let's text. Sign up for SMS...") points to `https://vs.attn.tv/p/TaM/email`, which returns HTTP 400. This is an Attentive SMS-signup integration link and is currently non-functional.
- 46 other tracking/click-redirect links (`click.e1.victoriassecret.com/...`) were skipped by the automated HTTP probe per standard practice for redirect domains — not independently verified as working.
- Duplicate open-tracking pixel: `https://click.e1.victoriassecret.com/open.aspx?N6X4BLNHTPVE7K5TJ3EJ7MYDKM.70248&d=70248&bmt=0` appears twice in the source (once in `<body>`, once nested inside the header table) — redundant but not harmful.

## 3. Rendering & Accessibility
- **Missing `alt` text** on 12 images, including the primary hero (`5bcec3ac-502d-4d8f-b48c-0a3d20e6e3c2.png`) and 11 third-party tracking pixels (`login.dotomi.com`, `ads.dotomi.com/cookieredir/2482/pub1.php` through `pub10.php`). Screen readers will announce nothing for these; the hero image specifically should carry descriptive alt text since it likely conveys the offer.
- **Non-HTTPS image sources:** 11 images load over plain `http://` (`login.dotomi.com`, `ads.dotomi.com/cookieredir/2482/pub1.php`–`pub10.php`). Mixed content on an HTTPS-rendered email may be blocked or flagged by mail clients (Gmail/Outlook proxy image loading and can silently drop insecure assets).
- Responsive/mobile CSS (`@media max-width:480px/640px`, `.fluid`, `.responsive-td`) and Outlook MSO font-fix conditional comments are present and correctly structured — no structural rendering issues found in the visible markup.

## 4. Personalization & Merge Tokens
- An `<div id="AMPScript">` block is present but contains only `<!-- Ampscript v0 START/END -->` comments with no executable AMPScript or merge fields in the visible (truncated) source — no personalization tokens to validate.
- No unresolved merge tags (e.g., stray `%%FirstName%%` or `{{token}}` artifacts) found in the visible HTML.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header:** not found. Per QA notes this may be an artifact of the AgentMail relay rather than the sender's actual header set — cannot confirm compliance either way from this data.
- **List-Unsubscribe-Post (RFC 8058):** not found — one-click unsubscribe support is unconfirmed.
- **Authentication-Results (SPF/DKIM):** not found — authentication status is unknown from this capture; likely also a relay artifact per QA.
- The footer (unsubscribe link, physical mailing address) is not present in the truncated HTML sample provided, so CAN-SPAM footer requirements cannot be verified from this evidence.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- Cannot verify with confidence: all outbound content links route through `click.e1.victoriassecret.com` tracking redirects, which were skipped by the automated probe (standard for redirect domains), and the HTML source is truncated before reaching content/product links.
- The one directly observable non-tracking-redirect parameter is `dtmc_email_category=20260729_VS_5871_FILEBAL` on the Dotomi retargeting pixels — a campaign-tagging value for the ad-tech cookie-sync, not a UTM param on a customer-facing landing link.

## 7. Recommendations
1. Fix or replace the SMS signup link (`vs.attn.tv/p/TaM/email`, currently 400) — this is a customer-facing broken CTA, not just a tracking pixel.
2. Add descriptive `alt` text to the hero image at minimum; decorative/tracking pixels can use `alt=""` explicitly rather than omitting the attribute.
3. Migrate the 11 `http://` Dotomi pixel/redirect calls to `https://` to avoid mixed-content blocking in modern mail clients.
4. Confirm with the sending platform (SFMC) whether `List-Unsubscribe` / `List-Unsubscribe-Post` headers are actually being sent — request raw headers outside the AgentMail relay to distinguish a real compliance gap from a capture artifact.
5. Same for `Authentication-Results` (SPF/DKIM) — verify directly against the ESP's outbound headers rather than relying on this relay capture.
6. Obtain the full (untruncated) HTML to verify footer unsubscribe/physical-address compliance and landing-page UTM alignment on primary CTAs.
## Recent history

- [[2026-07-28-new-buttery-soft-wireless-bras-9478d738-541d-4a3f-ac1d-]] — 5/10 (2026-07-28)
- [[2026-07-28-new-low-cut-push-up-bra-free-shipping]] — 8/10 (2026-07-28)
- [[2026-07-27-cute-stuff-s-even-cuter-with-25-off]] — 8/10 (2026-07-27)

