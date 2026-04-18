---
slug: 2026-04-15-your-items-are-waiting
type: email
date: 2026-04-15
persona: walker
score: "6/10"
sender: SKECHERS
subject: Your Items Are Waiting!
tags: [email, score-6, sender/skechers]
---
# Your Items Are Waiting!
**Score:** 6/10 · **Type:** Email audit · **2026-04-15**
## Executive summary

- Functional but under-optimized. The cart reminder is clear, but the incentive placement and volume of secondary modules weaken the closing argument.

## What's working

- **"WE NOTICED YOU NOTICING US..."** — The headline has charm. It's self-aware, slightly playful, and differentiates from the flat "You left something behind" generic norm.
- **Hero product visibility** — The abandoned item (Skechers Big Max Slip-on, Gray) is shown clearly with its name and a direct CTA: "COMPLETE YOUR ORDER." No ambiguity about what this email is for.
- **"SHOP ALL BEST SELLERS" bar** — Smart fallback. If the carted item doesn't close the deal, this gives an easy escape hatch to browse.
- **Product recommendation row** — "Here's Some More Great Options We Think You'll Love" is a solid upsell module. It acknowledges the customer may want to explore before committing.

## What's weak

- **20% off is buried** — The promo banner doesn't appear until well below the fold. For an abandoned cart email, a discount is the most powerful conversion lever. It should be in the hero, not an afterthought. Many recipients won't scroll far enough to see it.
- **Headline-subhead disconnect** — "WE NOTICED YOU NOTICING US..." is witty, but "YOUR CART IS STILL WAITING." is a flat follow-through. The two tones don't quite align — one is playful brand voice, the other is transactional pressure.
- **Bottom-half clutter** — After the 20% banner, the email piles on: Shop by Category links, App Download, Curbside Pickup, Buy Now Pay Later, Find a Store, and Follow Us. That's five utility modules stacked back to back. Each individually is fine; together they destroy the email's urgency and feel like a site footer bolted onto a cart abandonment flow.
- **Product recommendation images are small** — The three recommended products appear at a size where you can register there are shoes, but can't really evaluate them. They work harder as placeholders than as actual selling tools.

## Recommendations

- 1. **Move the 20% off offer into the hero.** Put it directly beneath the headline or wrap the CTA button with a line like "Complete your order — get 20% off today." Incentive-first, always.
- 2. **Strengthen the subheadline.** Try: *"And they're 20% off if you act today."* That closes the wit-to-value gap immediately.
- 3. **Trim the utility stack.** Pick two bottom modules max. The app and Find a Store sections are the weakest fits for a cart abandonment email — remove them here, keep them for newsletters.
- 4. **Add urgency to the product image block.** A small label like "Low stock" or "Selling fast" near the hero shoe creates friction that the current email completely lacks.
- 5. **Larger recommendation tiles.** If the "you'll love these" section is present, make the products legible enough to actually desire. Small tiles invite skipping.
- | Priority | Issue | Fix |
- |---|---|---|
- | High | All tracking links use HTTP | Update Attentive link-redirect base URL to HTTPS; confirm landing pages are HTTPS |
- | High | Image CDN URL is HTTP | Confirm `image.emails.skechers.com` CDN serves over HTTPS |
- | High | Footer compliance elements not confirmed | Audit footer for CAN-SPAM address + unsubscribe; ensure not CSS-hidden |
- | Medium | Empty `<title>` | Add descriptive title for web-version accessibility |
- | Medium | UTM params unverifiable from source | Decode a test-send link; validate attribution chain end-to-end |
- | Medium | Cart item merge tokens not audited | QA a test send with an actual cart payload; confirm fallback values |
- | Low | Soft hyphen in preheader padding | Replace `­` with `&zwnj;` to prevent visible hyphen rendering in legacy clients |
- | Low | Global `text-decoration:none` on links | Add explicit inline `text-decoration` on CTAs to survive the cascade override |

## Full review
## 2. Business Impact Score: **6 / 10**

Functional but under-optimized. The cart reminder is clear, but the incentive placement and volume of secondary modules weaken the closing argument.

---

## 3. What's Working

- **"WE NOTICED YOU NOTICING US..."** — The headline has charm. It's self-aware, slightly playful, and differentiates from the flat "You left something behind" generic norm.
- **Hero product visibility** — The abandoned item (Skechers Big Max Slip-on, Gray) is shown clearly with its name and a direct CTA: "COMPLETE YOUR ORDER." No ambiguity about what this email is for.
- **"SHOP ALL BEST SELLERS" bar** — Smart fallback. If the carted item doesn't close the deal, this gives an easy escape hatch to browse.
- **Product recommendation row** — "Here's Some More Great Options We Think You'll Love" is a solid upsell module. It acknowledges the customer may want to explore before committing.

---

## 4. What's Weak

- **20% off is buried** — The promo banner doesn't appear until well below the fold. For an abandoned cart email, a discount is the most powerful conversion lever. It should be in the hero, not an afterthought. Many recipients won't scroll far enough to see it.
- **Headline-subhead disconnect** — "WE NOTICED YOU NOTICING US..." is witty, but "YOUR CART IS STILL WAITING." is a flat follow-through. The two tones don't quite align — one is playful brand voice, the other is transactional pressure.
- **Bottom-half clutter** — After the 20% banner, the email piles on: Shop by Category links, App Download, Curbside Pickup, Buy Now Pay Later, Find a Store, and Follow Us. That's five utility modules stacked back to back. Each individually is fine; together they destroy the email's urgency and feel like a site footer bolted onto a cart abandonment flow.
- **Product recommendation images are small** — The three recommended products appear at a size where you can register there are shoes, but can't really evaluate them. They work harder as placeholders than as actual selling tools.

---

## 5. Recommendations

1. **Move the 20% off offer into the hero.** Put it directly beneath the headline or wrap the CTA button with a line like "Complete your order — get 20% off today." Incentive-first, always.
2. **Strengthen the subheadline.** Try: *"And they're 20% off if you act today."* That closes the wit-to-value gap immediately.
3. **Trim the utility stack.** Pick two bottom modules max. The app and Find a Store sections are the weakest fits for a cart abandonment email — remove them here, keep them for newsletters.
4. **Add urgency to the product image block.** A small label like "Low stock" or "Selling fast" near the hero shoe creates friction that the current email completely lacks.
5. **Larger recommendation tiles.** If the "you'll love these" section is present, make the products legible enough to actually desire. Small tiles invite skipping.

---

## 6. Bottom Line

A competent cart abandonment email that plays it safe when it should play to win. The tone is right, the structure is mostly right, and the discount exists — it's just not deployed where it matters most. Elevate the 20% off to the hero, strip three bottom modules, and this email converts meaningfully better without any new creative assets.

---

## 7. Subject Line Analysis

- **Subject:** `Your Items Are Waiting!`
- **Length:** 22 characters
- **Scores (1-10):** Clarity `8`, Curiosity `3`, Personalization `4`, Urgency `5`, Specificity `4`
- **Strengths:**
  - Immediately communicates cart abandonment intent — zero ambiguity
  - Short and clean; renders fully on all devices
- **Weaknesses:**
  - "Items Are Waiting" is category-default phrasing — nearly every retailer uses a variant of this; no differentiation
  - No incentive teased in subject; the 20% off discount that's inside the email is completely hidden from the inbox preview
- **Alt A:** `We saved your cart — plus 20% off today`
- **Alt B:** `You were SO close… (and we're making it easier)`

---

## 8. Evidence

**Overall purpose:** Cart abandonment re-engagement. One specific item is surfaced with a direct CTA.

**Hero / primary value proposition:** "WE NOTICED YOU NOTICING US... YOUR CART IS STILL WAITING." Hero image shows the Skechers Big Max Slip-on Cushioning Slide in gray. Single CTA button: "COMPLETE YOUR ORDER." Solid execution, though the discount is absent at this stage.

**Membership / benefits section:** None visible. No loyalty program, no member pricing callout.

**Product recommendation module:** A 3-tile row labeled "HERE'S SOME MORE GREAT OPTIONS WE THINK YOU'LL LOVE" appears below the hero. Images are present but small. No prices visible. Followed by a "SHOP ALL BEST SELLERS" dark bar CTA.

**Promotional module:** A 20% OFF banner with a "SHOP NOW" button appears roughly mid-email. Placement is too deep — this should lead the conversion argument, not trail it.

**Utility / secondary modules:** Shop by Category (Women, Men, Kids, Clothing, New Arrivals, Sale), App Download (iOS + Android), Curbside Pickup, Shop Now Pay Later (installment payment logos), Find a Store, Follow Us (social icons). All standard, all stacked sequentially — volume is the problem.

**Bugs / friction / clarity issues:** No broken images observed. All product images render. The recommendation tile images are visually small but not broken. No overlapping text or missing fields visible in the render.

---

## Technical Audit

## Technical Audit — SKECHERS "Your Items Are Waiting!" Abandoned Cart Email

---

### 1. Technical Summary

Email is sent via Attentive (`msgs.skechers.com` / `skechers.attentivemail.com`) using a table-based layout with a responsive media query breakpoint at 620px. Multiple HTTP (non-HTTPS) links and an empty `<title>` tag are the primary technical defects visible in the provided source.

---

### 2. Link & Tracking Issues

**HTTP links throughout — not HTTPS**
All tracked hrefs use `http://skechers.attentivemail.com/ls/click?upn=…`. Modern email clients and security proxies (Google, Apple, Outlook) re-scan or rewrite HTTP redirect chains; some will show a browser interstitial warning. The redirect destination should also be verified to land on `https://`.

Evidence:
```
href="http://skechers.attentivemail.com/ls/click?upn=u001.LNc6Vor..."
```

**Image CDN also HTTP**
The logo `src` begins with `http://image.emails.skech…` (source truncated). If the full URL is HTTP, mixed-content rules in image-blocking proxies may suppress the image even when images are "allowed."

**UTM parameters not visible in raw hrefs**
Tracking parameters are opaque inside the Attentive `upn=` encoded blob. This means UTM attribution depends entirely on Attentive's redirect expansion. Confirm in Attentive's link-management dashboard that `utm_source`, `utm_medium`, `utm_campaign`, and `utm_content` are being appended post-redirect — they cannot be audited from the raw HTML.

---

### 3. Rendering & Accessibility

**Empty `<title>` element**
```html
<title></title>
```
Screen readers (NVDA, JAWS) announce the window title when a user opens the email in a browser (web version link). An empty title leaves the tab unlabeled. Minimum fix: `<title>Skechers — Your Items Are Waiting</title>`.

**Link underlines globally suppressed**
```css
#MessageViewBody a { color: inherit; text-decoration: none }
```
This removes all visual link affordance for sighted users reading in Gmail web (which wraps content in `#MessageViewBody`). Inline `text-decoration` on individual `<a>` tags can override this, but any link that relies solely on the cascade will be visually indistinguishable from body text.

**Logo `<img>` alt attribute not confirmed**
The logo `<img>` tag is inside the truncated block; the visible source does not show an `alt` attribute before truncation. If absent, screen readers will either skip the image or announce the raw filename. Verify `alt="Skechers"` is present.

**Preheader whitespace padding uses mixed Unicode characters**
The preheader stuffing uses both `͏` (U+034F combining grapheme joiner) and `­` (U+00AD soft hyphen). Soft hyphens are rendered as visible hyphens in some older email clients (Lotus Notes, certain Android mail apps). Use a single zero-width character approach or replace with `&zwnj;` entities for broader safety.

---

### 4. Personalization & Merge Tokens

**No first-name token in subject line or visible body**
Subject: `Your Items Are Waiting!` — no `{{first_name}}` or equivalent. The preheader also contains no recipient-specific token. For an abandoned-cart trigger (where the recipient is a known, logged-in user), this is a missed merge opportunity but not a technical defect per se.

**Cart item tokens not auditable from truncated source**
The product image/name/price block is cut off. Verify that Attentive's cart abandonment tokens (e.g., `{{cart.items[0].product_title}}`) render correctly and that fallback values are set for cases where the cart data is stale or unavailable. An unresolved token rendering as literal `{{…}}` in the live send would be a P1 defect.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Unsubscribe link and physical mailing address not visible**
The HTML is truncated before the footer. CAN-SPAM requires a functioning opt-out mechanism and a valid physical postal address in every commercial email. Confirm both are present in the footer rows not shown. Attentive typically injects these automatically, but verify they are not accidentally hidden via `display:none` or zero-height CSS.

**Sending domain authentication**
`From: hello@msgs.skechers.com` — `msgs.skechers.com` is an Attentive subdomain configured for Skechers. SPF, DKIM, and DMARC alignment should be verified at the DNS level for this subdomain. No authentication headers are included in the provided source snippet, so this cannot be confirmed from HTML alone — check with a header analyzer (e.g., MXToolbox) on a live send.

---

### 6. Email-to-Site Continuity

**UTM parameters opaque; cannot confirm landing page alignment**
Because all links are encoded Attentive redirect URLs, the final destination URLs and their UTM strings are not inspectable from the raw HTML. Risk: if Attentive's UTM injection is misconfigured, sessions will land with missing or incorrect campaign attribution in GA4/analytics.

**Action required:** Decode at least one Attentive redirect URL from a test send and confirm:
- Final destination is `https://www.skechers.com/…`
- URL contains `utm_source=email&utm_medium=triggered&utm_campaign=<campaign_id>` (or equivalent)
- Cart-specific landing page (PDP or cart page) is reachable and not returning a 404 or redirect loop

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| High | All tracking links use HTTP | Update Attentive link-redirect base URL to HTTPS; confirm landing pages are HTTPS |
| High | Image CDN URL is HTTP | Confirm `image.emails.skechers.com` CDN serves over HTTPS |
| High | Footer compliance elements not confirmed | Audit footer for CAN-SPAM address + unsubscribe; ensure not CSS-hidden |
| Medium | Empty `<title>` | Add descriptive title for web-version accessibility |
| Medium | UTM params unverifiable from source | Decode a test-send link; validate attribution chain end-to-end |
| Medium | Cart item merge tokens not audited | QA a test send with an actual cart payload; confirm fallback values |
| Low | Soft hyphen in preheader padding | Replace `­` with `&zwnj;` to prevent visible hyphen rendering in legacy clients |
| Low | Global `text-decoration:none` on links | Add explicit inline `text-decoration` on CTAs to survive the cascade override |
## Recent history

- [[2026-04-14-test-pro-us-nonpurclick-u-sitebundle-nonpurch-en-04152026spring-styles-20-off-th]] — 4/10 (2026-04-14)
- [[2026-04-14-test-pro-us-retpuropen-u-sitebundle-retail-en-04152026your-perfect-pair-bogo-50-]] — 4/10 (2026-04-14)
- [[2026-04-14-test-pro-us-ecmpurl24-u-sitebundle-ecom-en-04152026spring-styles-bogo-50-off-the]] — 3/10 (2026-04-14)

