---
slug: 2026-08-22-can-t-figure-it-out-let-our-designers-help-for-free
type: email
date: 2026-08-22
persona: linnea-crate-cb-fap6e
score: "6/10"
sender: Crate & Kids
subject: Can’t figure it out? Let our designers help for FREE
tags: [email, score-6, sender/crate-kids]
---
# Can’t figure it out? Let our designers help for FREE
**Score:** 6/10 · **Type:** Email audit · **2026-08-22**
## Full review
## Technical Audit

## Technical Audit — Crate & Kids "Design Desk" Email

### 1. Technical Summary
Standard multi-client HTML email (MSO/Outlook conditional comments + mobile media queries) built on the Crate & Barrel/Zeta (formerly Zaius/MI) ESP stack, with heavy Adobe Scene7 image hosting and third-party retargeting pixels; core rendering markup is sound but accessibility, authentication-header visibility, and unsubscribe-header capture all show gaps in the automated checks.

### 2. Link & Tracking Issues
- 75 tracking/click-redirect links were skipped by the automated prober (likely `dv.crateandbarrel.com` and `mi.crateandbarrel.com` redirect wrappers) — these need manual click-through verification since they weren't validated end-to-end (e.g., `https://dv.crateandbarrel.com/o/40bae6a7-6647-4738-9b51-c244c52014a7?mi_mid=01a0298e-8080-7000-87f4-5a71574f84b3&cp_tp=v`).
- Six sequential open/retargeting pixels fire per send: `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png` (x5, likely one per content block) plus `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif` and five `sr.rlcdn.com/448796.gif?...&n=1..5` (LiveRamp/RLCDN) beacons — confirm this beacon volume is intentional and not a leftover duplicate tag.

### 3. Rendering & Accessibility
- **31 images missing `alt` text**, spanning both content images and tracking pixels — flagged by QA. Content images specifically needing alt attributes: the hero (`042025_CBK_DesignDesk_Hero-optimized.gif`), primary copy, "How It Works," "Book Appointment" CTA, "Makeovers," and "Final Rule" graphics, plus several `image.mail.crateandbarrel.com/lib/...` product photos. Tracking pixels (`f3c0d22992a01946.png`, `448796.gif`, `o.gif`) missing alt is low-impact but should be `alt=""` to avoid screen readers announcing filler.
- No `role="presentation"` issues or broken conditional-comment structure observed in the truncated source; MSO/Outlook fixes and mobile media queries (`max-width:460px`) are present and structured correctly.

### 4. Personalization & Merge Tokens
No merge tokens or personalization fields (e.g., `{{first_name}}`) are visible in the truncated HTML source. No issues found in the visible markup — full source review recommended to confirm no broken/unresolved tokens exist outside the truncated section.

### 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header not found** — may be a capture limitation of the AgentMail relay rather than an actual absence; cannot confirm one-click unsubscribe compliance from this data alone.
- **List-Unsubscribe-Post header not found (RFC 8058)** — same caveat; if genuinely absent, this send does not support Gmail/Yahoo one-click unsubscribe, a bulk-sender requirement since Feb 2024.
- **Authentication-Results header not found** — SPF/DKIM/DMARC pass/fail status is unknown from this data; cannot confirm authentication compliance.
- No visible unsubscribe link or physical address in the truncated HTML body — footer content was not included in the truncated source, so this cannot be confirmed as missing, only unverified.

### 6. Email-to-Site Continuity (UTM params, landing page alignment)
Cannot be assessed — the truncated HTML source does not include the actual CTA destination URLs (they route through the skipped `dv.crateandbarrel.com` tracking redirects), so UTM parameters and final landing-page alignment are unverified.

### 7. Recommendations
1. Add descriptive `alt` text to all 6 content/promotional images (hero, CTA, copy blocks); set `alt=""` on the pixel/tracking images to silence screen-reader noise.
2. Re-run header capture against the raw SMTP/MIME source (not the relay-parsed version) to confirm whether `List-Unsubscribe`, `List-Unsubscribe-Post`, and `Authentication-Results` are genuinely absent or just dropped by the AgentMail relay — this is a compliance-critical gap either way.
3. Manually resolve the 75 skipped tracking redirects to confirm final landing URLs and UTM parameters before sign-off.
4. Audit whether 5x duplicate `mi.crateandbarrel.com/p/rp/...` pixels and 5x `sr.rlcdn.com` beacons are intended (per-block tracking) or a tagging misconfiguration.
## Recent history

- [[2026-08-19-can-t-figure-it-out-let-our-designers-help-for-free]] — 5/10 (2026-08-19)
- [[2026-08-19-the-ultimate-bedroom-makeover-inspo]] — 7/10 (2026-08-19)
- [[2026-08-18-bestselling-sofas-made-even-more-beautiful]] — 6/10 (2026-08-18)

