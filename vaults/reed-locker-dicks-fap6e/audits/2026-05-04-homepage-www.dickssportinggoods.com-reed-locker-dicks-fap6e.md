---
slug: 2026-05-04-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e
type: site
date: 2026-05-04
persona: reed-locker-dicks-fap6e
score: "1/10"
sender: www.dickssportinggoods.com
subject: Homepage snapshot · www.dickssportinggoods.com · 2026-05-04
tags: [site-journey, score-1, sender/www-dickssportinggoods-com]
---
# Homepage snapshot · www.dickssportinggoods.com · 2026-05-04
**Score:** 1/10 · **Type:** Site journey · **2026-05-04**
## Executive summary

- Dick's Sporting Goods didn't even make it to the homepage — what I got was a full error page: "Oops, Something Went Wrong." with a technical error ID and an IP address printed on screen. For a retailer that I'd normally hit when it's time for new cleats or team gear, this is a dead stop. Zero content, zero offers, zero reason to stay.
- **1/10**
- − Hero copy speaks to my persona: no hero exists — just an error card
- − Returning-shopper hook visible: none
- − Concrete offer above the fold: none
- − Unmistakable primary CTA: none
- − Clear visual hierarchy: the only hierarchy is "logo → error message → error code"
- − No render bugs: FAILED — the entire page is a render failure with a visible error ID (`0.23a7cb17.1777922481.2d045aa4`) and IP address exposed
- − Demographic signals match persona: no content at all
- − Current campaign/season: no content at all
- − Loyalty/membership visible: none
- − Honest offer: no offer to evaluate
- Score is 1 (baseline) with no criteria adding points. Every single signal is absent.

## What's working

- The Dick's Sporting Goods logo renders correctly — at least I know I'm in the right place before hitting the wall.
- The error message is in plain English and gives a reasonable recovery instruction ("try again after 12 hours"), which is better than a blank screen.

## What's weak

- **The entire homepage is a hard error.** Nothing loads. No fallback content, no category nav, no static promotional banner — nothing.
- **Error code and IP address exposed publicly** (`Error: 0.23a7cb17.1777922481.2d045aa4 IP: 47.41.15.19`) — this is bad practice and leaks infrastructure details.
- **No fallback CTA** — not even a "return to homepage" or "try the app" link. I'm just stuck.
- **No loyalty or ScoreCard hook** — if I was trying to check my rewards balance or reorder cleats for next season, I'm completely locked out with no alternate path.
- **12-hour retry window is brutal.** That's a full shopping session lost — probably both mine and the kids'.

## Recommendations

- **Ship a static fallback page** that renders from CDN when origin is down — logo, top nav categories (Team Sports, Footwear, Outdoor), and a basic "we'll be back soon" message. No reason to show a blank gray void.
- **Strip the error ID and IP address** from the consumer-facing error card — that's ops/infra information that belongs in a log, not on screen.
- **Add a ScoreCard / loyalty shortcut** even on the error state — "Check your rewards balance at [app link]" keeps the relationship alive when the site goes down.
- **Surface the app download** as a fallback CTA — a one-liner like "Shop on the DICK'S app while we fix this" costs nothing to add and saves the session.

## Full review
## 1. Executive Summary

Dick's Sporting Goods didn't even make it to the homepage — what I got was a full error page: "Oops, Something Went Wrong." with a technical error ID and an IP address printed on screen. For a retailer that I'd normally hit when it's time for new cleats or team gear, this is a dead stop. Zero content, zero offers, zero reason to stay.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy speaks to my persona: no hero exists — just an error card
- − Returning-shopper hook visible: none
- − Concrete offer above the fold: none
- − Unmistakable primary CTA: none
- − Clear visual hierarchy: the only hierarchy is "logo → error message → error code"
- − No render bugs: FAILED — the entire page is a render failure with a visible error ID (`0.23a7cb17.1777922481.2d045aa4`) and IP address exposed
- − Demographic signals match persona: no content at all
- − Current campaign/season: no content at all
- − Loyalty/membership visible: none
- − Honest offer: no offer to evaluate

Score is 1 (baseline) with no criteria adding points. Every single signal is absent.

## 3. What's Working

- The Dick's Sporting Goods logo renders correctly — at least I know I'm in the right place before hitting the wall.
- The error message is in plain English and gives a reasonable recovery instruction ("try again after 12 hours"), which is better than a blank screen.

## 4. What's Weak

- **The entire homepage is a hard error.** Nothing loads. No fallback content, no category nav, no static promotional banner — nothing.
- **Error code and IP address exposed publicly** (`Error: 0.23a7cb17.1777922481.2d045aa4 IP: 47.41.15.19`) — this is bad practice and leaks infrastructure details.
- **No fallback CTA** — not even a "return to homepage" or "try the app" link. I'm just stuck.
- **No loyalty or ScoreCard hook** — if I was trying to check my rewards balance or reorder cleats for next season, I'm completely locked out with no alternate path.
- **12-hour retry window is brutal.** That's a full shopping session lost — probably both mine and the kids'.

## 5. Recommendations

- **Ship a static fallback page** that renders from CDN when origin is down — logo, top nav categories (Team Sports, Footwear, Outdoor), and a basic "we'll be back soon" message. No reason to show a blank gray void.
- **Strip the error ID and IP address** from the consumer-facing error card — that's ops/infra information that belongs in a log, not on screen.
- **Add a ScoreCard / loyalty shortcut** even on the error state — "Check your rewards balance at [app link]" keeps the relationship alive when the site goes down.
- **Surface the app download** as a fallback CTA — a one-liner like "Shop on the DICK'S app while we fix this" costs nothing to add and saves the session.

## 6. Bottom Line

I'm gone — if I need cleats by Saturday I'm opening the Field & Stream tab right now, because Dick's just gave me a gray page and a 12-hour window.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Oops, Something Went Wrong.`
- **Hero image:** None — white error card on a gray background, Dick's logo at top
- **Primary CTA:** None — visible above the fold? no
- **Scores (1-10):** Clarity `2`, Relevance to you `1`, Visual hierarchy `3`, On-brand `1`
- **Strengths:**
  - Error message is readable and in plain language
  - Logo is correctly rendered and identifiable
- **Weaknesses:**
  - No actual homepage content exists — this is a complete failure state
  - Exposed error ID and IP degrade trust and feel unprofessional

## 8. Promotional & Urgency Cues

- **Active promos:** none
- **Urgency / scarcity:** none
- **Loyalty hooks:** none
- **Honesty check:** The IP address exposure (`IP: 47.41.15.19`) is a minor security/privacy concern — it's not manipulative, but it's sloppy and shouldn't be customer-facing.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero, no content
- − Easy to reach my category: no navigation visible
- − Eye-catching imagery in my category: no imagery at all
- − Promo banner I would use: no banners
- − Page renders cleanly: hard no — full error state is the only thing that rendered
- − Imagery includes someone like me: nothing to assess
- − Copy register matches mine: error copy is neutral but irrelevant
- − Trust signals visible: none
- − New / hot rail in my category: none
- − No dark patterns: technically no dark patterns, but an exposed IP is friction enough to note

**Score:** `1/10` — should equal 1 + count of "+" bullets above.
**Rationale:** There is zero content to engage with. The page is a complete outage error with no fallback modules, no navigation, and no path forward for a returning shopper like me.

## 10. Conversion Likelihood

- − CTA in my category: none
- − Unambiguous CTA copy: none
- − Active price reduction or member pricing: none
- − Time-bounded credible deadline: none
- − Reachable free-shipping threshold: none
- − Specific product page one tap away: none
- − Sizing / fit info accessible: none
- − Returns / exchanges mentioned: none
- − Reviews / ratings visible: none
- − Trust / security signals: none

**Score:** `1/10` — should equal 1 + count of "+" bullets.
**Rationale:** Nothing on this page drives conversion — there is literally no product, no offer, and no CTA. The session is dead on arrival.

## 11. Evidence

- **Error card (center of screen):** White rounded card with Dick's logo, blue `<h1>` reading "Oops, Something Went Wrong.", two body paragraphs in dark gray, bold error ID and IP address at bottom
- **Page background:** Flat light gray (#f4f4f4 approx.), completely empty below the error card
- **Logo:** Dick's Sporting Goods logo with mascot, rendered correctly inside the error card
- **No nav bar visible** — no header, no hamburger menu, no search
- **No footer visible** — no policies, no app links, no store finder
- **Bugs / friction:** Full-page render failure; error code `0.23a7cb17.1777922481.2d045aa4` and IP `47.41.15.19` printed on screen — should never be consumer-facing
## Recent history

- [[2026-05-03-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e]] — 1/10 (2026-05-03)
- [[2026-05-02-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e]] — 1/10 (2026-05-02)

