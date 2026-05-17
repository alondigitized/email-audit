---
slug: 2026-05-17-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e
type: site
date: 2026-05-17
persona: reed-locker-dicks-fap6e
score: "1/10"
sender: www.dickssportinggoods.com
subject: Homepage snapshot · www.dickssportinggoods.com · 2026-05-17
tags: [site-journey, score-1, sender/www-dickssportinggoods-com]
---
# Homepage snapshot · www.dickssportinggoods.com · 2026-05-17
**Score:** 1/10 · **Type:** Site journey · **2026-05-17**
## Executive summary

- The Dick's homepage isn't a homepage right now — it's a full-blown error page. Dick's logo up top, then a white card that just says "Oops, Something Went Wrong. We are working on the problem. Please try accessing the site again after 12 hours." That's it. Nothing else loaded. No products, no promos, no nav — just a light-gray void below a busted error card. As a guy who needed to price out two pairs of cleats and maybe check my ScoreCard balance before practice pickup tonight, this is a complete dead end.

## What's working

- **Logo renders correctly** — the Dick's Sporting Goods logo is visible and legible, so at least I know I landed on the right site and didn't get phished.
- **Error message is plain English** — "Please try accessing the site again after 12 hours" is at least a clear instruction, even if 12 hours is a brutal ask on a Saturday when I need gear.

## What's weak

- **Entire homepage failed to load** — no hero, no nav, no categories, no products. A guy trying to buy cleats before a weekend tournament has zero path forward here.
- **"12 hours" timeline is customer-hostile** — that's not a minor outage message, that's telling me to come back tomorrow. I'm already half out the door to Public Lands.
- **No fallback content** — no static cached version, no "shop our app" prompt, no phone number, nothing. The brand fully went dark.
- **Exposed error code on screen** — printing `Error: 0.2ca7cb17.1779050472.1e5fbe3c IP: 75.140.9.0` in bold on a consumer-facing page looks sloppy and potentially exposes infrastructure details. Not a great look.
- **Massive empty gray space below the error card** — the page is thousands of pixels tall and completely blank, making the failure feel even more broken and unfinished.
- **ScoreCard/loyalty completely inaccessible** — no way to check points, no fallback app link, no "manage your account" redirect.

## Recommendations

- **Ship a branded maintenance page with an app redirect** — "Dick's app still works, grab it here" CTA would save the conversion for mobile-first shoppers like me who came to restock cleats.
- **Cap the error message at a realistic SLA** — "12 hours" is a churn machine. "We'll be back soon" or a real-time status link is far less damaging.
- **Remove the raw error code from the consumer view** — strip `Error: 0.2ca7cb17…` from the public-facing error card entirely. Log it server-side; don't print it on the page.
- **Add a loyalty account deep-link** — even during an outage, pointing ScoreCard members to `accounts.dickssportinggoods.com` or the app keeps them in the ecosystem instead of sending them straight to Field & Stream.

## Full review
## 1. Executive Summary

The Dick's homepage isn't a homepage right now — it's a full-blown error page. Dick's logo up top, then a white card that just says "Oops, Something Went Wrong. We are working on the problem. Please try accessing the site again after 12 hours." That's it. Nothing else loaded. No products, no promos, no nav — just a light-gray void below a busted error card. As a guy who needed to price out two pairs of cleats and maybe check my ScoreCard balance before practice pickup tonight, this is a complete dead end.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery explicitly speaks to persona: no hero, no copy, no imagery
- − Returning-shopper hook visible: no loyalty/member CTA, no rewards callout
- − Concrete offer above the fold: none
- − Unmistakable primary CTA above the fold: none
- − Visual hierarchy clear: failed — only thing visible is an error card
- − No render bugs: **FAILS** — the site itself is a render bug, error code `0.2ca7cb17.1779050472.1e5fbe3c IP: 75.140.9.0` is printed on screen
- − Demographic signals match persona: no content rendered to assess
- − Current campaign / season reflected: not possible to judge — nothing loaded
- − Loyalty / membership benefits visible: no
- − Offer feels honest: no offer exists

The sole point comes from starting at 1 per rubric rules. Every single criterion fails because the homepage is a site-error state.

## 3. What's Working

- **Logo renders correctly** — the Dick's Sporting Goods logo is visible and legible, so at least I know I landed on the right site and didn't get phished.
- **Error message is plain English** — "Please try accessing the site again after 12 hours" is at least a clear instruction, even if 12 hours is a brutal ask on a Saturday when I need gear.

## 4. What's Weak

- **Entire homepage failed to load** — no hero, no nav, no categories, no products. A guy trying to buy cleats before a weekend tournament has zero path forward here.
- **"12 hours" timeline is customer-hostile** — that's not a minor outage message, that's telling me to come back tomorrow. I'm already half out the door to Public Lands.
- **No fallback content** — no static cached version, no "shop our app" prompt, no phone number, nothing. The brand fully went dark.
- **Exposed error code on screen** — printing `Error: 0.2ca7cb17.1779050472.1e5fbe3c IP: 75.140.9.0` in bold on a consumer-facing page looks sloppy and potentially exposes infrastructure details. Not a great look.
- **Massive empty gray space below the error card** — the page is thousands of pixels tall and completely blank, making the failure feel even more broken and unfinished.
- **ScoreCard/loyalty completely inaccessible** — no way to check points, no fallback app link, no "manage your account" redirect.

## 5. Recommendations

- **Ship a branded maintenance page with an app redirect** — "Dick's app still works, grab it here" CTA would save the conversion for mobile-first shoppers like me who came to restock cleats.
- **Cap the error message at a realistic SLA** — "12 hours" is a churn machine. "We'll be back soon" or a real-time status link is far less damaging.
- **Remove the raw error code from the consumer view** — strip `Error: 0.2ca7cb17…` from the public-facing error card entirely. Log it server-side; don't print it on the page.
- **Add a loyalty account deep-link** — even during an outage, pointing ScoreCard members to `accounts.dickssportinggoods.com` or the app keeps them in the ecosystem instead of sending them straight to Field & Stream.

## 6. Bottom Line

I closed the tab before I even finished reading the error message — I've got a tournament Saturday morning and I need cleats today, not in 12 hours.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Oops, Something Went Wrong.`
- **Hero image:** None — white error card on a light gray background, no product or lifestyle imagery whatsoever
- **Primary CTA:** None — no button exists above the fold, visible above the fold? **no**
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `2`, On-brand `1`
- **Strengths:**
  - The Dick's logo is visible and correctly rendered, confirming the domain
  - Error message text is legible and grammatically coherent
- **Weaknesses:**
  - Zero brand personality — this could be any website's generic error page
  - No actionable path forward for a customer who has shopping intent right now

## 8. Promotional & Urgency Cues

- **Active promos:** None — no banners, no percentages, no dollar thresholds visible
- **Urgency / scarcity:** "Please try accessing the site again after 12 hours" — this is anti-urgency, actually pushes the customer away
- **Loyalty hooks:** None — ScoreCard, member pricing, rewards balance all absent
- **Honesty check:** The raw error code `Error: 0.2ca7cb17.1779050472.1e5fbe3c IP: 75.140.9.0` is printed in bold on a consumer page, which is unnecessary, slightly unnerving, and a marginal security/ops hygiene issue.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero exists, error card only
- − Easy to reach my category: no navigation rendered at all
- − Eye-catching imagery in my category: zero product or lifestyle images
- − Promo banner I would use: no banners of any kind
- − Page renders cleanly: hard no — site-level error with a blank page miles long below it
- − Imagery includes someone like me: no imagery at all
- − Copy register matches mine: error copy is generic and not tuned to any persona
- − Trust signals visible: none — no reviews, no badge, no return policy
- − New / hot rail in my category: no rails or modules loaded
- − No dark patterns: technically no dark patterns, but a 12-hour hold message is pretty discouraging

**Score:** `1/10` — should equal 1 + count of "+" bullets above.
**Rationale:** Every engagement signal failed because the page did not load. The only thing keeping this from a 0 is the rubric floor of 1 — there is genuinely nothing here to interact with.

## 10. Conversion Likelihood

- − CTA in my category: no CTA exists anywhere on the page
- − Unambiguous CTA copy: no CTA copy at all
- − Active price reduction or member pricing: none visible
- − Time-bounded credible deadline: none — the only time reference is "12 hours" to wait before retrying
- − Reachable free-shipping threshold: not shown
- − Specific product page one tap away: impossible, no nav or links rendered
- − Sizing / fit info accessible: not present
- − Returns / exchanges mentioned: not present
- − Reviews / ratings visible: none
- − Trust / security signals: none

**Score:** `1/10` — should equal 1 + count of "+" bullets.
**Rationale:** There is no conversion path of any kind — no cart, no CTA, no product, no checkout. A customer with active purchase intent (me, right now, needing cleats) has no option but to leave.

## 11. Evidence

Visible modules on the page (scroll order):

- **Dick's Sporting Goods logo** — centered at top of white error card, correctly rendered
- **Error heading** — "Oops, Something Went Wrong." in large blue text
- **Body copy** — "We are working on the problem. Please try accessing the site again after 12 hours. We appreciate your patience and understanding."
- **Error code block** — bold text: `Error: 0.2ca7cb17.1779050472.1e5fbe3c IP: 75.140.9.0`
- **Blank gray page body** — thousands of pixels of empty `#f3f3f3` background below the error card, no footer, no fallback modules, nothing
- **Bugs / friction / clarity issues:** Full site outage — no homepage content loaded, no navigation, no hero, no product modules, no footer, no CTAs. Error code exposed in consumer view. 12-hour retry ask is a conversion killer.
## Recent history

- [[2026-05-16-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e]] — 1/10 (2026-05-16)
- [[2026-05-14-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e]] — 1/10 (2026-05-14)
- [[2026-05-13-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e]] — 1/10 (2026-05-13)

