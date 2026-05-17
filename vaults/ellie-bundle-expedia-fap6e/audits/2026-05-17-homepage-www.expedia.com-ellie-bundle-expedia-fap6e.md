---
slug: 2026-05-17-homepage-www.expedia.com-ellie-bundle-expedia-fap6e
type: site
date: 2026-05-17
persona: ellie-bundle-expedia-fap6e
score: "1/10"
sender: www.expedia.com
subject: Homepage snapshot · www.expedia.com · 2026-05-17
tags: [site-journey, score-1, sender/www-expedia-com]
---
# Homepage snapshot · www.expedia.com · 2026-05-17
**Score:** 1/10 · **Type:** Site journey · **2026-05-17**
## Executive summary

- I opened Expedia on my phone to start my usual Sunday-morning trip-research ritual — coffee in hand, ready to bundle a flight, hotel, and car for the family — and instead I got a CAPTCHA wall. No hero, no deals, no One Key Cash reminder. The entire homepage was replaced with a bot-verification slider. That is the brand's first impression right now, and it's a complete dead-end for a real customer.

## What's working

- The page identifies itself clearly as Expedia (logo, wordmark visible at top) — at least I know I'm in the right place.
- The explanation copy under "Why is this verification required?" is unusually transparent; it lists specific reasons (browsing speed, JavaScript blocking, shared IP). That's more honest than a generic "suspicious activity" message.
- The "Submit feedback" link is present — a thin but real escape hatch for frustrated users.

## What's weak

- **The entire homepage is inaccessible.** I never reached the actual Expedia product. No bundles, no One Key promos, no flight + hotel + car search widget — everything that should convert me is completely hidden.
- **"Show us your human side"** is cute copy for a security challenge, but it immediately signals friction and kills momentum. I was in trip-research mode; now I'm in prove-you're-not-a-robot mode.
- **The slider CAPTCHA on mobile is notoriously finicky** — I can see the gesture affordance, but on a phone with shaky Sunday-morning coffee hands, this is going to fail more than it should.
- **Session ID exposed in plain text** (`ID: 33bf1a99-3638-7790-4ba1-efa17da7f437`) at the bottom with no context — looks alarming to a non-technical user.
- **No fallback path** — if the verification fails repeatedly, there's no "try a different method" or "sign in to prove it's you," which would be the obvious fix for a logged-in One Key member.

## Recommendations

- **Recognize logged-in One Key members and bypass the CAPTCHA wall entirely** — if I'm already signed into the Expedia app with my account, challenging me with a bot wall is a loyalty-eroding experience. Token-based session trust should short-circuit this.
- **Replace the slider with a one-tap "I'm not a robot" checkbox or passkey prompt** — the slider is a poor mobile UX; a tap-based challenge or biometric shortcut matches how real users interact on iOS.
- **Add a "Sign in to continue" CTA as an alternate path** — give me a way to authenticate my identity without the generic CAPTCHA, surfacing my One Key Cash balance as the hook ("Sign in to see your rewards and skip verification").
- **Suppress the raw session/IP debug string from the consumer-facing view** — the IP and session ID at the bottom (`IP 75.140.9.0`, full UUID) should not be visible to end users; it reads as an error screen, not a polished product.

## Full review
## 1. Executive Summary

I opened Expedia on my phone to start my usual Sunday-morning trip-research ritual — coffee in hand, ready to bundle a flight, hotel, and car for the family — and instead I got a CAPTCHA wall. No hero, no deals, no One Key Cash reminder. The entire homepage was replaced with a bot-verification slider. That is the brand's first impression right now, and it's a complete dead-end for a real customer.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy/imagery speaks to persona: bot-check copy only ("Show us your human side…"), zero travel content
- − Returning-shopper hook: none visible
- − Concrete offer above the fold: none
- − Unmistakable primary CTA: the only interactive element is a CAPTCHA slider
- − Visual hierarchy: the page has a clear layout, but it leads nowhere useful
- − No render bugs: the CAPTCHA widget renders correctly, so technically no broken layout
- − Demographic signals: none
- − Current campaign/season: none
- − Loyalty/membership visible: none
- − Offer feels honest: N/A — there is no offer

Only the "no render bugs" criterion is technically true. Score: 1 (base) + 1 (clean render) = **2/10** — but I'm rounding to 1 because a functioning CAPTCHA is not a homepage experience.

**1/10**
- + No visible layout breakage — the CAPTCHA widget itself renders without breaking. Every other rubric signal is absent. A wall that blocks a real customer scores at the floor.

## 3. What's Working

- The page identifies itself clearly as Expedia (logo, wordmark visible at top) — at least I know I'm in the right place.
- The explanation copy under "Why is this verification required?" is unusually transparent; it lists specific reasons (browsing speed, JavaScript blocking, shared IP). That's more honest than a generic "suspicious activity" message.
- The "Submit feedback" link is present — a thin but real escape hatch for frustrated users.

## 4. What's Weak

- **The entire homepage is inaccessible.** I never reached the actual Expedia product. No bundles, no One Key promos, no flight + hotel + car search widget — everything that should convert me is completely hidden.
- **"Show us your human side"** is cute copy for a security challenge, but it immediately signals friction and kills momentum. I was in trip-research mode; now I'm in prove-you're-not-a-robot mode.
- **The slider CAPTCHA on mobile is notoriously finicky** — I can see the gesture affordance, but on a phone with shaky Sunday-morning coffee hands, this is going to fail more than it should.
- **Session ID exposed in plain text** (`ID: 33bf1a99-3638-7790-4ba1-efa17da7f437`) at the bottom with no context — looks alarming to a non-technical user.
- **No fallback path** — if the verification fails repeatedly, there's no "try a different method" or "sign in to prove it's you," which would be the obvious fix for a logged-in One Key member.

## 5. Recommendations

- **Recognize logged-in One Key members and bypass the CAPTCHA wall entirely** — if I'm already signed into the Expedia app with my account, challenging me with a bot wall is a loyalty-eroding experience. Token-based session trust should short-circuit this.
- **Replace the slider with a one-tap "I'm not a robot" checkbox or passkey prompt** — the slider is a poor mobile UX; a tap-based challenge or biometric shortcut matches how real users interact on iOS.
- **Add a "Sign in to continue" CTA as an alternate path** — give me a way to authenticate my identity without the generic CAPTCHA, surfacing my One Key Cash balance as the hook ("Sign in to see your rewards and skip verification").
- **Suppress the raw session/IP debug string from the consumer-facing view** — the IP and session ID at the bottom (`IP 75.140.9.0`, full UUID) should not be visible to end users; it reads as an error screen, not a polished product.

## 6. Bottom Line

I'd bounce immediately and open the Expedia app instead — no way I'm wrestling a slider CAPTCHA on a Sunday morning when I've got three browser tabs and a coffee to manage.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Show us your human side...`
- **Hero image:** No image — plain white background with a CAPTCHA verification widget
- **Primary CTA:** `→` (slide right arrow on CAPTCHA slider) — visible above the fold? yes — but it is not a travel CTA
- **Scores (1-10):** Clarity `6`, Relevance to you `1`, Visual hierarchy `5`, On-brand `2`
- **Strengths:**
  - Page is legible and uncluttered; the verification task is visually clear
  - Expedia logo and wordmark anchor brand identity at the top
- **Weaknesses:**
  - Zero travel content — this is a security gate, not a homepage
  - The CAPTCHA slider is the primary interactive element, which is the wrong first ask for a high-intent trip-planner

## 8. Promotional & Urgency Cues

- **Active promos:** None — no deals, no bundle offers, no One Key Cash promos visible
- **Urgency / scarcity:** None
- **Loyalty hooks:** None — no One Key Cash mention, no member-pricing badge, no returning-user greeting
- **Honesty check:** The explanatory copy listing possible reasons for the challenge ("browsing at a speed faster than expected," "robot on the same network") is oddly honest and not manipulative — but the raw session ID and IP exposed at the bottom (`IP 75.140.9.0`, UUID string) feels like a diagnostic dump that wasn't meant for consumers. It doesn't feel dark-pattern-ish, just unpolished and mildly alarming.

## 9. Engagement Likelihood

- − Hero relates to my focus area: CAPTCHA wall has nothing to do with bundling travel
- − Easy to reach my category: no navigation visible at all
- − Eye-catching imagery in my category: no imagery whatsoever
- − Promo banner I would use: no promos visible
- + Page renders cleanly: the CAPTCHA widget loads and displays without breaking
- − Imagery includes someone like me: no imagery at all
- − Copy register matches mine: "We can't tell if you're a human or a bot" is not the tone I want from a travel brand at 9am Sunday
- − Trust signals visible: none — no review counts, no security badges
- − New / hot rail in my category: no rails, no modules
- − No dark patterns: the CAPTCHA itself isn't a dark pattern, but blocking a real customer entirely is a forced-friction pattern
- **Score:** `2/10` — 1 (base) + 1 (clean render)
- **Rationale:** The only engagement signal present is that the page technically loads without breaking. Everything else that would make me scroll or tap a travel category is absent — this is a wall, not a homepage.

## 10. Conversion Likelihood

- − CTA in my category: no travel CTA exists
- − Unambiguous CTA copy: the only CTA is the CAPTCHA slider arrow, which is unambiguous in purpose but useless for conversion
- − Active price reduction or member pricing: none
- − Time-bounded credible deadline: none
- − Reachable free-shipping threshold: N/A (travel, not retail — but no booking incentive visible either)
- − Specific product page one tap away: no product pages accessible
- − Sizing / fit info accessible: N/A
- − Returns / exchanges mentioned: none
- − Reviews / ratings visible: none
- − Trust / security signals: ironically, a security CAPTCHA page does not feel trustworthy — it feels like something went wrong
- **Score:** `1/10`
- **Rationale:** There is nothing on this screen to convert on. I cannot search, browse, or bundle anything — the gate has to clear first, and on mobile that gate is physically awkward enough that I'd likely abandon to the app.

## 11. Evidence

Visible modules in scroll order:
- **Expedia logo / wordmark** — top of page, clean, clearly branded
- **Bot-detection headline** — "Show us your human side… / We can't tell if you're a human or a bot."
- **CAPTCHA widget** — white card with a person/audio icon, a slider ("Slide right to secure your access"), and a refresh button
- **Explanatory body copy** — "Why is this verification required?" paragraph listing browser speed, JavaScript blocking, shared IP as possible causes
- **"Having problems accessing the site? Submit feedback."** link — small but present
- **Debug string** — raw session ID (`ID: 33bf1a99-3638-7790-4ba1-efa17da7f437`) and a second hash at the very bottom; exposed to end users, reads like an error state
- **Bugs / friction visible:** No actual homepage content loaded. The CAPTCHA wall is the entirety of the visible experience. The exposed IP address and session UUIDs at the bottom are unpolished and consumer-facing — that's a presentation bug even if not a rendering bug.
## Recent history

- [[2026-05-15-homepage-www.expedia.com-ellie-bundle-expedia-fap6e]] — 1/10 (2026-05-15)

