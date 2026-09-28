---
slug: 2026-09-28-our-favorite-future-heirlooms-from-le-creuset
type: email
date: 2026-09-28
persona: linnea-crate-cb-fap6e
score: "7/10"
sender: Crate & Barrel
subject: Our favorite future heirlooms from Le Creuset
tags: [email, score-7, sender/crate-barrel]
---
# Our favorite future heirlooms from Le Creuset
**Score:** 7/10 · **Type:** Email audit · **2026-09-28**
## Full review
## Technical Audit

1. Technical Summary
Email is structurally sound (57% automated-check pass rate driven mostly by alt-text gaps), but is missing key deliverability/compliance headers and has widespread missing alt text across content and tracking images.

2. Link & Tracking Issues
- 74 tracking/click-redirect links were skipped by HTTP probing (redirect domains, not directly verifiable) — no confirmed broken links, but destinations are unverified.
- Multiple pixel trackers present: `mi.crateandbarrel.com/p/rp/...` (6 instances), `sr.rlcdn.com/448796.gif` (5 instances, sequential `n=1..5` params suggesting possible duplicate firing), `mi.crateandbarrel.com/p/up/.../o.gif`, and `dv.crateandbarrel.com/o/...`. No issues found with the tracking setup itself beyond the missing alt attributes (see below).

3. Rendering & Accessibility
- 27 images missing `alt` text, including all primary product/lifestyle images (`image.mail.crateandbarrel.com/lib/...`) and the hero/anthem asset from `s7d5.scene7.com`. Decorative tracking pixels (Sailthru/`mi.crateandbarrel.com`, `sr.rlcdn.com`) also lack `alt=""`, which is the correct fix for those (empty alt, not missing) rather than a real accessibility gap.
- Content images should carry descriptive `alt` text; tracking/pixel images should carry `alt=""` to be properly ignored by screen readers.
- Table-based layout with extensive MSO/Outlook conditional fixes and legacy DOCTYPE (XHTML 1.0 Transitional) — consistent with standard ESP-generated HTML, no structural rendering defects identified in the visible source.

4. Personalization & Merge Tokens
- No unresolved merge tokens (e.g., `{{first_name}}`, `%%FIRSTNAME%%`) found in the visible source.
- No issues found.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- `List-Unsubscribe` header not detected — cannot confirm one-click unsubscribe support at the header level (may be a relay-capture artifact via AgentMail rather than a true absence; flag as unconfirmed).
- `List-Unsubscribe-Post` (RFC 8058) header not detected — same caveat.
- `Authentication-Results` header not found — SPF/DKIM pass/fail status cannot be verified from available data.
- Unsubscribe link presence/placement in the HTML body itself was not confirmed in the truncated source provided — recommend confirming a body-level unsubscribe link independent of headers.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- Tracking/redirect links (74 total) were not resolved, so destination UTM parameters and landing-page alignment could not be verified in this pass.
- No issues found based on available data — flagged as unverified rather than confirmed clean.

7. Recommendations
- Add descriptive `alt` text to all 21 content/product images; add `alt=""` to the 6 pixel-tracking/beacon images.
- Confirm with the ESP/relay whether `List-Unsubscribe` and `List-Unsubscribe-Post` headers are genuinely absent or simply not captured by the AgentMail relay; if genuinely absent, add both for CAN-SPAM/Gmail bulk-sender compliance.
- Confirm SPF/DKIM/DMARC alignment via a raw header capture outside the relay, since `Authentication-Results` wasn't available here.
- Spot-check a sample of the 74 skipped tracking links directly (outside automated probing) to confirm final landing pages carry expected UTM parameters and resolve without redirect loops or errors.
## Recent history

- [[2026-08-19-can-t-figure-it-out-let-our-designers-help-for-free]] — 5/10 (2026-08-19)
- [[2026-08-19-the-ultimate-bedroom-makeover-inspo]] — 7/10 (2026-08-19)
- [[2026-08-18-bestselling-sofas-made-even-more-beautiful]] — 6/10 (2026-08-18)

