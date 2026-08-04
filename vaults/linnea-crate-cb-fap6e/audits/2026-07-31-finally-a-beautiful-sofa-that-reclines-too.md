---
slug: 2026-07-31-finally-a-beautiful-sofa-that-reclines-too
type: email
date: 2026-07-31
persona: linnea-crate-cb-fap6e
score: "7/10"
sender: Crate & Barrel
subject: "Finally: A beautiful sofa that reclines, too"
tags: [email, score-7, sender/crate-barrel]
---
# Finally: A beautiful sofa that reclines, too
**Score:** 7/10 · **Type:** Email audit · **2026-07-31**
## Full review
## Technical Audit

# Technical Email Audit: Crate & Barrel — "Finally: A beautiful sofa that reclines, too"

## 1. Technical Summary
The email is a standard multi-table MSO/VML-compatible HTML build (Movable Ink-templated) with functioning responsive breakpoints, but it fails baseline accessibility (alt text) and email-authentication/compliance header checks at the transport layer.

## 2. Link & Tracking Issues
- 76 tracking/click-redirect links were present but skipped by the automated HTTP prober (redirect-domain links are not resolved), so final destination URLs are **unverified** — cannot confirm they route correctly or avoid redirect loops.
- Confirmed tracking/pixel calls in source:
  - `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png?mi_u=...` (Movable Ink rendering pixel) — fired **6 times** in the document.
  - `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif?mi_u=...` (Movable Ink open pixel).
  - `sr.rlcdn.com/448796.gif?s=...&n=1` through `n=5` (LiveRamp/RampID identity sync pixels, 5 sequential calls).
  - `dv.crateandbarrel.com/o/d6adafaa-9869-4d98-981e-69e76cd8ae4c?mi_mid=...&cp_tp=v` (DoubleVerify or similar verification pixel).
- No broken/malformed `href` markup found in the visible source; full link audit is limited by the truncated HTML and skipped redirect probes.

## 3. Rendering & Accessibility
- **32 images/pixels missing `alt` text**, including primary content images (e.g., `bbf6f9d4-...png`, the Scene7-hosted hero `2026_0217_CB_PowerCollections_Main8_Opti...`) and all tracking pixels. Screen readers and blocked-image fallback states will show nothing for these.
- MSO/VML conditional comments (`<!--[if gte mso 9]>`, `<!--[if mso]>`) and Outlook font-fix classes are correctly present for Outlook desktop rendering.
- `.ExternalClass`, `.ReadMsgBody`, `-webkit-text-size-adjust` resets present — standard Gmail/Apple Mail normalization is in place.
- Responsive breakpoints defined at `max-width:460px` (mobile) and `min-width:640px/768px` (desktop image caps) — structurally sound, though actual rendering across clients could not be visually verified in this text-only audit.
- `<title>Crate & Barrel</title>` present; no `role`/ARIA landmarks in tables (standard/acceptable for email).

## 4. Personalization & Merge Tokens
No issues found. No unresolved merge tags (e.g., `{{first_name}}`, `%%FIELD%%`) or broken personalization syntax appear in the available HTML. Note: `mi_u=` query params are Movable Ink tracking tokens, not customer-facing personalization fields, and render correctly as opaque hashes.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header not found** — one-click unsubscribe support cannot be confirmed at the header level (may be relay capture issue rather than sender omission).
- **List-Unsubscribe-Post header not found (RFC 8058)** — one-click POST unsubscribe cannot be confirmed as supported.
- **Authentication-Results header not found** — SPF/DKIM/DMARC pass/fail status is unknown from available data; cannot confirm sender authentication for `mail.crateandbarrel.com`.
- In-body unsubscribe link/footer was not visible in the truncated HTML sample — cannot confirm CAN-SPAM physical-address/unsubscribe-link presence from source alone.

## 6. Email-to-Site Continuity
Cannot be evaluated with confidence: all outbound CTA links are tracking/click-redirect URLs skipped by the automated prober, so UTM parameters and final landing-page targets are unknown. No UTM query strings are visible on any link in the available (truncated) source.

## 7. Recommendations
1. Confirm with the ESP/relay (AgentMail) whether `List-Unsubscribe` / `List-Unsubscribe-Post` and `Authentication-Results` headers are being sent but stripped in transit, vs. genuinely absent — this determines whether it's a compliance gap or a monitoring gap.
2. Add `alt` attributes to all 26 content images at minimum (tracking pixels are lower priority but trivial to fix).
3. Re-run the link audit with redirects resolved (follow the 76 skipped tracking links) to verify final destination URLs and UTM parameter presence before sign-off on section 6.
4. Verify CAN-SPAM footer (physical address, unsubscribe link) against the full (non-truncated) HTML, since it wasn't present in the excerpt reviewed.
## Recent history

- [[2026-07-30-starts-now-bestselling-aspen-dinnerware-15-off-433b2a6d-d70d-4bfc-8753-]] — 8/10 (2026-07-30)
- [[2026-07-30-shop-the-bedding-guide-4d1566d1-fc76-4b02-b171-]] — 6/10 (2026-07-30)
- [[2026-07-30-new-meet-the-beatrix-collection]] — 8/10 (2026-07-30)

