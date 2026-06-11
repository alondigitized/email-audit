---
slug: 2026-06-11-homepage-www.macys.com-maddie-sale-macys-fap6e
type: site
date: 2026-06-11
persona: maddie-sale-macys-fap6e
score: "1/10"
sender: www.macys.com
subject: Homepage snapshot · www.macys.com · 2026-06-11
tags: [site-journey, score-1, sender/www-macys-com]
---
# Homepage snapshot · www.macys.com · 2026-06-11
**Score:** 1/10 · **Type:** Site journey · **2026-06-11**
## Executive summary

- Well, this is embarrassing — for them, not me. I pulled up Macy's and instead of the homepage I got a big red blocked-shield icon and a message saying "You don't have access to this page." That's it. No sale. No hero. No Star Money reminder. Nothing. I've been shopping Macy's One Day Sales since before they had a website and I can't even get past the front door on my phone.

## What's working

- The Macy's logo and "Celebrations start at Macy's" tagline in the header rendered correctly — at least I know I'm on the right site.
- Search bar is visible and functional-looking, so if I were desperate I could try searching for something directly.
- The footer links for "Customer Service" and "Macy's Credit Card" are present, which gives me a lifeline.
- The phone number (1-800-289-6229) is clearly displayed — I appreciate that there's a human to call, even if that's cold comfort.

## What's weak

- **The entire homepage failed to load.** I got a Cloudflare-style bot-block page with a reference number (`0.871ca17.1781173174.2b9bbf0c`) instead of any content. That's a catastrophic failure — no sale, no hero, nothing.
- **No explanation I can act on.** "You don't have access to this page" with a reference code is tech jargon. I'm 60, on my phone, and I just want to see what's on sale. There's nothing here telling me what *I* did wrong or how to fix it.
- **The blocked-shield icon is alarming.** That big red crossed-out shield reads as "your account is suspended" to me, not "technical hiccup." That's a trust-destroying first impression.
- **No fallback content.** Not a single product, not a category grid, not even a "come back soon" message with an email signup. The page is dead air.
- **Sign In and the Star rewards bag icon are visible but useless** — there's nothing to sign in *to* right now.

## Recommendations

- **Fix the bot-detection false positives on mobile.** If regular shoppers on phones are hitting this block, Macy's is turning away their most loyal customers — the ones who check the app every morning for One Day Sale alerts. Tune the CDN rules.
- **Show a graceful fallback page** when access is restricted — at minimum the current sale event, a newsletter signup, and a store-locator link. Don't leave the screen blank.
- **Replace the red shield icon with something friendlier** on any error state — a soft brand illustration, not a security threat symbol. I thought my account had been frozen.
- **Surface a direct link to the circular or current sale** even on error states — someone like me came here for a reason, and a one-tap escape hatch to today's deals would save the visit.

## Full review
## 1. Executive Summary

Well, this is embarrassing — for them, not me. I pulled up Macy's and instead of the homepage I got a big red blocked-shield icon and a message saying "You don't have access to this page." That's it. No sale. No hero. No Star Money reminder. Nothing. I've been shopping Macy's One Day Sales since before they had a website and I can't even get past the front door on my phone.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery explicitly speaks to my persona: no hero exists — page is an error block
- − Returning-shopper hook visible: not present
- − Concrete offer above the fold: not present
- − Primary CTA above the fold: not present
- − Visual hierarchy clear: N/A — only an error message and a reference code
- − No render bugs: FAIL — the entire homepage is replaced by an access-denial page with a blocked-shield icon
- − Demographic signals match my persona: not present
- − Page reflects current campaign/season: not present
- − Loyalty/membership benefits visible: not present
- − Offer feels honest: not applicable — no offer loaded

Starting at 1, zero criteria are TRUE. **Score: 1/10.**

## 3. What's Working

- The Macy's logo and "Celebrations start at Macy's" tagline in the header rendered correctly — at least I know I'm on the right site.
- Search bar is visible and functional-looking, so if I were desperate I could try searching for something directly.
- The footer links for "Customer Service" and "Macy's Credit Card" are present, which gives me a lifeline.
- The phone number (1-800-289-6229) is clearly displayed — I appreciate that there's a human to call, even if that's cold comfort.

## 4. What's Weak

- **The entire homepage failed to load.** I got a Cloudflare-style bot-block page with a reference number (`0.871ca17.1781173174.2b9bbf0c`) instead of any content. That's a catastrophic failure — no sale, no hero, nothing.
- **No explanation I can act on.** "You don't have access to this page" with a reference code is tech jargon. I'm 60, on my phone, and I just want to see what's on sale. There's nothing here telling me what *I* did wrong or how to fix it.
- **The blocked-shield icon is alarming.** That big red crossed-out shield reads as "your account is suspended" to me, not "technical hiccup." That's a trust-destroying first impression.
- **No fallback content.** Not a single product, not a category grid, not even a "come back soon" message with an email signup. The page is dead air.
- **Sign In and the Star rewards bag icon are visible but useless** — there's nothing to sign in *to* right now.

## 5. Recommendations

- **Fix the bot-detection false positives on mobile.** If regular shoppers on phones are hitting this block, Macy's is turning away their most loyal customers — the ones who check the app every morning for One Day Sale alerts. Tune the CDN rules.
- **Show a graceful fallback page** when access is restricted — at minimum the current sale event, a newsletter signup, and a store-locator link. Don't leave the screen blank.
- **Replace the red shield icon with something friendlier** on any error state — a soft brand illustration, not a security threat symbol. I thought my account had been frozen.
- **Surface a direct link to the circular or current sale** even on error states — someone like me came here for a reason, and a one-tap escape hatch to today's deals would save the visit.

## 6. Bottom Line

I'm closing the tab and calling the 800 number, but honestly I might just drive to the store — this is not how you treat a Star Pass customer.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `You don't have access to this page`
- **Hero image:** Large red crossed-out shield icon — a security/block symbol, no product or lifestyle imagery
- **Primary CTA:** None visible above the fold — only `1-800-289-6229` as a recovery path; visible above the fold? **yes** (as plain text, not a button)
- **Scores (1-10):** Clarity `2`, Relevance to you `1`, Visual hierarchy `4`, On-brand `1`
- **Strengths:**
  - The logo and tagline loaded cleanly — brand recognition is intact
  - The error message is at least legible and centered; it's not garbled text
- **Weaknesses:**
  - The "hero" is an access-denied error — zero commerce intent, zero sale messaging
  - The red shield icon reads as a security threat rather than a temporary technical issue, which is alarming for any shopper, let alone someone my age who worries about account security

## 8. Promotional & Urgency Cues

- **Active promos:** None — no banners, no percentages, no sale callouts loaded
- **Urgency / scarcity:** None visible
- **Loyalty hooks:** Star Money bag icon appears in the top-right header but is not linked to any content; no rewards balance, no Star Pass callout
- **Honesty check:** The reference code (`0.871ca17.1781173174.2b9bbf0c`) and "You don't have access" language feels exclusionary and opaque — it doesn't tell me if this is a temporary outage, a regional block, or something wrong with my account. That ambiguity is its own kind of dark pattern.

## 9. Engagement Likelihood

- − Hero relates to my focus area: error page, no sale content whatsoever
- − Easy to reach my category: hamburger menu is visible but the page body is blocked — I can't browse categories
- − Eye-catching imagery in my category: none — only a blocked-shield icon
- − Promo banner I would use: none loaded
- − Page renders cleanly: FAIL — access-denial page instead of homepage content
- − Imagery includes someone like me: none — no lifestyle or product imagery at all
- − Copy register matches mine: the error message is generic tech-speak, not Macy's warm retail voice
- − Trust signals visible: phone number is there, but a block page is inherently trust-destroying
- − New/hot rail in my category: not present
- − No dark patterns: the red security icon and cryptic reference code feel alarming, not helpful

**Score:** `1/10` — 1 (base) + 0 signals = 1.

**Rationale:** Every engagement criterion fails because the actual homepage never loaded. The only thing that kept me on the page for more than two seconds was the Macy's logo confirming I had the right URL.

## 10. Conversion Likelihood

- − CTA in my category: none — no category content loaded
- − Unambiguous CTA copy: none present
- − Active price reduction or member pricing: none visible
- − Time-bounded credible deadline: none visible
- − Reachable free-shipping threshold: not mentioned
- − Specific product page one tap away: not present
- − Sizing / fit info accessible: not applicable
- − Returns / exchanges mentioned: not present
- − Reviews / ratings visible: not present
- − Trust / security signals: phone number present but the page as a whole destroys trust

**Score:** `1/10` — 1 (base) + 0 signals = 1.

**Rationale:** I cannot convert on a page that has no products, no offers, and no clickable CTAs — the access block killed every conversion path before I even had a chance to look for my Star Money balance.

## 11. Evidence

Visible modules in scroll order:

- **Header bar:** Macy's logo with "Celebrations start at ★" tagline, hamburger menu (left), Sign In link (right), Star/bag icon (right)
- **Search bar:** Full-width search field with magnifying glass icon — present but no homepage content below to browse
- **Block/error icon:** Large centered red shield with a diagonal slash — Cloudflare-style access denial visual
- **Reference code box:** Gray pill/card with "Reference: 0.871ca17.1781173174.2b9bbf0c" — opaque, user-unfriendly
- **Error heading:** "You don't have access to this page" in large bold black type
- **Recovery text:** "If you think this is a mistake, call us at 1-800-289-6229." with the number as a tappable link
- **Footer (collapsed accordion):** "Customer Service +" and "Macy's Credit Card +" accordion rows on a dark background — no content expanded
- **Visible bug:** The entire homepage content area has been replaced by an access-denial error. No hero, no sale banners, no product rails, no loyalty section — nothing. This is a complete render failure from a shopper's perspective.
## Recent history

- [[2026-06-04-homepage-www.macys.com-maddie-sale-macys-fap6e]] — 6/10 (2026-06-04)
- [[2026-05-28-homepage-www.macys.com-maddie-sale-macys-fap6e]] — 5/10 (2026-05-28)
- [[2026-05-23-homepage-www.macys.com-maddie-sale-macys-fap6e]] — 5/10 (2026-05-23)

