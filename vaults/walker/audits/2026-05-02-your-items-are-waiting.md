---
slug: 2026-05-02-your-items-are-waiting
type: email
date: 2026-05-02
persona: walker
score: "6/10"
sender: SKECHERS
subject: Your Items Are Waiting!
tags: [email, score-6, sender/skechers]
---
# Your Items Are Waiting!
**Score:** 6/10 · **Type:** Email audit · **2026-05-02**
## Executive summary

- **Skechers Abandoned Cart | "Your Items Are Waiting!"**
- Straightforward cart abandonment email, and I'll give Skechers credit — they remembered what I left behind. The hero shoe is right there front and center, it's a Slip-ins with Max Cushioning, which is exactly my kind of thing. But the email buries that win almost immediately under a pile of "you might also like" rows, a texting opt-in, Afterpay banners, and category nav links. By the time I get halfway down I've lost the thread. The 20% off offer is real and it's visible, but it's crammed into a compact banner that doesn't feel like the headline it should be. I was interested at the top; they lost me in the middle.
- The cart recovery trigger is solid, the product shown is right, and a discount is present. All the ingredients are here. But the layout clutters the message and the offer doesn't feel like it's being handed to me — it feels like I stumbled across it.

## What's working

- **They remembered my cart.** "WE NOTICED YOU NOTICING US… YOUR CART IS STILL WAITING" — fine, a little cheeky, but it works. I know exactly why I got this email.
- **The right product is in the hero.** Skechers Slip-ins: Max Cushioning Glide-Step — that's comfort tech, it's hands-free, it's what I actually looked at. Shows they're not just blasting me.
- **20% off a single pair is a real offer.** That's enough to get me to click if I was already on the fence.
- **"COMPLETE YOUR ORDER" CTA is clear.** Big button, no ambiguity about what I'm supposed to do.

## What's weak

- **The 20% off banner doesn't feel like the star.** It's a dark strip with small text that shows up *after* a "you might also love" product grid. That discount should be the first thing I see after my cart item, not buried mid-email.
- **"Great options we think you'll love" grid** — three more shoes shown above the fold-ish area feels like noise. I'm already interested in the one I left behind. Stop talking me out of that purchase.
- **Way too much footer.** Shop Women, Men, Kids, Clothing, New Arrivals, Sale, text us at 83828, download the app, curbside pickup, Shop Now Pay Later, Klarna, Find a Store, Follow Us, Mother's Day Sale fine print… this is an abandoned cart email, not a homepage.
- **Mother's Day Sale copy at the bottom** — I'm a 62-year-old guy recovering my own cart. I don't need Mother's Day messaging in this email. Feels misdirected.
- **Tiny text throughout.** The product name under the hero, the "recommended" product labels, the fine print — none of this is readable on a phone without zooming. I should not need to pinch-zoom a recovery email.
- **The "LET'S GET TEXTING" row.** I already get emails. Why are you trying to add another channel mid-cart-recovery?

## Recommendations

- 1. **Lead with the deal.** Move the 20% off offer directly under the hero product — before any "you might also love" content. Make it feel like a limited-time push to close *this* purchase.
- 2. **Kill the secondary product grid or cut it to one.** The recommendations dilute urgency. I left something specific behind; remind me of *that* thing.
- 3. **Strip the footer nav.** No need for Women/Kids/Clothing/New Arrivals here. One recovery path, one CTA.
- 4. **Pull the Mother's Day references** unless there's a version of this email targeted at gift-buyers. Wrong audience for a men's cart recovery.
- 5. **Increase font size on the product name and offer text.** I'm reading on a phone. This needs to work at arm's length.
- | Priority | Issue | Action |
- |----------|-------|--------|
- | High | HTTP link scheme on all tracked URLs | Confirm Attentive account is configured to serve redirects over HTTPS; if using a custom tracking domain, verify SSL cert on `skechers.attentivemail.com` |
- | High | HTTP image CDN | Update `image.emails.skechers.*` base URL to HTTPS in Attentive template settings |
- | High | Footer not auditable | Provide full HTML source; confirm physical address, unsubscribe, and one-click list-unsubscribe header are present |
- | Medium | Empty `<title>` | Add descriptive title for web version accessibility |
- | Medium | UTM parameters | Resolve one Attentive redirect manually and confirm UTM params are appended to `skechers.com` destination |
- | Medium | Alt text on product images | Confirm all `<img>` tags have non-empty `alt` attributes |
- | Low | Soft-hyphen in preheader padding | Replace `U+00AD` spacers with `U+200C` (ZWNJ) to reduce spam filter risk |
- | Low | Expired-cart edge case | QA the email render when Attentive cart session has expired to confirm product blocks degrade gracefully |

## Full review
## Walker Miles — Email Review
**Skechers Abandoned Cart | "Your Items Are Waiting!"**

---

### 1. Executive Summary

Straightforward cart abandonment email, and I'll give Skechers credit — they remembered what I left behind. The hero shoe is right there front and center, it's a Slip-ins with Max Cushioning, which is exactly my kind of thing. But the email buries that win almost immediately under a pile of "you might also like" rows, a texting opt-in, Afterpay banners, and category nav links. By the time I get halfway down I've lost the thread. The 20% off offer is real and it's visible, but it's crammed into a compact banner that doesn't feel like the headline it should be. I was interested at the top; they lost me in the middle.

---

### 2. Business Impact Score: **6 / 10**

The cart recovery trigger is solid, the product shown is right, and a discount is present. All the ingredients are here. But the layout clutters the message and the offer doesn't feel like it's being handed to me — it feels like I stumbled across it.

---

### 3. What's Working

- **They remembered my cart.** "WE NOTICED YOU NOTICING US… YOUR CART IS STILL WAITING" — fine, a little cheeky, but it works. I know exactly why I got this email.
- **The right product is in the hero.** Skechers Slip-ins: Max Cushioning Glide-Step — that's comfort tech, it's hands-free, it's what I actually looked at. Shows they're not just blasting me.
- **20% off a single pair is a real offer.** That's enough to get me to click if I was already on the fence.
- **"COMPLETE YOUR ORDER" CTA is clear.** Big button, no ambiguity about what I'm supposed to do.

---

### 4. What's Weak

- **The 20% off banner doesn't feel like the star.** It's a dark strip with small text that shows up *after* a "you might also love" product grid. That discount should be the first thing I see after my cart item, not buried mid-email.
- **"Great options we think you'll love" grid** — three more shoes shown above the fold-ish area feels like noise. I'm already interested in the one I left behind. Stop talking me out of that purchase.
- **Way too much footer.** Shop Women, Men, Kids, Clothing, New Arrivals, Sale, text us at 83828, download the app, curbside pickup, Shop Now Pay Later, Klarna, Find a Store, Follow Us, Mother's Day Sale fine print… this is an abandoned cart email, not a homepage.
- **Mother's Day Sale copy at the bottom** — I'm a 62-year-old guy recovering my own cart. I don't need Mother's Day messaging in this email. Feels misdirected.
- **Tiny text throughout.** The product name under the hero, the "recommended" product labels, the fine print — none of this is readable on a phone without zooming. I should not need to pinch-zoom a recovery email.
- **The "LET'S GET TEXTING" row.** I already get emails. Why are you trying to add another channel mid-cart-recovery?

---

### 5. Recommendations

1. **Lead with the deal.** Move the 20% off offer directly under the hero product — before any "you might also love" content. Make it feel like a limited-time push to close *this* purchase.
2. **Kill the secondary product grid or cut it to one.** The recommendations dilute urgency. I left something specific behind; remind me of *that* thing.
3. **Strip the footer nav.** No need for Women/Kids/Clothing/New Arrivals here. One recovery path, one CTA.
4. **Pull the Mother's Day references** unless there's a version of this email targeted at gift-buyers. Wrong audience for a men's cart recovery.
5. **Increase font size on the product name and offer text.** I'm reading on a phone. This needs to work at arm's length.

---

### 6. Bottom Line

The trigger is right, the product is right, the discount is real — but the email tries to do too much at once and loses the urgency it built at the top. If they tightened this down to: *here's your shoe, here's 20% off, here's the button*, I'd click. The way it's built now, I might click anyway — but I've also probably scrolled past the CTA twice trying to figure out what I'm even looking at.

---

### 7. Subject Line Analysis

- **Subject:** `Your Items Are Waiting!`
- **Length:** 22 characters
- **Scores (1-10):** Clarity `7`, Curiosity `4`, Personalization `5`, Urgency `6`, Specificity `4`
- **Strengths:**
  - Clean and unambiguous — I know it's a cart email
  - Short enough to render fully on my phone
- **Weaknesses:**
  - "Items" is plural and vague; I left one thing behind — specificity would help
  - No discount or product hint to make me open faster
- **Alt A:** `Your Slip-ins are still waiting — 20% off inside`
- **Alt B:** `Walker, your Max Cushioning Glide-Step is in your cart`

---

### 8. Preview Text Analysis

- **Preview:** `YOUR CART IS STILL WAITING...`
- **Length:** 29 characters
- **Scores (1-10):** Complements subject `5`, Specificity `3`, Clarity `7`, Inbox-fit `4`
- **Strengths:**
  - Directly echoes the headline — consistent messaging
  - Readable, no broken tokens
- **Weaknesses:**
  - Repeats what the subject already said — wasted second-line real estate
  - No product name, no offer hook; nothing added to make me tap
- **Alt A:** `20% off your Slip-ins — don't leave them behind`
- **Alt B:** `Max Cushioning Glide-Step is ready when you are. Save 20% today.`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `6/10`
- **Rationale:** "Your Items Are Waiting" is familiar enough that I'd recognize it as a cart email and I do use Skechers, so I wouldn't delete it outright. But the subject and preview together give me zero reason to open *urgently* — no product name, no deal teased — so I might leave it for later and forget.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `5/10`
- **Rationale:** The hero product and the COMPLETE YOUR ORDER button are genuinely well-placed, and 20% off is the kind of nudge that works on me. But the cluttered middle section and the buried discount mean I have to work harder than I should to find the reason to click. I'd probably get there, but not confidently.

---

### 11. Evidence

- **Overall purpose:** Abandoned cart recovery — one specific product left behind
- **Hero / primary value prop:** Skechers Slip-ins Max Cushioning Glide-Step with "COMPLETE YOUR ORDER" CTA; appropriate product for this persona
- **Membership / benefits section:** Not visible — no Skechers Plus acknowledgment, no member pricing callout; missed opportunity for a loyalty customer
- **Product discoverability / recommendation modules:** One 3-product "you might also love" grid shown above the discount banner; product labels are very small and barely readable
- **Utility / secondary modules:** Category nav (Women, Men, Kids, Clothing, New Arrivals, Sale), Text opt-in (83828), App download (App Store + Google Play), Curbside Pickup, Shop Now Pay Later (Afterpay + Klarna), Find a Store, Social follow icons
- **Bugs / friction / clarity issues:** No visible broken images; product recommendation labels are too small to read without zooming on mobile; the 20% off banner text is visually undersized relative to its importance; Mother's Day sale fine print is present in the footer despite this being a men's cart recovery email

---

## Technical Audit

## Technical Audit — Skechers Abandoned Cart Email

---

### 1. Technical Summary

Standard Attentive-platform abandoned cart email. All tracked links route through `skechers.attentivemail.com/ls/click`. Primary technical concerns are HTTP (non-HTTPS) asset and link URLs, an empty `<title>` tag, and unverifiable footer compliance due to source truncation.

---

### 2. Link & Tracking Issues

**HTTP links (not HTTPS)** — all tracked links use plain HTTP:
```
http://skechers.attentivemail.com/ls/click?upn=u001...
```
When the Attentive redirect resolves to `skechers.com` (HTTPS), the initial hop is unencrypted. Some security-aware mail clients flag HTTP hrefs; mixed-scheme links can also trigger Gmail's "This message may not be safe" warnings.

**HTTP image CDN** — the partial image URL visible is:
```
http://image.emails.skechers.…
```
Same concern. Gmail and Outlook proxy images over HTTPS regardless, but Outlook desktop may block the original HTTP src before proxying kicks in.

**UTM parameter verification blocked** — all destination URLs are opaque behind the Attentive redirect. Cannot confirm UTM params are present on final landing pages without resolving redirects. If Attentive is not configured to append UTMs, cart recovery attribution will be lost in GA4/analytics.

---

### 3. Rendering & Accessibility

**Empty `<title>` tag:**
```html
<head><title></title>...
```
Screen readers announce the title when the email is opened as a web version. Some accessibility scanners also flag this in inbox previews. Should be `<title>Skechers — Your Cart Is Waiting</title>` or equivalent.

**Preheader Unicode padding** — the preheader uses a mix of `U+034F` (combining grapheme joiner, `͏`) and `U+00AD` (soft hyphen, `­`) as invisible spacers. This is a common pattern to push preview text off-screen, but `U+00AD` (soft hyphen) in particular can be misinterpreted by aggressive spam filters as obfuscation. `U+200C` (ZWNJ) is the safer choice; Klaviyo and Mailchimp both document this.

**`alt` text on images** — source is truncated before the `img` tag's full attributes are visible. Cannot confirm. If alt text is absent on product images, it's a WCAG 2.1 AA failure (criterion 1.1.1) and degrades the image-blocked experience.

**Mobile media query present** — `@media (max-width:620px)` with responsive column stacking confirmed. No issues found here.

**`lang="en"` on `<html>`** — present and correct.

---

### 4. Personalization & Merge Tokens

No first-name token visible in the header or preheader:
```html
<div class="preheader"...>You left something in your cart, get it before it's gone!...
```
For an abandoned cart trigger, the absence of a first name in the preheader is a missed relevance signal but not a technical defect unless a token rendered blank (`{{first_name}}` or similar) — which cannot be confirmed from this snapshot.

No cart item names, prices, or SKUs are visible in the truncated header rows (rows 1–2). Whether dynamic product blocks exist in the body cannot be verified. If cart item rendering relies on Attentive's `{{ cart.items }}` loop and the cart session has expired, the email may render with an empty product section — this should be tested against expired-session data.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Source is truncated** — the footer (physical address, unsubscribe link, legal copy) is not present in the provided HTML. Cannot audit these elements. The following are required and must be confirmed against the full source:
- Physical mailing address (CAN-SPAM §7)
- One-click unsubscribe mechanism (CAN-SPAM §5; also Google/Yahoo 2024 bulk sender requirement)
- Unsubscribe link must remain functional for ≥30 days post-send

**Authentication headers** — not provided with the source. DKIM, SPF, and DMARC alignment for `msgs.skechers.com` should be verified via header inspection (`Authentication-Results` header). Attentive typically signs with their own DKIM on behalf of the brand domain; confirm `d=msgs.skechers.com` or `d=skechers.com` alignment.

---

### 6. Email-to-Site Continuity

Cannot resolve final destination URLs from the Attentive-wrapped links in the provided source. Key risks to verify:

- **Cart restore**: the CTA should deep-link to the cart with items pre-populated, not the homepage. Confirm the `upn=` redirect lands on `skechers.com/cart` or equivalent with session/cart token, not a generic landing page.
- **UTM tagging**: minimum expected params on cart link: `utm_source=email&utm_medium=triggered&utm_campaign=abandoned_cart`. If absent, this send will appear as direct traffic.
- **Skechers Plus CTA**: the preheader references "Join Skechers Plus today for free shipping" — confirm there is a corresponding CTA in the email body linking to the loyalty signup page, not just the cart.

---

### 7. Recommendations

| Priority | Issue | Action |
|----------|-------|--------|
| High | HTTP link scheme on all tracked URLs | Confirm Attentive account is configured to serve redirects over HTTPS; if using a custom tracking domain, verify SSL cert on `skechers.attentivemail.com` |
| High | HTTP image CDN | Update `image.emails.skechers.*` base URL to HTTPS in Attentive template settings |
| High | Footer not auditable | Provide full HTML source; confirm physical address, unsubscribe, and one-click list-unsubscribe header are present |
| Medium | Empty `<title>` | Add descriptive title for web version accessibility |
| Medium | UTM parameters | Resolve one Attentive redirect manually and confirm UTM params are appended to `skechers.com` destination |
| Medium | Alt text on product images | Confirm all `<img>` tags have non-empty `alt` attributes |
| Low | Soft-hyphen in preheader padding | Replace `U+00AD` spacers with `U+200C` (ZWNJ) to reduce spam filter risk |
| Low | Expired-cart edge case | QA the email render when Attentive cart session has expired to confirm product blocks degrade gracefully |
## Recent history

- [[2026-05-02-your-cart-expires-soon]] — 5/10 (2026-05-02)
- [[2026-05-02-summer-essentials-just-in]] — 5/10 (2026-05-02)
- [[2026-05-02-did-you-miss-it-20-off-select-styles]] — 4/10 (2026-05-02)

