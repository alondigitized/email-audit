---
slug: 2026-07-16-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e
type: site
date: 2026-07-16
persona: reed-locker-dicks-fap6e
score: "1/10"
sender: www.dickssportinggoods.com
subject: Homepage snapshot · www.dickssportinggoods.com · 2026-07-16
tags: [site-journey, score-1, sender/www-dickssportinggoods-com]
---
# Homepage snapshot · www.dickssportinggoods.com · 2026-07-16
**Score:** 1/10 · **Type:** Site journey · **2026-07-16**
## Executive summary

- I pulled up dickssportinggoods.com on my phone and got a full-page error — not a homepage. The Dick's logo is there, then a white card reads "Oops, Something Went Wrong." with a message to try again in 12 hours, plus a raw error string at the bottom. There is no product, no offer, no navigation — just a broken wall. As someone who buys cleats and gear multiple times a year across three kids, this is a hard stop before I even get started.

## What's working

- The Dick's Sporting Goods logo renders correctly — I at least know I'm in the right place before the wheels fall off.
- The error message is in plain English ("We are working on the problem. Please try again after 12 hours.") — no cryptic HTTP codes as the main message.

## What's weak

- **The entire homepage is an error page.** Nothing to browse, no nav, no categories, no offers — dead end.
- **"Try again after 12 hours" is brutal.** If I need shin guards for Saturday's tournament, I'm already opening the Field & Stream tab. Dick's just lost that sale.
- **Raw error string is exposed to end users:** `Error: 0.23a7cb17.1784197510.4b7e2959 IP: 47.229.200.33` — this looks sloppy and a little sketchy. I don't want my IP flashing on a retail site.
- **No fallback navigation or category links** — even a stripped-down "browse anyway" link or store-locator would soften the blow.
- **No estimated recovery time is credible at "12 hours."** That's an eternity in a weekend-game scenario. Feels like a canned message, not a real status update.

## Recommendations

- **Show a lightweight fallback page** with at minimum: the store locator, a phone number, and top category links (Footwear, Team Sports, Clearance) — so a customer mid-purchase-cycle isn't completely stranded.
- **Remove the raw error/IP string from the user-facing page** — send it to your logs, not my screen. It erodes trust and looks unfinished.
- **Replace "try again in 12 hours" with a real-time status link** (e.g., a status.dickssportinggoods.com URL or a "get notified when we're back" email field) — keep the shopper in the funnel instead of sending them to a competitor.
- **Add a ScoreCard reminder in the error state** — even something like "Your ScoreCard points are safe — we'll be back soon" keeps brand equity alive during an outage.

## Full review
## 1. Executive Summary

I pulled up dickssportinggoods.com on my phone and got a full-page error — not a homepage. The Dick's logo is there, then a white card reads "Oops, Something Went Wrong." with a message to try again in 12 hours, plus a raw error string at the bottom. There is no product, no offer, no navigation — just a broken wall. As someone who buys cleats and gear multiple times a year across three kids, this is a hard stop before I even get started.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery explicitly speaks to my persona: no hero, no copy, just an error card
- − Returning-shopper hook visible: none
- − Concrete offer above the fold: none
- − Unmistakable primary CTA: none
- − Visual hierarchy is clear: the only hierarchy is logo → error message → raw error string
- − No render bugs: the entire page IS a render failure — error "0.23a7cb17.1784197510.4b7e2959 IP: 47.229.200.33" is exposed on screen
- − Demographic signals match my persona: N/A
- − Page reflects current campaign / season: N/A
- − Loyalty / membership benefits visible: none
- − Offer feels honest: N/A

Score starts at 1, zero additional criteria met. **Score: 1/10**

## 3. What's Working

- The Dick's Sporting Goods logo renders correctly — I at least know I'm in the right place before the wheels fall off.
- The error message is in plain English ("We are working on the problem. Please try again after 12 hours.") — no cryptic HTTP codes as the main message.

## 4. What's Weak

- **The entire homepage is an error page.** Nothing to browse, no nav, no categories, no offers — dead end.
- **"Try again after 12 hours" is brutal.** If I need shin guards for Saturday's tournament, I'm already opening the Field & Stream tab. Dick's just lost that sale.
- **Raw error string is exposed to end users:** `Error: 0.23a7cb17.1784197510.4b7e2959 IP: 47.229.200.33` — this looks sloppy and a little sketchy. I don't want my IP flashing on a retail site.
- **No fallback navigation or category links** — even a stripped-down "browse anyway" link or store-locator would soften the blow.
- **No estimated recovery time is credible at "12 hours."** That's an eternity in a weekend-game scenario. Feels like a canned message, not a real status update.

## 5. Recommendations

- **Show a lightweight fallback page** with at minimum: the store locator, a phone number, and top category links (Footwear, Team Sports, Clearance) — so a customer mid-purchase-cycle isn't completely stranded.
- **Remove the raw error/IP string from the user-facing page** — send it to your logs, not my screen. It erodes trust and looks unfinished.
- **Replace "try again in 12 hours" with a real-time status link** (e.g., a status.dickssportinggoods.com URL or a "get notified when we're back" email field) — keep the shopper in the funnel instead of sending them to a competitor.
- **Add a ScoreCard reminder in the error state** — even something like "Your ScoreCard points are safe — we'll be back soon" keeps brand equity alive during an outage.

## 6. Bottom Line

I'm gone in under ten seconds — three kids' worth of gear needs don't wait twelve hours, so I'm already typing backcountry.com.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Oops, Something Went Wrong.`
- **Hero image:** Dick's Sporting Goods logo on a white card against a gray background — no product, no lifestyle, no people
- **Primary CTA:** None — no button of any kind is visible
- **Scores (1-10):** Clarity `2`, Relevance to you `1`, Visual hierarchy `3`, On-brand `1`
- **Strengths:**
  - The logo is recognizable and renders correctly
  - Error message is in plain language — not a raw HTTP 500
- **Weaknesses:**
  - Zero commerce content — no path forward for a shopper
  - The error card is the entire above-the-fold experience; nothing about Dick's identity, product, or season comes through

## 8. Promotional & Urgency Cues

- **Active promos:** None
- **Urgency / scarcity:** None (ironic — the only urgency is "this site won't be back for 12 hours")
- **Loyalty hooks:** None — ScoreCard is completely absent
- **Honesty check:** The exposed raw error string (`Error: 0.23a7cb17.1784197510.4b7e2959 IP: 47.229.200.33`) is a transparency issue in the wrong direction — it reveals internal infrastructure details and shows my IP, which feels off for a consumer retail experience. The "12 hours" language also feels like an auto-generated canned message, not an honest status update.

## 9. Engagement Likelihood

- − Hero relates to my focus area: Error card, no sports content whatsoever
- − Easy to reach my category: No navigation present at all
- − Eye-catching imagery in my category: No imagery — just a white card on gray
- − Promo banner I would use: No banners of any kind
- − Page renders cleanly: Negative — the page itself is a render failure
- − Imagery includes someone like me: No imagery
- − Copy register matches mine: The error copy is generic / auto-generated, not a brand voice
- − Trust signals visible: None — no reviews, no badges, no returns copy
- − New / hot rail in my category: None
- − No dark patterns: The IP exposure on-screen and vague "12 hours" timeline are friction, not dark patterns per se — but I'll count it against

**Score:** `1/10` — should equal 1 + count of "+" bullets above.
**Rationale:** Zero positive engagement signals. Every rubric criterion failed because there is no homepage — just an error state. I would bounce immediately.

## 10. Conversion Likelihood

- − CTA in my category: No CTA exists
- − Unambiguous CTA copy: No CTA exists
- − Active price reduction or member pricing: Not visible
- − Time-bounded credible deadline: Not visible
- − Reachable free-shipping threshold: Not visible
- − Specific product page one tap away: Not one tap — not any taps
- − Sizing / fit info accessible: Not visible
- − Returns / exchanges mentioned: Not visible
- − Reviews / ratings visible: Not visible
- − Trust / security signals: Not visible — if anything, the raw IP/error string undermines trust

**Score:** `1/10` — should equal 1 + count of "+" bullets.
**Rationale:** Conversion is impossible when there's no product, no CTA, and no path deeper into the site. The site is completely down for this visitor.

## 11. Evidence

Visible modules on the page (in scroll order):

- **Logo / brand mark:** Dick's Sporting Goods logo centered on a white card — the only brand element present
- **Error heading:** "Oops, Something Went Wrong." — blue bold H1-size text
- **Error body copy:** "We are working on the problem. Please try again after 12 hours. We appreciate your patience and understanding."
- **Raw error string:** `Error: 0.23a7cb17.1784197510.4b7e2959 IP: 47.229.200.33` — bold, user-visible, below the body copy
- **Remainder of viewport:** Solid gray (`#f4f4f4`-ish) fill — completely empty below the error card for the rest of the very long page
- **Bugs / friction visible in screenshot:** Full-page site outage; no nav, no footer, no fallback content; raw internal error token and visitor IP exposed on-screen; card appears centered but the rest of the page is a blank void — layout is functional but the content is the bug
## Recent history

- [[2026-07-09-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e]] — 1/10 (2026-07-09)
- [[2026-07-02-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e]] — 1/10 (2026-07-02)
- [[2026-06-25-homepage-www.dickssportinggoods.com-reed-locker-dicks-fap6e]] — 1/10 (2026-06-25)

