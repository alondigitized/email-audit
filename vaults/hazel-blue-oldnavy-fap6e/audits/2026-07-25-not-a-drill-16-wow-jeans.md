---
slug: 2026-07-25-not-a-drill-16-wow-jeans
type: email
date: 2026-07-25
persona: hazel-blue-oldnavy-fap6e
score: "5/10"
sender: Old Navy
subject: "Not a drill: $16 Wow jeans"
tags: [email, score-5, sender/old-navy]
---
# Not a drill: $16 Wow jeans
**Score:** 5/10 · **Type:** Email audit · **2026-07-25**
## Full review
## Technical Audit

# Technical Audit: "Not a drill: $16 Wow jeans" (Old Navy)

## 1. Technical Summary
Standard Oracle Responsys-templated email (XHTML transitional, MSO conditionals, single 639px breakpoint) with one confirmed broken tracking redirect and multiple unconfirmed compliance/authentication signals due to missing email headers. Automated QA reports a 25% pass rate (1 fail, 5 warnings).

## 2. Link & Tracking Issues
- **[FAIL] Broken redirect (HTTP 400)**: `https://mi.oldnavy.com/p/cp/0b03a64563bcff52/c?mi_u=473097083&EV=ONUSFF3PMCPATHTFREQTESTSLPCTRLJOB535389_UNKPSPILPNCROF07252026&...&url=https%3A%2F%2Fmi.oldnavy.com%2Fp%2Frp%2F266650ae62bdbfd2%2Furl&url_sig=y9VLeOEJgYNeIm...` (link text: "Display images to show real-time content"). This is a Responsys live-content/rp redirect that appears truncated or has an invalid `url_sig`.
- 91 additional tracking/click-redirect links (mi.oldnavy.com, click.email.oldnavy.com domains) were skipped by the automated HTTP probe — their final destinations are unverified.
- Two tracking pixels present: `click.email.oldnavy.com/open.aspx?23DPFLUSCHZUXBV7AZZHAGUVPA.60268...` (open tracking, `alt=""`) and `cp.oldnavy.com/o/dcca54ca-bf2e-443c-9fe3-b687b1fb23d7?...` (marked `<!--DV TRACKING PIXEL-->`, likely DoubleVerify).

## 3. Rendering & Accessibility
- **[WARN] Missing alt attribute**: the DV tracking pixel (`src: https://cp.oldnavy.com/o/dcca54ca-bf2e-443c-9fe3-b687b1fb23d7?...`) has no `alt` attribute at all (the open-tracking pixel above it correctly uses `alt=""`). Low-impact since it's a 1x1 tracking image, but inconsistent with the other pixel.
- Head includes proper mobile viewport meta, XHTML transitional doctype, `ExternalClass`/`ReadMsgBody` Outlook resets, and MSO conditional comments (`<!--[if gte mso 9]-->`) for Outlook height/PPI handling — no issues found here.
- Single responsive breakpoint at `max-width: 639px` correctly toggles `.desktop-content`/`.mobile-content` and collapses `.wrapper` to 100% width — no issues found.

## 4. Personalization & Merge Tokens
No unresolved merge tags (e.g., literal `%%FIRSTNAME%%`/`{{token}}` placeholders) are present in the visible source. Subscriber-level identifiers are embedded in tracking URLs (`mi_mid=019f9adc-f600-7000-a6c0-bbd896fe195f`, `cp_cid=1bc829e71098f268`, `mi_cid=67859151839b71d0`), consistent with Responsys personalization — no issues found based on available source.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **[WARN] `List-Unsubscribe` header not found** — may be a relay capture gap (AgentMail) rather than a true absence; cannot confirm either way from this data.
- **[WARN] `List-Unsubscribe-Post` header not found (RFC 8058)** — one-click unsubscribe support unconfirmed.
- **[WARN] No physical mailing address detected** in the scanned content — CAN-SPAM requires one; not visible in the truncated HTML/QA scan.
- **[WARN] `Authentication-Results` header not found** — SPF/DKIM/DMARC pass/fail status unknown; likely a relay capture limitation rather than an actual auth failure.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
All outbound links route through Oracle Responsys tracking/redirect domains (`mi.oldnavy.com`, `click.email.oldnavy.com`, `cp.oldnavy.com`) rather than exposing direct oldnavy.com URLs with standard `utm_*` parameters — campaign tracking uses Responsys-native params (`mi_u`, `EV`, `mi_cid`, `cp_cid`) instead. Because 91 of these tracking links were skipped by the HTTP probe (redirect domains not resolved) and one confirmed 400 was found (`mi.oldnavy.com/p/cp/0b03a64563bcff52/c`), final landing-page destination and query-param alignment cannot be verified from this data.

## 7. Recommendations
1. Investigate and fix the 400 error on the `mi.oldnavy.com/p/cp/0b03a64563bcff52/c` redirect (invalid/truncated `url_sig` or expired live-content token) before next send.
2. Add an `alt` attribute (even empty, `alt=""`) to the DV tracking pixel for consistency with the open-tracking pixel.
3. Confirm `List-Unsubscribe` / `List-Unsubscribe-Post` headers are actually present on the raw MIME (verify outside the AgentMail relay capture) to ensure RFC 8058 one-click unsubscribe compliance.
4. Confirm a physical mailing address is rendered in the footer (outside the truncated portion of this source) to satisfy CAN-SPAM.
5. Verify SPF/DKIM/DMARC pass status directly against the sending MTA logs, since `Authentication-Results` wasn't captured via this relay.
6. Spot-check a sample of the 91 skipped tracking links directly (resolving redirects) to confirm none share the same failure mode as the broken link above.
## Recent history

- [[2026-07-25-don-t-wait-get-wow-jeans-for-16-be8f9308-5dc1-4d62-91d2-]] — 8/10 (2026-07-25)
- [[2026-07-24-cozy-deal-alert-16-sweatshirts-new-denim-on-sale-from-22]] — 7/10 (2026-07-24)
- [[2026-07-24-the-comfiest-layers-shop-16-sweatshirts]] — 7/10 (2026-07-24)

