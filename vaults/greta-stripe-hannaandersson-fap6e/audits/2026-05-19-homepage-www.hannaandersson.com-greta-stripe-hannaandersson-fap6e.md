---
slug: 2026-05-19-homepage-www.hannaandersson.com-greta-stripe-hannaandersson-fap6e
type: site
date: 2026-05-19
persona: greta-stripe-hannaandersson-fap6e
score: "1/10"
sender: www.hannaandersson.com
subject: Homepage snapshot · www.hannaandersson.com · 2026-05-19
tags: [site-journey, score-1, sender/www-hannaandersson-com]
---
# Homepage snapshot · www.hannaandersson.com · 2026-05-19
**Score:** 1/10 · **Type:** Site journey · **2026-05-19**
## Executive summary

- I opened Hanna Andersson on my phone Sunday morning with my coffee like I always do, and instead of the iconic stripes and that cheerful color palette I love, I got hit with a bot wall. The entire viewport is a white screen with "Before we continue... Press & Hold to confirm you are a human (and not a bot)." That's it. No hero, no product, no sale banner, nothing. This isn't a homepage review — it's a friction review, and the friction is total.

## What's working

- The "Press & Hold" button renders cleanly and is tappable — technically functional as a CAPTCHA interaction.
- The Reference ID (`116e54dd-5375-11f1-be09-982988510eb9`) is visible at the bottom, which at least gives a support trail if I wanted to report the block.

## What's weak

- **The entire homepage is gated behind a bot challenge.** A logged-in, returning customer hitting the site on Sunday morning gets zero product, zero brand, zero offer — just a white screen asking me to prove I'm human.
- **No brand context on the challenge screen.** Not even a Hanna Andersson logo on the interstitial. A new shopper would have no idea what site they'd landed on.
- **"Press & Hold" is a mobile-hostile interaction pattern.** On my phone with a toddler on my lap, a press-and-hold gesture is annoying at best. It's the kind of friction that makes me close the tab and open the app instead.
- **No fallback content.** No cached page, no "loading..." state, no indication the actual site exists behind this gate.

## Recommendations

- **Add the Hanna Andersson wordmark and brand color to the challenge screen** so at minimum I know I'm in the right place while I complete the verification.
- **Replace press-and-hold with a tap-to-confirm or checkbox challenge** — mobile users one-handing a phone cannot reliably hold a tap for the required duration without triggering scroll.
- **Investigate why loyal, returning traffic is triggering the bot wall.** If this fires on mobile home browsers (which my Sunday coffee scroll absolutely is), the challenge threshold is miscalibrated and is hitting real customers.
- **Instrument the drop-off rate at this interstitial.** I'd bet a significant share of Sunday mobile opens bounce here before ever seeing a product.

## Full review
## 1. Executive Summary

I opened Hanna Andersson on my phone Sunday morning with my coffee like I always do, and instead of the iconic stripes and that cheerful color palette I love, I got hit with a bot wall. The entire viewport is a white screen with "Before we continue... Press & Hold to confirm you are a human (and not a bot)." That's it. No hero, no product, no sale banner, nothing. This isn't a homepage review — it's a friction review, and the friction is total.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy speaks to my persona: no hero rendered at all
- − Returning-shopper hook visible: none
- − Concrete offer above the fold: none
- − Unmistakable primary CTA: the only CTA is "Press & Hold" — a bot challenge, not a shopping action
- − Visual hierarchy: the page is a blank white void with centered gray text
- − No render bugs: this IS a render failure — the actual homepage never loaded
- − Demographic signals match persona: not applicable, no content
- − Current campaign / season: not visible
- − Loyalty / membership benefits: none
- − Honest offer: not applicable

The single point is the baseline. Zero rubric criteria were met because the homepage content was never delivered.

## 3. What's Working

- The "Press & Hold" button renders cleanly and is tappable — technically functional as a CAPTCHA interaction.
- The Reference ID (`116e54dd-5375-11f1-be09-982988510eb9`) is visible at the bottom, which at least gives a support trail if I wanted to report the block.

## 4. What's Weak

- **The entire homepage is gated behind a bot challenge.** A logged-in, returning customer hitting the site on Sunday morning gets zero product, zero brand, zero offer — just a white screen asking me to prove I'm human.
- **No brand context on the challenge screen.** Not even a Hanna Andersson logo on the interstitial. A new shopper would have no idea what site they'd landed on.
- **"Press & Hold" is a mobile-hostile interaction pattern.** On my phone with a toddler on my lap, a press-and-hold gesture is annoying at best. It's the kind of friction that makes me close the tab and open the app instead.
- **No fallback content.** No cached page, no "loading..." state, no indication the actual site exists behind this gate.

## 5. Recommendations

- **Add the Hanna Andersson wordmark and brand color to the challenge screen** so at minimum I know I'm in the right place while I complete the verification.
- **Replace press-and-hold with a tap-to-confirm or checkbox challenge** — mobile users one-handing a phone cannot reliably hold a tap for the required duration without triggering scroll.
- **Investigate why loyal, returning traffic is triggering the bot wall.** If this fires on mobile home browsers (which my Sunday coffee scroll absolutely is), the challenge threshold is miscalibrated and is hitting real customers.
- **Instrument the drop-off rate at this interstitial.** I'd bet a significant share of Sunday mobile opens bounce here before ever seeing a product.

## 6. Bottom Line

I closed the tab and opened the app instead — I'm not going to press and hold while my 2-year-old is grabbing at my phone.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Before we continue...`
- **Hero image:** White blank background — no image, no model, no product
- **Primary CTA:** `Press & Hold` — visible above the fold? yes — but it is a bot-verification action, not a shopping CTA
- **Scores (1-10):** Clarity `3`, Relevance to you `1`, Visual hierarchy `4`, On-brand `1`
- **Strengths:**
  - The challenge text and button are legible and centered — no layout breakage on the challenge screen itself
- **Weaknesses:**
  - Zero brand identity — no logo, no color, nothing connecting this screen to Hanna Andersson
  - The actual homepage hero never rendered; this entire section is a failure state

## 8. Promotional & Urgency Cues

- **Active promos:** none visible
- **Urgency / scarcity:** none
- **Loyalty hooks:** none
- **Honesty check:** The bot challenge itself is not manipulative, but deploying it on what appears to be routine mobile traffic is a silent dark pattern — it blocks real customers without explanation and without a branded fallback.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero loaded; the challenge page has nothing to do with kids' clothing
- − Easy to reach my category: no navigation visible at all
- − Eye-catching imagery in my category: no imagery whatsoever
- − Promo banner I would use: no banners
- − Page renders cleanly: hard no — the homepage itself failed to render
- − Imagery includes someone like me: not applicable
- − Copy register matches mine: "Press & Hold to confirm you are a human (and not a bot)" is utility text, not brand copy — doesn't match or mismatch
- − Trust signals visible: none
- − New / hot rail in my category: none
- − No dark patterns: the forced bot challenge on routine mobile traffic is friction I did not consent to

**Score:** `1/10` — should equal 1 + count of "+" bullets above.
**Rationale:** Every engagement criterion failed because the homepage content never appeared. The single point is the baseline; nothing redeemable was present above the fold.

## 10. Conversion Likelihood

- − CTA in my category: no category CTAs — only a bot-verification button
- − Unambiguous CTA copy: "Press & Hold" is unambiguous as a challenge but meaningless as a shopping action
- − Active price reduction or member pricing: none
- − Time-bounded credible deadline: none
- − Reachable free-shipping threshold: not visible
- − Specific product page one tap away: not possible — no products visible
- − Sizing / fit info accessible: not applicable
- − Returns / exchanges mentioned: not visible
- − Reviews / ratings visible: none
- − Trust / security signals: none beyond the Reference ID at the bottom

**Score:** `1/10` — should equal 1 + count of "+" bullets.
**Rationale:** Conversion is zero when the product never loads. The bot wall is an absolute conversion killer for the Sunday-morning browse-and-stock-up session that is core to how I shop this brand.

## 11. Evidence

Visible modules in the screenshot (scroll order):

- **Bot challenge interstitial** — "Before we continue..." headline, full-viewport white background
- **Challenge subtext** — "Press & Hold to confirm you are a human (and not a bot)."
- **"Press & Hold" button** — pill-shaped, blue text, thin border, centered
- **Reference ID footer** — `Reference ID 116e54dd-5375-11f1-be09-982988510eb9` in small gray text at bottom edge
- **Bugs / friction visible:**
  - Homepage content entirely blocked; no brand assets, navigation, hero, or product loaded
  - No Hanna Andersson branding on the challenge screen — a shopper with no brand recognition would have no idea what site this is
  - Press-and-hold is a poor mobile UX pattern for one-handed phone use
## Recent history

- [[2026-05-18-homepage-www.hannaandersson.com-greta-stripe-hannaandersson-fap6e]] — 1/10 (2026-05-18)
- [[2026-05-17-homepage-www.hannaandersson.com-greta-stripe-hannaandersson-fap6e]] — 1/10 (2026-05-17)
- [[2026-05-16-homepage-www.hannaandersson.com-greta-stripe-hannaandersson-fap6e]] — 1/10 (2026-05-16)

