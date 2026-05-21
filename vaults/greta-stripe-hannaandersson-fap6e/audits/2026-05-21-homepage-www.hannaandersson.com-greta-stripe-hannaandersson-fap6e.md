---
slug: 2026-05-21-homepage-www.hannaandersson.com-greta-stripe-hannaandersson-fap6e
type: site
date: 2026-05-21
persona: greta-stripe-hannaandersson-fap6e
score: "1/10"
sender: www.hannaandersson.com
subject: Homepage snapshot · www.hannaandersson.com · 2026-05-21
tags: [site-journey, score-1, sender/www-hannaandersson-com]
---
# Homepage snapshot · www.hannaandersson.com · 2026-05-21
**Score:** 1/10 · **Type:** Site journey · **2026-05-21**
## Executive summary

- I opened hannaandersson.com on my phone and the site never loaded — what I got instead was a bot-challenge wall: "Before we continue... Press & Hold to confirm you are a human (and not a bot)." There is zero brand content, zero product, zero offer visible. For a real customer on a Sunday morning with coffee, this is a dead end — the homepage simply does not exist from my perspective.

## What's working

- The challenge page itself renders cleanly — text is readable, no layout breakage in the interstitial.
- The reference ID (`2ba98eee-5508-11f1-8fd1-8fd1-b73d076e88f2`) at the bottom tells me *something* is running server-side, so the domain is live.
- That's genuinely all I can say positively from what's on screen.

## What's weak

- **The entire homepage is inaccessible.** A real customer on mobile gets a friction wall before seeing a single product or brand element.
- **Zero brand identity.** No Hanna stripes, no kids, no seasonal colors — just a gray challenge screen.
- **No offer, no CTA, no navigation.** My Sunday-morning browse-and-stock-up intent gets killed on arrival.
- **"Press & Hold" UX on mobile is awkward** — it's a desktop-centric interaction pattern that feels wrong on a phone screen and may genuinely fail for some touch gestures.
- **No fallback messaging** — there's nothing that says "you'll be right in" or reassures me the brand is behind this. It reads like a broken site, not a security check.

## Recommendations

- **Fix the mobile bot-challenge UX immediately** — if Cloudflare or a similar WAF is blocking mobile crawlers and (potentially) real users, audit the challenge threshold; a logged-in returning customer should never hit this.
- **Replace "Press & Hold" with a checkbox or invisible challenge** for mobile — press-and-hold is a poor touch pattern; standard Turnstile or reCAPTCHA v3 is invisible and doesn't interrupt the experience.
- **Add brand-context to the interstitial** — if a challenge is unavoidable, at minimum show the Hanna logo and a line like "We'll have you shopping in a second" so the user knows they're in the right place.
- **Test the authenticated/returning-customer flow separately** — if logged-in users also hit this wall, that's a loyalty-destroying bug that needs a hotfix before the semi-annual sale.

## Full review
## 1. Executive Summary

I opened hannaandersson.com on my phone and the site never loaded — what I got instead was a bot-challenge wall: "Before we continue... Press & Hold to confirm you are a human (and not a bot)." There is zero brand content, zero product, zero offer visible. For a real customer on a Sunday morning with coffee, this is a dead end — the homepage simply does not exist from my perspective.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery speaks to persona: **no hero exists** — blocked by challenge wall
- − Returning-shopper hook visible: none
- − Concrete offer above the fold: none
- − Unmistakable primary CTA: the only CTA is "Press & Hold" to prove I'm human
- − Visual hierarchy clear: nothing to evaluate
- − No render bugs: **the entire page is a render failure** — bot challenge replaces the site
- − Demographic signals match persona: none
- − Current campaign / season reflected: none
- − Loyalty / membership benefits: none
- − Honest offer: none

Score starts at 1, no rubric signals are present.

## 3. What's Working

- The challenge page itself renders cleanly — text is readable, no layout breakage in the interstitial.
- The reference ID (`2ba98eee-5508-11f1-8fd1-8fd1-b73d076e88f2`) at the bottom tells me *something* is running server-side, so the domain is live.

That's genuinely all I can say positively from what's on screen.

## 4. What's Weak

- **The entire homepage is inaccessible.** A real customer on mobile gets a friction wall before seeing a single product or brand element.
- **Zero brand identity.** No Hanna stripes, no kids, no seasonal colors — just a gray challenge screen.
- **No offer, no CTA, no navigation.** My Sunday-morning browse-and-stock-up intent gets killed on arrival.
- **"Press & Hold" UX on mobile is awkward** — it's a desktop-centric interaction pattern that feels wrong on a phone screen and may genuinely fail for some touch gestures.
- **No fallback messaging** — there's nothing that says "you'll be right in" or reassures me the brand is behind this. It reads like a broken site, not a security check.

## 5. Recommendations

- **Fix the mobile bot-challenge UX immediately** — if Cloudflare or a similar WAF is blocking mobile crawlers and (potentially) real users, audit the challenge threshold; a logged-in returning customer should never hit this.
- **Replace "Press & Hold" with a checkbox or invisible challenge** for mobile — press-and-hold is a poor touch pattern; standard Turnstile or reCAPTCHA v3 is invisible and doesn't interrupt the experience.
- **Add brand-context to the interstitial** — if a challenge is unavoidable, at minimum show the Hanna logo and a line like "We'll have you shopping in a second" so the user knows they're in the right place.
- **Test the authenticated/returning-customer flow separately** — if logged-in users also hit this wall, that's a loyalty-destroying bug that needs a hotfix before the semi-annual sale.

## 6. Bottom Line

I'd close the tab and just open the app — there is literally nothing here for me, and I'm not pressing and holding anything on my phone at 7am with a coffee in my other hand.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Before we continue...`
- **Hero image:** None — blank white background with a challenge dialog
- **Primary CTA:** `Press & Hold` — visible above the fold? yes (it's the *only* thing above the fold)
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `2`, On-brand `1`
- **Strengths:**
  - The challenge text is legible and centered — no readability issues
- **Weaknesses:**
  - This is not a homepage — it's a security wall; no brand content is present at all
  - "Press & Hold" is an unnatural mobile gesture that creates immediate friction for real shoppers

## 8. Promotional & Urgency Cues

- **Active promos:** None visible
- **Urgency / scarcity:** None visible
- **Loyalty hooks:** None visible
- **Honesty check:** The challenge itself is the dark pattern here — a real returning customer expecting to browse the semi-annual sale hits an opaque wall with no explanation of why it's there or how long it takes. That erodes trust, especially for a brand whose loyal buyers are habitual Sunday-morning browsers.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero exists — bot challenge only
- − Easy to reach my category: no navigation visible at all
- − Eye-catching imagery in my category: no imagery
- − Promo banner I would use: no banners
- − Page renders cleanly: **no** — the actual homepage failed to render; only the challenge wall loaded
- − Imagery includes someone like me: none
- − Copy register matches mine: the only copy is security boilerplate
- − Trust signals visible: none
- − New / hot rail in my category: none
- − No dark patterns: **no** — the challenge wall IS the dark pattern; a press-and-hold gate on mobile is a friction dark pattern for legitimate users

**Score:** `1/10` — should equal 1 + count of "+" bullets above.
**Rationale:** Every single engagement signal is absent because the homepage never loaded. The only thing I can interact with is a bot challenge that I'd abandon instantly.

## 10. Conversion Likelihood

- − CTA in my category: no category content visible
- − Unambiguous CTA copy: the only CTA is "Press & Hold" — not a shopping CTA
- − Active price reduction or member pricing: none visible
- − Time-bounded credible deadline: none visible
- − Reachable free-shipping threshold: none visible
- − Specific product page one tap away: none visible
- − Sizing / fit info accessible: none visible
- − Returns / exchanges mentioned: none visible
- − Reviews / ratings visible: none visible
- − Trust / security signals: none visible (ironic given the security challenge)

**Score:** `1/10` — should equal 1 + count of "+" bullets.
**Rationale:** There is nothing to convert on — I never reached a page with products, offers, or CTAs. The bot gate ended the session before it started.

## 11. Evidence

Modules visible on the homepage (in scroll order):

- **Bot challenge interstitial** — full-screen, white background, centered heading "Before we continue...", subtext "Press & Hold to confirm you are a human (and not a bot).", large pill-style "Press & Hold" button with blue text and border
- **Reference ID footer strip** — small gray text at very bottom: `Reference ID 2ba98eee-5508-11f1-8fd1-b73d076e88f2`
- **Everything else:** absent — no nav, no hero, no products, no offers, no footer, no brand identity
- **Visible friction / bugs:** The entire homepage content failed to render for this mobile session; this is a critical availability issue, not a design issue. Any real customer on mobile who hits this at the start of a browse session will bounce.
## Recent history

- [[2026-05-20-homepage-www.hannaandersson.com-greta-stripe-hannaandersson-fap6e]] — 1/10 (2026-05-20)
- [[2026-05-19-homepage-www.hannaandersson.com-greta-stripe-hannaandersson-fap6e]] — 1/10 (2026-05-19)
- [[2026-05-18-homepage-www.hannaandersson.com-greta-stripe-hannaandersson-fap6e]] — 1/10 (2026-05-18)

