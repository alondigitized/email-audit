---
slug: 2026-05-28-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e
type: site
date: 2026-05-28
persona: reed-locker-dicks-fap6e
score: "1/10"
sender: www.dickssportinggoods.com
subject: Homepage snapshot · www.dickssportinggoods.com · 2026-05-28
tags: [site-journey, score-1, sender/www-dickssportinggoods-com]
---
# Homepage snapshot · www.dickssportinggoods.com · 2026-05-28
**Score:** 1/10 · **Type:** Site journey · **2026-05-28**
## Executive summary

- I opened Dick's because my youngest needs new lacrosse cleats before tournament weekend, and I got a broken site with a 12-hour "try again later" message. As a ScoreCard member who's probably put a couple grand through this place just this calendar year, this is not what I need on a Wednesday morning. The only thing this homepage is telling me right now is "go to Public Lands."

## What's working

- The Dick's logo renders correctly, so I know I'm on the right site
- The error message is plain-English readable — no cryptic HTTP codes in the headline
- The error card is visually contained and doesn't fill the whole viewport with chaos

## What's weak

- The entire homepage is down — no hero, no nav, no products, no offers, no anything
- "Try again after 12 hours" is a brutal message for anyone in a time-sensitive buying window (me, tournament weekend is coming)
- No redirect to a fallback — not even a "browse categories" link or a search bar to salvage the visit
- The technical error string (`Error: 0.2ca7cb17.1779963944.f5540a5 IP: 75.140.9.0`) is exposed to the end user, which looks sloppy and slightly unsettling
- No contact option, no store-locator fallback, no "check status" link — I'm just stuck

## Recommendations

- Add a fallback homepage with at minimum a search bar, store locator link, and ScoreCard login — something that lets me transact even when the main experience is degraded
- Strip the raw error ID and IP address from the user-facing message; that's an internal debug string and has no business being on a customer error screen
- Replace "try again after 12 hours" with a status link or email/text alert opt-in so I don't have to guess when it's back
- Point a static CDN-served fallback at the domain root so a server error doesn't take down the entire browsing experience on mobile

## Full review
## 1. Executive Summary

I opened Dick's because my youngest needs new lacrosse cleats before tournament weekend, and I got a broken site with a 12-hour "try again later" message. As a ScoreCard member who's probably put a couple grand through this place just this calendar year, this is not what I need on a Wednesday morning. The only thing this homepage is telling me right now is "go to Public Lands."

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy speaks to my persona: error page, zero merchandising
- − Returning-shopper hook visible: no loyalty prompt, no ScoreCard callout, nothing
- − Concrete offer above the fold: no offer exists
- − Unmistakable primary CTA: no CTA
- − Visual hierarchy clear: the error box is centered and readable, but that's about it
- − No render bugs: the ENTIRE homepage is a render failure — this IS the bug
- − Demographic signals match persona: not applicable
- − Page reflects current campaign/season: not applicable
- − Loyalty/membership visible without scrolling: no
- − Offer feels honest: not applicable

Scored 1 because nothing above a base point is present.

## 3. What's Working

- The Dick's logo renders correctly, so I know I'm on the right site
- The error message is plain-English readable — no cryptic HTTP codes in the headline
- The error card is visually contained and doesn't fill the whole viewport with chaos

## 4. What's Weak

- The entire homepage is down — no hero, no nav, no products, no offers, no anything
- "Try again after 12 hours" is a brutal message for anyone in a time-sensitive buying window (me, tournament weekend is coming)
- No redirect to a fallback — not even a "browse categories" link or a search bar to salvage the visit
- The technical error string (`Error: 0.2ca7cb17.1779963944.f5540a5 IP: 75.140.9.0`) is exposed to the end user, which looks sloppy and slightly unsettling
- No contact option, no store-locator fallback, no "check status" link — I'm just stuck

## 5. Recommendations

- Add a fallback homepage with at minimum a search bar, store locator link, and ScoreCard login — something that lets me transact even when the main experience is degraded
- Strip the raw error ID and IP address from the user-facing message; that's an internal debug string and has no business being on a customer error screen
- Replace "try again after 12 hours" with a status link or email/text alert opt-in so I don't have to guess when it's back
- Point a static CDN-served fallback at the domain root so a server error doesn't take down the entire browsing experience on mobile

## 6. Bottom Line

I'm closing the tab and heading to Field & Stream's site — this visit cost Dick's a cleat sale.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Oops, Something Went Wrong.`
- **Hero image:** No image — white error card centered on a flat gray background
- **Primary CTA:** None — visible above the fold? no
- **Scores (1-10):** Clarity `2`, Relevance to you `1`, Visual hierarchy `3`, On-brand `1`
- **Strengths:**
  - Error message is short and legible at mobile size
  - Dick's logo is recognizable and loads clean
- **Weaknesses:**
  - Absolutely zero merchandising, offer, or recovery path
  - Exposes internal error ID/IP string to customers, which undermines trust

## 8. Promotional & Urgency Cues

- **Active promos:** none visible
- **Urgency / scarcity:** none visible
- **Loyalty hooks:** none visible — no ScoreCard mention whatsoever
- **Honesty check:** "Try again after 12 hours" feels dismissive for a site that holds customer loyalty accounts and purchase history; no acknowledgment of the inconvenience, no apology offer, nothing to retain the visit

## 9. Engagement Likelihood

- − Hero relates to my focus area: error page — no relation to youth travel sports or cleats
- − Easy to reach my category: no navigation rendered at all
- − Eye-catching imagery in my category: no imagery of any kind
- − Promo banner I would use: no promo banners
- − Page renders cleanly: hard no — the homepage itself is the failure state
- − Imagery includes someone like me: no imagery
- − Copy register matches mine: the error copy is neutral/clinical, not the sporting-goods energy I came for
- − Trust signals visible: none — no reviews, no return policy, no badges
- − New/hot rail in my category: no rails of any kind
- − No dark patterns: technically no dark patterns, but the 12-hour "go away" message borders on hostile

**Score:** `1/10` — zero "+" signals present; I would bounce immediately to a competitor.
- **Rationale:** There is no functional homepage to engage with. Even a Gen X shopper who knows the brand well has no path to browse, search, or recover the session.

## 10. Conversion Likelihood

- − CTA in my category: no CTA exists
- − Unambiguous CTA copy: no CTA exists
- − Active price reduction or member pricing: none visible
- − Time-bounded credible deadline: none visible
- − Reachable free-shipping threshold: none visible
- − Specific product page one tap away: no links to any product pages
- − Sizing / fit info accessible: not accessible
- − Returns / exchanges mentioned: not mentioned
- − Reviews / ratings visible: none
- − Trust / security signals: none — the exposed error ID actually does the opposite

**Score:** `1/10` — no conversion path exists on this page.
- **Rationale:** You literally cannot buy anything. There's no cart, no product, no CTA — just a wall telling me to come back in half a day. Every conversion signal is absent.

## 11. Evidence

- **Dick's Sporting Goods logo** — renders correctly in the error card, teal/green branded box
- **Error card** — white card with drop shadow, centered on gray (#f3f3f3-ish) background
- **Error headline** — "Oops, Something Went Wrong." in blue bold H1-style text
- **Error body copy** — "We are working on the problem. Please try accessing the site again after 12 hours. / We appreciate your patience and understanding."
- **Technical error string** — bold text: `Error: 0.2ca7cb17.1779963944.f5540a5 IP: 75.140.9.0` — exposed to end user, should not be customer-facing
- **Remainder of viewport** — completely empty gray background, no nav, no footer, no links, no fallback content
- **Bugs / friction:** The homepage itself is the bug — full availability failure with no graceful degradation, no search bar, no store locator, no fallback navigation
## Recent history

- [[2026-05-23-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e]] — 1/10 (2026-05-23)
- [[2026-05-20-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e]] — 1/10 (2026-05-20)
- [[2026-05-19-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e]] — 1/10 (2026-05-19)

