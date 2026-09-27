---
slug: 2026-09-20-40-off-is-here-today-gone-tomorrow-2924e847-3f8c-457c-bfd9---ines-counter-department-store-fap6e
type: email
date: 2026-09-20
persona: ines-counter-department-store-fap6e
score: "5/10"
sender: Kohl’s
subject: 40% off is here today, gone tomorrow ...
tags: [email, score-5, sender/kohl-s]
---
# 40% off is here today, gone tomorrow ...
**Score:** 5/10 · **Type:** Email audit · **2026-09-20**
## Full review
## Technical Audit

1. Technical Summary
Sender-authenticated marketing email with standard tracking/pixel infrastructure; automated QA flags missing unsubscribe/authentication headers and widespread missing alt text on tracking images.

2. Link & Tracking Issues
- Preheader/body links route through `click.s.kohls.com` redirect wrapper with base64-style query param (`?qs=ABB7...`), consistent with standard ESP click-tracking.
- Additional first-pixel beacon at top of body: `https://click.chp.kohls.com/o/e6e50eb6-ec9a-4a0a-abb0-b30707590374?mi_cid=...&mi_mid=...` — CoherentPath/marketing-cloud open tracker.
- Secondary open pixel: `https://mi.kohls.com/p/up/88954bbbbcab3c0e/o.gif?mi_u=604230016&mi_ecmp=1022110_2026920`.
- Third open-tracking mechanism: `https://click.s.kohls.com/open.aspx?RZYXMN62N72UVHXUSTA5DSEYVM.60265&d=60265&bmt=0` — note this `<img>` tag is malformed, closed with a stray `</custom>` tag instead of a matching close (no closing needed for `<img>`, but the erroneous `</custom>` is invalid markup and will be ignored by renderers, though it indicates a templating/build artifact).
- Adobe Analytics/Audience Manager beacon: `https://kohls.demdex.net/event?d_sid=13245196`.
- QA flagged 62 tracking/redirect links skipped from HTTP probing (expected — redirect domains not resolvable without session context); no broken direct links confirmed in the visible source.

3. Rendering & Accessibility
- 8 images confirmed missing `alt` attributes per QA (tracking pixels/beacons: `e6e50eb6...`, `o.gif`, `event`, and five `mi.kohls.com/p/rp/*.png` open-tracking pixels). These are 0/1px tracking pixels, so the missing alt text has no visible accessibility impact, but two (`event`, `o.gif`) also lack `aria-hidden="true"` (unlike the `open.aspx` pixel, which correctly sets `aria-hidden="true"`) — should be added for screen-reader hygiene.
- MSO conditional comments and `@media max-width:500px` responsive block are present and well-formed.
- Empty `<title></title>` tag — no subject-line fallback for clients that render the HTML `<title>` in previews.
- `<link href="" rel="shortcut icon">` — empty `href`, dead favicon reference (harmless but should be removed).

4. Personalization & Merge Tokens
- No unresolved merge tags (e.g., `{{first_name}}`, `%%FIELD%%`) visible in the truncated source.
- Tracking URLs carry recipient-level identifiers via query params (`mi_cid=67791fba63db790b`, `mi_mid=01a0be42-2100-7000-80e4-c8dd1e9833a8`) — correctly populated, not literal placeholders.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- QA: `List-Unsubscribe` header not found — cannot confirm one-click unsubscribe support at the header level (may be a relay-capture limitation rather than absence in the original send).
- QA: `List-Unsubscribe-Post` (RFC 8058) not found — same caveat.
- QA: `Authentication-Results` header not found — SPF/DKIM/DMARC pass/fail status cannot be verified from available data.
- No footer/unsubscribe link visible in the truncated HTML to independently confirm a body-level unsubscribe mechanism; truncation limits this assessment — recommend reviewing full source before concluding non-compliance.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- Campaign links use proprietary tracking params (`mi_ecmp=1022110_2026920`, `email_name=260920_DG_Email_Mystery`) rather than standard UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`) — this is normal for platforms using their own attribution schema (here, an Cheetah/CoherentPath-style ESP) but means standard UTM-based analytics tools won't capture this campaign without a translation layer.
- Cannot verify landing page alignment — no resolved destination URL is present in the truncated source (all links are wrapped redirects).

7. Recommendations
- Add `alt=""` (or `aria-hidden="true"`) to the two open-tracking pixels currently missing both (`kohls.demdex.net/event`, `mi.kohls.com/.../o.gif`) for consistency with the other pixel that already has `aria-hidden="true"`.
- Remove the stray `</custom>` closing tag after the `click.s.kohls.com/open.aspx` pixel — invalid markup, likely a template artifact.
- Remove the empty `<link href="" rel="shortcut icon">`.
- Populate the `<title>` tag rather than leaving it empty.
- Verify at the raw SMTP/header level (outside this relay) that `List-Unsubscribe` and `List-Unsubscribe-Post` are actually present — current absence may be an artifact of the AgentMail relay not surfacing them rather than a true compliance gap.
- Confirm SPF/DKIM/DMARC alignment via raw header capture, since `Authentication-Results` wasn't available through this pipeline.
## Recent history

- [[2026-09-20-a-new-exclusive-brunello-cucinelli-collection--ines-counter-department-store-fap6e]] — 6/10 (2026-09-20)
- [[2026-09-20-40-off-is-here-today-gone-tomorrow-1bee51b7-f98d-4074-9367---ines-counter-department-store-fap6e]] — 5/10 (2026-09-20)
- [[2026-09-20-your-fall-beauty-routine-is-coming-together-hp2v61000001a0bf9ff70ccb--ines-counter-department-store-fap6e]] — 5/10 (2026-09-20)

