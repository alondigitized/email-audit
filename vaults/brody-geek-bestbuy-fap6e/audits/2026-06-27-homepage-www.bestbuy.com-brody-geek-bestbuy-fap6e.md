---
slug: 2026-06-27-homepage-www.bestbuy.com-brody-geek-bestbuy-fap6e
type: site
date: 2026-06-27
persona: brody-geek-bestbuy-fap6e
score: "2/10"
sender: www.bestbuy.com
subject: Homepage snapshot · www.bestbuy.com · 2026-06-27
tags: [site-journey, score-2, sender/www-bestbuy-com]
---
# Homepage snapshot · www.bestbuy.com · 2026-06-27
**Score:** 2/10 · **Type:** Site journey · **2026-06-27**
## Executive summary

- I opened Best Buy and immediately got gate-crashed by a sign-in modal before I could see a single product, deal, or reason to care. The actual homepage content is completely occluded — all I can see behind the interstitial is a white void. Best Buy is presenting itself as a brand that wants my login more than my attention, which is not a great opening move when I've got RTings.com one tab over.

## What's working

- **Blue persistent nav bar** — "Your store / Find a store," "Account / Sign in," and the cart icon are legible, color-correct, and tap-friendly at mobile size. As a guy who likes to check store inventory before driving 20 minutes, the "Find a store" shortcut is useful if I can ever get past this modal.
- **Modal buttons are large and tappable** — "Sign In" and "Create Account" are well-sized for thumbs, clear contrast, no ambiguity about which is primary (blue filled vs. outlined).

## What's weak

- **Sign-in gate kills momentum before any content loads** — I haven't seen a single product, deal, or category. This is a dark pattern masquerading as a "personalization" feature. I came to browse, not authenticate.
- **Modal text is clipped on the left** — "i there!" and "r the best experience, be sure to sign in." are visibly truncated. That's a render bug — the modal isn't positioned within the safe viewport area.
- **Entire hero / content area is blank white** — whether that's a load failure or the modal stacking context hiding everything, the result is the same: nothing below the nav bar communicates anything about why I should be here.
- **No deals, no categories, no products visible** — as someone who specifically hunts open-box deals and monitors Black Friday calendars, a homepage with zero price signals or category entry points gives me nothing to latch onto.
- **No Best Buy Plus / My Best Buy member acknowledgment** — I have a membership. There's no "Welcome back" or loyalty balance anywhere.

## Recommendations

- **Suppress the sign-in modal until after at least one scroll depth** — let me see a hero and one deal first. Amazon does this; I can browse before I'm prompted. Gate me after I've shown intent, not before.
- **Fix the modal viewport clipping bug** — "Hi there!" should not render as "i there!" on a standard mobile width. A left-padding or max-width constraint on the modal container solves this in minutes.
- **Ensure hero content renders before or alongside the modal** — if the white void is a load race condition (modal mounts before hero image resolves), lazy-load the modal instead of blocking the paint.
- **Surface a loyalty hook inside the modal itself** — if you must gate me, at least tell me "Sign in to see your My Best Buy Plus rewards balance" — that's actually a reason for someone like me to tap in.

## Full review
## 1. Executive Summary

I opened Best Buy and immediately got gate-crashed by a sign-in modal before I could see a single product, deal, or reason to care. The actual homepage content is completely occluded — all I can see behind the interstitial is a white void. Best Buy is presenting itself as a brand that wants my login more than my attention, which is not a great opening move when I've got RTings.com one tab over.

## 2. Business Impact Score (1-10)

**2/10**

- − Hero copy or imagery explicitly speaks to my persona: no hero visible at all, modal blocks everything
- − Returning-shopper hook is visible: the "Sign in for best experience" is arguably a hook but it's a friction wall, not a warm welcome
- − Concrete offer visible above the fold: zero — no price, no %, nothing
- − Unmistakable primary CTA above the fold: the "Sign In" button is unmistakable but it's for auth, not commerce
- − Visual hierarchy is clear: modal partially cut off on the left edge, "Hi there!" is cropped — hierarchy is broken
- − No render bugs: the modal clips the greeting text on the left side ("i there!" — truncated), large blank white regions suggest content failed to render
- − Demographic signals match my persona: can't evaluate — no content visible
- − Page reflects current campaign / season: can't evaluate — no content visible
- − Loyalty / membership benefits visible without scrolling: not visible
- − Offer feels honest: no offer to evaluate

+ The "Find a store" and cart icon in the blue nav bar are clean and visible — that's the only functional element I can see.

Score: 1 base + 1 (nav bar renders without breakage) = **2/10**

## 3. What's Working

- **Blue persistent nav bar** — "Your store / Find a store," "Account / Sign in," and the cart icon are legible, color-correct, and tap-friendly at mobile size. As a guy who likes to check store inventory before driving 20 minutes, the "Find a store" shortcut is useful if I can ever get past this modal.
- **Modal buttons are large and tappable** — "Sign In" and "Create Account" are well-sized for thumbs, clear contrast, no ambiguity about which is primary (blue filled vs. outlined).

## 4. What's Weak

- **Sign-in gate kills momentum before any content loads** — I haven't seen a single product, deal, or category. This is a dark pattern masquerading as a "personalization" feature. I came to browse, not authenticate.
- **Modal text is clipped on the left** — "i there!" and "r the best experience, be sure to sign in." are visibly truncated. That's a render bug — the modal isn't positioned within the safe viewport area.
- **Entire hero / content area is blank white** — whether that's a load failure or the modal stacking context hiding everything, the result is the same: nothing below the nav bar communicates anything about why I should be here.
- **No deals, no categories, no products visible** — as someone who specifically hunts open-box deals and monitors Black Friday calendars, a homepage with zero price signals or category entry points gives me nothing to latch onto.
- **No Best Buy Plus / My Best Buy member acknowledgment** — I have a membership. There's no "Welcome back" or loyalty balance anywhere.

## 5. Recommendations

- **Suppress the sign-in modal until after at least one scroll depth** — let me see a hero and one deal first. Amazon does this; I can browse before I'm prompted. Gate me after I've shown intent, not before.
- **Fix the modal viewport clipping bug** — "Hi there!" should not render as "i there!" on a standard mobile width. A left-padding or max-width constraint on the modal container solves this in minutes.
- **Ensure hero content renders before or alongside the modal** — if the white void is a load race condition (modal mounts before hero image resolves), lazy-load the modal instead of blocking the paint.
- **Surface a loyalty hook inside the modal itself** — if you must gate me, at least tell me "Sign in to see your My Best Buy Plus rewards balance" — that's actually a reason for someone like me to tap in.

## 6. Bottom Line

I'm closing this modal and hoping something actually loads underneath — but if that white void is what's behind it, I'm going to RTings.com and buying wherever has the best open-box price.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `i there!` / `r the best experience, be sure to sign in.` (modal text — clipped; actual hero headline not visible)
- **Hero image:** No hero image visible — the area below the nav is entirely white/blank
- **Primary CTA:** `Sign In` — visible above the fold? yes (modal button), but it's an auth CTA, not a commerce CTA
- **Scores (1-10):** Clarity `2`, Relevance to me `1`, Visual hierarchy `3`, On-brand `3`
- **Strengths:**
  - The "Sign In" / "Create Account" button pair is clean and high-contrast
  - The blue nav bar is recognizably Best Buy brand
- **Weaknesses:**
  - Modal text is clipped on the left — clear render bug at this viewport width
  - No actual product, campaign, or category content is visible — the modal has eaten the entire first screen

## 8. Promotional & Urgency Cues

- **Active promos:** none visible
- **Urgency / scarcity:** none visible
- **Loyalty hooks:** none visible (the modal vaguely implies personalization if you sign in, but no rewards copy, no balance, no Plus badge)
- **Honesty check:** The "for the best experience, be sure to sign in" framing is a soft dark pattern — it implies signing in is optional for experience reasons, but the practical effect is blocking all content until you engage. The clipped modal text ("i there!" / "r the best experience") also looks sloppy and erodes trust at first contact.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero is visible
- − Easy to reach my category: no category nav visible, just "Find a store" and cart in the top bar
- − Eye-catching imagery in my category: zero images below the modal — blank white
- − Promo banner I would use: no promos visible
- + Page renders cleanly: the nav bar itself renders fine; the modal buttons are clean — partial credit
- − Imagery includes someone like me: no imagery at all
- − Copy register matches mine: the only copy visible is a generic sign-in nag, not tech/gear language
- − Trust signals visible: no reviews, no return policy badges, nothing
- − New / hot rail in my category: nothing visible
- − No dark patterns: the sign-in modal before any content is a textbook dark pattern

**Score:** `2/10` — 1 base + 1 (nav bar and buttons render without visual breakage)
**Rationale:** The modal entirely occludes the homepage before I can form any engagement intent. The only thing I can interact with meaningfully is the close button, which is functionally a "get me out of this" affordance.

## 10. Conversion Likelihood

- − CTA in my category: no category CTA visible
- − Unambiguous CTA copy: "Sign In" is unambiguous but it's not a commerce action
- − Active price reduction or member pricing: nothing visible
- − Time-bounded credible deadline: nothing visible
- − Reachable free-shipping threshold: nothing visible (I have Plus so this matters less, but the page isn't even surfacing it)
- − Specific product page one tap away: not visible
- − Sizing / fit info accessible: N/A for electronics, but no product info of any kind visible
- − Returns / exchanges mentioned: nothing visible
- − Reviews / ratings visible: nothing visible
- − Trust / security signals: nothing visible

**Score:** `1/10` — base score only; nothing commerce-oriented is visible
**Rationale:** There is literally zero purchase-intent infrastructure above the fold — no product, no deal, no category, no price. The modal converts me into a logged-in user at best; it doesn't move me toward a cart.

## 11. Evidence

Modules visible in the screenshot (in scroll order):

- **Large white blank region (top ~40% of screen)** — no content rendered; possible load failure or z-index stacking issue from the modal
- **Blue sticky nav bar** — "Your store / Find a store" (store icon), "Account / Sign in" (account icon), cart icon; all legible
- **Sign-in modal / interstitial** — partially clips left edge of viewport; contains truncated greeting ("i there!"), truncated subtext ("r the best experience, be sure to sign in."), "Sign In" (blue filled button), "Create Account" (outlined button), X dismiss button top-right
- **Large white blank region (below modal)** — no hero, no categories, no banners, no products rendered beneath the modal layer
- **Bugs / friction visible:**
  - Modal text clipped on left margin — render/positioning bug
  - Entire hero and content area below modal is blank white — content either failed to load or is hidden behind modal stacking context
  - No Best Buy logo visible anywhere in the screenshot (likely above the viewport or not rendered)
## Recent history

- [[2026-06-06-homepage-www.bestbuy.com-brody-geek-bestbuy-fap6e]] — 1/10 (2026-06-06)
- [[2026-05-30-homepage-www.bestbuy.com-brody-geek-bestbuy-fap6e]] — 2/10 (2026-05-30)
- [[2026-05-23-homepage-www.bestbuy.com-brody-geek-bestbuy-fap6e]] — 2/10 (2026-05-23)

