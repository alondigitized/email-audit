---
slug: 2026-05-15-homepage-www.united.com-marcus-mileage-united-fap6e
type: site
date: 2026-05-15
persona: marcus-mileage-united-fap6e
score: "3/10"
sender: www.united.com
subject: Homepage snapshot · www.united.com · 2026-05-15
tags: [site-journey, score-3, sender/www-united-com]
---
# Homepage snapshot · www.united.com · 2026-05-15
**Score:** 3/10 · **Type:** Site journey · **2026-05-15**
## Executive summary

- I open the United app on my phone and what do I get? A sign-in gate and a cookie banner stacked on top of each other, completely burying the homepage. Zero hero image, zero fare deals, zero upgrade callout — just a credential prompt and a privacy disclosure fighting for screen real estate. This looks less like a homepage and more like a security checkpoint at an understaffed regional terminal.

## What's working

- **"Sign in for the best experience" with MileagePlus® number field** — As a 1K who knows my number by heart, this is the right hook. The authenticated experience is legitimately better for me, so the premise is true.
- **"Continue" CTA button** — Large, high-contrast blue, impossible to miss. Single tap to proceed.
- **"Need help signing in?" link** — Appropriate fallback for a member who's on a new device; low clutter.

## What's weak

- **Forced full-screen sign-in modal on load** — I came to check fares or seat upgrades, not to log in before I've even seen what's on offer. This is a dark pattern masquerading as personalization.
- **Cookie banner stacked behind the modal** — The two overlays create a layered interruption: I can't accept cookies without first dealing with the sign-in sheet, and the cookie banner clips the second sign-in button. Broken on mobile.
- **Zero homepage content visible** — No hero, no destination imagery, no sale strip, no fare alert — everything I actually came for is hidden.
- **No balance or status indicator** — If you're going to force sign-in, at least show me why: "Welcome back, 1K member — you have 87,420 miles." Instead the screen is blank above the modal.
- **Rendering collision** — The cookie consent banner visually clips the lower button in the sign-in sheet. That's a layout bug.

## Recommendations

- **Dismiss-on-load option for returning 1K members** — If United can detect a returning cookie, show a compact "Sign in as [name]" chip in the nav bar rather than a full modal takeover. Let me see the homepage first.
- **Surface one fare-sale strip behind the modal** — Even blurred/dimmed destination imagery with a strip like "Summer fares from $99 — sign in to unlock member pricing" gives me a reason to authenticate instead of bouncing.
- **Resolve the cookie-banner / sign-in modal z-index collision** — The cookie bar is clipping the second authentication button on mobile. Ship a hotfix this week.
- **On successful sign-in, land me on my upgrade waitlist or My Trips** — Don't send me to a generic homepage; I want upgrade clearance status for my next three segments, not a generic marketing carousel.

## Full review
---

## 1. Executive Summary

I open the United app on my phone and what do I get? A sign-in gate and a cookie banner stacked on top of each other, completely burying the homepage. Zero hero image, zero fare deals, zero upgrade callout — just a credential prompt and a privacy disclosure fighting for screen real estate. This looks less like a homepage and more like a security checkpoint at an understaffed regional terminal.

---

## 2. Business Impact Score (1-10)

**3/10**

- + Returning-shopper hook: "Sign in for the best experience" with an explicit "Email or MileagePlus® number" field directly targets a member like me.
- + Primary CTA above the fold: The blue "Continue" button is unmistakable and visible.
- − Hero copy/imagery speaks to my persona: Nothing — sign-in modal completely covers it.
- − Concrete offer visible: None — no fare sale, no upgrade promo, nothing.
- − Visual hierarchy clear: Two overlapping modals (sign-in sheet + cookie banner) destroy any hierarchy; the cookie banner cuts off the second sign-in button.
- − No render bugs: Cookie banner is clipping the lower sign-in option — that's a visible layout collision.
- − Demographic signals: No imagery, no copy that speaks to a 44-year-old 1K traveler.
- − Current campaign/season: Completely obscured.
- − Loyalty benefits without scrolling: MileagePlus name is referenced but no actual benefit (miles balance, upgrade credits, PlusPoints) is shown.
- − Offer feels honest: No offer visible to evaluate.

---

## 3. What's Working

- **"Sign in for the best experience" with MileagePlus® number field** — As a 1K who knows my number by heart, this is the right hook. The authenticated experience is legitimately better for me, so the premise is true.
- **"Continue" CTA button** — Large, high-contrast blue, impossible to miss. Single tap to proceed.
- **"Need help signing in?" link** — Appropriate fallback for a member who's on a new device; low clutter.

---

## 4. What's Weak

- **Forced full-screen sign-in modal on load** — I came to check fares or seat upgrades, not to log in before I've even seen what's on offer. This is a dark pattern masquerading as personalization.
- **Cookie banner stacked behind the modal** — The two overlays create a layered interruption: I can't accept cookies without first dealing with the sign-in sheet, and the cookie banner clips the second sign-in button. Broken on mobile.
- **Zero homepage content visible** — No hero, no destination imagery, no sale strip, no fare alert — everything I actually came for is hidden.
- **No balance or status indicator** — If you're going to force sign-in, at least show me why: "Welcome back, 1K member — you have 87,420 miles." Instead the screen is blank above the modal.
- **Rendering collision** — The cookie consent banner visually clips the lower button in the sign-in sheet. That's a layout bug.

---

## 5. Recommendations

- **Dismiss-on-load option for returning 1K members** — If United can detect a returning cookie, show a compact "Sign in as [name]" chip in the nav bar rather than a full modal takeover. Let me see the homepage first.
- **Surface one fare-sale strip behind the modal** — Even blurred/dimmed destination imagery with a strip like "Summer fares from $99 — sign in to unlock member pricing" gives me a reason to authenticate instead of bouncing.
- **Resolve the cookie-banner / sign-in modal z-index collision** — The cookie bar is clipping the second authentication button on mobile. Ship a hotfix this week.
- **On successful sign-in, land me on my upgrade waitlist or My Trips** — Don't send me to a generic homepage; I want upgrade clearance status for my next three segments, not a generic marketing carousel.

---

## 6. Bottom Line

I'd sign in — because I know my MileagePlus number cold and the authenticated experience is better — but I'm doing it in spite of this homepage, not because of it.

---

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Sign in for the best experience`
- **Hero image:** None — entire viewport is the sign-in modal; background is plain white/light gray.
- **Primary CTA:** `Continue` — visible above the fold? **yes**
- **Scores (1-10):** Clarity `7`, Relevance to you `4`, Visual hierarchy `3`, On-brand `5`
- **Strengths:**
  - "MileagePlus® number" field explicitly acknowledges I am a program member, not a generic visitor.
  - "Continue" button is clean, high-contrast, and easily tappable on mobile.
- **Weaknesses:**
  - The modal is the entire above-the-fold experience — there is literally no airline content visible.
  - Cookie banner layered on top fragments the already narrow sign-in sheet, clipping a second button option.

---

## 8. Promotional & Urgency Cues

- **Active promos:** None visible — sign-in modal and cookie banner cover 100% of the viewport.
- **Urgency / scarcity:** None.
- **Loyalty hooks:** "Email or MileagePlus® number" field — the only loyalty reference on screen.
- **Honesty check:** The cookie notice says United uses cookies "to show personalized ads from United or our third-party partners" — boilerplate language, nothing predatory, but the timing (stacked with the sign-in interrupt) feels like a double gate.

---

## 9. Engagement Likelihood

- − Hero relates to my focus area: No hero at all — sign-in modal covers everything.
- − Easy to reach my category: Navigation is completely obscured by the modal.
- − Eye-catching imagery in my category: No imagery visible whatsoever.
- − Promo banner I would use: None visible.
- − Page renders cleanly: No — cookie banner clips the second sign-in button; layout collision is visible.
- − Imagery includes someone like me: No imagery present.
- + Copy register matches mine: "Sign in for the best experience" and "MileagePlus® number" are clean, professional, and correctly address a member. No fluff.
- − Trust signals visible: None — no security badge, no "2 million daily travelers," nothing.
- − New/hot rail in my category: Completely hidden behind the modal.
- − No dark patterns: The full-screen sign-in takeover on load is a dark pattern; I came to browse, not authenticate on demand.

**Score:** `2/10` — should equal 1 + count of "+" bullets above.
**Rationale:** The only reason this doesn't hit rock-bottom is that "MileagePlus® number" tells me United knows who it's talking to. Everything else engagement-related — imagery, navigation, offers, trust signals — is simply not on screen.

---

## 10. Conversion Likelihood

- − CTA in my category: "Continue" drives sign-in, not a flight booking or upgrade action.
- − Unambiguous CTA copy: For sign-in purposes "Continue" is unambiguous, but it converts me to authenticated state, not to a purchase.
- − Active price reduction or member pricing: None visible.
- − Time-bounded credible deadline: None.
- − Reachable free-shipping threshold: Not applicable (airline).
- − Specific product page one tap away: No — single tap goes to credential continuation, not a booking or upgrade flow.
- − Sizing/fit info accessible: Not applicable.
- − Returns/exchanges mentioned: Not applicable.
- − Reviews/ratings visible: None.
- − Trust/security signals: None visible — no "secure sign-in," no lock icon, no assurance copy.

**Score:** `1/10` — should equal 1 + count of "+" bullets above.
**Rationale:** Nothing on this screen moves me toward booking, upgrading, or spending miles — I'd have to complete sign-in, then navigate to whatever the authenticated homepage looks like, before any real conversion moment appears.

---

## 11. Evidence

In scroll order, what I can actually see in this screenshot:

- **Sign-in modal (full-screen takeover):** Headline "Sign in for the best experience"; input labeled "Email or MileagePlus® number"; "Need help signing in?" link; large blue "Continue" button; a second button partially clipped at the bottom by the cookie banner; X close button top-right.
- **Cookie consent banner (bottom overlay):** "We use cookies for site functionality, use experience, to analyze traffic and to show personalized ads from United or our third-party partners. For more information, refer to our Privacy Policy." with "Accept cookies" and "Cookie preferences" buttons.
- **Homepage content:** Completely hidden — zero hero, zero nav, zero modules visible.
- **Bugs / friction visible:**
  - Cookie banner clips the second authentication button in the sign-in sheet — layout collision on mobile viewport.
  - Two consecutive interrupt overlays with no pathway to browse-first; both require active dismissal before any homepage content loads.
