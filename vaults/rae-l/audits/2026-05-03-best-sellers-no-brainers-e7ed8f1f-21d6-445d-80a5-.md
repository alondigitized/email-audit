---
slug: 2026-05-03-best-sellers-no-brainers-e7ed8f1f-21d6-445d-80a5-
type: email
date: 2026-05-03
persona: rae-l
score: "5/10"
sender: SKECHERS
subject: Best Sellers & No Brainers
tags: [email, score-5, sender/skechers]
---
# Best Sellers & No Brainers
**Score:** 5/10 · **Type:** Email audit · **2026-05-03**
## Executive summary

- A standard Skechers promotional blast built around three shoe categories — Best Sellers, Hands Free Slip-Ins, and Cozy Fit — plus a 25% off apparel offer tacked on below the fold. The hero banner leads with a BOGO 50% off deal, which is the strongest signal in the email, but the subject line ("Best Sellers & No Brainers") doesn't surface it. Layout is clean and functional; the shoe imagery is lifestyle-oriented and consistent with the brand. Nothing is broken. Nothing is particularly personalized or compelling either.

## What's working

- **BOGO hero is immediately visible.** The top banner is short, bold, and communicates "Buy One, Get One 50% Off" before anything else.
- **Category flow is logical.** Best Sellers → Hands Free Slip-Ins → Cozy Fit is a coherent walk through comfort-oriented product lines.
- **Hands Free Slip-Ins section is well-executed.** The hero shoe shot is large, clear, and the typography treatment ("Hands Free Slip-Ins") is distinctive brand language that Skechers has actually built recognition around.
- **No visual clutter or broken elements.** The layout renders correctly.
- **Secondary utility section is present.** App download, curbside pickup, Afterpay/Klarna, store finder — these are genuinely useful and don't feel spammy.

## What's weak

- **Subject line doesn't mention the BOGO deal.** "Best Sellers & No Brainers" wastes the strongest hook in the email.
- **"No Brainers" is vague brand-speak.** It signals nothing concrete to the recipient scanning an inbox.
- **25% off apparel feels like an afterthought.** It appears mid-scroll with no visual emphasis. If apparel is a genuine push, it needs a dedicated section — not a thin band between shoe categories.
- **No personalization.** No name, no "because you bought X," no segmentation signal. This reads as a pure mass blast.
- **The "Winning Pairs" hero image competes with the BOGO banner.** The large lifestyle copy ("The Winning Pairs") draws the eye away from the offer.
- **Cozy Fit section is underserved.** The shoe is shown in a very pale/low-contrast render against a white background and feels like it was included to fill space.
- **Category navigation row (Casuals / Walking / Running) appears small and easy to miss** between the Best Sellers section and the Slip-Ins block.

## Recommendations

- 1. **Put the BOGO in the subject line** — even "Buy One, Get One 50% Off — Shop Best Sellers" would dramatically lift open rate.
- 2. **Collapse or cut the apparel section** unless apparel is a core campaign focus. If it stays, give it a proper hero module, not a banner strip.
- 3. **Pick one shoe story.** Best Sellers + Slip-Ins + Cozy Fit is three pitches. Lead with Slip-Ins (the branded differentiator) or Best Sellers, not both.
- 4. **Add a deadline to the BOGO.** "Today only" or "through Sunday" adds credibility and urgency without feeling spammy.
- 5. **Sharpen the Cozy Fit visual.** The pale colorway on white background makes that shoe disappear. Use a contrasting background or a lifestyle shot.
- | Priority | Action |
- |---|---|
- | **P0** | Migrate all `image.emails.skechers.com` asset URLs from `http://` to `https://`. 12 images will be blocked or broken in Gmail, Apple Mail, and others. |
- | **P0** | Fix `http://www.ink1000.com` pixel to HTTPS or remove if Epsilon attribution is redundant with SFMC click tracking. |
- | **P1** | Populate JSON-LD schema fields (`subjectLine`, `discountCode`, `availabilityStarts/Ends`) or remove the empty blocks. Empty DiscountOffer schema is worse than no schema. |
- | **P1** | Confirm List-Unsubscribe and List-Unsubscribe-Post headers are present at the MTA level. Required for Google/Yahoo bulk sender compliance. |
- | **P1** | Move `.preheader` style rule into the `<head>` `<style>` block — Gmail strips `<style>` tags in `<body>`. |
- | **P2** | Fix favicon domain: `image.emails.nl.skechers.com` → `image.emails.skechers.com`, and upgrade to HTTPS. |
- | **P2** | Add explicit `alt=""` to tracking pixel images (`o.gif`); add descriptive alt text to `49468f73...png`. |
- | **P2** | Scope `-webkit-text-size-adjust: none` to `body` rather than the `*` selector. |
- | **P3** | Manually probe 3+ click-tracked CTAs to confirm UTM params and landing page alignment. |

## Full review
---

## 1. Executive Summary

A standard Skechers promotional blast built around three shoe categories — Best Sellers, Hands Free Slip-Ins, and Cozy Fit — plus a 25% off apparel offer tacked on below the fold. The hero banner leads with a BOGO 50% off deal, which is the strongest signal in the email, but the subject line ("Best Sellers & No Brainers") doesn't surface it. Layout is clean and functional; the shoe imagery is lifestyle-oriented and consistent with the brand. Nothing is broken. Nothing is particularly personalized or compelling either.

---

## 2. Business Impact Score

**5/10**

Criteria that were TRUE:
- Sender is a recognizable brand (Skechers)
- One concrete offer is visible (BOGO 50% off, 25% off apparel)
- Primary CTA is unambiguous ("Shop Best Sellers," clear buttons)
- No render bugs — clean layout, all images load
- Offer feels honest — no buried bait-and-switch visible

Criteria NOT met: Subject/hero copy doesn't reference my persona's focus area specifically; demographic signals are neutral (model is athletic but not age/style-targeted); no loyalty/member benefits visible; season relevance is vague; email doesn't segment to my footwear category.

---

## 3. What's Working

- **BOGO hero is immediately visible.** The top banner is short, bold, and communicates "Buy One, Get One 50% Off" before anything else.
- **Category flow is logical.** Best Sellers → Hands Free Slip-Ins → Cozy Fit is a coherent walk through comfort-oriented product lines.
- **Hands Free Slip-Ins section is well-executed.** The hero shoe shot is large, clear, and the typography treatment ("Hands Free Slip-Ins") is distinctive brand language that Skechers has actually built recognition around.
- **No visual clutter or broken elements.** The layout renders correctly.
- **Secondary utility section is present.** App download, curbside pickup, Afterpay/Klarna, store finder — these are genuinely useful and don't feel spammy.

---

## 4. What's Weak

- **Subject line doesn't mention the BOGO deal.** "Best Sellers & No Brainers" wastes the strongest hook in the email.
- **"No Brainers" is vague brand-speak.** It signals nothing concrete to the recipient scanning an inbox.
- **25% off apparel feels like an afterthought.** It appears mid-scroll with no visual emphasis. If apparel is a genuine push, it needs a dedicated section — not a thin band between shoe categories.
- **No personalization.** No name, no "because you bought X," no segmentation signal. This reads as a pure mass blast.
- **The "Winning Pairs" hero image competes with the BOGO banner.** The large lifestyle copy ("The Winning Pairs") draws the eye away from the offer.
- **Cozy Fit section is underserved.** The shoe is shown in a very pale/low-contrast render against a white background and feels like it was included to fill space.
- **Category navigation row (Casuals / Walking / Running) appears small and easy to miss** between the Best Sellers section and the Slip-Ins block.

---

## 5. Recommendations

1. **Put the BOGO in the subject line** — even "Buy One, Get One 50% Off — Shop Best Sellers" would dramatically lift open rate.
2. **Collapse or cut the apparel section** unless apparel is a core campaign focus. If it stays, give it a proper hero module, not a banner strip.
3. **Pick one shoe story.** Best Sellers + Slip-Ins + Cozy Fit is three pitches. Lead with Slip-Ins (the branded differentiator) or Best Sellers, not both.
4. **Add a deadline to the BOGO.** "Today only" or "through Sunday" adds credibility and urgency without feeling spammy.
5. **Sharpen the Cozy Fit visual.** The pale colorway on white background makes that shoe disappear. Use a contrasting background or a lifestyle shot.

---

## 6. Bottom Line

A competent but generic mass promotional email. The BOGO offer is real and the layout is clean, but the subject line buries the lede and there's no segmentation to reward loyalty or indicate this was sent for any particular reason. Misses an easy conversion lift by not naming the deal upfront.

---

## 7. Subject Line Analysis

- **Subject:** `Best Sellers & No Brainers`
- **Length:** 26 characters
- **Scores (1-10):** Clarity `5`, Curiosity `4`, Personalization `1`, Urgency `2`, Specificity `3`
- **Strengths:**
  - Short and mobile-friendly at 26 chars
  - "Best Sellers" signals a curated, popular picks frame
- **Weaknesses:**
  - "No Brainers" is vague filler — adds nothing concrete
  - The BOGO 50% deal inside the email is completely absent from the subject
- **Alt A:** `Buy One, Get One 50% Off — Skechers Best Sellers`
- **Alt B:** `The Slip-Ins Everyone's Wearing (+ BOGO 50% Off)`

---

## 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — no distinct preheader visible; inbox likely shows "Shop on.skechers.com" or HTML fallback
- **Length:** N/A
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - (none observed)
- **Weaknesses:**
  - No intentional preheader copy; inbox receives nothing that adds to the subject line
  - Missed chance to surface the BOGO deal for the subject/preview combo
- **Alt A:** `BOGO 50% off sitewide — shop your size before it's gone`
- **Alt B:** `Hands Free Slip-Ins, top-rated walkers + 25% off apparel`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `4/10`
- **Signals counted:** Sender display name recognizable (Skechers), subject is under 50 chars, no spam signals (no ALL CAPS stacking, no !!!)
- **Rationale:** The sender is known but the subject offers no concrete hook — no price, no urgency, no category relevance. "No Brainers" reads as filler, not a reason to open. Three of the ten criteria hit; score is 1 + 3 = 4.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `5/10`
- **Signals counted:** Hero offer visible without scrolling (BOGO banner at top), offer reduces price (BOGO 50% off), CTA is present with button, brand voice consistent and trusted, no friction/broken elements
- **Rationale:** Once opened, the BOGO deal at the top is a genuine click driver. The Hands Free Slip-Ins section with a strong category CTA is the second pull. Lost points on no time-bound deadline, no specific linked product, and no reviews or social proof visible.

---

## 11. Evidence

- **Overall purpose:** Drive traffic to Skechers.com across three shoe categories with a BOGO offer and secondary apparel discount as the conversion hooks.
- **Hero / primary value proposition:** "Buy One, Get One 50% Off" banner at the very top, with a "The Winning Pairs" lifestyle image beneath it. Hero CTA is "Shop Best Sellers."
- **Membership / benefits section:** None visible. No rewards points, no member-exclusive pricing.
- **Product discoverability / recommendation modules:**
  - Best Sellers category block with navigation row (Casuals / Walking / Running)
  - Hands Free Slip-Ins dedicated section with full-width shoe image and CTA
  - Cozy Fit section with muted shoe image and CTA
  - 25% Off Apparel thin banner
  - "Shop Additional Styles" text nav block (Women / Men / Kids / Clothing / New Arrivals / Sale)
- **Utility / secondary modules:** Download the App, Curbside Pickup, Shop Now Pay Later (Afterpay / Klarna), Find a Store. Social follow icons (Facebook, Instagram, etc.). Standard legal footer.
- **Bugs / friction / clarity issues:** No visible render bugs. The Cozy Fit shoe renders in a very low-contrast colorway against a white background — not broken, but weak. The category navigation row between Best Sellers and Slip-Ins is small and easy to scroll past.

---

## Technical Audit

## Technical Audit — Skechers "Best Sellers & No Brainers"

**From:** no-reply@emails.skechers.com | **Date:** 2026-05-03

---

### 1. Technical Summary

The email is functional but carries a systemic HTTP-vs-HTTPS asset problem across 12+ images, two unfilled JSON-LD schema blocks, and missing compliance headers that cannot be confirmed through the AgentMail relay. No broken links detected, but all 25 click links were untestable due to redirect-domain skipping.

---

### 2. Link & Tracking Issues

**Third-party tracking pixel over HTTP**
`http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` (Epsilon/Conversant attribution pixel) is served over plain HTTP. This will be blocked by Gmail, Apple Mail, and most modern clients that enforce HTTPS-only mixed-content policies.

**25 click-tracked links not probed**
All CTA links route through `click.emails.skechers.com` redirect domain. HTTP probing was skipped for all 25. Landing page UTM continuity cannot be confirmed without manual spot-check (see §6).

**Krux/Salesforce audience-match beacon**
```
https://beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_sha25&partner_uid=7e8656d...
```
SHA-256 hashed PII (`partner_uid`) is passed to a third-party data broker in the pixel load. Confirm this aligns with current privacy policy and consent scope.

**Favicon domain mismatch**
`<link rel="icon">` references `http://image.emails.nl.skechers.com/...` — note the `.nl.` subdomain vs the main asset domain `image.emails.skechers.com`. Likely a copy-paste error from a Netherlands/locale template. Also served over HTTP.

---

### 3. Rendering & Accessibility

**HTTP image sources (12 images blocked in strict clients)**

All images hosted on `image.emails.skechers.com` are served via `http://`, not `https://`. Affected assets include the logo, app store badges, social icons, utility icons, and one unnamed content image. Full list from QA:

| Asset | Issue |
|---|---|
| `dde00662...png` ("Skechers" logo) | HTTP |
| `49468f73...png` (no alt text) | HTTP + missing alt |
| `0ec56c9f...png` ("Available on the App Store") | HTTP |
| `9bb508d0...png` ("Android App on Google Play") | HTTP |
| `00100b23...png` ("Curbside Pickup") | HTTP |
| `07cb60b5...png` ("AfterPay") | HTTP |
| `fc08601a...png` ("Find A Store") | HTTP |
| `b782e0aa...png` ("Instagram") | HTTP |
| `a5c4cae0...png` ("Facebook") | HTTP |
| `8c5738fc...png` ("YouTube") | HTTP |

**Missing alt text**
Two images have no `alt` attribute:
- `o.gif` (ink1000.com tracking pixel — acceptable to leave empty, but should be `alt=""` explicitly)
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — unknown content image with no alt

**Aggressive global text-size override**
```css
* { -webkit-text-size-adjust: none; }
```
Applied to every element via the universal selector. This disables iOS's automatic text size adjustment globally and can make text illegible at small sizes on iPhone. Scope should be narrowed to `body` or specific selectors.

**Duplicate media query blocks**
`@media only screen and (max-width: 375px)` and `@media only screen and (max-width: 640px)` each declare identical rule sets across two `<style>` blocks. This is harmless but inflates payload and complicates maintenance.

**Style block in `<body>`**
A third `<style>` block appears immediately after `<body>` (`.preheader { display: none !important; }`). Inline `<style>` in `<body>` is not supported in Gmail and will be stripped, potentially exposing the preheader text.

---

### 4. Personalization & Merge Tokens

**Unpopulated JSON-LD schema**
Three schema objects are present in `<head>` with empty string values:

```json
{ "@type": "EmailMessage", "subjectLine": "" }
{ "@type": "DiscountOffer", "description": "", "discountCode": "",
  "availabilityStarts": "", "availabilityEnds": "" }
```

`subjectLine` is blank despite the actual subject being "Best Sellers & No Brainers". The `DiscountOffer` block is fully empty — either the merge tokens failed to inject or this is a template with fields never wired. Gmail uses this schema for promotional tab annotation; empty blocks provide no value and signal a broken template pipeline.

No unresolved `{{token}}` or `%%token%%` syntax was found in the visible HTML excerpt.

---

### 5. Compliance

**List-Unsubscribe header** — not confirmed present (AgentMail relay capture gap). CAN-SPAM and GDPR require a functional unsubscribe mechanism; if this header is absent at the MTA level, bulk sender requirements (Google/Yahoo 2024 mandate) are violated.

**List-Unsubscribe-Post (RFC 8058)** — not confirmed present. Without this, one-click unsubscribe in Gmail/Yahoo is unavailable, which fails the February 2024 bulk sender mandate for senders >5K/day.

**Authentication-Results** — SPF/DKIM/DMARC pass status unknown due to relay header stripping. Cannot confirm deliverability posture from available data.

*Note: All three compliance gaps may be relay artifacts rather than actual sending failures. Verify against raw headers from a direct inbox delivery.*

---

### 6. Email-to-Site Continuity

Cannot fully assess — all 25 destination URLs are behind `click.emails.skechers.com` redirects that were not probed. Spot-check recommendation: manually follow 2–3 CTAs (hero, BOGO, category) and confirm:

- UTM params present: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`
- Landing pages are in-stock and match the promoted offer
- No redirect chains >2 hops

The ink1000.com pixel includes a campaign identifier (`mi_ecmp=MKG_US_NONPURCLICK_U_BEST_NONPURCH_EN_0503202`) suggesting Epsilon attribution is wired — confirm UTM and Epsilon tracking don't double-count conversions.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **P0** | Migrate all `image.emails.skechers.com` asset URLs from `http://` to `https://`. 12 images will be blocked or broken in Gmail, Apple Mail, and others. |
| **P0** | Fix `http://www.ink1000.com` pixel to HTTPS or remove if Epsilon attribution is redundant with SFMC click tracking. |
| **P1** | Populate JSON-LD schema fields (`subjectLine`, `discountCode`, `availabilityStarts/Ends`) or remove the empty blocks. Empty DiscountOffer schema is worse than no schema. |
| **P1** | Confirm List-Unsubscribe and List-Unsubscribe-Post headers are present at the MTA level. Required for Google/Yahoo bulk sender compliance. |
| **P1** | Move `.preheader` style rule into the `<head>` `<style>` block — Gmail strips `<style>` tags in `<body>`. |
| **P2** | Fix favicon domain: `image.emails.nl.skechers.com` → `image.emails.skechers.com`, and upgrade to HTTPS. |
| **P2** | Add explicit `alt=""` to tracking pixel images (`o.gif`); add descriptive alt text to `49468f73...png`. |
| **P2** | Scope `-webkit-text-size-adjust: none` to `body` rather than the `*` selector. |
| **P3** | Manually probe 3+ click-tracked CTAs to confirm UTM params and landing page alignment. |
## Recent history

- [[2026-05-02-summer-essentials-just-in-3fe5fbe8-f189-4d7a-84ea-]] — 5/10 (2026-05-02)
- [[2026-05-01-last-chance-confirm-now-to-get-your-extra-25-off]] — 6/10 (2026-05-01)
- [[2026-05-01-got-a-question]] — 6/10 (2026-05-01)

