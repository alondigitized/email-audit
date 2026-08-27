---
slug: 2026-08-27-new-lookbook-storybook-style
type: email
date: 2026-08-27
persona: ceci-chrome-cb2-fap6e
score: "5/10"
sender: Crate & Kids
subject: NEW LOOKBOOK! Storybook Style
tags: [email, score-5, sender/crate-kids]
---
# NEW LOOKBOOK! Storybook Style
**Score:** 5/10 · **Type:** Email audit · **2026-08-27**
## Full review
## Technical Audit

1. Technical Summary
Standard ESP-templated (Movable Ink/Salesforce-style) marketing email; core technical issues are missing unsubscribe headers and near-universal missing alt text.

2. Link & Tracking Issues
97 tracking/click-redirect links were skipped by the automated HTTP probe (redirect domains not resolved for liveness) — not a confirmed failure, but link destinations are unverified. Multiple tracking pixels present: `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png` (6 instances), `sr.rlcdn.com/448796.gif` (5 sequential instances, `n=1`–`n=5`), `mi.crateandbarrel.com/p/up/.../o.gif`, and `dv.crateandbarrel.com/o/...`. No broken/malformed `href` or `src` attributes found in the sampled QA output.

3. Rendering & Accessibility
39 of 44 QA-flagged issues are missing `alt` attributes on `<img>` tags, including all product/lifestyle imagery (`image.mail.crateandbarrel.com/lib/...`, `s7d5.scene7.com/...`) and tracking pixels. Product/content images lacking alt text fail WCAG 2.1 (1.1.1 Non-text Content) and degrade the experience for screen-reader users and when images are blocked by default (common in Outlook/Gmail). Tracking pixels missing alt text is standard practice and not a defect.

4. Personalization & Merge Tokens
No merge tokens or personalization placeholders (e.g. `%%FIRSTNAME%%`, `{{...}}`) observed in the truncated source. No issues found.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- `List-Unsubscribe` header not detected — may be a relay artifact (AgentMail) rather than a true sender omission, but as observed it fails RFC 2369 one-click unsubscribe support.
- `List-Unsubscribe-Post` header not detected — RFC 8058 one-click unsubscribe (POST) unsupported as observed.
- `Authentication-Results` header not found — SPF/DKIM/DMARC pass/fail status cannot be verified from available data.
Note: all three warnings may reflect the AgentMail relay not surfacing/forwarding headers rather than the sender's actual configuration; cannot confirm true CAN-SPAM violation without raw source headers from the originating MTA.

6. Email-to-Site Continuity (UTM params, landing page alignment)
Truncated HTML did not include full CTA `href` values in the provided excerpt, so UTM parameter presence/consistency could not be verified. No issues found in available data (insufficient evidence to assess, not a clean bill of health).

7. Recommendations
- Add descriptive `alt` text to all 39 content/product images; leave tracking-pixel `alt=""` (already effectively empty of content value).
- Verify with the sending platform (Movable Ink/Salesforce Marketing Cloud based on domain patterns) that `List-Unsubscribe` and `List-Unsubscribe-Post` headers are actually being sent at the SMTP layer, independent of the AgentMail relay.
- Re-run the QA check against raw MTA headers (bypassing the relay) to get a definitive `Authentication-Results` (SPF/DKIM/DMARC) read.
- If full CTA URLs are available, re-run continuity check to confirm UTM params match landing-page tracking expectations before next send.
## Recent history

- [[2026-08-19-color-palettes-that-just-feel-goop]] — 5/10 (2026-08-19)
- [[2026-08-19-the-design-desk-zanna-roberts-rassi-s-twin-room-makeovers]] — 6/10 (2026-08-19)
- [[2026-08-19-new-fall-2026-inspired-by-the-english-countryside]] — 7/10 (2026-08-19)

