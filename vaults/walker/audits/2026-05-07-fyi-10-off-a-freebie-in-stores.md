---
slug: 2026-05-07-fyi-10-off-a-freebie-in-stores
type: email
date: 2026-05-07
persona: walker
score: "6/10"
sender: DSW
subject: "FYI: $10 off + a freebie in stores"
tags: [email, score-6, sender/dsw]
---
# FYI: $10 off + a freebie in stores
**Score:** 6/10 · **Type:** Email audit · **2026-05-07**
## Executive summary

- DSW caught my attention with the subject line — "$10 off and a freebie" is plain-spoken, the kind of deal I actually read. But once I opened this thing, it felt like I wandered into the wrong section of the store. The hero is a free cooler tote with a $75 in-store buy — fine, I guess — but then the "So New, So You" grid is nothing but heels and strappy sandals. I'm a men's comfort shoe guy. I scrolled the whole email and never once saw a slip-on, a walking shoe, or anything built for my feet. DSW has men's shoes. I've bought there before. But this email didn't know that. It treated me like a stranger.

## What's working

- The **free cooler tote** offer is a solid hook. "Get it before it's gone" and "while supplies last" create real urgency without screaming at me with exclamation points — I appreciate that. The email loads cleanly on my phone, the font is readable, and the buttons are big enough to tap. The **Shop By Size** module with Wide Width buttons is a nice practical touch — that's actually useful for a guy like me who needs a wider fit. And the subject line itself — short, plain, specific — is the kind of thing I'd actually open in a crowded inbox.

## What's weak

- The **$10 off in the subject has no match in the email body.** I opened this looking for my ten bucks off and the hero is a cooler tote. That disconnect is irritating. It feels like a trick to get me to open.
- The **product grid is all women's shoes.** Heels, sandals, strappy stuff. I'm not the customer for any of that. If DSW knows I shop Men's, they didn't use it here.
- The **"So New, So You"** section has six tiny product thumbnails — and on my phone, they're so small I can barely tell what I'm looking at. No product names, no prices shown, nothing to tell me why I should care.
- The **fine print at the bottom is enormous.** It takes up nearly a third of the email. I get that lawyers require it, but it buries everything and makes the email feel like a legal document by the end.
- Preview text shows those weird little boxes and spaces after the real copy — technical noise that doesn't affect the message but looks sloppy if you notice it.

## Recommendations

- 1. **Honor the subject line in the body.** If you say "$10 off," put the $10 off front and center. Don't hide it in fine print. That's how you lose my trust.
- 2. **Send me a men's version.** I'm in the Men's section of DSW. You have my purchase history. Show me men's comfort shoes — wide-fit sneakers, slip-ons, walking shoes — not heels.
- 3. **Surface the Wide Width option higher.** That's buried in the size module. For an older guy like me, wide width is a real buying signal. Lead with it.
- 4. **Trim the fine print or move it to a collapsible section.** The wall of legalese at the bottom kills any momentum.
- 5. **Show a price in the product grid.** Even a "starting at $X" would give me a reason to tap.
- | Priority | Action |
- |---|---|
- | High | Change `maximum-scale=1` → `maximum-scale=5` or remove |
- | High | Change `text-size-adjust: none` → `text-size-adjust: 100%` |
- | Medium | Normalize `Src:` → `src:` in all 10 `@font-face` blocks |
- | Low | Add `.woff2` format hints to HelveticaNow `@font-face` rules for faster load where supported |
- | Blocked | Re-run audit with full HTML source to cover: link tracking, CAN-SPAM footer, merge token fallbacks, and UTM continuity |

## Full review
## 1. Executive Summary

DSW caught my attention with the subject line — "$10 off and a freebie" is plain-spoken, the kind of deal I actually read. But once I opened this thing, it felt like I wandered into the wrong section of the store. The hero is a free cooler tote with a $75 in-store buy — fine, I guess — but then the "So New, So You" grid is nothing but heels and strappy sandals. I'm a men's comfort shoe guy. I scrolled the whole email and never once saw a slip-on, a walking shoe, or anything built for my feet. DSW has men's shoes. I've bought there before. But this email didn't know that. It treated me like a stranger.

---

## 2. Business Impact Score

**6/10**

True signals counted:
- Sender (DSW) is a brand I recognize and have shopped
- One concrete offer is visible — free cooler tote with $75+ in-store purchase
- Primary CTA is unambiguous — "FIND YOUR STORE" and "ADD TO BAG" are clear buttons
- Visual hierarchy works — hero lands first, eye goes straight to the tote offer
- No visible render bugs — layout looks clean, images loaded, no broken blocks
- Seasonal relevance — a summer cooler tote feels appropriate for May

NOT counted:
- Hero/subject never reference men's comfort, Slip-ins, or anything in my category
- Every product shown in "So New, So You" looks like women's heels and sandals
- The subject promises "$10 off" but I cannot find that offer anywhere in the email body — the only offer I see is the free tote. That's a bait-and-switch in my book.
- Loyalty section shows DSW VIP, not Skechers Plus — different program, doesn't acknowledge me as a known customer

---

## 3. What's Working

The **free cooler tote** offer is a solid hook. "Get it before it's gone" and "while supplies last" create real urgency without screaming at me with exclamation points — I appreciate that. The email loads cleanly on my phone, the font is readable, and the buttons are big enough to tap. The **Shop By Size** module with Wide Width buttons is a nice practical touch — that's actually useful for a guy like me who needs a wider fit. And the subject line itself — short, plain, specific — is the kind of thing I'd actually open in a crowded inbox.

---

## 4. What's Weak

The **$10 off in the subject has no match in the email body.** I opened this looking for my ten bucks off and the hero is a cooler tote. That disconnect is irritating. It feels like a trick to get me to open.

The **product grid is all women's shoes.** Heels, sandals, strappy stuff. I'm not the customer for any of that. If DSW knows I shop Men's, they didn't use it here.

The **"So New, So You"** section has six tiny product thumbnails — and on my phone, they're so small I can barely tell what I'm looking at. No product names, no prices shown, nothing to tell me why I should care.

The **fine print at the bottom is enormous.** It takes up nearly a third of the email. I get that lawyers require it, but it buries everything and makes the email feel like a legal document by the end.

Preview text shows those weird little boxes and spaces after the real copy — technical noise that doesn't affect the message but looks sloppy if you notice it.

---

## 5. Recommendations

1. **Honor the subject line in the body.** If you say "$10 off," put the $10 off front and center. Don't hide it in fine print. That's how you lose my trust.
2. **Send me a men's version.** I'm in the Men's section of DSW. You have my purchase history. Show me men's comfort shoes — wide-fit sneakers, slip-ons, walking shoes — not heels.
3. **Surface the Wide Width option higher.** That's buried in the size module. For an older guy like me, wide width is a real buying signal. Lead with it.
4. **Trim the fine print or move it to a collapsible section.** The wall of legalese at the bottom kills any momentum.
5. **Show a price in the product grid.** Even a "starting at $X" would give me a reason to tap.

---

## 6. Bottom Line

I'd probably open this based on the subject — "$10 off" is real money to me. But once I'm inside, the email loses me fast. Wrong products, missing offer, and nothing that says "hey Walker, we know you buy men's comfort shoes." DSW knows who I am. They just didn't use it here. I'm not clicking anything except maybe checking if there's a men's clearance section I can find on my own. Wouldn't forward this to anyone.

---

## 7. Subject Line Analysis

- **Subject:** `FYI: $10 off + a freebie in stores`
- **Length:** 35 characters
- **Scores (1-10):** Clarity `7`, Curiosity `6`, Personalization `2`, Urgency `5`, Specificity `6`
- **Strengths:**
  - Short, mobile-friendly, no all-caps or exclamation abuse
  - "Freebie" is casual and friendly — fits how I actually talk
- **Weaknesses:**
  - "$10 off" is never clearly surfaced in the email body — broken promise
  - "FYI:" opener feels a little chatty/gimmicky, not authoritative for a retailer
- **Alt A:** `Men's: $10 off your next purchase + free gift in stores`
- **Alt B:** `Your $10 off is inside — plus a free gift with $75+`

---

## 8. Preview Text Analysis

- **Preview:** `Oh, and the more you buy, the more you save`
- **Length:** 44 characters of real copy (followed by padding whitespace characters)
- **Scores (1-10):** Complements subject `6`, Specificity `4`, Clarity `6`, Inbox-fit `5`
- **Strengths:**
  - Real copy, not "view in browser" junk
  - Adds a layered value hint that the subject doesn't spell out
- **Weaknesses:**
  - The tiered savings it hints at are never clearly shown inside the email — leaves me confused
  - Padding characters (‌ ‌ ‌ …) visible in raw form — technically common but looks sloppy if noticed
- **Alt A:** `Free cooler tote with any $75+ store visit — while supplies last`
- **Alt B:** `Grab your $10 off + a free gift before they're gone`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `6/10`
- **Signals counted:** Sender display name recognizable (DSW), subject is concrete ($10 off + a freebie), subject under 50 chars, preview is real copy and adds information the subject doesn't repeat, no spam signals (no ALL CAPS, no !!!)
- **Rationale:** The subject is short and plain-spoken — exactly how I want a deal communicated. DSW is a brand I know. The preview adds a little extra hook. But there's no personalization, no urgency with a deadline, and nothing that signals "this is for men's shoppers."

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `3/10`
- **Signals counted:** Hero CTA visible near top of email ("FIND YOUR STORE" / "ADD TO BAG"), brand voice is consistent and trusted, no friction from broken images or layout bugs
- **Rationale:** Once I'm inside, there's nothing for me. Every product I can see is women's footwear. The $10 off that got me to open is nowhere to be found in the body. The cooler tote is a novelty I don't need. I'd close the email before scrolling to the size grid.

---

## 11. Evidence

- **Overall purpose:** Drive in-store traffic with a free cooler tote GWP (gift with purchase) at $75+ spend, supported by a new arrivals showcase and size/width browsing modules.
- **Hero / primary value proposition:** FREE COOLER TOTE with in-store or BOPIS (buy online, pick up in-store) purchase of $75+ using code COOLER. CTAs: "FIND YOUR STORE" and "ADD TO BAG." Urgency: while supplies last.
- **Membership / benefits section:** DSW VIP join prompt near the bottom — "Get 3% back in Rewards, free shipping, a birthday gift." JOIN FOR FREE CTA. Not connected to Skechers Plus; treats me like a non-member.
- **Product discoverability / recommendation modules:** "So New, So You" — 6 product thumbnails (appear to be women's heels, sandals, and flats). No product names or prices visible. "Shop By Size" grid (5–11), with "Shop Wide Width" and "Shop Wide Calf" buttons below.
- **Utility / secondary modules:** Shopping Made Easy icons — Free Shipping for VIPs, In-Store Pickup, Download Our App, Opt-in to Texts (15% off). Afterpay buy-now-pay-later mention. Social follow prompt.
- **Bugs / friction / clarity issues:** The subject line promises "$10 off" but no such offer is visible in the rendered email body — the only visible offer is the free tote. This is the most significant content disconnect I can see. Padding whitespace characters visible in raw preview text (not visible inside the email, only in the inbox preview). Fine print block occupies roughly the bottom third of the email — very heavy.

---

## Technical Audit

## Technical Audit — DSW "FYI: $10 off + a freebie in stores"

**ESP:** Braze | **Doctype:** XHTML 1.0 Transitional

---

### 1. Technical Summary

Email is built on standard Braze infrastructure with XHTML 1.0 Transitional, full dark-mode CSS, and custom web fonts served from the Braze CDN. Two accessibility-impacting CSS rules are confirmed in the `<head>`; link and compliance elements cannot be assessed from the truncated source.

---

### 2. Link & Tracking Issues

Cannot confirm from truncated HTML — CTA `<a>` hrefs, redirect chains, and tracking pixel `<img src>` values are not present in the supplied excerpt. Full source needed to audit click-tracking domains and redirect depth.

---

### 3. Rendering & Accessibility

**Issue — zoom blocked (WCAG 1.4.4 violation):**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```
`maximum-scale=1` prevents pinch-to-zoom in iOS Mail and Chrome for Android. Remove or raise to `maximum-scale=5`.

**Issue — user text-size preference overridden:**
```css
* { -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-size-adjust: none; }
```
`text-size-adjust: none` on the `*` selector suppresses OS-level text scaling across all elements. The `-webkit-text-size-adjust: 100%` is the correct form for the email rendering fix; `none` is overly broad. Change to `100%` or remove the unprefixed `text-size-adjust` declaration.

**Issue — non-standard `Src:` in `@font-face`:**
```css
@font-face { font-family: 'Futura_PT_Regular'; Src: url("https://braze-images.com/...") format('woff'); }
```
All 10 `@font-face` blocks use `Src:` (capital S). CSS property names are case-insensitive per spec, but strict parsers in some email clients may skip the declaration. Normalize to lowercase `src:`.

**Note — `#000001` and `.a6S` are intentional:** The near-black color and `.a6S { display: none }` are standard Gmail dark-mode and image-download workarounds; not flagged as issues.

**Note — TTF-only for HelveticaNow fonts:** Futura PT uses `.woff`; HelveticaNow uses `.ttf`. Neither uses `.woff2`. This is suboptimal for load time but non-breaking; email client font support is limited regardless.

---

### 4. Personalization & Merge Tokens

No Liquid or Handlebars tokens visible in the supplied excerpt. Cannot confirm whether first-name or reward-balance variables are present in body content, or whether fallback defaults are set. Full source required.

---

### 5. Compliance (CAN-SPAM / Unsubscribe)

Physical mailing address and unsubscribe link/mechanism are not present in the truncated source. Cannot confirm compliance. Full source required to verify:
- Physical address block in footer
- One-click or clearly labeled unsubscribe link
- Sender identity match: `From: DSW <dsw@e.dsw.com>` — the `e.dsw.com` subdomain is a standard ESP sending domain; confirm SPF/DKIM/DMARC alignment for `e.dsw.com` against `dsw.com` in email authentication headers (not visible in HTML source).

---

### 6. Email-to-Site Continuity

CTA `href` values are not in the supplied excerpt. Cannot confirm UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`) on click-throughs, or whether landing pages match the "$10 off + freebie in stores" subject line. Full source required.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| High | Change `maximum-scale=1` → `maximum-scale=5` or remove |
| High | Change `text-size-adjust: none` → `text-size-adjust: 100%` |
| Medium | Normalize `Src:` → `src:` in all 10 `@font-face` blocks |
| Low | Add `.woff2` format hints to HelveticaNow `@font-face` rules for faster load where supported |
| Blocked | Re-run audit with full HTML source to cover: link tracking, CAN-SPAM footer, merge token fallbacks, and UTM continuity |
## Recent history

- [[2026-05-07-celebrate-mom-with-sporty-new-deals]] — 8/10 (2026-05-07)
- [[2026-05-07-summer-wardrobe-up-to-50-off]] — 3/10 (2026-05-07)
- [[2026-05-07-your-cart-expires-soon]] — 8/10 (2026-05-07)

