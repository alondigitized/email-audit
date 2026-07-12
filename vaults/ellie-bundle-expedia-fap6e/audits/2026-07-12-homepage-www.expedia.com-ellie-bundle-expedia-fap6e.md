---
slug: 2026-07-12-homepage-www.expedia.com-ellie-bundle-expedia-fap6e
type: site
date: 2026-07-12
persona: ellie-bundle-expedia-fap6e
score: "1/10"
sender: www.expedia.com
subject: Homepage snapshot · www.expedia.com · 2026-07-12
tags: [site-journey, score-1, sender/www-expedia-com]
---
# Homepage snapshot · www.expedia.com · 2026-07-12
**Score:** 1/10 · **Type:** Site journey · **2026-07-12**
## Executive summary

- I opened Expedia to start planning our family summer bundle and the first thing I see is a bot-check wall telling me my browser "behaved suspiciously." There is no homepage — just a slider CAPTCHA and an IP address staring back at me. As a brand, this reads as defensive and paranoid right out of the gate, which is a terrible first impression for a Sunday-morning trip-research session with coffee in hand.

## What's working

- The Expedia wordmark and logo are visible — at least I know I'm on the right domain and didn't land on a phishing page.
- The "Submit feedback" link is a small grace: if I were a real power user I could flag this experience, though most people won't notice it.

## What's weak

- **The entire homepage is blocked.** Not a single travel product, deal, or CTA is visible. I came to book flights + hotels for the kids' summer trip and I'm being interrogated instead.
- **"We can't tell if you're a human or a bot"** — this copy is blunt to the point of feeling accusatory. Not a warm welcome for a loyal One Key Cash member.
- **IP address exposed on-screen** (`IP 75.140.9.0`) — showing my IP publicly in the error message feels intrusive and slightly alarming, even if it's meant to be diagnostic.
- **No reassurance for returning members.** If I were signed in, a loyal member greeting ("Hi Ellie, welcome back") would both verify my humanity and restore trust instantly — but there's nothing.
- **Slider CAPTCHA is mobile-unfriendly.** On a phone screen, this drag-to-verify widget is fiddly and annoying, especially with one hand while holding a coffee mug.
- **The session/fingerprint IDs at the bottom** (`dd3b372c-8917...`, `eb882c67-4766...`) are raw debug strings dumped on the user. This reads like a developer forgot to strip internal telemetry from the consumer-facing error page.

## Recommendations

- **Replace the cold CAPTCHA wall with a member-first recovery path:** if a cookie or One Key account session exists, use that signal to skip the slider entirely and route me straight to my dashboard.
- **Rewrite the copy tone:** "Show us your human side…" tries to be clever but lands as condescending — something like "One quick check before we get you to your trip" is warmer and on-brand.
- **Strip the raw session/IP debug strings** from the consumer-facing page; those belong in internal logging only.
- **Add a branded loading state or partial homepage skeleton** below the verification widget so users can see travel content loading — reduces the sense of being locked out.

## Full review
## 1. Executive Summary

I opened Expedia to start planning our family summer bundle and the first thing I see is a bot-check wall telling me my browser "behaved suspiciously." There is no homepage — just a slider CAPTCHA and an IP address staring back at me. As a brand, this reads as defensive and paranoid right out of the gate, which is a terrible first impression for a Sunday-morning trip-research session with coffee in hand.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery matches my persona: nothing travel-related is visible — just a CAPTCHA prompt
- − Returning-shopper hook (loyalty balance, recently viewed): absent
- − Concrete offer above the fold: absent
- − Unmistakable primary CTA in my category: absent — the only CTA is a slider to prove I'm human
- − Visual hierarchy clear: not applicable — there is no commercial content
- − No render bugs: the page "works" technically, but the entire homepage is replaced by a verification wall
- − Demographic signals match my persona: absent
- − Current campaign / season visible: absent
- − Loyalty / membership benefits visible: absent
- − Offer feels honest: not applicable — no offer exists

Starts at 1; no rubric criterion is satisfied. Score stays at 1.

## 3. What's Working

- The Expedia wordmark and logo are visible — at least I know I'm on the right domain and didn't land on a phishing page.
- The "Submit feedback" link is a small grace: if I were a real power user I could flag this experience, though most people won't notice it.

## 4. What's Weak

- **The entire homepage is blocked.** Not a single travel product, deal, or CTA is visible. I came to book flights + hotels for the kids' summer trip and I'm being interrogated instead.
- **"We can't tell if you're a human or a bot"** — this copy is blunt to the point of feeling accusatory. Not a warm welcome for a loyal One Key Cash member.
- **IP address exposed on-screen** (`IP 75.140.9.0`) — showing my IP publicly in the error message feels intrusive and slightly alarming, even if it's meant to be diagnostic.
- **No reassurance for returning members.** If I were signed in, a loyal member greeting ("Hi Ellie, welcome back") would both verify my humanity and restore trust instantly — but there's nothing.
- **Slider CAPTCHA is mobile-unfriendly.** On a phone screen, this drag-to-verify widget is fiddly and annoying, especially with one hand while holding a coffee mug.
- **The session/fingerprint IDs at the bottom** (`dd3b372c-8917...`, `eb882c67-4766...`) are raw debug strings dumped on the user. This reads like a developer forgot to strip internal telemetry from the consumer-facing error page.

## 5. Recommendations

- **Replace the cold CAPTCHA wall with a member-first recovery path:** if a cookie or One Key account session exists, use that signal to skip the slider entirely and route me straight to my dashboard.
- **Rewrite the copy tone:** "Show us your human side…" tries to be clever but lands as condescending — something like "One quick check before we get you to your trip" is warmer and on-brand.
- **Strip the raw session/IP debug strings** from the consumer-facing page; those belong in internal logging only.
- **Add a branded loading state or partial homepage skeleton** below the verification widget so users can see travel content loading — reduces the sense of being locked out.

## 6. Bottom Line

I'd close the tab and open Hotels.com right now — same parent company, same prices, hopefully no interrogation.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Show us your human side…`
- **Hero image:** None — white background with a CAPTCHA slider widget
- **Primary CTA:** `→` (arrow icon inside a slider button) — visible above the fold? yes, but it is a bot-verification control, not a travel CTA
- **Scores (1-10):** Clarity `3`, Relevance to you `1`, Visual hierarchy `4`, On-brand `2`
- **Strengths:**
  - The Expedia logo is immediately recognizable at the top — I know where I am.
  - The page is technically legible; the instructions are readable.
- **Weaknesses:**
  - Zero travel intent on screen — no destination imagery, no bundle prompt, no search bar.
  - "Show us your human side" is trying to be whimsical but reads as off-brand for a transactional travel platform.

## 8. Promotional & Urgency Cues

- **Active promos:** none visible
- **Urgency / scarcity:** none visible
- **Loyalty hooks:** none visible — no One Key Cash balance, no member greeting, no rewards callout
- **Honesty check:** Showing a raw IP address (`75.140.9.0`) and two session fingerprint strings to a consumer is unnecessary and feels like accidental data exposure; raw debug IDs should never reach the public-facing error screen.

## 9. Engagement Likelihood

- − Hero relates to my focus area: CAPTCHA wall has zero travel relevance
- − Easy to reach my category: no navigation, no search bar, no category links visible
- − Eye-catching imagery in my category: no imagery at all
- − Promo banner I would use: none present
- − Page renders cleanly: the verification widget renders, but the entire homepage content failed to load — this counts as a major render failure for engagement purposes
- − Imagery includes someone like me: no imagery
- − Copy register matches mine: "We can't tell if you're a human or a bot" is blunt and off-putting, not conversational millennial-mom tone
- − Trust signals visible: none — no reviews, no badges, no reassurance
- − New / hot rail in my category: absent
- − No dark patterns: the page is not a dark pattern per se, but a verification wall that replaces the entire homepage is a hard bounce trigger

**Score:** `1/10` — no engagement criterion is satisfied; every rubric point is a minus.
**Rationale:** There is nothing to engage with. The page has replaced all commercial content with a security wall, and a millennial mom who came to research a family bundle will simply tap back and try a competitor.

## 10. Conversion Likelihood

- − CTA in my category: the only CTA is the bot-verification slider
- − Unambiguous CTA copy: "→" is unambiguous as a slider direction, but meaningless as a conversion CTA
- − Active price reduction or member pricing: none visible
- − Time-bounded credible deadline: none visible
- − Reachable free-shipping threshold: not applicable for travel
- − Specific product page one tap away: no product pages accessible
- − Sizing / fit info accessible: not applicable
- − Returns / exchanges mentioned: none visible
- − Reviews / ratings visible: none visible
- − Trust / security signals: none visible — ironically, a security-check page has no security trust signals for the consumer

**Score:** `1/10` — no conversion criterion is satisfied.
**Rationale:** You cannot convert on a bot-gate. Every criterion fails because zero commercial content is reachable from this state.

## 11. Evidence

- **Bot verification wall / CAPTCHA:** Full-screen takeover with Expedia wordmark at top, headline "Show us your human side…", subtext "We can't tell if you're a human or a bot.", a drag-slider widget ("Slide right to secure your access") with an arrow button
- **Explanatory copy block:** Four bullet-point reasons why verification may be required (browsing speed, JavaScript block, shared network, robot on network)
- **Feedback link:** "Submit feedback." text link in the body copy
- **Debug identifiers:** Two raw session/fingerprint ID strings exposed at the bottom of the page (`dd3b372c-8917-0710-4668-40fe01cca903` and `eb882c67-4766-4ff0-85ff-9a4626255848`)
- **Bugs / friction:** Entire homepage content is absent — no search bar, no navigation, no hero imagery, no deals, no loyalty module, no footer. Raw IP and session strings displayed to end users are a data-hygiene bug. The CAPTCHA slider is a known friction point on mobile touch screens.
## Recent history

- [[2026-07-05-homepage-www.expedia.com-ellie-bundle-expedia-fap6e]] — 1/10 (2026-07-05)
- [[2026-06-07-homepage-www.expedia.com-ellie-bundle-expedia-fap6e]] — 1/10 (2026-06-07)
- [[2026-05-31-homepage-www.expedia.com-ellie-bundle-expedia-fap6e]] — 6/10 (2026-05-31)

