---
slug: 2026-05-13-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e
type: site
date: 2026-05-13
persona: reed-locker-dicks-fap6e
score: "1/10"
sender: www.dickssportinggoods.com
subject: Homepage snapshot · www.dickssportinggoods.com · 2026-05-13
tags: [site-journey, score-1, sender/www-dickssportinggoods-com]
---
# Homepage snapshot · www.dickssportinggoods.com · 2026-05-13
**Score:** 1/10 · **Type:** Site journey · **2026-05-13**
## Executive summary

- I opened Dick's and got a full error page — "Oops, Something Went Wrong." — with an error token and an IP address printed right there for everyone to see. No hero, no nav, no products, nothing. Whatever they're running into, it hit me hard enough that I can't see a single piece of the site. Not a great first impression when I've got three kids burning through cleats.

## What's working

- The Dick's logo is recognizable and renders cleanly inside the error card — at least I know I'm on the right site.
- The error message is written in plain English ("We are working on the problem. Please try again after 12 hours.") — not a raw 500 stack trace.

## What's weak

- **Full site error**: The entire homepage is replaced by a Cloudflare/WAF block page — I see zero products, zero navigation, zero offers.
- **Exposed error token + IP**: The line `Error: 0.23a7cb17.1778704455.5a00e6b IP: 47.41.15.19` is printed in bold on screen — exposes internal routing info to any shopper who lands here.
- **"Try again after 12 hours"**: That's a brutal ask. If I'm shopping for cleats before Saturday's tournament, I'm gone to Amazon or Public Lands in 10 seconds flat.
- **No fallback content**: No cached homepage, no "here's our store locator," no phone number — total dead end.
- **No loyalty/rewards hook**: ScoreCard is Dick's main retention tool for repeat buyers like me, and it's completely invisible.
- **Infinite blank page below the error card**: The page height renders as if the full homepage loaded, leaving a massive gray void — looks broken on a phone.

## Recommendations

- **Ship a proper maintenance page with a redirect CTA**: Even a static "We'll be back soon — find a store near you" with a store-locator link keeps me from bouncing to a competitor.
- **Suppress the raw error token and IP from customer-facing output**: That line has no business being visible to shoppers — move it to server logs only.
- **Set a realistic recovery window**: "12 hours" is too vague and too long — replace it with a specific estimated time or a status-page URL so I can decide whether to wait or go elsewhere.
- **Show the ScoreCard balance or a loyalty teaser even on error pages**: A simple "Your points are safe — we'll be back shortly, [first name]" for signed-in users would at least acknowledge the relationship.

## Full review
## 1. Executive Summary

I opened Dick's and got a full error page — "Oops, Something Went Wrong." — with an error token and an IP address printed right there for everyone to see. No hero, no nav, no products, nothing. Whatever they're running into, it hit me hard enough that I can't see a single piece of the site. Not a great first impression when I've got three kids burning through cleats.

## 2. Business Impact Score (1-10)

**1/10**
- − Hero copy or imagery explicitly speaks to my persona: no hero at all — only an error message
- − Returning-shopper hook visible: none
- − Concrete offer above the fold: none
- − Unmistakable primary CTA above the fold: none
- − Visual hierarchy clear: n/a — single error card, all blank below
- − No render bugs: **FAIL** — the entire homepage is a hard error state with an exposed error token (`0.23a7cb17.1778704455.5a00e6b`) and IP address printed in bold
- − Demographic signals match my persona: none present
- − Page reflects current campaign/season: none present
- − Loyalty/membership benefits visible: none
- − Offer feels honest: n/a — there is no offer

Score: 1 (baseline only — no criteria met, and a critical render failure is visible)

## 3. What's Working

- The Dick's logo is recognizable and renders cleanly inside the error card — at least I know I'm on the right site.
- The error message is written in plain English ("We are working on the problem. Please try again after 12 hours.") — not a raw 500 stack trace.

## 4. What's Weak

- **Full site error**: The entire homepage is replaced by a Cloudflare/WAF block page — I see zero products, zero navigation, zero offers.
- **Exposed error token + IP**: The line `Error: 0.23a7cb17.1778704455.5a00e6b IP: 47.41.15.19` is printed in bold on screen — exposes internal routing info to any shopper who lands here.
- **"Try again after 12 hours"**: That's a brutal ask. If I'm shopping for cleats before Saturday's tournament, I'm gone to Amazon or Public Lands in 10 seconds flat.
- **No fallback content**: No cached homepage, no "here's our store locator," no phone number — total dead end.
- **No loyalty/rewards hook**: ScoreCard is Dick's main retention tool for repeat buyers like me, and it's completely invisible.
- **Infinite blank page below the error card**: The page height renders as if the full homepage loaded, leaving a massive gray void — looks broken on a phone.

## 5. Recommendations

- **Ship a proper maintenance page with a redirect CTA**: Even a static "We'll be back soon — find a store near you" with a store-locator link keeps me from bouncing to a competitor.
- **Suppress the raw error token and IP from customer-facing output**: That line has no business being visible to shoppers — move it to server logs only.
- **Set a realistic recovery window**: "12 hours" is too vague and too long — replace it with a specific estimated time or a status-page URL so I can decide whether to wait or go elsewhere.
- **Show the ScoreCard balance or a loyalty teaser even on error pages**: A simple "Your points are safe — we'll be back shortly, [first name]" for signed-in users would at least acknowledge the relationship.

## 6. Bottom Line

I closed the tab immediately and pulled up Public Lands — if you can't load a homepage, you're not getting my cleat money.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Oops, Something Went Wrong.`
- **Hero image:** None — white error card centered on a flat gray background, no product or lifestyle imagery
- **Primary CTA:** None — no button is present above the fold
- **Scores (1-10):** Clarity `2`, Relevance to me `1`, Visual hierarchy `3`, On-brand `1`
- **Strengths:**
  - Logo is visible and legible — I know whose error page I'm on
  - Copy is grammatically clean and not panicked in tone
- **Weaknesses:**
  - Zero commerce content — no path forward for a shopper
  - Error token and raw IP address are printed in bold, which looks amateurish and raises mild trust concerns

## 8. Promotional & Urgency Cues

- **Active promos:** None visible
- **Urgency / scarcity:** None — the only time copy is "try again after 12 hours," which works against urgency
- **Loyalty hooks:** None — ScoreCard is completely absent
- **Honesty check:** Showing a raw IP address (`IP: 47.41.15.19`) and an internal error token in bold to consumers is not manipulative, but it is careless — it signals the site is not production-hardened and erodes trust

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero, no sports content at all
- − Easy to reach my category: no navigation rendered — nothing to tap
- − Eye-catching imagery in my category: none present
- − Promo banner I would use: none present
- − Page renders cleanly: hard no — full error state with a massive blank void below the card
- − Imagery includes someone like me: none
- − Copy register matches mine: the error copy is neutral, but there is no commerce copy to evaluate
- − Trust signals visible: none — no reviews, no return policy, no badges
- − New / hot rail in my category: none
- − No dark patterns: technically no dark patterns, but "try again in 12 hours" with no alternative path is a dead end

**Score:** `1/10` — baseline only; zero engagement criteria met.
**Rationale:** There is literally nothing to engage with — no nav, no products, no offers. The only interaction the page affords is closing the tab.

## 10. Conversion Likelihood

- − CTA in my category: none present
- − Unambiguous CTA copy: no CTA exists
- − Active price reduction or member pricing: none visible
- − Time-bounded credible deadline: none — the only time reference discourages returning
- − Reachable free-shipping threshold: none visible
- − Specific product page one tap away: none
- − Sizing / fit info accessible: none
- − Returns / exchanges mentioned: none
- − Reviews / ratings visible: none
- − Trust / security signals: none

**Score:** `1/10` — baseline only.
**Rationale:** A hard error page has no conversion mechanics whatsoever — I cannot add to cart, sign in, or even find a category link.

## 11. Evidence

Visible modules on the homepage (in scroll order):

- **Dick's Sporting Goods logo** — centered inside the error card, green background, renders correctly
- **Error heading** — `Oops, Something Went Wrong.` in large blue bold text
- **Body copy** — two lines: "We are working on the problem. Please try again after 12 hours." and "We appreciate your patience and understanding."
- **Error token line** — `Error: 0.23a7cb17.1778704455.5a00e6b IP: 47.41.15.19` in bold dark text — exposed to end users
- **Blank gray page body** — the rest of the viewport (and far beyond) is an empty `#f3f3f3` gray fill with no content, no footer, no navigation
- **Bugs / friction visible:**
  - Entire homepage replaced by WAF/Cloudflare error — no fallback commerce content
  - Raw error token and IP address rendered in customer-facing UI
  - Page renders at extreme height (full scroll depth) despite containing only a small error card — suggests a layout container is unsized or the shell loaded without content
## Recent history

- [[2026-05-10-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e]] — 1/10 (2026-05-10)
- [[2026-05-09-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e]] — 1/10 (2026-05-09)
- [[2026-05-08-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e]] — 1/10 (2026-05-08)

