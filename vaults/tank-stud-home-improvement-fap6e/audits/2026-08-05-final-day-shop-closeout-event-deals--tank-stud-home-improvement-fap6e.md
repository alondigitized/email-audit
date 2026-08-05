---
slug: 2026-08-05-final-day-shop-closeout-event-deals--tank-stud-home-improvement-fap6e
type: email
date: 2026-08-05
persona: tank-stud-home-improvement-fap6e
score: "8/10"
sender: Lowe’s Home Improvement
subject: "Final day: Shop Closeout Event deals❗"
tags: [email, score-8, sender/lowe-s-home-improvement]
---
# Final day: Shop Closeout Event deals❗
**Score:** 8/10 · **Type:** Email audit · **2026-08-05**
## Full review
## Technical Audit

# Technical Audit — Lowe's "Final day: Shop Closeout Event deals❗"

## 1. Technical Summary
Standard SFMC/ExactTarget-pattern HTML email (`e.lowes.com`, `image.e.lowes.com`, `sli.lowes.com`) with full MSO/Outlook conditional scaffolding; automated QA reports a 57% pass rate driven by missing alt text, absent unsubscribe/auth headers, and an email address exposed in tracking-pixel URLs. Note: the provided HTML source is truncated to the `<head>`/style block, so several sections below are assessed only from QA data, not directly verified against body markup.

## 2. Link & Tracking Issues
- 33 tracking/click-redirect links were present but skipped by the automated HTTP prober (expected behavior for redirect-domain links, not itself a defect) — destination/landing URLs are therefore unverified.
- Five open/impression-tracking pixels resolve through `sli.lowes.com/imp` (e.g. `?s=1090838&e=cole-drywall-lowes-fap6e@etell.app&p=852026&lctg=410146703&stpe=static`). Two entries share `s=1090834` differentiated only by `li_coord=d` vs `li_coord=m` — likely desktop/mobile open-tracking variants, expected for this ESP pattern.
- **PII exposure:** the recipient's full email address is passed in cleartext as a query parameter (`e=cole-drywall-lowes-fap6e@etell.app`) on every tracking pixel request. This value is exposed to any intermediary logging the request (proxies, CDN logs, browser history/referrer) — standard practice for this ESP but worth flagging as a privacy-hygiene item.

## 3. Rendering & Accessibility
- 7 images flagged with missing `alt` text: 2 content images (`c301e24e-...jpg`, `ad569dc5-...png`) and 5 tracking pixels (`sli.lowes.com/imp` calls).
  - Content images should carry descriptive `alt` text for screen readers and image-blocked clients.
  - Tracking pixels should explicitly set `alt=""` (not omit the attribute) — some spam filters and accessibility scanners flag bare `<img>` tags without any alt attribute regardless of purpose.
- Head block includes standard defensive CSS (`.ExternalClass`, `.ReadMsgBody`, `ReadMsgBody` width fixes, `ampx-apple-data-detectors` overrides, MSO conditional font blocks) — no issues found in what's visible.
- Custom web fonts (`Fellix`, `DIN Next`) are loaded via `@font-face` wrapped in `<!--[if !mso]><!-->` guards, correctly excluding Outlook desktop (which would fail on remote font loading) — no issues found.

## 4. Personalization & Merge Tokens
No merge/personalization token syntax (e.g. `%%FirstName%%`, `{{...}}`) is visible in the truncated source. The only personalized value observed is the recipient email embedded in tracking-pixel query strings (see §2) — this is tracking data, not a rendered merge field, so no broken/unresolved token issues found in available evidence.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication)
- **List-Unsubscribe header:** not found. Cannot confirm one-click unsubscribe support at the header level from this capture.
- **List-Unsubscribe-Post header (RFC 8058):** not found — if genuinely absent at send time, this email would not meet Gmail/Yahoo's 2024 bulk-sender one-click unsubscribe requirement.
- **Authentication-Results (SPF/DKIM/DMARC):** not found — pass/fail status unknown.
- Caveat on all three: the QA tool notes these may simply not be captured by the AgentMail relay rather than genuinely absent from the original send — cannot distinguish relay artifact from actual sender omission with available evidence.
- CAN-SPAM physical address and in-body unsubscribe link: not visible in the truncated HTML — cannot confirm or deny presence.

## 6. Email-to-Site Continuity (UTM params, landing alignment)
Cannot assess — all 33 outbound links route through click-tracking redirect domains that were skipped by the HTTP probe, so no final landing URLs or UTM parameters were captured for comparison against site pages.

## 7. Recommendations
1. Add explicit `alt=""` to the 5 tracking-pixel `<img>` tags and descriptive `alt` text to the 2 content images.
2. Confirm with the ESP/relay whether `List-Unsubscribe` and `List-Unsubscribe-Post` headers are actually being sent (vs. dropped by the AgentMail relay) — required for Gmail/Yahoo bulk-sender compliance.
3. Verify SPF/DKIM/DMARC alignment directly at the sending MTA, since `Authentication-Results` wasn't captured here.
4. Re-run link/landing-page validation with a prober capable of following the `sli.lowes.com`/click-redirect chain to confirm final UTM parameters match live Lowe's landing pages.
5. If email-address-in-URL tracking is a policy concern, consider hashing the identifier instead of passing the raw address in pixel query strings.
## Recent history

- [[2026-08-04-closeout-event-ends-tomorrow-don-t-miss-out-49934008-2e76-463a-b87b---tank-stud-home-improvement-fap6e]] — 7/10 (2026-08-04)
- [[2026-08-02-your-sunday-scroll-just-got-better-00b8c68e-8dbe-4fae-a418---tank-stud-home-improvement-fap6e]] — 7/10 (2026-08-02)
- [[2026-08-01-get-campus-ready-with-3x-points--tank-stud-home-improvement-fap6e]] — 5/10 (2026-08-01)

