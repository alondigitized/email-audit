---
slug: 2026-08-16-extra-savings-are-here-today-gone-tomorrow--ines-counter-department-store-fap6e
type: email
date: 2026-08-16
persona: ines-counter-department-store-fap6e
score: "5/10"
sender: Kohl’s
subject: Extra savings are here today, gone tomorrow ⏳
tags: [email, score-5, sender/kohl-s]
---
# Extra savings are here today, gone tomorrow ⏳
**Score:** 5/10 · **Type:** Email audit · **2026-08-16**
## Full review
## Technical Audit

1. **Technical Summary**: This is a standard Kohl's marketing email built on a tracking-heavy transactional platform (mi.kohls.com/click.chp.kohls.com); QA flagged missing unsubscribe headers, missing physical address, and widespread missing alt text.

2. **Link & Tracking Issues**
- 73 tracking/click-redirect links present, routed through `click.chp.kohls.com` and `click.s.kohls.com` — consistent with a standard ESP click-tracking wrapper; not independently verifiable since QA skipped HTTP probes on these by design.
- Multiple 1x1 tracking pixels present: `click.chp.kohls.com/o/...`, `mi.kohls.com/p/up/...`, `mi.kohls.com/p/rp/...` (×6), `kohls.demdex.net/event?d_sid=...` (Adobe Audience Manager), `click.s.kohls.com/open.aspx...` (open tracking). No functional issue, but this represents 8+ separate tracking calls per open.

3. **Rendering & Accessibility**
- All 8 image/pixel elements flagged by QA are missing `alt` text (list above under QA findings). For the 1x1 tracking pixels this is low-impact (some do carry `alt=""` correctly, e.g. `o.gif`), but the `event` pixel and several `mi.kohls.com/p/rp/*.png` pixels have no `alt` attribute at all — should be `alt=""` with `role="presentation"` for screen-reader hygiene.
- `<meta name="robots" content="noindex, nofollow">` and `<meta name="referrer" content="no-referrer">` present — appropriate for email.
- Malformed markup: `<img ... width="1" height="1" alt=""></custom>` — a stray/unmatched closing `</custom>` tag after the `click.s.kohls.com/open.aspx` pixel. Not a real HTML5 custom element open tag anywhere preceding it, so this is likely a template artifact; browsers will ignore it but it indicates unclean template output.
- MSO conditional comments and responsive `@media max-width:500px` block are present and correctly structured for Outlook/mobile fallback.

4. **Personalization & Merge Tokens**
- No unresolved merge tags (e.g. `{{first_name}}`, `%%FIELD%%`) visible in the truncated source.
- `mi_kc_redm_end_dte=` parameter on the `916d6fa08d185233.png` pixel is present but empty — a merge field that failed to populate (likely intended to carry a redemption end date for personalization/urgency tracking).

5. **Compliance (CAN-SPAM, unsubscribe, authentication headers)**
- `List-Unsubscribe` header: not found per QA — may be a relay-capture artifact (AgentMail) rather than absent at origin, but cannot confirm from HTML alone since unsubscribe is typically header- and footer-link based.
- `List-Unsubscribe-Post` (RFC 8058, one-click unsubscribe): not found — same caveat.
- No physical mailing address detected in the truncated HTML — CAN-SPAM requires this; cannot confirm absence definitively since source was truncated before the footer, but flagging per QA.
- `Authentication-Results` header (SPF/DKIM/DMARC): not found — status unknown, likely a relay-capture limitation rather than a sender-side failure.
- From domain `s.kohls.com` is a dedicated sending subdomain, consistent with standard DKIM/SPF alignment practice, but cannot verify pass/fail without headers.

6. **Email-to-Site Continuity (UTM params, landing page alignment)**
- Tracking pixels carry `mi_ecmp=1019904_2026816` and `email_name=260816_DG_Email_Mystery` campaign identifiers — internally consistent naming/date convention (260816 = 2026-08-16) matching send date.
- Click-through links route through `click.chp.kohls.com/o/...` redirect wrapper with an encoded `cp_tp` payload; final landing page URL and UTM parameters are not visible in the truncated source, so alignment with landing pages cannot be verified.

7. **Recommendations**
- Confirm at the ESP/relay level whether `List-Unsubscribe` / `List-Unsubscribe-Post` headers and `Authentication-Results` are genuinely absent or simply not captured by the AgentMail relay; if genuinely absent, add RFC 8058 one-click unsubscribe headers.
- Verify a physical mailing address is present in the (untruncated) footer to confirm CAN-SPAM compliance.
- Add `alt=""` + `role="presentation"` to all tracking pixels missing it, particularly the `kohls.demdex.net/event` and `mi.kohls.com/p/rp/*.png` pixels.
- Investigate the empty `mi_kc_redm_end_dte=` parameter — likely a merge-field population failure worth fixing upstream.
- Remove the stray `</custom>` closing tag near the `click.s.kohls.com/open.aspx` pixel to clean up template output.
## Recent history

- [[2026-08-15-pre-fall-s-new-standouts--ines-counter-department-store-fap6e]] — 5/10 (2026-08-15)
- [[2026-08-15-vibes-auras-eras-hp2v61000001a0063bd76e92--ines-counter-department-store-fap6e]] — 6/10 (2026-08-15)
- [[2026-08-15-the-beauty-forecast-hp2v61000001a0058ab77aad--ines-counter-department-store-fap6e]] — 5/10 (2026-08-15)

