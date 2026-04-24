---
slug: 2026-04-24-save-30-during-the-mix-match-event
type: email
date: 2026-04-24
persona: walker
score: "3/10"
sender: adidas
subject: Save 30% during the Mix & Match Event
tags: [email, score-3, sender/adidas]
---
# Save 30% during the Mix & Match Event
**Score:** 3/10 · **Type:** Email audit · **2026-04-24**
## Executive summary

- **From:** adidas `<adidas@us-news.comms.adidas.com>`
- **Subject:** Save 30% during the Mix & Match Event
- First thing I notice: this isn't Skechers. It's adidas. I don't have a strong relationship with adidas — I'm a Skechers guy, always have been. So right out of the gate, this email is fighting uphill with me. That said, I did open it because 30% is a real number and I pay attention to sales. But once I'm inside? Dark, moody photo of someone athletic, a vague "Mix and Match Event" headline, and a deal that requires me to buy two things to get the discount. That's not how I shop. I usually know what I want, grab one good pair of shoes, and I'm done. This feels like it was built for a 25-year-old gym rat, not someone like me.
- Barely moves the needle for me. Wrong brand loyalty, wrong aesthetic, gated discount, zero personalization.

## What's working

- **The 30% number is clear.** I saw it immediately — "BUY TWO ITEMS, GET 30% OFF." That's plain English, no games.
- **Simple layout.** I'm on my phone and there's nothing confusing about the structure. One hero image, one message, one button. Easy to scan.
- **SHOP NOW button is visible.** Big enough for my thumb, not buried.

## What's weak

- **Wrong brand for me.** I'm not an adidas customer. I don't know why I'm getting this. It makes me feel like a stranger, not a known shopper.
- **That hero image does nothing for me.** Dark, dramatic, athletic. Looks like a soccer jersey shoot. I wear Slip-ins to walk the dog and run errands, not compete in the World Cup.
- **"Buy two" is a barrier.** I came here for comfort shoes. Now I have to buy two things to earn the deal? That's extra planning and extra spending. I'll probably pass.
- **Nothing for men's comfort footwear.** Not a single product, not a category link, no mention of anything that sounds like what I'd actually wear.
- **No personalization whatsoever.** They don't know my name. They don't know I'm 62. This could have been sent to anyone on earth.
- **Fine print is tiny.** I can see a wall of legal text at the bottom. On my phone, that's unreadable without pinching in. I don't bother.

## Recommendations

- Show me a product. One hero shoe — men's, comfortable, casual — would do more than a dark lifestyle photo.
- If adidas has anything that competes with comfort-first footwear, lead with that. Right now there's nothing to anchor the deal.
- Remove the two-item purchase requirement or at least explain the logic. "Mix two styles" sounds like fashion advice, not a straightforward sale.
- Put the code ("MATCH") somewhere bigger. I almost missed it in the body copy.
- A deadline would help. "Sale ends Sunday" is the kind of thing that gets me off the couch.
- | Priority | Action |
- |---|---|
- | P0 | Fix the broken `dv.adidas.com/o/4cf07ecc-...` redirect — verify the `/g/` destination path resolves before send |
- | P0 | Add a plain-text MIME alternative (minimum: strip-HTML summary with unsubscribe URL) |
- | P1 | Upgrade all 7 HTTP image URLs to HTTPS (`image.link.adidas.com` and `click.comms.adidas.com` pixel) |
- | P1 | Add descriptive `alt` text to the hero image; use `alt=""` on the tracking pixel |
- | P1 | Obtain and verify `Authentication-Results` (SPF pass, DKIM pass) from the sending relay before attributing inbox rate issues to content |
- | P2 | Confirm UTM parameters (`utm_source=email`, `utm_medium=...`, `utm_campaign=mix-match`) are appended to final landing URLs through the click-redirect chain |
- | P2 | Deduplicate `@font-face` declarations — consolidate into one `<style>` block with the fuller fallback list |

## Full review
---

## Email Review — Walker Miles, 62, Boomer Male

**From:** adidas `<adidas@us-news.comms.adidas.com>`
**Subject:** Save 30% during the Mix & Match Event

---

### 1. Executive Summary

First thing I notice: this isn't Skechers. It's adidas. I don't have a strong relationship with adidas — I'm a Skechers guy, always have been. So right out of the gate, this email is fighting uphill with me. That said, I did open it because 30% is a real number and I pay attention to sales. But once I'm inside? Dark, moody photo of someone athletic, a vague "Mix and Match Event" headline, and a deal that requires me to buy two things to get the discount. That's not how I shop. I usually know what I want, grab one good pair of shoes, and I'm done. This feels like it was built for a 25-year-old gym rat, not someone like me.

---

### 2. Business Impact Score: 3/10

Barely moves the needle for me. Wrong brand loyalty, wrong aesthetic, gated discount, zero personalization.

---

### 3. What's Working

- **The 30% number is clear.** I saw it immediately — "BUY TWO ITEMS, GET 30% OFF." That's plain English, no games.
- **Simple layout.** I'm on my phone and there's nothing confusing about the structure. One hero image, one message, one button. Easy to scan.
- **SHOP NOW button is visible.** Big enough for my thumb, not buried.

---

### 4. What's Weak

- **Wrong brand for me.** I'm not an adidas customer. I don't know why I'm getting this. It makes me feel like a stranger, not a known shopper.
- **That hero image does nothing for me.** Dark, dramatic, athletic. Looks like a soccer jersey shoot. I wear Slip-ins to walk the dog and run errands, not compete in the World Cup.
- **"Buy two" is a barrier.** I came here for comfort shoes. Now I have to buy two things to earn the deal? That's extra planning and extra spending. I'll probably pass.
- **Nothing for men's comfort footwear.** Not a single product, not a category link, no mention of anything that sounds like what I'd actually wear.
- **No personalization whatsoever.** They don't know my name. They don't know I'm 62. This could have been sent to anyone on earth.
- **Fine print is tiny.** I can see a wall of legal text at the bottom. On my phone, that's unreadable without pinching in. I don't bother.

---

### 5. Recommendations

- Show me a product. One hero shoe — men's, comfortable, casual — would do more than a dark lifestyle photo.
- If adidas has anything that competes with comfort-first footwear, lead with that. Right now there's nothing to anchor the deal.
- Remove the two-item purchase requirement or at least explain the logic. "Mix two styles" sounds like fashion advice, not a straightforward sale.
- Put the code ("MATCH") somewhere bigger. I almost missed it in the body copy.
- A deadline would help. "Sale ends Sunday" is the kind of thing that gets me off the couch.

---

### 6. Bottom Line

I probably don't click. The 30% caught my eye in the subject line and I might have opened it thinking there's a shoe deal. But nothing inside targets me — not the image, not the product, not the offer structure. If adidas wants my business they need to show me something comfortable, something in my world. This email doesn't do that.

---

### 7. Subject Line Analysis

- **Subject:** `Save 30% during the Mix & Match Event`
- **Length:** 42 characters
- **Scores (1-10):** Clarity `6`, Curiosity `4`, Personalization `1`, Urgency `3`, Specificity `5`
- **Strengths:**
  - The 30% discount is concrete and front-loaded — eye catches it immediately
  - Short enough to render fully on mobile
- **Weaknesses:**
  - "Mix & Match Event" is brand jargon that means nothing to me — sounds like a clothing swap
  - Zero urgency, no deadline, no reason to open now vs. tomorrow
- **Alt A:** `Walker, your 30% off starts now — two items, one code`
- **Alt B:** `30% off this weekend: mix any two adidas styles`

---

### 8. Preview Text Analysis

- **Preview:** `Explore the latest adidas best sellers | SHOP NOW`
- **Length:** 49 characters
- **Scores (1-10):** Complements subject `2`, Specificity `2`, Clarity `5`, Inbox-fit `2`
- **Strengths:**
  - At least it's not broken browser-junk text
  - Brand name is present
- **Weaknesses:**
  - Completely generic — says nothing about the 30% deal that's supposedly the whole point of the email
  - Repeats the "shop now" energy of the subject without adding any new information or reason to open
- **Alt A:** `Use code MATCH at checkout — ends Sunday`
- **Alt B:** `Buy any 2 styles, save 30% — here's what to grab`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `4/10`
- **Rationale:** The 30% number in the subject line would catch my eye — I'm price-conscious — but adidas isn't a brand I have loyalty to, and "Mix & Match Event" tells me nothing about whether there's anything I'd actually want in there. I'd probably open it out of mild curiosity about the discount, not genuine excitement.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `2/10`
- **Rationale:** Once I'm inside, the dark athletic imagery and zero product visibility confirm this isn't for me. The two-item purchase requirement adds friction. Nothing in this email makes me feel like a comfortable pair of casual men's shoes is waiting on the other side of that SHOP NOW button.

---

### 11. Evidence

- **Overall purpose:** Promote a "Mix & Match" sitewide sale event at 30% off with promo code MATCH, requiring a minimum two-item purchase.
- **Hero / primary value proposition:** Full-width dark lifestyle image with "THE MIX AND MATCH EVENT" overlaid; large body headline "BUY TWO ITEMS, GET 30% OFF" with brief explanation below. The offer is clear but the bar (two items) is higher than a simple sale.
- **Membership / benefits section:** None visible. No loyalty acknowledgment, no account-specific content. Treated like a cold email to a stranger.
- **Product discoverability / recommendation modules:** None. There are no product tiles, category links, or featured items. This is purely brand-and-offer with no merchandise to anchor intent.
- **Utility / secondary modules:** Footer includes My Account, Privacy Statement, Support, Unsubscribe, and adidas.comms link — functional but bare. A "Stories, Styles and Sportswear at Adidas, Since 1949" tagline sits just above the footer, which reads like brand filler.
- **Bugs / friction / clarity issues:** The legal fine print block at the bottom is visually very small — unreadable on a phone screen without zooming. No visible rendering errors otherwise. The promo code "MATCH" appears only in body copy and is easy to miss.

---

## Technical Audit

## Technical Audit — adidas "Save 30% Mix & Match Event"

---

### 1. Technical Summary

Two hard failures require immediate remediation before send: a broken click-tracking redirect and a missing plain-text MIME part. Several warnings (HTTP image URLs, missing alt text, unverifiable authentication) add deliverability and accessibility risk.

---

### 2. Link & Tracking Issues

**[FAIL] Broken redirect destination**
The QA probe against `https://dv.adidas.com/o/4cf07ecc-e1ba-457a-9582-86f38165e731?cp_tp=v3.eJ...` resolved to an unparseable internal path:
```
unknown url type: '/g/4cf07ecc-e1ba-457a-9582-86f38165e731?txn=92b42880-4014-11f1-868e-ee21950ab87d'
```
The redirect chain terminates at a relative URL without a host — the destination is unresolvable. If this is a hero or primary CTA link, it is dead on arrival.

**[WARN] 29 tracking links unverified**
All click links route through `click.comms.adidas.com`. The QA tool skipped HTTP probing on these. Final destination URLs and their validity are unconfirmed.

---

### 3. Rendering & Accessibility

**[WARN] 6× HTTP image — likely blocked**
The arrow asset is loaded over plain HTTP six times:
```
src: http://image.link.adidas.com/lib/fe6515707c62007e7715/m/3/b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg
```
Gmail, Apple Mail (iOS 16+), and Outlook 365 block mixed-content images. All six instances will silently fail to render in those clients.

**[WARN] HTTP tracking pixel**
```
src: http://click.comms.adidas.com/CI0/0102019dc0e08a91-7bf7654a-0b2e-4704-b071-89080d3c17a4-000000/...
```
Same mixed-content issue; also missing alt text.

**[WARN] Missing alt text — 2 images**
- Hero image: `4cf07ecc-e1ba-457a-9582-86f38165e731` — no `alt` attribute
- Tracking pixel: `pf1YfxF0ExZd8robXeK5KakWAoUuwiG4pohIHfaaL9I=452` — no `alt` attribute

Screen readers and clients with images-off will show blank space or broken-image icons for the hero.

**[INFO] Duplicate `@font-face` declarations**
`AdihausDIN` (400, 700) and `AdineuePRO` (400, 600) are each declared twice across two `<style>` blocks with slightly different fallback lists (`local('Calibri')` omitted in the second block). No rendering break, but it adds ~1 KB of redundant CSS and creates an inconsistent fallback chain depending on which block wins.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (`{{`, `*|`, `[%`) visible in the HTML source. Tracking parameters (`mi_mid`, `mi_cid`, `cp_cid`) appear populated with real values — no placeholder leakage detected.

---

### 5. Compliance

**[FAIL] Plain-text MIME part absent**
```
Text version is 0 chars
```
The multipart/alternative plain-text body is empty. While CAN-SPAM does not mandate a text part, spam filters (SpamAssassin, Postfix SA rules) score this negatively, and some corporate mail gateways reject HTML-only messages outright.

**[WARN] SPF/DKIM status unverifiable**
`Authentication-Results` header was not found via the AgentMail relay. SPF and DKIM pass/fail for `us-news.comms.adidas.com` cannot be confirmed from the captured headers. If the relay strips or does not forward authentication results, actual inbox placement risk is unknown.

Sender domain `us-news.comms.adidas.com` is a subdomain; DMARC alignment requires either SPF or DKIM to align on `adidas.com` — alignment cannot be verified without the header.

---

### 6. Email-to-Site Continuity

All 29 outbound links pass through `click.comms.adidas.com` redirect tracking, which prevents direct inspection of final landing page URLs or UTM parameters. No UTM parameters are visible in the pre-redirect URLs. Whether `utm_source`, `utm_medium`, `utm_campaign`, and `utm_content` survive the redirect chain to adidas.com is unconfirmed.

The one link the QA tool fully resolved produced a broken destination (see §2), making that CTA's landing page alignment moot until the link is fixed.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| P0 | Fix the broken `dv.adidas.com/o/4cf07ecc-...` redirect — verify the `/g/` destination path resolves before send |
| P0 | Add a plain-text MIME alternative (minimum: strip-HTML summary with unsubscribe URL) |
| P1 | Upgrade all 7 HTTP image URLs to HTTPS (`image.link.adidas.com` and `click.comms.adidas.com` pixel) |
| P1 | Add descriptive `alt` text to the hero image; use `alt=""` on the tracking pixel |
| P1 | Obtain and verify `Authentication-Results` (SPF pass, DKIM pass) from the sending relay before attributing inbox rate issues to content |
| P2 | Confirm UTM parameters (`utm_source=email`, `utm_medium=...`, `utm_campaign=mix-match`) are appended to final landing URLs through the click-redirect chain |
| P2 | Deduplicate `@font-face` declarations — consolidate into one `<style>` block with the fuller fallback list |
## Recent history

- [[2026-04-24-create-a-look-that-s-all-yours]] — 3/10 (2026-04-24)
- [[2026-04-24-tokenrip-pre-provisioned-account-for-walker]] — 1/10 (2026-04-24)
- [[2026-04-24-fresh-friday-deals]] — 3/10 (2026-04-24)

