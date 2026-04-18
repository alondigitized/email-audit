---
slug: 2026-04-11-more-sun-more-savings
type: email
date: 2026-04-11
persona: walker
score: "6/10"
sender: Shoe Carnival
subject: More Sun, More Savings!
tags: [email, score-6, sender/shoe-carnival]
---
# More Sun, More Savings!
**Score:** 6/10 · **Type:** Email audit · **2026-04-11**
## Executive summary

- Solid deal communication, weak brand elevation. High discount visibility will drive clicks from existing loyalists; does little to attract or impress anyone else.

## What's working

- **BOGO Free is loud and legible.** The teal/turquoise block with bold white type is the email's visual centerpiece — the most scannable thing here. Women's & Kids' sandals is clearly scoped.
- **$29.98 entry price is prominent.** The opening offer establishes an accessible price floor immediately, which is good for hesitant buyers.
- **Product grid is present.** Multiple sandal styles shown below the hero give the recipient something to browse. Good for consideration-stage shoppers.
- **Dual offer coupon block ($10/$25 off) at the bottom** captures in-store intent and provides a reason to visit physically — useful for a brick-and-mortar chain.

## What's weak

- **Hero image is small and dark.** The lifestyle shot at the top is cropped tightly and competes poorly against the high-contrast offer blocks immediately below it. It doesn't sell a seasonal feeling — it just takes up vertical space.
- **"Sandal Season!" headline is generic.** No urgency, no qualifier (limited time, ends Sunday, members only). This is filler copy that does no work.
- **Product grid is low-resolution/small.** Individual product images are thumbnail-sized. Style names and prices are barely readable at email scale.
- **Shoe Perks loyalty block is sandwiched awkwardly** between the product grid and the coupon — it reads as an interrupt, not a natural escalation. The placement deflates both sections around it.
- **Coupon module feels bolted on.** The barcode/coupon design looks like a flyer insert, not a branded email component. The $10/$25 tiered structure is smart, but the visual execution doesn't reinforce that this is a reward or exclusive offer.
- **Preview text is a raw URL.** The inbox preview shows a raw tracking link instead of copy. This is a missed first-impression opportunity — many recipients will see that link before they open the email.

## Recommendations

- 1. **Fix the preview text immediately.** Replace the raw URL with something like "BOGO Free sandals + up to $25 off — this weekend only." This is low-effort, high-impact.
- 2. **Elevate the hero.** Use a wider, brighter lifestyle shot that sells the season emotionally before the deals land. The current crop looks like a stock image placeholder.
- 3. **Add urgency to "Sandal Season!"** — a deadline ("Ends Sunday"), a quantity signal ("While supplies last"), or a membership exclusive ("Perks members: early access") makes the generic headline do real work.
- 4. **Increase product tile size or reduce count.** Show 4 tiles cleanly instead of 6-8 small ones. Legible pricing and style names will drive more clicks than a dense grid.
- 5. **Reposition Shoe Perks.** Move it either directly under the hero (to set context before the deals) or to the footer — not mid-scroll where it breaks deal momentum.
- 6. **Give the coupon module a branded frame.** Add a headline like "Your In-Store Bonus" with a member-reward framing to make the coupon feel earned, not generic.
- | Priority | Action |
- |---|---|
- | P0 | **Fix `[UNIQUE]` token** in open-pixel URL before next send — open-rate data is corrupted for this deployment |
- | P0 | **Audit UTM campaign string** for zero-width or non-ASCII characters; strip and re-verify in both the pixel URL and all 28 CTA destinations |
- | P1 | **Confirm SPF/DKIM/DMARC pass** via header inspection on a seed-address send; engage ESP to verify AgentMail relay is aligned with `email.shoecarnival.com` DMARC policy |
- | P1 | **Add `alt` attributes** to all 8 flagged images; tracking pixels should use `alt=""`, product images require descriptive text |
- | P2 | **Probe click-redirect chain** on all 28 CTA links to confirm destinations are live and UTM params are preserved end-to-end |
- | P2 | **Consolidate responsive breakpoints** — the 600px and 660px blocks are redundant; merging them reduces specificity conflicts and bundle size |
- | P2 | **Manually verify** physical address and unsubscribe link are present and functional in full HTML render (truncated source prevents confirmation) |

## Full review
## 2. Business Impact Score: 6/10

Solid deal communication, weak brand elevation. High discount visibility will drive clicks from existing loyalists; does little to attract or impress anyone else.

---

## 3. What's Working

- **BOGO Free is loud and legible.** The teal/turquoise block with bold white type is the email's visual centerpiece — the most scannable thing here. Women's & Kids' sandals is clearly scoped.
- **$29.98 entry price is prominent.** The opening offer establishes an accessible price floor immediately, which is good for hesitant buyers.
- **Product grid is present.** Multiple sandal styles shown below the hero give the recipient something to browse. Good for consideration-stage shoppers.
- **Dual offer coupon block ($10/$25 off) at the bottom** captures in-store intent and provides a reason to visit physically — useful for a brick-and-mortar chain.

---

## 4. What's Weak

- **Hero image is small and dark.** The lifestyle shot at the top is cropped tightly and competes poorly against the high-contrast offer blocks immediately below it. It doesn't sell a seasonal feeling — it just takes up vertical space.
- **"Sandal Season!" headline is generic.** No urgency, no qualifier (limited time, ends Sunday, members only). This is filler copy that does no work.
- **Product grid is low-resolution/small.** Individual product images are thumbnail-sized. Style names and prices are barely readable at email scale.
- **Shoe Perks loyalty block is sandwiched awkwardly** between the product grid and the coupon — it reads as an interrupt, not a natural escalation. The placement deflates both sections around it.
- **Coupon module feels bolted on.** The barcode/coupon design looks like a flyer insert, not a branded email component. The $10/$25 tiered structure is smart, but the visual execution doesn't reinforce that this is a reward or exclusive offer.
- **Preview text is a raw URL.** The inbox preview shows a raw tracking link instead of copy. This is a missed first-impression opportunity — many recipients will see that link before they open the email.

---

## 5. Recommendations

1. **Fix the preview text immediately.** Replace the raw URL with something like "BOGO Free sandals + up to $25 off — this weekend only." This is low-effort, high-impact.
2. **Elevate the hero.** Use a wider, brighter lifestyle shot that sells the season emotionally before the deals land. The current crop looks like a stock image placeholder.
3. **Add urgency to "Sandal Season!"** — a deadline ("Ends Sunday"), a quantity signal ("While supplies last"), or a membership exclusive ("Perks members: early access") makes the generic headline do real work.
4. **Increase product tile size or reduce count.** Show 4 tiles cleanly instead of 6-8 small ones. Legible pricing and style names will drive more clicks than a dense grid.
5. **Reposition Shoe Perks.** Move it either directly under the hero (to set context before the deals) or to the footer — not mid-scroll where it breaks deal momentum.
6. **Give the coupon module a branded frame.** Add a headline like "Your In-Store Bonus" with a member-reward framing to make the coupon feel earned, not generic.

---

## 6. Bottom Line

This email delivers its deals clearly enough to generate clicks from customers already in-market for sandals. But the raw-URL preview text, weak hero, and cluttered lower half leave significant conversion on the table. The BOGO offer is strong — let it breathe. Tighten the structure to: hero → BOGO → product grid → coupon, and this becomes a notably more effective send.

---

## 7. Evidence

**Overall purpose:** Spring/summer sandal promotion driving both e-commerce clicks (BOGO, $29.98 offer, product grid) and in-store visits (barcode coupon).

**Hero / primary value proposition:** Small lifestyle image of woman in sandals followed immediately by a "$29.98 and up" sandal offer. Functional but undersized.

**Membership / benefits section:** Shoe Perks loyalty program block appears mid-email with a branded badge. Brief and easy to skip — not clearly tied to the surrounding offer.

**Product discoverability / recommendation modules:** A horizontal sandal product grid shows multiple styles (appears to be 4–6 SKUs) with thumbnail images. Individual item details are hard to read at this size.

**Utility / secondary modules:** Tiered coupon block ($10 off $50 / $25 off $100) with barcode at bottom. Functional for in-store; visually disconnected from the rest of the email.

**Bugs / friction / clarity issues:** Preview text renders as a raw tracking URL — visible in inbox before open. No other broken images or overlapping text visible in the render.

---

## Technical Audit

## Technical Audit — Shoe Carnival "More Sun, More Savings!"

---

### 1. Technical Summary

Well-structured legacy HTML email (4.01 Transitional doctype) with comprehensive multi-client CSS hacks. Two confirmed deliverability/merge-token defects require immediate attention before any future send; 8 accessibility violations present across the build.

---

### 2. Link & Tracking Issues

**Unresolved merge token in open-pixel URL**
The open/read-tracking pixel contains a literal `[UNIQUE]` placeholder that was not substituted at send time:
```
https://0di86k1v.emltrk.com/v2/0di86k1v?d=[UNIQUE]
```
This means unique-open attribution for every recipient resolves to the same record. Open-rate data from this send is unreliable.

**Suspected zero-width character in UTM campaign value**
The impression-pixel URL contains what appears to be a trailing non-printing character (likely U+200B ZERO WIDTH SPACE) after the campaign token:
```
utm_campaign=SCA_20260411_comfort_bogof_sandals_AM​
```
If this character is present, analytics will split traffic across two campaign strings (`...AM` vs `...AM​`), silently fragmenting attribution.

**28 click-redirect tracking links — not probed**
All 28 CTA links route through a click-redirect domain and were skipped by the HTTP prober. Broken destination URLs cannot be ruled out from this data set alone.

---

### 3. Rendering & Accessibility

**8 images missing `alt` text** (WCAG 2.1 §1.1.1, screen reader failure):

| Image | Source |
|---|---|
| Product image ×4 | `i8.amplience.net/s/scvl/186534_…`, `186576_…`, `106172_…`, `186537_…` |
| Content image ×2 | `image.email.shoecarnival.com/lib/fe3311…/d29c1532…png`, `51373ebc…png` |
| Impression pixel | `ieezzy5m.emltrk.com/v2/ieezzy5m?…` |
| Open pixel | `0di86k1v.emltrk.com/v2/0di86k1v?…` |

Tracking pixels should carry `alt=""` (empty string, not absent attribute) to suppress screen-reader announcement. Product and content images require descriptive alt text.

**Three overlapping responsive breakpoints** (`max-width: 600px`, `660px`, `450px`) defined across separate `<style>` blocks. Not a rendering defect per se, but the 600px and 660px blocks target the same devices with conflicting `font-size` overrides (`.responsive-text: 12px` vs no override), which is fragile.

**HTML 4.01 Transitional doctype** declared alongside `xmlns` and `<meta name="viewport">` — technically inconsistent but common practice for Outlook compatibility. No rendering defect confirmed.

---

### 4. Personalization & Merge Tokens

**`[UNIQUE]` not resolved** — covered above in §2. This is the only merge token visible in the provided source. No other unsubstituted tokens (e.g., `{{first_name}}`, `%%FIRSTNAME%%`) were detected in the truncated HTML.

---

### 5. Compliance

**SPF/DKIM status unknown**
The `Authentication-Results` header was not present in the captured data. The send routes through `email.shoecarnival.com` via AgentMail relay; SPF/DKIM pass status cannot be confirmed from this audit. A failed or missing DKIM signature increases spam-folder placement risk and breaks DMARC alignment.

**CAN-SPAM / physical address / unsubscribe**
The HTML source provided is truncated; a physical mailing address and functional unsubscribe link were not visible in the excerpt. These must be present in the full render. Flagged for manual verification — cannot confirm or deny from available data.

---

### 6. Email-to-Site Continuity

**UTM parameters are present** in the impression pixel (`utm_campaign=SCA_20260411_comfort_bogof_sandals_AM`), indicating a UTM strategy is in place. However:
- The suspected zero-width character in that value (§2) would corrupt campaign grouping in GA4/UA.
- Because all 28 click links were skipped by the prober, it is unconfirmed whether UTM parameters survive the click-redirect chain and land correctly on destination pages.
- No `utm_source`, `utm_medium`, or `utm_content` values were visible in the extracted pixel URL — confirm these are appended on the click-redirect destinations.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| P0 | **Fix `[UNIQUE]` token** in open-pixel URL before next send — open-rate data is corrupted for this deployment |
| P0 | **Audit UTM campaign string** for zero-width or non-ASCII characters; strip and re-verify in both the pixel URL and all 28 CTA destinations |
| P1 | **Confirm SPF/DKIM/DMARC pass** via header inspection on a seed-address send; engage ESP to verify AgentMail relay is aligned with `email.shoecarnival.com` DMARC policy |
| P1 | **Add `alt` attributes** to all 8 flagged images; tracking pixels should use `alt=""`, product images require descriptive text |
| P2 | **Probe click-redirect chain** on all 28 CTA links to confirm destinations are live and UTM params are preserved end-to-end |
| P2 | **Consolidate responsive breakpoints** — the 600px and 660px blocks are redundant; merging them reduces specificity conflicts and bundle size |
| P2 | **Manually verify** physical address and unsubscribe link are present and functional in full HTML render (truncated source prevents confirmation) |
## Recent history

- [[2026-04-11-your-cart-expires-soon-y1wbjitythgbzzghoyf2zq-g]] — 5/10 (2026-04-11)
- [[2026-04-11-your-items-are-waiting-q0komijtt6mars70xax5eq-g]] — 5/10 (2026-04-11)
- [[2026-04-11-you-absolutely-need-these]] — 6/10 (2026-04-11)

