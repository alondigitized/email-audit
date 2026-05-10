---
slug: 2026-05-10-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e
type: site
date: 2026-05-10
persona: reed-locker-dicks-fap6e
score: "1/10"
sender: www.dickssportinggoods.com
subject: Homepage snapshot · www.dickssportinggoods.com · 2026-05-10
tags: [site-journey, score-1, sender/www-dickssportinggoods-com]
---
# Homepage snapshot · www.dickssportinggoods.com · 2026-05-10
**Score:** 1/10 · **Type:** Site journey · **2026-05-10**
## Executive summary

- I pulled up Dick's on my phone and got a full-blown error page — logo, "Oops, Something Went Wrong," and an error code staring me in the face. There's no homepage here, no products, no deals, nothing. For a retailer this size, hitting a site outage on a Saturday when I'm trying to figure out what cleats to grab for my youngest's tournament is straight-up unacceptable. This isn't a brand problem, it's an infrastructure failure, but the experience is the same either way: I'm gone.

## What's working

- **Logo renders correctly** — the Dick's Sporting Goods logo is visible and intact, so I at least know I'm on the right domain.
- **Error message is readable** — the copy is plain English ("We are working on the problem. Please try accessing the site again after 12 hours."), not a raw HTTP 500 stack trace, so I'm not totally confused about what happened.

## What's weak

- **Complete content failure** — no hero, no navigation, no categories, no deals, nothing. I can't shop for anything.
- **"Try again after 12 hours" is brutal** — that's not a reassurance, that's an admission the site is broken for half a day. For someone juggling three kids' sports schedules, I don't have 12 hours of patience; I'm heading to the DICK'S down the street or jumping to Academy Sports.
- **Error code + IP address exposed to end users** — `Error: 0.23a7cb17.1778440865.728a80c6 IP: 47.41.15.19` is visible in bold. That's technical debt leaking into the customer-facing experience.
- **No fallback CTA** — not even a "find a store near you" link or a phone number. Zero recovery path offered.
- **ScoreCard loyalty program completely invisible** — I've got points sitting in that account. Not a single hook or redirect to help me feel the brand relationship.

## Recommendations

- **Add a graceful fallback page** with a store-locator link, a ScoreCard account login button, and maybe a toll-free number — give me somewhere to go instead of a dead end.
- **Strip the raw error code and IP address** from the customer-facing error message immediately; that's a security and professionalism issue.
- **Change "12 hours" to a softer or vague ETA** like "We'll be back shortly" — telling a customer the site is broken for half a day is a conversion killer.
- **Surface a mobile app install CTA** on the error page — if the site is down, at least push me to the app where I can still browse and buy.

## Full review
## 1. Executive Summary

I pulled up Dick's on my phone and got a full-blown error page — logo, "Oops, Something Went Wrong," and an error code staring me in the face. There's no homepage here, no products, no deals, nothing. For a retailer this size, hitting a site outage on a Saturday when I'm trying to figure out what cleats to grab for my youngest's tournament is straight-up unacceptable. This isn't a brand problem, it's an infrastructure failure, but the experience is the same either way: I'm gone.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery explicitly speaks to my persona: no hero, just an error modal
- − Returning-shopper hook visible: none
- − Concrete offer above the fold: none
- − Primary CTA above the fold: none
- − Visual hierarchy is clear: the error card is the only thing on screen — hierarchy is irrelevant
- − No render bugs: this IS a render failure — broken page, error code `0.23a7cb17.1778440865.728a80c6`, IP exposed
- − Demographic signals match my persona: nothing present
- − Page reflects current campaign/season: nothing present
- − Loyalty/membership benefits visible: none
- − Offer feels honest: not applicable — no offer exists

The only point awarded is the baseline 1 for the page loading at all. Everything else is a hard miss.

## 3. What's Working

- **Logo renders correctly** — the Dick's Sporting Goods logo is visible and intact, so I at least know I'm on the right domain.
- **Error message is readable** — the copy is plain English ("We are working on the problem. Please try accessing the site again after 12 hours."), not a raw HTTP 500 stack trace, so I'm not totally confused about what happened.

## 4. What's Weak

- **Complete content failure** — no hero, no navigation, no categories, no deals, nothing. I can't shop for anything.
- **"Try again after 12 hours" is brutal** — that's not a reassurance, that's an admission the site is broken for half a day. For someone juggling three kids' sports schedules, I don't have 12 hours of patience; I'm heading to the DICK'S down the street or jumping to Academy Sports.
- **Error code + IP address exposed to end users** — `Error: 0.23a7cb17.1778440865.728a80c6 IP: 47.41.15.19` is visible in bold. That's technical debt leaking into the customer-facing experience.
- **No fallback CTA** — not even a "find a store near you" link or a phone number. Zero recovery path offered.
- **ScoreCard loyalty program completely invisible** — I've got points sitting in that account. Not a single hook or redirect to help me feel the brand relationship.

## 5. Recommendations

- **Add a graceful fallback page** with a store-locator link, a ScoreCard account login button, and maybe a toll-free number — give me somewhere to go instead of a dead end.
- **Strip the raw error code and IP address** from the customer-facing error message immediately; that's a security and professionalism issue.
- **Change "12 hours" to a softer or vague ETA** like "We'll be back shortly" — telling a customer the site is broken for half a day is a conversion killer.
- **Surface a mobile app install CTA** on the error page — if the site is down, at least push me to the app where I can still browse and buy.

## 6. Bottom Line

I'm closing this tab and calling the store — there's literally nothing here to browse, and I'm not waiting 12 hours to buy cleats.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Oops, Something Went Wrong.`
- **Hero image:** None — white error card on a gray background, no product or lifestyle imagery
- **Primary CTA:** None — no button is present; visible above the fold? **no**
- **Scores (1-10):** Clarity `1`, Relevance to me `1`, Visual hierarchy `2`, On-brand `1`
- **Strengths:**
  - Logo is recognizable and renders cleanly
  - Error message is human-readable, not a code dump
- **Weaknesses:**
  - No product, imagery, offer, or navigation of any kind
  - Exposed technical error code and IP address undermine brand trust

## 8. Promotional & Urgency Cues

- **Active promos:** None
- **Urgency / scarcity:** None — the only time-bounded copy is "try again after 12 hours," which works against urgency
- **Loyalty hooks:** None — ScoreCard is completely absent
- **Honesty check:** Showing `IP: 47.41.15.19` in a customer-facing error is a transparency/security concern that should be addressed; feels sloppy, not manipulative, but it erodes confidence

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero at all
- − Easy to reach my category: no navigation visible
- − Eye-catching imagery in my category: no imagery present
- − Promo banner I would use: no banners present
- − Page renders cleanly: fails — full site error with error code displayed
- − Imagery includes someone like me: no imagery present
- − Copy register matches mine: the error copy is neutral, but there's nothing else to evaluate
- − Trust signals visible: none — ScoreCard, reviews, free shipping — all absent
- − New/hot rail in my category: none
- − No dark patterns: no modal or pop-up harassment, but the "12 hours" message is demoralizing

**Score:** `1/10` — no criteria genuinely satisfied; the lone base point reflects that the page did technically render something.
**Rationale:** There is no content to engage with. The error card offers zero pathway forward, and "come back in 12 hours" is about as engaging as a closed sign.

## 10. Conversion Likelihood

- − CTA in my category: none present
- − Unambiguous CTA copy: none present
- − Active price reduction or member pricing: none present
- − Time-bounded credible deadline: none present
- − Reachable free-shipping threshold: none present
- − Specific product page one tap away: none present
- − Sizing/fit info accessible: none present
- − Returns/exchanges mentioned: none present
- − Reviews/ratings visible: none present
- − Trust/security signals: none — ironically the only "security" signal is a raw IP address in the error

**Score:** `1/10` — baseline only; not a single conversion criterion is met.
**Rationale:** There is nothing to convert on. The site is completely non-functional from a commerce perspective, and no recovery path exists to salvage even a browse session.

## 11. Evidence

- **Error modal / primary element:** Dick's Sporting Goods logo above the error card
- **Error heading:** "Oops, Something Went Wrong." in blue, centered
- **Body copy line 1:** "We are working on the problem. Please try accessing the site again after 12 hours."
- **Body copy line 2:** "We appreciate your patience and understanding."
- **Technical error string (bold):** `Error: 0.23a7cb17.1778440865.728a80c6 IP: 47.41.15.19`
- **Background:** Flat light-gray (#f4f4f4 or similar), completely empty below the card
- **No navigation bar, no category links, no promotional banners, no hero, no product rails, no footer** — the remainder of the viewport is blank gray
- **Visible bugs / friction:** Full site outage; raw error code and customer IP exposed in production error page; no fallback UI, no store-finder, no app redirect
## Recent history

- [[2026-05-09-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e]] — 1/10 (2026-05-09)
- [[2026-05-08-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e]] — 1/10 (2026-05-08)
- [[2026-05-07-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e]] — 1/10 (2026-05-07)

