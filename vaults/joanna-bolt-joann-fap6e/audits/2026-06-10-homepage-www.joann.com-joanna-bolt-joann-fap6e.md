---
slug: 2026-06-10-homepage-www.joann.com-joanna-bolt-joann-fap6e
type: site
date: 2026-06-10
persona: joanna-bolt-joann-fap6e
score: "3/10"
sender: www.joann.com
subject: Homepage snapshot · www.joann.com · 2026-06-10
tags: [site-journey, score-3, sender/www-joann-com]
---
# Homepage snapshot · www.joann.com · 2026-06-10
**Score:** 3/10 · **Type:** Site journey · **2026-06-10**
## Executive summary

- Hold on — I typed in joann.com and I'm looking at **Michaels**. That's either a redirect gone wrong or a screenshot capture mix-up, and I'm calling it out right here because a quilter who came for JOANN fabric and landed on Michaels is already annoyed before she's even seen a single bolt of cotton. What I *can* see of this page is half a cookie wall and one promo banner, which tells me almost nothing about the actual shopping experience underneath it.

## What's working

- **Promo banner with explicit code:** "ULTIMATE30" is right there in the banner — no digging through email, no wondering what code to use. That's how you do it.
- **"Savings" nav tab:** Having a dedicated savings tab one tap away is smart for a coupon-stacker like me — I'd tap that first.
- **"Buy Again" tab:** I keep a running list of go-to supplies; a repeat-purchase shortcut is genuinely useful.

## What's weak

- **Full-page cookie consent modal blocking everything:** I can't see the hero, categories, or any product content. The modal covers the entire viewport. I came here to shop, not consent to a privacy policy before I've even seen what's on sale.
- **Wrong brand in the screenshot:** The logo says Michaels, not JOANN — if this is a redirect or capture error, that's a pipeline problem worth flagging immediately.
- **No visible loyalty hook:** I stack JOANN's rewards religiously; if there's a member-pricing badge or rewards balance anywhere, the modal is burying it completely.
- **"Got it" CTA is the only action available:** That's a dark pattern — the whole above-the-fold experience is held hostage until I dismiss the cookie notice.

## Recommendations

- **Shrink the cookie notice to a bottom bar:** A slim banner at the bottom (like most EU-compliant sites do well) lets the actual homepage breathe. Blocking the full viewport costs you every impulse browser.
- **Surface the promo code in the first sticky element after dismiss:** Once the modal closes, pin "ULTIMATE30 — 30% off regular price" as a persistent top bar so I don't lose it while I browse categories.
- **Add a loyalty/rewards balance callout above the fold:** Even a small "Your rewards: $X" chip near the account icon would keep a coupon-stacker like me engaged instead of opening a new tab to check my balance separately.
- **Verify the domain capture in the audit pipeline:** If this was supposed to be joann.com and the crawler landed on michaels.com, that's a tracking/redirect bug that will corrupt every downstream audit from this run.

## Full review
## 1. Executive Summary

Hold on — I typed in joann.com and I'm looking at **Michaels**. That's either a redirect gone wrong or a screenshot capture mix-up, and I'm calling it out right here because a quilter who came for JOANN fabric and landed on Michaels is already annoyed before she's even seen a single bolt of cotton. What I *can* see of this page is half a cookie wall and one promo banner, which tells me almost nothing about the actual shopping experience underneath it.

## 2. Business Impact Score (1-10)

**3/10**

- \+ One concrete offer visible above the fold: "30% Off All Regular Price Purchases — Online only with code ULTIMATE30" — promo code included, which I appreciate
- \+ Basic nav tabs visible (Shop, Services, Savings, Buy Again)
- \+ No broken layout or overlapping text per se — structure intact
- − Hero is completely obscured by a full-screen cookie consent modal — zero persona targeting possible
- − No loyalty or rewards hook visible
- − No primary shopping CTA visible — modal's only CTA is "Got it"
- − Can't confirm seasonal/campaign relevance — hero blocked
- − No demographic signals readable through the modal
- − Returning-shopper hooks (loyalty balance, recently-viewed) invisible
- − Wrong brand entirely if this was meant to be JOANN — disorienting from the jump

## 3. What's Working

- **Promo banner with explicit code:** "ULTIMATE30" is right there in the banner — no digging through email, no wondering what code to use. That's how you do it.
- **"Savings" nav tab:** Having a dedicated savings tab one tap away is smart for a coupon-stacker like me — I'd tap that first.
- **"Buy Again" tab:** I keep a running list of go-to supplies; a repeat-purchase shortcut is genuinely useful.

## 4. What's Weak

- **Full-page cookie consent modal blocking everything:** I can't see the hero, categories, or any product content. The modal covers the entire viewport. I came here to shop, not consent to a privacy policy before I've even seen what's on sale.
- **Wrong brand in the screenshot:** The logo says Michaels, not JOANN — if this is a redirect or capture error, that's a pipeline problem worth flagging immediately.
- **No visible loyalty hook:** I stack JOANN's rewards religiously; if there's a member-pricing badge or rewards balance anywhere, the modal is burying it completely.
- **"Got it" CTA is the only action available:** That's a dark pattern — the whole above-the-fold experience is held hostage until I dismiss the cookie notice.

## 5. Recommendations

- **Shrink the cookie notice to a bottom bar:** A slim banner at the bottom (like most EU-compliant sites do well) lets the actual homepage breathe. Blocking the full viewport costs you every impulse browser.
- **Surface the promo code in the first sticky element after dismiss:** Once the modal closes, pin "ULTIMATE30 — 30% off regular price" as a persistent top bar so I don't lose it while I browse categories.
- **Add a loyalty/rewards balance callout above the fold:** Even a small "Your rewards: $X" chip near the account icon would keep a coupon-stacker like me engaged instead of opening a new tab to check my balance separately.
- **Verify the domain capture in the audit pipeline:** If this was supposed to be joann.com and the crawler landed on michaels.com, that's a tracking/redirect bug that will corrupt every downstream audit from this run.

## 6. Bottom Line

I'd hit "Got it" on the cookie wall and then immediately check whether I'm actually on JOANN or accidentally on Michaels — because right now I genuinely can't tell which store wants my fabric budget.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** *(not visible — obscured by cookie consent modal)*
- **Hero image:** Partial glimpse of what appears to be a red, white, and blue patriotic scene — mostly blocked
- **Primary CTA:** *(not visible — modal's only button is "Got it")* — visible above the fold? **no**
- **Scores (1-10):** Clarity `2`, Relevance to you `1`, Visual hierarchy `3`, On-brand `1`
- **Strengths:**
  - Promo strip above the hero is clear and includes the actual coupon code
  - Nav structure (Shop / Services / Savings / Buy Again) is logically organized for a returning shopper
- **Weaknesses:**
  - Cookie modal eliminates all hero visibility — can't evaluate copy, imagery, or CTA at all
  - Brand identity is Michaels, not JOANN — wrong store for this persona audit

## 8. Promotional & Urgency Cues

- **Active promos:** "30% Off All Regular Price Purchases — Online only with code ULTIMATE30. Exclusions apply."
- **Urgency / scarcity:** None visible — no countdown timer, no "ends today," no stock warning
- **Loyalty hooks:** None visible above the fold or through the modal
- **Honesty check:** "Exclusions apply." is present but without a link to what's excluded — that's the fine-print frustration I've run into before. As someone who buys by the bolt, exclusions on fabric yardage are the kind of thing that sends me to Hobby Lobby.

## 9. Engagement Likelihood

- − Hero relates to my focus area: hero is completely blocked by cookie modal — can't tell if quilting/fabric is featured
- + Easy to reach my category: "Shop" tab is one tap away; "Savings" tab is also right there
- − Eye-catching imagery in my category: zero category imagery visible through the modal
- + Promo banner I would use: 30% off + explicit code — yes, I'd use that
- − Page renders cleanly: modal blocking entire viewport is a significant friction point
- − Imagery includes someone like me: can't see any imagery
- + Copy register matches mine: promo banner language is plain, direct, no fluff
- − Trust signals visible: none visible through the modal
- − New / hot rail in my category: invisible — modal blocks it
- − No dark patterns: full-screen cookie wall that forces a dismiss before any content loads is a dark pattern

**Score:** `4/10` — should equal 1 + count of "+" bullets above.
**Rationale:** The promo code and savings tab are genuinely useful for a coupon-stacker, but the full-viewport cookie modal kills almost every other engagement signal before I've had a single second to actually look at the store.

## 10. Conversion Likelihood

- − CTA in my category: no fabric/quilting CTA visible
- − Unambiguous CTA copy: the only button I can see is "Got it" for the cookie wall
- + Active price reduction or member pricing: 30% off regular price with ULTIMATE30 is a real offer
- − Time-bounded credible deadline: no end date on the offer
- − Reachable free-shipping threshold: not stated anywhere visible
- − Specific product page one tap away: can't reach product pages — modal blocks navigation
- − Sizing / fit info accessible: not relevant to fabric/quilting, and not visible anyway
- − Returns / exchanges mentioned: not visible
- − Reviews / ratings visible: not visible
- − Trust / security signals: not visible

**Score:** `2/10` — should equal 1 + count of "+" bullets.
**Rationale:** The one thing pulling me toward action is that 30% off code — I'd dismiss the modal specifically to use it — but the site gives me zero downstream conversion scaffolding (free shipping, returns, product access) before asking me to commit.

## 11. Evidence

*(In scroll order based on what is actually visible in the screenshot)*

- **Top utility nav bar (dark background):** "Custom Framing" / "MakerPlace" / "Digital Downloads"
- **Logo + account/cart icons:** Michaels logo in red script; home, account, and cart icon row
- **Search bar:** "Search Products" placeholder
- **Horizontal tab bar:** Shop / Services / Savings / Buy Again
- **Promo strip (red background):** "30% Off All Regular Price Purchases — Online only with code ULTIMATE30. Exclusions apply." with left/right carousel arrows
- **Hero (partially visible, mostly blocked):** Red/white/blue imagery — likely a patriotic/summer campaign
- **Full-viewport cookie consent overlay (blocking most content):** Large white modal with privacy policy language, "Privacy Policy Terms & Conditions" link, red "Got it" button, accessibility icon, "Cookie Preferences" button
- **Bugs / friction visible:**
  - Cookie modal covers the entire browsable area — no homepage content accessible on first load
  - Screenshot is labeled as joann.com but displays the Michaels brand and UI — significant capture or redirect error
## Recent history

- [[2026-06-03-homepage-www.joann.com-joanna-bolt-joann-fap6e]] — 5/10 (2026-06-03)
- [[2026-05-27-homepage-www.joann.com-joanna-bolt-joann-fap6e]] — 4/10 (2026-05-27)
- [[2026-05-23-homepage-www.joann.com-joanna-bolt-joann-fap6e]] — 3/10 (2026-05-23)

