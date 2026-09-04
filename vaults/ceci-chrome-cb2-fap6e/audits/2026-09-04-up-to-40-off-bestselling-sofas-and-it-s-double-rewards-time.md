---
slug: 2026-09-04-up-to-40-off-bestselling-sofas-and-it-s-double-rewards-time
type: email
date: 2026-09-04
persona: ceci-chrome-cb2-fap6e
score: "7/10"
sender: Crate & Barrel SALE
subject: Up to 40% off bestselling sofas—and it’s Double Rewards time!
tags: [email, score-7, sender/crate-barrel-sale]
---
# Up to 40% off bestselling sofas—and it’s Double Rewards time!
**Score:** 7/10 · **Type:** Email audit · **2026-09-04**
## Full review
## Technical Audit

# Technical Email Audit — Crate & Barrel: "Up to 40% off bestselling sofas—and it's Double Rewards time!"

## 1. Technical Summary
This is a standard MI (Message Interactive)/Outlook-hardened HTML email template with heavy MSO conditional CSS and a large tracking-pixel payload; automated QA passed 57% of checks with 0 hard issues and 3 warning categories, concentrated in missing alt text and unverifiable compliance headers.

## 2. Link & Tracking Issues
- 91 tracking/click-redirect links were present but skipped by the automated HTTP prober (expected behavior for redirect-domain links; not independently verified as functional).
- Multiple third-party tracking pixels are embedded: 7× `mi.crateandbarrel.com/p/rp/*.png` (open/render tracking, MessageIQ), 5× `sr.rlcdn.com/448796.gif` (LiveRamp/RampID retargeting sync, `n=1` through `n=5`), 1× `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif` (open pixel), and 1× `dv.crateandbarrel.com/o/24be79d4-...?mi_mid=...&cp_tp=v` (view-through/conversion pixel). None of these produced errors; flagged here only as inventory, not as defects.
- No broken or malformed href values were surfaced by QA in the truncated source.

## 3. Rendering & Accessibility
- 31 content images (product/hero photography under `image.mail.crateandbarrel.com/lib/...`) are missing `alt` attributes — this is a real accessibility gap for screen-reader users and for image-blocked inboxes, since no fallback text is announced or displayed.
- The additional 14 flagged images are tracking pixels (`mi.crateandbarrel.com/p/rp/*`, `sr.rlcdn.com/448796.gif`, `o.gif`, `dv.crateandbarrel.com/o/*`) — missing alt text on these is expected/non-issue since they are 1×1 decorative beacons, not content.
- Markup uses the legacy XHTML 1.0 Transitional doctype with `xmlns:v`/`xmlns:o` MSO namespaces and duplicated `format-detection` meta tags (three separate tags for telephone/address/date instead of one combined value) — functionally harmless but redundant.
- Mobile breakpoint CSS (`@media max-width:460px`) and Outlook-specific fixes (`mso-table-lspace`, conditional `<!--[if mso]>` blocks) are present and appear structurally intact from the visible source.

## 4. Personalization & Merge Tokens
No merge/personalization tokens (e.g., `{{first_name}}`, ESP-specific placeholders) are visible in the truncated HTML provided. Cannot confirm presence, correct resolution, or fallback behavior — recommend reviewing the full source before sign-off.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header**: not found — may be a relay capture limitation (AgentMail) rather than a true absence; cannot confirm compliance status from this data alone.
- **List-Unsubscribe-Post (RFC 8058)**: not found — one-click unsubscribe support is unverified.
- **Authentication-Results (SPF/DKIM/DMARC)**: not found — sender authentication status is unknown from this capture.
- All three are QA warnings tied to relay/header-capture limitations, not confirmed policy violations. Recommend re-checking against raw SMTP headers (not the relay-forwarded copy) before treating these as compliance failures.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
Cannot evaluate — the 91 tracking/redirect links were skipped by the prober, and no resolved landing-page URLs or UTM parameters are visible in the truncated HTML source. Recommend re-running with full link resolution to confirm UTM tagging and landing-page alignment with the "Double Rewards" / sofa sale promotion.

## 7. Recommendations
1. Add descriptive `alt` text to the 31 content images (product shots, hero banners) for accessibility and image-blocked rendering; leave tracking pixels alt-empty (`alt=""`) as-is.
2. Verify List-Unsubscribe / List-Unsubscribe-Post / Authentication-Results against raw SMTP headers rather than the AgentMail relay capture, since relay forwarding may strip these headers independent of actual sender compliance.
3. Re-run link resolution on the 91 skipped tracking/redirect links to confirm final landing URLs and UTM parameter continuity with the sale landing page.
4. Confirm presence/fallback behavior of any personalization tokens in the full (non-truncated) HTML source.
## Recent history

- [[2026-08-19-color-palettes-that-just-feel-goop]] — 5/10 (2026-08-19)
- [[2026-08-19-the-design-desk-zanna-roberts-rassi-s-twin-room-makeovers]] — 6/10 (2026-08-19)
- [[2026-08-19-new-fall-2026-inspired-by-the-english-countryside]] — 7/10 (2026-08-19)

