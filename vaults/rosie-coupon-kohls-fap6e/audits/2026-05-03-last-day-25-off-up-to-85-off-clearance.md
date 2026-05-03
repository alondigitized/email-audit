---
slug: 2026-05-03-last-day-25-off-up-to-85-off-clearance
type: email
date: 2026-05-03
persona: rosie-coupon-kohls-fap6e
score: "8/10"
sender: "Kohl's Friends & Family"
subject: "LAST DAY: 25% off + up to 85% off clearance ⏳"
tags: [email, score-8, sender/kohl-s-friends-family]
---
# LAST DAY: 25% off + up to 85% off clearance ⏳
**Score:** 8/10 · **Type:** Email audit · **2026-05-03**
## Executive summary

- This is a broad-reach Friends & Family blast that packs multiple discount tiers, a seasonal Mother's Day hook, and a clearance callout into one long email. Mechanically it's well-executed — clean render, clear hero offer, recognizable brand — but for Walker (men's shoes), it's a generic mass send. Shoes appear only as a category label buried deep in the clearance grid. The email works hard for Kohl's; it doesn't work hard for you.
- **8/10**
- Rubric criteria that are TRUE:
- Sender is a recognizable brand (Kohl's)
- Concrete offer is visible (25% off Friends & Family, prominently stated)
- Primary CTA is unambiguous ("Women" / "Men" buttons in the hero)
- Visual hierarchy is clear — the eye lands on the Friends & Family hero first
- No render bugs — email is clean and fully rendered
- Email reflects current season — Mother's Day May 10, email lands May 3
- Loyalty / member benefits visible — Kohl's Cash earn module at the bottom
- Offer feels honest — "25% off" is stated plainly; "up to 85%" has the qualifier present
- NOT credited:
- Subject/hero does not explicitly reference men's shoes (Walker's focus area)
- Demographic signals skew heavily toward Mother's Day gift-givers and home goods, not Walker's profile

## What's working

- **Hero punch**: Friends & Family 25% off is immediately clear. The bifurcated "Women / Men" CTA gives the illusion of segmentation without requiring separate sends.
- **Urgency layering**: "LAST DAY" in the subject + "Mother's Day is May 10" in the body + the hourglass emoji create three credible urgency signals.
- **Clearance boldness**: The "CLEARANCE 85%" section is visually dominant and communicates extreme value, even if the "up to" qualifier does the heavy lifting.
- **Kohl's Cash module**: Loyalty reinforcement at the bottom — low friction, visible reward.

## What's weak

- **No shoe-specific content for Walker**: Shoes appear once — as a text label in the clearance category grid. There's no shoe imagery, no featured product, no sizing/fit reference.
- **Offer proliferation**: Five distinct discount tiers visible (25% F&F, 20% home, 40% kitchen, 85% clearance, $15 & under) dilute attention and make the primary offer feel less special.
- **Mother's Day dominates**: The red banner, time-running-out module, and gift category tiles all serve a gift-giver persona, not a self-purchase male shopper.
- **No product specificity**: Every CTA links to a category, not a product. Nothing is "featured" in the sense that a specific item creates desire.
- **Kohl's Cash is buried**: The earn mechanic is near the footer, undersized relative to its loyalty value.

## Recommendations

- 1. **Segment men's shoes out of the clearance grid and into the hero** — even a 2-image tile of current men's sneakers above the fold would convert Walker at a meaningfully higher rate.
- 2. **Collapse the discount tiers to two** — lead with "25% off everything" and call out "up to 85% clearance" as a supporting line; don't run five separate percentage callouts in one email.
- 3. **Move Kohl's Cash above the clearance module** — it's a stronger loyalty signal than clearance and should anchor the bottom-of-funnel more prominently.
- 4. **Replace the generic "Men" CTA with "Men's Shoes"** — one word of specificity dramatically improves relevance for a segment Kohl's clearly has the inventory to serve.
- 5. **Surface one specific men's shoe with price** — even a single product image with "Was $80 / Now $60" converts better than a category gateway.
- | Priority | Issue | Fix |
- |---|---|---|
- | **High** | Missing CAN-SPAM physical address | Confirm presence in full HTML below truncation; add to footer if absent |
- | **High** | `List-Unsubscribe` / `List-Unsubscribe-Post` headers missing | Add at ESP/relay level; required for Gmail/Yahoo bulk sender compliance since 2024 |
- | **High** | `user-scalable=0` in viewport | Remove `maximum-scale=1, user-scalable=0`; allow pinch-zoom |
- | **Medium** | 11 images missing `alt=""` | Add `alt=""` explicitly to all tracking pixels and decorative images |
- | **Medium** | Malformed `</custom>` tag | Remove the stray closing tag after the SMC open-pixel `<img>` |
- | **Medium** | Double Google Fonts loading | Remove `@import` rules; keep `<link>` tags only (or remove both — Gmail blocks them regardless) |
- | **Low** | Redundant pixel stacking (4 systems) | Consolidate to one open-tracking pixel; audit data-sharing disclosures for AAM |
- | **Low** | Empty `<title>` tag | Add a descriptive title (e.g., "Kohl's Friends & Family — May 3") |
- | **Low** | Plain-text part is 71% URLs | Regenerate plain-text from content; strip or shorten tracking URLs in the text alternative |

## Full review
---

## 1. Executive Summary

This is a broad-reach Friends & Family blast that packs multiple discount tiers, a seasonal Mother's Day hook, and a clearance callout into one long email. Mechanically it's well-executed — clean render, clear hero offer, recognizable brand — but for Walker (men's shoes), it's a generic mass send. Shoes appear only as a category label buried deep in the clearance grid. The email works hard for Kohl's; it doesn't work hard for you.

---

## 2. Business Impact Score (1-10)

**8/10**

Rubric criteria that are TRUE:
- Sender is a recognizable brand (Kohl's)
- Concrete offer is visible (25% off Friends & Family, prominently stated)
- Primary CTA is unambiguous ("Women" / "Men" buttons in the hero)
- Visual hierarchy is clear — the eye lands on the Friends & Family hero first
- No render bugs — email is clean and fully rendered
- Email reflects current season — Mother's Day May 10, email lands May 3
- Loyalty / member benefits visible — Kohl's Cash earn module at the bottom
- Offer feels honest — "25% off" is stated plainly; "up to 85%" has the qualifier present

NOT credited:
- Subject/hero does not explicitly reference men's shoes (Walker's focus area)
- Demographic signals skew heavily toward Mother's Day gift-givers and home goods, not Walker's profile

---

## 3. What's Working

- **Hero punch**: Friends & Family 25% off is immediately clear. The bifurcated "Women / Men" CTA gives the illusion of segmentation without requiring separate sends.
- **Urgency layering**: "LAST DAY" in the subject + "Mother's Day is May 10" in the body + the hourglass emoji create three credible urgency signals.
- **Clearance boldness**: The "CLEARANCE 85%" section is visually dominant and communicates extreme value, even if the "up to" qualifier does the heavy lifting.
- **Kohl's Cash module**: Loyalty reinforcement at the bottom — low friction, visible reward.

---

## 4. What's Weak

- **No shoe-specific content for Walker**: Shoes appear once — as a text label in the clearance category grid. There's no shoe imagery, no featured product, no sizing/fit reference.
- **Offer proliferation**: Five distinct discount tiers visible (25% F&F, 20% home, 40% kitchen, 85% clearance, $15 & under) dilute attention and make the primary offer feel less special.
- **Mother's Day dominates**: The red banner, time-running-out module, and gift category tiles all serve a gift-giver persona, not a self-purchase male shopper.
- **No product specificity**: Every CTA links to a category, not a product. Nothing is "featured" in the sense that a specific item creates desire.
- **Kohl's Cash is buried**: The earn mechanic is near the footer, undersized relative to its loyalty value.

---

## 5. Recommendations

1. **Segment men's shoes out of the clearance grid and into the hero** — even a 2-image tile of current men's sneakers above the fold would convert Walker at a meaningfully higher rate.
2. **Collapse the discount tiers to two** — lead with "25% off everything" and call out "up to 85% clearance" as a supporting line; don't run five separate percentage callouts in one email.
3. **Move Kohl's Cash above the clearance module** — it's a stronger loyalty signal than clearance and should anchor the bottom-of-funnel more prominently.
4. **Replace the generic "Men" CTA with "Men's Shoes"** — one word of specificity dramatically improves relevance for a segment Kohl's clearly has the inventory to serve.
5. **Surface one specific men's shoe with price** — even a single product image with "Was $80 / Now $60" converts better than a category gateway.

---

## 6. Bottom Line

Kohl's does the execution basics correctly — clean render, visible offer, credible urgency, loyal brand voice. But this is a broadcast, not a send. Walker gets a "Men" button and a "Shoes" text link in the clearance grid. That's not targeting; it's acknowledgment. For a shoe-forward persona, this email is table stakes: worth a scroll, not worth a click.

---

## 7. Subject Line Analysis

- **Subject:** `LAST DAY: 25% off + up to 85% off clearance ⏳`
- **Length:** 45 characters (including emoji)
- **Scores (1-10):** Clarity `7`, Curiosity `3`, Personalization `1`, Urgency `8`, Specificity `6`
- **Strengths:**
  - "LAST DAY" + hourglass emoji creates instant urgency without feeling spammy
  - Two specific percentages (25%, 85%) anchor the value promise concretely
- **Weaknesses:**
  - "Up to 85%" is a ceiling claim that can feel like a bait headline when real clearance is 30-40%
  - Zero personalization or category signal — identical subject would land in every segment
- **Alt A:** `Last day: your 25% Friends & Family code (+ 85% off clearance)`
- **Alt B:** `LAST DAY | Men's shoes up to 85% off + extra 25% F&F`

---

## 8. Preview Text Analysis

- **Preview:** `(cannot determine from webview render — the rendered view does not expose inbox preheader)`
- **Length:** N/A
- **Scores (1-10):** Complements subject `N/A`, Specificity `N/A`, Clarity `N/A`, Inbox-fit `N/A`
- **Strengths:** N/A
- **Weaknesses:**
  - If the preheader falls through to navigation link text or "view in browser" junk, it would waste valuable inbox real estate alongside an already-crowded subject line
- **Alt A:** `Friends & Family ends tonight — shop men's shoes now`
- **Alt B:** `Clearance + 25% off. Kohl's Cash earns through tonight.`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `6/10`
- **Signals counted:** Sender display name recognizable, subject concrete (specific %s), subject under 50 chars, time-bounded urgency ("LAST DAY"), cadence feels appropriate (one-day close-out)
- **Rationale:** Kohl's is a known brand and "LAST DAY" with hard numbers earns the open from the inbox. But the subject has no shoe or men's hook, so the urgency is generic — Walker opens out of FOMO on a deal, not out of targeted interest.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `5/10`
- **Signals counted:** Hero offer is visible without scrolling, offer reduces price (25% off), offer is time-bounded with credible deadline, brand voice is consistent and trusted, no friction in render
- **Rationale:** The 25% off code is real and visible, and the "Men" button in the hero is a low-friction entry point — Walker clicks that. But landing on a generic men's category page with no shoe hero or featured product means the click is a browse, not a buy.

---

## 11. Evidence

- **Overall purpose:** Friends & Family promotional send with last-day urgency, layered on top of a Mother's Day seasonal push and a clearance event.
- **Hero / primary value proposition:** Friends & Family 25% off, with bifurcated "Women" / "Men" CTAs. Clear and above the fold.
- **Seasonal module:** Red banner ("Last chance to ship gifts in time for Mother's Day") + mid-email "Time's running out. The gift ideas aren't." block anchored to May 10. Adds urgency but skews the send toward gift-givers.
- **Home / lifestyle modules:** Two distinct home sections — one positioned around "pretend you were ready for guests" (20% off, bedroom imagery) and one around kitchen appliances (40% off, coffee maker visible). These serve a domestic-purchase persona, not Walker.
- **Category discovery grid:** "$15 & Under / Decor / Jewelry" tiles are visible below the Mother's Day module. No shoes tile.
- **Clearance module:** "CLEARANCE 85%" with category labels: Clothing, Home, Accessories, Beauty, **Shoes**. Shoes appear here — text only, no imagery.
- **Loyalty / coupon:** Friends & Family barcode module near the bottom with spend threshold messaging (extra 25% on $50+). Reinforces the deal.
- **Kohl's Cash:** Small earn module near the footer with app store links.
- **Bugs / friction / clarity issues:** None visible — the email renders cleanly with no broken images, overlapping text, or placeholder copy observed.

---

## Technical Audit

## Technical Audit — Kohl's Friends & Family Email

**From:** kohls@s.kohls.com | **Subject:** LAST DAY: 25% off + up to 85% off clearance

---

### 1. Technical Summary

The email is a well-structured HTML 4.01 table-based layout with standard ESP-level rendering fixes, but has multiple compliance gaps (missing CAN-SPAM physical address, absent List-Unsubscribe headers) and a pervasive alt-text failure across tracking pixels and content images. SPF/DKIM status is unverifiable through the relay.

---

### 2. Link & Tracking Issues

- **22 tracking/click-redirect links skipped** by the HTTP probe — all routed through `click.s.kohls.com` and `click.chp.kohls.com`. Destination URLs and redirect chain health are unverified.
- **Three separate tracking pixel systems** are active simultaneously:
  - `click.chp.kohls.com/o/...` (CHP pixel)
  - `mi.kohls.com/p/up/...` (Marigold Intelligence open-tracking pixel — `o.gif`)
  - `click.s.kohls.com/open.aspx?...` (Salesforce Marketing Cloud open pixel)
  - `kohls.demdex.net/event?d_sid=13245196` (Adobe Audience Manager)
- Redundant pixel stacking increases page weight, creates multiple third-party data-share disclosures, and inflates open-count figures across platforms non-deterministically.
- **Malformed tag** in open-tracking block: `</custom>` is an undefined/invalid closing tag immediately after the SMC pixel `<img>`:
  ```html
  <img src="https://click.s.kohls.com/open.aspx?..." width="1" height="1" alt=""></custom>
  ```
  This is invalid HTML and may break parsing in strict renderers.

---

### 3. Rendering & Accessibility

- **11 images missing `alt` text** (confirmed by QA). Affected images include:
  - The CHP tracking pixel (`2645e220...`)
  - Two Marigold render-path pixels (`2a5adc5a...`, `f441d45d...`, `c2f81e9a...`, `415c8a18...`, `69494b48...`, `78308d1d...`, `916d6fa0...`)
  - The Adobe AAM pixel (`event` from `kohls.demdex.net`)
  - The Marigold open pixel (`o.gif`)
  - Tracking/decorative pixels should carry `alt=""` (empty) explicitly — omitting the attribute entirely triggers screen reader announcement of the filename/URL.
- **`<title>` element is empty**: `<title></title>` — accessibility tools and some preview panes (e.g., Gmail preview card) fall back to this.
- **`user-scalable=0`** in viewport meta tag:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
  ```
  This disables pinch-zoom, violating WCAG 1.4.4 (Resize Text) and Apple App Store review guidelines for accessibility.
- **`<meta name="referrer" content="no-referrer" />`** — strips referrer on all outbound clicks. UTM parameters will still be present in the destination URL, but any server-side referrer logging at kohls.com will be blank for email traffic.
- Google Fonts loaded via both `<link>` and `@import` simultaneously for both Roboto and Montserrat — double-loading adds ~200–400ms latency on first render with no benefit:
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
  ...
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  ```
  Note: Google Fonts are blocked in Gmail webmail — Montserrat/Roboto will never render there; the `Arial` fallback fires instead.

---

### 4. Personalization & Merge Tokens

- No unresolved merge tokens (e.g., `{{first_name}}`, `%%first_name%%`) detected in the truncated source.
- Marigold Intelligence recipient ID is populated: `mi_u=604230016` — indicates successful token substitution at send time.
- No conditional content blocks visible in the truncated HTML; cannot confirm dynamic content render paths.

---

### 5. Compliance

- **[WARN] No physical mailing address detected** in the HTML source. CAN-SPAM §5(a)(5) requires a valid physical postal address. This is absent or falls below the HTML truncation point — if it is not present in the full source, this is a CAN-SPAM violation.
- **[WARN] `List-Unsubscribe` header not found** — not captured by the AgentMail relay. One-click unsubscribe (RFC 8058 `List-Unsubscribe-Post`) is also absent. Gmail and Yahoo Mail require `List-Unsubscribe` for bulk senders (>5,000/day) since February 2024; absence risks inbox demotion or bulk folder placement.
- **[WARN] `Authentication-Results` header not found** — SPF, DKIM, and DMARC pass/fail status cannot be confirmed through the relay. For a sender of this volume (`@s.kohls.com` subdomain), DKIM alignment on the `d=` domain relative to the `From:` domain should be verified independently.
- `<meta name="robots" content="noindex, nofollow" />` is correctly present — prevents search engine indexing of the web-view version.

---

### 6. Email-to-Site Continuity

- All 22 click links route through `click.s.kohls.com` (Salesforce MC click-wrapper) and `click.chp.kohls.com` — destination URLs are not inspectable from the source. UTM parameter presence on final landing pages cannot be confirmed without resolving the redirect chain.
- `mi_ecmp=1011580_202653` and `email_name=260503_DG_Email_Sunday` parameters are present on Marigold pixel calls, confirming campaign-level tagging is active on the tracking side.
- `<meta name="referrer" content="no-referrer" />` (noted above) will suppress HTTP Referer header on all landing pages — any analytics relying on referrer string rather than UTM params will show direct/none traffic for this email.

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| **High** | Missing CAN-SPAM physical address | Confirm presence in full HTML below truncation; add to footer if absent |
| **High** | `List-Unsubscribe` / `List-Unsubscribe-Post` headers missing | Add at ESP/relay level; required for Gmail/Yahoo bulk sender compliance since 2024 |
| **High** | `user-scalable=0` in viewport | Remove `maximum-scale=1, user-scalable=0`; allow pinch-zoom |
| **Medium** | 11 images missing `alt=""` | Add `alt=""` explicitly to all tracking pixels and decorative images |
| **Medium** | Malformed `</custom>` tag | Remove the stray closing tag after the SMC open-pixel `<img>` |
| **Medium** | Double Google Fonts loading | Remove `@import` rules; keep `<link>` tags only (or remove both — Gmail blocks them regardless) |
| **Low** | Redundant pixel stacking (4 systems) | Consolidate to one open-tracking pixel; audit data-sharing disclosures for AAM |
| **Low** | Empty `<title>` tag | Add a descriptive title (e.g., "Kohl's Friends & Family — May 3") |
| **Low** | Plain-text part is 71% URLs | Regenerate plain-text from content; strip or shorten tracking URLs in the text alternative |
## Recent history

- [[2026-05-02-save-25-these-active-looks-are-in-it-for-the-long-run]] — 5/10 (2026-05-02)
- [[2026-05-01-you-just-scored-15-off-thanks-for-signing-up-for-our-emails]] — 6.5/10 (2026-05-01)
- [[2026-05-01-welcome-to-kohl-s-rewards]] — 6/10 (2026-05-01)

