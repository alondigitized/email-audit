---
slug: 2026-05-16-homepage-www.united.com-marcus-mileage-united-fap6e
type: site
date: 2026-05-16
persona: marcus-mileage-united-fap6e
score: "4/10"
sender: www.united.com
subject: Homepage snapshot · www.united.com · 2026-05-16
tags: [site-journey, score-4, sender/www-united-com]
---
# Homepage snapshot · www.united.com · 2026-05-16
**Score:** 4/10 · **Type:** Site journey · **2026-05-16**
## Executive summary

- I pulled up united.com to check upgrade availability on an ORD-SFO run next week, and the first thing I get is a sign-in modal stacked on top of a cookie consent banner — the entire homepage is buried under both. As a 1K who has memorized my MileagePlus number and calls the Premier desk on speed dial, I get why they want me authenticated, but forcing me to log in before I can even see a flight search or a fare sale is a friction wall, not a welcome mat. Right now this homepage looks less like a loyalty-first airline and more like a website that doesn't trust me yet.

## What's working

- **MileagePlus number field label** — calling it out explicitly tells me this is built for program members, not just anonymous travelers
- **"Continue" button** — full-width, strong blue, impossible to miss; if I wanted to sign in, I could do it in one tap
- **"Need help signing in?" link** — small but present; good for travelers who travel on different devices and can't remember credentials
- **Dismissible modal** — there's an X in the top right, so I'm not completely hostage to the sign-in wall

## What's weak

- **The modal itself as the first experience** — I flew 112,000 miles last year. The homepage should greet me with a flight search and upgrade availability, not a gate. This is a pattern built for conversion metrics, not for a 1K member who already has the app
- **Cookie banner overlapping the modal** — the second button in the sign-in modal is visibly cut off by the cookie consent strip. I can't read what that second option is. That's a broken experience
- **Zero above-the-fold content** — no hero, no sale, no route, no upgrade news. Completely dark behind two overlays
- **No loyalty balance or status callout** — if United recognizes my device or cookie, there's no sign of it. The page treats me like a stranger

## Recommendations

- **Surface the flight search before the sign-in modal** — let me search for ORD-SFO, then prompt me to sign in to see upgrade availability and member pricing. Amazon doesn't wall you behind login to browse; United shouldn't either
- **Fix the cookie banner z-index so it doesn't clip the sign-in modal** — the overlapping UI is a visible bug; the second button is unreadable. Ship a one-line CSS fix this week
- **Add a "1K / Premier member? Sign in for upgrade status" hook** — reframe the sign-in prompt from generic to status-aware. "Check your upgrade queue" is worth a tap; "Sign in for the best experience" is forgettable
- **Show one fare alert or route promo below the modal if the user dismisses** — a dismissed sign-in shouldn't reveal a blank page; there should be content behind it worth staying for

## Full review
## 1. Executive Summary

I pulled up united.com to check upgrade availability on an ORD-SFO run next week, and the first thing I get is a sign-in modal stacked on top of a cookie consent banner — the entire homepage is buried under both. As a 1K who has memorized my MileagePlus number and calls the Premier desk on speed dial, I get why they want me authenticated, but forcing me to log in before I can even see a flight search or a fare sale is a friction wall, not a welcome mat. Right now this homepage looks less like a loyalty-first airline and more like a website that doesn't trust me yet.

## 2. Business Impact Score (1-10)

**4/10**

- + Returning-shopper hook: sign-in field explicitly references "MileagePlus® number" — they know frequent flyers exist
- + Unmistakable primary CTA above the fold: "Continue" button is large, blue, and prominent
- + Visual hierarchy within the modal is clear — field, help link, button, in that order
- − No hero copy, imagery, or campaign content visible — 100% obscured
- − No concrete offer above the fold
- − Cookie banner overlaps the second button in the modal — render/layout bug visible on screen
- − No demographic signals, no seasonal campaign, no loyalty benefit callout, no offer honesty to evaluate

## 3. What's Working

- **MileagePlus number field label** — calling it out explicitly tells me this is built for program members, not just anonymous travelers
- **"Continue" button** — full-width, strong blue, impossible to miss; if I wanted to sign in, I could do it in one tap
- **"Need help signing in?" link** — small but present; good for travelers who travel on different devices and can't remember credentials
- **Dismissible modal** — there's an X in the top right, so I'm not completely hostage to the sign-in wall

## 4. What's Weak

- **The modal itself as the first experience** — I flew 112,000 miles last year. The homepage should greet me with a flight search and upgrade availability, not a gate. This is a pattern built for conversion metrics, not for a 1K member who already has the app
- **Cookie banner overlapping the modal** — the second button in the sign-in modal is visibly cut off by the cookie consent strip. I can't read what that second option is. That's a broken experience
- **Zero above-the-fold content** — no hero, no sale, no route, no upgrade news. Completely dark behind two overlays
- **No loyalty balance or status callout** — if United recognizes my device or cookie, there's no sign of it. The page treats me like a stranger

## 5. Recommendations

- **Surface the flight search before the sign-in modal** — let me search for ORD-SFO, then prompt me to sign in to see upgrade availability and member pricing. Amazon doesn't wall you behind login to browse; United shouldn't either
- **Fix the cookie banner z-index so it doesn't clip the sign-in modal** — the overlapping UI is a visible bug; the second button is unreadable. Ship a one-line CSS fix this week
- **Add a "1K / Premier member? Sign in for upgrade status" hook** — reframe the sign-in prompt from generic to status-aware. "Check your upgrade queue" is worth a tap; "Sign in for the best experience" is forgettable
- **Show one fare alert or route promo below the modal if the user dismisses** — a dismissed sign-in shouldn't reveal a blank page; there should be content behind it worth staying for

## 6. Bottom Line

I'm going to hit the X, close both overlays, and hope there's a flight search tool underneath — but if the dismissed page doesn't immediately show me something useful, I'm opening the United app instead.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Sign in for the best experience`
- **Hero image:** No hero image — full viewport is a sign-in modal with a white background and a cookie consent banner below
- **Primary CTA:** `Continue` — visible above the fold? yes
- **Scores (1-10):** Clarity `7`, Relevance to you `4`, Visual hierarchy `6`, On-brand `5`
- **Strengths:**
  - Modal is clean and functional; field label names MileagePlus directly
  - "Continue" button meets WCAG contrast minimums — high visibility
- **Weaknesses:**
  - "Best experience" is vague marketing language; for a 1K this should be "check upgrade availability" or "see your miles balance"
  - Cookie banner physically overlaps the modal's second button — broken UI on the primary conversion surface

## 8. Promotional & Urgency Cues

- **Active promos:** None visible — all content hidden behind sign-in modal
- **Urgency / scarcity:** None visible
- **Loyalty hooks:** MileagePlus® number referenced in sign-in field label only — no balance, no status, no points promo
- **Honesty check:** The cookie notice is standard but its positioning creates a visual collision with the modal, making the second button illegible. Not manipulative, but sloppily implemented in a way that could obscure choices

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero visible; the modal is not about flying or upgrades
- − Easy to reach my category: nav is completely hidden behind the modal overlay
- − Eye-catching imagery in my category: none — white modal, no aircraft, no route imagery
- − Promo banner I would use: none visible
- − Page renders cleanly: NO — cookie banner clips the second sign-in option; stacked overlays create visual collision
- − Imagery includes someone like me: none — no lifestyle, no traveler imagery at all
- + Copy register matches mine: "Sign in for the best experience" is plain, direct, professional — not condescending or cutesy
- − Trust signals visible: none — no security badge, no reviews, nothing
- − New/hot rail in my category: not visible
- − No dark patterns: the sign-in modal before any content is an aggressive gate; the overlapping cookie banner hides a button choice
- **Score:** `2/10` — should equal 1 + count of "+" bullets above.
- **Rationale:** The only thing keeping this above a 1 is that the copy is at least professional and direct; everything else about engagement is blocked or broken before I can evaluate it.

## 10. Conversion Likelihood

- − CTA in my category: "Continue" is for signing in, not for booking a flight or checking upgrade status
- + Unambiguous CTA copy: "Continue" is clear in context — if I wanted to sign in, I know exactly what to tap
- − Active price reduction or member pricing: none visible
- − Time-bounded credible deadline: none visible
- − Reachable free-shipping threshold: N/A for airline — no shipping angle
- − Specific product page one tap away: no — flight search is behind the modal
- − Sizing/fit info accessible: N/A
- − Returns/exchanges mentioned: no cancellation policy, no change fee callout visible
- − Reviews/ratings visible: none
- − Trust/security signals: none visible on screen
- **Score:** `2/10` — should equal 1 + count of "+" bullets.
- **Rationale:** The only conversion signal that fires is that the "Continue" button is readable and tappable; there is zero pathway to booking, upgrade checking, or fare shopping visible from this screen.

## 11. Evidence

- **Sign-in modal (full viewport):** headline "Sign in for the best experience," field labeled "Email or MileagePlus® number," "Need help signing in?" link, full-width blue "Continue" button, second partially visible button cut off by cookie banner
- **Dismissal control:** X icon top-right of modal
- **Cookie consent banner (bottom overlay):** "We use cookies for site functionality, use experience, to analyze traffic and to show personalized ads from United or our third-party partners. For more information, refer to our Privacy Policy." with "Accept cookies" and "Cookie preferences" buttons
- **Bugs / friction visible in screenshot:**
  - Cookie banner overlaps and clips the second button in the sign-in modal — button text is illegible
  - Entire homepage content (hero, flight search, promos, nav) is invisible behind modal stack — no page content visible at all
  - Large blank white area above the sign-in card suggests either a slow-loading image or layout padding that serves no purpose on mobile
## Recent history

- [[2026-05-15-homepage-www.united.com-marcus-mileage-united-fap6e]] — 3/10 (2026-05-15)

