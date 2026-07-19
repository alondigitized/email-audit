---
slug: 2026-07-19-homepage-www.hannaandersson.com-greta-stripe-hannaandersson-fap6e
type: site
date: 2026-07-19
persona: greta-stripe-hannaandersson-fap6e
score: "1/10"
sender: www.hannaandersson.com
subject: Homepage snapshot · www.hannaandersson.com · 2026-07-19
tags: [site-journey, score-1, sender/www-hannaandersson-com]
---
# Homepage snapshot · www.hannaandersson.com · 2026-07-19
**Score:** 1/10 · **Type:** Site journey · **2026-07-19**
## Executive summary

- I opened Hanna Andersson on my phone this Sunday morning — coffee in hand, ready to stock up — and instead of the stripes I love, I got a blank white screen demanding I "Press & Hold to confirm you are a human." The entire homepage is hidden behind a bot-detection wall. Zero product. Zero brand. Just me being interrogated before I can even shop.

## What's working

- The "Press & Hold" button is at least clearly rendered and tappable — it's functional as a challenge UI element, technically speaking.
- The reference ID at the bottom (`67204b9d-835a-11f1-a09b-10a36ba5add2`) means the session is tracked, so if something goes wrong I theoretically have a number to reference.

## What's weak

- **The entire homepage is invisible.** I came to browse Hanna stripes and instead I'm being treated like a scraper bot on Sunday morning.
- **No brand presence whatsoever.** Not a logo, not a color, not a stripe. A first-time visitor would have zero idea they landed on a children's clothing site.
- **The "Press & Hold" mechanic is mobile-hostile.** On a phone, a press-and-hold is a long-press, which triggers system-level menus (text selection, haptic feedback, context menus). This is a clunky interaction that adds friction before I've seen a single product.
- **No fallback or context.** There's no "You're on hannaandersson.com" header, no logo, no explanation of why I'm being challenged. The page is completely decontextualized — it could be a phishing attempt for all I know.
- **The white void is trust-destroying.** As a mom who pays premium for this brand and expects a polished experience, hitting a stark interrogation screen before seeing anything is jarring.

## Recommendations

- **Remove or significantly reduce this bot gate for mobile users.** The majority of my shopping is on my phone. If bot detection is necessary, use a passive/invisible challenge (like Cloudflare Turnstile's silent mode) that resolves without requiring manual interaction.
- **If the challenge must exist, brand it.** Put the Hanna Andersson logo and a stripe background behind the challenge so I at least know I'm in the right place — a branded gate is 10× less alarming than a blank white void.
- **Test the press-and-hold on actual iOS and Android devices.** This interaction pattern conflicts with native OS long-press behaviors and will frustrate mobile shoppers before they ever see the site.
- **Add a loading state or skeleton screen** so loyal customers aren't staring at a blank white page before the challenge fires — even a subtle animation buys goodwill.

## Full review
## 1. Executive Summary

I opened Hanna Andersson on my phone this Sunday morning — coffee in hand, ready to stock up — and instead of the stripes I love, I got a blank white screen demanding I "Press & Hold to confirm you are a human." The entire homepage is hidden behind a bot-detection wall. Zero product. Zero brand. Just me being interrogated before I can even shop.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery explicitly speaks to my persona: no hero visible — blocked by CAPTCHA wall
- − Returning-shopper hook visible: none — page is entirely the challenge screen
- − Concrete offer visible above the fold: none visible
- − Unmistakable primary CTA visible above the fold: the only CTA is "Press & Hold" to prove I'm human — not a shopping CTA
- − Visual hierarchy is clear: the challenge page has a hierarchy, but it's irrelevant to shopping
- − No render bugs: the bot wall IS the bug — it's blocking the entire experience
- − Demographic signals match my persona: none visible
- − Page reflects current campaign / season: cannot see any campaign content
- − Loyalty / membership benefits visible: none
- − Offer feels honest: N/A — no offer exists to evaluate

Score rationale: Starting score of 1 (baseline). I cannot award a single additional point because the homepage content is 100% hidden. The only visible UI element is a bot-verification challenge.

## 3. What's Working

- The "Press & Hold" button is at least clearly rendered and tappable — it's functional as a challenge UI element, technically speaking.
- The reference ID at the bottom (`67204b9d-835a-11f1-a09b-10a36ba5add2`) means the session is tracked, so if something goes wrong I theoretically have a number to reference.

## 4. What's Weak

- **The entire homepage is invisible.** I came to browse Hanna stripes and instead I'm being treated like a scraper bot on Sunday morning.
- **No brand presence whatsoever.** Not a logo, not a color, not a stripe. A first-time visitor would have zero idea they landed on a children's clothing site.
- **The "Press & Hold" mechanic is mobile-hostile.** On a phone, a press-and-hold is a long-press, which triggers system-level menus (text selection, haptic feedback, context menus). This is a clunky interaction that adds friction before I've seen a single product.
- **No fallback or context.** There's no "You're on hannaandersson.com" header, no logo, no explanation of why I'm being challenged. The page is completely decontextualized — it could be a phishing attempt for all I know.
- **The white void is trust-destroying.** As a mom who pays premium for this brand and expects a polished experience, hitting a stark interrogation screen before seeing anything is jarring.

## 5. Recommendations

- **Remove or significantly reduce this bot gate for mobile users.** The majority of my shopping is on my phone. If bot detection is necessary, use a passive/invisible challenge (like Cloudflare Turnstile's silent mode) that resolves without requiring manual interaction.
- **If the challenge must exist, brand it.** Put the Hanna Andersson logo and a stripe background behind the challenge so I at least know I'm in the right place — a branded gate is 10× less alarming than a blank white void.
- **Test the press-and-hold on actual iOS and Android devices.** This interaction pattern conflicts with native OS long-press behaviors and will frustrate mobile shoppers before they ever see the site.
- **Add a loading state or skeleton screen** so loyal customers aren't staring at a blank white page before the challenge fires — even a subtle animation buys goodwill.

## 6. Bottom Line

I'd close the tab and open the app instead — if Hanna's treating my Sunday morning browse like a bot attack, I'm not fighting a press-and-hold just to see pajamas.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Before we continue...`
- **Hero image:** None — completely blank white background above the challenge text
- **Primary CTA:** `Press & Hold` — visible above the fold? yes (but it's a bot-challenge CTA, not a shopping CTA)
- **Scores (1-10):** Clarity `2`, Relevance to you `1`, Visual hierarchy `3`, On-brand `1`
- **Strengths:**
  - The challenge copy and button are centered and legible — technically readable
  - The reference ID provides a session trace for support purposes
- **Weaknesses:**
  - Zero brand identity — no logo, no color, no stripe, no Hanna DNA anywhere on screen
  - Completely irrelevant to my shopping intent; I cannot evaluate any actual homepage content

## 8. Promotional & Urgency Cues

- **Active promos:** None visible — homepage is fully blocked
- **Urgency / scarcity:** None visible
- **Loyalty hooks:** None visible
- **Honesty check:** The challenge page itself isn't manipulative in intent, but presenting a blank white "Press & Hold" screen with no brand context could easily read as suspicious to any user — especially on mobile where long-press has a different system meaning

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero, no content, complete block
- − Easy to reach my category: no navigation visible at all
- − Eye-catching imagery in my category: zero imagery
- − Promo banner I would use: no banner exists on screen
- − Page renders cleanly: no — the bot wall blocking the homepage IS the render problem for a real user
- − Imagery includes someone like me: no imagery
- − Copy register matches mine: the only copy is a bot challenge — does not match a mom-shopping-on-Sunday register at all
- − Trust signals visible: none — if anything the unmarked challenge erodes trust
- − New / hot rail in my category: not visible, blocked
- − No dark patterns: the press-and-hold on mobile is a minor dark pattern (conflicts with OS behavior); the unbranded blank page is disorienting
- **Score:** `1/10` — 1 (baseline) + 0 positive signals
- **Rationale:** Every single engagement signal is zeroed out because the actual homepage is not visible. The only interaction I can take is proving I'm human, which is the opposite of engagement.

## 10. Conversion Likelihood

- − CTA in my category: none visible
- − Unambiguous CTA copy: the only CTA is bot verification — not commerce
- − Active price reduction or member pricing: none visible
- − Time-bounded credible deadline: none visible
- − Reachable free-shipping threshold: none visible
- − Specific product page one tap away: not possible — homepage is blocked
- − Sizing / fit info accessible: not visible
- − Returns / exchanges mentioned: not visible
- − Reviews / ratings visible: not visible
- − Trust / security signals: none visible; the unbranded challenge page actually reduces trust
- **Score:** `1/10` — 1 (baseline) + 0 positive signals
- **Rationale:** Conversion is impossible when the homepage is fully gated — there is nothing to convert on, no path to a product, no offer, no CTA except "prove you're human."

## 11. Evidence

In scroll order, every distinct module visible on the homepage screenshot:

- **Bot verification wall** — full-screen challenge: heading "Before we continue...", subtext "Press & Hold to confirm you are a human (and not a bot).", a large outlined "Press & Hold" button in blue
- **Reference ID footer** — small gray text at bottom: `Reference ID 67204b9d-835a-11f1-a09b-10a36ba5add2`
- **Everything else** — white void; no hero, no nav, no banner, no product imagery, no logo, no footer, no loyalty section, no editorial content, no category rail, no promotional strip — nothing
- **Bugs / friction visible:** The entire homepage experience is blocked by the bot challenge. This is the most severe possible UX failure for a returning loyal customer — 100% of homepage content is inaccessible.
## Recent history

- [[2026-07-12-homepage-www.hannaandersson.com-greta-stripe-hannaandersson-fap6e]] — 1/10 (2026-07-12)
- [[2026-07-05-homepage-www.hannaandersson.com-greta-stripe-hannaandersson-fap6e]] — 1/10 (2026-07-05)
- [[2026-06-07-homepage-www.hannaandersson.com-greta-stripe-hannaandersson-fap6e]] — 1/10 (2026-06-07)

