---
slug: 2026-05-13-homepage-www.hannaandersson.com-greta-stripe-hannaandersson-fap6e
type: site
date: 2026-05-13
persona: greta-stripe-hannaandersson-fap6e
score: "1/10"
sender: www.hannaandersson.com
subject: Homepage snapshot · www.hannaandersson.com · 2026-05-13
tags: [site-journey, score-1, sender/www-hannaandersson-com]
---
# Homepage snapshot · www.hannaandersson.com · 2026-05-13
**Score:** 1/10 · **Type:** Site journey · **2026-05-13**
## Executive summary

- I opened hannaandersson.com on my phone and never saw the homepage. What loaded was a full-screen bot-verification wall — "Before we continue... Press & Hold to confirm you are a human (and not a bot)" — with nothing behind it. No hero, no stripes, no kids, no sale. For a brand whose entire relationship with me is built on Sunday-morning browsing rituals, making me prove I'm human before I see a single product is a jarring, trust-breaking first impression.

## What's working

- The "Press & Hold" button is large and tappable — at least the interstitial itself is mobile-friendly and readable.
- The reference ID at the bottom (`72421f8e-4f00-11f1-a2d7-db262e1068e6`) means a support team could investigate if I reported this, which is... something.

## What's weak

- **The entire homepage is invisible.** I am a high-LTV returning customer who has bought here for years, and I got a bot wall before I could see a single product.
- **No brand identity whatsoever.** Not a logo, not a stripe, not a color — just a white screen. Someone who had never heard of Hanna Andersson would have no idea what this site sells.
- **Dark pattern friction at entry.** "Press & Hold" on mobile is an awkward gesture that feels adversarial, not welcoming. On a Sunday morning with coffee in one hand and a toddler on my lap, I'm bouncing immediately.
- **No fallback or loading state.** There's no indication that a homepage is coming — just a blank white void around the interstitial.

## Recommendations

- **Tune the bot-detection threshold for logged-in/returning sessions.** I have purchase history with this brand. Firing a hard-block CAPTCHA on returning customers before rendering any page content is a conversion killer — whitelist known sessions or use passive fingerprinting instead of an active hold gesture.
- **If the interstitial must exist, brand it.** Add the Hanna logo and a stripe motif so the user knows they're in the right place. Even a branded spinner would be better than a white void.
- **A/B test a passive challenge** (background Cloudflare Turnstile, invisible reCAPTCHA) vs. the current active hold — the current UX introduces measurable bounce before a single product impression is served.
- **Prioritize mobile session continuity.** My repeat-purchase flow on mobile should be frictionless; the semi-annual sale is a major revenue event and blocking returning shoppers at the door costs real money.

## Full review
## 1. Executive Summary

I opened hannaandersson.com on my phone and never saw the homepage. What loaded was a full-screen bot-verification wall — "Before we continue... Press & Hold to confirm you are a human (and not a bot)" — with nothing behind it. No hero, no stripes, no kids, no sale. For a brand whose entire relationship with me is built on Sunday-morning browsing rituals, making me prove I'm human before I see a single product is a jarring, trust-breaking first impression.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery explicitly speaks to my persona: not visible — no homepage rendered
- − Returning-shopper hook visible: not visible
- − Concrete offer above the fold: not visible
- − Unmistakable primary CTA above the fold: not visible (the only CTA is "Press & Hold" for a bot check)
- − Visual hierarchy is clear: not applicable — blank white screen with an interstitial
- − No render bugs: FAIL — the entire homepage is blocked by a verification wall
- − Demographic signals match my persona: not visible
- − Page reflects current campaign/season: not visible
- − Loyalty/membership benefits visible: not visible
- − Offer feels honest: not applicable

Sole point: the page technically loaded without a crash. Every other rubric signal scored zero because no homepage content is visible.

## 3. What's Working

- The "Press & Hold" button is large and tappable — at least the interstitial itself is mobile-friendly and readable.
- The reference ID at the bottom (`72421f8e-4f00-11f1-a2d7-db262e1068e6`) means a support team could investigate if I reported this, which is... something.

## 4. What's Weak

- **The entire homepage is invisible.** I am a high-LTV returning customer who has bought here for years, and I got a bot wall before I could see a single product.
- **No brand identity whatsoever.** Not a logo, not a stripe, not a color — just a white screen. Someone who had never heard of Hanna Andersson would have no idea what this site sells.
- **Dark pattern friction at entry.** "Press & Hold" on mobile is an awkward gesture that feels adversarial, not welcoming. On a Sunday morning with coffee in one hand and a toddler on my lap, I'm bouncing immediately.
- **No fallback or loading state.** There's no indication that a homepage is coming — just a blank white void around the interstitial.

## 5. Recommendations

- **Tune the bot-detection threshold for logged-in/returning sessions.** I have purchase history with this brand. Firing a hard-block CAPTCHA on returning customers before rendering any page content is a conversion killer — whitelist known sessions or use passive fingerprinting instead of an active hold gesture.
- **If the interstitial must exist, brand it.** Add the Hanna logo and a stripe motif so the user knows they're in the right place. Even a branded spinner would be better than a white void.
- **A/B test a passive challenge** (background Cloudflare Turnstile, invisible reCAPTCHA) vs. the current active hold — the current UX introduces measurable bounce before a single product impression is served.
- **Prioritize mobile session continuity.** My repeat-purchase flow on mobile should be frictionless; the semi-annual sale is a major revenue event and blocking returning shoppers at the door costs real money.

## 6. Bottom Line

I'm closing this tab and opening the app — I am not doing a "Press & Hold" dance before I've even seen if there's a sale on.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Before we continue...`
- **Hero image:** None — blank white background with centered gray text and a bordered blue button
- **Primary CTA:** `Press & Hold` — visible above the fold? yes (but it's a bot check, not a shopping CTA)
- **Scores (1-10):** Clarity `2`, Relevance to you `1`, Visual hierarchy `4`, On-brand `1`
- **Strengths:**
  - Text is legible and button is large enough to tap on mobile
  - Clear single action — no ambiguity about what to do to proceed
- **Weaknesses:**
  - Zero brand presence — no logo, no color, no product; could be any site
  - Relevant-to-me score is 1 because the only content is a security gate, not anything I came here for

## 8. Promotional & Urgency Cues

- **Active promos:** None visible
- **Urgency / scarcity:** None visible
- **Loyalty hooks:** None visible
- **Honesty check:** The interstitial itself is the issue — it's a dark-pattern friction point that treats every visitor as a suspect. For a brand that sells trust and longevity, opening with "prove you're human" is tonally wrong.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero rendered at all
- − Easy to reach my category: no navigation visible
- − Eye-catching imagery in my category: no imagery whatsoever
- − Promo banner I would use: no banners visible
- − Page renders cleanly: FAIL — bot wall blocked all content
- − Imagery includes someone like me: no imagery
- − Copy register matches mine: the only copy is a bot-check prompt — not relevant to my shopping mindset
- − Trust signals visible: none
- − New/hot rail in my category: none visible
- − No dark patterns: FAIL — the entire above-the-fold experience IS a dark pattern (forced active CAPTCHA)

**Score:** `1/10` — should equal 1 + count of "+" bullets above.
**Rationale:** Every engagement signal requires at least some homepage content to be visible; the bot wall suppresses all of it. The only reason this doesn't score 0 is the rubric floor of 1.

## 10. Conversion Likelihood

- − CTA in my category: no category content visible
- − Unambiguous CTA copy: the only CTA is "Press & Hold" — not a shopping action
- − Active price reduction or member pricing: not visible
- − Time-bounded credible deadline: not visible
- − Reachable free-shipping threshold: not visible
- − Specific product page one tap away: not visible
- − Sizing / fit info accessible: not visible
- − Returns / exchanges mentioned: not visible
- − Reviews / ratings visible: not visible
- − Trust / security signals: not visible

**Score:** `1/10` — should equal 1 + count of "+" bullets.
**Rationale:** I cannot convert to anything when no product, offer, or category is accessible. The bot gate is a hard stop before any conversion funnel even begins.

## 11. Evidence

- **Bot-detection interstitial (full screen):** "Before we continue... / Press & Hold to confirm you are a human (and not a bot)." with a large outlined "Press & Hold" button — this is the only visible module
- **Reference ID strip (footer of interstitial):** `Reference ID 72421f8e-4f00-11f1-a2d7-db262e1068e6` in small gray text at the bottom
- **Visible bugs / friction:**
  - Homepage content entirely suppressed — no nav, no hero, no product, no footer
  - No Hanna Andersson branding anywhere in the visible viewport
  - Active CAPTCHA gesture required before any shopping content is accessible
## Recent history

- [[2026-05-10-homepage-www.hannaandersson.com-greta-stripe-hannaandersson-fap6e]] — 1/10 (2026-05-10)
- [[2026-05-09-homepage-www.hannaandersson.com-greta-stripe-hannaandersson-fap6e]] — 1/10 (2026-05-09)

