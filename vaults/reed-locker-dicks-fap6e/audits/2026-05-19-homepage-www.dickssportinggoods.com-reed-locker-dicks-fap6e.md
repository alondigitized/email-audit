---
slug: 2026-05-19-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e
type: site
date: 2026-05-19
persona: reed-locker-dicks-fap6e
score: "1/10"
sender: www.dickssportinggoods.com
subject: Homepage snapshot · www.dickssportinggoods.com · 2026-05-19
tags: [site-journey, score-1, sender/www-dickssportinggoods-com]
---
# Homepage snapshot · www.dickssportinggoods.com · 2026-05-19
**Score:** 1/10 · **Type:** Site journey · **2026-05-19**
## Executive summary

- I opened Dick's on my phone and got a wall of gray and an error card — "Oops, Something Went Wrong." That's the whole homepage. The brand logo is there, the error code is there, and everything else is a blank gray expanse that goes on forever. This isn't a Dick's problem, it looks like a geo-block or CDN hiccup, but from where I'm standing I've got nothing to shop, nothing to click, and a 12-hour wait message that tells me they already know about it.

## What's working

- **Brand logo renders correctly** — the Dick's Sporting Goods logo in the error card is clean and recognizable, so I at least know whose site just let me down.
- **Error message is plain English** — "We are working on the problem. Please try accessing the site again after 12 hours." No jargon, no 500 code dumped on me cold. I know roughly when to come back.

## What's weak

- **Total homepage failure** — there is zero merchandising, zero navigation, zero fallback content. A multi-billion-dollar retailer should have a static cached fallback for outages, especially during a Memorial Day sales window.
- **12-hour ETA is a conversion killer** — telling me to wait half a day is basically telling me to go to Academy or Field & Stream right now.
- **Raw error ID exposed to end users** — `Error: 0.21a7cb17.1779194888.37c28ecd IP: 75.140.9.0` is pure internal debug noise. Showing my IP address on a public-facing error page is sloppy and slightly unsettling.
- **Infinite gray void below the error card** — the page body extends the full length of a normal homepage (several thousand pixels of nothing), suggesting the shell loaded but every content module failed silently.
- **No "notify me when we're back" CTA** — I'd give them my email right now. Instead they just told me to check back manually in 12 hours.

## Recommendations

- **Ship a static error page with a minimal nav and an email-capture field** — even a simple "We'll text you when we're back — enter your number" would salvage the moment and capture leads instead of pushing traffic to competitors.
- **Remove the raw error ID and IP address from the customer-facing error card** — swap it for a friendly support reference number if you need one for troubleshooting tickets.
- **Cap the page height on error states** — clip the body to the error card height so there's no empty gray scroll pit that makes the site look even more broken than it is.
- **Set a CDN-level fallback with a cached promotional tile** — if the origin is down, serve at minimum a ScoreCard login prompt and a link to the app; don't let the CDN pass a blank shell to mobile browsers.

## Full review
## 1. Executive Summary

I opened Dick's on my phone and got a wall of gray and an error card — "Oops, Something Went Wrong." That's the whole homepage. The brand logo is there, the error code is there, and everything else is a blank gray expanse that goes on forever. This isn't a Dick's problem, it looks like a geo-block or CDN hiccup, but from where I'm standing I've got nothing to shop, nothing to click, and a 12-hour wait message that tells me they already know about it.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery explicitly speaks to your persona: no hero at all, just an error card
- − Returning-shopper hook visible: none
- − Concrete offer above the fold: none
- − Unmistakable primary CTA: none
- − Visual hierarchy clear: n/a — single error card on gray
- − No render bugs: **fails** — the entire homepage is a broken state; the rest of the viewport is a miles-long gray void
- − Demographic signals match persona: no content, so no match
- − Page reflects current season/campaign: no content
- − Loyalty / membership benefits visible: none
- − Offer feels honest: no offer to evaluate

+ 1 baseline point per rubric = **1/10**. Zero rubric criteria are satisfied. The only thing visible is the Dick's logo, the error headline, a 12-hour ETA message, and a raw error ID (`0.21a7cb17.1779194888.37c28ecd IP: 75.140.9.0`). That raw error string is the only "content" below the fold.

## 3. What's Working

- **Brand logo renders correctly** — the Dick's Sporting Goods logo in the error card is clean and recognizable, so I at least know whose site just let me down.
- **Error message is plain English** — "We are working on the problem. Please try accessing the site again after 12 hours." No jargon, no 500 code dumped on me cold. I know roughly when to come back.

## 4. What's Weak

- **Total homepage failure** — there is zero merchandising, zero navigation, zero fallback content. A multi-billion-dollar retailer should have a static cached fallback for outages, especially during a Memorial Day sales window.
- **12-hour ETA is a conversion killer** — telling me to wait half a day is basically telling me to go to Academy or Field & Stream right now.
- **Raw error ID exposed to end users** — `Error: 0.21a7cb17.1779194888.37c28ecd IP: 75.140.9.0` is pure internal debug noise. Showing my IP address on a public-facing error page is sloppy and slightly unsettling.
- **Infinite gray void below the error card** — the page body extends the full length of a normal homepage (several thousand pixels of nothing), suggesting the shell loaded but every content module failed silently.
- **No "notify me when we're back" CTA** — I'd give them my email right now. Instead they just told me to check back manually in 12 hours.

## 5. Recommendations

- **Ship a static error page with a minimal nav and an email-capture field** — even a simple "We'll text you when we're back — enter your number" would salvage the moment and capture leads instead of pushing traffic to competitors.
- **Remove the raw error ID and IP address from the customer-facing error card** — swap it for a friendly support reference number if you need one for troubleshooting tickets.
- **Cap the page height on error states** — clip the body to the error card height so there's no empty gray scroll pit that makes the site look even more broken than it is.
- **Set a CDN-level fallback with a cached promotional tile** — if the origin is down, serve at minimum a ScoreCard login prompt and a link to the app; don't let the CDN pass a blank shell to mobile browsers.

## 6. Bottom Line

I'm closing this tab and checking Field & Stream — I've got a lacrosse tournament this weekend and I'm not waiting 12 hours for Dick's to get their act together.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Oops, Something Went Wrong.`
- **Hero image:** Dick's Sporting Goods logo centered inside a white error card on a gray background — no lifestyle imagery, no product, no model
- **Primary CTA:** none — no button of any kind is visible above the fold or anywhere on the page
- **Scores (1-10):** Clarity `2`, Relevance to you `1`, Visual hierarchy `3`, On-brand `2`
- **Strengths:**
  - Error message is written in plain, calm language — doesn't panic the user
  - Logo renders cleanly, so brand identity at least survives the outage
- **Weaknesses:**
  - Zero merchandising, zero navigation, zero reason to stay
  - No CTA, no fallback content, no path to conversion under any circumstance

## 8. Promotional & Urgency Cues

- **Active promos:** none visible
- **Urgency / scarcity:** none visible (ironic — the only urgency is "go somewhere else before your tournament")
- **Loyalty hooks:** none visible — no ScoreCard callout, no member pricing, nothing
- **Honesty check:** The raw IP address (`IP: 75.140.9.0`) exposed in the error message is mildly unsettling — it's not manipulative, but it's sloppy enough that a less tech-comfortable shopper might think they've been hacked

## 9. Engagement Likelihood

- − Hero relates to my focus area: error page — no sports, no cleat, no team gear whatsoever
- − Easy to reach my category: no navigation visible at all
- − Eye-catching imagery in my category: no imagery period
- − Promo banner I would use: none visible
- − Page renders cleanly: fails — the entire content area is a broken state with an endless gray void
- − Imagery includes someone like me: no imagery
- − Copy register matches mine: error copy is neutral/functional, not targeted to me
- − Trust signals visible: none — no review count, no badge, no returns callout
- − New / hot rail in my category: nothing
- − No dark patterns: no dark patterns, but only because there's no content at all; exposing my IP is a mild red flag

**Score:** `1/10` — only the baseline point. Not a single engagement signal is present.
**Rationale:** There is literally nothing to engage with. The page is an error card surrounded by gray emptiness. I'm bouncing instantly.

## 10. Conversion Likelihood

- − CTA in my category: no CTA exists anywhere on the page
- − Unambiguous CTA copy: none
- − Active price reduction or member pricing: none visible
- − Time-bounded credible deadline: none visible
- − Reachable free-shipping threshold: none visible
- − Specific product page one tap away: not possible — there is no navigation
- − Sizing / fit info accessible: not accessible
- − Returns / exchanges mentioned: not mentioned
- − Reviews / ratings visible: none
- − Trust / security signals: none

**Score:** `1/10` — baseline only. Zero conversion criteria met.
**Rationale:** I cannot add anything to a cart, tap any CTA, or navigate anywhere. The site simply doesn't exist from a commerce standpoint at this moment.

## 11. Evidence

Visible modules in scroll order:

- **Error card (only module):** White card, centered, Dick's logo at top, "Oops, Something Went Wrong." headline in blue, two lines of plain-English body copy ("We are working on the problem. Please try accessing the site again after 12 hours. / We appreciate your patience and understanding."), raw error string in bold (`Error: 0.21a7cb17.1779194888.37c28ecd IP: 75.140.9.0`)
- **Empty gray body:** Extends for the full height of what appears to be a normal homepage shell — no content modules loaded, no visible nav, no footer, just gray background for thousands of pixels
- **Bugs / friction / clarity issues visible in screenshot:**
  - Full homepage shell rendered with no content — every content slot failed silently
  - Raw internal error ID and visitor IP exposed to end user
  - No fallback navigation, no skip-to-app link, no email capture
  - Page height implies content was expected but never arrived — suggests a JS-dependent rendering architecture with no static fallback
## Recent history

- [[2026-05-17-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e]] — 1/10 (2026-05-17)
- [[2026-05-16-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e]] — 1/10 (2026-05-16)
- [[2026-05-14-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e]] — 1/10 (2026-05-14)

