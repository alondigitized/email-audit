---
slug: 2026-09-03-labor-day-sale-10-off-your-25-purchase-starts-today--ines-counter-department-store-fap6e
type: email
date: 2026-09-03
persona: ines-counter-department-store-fap6e
score: "5/10"
sender: Kohl’s
subject: Labor Day Sale + $10 off your $25 purchase STARTS TODAY 👋
tags: [email, score-5, sender/kohl-s]
---
# Labor Day Sale + $10 off your $25 purchase STARTS TODAY 👋
**Score:** 5/10 · **Type:** Email audit · **2026-09-03**
## Full review
## Technical Audit

## 1. Technical Summary
Kohl's Labor Day email uses a heavy multi-vendor tracking stack (CoherentPath/Cheetah Digital, Adobe AAM, Movable Ink) with no detected unsubscribe headers or sender authentication data available; 43% of automated QA checks passed.

## 2. Link & Tracking Issues
- Open/click tracking chain confirmed: `click.chp.kohls.com/o/...` (1x1 pixel, Cheetah/CoherentPath), `mi.kohls.com/p/up/...` and `/p/rp/...` (Movable Ink, multiple instances), `kohls.demdex.net/event?d_sid=13245196` (Adobe Audience Manager), `click.s.kohls.com/open.aspx?...` (Responsys open tracking).
- 69 tracking/click-redirect links were skipped by the automated HTTP probe (redirect domains not resolvable to final destinations from static analysis) — link destination integrity for CTAs could not be verified and should be manually click-tested before send.
- No malformed or broken raw `href` URLs found in the visible source.

## 3. Rendering & Accessibility
- 8 images flagged with missing `alt` text, all tracking/beacon pixels (`o.gif`, `event`, and six `.png` beacons under `mi.kohls.com/p/rp/...`). These are 0-height/invisible tracking pixels, so the missing alt is low-impact for screen readers but should still be `alt=""` with `role="presentation"`/`aria-hidden="true"` for strict HTML validation — three of the eight already have `aria-hidden="true"` set correctly (the `mi.kohls.com/p/up` pixel), the rest do not.
- Responsive `@media (max-width:500px)` block present with standard mobile stacking/scaling classes (`.container`, `.col`, `.w-sm-320`) — mobile responsiveness appears implemented.
- MSO conditional blocks present for Outlook (`<!--[if gte mso 9]>`), indicating standard desktop-Outlook fallback handling.
- Content-bearing image alt text could not be assessed from the truncated source (only tracking pixels appear in the QA findings) — recommend full-source spot check for hero/CTA image alt text.

## 4. Personalization & Merge Tokens
- No unresolved merge tags (e.g. `{{first_name}}`, `%%FIELD%%`) visible in the truncated source.
- `mi_mid` (member ID) and `mi_cid` (campaign ID) parameters are present in tracking URLs — standard Movable Ink personalization identifiers, appear correctly populated (non-empty values).
- One parameter of note: `mi_kc_redm_end_dte=` in the `916d6fa08d185233.png` beacon URL is empty — a redemption end-date merge field did not resolve. If this field feeds subscriber-facing content elsewhere in the email (not shown in truncated source), it should be verified.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header**: not detected. Note per QA: this may be a relay-capture limitation (AgentMail) rather than a true absence — cannot confirm root cause from this data alone.
- **List-Unsubscribe-Post header (RFC 8058)**: not detected — one-click unsubscribe support unconfirmed.
- **Physical mailing address**: not detected in the analyzed content. CAN-SPAM requires this in every commercial email; the truncated HTML did not include a footer, so this may simply be outside the captured excerpt rather than truly absent — flag for confirmation against the full email footer.
- **Authentication-Results (SPF/DKIM/DMARC)**: not found in headers — sender authentication status is unverified via this channel.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- Tracking parameters use Kohl's proprietary campaign schema (`mi_ecmp=1021128_202693`, `email_name=260903_DG_Email_Thursday`) rather than standard `utm_*` params — this is consistent with Movable Ink/Responsys-style attribution and not a defect, but means standard UTM-based analytics tooling won't capture this campaign without custom mapping.
- CTA link destinations could not be verified (see Section 2 — 69 links skipped by probe); landing page alignment cannot be confirmed without manual click-through.

## 7. Recommendations
1. Manually click-test a sample of the 69 skipped tracking/redirect links to confirm they resolve to the correct, live landing pages.
2. Add `alt=""` and `aria-hidden="true"` consistently to all tracking-pixel `<img>` tags (currently inconsistent across the 8 flagged instances).
3. Confirm List-Unsubscribe / List-Unsubscribe-Post headers and Authentication-Results are actually present at the SMTP/header level — current findings may reflect AgentMail relay capture gaps rather than true absence; validate with a raw header capture at the original send.
4. Confirm the physical mailing address is present in the full footer (outside the truncated excerpt) to satisfy CAN-SPAM.
5. Investigate the empty `mi_kc_redm_end_dte` parameter on the `916d6fa08d185233.png` beacon to confirm it isn't a broken personalization token.
## Recent history

- [[2026-09-02-earrings-that-dance-swing-shine--ines-counter-department-store-fap6e]] — 5/10 (2026-09-02)
- [[2026-09-02-the-hottest-drops-are-here--ines-counter-department-store-fap6e]] — 6/10 (2026-09-02)
- [[2026-09-02-ends-soon-up-to-250-off--ines-counter-department-store-fap6e]] — 6/10 (2026-09-02)

