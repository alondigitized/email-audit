---
slug: 2026-04-27-humanity-just-got-faster
type: email
date: 2026-04-27
persona: walker
score: "2/10"
sender: adidas
subject: Humanity just got faster ⚡
tags: [email, score-2, sender/adidas]
---
# Humanity just got faster ⚡
**Score:** 2/10 · **Type:** Email audit · **2026-04-27**
## Executive summary

- **Brand:** adidas | **Date:** 2026-04-27 | **Subject:** Humanity just got faster ⚡
- This isn't even my team. I'm a Skechers guy — Slip-ins, comfort tech, the rewards club. So right off the bat, adidas is already behind. And then the email itself? One big photo of a guy crossing a finish line, three sentences of text, and nothing else. No shoes to look at, no price, no button to click. I don't know what they wanted me to do with this. It feels like they accidentally sent me a press release instead of an email.
- For me, as a persona, almost zero. Even setting aside that I'm a Skechers loyalist, this email doesn't sell anything. It tells me about a record. I didn't ask for news. I want deals, comfort features, maybe something in my size. This delivers none of that.

## What's working

- The hero photo is dramatic and technically well-shot. I can see it's a big moment — guy crossing the finish line, arms up, crowd behind him.
- The "LEVEL 1 — 89 Points to spend" bar at the top tells me the brand knows I have an account. That's the one personalized touch.
- Clean, minimal layout loads fast. No clutter. On my phone, the image fills the screen nicely.

## What's weak

- **No product. No CTA. Nothing to buy.** I scrolled the whole thing — where's the shoe? Where's the link? What am I supposed to do after reading this?
- **Completely wrong audience for me.** Elite marathon running has nothing to do with walking the dog or running errands in comfortable slip-ons. This is for 28-year-old runners, not me.
- **Preview text is a mess.** It leaked a raw tracking link right next to the subject line in my inbox. That looked like spam or a mistake. Almost didn't open it.
- **Text is tiny.** The paragraph under "HISTORY IN TIME" is small — I had to hold the phone closer to read it. Not built for someone my age browsing casually.
- **One paragraph is all they gave me.** If this is supposed to inspire me, I need more. If it's supposed to sell me something, I need a button. It's neither.
- **Footer is cluttered with small print** but the body is practically empty. That imbalance is strange.

## Recommendations

- 1. **Add a shop CTA** — even a record-breaking story email should end with "Shop the Speed Collection" or "See what Sawe wore." Give me somewhere to go.
- 2. **Fix the preview text immediately** — leaking a raw click-tracking URL in the inbox is an embarrassing technical failure and looks like phishing.
- 3. **Increase body text size** — 14–16px minimum for a mobile email aimed at adults 40+.
- 4. **Segment this send** — performance runners should get this. Casual buyers and loyalty members who never bought performance gear should get something else.
- 5. **Personalize the body, not just the nav bar** — "As a Level 1 member..." goes a long way. Right now the membership detail is buried in a nav bar I almost didn't notice.
- | Priority | Action |
- |---|---|
- | **Critical** | Re-upload all 8 font files to an accessible CDN (or fix S3 bucket ACL/policy). |
- | **Critical** | Change the HTTP image URL to HTTPS: `http://image.link.adidas.com/...` → `https://`. |
- | **High** | Replace both `image.staging.link.adidas.com` image URLs with production domain equivalents before any future send. |
- | **High** | Add descriptive `alt` text to the 3 images lacking it. |
- | **High** | Rewrite plain-text body as human-readable copy; strip or replace raw tracking URLs. |
- | **High** | Capture and verify `Authentication-Results` (SPF/DKIM/DMARC) through the relay before marking deliverability clean. |
- | **Medium** | Fix `<meta charset>` to include `http-equiv="Content-Type"`. |
- | **Medium** | Remove duplicate `@font-face` block from `<body>`. |
- | **Medium** | Enable redirect-following in the link probe to verify click-link destinations and UTM coverage. |
- | **Low** | Review Krux user-match pixel data-sharing disclosure against current privacy policy. |

## Full review
---

## Walker Miles — Email Review
**Brand:** adidas | **Date:** 2026-04-27 | **Subject:** Humanity just got faster ⚡

---

### 1. Executive Summary

This isn't even my team. I'm a Skechers guy — Slip-ins, comfort tech, the rewards club. So right off the bat, adidas is already behind. And then the email itself? One big photo of a guy crossing a finish line, three sentences of text, and nothing else. No shoes to look at, no price, no button to click. I don't know what they wanted me to do with this. It feels like they accidentally sent me a press release instead of an email.

---

### 2. Business Impact Score: 2 / 10

For me, as a persona, almost zero. Even setting aside that I'm a Skechers loyalist, this email doesn't sell anything. It tells me about a record. I didn't ask for news. I want deals, comfort features, maybe something in my size. This delivers none of that.

---

### 3. What's Working

- The hero photo is dramatic and technically well-shot. I can see it's a big moment — guy crossing the finish line, arms up, crowd behind him.
- The "LEVEL 1 — 89 Points to spend" bar at the top tells me the brand knows I have an account. That's the one personalized touch.
- Clean, minimal layout loads fast. No clutter. On my phone, the image fills the screen nicely.

---

### 4. What's Weak

- **No product. No CTA. Nothing to buy.** I scrolled the whole thing — where's the shoe? Where's the link? What am I supposed to do after reading this?
- **Completely wrong audience for me.** Elite marathon running has nothing to do with walking the dog or running errands in comfortable slip-ons. This is for 28-year-old runners, not me.
- **Preview text is a mess.** It leaked a raw tracking link right next to the subject line in my inbox. That looked like spam or a mistake. Almost didn't open it.
- **Text is tiny.** The paragraph under "HISTORY IN TIME" is small — I had to hold the phone closer to read it. Not built for someone my age browsing casually.
- **One paragraph is all they gave me.** If this is supposed to inspire me, I need more. If it's supposed to sell me something, I need a button. It's neither.
- **Footer is cluttered with small print** but the body is practically empty. That imbalance is strange.

---

### 5. Recommendations

1. **Add a shop CTA** — even a record-breaking story email should end with "Shop the Speed Collection" or "See what Sawe wore." Give me somewhere to go.
2. **Fix the preview text immediately** — leaking a raw click-tracking URL in the inbox is an embarrassing technical failure and looks like phishing.
3. **Increase body text size** — 14–16px minimum for a mobile email aimed at adults 40+.
4. **Segment this send** — performance runners should get this. Casual buyers and loyalty members who never bought performance gear should get something else.
5. **Personalize the body, not just the nav bar** — "As a Level 1 member..." goes a long way. Right now the membership detail is buried in a nav bar I almost didn't notice.

---

### 6. Bottom Line

I read it. I didn't click. I'm not going to forward it. It's a beautiful photo of something I have no personal connection to, followed by three sentences and then a legal footer. If adidas wanted to make me feel something, they needed to show me a shoe, show me a price, or show me why this matters to someone my age with bad knees. They didn't do any of that.

---

### 7. Subject Line Analysis

- **Subject:** `Humanity just got faster ⚡`
- **Length:** 27 characters
- **Scores (1-10):** Clarity `5`, Curiosity `6`, Personalization `2`, Urgency `3`, Specificity `2`
- **Strengths:**
  - Short and punchy — easy to read at a glance on mobile
  - The lightning bolt emoji adds energy without feeling childish
- **Weaknesses:**
  - Vague — "humanity" tells me nothing about shoes, offers, or why I should care
  - Zero personalization; could be sent to anyone on any list
- **Alt A:** `Sebastian Sawe just broke the 2-hour barrier — see what he wore`
- **Alt B:** `The fastest marathon ever. Shop the shoes that made it happen.`

---

### 8. Preview Text Analysis

- **Preview:** `adidas The fastest of London 2026. https://click.link.adidas.com/?qs=ABB7InYiOjEsImQiOjQ4NTl9AAEAAAAAACnH_OTm…`
- **Length:** ~130+ characters (URL fragment visible)
- **Scores (1-10):** Complements subject `3`, Specificity `3`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - "The fastest of London 2026" does add a tiny bit of context to the subject
  - At least the first few words connect to the theme
- **Weaknesses:**
  - A raw tracking URL leaked directly into the preheader — this looks like broken code or spam in my inbox
  - Completely destroys trust before the email is even opened
- **Alt A:** `Sebastian Sawe just shattered the two-hour marathon record in London. Powered by adidas.`
- **Alt B:** `History was made in London. Explore the speed that broke the barrier.`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `3/10`
- **Rationale:** "Humanity just got faster" is intriguing for half a second, but paired with a garbled tracking URL in the preview, I'd hesitate — that looks like spam or a broken send. I opened it because it's a recognizable brand name, but I wouldn't normally trust a preview that leaks a raw link like that.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `1/10`
- **Rationale:** There's nothing to click — literally no button in the email. Even if I wanted to buy something, I'd have to go find it myself. I'm not doing that on my phone. I'm closing the email.

---

### 11. Evidence

- **Overall purpose:** Brand moment / PR announcement celebrating Sebastian Sawe breaking the two-hour marathon barrier at the London Marathon 2026, powered by adidas.
- **Hero / primary value proposition:** Full-width action photo of Sawe crossing the finish line. Strong visual, zero commerce.
- **Membership / benefits section:** "LEVEL 1 — 89 Points to spend" in the navigation bar. That's the only loyalty acknowledgment — it's not in the body copy at all.
- **Product discoverability / recommendation modules:** None visible. No shoes, no collection callout, no imagery of product.
- **Utility / secondary modules:** Footer only — My Account, Privacy Statement, Support, Unsubscribe, adidas Service.
- **Bugs / friction / clarity issues:**
  - Preview text leaked a full raw tracking URL — visible in inbox before opening
  - Body text under the headline is noticeably small on mobile, well below comfortable reading size for my age group
  - No CTA button anywhere in the email body

---

## Technical Audit

## Technical Audit — adidas "Humanity just got faster ⚡"

**From:** adidas <adidas@us-news.adidas.com> | **Date:** 2026-04-27

---

### 1. Technical Summary

Eight custom font assets hosted on `s3-eu-west-1.amazonaws.com` are returning 403s, causing all brand fonts to silently fall back to Arial. One product image is served over plain HTTP, risking mixed-content blocking in modern clients.

---

### 2. Link & Tracking Issues

**Font CDN — 8 broken assets (403)**
All `@font-face` src URLs under `s3-eu-west-1.amazonaws.com/adidas-adl/foundation/dist/adidas/assets/fonts/adidas/` return 403. Affected files: `AdihausDIN-Regular.woff2/.ttf`, `AdihausDIN-Bold.woff2/.ttf`, `adineuePRO-Regular.woff2/.woff`, `adineuePRO-Bold.woff2/.woff`. The bucket either has public access blocked or the path has changed. The `mso-font-alt:Arial` fallback fires silently — no visible breakage, but brand typography is absent.

**30 tracking/click links skipped**
Click-redirect domain `click.link.adidas.com` was not probed. Destination URL health is unverified; if any campaign links are stale they will not be caught by this pipeline until redirect-following is enabled.

**Open-pixel domain**
Open-tracking pixel at `click.link.adidas.com/open.aspx?HOX3CPQCFM2UZIAF36WGFRRA2I...` is a separate domain from click links — confirm it resolves and returns a valid 1×1 response.

---

### 3. Rendering & Accessibility

**HTTP image (mixed content)**
`b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg` is loaded from `http://image.link.adidas.com/...` (no TLS). Gmail, Outlook.com, and Apple Mail proxy or block non-HTTPS image sources. This image will likely be blank for a significant portion of recipients.
Evidence: `src: http://image.link.adidas.com/lib/fe6515707c62007e7715/m/3/b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg`

**Missing `alt` text — 3 images**
- `cc57a950-573b-40d7-91f6-f59c435298a5.png` (staging domain)
- `3fe183ac-1f44-41a9-86a4-4929a2610275.png` (staging domain)
- `b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg` (HTTP image above)

Empty `alt` on content images breaks screen readers and degrades image-off rendering (images-blocked-by-default clients show blank space with no context).

**Staging image domain in production send**
Two images reference `image.staging.link.adidas.com` instead of `image.link.adidas.com`. These may resolve now but are not guaranteed stable in production infrastructure and suggest a QA/promotion workflow gap.

**Duplicate `@font-face` declarations**
The `<style>` block in `<head>` and a second `<style>` block in `<body>` both declare identical `@font-face` rules. This is redundant and can cause parse overhead in some clients (notably older Outlooks).

**`<meta charset>` malformed**
`<meta content="text/html; charset=UTF-8" />` is missing `http-equiv="Content-Type"`. The correct form is `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />`. Some clients may not detect the charset correctly.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (e.g., `%%firstName%%`, `{{name}}`) visible in the truncated source. Cannot fully verify without complete HTML; flag for manual check on personalized subject-line or body fields.

---

### 5. Compliance

**Authentication headers — unknown**
`Authentication-Results` header was not captured via the AgentMail relay. SPF, DKIM, and DMARC pass/fail status for `us-news.adidas.com` cannot be confirmed. This should be resolved before treating deliverability as clean.

**Plain-text body — URL-heavy**
Plain-text alternative is 81% URLs by character count (4,061 of 5,003 chars). Spam filters weight heavily URL-dense plain-text; this is a deliverability risk. Plain-text should be a human-readable summary, not a dump of encoded tracking URLs.

**CAN-SPAM / unsubscribe**
Physical mailing address and unsubscribe mechanism presence cannot be confirmed from the truncated source. These are required by CAN-SPAM. Verify the footer contains both a valid postal address and a one-click (or clearly labeled) unsubscribe link.

**Third-party beacon pixels**
Two Salesforce/Krux (`beacon.krxd.net`) user-match pixels fire on open, including one carrying a SHA-256 hashed email (`partner_uid=9153f33fe...`). Confirm this data-sharing is disclosed in the privacy policy linked from this email and that the audience data agreement covers this use.

---

### 6. Email-to-Site Continuity

**UTM parameter coverage**
30 click links were skipped by the probe — UTM presence on destination URLs is unverified. Confirm all CTA links include at minimum `utm_source`, `utm_medium`, and `utm_campaign`. Given the subject references "London 2026," `utm_campaign` should be consistent and unique to this send for attribution accuracy.

**No additional landing page issues** identified from available data; full verification requires probing resolved destination URLs.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **Critical** | Re-upload all 8 font files to an accessible CDN (or fix S3 bucket ACL/policy). |
| **Critical** | Change the HTTP image URL to HTTPS: `http://image.link.adidas.com/...` → `https://`. |
| **High** | Replace both `image.staging.link.adidas.com` image URLs with production domain equivalents before any future send. |
| **High** | Add descriptive `alt` text to the 3 images lacking it. |
| **High** | Rewrite plain-text body as human-readable copy; strip or replace raw tracking URLs. |
| **High** | Capture and verify `Authentication-Results` (SPF/DKIM/DMARC) through the relay before marking deliverability clean. |
| **Medium** | Fix `<meta charset>` to include `http-equiv="Content-Type"`. |
| **Medium** | Remove duplicate `@font-face` block from `<body>`. |
| **Medium** | Enable redirect-following in the link probe to verify click-link destinations and UTM coverage. |
| **Low** | Review Krux user-match pixel data-sharing disclosure against current privacy policy. |
## Recent history

- [[2026-04-27-you-can-never-have-too-many]] — 2/10 (2026-04-27)
- [[2026-04-27-birkenstock-essentials-for-sunny-days]] — 4/10 (2026-04-27)
- [[2026-04-27-your-cart-expires-soon]] — 6/10 (2026-04-27)

