---
slug: 2026-08-01-new-exclusive-ninja-s-best-now-in-midnight-mocha
type: email
date: 2026-08-01
persona: ceci-chrome-cb2-fap6e
score: "7/10"
sender: Crate & Barrel
subject: New & exclusive! Ninja’s best, now in Midnight Mocha
tags: [email, score-7, sender/crate-barrel]
---
# New & exclusive! Ninja’s best, now in Midnight Mocha
**Score:** 7/10 · **Type:** Email audit · **2026-08-01**
## Full review
## Technical Audit

## Technical Audit — Crate & Barrel "Ninja's Best" Email

### 1. Technical Summary
Standard multi-client responsive template (MSO conditionals, XHTML 1.0 Transitional doctype, `max-width:460px`/`min-width:640px` media queries) served via Marigold/Cheetah-style ESP infrastructure (`mi.crateandbarrel.com`, `image.mail.crateandbarrel.com`). Automated QA returned a 57% pass rate with 0 hard failures and 3 warnings, concentrated in compliance headers and image accessibility. Provided source was truncated to the `<head>`/style block, so several categories below are limited to what QA captured rather than direct HTML inspection.

### 2. Link & Tracking Issues
- QA skipped HTTP probing on 70 tracking/click-redirect links — none independently verified live in this pass.
- Tracking/beacon pixels observed:
  - `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png?mi_u=...` — identical URL fires **6 times** in the document. Worth confirming this is intentional per-module tracking rather than a duplicated include.
  - `sr.rlcdn.com/448796.gif` (LiveRamp) fires 5 times with an incrementing `n=1`–`n=5` param — expected sequential-fire pattern, not a defect.
  - `dv.crateandbarrel.com/o/5d724fdd-...?mi_mid=...&cp_tp=v` — verification/rendering pixel.
  - `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif` — standard open-tracking pixel.
- Anchor `href` values and UTM parameters are not present in the truncated source, so click-tracking wrapper consistency cannot be verified from this pass.

### 3. Rendering & Accessibility
- 24 unique content images plus 6 duplicate tracking-pixel instances flagged by QA as missing `alt` text, including primary product imagery (e.g. `bbf6f9d4-...png`, `6285be36-...jpg`) and a Scene7 asset (`2026_0711_CB_FallNewArrivals_Secondary_O...`). This affects screen-reader users and image-blocked inbox previews.
- Head markup includes standard MSO/Outlook fixes (`mso-table-lspace`, `ExternalClass`, `xml:o:OfficeDocumentSettings`) and Apple Mail reformatting guards (`x-apple-disable-message-reformatting`) — no issues found here.
- Full body markup was not included in the provided source, so table structure, nested-table rendering, and dark-mode handling beyond `color-scheme: light` cannot be assessed.

### 4. Personalization & Merge Tokens
No merge tokens or personalization variables are visible in the portion of the source provided (head/style only — this section would not contain them). Cannot assess body-level personalization (e.g. first-name tokens, dynamic product blocks) without the full HTML.

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)
- **List-Unsubscribe header**: not found (QA WARN). Note the QA tool flags this may be a capture gap in the AgentMail relay rather than an absence in the original send — cannot confirm sender-side compliance from this data alone.
- **List-Unsubscribe-Post (RFC 8058)**: not found — one-click unsubscribe support unconfirmed for the same relay-capture reason.
- **Authentication-Results (SPF/DKIM)**: not found — authentication status unknown via this relay path.
- In-body unsubscribe link and physical mailing address (CAN-SPAM footer requirements) are not visible in the truncated HTML — cannot confirm compliance from source provided.

### 6. Email-to-Site Continuity
Cannot assess — CTA `href` values, UTM parameters, and landing-page targets are not present in the truncated source.

### 7. Recommendations
1. Add `alt` text to the 24 flagged content images (accessibility/CAN-SPAM image-fallback best practice).
2. Confirm the 6x-repeated `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png` pixel is intentional per-section tracking, not a duplicated snippet.
3. Verify `List-Unsubscribe` / `List-Unsubscribe-Post` headers exist at actual SMTP delivery time (check upstream of the AgentMail relay) — RFC 8058 one-click unsubscribe is required by Gmail/Yahoo bulk-sender rules as of 2024.
4. Re-run this audit against the full HTML body (not just `<head>`) to evaluate link UTM tagging, merge-token usage, and unsubscribe-link placement — those categories are currently unverifiable from the truncated source.
## Recent history

- [[2026-07-31-rooms-for-your-mood-board-f5ae6680-4426-4d38-9750-]] — 8/10 (2026-07-31)
- [[2026-07-31-dinnerware-designed-to-wow-starting-at-2-50-881fba02-ede2-4d33-abae-]] — 7/10 (2026-07-31)
- [[2026-07-31-this-week-s-steals]] — 6/10 (2026-07-31)

