---
slug: 2026-07-31-refresh-their-room-before-school-starts
type: email
date: 2026-07-31
persona: linnea-crate-cb-fap6e
score: "7/10"
sender: Crate & Kids
subject: Refresh their room before school starts
tags: [email, score-7, sender/crate-kids]
---
# Refresh their room before school starts
**Score:** 7/10 · **Type:** Email audit · **2026-07-31**
## Full review
## Technical Audit

## Technical Audit: "Refresh their room before school starts" (Crate & Kids)

### 1. Technical Summary
Standard Marigold/Cheetah Digital ("MI") transactional template with heavy tracking instrumentation and multiple accessibility/metadata defects; unsubscribe and authentication headers could not be confirmed from the available data.

### 2. Link & Tracking Issues
- 81 tracking/click-redirect links were present but skipped by the automated link prober (wrapped redirect domains), so destination validity is unconfirmed.
- Multiple tracking/beacon pixels detected, some duplicated:
  - `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png?mi_u=...` — same pixel URL repeated **6 times** in the source.
  - `sr.rlcdn.com/448796.gif?s=...&n=1` through `n=5` — LiveRamp identity pixel fired **5 times** with incrementing `n=` sequence params.
  - `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif?mi_u=...` — additional open-tracking pixel.
  - `dv.crateandbarrel.com/o/ddf6c950-...?mi_mid=...&cp_tp=v` — dynamic content/personalization tracking call.
  - Redundant identical pixel calls (6x MI, 5x LiveRamp) add payload weight without evident functional benefit; worth confirming with ESP whether this is intentional (e.g., per-block open tracking) or a template bug.

### 3. Rendering & Accessibility
- **All 38 images flagged with missing `alt` text** by QA (product imagery, hero banners, and tracking pixels alike) — screen readers will announce nothing for content images if they fail to load.
- `<title>Crate & Barrel</title>` does not match the sending brand "Crate & Kids" (From: `crateandkids@mail.crateandbarrel.com`) — likely an un-updated shared template value; affects browser/tab title and some screen-reader announcements.
- Unresolved template placeholder left in source: `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` (also a typo — "IMPUT") — indicates the build wasn't fully cleaned before send.
- Standard MSO/Outlook conditional comments, `ExternalClass` resets, and responsive breakpoints (460px, 640px, 768px) are present and correctly structured — no issues found there.

### 4. Personalization & Merge Tokens
No merge tags, dynamic placeholders (e.g., `%%FIRSTNAME%%`, `{{token}}`), or unresolved personalization syntax were found in the visible HTML. Note: source was truncated, so this cannot be fully confirmed end-to-end — recommend re-checking the untruncated payload for unresolved tokens, particularly around the `dv.crateandbarrel.com` dynamic content call.

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)
- **List-Unsubscribe header**: not found in captured headers. [WARN — may be an AgentMail relay capture gap rather than a true absence; cannot confirm compliance status either way from this data.]
- **List-Unsubscribe-Post header (RFC 8058)**: not found — one-click unsubscribe support unconfirmed.
- **Authentication-Results header** (SPF/DKIM): not found — sender authentication status unknown via this relay.
- No footer/unsubscribe link content was visible in the truncated source to confirm an in-body unsubscribe mechanism exists.
- **Recommend verifying directly against raw SMTP headers from the original delivery path (not just the AgentMail relay capture)** before treating these as compliance failures — the QA tool itself flags these as relay limitations, not confirmed violations.

### 6. Email-to-Site Continuity (UTM params, landing alignment)
Not verifiable from available data: all 81 outbound links route through click-tracking/redirect domains that were skipped by the prober, so UTM parameters and final landing-page destinations cannot be confirmed from the HTML source alone. Recommend a manual click-through pass (or unwrapping the redirect chain) to confirm UTM consistency and that landing pages match the "back to school / kids' room" campaign theme.

### 7. Recommendations
1. Deduplicate the repeated tracking pixels (6x `mi.crateandbarrel.com` open pixel, 5x `sr.rlcdn.com` LiveRamp pixel) or confirm with the ESP that repetition is intentional.
2. Add `alt` attributes to all content images at minimum; decorative/tracking pixels can use `alt=""`.
3. Fix `<title>` to match the sending brand ("Crate & Kids") rather than the parent "Crate & Barrel."
4. Remove the leftover template placeholder comment (`IMPUT HERE CLIENT FONT IMPORT SCRIPT`) before future sends.
5. Independently verify List-Unsubscribe / List-Unsubscribe-Post and SPF/DKIM Authentication-Results against raw headers outside the AgentMail relay, since the relay may not be surfacing them even if present.
6. Manually unwrap a sample of the 81 tracking links to confirm UTM parameters and landing-page alignment with the campaign.
## Recent history

- [[2026-07-31-finally-a-beautiful-sofa-that-reclines-too]] — 7/10 (2026-07-31)
- [[2026-07-30-starts-now-bestselling-aspen-dinnerware-15-off-433b2a6d-d70d-4bfc-8753-]] — 8/10 (2026-07-30)
- [[2026-07-30-shop-the-bedding-guide-4d1566d1-fc76-4b02-b171-]] — 6/10 (2026-07-30)

