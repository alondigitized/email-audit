---
slug: 2026-06-11-homepage-www.backcountry.com-blake-gore-backcountry-fap6e
type: site
date: 2026-06-11
persona: blake-gore-backcountry-fap6e
score: "1/10"
sender: www.backcountry.com
subject: Homepage snapshot · www.backcountry.com · 2026-06-11
tags: [site-journey, score-1, sender/www-backcountry-com]
---
# Homepage snapshot · www.backcountry.com · 2026-06-11
**Score:** 1/10 · **Type:** Site journey · **2026-06-11**
## Executive summary

- I opened Backcountry and got a bot wall. That's it — orange headline, a "Begin" button, and a language dropdown. No hero, no gear, no deals, no nothing. I don't know if this is Cloudflare protecting the site from scrapers or what, but from where I'm standing on my phone I just hit a dead end before I even touched the homepage. This doesn't look like a premium outdoor retailer — it looks like a toll booth.

## What's working

- The interstitial itself renders cleanly — orange text on white, no layout shift, readable on mobile. If you're going to wall someone off, at least it displays correctly.
- The language dropdown (English) is visible and functional-looking, suggesting some internationalization care.

## What's weak

- **The entire homepage is blocked.** I came to shop trad gear and ski touring kit and I got a CAPTCHA gate instead. That's a hard bounce for most users.
- **"Let's confirm you are human" is a cold, clinical headline** — zero brand voice, zero warmth. Backcountry has a Gearhead concierge culture and this is the opposite of that energy.
- **No Backcountry branding is visible** — no logo, no nav, no color palette outside the orange heading. I wouldn't know what site I was on if I didn't type the URL myself.
- **"Begin >"** is the loneliest CTA I've ever seen on an outdoor retail site. One click to prove I'm not a robot, zero excitement about what's on the other side.
- **The bottom half of the viewport is completely empty** — dead white space below the language picker, which makes the page feel broken or unfinished.

## Recommendations

- **Remove the bot wall for logged-in users entirely.** If I'm signed into my Backcountry account on mobile, I've already been authenticated — running me through a CAPTCHA is friction I shouldn't see. Session-based bypass is a one-week engineering task.
- **If a security check is unavoidable, brand it.** Drop the Backcountry logo at the top, use the site's actual typography and color system, and write the copy in Gearhead voice — something like "Hold up — quick check before we get you geared up."
- **Use the dead white space below.** Even a blurred hero image of alpine terrain behind the check would signal "you're in the right place, keep going."
- **Instrument this gate.** If a meaningful percentage of mobile sessions are hitting this before the homepage, it's killing conversion on a channel that probably drives 60%+ of visits.

## Full review
## 1. Executive Summary

I opened Backcountry and got a bot wall. That's it — orange headline, a "Begin" button, and a language dropdown. No hero, no gear, no deals, no nothing. I don't know if this is Cloudflare protecting the site from scrapers or what, but from where I'm standing on my phone I just hit a dead end before I even touched the homepage. This doesn't look like a premium outdoor retailer — it looks like a toll booth.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery explicitly speaks to my persona: no hero exists — just a bot-check interstitial
- − Returning-shopper hook visible: none
- − Concrete offer above the fold: none
- − Unmistakable primary CTA above the fold: the only CTA is "Begin" to pass a security check, not to shop
- − Visual hierarchy is clear: n/a — there is no commerce hierarchy
- − No render bugs: the page renders fine but it IS a bug from a commerce standpoint — the homepage never loaded
- − Demographic signals match persona: no signals at all
- − Page reflects current campaign / season: no campaign content visible
- − Loyalty / membership benefits visible: none
- − Offer feels honest: n/a — there is no offer

Only the base point of 1 because the page technically renders without layout breakage. Every single rubric criterion fails because the homepage content was never delivered.

## 3. What's Working

- The interstitial itself renders cleanly — orange text on white, no layout shift, readable on mobile. If you're going to wall someone off, at least it displays correctly.
- The language dropdown (English) is visible and functional-looking, suggesting some internationalization care.

## 4. What's Weak

- **The entire homepage is blocked.** I came to shop trad gear and ski touring kit and I got a CAPTCHA gate instead. That's a hard bounce for most users.
- **"Let's confirm you are human" is a cold, clinical headline** — zero brand voice, zero warmth. Backcountry has a Gearhead concierge culture and this is the opposite of that energy.
- **No Backcountry branding is visible** — no logo, no nav, no color palette outside the orange heading. I wouldn't know what site I was on if I didn't type the URL myself.
- **"Begin >"** is the loneliest CTA I've ever seen on an outdoor retail site. One click to prove I'm not a robot, zero excitement about what's on the other side.
- **The bottom half of the viewport is completely empty** — dead white space below the language picker, which makes the page feel broken or unfinished.

## 5. Recommendations

- **Remove the bot wall for logged-in users entirely.** If I'm signed into my Backcountry account on mobile, I've already been authenticated — running me through a CAPTCHA is friction I shouldn't see. Session-based bypass is a one-week engineering task.
- **If a security check is unavoidable, brand it.** Drop the Backcountry logo at the top, use the site's actual typography and color system, and write the copy in Gearhead voice — something like "Hold up — quick check before we get you geared up."
- **Use the dead white space below.** Even a blurred hero image of alpine terrain behind the check would signal "you're in the right place, keep going."
- **Instrument this gate.** If a meaningful percentage of mobile sessions are hitting this before the homepage, it's killing conversion on a channel that probably drives 60%+ of visits.

## 6. Bottom Line

I didn't even get to the homepage — I got a robot checkpoint — so there's nothing to browse, and I'm already annoyed.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Let's confirm you are human`
- **Hero image:** None — white background only, no imagery of any kind
- **Primary CTA:** `Begin >` — visible above the fold? yes (but it's a bot-check CTA, not a shopping CTA)
- **Scores (1-10):** Clarity `2`, Relevance to me `1`, Visual hierarchy `4`, On-brand `1`
- **Strengths:**
  - The orange heading color and single centered button create a clear visual hierarchy — your eye knows exactly where to look
  - Page is uncluttered and loads fast
- **Weaknesses:**
  - This is not the homepage — it's an interstitial that replaces the homepage entirely, so there is nothing to score on relevance or brand alignment
  - No Backcountry identity visible anywhere — a new user has no idea what site this is

## 8. Promotional & Urgency Cues

- **Active promos:** None — no promotional content of any kind is visible
- **Urgency / scarcity:** None
- **Loyalty hooks:** None — no Gearhead rewards, no member pricing, nothing
- **Honesty check:** The bot check itself is fine — it's not manipulative — but deploying it on what should be a homepage is a dark pattern of friction. You're punishing legitimate customers to filter out scrapers, and the math on that trade-off should be scrutinized.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero, no focus area — trad climbing and ski touring are nowhere
- − Easy to reach my category: no navigation visible whatsoever
- − Eye-catching imagery in my category: no imagery at all
- − Promo banner I would use: no promo banners
- − Page renders cleanly: + the interstitial itself renders without errors, fonts load, layout holds
- − Imagery includes someone like me: no imagery
- − Copy register matches mine: − "complete the security check before continuing" is corporate IT, not outdoor retail
- − Trust signals visible: − none — no reviews, no free returns badge, nothing
- − New / hot rail in my category: − no product rails
- − No dark patterns: − forced interstitial before homepage access is itself a friction dark pattern

**Score:** `2/10` — 1 (base) + 1 for clean render.

**Rationale:** The only reason this clears a 1 is that the page doesn't crash. Every engagement signal that matters — imagery, nav, category access, copy tone, trust signals — is absent because the actual homepage never loaded.

## 10. Conversion Likelihood

- − CTA in my category: no category CTA — the only button is "Begin" for a bot check
- − Unambiguous CTA copy: − "Begin" is unambiguous for its purpose but completely irrelevant to commerce
- − Active price reduction or member pricing: − none visible
- − Time-bounded credible deadline: − none
- − Reachable free-shipping threshold: − not mentioned
- − Specific product page one tap away: − not possible from this screen
- − Sizing / fit info accessible: − not present
- − Returns / exchanges mentioned: − not present
- − Reviews / ratings visible: − none
- − Trust / security signals: − ironically, the "security check" does nothing to build shopping trust

**Score:** `1/10` — base only, no "+" criteria met.

**Rationale:** There is no path to conversion from this screen. You cannot tap a product, see a price, or add anything to cart — the homepage content was never delivered, so conversion is structurally impossible until the gate is passed.

## 11. Evidence

Visible modules on the page in scroll order:

- **Bot verification interstitial** — orange heading "Let's confirm you are human", body copy about protecting accounts from bots, "Begin >" button in orange
- **Language selector** — dropdown defaulting to "English" at the bottom of the content area
- **Empty white space** — roughly the bottom 40% of the viewport is blank
- **No Backcountry branding** — no logo, no nav bar, no site header visible
- **No commerce content** — zero product imagery, zero categories, zero promotional banners, zero footer

**Bugs / friction visible in the screenshot:**
- The homepage was replaced entirely by a CAPTCHA interstitial — this is the most critical UX failure visible; a real customer on mobile should not hit this wall on a direct URL visit
- No brand identity is present, making the page feel like a phishing or error state to a casual user
## Recent history

- [[2026-06-04-homepage-www.backcountry.com-blake-gore-backcountry-fap6e]] — 1/10 (2026-06-04)
- [[2026-05-28-homepage-www.backcountry.com-blake-gore-backcountry-fap6e]] — 1/10 (2026-05-28)
- [[2026-05-23-homepage-www.backcountry.com-blake-gore-backcountry-fap6e]] — 2/10 (2026-05-23)

