---
slug: 2026-05-10-take-a-at-our-best-sellers
type: email
date: 2026-05-10
persona: greta-stripe-hannaandersson-fap6e
score: "9/10"
sender: Hanna Andersson
subject: Take A 👀 At Our Best-Sellers…
tags: [email, score-9, sender/hanna-andersson]
---
# Take A 👀 At Our Best-Sellers…
**Score:** 9/10 · **Type:** Email audit · **2026-05-10**
## Executive summary

- A clean, well-rendered email from a recognizable children's clothing brand that leads with a new-customer discount code (20% off), bridges to four category tiles (Girls, Pajamas, Baby, Boys), pitches Hanna Rewards membership, then closes with a seasonal "40% off all dresses" module. The visual design is on-brand and mobile-friendly. The main drag is a subject line that hides two genuinely solid offers behind a vague "best-sellers" teaser, and a body that splits CTA energy across too many destinations with no single product hero.
- **9/10**
- Rubric criteria counted as TRUE:
- Sender is a recognized brand
- One concrete offer is visible — "extra 20% off your first order" with explicit promo code XC2TBDQ4N320
- Primary CTA is unambiguous — "SHOP NOW" buttons are clearly styled and prominent
- Visual hierarchy is clear — teal hero reads first, eye flows naturally down
- No render bugs — layout is clean throughout; no broken images, overlapping text, or placeholder copy
- Demographic signals match persona — models are babies, toddlers, and young children; squarely targets parents of young kids
- Email reflects current season — "Summer Dress Refresh" is timely for early May
- Loyalty/member benefits are visible — dedicated Hanna Rewards module with three concrete perks listed
- Offer feels honest — promo code is fully visible, category offers are above-board; fine print exists but no obvious bait-and-switch in the render
- FALSE: Subject/hero copy does NOT explicitly reference the persona's focus area — "Take A 👀 At Our Best-Sellers…" is generic and doesn't surface the category or the discount.

## What's working

- **Two clear promotions, both visible above the scroll.** The 20% off new-customer code is in the hero; the "Summer Dress Refresh / 40% off all dresses" banner is a second strong hook. Neither is buried.
- **The Hanna Rewards module is genuinely informative.** It names three specific perks with icons — early access, free shipping threshold ($30+), and a dollar-value earn rate ($10 per $125 spent). This is more concrete than most loyalty pitches.
- **Category tiles are clean and inviting.** Four lifestyle photos (Girls, Pajamas, Baby, Boys) break the audience into sub-categories with good imagery — colorful, active, brand-consistent.
- **Brand voice is cohesive.** The coral/teal/mint palette, script wordmark, and playful tone run consistently from top to bottom including "made to last · made to play · made responsibly" at the footer.
- **No rendering problems.** Images load, text is legible, buttons are properly styled, spacing is comfortable on mobile.

## What's weak

- **Subject line wastes both offers.** "Take A 👀 At Our Best-Sellers…" telegraphs nothing about a 20% discount, free shipping, or summer dresses. A subscriber skimming their inbox has no reason to prioritize this open over a dozen other promotions.
- **Two competing promotional hooks dilute conversion intent.** The 20% off first-order hero (a new-customer offer) and the 40% off dresses banner (a category promotion) target different purchase scenarios. A subscriber who isn't a first-timer sees the hero as irrelevant, then has to scroll to find their offer. These should be segmented sends or the hierarchy should be cleaner.
- **No specific product hero.** Every CTA goes to a category page. There is no "here is the one item you should look at right now" moment. Best-seller emails without an actual best-seller featured are just dressed-up nav menus.
- **No deadline on either offer.** "Hurry!" appears in the hero copy but no expiration date is visible. Urgency without a deadline doesn't drive behavior.
- **No reviews or social proof.** A brand that presumably has customer love (loyal enough to build a rewards program) leaves that credibility entirely on the table.

## Recommendations

- 1. **Rewrite the subject line to surface the offer.** "Hurry — Extra 20% Off + 40% Off All Dresses" or a variant that names both promotions will materially improve opens for an existing subscriber list.
- 2. **Segment the two offers.** Send the 20% new-customer welcome only to lapsed or unconverted subscribers; send the 40% dresses promo to your general active list. Mixing them dilutes both.
- 3. **Lead with one featured best-seller in the hero.** Replace or supplement the generic discount banner with a single product image — the #1 best-selling dress going into summer is a natural candidate — and link directly to the PDP.
- 4. **Add a concrete expiration date.** "Offer valid through May 14" is more action-driving than "hurry!" alone.
- 5. **Pull one or two customer reviews into the email.** Even one brief quote near the product tiles gives a first-time opener social validation to act on.
- | Priority | Issue | Action |
- |---|---|---|
- | High | Full link audit blocked by truncation | Re-run audit against complete HTML; verify all `<a href>` targets carry UTM params |
- | High | CAN-SPAM footer visibility unconfirmed | Confirm unsubscribe link + physical address present in footer |
- | Medium | DKIM/DMARC alignment for `e.m.hannaandersson.com` | Pull delivery headers from a test send; confirm `d=` alignment and `sp=` DMARC policy |
- | Medium | Merge token fallbacks | Audit all Bloomreach personalization tokens for non-empty fallback values |
- | Low | Link color suppression via `#MessageViewBody a` | Verify all CTAs are button-styled (not bare text links) before deploy |

## Full review
---

## Email Review — Hanna Andersson: "Take A 👀 At Our Best-Sellers…"

---

### 1. Executive Summary

A clean, well-rendered email from a recognizable children's clothing brand that leads with a new-customer discount code (20% off), bridges to four category tiles (Girls, Pajamas, Baby, Boys), pitches Hanna Rewards membership, then closes with a seasonal "40% off all dresses" module. The visual design is on-brand and mobile-friendly. The main drag is a subject line that hides two genuinely solid offers behind a vague "best-sellers" teaser, and a body that splits CTA energy across too many destinations with no single product hero.

---

### 2. Business Impact Score (1-10)

**9/10**

Rubric criteria counted as TRUE:
- Sender is a recognized brand
- One concrete offer is visible — "extra 20% off your first order" with explicit promo code XC2TBDQ4N320
- Primary CTA is unambiguous — "SHOP NOW" buttons are clearly styled and prominent
- Visual hierarchy is clear — teal hero reads first, eye flows naturally down
- No render bugs — layout is clean throughout; no broken images, overlapping text, or placeholder copy
- Demographic signals match persona — models are babies, toddlers, and young children; squarely targets parents of young kids
- Email reflects current season — "Summer Dress Refresh" is timely for early May
- Loyalty/member benefits are visible — dedicated Hanna Rewards module with three concrete perks listed
- Offer feels honest — promo code is fully visible, category offers are above-board; fine print exists but no obvious bait-and-switch in the render

FALSE: Subject/hero copy does NOT explicitly reference the persona's focus area — "Take A 👀 At Our Best-Sellers…" is generic and doesn't surface the category or the discount.

---

### 3. What's Working

- **Two clear promotions, both visible above the scroll.** The 20% off new-customer code is in the hero; the "Summer Dress Refresh / 40% off all dresses" banner is a second strong hook. Neither is buried.
- **The Hanna Rewards module is genuinely informative.** It names three specific perks with icons — early access, free shipping threshold ($30+), and a dollar-value earn rate ($10 per $125 spent). This is more concrete than most loyalty pitches.
- **Category tiles are clean and inviting.** Four lifestyle photos (Girls, Pajamas, Baby, Boys) break the audience into sub-categories with good imagery — colorful, active, brand-consistent.
- **Brand voice is cohesive.** The coral/teal/mint palette, script wordmark, and playful tone run consistently from top to bottom including "made to last · made to play · made responsibly" at the footer.
- **No rendering problems.** Images load, text is legible, buttons are properly styled, spacing is comfortable on mobile.

---

### 4. What's Weak

- **Subject line wastes both offers.** "Take A 👀 At Our Best-Sellers…" telegraphs nothing about a 20% discount, free shipping, or summer dresses. A subscriber skimming their inbox has no reason to prioritize this open over a dozen other promotions.
- **Two competing promotional hooks dilute conversion intent.** The 20% off first-order hero (a new-customer offer) and the 40% off dresses banner (a category promotion) target different purchase scenarios. A subscriber who isn't a first-timer sees the hero as irrelevant, then has to scroll to find their offer. These should be segmented sends or the hierarchy should be cleaner.
- **No specific product hero.** Every CTA goes to a category page. There is no "here is the one item you should look at right now" moment. Best-seller emails without an actual best-seller featured are just dressed-up nav menus.
- **No deadline on either offer.** "Hurry!" appears in the hero copy but no expiration date is visible. Urgency without a deadline doesn't drive behavior.
- **No reviews or social proof.** A brand that presumably has customer love (loyal enough to build a rewards program) leaves that credibility entirely on the table.

---

### 5. Recommendations

1. **Rewrite the subject line to surface the offer.** "Hurry — Extra 20% Off + 40% Off All Dresses" or a variant that names both promotions will materially improve opens for an existing subscriber list.
2. **Segment the two offers.** Send the 20% new-customer welcome only to lapsed or unconverted subscribers; send the 40% dresses promo to your general active list. Mixing them dilutes both.
3. **Lead with one featured best-seller in the hero.** Replace or supplement the generic discount banner with a single product image — the #1 best-selling dress going into summer is a natural candidate — and link directly to the PDP.
4. **Add a concrete expiration date.** "Offer valid through May 14" is more action-driving than "hurry!" alone.
5. **Pull one or two customer reviews into the email.** Even one brief quote near the product tiles gives a first-time opener social validation to act on.

---

### 6. Bottom Line

This is a competent, clean promotional send that earns strong marks on design, brand consistency, and offer clarity. What it lacks is a sharp subject line and a focused singular CTA — two things that separate a "fine" promo email from one that drives measurable lift. Fix the subject and pick one offer to lead with, and this email punches well above its current weight.

---

### 7. Subject Line Analysis

- **Subject:** `Take A 👀 At Our Best-Sellers…`
- **Length:** 33 chars (including emoji)
- **Scores (1-10):** Clarity `4`, Curiosity `5`, Personalization `1`, Urgency `1`, Specificity `2`
- **Strengths:**
  - Mobile-friendly length; won't be truncated on any device
  - Emoji adds a visual break in a crowded inbox
- **Weaknesses:**
  - "Best-sellers" promises content the body doesn't deliver — there's no featured best-seller inside, just category tiles
  - Hides two strong offers (20% off, 40% off dresses) behind the vaguest possible hook
- **Alt A:** `Hurry — Extra 20% Off + Summer Dresses Start at 40% Off`
- **Alt B:** `Our Best-Sellers Are 40% Off This Week`

---

### 8. Preview Text Analysis

- **Preview:** `hurry! extra 20% off your first order with code: XC2TBDQ4N320`
- **Length:** ~60 chars (estimated from visible hero text; assumes no explicit preheader was set and the hero copy bleeds in)
- **Scores (1-10):** Complements subject `7`, Specificity `8`, Clarity `8`, Inbox-fit `6`
- **Strengths:**
  - Concretely names the offer and provides the promo code — a subscriber who sees this in the inbox preview already has what they need to act
  - Clearly complements the generic subject by adding the offer substance the subject omits
- **Weaknesses:**
  - The promo code in the preview text is useful but risks eating all available preview real estate with alphanumeric noise (XC2TBDQ4N320) — inbox clients may truncate before showing a second hook
  - Reads as a first-order/new-customer offer, which may feel irrelevant to returning subscribers who see it in the preview
- **Alt A:** `Extra 20% off your first order — plus summer dresses are 40% off now`
- **Alt B:** `New to Hanna? Take 20% off. Already a fan? Dresses are 40% off.`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `7/10`
- **Signals counted:** Sender display name is recognizable (Hanna Andersson), preview text is real copy (hero offer), preview complements and adds information the subject omits, subject is under 50 chars, no spam signals (single emoji, no ALL CAPS), cadence feels reasonable
- **Rationale:** The sender name alone is enough to earn a look for a subscriber who cares about children's clothing. But the subject line leaves two real offers invisible, which costs it on curiosity and urgency — both of which stay at zero in the inbox view.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `6/10`
- **Signals counted:** Hero offer is visible without scrolling, primary CTAs are in the correct category (children's clothing), offer reduces price (20% off + 40% off dresses), brand voice is consistent and trusted, no friction (no broken images, clean layout)
- **Rationale:** The email opens well and prices are reduced, but no single product hero gives a concrete reason to click over browsing a category page yourself — and the absence of a deadline removes the urgency that typically converts intent into a tap.

---

### 11. Evidence

- **Overall purpose:** Drive new-customer acquisition (20% off code) and seasonal category conversion (summer dresses at 40% off), with a loyalty recruitment module as a secondary goal.
- **Hero / primary value proposition:** Teal banner — "hurry! extra 20% off your first order with code: XC2TBDQ4N320" / SHOP NOW. Clearly first in the visual flow.
- **Membership / benefits section:** Hanna Rewards module in cream/tan between the category grid and the dress banner. Lists three perks with icons: early sale access and exclusive drops, free shipping on $30+, $10 reward per $125 spent. Join Now For Free CTA. Repeated in minimal footer form near the bottom.
- **Product discoverability / recommendation modules:** 2×2 category tile grid (Shop Girls, Shop Pajamas, Shop Baby, Shop Boys) with lifestyle photography. Each tile links to its category. No individual product SKUs, no prices shown, no editorial ranking.
- **Utility / secondary modules:** Social media icons (Instagram, Pinterest, Facebook, TikTok) with @hannaandersson handle. "Sign up for texts" and "talk to a personal shopper" icon CTAs. Category nav strip: RED, WHITE & NEW! / GIRLS / BOYS / BABY / PAJAMAS / CHARACTERS / SWIM. "Made to last · made to play · made responsibly" brand statement. Dense legal fine print at the bottom (unreadable at render size, but visible).
- **Bugs / friction / clarity issues:** None visible in the render — the email is cleanly coded and fully loaded. The only structural friction is conceptual: two simultaneous promotional offers (new-customer vs. category) aimed at the same reader without segmentation logic surfaced in the email itself.

---

## Technical Audit

## Technical Audit — Hanna Andersson "Best-Sellers" Email

### 1. Technical Summary
Standard Bloomreach-sent table-based email with MSO/VML conditionals and a responsive breakpoint at 620px. The HTML source is truncated, limiting full link and compliance inspection; findings below are bounded to what is visible.

---

### 2. Link & Tracking Issues

**Open-tracking pixel — third-party CDN dependency**
```
src="https://hannaandersson-cdn.bloomreach.co/.../open"
```
Pixel is served from `hannaandersson-cdn.bloomreach.co`. If Bloomreach's CDN is blocked or slow, the pixel fires late or not at all — standard risk for hosted ESP tracking, but worth noting if open-rate anomalies appear.

**Sending subdomain routing**
From address uses `info@e.m.hannaandersson.com`. The `e.m.` subdomain is consistent with Bloomreach envelope routing. Confirm DKIM/DMARC alignment covers this subdomain (see §5).

**Truncated HTML — click links not auditable**
The source cuts off before any `<a href>` CTAs. Cannot verify UTM params, redirect chain, or broken links from this extract.

---

### 3. Rendering & Accessibility

**Global link color override**
```css
#MessageViewBody a { color: inherit; text-decoration: none; }
```
This suppresses underlines and forces link color to inherit parent text — correct for preventing Gmail blue-link injection, but it means CTA links in the body rely entirely on button background color for affordance. If a button renders as plain text in a fallback client, the link is visually invisible. Acceptable if all CTAs are image-backed buttons, but should be verified.

**Dual preheader implementation — intentional, no issue**
The email uses both a `visibility:hidden` span and a `display:none` padding div (with `&#8199;&#847;` spacer chars). This is correct standard practice to control preview text and prevent bleed; no issue.

**`lang="en"` present — correct.**
**`charset=UTF-8` — correct** (required for the emoji in the subject line).
**`role="presentation"` on all layout tables — correct.**
**Tracking pixel `alt=""` — correct** (empty alt on decorative/tracking images).

**No `<title>` mismatch** — `<title>` matches the subject line. No issue.

---

### 4. Personalization & Merge Tokens

No merge tokens visible in the truncated source. Cannot confirm whether subscriber name, loyalty tier, or segmentation tokens are present in the body. If this email carries personalized product recommendations via Bloomreach, verify that fallback values are set for all tokens (empty-string fallback renders as blank copy in inbox).

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Unsubscribe link — not visible in truncated source**
CAN-SPAM requires a functional unsubscribe mechanism and physical mailing address. Neither is visible in the provided extract. Confirm both exist in the footer (outside the truncated range).

**Authentication — subdomain alignment risk**
Sending domain is `e.m.hannaandersson.com`. Verify:
- DKIM `d=` tag aligns to `hannaandersson.com` or `e.m.hannaandersson.com`
- DMARC policy on `hannaandersson.com` covers this subdomain (subdomain policy `sp=` tag)
- SPF record for `e.m.hannaandersson.com` includes Bloomreach sending IPs

Without header data these cannot be confirmed from the HTML alone.

---

### 6. Email-to-Site Continuity

**UTM parameters — not auditable from truncated source**
CTA links are not present in the provided HTML. Key checks that must be done against the full source:
- All links should carry `utm_source`, `utm_medium`, `utm_campaign` at minimum
- Discount code ("20% OFF" referenced in preheader) should be pre-applied or clearly surfaced on the landing page, not buried

**Preheader/subject alignment — minor gap**
Subject: "Take A 👀 At Our Best-Sellers…"
Preheader: "And shop them at 20% OFF!"

The 20% discount is only in the preheader, not the subject. If the landing page doesn't prominently feature the discount, there's a continuity gap between inbox promise and on-site experience. (Flagged here as a technical continuity concern, not a copy note.)

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | Full link audit blocked by truncation | Re-run audit against complete HTML; verify all `<a href>` targets carry UTM params |
| High | CAN-SPAM footer visibility unconfirmed | Confirm unsubscribe link + physical address present in footer |
| Medium | DKIM/DMARC alignment for `e.m.hannaandersson.com` | Pull delivery headers from a test send; confirm `d=` alignment and `sp=` DMARC policy |
| Medium | Merge token fallbacks | Audit all Bloomreach personalization tokens for non-empty fallback values |
| Low | Link color suppression via `#MessageViewBody a` | Verify all CTAs are button-styled (not bare text links) before deploy |
## Recent history

- [[2026-05-09-hi-your-20-off-is-waiting]] — 8/10 (2026-05-09)
- [[2026-05-08-welcome-to-hanna]] — 9/10 (2026-05-08)

