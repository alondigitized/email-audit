---
slug: 2026-08-09-last-day-15-or-20-off-your-order--mei-tag-fast-fashion-fap6e
type: email
date: 2026-08-09
persona: mei-tag-fast-fashion-fap6e
score: "4/10"
sender: H&M
subject: "Last day: 15% or 20% off your order"
tags: [email, score-4, sender/h-m]
---
# Last day: 15% or 20% off your order
**Score:** 4/10 · **Type:** Email audit · **2026-08-09**
## Full review
## Technical Audit

## 1. Technical Summary
The email uses Adobe/H&M's ESP redirect domain (`t19.email.hm.com`) for all tracked links; automated QA returned 403 on 100% of the 12 probed material links (including the unsubscribe link), and the JSON-LD structured-data block ships with multiple empty personalization fields.

## 2. Link & Tracking Issues
- **All 12 probed material links return HTTP 403**, including both "Shop now" CTAs, the H&M logo link, four product image links, "Women"/"Men" nav links, and the **Unsubscribe** link itself. Example: `https://t19.email.hm.com/r/?id=h93f85fca-df48-47f2-a6f6-c076dec55c67,6639b882,f7b58470&did=1715058818&rid=3326930539&erid=...&p1=DM5925822&p2=0982dd0aa7b117bf086dee6ed4af7d0c&p3=20260809`
- All failing links share the same redirect host and `did`/`rid`/`erid` structure, suggesting either a bot/UA-based block on the redirect service (common for automated probes) or a genuine outage of the click-tracking layer — cannot distinguish from HTTP status alone. Given the unsubscribe link is also affected, this warrants verification with a real client/browser before ruling out a true outage.
- Two of the "Shop now" links contain invisible/zero-width characters embedded in the anchor text (`‌  ﻿Shop now` — ZWNJ U+200C and BOM/ZWNBSP U+FEFF), likely inserted deliberately to evade spam-filter text-pattern matching; see Rendering section.

## 3. Rendering & Accessibility
- **8 images missing `alt` text**, including all primary product creative:
  - `.../wk-32/na1535_s4/1340618005_202604_LB_0779.jpg` (2 sizes)
  - `.../wk-32/na1535_s4/1245648012_202604_LB_0388.jpg` (2 sizes)
  - `.../wk-32/na1535_s4/1267711077_202603_LB_0912.jpg` (2 sizes)
  - 2 additional tracking/pixel images under `t19.email.hm.com/r/?id=...`
  - Screen readers will announce these as unlabeled images or filenames only.
- Anchor text on two CTA links contains embedded zero-width/invisible Unicode characters (`\u200C`, `\uFEFF`), which can cause inconsistent screen-reader announcements and complicates automated link-text auditing.
- Extensive mobile responsive CSS (`optimize-css` block, `@media (max-width:699px)`) is present and well-formed; no malformed selectors or unclosed rules observed in the truncated source.

## 4. Personalization & Merge Tokens
- The `application/ld+json` `EmailMessage`/`DiscountOffer`/`PromotionCard` schema block ships with **multiple empty string values that appear to be unresolved merge tokens**: `"subjectLine":""`, `"discountCode":""`, `"availabilityEnds":""`, `"image":""`, `"url":""`. Only `"availabilityStarts":"2018-12-31T18:59:59-05:00"` is populated (and appears stale/placeholder, given today's date).
- Because this JSON-LD feeds Gmail/Outlook promotional annotations (e.g., "Save $X" chips, expiration countdowns), empty fields mean those rich annotations will not render or will render incorrectly.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication)
- **Unsubscribe link present** in markup (`p4`/`p5` params confirm a valid unsubscribe-tracking URL structure) but returns 403 on probe — functional status unconfirmed.
- **`List-Unsubscribe` header not found** — not captured by the relay, so one-click unsubscribe support cannot be confirmed from headers alone.
- **`List-Unsubscribe-Post` header not found** (RFC 8058) — if genuinely absent, mailbox providers (Gmail/Yahoo) will not offer one-click unsubscribe, which is a bulk-sender requirement as of 2024 sender guidelines.
- **`Authentication-Results` header not found** — SPF/DKIM/DMARC pass/fail status cannot be verified from this capture.
- Physical address / CAN-SPAM footer text not visible in the truncated HTML provided — cannot confirm compliance from available source.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- No standard `utm_source`/`utm_medium`/`utm_campaign` query parameters are used; H&M's ESP uses proprietary redirect params instead (`id`, `did`, `rid`, `erid`, `p1`–`p5`) via the `t19.email.hm.com/r/` redirector.
- Because every material link 403s at the redirector layer, **the final landing-page destination cannot be verified** — continuity/alignment with the on-site product or category pages is unconfirmed pending a successful resolve.

## 7. Recommendations
1. Manually verify the `t19.email.hm.com` redirect links (including unsubscribe) in a real browser/client — confirm whether the 403s reflect a genuine outage or automated-probe blocking, given the unsubscribe link is affected.
2. Populate the empty JSON-LD merge fields (`subjectLine`, `discountCode`, `availabilityEnds`, `image`, `url`) or remove the incomplete schema block to avoid broken rich-email annotations.
3. Add descriptive `alt` text to the 6 product/creative images at minimum; tracking pixels can use empty `alt=""` intentionally but should not be flagged as "missing."
4. Remove the embedded zero-width/BOM characters from the "Shop now" anchor text.
5. Confirm `List-Unsubscribe` / `List-Unsubscribe-Post` headers are actually being sent server-side (may be a capture gap in the relay rather than a true absence) and that `Authentication-Results` (SPF/DKIM/DMARC) pass.
## Recent history

- [[2026-08-09-kids-discover-the-latest-arrivals-0-0-14-f33-1dd2808a8eebd--mei-tag-fast-fashion-fap6e]] — 3/10 (2026-08-09)
- [[2026-08-08-up-to-20-off-school-staples--mei-tag-fast-fashion-fap6e]] — 5/10 (2026-08-08)
- [[2026-08-08-this-week-s-selection--mei-tag-fast-fashion-fap6e]] — 3/10 (2026-08-08)

