---
slug: 2026-08-16-an-instant-classic-our-new-beatrix-collection
type: email
date: 2026-08-16
persona: ceci-chrome-cb2-fap6e
score: "6/10"
sender: Crate & Kids
subject: "An instant classic: our new Beatrix collection ♥️"
tags: [email, score-6, sender/crate-kids]
---
# An instant classic: our new Beatrix collection ♥️
**Score:** 6/10 · **Type:** Email audit · **2026-08-16**
## Full review
## Technical Audit

1. Technical Summary
Standard ESP-generated (Kibo/MessageGears-style) HTML email with heavy tracking/analytics stack; no unsubscribe or authentication headers were captured by the QA pass, and all images lack alt text.

2. Link & Tracking Issues
- 72 tracking/click-redirect links were skipped by HTTP probe (unable to confirm destination validity or redirect chains).
- Multiple pixel trackers present: `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png` (6 instances), `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif`, `sr.rlcdn.com/448796.gif` (LiveRamp/RampID, 5 instances with sequential `n=1`–`n=5` params), and a `dv.crateandbarrel.com/o/...?mi_mid=...&cp_tp=v` view-through/conversion pixel.
- No issues found beyond the above — no broken/malformed href patterns visible in the truncated source.

3. Rendering & Accessibility
- 28 images missing `alt` text, including all primary content/product images (`image.mail.crateandbarrel.com/lib/.../*.jpg`) and all tracking pixels — content images with no alt text fail WCAG and degrade the experience when images are blocked.
- Uses table-based layout with extensive MSO/Outlook conditional comments and legacy DOCTYPE (XHTML 1.0 Transitional) — standard for cross-client email compatibility, no issues found.
- `.hide`/`.showmobile`/`.block` responsive classes and `max-width` media queries at 460px/640px/768px breakpoints present for mobile rendering — no issues found.

4. Personalization & Merge Tokens
- No unresolved merge tags (e.g. `{{`, `%%`, `[[`) visible in the truncated source.
- No issues found.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header not found** — not captured in the relayed headers; RFC 2369 mailbox-provider unsubscribe UI may not be offered. Could be a relay-capture limitation (AgentMail) rather than a true sender-side omission.
- **List-Unsubscribe-Post header not found** — one-click unsubscribe (RFC 8058) not confirmed.
- **Authentication-Results header not found** — SPF/DKIM/DMARC pass/fail status unknown from this capture.
- These three findings are QA-tool visibility gaps rather than confirmed sender defects — flag for header-level re-verification via a raw-MIME capture rather than treating as confirmed non-compliance.
- No footer/unsubscribe link content was included in the truncated HTML, so in-body compliance elements (physical address, unsubscribe link) could not be verified.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- Cannot verify: all 72 outbound links are click-tracking redirects (skipped by probe), so UTM parameters and final landing-page destinations are unconfirmed from available data.
- No issues found in what's visible — insufficient data to assess further.

7. Recommendations
- Add descriptive `alt` text to all 15 unique content images (28 total instances) for accessibility and blocked-image fallback.
- Re-run QA against raw MIME/full headers (not just relayed HTML) to confirm List-Unsubscribe, List-Unsubscribe-Post, and Authentication-Results — current absence may be a capture artifact of the AgentMail relay rather than a real compliance gap.
- Spot-check a sample of the 72 skipped tracking links by following redirects manually to confirm they resolve to live, correctly-tagged landing pages.
## Recent history

- [[2026-08-16-our-bedroom-bestsellers-up-to-25-off-for-a-limited-time-f450343b-302b-4b6b-a41e-]] — 7/10 (2026-08-16)
- [[2026-08-15-end-of-summer-sale]] — 5/10 (2026-08-15)
- [[2026-08-15-the-sofa-that-will-make-you-love-your-living-room]] — 5/10 (2026-08-15)

