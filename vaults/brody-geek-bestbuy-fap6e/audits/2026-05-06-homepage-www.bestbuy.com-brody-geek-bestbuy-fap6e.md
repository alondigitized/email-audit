---
slug: 2026-05-06-homepage-www.bestbuy.com-brody-geek-bestbuy-fap6e
type: site
date: 2026-05-06
persona: brody-geek-bestbuy-fap6e
score: "2/10"
sender: www.bestbuy.com
subject: Homepage snapshot · www.bestbuy.com · 2026-05-06
tags: [site-journey, score-2, sender/www-bestbuy-com]
---
# Homepage snapshot · www.bestbuy.com · 2026-05-06
**Score:** 2/10 · **Type:** Site journey · **2026-05-06**
## Executive summary

- I opened Best Buy's homepage on mobile and immediately got gate-crashed by a sign-in interstitial. The modal is clipped on the left — it's truncated mid-word ("i there!") — and the entire page behind it is a blank white void. Nothing is rendering under the overlay: no hero, no promos, no products. Best Buy feels like a bouncer at the door before you've even seen the club.

## What's working

- **"Sign In" button** — large, high-contrast blue, immediately tappable. At least the CTA itself is well-designed and not buried.
- **"Create Account" option** — offering both paths in one modal is structurally correct even if the execution is broken.
- **Top nav bar** — "Find a store," Account, and cart icons are all visible and recognizable Brand Blue. Functional utility is there.

## What's weak

- **Modal clips at the left edge** — the headline reads "i there!" instead of "Hi there!" — a hard layout bug on whatever viewport was captured.
- **Entire page body is blank white** — the hero, promos, product rails, everything is a void behind the modal. Nothing loaded or it's all hidden under the overlay, meaning I have zero reason to dismiss the modal other than blind faith.
- **No loyalty hook** — I'm a Best Buy Plus member. There is zero mention of rewards balance, member pricing, or Plus perks. This modal is the same one I'd see if I'd never shopped here in my life.
- **No urgency, no deal teaser** — not even a ghost of a promo banner bleeds through around the modal edges to give me a reason to engage.
- **Sign-in gate as first interaction** — on mobile, forcing account auth before I've seen a single product is friction that kills browsing intent immediately.

## Recommendations

- **Fix the modal clip bug** — the left-edge truncation ("i there!") suggests a `margin-left` or `transform` offset isn't accounting for the viewport correctly on this screen size; ship a hotfix this week.
- **Show page content behind the modal** — render the hero and at least one promotional strip in the background so there's something worth signing in for; the blank white void actively discourages dismissal.
- **Add a loyalty teaser to the modal copy** — swap "For the best experience, be sure to sign in" for something like "Sign in to see your My Best Buy Plus rewards and member pricing" — that's a reason I actually care about.
- **Offer a "Maybe later / skip" path that doesn't feel like punishment** — the X close button is there but small; make the non-sign-in path equally visible so power browsers like me don't feel trapped.

## Full review
## 1. Executive Summary

I opened Best Buy's homepage on mobile and immediately got gate-crashed by a sign-in interstitial. The modal is clipped on the left — it's truncated mid-word ("i there!") — and the entire page behind it is a blank white void. Nothing is rendering under the overlay: no hero, no promos, no products. Best Buy feels like a bouncer at the door before you've even seen the club.

## 2. Business Impact Score (1-10)

**2/10**

- − Hero copy or imagery speaks to my persona: no hero visible at all — blocked by modal
- − Returning-shopper hook visible: "Sign In" modal exists but this is a gate, not a hook; rewards balance nowhere
- − Concrete offer above the fold: none visible
- + One primary CTA visible above the fold: "Sign In" is prominent and unambiguous as a button
- − Visual hierarchy is clear: modal is clipped on the left edge — "i there!" mid-truncation is a layout bug
- − No render bugs: significant bug — modal is cropped, page behind it is entirely blank white
- − Demographic signals match persona: modal has zero persona relevance
- − Page reflects current campaign/season: impossible to assess — content is fully hidden
- − Loyalty/membership benefits visible without scrolling: none
- − Offer feels honest: no offer to evaluate

+ sign-in CTA is a clear button, − everything else is broken or invisible — score **2**.

## 3. What's Working

- **"Sign In" button** — large, high-contrast blue, immediately tappable. At least the CTA itself is well-designed and not buried.
- **"Create Account" option** — offering both paths in one modal is structurally correct even if the execution is broken.
- **Top nav bar** — "Find a store," Account, and cart icons are all visible and recognizable Brand Blue. Functional utility is there.

## 4. What's Weak

- **Modal clips at the left edge** — the headline reads "i there!" instead of "Hi there!" — a hard layout bug on whatever viewport was captured.
- **Entire page body is blank white** — the hero, promos, product rails, everything is a void behind the modal. Nothing loaded or it's all hidden under the overlay, meaning I have zero reason to dismiss the modal other than blind faith.
- **No loyalty hook** — I'm a Best Buy Plus member. There is zero mention of rewards balance, member pricing, or Plus perks. This modal is the same one I'd see if I'd never shopped here in my life.
- **No urgency, no deal teaser** — not even a ghost of a promo banner bleeds through around the modal edges to give me a reason to engage.
- **Sign-in gate as first interaction** — on mobile, forcing account auth before I've seen a single product is friction that kills browsing intent immediately.

## 5. Recommendations

- **Fix the modal clip bug** — the left-edge truncation ("i there!") suggests a `margin-left` or `transform` offset isn't accounting for the viewport correctly on this screen size; ship a hotfix this week.
- **Show page content behind the modal** — render the hero and at least one promotional strip in the background so there's something worth signing in for; the blank white void actively discourages dismissal.
- **Add a loyalty teaser to the modal copy** — swap "For the best experience, be sure to sign in" for something like "Sign in to see your My Best Buy Plus rewards and member pricing" — that's a reason I actually care about.
- **Offer a "Maybe later / skip" path that doesn't feel like punishment** — the X close button is there but small; make the non-sign-in path equally visible so power browsers like me don't feel trapped.

## 6. Bottom Line

I'm closing this modal and heading straight to the category nav, but honestly I'm annoyed enough at the blank page behind it that I'd bounce to rtings.com to do my research instead.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `i there! [truncated] or the best experience, be sure to sign in.` *(modal text — actual hero is not visible)*
- **Hero image:** None visible — page behind modal is entirely blank white
- **Primary CTA:** `Sign In` — visible above the fold? yes (modal button)
- **Scores (1-10):** Clarity `3`, Relevance to you `1`, Visual hierarchy `2`, On-brand `3`
- **Strengths:**
  - The "Sign In" button itself is Best Buy blue and immediately tappable
  - "Create Account" alongside it covers both new and returning user intent
- **Weaknesses:**
  - Modal is clipped — headline is visually broken, which erodes brand confidence immediately
  - No hero whatsoever; I have no idea what Best Buy is selling or promoting right now

## 8. Promotional & Urgency Cues

- **Active promos:** None visible — page content is fully obscured
- **Urgency / scarcity:** None visible
- **Loyalty hooks:** None — no mention of My Best Buy Plus, rewards balance, or member pricing anywhere in the modal or nav
- **Honesty check:** The modal copy ("best experience") is soft and vague rather than manipulative, but the blank page behind it is effectively a bait-and-switch — it implies there's content worth signing in for, and there visually isn't.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero rendered — completely blocked
- − Easy to reach my category: nav icons at top are tiny on mobile; no category shortcuts visible
- − Eye-catching imagery in my category: zero imagery visible anywhere below the nav
- − Promo banner I would use: none visible
- − Page renders cleanly: hard no — modal is clipped, body is blank white
- − Imagery includes someone like me: none present
- − Copy register matches mine: modal copy is generic/bland, not gamer/cinephile adjacent
- − Trust signals visible: no review counts, badges, or policy copy visible
- − New / hot rail in my category: none visible
- − No dark patterns: the modal itself is a dark pattern — gate before content

**Score:** `1/10` — should equal 1 + count of "+" bullets above.
**Rationale:** Not a single engagement criterion was met. The modal ate the entire page and left me staring at white space; I'd tap the X and hope the real homepage loads, but my instinct is to bounce before that happens.

## 10. Conversion Likelihood

- − CTA in my category: no category-level CTAs visible
- − Unambiguous CTA copy: "Sign In" is clear but it's auth, not commerce
- − Active price reduction or member pricing: none visible
- − Time-bounded credible deadline: none visible
- − Reachable free-shipping threshold: none visible
- + Specific product page one tap away: the cart icon is there, but no product pages are surfaced
- − Sizing / fit info accessible: N/A / not visible
- − Returns / exchanges mentioned: not visible
- − Reviews / ratings visible: none visible
- − Trust / security signals: none visible

**Score:** `1/10` — should equal 1 + count of "+" bullets.
**Rationale:** The only reason I'm not giving this a zero is that the cart icon technically exists — but there is nothing on this page driving me toward a purchase decision. A blank page behind a sign-in gate is as far from conversion as a homepage can get.

## 11. Evidence

- **Top navigation bar** — Best Buy blue strip: "Your store / Find a store" (store icon), "Account / Sign in" (account icon), cart icon on right; cuts off at approximately one-third of screen width
- **Sign-in interstitial modal** — overlays the full viewport; clipped on left edge showing truncated headline "i there!" and body text "or the best experience, be sure to sign in."; two CTAs: solid blue "Sign In" button and outline "Create Account" button; X close icon top-right
- **Page body (behind modal)** — entirely blank white; no hero image, no promotional strip, no category tiles, no product rails, nothing rendered
- **Bugs / friction visible:**
  - Modal headline clipped at left edge — reads "i there!" not "Hi there!" — layout/positioning bug
  - Full page content absent or hidden beneath modal with no bleed-through — catastrophic for first impression on mobile
  - No loyalty/Plus member recognition anywhere in the above-the-fold experience
## Recent history

- [[2026-05-05-homepage-www.bestbuy.com-brody-geek-bestbuy-fap6e]] — 2/10 (2026-05-05)
- [[2026-05-04-homepage-www.bestbuy.com-brody-geek-bestbuy-fap6e]] — 6/10 (2026-05-04)
- [[2026-05-03-homepage-www.bestbuy.com-brody-geek-bestbuy-fap6e]] — 5/10 (2026-05-03)

