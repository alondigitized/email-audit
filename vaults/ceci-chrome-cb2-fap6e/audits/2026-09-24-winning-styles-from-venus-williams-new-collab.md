---
slug: 2026-09-24-winning-styles-from-venus-williams-new-collab
type: email
date: 2026-09-24
persona: ceci-chrome-cb2-fap6e
score: "7/10"
sender: Crate & Barrel Kids
subject: 🏆 Winning styles from Venus Williams’ new collab
tags: [email, score-7, sender/crate-barrel-kids]
---
# 🏆 Winning styles from Venus Williams’ new collab
**Score:** 7/10 · **Type:** Email audit · **2026-09-24**
## Full review
## Technical Audit

1. Technical Summary
Email is structurally sound for rendering (VML/MSO fallbacks, mobile media queries present), but fails multiple deliverability/compliance checks and has widespread accessibility gaps due to missing alt text.

2. Link & Tracking Issues
- 76 tracking/click-redirect links were skipped by HTTP probing (redirect domains not resolvable via direct probe) — cannot confirm final destinations resolve without following redirects manually.
- Multiple pixel/tracking beacons present: `mi.crateandbarrel.com/p/rp/...`, `mi.crateandbarrel.com/p/up/.../o.gif`, `sr.rlcdn.com/448796.gif` (5 instances, sequential `n=1`–`n=5` params suggesting retry/fallback pixels), and `dv.crateandbarrel.com/o/...`. No issues with presence — standard ESP/analytics pixels — but none resolved via alt text (see Section 3).
- No broken/malformed URLs identified in the visible source.

3. Rendering & Accessibility
- 33 `<img>` elements missing `alt` text, including primary content images (Venus Williams collection product photography, e.g. `bbf6f9d4-86cc-437a-aa80-391067b74306.png`, `73fcbea2...jpg`) and spacer/rule images (`25_MI_Bottom_Spacer_40px_White`, `042025_CBK_KidsBeds1_Rule_Spacer_40px`) — spacers should carry `alt=""` (decorative), but content images should carry descriptive alt text for screen readers when images are blocked.
- Tracking pixels (rlcdn, mi.crateandbarrel) also flagged missing alt — expected/acceptable for 1x1 beacons (should be `alt=""` but not user-facing impact).
- MSO/Outlook conditional comments and `x-apple-disable-message-reformatting` present — standard defensive markup, no issues found.

4. Personalization & Merge Tokens
No issues found — no exposed unrendered merge tags (e.g. `{{first_name}}`, `%%FIELD%%`) visible in the truncated source.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- `List-Unsubscribe` header not found — may be an AgentMail relay capture limitation rather than sender omission; cannot confirm one-click unsubscribe compliance from this data alone.
- `List-Unsubscribe-Post` (RFC 8058) not found — one-click unsubscribe support unconfirmed.
- `Authentication-Results` header not found — SPF/DKIM/DMARC pass/fail status unknown via this relay; cannot verify sender authentication posture.
- Visible unsubscribe footer link presence/wording not available in truncated HTML — recommend reviewing full footer for physical address and unsubscribe link (CAN-SPAM requirements) since it falls outside the truncated source shown here.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- Sample tracked link reveals `mi_cid=678ef1b7c6db7030&mi_mid=01a0d2a4-a280-7000-8...` style parameters (Marketing Insider/ESP click-tracking schema) rather than standard `utm_source/utm_medium/utm_campaign` — cannot confirm GA/analytics UTM alignment without following redirect to final landing URL.
- Landing page destination(s) not resolvable from truncated source (all product CTAs route through tracking-redirect domains, skipped in probe) — cannot verify landing page matches "Venus Williams Elite Design" campaign creative.

7. Recommendations
- Add descriptive `alt` text to all content/product images; use `alt=""` explicitly on spacer and tracking-pixel images to signal "decorative" rather than "missing."
- Confirm `List-Unsubscribe` / `List-Unsubscribe-Post` headers are actually sent by the ESP (check raw source outside AgentMail relay, since relay may strip/not capture them) to ensure RFC 8058 one-click compliance.
- Verify SPF/DKIM/DMARC alignment via a source with full header capture (current relay does not expose `Authentication-Results`).
- Follow the 76 skipped tracking redirects manually (or via headless browser) to confirm they resolve to live, non-404 landing pages and that final URLs carry consistent UTM/campaign parameters for analytics continuity.
- Plain-text part is 70%+ URL characters (21,066/30,003) — consider a leaner plain-text alternative for spam-filter scoring.
## Recent history

- [[2026-08-19-color-palettes-that-just-feel-goop]] — 5/10 (2026-08-19)
- [[2026-08-19-the-design-desk-zanna-roberts-rassi-s-twin-room-makeovers]] — 6/10 (2026-08-19)
- [[2026-08-19-new-fall-2026-inspired-by-the-english-countryside]] — 7/10 (2026-08-19)

