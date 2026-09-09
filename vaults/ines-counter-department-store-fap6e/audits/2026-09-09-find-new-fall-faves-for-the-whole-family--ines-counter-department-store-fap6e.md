---
slug: 2026-09-09-find-new-fall-faves-for-the-whole-family--ines-counter-department-store-fap6e
type: email
date: 2026-09-09
persona: ines-counter-department-store-fap6e
score: "5/10"
sender: Kohl’s
subject: Find new fall faves for the whole family 🍂
tags: [email, score-5, sender/kohl-s]
---
# Find new fall faves for the whole family 🍂
**Score:** 5/10 · **Type:** Email audit · **2026-09-09**
## Full review
## Technical Audit

Technical Audit — Kohl's "Find new fall faves" Email

**1. Technical Summary**
Standard Coherent Path/Marigold-served (`click.chp.kohls.com`) marketing email with Kohl's proprietary tracking (`mi.kohls.com`) and Adobe Audience Manager beacon; QA pass rate 57% driven by missing alt text and unverifiable header data at the relay layer.

**2. Link & Tracking Issues**
- 58 tracking/click-redirect links were skipped by the automated HTTP probe (`click.chp.kohls.com/o/...`, `click.s.kohls.com/open.aspx...`) — not confirmed broken, just unverified; recommend manual click-through QA before send.
- Multiple tracking pixels present: Coherent Path open pixel (`click.chp.kohls.com/o/d825bd70...`), Kohl's `mi.kohls.com` open/impression pixels (`o.gif`, `rp/*.png`), and an Adobe Demdex (AAM) beacon (`kohls.demdex.net/event?d_sid=13245196`). No functional issue, but note for privacy/compliance review scope.
- One tracking pixel `<div>` has a malformed closing tag: `<img ... aria-hidden="true" /></custom></div>` — stray `</custom>` tag with no matching opener. Not render-breaking in most clients but is invalid HTML.

**3. Rendering & Accessibility**
- 8 images missing `alt` text (QA-confirmed): the CHP open pixel, `o.gif`, the Demdex `event` pixel, and 5 `mi.kohls.com/p/rp/*.png` tracking pixels. These are 1x1 tracking images, so the accessibility impact is minimal (screen readers typically skip 0-dimension images), but `alt=""` should still be set explicitly for HTML validity/best practice.
- Template uses standard MSO conditional comments, Outlook `xml`/`o:OfficeDocumentSettings` block, and responsive `@media max-width:500px` rules — no structural rendering issues detected in the truncated source.
- Google Fonts (Roboto, Montserrat) loaded via both `<link>` and `@import` with no fallback stack beyond `Arial, Helvetica, sans-serif` in the body style — acceptable, standard degradation pattern.

**4. Personalization & Merge Tokens**
- No unresolved merge tags (e.g. `{{first_name}}`, `%%FIELD%%`) found in the visible source. `mi_mid` (message ID) and `mi_cid` (customer ID) appear correctly populated as hashed/opaque values in the CHP tracking URL, not raw PII.
- One pixel URL includes empty merge params: `mi_kc_redm_end_dte=&mi_kc_event_pen` — a personalization/segmentation token that resolved to empty string. Confirm this is expected default behavior and not a broken merge field.

**5. Compliance (CAN-SPAM, unsubscribe, authentication headers)**
- `List-Unsubscribe` header not found (QA WARN) — could be a true absence or simply not captured by the AgentMail relay; cannot confirm CAN-SPAM one-click compliance from this data alone.
- `List-Unsubscribe-Post` (RFC 8058) also not found — same caveat.
- `Authentication-Results` header (SPF/DKIM/DMARC) not found — authentication status is unknown, likely a relay-capture limitation rather than a true absence, but cannot be confirmed either way from available data.
- No visible unsubscribe link/footer in the truncated HTML — truncation limits this assessment; the footer region wasn't included in the provided source.

**6. Email-to-Site Continuity (UTM params, landing page alignment)**
- Kohl's uses proprietary click-tracking redirects (`click.chp.kohls.com/o/...`) rather than standard UTM query params on destination URLs — final landing page URLs are not visible in the truncated source, so UTM/landing-page alignment cannot be verified.
- `mi_ecmp=1021443_202699` and `email_name=260909_DG_Email_Wednesda...` in pixel URLs provide internal campaign/email identifiers, consistent naming with the send date (260909 = 2026-09-09).

**7. Recommendations**
1. Manually verify a sample of the 58 skipped tracking links resolve to correct, live landing pages (automated probe could not check redirect-domain links).
2. Add explicit `alt=""` to the 8 flagged tracking pixel images for HTML validity.
3. Remove the stray `</custom>` closing tag near the `click.s.kohls.com/open.aspx` pixel.
4. Confirm with the sending platform/relay whether `List-Unsubscribe`, `List-Unsubscribe-Post`, and `Authentication-Results` headers are genuinely absent or just not captured by AgentMail — re-test by inspecting raw headers at the SMTP/relay level if compliance certainty is required.
5. Confirm the empty `mi_kc_redm_end_dte` / `mi_kc_event_pen` params are intentional defaults, not a broken personalization token.
## Recent history

- [[2026-09-08-fall-s-monochromatic-moves--ines-counter-department-store-fap6e]] — 6/10 (2026-09-08)
- [[2026-09-08-it-s-your-last-chance-to-get-50-off-select-beauty--ines-counter-department-store-fap6e]] — 6/10 (2026-09-08)
- [[2026-09-08-limited-time-earn-up-to-a-1-250-gift-card-today--ines-counter-department-store-fap6e]] — 7/10 (2026-09-08)

