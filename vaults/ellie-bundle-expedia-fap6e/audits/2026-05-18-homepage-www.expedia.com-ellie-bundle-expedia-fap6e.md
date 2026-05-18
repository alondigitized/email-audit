---
slug: 2026-05-18-homepage-www.expedia.com-ellie-bundle-expedia-fap6e
type: site
date: 2026-05-18
persona: ellie-bundle-expedia-fap6e
score: "1/10"
sender: www.expedia.com
subject: Homepage snapshot · www.expedia.com · 2026-05-18
tags: [site-journey, score-1, sender/www-expedia-com]
---
# Homepage snapshot · www.expedia.com · 2026-05-18
**Score:** 1/10 · **Type:** Site journey · **2026-05-18**
## Executive summary

- I didn't even get to see the homepage — Expedia hit me with a bot-detection wall the second I landed. "Show us your human side" with a slider CAPTCHA is the entire above-the-fold experience. Whatever deals they're running for Memorial Day weekend, I have no idea, because I'm stuck proving I'm not a robot before I can even look at flight bundles.

## What's working

- The Expedia logo and wordmark are clean and recognizable — at least I know I'm on the right site.
- The CAPTCHA itself renders correctly without visual breakage — it's a working slider, not a broken UI element.

## What's weak

- **The entire homepage is blocked.** I can't see a single product, deal, or navigation element.
- **"Show us your human side"** is a weird, slightly condescending headline for a travel brand to greet a real customer with on a Sunday morning.
- **IP flagging explanation** — they're surfacing raw technical detail ("IP 75.140.9.0") to a consumer. That's an engineering error screen masquerading as customer communication.
- **No fallback CTA** — there's no "having trouble? Call us" phone number or alternative entry point beyond a generic "Submit feedback" link buried at the bottom.
- **Zero trust signals** — no "Millions of travelers trust Expedia" reassurance, no security badge, nothing to make me feel okay about this weird interstitial.

## Recommendations

- **Remove raw IP addresses from the consumer-facing CAPTCHA message** — that's system debug info and it reads as alarming, not helpful.
- **Add a "continue as guest / try a different way" escape hatch** above the fold so blocked users don't just close the tab.
- **Soften the copy** — swap "We can't tell if you're a human or a bot" for something like "Quick security check — we'll have you searching in seconds" to reduce friction anxiety.
- **Investigate bot-rate thresholds for mobile web** — if a real consumer hitting the homepage on mobile triggers this wall, the threshold is too aggressive and it's costing bundle conversions.

## Full review
## 1. Executive Summary

I didn't even get to see the homepage — Expedia hit me with a bot-detection wall the second I landed. "Show us your human side" with a slider CAPTCHA is the entire above-the-fold experience. Whatever deals they're running for Memorial Day weekend, I have no idea, because I'm stuck proving I'm not a robot before I can even look at flight bundles.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy speaks to my persona: no hero, just a CAPTCHA wall
- − Returning-shopper hook: no One Key Cash balance, no recent searches, nothing
- − Concrete offer above the fold: zero — can't see any offers
- − Primary CTA: the only CTA is "slide right to secure your access"
- − Visual hierarchy: N/A — there is no content hierarchy to evaluate
- − No render bugs: this IS the bug — the entire page is a friction gate
- − Demographic signals: absent
- − Current campaign/season: completely invisible
- − Loyalty/membership visible without scrolling: no
- − Offer feels honest: N/A — no offer is shown

## 3. What's Working

- The Expedia logo and wordmark are clean and recognizable — at least I know I'm on the right site.
- The CAPTCHA itself renders correctly without visual breakage — it's a working slider, not a broken UI element.

## 4. What's Weak

- **The entire homepage is blocked.** I can't see a single product, deal, or navigation element.
- **"Show us your human side"** is a weird, slightly condescending headline for a travel brand to greet a real customer with on a Sunday morning.
- **IP flagging explanation** — they're surfacing raw technical detail ("IP 75.140.9.0") to a consumer. That's an engineering error screen masquerading as customer communication.
- **No fallback CTA** — there's no "having trouble? Call us" phone number or alternative entry point beyond a generic "Submit feedback" link buried at the bottom.
- **Zero trust signals** — no "Millions of travelers trust Expedia" reassurance, no security badge, nothing to make me feel okay about this weird interstitial.

## 5. Recommendations

- **Remove raw IP addresses from the consumer-facing CAPTCHA message** — that's system debug info and it reads as alarming, not helpful.
- **Add a "continue as guest / try a different way" escape hatch** above the fold so blocked users don't just close the tab.
- **Soften the copy** — swap "We can't tell if you're a human or a bot" for something like "Quick security check — we'll have you searching in seconds" to reduce friction anxiety.
- **Investigate bot-rate thresholds for mobile web** — if a real consumer hitting the homepage on mobile triggers this wall, the threshold is too aggressive and it's costing bundle conversions.

## 6. Bottom Line

I'm closing this tab and opening Booking.com — I came to find a Memorial Day beach trip with flights and a hotel, not to prove my humanity before I've seen a single deal.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Show us your human side...`
- **Hero image:** No image — grey/white interstitial screen with a slider CAPTCHA widget
- **Primary CTA:** `→` (arrow inside a slider to drag right) — visible above the fold? yes, but it is a bot-verification action, not a travel CTA
- **Scores (1-10):** Clarity `2`, Relevance to you `1`, Visual hierarchy `3`, On-brand `1`
- **Strengths:**
  - The slider mechanic is visually self-explanatory (drag right)
  - Expedia logo is visible so I know where I am
- **Weaknesses:**
  - There is no travel content, offer, or navigation whatsoever — this is a dead end for a customer intent on booking a bundle
  - "We can't tell if you're a human or a bot" is hostile opener copy for a brand competing hard against Google Flights and Booking

## 8. Promotional & Urgency Cues

- **Active promos:** none visible
- **Urgency / scarcity:** none visible
- **Loyalty hooks:** no One Key Cash callout, no member-pricing badge, no rewards balance
- **Honesty check:** Surfacing a raw IP address ("IP 75.140.9.0") in a consumer error message feels like a technical data leak — it's not manipulative per se, but it's jarring and could spook a privacy-conscious traveler into thinking something is wrong with their connection

## 9. Engagement Likelihood

- − Hero relates to my focus area: CAPTCHA wall has zero relation to family vacation bundling
- − Easy to reach my category: no navigation is visible at all
- − Eye-catching imagery in my category: no imagery, period
- − Promo banner I would use: no banners visible
- − Page renders cleanly: the CAPTCHA widget renders, but the entire page experience is broken from a customer standpoint
- − Imagery includes someone like me: no imagery
- − Copy register matches mine: "We can't tell if you're a human or a bot" is off-tone for a millennial mom doing Sunday-morning trip research with coffee
- − Trust signals visible: none
- − New / hot rail in my category: none
- − No dark patterns: the forced CAPTCHA before seeing any content is itself a friction dark pattern; the "Submit feedback" link is barely visible at the bottom

**Score:** `1/10` — should equal 1 + count of "+" bullets above.
**Rationale:** Every single engagement signal is absent because the actual homepage never loaded for me. There is nothing to engage with except a slider I have to pass before I can even begin shopping.

## 10. Conversion Likelihood

- − CTA in my category: no travel CTA exists
- − Unambiguous CTA copy: the only CTA is a security slider, not a booking action
- − Active price reduction or member pricing: invisible
- − Time-bounded credible deadline: invisible
- − Reachable free-shipping threshold: N/A for travel
- − Specific product page one tap away: no — I'd need to pass the CAPTCHA and then navigate
- − Sizing / fit info accessible: N/A
- − Returns / exchanges mentioned: no refund/cancellation policy visible
- − Reviews / ratings visible: none
- − Trust / security signals: ironically, the "security check" page has no trust badging (no SSL icon, no "Expedia is secure" language)

**Score:** `1/10` — should equal 1 + count of "+" bullets.
**Rationale:** I cannot convert on a page I can't access — there is literally no travel content, deal, or booking entry point on screen, so conversion probability is zero from this starting state.

## 11. Evidence

*(In scroll order — everything visible in the screenshot)*

- **Bot-detection interstitial header:** Expedia logo top-left with the yellow arrow icon
- **CAPTCHA headline:** "Show us your human side..."
- **CAPTCHA subhead:** "We can't tell if you're a human or a bot."
- **CAPTCHA widget:** A white card with a person icon, a sound icon (accessibility audio alternative), a refresh icon, and a horizontal slider labeled "Slide right to secure your access"
- **Explanation block:** Paragraph text listing possible reasons for the challenge (browsing too fast, JavaScript blocked, shared IP)
- **Raw IP disclosure:** "IP 75.140.9.0" displayed inline in the explanation text — consumer-visible system data
- **Session ID block:** Two long hash strings at the bottom of the screen
- **"Submit feedback" link:** Plain text link, very low visual weight, no styling to draw attention
- **Bugs / friction:** The entire page IS the bug — no navigation, no content, no offers, no loyalty hook, no booking widget rendered. This is a full homepage blackout for the visiting session.
## Recent history

- [[2026-05-17-homepage-www.expedia.com-ellie-bundle-expedia-fap6e]] — 1/10 (2026-05-17)
- [[2026-05-15-homepage-www.expedia.com-ellie-bundle-expedia-fap6e]] — 1/10 (2026-05-15)

