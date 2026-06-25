---
slug: 2026-06-25-homepage-www.macys.com-maddie-sale-macys-fap6e
type: site
date: 2026-06-25
persona: maddie-sale-macys-fap6e
score: "2/10"
sender: www.macys.com
subject: Homepage snapshot · www.macys.com · 2026-06-25
tags: [site-journey, score-2, sender/www-macys-com]
---
# Homepage snapshot · www.macys.com · 2026-06-25
**Score:** 2/10 · **Type:** Site journey · **2026-06-25**
## Executive summary

- Well, this is not the welcome I was expecting from Macy's. I see their logo up top with that "Celebrations start at Macy's" tagline, a flash sale banner teasing 50–70% off dresses and suits with a ticking countdown — and then a big red blocked shield and "You don't have access to this page." I got blocked, plain and simple. The flash sale caught my eye for half a second, but I never actually saw the homepage.

## What's working

- **Flash Sale countdown banner** — "50-70% off dresses, suits & more / ends in 20:44:53" is exactly my language. I live for this. That percentage range and category list (dresses, suits) would normally stop me cold.
- **"Celebrations start at Macy's" tagline** — visible in the logo area; this is warm, occasion-based positioning that resonates with my generation.
- **Search bar** — large, prominent, easy to tap on a phone. Even in the middle of a disaster page I could type what I need.
- **Phone number provided** — "1-800-289-6229" is there if I think it's a mistake. I'd actually call.

## What's weak

- **The entire homepage is an access block** — a red "no entry" shield icon and "You don't have access to this page" is the main content I see. This is a Cloudflare or bot-detection wall, not a shopping experience.
- **Reference code `0.871ca17.17823824​43.289c4828`** — meaningless to me as a shopper, just adds confusion and anxiety.
- **No Star Money / Star Rewards mention** — I came here partly to check my balance or see member pricing, and there's nothing.
- **No navigation categories visible** — normally I'd expect Women's, Shoes, Handbags across the top. The hamburger menu is there but nothing is expanded.
- **"Sign In" is in the top right but feels hollow** — if the page won't load for me, why would signing in help? No explanation is given.
- **No hero image whatsoever** — the prime real estate below the flash banner is just a broken-page void.

## Recommendations

- **Fix the geo/bot detection** — I'm a real customer on a real phone. Cloudflare blocking me from the Macy's homepage during a flash sale is a conversion-killer. Whitelist mobile Safari traffic from US consumer IPs more aggressively.
- **Surface the Flash Sale banner even on error states** — the countdown copy is the only thing that worked here; make it a deep link that bypasses the main shell if the shell fails, so I can still tap into the sale.
- **Add a "Sign In to continue" CTA directly on the block screen** — if authentication would resolve the block, say so plainly. Don't just give me a phone number and an error code.
- **Put Star Rewards balance / login prompt in the error recovery flow** — a loyal Macy's customer who gets blocked deserves a fast path back: "Sign in with your Macy's account to continue shopping."

## Full review
## 1. Executive Summary

Well, this is not the welcome I was expecting from Macy's. I see their logo up top with that "Celebrations start at Macy's" tagline, a flash sale banner teasing 50–70% off dresses and suits with a ticking countdown — and then a big red blocked shield and "You don't have access to this page." I got blocked, plain and simple. The flash sale caught my eye for half a second, but I never actually saw the homepage.

## 2. Business Impact Score (1-10)

**2/10**

- + Concrete offer IS visible (Flash Sale: 50-70% off dresses, suits & more — specific % and categories, so this criterion technically fires)
- + Visual hierarchy is partially clear — the "You don't have access" message is unmistakably the focal point, even if that's not what Macy's intended
- − Hero copy/imagery does not speak to my persona — there is no hero, just an error
- − No returning-shopper hook (no loyalty/rewards, no Star Money mention, no recently viewed)
- − No unmistakable primary CTA above the fold — "Shop now" is there but the error wall renders it moot
- − No demographic signals matching me whatsoever
- − Page has a severe render bug — a blocked-access error with a reference code is not a homepage
- − No loyalty/membership benefits visible
- − Cannot tell if offer is honest because I can't get to the page
- − Seasonal/campaign relevance unknown — all I see is a Cloudflare block

## 3. What's Working

- **Flash Sale countdown banner** — "50-70% off dresses, suits & more / ends in 20:44:53" is exactly my language. I live for this. That percentage range and category list (dresses, suits) would normally stop me cold.
- **"Celebrations start at Macy's" tagline** — visible in the logo area; this is warm, occasion-based positioning that resonates with my generation.
- **Search bar** — large, prominent, easy to tap on a phone. Even in the middle of a disaster page I could type what I need.
- **Phone number provided** — "1-800-289-6229" is there if I think it's a mistake. I'd actually call.

## 4. What's Weak

- **The entire homepage is an access block** — a red "no entry" shield icon and "You don't have access to this page" is the main content I see. This is a Cloudflare or bot-detection wall, not a shopping experience.
- **Reference code `0.871ca17.17823824​43.289c4828`** — meaningless to me as a shopper, just adds confusion and anxiety.
- **No Star Money / Star Rewards mention** — I came here partly to check my balance or see member pricing, and there's nothing.
- **No navigation categories visible** — normally I'd expect Women's, Shoes, Handbags across the top. The hamburger menu is there but nothing is expanded.
- **"Sign In" is in the top right but feels hollow** — if the page won't load for me, why would signing in help? No explanation is given.
- **No hero image whatsoever** — the prime real estate below the flash banner is just a broken-page void.

## 5. Recommendations

- **Fix the geo/bot detection** — I'm a real customer on a real phone. Cloudflare blocking me from the Macy's homepage during a flash sale is a conversion-killer. Whitelist mobile Safari traffic from US consumer IPs more aggressively.
- **Surface the Flash Sale banner even on error states** — the countdown copy is the only thing that worked here; make it a deep link that bypasses the main shell if the shell fails, so I can still tap into the sale.
- **Add a "Sign In to continue" CTA directly on the block screen** — if authentication would resolve the block, say so plainly. Don't just give me a phone number and an error code.
- **Put Star Rewards balance / login prompt in the error recovery flow** — a loyal Macy's customer who gets blocked deserves a fast path back: "Sign in with your Macy's account to continue shopping."

## 6. Bottom Line

I'd probably try refreshing once, maybe tap "Sign In" out of habit — but if this screen is still staring at me after that, I'm closing the tab and heading to Nordstrom Rack.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `You don't have access to this page`
- **Hero image:** No image — a red outlined "blocked" shield icon (circle with a diagonal slash) dominates the center of the visible area
- **Primary CTA:** `Shop now` (in the flash sale banner) — visible above the fold? yes — but rendered effectively useless by the access block below it
- **Scores (1-10):** Clarity `2`, Relevance to you `1`, Visual hierarchy `4`, On-brand `1`
- **Strengths:**
  - Flash sale banner is clear and specific with a real countdown timer
  - Search bar and "Sign In" are accessible in the nav
- **Weaknesses:**
  - The entire below-fold experience is a Cloudflare block wall, not a homepage
  - Nothing speaks to me as a returning Macy's shopper — no personalization, no loyalty, no product

## 8. Promotional & Urgency Cues

- **Active promos:** Flash Sale: 50-70% off dresses, suits & more
- **Urgency / scarcity:** Live countdown timer — "ends in 20:44:53" — this is genuinely good urgency if anyone could actually reach the page
- **Loyalty hooks:** None visible. No Star Money, no Star Rewards, no member pricing badge
- **Honesty check:** The flash sale copy is straightforward — no buried exclusions visible. But the overall experience is deceptive in the worst accidental way: the promo dangles a real deal, then a wall slams down. That's not intentional manipulation, but it feels like bait-and-switch from where I'm standing.

## 9. Engagement Likelihood

- − Hero relates to my focus area: No hero — just an error block
- − Easy to reach my category: Hamburger nav is there but unexpanded; no category shortcuts visible
- − Eye-catching imagery in my category: No product or lifestyle imagery at all
- + Promo banner I would use: Flash Sale 50-70% off dresses/suits — yes, this is exactly my wheelhouse
- − Page renders cleanly: Hard no — a Cloudflare access-denial page with a reference code is a render failure
- − Imagery includes someone like me: No imagery period
- − Copy register matches mine: The error copy ("You don't have access to this page") is clinical and off-putting, not warm
- − Trust signals visible: A phone number is there but in context of an error, it signals something went wrong
- − New / hot rail in my category: None visible
- − No dark patterns: The access block itself functions as an involuntary dark pattern — I can't get in

**Score:** `2/10` — should equal 1 + count of "+" bullets above.
**Rationale:** The flash sale banner is the lone bright spot — it's specific, time-bounded, and in categories I'd actually shop. Everything else is buried under a Cloudflare wall that kills any reason to stay.

## 10. Conversion Likelihood

- − CTA in my category: No category-specific CTA — only the generic flash sale "Shop now"
- − Unambiguous CTA copy: "Shop now" is clear enough but leads nowhere given the block
- + Active price reduction or member pricing: 50-70% off is a genuine price reduction, clearly stated
- + Time-bounded credible deadline: 20:44:53 countdown is credible and specific
- − Reachable free-shipping threshold: Not visible
- − Specific product page one tap away: No product pages accessible
- − Sizing / fit info accessible: Not visible
- − Returns / exchanges mentioned: Not visible
- − Reviews / ratings visible: None
- − Trust / security signals: None beyond the phone number

**Score:** `3/10` — should equal 1 + count of "+" bullets above.
**Rationale:** Two signals almost pulled me in — the deep discount and the ticking clock are a classic One Day Sale formula I respond to — but with the page blocked I literally cannot convert, so the score stays near the floor.

## 11. Evidence

- **Nav bar:** Macy's logo with "Celebrations start at Macy's" tagline, hamburger menu left, "Sign In" link and bag icon right
- **Search bar:** Full-width prominent search field directly below nav
- **Flash sale promotional strip:** "Flash Sale: 50-70% off dresses, suits & more / ends in 20:44:53 Shop now" — live countdown in red
- **Access block icon:** Large red outlined shield-with-slash icon (Cloudflare "blocked" visual)
- **Error reference box:** Rounded rectangle containing "Reference: 0.871ca17.17823824​43.289c4828"
- **Error headline:** Large bold "You don't have access to this page"
- **Error subtext:** "If you think this is a mistake, call us at 1-800-289-6229."
- **Footer hint:** Dark footer visible at very bottom edge — partial text "Customer Service" readable
- **Bugs / friction:** The entire main content area is a Cloudflare access-denial page. No hero, no product imagery, no category navigation, no loyalty module — the homepage failed to load for this user session.
## Recent history

- [[2026-06-11-homepage-www.macys.com-maddie-sale-macys-fap6e]] — 1/10 (2026-06-11)
- [[2026-06-04-homepage-www.macys.com-maddie-sale-macys-fap6e]] — 6/10 (2026-06-04)
- [[2026-05-28-homepage-www.macys.com-maddie-sale-macys-fap6e]] — 5/10 (2026-05-28)

