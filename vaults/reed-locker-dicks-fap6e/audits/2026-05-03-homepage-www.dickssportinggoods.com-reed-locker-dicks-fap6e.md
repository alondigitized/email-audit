---
slug: 2026-05-03-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e
type: site
date: 2026-05-03
persona: reed-locker-dicks-fap6e
score: "1/10"
sender: www.dickssportinggoods.com
subject: Homepage snapshot · www.dickssportinggoods.com · 2026-05-03
tags: [site-journey, score-1, sender/www-dickssportinggoods-com]
---
# Homepage snapshot · www.dickssportinggoods.com · 2026-05-03
**Score:** 1/10 · **Type:** Site journey · **2026-05-03**
## Executive summary

- Dick's Sporting Goods greeted me with a full site error — the entire homepage failed to load, showing nothing but a branded "Oops, Something Went Wrong" card on a gray background. There's no merchandise, no hero, no nav, no promos — just a logo and an apology message telling me to come back in 12 hours. That's a hard stop before I even get started.
- **1/10**
- − Hero copy or imagery explicitly speaks to your persona: no hero at all — site is down
- − Returning-shopper hook visible: none
- − Concrete offer above the fold: none
- − Unmistakable primary CTA: none
- − Visual hierarchy clear: only an error card; nothing to guide the eye
- − No render bugs: **fails** — the entire page is a render failure (error code visible: `0.23a7cb17.1777782255.1dc2cf78 IP: 47.41.15.19`)
- − Demographic signals match persona: n/a — nothing rendered
- − Page reflects current campaign/season: none
- − Loyalty/membership benefits visible: none
- − Offer feels honest: n/a — no offer present
- + The only point I'm giving is the starting baseline (1), because the logo did render correctly.

## What's working

- **Logo renders cleanly** — the Dick's Sporting Goods badge is crisp and recognizable, so I at least know I'm on the right site.
- **Error message is polite and readable** — "We appreciate your patience and understanding" is a better tone than a raw HTTP 500. At least they're not screaming stack traces at me.

## What's weak

- **No homepage at all** — I'm a dad who just drove three kids to tournaments this weekend and I need cleats resupplied. This is a dead end.
- **12-hour recovery window is alarming** — "Please try again after 12 hours" is a brick wall. That's not maintenance mode copy, that's a crisis. It signals the brand isn't on top of their uptime.
- **Error code dumped in plain sight** — `Error: 0.23a7cb17.1777782255.1dc2cf78 IP: 47.41.15.19` is exposed to every visitor. Technical garbage that means nothing to me as a shopper and looks sloppy.
- **No fallback content whatsoever** — no cached product tiles, no "shop our app" redirect, no store-locator link, nothing. A retailer this size should have *something* to catch a visitor when the main experience is down.
- **No mobile app prompt** — this would be the one reasonable save. "Download our app to keep shopping" would at least give me somewhere to go.

## Recommendations

- **Ship a degraded-mode fallback page immediately** — even static HTML with a "Browse our top categories" grid and a store locator keeps shoppers from walking away permanently. This is table stakes for a $12B retailer.
- **Remove the raw error code from the user-facing message** — it serves no customer purpose and makes the brand look technically careless. Log it server-side.
- **Add an app / alternative channel CTA** — "Shop the Dick's app while we fix this" with a download badge is a one-week ship that rescues otherwise-lost sessions.
- **Replace the 12-hour copy with a countdown or "back soon" message** — "Try again in a few minutes" with a reload button converts more returning visitors than a vague half-day estimate.

## Full review
## 1. Executive Summary

Dick's Sporting Goods greeted me with a full site error — the entire homepage failed to load, showing nothing but a branded "Oops, Something Went Wrong" card on a gray background. There's no merchandise, no hero, no nav, no promos — just a logo and an apology message telling me to come back in 12 hours. That's a hard stop before I even get started.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery explicitly speaks to your persona: no hero at all — site is down
- − Returning-shopper hook visible: none
- − Concrete offer above the fold: none
- − Unmistakable primary CTA: none
- − Visual hierarchy clear: only an error card; nothing to guide the eye
- − No render bugs: **fails** — the entire page is a render failure (error code visible: `0.23a7cb17.1777782255.1dc2cf78 IP: 47.41.15.19`)
- − Demographic signals match persona: n/a — nothing rendered
- − Page reflects current campaign/season: none
- − Loyalty/membership benefits visible: none
- − Offer feels honest: n/a — no offer present

  + The only point I'm giving is the starting baseline (1), because the logo did render correctly.

## 3. What's Working

- **Logo renders cleanly** — the Dick's Sporting Goods badge is crisp and recognizable, so I at least know I'm on the right site.
- **Error message is polite and readable** — "We appreciate your patience and understanding" is a better tone than a raw HTTP 500. At least they're not screaming stack traces at me.

## 4. What's Weak

- **No homepage at all** — I'm a dad who just drove three kids to tournaments this weekend and I need cleats resupplied. This is a dead end.
- **12-hour recovery window is alarming** — "Please try again after 12 hours" is a brick wall. That's not maintenance mode copy, that's a crisis. It signals the brand isn't on top of their uptime.
- **Error code dumped in plain sight** — `Error: 0.23a7cb17.1777782255.1dc2cf78 IP: 47.41.15.19` is exposed to every visitor. Technical garbage that means nothing to me as a shopper and looks sloppy.
- **No fallback content whatsoever** — no cached product tiles, no "shop our app" redirect, no store-locator link, nothing. A retailer this size should have *something* to catch a visitor when the main experience is down.
- **No mobile app prompt** — this would be the one reasonable save. "Download our app to keep shopping" would at least give me somewhere to go.

## 5. Recommendations

- **Ship a degraded-mode fallback page immediately** — even static HTML with a "Browse our top categories" grid and a store locator keeps shoppers from walking away permanently. This is table stakes for a $12B retailer.
- **Remove the raw error code from the user-facing message** — it serves no customer purpose and makes the brand look technically careless. Log it server-side.
- **Add an app / alternative channel CTA** — "Shop the Dick's app while we fix this" with a download badge is a one-week ship that rescues otherwise-lost sessions.
- **Replace the 12-hour copy with a countdown or "back soon" message** — "Try again in a few minutes" with a reload button converts more returning visitors than a vague half-day estimate.

## 6. Bottom Line

I'm gone — I'm opening Field & Stream or Public Lands right now because I need those cleats before Saturday.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Oops, Something Went Wrong.`
- **Hero image:** No image — plain white error card on gray background
- **Primary CTA:** None — no button visible; no visible CTA at all
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `2`, On-brand `2`
- **Strengths:**
  - Logo is legible and correctly placed
  - Error text is readable and not a raw stack trace
- **Weaknesses:**
  - Zero merchandise, zero navigation, zero CTA — the "hero" is literally an apology
  - No way forward; dead-end experience with no path to conversion

## 8. Promotional & Urgency Cues

- **Active promos:** None — page did not render
- **Urgency / scarcity:** None — only urgency is the error recovery window ("try again after 12 hours"), which works against the brand
- **Loyalty hooks:** None visible — ScoreCard rewards program completely absent
- **Honesty check:** Showing a raw internal error code (`0.23a7cb17... IP: 47.41.15.19`) to end users is an accidental disclosure. Not malicious, but it is sloppy and exposes infrastructure detail.

## 9. Engagement Likelihood

- − Hero relates to my focus area: No hero exists; site is down
- − Easy to reach my category: No navigation rendered at all
- − Eye-catching imagery in my category: Zero imagery loaded
- − Promo banner I would use: No banners visible
- − Page renders cleanly: Hard fail — full site error with exposed error code
- − Imagery includes someone like me: No imagery whatsoever
- − Copy register matches mine: Error copy is polite but irrelevant to shopping
- − Trust signals visible: None — no reviews, badges, or returns language
- − New / hot rail in my category: Nothing rendered
- − No dark patterns: Technically no dark patterns, but a hard wall is worse

**Score:** `1/10` — should equal 1 + count of "+" bullets above.
**Rationale:** There is literally nothing to engage with. The site failed to serve any content, so I scored the minimum baseline. The polite tone of the error message is the only softening factor — it didn't earn any rubric points.

## 10. Conversion Likelihood

- − CTA in my category: No CTA of any kind
- − Unambiguous CTA copy: None present
- − Active price reduction or member pricing: None visible
- − Time-bounded credible deadline: None
- − Reachable free-shipping threshold: Not displayed
- − Specific product page one tap away: No navigation, no products
- − Sizing / fit info accessible: Completely absent
- − Returns / exchanges mentioned: Not present
- − Reviews / ratings visible: None
- − Trust / security signals: None

**Score:** `1/10` — baseline only; zero rubric criteria met.
**Rationale:** I cannot convert on a page with no products, no CTAs, and no path forward. The only way this ends is me going to a competitor.

## 11. Evidence

Visible modules in the screenshot (in scroll order):

- **Error card / "hero":** White centered box with Dick's logo, blue "Oops, Something Went Wrong." headline, two lines of recovery copy, and a raw error code string
- **Background:** Solid light gray (#f3f3f3-ish) fill extending the full viewport height — nothing else loaded
- **Bugs / friction / clarity issues visible:**
  - Full site outage — homepage did not render any retail content
  - Raw internal error token and IP address visible to end users: `Error: 0.23a7cb17.1777782255.1dc2cf78 IP: 47.41.15.19`
  - "Try again after 12 hours" messaging — extreme recovery window with no countdown or reload mechanism
  - No fallback navigation, no app redirect, no store locator — complete dead end for the visitor
## Recent history

- [[2026-05-02-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e]] — 1/10 (2026-05-02)

