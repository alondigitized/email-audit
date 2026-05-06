---
slug: 2026-05-06-homepage-www2.hm.com-astrid-trend-hm-fap6e
type: site
date: 2026-05-06
persona: astrid-trend-hm-fap6e
score: "1/10"
sender: www2.hm.com
subject: Homepage snapshot · www2.hm.com · 2026-05-06
tags: [site-journey, score-1, sender/www2-hm-com]
---
# Homepage snapshot · www2.hm.com · 2026-05-06
**Score:** 1/10 · **Type:** Site journey · **2026-05-06**
## Executive summary

- I literally cannot tell you what kind of brand this is right now because H&M's server just blocked me at the door. What I'm looking at is a plain white Akamai error page — "Access Denied" in giant bold text, a reference number, and nothing else. This is not a homepage, it's a wall. First impression: zero.

## What's working

- Nothing. There is a reference number visible (`#18.24f00f17.1778090467.a93fd3c`) which at least tells me the error is traceable — that's it.

## What's weak

- The entire page is an Akamai "Access Denied" block — no brand, no products, no offers, no navigation rendered at all
- The error message ("You don't have permission to access this server") is cold and technical, no branded fallback, no redirect to an alternate URL
- A completely blank white canvas stretches below the three lines of error text — infinite empty scroll, no recovery path
- No soft-landing, no "try this instead" link, no customer service contact — once blocked, I'm just stuck

## Recommendations

- Fix the CDN access rule that is blocking standard browser requests to `/en_us/index.html` — this is a P0 revenue issue, not a UX issue
- Add a branded error/fallback page so that when Akamai blocks a request, users land on something with the H&M logo, a redirect to the main domain, and a customer service link — not a raw Edgesuite error
- Set up uptime monitoring that pages someone when the homepage returns a non-200 status — this should not reach real shoppers
- If geo-blocking is intentional, redirect gracefully to the correct regional URL instead of throwing a 403

## Full review
## 1. Executive Summary

I literally cannot tell you what kind of brand this is right now because H&M's server just blocked me at the door. What I'm looking at is a plain white Akamai error page — "Access Denied" in giant bold text, a reference number, and nothing else. This is not a homepage, it's a wall. First impression: zero.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery explicitly speaks to my persona: no hero exists, error page only
- − Returning-shopper hook visible: none
- − Concrete offer above the fold: none
- − Unmistakable primary CTA: none
- − Visual hierarchy clear: the only hierarchy is "Access Denied" > reference number > error URL
- − No render bugs: massive render failure — entire page blocked by Akamai CDN (visible in screenshot)
- − Demographic signals match my persona: none
- − Page reflects current campaign/season: none
- − Loyalty/membership benefits visible: none
- − Offer feels honest: N/A — no offer exists

Score starts at 1, zero criteria met.

## 3. What's Working

- Nothing. There is a reference number visible (`#18.24f00f17.1778090467.a93fd3c`) which at least tells me the error is traceable — that's it.

## 4. What's Weak

- The entire page is an Akamai "Access Denied" block — no brand, no products, no offers, no navigation rendered at all
- The error message ("You don't have permission to access this server") is cold and technical, no branded fallback, no redirect to an alternate URL
- A completely blank white canvas stretches below the three lines of error text — infinite empty scroll, no recovery path
- No soft-landing, no "try this instead" link, no customer service contact — once blocked, I'm just stuck

## 5. Recommendations

- Fix the CDN access rule that is blocking standard browser requests to `/en_us/index.html` — this is a P0 revenue issue, not a UX issue
- Add a branded error/fallback page so that when Akamai blocks a request, users land on something with the H&M logo, a redirect to the main domain, and a customer service link — not a raw Edgesuite error
- Set up uptime monitoring that pages someone when the homepage returns a non-200 status — this should not reach real shoppers
- If geo-blocking is intentional, redirect gracefully to the correct regional URL instead of throwing a 403

## 6. Bottom Line

I'm out immediately — there is literally nothing to browse, and I'm not going to Google around to find a working H&M link when ZARA loads on the first tap.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** None — white background only
- **Primary CTA:** None — visible above the fold? no
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:**
  - None applicable
- **Weaknesses:**
  - The only "headline" visible is an error message that tells me I'm not welcome
  - Zero brand presence — could be any server's error page, no H&M identity at all

## 8. Promotional & Urgency Cues

- **Active promos:** None
- **Urgency / scarcity:** None
- **Loyalty hooks:** None
- **Honesty check:** The Akamai error URL (`https://errors.edgesuite.net/...`) is exposed raw in the page body — not manipulative, but deeply unpolished and not something a shopper should ever see

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero loaded whatsoever
- − Easy to reach my category: no navigation present
- − Eye-catching imagery in my category: no imagery at all
- − Promo banner I would use: no banners
- − Page renders cleanly: hard no — full Akamai 403 block is the only render output
- − Imagery includes someone like me: none
- − Copy register matches mine: error message copy is cold and technical, not Gen Z retail
- − Trust signals visible: none
- − New / hot rail in my category: none
- − No dark patterns: the page can't even load, so no dark patterns but also no recovery path

**Score:** `1/10` — 1 + zero "+" bullets.
- **Rationale:** There is nothing to engage with. A blank error wall generates an instant bounce — there is no signal, no hook, no reason to stay.

## 10. Conversion Likelihood

- − CTA in my category: none
- − Unambiguous CTA copy: none
- − Active price reduction or member pricing: none
- − Time-bounded credible deadline: none
- − Reachable free-shipping threshold: none
- − Specific product page one tap away: none
- − Sizing / fit info accessible: none
- − Returns / exchanges mentioned: none
- − Reviews / ratings visible: none
- − Trust / security signals: none — the exposed Edgesuite error URL actively undermines trust

**Score:** `1/10` — 1 + zero "+" bullets.
- **Rationale:** Conversion is mathematically impossible — there is no product, no CTA, no path forward. The only action available is closing the tab.

## 11. Evidence

Visible modules in scroll order:

- **"Access Denied" error heading** — large bold black serif, top-left, dominates the page
- **Error body text** — "You don't have permission to access 'http://www2.hm.com/en_us/index.html' on this server."
- **Reference number line** — `Reference #18.24f00f17.1778090467.a93fd3c`
- **Edgesuite error URL** — `https://errors.edgesuite.net/18.24f00f17.1778090467.a93fd3c` exposed as plain text
- **Infinite white space** — the remainder of the full-length screenshot is completely blank
- **Bugs / friction:** The entire homepage is blocked by Akamai CDN returning a 403 Access Denied. No branded fallback, no redirect, no recovery link visible anywhere in the screenshot.
## Recent history

- [[2026-05-05-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-05)
- [[2026-05-04-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-04)
- [[2026-05-03-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-03)

