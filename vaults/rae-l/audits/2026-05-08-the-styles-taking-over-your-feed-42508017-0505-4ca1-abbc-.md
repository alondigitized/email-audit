---
slug: 2026-05-08-the-styles-taking-over-your-feed-42508017-0505-4ca1-abbc-
type: email
date: 2026-05-08
persona: rae-l
score: "7/10"
sender: SKECHERS
subject: The Styles Taking Over Your Feed
tags: [email, score-7, sender/skechers]
---
# The Styles Taking Over Your Feed
**Score:** 7/10 · **Type:** Email audit · **2026-05-08**
## Executive summary

- This is a broad catalog-style send from Skechers anchored by a solid BOGO 50% off banner and a "Just Landed" hero, then broken into four category swim-lanes (Boat Shoes, Sneakers, Elevated Comfort, Best Sellers) plus an apparel promo. The offer is real and front-loaded, but the email functions as a department-store flyer rather than a targeted send: no personalization, no single hero product, and a subject that could belong to any fashion brand on any given week. Competently executed mass-market broadcast; not a precision strike.

## What's working

- **BOGO strip is immediate.** The offer banner is the very first thing rendered above the logo — no hunting required.
- **Category CTAs are specific.** "SHOP BOAT SHOES" and "SHOP CASUAL SNEAKERS" are better than generic "Shop" links; a user with a preference can self-select quickly.
- **25% off apparel cross-sell is clean.** It's a distinct section with its own visual treatment rather than buried fine print — good secondary conversion opportunity.
- **Overall render is clean.** No broken images, no layout bleed, no lorem ipsum. The email renders properly.
- **Lifestyle hero image.** The male model in casual wear sets a tone that matches the footwear shown below.

## What's weak

- **Subject line is generic.** "The Styles Taking Over Your Feed" sounds like influencer marketing copy. It could be from any apparel brand and promises nothing concrete — no offer, no product, no urgency.
- **Too many competing CTAs.** There are at least 6 CTA buttons before reaching the footer (SHOP NOW × 2, SHOP BOAT SHOES, SHOP CASUAL SNEAKERS, SHOP AIR FIT STYLES, SHOP APPAREL STYLES). The eye doesn't know where to land.
- **No single hero product.** The hero section promotes categories in aggregate rather than surfacing one aspirational product to drive desire. Best Sellers section is a grid of thumbnails — still no one product hero.
- **No urgency or deadline.** The BOGO offer has no visible expiration. "Just Landed" implies freshness but doesn't create action pressure.
- **No personalization.** Nothing in the email signals it was sent to a particular segment — same send could go to a women's shoes buyer and a men's running buyer without modification.
- **Apparel promo dilutes shoe message.** The "25% OFF APPAREL" section mid-email fragments attention from the footwear story, especially for a recipient who opened for shoes.

## Recommendations

- 1. **Anchor the subject to the offer.** "BOGO 50% Off — Shop New Arrivals" is 35 chars, names the deal, and gives a reason to open. The current subject belongs in the body, not the subject line.
- 2. **Pick one hero product per campaign.** Surface the single best-selling or highest-margin new style as a named product with a close-up shot. Category carousels train readers to skim past.
- 3. **Add an offer expiration date.** Even "Offer ends Sunday" lifts urgency without any other change. The BOGO banner has no deadline, which makes it feel evergreen (and skippable).
- 4. **Consolidate CTAs to two.** One primary (the BOGO hero) and one secondary (apparel). Six buttons = no priority = no clicks.
- 5. **Move the BOGO fine print note higher.** If there are exclusions, a one-liner like "Exclusions apply. See site for details." directly under the banner prevents friction at checkout and reduces return/complaint rate.
- **High priority**
- 1. **Migrate all `http://image.emails.skechers.com/` sources to HTTPS.** The CDN likely supports HTTPS already — this is a template configuration change in SFMC. Affects 10+ images including the logo and all footer icons.
- 2. **Migrate the Movable Ink pixel to HTTPS.** The `http://www.ink1000.com` endpoint transmits a user identifier (`mi_u`) in plaintext. Confirm with the Movable Ink account team whether `https://` is available for this endpoint.
- 3. **Verify `List-Unsubscribe` and `List-Unsubscribe-Post` headers at the MTA.** If present at send but stripped by the relay, this is a monitoring gap only. If absent at the MTA, this is a Gmail/Yahoo compliance violation for a sender of this volume.
- **Medium priority**
- 4. **Add alt text to `49468f73...png`** (the unidentified image with no alt). Confirm whether it is decorative (use `alt=""`) or informational.
- 5. **Populate or remove the `DiscountOffer` schema block.** If BOGO 50% Off applies, populate `discountCode`, `availabilityStarts`, and `availabilityEnds`. If no code, remove the block to avoid schema validation noise.
- 6. **Populate `EmailMessage.subjectLine`** in structured data to match the actual subject line for Gmail annotation eligibility.
- **Low priority**
- 7. **Probe the click-redirect chain** on a sample of the 26 tracked links to confirm UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`) are present on final landing URLs and match the campaign segment identifier in the Movable Ink pixel.
- 8. **Migrate the favicon** from `http://image.emails.nl.skechers.com/` to HTTPS to avoid mixed-content warnings in clients that render favicons.

## Full review
---

## 1. Executive Summary

This is a broad catalog-style send from Skechers anchored by a solid BOGO 50% off banner and a "Just Landed" hero, then broken into four category swim-lanes (Boat Shoes, Sneakers, Elevated Comfort, Best Sellers) plus an apparel promo. The offer is real and front-loaded, but the email functions as a department-store flyer rather than a targeted send: no personalization, no single hero product, and a subject that could belong to any fashion brand on any given week. Competently executed mass-market broadcast; not a precision strike.

---

## 2. Business Impact Score

**7/10**

- Subject/hero explicitly references style focus area ("What's Hot Right Now," category-level fashion framing) — TRUE
- Sender (Skechers) is recognizable and presumably subscribed to — TRUE
- Concrete offer visible — "BUY ONE, GET ONE 50% OFF" banner + "25% OFF APPAREL" — TRUE
- Primary CTA is unambiguous — "SHOP NOW" button in hero — TRUE
- Visual hierarchy is functional — BOGO strip → hero → category blocks flows top-down — TRUE
- No visible render bugs — layout is clean, no broken images or overlapping text — TRUE
- Demographic signals partially match — male model in casual lifestyle context — TRUE
- Current campaign language — "Just Landed" / new arrivals framing — TRUE
- Loyalty/member benefits — not visible anywhere in the render — FALSE
- Offer feels honest — BOGO is front-and-center; fine print is visible at the footer without obscuring the offer — FALSE (fine print exists and the exclusions are in tiny type at the bottom, which is borderline)

---

## 3. What's Working

- **BOGO strip is immediate.** The offer banner is the very first thing rendered above the logo — no hunting required.
- **Category CTAs are specific.** "SHOP BOAT SHOES" and "SHOP CASUAL SNEAKERS" are better than generic "Shop" links; a user with a preference can self-select quickly.
- **25% off apparel cross-sell is clean.** It's a distinct section with its own visual treatment rather than buried fine print — good secondary conversion opportunity.
- **Overall render is clean.** No broken images, no layout bleed, no lorem ipsum. The email renders properly.
- **Lifestyle hero image.** The male model in casual wear sets a tone that matches the footwear shown below.

---

## 4. What's Weak

- **Subject line is generic.** "The Styles Taking Over Your Feed" sounds like influencer marketing copy. It could be from any apparel brand and promises nothing concrete — no offer, no product, no urgency.
- **Too many competing CTAs.** There are at least 6 CTA buttons before reaching the footer (SHOP NOW × 2, SHOP BOAT SHOES, SHOP CASUAL SNEAKERS, SHOP AIR FIT STYLES, SHOP APPAREL STYLES). The eye doesn't know where to land.
- **No single hero product.** The hero section promotes categories in aggregate rather than surfacing one aspirational product to drive desire. Best Sellers section is a grid of thumbnails — still no one product hero.
- **No urgency or deadline.** The BOGO offer has no visible expiration. "Just Landed" implies freshness but doesn't create action pressure.
- **No personalization.** Nothing in the email signals it was sent to a particular segment — same send could go to a women's shoes buyer and a men's running buyer without modification.
- **Apparel promo dilutes shoe message.** The "25% OFF APPAREL" section mid-email fragments attention from the footwear story, especially for a recipient who opened for shoes.

---

## 5. Recommendations

1. **Anchor the subject to the offer.** "BOGO 50% Off — Shop New Arrivals" is 35 chars, names the deal, and gives a reason to open. The current subject belongs in the body, not the subject line.
2. **Pick one hero product per campaign.** Surface the single best-selling or highest-margin new style as a named product with a close-up shot. Category carousels train readers to skim past.
3. **Add an offer expiration date.** Even "Offer ends Sunday" lifts urgency without any other change. The BOGO banner has no deadline, which makes it feel evergreen (and skippable).
4. **Consolidate CTAs to two.** One primary (the BOGO hero) and one secondary (apparel). Six buttons = no priority = no clicks.
5. **Move the BOGO fine print note higher.** If there are exclusions, a one-liner like "Exclusions apply. See site for details." directly under the banner prevents friction at checkout and reduces return/complaint rate.

---

## 6. Bottom Line

A clean, competent Skechers broadcast that will convert bottom-funnel brand loyalists who are already looking for an excuse to buy. It won't win back lapsed users or drive incremental urgency. The BOGO is a strong offer buried in a cluttered catalog format. Tightening the subject, removing three CTAs, and adding a deadline would meaningfully lift both open and click rates on the same creative.

---

## 7. Subject Line Analysis

- **Subject:** `The Styles Taking Over Your Feed`
- **Length:** 32 characters
- **Scores (1-10):** Clarity `5`, Curiosity `5`, Personalization `2`, Urgency `2`, Specificity `3`
- **Strengths:**
  - Under 50 chars; renders clean on mobile
  - No spam signals; reads like a natural sentence
- **Weaknesses:**
  - Offer-free — the email has a real BOGO deal that the subject completely hides
  - Could come from any fashion brand; zero Skechers-specific differentiation
- **Alt A:** `BOGO 50% Off — New Styles Just Landed`
- **Alt B:** `Just Landed: Boat Shoes, Sneakers + 25% Off Apparel`

---

## 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — No intentional preheader visible; the render does not show a preview text block above the BOGO strip
- **Length:** N/A
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - N/A — no preheader present to evaluate
- **Weaknesses:**
  - Missing entirely; inbox client will pull the first readable text from the email body (likely the BOGO banner copy or "Just Landed"), which may partially work but is uncontrolled
  - A deliberate preheader would add a second selling line for free
- **Alt A:** `BOGO 50% Off + 25% Off Apparel — New arrivals from Skechers`
- **Alt B:** `Boat Shoes. Sneakers. Elevated Comfort. All new, all on BOGO.`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `5/10`
- **Signals counted:** sender recognizable (Skechers), subject under 50 chars, no spam signals, subject loosely relevant to style/footwear persona
- **Rationale:** Skechers name recognition and a clean mobile-length subject line are the only reliable lift signals. The subject conceals the BOGO offer that would've been the actual reason to open — a substantial missed opportunity that holds this to mid-range.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `5/10`
- **Signals counted:** hero offer visible without scrolling (BOGO banner), primary CTA in footwear category, offer reduces price (BOGO 50%), category CTAs are verb+noun specific ("SHOP BOAT SHOES"), brand voice consistent with Skechers aesthetic, clean render with no friction
- **Rationale:** The BOGO offer is genuinely good and the category split allows self-selection, which helps. But no deadline, no single hero product, and six competing CTAs diffuse click intent — a reader who wasn't already planning to buy Skechers today has no hook to push them to act right now.

---

## 11. Evidence

- **Overall purpose:** New arrivals catalog send, double-duty as BOGO promotional email. Targets existing Skechers subscribers with a "here's what's new + here's your deal" structure.
- **Hero / primary value proposition:** "Just Landed — What's Hot Right Now" with BOGO 50% off banner; male lifestyle model; "SHOP NOW" CTA. The offer and the newness message both compete for the hero — neither wins cleanly.
- **Membership / benefits section:** None visible. No loyalty tier, reward points balance, or member-exclusive pricing surfaced anywhere in the render.
- **Product discoverability / recommendation modules:** Four category blocks (Boat Shoes, Sneakers, Elevated Comfort, Best Sellers grid) plus a secondary apparel section. Best Sellers shows a horizontal thumbnail strip but no named products. No "Recommended for you" or browse-history personalization.
- **Utility / secondary modules:** Footer utility bar includes app download, curbside pickup CTA, Afterpay + Klarna payment logos, store locator, and social follow links. Utility bar is well-organized and not intrusive.
- **Bugs / friction / clarity issues:** No visible render bugs. One minor clarity issue: the BOGO fine print at the very bottom of the email is extremely small and the exclusion terms are not readable at normal zoom — this is a functional design choice but creates post-click friction if exclusions are significant.

---

## Technical Audit

## Technical Audit — Skechers "The Styles Taking Over Your Feed" (2026-05-08)

---

### 1. Technical Summary

Standard Salesforce Marketing Cloud XHTML transitional template with VML Outlook fallbacks. The primary infrastructure concerns are widespread HTTP image sourcing across the CDN domain and missing compliance headers at the AgentMail relay layer — both are actionable on the sender side.

---

### 2. Link & Tracking Issues

**Open pixel** — HTTPS, no issue:
`https://click.emails.skechers.com/open.aspx?R6AD3RC7OIAETH5B67SUNUPKLI.100217`

**Krux/DMP user-match beacon** — HTTPS, but a third-party data sync worth noting for privacy disclosure review:
`https://beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_sha25&partner_uid=...`

**Movable Ink personalization pixel** — HTTP only, no alt text:
`http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8108776175&mi_ecmp=MKG_US_NONPURCLICK_U_TREND_PROD_NONPURCH_0508`
The `mi_u` parameter carries a persistent user identifier over an unencrypted request. This is a data-in-transit exposure risk.

**26 click-through links** — all routed through `click.emails.skechers.com` redirect domain; destination URLs and UTM parameters cannot be verified without resolving the redirect chain.

---

### 3. Rendering & Accessibility

**12 images served over HTTP** — email clients enforcing HTTPS (Gmail image proxy, iOS Mail on recent versions) will either block or re-proxy these, potentially breaking layout. Affected sources:

| Alt text | Asset |
|---|---|
| `"Skechers"` | `http://image.emails.skechers.com/.../dde00662...png` |
| *(missing)* | `http://image.emails.skechers.com/.../49468f73...png` |
| `"Available on the App Store"` | `http://image.emails.skechers.com/.../0ec56c9f...png` |
| `"Android App on Google Play"` | `http://image.emails.skechers.com/.../9bb508d0...png` |
| `"Curbside Pickup"` | `http://image.emails.skechers.com/.../00100b23...png` |
| `"AfterPay"` | `http://image.emails.skechers.com/.../07cb60b5...png` |
| `"Find A Store"` | `http://image.emails.skechers.com/.../fc08601a...png` |
| `"Instagram"` | `http://image.emails.skechers.com/.../b782e0aa...png` |
| `"Facebook"` | `http://image.emails.skechers.com/.../a5c4cae0...png` |
| `"YouTube"` | `http://image.emails.skechers.com/.../8c5738fc...png` |
| *(missing)* | `http://www.ink1000.com/.../o.gif` |
| *(favicon)* | `http://image.emails.nl.skechers.com/.../70bf5f91...png` |

**Missing alt text** on two images: `o.gif` (Movable Ink pixel) and `49468f73...png`. Screen readers will vocalize the raw filename or skip silently depending on client.

**`maximum-scale=1`** in the viewport meta tag prevents pinch-zoom on mobile — a WCAG 1.4.4 (Resize Text) concern, though common in email templates.

---

### 4. Personalization & Merge Tokens

Three schema.org structured data blocks are present in `<head>`. Two contain empty fields that were not populated before send:

```json
{ "@type": "EmailMessage", "subjectLine": "" }
{ "@type": "DiscountOffer", "description": "", "discountCode": "",
  "availabilityStarts": "", "availabilityEnds": "" }
```

Empty `subjectLine` in `EmailMessage` is a missed opportunity for Gmail annotations. Empty `DiscountOffer` fields should either be populated (if a promo code exists) or the entire block removed — unpopulated discount markup can trigger schema validation warnings in inbox providers.

No unfired `%%MERGE%%` or `{{handlebars}}` tokens visible in the truncated source.

---

### 5. Compliance

| Check | Status | Evidence |
|---|---|---|
| `List-Unsubscribe` header | **WARN** | Not captured by AgentMail relay |
| `List-Unsubscribe-Post` (RFC 8058) | **WARN** | Not captured — one-click unsubscribe unconfirmed |
| `Authentication-Results` (SPF/DKIM) | **WARN** | Not captured by relay — deliverability status unknown |
| CAN-SPAM physical address | Not verifiable from truncated HTML | |
| Preheader / hidden text | Pass | `display:none` pattern is correct |

**RFC 8058 / Gmail-Yahoo bulk sender requirement**: Skechers' send volume almost certainly exceeds the 5,000/day threshold triggering Google's and Yahoo's February 2024 one-click unsubscribe mandate. Absence of `List-Unsubscribe-Post` at the relay is a compliance gap, though it may be present at the MTA and simply not forwarded by the AgentMail ingest layer.

---

### 6. Email-to-Site Continuity

All click links pass through `click.emails.skechers.com` before redirecting to `skechers.com`. UTM parameter presence is unverifiable without resolving the redirect chain — the QA system skipped all 26 links.

The Movable Ink pixel does carry a campaign identifier: `mi_ecmp=MKG_US_NONPURCLICK_U_TREND_PROD_NONPURCH_0508`, confirming segment/campaign tagging is in place at the tracking layer. Whether this maps to matching UTM values on landing pages cannot be confirmed here.

---

### 7. Recommendations

**High priority**
1. **Migrate all `http://image.emails.skechers.com/` sources to HTTPS.** The CDN likely supports HTTPS already — this is a template configuration change in SFMC. Affects 10+ images including the logo and all footer icons.
2. **Migrate the Movable Ink pixel to HTTPS.** The `http://www.ink1000.com` endpoint transmits a user identifier (`mi_u`) in plaintext. Confirm with the Movable Ink account team whether `https://` is available for this endpoint.
3. **Verify `List-Unsubscribe` and `List-Unsubscribe-Post` headers at the MTA.** If present at send but stripped by the relay, this is a monitoring gap only. If absent at the MTA, this is a Gmail/Yahoo compliance violation for a sender of this volume.

**Medium priority**

4. **Add alt text to `49468f73...png`** (the unidentified image with no alt). Confirm whether it is decorative (use `alt=""`) or informational.
5. **Populate or remove the `DiscountOffer` schema block.** If BOGO 50% Off applies, populate `discountCode`, `availabilityStarts`, and `availabilityEnds`. If no code, remove the block to avoid schema validation noise.
6. **Populate `EmailMessage.subjectLine`** in structured data to match the actual subject line for Gmail annotation eligibility.

**Low priority**

7. **Probe the click-redirect chain** on a sample of the 26 tracked links to confirm UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`) are present on final landing URLs and match the campaign segment identifier in the Movable Ink pixel.
8. **Migrate the favicon** from `http://image.emails.nl.skechers.com/` to HTTPS to avoid mixed-content warnings in clients that render favicons.
## Recent history

- [[2026-05-08-free-yves-saint-laurent-fragrance-gift-with-select-online-75-purchase-terms-appl]] — 7/10 (2026-05-08)
- [[2026-05-08-meet-the-grad-look]] — 8/10 (2026-05-08)
- [[2026-05-07-great-gift-alert-free-4-pc-rabanne-gift-with-select-online-50-purchase-terms-app]] — 8/10 (2026-05-07)

