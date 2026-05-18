---
slug: 2026-05-18-homepage-www.hannaandersson.com-greta-stripe-hannaandersson-fap6e
type: site
date: 2026-05-18
persona: greta-stripe-hannaandersson-fap6e
score: "1/10"
sender: www.hannaandersson.com
subject: Homepage snapshot · www.hannaandersson.com · 2026-05-18
tags: [site-journey, score-1, sender/www-hannaandersson-com]
---
# Homepage snapshot · www.hannaandersson.com · 2026-05-18
**Score:** 1/10 · **Type:** Site journey · **2026-05-18**
## Executive summary

- I opened hannaandersson.com on a Sunday morning, coffee in hand, ready to check if the semi-annual sale had any striped PJs left in my kids' sizes — and I got a bot gate instead. The entire first screen is a press-and-hold human verification challenge (Reference ID: 50a92832-52ab-11f1-ad5c-4ed9264e425e). There is no hero, no sale banner, no stripes, no product — just a blank white page with "Before we continue… Press & Hold to confirm you are a human (and not a bot)." This is not a homepage experience; it's a wall.

## What's working

- The challenge prompt is legible — "Before we continue… Press & Hold" is clearly written in plain English, at least I'm not confused about what is being asked of me.
- The Reference ID at the bottom is small but present — if this were a real error I could at least give support something to work with.

## What's weak

- **The entire homepage is inaccessible.** Sunday morning is exactly when a loyal Hanna customer like me shops. Hitting a bot gate before seeing a single stripe or product is a full experience failure.
- **No brand identity whatsoever.** There is no Hanna Andersson logo, no color, no recognizable stripe. A first-time visitor would have zero idea what brand they landed on.
- **Press-and-hold is a mobile-hostile pattern.** On a phone, this interaction is fiddly and annoying — especially one-handed with a coffee mug in the other hand. It asks for effort before delivering any value.
- **No fallback or context.** There's no "loading your experience," no brand messaging, no explanation of why the gate exists. It just feels like a broken site.
- **Zero personalization signal.** Even if I were a logged-in rewards member, none of that data could surface behind this wall.

## Recommendations

- **Remove or fast-path the bot gate for returning customers / known IPs.** If someone has purchase history or a session cookie, skip the challenge entirely — loyal Hanna shoppers should never see this.
- **If the gate must exist, brand it.** Put the Hanna logo and a signature stripe on the challenge screen so it at least feels intentional, not broken. A simple "We're getting things ready — just a quick check!" in Hanna's voice would land very differently.
- **Replace press-and-hold with a passive challenge** (invisible reCAPTCHA, Cloudflare Turnstile) that resolves without manual interaction. Mobile shoppers should not have to hold a button to see organic cotton pajamas.
- **Add a loading state or skeleton screen** so the page doesn't appear completely blank while the challenge resolves — perceived performance matters on mobile.

## Full review
## 1. Executive Summary

I opened hannaandersson.com on a Sunday morning, coffee in hand, ready to check if the semi-annual sale had any striped PJs left in my kids' sizes — and I got a bot gate instead. The entire first screen is a press-and-hold human verification challenge (Reference ID: 50a92832-52ab-11f1-ad5c-4ed9264e425e). There is no hero, no sale banner, no stripes, no product — just a blank white page with "Before we continue… Press & Hold to confirm you are a human (and not a bot)." This is not a homepage experience; it's a wall.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy / imagery speaks to my persona: no hero rendered — zero signal
- − Returning-shopper hook visible: none — the page has no loyalty, account, or rewards element
- − Concrete offer above the fold: none — no %, no $, no threshold
- − Unmistakable primary CTA: the only CTA is "Press & Hold" — this is friction, not a shop button
- − Visual hierarchy is clear: the screen is almost entirely white; nothing guides the eye to content
- − No render bugs: the entire homepage failed to render — this IS the bug
- − Demographic signals match my persona: none visible
- − Page reflects current campaign / season: none visible
- − Loyalty / membership benefits visible: none visible
- − Offer feels honest: N/A — nothing to evaluate

## 3. What's Working

- The challenge prompt is legible — "Before we continue… Press & Hold" is clearly written in plain English, at least I'm not confused about what is being asked of me.
- The Reference ID at the bottom is small but present — if this were a real error I could at least give support something to work with.

## 4. What's Weak

- **The entire homepage is inaccessible.** Sunday morning is exactly when a loyal Hanna customer like me shops. Hitting a bot gate before seeing a single stripe or product is a full experience failure.
- **No brand identity whatsoever.** There is no Hanna Andersson logo, no color, no recognizable stripe. A first-time visitor would have zero idea what brand they landed on.
- **Press-and-hold is a mobile-hostile pattern.** On a phone, this interaction is fiddly and annoying — especially one-handed with a coffee mug in the other hand. It asks for effort before delivering any value.
- **No fallback or context.** There's no "loading your experience," no brand messaging, no explanation of why the gate exists. It just feels like a broken site.
- **Zero personalization signal.** Even if I were a logged-in rewards member, none of that data could surface behind this wall.

## 5. Recommendations

- **Remove or fast-path the bot gate for returning customers / known IPs.** If someone has purchase history or a session cookie, skip the challenge entirely — loyal Hanna shoppers should never see this.
- **If the gate must exist, brand it.** Put the Hanna logo and a signature stripe on the challenge screen so it at least feels intentional, not broken. A simple "We're getting things ready — just a quick check!" in Hanna's voice would land very differently.
- **Replace press-and-hold with a passive challenge** (invisible reCAPTCHA, Cloudflare Turnstile) that resolves without manual interaction. Mobile shoppers should not have to hold a button to see organic cotton pajamas.
- **Add a loading state or skeleton screen** so the page doesn't appear completely blank while the challenge resolves — perceived performance matters on mobile.

## 6. Bottom Line

I'd close the tab and open the app instead — or just wait for their email to land in my inbox tomorrow, because this is not how I want to spend my Sunday morning.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Before we continue...`
- **Hero image:** None — the screen is white with no imagery of any kind
- **Primary CTA:** `Press & Hold` — visible above the fold? yes — but it is a bot-verification button, not a shop/sale/loyalty CTA
- **Scores (1-10):** Clarity `3`, Relevance to you `1`, Visual hierarchy `2`, On-brand `1`
- **Strengths:**
  - The text is readable and the button is full-width, so mechanically the challenge is clear
- **Weaknesses:**
  - Zero brand presence — no logo, no color, no product — this could be any site or no site
  - Completely irrelevant to my shopping intent; the only "action" available has nothing to do with kids' clothing

## 8. Promotional & Urgency Cues

- **Active promos:** None visible
- **Urgency / scarcity:** None visible
- **Loyalty hooks:** None visible
- **Honesty check:** The challenge itself is the concern — it is a dark pattern in the sense that it demands effort from the user (press and hold) before delivering any brand value. There is no explanation for why this wall exists, which erodes trust before the shopping experience even begins.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero rendered at all
- − Easy to reach my category: no navigation visible
- − Eye-catching imagery in my category: no imagery of any kind
- − Promo banner I would use: no banners
- − Page renders cleanly: hard no — the homepage did not load; a challenge screen is a render failure for my purposes
- − Imagery includes someone like me: no imagery at all
- − Copy register matches mine: the only copy is a bot challenge — not relevant to my shopping register
- − Trust signals visible: the Reference ID at the bottom actually reads as a system/error code, which undermines trust
- − New / hot rail in my category: none
- − No dark patterns: press-and-hold on mobile is a friction dark pattern that makes me want to bounce

**Score:** `1/10` — should equal 1 + count of "+" bullets above.
**Rationale:** Every single engagement signal is absent because the homepage never loaded. The only content is a friction gate that gives me a reason to leave, not a reason to stay.

## 10. Conversion Likelihood

- − CTA in my category: the only CTA is "Press & Hold" — not a shop button
- − Unambiguous CTA copy: the challenge CTA is unambiguous, but it converts to nothing I want
- − Active price reduction or member pricing: none visible
- − Time-bounded credible deadline: none visible
- − Reachable free-shipping threshold: none visible
- − Specific product page one tap away: none — no navigation, no products
- − Sizing / fit info accessible: none visible
- − Returns / exchanges mentioned: none visible
- − Reviews / ratings visible: none visible
- − Trust / security signals: none visible (the Reference ID reads as an error, not a trust badge)

**Score:** `1/10` — should equal 1 + count of "+" bullets.
**Rationale:** There is nothing to convert on. The page delivered a bot challenge and nothing else — no product, no price, no category path, no reason to hand over my credit card.

## 11. Evidence

Visible modules in scroll order (based solely on what is in the screenshot):

- **Bot verification gate:** Full-screen white background, centered text "Before we continue…" / "Press & Hold to confirm you are a human (and not a bot)." — this is the only content module visible
- **Press & Hold button:** Large rounded-corner button, blue text on white fill with blue border — the sole interactive element
- **Reference ID footer:** Small gray text at bottom: "Reference ID 50a92832-52ab-11f1-ad5c-4ed9264e425e" — reads as a system/error identifier, no brand content
- **Bugs / friction / clarity issues visible in the screenshot:**
  - Homepage content did not render — the entire site is gated behind a bot challenge
  - No Hanna Andersson branding of any kind (no logo, no brand colors, no typography system)
  - No navigation, no hero, no product imagery, no promotional content
  - Press-and-hold interaction is a known mobile UX friction point
## Recent history

- [[2026-05-17-homepage-www.hannaandersson.com-greta-stripe-hannaandersson-fap6e]] — 1/10 (2026-05-17)
- [[2026-05-16-homepage-www.hannaandersson.com-greta-stripe-hannaandersson-fap6e]] — 1/10 (2026-05-16)
- [[2026-05-15-homepage-www.hannaandersson.com-greta-stripe-hannaandersson-fap6e]] — 1/10 (2026-05-15)

