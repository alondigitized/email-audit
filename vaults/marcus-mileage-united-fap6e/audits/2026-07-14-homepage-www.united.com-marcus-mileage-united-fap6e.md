---
slug: 2026-07-14-homepage-www.united.com-marcus-mileage-united-fap6e
type: site
date: 2026-07-14
persona: marcus-mileage-united-fap6e
score: "7/10"
sender: www.united.com
subject: Homepage snapshot · www.united.com · 2026-07-14
tags: [site-journey, score-7, sender/www-united-com]
---
# Homepage snapshot · www.united.com · 2026-07-14
**Score:** 7/10 · **Type:** Site journey · **2026-07-14**
## Executive summary

- I opened united.com expecting to see my go-to airline's homepage and instead got hit with a sign-in gate and a cookie consent banner stacked on top of each other — zero actual content visible. United clearly knows I'm a loyalty member and wants me authenticated before showing me anything, which I get strategically, but burying the entire page behind two simultaneous modals is not how you welcome a 1K who's opened your app a thousand times. This looks less like a premium airline homepage and more like an enterprise IT login screen.

## What's working

- **MileagePlus® number field label** — naming the program in the input label immediately tells me this site knows who I am. Not "username," not "email only." That's a small signal that matters.
- **"Continue" CTA** — big, blue, high-contrast, full-width. On mobile, that's exactly the button size I want on a tiny screen between flights. Tap-friendly.
- **"Need help signing in?" link** — low-key but useful. I've had my MileagePlus number change after a merge before. Nice recovery path.
- **Sign-in gate logic itself** — as a 1K, I actually want to be logged in before I search. My upgrade availability, PlusPoints balance, and saved payment are all behind that wall. Prompting me first isn't wrong.

## What's weak

- **Cookie banner overlapping the second button** — there's clearly a second option below "Continue" (looks like a sign-up or social-sign-in alternative) but the cookie consent banner slides over it. On a phone, I can't read it or tap it. That's a functional bug.
- **Zero homepage content visible** — I'm a 1K who reads every fare-sale email. I came here because I'm considering a booking. Show me something — a current sale, my upcoming trip, a 72-hour fare deal. The gate shows nothing.
- **Two modals stacked simultaneously** — sign-in modal + cookie banner is two friction events at once. I'm not a first-time visitor; United should know this from my cookie or app state.
- **"Sign in for the best experience"** — fine copy but thin. "Best experience" is vague. For a 1K, "See your upgrade queue and saved trips" would be materially more compelling.
- **No urgency or reason to act now** — nothing time-sensitive on screen. If I'm on the fence about a route, nothing on this screen tips me toward booking.

## Recommendations

- **Add a personalized teaser below the CTA** — one line like "Your PlusPoints balance and upgrade queue are waiting" gives a 1K a concrete reason to type the password instead of abandoning.
- **Fix the cookie banner z-index / timing** — delay it two seconds or anchor it below the modal so it doesn't cover the second sign-in option. This is a one-line CSS fix.
- **Surface a live fare alert for signed-out visitors** — even before authentication, show a strip like "Fares from ORD to EWR from $189 this week" to give road warriors a reason to care. It doesn't need personalization to be relevant.
- **Suppress the sign-in gate for returning visitors who recently authenticated** — I have United's app on my phone and log in daily. A persistent cookie or app-pass should skip this gate for frequent users.

## Full review
## 1. Executive Summary

I opened united.com expecting to see my go-to airline's homepage and instead got hit with a sign-in gate and a cookie consent banner stacked on top of each other — zero actual content visible. United clearly knows I'm a loyalty member and wants me authenticated before showing me anything, which I get strategically, but burying the entire page behind two simultaneous modals is not how you welcome a 1K who's opened your app a thousand times. This looks less like a premium airline homepage and more like an enterprise IT login screen.

---

## 2. Business Impact Score (1-10)

**7/10**

- + Hero copy speaks to persona: "Sign in for the best experience" directly addresses a returning MileagePlus member — that's me.
- + Returning-shopper hook visible: The entire modal IS the loyalty hook; "Email or MileagePlus® number" names my program.
- − Concrete offer above the fold: Zero. No fare sale, no bonus miles promo, nothing.
- + Primary CTA visible: "Continue" button is large, blue, and unmissable.
- + Visual hierarchy clear: Modal heading → input field → CTA is a clean three-step hierarchy.
- − No render bugs: The cookie consent banner at the bottom obscures and cuts off the second button below "Continue" — I can see it exists but can't read it.
- + Demographic signals match: MileagePlus branding is exactly on-target for a high-frequency road warrior.
- − Page reflects current campaign/season: Can't see any campaign — generic sign-in gate.
- − Loyalty benefits visible without scrolling: MileagePlus is mentioned in a form label but no benefits are shown (no miles balance, no upgrade queue teaser).
- + Offer feels honest: "Best experience" after sign-in is genuinely true for a 1K — personalized fares, upgrade visibility, saved preferences.

*6 criteria TRUE → 1 + 6 = 7/10*

---

## 3. What's Working

- **MileagePlus® number field label** — naming the program in the input label immediately tells me this site knows who I am. Not "username," not "email only." That's a small signal that matters.
- **"Continue" CTA** — big, blue, high-contrast, full-width. On mobile, that's exactly the button size I want on a tiny screen between flights. Tap-friendly.
- **"Need help signing in?" link** — low-key but useful. I've had my MileagePlus number change after a merge before. Nice recovery path.
- **Sign-in gate logic itself** — as a 1K, I actually want to be logged in before I search. My upgrade availability, PlusPoints balance, and saved payment are all behind that wall. Prompting me first isn't wrong.

---

## 4. What's Weak

- **Cookie banner overlapping the second button** — there's clearly a second option below "Continue" (looks like a sign-up or social-sign-in alternative) but the cookie consent banner slides over it. On a phone, I can't read it or tap it. That's a functional bug.
- **Zero homepage content visible** — I'm a 1K who reads every fare-sale email. I came here because I'm considering a booking. Show me something — a current sale, my upcoming trip, a 72-hour fare deal. The gate shows nothing.
- **Two modals stacked simultaneously** — sign-in modal + cookie banner is two friction events at once. I'm not a first-time visitor; United should know this from my cookie or app state.
- **"Sign in for the best experience"** — fine copy but thin. "Best experience" is vague. For a 1K, "See your upgrade queue and saved trips" would be materially more compelling.
- **No urgency or reason to act now** — nothing time-sensitive on screen. If I'm on the fence about a route, nothing on this screen tips me toward booking.

---

## 5. Recommendations

- **Add a personalized teaser below the CTA** — one line like "Your PlusPoints balance and upgrade queue are waiting" gives a 1K a concrete reason to type the password instead of abandoning.
- **Fix the cookie banner z-index / timing** — delay it two seconds or anchor it below the modal so it doesn't cover the second sign-in option. This is a one-line CSS fix.
- **Surface a live fare alert for signed-out visitors** — even before authentication, show a strip like "Fares from ORD to EWR from $189 this week" to give road warriors a reason to care. It doesn't need personalization to be relevant.
- **Suppress the sign-in gate for returning visitors who recently authenticated** — I have United's app on my phone and log in daily. A persistent cookie or app-pass should skip this gate for frequent users.

---

## 6. Bottom Line

I'll sign in because I know what's on the other side, but United just made me work for it — and if I were a less habitual United flier, I'd have tapped the X and checked Google Flights instead.

---

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Sign in for the best experience`
- **Hero image:** None — the modal sits on a white/light background with no imagery whatsoever.
- **Primary CTA:** `Continue` — visible above the fold? **yes**
- **Scores (1-10):** Clarity `8`, Relevance to you `6`, Visual hierarchy `7`, On-brand `5`
- **Strengths:**
  - Clean, uncluttered modal layout; CTA is impossible to miss on mobile.
  - MileagePlus name-drop in the field label speaks directly to my program.
- **Weaknesses:**
  - No imagery, no brand moment, no reason why *right now* is the time to fly.
  - "Best experience" is placeholder-level copy for a premium loyalty member who knows exactly what they want.

---

## 8. Promotional & Urgency Cues

- **Active promos:** None visible.
- **Urgency / scarcity:** None — no countdown, no "sale ends tonight," nothing.
- **Loyalty hooks:** "MileagePlus® number" field label — that's the only loyalty reference on screen.
- **Honesty check:** Nothing manipulative here; it's just empty. The cookie banner mentions "personalized ads from United or our third-party partners" — standard compliance language, not deceptive, but it's the only specific detail about what you'll get from interacting with the site.

---

## 9. Engagement Likelihood

- − Hero relates to my focus area: Sign-in modal is adjacent to my goals (I want to book / check upgrades) but doesn't show me anything travel-related.
- − Easy to reach my category: Can't see navigation at all — everything is behind the modal.
- − Eye-catching imagery in my category: Zero imagery on screen.
- − Promo banner I would use: No promos visible.
- − Page renders cleanly: Cookie banner cuts off the second button below "Continue" — functional obstruction.
- − Imagery includes someone like me: No imagery of any kind.
- + Copy register matches mine: "Sign in for the best experience" is clean, professional, no-nonsense. Sounds like United's brand voice.
- − Trust signals visible: No review counts, no security badge, no "your info is safe" language.
- − New / hot rail in my category: Nothing visible.
- − No dark patterns: Two stacked modals (sign-in interstitial + cookie consent) before any content = real friction. That's two consecutive asks before I see a single pixel of the actual site.

**Score:** `2/10` — only 1 "+" criterion, so 1 + 1 = 2.

**Rationale:** The copy register is fine for a corporate airline, but one clean-sounding headline can't compensate for a viewport that's 100% friction and 0% content. I'm a 1K who opens this app on autopilot — even I am annoyed.

---

## 10. Conversion Likelihood

- − CTA in my category: "Continue" signs me in — it's a step toward booking, not a booking itself. My category (flight search, upgrade confirmation) isn't visible.
- + Unambiguous CTA copy: `Continue` is clear and direct — no guessing what happens next.
- − Active price reduction or member pricing: Nothing visible.
- − Time-bounded credible deadline: None.
- − Reachable free-shipping threshold: N/A — no travel equivalent (e.g., "earn 5x miles on this route") shown.
- − Specific product page one tap away: No flights, routes, or products visible.
- − Sizing / fit info accessible: N/A for airline.
- − Returns / exchanges mentioned: No change/cancel fee information visible.
- − Reviews / ratings visible: None.
- − Trust / security signals: No "secure login" badge, no two-factor mention, no lock icon visible.

**Score:** `2/10` — 1 "+" criterion, so 1 + 1 = 2.

**Rationale:** I'll complete the sign-in because I'm a creature of habit with United and I know the upgrade queue is on the other side — but the page itself converted zero desire to book a specific flight. I'm signing in on inertia, not on intent.

---

## 11. Evidence

Modules visible on screen (in scroll order):

- **Sign-in modal / interstitial** — full-viewport overlay; headline "Sign in for the best experience," input field labeled "Email or MileagePlus® number," "Need help signing in?" recovery link, blue "Continue" CTA button, and a second partially visible button immediately below it (text unreadable).
- **Cookie consent banner** — fixed to the bottom of the viewport; text states United uses cookies for functionality, traffic analysis, and personalized ads; links to Privacy Policy; two actions: "Accept cookies" (outlined button) and "Cookie preferences" (text link with icon).
- **Close / dismiss controls** — X icon in the top-right of the sign-in modal, and a separate X on the cookie banner — both visible.
- **Bugs / friction visible in screenshot:**
  - Cookie consent banner overlaps and obscures the second option in the sign-in modal — that button's label is completely cut off and untappable.
  - Zero homepage content is visible; the actual page behind the modal is entirely hidden.
  - Two simultaneous overlay elements (modal + cookie banner) create compounded friction on first view.
## Recent history

- [[2026-07-07-homepage-www.united.com-marcus-mileage-united-fap6e]] — 6/10 (2026-07-07)
- [[2026-06-09-homepage-www.united.com-marcus-mileage-united-fap6e]] — 4/10 (2026-06-09)
- [[2026-06-02-homepage-www.united.com-marcus-mileage-united-fap6e]] — 3/10 (2026-06-02)

