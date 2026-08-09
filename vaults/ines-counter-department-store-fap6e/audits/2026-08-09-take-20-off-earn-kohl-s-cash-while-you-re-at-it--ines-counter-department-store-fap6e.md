---
slug: 2026-08-09-take-20-off-earn-kohl-s-cash-while-you-re-at-it--ines-counter-department-store-fap6e
type: email
date: 2026-08-09
persona: ines-counter-department-store-fap6e
score: "5/10"
sender: Kohl’s
subject: "Take 20% off & earn Kohl's Cash while you're at it 💪"
tags: [email, score-5, sender/kohl-s]
---
# Take 20% off & earn Kohl's Cash while you're at it 💪
**Score:** 5/10 · **Type:** Email audit · **2026-08-09**
## Full review
## Technical Audit

1. Technical Summary
Standard ESP-templated marketing email (Kohl's via s.kohls.com) using a click-tracking wrapper (click.chp.kohls.com/click.s.kohls.com), an open-tracking pixel, and Adobe Audience Manager (demdex.net) beaconing; automated QA flags missing unsubscribe/authentication headers and widespread missing alt text.

2. Link & Tracking Issues
- All visible links are wrapped through `click.chp.kohls.com` and `click.s.kohls.com` redirectors with opaque encrypted payloads (`cp_tp=v3.eJy...`), consistent with standard ESP click-tracking — no malformed URLs observed in the truncated source.
- 73 tracking/redirect links were skipped by the automated HTTP probe (by design — click-redirect domains are not resolved), so live-link validity is unconfirmed.
- Open-tracking pixel present: `https://click.s.kohls.com/open.aspx?NWUQ666NJJ2EFMJA56QBIH5SVU.60267&d=60267&bmt=0` — malformed HTML nesting: this 1x1 image is immediately followed by a stray `</custom>` closing tag with no matching opening tag, which is invalid markup (harmless in most renderers but should be cleaned up).
- Adobe Audience Manager beacon: `https://kohls.demdex.net/event?d_sid=13245196` — third-party tracking pixel outside the ESP domain.
- Additional Kohl's-hosted tracking pixels (`mi.kohls.com/p/up/...`, `mi.kohls.com/p/rp/...`) present for open/engagement tracking.

3. Rendering & Accessibility
- 8 images flagged with missing `alt` text, including all tracking pixels (`o.gif`, `event`, five `mi.kohls.com/p/rp/*.png` pixels, and the primary `click.chp.kohls.com` beacon). For 1x1 tracking pixels this is low-impact (should be `alt=""` for cleanliness, not a real accessibility issue), but confirm content images later in the truncated source also carry descriptive alt text — not verifiable from the provided excerpt.
- Uses conditional MSO comments (`<!--[if gte mso 9]>`) and Outlook-specific CSS resets — appropriate for Outlook desktop rendering.
- Responsive breakpoint at `max-width: 500px` with fluid-width overrides (`.container`, `.w_50pc`, etc.) — standard mobile responsive pattern, no issues found in the provided CSS.
- Google Fonts loaded via both `<link>` and `@import` (Roboto, Montserrat) with no fallback guard for clients that block external font requests — falls back to `Arial, Helvetica, sans-serif` per the body style, so degradation is graceful.
- `<meta name="robots" content="noindex, nofollow">` and `<meta name="referrer" content="no-referrer">` present — expected for transactional/marketing email, not a defect.

4. Personalization & Merge Tokens
- No unresolved merge tags (e.g. `{{first_name}}`, `%%FIELD%%`) visible in the provided source.
- No issues found.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- `List-Unsubscribe` header not detected — cannot confirm one-click unsubscribe support at the mail-header level (may be a relay/capture artifact rather than a true absence; verify against raw MIME headers, not just the AgentMail-relayed copy).
- `List-Unsubscribe-Post` (RFC 8058) not detected — one-click unsubscribe (POST) compliance unconfirmed.
- No physical mailing address detected in the truncated HTML — CAN-SPAM requires a postal address in every commercial email; this may simply be in the untruncated footer (common placement) and should be verified against the full source before treating as a real gap.
- `Authentication-Results` header not found — SPF/DKIM/DMARC pass/fail status cannot be confirmed from this data; this is a relay-visibility limitation rather than confirmed authentication failure.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- Tracking/attribution parameters observed use Kohl's proprietary scheme rather than standard UTM (`mi_mid`, `mi_cid`, `cp_cid`, `mi_ecmp=1019362_202689`, `email_name=260809_DG_Email_Sunday`) — no `utm_source`/`utm_medium`/`utm_campaign` present in the visible pixels or click URLs.
- Cannot verify landing-page alignment (destination URL/content match) since all 73 click links route through opaque redirectors that were skipped by the HTTP probe.

7. Recommendations
- Add `alt=""` to the identified tracking-pixel images (or `role="presentation"` where applicable) to silence accessibility scans, even though functional impact is minimal.
- Remove the stray `</custom>` closing tag after the `open.aspx` pixel — invalid HTML.
- Verify against full raw MIME headers (not the AgentMail-relayed copy) that `List-Unsubscribe`, `List-Unsubscribe-Post`, and `Authentication-Results` are actually present — current WARNs may reflect relay capture limits rather than true absence.
- Confirm a physical mailing address exists in the untruncated footer; if genuinely absent, this is a CAN-SPAM compliance gap requiring immediate fix.
- If destination-page validation is required, resolve a sample of the 73 skipped redirect links manually to confirm they land on active, matching pages (not covered by the automated probe).
## Recent history

- [[2026-08-08-save-20-earn-kohl-s-cash-it-s-that-easy--ines-counter-department-store-fap6e]] — 6/10 (2026-08-08)
- [[2026-08-08-shift-seasons-with-new-pre-fall-jackets--ines-counter-department-store-fap6e]] — 5/10 (2026-08-08)
- [[2026-08-08-ready-set-shop-new-beauty-has-landed-hp2v610000019fe188517697--ines-counter-department-store-fap6e]] — 6/10 (2026-08-08)

