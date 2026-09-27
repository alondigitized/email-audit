---
slug: 2026-09-22-our-shared-room-guide-yes-it-can-work
type: email
date: 2026-09-22
persona: linnea-crate-cb-fap6e
score: "5/10"
sender: Crate & Kids Design Desk
subject: Our shared room guide (yes, it can work!) →
tags: [email, score-5, sender/crate-kids-design-desk]
---
# Our shared room guide (yes, it can work!) →
**Score:** 5/10 · **Type:** Email audit · **2026-09-22**
## Full review
## Technical Audit

1. Technical Summary
This Crate & Kids marketing email uses a standard VML/MSO-hardened responsive table layout with multiple third-party tracking pixels; the primary technical gaps are missing unsubscribe/authentication headers and near-universal missing alt text on content images.

2. Link & Tracking Issues
- 93 tracking/click-redirect links were skipped by automated HTTP probing (redirect domains), so live-link validity cannot be confirmed from this data — recommend manual click-through QA before send.
- Multiple pixel trackers present: `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png` (6 instances), `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif`, `dv.crateandbarrel.com/o/5db9975c-e348-4f6f-982b-965a660ba46f`, and `sr.rlcdn.com/448796.gif` (LiveRamp/RampID, 5 sequential instances with `n=1` through `n=5`). No issues found with pixel implementation itself, but volume (11+ tracking beacons) may impact load time on slow connections.
- No issues found with primary CTA link structure in the truncated source (full link targets not visible in provided HTML excerpt).

3. Rendering & Accessibility
- 57 of ~59 images are missing `alt` text, including all primary lifestyle/product imagery served from `image.mail.crateandbarrel.com` and the hero asset at `s7d5.scene7.com/.../2026_0710_Kids_StorybookLookbook/...`. This fails WCAG 1.1.1 and will render as blank space with no fallback text if images are blocked (common in Outlook/corporate mail clients with images-off default).
- Tracking pixels/gifs missing alt text (`f3c0d22992a01946.png`, `o.gif`, `448796.gif`, `5db9975c...`) is expected/acceptable since these are non-content beacons — not flagged as an accessibility issue.
- MSO/VML conditional comments, `x-apple-disable-message-reformatting`, and `format-detection` meta tags are correctly implemented for Outlook/iOS rendering consistency. No issues found here.
- `color-scheme`/`supported-color-schemes` both set to `light` only — no dark-mode-specific styles provided, so dark mode clients (Apple Mail, Outlook.com) will auto-invert colors, which can distort brand colors/contrast. Flagged as a rendering risk, not confirmed as broken without a rendered screenshot.

4. Personalization & Merge Tokens
- No merge tokens (e.g., `{{first_name}}`, `%%FIELD%%`) are visible in the truncated HTML source provided.
- No issues found — but note the source was truncated, so personalization logic later in the document (e.g., dynamic product blocks) could not be verified.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header not found** — QA flags this as possibly an artifact of the AgentMail relay not capturing/forwarding the header rather than the sender omitting it; cannot confirm CAN-SPAM violation from this data alone. Recommend verifying at the originating ESP (appears to be Cheetah Digital/Marigold based on `mi.crateandbarrel.com` and `dv.crateandbarrel.com` tracking domains).
- **List-Unsubscribe-Post header (RFC 8058) not found** — same relay-capture caveat applies; if genuinely absent, one-click unsubscribe (Gmail/Yahoo bulk sender requirements) is not supported.
- **Authentication-Results header not found** — SPF/DKIM/DMARC pass/fail status cannot be verified from available data; this is a QA/relay limitation, not confirmed evidence of an authentication failure.
- Body-level unsubscribe link/footer text was not visible in the truncated HTML — cannot confirm presence of a compliant unsubscribe mechanism in the message body itself.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- No destination/landing URLs are visible in the truncated HTML source (links route through skipped tracking-redirect domains), so UTM parameter presence and landing-page alignment cannot be verified with available evidence.

7. Recommendations
- Obtain the full (non-truncated) HTML and re-run header capture directly against the originating ESP (bypassing AgentMail relay) to confirm real presence/absence of `List-Unsubscribe`, `List-Unsubscribe-Post`, and `Authentication-Results` headers.
- Add descriptive `alt` text to all 33+ content images currently missing it, particularly the hero storybook lookbook asset and product shots.
- Manually click-test a sample of the 93 skipped tracking redirects to confirm they resolve to live, correct destination URLs before send.
- Add dark-mode-safe styling (e.g., `supported-color-schemes: light dark` with corresponding CSS) if brand color integrity in dark mode matters for this campaign.
- Verify final destination URLs carry consistent UTM parameters and route to live, matching landing pages once full HTML/redirect targets are available.
## Recent history

- [[2026-08-19-can-t-figure-it-out-let-our-designers-help-for-free]] — 5/10 (2026-08-19)
- [[2026-08-19-the-ultimate-bedroom-makeover-inspo]] — 7/10 (2026-08-19)
- [[2026-08-18-bestselling-sofas-made-even-more-beautiful]] — 6/10 (2026-08-18)

