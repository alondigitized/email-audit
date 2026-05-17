---
slug: 2026-05-17-homepage-www.aa.com-curt-aadvantage-aa-fap6e
type: site
date: 2026-05-17
persona: curt-aadvantage-aa-fap6e
score: "1/10"
sender: www.aa.com
subject: Homepage snapshot · www.aa.com · 2026-05-17
tags: [site-journey, score-1, sender/www-aa-com]
---
# Homepage snapshot · www.aa.com · 2026-05-17
**Score:** 1/10 · **Type:** Site journey · **2026-05-17**
## Executive summary

- I'm looking at a dead-on-arrival error screen — AA.com's CDN firewall (Akamai/Edgesuite) blocked the request outright before a single pixel of their actual homepage loaded. As someone who's logged into aa.com from airport lounges, hotel lobbies, and airplane Wi-Fi more times than I can count, this is exactly the kind of IT fumble I've come to expect from American — and it's the one thing I genuinely cannot forgive on a flagship domain. There is no brand here. Just a white page and a reference hash.

## What's working

- The Edgesuite error page itself renders clean plain text with no overlapping layout issues — at least something on aa.com renders correctly today.
- The reference number (`#18.95155d68.1779043993.168f0c06`) is specific enough that a support ticket could theoretically trace this block — cold comfort, but it's there.

## What's weak

- **The entire homepage is inaccessible.** AA.com blocked the request at the CDN/WAF layer before delivering any content — hero, nav, offers, loyalty hooks, everything.
- **No fallback or soft error page.** AA doesn't show a branded "something went wrong" page; they serve raw Akamai boilerplate on a blank white background. For a brand that charges $600+ for a business class ticket, this is embarrassing.
- **No AAdvantage context.** Even if I were a logged-in EP member, nothing here acknowledges me. Zero personalization, zero loyalty signal.
- **The error message is user-hostile.** "You don't have permission to access" reads like I did something wrong. I just opened the homepage. This is classic AA IT: the problem is on their end, the language blames the customer.

## Recommendations

- **Fix the WAF/CDN allowlist.** Whatever bot-detection rule triggered this block needs tuning — if a standard mobile browser hitting the root URL gets blocked, this is a misconfigured Akamai rule that needs a hotfix today, not next sprint.
- **Deploy a branded soft-error page.** When Akamai does block or the origin goes down, serve a custom error template with the AA logo, an apology, and a link to the app or a status page — not raw white-page boilerplate.
- **Add a status page link to the error.** Even "Check aa.com/status" in the error copy would signal that AA knows about the problem and is working on it, rather than leaving users wondering if they've been banned.
- **Surface Executive Platinum support contact on error states.** EP members hitting access issues should see a direct path to elite line support, not a reference hash and a dead page.

## Full review
## 1. Executive Summary

I'm looking at a dead-on-arrival error screen — AA.com's CDN firewall (Akamai/Edgesuite) blocked the request outright before a single pixel of their actual homepage loaded. As someone who's logged into aa.com from airport lounges, hotel lobbies, and airplane Wi-Fi more times than I can count, this is exactly the kind of IT fumble I've come to expect from American — and it's the one thing I genuinely cannot forgive on a flagship domain. There is no brand here. Just a white page and a reference hash.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery explicitly speaks to my persona: no hero exists, access denied
- − Returning-shopper hook visible: none
- − Concrete offer visible above the fold: none
- − Unmistakable primary CTA: none
- − Visual hierarchy is clear: single block of default browser serif text — no hierarchy
- − No render bugs: this IS a render bug — the entire page failed to load
- − Demographic signals match my persona: nothing rendered
- − Page reflects current campaign / season: nothing rendered
- − Loyalty / membership benefits visible: nothing rendered
- − Offer feels honest: nothing rendered

Score starts at 1, zero criteria met. **1/10** — and I'm only giving it that 1 because the server at least returned a response instead of timing out entirely.

## 3. What's Working

- The Edgesuite error page itself renders clean plain text with no overlapping layout issues — at least something on aa.com renders correctly today.
- The reference number (`#18.95155d68.1779043993.168f0c06`) is specific enough that a support ticket could theoretically trace this block — cold comfort, but it's there.

## 4. What's Weak

- **The entire homepage is inaccessible.** AA.com blocked the request at the CDN/WAF layer before delivering any content — hero, nav, offers, loyalty hooks, everything.
- **No fallback or soft error page.** AA doesn't show a branded "something went wrong" page; they serve raw Akamai boilerplate on a blank white background. For a brand that charges $600+ for a business class ticket, this is embarrassing.
- **No AAdvantage context.** Even if I were a logged-in EP member, nothing here acknowledges me. Zero personalization, zero loyalty signal.
- **The error message is user-hostile.** "You don't have permission to access" reads like I did something wrong. I just opened the homepage. This is classic AA IT: the problem is on their end, the language blames the customer.

## 5. Recommendations

- **Fix the WAF/CDN allowlist.** Whatever bot-detection rule triggered this block needs tuning — if a standard mobile browser hitting the root URL gets blocked, this is a misconfigured Akamai rule that needs a hotfix today, not next sprint.
- **Deploy a branded soft-error page.** When Akamai does block or the origin goes down, serve a custom error template with the AA logo, an apology, and a link to the app or a status page — not raw white-page boilerplate.
- **Add a status page link to the error.** Even "Check aa.com/status" in the error copy would signal that AA knows about the problem and is working on it, rather than leaving users wondering if they've been banned.
- **Surface Executive Platinum support contact on error states.** EP members hitting access issues should see a direct path to elite line support, not a reference hash and a dead page.

## 6. Bottom Line

I closed it and opened the AA app — which is what I do half the time anyway because aa.com has let me down too many times to be my first stop.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** None — plain white background with black system-font error text
- **Primary CTA:** None — visible above the fold? **No**
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:**
  - The reference number is technically specific enough to file a support trace
- **Weaknesses:**
  - No branded element exists — this is a raw CDN error page, not AA's homepage
  - "Access Denied" as a hero headline is about as hostile an entry point as a site can serve

## 8. Promotional & Urgency Cues

- **Active promos:** None — page did not load
- **Urgency / scarcity:** None — page did not load
- **Loyalty hooks:** None — page did not load
- **Honesty check:** The phrase "You don't have permission" is subtly accusatory — it implies the user caused the block, when this is clearly a server-side CDN misconfiguration. That framing is the one manipulative thing I can actually see.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero loaded
- − Easy to reach my category: no navigation loaded
- − Eye-catching imagery in my category: no imagery loaded
- − Promo banner I would use: no banners loaded
- − Page renders cleanly: hard no — CDN block is about as unclean as it gets
- − Imagery includes someone like me: nothing loaded
- − Copy register matches mine: error boilerplate is genre-neutral, not travel-exec
- − Trust signals visible: none
- − New / hot rail in my category: nothing loaded
- − No dark patterns: the "you don't have permission" copy is a soft dark pattern — implies user fault

**Score:** `1/10` — no criteria met.
**Rationale:** Every single engagement signal requires the page to actually load. It didn't. The only reason I don't score it 0 is that the rubric floors at 1.

## 10. Conversion Likelihood

- − CTA in my category: none loaded
- − Unambiguous CTA copy: none loaded
- − Active price reduction or member pricing: none loaded
- − Time-bounded credible deadline: none loaded
- − Reachable free-shipping threshold: not applicable — this is an airline
- − Specific product page one tap away: none loaded
- − Sizing / fit info accessible: not applicable
- − Returns / exchanges mentioned: none loaded
- − Reviews / ratings visible: none loaded
- − Trust / security signals: none loaded

**Score:** `1/10` — no criteria met.
**Rationale:** The page literally did not render — conversion is zero percent, floor score only.

## 11. Evidence

Modules visible in the screenshot, in order:

- **"Access Denied" H1 heading** — large bold serif, default browser rendering, no AA branding
- **Error body copy** — "You don't have permission to access 'http://www.aa.com/' on this server."
- **Reference number line** — `Reference #18.95155d68.1779043993.168f0c06`
- **Akamai error URL** — `https://errors.edgesuite.net/18.95155d68.1779043993.168f0c06` (confirms this is an Akamai EdgeSuite WAF block, not an AA application error)
- **Blank white space** — the remainder of the viewport and page is completely empty
- **Bugs / friction visible:** The entire homepage is the bug. CDN firewall blocked the root URL before any AA content was served. No logo, no nav, no hero, no offers, no loyalty hooks — nothing.
## Recent history

- [[2026-05-15-homepage-www.aa.com-curt-aadvantage-aa-fap6e]] — 1/10 (2026-05-15)

