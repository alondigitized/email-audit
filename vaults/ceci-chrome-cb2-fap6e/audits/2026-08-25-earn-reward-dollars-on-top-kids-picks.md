---
slug: 2026-08-25-earn-reward-dollars-on-top-kids-picks
type: email
date: 2026-08-25
persona: ceci-chrome-cb2-fap6e
score: "5/10"
sender: Crate & Kids SALE
subject: Earn Reward Dollars on top kids’ picks→
tags: [email, score-5, sender/crate-kids-sale]
---
# Earn Reward Dollars on top kids’ picks→
**Score:** 5/10 · **Type:** Email audit · **2026-08-25**
## Full review
## Technical Audit

## Technical Audit: Crate & Kids SALE — "Earn Reward Dollars on top kids' picks"

**1. Technical Summary**
Email renders via a standard MI (Marketing Impact) ESP template with full Outlook/MSO and mobile-media-query fallbacks; automated QA passed 57% of checks with 0 hard issues and 3 warning categories, concentrated in accessibility (alt text) and header-level compliance/deliverability signals.

**2. Link & Tracking Issues**
- 115 tracking/click-redirect links were present but skipped from HTTP probing (expected behavior for redirect-domain links, not a defect).
- Multiple pixel trackers detected: `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png` (×6), `sr.rlcdn.com/448796.gif` (×5, sequential `n=1`–`n=5` params — LiveRamp/RampID pixel), and `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif` (open pixel). All resolve to first/third-party MI and RampID tracking infrastructure — consistent with standard ESP open/click tracking, no anomalies observed.
- Cannot confirm individual CTA destination URLs or redirect health from the truncated source — the visible portion is head/style only.

**3. Rendering & Accessibility**
- 49 images flagged with missing `alt` text, including primary content images (`bbf6f9d4-...png`, hero image `2025_0728_CBK_WholeHomeNewArrivals_HERO`, and ~40 product/lifestyle JPGs) and all tracking pixels/gifs.
- Tracking pixels lacking alt text is expected/non-issue; however, content and hero images without alt text is a genuine accessibility gap for screen-reader users.
- Template includes standard Outlook MSO conditional blocks, `x-apple-disable-message-reformatting`, and mobile breakpoints at 460px — no rendering-fallback defects observed in the head/style block.

**4. Personalization & Merge Tokens**
No merge tokens or personalization variables (e.g. `{{first_name}}`, AMPscript, Handlebars) are visible in the truncated HTML source provided. No issues found in the reviewable portion; full body was not available to confirm absence of broken/unresolved tokens.

**5. Compliance (CAN-SPAM, unsubscribe, authentication headers)**
- `List-Unsubscribe` header: **not found** — may indicate the header wasn't captured by the AgentMail relay rather than true absence at the source MTA; cannot confirm root cause from available data.
- `List-Unsubscribe-Post` (RFC 8058 one-click unsubscribe): **not found** — if genuinely absent at origin, this is a Gmail/Yahoo bulk-sender requirement gap as of their 2024 sender guidelines.
- `Authentication-Results` header (SPF/DKIM/DMARC): **not found** — authentication status is unknown; cannot verify sender authentication passed.
- Footer unsubscribe link/physical address (CAN-SPAM body requirements) were not visible in the truncated HTML — unable to confirm presence or absence.

**6. Email-to-Site Continuity (UTM params, landing page alignment)**
Not verifiable — the truncated HTML source ends within the `<head>`/style block and does not expose body CTA `href` values, so UTM parameters and landing-page alignment cannot be assessed from the data provided.

**7. Recommendations**
- Add descriptive `alt` text to the hero and product content images (49 flagged) for accessibility compliance; tracking pixels can remain empty-alt (`alt=""`) by design.
- Confirm at the ESP/MTA level (not just the relay capture) whether `List-Unsubscribe` and `List-Unsubscribe-Post` headers are actually being sent — RFC 8058 one-click unsubscribe is required by Gmail/Yahoo for bulk senders.
- Verify SPF/DKIM/DMARC alignment independently (e.g. via mail-tester or MXToolbox) since `Authentication-Results` wasn't captured here — this audit cannot confirm authentication status one way or the other.
- Re-run this audit against the full (untruncated) HTML body to evaluate CTA link destinations, UTM parameter consistency, footer unsubscribe/CAN-SPAM elements, and merge-token integrity, none of which were visible in the provided excerpt.
## Recent history

- [[2026-08-19-color-palettes-that-just-feel-goop]] — 5/10 (2026-08-19)
- [[2026-08-19-the-design-desk-zanna-roberts-rassi-s-twin-room-makeovers]] — 6/10 (2026-08-19)
- [[2026-08-19-new-fall-2026-inspired-by-the-english-countryside]] — 7/10 (2026-08-19)

