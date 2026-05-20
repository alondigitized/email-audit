---
slug: 2026-05-20-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e
type: site
date: 2026-05-20
persona: reed-locker-dicks-fap6e
score: "1/10"
sender: www.dickssportinggoods.com
subject: Homepage snapshot · www.dickssportinggoods.com · 2026-05-20
tags: [site-journey, score-1, sender/www-dickssportinggoods-com]
---
# Homepage snapshot · www.dickssportinggoods.com · 2026-05-20
**Score:** 1/10 · **Type:** Site journey · **2026-05-20**
## Executive summary

- I pulled up dickssportinggoods.com to check on cleat deals for my youngest's spring season and got hit with a full error page — no homepage, no nav, nothing. What I'm looking at is a white error card on a gray background with the Dick's logo and the message "Oops, Something Went Wrong." The site is telling me to try again in 12 hours. That's a dead end. For a retailer this size, during what should be peak spring/travel-sports season, this is a real problem.

## What's working

- **The Dick's logo renders correctly** — at least I know I'm on the right domain and not a phishing page.
- **The error message is human-readable** — "Oops, Something Went Wrong" is plain English, not a raw HTTP 500, which is marginally better than nothing.
- **The 12-hour recovery estimate is included** — gives me a rough window, even if it's frustrating.

## What's weak

- **Total homepage failure** — no content, no categories, no nav, no offers. I came to buy cleats and I got a wall.
- **Raw error/IP string displayed** — `Error: 0.2ca7cb17.1779282029.46d91db IP: 75.140.9.0` is shown to the customer. That's technical noise that means nothing to me and looks sloppy.
- **No fallback CTA** — no "check our app," no "call a store," no "browse anyway." They just sent me home.
- **No loyalty acknowledgment** — I'm a ScoreCard member. A simple "sorry for the inconvenience, your rewards are safe" would go a long way. Instead: silence.
- **The gray void below the error card** — the page is absurdly tall (the screenshot scrolls for pages of empty gray). That's either a layout bug or lazy error-page templating.

## Recommendations

- **Build a real error page with a fallback experience** — show the top categories (Team Sports, Footwear, Apparel) as static links even when the main CMS is down. Static HTML costs nothing and keeps people from bouncing permanently.
- **Strip the raw error code from customer-facing output** — log it server-side, show me a reference number if needed, but `0.2ca7cb17.1779282029.46d91db IP: 75.140.9.0` looks like a broken backend, not a polished brand.
- **Add a loyalty reassurance line** — one sentence: "Your ScoreCard points and rewards are secure — come back soon." Costs nothing, saves a call to customer service.
- **Fix the empty-page height** — the error card sits at the top of what appears to be a full-length page shell with nothing in it. Constrain the error container to the viewport so it doesn't look broken beyond the fold.

## Full review
## 1. Executive Summary

I pulled up dickssportinggoods.com to check on cleat deals for my youngest's spring season and got hit with a full error page — no homepage, no nav, nothing. What I'm looking at is a white error card on a gray background with the Dick's logo and the message "Oops, Something Went Wrong." The site is telling me to try again in 12 hours. That's a dead end. For a retailer this size, during what should be peak spring/travel-sports season, this is a real problem.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery explicitly speaks to your persona: no hero at all, error page only
- − Returning-shopper hook visible: nothing — no loyalty CTA, no ScoreCard mention, no recently-viewed
- − One concrete offer visible above the fold: no offers whatsoever
- − One unmistakable primary CTA above the fold: no CTA present
- − Visual hierarchy is clear: the only hierarchy is "logo → error headline → body text"
- − No render bugs: the page IS a render failure — error code `0.2ca7cb17.1779282029.46d91db` is displayed raw on-screen
- − Demographic signals match persona: no content at all
- − Page reflects current campaign / season: no campaign visible
- − Loyalty / membership benefits visible: none
- − Offer feels honest: no offer to evaluate

The baseline score is 1. Zero rubric criteria are met. Score stays at **1/10**.

## 3. What's Working

- **The Dick's logo renders correctly** — at least I know I'm on the right domain and not a phishing page.
- **The error message is human-readable** — "Oops, Something Went Wrong" is plain English, not a raw HTTP 500, which is marginally better than nothing.
- **The 12-hour recovery estimate is included** — gives me a rough window, even if it's frustrating.

## 4. What's Weak

- **Total homepage failure** — no content, no categories, no nav, no offers. I came to buy cleats and I got a wall.
- **Raw error/IP string displayed** — `Error: 0.2ca7cb17.1779282029.46d91db IP: 75.140.9.0` is shown to the customer. That's technical noise that means nothing to me and looks sloppy.
- **No fallback CTA** — no "check our app," no "call a store," no "browse anyway." They just sent me home.
- **No loyalty acknowledgment** — I'm a ScoreCard member. A simple "sorry for the inconvenience, your rewards are safe" would go a long way. Instead: silence.
- **The gray void below the error card** — the page is absurdly tall (the screenshot scrolls for pages of empty gray). That's either a layout bug or lazy error-page templating.

## 5. Recommendations

- **Build a real error page with a fallback experience** — show the top categories (Team Sports, Footwear, Apparel) as static links even when the main CMS is down. Static HTML costs nothing and keeps people from bouncing permanently.
- **Strip the raw error code from customer-facing output** — log it server-side, show me a reference number if needed, but `0.2ca7cb17.1779282029.46d91db IP: 75.140.9.0` looks like a broken backend, not a polished brand.
- **Add a loyalty reassurance line** — one sentence: "Your ScoreCard points and rewards are secure — come back soon." Costs nothing, saves a call to customer service.
- **Fix the empty-page height** — the error card sits at the top of what appears to be a full-length page shell with nothing in it. Constrain the error container to the viewport so it doesn't look broken beyond the fold.

## 6. Bottom Line

I'm leaving and pulling up the app or driving to the store — there's nothing here to keep me.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Oops, Something Went Wrong.`
- **Hero image:** Dick's Sporting Goods logo on a white card; no lifestyle image, no product, no model
- **Primary CTA:** none — no button visible above the fold, yes/no: **no**
- **Scores (1-10):** Clarity `3`, Relevance to you `1`, Visual hierarchy `3`, On-brand `2`
- **Strengths:**
  - Logo is clean and correctly rendered — confirms I'm on the right site
  - Copy is plain English, not a wall of technical jargon
- **Weaknesses:**
  - Zero relevance to me or my shopping purpose — this is a dead page
  - No action path forward, no alternative channel suggested

## 8. Promotional & Urgency Cues

- **Active promos:** none
- **Urgency / scarcity:** none (the only time reference is "try again after 12 hours" — urgency working against the brand)
- **Loyalty hooks:** none — no ScoreCard mention, no member pricing, nothing
- **Honesty check:** The raw error string `Error: 0.2ca7cb17.1779282029.46d91db IP: 75.140.9.0` is exposed on the page — not manipulative, but unprofessional and mildly alarming to a customer who doesn't know what it means

## 9. Engagement Likelihood

- − Hero relates to my focus area: error page, no relevance to team sports or footwear
- − Easy to reach my category: no navigation visible at all
- − Eye-catching imagery in my category: no product or lifestyle imagery
- − Promo banner I would use: no banners
- − Page renders cleanly: hard no — the page IS the render failure, plus raw error code displayed
- − Imagery includes someone like me: no imagery
- − Copy register matches mine: the error copy is fine but there's nothing else to read
- − Trust signals visible: none — no reviews, no badges, no policy links
- − New / hot rail in my category: no content rails
- − No dark patterns: technically no dark patterns, but a totally broken site is its own form of friction

**Score:** `1/10` — should equal 1 + count of "+" bullets above (zero "+" bullets, baseline 1).
**Rationale:** There is no functional homepage here. Zero engagement signals are present, and the only interaction available is closing the tab.

## 10. Conversion Likelihood

- − CTA in my category: no CTA exists
- − Unambiguous CTA copy: no CTA copy at all
- − Active price reduction or member pricing: none visible
- − Time-bounded credible deadline: none (the only deadline works against the brand — "try again in 12 hours")
- − Reachable free-shipping threshold: not mentioned
- − Specific product page one tap away: no — there are zero tappable links to product pages
- − Sizing / fit info accessible: not applicable, no products
- − Returns / exchanges mentioned: not mentioned
- − Reviews / ratings visible: none
- − Trust / security signals: none

**Score:** `1/10` — zero "+" bullets, baseline of 1.
**Rationale:** There is nothing to convert on. The page is a full outage state with no fallback path to purchase, which means every visitor who sees this either bounces or goes to a competitor.

## 11. Evidence

Visible modules in scroll order:

- **Error card (top center):** White rounded box containing Dick's Sporting Goods logo, blue "Oops, Something Went Wrong." heading, two lines of body copy ("We are working on the problem. Please try again after 12 hours. We appreciate your patience and understanding."), and a bold raw error string (`Error: 0.2ca7cb17.1779282029.46d91db IP: 75.140.9.0`)
- **Empty page shell:** The remainder of the visible screenshot — spanning several viewport heights — is a solid gray background with no content, suggesting the page shell loaded but the content layer failed entirely
- **Bugs / friction visible in screenshot:**
  - Full site outage — homepage content did not load
  - Raw internal error code and IP address exposed to end users
  - Massive empty gray canvas below the error card (likely the full-height page shell with no content injected)
  - No nav, no footer, no fallback links of any kind
## Recent history

- [[2026-05-19-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e]] — 1/10 (2026-05-19)
- [[2026-05-17-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e]] — 1/10 (2026-05-17)
- [[2026-05-16-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e]] — 1/10 (2026-05-16)

