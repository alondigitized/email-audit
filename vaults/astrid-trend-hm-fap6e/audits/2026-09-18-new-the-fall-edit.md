---
slug: 2026-09-18-new-the-fall-edit
type: email
date: 2026-09-18
persona: astrid-trend-hm-fap6e
score: "2/10"
sender: H&M
subject: "New: The Fall Edit"
tags: [email, score-2, sender/h-m]
---
# New: The Fall Edit
**Score:** 2/10 · **Type:** Email audit · **2026-09-18**
## Executive summary

- This send is dominated by a rendering failure — every single hero and product image in the body is a broken-image placeholder, from the top hero through all eight product shots. Only the small "SHOP BY" category tiles near the footer (Women/Men/Kids/Home/Beauty) actually load. For a fashion retailer whose entire value proposition is "look at the clothes," an email that shows nothing but broken-image icons and price tags is close to useless.
- The copy itself is fine and on-brand: "The Fall Edit," gothic-romantic corsetry and lace positioning, a tidy product grid with prices, a clean "Shop by" category footer. But none of that matters if the images don't render — this reads like a QA failure that shipped, not a creative choice, and it's the worst-performing render in the recent brand history by a wide margin.
- Judgement: do not treat this as representative of the campaign — flag it as a broken send and get a corrected re-render before drawing conclusions about the creative itself.

## What's working

- Clear thematic headline and subhead ("THE FALL EDIT" / corsetry, embroidery, distressed lace) sets a specific seasonal story.
- Single unambiguous primary CTA ("SHOP NOW") placed directly under the hero copy.
- Clean, consistent product-grid layout with product names and prices legible throughout.
- "Shop by" category footer (Women/Men/Kids/Home/Beauty) is the only section with working images, and it's simple and scannable.

## What's weak

- Every hero and product image (9+ images) renders as a broken-image placeholder icon — a total visual failure for an apparel email.
- With no product photography, there's nothing to signal fit, color, or styling — the core purchase driver is completely absent.
- Visual hierarchy collapses: the eye has nothing to land on but empty boxes and small text.
- The email is unusually long (9 broken image blocks before the footer) with no visual payoff, making it a poor scroll experience even before considering the render bug.

## Recommendations

- 1. **Fix the render pipeline before anything else** — verify image hosting/CDN links aren't broken or blocked; this is a send-blocker, not a copy tweak.
- 2. Once images render, trim the product count — 8 individual products plus a hero is a lot for one send; consider 4-5 hero pieces to keep scroll length tighter.
- 3. Add a discount or urgency element — this is a pure editorial/product-launch send with no offer, consistent with H&M's recent non-discount sends (09/15, 09/14), but worth A/B testing against the tiered-discount sends that scored higher engagement signals in this history.
- 4. Strengthen preview text so it doesn't just restate the subject.
- **Subject Alt A:** `Corsets, lace & the gothic-romantic fall edit`
- **Subject Alt B:** `Fall's darker side: corsetry, lace, embroidery`
- **Preheader Alt A:** `Distressed lace, sharp tailoring, moody layers — shop the edit`
- **Preheader Alt B:** `9 new pieces built for a romantic-gothic fall`

## Full review
## 1. Overview
This send is dominated by a rendering failure — every single hero and product image in the body is a broken-image placeholder, from the top hero through all eight product shots. Only the small "SHOP BY" category tiles near the footer (Women/Men/Kids/Home/Beauty) actually load. For a fashion retailer whose entire value proposition is "look at the clothes," an email that shows nothing but broken-image icons and price tags is close to useless.

The copy itself is fine and on-brand: "The Fall Edit," gothic-romantic corsetry and lace positioning, a tidy product grid with prices, a clean "Shop by" category footer. But none of that matters if the images don't render — this reads like a QA failure that shipped, not a creative choice, and it's the worst-performing render in the recent brand history by a wide margin.

Judgement: do not treat this as representative of the campaign — flag it as a broken send and get a corrected re-render before drawing conclusions about the creative itself.

## 2. What worked
- Clear thematic headline and subhead ("THE FALL EDIT" / corsetry, embroidery, distressed lace) sets a specific seasonal story.
- Single unambiguous primary CTA ("SHOP NOW") placed directly under the hero copy.
- Clean, consistent product-grid layout with product names and prices legible throughout.
- "Shop by" category footer (Women/Men/Kids/Home/Beauty) is the only section with working images, and it's simple and scannable.

## 3. What didn't
- Every hero and product image (9+ images) renders as a broken-image placeholder icon — a total visual failure for an apparel email.
- With no product photography, there's nothing to signal fit, color, or styling — the core purchase driver is completely absent.
- Visual hierarchy collapses: the eye has nothing to land on but empty boxes and small text.
- The email is unusually long (9 broken image blocks before the footer) with no visual payoff, making it a poor scroll experience even before considering the render bug.

## 4. What I'd change
1. **Fix the render pipeline before anything else** — verify image hosting/CDN links aren't broken or blocked; this is a send-blocker, not a copy tweak.
2. Once images render, trim the product count — 8 individual products plus a hero is a lot for one send; consider 4-5 hero pieces to keep scroll length tighter.
3. Add a discount or urgency element — this is a pure editorial/product-launch send with no offer, consistent with H&M's recent non-discount sends (09/15, 09/14), but worth A/B testing against the tiered-discount sends that scored higher engagement signals in this history.
4. Strengthen preview text so it doesn't just restate the subject.
   - **Subject Alt A:** `Corsets, lace & the gothic-romantic fall edit`
   - **Subject Alt B:** `Fall's darker side: corsetry, lace, embroidery`
   - **Preheader Alt A:** `Distressed lace, sharp tailoring, moody layers — shop the edit`
   - **Preheader Alt B:** `9 new pieces built for a romantic-gothic fall`

## 5. Business Impact Score (1-10)
**2/10**
- Primary CTA is unambiguous (clear button copy + visible button)

## 6. Open Likelihood (persona-grounded)
- **Score:** `5/10`
- **Signals counted:** Sender display name is recognizable; Subject is relevant to your persona's focus area; Subject is under ~50 chars (mobile-friendly); No spam signals; Cadence feels right (not an immediate repeat of a near-identical promo).
- **Rationale:** "H&M" as sender and a clean, concrete subject ("New: The Fall Edit") are enough to earn an open, but the preview text just repeats the subject's theme rather than adding new information.

## 7. Click-Through Likelihood (persona-grounded)
- **Score:** `2/10`
- **Signals counted:** CTA copy is specific (a verb + a noun: "Shop Now"); Brand voice is consistent and trusted.
- **Rationale:** With every product and hero image showing as a broken-image icon, there's nothing to click toward — no visible garment, no fit detail, no reason to act beyond the button label alone.

## 8. Subject
- **Subject:** `New: The Fall Edit`
- **Length:** 19
- **Scores (1-10):** Clarity `6`, Curiosity `4`, Personalization `2`, Urgency `2`, Specificity `4`

## 9. Preview
- **Preview:** (none / leaking junk)
- **Length:** 0
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`

---

## Technical Audit

1. Technical Summary
Deep-link tracking redirects (t19.email.hm.com) return 403 across all probed CTAs, images, and the unsubscribe link, and the message lacks List-Unsubscribe headers — the two most consequential findings in this build.

2. Link & Tracking Issues
- All 12 probed material links resolve to HTTP 403 via the ESP redirect domain `t19.email.hm.com/r/?id=...`, including both "Shop now" CTAs, the "H&M" logo link, and every product image link (`f83479c0`–`f83479d3` ID suffixes). Same failure pattern across distinct link IDs but identical `did`, `rid`, `erid`, `p1`–`p3` query params suggests a redirect-service-side issue (expired/misconfigured tracking IDs) rather than isolated broken destinations.
- Two of the "Shop now" links carry zero-width/invisible characters in the anchor text (`‌  ﻿Shop now` — ZWNJ + BOM), likely from template variable leftovers; cosmetic in rendered output but worth cleaning at the template level since it can affect screen-reader announcement and any text-based QA matching.

3. Rendering & Accessibility
- 22 images missing `alt` text, including all product images (`FNP-WA10264P49-*`) and the open/pixel tracking image (`t19.email.hm.com/r/?id=...,1`). Decorative/tracking pixels are fine without alt, but product images should carry descriptive alt text for screen readers and for cases where images are blocked.
- Extensive mobile-responsive CSS (`@media (max-width:699px)`) present and well-formed in the truncated source; no malformed selectors observed.
- No MSO/Outlook conditional comments visible in the truncated excerpt — cannot confirm Outlook-specific fallback rendering from this sample.

4. Personalization & Merge Tokens
- The `application/ld+json` schema.org block has multiple empty string fields (`"subjectLine":""`, `"discountCode":""`, `"image":""`, `"url":""`, `"availabilityEnds":""`), indicating merge tokens/personalization variables failed to populate at send time. This affects Gmail annotations (promo card, logo markup) rather than visible email body, but it's a real data-binding failure.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- Unsubscribe link present in-body but returns 403 (`p4`/`p5` params present, indicating this is the list-specific one-click unsubscribe target) — functionally broken unsubscribe mechanism.
- `List-Unsubscribe` header not present/not captured.
- `List-Unsubscribe-Post` header (RFC 8058, one-click unsubscribe) not present — non-compliant with Gmail/Yahoo 2024+ bulk sender requirements if this reflects the actual sent headers rather than relay capture loss.
- `Authentication-Results` header not found — SPF/DKIM/DMARC pass/fail status cannot be verified from available data.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- Links use a proprietary redirect/tracking scheme (`id`, `did`, `rid`, `erid`, `p1`–`p5`) rather than standard UTM parameters — no `utm_source`/`utm_medium`/`utm_campaign` observed, so campaign attribution on landing pages can't be verified via query string alone.
- Cannot verify landing page alignment since all tracked redirects 403 before reaching a destination URL.

7. Recommendations
- Priority 1: Investigate the `t19.email.hm.com` redirect service — 403 on 12/12 probed links (including unsubscribe) indicates a systemic tracking-domain or ID-expiry issue, not content problems. Escalate to ESP/deliverability team immediately given unsubscribe is affected (compliance risk).
- Priority 2: Confirm actual outbound `List-Unsubscribe` / `List-Unsubscribe-Post` headers with a raw header capture outside the AgentMail relay, since inbox providers increasingly gate delivery on RFC 8058 compliance.
- Add descriptive `alt` text to the 20 product images.
- Fix the empty `ld+json` merge fields (`subjectLine`, `discountCode`, `image`, `url`) so Gmail promotional markup renders correctly.
- Strip stray zero-width characters (ZWNJ/BOM) from "Shop now" anchor text in the template.
## Recent history

- [[2026-08-19-today-only-20-off-in-the-app]] — 5/10 (2026-08-19)
- [[2026-08-18-santos-bravos-goes-live-at-12pm-pst]] — 4/10 (2026-08-18)
- [[2026-08-18-ace-your-tennis-look-la-sierrarenas-nmffda123e5705-61b7-4bd3]] — 5/10 (2026-08-18)

