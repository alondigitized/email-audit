---
slug: 2026-05-17-homepage-www.united.com-marcus-mileage-united-fap6e
type: site
date: 2026-05-17
persona: marcus-mileage-united-fap6e
score: "3/10"
sender: www.united.com
subject: Homepage snapshot · www.united.com · 2026-05-17
tags: [site-journey, score-3, sender/www-united-com]
---
# Homepage snapshot · www.united.com · 2026-05-17
**Score:** 3/10 · **Type:** Site journey · **2026-05-17**
## Executive summary

- I opened united.com on my phone and the first thing I see is a sign-in prompt wall covering the entire screen, stacked on top of a cookie consent banner eating the bottom third. I can't see a hero, I can't see a fare search widget, I can't see any campaign — United has decided that the most important thing to show a 1K member who flies 100k miles a year is a login form and a data-collection disclosure. This looks less like an airline homepage and more like a gate agent blocking the jetway.

## What's working

- **MileagePlus number field label** — at least the sign-in form is loyalty-aware. It says "Email or MileagePlus® number," which signals the site knows I'm a member, not a first-time visitor.
- **"Continue" CTA renders cleanly** — large, blue, full-width button. If I actually want to sign in, it's an easy tap.
- **"Need help signing in?" link** — useful for the times I'm juggling which email I used; it's right there, not buried.

## What's weak

- **The entire viewport is a modal wall.** A sign-in interstitial covers 100% of the homepage content. I can see nothing else — no fare search, no upgrade offers, no route-sale banners. For a 1K who opens this app constantly, being force-marched to a login gate before seeing anything is friction I don't want.
- **Cookie banner compound-stacks onto the sign-in modal.** Two consent/authentication layers are competing on screen simultaneously. The cookie banner obscures the bottom of the sign-in modal, cutting off a second button I can't even read. This is a layout bug.
- **Zero personalization signal.** If United already knows I visit frequently, the sign-in prompt is a missed opportunity. There's no "Welcome back, 1K member" framing — it reads like I've never been here.
- **No content survives either overlay.** Promotions, current campaigns, upgrade-bid banners, or Premier upgrade availability — anything that would actually be relevant to me is completely invisible.

## Recommendations

- **Dismiss the sign-in interstitial by default for returning mobile visitors.** Recognize the returning session cookie and serve the homepage first; let me sign in from the persistent header, not a full-screen gate. A 1K member shouldn't have to log in just to see whether there's a sale on my routes.
- **Enforce overlay stacking rules so the cookie banner doesn't overlap the sign-in modal.** The second button in the sign-in flow is partially obscured — that's a straight-up layout bug on mobile viewport. Fix the z-index/positioning so they don't collide.
- **If you must show a sign-in prompt, make the value proposition specific.** Swap the generic "Sign in for the best experience" headline for something like "Sign in to check your upgrade queue and 1K benefits." That's the reason I actually want to log in.
- **Expose a fare-search widget or at minimum a featured route deal behind or beside the sign-in prompt.** Give me a reason to want to be here, even while I'm authenticating.

## Full review
## 1. Executive Summary

I opened united.com on my phone and the first thing I see is a sign-in prompt wall covering the entire screen, stacked on top of a cookie consent banner eating the bottom third. I can't see a hero, I can't see a fare search widget, I can't see any campaign — United has decided that the most important thing to show a 1K member who flies 100k miles a year is a login form and a data-collection disclosure. This looks less like an airline homepage and more like a gate agent blocking the jetway.

## 2. Business Impact Score (1-10)

**3/10**

- + Returning-shopper hook is visible: the sign-in prompt does reference "MileagePlus® number," which acknowledges that loyalty members exist — I'll give it that
- + No overlapping text or broken images per se — the modals render cleanly
- − Hero copy or imagery explicitly speaking to my persona: not visible, obscured entirely
- − Concrete offer above the fold: zero — nothing is visible behind the modals
- − Unmistakable primary CTA in my category: the only CTA is "Continue" on a login form, not a booking CTA
- − Visual hierarchy: there is none — two competing overlays fight each other
- − Demographic signals matching my persona: can't assess, all content is hidden
- − Current campaign / season visible: no
- − Loyalty / membership benefits visible: the form label says MileagePlus but no benefits are surfaced
- − Honest offer: no offer exists to evaluate

Score: 1 base + 2 signals = **3/10**

## 3. What's Working

- **MileagePlus number field label** — at least the sign-in form is loyalty-aware. It says "Email or MileagePlus® number," which signals the site knows I'm a member, not a first-time visitor.
- **"Continue" CTA renders cleanly** — large, blue, full-width button. If I actually want to sign in, it's an easy tap.
- **"Need help signing in?" link** — useful for the times I'm juggling which email I used; it's right there, not buried.

## 4. What's Weak

- **The entire viewport is a modal wall.** A sign-in interstitial covers 100% of the homepage content. I can see nothing else — no fare search, no upgrade offers, no route-sale banners. For a 1K who opens this app constantly, being force-marched to a login gate before seeing anything is friction I don't want.
- **Cookie banner compound-stacks onto the sign-in modal.** Two consent/authentication layers are competing on screen simultaneously. The cookie banner obscures the bottom of the sign-in modal, cutting off a second button I can't even read. This is a layout bug.
- **Zero personalization signal.** If United already knows I visit frequently, the sign-in prompt is a missed opportunity. There's no "Welcome back, 1K member" framing — it reads like I've never been here.
- **No content survives either overlay.** Promotions, current campaigns, upgrade-bid banners, or Premier upgrade availability — anything that would actually be relevant to me is completely invisible.

## 5. Recommendations

- **Dismiss the sign-in interstitial by default for returning mobile visitors.** Recognize the returning session cookie and serve the homepage first; let me sign in from the persistent header, not a full-screen gate. A 1K member shouldn't have to log in just to see whether there's a sale on my routes.
- **Enforce overlay stacking rules so the cookie banner doesn't overlap the sign-in modal.** The second button in the sign-in flow is partially obscured — that's a straight-up layout bug on mobile viewport. Fix the z-index/positioning so they don't collide.
- **If you must show a sign-in prompt, make the value proposition specific.** Swap the generic "Sign in for the best experience" headline for something like "Sign in to check your upgrade queue and 1K benefits." That's the reason I actually want to log in.
- **Expose a fare-search widget or at minimum a featured route deal behind or beside the sign-in prompt.** Give me a reason to want to be here, even while I'm authenticating.

## 6. Bottom Line

I'd dismiss both modals as fast as possible and hope there's something worth booking underneath — but this is a brutal first impression for a customer who's handed United six-figure spend.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Sign in for the best experience`
- **Hero image:** None visible — the sign-in modal occupies the full viewport; no lifestyle or aircraft imagery is shown
- **Primary CTA:** `Continue` — visible above the fold? yes (but it's a login CTA, not a booking CTA)
- **Scores (1-10):** Clarity `6`, Relevance to you `2`, Visual hierarchy `3`, On-brand `4`
- **Strengths:**
  - The "Continue" button is large, blue, full-width, and impossible to miss — good tap target
  - MileagePlus® branding in the field label correctly signals this is a loyalty-aware form
- **Weaknesses:**
  - "Best experience" is vague marketing language — it tells me nothing about what's waiting on the other side
  - The entire above-the-fold experience is an authentication gate, not a destination homepage; relevance to my actual task (booking, checking upgrades) is near zero

## 8. Promotional & Urgency Cues

- **Active promos:** None visible — all content is blocked by the sign-in overlay
- **Urgency / scarcity:** None visible
- **Loyalty hooks:** "MileagePlus® number" field label only — no balance, no status tier callout, no upgrade-bid prompt
- **Honesty check:** The cookie banner copy — "to show personalized ads from United or our third-party partners" — is straightforward and not buried; no obvious dark pattern there. However, forcing a sign-in modal before any content loads is a dark pattern in itself: it creates artificial friction to extract credentials before delivering value.

## 9. Engagement Likelihood

- − Hero relates to my focus area: the hero IS the sign-in form; no flight-booking or upgrade content visible
- − Easy to reach my category: navigation is entirely hidden behind the modal — I can't tap to "Flights" or "Upgrade Bid" from here
- − Eye-catching imagery in my category: no aircraft, no route photography, nothing
- − Promo banner I would use: none visible
- + Page renders cleanly: the two visible overlays themselves render without broken images or text corruption — they're just in the wrong place
- − Imagery includes someone like me: no imagery at all
- − Copy register matches mine: "Sign in for the best experience" is bland corporate-speak; a 44-year-old road warrior would respond to something more direct
- − Trust signals visible: none — no status tier badge, no secure-sign-in indicator visible
- − New / hot rail in my category: completely obscured
- − No dark patterns: a forced full-screen sign-in gate before any content is a classic dark pattern; the overlapping cookie banner on top of it compounds the friction
- **Score:** `2/10` — 1 base + 1 signal (clean rendering)
- **Rationale:** The only reason I wouldn't instantly bounce is that I know United's booking flow by heart and I'll dismiss both modals as fast as my thumb will move — but a less loyal customer is gone at this screen.

## 10. Conversion Likelihood

- − CTA in my category: the only CTA is a sign-in "Continue" button — no booking, no upgrade bid
- − Unambiguous CTA copy: "Continue" is ambiguous in this context — continue to what?
- − Active price reduction or member pricing: none visible
- − Time-bounded credible deadline: none visible
- − Reachable free-shipping threshold: N/A — no offer visible
- − Specific product page one tap away: no — product content is entirely obscured
- − Sizing / fit info accessible: N/A (airline context — seat map, upgrade availability)
- − Returns / exchanges mentioned: no change/cancel policy visible
- − Reviews / ratings visible: none
- − Trust / security signals: no secure-login badge, no encryption notice on the sign-in form
- **Score:** `1/10` — base only; no conversion signals present
- **Rationale:** Nothing on this screen moves me toward booking or upgrading — the only action available is authentication, and even that lacks supporting trust signals like a padlock or "Secure sign in" label.

## 11. Evidence

Modules visible in scroll order:

- **Sign-in interstitial modal** — full-screen overlay with heading "Sign in for the best experience," "Email or MileagePlus® number" input field, "Need help signing in?" help link, "Continue" button (blue, full-width), and a second partially-obscured button whose text is cut off by the cookie banner
- **Cookie consent banner** — bottom-of-screen persistent bar reading "We use cookies for site functionality, use experience, to analyze traffic and to show personalized ads from United or our third-party partners. For more information, refer to our Privacy Policy." with "Accept cookies" and "Cookie preferences" (with a sliders icon) action buttons
- **Close/dismiss controls** — an X button top-right of the sign-in modal, and a separate X button top-right of the cookie banner — both are visible but the dual-dismiss UX is confusing
- **Bugs / friction:** The cookie banner physically overlaps and truncates the bottom button of the sign-in modal on this mobile viewport — the second sign-in option (likely "Continue as guest" or "Sign in with Google") is unreadable. This is a legitimate layout defect visible in the screenshot.
## Recent history

- [[2026-05-16-homepage-www.united.com-marcus-mileage-united-fap6e]] — 4/10 (2026-05-16)
- [[2026-05-15-homepage-www.united.com-marcus-mileage-united-fap6e]] — 3/10 (2026-05-15)

