---
slug: 2026-08-11-bestsellers-made-for-childhood
type: email
date: 2026-08-11
persona: linnea-crate-cb-fap6e
score: "6/10"
sender: Crate & Kids
subject: Bestsellers made for childhood →
tags: [email, score-6, sender/crate-kids]
---
# Bestsellers made for childhood →
**Score:** 6/10 · **Type:** Email audit · **2026-08-11**
## Full review
## Technical Audit

## Technical Audit: Crate & Kids — "Bestsellers made for childhood →"

**1. Technical Summary**
Standard MI (Message Interactivity)/Salesforce Marketing Cloud email template with heavy MSO/Outlook conditional CSS and responsive media queries; automated QA reports a 57% pass rate driven almost entirely by missing image `alt` attributes and absent unsubscribe/authentication headers at the relay layer.

**2. Link & Tracking Issues**
- 77 tracking/click-redirect links were skipped by the automated HTTP probe (unable to verify destination validity or redirect chains). No confirmed broken links, but link integrity is unverified for the majority of CTAs.
- Multiple pixel trackers present: `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png` (6 instances), `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif`, `dv.crateandbarrel.com/o/ec140cbc-...` (Dun & Bradstreet/verification pixel), and `sr.rlcdn.com/448796.gif` (LiveRamp/RampID identity pixel, 5 instances with incrementing `n=` params). These are expected MC engagement/identity-resolution pixels, not errors.

**3. Rendering & Accessibility**
- **29 images missing `alt` text**, including all primary product/content images (`bbf6f9d4-...png`, `3ff87ae4-...jpg`, etc.) and all tracking pixels. Content images with no alt text fail WCAG 1.1.1 and degrade the experience for screen-reader users and when images are blocked by default (common in Outlook/Gmail).
- Template includes standard MSO conditional blocks (`<!--[if mso]>`, `<!--[if gte mso 9]>`) and Apple Mail reformatting suppression (`x-apple-disable-message-reformatting`), indicating deliberate Outlook/Apple Mail compatibility handling — no issues found here.
- `color-scheme`/`supported-color-schemes` locked to `light` only — no dark-mode variant provided; not a bug but worth noting if dark-mode legibility hasn't been visually QA'd separately.

**4. Personalization & Merge Tokens**
No merge tokens or personalization variables (e.g., `%%FirstName%%`, AMPscript) are visible in the truncated source. No issues found — nothing to evaluate further without the full body.

**5. Compliance (CAN-SPAM, unsubscribe, authentication headers)**
- `List-Unsubscribe` header not detected — may be a QA/relay capture limitation (AgentMail) rather than a true absence, but cannot be confirmed as present.
- `List-Unsubscribe-Post` (RFC 8058, one-click unsubscribe) not detected — same caveat.
- `Authentication-Results` header (SPF/DKIM/DMARC) not detected — authentication status cannot be verified via this relay.
- **Caveat:** all three warnings are flagged by the QA tooling as likely artifacts of the AgentMail relay not preserving/exposing original headers, not confirmed sender-side failures. Recommend re-verification against raw SMTP headers from a direct inbox capture before treating as compliance defects.

**6. Email-to-Site Continuity (UTM params, landing page alignment)**
Not assessable from the truncated HTML — destination URLs for the 77 tracking links were not resolved (skipped in probe), so UTM parameters and landing-page alignment cannot be confirmed either way.

**7. Recommendations**
- Add descriptive `alt` text to all content/product images (29 instances); tracking pixels (`mi.crateandbarrel.com`, `sr.rlcdn.com`, `dv.crateandbarrel.com`) should use `alt=""` (empty, not missing) since they are decorative/non-content.
- Re-verify `List-Unsubscribe`, `List-Unsubscribe-Post`, and `Authentication-Results` against raw headers from a non-relayed inbox capture to distinguish real compliance gaps from AgentMail relay limitations.
- Run a full (non-truncated) HTML pass and resolve the 77 skipped tracking links to confirm destination validity and UTM parameter continuity to landing pages.
## Recent history

- [[2026-08-11-new-a-beautiful-dining-room-built-for-the-way-you-live]] — 5/10 (2026-08-11)
- [[2026-08-10-going-fast-grab-their-school-gear-at-up-to-20-off]] — 5/10 (2026-08-10)
- [[2026-08-10-final-day-up-to-50-off-our-summer-sale]] — 6/10 (2026-08-10)

