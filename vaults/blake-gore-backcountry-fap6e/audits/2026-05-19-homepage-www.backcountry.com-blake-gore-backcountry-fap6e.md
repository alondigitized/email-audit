---
slug: 2026-05-19-homepage-www.backcountry.com-blake-gore-backcountry-fap6e
type: site
date: 2026-05-19
persona: blake-gore-backcountry-fap6e
score: "1/10"
sender: www.backcountry.com
subject: Homepage snapshot · www.backcountry.com · 2026-05-19
tags: [site-journey, score-1, sender/www-backcountry-com]
---
# Homepage snapshot · www.backcountry.com · 2026-05-19
**Score:** 1/10 · **Type:** Site journey · **2026-05-19**
## Executive summary

- Yo, I opened Backcountry expecting to check out spring ski-touring deals and instead I'm staring at a Cloudflare bot wall — orange header, one sad "Begin" button, language dropdown, and nothing else. The brand is invisible. Whatever they're selling right now, I have no idea, because I can't see a single pixel of the actual site. This is not a homepage experience; this is a toll booth.

## What's working

- The "Begin" button is visually distinct (solid orange, clear contrast) — if I absolutely must pass through this gate, at least the CTA is legible and tap-friendly on mobile.
- The language selector (English dropdown) is a minor UX courtesy — not zero effort.

## What's weak

- **The entire homepage is absent.** I hit a Cloudflare-style bot challenge on a routine mobile visit. I'm a known Backcountry customer who DMs their Gearhead reps — and I'm being treated like a scraper.
- **Zero brand presence.** No logo, no nav, no imagery, no copy. If I didn't type the URL myself I'd wonder if I landed on a phishing page.
- **No trust signals.** Nothing tells me this gate is legitimate Backcountry security vs. a redirect hijack.
- **Dead white lower half.** The bottom 40% of the viewport is completely empty — broken or just a sparse Cloudflare template, either way it looks unfinished.
- **No fallback messaging.** "Complete the security check before continuing" gives me zero context on why I'm being challenged right now on a normal browse.

## Recommendations

- **Suppress the bot gate for logged-in or cookied returning customers.** I've bought gear here. My session cookies should exempt me from this wall — pipe me straight to the homepage.
- **If you must show a challenge, brand it.** Swap the bare white Cloudflare template for one that carries the Backcountry logo, a tagline, and a background lifestyle image so it feels intentional, not broken.
- **Add a trust line.** One sentence below "Begin" — something like "We occasionally verify visitors to protect your account" — so the gate doesn't feel like a phishing interstitial.
- **Log this as a conversion funnel leak.** Every mobile visitor hitting this before seeing any product is a bounce risk. Instrument it; fix the trigger threshold.

## Full review
## 1. Executive Summary

Yo, I opened Backcountry expecting to check out spring ski-touring deals and instead I'm staring at a Cloudflare bot wall — orange header, one sad "Begin" button, language dropdown, and nothing else. The brand is invisible. Whatever they're selling right now, I have no idea, because I can't see a single pixel of the actual site. This is not a homepage experience; this is a toll booth.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy speaks to my persona: the only "hero" copy is "Let's confirm you are human" — zero relevance to trad climbing, ski-touring, or gear of any kind
- − Returning-shopper hook visible: none — I can't even get to my account
- − Concrete offer above the fold: none
- − Unmistakable primary CTA above the fold: technically "Begin" is a button, but it routes me through a bot check, not toward gear — does not count
- − Visual hierarchy is clear: the hierarchy is crystal clear — it says "you are blocked, full stop"
- − No render bugs: the page itself renders cleanly, but it IS a bug in the experience sense — a bot gate replacing the homepage IS a visible friction failure
- − Demographic signals match my persona: N/A, no persona signals whatsoever
- − Page reflects current campaign/season: no campaign is visible
- − Loyalty/membership benefits visible: none
- − Offer feels honest: N/A

Counting: starting at 1 per rubric, zero criteria are TRUE. Score stays at **1**.

## 3. What's Working

- The "Begin" button is visually distinct (solid orange, clear contrast) — if I absolutely must pass through this gate, at least the CTA is legible and tap-friendly on mobile.
- The language selector (English dropdown) is a minor UX courtesy — not zero effort.

## 4. What's Weak

- **The entire homepage is absent.** I hit a Cloudflare-style bot challenge on a routine mobile visit. I'm a known Backcountry customer who DMs their Gearhead reps — and I'm being treated like a scraper.
- **Zero brand presence.** No logo, no nav, no imagery, no copy. If I didn't type the URL myself I'd wonder if I landed on a phishing page.
- **No trust signals.** Nothing tells me this gate is legitimate Backcountry security vs. a redirect hijack.
- **Dead white lower half.** The bottom 40% of the viewport is completely empty — broken or just a sparse Cloudflare template, either way it looks unfinished.
- **No fallback messaging.** "Complete the security check before continuing" gives me zero context on why I'm being challenged right now on a normal browse.

## 5. Recommendations

- **Suppress the bot gate for logged-in or cookied returning customers.** I've bought gear here. My session cookies should exempt me from this wall — pipe me straight to the homepage.
- **If you must show a challenge, brand it.** Swap the bare white Cloudflare template for one that carries the Backcountry logo, a tagline, and a background lifestyle image so it feels intentional, not broken.
- **Add a trust line.** One sentence below "Begin" — something like "We occasionally verify visitors to protect your account" — so the gate doesn't feel like a phishing interstitial.
- **Log this as a conversion funnel leak.** Every mobile visitor hitting this before seeing any product is a bounce risk. Instrument it; fix the trigger threshold.

## 6. Bottom Line

I'm tapping "Begin" only because I already know the URL — any casual visitor landing here is already halfway out the door, and honestly, so am I.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Let's confirm you are human`
- **Hero image:** None — white background only, no imagery whatsoever
- **Primary CTA:** `Begin` — visible above the fold? yes (but routes to bot challenge, not product)
- **Scores (1-10):** Clarity `2`, Relevance to you `1`, Visual hierarchy `4`, On-brand `1`
- **Strengths:**
  - Button is clear and tap-sized; no ambiguity about what to do next
  - Text is legible — good font size for mobile
- **Weaknesses:**
  - Zero brand identity — no logo, no color palette, no Backcountry DNA
  - Completely irrelevant to any purchase intent I arrived with

## 8. Promotional & Urgency Cues

- **Active promos:** None visible
- **Urgency / scarcity:** None
- **Loyalty hooks:** None — Gearhead membership, Friends + Family, rewards — all invisible
- **Honesty check:** The gate itself is a mild dark pattern for returning customers — being asked to "prove you're human" on a routine mobile browse feels adversarial and erodes trust, especially with no brand context around it

## 9. Engagement Likelihood

- − Hero relates to my focus area: "Let's confirm you are human" has nothing to do with trad climbing or ski-touring gear
- − Easy to reach my category: no navigation is visible at all
- − Eye-catching imagery in my category: no imagery exists on this screen
- − Promo banner I would use: no promo banners present
- − Page renders cleanly: the bot-wall itself renders without visual errors, but the experience is a hard stop — counts as a render failure from a UX standpoint
- − Imagery includes someone like me: no imagery at all
- − Copy register matches mine: "Complete the security check before continuing" is neutral/robotic — not millennial gear-nerd energy
- − Trust signals visible: none
- − New/hot rail in my category: none
- − No dark patterns: a bot gate blocking the homepage before I see any content is a dark pattern — bounces less-motivated visitors immediately

**Score:** `1/10` — 1 (baseline) + 0 confirmed "+" signals.
**Rationale:** The page is a complete brick wall before any homepage content loads; not a single engagement signal from the rubric is present. I'd tap "Begin" only out of muscle memory for the site.

## 10. Conversion Likelihood

- − CTA in my category: "Begin" is not a category CTA; it's a security gate
- − Unambiguous CTA copy: "Begin" is technically unambiguous, but it converts me to a bot-check flow, not a cart
- − Active price reduction or member pricing: none visible
- − Time-bounded credible deadline: none
- − Reachable free-shipping threshold: none
- − Specific product page one tap away: no — zero product pages accessible from here
- − Sizing / fit info accessible: none
- − Returns / exchanges mentioned: none
- − Reviews / ratings visible: none
- − Trust / security signals: none (the gate itself undermines trust, it doesn't build it)

**Score:** `1/10` — 1 (baseline) + 0 confirmed "+" signals.
**Rationale:** There is literally nothing on this screen that moves me toward purchase; I cannot add to cart, I cannot browse, I cannot see a single product. The only action available is clearing a bot hurdle.

## 11. Evidence

Visible modules on this screen (in scroll order):

- **Bot/security challenge module** — full-width orange headline "Let's confirm you are human," body copy explaining the security check purpose, single orange "Begin >" CTA button
- **Language selector** — dropdown set to "English," positioned below a horizontal rule near the bottom of the content area
- **Empty whitespace** — roughly 40% of the viewport below the language selector is blank white — no footer, no nav, no brand elements, no product content
- **Bugs / friction visible:**
  - Homepage replaced entirely by a Cloudflare-style bot challenge — this IS the visible bug; no actual site content is accessible
  - No Backcountry logo or branding present anywhere on the screen
  - No navigation bar, no category links, no search bar
  - Bottom half of viewport is unused/blank — suggests a lightweight challenge template with no brand customization applied
## Recent history

- [[2026-05-18-homepage-www.backcountry.com-blake-gore-backcountry-fap6e]] — 2/10 (2026-05-18)
- [[2026-05-17-homepage-www.backcountry.com-blake-gore-backcountry-fap6e]] — 3/10 (2026-05-17)
- [[2026-05-15-homepage-www.backcountry.com-blake-gore-backcountry-fap6e]] — 1/10 (2026-05-15)

