---
slug: 2026-08-23-bedroom-furniture-to-create-their-dream-space--felix-plinth-home-furniture-fap6e
type: email
date: 2026-08-23
persona: felix-plinth-home-furniture-fap6e
score: "5/10"
sender: Crate & Kids
subject: Bedroom furniture to create their dream space →
tags: [email, score-5, sender/crate-kids]
---
# Bedroom furniture to create their dream space →
**Score:** 5/10 · **Type:** Email audit · **2026-08-23**
## Full review
## Technical Audit

1. Technical Summary
Standard Cheetah Digital/MessageGears ESP template with tracking-domain redirects; no critical technical failures, but header-level compliance signals are unverifiable and image alt attributes are absent across the board.

2. Link & Tracking Issues
- 84 tracking/click-redirect links detected and skipped by automated probe (domain not resolvable directly) — cannot confirm final destination validity from this scan alone.
- Multiple pixel trackers present: `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png` (6 instances), `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif`, `dv.crateandbarrel.com/o/c27072a2-...` (dynamic yield/personalization pixel), and LiveRamp/RampID pixel `sr.rlcdn.com/448796.gif` (5 instances, sequential `n=1` through `n=5`).
- No issues found with primary image asset URLs (`image.mail.crateandbarrel.com/lib/...`) — all resolve to a consistent CDN library path pattern.

3. Rendering & Accessibility
- 30 images missing `alt` text, including all primary content images (`bbf6f9d4...png`, `4a259be5...jpg`, etc.) and all tracking pixels. Content images without alt text will render blank with no fallback text for screen readers or blocked-image scenarios.
- Template includes standard MSO conditional comments, Outlook font-fix classes, and mobile media queries (`max-width:460px`) — no structural rendering issues found in the head/style block.
- `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` — leftover placeholder/typo ("IMPUT") from the ESP template that was not replaced or removed; cosmetically harmless (HTML comment) but indicates an unfinished production step.

4. Personalization & Merge Tokens
- No unresolved merge tags (e.g. `%%`, `{{`, `[FIRSTNAME]`) found in the visible HTML source provided.
- `dv.crateandbarrel.com` dynamic-yield-style pixel includes `mi_mid` param (`01a02c58-9d00-7000-9f65-065177027199`) suggesting per-recipient personalization/decisioning is active — no anomalies found in this token's format.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- `List-Unsubscribe` header not found in the captured headers — cannot confirm one-click unsubscribe is exposed at the mail-client level (may be relay-capture limitation rather than an actual absence; flag for verification against raw source headers).
- `List-Unsubscribe-Post` (RFC 8058) not found — one-click unsubscribe (POST) support unconfirmed.
- `Authentication-Results` header not found — SPF/DKIM/DMARC pass/fail status unknown from this capture.
- Note: all three warnings are QA-tool capture limitations via the AgentMail relay, not confirmed failures — recommend independent verification via a raw header dump (e.g. direct SMTP capture or a service like MXToolbox) before treating as compliance defects.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- Tracking/redirect links (84 total) were not resolved by the automated probe, so UTM parameter presence and landing-page alignment cannot be confirmed in this pass — evidence insufficient.

7. Recommendations
- Add descriptive `alt` text to all 24 unique content images (currently 0/24 have alt attributes); tracking pixels can retain empty `alt=""` per accessibility best practice rather than being omitted entirely.
- Remove leftover ESP placeholder comment (`IMPUT HERE CLIENT FONT IMPORT SCRIPT`) before next send.
- Independently verify `List-Unsubscribe`/`List-Unsubscribe-Post` headers and `Authentication-Results` (SPF/DKIM/DMARC) via raw SMTP headers, since the AgentMail relay did not capture them and CAN-SPAM/one-click-unsubscribe compliance cannot be confirmed from this data alone.
- Manually resolve a sample of the 84 tracking links to confirm final landing-page URLs carry correct UTM parameters and match live product/category pages.
## Recent history

- [[2026-08-23-up-to-60-off-clearance-and-new-items-just-got-added--felix-plinth-home-furniture-fap6e]] — 5/10 (2026-08-23)
- [[2026-08-23-see-what-just-got-added-to-our-end-of-season-clearance--felix-plinth-home-furniture-fap6e]] — 5/10 (2026-08-23)
- [[2026-08-23-have-you-seen-our-new-bedroom-furniture--felix-plinth-home-furniture-fap6e]] — 5/10 (2026-08-23)

