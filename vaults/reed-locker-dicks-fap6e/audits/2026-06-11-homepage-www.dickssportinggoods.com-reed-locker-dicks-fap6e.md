---
slug: 2026-06-11-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e
type: site
date: 2026-06-11
persona: reed-locker-dicks-fap6e
score: "1/10"
sender: www.dickssportinggoods.com
subject: Homepage snapshot · www.dickssportinggoods.com · 2026-06-11
tags: [site-journey, score-1, sender/www-dickssportinggoods-com]
---
# Homepage snapshot · www.dickssportinggoods.com · 2026-06-11
**Score:** 1/10 · **Type:** Site journey · **2026-06-11**
## Executive summary

- I pulled up Dick's on my phone to check if they had any end-of-season cleat deals before the fall travel ball registration hits, and the site is completely down. The whole homepage is a white error card — "Oops, Something Went Wrong" — with a 12-hour warning and a raw error code. That's it. Nothing to browse, nothing to buy, nowhere to go.

## What's working

- The error page itself renders legibly — Dick's logo is visible, the message is readable, no cascading layout breakage on top of the outage
- The language is neutral ("We appreciate your patience") — no corporate-speak that would irritate me further

## What's weak

- Completely zero recovery path — no "Try again" button, no link to the app, no phone number, no store-locator fallback for someone who needs to just walk in today
- "Please try again after 12 hours" is a brutal message when I'm trying to resupply cleats for a tournament this weekend — that's a lost transaction
- The raw error string (`Error: 0.2ca7cb17.1781173653.7324ea03 IP: 75.140.9.0`) is exposed to every customer — that's sloppy and makes Dick's look less trustworthy, not more
- No ScoreCard mention, no way to even check my rewards balance offline, no email capture to notify me when the site is back

## Recommendations

- Add a "Find a store near you" CTA to the error page — I'm a "shop in-store for fit, .com for resupply" guy anyway; at minimum keep me in the Dick's ecosystem
- Show a simple email capture ("Notify me when we're back") — turns a dead-end bounce into a reactivation list
- Kill the raw error code from customer-facing output — keep it in logs, not on my phone screen
- Set a realistic ETA or a status page link so I'm not stuck refreshing for 12 hours hoping for a change

## Full review
## 1. Executive Summary

I pulled up Dick's on my phone to check if they had any end-of-season cleat deals before the fall travel ball registration hits, and the site is completely down. The whole homepage is a white error card — "Oops, Something Went Wrong" — with a 12-hour warning and a raw error code. That's it. Nothing to browse, nothing to buy, nowhere to go.

## 2. Business Impact Score (1-10)

**1/10**

- − hero copy speaks to my persona: no hero, no copy, no imagery — just an error card
- − returning-shopper hook visible: ScoreCard login, rewards balance — none of it exists on this screen
- − concrete offer above the fold: zero, the page is blank except for the error
- − unmistakable primary CTA: no button, no link, nothing to tap
- − visual hierarchy is clear: hierarchy is irrelevant when the only content is an apology message
- − no render bugs: the site is down — this IS the bug
- − demographic signals match my persona: no imagery at all
- − page reflects current campaign/season: no campaign content loaded
- − loyalty/membership benefits visible without scrolling: nothing
- − offer feels honest: n/a, there is no offer

Score starts at 1. Zero additional criteria met. **1/10.**

## 3. What's Working

- The error page itself renders legibly — Dick's logo is visible, the message is readable, no cascading layout breakage on top of the outage
- The language is neutral ("We appreciate your patience") — no corporate-speak that would irritate me further

## 4. What's Weak

- Completely zero recovery path — no "Try again" button, no link to the app, no phone number, no store-locator fallback for someone who needs to just walk in today
- "Please try again after 12 hours" is a brutal message when I'm trying to resupply cleats for a tournament this weekend — that's a lost transaction
- The raw error string (`Error: 0.2ca7cb17.1781173653.7324ea03 IP: 75.140.9.0`) is exposed to every customer — that's sloppy and makes Dick's look less trustworthy, not more
- No ScoreCard mention, no way to even check my rewards balance offline, no email capture to notify me when the site is back

## 5. Recommendations

- Add a "Find a store near you" CTA to the error page — I'm a "shop in-store for fit, .com for resupply" guy anyway; at minimum keep me in the Dick's ecosystem
- Show a simple email capture ("Notify me when we're back") — turns a dead-end bounce into a reactivation list
- Kill the raw error code from customer-facing output — keep it in logs, not on my phone screen
- Set a realistic ETA or a status page link so I'm not stuck refreshing for 12 hours hoping for a change

## 6. Bottom Line

I'm closing this tab and going straight to Public Lands or pulling up the Dick's app — there is literally nothing here to keep me.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Oops, Something Went Wrong.`
- **Hero image:** none — plain light-gray background with a centered white card containing the Dick's logo and error text
- **Primary CTA:** none — no button of any kind visible above or below the fold
- **Scores (1-10):** Clarity `2`, Relevance to you `1`, Visual hierarchy `3`, On-brand `2`
- **Strengths:**
  - The Dick's logo is recognizable and renders correctly, so at least I know I'm on the right site
  - Message is grammatically clear
- **Weaknesses:**
  - Zero path forward — no nav, no CTA, no fallback
  - A 12-hour outage window with no workaround communicated is a trust hit, especially mid-season

## 8. Promotional & Urgency Cues

- **Active promos:** none — page is entirely non-functional
- **Urgency / scarcity:** none visible
- **Loyalty hooks:** none — ScoreCard is not mentioned anywhere on screen
- **Honesty check:** Exposing a raw internal error code (`Error: 0.2ca7cb17.1781173653.7324ea03 IP: 75.140.9.0`) to consumers feels careless. The "12 hours" language is honest but punishing — no caveat, no alternative offered.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero exists — travel sports content, cleats, ScoreCard — none of it loaded
- − Easy to reach my category: no navigation of any kind is present
- − Eye-catching imagery in my category: zero product imagery
- − Promo banner I would use: no banners
- − Page renders cleanly: the error card itself renders fine, but the actual homepage failed to load — this is a hard failure
- − Imagery includes someone like me: no imagery at all
- − Copy register matches mine: the error message is generic, doesn't speak to me as a repeat customer
- − Trust signals visible: none — no reviews, no "free returns," nothing
- − New / hot rail in my category: no content rails
- − No dark patterns: there are no dark patterns, but only because there is no actual content — not a win

**Score:** `1/10` — zero criteria met; this is the floor.
**Rationale:** There is nothing to engage with. The entire page is a single error card. The moment a regular Dick's customer like me hits this I'm gone in under five seconds.

## 10. Conversion Likelihood

- − CTA in my category: no CTA exists
- − Unambiguous CTA copy: no CTA at all
- − Active price reduction or member pricing: no offers loaded
- − Time-bounded credible deadline: none
- − Reachable free-shipping threshold: not mentioned
- − Specific product page one tap away: impossible — there are no links
- − Sizing / fit info accessible: not present
- − Returns / exchanges mentioned: not present
- − Reviews / ratings visible: not present
- − Trust / security signals: not present

**Score:** `1/10` — zero criteria met.
**Rationale:** You can't convert on a blank error page. I had a real purchase intent coming in — cleat resupply before fall season — and Dick's sent me to a dead end with no recovery path.

## 11. Evidence

Visible modules on the page (scroll order):

- **Dick's Sporting Goods logo** — centered, recognizable, teal-and-white, renders correctly
- **Error card** — white card with drop shadow, centered on gray background
  - H1: "Oops, Something Went Wrong." (blue text)
  - Body copy: "We are working on the problem. Please try again after 12 hours."
  - Secondary copy: "We appreciate your patience and understanding."
  - Error string (bold): `Error: 0.2ca7cb17.1781173653.7324ea03 IP: 75.140.9.0`
- **Remainder of viewport** — entirely blank gray background, no content, no navigation, no footer
- **Bugs / friction:** Entire homepage is non-functional. Raw internal error token and IP address exposed to end users. No recovery CTA, no store locator, no app redirect, no email capture. "12 hours" timeline with zero workaround.
## Recent history

- [[2026-06-04-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e]] — 1/10 (2026-06-04)
- [[2026-05-28-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e]] — 1/10 (2026-05-28)
- [[2026-05-23-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e]] — 1/10 (2026-05-23)

