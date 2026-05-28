---
slug: 2026-05-28-homepage-www.backcountry.com-blake-gore-backcountry-fap6e
type: site
date: 2026-05-28
persona: blake-gore-backcountry-fap6e
score: "1/10"
sender: www.backcountry.com
subject: Homepage snapshot · www.backcountry.com · 2026-05-28
tags: [site-journey, score-1, sender/www-backcountry-com]
---
# Homepage snapshot · www.backcountry.com · 2026-05-28
**Score:** 1/10 · **Type:** Site journey · **2026-05-28**
## Executive summary

- Opened Backcountry on my phone and got hit with a Cloudflare bot wall before I saw a single product, hero image, or promo. The entire viewport is a "Let's confirm you are human" challenge page — orange heading, explanatory paragraph, a "Begin ›" button, and a language dropdown. That's it. There is no homepage to review, just a friction gate standing between me and the site.

## What's working

- **"Begin ›" button renders cleanly** — the orange button is visible, tappable, no layout breakage. If I have to click through a bot gate, at least it's not broken.
- **Language selector is present** — minor, but it's a signal the site is internationally aware.

## What's weak

- **The entire homepage is a CAPTCHA wall** — I came to browse new rack gear and instead got interrogated. This is the worst possible first impression for a returning customer who DMs Gearhead reps and spends real money during Friends & Family.
- **Zero brand presence** — no Backcountry logo, no nav, no hero, no product imagery. I wouldn't know what site I landed on if it weren't in my browser bar.
- **No reassurance for returning users** — the copy ("protect your account and prevent spam") is generic Cloudflare boilerplate. It reads like a suspicious email, not a trusted gear retailer welcoming back a loyal customer.
- **No bypass for logged-in / recognized sessions** — if I'm already a Backcountry account holder, a cookie or session token should be skipping this gate entirely. The fact that it isn't tells me their bot-mitigation config is blunt and untargeted.
- **Dead whitespace below the fold** — the bottom two-thirds of the screen is blank gray. It looks broken, not intentional.

## Recommendations

- **Configure Cloudflare to bypass the challenge for authenticated sessions** — if I'm logged in or have a valid Backcountry cookie, I should never see this screen. Ship this next week.
- **If the gate is necessary for unauth'd users, brand it** — drop in the Backcountry logo and a single line like "One quick check, then we'll get you to the gear." Three lines of CSS and a logo swap.
- **Suppress the challenge on direct product-URL traffic from organic or email clicks** — someone tapping a "Shop Climbing" link from a Telly email should land on the page, not a security wall.
- **Audit the bot-trigger threshold** — a human on a phone on a mobile network hitting the homepage shouldn't be triggering this. The sensitivity is miscalibrated.

## Full review
## 1. Executive Summary

Opened Backcountry on my phone and got hit with a Cloudflare bot wall before I saw a single product, hero image, or promo. The entire viewport is a "Let's confirm you are human" challenge page — orange heading, explanatory paragraph, a "Begin ›" button, and a language dropdown. That's it. There is no homepage to review, just a friction gate standing between me and the site.

## 2. Business Impact Score (1-10)

**1/10**

- − hero copy or imagery speaks to my persona: zero — the "hero" is a bot-check prompt
- − returning-shopper hook visible: none
- − concrete offer above the fold: none
- − unmistakable primary CTA in my category: "Begin ›" goes to a CAPTCHA, not gear
- − visual hierarchy: the only hierarchy is "prove you're human, then maybe shop"
- − no render bugs: technically clean, but the whole screen is the bug
- − demographic signals match my persona: Cloudflare walls age-discriminate against no one, but serve no one either
- − page reflects current campaign / season: no campaign visible whatsoever
- − loyalty / membership benefits: none
- − offer feels honest: N/A — there is no offer

Score starts at 1; zero additional rubric criteria met. **1/10**.

## 3. What's Working

- **"Begin ›" button renders cleanly** — the orange button is visible, tappable, no layout breakage. If I have to click through a bot gate, at least it's not broken.
- **Language selector is present** — minor, but it's a signal the site is internationally aware.

## 4. What's Weak

- **The entire homepage is a CAPTCHA wall** — I came to browse new rack gear and instead got interrogated. This is the worst possible first impression for a returning customer who DMs Gearhead reps and spends real money during Friends & Family.
- **Zero brand presence** — no Backcountry logo, no nav, no hero, no product imagery. I wouldn't know what site I landed on if it weren't in my browser bar.
- **No reassurance for returning users** — the copy ("protect your account and prevent spam") is generic Cloudflare boilerplate. It reads like a suspicious email, not a trusted gear retailer welcoming back a loyal customer.
- **No bypass for logged-in / recognized sessions** — if I'm already a Backcountry account holder, a cookie or session token should be skipping this gate entirely. The fact that it isn't tells me their bot-mitigation config is blunt and untargeted.
- **Dead whitespace below the fold** — the bottom two-thirds of the screen is blank gray. It looks broken, not intentional.

## 5. Recommendations

- **Configure Cloudflare to bypass the challenge for authenticated sessions** — if I'm logged in or have a valid Backcountry cookie, I should never see this screen. Ship this next week.
- **If the gate is necessary for unauth'd users, brand it** — drop in the Backcountry logo and a single line like "One quick check, then we'll get you to the gear." Three lines of CSS and a logo swap.
- **Suppress the challenge on direct product-URL traffic from organic or email clicks** — someone tapping a "Shop Climbing" link from a Telly email should land on the page, not a security wall.
- **Audit the bot-trigger threshold** — a human on a phone on a mobile network hitting the homepage shouldn't be triggering this. The sensitivity is miscalibrated.

## 6. Bottom Line

I bounced the second I saw "Let's confirm you are human" — I'm not solving a CAPTCHA to browse cams and ski skins when REI is one tap away.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Let's confirm you are human`
- **Hero image:** none — blank white background, no imagery whatsoever
- **Primary CTA:** `Begin ›` — visible above the fold? yes — but it initiates a security challenge, not a shopping flow
- **Scores (1-10):** Clarity `2`, Relevance to me `1`, Visual hierarchy `3`, On-brand `1`
- **Strengths:**
  - The orange "Begin ›" button is visually distinct and tappable on mobile
  - Copy is at least legible and grammatically correct
- **Weaknesses:**
  - No Backcountry branding anywhere in the viewport — I could be on any random Cloudflare-protected site
  - "Confirm you are human" as a hero message is arguably the single worst first impression an outdoor gear retailer could serve a loyal customer

## 8. Promotional & Urgency Cues

- **Active promos:** none
- **Urgency / scarcity:** none
- **Loyalty hooks:** none
- **Honesty check:** The copy "helps to protect your account" implies I have an account to protect, which is fine — but if I'm a logged-in account holder, there's something deeply wrong about showing me this screen at all. It feels like being carded at a bar you've been going to for five years.

## 9. Engagement Likelihood

- − Hero relates to my focus area: the "hero" is a CAPTCHA prompt, zero relation to climbing or ski-touring
- − Easy to reach my category: no nav visible, no way to reach any category
- − Eye-catching imagery in my category: no imagery at all
- − Promo banner I would use: no promo banner
- − Page renders cleanly: technically renders, but the blank lower half looks broken
- − Imagery includes someone like me: no imagery
- − Copy register matches mine: Cloudflare boilerplate does not match a 38-year-old gear hoarder's register
- − Trust signals visible: none — no reviews, badges, return policy, nothing
- − New / hot rail in my category: no rails of any kind
- − No dark patterns: the CAPTCHA gate itself is an aggressive friction dark pattern for legitimate users

**Score:** `1/10` — only the base point; zero "+" bullets above.
**Rationale:** A bot-verification wall intercepts 100% of the shopping intent before any engagement is possible. There is literally nothing to engage with.

## 10. Conversion Likelihood

- − CTA in my category: "Begin ›" goes to a bot challenge, not climbing or ski gear
- − Unambiguous CTA copy: "Begin" is unambiguous but leads nowhere useful for shopping
- − Active price reduction or member pricing: none visible
- − Time-bounded credible deadline: none
- − Reachable free-shipping threshold: none visible
- − Specific product page one tap away: no product pages accessible
- − Sizing / fit info accessible: none
- − Returns / exchanges mentioned: none
- − Reviews / ratings visible: none
- − Trust / security signals: none (ironic given the security-check context)

**Score:** `1/10` — base point only; zero "+" bullets.
**Rationale:** Conversion is a mathematical impossibility from this screen — there is nothing to buy, nothing to add to cart, and no path to a product that doesn't route through a CAPTCHA first.

## 11. Evidence

Modules visible in the screenshot (in scroll order):

- **Bot-verification challenge wall** — Cloudflare "Let's confirm you are human" full-page interstitial; orange H1, explanatory paragraph, "Begin ›" CTA button
- **Language selector** — dropdown set to "English," positioned below the CTA
- **Blank gray / white void** — lower ~60% of the viewport is empty, no content loaded below the challenge UI
- **Bugs / friction / clarity issues visible:**
  - No Backcountry logo or branding anywhere in the viewport
  - No navigation, no header, no footer
  - Bottom half of screen is dead space — visually implies a broken or stalled page load
  - The challenge is being served to what appears to be a legitimate mobile browser session, indicating an overly aggressive bot-detection config
## Recent history

- [[2026-05-23-homepage-www.backcountry.com-blake-gore-backcountry-fap6e]] — 2/10 (2026-05-23)
- [[2026-05-22-homepage-www.backcountry.com-blake-gore-backcountry-fap6e]] — 1/10 (2026-05-22)
- [[2026-05-21-homepage-www.backcountry.com-blake-gore-backcountry-fap6e]] — 2/10 (2026-05-21)

