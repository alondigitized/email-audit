---
slug: 2026-05-22-homepage-www.adidas.com-axel-stripe-adidas-fap6e
type: site
date: 2026-05-22
persona: axel-stripe-adidas-fap6e
score: "1/10"
sender: www.adidas.com
subject: Homepage snapshot · www.adidas.com · 2026-05-22
tags: [site-journey, score-1, sender/www-adidas-com]
---
# Homepage snapshot · www.adidas.com · 2026-05-22
**Score:** 1/10 · **Type:** Site journey · **2026-05-22**
## Executive summary

- I didn't get a homepage — I got a wall. Adidas.com hit me with a security block the moment I landed, full-screen error message, no content, no CTA, nothing. As someone who opens the CONFIRMED app daily and pre-orders drops, being treated like a bot by my own brand is genuinely embarrassing for them. Whatever their WAF is doing, it just hard-blocked a loyal customer.

## What's working

- The adidas trefoil logo renders cleanly and is immediately recognizable — brand identity survives even the error state.
- The typography on the error message is bold and legible, consistent with adidas's typeface system — at least the design system held up under failure.

## What's weak

- The entire homepage failed to load — I got a security block page reading "UNFORTUNATELY WE ARE UNABLE TO GIVE YOU ACCESS TO OUR SITE AT THIS TIME." That's the complete above-the-fold experience.
- Reference Error `0.4ed7ce17.1779444578.709a256` is exposed raw to the user — zero context, zero recovery path visible in the viewport.
- No retry button, no "go to app" CTA, no customer service link visible — the page just dead-ends me.
- The message "A security issue was automatically identified" reads like I did something wrong, which is a terrible brand tone to hit a loyal customer with.

## Recommendations

- Add a recovery CTA to the block page — "Open in the CONFIRMED App" or "Try again" button — so the session isn't completely dead for mobile shoppers.
- Rewrite the error copy away from accusatory framing; something like "We couldn't verify your connection — try refreshing" is less alienating than implying I triggered a security flag.
- Expose a customer service link or chat widget on the block page so high-intent users (like someone about to pre-order a drop) don't just disappear.
- Audit the WAF rules — blocking what is likely a standard mobile browser session on the brand's own homepage is a conversion-destruction event, not a security win.

## Full review
## 1. Executive Summary

I didn't get a homepage — I got a wall. Adidas.com hit me with a security block the moment I landed, full-screen error message, no content, no CTA, nothing. As someone who opens the CONFIRMED app daily and pre-orders drops, being treated like a bot by my own brand is genuinely embarrassing for them. Whatever their WAF is doing, it just hard-blocked a loyal customer.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy/imagery for my persona: no hero, error page only
- − Returning-shopper hook: none visible
- − Concrete offer above the fold: none
- − Primary CTA above the fold: none
- − Visual hierarchy: the eye lands on a reference error string and a bolded block message — not a product
- − No render bugs: the entire page IS a render/access failure
- − Demographic signals: none
- − Current campaign/season: none
- − Loyalty/membership visible: none
- − Honest offer: no offer exists to evaluate

Score: 1 (base score — zero rubric criteria met)

## 3. What's Working

- The adidas trefoil logo renders cleanly and is immediately recognizable — brand identity survives even the error state.
- The typography on the error message is bold and legible, consistent with adidas's typeface system — at least the design system held up under failure.

## 4. What's Weak

- The entire homepage failed to load — I got a security block page reading "UNFORTUNATELY WE ARE UNABLE TO GIVE YOU ACCESS TO OUR SITE AT THIS TIME." That's the complete above-the-fold experience.
- Reference Error `0.4ed7ce17.1779444578.709a256` is exposed raw to the user — zero context, zero recovery path visible in the viewport.
- No retry button, no "go to app" CTA, no customer service link visible — the page just dead-ends me.
- The message "A security issue was automatically identified" reads like I did something wrong, which is a terrible brand tone to hit a loyal customer with.

## 5. Recommendations

- Add a recovery CTA to the block page — "Open in the CONFIRMED App" or "Try again" button — so the session isn't completely dead for mobile shoppers.
- Rewrite the error copy away from accusatory framing; something like "We couldn't verify your connection — try refreshing" is less alienating than implying I triggered a security flag.
- Expose a customer service link or chat widget on the block page so high-intent users (like someone about to pre-order a drop) don't just disappear.
- Audit the WAF rules — blocking what is likely a standard mobile browser session on the brand's own homepage is a conversion-destruction event, not a security win.

## 6. Bottom Line

I bounced immediately — not by choice, but because the site threw me out and gave me no way back in.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `UNFORTUNATELY WE ARE UNABLE TO GIVE YOU ACCESS TO OUR SITE AT THIS TIME.`
- **Hero image:** None — white background with adidas wordmark logo only
- **Primary CTA:** None — not visible above the fold; no button exists
- **Scores (1-10):** Clarity `2`, Relevance to you `1`, Visual hierarchy `2`, On-brand `1`
- **Strengths:**
  - Logo is clean and renders correctly
  - Text is large and legible — you cannot miss the error
- **Weaknesses:**
  - Zero product, offer, or brand storytelling — this is a dead end
  - Tone is accusatory ("security issue was automatically identified") which is the opposite of welcome-back energy for a loyal customer

## 8. Promotional & Urgency Cues

- **Active promos:** none
- **Urgency / scarcity:** none
- **Loyalty hooks:** none
- **Honesty check:** The phrase "A security issue was automatically identified, when you tried to access the website" implicitly frames the visitor as a threat. For a daily-app user who pre-orders drops, that's a trust-destroying message with zero factual basis from my end.

## 9. Engagement Likelihood

- − Hero relates to my focus area: error page, no product content whatsoever
- − Easy to reach my category: no navigation visible
- − Eye-catching imagery in my category: no imagery
- − Promo banner I would use: no promo content
- − Page renders cleanly: hard block, this is a failed render by definition
- − Imagery includes someone like me: none
- − Copy register matches mine: error message copy is cold and accusatory — not my register
- − Trust signals visible: none
- − New / hot rail in my category: none
- − No dark patterns: the block itself is a dark pattern — it traps me with no exit

**Score:** `1/10` — no engagement criteria met; the page is a hard bounce by force.
**Rationale:** There is nothing to engage with. The page is a security block with no navigation, no product, and no recovery path — a loyal customer hitting this is gone.

## 10. Conversion Likelihood

- − CTA in my category: none
- − Unambiguous CTA copy: none
- − Active price reduction or member pricing: none
- − Time-bounded credible deadline: none
- − Reachable free-shipping threshold: none
- − Specific product page one tap away: none
- − Sizing / fit info accessible: none
- − Returns / exchanges mentioned: none
- − Reviews / ratings visible: none
- − Trust / security signals: none — ironically the "security issue" framing does the opposite of building trust

**Score:** `1/10` — zero conversion criteria met.
**Rationale:** The page delivers no path to product, cart, or account — conversion is literally impossible from this state.

## 11. Evidence

- **Adidas trefoil + wordmark logo:** renders centered at top of page, clean black on white
- **Reference Error string:** `Reference Error: 0.4ed7ce17.1779444578.709a256` — raw error ID displayed mid-screen, no explanation
- **Block message headline:** Large bold all-caps text — "UNFORTUNATELY WE ARE UNABLE TO GIVE YOU ACCESS TO OUR SITE AT THIS TIME."
- **Subtext:** "A security issue was automatically identified, when you tried to access the website."
- **Partial heading cut off at bottom:** "What could have caused this?" — content below the fold not visible
- **Bugs / friction:** The entire page is a WAF/bot-detection block; no homepage content loaded; no navigation, no CTA, no recovery mechanism visible in viewport; accusatory user-facing copy with no brand warmth
## Recent history

- [[2026-05-21-homepage-www.adidas.com-axel-stripe-adidas-fap6e]] — 1/10 (2026-05-21)
- [[2026-05-20-homepage-www.adidas.com-axel-stripe-adidas-fap6e]] — 1/10 (2026-05-20)
- [[2026-05-19-homepage-www.adidas.com-axel-stripe-adidas-fap6e]] — 1/10 (2026-05-19)

