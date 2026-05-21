---
slug: 2026-05-21-homepage-www.aa.com-curt-aadvantage-aa-fap6e
type: site
date: 2026-05-21
persona: curt-aadvantage-aa-fap6e
score: "1/10"
sender: www.aa.com
subject: Homepage snapshot · www.aa.com · 2026-05-21
tags: [site-journey, score-1, sender/www-aa-com]
---
# Homepage snapshot · www.aa.com · 2026-05-21
**Score:** 1/10 · **Type:** Site journey · **2026-05-21**
## Executive summary

- I opened AA.com and got a brick wall — literally. What I'm staring at is a plain white Akamai CDN error page that says "Access Denied" in bold H1 text, a reference ID, and an edgesuite.net URL. There is no homepage, no nav, no hero, no loyalty hook, nothing. This is the digital equivalent of being told your Admirals Club card is no longer valid at the door.

## What's working

- Nothing. The page loaded instantly, I'll give it that — Akamai delivers a fast error.

## What's weak

- The entire homepage: what I see is `Access Denied` in Times New Roman with a reference number. That's it.
- The error message is unhelpful to an end user — "You don't have permission to access http://www.aa.com/ on this server" tells me nothing actionable. No retry button, no alternate link, no customer service number.
- The reference ID (`#18.103b2f17.1779361056.df0a27c`) is exposed to the end user with zero context. AA's IT department strikes again.
- The page is completely unbranded — no AA logo, no color, no fallback content.

## Recommendations

- Fix the WAF/CDN geo or bot-detection rule that is blocking legitimate mobile traffic from reaching the homepage — this is a P0 revenue issue, not a design note.
- Implement a branded fallback error page so that when Akamai blocks a request, users at least see AA's logo, a "We're having trouble loading this page" message, and a link to the app or a support number.
- Add a retry/refresh CTA to any error state — one button that says "Try Again" would recover a percentage of blocked users on their own.
- Log and alert on the volume of homepage 403s hitting this reference pattern — if I'm seeing this on a standard mobile connection, this is likely affecting revenue at scale.

## Full review
## 1. Executive Summary

I opened AA.com and got a brick wall — literally. What I'm staring at is a plain white Akamai CDN error page that says "Access Denied" in bold H1 text, a reference ID, and an edgesuite.net URL. There is no homepage, no nav, no hero, no loyalty hook, nothing. This is the digital equivalent of being told your Admirals Club card is no longer valid at the door.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy explicitly speaks to my persona: no hero exists
- − Returning-shopper hook visible: none
- − Concrete offer above the fold: none
- − Unmistakable primary CTA above the fold: none
- − Clear visual hierarchy: there is no designed hierarchy — just a browser-default serif H1 and two paragraphs of error text
- − No render bugs: this IS the render bug — the entire page failed to load
- − Demographic signals match my persona: none
- − Current campaign / season reflected: none
- − Loyalty / membership benefits visible: none
- − Offer feels honest: N/A — there is no offer

Score floors at 1 per rubric rules. Every single criterion fails because the page that loaded is an Akamai WAF block page, not aa.com.

## 3. What's Working

- Nothing. The page loaded instantly, I'll give it that — Akamai delivers a fast error.

## 4. What's Weak

- The entire homepage: what I see is `Access Denied` in Times New Roman with a reference number. That's it.
- The error message is unhelpful to an end user — "You don't have permission to access http://www.aa.com/ on this server" tells me nothing actionable. No retry button, no alternate link, no customer service number.
- The reference ID (`#18.103b2f17.1779361056.df0a27c`) is exposed to the end user with zero context. AA's IT department strikes again.
- The page is completely unbranded — no AA logo, no color, no fallback content.

## 5. Recommendations

- Fix the WAF/CDN geo or bot-detection rule that is blocking legitimate mobile traffic from reaching the homepage — this is a P0 revenue issue, not a design note.
- Implement a branded fallback error page so that when Akamai blocks a request, users at least see AA's logo, a "We're having trouble loading this page" message, and a link to the app or a support number.
- Add a retry/refresh CTA to any error state — one button that says "Try Again" would recover a percentage of blocked users on their own.
- Log and alert on the volume of homepage 403s hitting this reference pattern — if I'm seeing this on a standard mobile connection, this is likely affecting revenue at scale.

## 6. Bottom Line

I closed the tab and opened the AA app instead — this is exactly why I have it downloaded.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** None — white background, browser-default typography only
- **Primary CTA:** None — visible above the fold? No
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:**
  - The reference number is technically useful for a support call, if I wanted to make one
- **Weaknesses:**
  - No brand identity whatsoever — a competitor could serve this error and I wouldn't know whose site I hit
  - Zero recovery path for the user

## 8. Promotional & Urgency Cues

- **Active promos:** None
- **Urgency / scarcity:** None
- **Loyalty hooks:** None — Executive Platinum status, AAdvantage number, none of it matters here
- **Honesty check:** The page is technically honest — it really did deny me access. That's the only thing I can say for it.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero, no focus area, nothing
- − Easy to reach my category: no navigation exists
- − Eye-catching imagery in my category: no imagery exists
- − Promo banner I would use: no banners
- − Page renders cleanly: renders as a bare error page — this is the failure mode
- − Imagery includes someone like me: no imagery
- − Copy register matches mine: error text is unbranded and terse, not targeted at anyone
- − Trust signals visible: none
- − New / hot rail in my category: none
- − No dark patterns: technically no dark patterns — there's nothing to pattern

**Score:** `1/10` — the page loaded fast and that's where the positives end.
**Rationale:** An Akamai block page has zero engagement surface. There is no element to interact with, no path forward, and no reason to stay.

## 10. Conversion Likelihood

- − CTA in my category: none
- − Unambiguous CTA copy: none
- − Active price reduction or member pricing: none
- − Time-bounded credible deadline: none
- − Reachable free-shipping threshold: N/A
- − Specific product page one tap away: none
- − Sizing / fit info accessible: N/A
- − Returns / exchanges mentioned: none
- − Reviews / ratings visible: none
- − Trust / security signals: none

**Score:** `1/10` — floors at 1 per rubric.
**Rationale:** There is no conversion surface on this page. The only action available is closing the browser tab, which I did.

## 11. Evidence

Visible modules in scroll order (entire page):

- **H1 error heading:** "Access Denied" in browser-default bold serif
- **Error body copy line 1:** "You don't have permission to access \"http://www.aa.com/\" on this server."
- **Error body copy line 2:** "Reference #18.103b2f17.1779361056.df0a27c"
- **Error body copy line 3:** "https://errors.edgesuite.net/18.103b2f17.1779361056.df0a27c" (plain text, not a hyperlink)
- **Remainder of viewport:** Blank white space
- **Bugs / friction:** The entire homepage is the bug — Akamai's WAF blocked the request. No AA branding, no fallback, no recovery path. This is a critical site failure for any user hitting this path.
## Recent history

- [[2026-05-20-homepage-www.aa.com-curt-aadvantage-aa-fap6e]] — 1/10 (2026-05-20)
- [[2026-05-19-homepage-www.aa.com-curt-aadvantage-aa-fap6e]] — 1/10 (2026-05-19)
- [[2026-05-18-homepage-www.aa.com-curt-aadvantage-aa-fap6e]] — 1/10 (2026-05-18)

