---
slug: 2026-09-22-it-s-officially-fall-time-to-get-cozy-db324f50-cd5d-4d8a-b901-
type: email
date: 2026-09-22
persona: ceci-chrome-cb2-fap6e
score: "6/10"
sender: Crate & Barrel
subject: It’s officially fall! Time to get cozy 🍂
tags: [email, score-6, sender/crate-barrel]
---
# It’s officially fall! Time to get cozy 🍂
**Score:** 6/10 · **Type:** Email audit · **2026-09-22**
## Full review
## Technical Audit

1. Technical Summary
The email renders via legacy table-based HTML with heavy vendor-specific markup (MSO conditionals, Scene7 image serving, Sailthru/Salesforce MI tracking pixels); QA reports a 50% pass rate driven by missing unsubscribe/authentication headers and widespread missing alt text.

2. Link & Tracking Issues
- 79 tracking/click-redirect links were skipped by the automated prober (redirect-domain links, not directly verifiable) — cannot confirm final destination validity from this data alone.
- Multiple third-party tracking pixels present: `mi.crateandbarrel.com/p/rp/*.png` (Sailthru/MI open tracking), `sr.rlcdn.com/448796.gif` (LiveRamp/RLCDN), `dv.crateandbarrel.com/o/...` (likely DoubleVerify verification pixel), `mi.crateandbarrel.com/p/up/.../o.gif` (open tracking). No functional issues found in these, but flagging for visibility since they add render-blocking/privacy-relevant requests.
- No broken or malformed href values found in the truncated source provided.

3. Rendering & Accessibility
- 46 images flagged with missing `alt` attributes across content images, animated GIFs (e.g., `2026_0922_CB_Fall_WholeHome_candleAnimat...`), and all tracking pixels. Content images lacking alt text (e.g., `bbf6f9d4-86cc-437a-aa80-391067b74306.png`, hero image `2026_0922_CB_Fall_WholeHome_hero-ezgif`) are the priority fix; tracking pixels (`mi.crateandbarrel.com`, `sr.rlcdn.com`, `dv.crateandbarrel.com`) are low-priority since they're non-content (should use `alt=""` for spec compliance rather than omission).
- Template uses extensive legacy MSO/Outlook conditional CSS and `<meta>` redundancy (three duplicate `format-detection` tags), consistent with a mature ESP template — no functional rendering defect identified in the visible markup.
- `<title>Crate & Barrel</title>` is generic; not a rendering defect but worth noting for accessibility/screen-reader context if flagged elsewhere.

4. Personalization & Merge Tokens
- No unresolved merge tags (e.g., `{{first_name}}`, `%%FIELD%%`) or broken personalization syntax visible in the truncated source.
- No issues found.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- `List-Unsubscribe` header not detected — QA flags this may be an AgentMail relay capture gap rather than a sender-side omission; cannot confirm root cause from available data.
- `List-Unsubscribe-Post` (RFC 8058 one-click unsubscribe) not detected — if genuinely absent, this affects Gmail/Yahoo bulk-sender compliance requirements for one-click unsubscribe.
- `Authentication-Results` header (SPF/DKIM/DMARC status) not detected — same relay-capture caveat applies; sender authentication status is unknown from this data, not confirmed failing.
- No visible unsubscribe link/footer in the truncated HTML source provided — cannot confirm presence or absence of a body-level unsubscribe mechanism from the given excerpt.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- Cannot verify UTM parameter presence/consistency on destination links: the 79 tracking links were skipped by the prober and the visible source excerpt doesn't expose resolved href values with query strings.
- No issues found in the data provided — insufficient visibility to assess, not a confirmed pass.

7. Recommendations
- Add descriptive `alt` text to all content/hero images; set `alt=""` explicitly on the tracking-pixel and animated-GIF assets that are non-content.
- Confirm with the sending ESP (Sailthru/MI, based on `mi.crateandbarrel.com` markers) that `List-Unsubscribe` and `List-Unsubscribe-Post` headers are being sent at the SMTP layer — verify via raw header capture outside the AgentMail relay, since the relay may be stripping/not surfacing them rather than them being absent at origin.
- Similarly verify `Authentication-Results` (SPF/DKIM/DMARC) directly at the receiving MTA rather than via this relay, to rule out a capture artifact before treating it as a deliverability risk.
- Re-run the tracking-link probe with redirect-following enabled (or manually sample a subset of the 79 skipped links) to confirm final landing pages resolve and carry expected UTM parameters.
## Recent history

- [[2026-08-19-color-palettes-that-just-feel-goop]] — 5/10 (2026-08-19)
- [[2026-08-19-the-design-desk-zanna-roberts-rassi-s-twin-room-makeovers]] — 6/10 (2026-08-19)
- [[2026-08-19-new-fall-2026-inspired-by-the-english-countryside]] — 7/10 (2026-08-19)

