---
slug: 2026-08-26-instant-inspo-stripe-drenching--felix-plinth-home-furniture-fap6e
type: email
date: 2026-08-26
persona: felix-plinth-home-furniture-fap6e
score: "3/10"
sender: Crate & Kids
subject: "Instant inspo: stripe drenching"
tags: [email, score-3, sender/crate-kids]
---
# Instant inspo: stripe drenching
**Score:** 3/10 · **Type:** Email audit · **2026-08-26**
## Full review
## Technical Audit

1. Technical Summary
Standard ESP-rendered (MessageIQ) HTML email with a large tracked-image and redirect-link payload. No hard blocking issues; several compliance-header and accessibility gaps were flagged by automated QA.

2. Link & Tracking Issues
- 101 tracking/click-redirect links detected and skipped by the automated HTTP probe (redirect domains not resolvable programmatically) — destination validity for these could not be confirmed and should be manually click-tested.
- Multiple open/pixel trackers present: `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png` (6 instances), `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif`, and `sr.rlcdn.com/448796.gif` (5 sequential instances, `n=1`–`n=5`) — consistent with standard ESP open-tracking and a LiveRamp/RampID (`rlcdn.com`) data-onboarding pixel.
- One `dv.crateandbarrel.com/o/ba6a7bed-...?mi_mid=...&cp_tp=v` view-tracking beacon present.

3. Rendering & Accessibility
- 44 distinct images (plus repeated tracking pixels) are missing `alt` text, including all primary product/lifestyle images (e.g. `bbf6f9d4-...png`, `7e8bad1f-...jpg`, `f2999bfc-...jpg`, etc.). This fails WCAG 1.1.1 and means screen-reader users and images-off inboxes get no fallback content.
- Markup includes standard Outlook/MSO conditional comments, `-ms-text-size-adjust`/`-webkit-text-size-adjust` resets, and a 460px mobile breakpoint — no rendering-engine issues detected in the provided source.
- One malformed HTML comment: `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` — a leftover/unfilled template placeholder (typo "IMPUT"), harmless but indicates the font-import step may not have been completed by the ESP template process.

4. Personalization & Merge Tokens
- No unresolved merge tags (e.g. `%%FIRSTNAME%%`, `{{}}`) visible in the truncated source.
- Tracking URLs carry a consistent `mi_u`/`mi_mid` hashed subscriber identifier across pixels and the view-tracking beacon, indicating per-recipient personalization/stitching is in place at the infrastructure level.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- `List-Unsubscribe` header not found — required for CAN-SPAM/one-click unsubscribe support in Gmail/Yahoo bulk-sender rules; may be a relay-capture issue (AgentMail) rather than a true absence, but should be verified against raw headers at the source MTA.
- `List-Unsubscribe-Post` (RFC 8058) header not found — one-click unsubscribe cannot be confirmed as supported.
- `Authentication-Results` header not found — SPF/DKIM pass/fail status could not be verified via this relay; recommend checking headers directly at the receiving MTA rather than the AgentMail-relayed copy.
- No in-body compliance issues (physical address/unsubscribe footer) evaluable from the truncated source provided.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- Not evaluable from the truncated HTML source — the 101 click-redirect links were skipped by the probe, so destination URLs and UTM parameters could not be extracted or checked against landing pages.

7. Recommendations
- Add descriptive `alt` text to all 44 flagged product/lifestyle images at minimum for accessibility and images-off rendering.
- Fix the unfilled template placeholder comment (`IMPUT HERE CLIENT FONT IMPORT SCRIPT`) with the ESP/template team.
- Re-verify `List-Unsubscribe`, `List-Unsubscribe-Post`, and `Authentication-Results` directly against the source MTA headers (bypassing the AgentMail relay) to confirm whether these are genuinely missing or a relay-capture artifact.
- Manually sample-test a subset of the 101 tracking/redirect links to confirm they resolve to live, correctly-tagged landing pages, since the automated probe could not validate them.
## Recent history

- [[2026-08-26-swimming-pools-clearance-up-to-70-off--felix-plinth-home-furniture-fap6e]] — 4/10 (2026-08-26)
- [[2026-08-26-suite-upgrades-on-sale--felix-plinth-home-furniture-fap6e]] — 5/10 (2026-08-26)
- [[2026-08-26-need-new-furniture-up-to-50-off-earn-2x-rewards-now-9cdef5da-ec27-4c68-a2f2---felix-plinth-home-furniture-fap6e]] — 3/10 (2026-08-26)

