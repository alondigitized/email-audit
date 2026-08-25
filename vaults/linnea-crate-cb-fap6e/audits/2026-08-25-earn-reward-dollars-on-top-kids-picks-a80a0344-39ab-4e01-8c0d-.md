---
slug: 2026-08-25-earn-reward-dollars-on-top-kids-picks-a80a0344-39ab-4e01-8c0d-
type: email
date: 2026-08-25
persona: linnea-crate-cb-fap6e
score: "5/10"
sender: Crate & Kids SALE
subject: Earn Reward Dollars on top kids’ picks→
tags: [email, score-5, sender/crate-kids-sale]
---
# Earn Reward Dollars on top kids’ picks→
**Score:** 5/10 · **Type:** Email audit · **2026-08-25**
## Full review
## Technical Audit

## 1. Technical Summary
This is a standard MessageGears/Crate & Barrel HTML email template using table-based layout with MSO/Outlook conditional comments. Automated QA passed 57% of checks with 0 hard issues and 3 warning categories, primarily around missing compliance headers and absent alt text on nearly every image.

## 2. Link & Tracking Issues
- 115 tracking/click-redirect links were present but skipped by automated HTTP probing (expected behavior for click-tracking domains — not itself a defect, but destination URLs are unverified).
- Multiple third-party tracking pixels are embedded: `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png` (fires 6x), `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif`, `sr.rlcdn.com/448796.gif` (LiveRamp identity pixel, fires 5x with sequential `n=1`–`n=5` params), and `dv.crateandbarrel.com/o/...` (likely DoubleVerify ad verification). These are functioning as expected for a retail ESP stack but represent a meaningful third-party data-sharing surface.
- No broken/malformed href patterns are visible in the truncated source provided.

## 3. Rendering & Accessibility
- **57 images are missing `alt` text**, including all primary product/hero images (`bbf6f9d4-...png`, `2025_0728_CBK_WholeHomeNewArrivals_HERO`, and ~40 similarly named lifestyle/product JPGs) and all tracking pixels/spacers. Product and hero images should carry descriptive alt text; tracking pixels and spacer GIFs should carry `alt=""` (empty, not absent) to be properly ignored by screen readers rather than announced as "unlabeled image."
- Template correctly implements `x-apple-disable-message-reformatting`, `format-detection` meta tags, MSO conditional font/table fixes, and mobile breakpoints at 460px — good defensive coding for Outlook/iOS rendering.
- `color-scheme`/`supported-color-schemes` are hardcoded to `light` only — no dark-mode-specific handling, so dark-mode clients will apply their own inversion heuristics (not a bug, just unverified rendering behavior).

## 4. Personalization & Merge Tokens
No merge/personalization tokens (e.g., `{{first_name}}`, AMPscript, Handlebars) are visible in the provided HTML source or subject line. No issues found in the visible content — note this assessment is limited by source truncation.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header not found** — one-click unsubscribe via mailbox provider UI (Gmail/Yahoo "Unsubscribe" button) will not be offered. This is a bulk-sender requirement under Gmail/Yahoo's 2024 sender guidelines for high-volume senders.
- **List-Unsubscribe-Post header not found** (RFC 8058) — one-click POST unsubscribe unsupported at the header level.
- **Authentication-Results header not found** — SPF/DKIM/DMARC pass/fail status could not be verified from available headers.
- Caveat: all three warnings are flagged by QA as possibly an artifact of the AgentMail relay not capturing/forwarding these headers, rather than proof the sender omits them. Cannot confirm true root cause from this data — recommend checking raw headers at the receiving MTA rather than treating this as a confirmed compliance gap.
- An in-body unsubscribe link/footer is standard for this ESP template family but is not visible in the truncated HTML provided — cannot confirm its presence or CAN-SPAM footer completeness (physical address, etc.) from available evidence.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
Cannot assess — no destination/landing page URLs or UTM query strings are visible in the truncated HTML source provided. Flagging as unverified rather than fabricating a finding.

## 7. Recommendations
1. Add descriptive `alt` text to all product/hero images; set `alt=""` explicitly on tracking pixels and spacer images (57 instances affected).
2. Verify List-Unsubscribe / List-Unsubscribe-Post headers at the raw MTA level (bypassing the AgentMail relay) to confirm whether this is a real compliance gap or a relay-capture artifact.
3. Confirm SPF/DKIM/DMARC alignment via raw Authentication-Results headers, since bulk-sender deliverability (Gmail/Yahoo) depends on this.
4. Obtain full (non-truncated) HTML to verify CTA destination URLs, UTM parameter consistency, and unsubscribe footer completeness — current review is limited by source truncation on these points.
## Recent history

- [[2026-08-19-can-t-figure-it-out-let-our-designers-help-for-free]] — 5/10 (2026-08-19)
- [[2026-08-19-the-ultimate-bedroom-makeover-inspo]] — 7/10 (2026-08-19)
- [[2026-08-18-bestselling-sofas-made-even-more-beautiful]] — 6/10 (2026-08-18)

