---
slug: 2026-05-06-bob-marley-collection
type: email
date: 2026-05-06
persona: walker
score: "2/10"
sender: adidas
subject: Bob Marley Collection
tags: [email, score-2, sender/adidas]
---
# Bob Marley Collection
**Score:** 2/10 · **Type:** Email audit · **2026-05-06**
## Executive summary

- Wrong team, wrong sport, wrong everything. I'm a 62-year-old guy who wears Skechers Slip-ins for comfort — and adidas just sent me a Bob Marley lifestyle email followed by a World Cup Match Ball giveaway. I don't have a clue why this landed in my inbox. I don't collect soccer balls. I don't have a deep emotional connection to Bob Marley streetwear. Nothing here says "Walker Miles, comfortable shoes, price-conscious loyalty member." This is the kind of email I scroll past in about four seconds, maybe less.

## What's working

- The email renders cleanly. Images load, text is legible, no broken layouts.
- The Bob Marley hero image is visually bold — large, high-contrast, easy to read even on a phone screen.
- The "World Cup Match Ball Giveaway" section breaks up the scroll and gives a second hook, even if it's the wrong hook for me.

## What's weak

- **Zero relevance to me.** I wear slip-on comfort shoes. There is not a single shoe, sneaker, or footwear product visible in this email. It's pure lifestyle/apparel branding.
- **No offer.** There's no discount, no dollar-off, no free shipping. Nothing that would move a price-conscious guy like me.
- **Giveaway ask feels like work.** "Enter for your chance to win" one of 2,226 balls? I don't want to fill out a form for a soccer ball I'll never use.
- **Not my demographic.** The models and imagery skew young — Bob Marley streetwear is not a 62-year-old Boomer purchase trigger.
- **No loyalty hook.** I'm a Skechers Plus member, not an adidas rewards member, but even adidas has loyalty programs — none of that is shown here.
- **CTA is vague.** "Shop online or at your local adidas store" at the bottom is the weakest possible call to action. No button, no urgency, no specific product.
- **Feels like a mass blast.** No personalization — no name, no "based on your past purchases," nothing that says adidas knows anything about me.

## Recommendations

- **Don't send this to me.** Seriously — if adidas has any segmentation data, a 62-year-old comfort-focused shopper should not be on the Bob Marley lifestyle list.
- If they must send to me, lead with footwear — even a lifestyle crossover shoe tied to the collection would give me something to click.
- Replace the "shop at your local store" line with an actual CTA button: "Shop Bob Marley Footwear" or "Find Comfort Styles."
- The giveaway is a fine engagement play for younger fans — just not for me. Separate that into its own email or make the prize more universally appealing.
- | Priority | Action |
- |---|---|
- | **P0** | Fix broken redirect: the `o/` → `g/` path substitution in the click-wrapper for txn `4abacd00-4955-11f1-a042-76b4f6b00c3b` must be corrected before send. |
- | **P0** | Add a non-empty `text/plain` MIME part (minimum: subject + primary CTA URL + unsubscribe link). |
- | **P1** | Upgrade all 8 arrow-icon `src` URLs from `http://` to `https://` on `image.link.adidas.com`. |
- | **P1** | Upgrade the open-tracking pixel from `http://click.comms.adidas.com` to HTTPS. |
- | **P2** | Add `alt=""` to both tracking pixel `<img>` tags. |
- | **P3** | Deduplicate the `@font-face` declarations — keep one `<style>` block with the merged fallback list. |
- | **P3** | Run the 36 skipped tracking links through the HTTP prober in a non-redirect-following mode to confirm they resolve to expected destinations. |

## Full review
---

## 1. Executive Summary

Wrong team, wrong sport, wrong everything. I'm a 62-year-old guy who wears Skechers Slip-ins for comfort — and adidas just sent me a Bob Marley lifestyle email followed by a World Cup Match Ball giveaway. I don't have a clue why this landed in my inbox. I don't collect soccer balls. I don't have a deep emotional connection to Bob Marley streetwear. Nothing here says "Walker Miles, comfortable shoes, price-conscious loyalty member." This is the kind of email I scroll past in about four seconds, maybe less.

---

## 2. Business Impact Score

**2/10**

- Sender is a brand I recognize (adidas is a known name, even if I'm not a regular customer)
- No render bugs visible — layout is clean and images load fine

That's it. Every other signal failed for my persona.

---

## 3. What's Working

- The email renders cleanly. Images load, text is legible, no broken layouts.
- The Bob Marley hero image is visually bold — large, high-contrast, easy to read even on a phone screen.
- The "World Cup Match Ball Giveaway" section breaks up the scroll and gives a second hook, even if it's the wrong hook for me.

---

## 4. What's Weak

- **Zero relevance to me.** I wear slip-on comfort shoes. There is not a single shoe, sneaker, or footwear product visible in this email. It's pure lifestyle/apparel branding.
- **No offer.** There's no discount, no dollar-off, no free shipping. Nothing that would move a price-conscious guy like me.
- **Giveaway ask feels like work.** "Enter for your chance to win" one of 2,226 balls? I don't want to fill out a form for a soccer ball I'll never use.
- **Not my demographic.** The models and imagery skew young — Bob Marley streetwear is not a 62-year-old Boomer purchase trigger.
- **No loyalty hook.** I'm a Skechers Plus member, not an adidas rewards member, but even adidas has loyalty programs — none of that is shown here.
- **CTA is vague.** "Shop online or at your local adidas store" at the bottom is the weakest possible call to action. No button, no urgency, no specific product.
- **Feels like a mass blast.** No personalization — no name, no "based on your past purchases," nothing that says adidas knows anything about me.

---

## 5. Recommendations

- **Don't send this to me.** Seriously — if adidas has any segmentation data, a 62-year-old comfort-focused shopper should not be on the Bob Marley lifestyle list.
- If they must send to me, lead with footwear — even a lifestyle crossover shoe tied to the collection would give me something to click.
- Replace the "shop at your local store" line with an actual CTA button: "Shop Bob Marley Footwear" or "Find Comfort Styles."
- The giveaway is a fine engagement play for younger fans — just not for me. Separate that into its own email or make the prize more universally appealing.

---

## 6. Bottom Line

I deleted this. It's a fine-looking email for someone else — maybe a 28-year-old soccer fan who's into reggae culture. For me, it's noise. Wrong brand for my habits, wrong product category, no offer, no relevance. I wouldn't click, I wouldn't forward, and I'm honestly a little confused how I ended up on this list.

---

## 7. Subject Line Analysis

- **Subject:** `Bob Marley Collection`
- **Length:** 21 characters
- **Scores (1-10):** Clarity `7`, Curiosity `5`, Personalization `1`, Urgency `1`, Specificity `4`
- **Strengths:**
  - Short and clean, won't get truncated on mobile
  - Instantly communicates the theme — no ambiguity about what's inside
- **Weaknesses:**
  - Zero urgency — no deadline, no offer, no reason to open now vs. never
  - No personalization and no footwear/comfort hook for my segment
- **Alt A:** `New Bob Marley Drops — Shop the Collection`
- **Alt B:** `Walk in Bob's Shoes — Bob Marley x adidas Now Live`

---

## 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — the visible preview appears to be the "Register to follow community and feedback" nav link text at the very top of the email, which is unintended preheader content
- **Length:** ~45 characters of junk
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - (None — there is no real preheader working here)
- **Weaknesses:**
  - The first readable text in the email bleeds into the inbox preview as nav/utility copy — wastes the one chance to add a hook
  - No mention of the offer, the product, or anything compelling
- **Alt A:** `Freedom. Expression. adidas x Bob Marley — shop the full collection.`
- **Alt B:** `Colors, comfort, and classic style — the Bob Marley Collection is here.`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** 2/10
- **Signals counted:** Sender display name is recognizable (adidas is a known brand); subject is concrete (names the collection clearly)
- **Rationale:** I'd recognize "adidas" in my inbox but "Bob Marley Collection" doesn't speak to anything I shop for. No urgency, no offer hint, no comfort/footwear signal — I'd likely skip it entirely on a busy morning.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** 1/10
- **Signals counted:** (None of the click criteria are met — no footwear CTA, no offer, no price reduction, no loyalty pricing, no product detail relevant to me)
- **Rationale:** Once I'm inside the email, there's still nothing to click on that serves me. No price, no shoe product, no "add to cart" moment. The only ask is a giveaway entry form — and that's not how I shop.

---

## 11. Evidence

- **Overall purpose:** Brand/lifestyle email promoting the adidas x Bob Marley Collection — purely awareness/culture play, no transactional hook.
- **Hero / primary value proposition:** Full-width Bob Marley imagery with the collection name and a short brand story paragraph. Copy is well-written but reads like marketing prose, not a deal.
- **Membership / benefits section:** None visible.
- **Product discoverability / recommendation modules:** None. There are no product tiles, no price callouts, no "shop these looks" module. The entire email is editorial with one soft CTA buried in body copy ("Shop online or at your local adidas store*").
- **Utility / secondary modules:** World Cup Match Ball Giveaway section — entry for one of 2,226 numbered collector balls. Brief paragraph, no button shown.
- **Footer:** Standard legal/privacy footer with My Account, Privacy Statement, Support, Unsubscribe links. Clean and functional.
- **Bugs / friction:** The top navigation bar ("Register to follow community and feedback") appears to be bleeding into the inbox preheader — that's a missed opportunity but not a visual break in-email. No other render issues visible.

---

## Technical Audit

## Technical Audit — adidas "Bob Marley Collection"

**From:** adidas@us-news.comms.adidas.com | **Subject:** Bob Marley Collection

---

### 1. Technical Summary

Two confirmed infrastructure failures: a malformed redirect URL breaking at least one CTA link, and a missing plain-text MIME part. Eight HTTP image URLs risk silent blocking by modern email clients that enforce mixed-content policies.

---

### 2. Link & Tracking Issues

**FAIL — Broken redirect URL**
The click-tracking wrapper generated a relative-style path (`/g/dd226d94...`) instead of an absolute URL, causing link resolution to fail:

```
[FAIL] unknown url type: '/g/dd226d94-8d52-43f1-8d2c-45fbd5223389?txn=4abacd00...'
```

The underlying destination is `https://dv.adidas.com/o/dd226d94-8d52-43f1-8d2c-45fbd5223389` — the `o/` → `g/` path swap in the redirect wrapper is the likely culprit. Affected CTA: tracking ID `4abacd00-4955-11f1-a042-76b4f6b00c3b`.

**WARN — 36 tracking links not probed**
All 36 click-redirect links were skipped during HTTP validation. No confirmation these resolve correctly outside the broken one above.

---

### 3. Rendering & Accessibility

**WARN — 8 HTTP image sources (same asset, repeated)**
Arrow icon `b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg` is referenced 8 times over HTTP:

```
http://image.link.adidas.com/lib/fe6515707c62007e7715/m/3/b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg
```

Gmail, Outlook.com, and Apple Mail all strip or block non-HTTPS image sources under mixed-content rules. Asset should be served from `https://image.link.adidas.com/...`.

**WARN — 2 images missing `alt` text**
- Tracking pixel: `https://dv.adidas.com/o/dd226d94-8d52-43f1-8d2c-45fbd5223389?cp_tp=v3...`
- Open-tracking pixel: `http://click.comms.adidas.com/CI0/0102019dfd9d4d79-bbee0ad0...`

Tracking pixels should carry `alt=""` explicitly to suppress broken-image icons in image-blocking clients.

**WARN — HTTP open-tracking pixel**
```
http://click.comms.adidas.com/CI0/0102019dfd9d4d79-bbee0ad0-6afc-47cb-be94-8aef2f30041b-000000/...
```
Served over HTTP — open-rate data will be lost for clients that block mixed content (increasingly the default).

**INFO — Duplicate `@font-face` declarations**
`AdihausDIN` and `AdineuePRO` are each declared twice across two `<style>` blocks with slightly different `src` fallback lists. No functional breakage, but it adds parse weight and risks cache inconsistency.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens or `{{placeholder}}` patterns visible in the truncated source. No issues found.

---

### 5. Compliance

**FAIL — Plain-text part absent**

```
[FAIL] Plain-text fallback missing or too short: Text version is 0 chars
```

CAN-SPAM and most ESP deliverability best practices require a non-empty `text/plain` MIME part. A 0-character text part increases spam-filter scoring and breaks accessibility for text-only clients and screen readers.

**INFO — `<meta name="referrer" content="no-referrer" />`**
Present and correct — suppresses referrer leakage from webmail clients.

**INFO — `<meta name="ROBOTS" content="NOINDEX, NOFOLLOW" />`**
Present — prevents webmail-cached versions from being indexed.

No missing unsubscribe link or physical address issues detected in truncated source (footer not included in excerpt; verify independently).

---

### 6. Email-to-Site Continuity

The destination URL for the broken link (`https://dv.adidas.com/o/dd226d94...`) uses adidas's own `dv.adidas.com` redirect domain, which should append UTM parameters downstream. Because the link is broken at the wrapper level, no UTM data will be passed for that CTA — the click is lost entirely.

The 36 untested tracking links cannot be confirmed for UTM continuity. No issues found in what was verifiable.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **P0** | Fix broken redirect: the `o/` → `g/` path substitution in the click-wrapper for txn `4abacd00-4955-11f1-a042-76b4f6b00c3b` must be corrected before send. |
| **P0** | Add a non-empty `text/plain` MIME part (minimum: subject + primary CTA URL + unsubscribe link). |
| **P1** | Upgrade all 8 arrow-icon `src` URLs from `http://` to `https://` on `image.link.adidas.com`. |
| **P1** | Upgrade the open-tracking pixel from `http://click.comms.adidas.com` to HTTPS. |
| **P2** | Add `alt=""` to both tracking pixel `<img>` tags. |
| **P3** | Deduplicate the `@font-face` declarations — keep one `<style>` block with the merged fallback list. |
| **P3** | Run the 36 skipped tracking links through the HTTP prober in a non-redirect-following mode to confirm they resolve to expected destinations. |
## Recent history

- [[2026-05-06-did-you-forget-something]] — 6/10 (2026-05-06)
- [[2026-05-06-sneakers-under-50-75-100]] — 8/10 (2026-05-06)
- [[2026-05-06-4-trends-to-try-in-may]] — 7/10 (2026-05-06)

