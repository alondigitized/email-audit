---
slug: 2026-09-06-final-weekend-for-the-labor-day-event-shop-up-to-60-off--felix-plinth-home-furniture-fap6e
type: email
date: 2026-09-06
persona: felix-plinth-home-furniture-fap6e
score: "7/10"
sender: Crate & Barrel SALE
subject: FINAL WEEKEND for The Labor Day Event! Shop up to 60% off
tags: [email, score-7, sender/crate-barrel-sale]
---
# FINAL WEEKEND for The Labor Day Event! Shop up to 60% off
**Score:** 7/10 · **Type:** Email audit · **2026-09-06**
## Full review
## Technical Audit

# Technical Email Audit: Crate & Barrel — "FINAL WEEKEND Labor Day Event"

## 1. Technical Summary
Standard ESP-generated (Cheetah/MessageGears-style "MI" template) transactional-marketing email with heavy tracking/pixel instrumentation; automated QA passed 57% of checks, flagging authentication, unsubscribe-header, and accessibility gaps.

## 2. Link & Tracking Issues
- 67 tracking/click-redirect links were present but skipped for HTTP probing (redirect domains not resolvable via automated check) — cannot confirm destination validity or redirect chains without manual click-through.
- Multiple pixel/beacon endpoints detected: `mi.crateandbarrel.com/p/rp/*.png` (7 instances), `mi.crateandbarrel.com/p/up/*/o.gif` (open pixel), `sr.rlcdn.com/448796.gif` fired 5x (LiveRamp/RampID identity sync, ×5 suggests multiple sync partners chained), and `dv.crateandbarrel.com/o/...?mi_mid=...&cp_tp=v` (likely DoubleVerify viewability/verification pixel).
- No broken or malformed link syntax found in the visible source.

## 3. Rendering & Accessibility
- **23 images missing `alt` text**, including all primary content images (`image.mail.crateandbarrel.com/lib/.../*.jpg`) and all tracking pixels/gifs. Content images without alt text fail WCAG 1.1.1 and degrade the experience for screen-reader users and in image-blocked clients (Outlook default). Tracking pixels lacking alt is standard/non-issue, but the 14 content JPGs should carry descriptive (or empty `alt=""` if purely decorative) attributes.
- Template uses legacy XHTML 1.0 Transitional doctype with extensive MSO/Outlook conditional comments and `-ms-text-size-adjust`/`-webkit-text-size-adjust` resets — indicates standard Litmus/Email on Acid-tested build targeting Outlook desktop + mobile clients.
- `<meta name="viewport">` and responsive `@media` breakpoints at 460px present — mobile responsiveness appears intact.
- Note: `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` is a leftover template placeholder comment (typo "IMPUT") — cosmetic, no functional impact, but indicates unremoved build scaffolding.

## 4. Personalization & Merge Tokens
- No unresolved merge tags (e.g., `{{first_name}}`, `%%FIELD%%`) or broken personalization syntax found in the visible source.
- No issues found.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header not found** — could not be confirmed via the relay; if genuinely absent from the raw MIME headers, this is a Gmail/Yahoo bulk-sender requirement gap (mailbox providers require one-click unsubscribe as of 2024 bulk-sender rules).
- **List-Unsubscribe-Post header not found (RFC 8058)** — one-click unsubscribe support unconfirmed.
- **Authentication-Results header not found** — SPF/DKIM/DMARC pass/fail status could not be verified through the AgentMail relay; this is a monitoring-pipeline visibility gap, not necessarily proof of misconfigured authentication on Crate & Barrel's sending domain.
- In-body unsubscribe link/footer was not visible in the truncated HTML source provided — cannot confirm CAN-SPAM footer compliance (physical address, unsubscribe link) from available evidence.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- Cannot verify UTM parameter presence/consistency or landing-page alignment — the 67 tracking links were skipped by the automated probe and the truncated HTML does not expose resolved destination URLs.
- No issues found in the data available; flagged as **unverified** rather than passing.

## 7. Recommendations
1. Add descriptive `alt` text to the 14 primary content images (`image.mail.crateandbarrel.com/lib/...`); set `alt=""` explicitly on the 9 tracking-pixel/gif elements to signal intentional decorative status rather than an oversight.
2. Confirm List-Unsubscribe and List-Unsubscribe-Post headers are present in the raw sent MIME (independent of the AgentMail relay capture) — required for Gmail/Yahoo bulk-sender compliance; if the relay is stripping these headers, treat that as a monitoring-pipeline defect, not necessarily a sender defect.
3. Independently verify SPF/DKIM/DMARC via raw headers (e.g., `dig txt`, a direct-inbox test) since Authentication-Results was not captured through this pipeline.
4. Manually sample a subset of the 67 tracking links to confirm redirect targets resolve to live, correctly-tagged landing pages, since automated probing was skipped for all of them.
5. Remove the leftover `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` placeholder comment from the template source.
## Recent history

- [[2026-09-06-labor-day-ends-soon-up-to-60-off-earn-2x-rewards-cf761e68-0652-4012-bce1---felix-plinth-home-furniture-fap6e]] — 4/10 (2026-09-06)
- [[2026-09-06-labor-day-ends-soon-up-to-60-off-earn-2x-rewards--felix-plinth-home-furniture-fap6e]] — 4/10 (2026-09-06)
- [[2026-09-06-bonus-deals-extra-20-off-heirloom-rugs-in-jute-sisal--felix-plinth-home-furniture-fap6e]] — 6/10 (2026-09-06)

