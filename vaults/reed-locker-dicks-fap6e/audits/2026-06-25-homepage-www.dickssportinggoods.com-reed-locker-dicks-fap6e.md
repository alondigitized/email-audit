---
slug: 2026-06-25-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e
type: site
date: 2026-06-25
persona: reed-locker-dicks-fap6e
score: "1/10"
sender: www.dickssportinggoods.com
subject: Homepage snapshot · www.dickssportinggoods.com · 2026-06-25
tags: [site-journey, score-1, sender/www-dickssportinggoods-com]
---
# Homepage snapshot · www.dickssportinggoods.com · 2026-06-25
**Score:** 1/10 · **Type:** Site journey · **2026-06-25**
## Executive summary

- This isn't a homepage — it's an error page. The site served me a full-screen "Oops, Something Went Wrong" message with a Dick's logo and a raw error code (`0.2ca7cb17.1782382875.5ae8a4aa IP: 75.140.9.0`). There's no hero, no offers, no navigation — nothing. As a dad running to resupply cleats before Saturday's tournament, this is a dead end.

## What's working

- The Dick's Sporting Goods logo renders correctly — I at least know I'm on the right domain.
- The error message is plain English and tells me to try again in 12 hours, which is at least direct.

## What's weak

- **The entire homepage failed to load** — I get a generic error card and an exposed internal error token. That's not a homepage, that's a fire alarm.
- **No fallback experience** — a site like Dick's should have a cached/static fallback serving at minimum the nav and a search bar. There's nothing.
- **Raw error string is visible to customers** — `Error: 0.2ca7cb17.1782382875.5ae8a4aa IP: 75.140.9.0` is exposed in bold on the page. That's sloppy and hints at a CDN or edge config problem.
- **No retry CTA or redirect** — not even a "try the app" or phone-number fallback. I'm just stuck.
- **Twelve-hour recovery window** is brutal. That's "we'll get to it tomorrow" energy. I've got a tournament Saturday and I'm shopping now.

## Recommendations

- **Ship a static fallback page** that serves nav, a search bar, and a store-locator link even when the dynamic site is down. Something like "Site maintenance — find a store near you" keeps me from bouncing permanently.
- **Strip the raw error token from the customer-facing view** — log it server-side, not in the H4 on the page. The error code means nothing to me and signals "this company has their stuff together" negatively.
- **Replace the 12-hour timeline copy with something softer** — "We'll be back shortly" lands better than committing to a half-day outage window you might not hit.
- **Add a "Try our app" or phone CTA** — a dead site with no escape valve is a conversion killer. Give me somewhere to go.

## Full review
## 1. Executive Summary

This isn't a homepage — it's an error page. The site served me a full-screen "Oops, Something Went Wrong" message with a Dick's logo and a raw error code (`0.2ca7cb17.1782382875.5ae8a4aa IP: 75.140.9.0`). There's no hero, no offers, no navigation — nothing. As a dad running to resupply cleats before Saturday's tournament, this is a dead end.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery speaks to my persona: no hero exists
- − Returning-shopper hook visible: none
- − Concrete offer above the fold: none
- − Unmistakable primary CTA above the fold: none
- − Clear visual hierarchy: error card is centered but there's nothing to buy
- − No render bugs: this IS a render bug — the entire site failed to load
- − Demographic signals match persona: N/A
- − Current campaign/season visible: N/A
- − Loyalty/membership benefits visible: none
- − Honest offer: N/A — there's no offer

Score starts at 1. Zero additional signals apply. **1/10**.

## 3. What's Working

- The Dick's Sporting Goods logo renders correctly — I at least know I'm on the right domain.
- The error message is plain English and tells me to try again in 12 hours, which is at least direct.

## 4. What's Weak

- **The entire homepage failed to load** — I get a generic error card and an exposed internal error token. That's not a homepage, that's a fire alarm.
- **No fallback experience** — a site like Dick's should have a cached/static fallback serving at minimum the nav and a search bar. There's nothing.
- **Raw error string is visible to customers** — `Error: 0.2ca7cb17.1782382875.5ae8a4aa IP: 75.140.9.0` is exposed in bold on the page. That's sloppy and hints at a CDN or edge config problem.
- **No retry CTA or redirect** — not even a "try the app" or phone-number fallback. I'm just stuck.
- **Twelve-hour recovery window** is brutal. That's "we'll get to it tomorrow" energy. I've got a tournament Saturday and I'm shopping now.

## 5. Recommendations

- **Ship a static fallback page** that serves nav, a search bar, and a store-locator link even when the dynamic site is down. Something like "Site maintenance — find a store near you" keeps me from bouncing permanently.
- **Strip the raw error token from the customer-facing view** — log it server-side, not in the H4 on the page. The error code means nothing to me and signals "this company has their stuff together" negatively.
- **Replace the 12-hour timeline copy with something softer** — "We'll be back shortly" lands better than committing to a half-day outage window you might not hit.
- **Add a "Try our app" or phone CTA** — a dead site with no escape valve is a conversion killer. Give me somewhere to go.

## 6. Bottom Line

I'm gone — I'll be at the Field & Stream site in about 15 seconds, or I'll just drive to the store, because Dick's online gave me nothing to work with today.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Oops, Something Went Wrong.`
- **Hero image:** No image. Gray background with a centered white card, Dick's logo at top, error text below.
- **Primary CTA:** None — no button exists above the fold or anywhere on the page.
- **Scores (1-10):** Clarity `2`, Relevance to you `1`, Visual hierarchy `3`, On-brand `1`
- **Strengths:**
  - The logo is visible and recognizable — I know it's Dick's.
  - The card layout is clean and legible, so the error message itself is readable.
- **Weaknesses:**
  - There is no homepage at all — this is a failure state masquerading as a destination.
  - Absolutely zero brand personality, product content, or reason for me to stay.

## 8. Promotional & Urgency Cues

- **Active promos:** None visible
- **Urgency / scarcity:** None — the only time reference is "please try again after 12 hours," which is the opposite of urgency
- **Loyalty hooks:** None visible — no ScoreCard mention, no member pricing, nothing
- **Honesty check:** The exposed error code (`Error: 0.2ca7cb17...`) in bold on the page feels like a technical slip that shouldn't be customer-facing. Not manipulative, just unpolished and slightly confidence-eroding.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero, full stop
- − Easy to reach my category: no navigation visible at all
- − Eye-catching imagery in my category: no imagery of any kind
- − Promo banner I would use: none
- − Page renders cleanly: hard no — the whole site errored out
- − Imagery includes someone like me: N/A
- − Copy register matches mine: the error text is plain but irrelevant
- − Trust signals visible: none
- − New / hot rail in my category: none
- − No dark patterns: technically no dark patterns, but a site-down error with a 12-hour ETA is its own kind of friction

**Score:** `1/10` — zero "+" signals.
**Rationale:** There is nothing on this page to engage with. The site failed at the infrastructure level and offered no fallback, no nav, and no path forward for a customer who showed up ready to buy.

## 10. Conversion Likelihood

- − CTA in my category: none
- − Unambiguous CTA copy: no CTA at all
- − Active price reduction or member pricing: none
- − Time-bounded credible deadline: none
- − Reachable free-shipping threshold: none
- − Specific product page one tap away: nothing is one tap away
- − Sizing / fit info accessible: N/A
- − Returns / exchanges mentioned: none
- − Reviews / ratings visible: none
- − Trust / security signals: none

**Score:** `1/10` — zero "+" signals.
**Rationale:** You cannot convert on a broken page. Every single conversion signal is absent because the homepage never rendered.

## 11. Evidence

- **Hero / primary value prop:** Absent — replaced by error card
- **Dick's Sporting Goods logo:** Rendered correctly in the center of the error card
- **Error headline:** "Oops, Something Went Wrong." in large blue text
- **Body copy:** "We are working on the problem. Please try accessing the site again after 12 hours. We appreciate your patience and understanding."
- **Exposed error string:** `Error: 0.2ca7cb17.1782382875.5ae8a4aa IP: 75.140.9.0` in bold — visible, customer-facing, should not be here
- **Featured categories:** None visible
- **Promotional banners or strips:** None visible
- **Loyalty / rewards section:** None visible
- **Editorial / lifestyle modules:** None visible
- **New-arrivals or best-seller rails:** None visible
- **Footer credibility:** None visible
- **Bugs / friction / clarity issues:** The entire homepage failed to render. The page below the error card is a blank gray expanse stretching the full scroll height — no content whatsoever. Raw error token is exposed in the UI.
## Recent history

- [[2026-06-11-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e]] — 1/10 (2026-06-11)
- [[2026-06-04-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e]] — 1/10 (2026-06-04)
- [[2026-05-28-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e]] — 1/10 (2026-05-28)

