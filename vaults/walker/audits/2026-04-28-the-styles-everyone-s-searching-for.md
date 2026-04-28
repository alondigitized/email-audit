---
slug: 2026-04-28-the-styles-everyone-s-searching-for
type: email
date: 2026-04-28
persona: walker
score: "6/10"
sender: SKECHERS
subject: "The Styles Everyone's Searching For"
tags: [email, score-6, sender/skechers]
---
# The Styles Everyone's Searching For
**Score:** 6/10 · **Type:** Email audit · **2026-04-28**
## Executive summary

- Alright, so I opened this one. The BOGO offer up top grabbed me — buy one, get one 50% off, that's real money saved. And I'll tell you, seeing "Hands Free Slip-Ins" right there in the middle of the email? That's my stuff. That's what I actually buy. But between you and me, this email felt like it was written for everyone, which means it wasn't really written for me. Too much women's content mixed in, a long scroll, and that "Most Searched Styles" hook at the top felt like something out of a Google search page — not like Skechers knows who I am. I'm a Plus member. They've got my purchase history. I'd have liked them to lead with that.

## What's working

- **The BOGO banner works.** "Buy One, Get One 50% Off" is clear, big, and right at the top. That's the first thing I see and it made me want to keep scrolling. Price-conscious? Yes. Does this hook me? Yes.
- **Hands Free Slip-Ins got its own section.** That's my bread and butter. Having it called out as a named category with a dedicated "Shop Men's" button makes it easy — I don't have to hunt.
- **Arch Fit is here too.** Two comfort-tech categories I actually care about, both present. That's a good sign they know what comfort-focused guys want.
- **"Shop Men's" buttons are clearly labeled** throughout each section. I don't have to accidentally click into women's shoes to find what I want. That's appreciated.
- **Sandals are timely.** We're heading into warmer weather. That section feels seasonal and right.

## What's weak

- **"Most Searched Styles" is a cold open.** It sounds like a trending algorithm, not a personal greeting. I'm a Skechers Plus member — don't show me what strangers are searching for, show me what *I've* been looking at.
- **Women's content is everywhere.** Every section has a "Shop Women's" button sitting right next to the men's. It's half the real estate of the email and I'm not shopping for my wife right now. It dilutes the experience.
- **25% Off Apparel feels like filler.** I'm here for shoes. I'm not buying Skechers t-shirts. That block just feels tacked on.
- **"New & For You" is too vague.** It says "newest styles in sport casual you don't want to miss" — but it looks like a light tan casual shoe, which isn't grabbing me. Show me the product name, tell me what makes it comfortable. No Slip-Ins badge, no Air-Cooled callout — nothing.
- **The email is long.** By the time I get to "Let's Get Texting" and the Klarna section at the bottom, I've checked out. Too much to scroll through on a phone.
- **"Let's Get Texting" — I'm 62.** I'm not signing up for text message blasts. That section does nothing for me and feels aimed at a younger crowd.

## Recommendations

- 1. **Lead with me, not the crowd.** Swap "Most Searched Styles" for "Walker, these are made for you" — pull my top categories from my account. I'm a Plus member. Use it.
- 2. **Cut or collapse the Women's columns.** One email shouldn't feel 50/50 gender split when you know who I am. Offer a footer link to gift options if needed, but get it out of the main flow.
- 3. **Put Slip-Ins higher.** It's category three right now. For someone like me it should be front and center, probably right after the BOGO banner.
- 4. **Name the "New & For You" product.** Tell me the model name, tell me it has Air-Cooled memory foam or whatever the selling point is. One line of copy changes that block from decoration to a reason to click.
- 5. **Tighten the email.** BOGO banner → Slip-Ins → Sandals → Arch Fit → Footer. Done. Apparel and text sign-up aren't earning their scroll depth.
- | Priority | Issue | Fix |
- |---|---|---|
- | P0 | Return Path pixel has no protocol | Add `https://` to `src="pixel.app.returnpath.net/..."` |
- | P1 | 11 images served over HTTP | Update all `image.emails.skechers.com` and `ink1000.com` asset URLs to HTTPS |
- | P1 | SPF/DKIM status unverifiable | Pull raw headers from a seed inbox and confirm DMARC pass |
- | P2 | Missing alt text on product image | Add descriptive `alt` to `49468f73-*.png` |
- | P2 | `-webkit-text-size-adjust: none` | Change to `100%` for WCAG 1.4.4 compliance |
- | P2 | Malformed `<meta>` tags | Add `http-equiv` attributes to both charset and IE-compat metas |
- | P3 | Duplicate `.show` media query blocks | Consolidate into single `@media` block at intended breakpoint |
- | P3 | Verify UTM params on click redirects | Manual spot-check of 2–3 redirect chains |
- | P3 | Third-party pixel consent alignment | Confirm Krux user-match firing is scoped to consented recipients |

## Full review
---

## Walker Miles Reviews: "The Styles Everyone's Searching For"

---

### 1. Executive Summary

Alright, so I opened this one. The BOGO offer up top grabbed me — buy one, get one 50% off, that's real money saved. And I'll tell you, seeing "Hands Free Slip-Ins" right there in the middle of the email? That's my stuff. That's what I actually buy. But between you and me, this email felt like it was written for everyone, which means it wasn't really written for me. Too much women's content mixed in, a long scroll, and that "Most Searched Styles" hook at the top felt like something out of a Google search page — not like Skechers knows who I am. I'm a Plus member. They've got my purchase history. I'd have liked them to lead with that.

---

### 2. Business Impact Score: **6/10**

---

### 3. What's Working

- **The BOGO banner works.** "Buy One, Get One 50% Off" is clear, big, and right at the top. That's the first thing I see and it made me want to keep scrolling. Price-conscious? Yes. Does this hook me? Yes.
- **Hands Free Slip-Ins got its own section.** That's my bread and butter. Having it called out as a named category with a dedicated "Shop Men's" button makes it easy — I don't have to hunt.
- **Arch Fit is here too.** Two comfort-tech categories I actually care about, both present. That's a good sign they know what comfort-focused guys want.
- **"Shop Men's" buttons are clearly labeled** throughout each section. I don't have to accidentally click into women's shoes to find what I want. That's appreciated.
- **Sandals are timely.** We're heading into warmer weather. That section feels seasonal and right.

---

### 4. What's Weak

- **"Most Searched Styles" is a cold open.** It sounds like a trending algorithm, not a personal greeting. I'm a Skechers Plus member — don't show me what strangers are searching for, show me what *I've* been looking at.
- **Women's content is everywhere.** Every section has a "Shop Women's" button sitting right next to the men's. It's half the real estate of the email and I'm not shopping for my wife right now. It dilutes the experience.
- **25% Off Apparel feels like filler.** I'm here for shoes. I'm not buying Skechers t-shirts. That block just feels tacked on.
- **"New & For You" is too vague.** It says "newest styles in sport casual you don't want to miss" — but it looks like a light tan casual shoe, which isn't grabbing me. Show me the product name, tell me what makes it comfortable. No Slip-Ins badge, no Air-Cooled callout — nothing.
- **The email is long.** By the time I get to "Let's Get Texting" and the Klarna section at the bottom, I've checked out. Too much to scroll through on a phone.
- **"Let's Get Texting" — I'm 62.** I'm not signing up for text message blasts. That section does nothing for me and feels aimed at a younger crowd.

---

### 5. Recommendations

1. **Lead with me, not the crowd.** Swap "Most Searched Styles" for "Walker, these are made for you" — pull my top categories from my account. I'm a Plus member. Use it.
2. **Cut or collapse the Women's columns.** One email shouldn't feel 50/50 gender split when you know who I am. Offer a footer link to gift options if needed, but get it out of the main flow.
3. **Put Slip-Ins higher.** It's category three right now. For someone like me it should be front and center, probably right after the BOGO banner.
4. **Name the "New & For You" product.** Tell me the model name, tell me it has Air-Cooled memory foam or whatever the selling point is. One line of copy changes that block from decoration to a reason to click.
5. **Tighten the email.** BOGO banner → Slip-Ins → Sandals → Arch Fit → Footer. Done. Apparel and text sign-up aren't earning their scroll depth.

---

### 6. Bottom Line

I'd probably click through to the Slip-Ins section — that combination of the BOGO deal plus my favorite shoe category is enough to pull me in. But I wouldn't scroll the whole email, I wouldn't care about the apparel section, and I'd feel like they sent this to their entire list without thinking about what I specifically like. A little more personalization and a shorter scroll and this is a much better email.

---

### 7. Subject Line Analysis

- **Subject:** `The Styles Everyone's Searching For`
- **Length:** 34 characters
- **Scores (1-10):** Clarity `7`, Curiosity `4`, Personalization `2`, Urgency `2`, Specificity `2`
- **Strengths:**
  - Clean and readable — no clutter, no emojis
  - Short enough to display fully on a phone lock screen
- **Weaknesses:**
  - "Everyone's" is the opposite of personal — actively signals mass blast
  - No hint of the BOGO offer, which is the actual hook; the subject line buries the lede
- **Alt A:** `Walker, your Slip-Ins deal is inside — BOGO 50% off`
- **Alt B:** `Most popular right now: comfort styles on sale`

---

### 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — raw JSON-LD schema.org markup is what rendered: `[{ "@context": "http://schema.org/", "@type": "Organization", "logo": "https://image.emails.skechers.com/...`
- **Length:** Far too long; entirely machine code
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - (None — there are no strengths here)
- **Weaknesses:**
  - JSON-LD schema markup leaked into the preheader slot — the inbox is showing raw code instead of copy
  - Kills any open rate lift the subject might have had; it looks like a broken or spammy email at first glance
- **Alt A:** `BOGO 50% off — shop Slip-Ins, Sandals & Arch Fit now`
- **Alt B:** `Your comfort styles are on sale. Shop Men's Slip-Ins today.`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `4/10`
- **Rationale:** The subject line "The Styles Everyone's Searching For" is generic enough that I might skip it on a busy morning — it doesn't tell me there's a deal or that it's aimed at me. The broken preview text showing raw code would make me pause and wonder if something went wrong with the email, which drops my confidence in opening it. If I recognized the Skechers sender name from past purchases, that familiarity alone probably gets me to open it eventually — but it's not a must-open.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `6/10`
- **Rationale:** Once I'm inside and I see the BOGO banner plus the Hands Free Slip-Ins section with a clear "Shop Men's" button, I'm pretty likely to tap through on the Slip-Ins — that combination of my preferred product category and a meaningful discount is exactly what moves me. The click probably doesn't happen from further down the email though; I'm not making it to the Apparel or Arch Fit sections before I've already decided.

---

### 11. Evidence

- **Overall purpose:** Promotional email driving traffic to best-selling categories with a BOGO 50% off sitewide offer.
- **Hero / primary value proposition:** BOGO 50% off banner is prominent and clear at the very top. Strong placement, no ambiguity in the offer.
- **Membership / benefits section:** Absent. No mention of Plus member status, points, or exclusive benefits. A missed opportunity for a loyal customer.
- **Product discoverability / recommendation modules:** Four category blocks — Most Searched Styles (sandals), Hands Free Slip-Ins, Arch Fit, New & For You. Each has Men's and Women's split CTAs. Slip-Ins and Arch Fit are relevant comfort-tech picks; New & For You is underspecified with no product name or comfort callout visible.
- **Utility / secondary modules:** 25% Off Apparel, Shop Additional Styles (Women/Men/Kids/Clothing/New Arrivals/Sale), Let's Get Texting, Shop Now Pay Later (Klarna), Download the App, Curbside Pickup, Find a Store. Heavy footer load — most of this is noise for my use case.
- **Bugs / friction / clarity issues:** The preview text is visibly broken — raw JSON schema markup is leaking into the preheader field in the inbox view. That is the single most damaging visible issue in this email. Everything else renders cleanly; images load, buttons are labeled, text is readable at mobile size without zooming.

---

## Technical Audit

## Technical Audit — Skechers "The Styles Everyone's Searching For" (2026-04-28)

---

### 1. Technical Summary

The email has one critical HTML bug (broken pixel URL), a systemic HTTP image delivery problem affecting the majority of asset URLs, and a missing authentication-results header. Everything else is minor or informational.

---

### 2. Link & Tracking Issues

**Critical — Missing protocol on Return Path pixel**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" ...>
```
No `http://` or `https://` prefix. This resolves as a relative URL path, not an external request. The inbox reputation/seed-list monitoring pixel is silently broken.

**26 click-redirect links — not auditable**
All CTAs route through `click.emails.skechers.com`. Destination URLs and UTM parameters cannot be verified without resolving the redirects. No direct evidence of broken links, but also no confirmation UTM params are present.

**Four third-party tracking pixels present**
- `beacon.krxd.net` × 3 (user-match × 2, impression × 1)
- `ink1000.com` × 1
- `click.emails.skechers.com/open.aspx` (open pixel)

Each fires on open with subscriber-level identifiers (`partner_uid=121173391`, `mi_u=8107766165`). These are data-sharing relationships that require disclosure under CCPA/GDPR — confirm consent signals are passed upstream before send.

---

### 3. Rendering & Accessibility

**High — Systemic HTTP image delivery (11 assets)**

All hosted images on `image.emails.skechers.com` and the `ink1000.com` pixel use `http://` not `https://`. Gmail and modern Outlook proxy/block non-HTTPS images. Affected assets include the logo, product images, and all footer icons (App Store, Google Play, social, store-service badges):

```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-*.png  (logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-*.png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-*.png  (App Store)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-*.png  (Google Play)
... (7 more)
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif
```

**Medium — Missing alt text on 2 images**
- `o.gif` (ink1000 tracking pixel) — `alt=""` is acceptable for tracking pixels, but the QA flagged it
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — no alt attribute at all; content unknown from truncated source; if this is a product or CTA image, it needs descriptive alt text

**Low — Malformed meta tags**
Both meta tags are missing `http-equiv`:
```html
<!-- As written (broken) -->
<meta content="text/html; charset=utf-8" />
<meta content="IE=Edge" />

<!-- Correct -->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
```
Without `http-equiv`, these hints are ignored by parsers.

**Low — Conflicting `.show` media query rules**
Two separate `<style>` blocks define `.show` at different breakpoints:
- Block 1: `@media only screen and (max-width: 680px)`
- Block 2: `@media only screen and (max-width: 480px)`

The second block overrides the first for screens 481–680px. Consolidate into a single rule.

**Low — `-webkit-text-size-adjust: none` applied globally**
```css
* { -webkit-text-size-adjust: none; }
```
`none` completely disables user-initiated text scaling on iOS, which is a WCAG 1.4.4 violation. Use `100%` instead.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens detected in the visible HTML (no `%%`, `{{}}`, or `[[]]` patterns). The email appears to be a broadcast send with no subscriber-level personalization in body content. Subscriber IDs are present only in pixel query strings (`mi_u`, `partner_uid`).

No issues found in merge token rendering.

---

### 5. Compliance

**High — SPF/DKIM authentication status unknown**
QA reports `Authentication-Results` header not found via the AgentMail relay. Cannot confirm the message passed SPF/DKIM/DMARC checks. If the sending domain (`emails.skechers.com`) has a `p=reject` DMARC policy and authentication failed, deliverability to major providers would be significantly impaired. Requires raw header inspection from a delivered copy.

**CAN-SPAM / unsubscribe** — Cannot confirm from truncated HTML. Standard review should verify: (a) physical mailing address present in footer, (b) one-click unsubscribe link present and functional, (c) sender identity matches `From` domain. These are not visible in the provided excerpt.

**Third-party data sharing** — The Krux user-match pixels (`beacon.krxd.net`) fire with hashed PII (`partner_uid` SHA-256 value visible). Confirm this aligns with the privacy policy and consent collected at subscription time, particularly for CA/EU recipients.

---

### 6. Email-to-Site Continuity

**Cannot verify** — All 26 CTAs route through `click.emails.skechers.com` redirects. The campaign ID `MKG_US_NONPURCLICK_U_MULTI_NONPURCH_EN_04282026` is consistent across both the Krux and ink1000 pixels, which is a good sign for attribution consistency. However, without resolving a redirect sample, it is unknown whether UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`) are appended to destination URLs.

**Recommendation:** Spot-check 2–3 redirect URLs by following the chain manually to confirm UTM params land on `skechers.com` product/category pages and are not stripped by the redirect handler.

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| P0 | Return Path pixel has no protocol | Add `https://` to `src="pixel.app.returnpath.net/..."` |
| P1 | 11 images served over HTTP | Update all `image.emails.skechers.com` and `ink1000.com` asset URLs to HTTPS |
| P1 | SPF/DKIM status unverifiable | Pull raw headers from a seed inbox and confirm DMARC pass |
| P2 | Missing alt text on product image | Add descriptive `alt` to `49468f73-*.png` |
| P2 | `-webkit-text-size-adjust: none` | Change to `100%` for WCAG 1.4.4 compliance |
| P2 | Malformed `<meta>` tags | Add `http-equiv` attributes to both charset and IE-compat metas |
| P3 | Duplicate `.show` media query blocks | Consolidate into single `@media` block at intended breakpoint |
| P3 | Verify UTM params on click redirects | Manual spot-check of 2–3 redirect chains |
| P3 | Third-party pixel consent alignment | Confirm Krux user-match firing is scoped to consented recipients |
## Recent history

- [[2026-04-28-take-15-or-more-off-now]] — 4/10 (2026-04-28)
- [[2026-04-28-enjoy-20-off-select-styles]] — 4/10 (2026-04-28)
- [[2026-04-27-humanity-just-got-faster]] — 2/10 (2026-04-27)

