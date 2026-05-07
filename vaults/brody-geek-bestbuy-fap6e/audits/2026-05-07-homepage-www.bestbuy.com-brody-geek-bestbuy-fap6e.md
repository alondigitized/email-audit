---
slug: 2026-05-07-homepage-www.bestbuy.com-brody-geek-bestbuy-fap6e
type: site
date: 2026-05-07
persona: brody-geek-bestbuy-fap6e
score: "2/10"
sender: www.bestbuy.com
subject: Homepage snapshot · www.bestbuy.com · 2026-05-07
tags: [site-journey, score-2, sender/www-bestbuy-com]
---
# Homepage snapshot · www.bestbuy.com · 2026-05-07
**Score:** 2/10 · **Type:** Site journey · **2026-05-07**
## Executive summary

- Okay so Best Buy hit me with a sign-in nag modal the second I landed — the entire below-the-fold area is a blank white void because the modal is blocking everything and the content hasn't loaded behind it. I'm getting zero merchandising, zero hero, zero deals. Right now this feels less like a retailer and more like a login wall, which is a brutal first impression on mobile.

## What's working

- **The blue utility bar** (Your store / Find a store, Account / Sign in, Cart icon) is clean and instantly readable — standard Best Buy nav chrome that I recognize, no ambiguity.
- **Dual-button modal layout** ("Sign In" filled blue / "Create Account" outlined) is visually clear and the tap targets are large enough for mobile — no squinting required.
- **X dismiss button** is present in the top-right of the modal, so I'm not fully trapped — there's an escape hatch.

## What's weak

- **Entire hero and page body is blank white** — the content behind the modal never loaded or is being suppressed; this is the most damaging thing on the screen.
- **Modal fires immediately with no context** — I haven't seen a single product, deal, or reason to care about Best Buy yet, so being asked to sign in before seeing anything feels pushy and transactional.
- **No open-box, no deal strip, no "Members save X%" hook** — I'm a Best Buy Plus member and the page gives me zero signal that logging in unlocks anything specific, like free shipping or member pricing on the RTX 5090 I've been eyeing.
- **Zero gaming, audio, or home theater content visible** — none of my categories have any representation above the fold.
- **"...i there!"** — the modal headline is clipped on the left edge, so I can't even read the full greeting. Sloppy on mobile.

## Recommendations

- **Lazy-load the modal** — show the hero and at least one deal strip first, then surface the sign-in prompt after 5–8 seconds or on scroll. Let the page sell itself before asking me to commit to an account.
- **Add a member-value hook to the modal copy** — replace the generic "for the best experience" with something like "Members save an extra 10% on open-box + get free 2-day shipping" — that's the reason I'd actually sign in.
- **Fix the blank content area** — whether it's a render timing issue or a JS dependency on auth state, the homepage must show merchandising content even for signed-out / modal-blocked users.
- **Clip the modal headline correctly** — the partial "...i there!" is a visible text-overflow bug on smaller screens; either shrink the font or remove the left padding constraint.

## Full review
## 1. Executive Summary

Okay so Best Buy hit me with a sign-in nag modal the second I landed — the entire below-the-fold area is a blank white void because the modal is blocking everything and the content hasn't loaded behind it. I'm getting zero merchandising, zero hero, zero deals. Right now this feels less like a retailer and more like a login wall, which is a brutal first impression on mobile.

## 2. Business Impact Score (1-10)

**2/10**

- − Hero copy or imagery explicitly speaks to my persona: no hero visible at all — modal blocks everything
- − Returning-shopper hook visible: "Sign in for the best experience" is a gated nag, not a loyalty reward hook
- − Concrete offer above the fold: none visible — whitespace only below the modal
- − Unmistakable primary CTA in my category: the only CTA is "Sign In" / "Create Account," not tech/gaming/audio
- − Visual hierarchy clear: the modal bisects the screen and the bottom 70% is blank white — hierarchy is broken
- − No render bugs: layout is broken — content area behind modal failed to render; large blank void is visible
- − Demographic signals match my persona: no content at all to judge
- − Page reflects current campaign/season: no campaign content visible
- + Loyalty / membership: "Sign in for the best experience" at least implies account benefits exist
- − Offer feels honest: the modal gates the whole homepage — borderline dark pattern

  - + loyalty hook implied, + no render bugs above the modal itself — score 2

## 3. What's Working

- **The blue utility bar** (Your store / Find a store, Account / Sign in, Cart icon) is clean and instantly readable — standard Best Buy nav chrome that I recognize, no ambiguity.
- **Dual-button modal layout** ("Sign In" filled blue / "Create Account" outlined) is visually clear and the tap targets are large enough for mobile — no squinting required.
- **X dismiss button** is present in the top-right of the modal, so I'm not fully trapped — there's an escape hatch.

## 4. What's Weak

- **Entire hero and page body is blank white** — the content behind the modal never loaded or is being suppressed; this is the most damaging thing on the screen.
- **Modal fires immediately with no context** — I haven't seen a single product, deal, or reason to care about Best Buy yet, so being asked to sign in before seeing anything feels pushy and transactional.
- **No open-box, no deal strip, no "Members save X%" hook** — I'm a Best Buy Plus member and the page gives me zero signal that logging in unlocks anything specific, like free shipping or member pricing on the RTX 5090 I've been eyeing.
- **Zero gaming, audio, or home theater content visible** — none of my categories have any representation above the fold.
- **"...i there!"** — the modal headline is clipped on the left edge, so I can't even read the full greeting. Sloppy on mobile.

## 5. Recommendations

- **Lazy-load the modal** — show the hero and at least one deal strip first, then surface the sign-in prompt after 5–8 seconds or on scroll. Let the page sell itself before asking me to commit to an account.
- **Add a member-value hook to the modal copy** — replace the generic "for the best experience" with something like "Members save an extra 10% on open-box + get free 2-day shipping" — that's the reason I'd actually sign in.
- **Fix the blank content area** — whether it's a render timing issue or a JS dependency on auth state, the homepage must show merchandising content even for signed-out / modal-blocked users.
- **Clip the modal headline correctly** — the partial "...i there!" is a visible text-overflow bug on smaller screens; either shrink the font or remove the left padding constraint.

## 6. Bottom Line

I'd tap the X to dismiss and hope the page loads — but if that white void doesn't resolve in two seconds, I'm already opening the Amazon app.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `[i there! / ...or the best experience, be sure to sign in.]` — only the modal text is visible; no hero headline exists in the viewport
- **Hero image:** None visible — content area below the modal is completely blank white
- **Primary CTA:** `Sign In` — visible above the fold? yes (but it's an auth CTA, not a shopping CTA)
- **Scores (1-10):** Clarity `3`, Relevance to you `1`, Visual hierarchy `2`, On-brand `4`
- **Strengths:**
  - Best Buy blue color scheme is consistent and immediately brand-identifiable
  - Cart + Account icons in top bar give correct spatial orientation for a mobile commerce app
- **Weaknesses:**
  - The modal fully suppresses any merchandising content — there is literally nothing to shop
  - "i there!" is clipped — the headline renders as a broken fragment, which looks unpolished

## 8. Promotional & Urgency Cues

- **Active promos:** None visible
- **Urgency / scarcity:** None visible
- **Loyalty hooks:** Implied only — "for the best experience, be sure to sign in" hints at account benefits but names none
- **Honesty check:** The full-screen sign-in modal before any content loads borders on a dark pattern — it functionally coerces sign-in by making the alternative (the blank page behind it) unappealing, even though dismissal is technically available.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero content is visible at all
- − Easy to reach my category: nav bar shows "Find a store" and account links only — no category shortcuts visible
- − Eye-catching imagery in my category: zero imagery visible below the modal
- − Promo banner I would use: no promo banners visible
- − Page renders cleanly: no — large blank white void below the modal is a hard render failure signal
- − Imagery includes someone like me: no imagery at all
- − Copy register matches mine: the modal copy is generic and bland — "best experience" is boilerplate
- − Trust signals visible: none visible (no review counts, no return policy, no "price match" badge)
- − New / hot rail in my category: not visible
- + No dark patterns: the X button does exist, so technically I can dismiss — marginal credit

**Score:** `2/10` — should equal 1 + count of "+" bullets above.
**Rationale:** The only positive signal is the presence of a dismiss button on the modal. Everything else — content, imagery, promos, trust signals, category navigation — is completely absent from the visible viewport due to the sign-in modal blocking the page.

## 10. Conversion Likelihood

- − CTA in my category: the only CTA visible is "Sign In" / "Create Account" — not gaming, audio, or home theater
- − Unambiguous CTA copy: "Sign In" is clear as an auth action but is irrelevant to shopping conversion
- − Active price reduction or member pricing: none visible
- − Time-bounded credible deadline: none visible
- − Reachable free-shipping threshold: none visible (I have Plus but the page doesn't acknowledge it)
- − Specific product page one tap away: no product content exists in the viewport
- − Sizing / fit info accessible: N/A for electronics, but no product info of any kind is visible
- − Returns / exchanges mentioned: not visible
- − Reviews / ratings visible: not visible
- − Trust / security signals: not visible

**Score:** `1/10` — should equal 1 + count of "+" bullets.
**Rationale:** There is genuinely nothing on this screen that moves me toward a purchase — no product, no deal, no category entry point, no trust signal. The page handed me a login wall instead of a reason to shop.

## 11. Evidence

- **Top utility bar:** "Your store / Find a store" (store locator icon), "Account / Sign in" (account icon), cart icon — rendered in Best Buy blue
- **Sign-in modal:** Partially visible headline clipped as "...i there!" with body copy "...or the best experience, be sure to sign in." Two CTAs: filled blue "Sign In" button and outlined "Create Account" button. X dismiss button top-right.
- **Content area below modal:** Completely blank white — no hero image, no deal strips, no category tiles, no product rails, nothing. This occupies roughly 70% of the visible viewport.
- **Bugs / friction / clarity issues visible in screenshot:**
  - Modal headline is clipped on the left — "i there!" is a broken text fragment
  - Entire page body behind the modal is blank white (content render failure or JS auth-gate blocking paint)
  - No search bar visible in the mobile viewport — a significant navigation omission for a research-heavy shopper like me
## Recent history

- [[2026-05-06-homepage-www.bestbuy.com-brody-geek-bestbuy-fap6e]] — 2/10 (2026-05-06)
- [[2026-05-05-homepage-www.bestbuy.com-brody-geek-bestbuy-fap6e]] — 2/10 (2026-05-05)
- [[2026-05-04-homepage-www.bestbuy.com-brody-geek-bestbuy-fap6e]] — 6/10 (2026-05-04)

