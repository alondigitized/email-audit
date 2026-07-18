---
slug: 2026-07-18-homepage-www.bestbuy.com-brody-geek-bestbuy-fap6e
type: site
date: 2026-07-18
persona: brody-geek-bestbuy-fap6e
score: "2/10"
sender: www.bestbuy.com
subject: Homepage snapshot · www.bestbuy.com · 2026-07-18
tags: [site-journey, score-2, sender/www-bestbuy-com]
---
# Homepage snapshot · www.bestbuy.com · 2026-07-18
**Score:** 2/10 · **Type:** Site journey · **2026-07-18**
## Executive summary

- Landed on Best Buy's mobile site and immediately got hit with a sign-in gate before I could see a single product, deal, or hero image. The actual homepage content — whatever campaign they're running, whatever hero they built — is completely invisible behind this modal. As a Best Buy Plus member who's been buying gear here for years, being interrogated at the door before I can even browse is not a great look.

## What's working

- **Blue nav bar (store / account / cart):** The persistent top bar is clean — Find a Store, Account, cart icon are visible and tappable. That's functional utility even if the rest is chaos.
- **"Create Account" as secondary CTA:** The outlined button alongside "Sign In" at least acknowledges that new visitors exist.

## What's weak

- **Full-page modal gate:** The modal is blocking 100% of the homepage content. I can't see a hero, a deal, a category nav, or a single product. This is the single biggest failure on screen.
- **Clipped modal text:** "i there!" and "r the best experience, be sure to sign in." — the left edge of the modal copy is cut off. That's a render bug, visible and embarrassing.
- **Zero product or deal signals:** As a guy who came to browse headphones or check open-box GPU deals, there is literally nothing here for me yet.
- **White void below the modal:** The lower two-thirds of the viewport is blank white — either content hasn't loaded or the modal is preventing paint. Either way, it looks broken.
- **No Best Buy Plus / member hook:** I'm a Plus member. Nothing on screen acknowledges that, hints at member pricing, or makes me feel like logging in is worth it.

## Recommendations

- **Dismiss the modal by default or show it post-scroll:** Let me see the homepage first. If I want to sign in, the persistent "Account / Sign in" in the nav bar is right there — I don't need a fullscreen interrupt to find it.
- **Fix the modal left-overflow bug:** The text starting mid-word ("i there!") is a clear layout bug — cap the modal width or add proper horizontal padding so copy doesn't clip.
- **Surface a member-value hook inside the sign-in prompt:** Instead of "for the best experience, be sure to sign in," say something like "Sign in to see your Plus member pricing and open-box alerts." Give me a reason beyond vague "best experience."
- **Ensure hero content is visible once the modal closes:** If the blank white area below the modal is a loading failure, lazy-load or skeleton-screen that content so it paints before or immediately after the modal dismiss.

## Full review
## 1. Executive Summary

Landed on Best Buy's mobile site and immediately got hit with a sign-in gate before I could see a single product, deal, or hero image. The actual homepage content — whatever campaign they're running, whatever hero they built — is completely invisible behind this modal. As a Best Buy Plus member who's been buying gear here for years, being interrogated at the door before I can even browse is not a great look.

## 2. Business Impact Score (1-10)

**2/10**

- − Hero copy/imagery speaks to my persona: no hero visible at all — blocked by modal
- − Returning-shopper hook visible: the Sign In CTA *could* count, but it's a gate, not a hook — feels like friction, not welcome
- − Concrete offer above the fold: none visible
- − Unmistakable shopping CTA above the fold: the only CTA is "Sign In" / "Create Account" — not a product CTA
- − Visual hierarchy clear: modal itself is clear, but the underlying page is a blank white void
- − No render bugs: left-side text is clipped ("i there!" and "r the best experience") — modal is misaligned or overflowing left edge
- − Demographic signals match: zero content to match against
- − Current campaign/season reflected: no content visible
- − Loyalty/membership benefits: nothing shown
- − Offer feels honest: N/A — there's no offer to evaluate

Score: 1 base + 1 for the Sign In/Account nav affordance in the blue bar = **2/10**

## 3. What's Working

- **Blue nav bar (store / account / cart):** The persistent top bar is clean — Find a Store, Account, cart icon are visible and tappable. That's functional utility even if the rest is chaos.
- **"Create Account" as secondary CTA:** The outlined button alongside "Sign In" at least acknowledges that new visitors exist.

## 4. What's Weak

- **Full-page modal gate:** The modal is blocking 100% of the homepage content. I can't see a hero, a deal, a category nav, or a single product. This is the single biggest failure on screen.
- **Clipped modal text:** "i there!" and "r the best experience, be sure to sign in." — the left edge of the modal copy is cut off. That's a render bug, visible and embarrassing.
- **Zero product or deal signals:** As a guy who came to browse headphones or check open-box GPU deals, there is literally nothing here for me yet.
- **White void below the modal:** The lower two-thirds of the viewport is blank white — either content hasn't loaded or the modal is preventing paint. Either way, it looks broken.
- **No Best Buy Plus / member hook:** I'm a Plus member. Nothing on screen acknowledges that, hints at member pricing, or makes me feel like logging in is worth it.

## 5. Recommendations

- **Dismiss the modal by default or show it post-scroll:** Let me see the homepage first. If I want to sign in, the persistent "Account / Sign in" in the nav bar is right there — I don't need a fullscreen interrupt to find it.
- **Fix the modal left-overflow bug:** The text starting mid-word ("i there!") is a clear layout bug — cap the modal width or add proper horizontal padding so copy doesn't clip.
- **Surface a member-value hook inside the sign-in prompt:** Instead of "for the best experience, be sure to sign in," say something like "Sign in to see your Plus member pricing and open-box alerts." Give me a reason beyond vague "best experience."
- **Ensure hero content is visible once the modal closes:** If the blank white area below the modal is a loading failure, lazy-load or skeleton-screen that content so it paints before or immediately after the modal dismiss.

## 6. Bottom Line

I'm dismissing this modal and hoping there's actually a homepage underneath it — because right now Best Buy's mobile site opened as a broken sign-in gate, not a store.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `[Not visible — blocked by modal]`
- **Hero image:** No hero image visible; the area below the nav bar and above the modal content is white/blank
- **Primary CTA:** `Sign In` — visible above the fold? yes — but it's a sign-in gate, not a shopping CTA
- **Scores (1-10):** Clarity `2`, Relevance to you `1`, Visual hierarchy `3`, On-brand `3`
- **Strengths:**
  - Blue brand color on the nav bar and Sign In button is consistent with Best Buy's identity
  - Modal CTA buttons are large and mobile-friendly tap targets
- **Weaknesses:**
  - No actual hero is visible — modal has consumed the entire viewport
  - Left-side text clipping on the modal copy is a visible render bug

## 8. Promotional & Urgency Cues

- **Active promos:** None visible
- **Urgency / scarcity:** None visible
- **Loyalty hooks:** None visible — no Best Buy Plus badge, no rewards balance, no member-pricing callout
- **Honesty check:** The modal text "for the best experience, be sure to sign in" is a vague nudge with no concrete benefit stated — it's soft dark-pattern territory. Nothing overtly manipulative, but the forced interrupt before any content loads is friction-as-tactic.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero visible, nothing gaming/audio/cinema related on screen
- − Easy to reach my category: nav bar has no category shortcuts visible; main nav is hidden behind/below the modal
- − Eye-catching imagery in my category: none — blank viewport below the modal
- − Promo banner I would use: none visible
- − Page renders cleanly: no — modal text clips on the left, large white void below modal suggests content didn't load
- − Imagery includes someone like me: no imagery at all
- − Copy register matches mine: "Hi there!" is casual and fine, but there's nothing else to evaluate
- − Trust signals visible: none — no review counts, no shipping badges, no security marks
- − New / hot rail in my category: none visible
- − No dark patterns: fails — forced modal gate before any browsing is a dark pattern

**Score:** `2/10` — 1 base + 1 for casual copy register ("Hi there!" isn't condescending)
**Rationale:** Nine out of ten engagement signals are absent or actively negative. The modal isn't creating engagement — it's blocking it. I'd tap the X and hope the real page loads.

## 10. Conversion Likelihood

- − CTA in my category: no product or category CTAs visible
- − Unambiguous CTA copy: "Sign In" is clear, but it's not a shopping CTA — doesn't count toward conversion
- − Active price reduction or member pricing: none visible
- − Time-bounded credible deadline: none visible
- − Reachable free-shipping threshold: none visible — I have Plus anyway, but nothing here speaks to it
- − Specific product page one tap away: nothing; there are no product tiles, links, or rails on screen
- − Sizing / fit info accessible: N/A for electronics, but no product info of any kind is visible
- − Returns / exchanges mentioned: none visible
- − Reviews / ratings visible: none visible
- − Trust / security signals: none visible

**Score:** `1/10` — base score only; zero positive signals
**Rationale:** There is nothing to convert on. The homepage, as captured in this screenshot, is a modal prompt sitting on top of an empty white canvas. No product, no deal, no CTA I'd act on as a shopper.

## 11. Evidence

- **Blue navigation bar:** "Your store / Find a store" (store icon), "Account / Sign in" (person icon), cart icon — visible across the top in Best Buy blue
- **Sign-in modal overlay:** Partially cropped popup with clipped copy ("i there!" / "r the best experience, be sure to sign in."), a blue "Sign In" button, and an outlined "Create Account" button; X dismiss in top-right
- **Blank white hero area:** Large white void above and below the modal — no hero image, no banner, no product loaded
- **Bugs / friction visible:**
  - Modal copy clips on the left edge — "Hi there!" renders as "i there!" and "For the best experience" renders as "r the best experience"
  - Bottom two-thirds of viewport is blank white — indicates content either failed to load or is hidden behind the modal layer
  - No homepage content (hero, categories, deals, rails) is visible anywhere in the screenshot
## Recent history

- [[2026-07-11-homepage-www.bestbuy.com-brody-geek-bestbuy-fap6e]] — 2/10 (2026-07-11)
- [[2026-07-04-homepage-www.bestbuy.com-brody-geek-bestbuy-fap6e]] — 2/10 (2026-07-04)
- [[2026-06-27-homepage-www.bestbuy.com-brody-geek-bestbuy-fap6e]] — 2/10 (2026-06-27)

