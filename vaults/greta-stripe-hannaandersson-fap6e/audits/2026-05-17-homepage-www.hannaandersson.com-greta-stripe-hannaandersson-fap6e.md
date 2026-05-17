---
slug: 2026-05-17-homepage-www.hannaandersson.com-greta-stripe-hannaandersson-fap6e
type: site
date: 2026-05-17
persona: greta-stripe-hannaandersson-fap6e
score: "1/10"
sender: www.hannaandersson.com
subject: Homepage snapshot · www.hannaandersson.com · 2026-05-17
tags: [site-journey, score-1, sender/www-hannaandersson-com]
---
# Homepage snapshot · www.hannaandersson.com · 2026-05-17
**Score:** 1/10 · **Type:** Site journey · **2026-05-17**
## Executive summary

- I opened hannaandersson.com on my phone and got a bot-gate wall before I ever saw the homepage — a full-screen "Before we continue... Press & Hold to confirm you are a human (and not a bot)" interstitial with a Reference ID at the bottom. Zero products, zero navigation, zero Hanna stripes. That is the entire visible experience. For a brand where my Sunday-morning coffee scroll is a ritual, this is a door slammed in my face.

## What's working

- The "Press & Hold" button is at least readable and clearly actionable — if I really wanted in badly enough, I know exactly what to do.

## What's weak

- **The bot gate itself** — I'm a loyal customer opening the site on a Sunday morning on my own phone. Hanna just treated me like a threat. That friction alone could send me to Carter's or Primary without a second thought.
- **No brand presence whatsoever** — no logo, no stripe, no color, no product hint. A first-time visitor would have no idea what kind of site this even is.
- **Zero recovery copy** — there's no "we're protecting your shopping experience" explanation, no brand warmth, no reassurance. Just a cold command.
- **Reference ID shown to consumers** — "Reference ID 052c02d2-5225-11f1-8b40-51a06fcf6ef6" at the bottom is a developer artifact that means nothing to a mom shopping for kids' PJs. It adds confusion, not trust.

## Recommendations

- **Move the bot challenge behind the scenes** — use a passive challenge (invisible Turnstile, hCaptcha passive mode) so real users on real phones never see this screen. My Sunday scroll should not require a CAPTCHA.
- **If a challenge is unavoidable, brand it** — put the Hanna logo, a stripe motif, and copy like "Hang tight — we're keeping your shopping safe" so the brand experience isn't completely dead during the gate.
- **Remove the raw Reference ID from the consumer-facing view** — that belongs in error logs, not in front of customers.
- **Test mobile user-agent flows** — this gate suggests the mobile crawler/preview pipeline is triggering bot detection; fix the session handling so returning shoppers (cookie-bearing real devices) bypass it entirely.

## Full review
## 1. Executive Summary

I opened hannaandersson.com on my phone and got a bot-gate wall before I ever saw the homepage — a full-screen "Before we continue... Press & Hold to confirm you are a human (and not a bot)" interstitial with a Reference ID at the bottom. Zero products, zero navigation, zero Hanna stripes. That is the entire visible experience. For a brand where my Sunday-morning coffee scroll is a ritual, this is a door slammed in my face.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy/imagery speaks to my persona: not applicable — no homepage content is visible
- − Returning-shopper hook: none visible
- − Concrete offer above the fold: none visible
- − Unmistakable primary CTA: the only CTA is "Press & Hold" to prove I'm human — that's a friction gate, not a commerce CTA
- − Visual hierarchy: no merchandise hierarchy exists
- − No render bugs: a full-page bot interstitial IS the bug from a shopper's perspective
- − Demographic signals match persona: n/a
- − Current campaign/season reflected: n/a
- − Loyalty/membership visible: none
- − Offer feels honest: n/a

Score starts at 1; no rubric criteria are satisfied because the homepage content is entirely blocked.

## 3. What's Working

- The "Press & Hold" button is at least readable and clearly actionable — if I really wanted in badly enough, I know exactly what to do.

## 4. What's Weak

- **The bot gate itself** — I'm a loyal customer opening the site on a Sunday morning on my own phone. Hanna just treated me like a threat. That friction alone could send me to Carter's or Primary without a second thought.
- **No brand presence whatsoever** — no logo, no stripe, no color, no product hint. A first-time visitor would have no idea what kind of site this even is.
- **Zero recovery copy** — there's no "we're protecting your shopping experience" explanation, no brand warmth, no reassurance. Just a cold command.
- **Reference ID shown to consumers** — "Reference ID 052c02d2-5225-11f1-8b40-51a06fcf6ef6" at the bottom is a developer artifact that means nothing to a mom shopping for kids' PJs. It adds confusion, not trust.

## 5. Recommendations

- **Move the bot challenge behind the scenes** — use a passive challenge (invisible Turnstile, hCaptcha passive mode) so real users on real phones never see this screen. My Sunday scroll should not require a CAPTCHA.
- **If a challenge is unavoidable, brand it** — put the Hanna logo, a stripe motif, and copy like "Hang tight — we're keeping your shopping safe" so the brand experience isn't completely dead during the gate.
- **Remove the raw Reference ID from the consumer-facing view** — that belongs in error logs, not in front of customers.
- **Test mobile user-agent flows** — this gate suggests the mobile crawler/preview pipeline is triggering bot detection; fix the session handling so returning shoppers (cookie-bearing real devices) bypass it entirely.

## 6. Bottom Line

I'd close the tab and open the app instead — life is too short and my coffee is getting cold.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Before we continue...` / `Press & Hold to confirm you are a human (and not a bot).`
- **Hero image:** None — solid white background only
- **Primary CTA:** `Press & Hold` — visible above the fold? yes (but it's a bot-verification action, not a shop CTA)
- **Scores (1-10):** Clarity `2`, Relevance to you `1`, Visual hierarchy `2`, On-brand `1`
- **Strengths:**
  - The instruction is at least legible and unambiguous about what to do mechanically
- **Weaknesses:**
  - Zero brand identity — no logo, color, imagery, or product signal
  - Completely irrelevant to my shopping intent; this is a security wall, not a homepage

## 8. Promotional & Urgency Cues

- **Active promos:** None visible
- **Urgency / scarcity:** None visible
- **Loyalty hooks:** None visible
- **Honesty check:** The experience itself is the problem — presenting a bot-gate as the homepage with zero brand context and a raw internal Reference ID feels cold and technically broken, not manipulative, but deeply unfriendly

## 9. Engagement Likelihood

- − Hero relates to my focus area: the "hero" is a bot verification screen — no kids' apparel, no stripes, nothing
- − Easy to reach my category: no navigation visible whatsoever
- − Eye-catching imagery in my category: no imagery at all
- − Promo banner I would use: no banners visible
- − Page renders cleanly: the interstitial renders cleanly but the homepage does not render at all — this is a critical failure
- − Imagery includes someone like me: no imagery present
- − Copy register matches mine: the copy is technical/security-speak, the opposite of Hanna's warm family tone
- − Trust signals visible: a Reference ID is the only text besides the gate — that is an anti-trust-signal
- − New/hot rail in my category: none visible
- − No dark patterns: a forced full-screen interaction gate before any content loads is itself a dark pattern

**Score:** `1/10` — should equal 1 + count of "+" bullets above (zero "+" bullets, score floors at 1).
**Rationale:** The entire above-the-fold experience is a bot-gate interstitial; not a single engagement signal for a returning Hanna customer is present.

## 10. Conversion Likelihood

- − CTA in my category: no category CTA visible
- − Unambiguous CTA copy: the only CTA is "Press & Hold" — unambiguous as a gate, meaningless as commerce
- − Active price reduction or member pricing: none visible
- − Time-bounded credible deadline: none visible
- − Reachable free-shipping threshold: none visible
- − Specific product page one tap away: not possible — no products visible
- − Sizing / fit info accessible: none visible
- − Returns / exchanges mentioned: none visible
- − Reviews / ratings visible: none visible
- − Trust / security signals: none visible (the Reference ID is the opposite of a trust signal)

**Score:** `1/10` — zero "+" bullets, floors at 1.
**Rationale:** There is literally nothing to convert on — I would have to pass a bot challenge just to see the first product, and at that point I've already lost the impulse.

## 11. Evidence

Visible modules in scroll order (entire viewport captured):
- **Bot-gate interstitial** — headline "Before we continue...", subtext "Press & Hold to confirm you are a human (and not a bot).", single "Press & Hold" button with blue text in a rounded-rectangle outline style
- **Footer-level text** — "Reference ID 052c02d2-5225-11f1-8b40-51a06fcf6ef6" in small gray text at the very bottom of the screen
- **Bugs / friction visible:** The entire homepage is blocked — no nav bar, no logo, no hero image, no category tiles, no promotional banners, no product content of any kind is rendered. This is a complete render failure from a shopper's perspective.
## Recent history

- [[2026-05-16-homepage-www.hannaandersson.com-greta-stripe-hannaandersson-fap6e]] — 1/10 (2026-05-16)
- [[2026-05-15-homepage-www.hannaandersson.com-greta-stripe-hannaandersson-fap6e]] — 1/10 (2026-05-15)
- [[2026-05-14-homepage-www.hannaandersson.com-greta-stripe-hannaandersson-fap6e]] — 1/10 (2026-05-14)

