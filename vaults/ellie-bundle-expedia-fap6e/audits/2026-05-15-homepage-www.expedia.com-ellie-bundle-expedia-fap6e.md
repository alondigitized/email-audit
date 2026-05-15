---
slug: 2026-05-15-homepage-www.expedia.com-ellie-bundle-expedia-fap6e
type: site
date: 2026-05-15
persona: ellie-bundle-expedia-fap6e
score: "1/10"
sender: www.expedia.com
subject: Homepage snapshot · www.expedia.com · 2026-05-15
tags: [site-journey, score-1, sender/www-expedia-com]
---
# Homepage snapshot · www.expedia.com · 2026-05-15
**Score:** 1/10 · **Type:** Site journey · **2026-05-15**
## Executive summary

- I didn't get the homepage — I got a bot wall. Expedia's anti-bot detection fired before I could see a single deal, and now I'm staring at a slider CAPTCHA with the message "We can't tell if you're a human or a bot." Not exactly the vibe I was going for on a Sunday morning with my coffee. This is a dead stop before any brand, offer, or product shows up at all.

## What's working

- The Expedia logo is visible and recognizable — I know I'm on the right site at least.
- The error explanation is actually pretty transparent ("browsing at a speed faster than expected of a human being") — not a blank 403, which I appreciate marginally.

## What's weak

- **The entire homepage is blocked.** A Sunday-morning trip-research session is dead on arrival. I can't see flights, bundles, One Key Cash balance, nothing.
- **"Show us your human side..."** — the copy is weirdly cute for what is essentially an accusation that I'm a bot. It doesn't land warmly.
- **The slider CAPTCHA is the only interactive element** — there's no fallback (email, SMS, sign-in to bypass), so if the slider doesn't work I'm stuck.
- **No sign-in prompt to skip verification** — if I'm a logged-in One Key member, why isn't there a "sign in instead" option to fast-track me through?
- **IP 75.140.9.0 is flagged in the error copy** — that's oddly technical and exposing for a consumer-facing message. I don't want to see my network details on a travel homepage.

## Recommendations

- **Add a "Sign in to continue" bypass** — a logged-in One Key member should never hit a CAPTCHA wall; session auth should short-circuit bot detection immediately.
- **Replace the IP address in the error message with plain language** — "your network may be shared with heavy automated traffic" is consumer-friendly; showing a raw IP is not.
- **Offer an alternative challenge path** — audio CAPTCHA or "send me a code" so a frustrated mom on Sunday morning has an out beyond the slider.
- **Log CAPTCHA-trigger events as a friction signal** — if Sunday-morning mobile traffic on hotel/flight pages is regularly tripping this, the sensitivity threshold needs tuning badly.

## Full review
## 1. Executive Summary

I didn't get the homepage — I got a bot wall. Expedia's anti-bot detection fired before I could see a single deal, and now I'm staring at a slider CAPTCHA with the message "We can't tell if you're a human or a bot." Not exactly the vibe I was going for on a Sunday morning with my coffee. This is a dead stop before any brand, offer, or product shows up at all.

## 2. Business Impact Score (1-10)

**1/10**
- − Hero copy speaks to my persona: the only copy visible is a CAPTCHA challenge — zero travel, family, or bundling context
- − Returning-shopper hook: none visible
- − Concrete offer: none visible
- − Primary CTA: the only "button" is a slider to prove I'm human
- − Visual hierarchy: challenge UI has no merchandising hierarchy
- − No render bugs: technically it rendered, but it's a verification wall, not a homepage
- − Demographic signals: none
- − Current campaign/season: none
- − Loyalty/membership benefits: none
- − Honest offer: no offer present at all
- Score: start at 1, no criteria satisfied. **1/10**

## 3. What's Working

- The Expedia logo is visible and recognizable — I know I'm on the right site at least.
- The error explanation is actually pretty transparent ("browsing at a speed faster than expected of a human being") — not a blank 403, which I appreciate marginally.

## 4. What's Weak

- **The entire homepage is blocked.** A Sunday-morning trip-research session is dead on arrival. I can't see flights, bundles, One Key Cash balance, nothing.
- **"Show us your human side..."** — the copy is weirdly cute for what is essentially an accusation that I'm a bot. It doesn't land warmly.
- **The slider CAPTCHA is the only interactive element** — there's no fallback (email, SMS, sign-in to bypass), so if the slider doesn't work I'm stuck.
- **No sign-in prompt to skip verification** — if I'm a logged-in One Key member, why isn't there a "sign in instead" option to fast-track me through?
- **IP 75.140.9.0 is flagged in the error copy** — that's oddly technical and exposing for a consumer-facing message. I don't want to see my network details on a travel homepage.

## 5. Recommendations

- **Add a "Sign in to continue" bypass** — a logged-in One Key member should never hit a CAPTCHA wall; session auth should short-circuit bot detection immediately.
- **Replace the IP address in the error message with plain language** — "your network may be shared with heavy automated traffic" is consumer-friendly; showing a raw IP is not.
- **Offer an alternative challenge path** — audio CAPTCHA or "send me a code" so a frustrated mom on Sunday morning has an out beyond the slider.
- **Log CAPTCHA-trigger events as a friction signal** — if Sunday-morning mobile traffic on hotel/flight pages is regularly tripping this, the sensitivity threshold needs tuning badly.

## 6. Bottom Line

I'd close the tab and open Booking.com, because I'm not going to wrestle a robot-slider before I've even seen a deal.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Show us your human side...`
- **Hero image:** No image — plain white challenge screen with a slider widget
- **Primary CTA:** `→` (arrow in slider control) — visible above the fold? yes, but it's a CAPTCHA action, not a shop/search CTA
- **Scores (1-10):** Clarity `2`, Relevance to you `1`, Visual hierarchy `3`, On-brand `2`
- **Strengths:**
  - Logo is clearly visible and correctly branded
  - Error explanation is verbose enough that I understand why I'm stuck
- **Weaknesses:**
  - Zero travel or product content — the entire fold is a security gate
  - No path to the actual homepage without completing the challenge

## 8. Promotional & Urgency Cues

- **Active promos:** none — page is a bot-verification wall
- **Urgency / scarcity:** none visible
- **Loyalty hooks:** none — One Key Cash balance, member pricing, and rewards are completely invisible
- **Honesty check:** showing the raw IP address (`75.140.9.0`) in the consumer-facing error message feels unnecessarily technical and slightly invasive

## 9. Engagement Likelihood

- − Hero relates to my focus area: CAPTCHA has nothing to do with family vacation bundles
- − Easy to reach my category: impossible — all navigation is blocked
- − Eye-catching imagery in my category: no travel imagery at all
- − Promo banner I would use: none visible
- − Page renders cleanly: renders but serves a challenge wall, not content
- − Imagery includes someone like me: no imagery
- − Copy register matches mine: "Show us your human side" is trying to be cute; it's just frustrating
- − Trust signals visible: none — no reviews, no secure-checkout badges, nothing
- − New/hot rail in my category: none
- − No dark patterns: the challenge itself is friction-as-design; no modal, but the wall IS the dark pattern
- **Score:** `1/10` — no engagement criteria satisfied beyond "it rendered"
- **Rationale:** Every engagement signal is zeroed out because the homepage content never loaded; I'm scoring the wall, not the site.

## 10. Conversion Likelihood

- − CTA in my category: slider is not a travel CTA
- − Unambiguous CTA copy: arrow button is for challenge completion, not booking
- − Active price reduction or member pricing: none visible
- − Time-bounded credible deadline: none visible
- − Reachable free-shipping threshold: N/A for travel, and no equivalent (free cancellation) visible
- − Specific product page one tap away: no product pages accessible
- − Sizing / fit info accessible: N/A
- − Returns / exchanges mentioned: no cancellation or refund policy visible
- − Reviews / ratings visible: none
- − Trust / security signals: none — no SSL badge, no trust copy, nothing
- **Score:** `1/10` — no conversion criteria met
- **Rationale:** There is nothing to convert on; the page is a hard stop before any product, offer, or CTA becomes accessible.

## 11. Evidence

Modules visible in the screenshot (in scroll order):

- **Expedia logo** — top-left, standard yellow arrow wordmark
- **Bot-detection headline** — "Show us your human side... / We can't tell if you're a human or a bot."
- **CAPTCHA widget** — icon + audio toggle row, followed by a "Slide right to secure your access" slider with arrow button
- **Verification explanation block** — paragraph listing possible reasons: fast clicking, JavaScript blocked, shared network/IP
- **"Submit feedback" link** — small text link, the only navigable element besides the slider
- **Session ID string** — `ID: be08b7c8-c321-0394-479f-eb1d6e4be505` displayed in plain text
- **Footer hash** — `073c67e2-0987-49dd-80d0-c5e13e749ed9` — a debug/session token shown to end users, which is odd
- **Bugs / friction visible:** entire homepage content replaced by a bot-challenge screen; raw IP and session/debug IDs exposed to the consumer; no sign-in bypass; no alternative challenge path
