---
slug: 2026-09-13-now-open-the-newborn-essentials-shop
type: email
date: 2026-09-13
persona: ceci-chrome-cb2-fap6e
score: "5/10"
sender: Crate & Kids
subject: "NOW OPEN: The Newborn Essentials Shop!"
tags: [email, score-5, sender/crate-kids]
---
# NOW OPEN: The Newborn Essentials Shop!
**Score:** 5/10 · **Type:** Email audit · **2026-09-13**
## Full review
## Technical Audit

## Technical Summary
The email renders via a standard MSO/VML-hybrid HTML template with proper mobile media queries, but automated QA flags missing List-Unsubscribe headers, absent authentication results, and widespread missing `alt` attributes across content and tracking pixels.

## Link & Tracking Issues
- 77 tracking/click-redirect links were present but skipped by HTTP probe (redirect domains, not directly resolvable) — cannot confirm destination validity from this data alone.
- Multiple open/tracking pixels detected: `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png` (×6 instances), `sr.rlcdn.com/448796.gif` (×5, sequential `n=1`–`n=5` params — likely LiveRamp/RampID identity sync pixels), `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif`, and a Movable Ink dynamic content pixel at `dv.crateandbarrel.com/o/834e500d-...`. Volume and duplication (6× identical MI pixel) is typical for multi-vendor MarTech stacking but worth confirming isn't a rendering/loop bug.
- No broken or malformed `href` values observed in the visible source; full link inventory wasn't in the truncated HTML.

## Rendering & Accessibility
- Template includes standard Outlook (`mso`) conditional comments, `ExternalClass` resets, and Apple Mail link-color overrides — good baseline client-compatibility coverage.
- **34 images missing `alt` attributes**, including content/hero images (e.g., `2025_0105_CBK_NewBornCapsuleLaunch_HERO`, `2026_0907_CBK_Tertiary_VenusWilliams_AppSneakPeek`) and all tracking pixels/gifs. Content images without `alt` text fail WCAG 1.1.1 and leave screen-reader users and images-blocked clients with no context.
- No layout-breaking issues detected in the visible markup.

## Personalization & Merge Tokens
No merge tokens or personalization placeholders (e.g., `{{first_name}}`, AMPscript, Handlebars) were visible in the truncated source. Tracking URLs contain a recurring `mi_u=56aaa2787a6773d0f164733102dce5192f75df7c634bb941bb640686964...` identifier and `mi_cid`/`mi_mid` params, consistent with per-recipient dynamic tracking rather than visible content personalization. No issues found.

## Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header not found** — either absent from the source message or stripped by the AgentMail relay; cannot confirm one-click unsubscribe support without header capture.
- **List-Unsubscribe-Post (RFC 8058) not found** — one-click unsubscribe compliance (required by Gmail/Yahoo bulk sender rules since 2024) cannot be verified.
- **Authentication-Results header not found** — SPF/DKIM/DMARC pass/fail status is unknown from this data; this is likely a relay-capture gap rather than a sender-side failure, but should be verified against raw headers at the receiving MTA.
- No unsubscribe link/footer content was visible in the truncated HTML to confirm presence of a visible unsubscribe mechanism in the body.

## Email-to-Site Continuity (UTM params, landing page alignment)
Insufficient data — the truncated HTML did not expose destination/CTA URLs with UTM parameters, and all 77 tracking links were skipped by the automated probe. Cannot confirm UTM presence or landing-page alignment from available evidence.

## Recommendations
1. Add descriptive `alt` text to all content images (hero, product shots); tracking pixels/gifs can use `alt=""` (empty, not absent) to be explicitly marked decorative for screen readers.
2. Verify List-Unsubscribe and List-Unsubscribe-Post headers exist on the raw sent message (check via a direct SMTP/header capture outside the AgentMail relay, since the relay may simply not be forwarding them) — required for Gmail/Yahoo bulk-sender compliance.
3. Confirm SPF/DKIM/DMARC alignment via raw headers at the receiving mail server, since Authentication-Results wasn't captured here.
4. Re-run link/UTM extraction against the full (non-truncated) HTML to validate destination URLs and UTM tagging for site continuity — this data set was inconclusive due to truncation and tracking-domain skips.
5. Investigate whether the 6× duplicate `mi.crateandbarrel.com` pixel and 5× `sr.rlcdn.com` pixels are intentional (multi-zone tracking) or a template duplication bug.
## Recent history

- [[2026-08-19-color-palettes-that-just-feel-goop]] — 5/10 (2026-08-19)
- [[2026-08-19-the-design-desk-zanna-roberts-rassi-s-twin-room-makeovers]] — 6/10 (2026-08-19)
- [[2026-08-19-new-fall-2026-inspired-by-the-english-countryside]] — 7/10 (2026-08-19)

