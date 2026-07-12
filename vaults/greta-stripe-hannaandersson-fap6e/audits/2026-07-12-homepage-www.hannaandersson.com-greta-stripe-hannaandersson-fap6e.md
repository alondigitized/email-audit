---
slug: 2026-07-12-homepage-www.hannaandersson.com-greta-stripe-hannaandersson-fap6e
type: site
date: 2026-07-12
persona: greta-stripe-hannaandersson-fap6e
score: "1/10"
sender: www.hannaandersson.com
subject: Homepage snapshot · www.hannaandersson.com · 2026-07-12
tags: [site-journey, score-1, sender/www-hannaandersson-com]
---
# Homepage snapshot · www.hannaandersson.com · 2026-07-12
**Score:** 1/10 · **Type:** Site journey · **2026-07-12**
## Executive summary

- I opened Hanna Andersson on my phone Sunday morning, coffee in hand, fully ready to browse the summer sale — and got a blank white screen with a bot-check gate instead of a homepage. All I can see is "Before we continue… Press & Hold to confirm you are a human (and not a bot)." Zero product. Zero brand. Zero Hanna stripes. This is a bot-detection wall (Cloudflare or similar), and it ate my first impression entirely.

## What's working

- The "Press & Hold" button is at least clearly labeled and tappable — no ambiguity about what action to take to proceed past the gate.
- The reference ID (`4d7d27d9-7dda-11f1-9c8f-b87cce88c521`) is displayed for support escalation, which is a small functional positive if I needed to report an issue.

## What's weak

- **The homepage never loaded.** A loyal customer who comes here on purpose — me, a self-described Hanna obsessive — hits a blank white wall before seeing a single stripe.
- **No brand presence whatsoever.** No logo, no color, no typography. If I didn't know what site I typed in, I'd have no idea this is Hanna Andersson.
- **"Press & Hold" is a mobile-hostile gesture.** On a phone with one hand and a coffee in the other, a press-and-hold CAPTCHA is actively frustrating. A standard checkbox or tap challenge would be far less annoying.
- **Zero content above the fold.** No offer, no nav, no sale banner — nothing to motivate me to bother completing the gate.
- **The interstitial looks phishing-adjacent.** A generic white page with no brand context asking me to "Press & Hold" is the kind of pattern that makes cautious users close the tab.

## Recommendations

- **Brand the gate wall.** If a bot-check is unavoidable, at minimum show the Hanna Andersson logo, the signature stripe motif, and a reassuring line like "Just making sure it's you — back to the stripes in a second." Costs nothing to implement.
- **Swap "Press & Hold" for a single tap or invisible challenge.** Mobile shoppers browsing one-handed should not have to perform a physical hold gesture to see a kids' clothing site. Use Cloudflare Turnstile's invisible mode instead.
- **Show a teaser headline behind the gate.** Blur or dim a real hero image in the background so I can see what I'm about to get — the sale banner, the new arrivals, the matching PJs. Give me a reason to complete the gate.
- **Test logged-in returning customers against this flow.** I should never see a bot wall if I have a session cookie or am logged in. Gate new sessions only.

## Full review
## 1. Executive Summary

I opened Hanna Andersson on my phone Sunday morning, coffee in hand, fully ready to browse the summer sale — and got a blank white screen with a bot-check gate instead of a homepage. All I can see is "Before we continue… Press & Hold to confirm you are a human (and not a bot)." Zero product. Zero brand. Zero Hanna stripes. This is a bot-detection wall (Cloudflare or similar), and it ate my first impression entirely.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery explicitly speaks to my persona: no hero visible, only a CAPTCHA wall
- − Returning-shopper hook visible: none
- − Concrete offer above the fold: none
- − Unmistakable primary CTA: the only CTA is "Press & Hold" — not a shop button
- − Visual hierarchy is clear: the wall is visually minimal but completely irrelevant to shopping
- − No render bugs: this IS a render/access failure — the homepage never loaded
- − Demographic signals match my persona: no content visible
- − Page reflects current campaign/season: cannot determine
- − Loyalty/membership benefits visible: none
- − Offer feels honest: N/A — no offer is presented

Starting score of 1, and zero rubric signals are present. The brand's homepage is completely inaccessible.

## 3. What's Working

- The "Press & Hold" button is at least clearly labeled and tappable — no ambiguity about what action to take to proceed past the gate.
- The reference ID (`4d7d27d9-7dda-11f1-9c8f-b87cce88c521`) is displayed for support escalation, which is a small functional positive if I needed to report an issue.

## 4. What's Weak

- **The homepage never loaded.** A loyal customer who comes here on purpose — me, a self-described Hanna obsessive — hits a blank white wall before seeing a single stripe.
- **No brand presence whatsoever.** No logo, no color, no typography. If I didn't know what site I typed in, I'd have no idea this is Hanna Andersson.
- **"Press & Hold" is a mobile-hostile gesture.** On a phone with one hand and a coffee in the other, a press-and-hold CAPTCHA is actively frustrating. A standard checkbox or tap challenge would be far less annoying.
- **Zero content above the fold.** No offer, no nav, no sale banner — nothing to motivate me to bother completing the gate.
- **The interstitial looks phishing-adjacent.** A generic white page with no brand context asking me to "Press & Hold" is the kind of pattern that makes cautious users close the tab.

## 5. Recommendations

- **Brand the gate wall.** If a bot-check is unavoidable, at minimum show the Hanna Andersson logo, the signature stripe motif, and a reassuring line like "Just making sure it's you — back to the stripes in a second." Costs nothing to implement.
- **Swap "Press & Hold" for a single tap or invisible challenge.** Mobile shoppers browsing one-handed should not have to perform a physical hold gesture to see a kids' clothing site. Use Cloudflare Turnstile's invisible mode instead.
- **Show a teaser headline behind the gate.** Blur or dim a real hero image in the background so I can see what I'm about to get — the sale banner, the new arrivals, the matching PJs. Give me a reason to complete the gate.
- **Test logged-in returning customers against this flow.** I should never see a bot wall if I have a session cookie or am logged in. Gate new sessions only.

## 6. Bottom Line

I'd push through the gate because I *know* Hanna, but an average mom who found the site from a Google ad would close the tab in five seconds — this is a conversion killer at the very first touch.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Before we continue...`
- **Hero image:** None — white background with centered text block only
- **Primary CTA:** `Press & Hold` — visible above the fold? yes (but it is a bot-gate action, not a shop CTA)
- **Scores (1-10):** Clarity `4`, Relevance to you `1`, Visual hierarchy `5`, On-brand `1`
- **Strengths:**
  - The text is legible and the single action is unambiguous in isolation
  - Centered layout has no visual clutter
- **Weaknesses:**
  - Completely off-brand — no logo, no stripes, no identity
  - Relevance to me as a shopper is zero; this is pure friction

## 8. Promotional & Urgency Cues

- **Active promos:** None visible
- **Urgency / scarcity:** None visible
- **Loyalty hooks:** None visible
- **Honesty check:** The gate itself isn't deceptive, but the press-and-hold mechanic on mobile is an accessibility and usability concern; on a low-end phone this could feel broken or suspicious

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero, only a gate screen
- − Easy to reach my category: no navigation visible at all
- − Eye-catching imagery in my category: no imagery visible
- − Promo banner I would use: no banners
- − Page renders cleanly: the gate renders, but the homepage did not — this is a failure state
- − Imagery includes someone like me: no imagery
- − Copy register matches mine: "Before we continue… Press & Hold" is cold, clinical, zero warmth
- − Trust signals visible: none
- − New/hot rail in my category: none
- − No dark patterns: the press-and-hold on mobile is a friction dark pattern; minus

**Score:** `1/10` — every signal is absent because the homepage was blocked.
- **Rationale:** There is nothing on this screen that relates to me as a Hanna shopper; the gate consumed 100% of the viewport and delivered zero brand value.

## 10. Conversion Likelihood

- − CTA in my category: no shopping CTA present
- − Unambiguous CTA copy: the only CTA is "Press & Hold" — not a conversion action
- − Active price reduction or member pricing: none visible
- − Time-bounded credible deadline: none
- − Reachable free-shipping threshold: none
- − Specific product page one tap away: requires passing the gate first, then multiple additional taps
- − Sizing / fit info accessible: none
- − Returns / exchanges mentioned: none
- − Reviews / ratings visible: none
- − Trust / security signals: none

**Score:** `1/10` — no conversion signals are accessible because the homepage never loaded.
- **Rationale:** I can't convert from a bot wall; every single conversion criterion requires getting past this screen first, and then assumes the actual homepage does its job — which I cannot evaluate from this screenshot.

## 11. Evidence

Visible modules in scroll order (full viewport captured):

- **Bot-verification interstitial** — full-screen white overlay with heading "Before we continue...", subtext "Press & Hold to confirm you are a human (and not a bot).", and a large pill-shaped "Press & Hold" button in blue outline style
- **Reference ID footer** — small gray text at bottom: `Reference ID 4d7d27d9-7dda-11f1-9c8f-b87cce88c521`
- **Bugs / friction:** The homepage itself is entirely absent — no nav, no hero, no product content, no brand identity loaded. This is either a bot-detection block (Cloudflare challenge) or a site availability failure. Either way it is a complete above-the-fold failure for a real mobile shopper.
## Recent history

- [[2026-07-05-homepage-www.hannaandersson.com-greta-stripe-hannaandersson-fap6e]] — 1/10 (2026-07-05)
- [[2026-06-07-homepage-www.hannaandersson.com-greta-stripe-hannaandersson-fap6e]] — 1/10 (2026-06-07)
- [[2026-05-31-homepage-www.hannaandersson.com-greta-stripe-hannaandersson-fap6e]] — 1/10 (2026-05-31)

