---
slug: 2026-07-19-homepage-www.expedia.com-ellie-bundle-expedia-fap6e
type: site
date: 2026-07-19
persona: ellie-bundle-expedia-fap6e
score: "1/10"
sender: www.expedia.com
subject: Homepage snapshot · www.expedia.com · 2026-07-19
tags: [site-journey, score-1, sender/www-expedia-com]
---
# Homepage snapshot · www.expedia.com · 2026-07-19
**Score:** 1/10 · **Type:** Site journey · **2026-07-19**
## Executive summary

- I opened Expedia on a Sunday morning with my coffee ready to plan our Florida trip, and instead of a homepage I got a bot wall. Literally zero content — just a slider CAPTCHA telling me my browser "is being browsed at a speed expected of a robot." Great start, guys. This looks like a security layer that's misfiring on real users, and for a traveler like me who's price-checking three tabs at once, this is an instant rage-close.

## What's working

- The CAPTCHA itself is functional — the slider widget renders, the instructions are readable, and there's an audio option for accessibility. It technically works as a bot gate.
- "Submit feedback" link is present, which at least gives a stuck user somewhere to go.

## What's weak

- **The entire commerce experience is blocked.** A Sunday-morning trip planner with three browser tabs open is not a bot — but Expedia's detection doesn't know that.
- **No fallback content.** Competitors who hit false positives at least show a simplified page or cached content. I see a blank white wall with a slider.
- **The error message is alarming.** "Something about your browser's behavior has caught our attention" reads like an accusation, not a help message. That's not the vibe for a family-vacation brand.
- **No brand warmth.** The Expedia logo at the top is the only brand touchpoint. Zero photography, zero copy about travel, zero One Key mention.
- **Session ID exposed in plain text** at the bottom (`ID: 65af10df-507e-95cf-e134-e30b820e0790`) — confusing and unnecessary for an end user to see.

## Recommendations

- **Tune the bot-detection threshold for mobile.** Expedia's own app behavior (tab-switching, rapid price checks, VPN usage) triggers these false positives. A logged-in One Key member should be whitelisted by session token before a CAPTCHA fires.
- **If a CAPTCHA must show, inject the loyalty promise above it.** Even "Earn One Key Cash on every booking — solve once, save forever" would keep the brand relationship warm during the friction moment.
- **Replace the accusatory copy** ("Your browser's behavior has caught our attention") with neutral, helpful language: "One quick check to keep your search secure."
- **Show a cached or static version of the homepage hero** behind the CAPTCHA modal so the page doesn't feel dead — a family-at-the-beach image with the bundle value prop still communicates while the check completes.

## Full review
## 1. Executive Summary

I opened Expedia on a Sunday morning with my coffee ready to plan our Florida trip, and instead of a homepage I got a bot wall. Literally zero content — just a slider CAPTCHA telling me my browser "is being browsed at a speed expected of a robot." Great start, guys. This looks like a security layer that's misfiring on real users, and for a traveler like me who's price-checking three tabs at once, this is an instant rage-close.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy matches my persona: no hero exists — I see a bot-detection interstitial
- − Returning-shopper hook visible: none
- − Concrete offer above the fold: none
- − Primary CTA visible: the only CTA is "Slide right to secure your access" — not a commerce CTA
- − Visual hierarchy clear: the page is a single-purpose friction wall
- − No render bugs: the page *renders*, but it IS the bug from a commerce standpoint
- − Demographic signals match: no imagery at all
- − Current campaign / season: nothing
- − Loyalty / One Key visible: nothing
- − Offer feels honest: there is no offer

Score starts at 1, zero additive signals. **Score: 1/10.**

## 3. What's Working

- The CAPTCHA itself is functional — the slider widget renders, the instructions are readable, and there's an audio option for accessibility. It technically works as a bot gate.
- "Submit feedback" link is present, which at least gives a stuck user somewhere to go.

## 4. What's Weak

- **The entire commerce experience is blocked.** A Sunday-morning trip planner with three browser tabs open is not a bot — but Expedia's detection doesn't know that.
- **No fallback content.** Competitors who hit false positives at least show a simplified page or cached content. I see a blank white wall with a slider.
- **The error message is alarming.** "Something about your browser's behavior has caught our attention" reads like an accusation, not a help message. That's not the vibe for a family-vacation brand.
- **No brand warmth.** The Expedia logo at the top is the only brand touchpoint. Zero photography, zero copy about travel, zero One Key mention.
- **Session ID exposed in plain text** at the bottom (`ID: 65af10df-507e-95cf-e134-e30b820e0790`) — confusing and unnecessary for an end user to see.

## 5. Recommendations

- **Tune the bot-detection threshold for mobile.** Expedia's own app behavior (tab-switching, rapid price checks, VPN usage) triggers these false positives. A logged-in One Key member should be whitelisted by session token before a CAPTCHA fires.
- **If a CAPTCHA must show, inject the loyalty promise above it.** Even "Earn One Key Cash on every booking — solve once, save forever" would keep the brand relationship warm during the friction moment.
- **Replace the accusatory copy** ("Your browser's behavior has caught our attention") with neutral, helpful language: "One quick check to keep your search secure."
- **Show a cached or static version of the homepage hero** behind the CAPTCHA modal so the page doesn't feel dead — a family-at-the-beach image with the bundle value prop still communicates while the check completes.

## 6. Bottom Line

I closed the tab and opened Booking.com — if Expedia's going to treat me like a scraper on a Sunday morning with coffee, I'll just hoard my points somewhere else.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Show us your human side...`
- **Hero image:** None — white background only, no photography or lifestyle imagery
- **Primary CTA:** `Slide right to secure your access` — visible above the fold? yes (but it's a CAPTCHA prompt, not a commerce CTA)
- **Scores (1-10):** Clarity `4`, Relevance to you `1`, Visual hierarchy `5`, On-brand `1`
- **Strengths:**
  - The instruction "Slide right to secure your access" is at least clear as a mechanic
  - Audio alternative icon is visible (accessibility point)
- **Weaknesses:**
  - Zero travel relevance — this reads as a security page, not an Expedia page
  - "We can't tell if you're a human or a bot" is off-putting, almost hostile, for a returning customer mid-trip-plan

## 8. Promotional & Urgency Cues

- **Active promos:** None visible
- **Urgency / scarcity:** None
- **Loyalty hooks:** None — no One Key Cash mention, no member badge, nothing
- **Honesty check:** The page is technically honest about what it is, but exposing a raw session UUID (`ID: 65af10df-507e-95cf-e134-e30b820e0797ba`) at the bottom feels sloppy and slightly unnerving for a non-technical user — it reads like something broke

## 9. Engagement Likelihood

- − Hero relates to my focus area: bot wall, no travel content whatsoever
- − Easy to reach my category: no navigation visible at all
- − Eye-catching imagery in my category: no imagery period
- − Promo banner I would use: none
- − Page renders cleanly: the CAPTCHA renders, but a friction wall is not a "clean" page experience — this is a de facto layout failure for commerce
- − Imagery includes someone like me: zero imagery
- − Copy register matches mine: "We can't tell if you're a human or a bot" is not how I want to be greeted
- − Trust signals visible: none — no reviews, no badges, no free-cancellation promise
- − New / hot rail in my category: none
- − No dark patterns: the false-positive bot detection on a real user IS a dark pattern (or at minimum a serious UX failure)

**Score:** `1/10` — should equal 1 + count of "+" bullets above (zero).

**Rationale:** There is nothing on this screen that would make me want to stay. The only reason I'd complete the CAPTCHA is existing brand loyalty — and even then I'd be annoyed enough to tab over to a competitor while the slider loads.

## 10. Conversion Likelihood

- − CTA in my category: no category CTA — only a CAPTCHA slider
- − Unambiguous CTA copy: the slider CTA is unambiguous but it's about identity verification, not booking
- − Active price reduction or member pricing: none visible
- − Time-bounded credible deadline: none
- − Reachable free-shipping threshold: N/A for travel, but no equivalent (e.g. "save $X when you bundle") visible
- − Specific product page one tap away: nothing — I can't even get to the homepage
- − Sizing / fit info accessible: N/A
- − Returns / exchanges mentioned: no free-cancellation callout visible
- − Reviews / ratings visible: none
- − Trust / security signals: none — ironic, given this is literally a security page

**Score:** `1/10` — should equal 1 + count of "+" bullets (zero).

**Rationale:** There is no path to conversion on this screen. Completing the CAPTCHA is a prerequisite to even seeing the homepage, and the friction created here is enough that a high-intent user (me, trip-planning on a Sunday) loses momentum and may not come back.

## 11. Evidence

Modules visible on screen in scroll order:

- **Expedia logo** — top left, standard yellow arrow mark + wordmark
- **Bot-detection headline** — "Show us your human side... / We can't tell if you're a human or a bot."
- **CAPTCHA widget** — white card containing: image/audio toggle icons, a refresh button, slider rail with right-arrow button, instruction text "Slide right to secure your access"
- **Explanatory copy block** — paragraph explaining why verification was triggered; bulleted list of possible causes (speed of browsing, JavaScript block, shared IP `47.229.200.33`)
- **"Submit feedback" link** — plain text link at bottom of explanation block
- **Session ID string** — `ID: 65af10df-507e-95cf-e134-e30b820e0790` displayed as plain text
- **Footer hash** — `0849e9cf-0592-4eb4-b0b6-c24ead07dba7` at very bottom; purpose unclear to end user
- **Bugs / friction visible:**
  - Entire homepage is replaced by a bot-detection wall — zero commerce content reachable
  - Raw session UUIDs exposed to end user with no explanation of their purpose
  - No brand warmth, no fallback content, no loyalty recognition for what may be a returning One Key member
## Recent history

- [[2026-07-12-homepage-www.expedia.com-ellie-bundle-expedia-fap6e]] — 1/10 (2026-07-12)
- [[2026-07-05-homepage-www.expedia.com-ellie-bundle-expedia-fap6e]] — 1/10 (2026-07-05)
- [[2026-06-07-homepage-www.expedia.com-ellie-bundle-expedia-fap6e]] — 1/10 (2026-06-07)

