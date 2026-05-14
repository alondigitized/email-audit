---
slug: 2026-05-14-homepage-www.hannaandersson.com-greta-stripe-hannaandersson-fap6e
type: site
date: 2026-05-14
persona: greta-stripe-hannaandersson-fap6e
score: "1/10"
sender: www.hannaandersson.com
subject: Homepage snapshot · www.hannaandersson.com · 2026-05-14
tags: [site-journey, score-1, sender/www-hannaandersson-com]
---
# Homepage snapshot · www.hannaandersson.com · 2026-05-14
**Score:** 1/10 · **Type:** Site journey · **2026-05-14**
## Executive summary

- I didn't get the homepage — I got a bot wall. The entire viewport is a "Before we continue... Press & Hold to confirm you are a human (and not a bot)" interstitial, with a Reference ID at the bottom and nothing else. As a Sunday-morning phone shopper trying to check if there's a sale before my coffee gets cold, this is a dead stop. I can't see a single product, price, or piece of Hanna branding.

## What's working

- The "Press & Hold" button is clearly labeled and legible — if I absolutely had to interact with this wall, I know exactly what to tap.

## What's weak

- **The entire homepage is hidden.** I'm a logged-in Hanna loyalist on my phone on a Sunday morning and I'm being treated like a scraper bot. That friction is brand damage.
- **No brand identity visible.** Not a stripe, not a logo, not a color — the screen is plain white and gray. A new visitor would have zero idea whose site this is.
- **The "Press & Hold" mechanic is fiddly on mobile.** Tap-and-hold is not a natural gesture when I'm scrolling one-handed while my two-year-old is on my lap.
- **Reference ID is user-facing.** A raw UUID (`3bb0b6d2-4fc9-11f1-aefd-b03cbf4cd41a`) at the bottom feels like a developer error page, not a premium kids' brand.

## Recommendations

- **Remove or tune down the bot-challenge threshold for mobile traffic.** Real shoppers on iPhones shouldn't routinely hit this wall — it destroys Sunday-morning impulse sessions before they start.
- **If the challenge is unavoidable, brand it.** Put the Hanna logo and a stripe on the interstitial page so at minimum I know I'm in the right place and feel the brand warmth while I wait.
- **Use a less disruptive challenge pattern.** A background invisible check or a simple checkbox CAPTCHA is far less friction than a press-and-hold on mobile; consider Cloudflare Turnstile (invisible mode) as an alternative.
- **Pre-authenticate returning account holders.** If I'm already signed into my Hanna account via cookie, skip the wall entirely — I'm clearly not a bot.

## Full review
## 1. Executive Summary

I didn't get the homepage — I got a bot wall. The entire viewport is a "Before we continue... Press & Hold to confirm you are a human (and not a bot)" interstitial, with a Reference ID at the bottom and nothing else. As a Sunday-morning phone shopper trying to check if there's a sale before my coffee gets cold, this is a dead stop. I can't see a single product, price, or piece of Hanna branding.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery explicitly speaks to my persona: no hero at all — bot wall only
- − Returning-shopper hook visible: none
- − Concrete offer above the fold: none
- − Unmistakable primary CTA: the only CTA is "Press & Hold" to prove I'm human
- − Visual hierarchy is clear: there is no product visual hierarchy — blank white page
- − No render bugs: the page IS the bug — a challenge interstitial fully blocking the homepage
- − Demographic signals match my persona: zero content rendered
- − Page reflects current campaign/season: no campaign visible
- − Loyalty/membership benefits visible: none
- − Offer feels honest: N/A — no offer exists on screen

Score starts at 1; no rubric signal is TRUE. **Score: 1/10.**

## 3. What's Working

- The "Press & Hold" button is clearly labeled and legible — if I absolutely had to interact with this wall, I know exactly what to tap.

## 4. What's Weak

- **The entire homepage is hidden.** I'm a logged-in Hanna loyalist on my phone on a Sunday morning and I'm being treated like a scraper bot. That friction is brand damage.
- **No brand identity visible.** Not a stripe, not a logo, not a color — the screen is plain white and gray. A new visitor would have zero idea whose site this is.
- **The "Press & Hold" mechanic is fiddly on mobile.** Tap-and-hold is not a natural gesture when I'm scrolling one-handed while my two-year-old is on my lap.
- **Reference ID is user-facing.** A raw UUID (`3bb0b6d2-4fc9-11f1-aefd-b03cbf4cd41a`) at the bottom feels like a developer error page, not a premium kids' brand.

## 5. Recommendations

- **Remove or tune down the bot-challenge threshold for mobile traffic.** Real shoppers on iPhones shouldn't routinely hit this wall — it destroys Sunday-morning impulse sessions before they start.
- **If the challenge is unavoidable, brand it.** Put the Hanna logo and a stripe on the interstitial page so at minimum I know I'm in the right place and feel the brand warmth while I wait.
- **Use a less disruptive challenge pattern.** A background invisible check or a simple checkbox CAPTCHA is far less friction than a press-and-hold on mobile; consider Cloudflare Turnstile (invisible mode) as an alternative.
- **Pre-authenticate returning account holders.** If I'm already signed into my Hanna account via cookie, skip the wall entirely — I'm clearly not a bot.

## 6. Bottom Line

I'd probably press and hold because I love this brand enough to fight through it, but plenty of moms in my playgroup would just close the tab and text me asking if I know of a sale — and Hanna just lost that conversion.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Before we continue...`
- **Hero image:** None — blank white background only
- **Primary CTA:** `Press & Hold` — visible above the fold? yes (but it is a bot-verification button, not a shopping CTA)
- **Scores (1-10):** Clarity `2`, Relevance to you `1`, Visual hierarchy `3`, On-brand `1`
- **Strengths:**
  - The challenge copy and button are at least readable and centered — no layout breakage within the interstitial itself
- **Weaknesses:**
  - Zero brand presence — no logo, no color, no Hanna identity whatsoever
  - The entire above-the-fold experience is friction, not product

## 8. Promotional & Urgency Cues

- **Active promos:** None visible
- **Urgency / scarcity:** None visible
- **Loyalty hooks:** None visible
- **Honesty check:** The only element on screen is a bot-detection gate. While not manipulative in intent, being stopped at the door before seeing a single product is a form of friction that disproportionately affects legitimate mobile shoppers over bots who can be scripted to pass challenges.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero, no kids' clothes, nothing
- − Easy to reach my category: no navigation visible at all
- − Eye-catching imagery in my category: no imagery of any kind
- − Promo banner I would use: no promo banner
- − Page renders cleanly: fails — bot wall is a render failure for the intended homepage experience
- − Imagery includes someone like me: no imagery
- − Copy register matches mine: the only copy is a bot challenge — completely mismatched
- − Trust signals visible: none
- − New/hot rail in my category: none
- − No dark patterns: the press-and-hold mechanic on mobile is a dark-pattern-adjacent friction point

**Score:** `1/10` — should equal 1 + count of "+" bullets above.
**Rationale:** Every single engagement signal is absent. This is a wall, not a homepage — I can't engage with content that isn't there.

## 10. Conversion Likelihood

- − CTA in my category: none
- − Unambiguous CTA copy: the only CTA is "Press & Hold" to clear a security check
- − Active price reduction or member pricing: none
- − Time-bounded credible deadline: none
- − Reachable free-shipping threshold: none
- − Specific product page one tap away: none
- − Sizing / fit info accessible: none
- − Returns / exchanges mentioned: none
- − Reviews / ratings visible: none
- − Trust / security signals: the only signal is a bot-verification badge, which ironically signals distrust of me as the shopper

**Score:** `1/10` — should equal 1 + count of "+" bullets.
**Rationale:** There is nothing to convert on. The full shopping experience is gated behind a human-verification challenge, so conversion is literally impossible from this screen.

## 11. Evidence

Modules visible on the homepage (in scroll order):

- **Bot-verification interstitial** — "Before we continue... Press & Hold to confirm you are a human (and not a bot)" headline, gray subtext, wide outlined "Press & Hold" button in blue
- **Reference ID footer** — `Reference ID 3bb0b6d2-4fc9-11f1-aefd-b03cbf4cd41a` in small gray text at the very bottom
- **All other modules:** Not rendered — hero, nav, category rail, promotional banners, loyalty section, editorial modules, product rails, and footer are all absent from the viewport
- **Bug / friction:** The homepage is entirely replaced by a Cloudflare-style bot challenge; no brand content, navigation, or product is accessible from this screen
## Recent history

- [[2026-05-13-homepage-www.hannaandersson.com-greta-stripe-hannaandersson-fap6e]] — 1/10 (2026-05-13)
- [[2026-05-10-homepage-www.hannaandersson.com-greta-stripe-hannaandersson-fap6e]] — 1/10 (2026-05-10)
- [[2026-05-09-homepage-www.hannaandersson.com-greta-stripe-hannaandersson-fap6e]] — 1/10 (2026-05-09)

