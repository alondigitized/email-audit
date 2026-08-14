---
slug: 2026-08-14-shop-20-off-before-it-s-gone
type: email
date: 2026-08-14
persona: lacey-belle-vs-fap6e
score: "7/10"
sender: "Victoria's Secret"
subject: Shop 20% Off Before It’s Gone
tags: [email, score-7, sender/victoria-s-secret]
---
# Shop 20% Off Before It’s Gone
**Score:** 7/10 · **Type:** Email audit · **2026-08-14**
## Full review
## Technical Audit

## 1. Technical Summary
Multi-table HTML email built on Salesforce Marketing Cloud (AMPScript stubs, `e1.victoriassecret.com` tracking domain) with legacy Dotomi ad-tag pixels; core rendering markup is solid, but header-level compliance signals are unverifiable and one navigation link returns a 400.

## 2. Link & Tracking Issues
- **Broken link (400):** SMS opt-in CTA → `https://vs.attn.tv/p/TaM/email` (link text: "Let's text. Sign up for SMS…") returns HTTP 400. This is an Attentive SMS signup integration link that is currently non-functional.
- 55 additional tracking/click-redirect links (`click.e1.victoriassecret.com` domain) were skipped from HTTP probing per standard practice for redirect-wrapped links — not evaluated for validity.
- Open-tracking pixel present and duplicated: `https://click.e1.victoriassecret.com/open.aspx?Y6KKWN752WGE7OZQAPYRZGSPTY.70254&d=70254&bmt=0` appears twice in the source (once before `<table>`, once inside `#AMPScript` div) — redundant but not a functional defect.

## 3. Rendering & Accessibility
- 11 images missing `alt` text, all associated with Dotomi ad-tracking calls: the `dtm_com`/`dtm_cid` pixel and `pub1.php` through `pub10.php` cookie-redirect pixels under `ads.dotomi.com` and `login.dotomi.com`. These are 1x1-style tracking beacons, so missing alt is low-impact for screen readers but still fails WCAG image-alt requirements.
- One content image also flagged for missing alt: `5bcec3ac-502d-4d8f-b48c-0a3d20e6e3c2.png` (`image.e1.victoriassecret.com`) — this one is likely a visible creative asset, so the missing alt has real accessibility impact.
- Standard MSO/Outlook conditional fixes, `ExternalClass` resets, and mobile media queries (480px/640px breakpoints) are present and correctly structured — no issues found there.

## 4. Personalization & Merge Tokens
- AMPScript block present (`<div id="AMPScript">`) but empty in the truncated source (`<!-- Ampscript v0 START/END -->` with no content) — cannot confirm whether personalization tokens resolve correctly; no unresolved `%%[ ... ]%%` or `{{merge}}` syntax leaked into rendered HTML in the visible source.
- No issues found in the visible markup (no broken merge tags detected).

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header not found** — either absent from the message or not captured by the relay; cannot confirm CAN-SPAM one-click unsubscribe support at the header level.
- **List-Unsubscribe-Post header not found (RFC 8058)** — one-click unsubscribe (POST) is unconfirmed.
- **Authentication-Results header not found** — SPF/DKIM/DMARC pass/fail status cannot be verified from available data.
- Truncated HTML source does not include a visible unsubscribe footer/link to confirm CAN-SPAM footer compliance (physical address, in-body unsubscribe link) — indeterminate from available evidence, not a confirmed failure.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- Insufficient evidence: the truncated HTML source does not expose the primary CTA/offer link destinations, so UTM parameter presence and landing-page alignment with the "20% Off" subject/offer cannot be verified from available data.
- One confirmed destination, the Attentive SMS link (`vs.attn.tv/p/TaM/email`), is broken (see §2) and breaks continuity for that specific flow.

## 7. Recommendations
1. Fix or remove the SMS signup CTA pointing to `https://vs.attn.tv/p/TaM/email` (currently 400).
2. Add empty `alt=""` at minimum to the 11 Dotomi tracking-pixel images to satisfy accessibility scanners; add descriptive `alt` text to the visible creative image `5bcec3ac-502d-4d8f-b48c-0a3d20e6e3c2.png`.
3. Migrate the `http://` Dotomi ad-tag calls (`login.dotomi.com`, `ads.dotomi.com`) to `https://` — non-HTTPS resources risk being blocked by mail clients and mixed-content filters.
4. Confirm with the sending platform/relay whether `List-Unsubscribe` and `List-Unsubscribe-Post` headers are actually being sent; if absent, add them for CAN-SPAM one-click compliance (RFC 8058).
5. Verify `Authentication-Results` (SPF/DKIM/DMARC) at the receiving MTA to confirm deliverability posture — currently unknown from available headers.
6. Request full (untruncated) HTML to verify primary offer CTA links carry proper UTM parameters and route to a matching "20% Off" landing page.
## Recent history

- [[2026-08-13-today-s-your-one-chance-for-25-off]] — 7/10 (2026-08-13)
- [[2026-08-13-new-campus-fleece-stay-cozy-friends]] — 8/10 (2026-08-13)
- [[2026-08-12-one-day-only-members-shop-30-off]] — 7/10 (2026-08-12)

