---
slug: 2026-08-10-modern-romance-lace-leather--mei-tag-fast-fashion-fap6e
type: email
date: 2026-08-10
persona: mei-tag-fast-fashion-fap6e
score: "5/10"
sender: H&M
subject: "Modern romance: lace + leather"
tags: [email, score-5, sender/h-m]
---
# Modern romance: lace + leather
**Score:** 5/10 · **Type:** Email audit · **2026-08-10**
## Full review
## Technical Audit

## 1. Technical Summary
The email fails automated QA at a 16% pass rate — all 12 sampled "Shop now"/image/unsubscribe click-tracking redirects return HTTP 403, and no CAN-SPAM authentication headers were captured.

## 2. Link & Tracking Issues
- All 12 probed tracking-redirect URLs (`https://t19.email.hm.com/r/?id=h705db262...`) return **403 Forbidden**, including every "Shop now" CTA, the "H&M" logo link, all product image links, and the **Unsubscribe** link itself. Example: `https://t19.email.hm.com/r/?id=h705db262-b8b6-4e87-87e3-c1119acbfafd,663a4bc9,f7b8b281&did=1715096521&rid=3326930539&erid=...&p1=DM5928976&p2=0982dd0aa7b117bf086dee6ed4af7d0c&p3=20260810` → 403.
- Because every link routes through the same `t19.email.hm.com/r/` redirector with only the third id-segment (e.g. `f7b8b281`, `f7b8b282`, `f7b8b292`) differing, the 403 is systemic to the redirector/tracking domain rather than isolated to individual destination URLs — likely an ESP-side link-wrapping or click-tracking service outage/misconfiguration (blocked probe UA, expired signing token, or IP-based bot blocking) rather than a broken landing page per se.
- 72 non-CTA links (footer/utility/social) were deprioritized and not probed, so their status is unverified.

## 3. Rendering & Accessibility
- 19 `<img>` elements are missing `alt` text, including all primary product images (`FNP-WA10263P30-*.jpg`, `FNP-KKMI263C01G-2x3-SEC.jpg`) and asset-hash images under `image.hm.com/assets/hm/...`. This fails WCAG 1.1.1 and degrades screen-reader and image-blocked (default Outlook/Gmail) rendering.
- Extensive mobile-responsive CSS (`@media (max-width:699px)`) and Outlook/Yahoo/Gmail-specific hide/show rules (`#MessageViewBody`, `.hide-webkit`, `@media screen yahoo`) are present, indicating multi-client targeting; no rendering breakage was reported by QA beyond the alt-text gaps.
- Two CTA link-text values contain zero-width/invisible characters (`‌  ﻿Shop now` — U+200C ZWNJ / U+FEFF BOM), which can cause inconsistent accessibility-tree/screen-reader announcement of the link name.

## 4. Personalization & Merge Tokens
- The embedded JSON-LD `EmailMessage`/`DiscountOffer` schema block has empty string values for `subjectLine`, `discountCode`, `availabilityEnds`, `image`, and `url` — these appear to be unresolved/blank merge fields rather than intentional empty strings, which will suppress Gmail Promotions annotations (e.g. no discount badge, no rendered offer card) even if the visual email itself renders correctly.
- `availabilityStarts` is hardcoded to `2018-12-31T18:59:59-05:00`, a stale date unrelated to the current send (2026-08-10) — indicates a template default was never overwritten.
- No `{{merge_tag}}`-style unresolved tokens found in the visible HTML body itself.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **Unsubscribe link is broken**: the Unsubscribe CTA (`...&p4=3326930539&p5=9be06746af74de7271d9dcc8d83f5742`) returns 403, which is a functional CAN-SPAM violation (unsubscribe mechanism must work for at least 30 days post-send).
- `List-Unsubscribe` header not present/captured — one-click unsubscribe via mail client UI is unavailable or unverifiable.
- `List-Unsubscribe-Post` header not present — RFC 8058 one-click unsubscribe unsupported/unverifiable.
- `Authentication-Results` header not found — SPF/DKIM/DMARC pass/fail status cannot be confirmed from this capture.
- Note: the header findings are flagged by QA as possibly an artifact of the AgentMail relay not preserving these headers rather than proof the sender omits them — treat as unverified, not confirmed absent.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- No UTM parameters (`utm_source`/`utm_medium`/`utm_campaign`) are present; H&M uses proprietary tracking params instead (`did`, `rid`, `erid`, `p1`–`p5`, e.g. `p1=DM5928976`, `p3=20260810` matching send date, `p2=0982dd0aa7b117bf086dee6ed4af7d0c` as a constant campaign/segment hash).
- Landing-page alignment cannot be verified: since every CTA/image link resolves through the 403'ing redirector, the actual destination URL and query-string continuity to the site cannot be confirmed.

## 7. Recommendations
1. **Priority — fix the 403 on the tracking redirector** (`t19.email.hm.com/r/`): verify the click-tracking/ESP link-wrapping service is live and not blocking the QA probe's user agent/IP; re-test with a real browser and headless client to rule out bot-blocking vs. genuine outage.
2. **Fix the Unsubscribe link** independently and with priority — a broken unsubscribe mechanism is a compliance risk regardless of the CTA issue.
3. Populate or remove the empty `DiscountOffer`/`EmailMessage` JSON-LD fields (`subjectLine`, `discountCode`, `availabilityEnds`, `image`, `url`) so Gmail Promotions-tab annotations render correctly, or drop the schema block if the campaign doesn't use annotations.
4. Update the stale `availabilityStarts: 2018-12-31` value to reflect the actual campaign window.
5. Add descriptive `alt` text to all 19 flagged product/content images.
6. Strip the zero-width characters (ZWNJ/BOM) from the two "Shop now" link text nodes.
7. Confirm `List-Unsubscribe` / `List-Unsubscribe-Post` headers and `Authentication-Results` (SPF/DKIM) are actually present at the raw SMTP level — re-verify via a header capture that isn't relay-dependent, since QA flags these as possibly a relay artifact rather than confirmed absent.
## Recent history

- [[2026-08-09-live-from-la-santos-bravos--mei-tag-fast-fashion-fap6e]] — 5/10 (2026-08-09)
- [[2026-08-09-last-day-15-or-20-off-your-order--mei-tag-fast-fashion-fap6e]] — 4/10 (2026-08-09)
- [[2026-08-09-kids-discover-the-latest-arrivals-0-0-14-f33-1dd2808a8eebd--mei-tag-fast-fashion-fap6e]] — 3/10 (2026-08-09)

