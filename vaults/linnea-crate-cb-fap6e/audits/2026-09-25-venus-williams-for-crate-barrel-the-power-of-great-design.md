---
slug: 2026-09-25-venus-williams-for-crate-barrel-the-power-of-great-design
type: email
date: 2026-09-25
persona: linnea-crate-cb-fap6e
score: "8/10"
sender: Crate & Barrel
subject: Venus Williams for Crate & Barrel | The power of great design
tags: [email, score-8, sender/crate-barrel]
---
# Venus Williams for Crate & Barrel | The power of great design
**Score:** 8/10 · **Type:** Email audit · **2026-09-25**
## Full review
## Technical Audit

1. Technical Summary
Email renders via standard MSO/Outlook-compatible responsive table markup with tracking/pixel infrastructure (Sailthru "mi.crateandbarrel.com" + LiveRamp) but fails several automated compliance and accessibility checks.

2. Link & Tracking Issues
- 74 tracking/click-redirect links detected and skipped from HTTP probing (destination validity unconfirmed by automation).
- Multiple open-tracking pixels present: `mi.crateandbarrel.com/p/rp/*.png` (7 instances) and `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif` — standard Sailthru open tracking, functioning as expected.
- 5 sequential LiveRamp identity-sync pixels (`sr.rlcdn.com/448796.gif?...&n=1` through `n=5`) — third-party data-onboarding calls beyond standard open tracking.
- 1 additional tracking beacon to `dv.crateandbarrel.com/o/555eabe0-...?mi_cid=...&mi_mid=...` (likely DoubleVerify or similar verification vendor).

3. Rendering & Accessibility
- 30+ content/creative images missing `alt` text (e.g., `bbf6f9d4-86cc-437a-aa80-391067b74306.png`, `2026_0915_CB_VenusWilliams_Collab_hero`, `202506_CB_TSB_EverydayFreeShip`), including the campaign hero image — screen readers and blocked-image fallback will show nothing for the primary visual/CTA content.
- Tracking pixels also flagged as missing alt (expected/non-issue for 1x1 pixels — `mi.crateandbarrel.com`, `sr.rlcdn.com`, `dv.crateandbarrel.com` assets).
- MSO conditional comments and legacy DOCTYPE (XHTML 1.0 Transitional) present — indicates Outlook-desktop targeting, consistent with standard ESP template output.

4. Personalization & Merge Tokens
No merge/personalization tokens observed in the truncated source; no broken or unresolved token syntax (e.g., `{{...}}`, `%%...%%`) detected in the visible HTML.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- List-Unsubscribe header: not found in captured headers — may be an AgentMail relay capture limitation rather than sender omission; cannot confirm CAN-SPAM one-click compliance from this data alone.
- List-Unsubscribe-Post (RFC 8058): not found — one-click unsubscribe support unconfirmed.
- Authentication-Results header (SPF/DKIM/DMARC): not found — sender authentication status unknown via this relay.
- No unsubscribe link/footer visible in the truncated HTML source provided (truncation limits this assessment).

6. Email-to-Site Continuity (UTM params, landing page alignment)
Cannot assess — no destination URLs are visible in the truncated source (74 tracking links were redirect-wrapped and skipped by probing), so UTM parameter presence/consistency with landing pages cannot be verified from available data.

7. Recommendations
- Add descriptive `alt` text to all content images, particularly the Venus Williams hero and free-shipping banner, which carry primary message/CTA weight.
- Investigate why List-Unsubscribe / List-Unsubscribe-Post / Authentication-Results headers aren't surfacing — confirm whether this is an AgentMail relay capture gap or an actual sender-side gap, since RFC 8058 one-click unsubscribe is a Gmail/Yahoo bulk-sender requirement as of 2024.
- Obtain full (untruncated) HTML/headers to verify unsubscribe link presence and UTM/landing-page alignment, since both are currently unconfirmed rather than confirmed-absent.
- No action needed on tracking-pixel alt-text warnings — these are expected for 1x1 tracking assets.
## Recent history

- [[2026-08-19-can-t-figure-it-out-let-our-designers-help-for-free]] — 5/10 (2026-08-19)
- [[2026-08-19-the-ultimate-bedroom-makeover-inspo]] — 7/10 (2026-08-19)
- [[2026-08-18-bestselling-sofas-made-even-more-beautiful]] — 6/10 (2026-08-18)

