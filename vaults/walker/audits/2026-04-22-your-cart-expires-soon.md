---
slug: 2026-04-22-your-cart-expires-soon
type: email
date: 2026-04-22
persona: walker
score: "7/10"
sender: SKECHERS
subject: Your cart expires soon!
tags: [email, score-7, sender/skechers]
---
# Your cart expires soon!
**Score:** 7/10 · **Type:** Email audit · **2026-04-22**
## Executive summary

- **Persona: Walker Miles, 62, Boomer male | Skechers Plus member | Slip-ins loyalist**
- This is a cart abandonment email, and it knows its one job: pull me back to finish what I started. I had a pair of Arch Fit Glide-Step Larzo Slip-ins sitting in my cart, and Skechers is reminding me before they disappear. That's the right move. The hero product is front and center, the "COMPLETE YOUR ORDER" button is hard to miss, and there's a 20% off banner lower in the email that could tip me over the edge. Where it stumbles is in the "you might also like" zone — several of those tiles look like women's shoes, which makes me feel like I'm browsing someone else's screen. For a triggered cart email, the personalization should be tighter. Still, the core message lands and the offer is real.
- Good trigger, right product, credible offer. Loses points for muddied product recs and a missed opportunity to remind me what I'm actually getting.

## What's working

- **The hero shoe is my shoe.** Skechers Slip-ins: Arch Fit Glide-Step - Larzo is right at the top, big and clear. I know exactly what I was looking at. That's the only thing that matters in a cart reminder.
- **"COMPLETE YOUR ORDER"** is a clean, unambiguous button. No clever copy, no guessing — just finish what I started. I appreciate directness.
- **20% off a single pair** is a legitimately good nudge. That banner is bold enough to catch my eye even when I'm scrolling on my phone. If I was on the fence before, that might be what puts me over.
- **"YOU LIKED THESE AND YOU WEREN'T WRONG."** — I'll admit, that opening copy made me smile a little. Feels like a buddy giving me a nudge instead of a robot chasing me down.

## What's weak

- **The product grid below the CTA is a mess for me.** I see women's shoes in there — pink ones, flats, things that don't belong anywhere near my cart. If you know I'm a 62-year-old guy who left a men's slip-in in my cart, why are you showing me women's Arch Fit Sneakers? It dilutes the whole "we know you" feeling the top of the email worked hard to build.
- **No mention of my Plus membership.** I've been a loyal member. A cart reminder is a perfect moment to say "your points are waiting" or "use your rewards on this." Total missed opportunity.
- **The subject line doesn't tell me what's expiring.** I get a generic "your cart expires soon" but no hint it's about a specific shoe I liked. That's a wasted character budget.
- **Small product thumbnails below the hero.** On a phone, those secondary product tiles are tiny. I can barely make out what they are. Tap targets on those are going to be rough.
- **Way too many navigation categories at the bottom.** WOMEN, MEN, KIDS, CLOTHING, NEW ARRIVALS, SALE — this is cluttering a triggered email that should stay laser-focused on converting me, not inviting me to browse all over again.

## Recommendations

- 1. **Strip the women's product tiles.** Show only men's items — ideally other men's Slip-ins or Arch Fit styles I might pair or substitute. Personalization should go all the way down the email, not just the hero.
- 2. **Add a Plus member callout.** Something like "Your Points Balance: [X] — Apply them today" would make this feel like a message from a brand that knows me.
- 3. **Move the 20% off offer higher.** It's buried below the fold. On mobile, I might never scroll that far. Put it right under the "COMPLETE YOUR ORDER" button while my motivation is highest.
- 4. **Tighten the subject line.** Tell me it's the specific shoe, not just "your cart." Even "Your Arch Fit Slip-ins are waiting" does more work.
- 5. **Drop the navigation bar.** This isn't a newsletter. It's a recovery email. Every extra link I click that isn't "COMPLETE YOUR ORDER" is a lost conversion.
- | Priority | Issue | Action |
- |---|---|---|
- | High | HTTP tracking domain | Confirm Attentive account is configured for HTTPS click tracking (`https://skechers.attentivemail.com`) |
- | High | Truncated source — compliance unknown | Run full HTML through a CAN-SPAM checker (e.g., Litmus, Email on Acid) to confirm unsubscribe link and physical address are present |
- | Medium | Empty `<title>` | Set to `"Skechers — Your Cart is Waiting"` or equivalent |
- | Medium | UTM param verification | Trace one tracked link end-to-end in a browser; confirm UTM params land on the destination and appear in analytics |
- | Medium | Cart merge token validation | Seed-send with a known test cart and verify product name/image/price render correctly |
- | Low | Preheader invisible-character volume | Consider reducing padding character count; test deliverability against SpamAssassin |

## Full review
---

# Email Review: "Your cart expires soon!"
**Persona: Walker Miles, 62, Boomer male | Skechers Plus member | Slip-ins loyalist**

---

## 1. Executive Summary

This is a cart abandonment email, and it knows its one job: pull me back to finish what I started. I had a pair of Arch Fit Glide-Step Larzo Slip-ins sitting in my cart, and Skechers is reminding me before they disappear. That's the right move. The hero product is front and center, the "COMPLETE YOUR ORDER" button is hard to miss, and there's a 20% off banner lower in the email that could tip me over the edge. Where it stumbles is in the "you might also like" zone — several of those tiles look like women's shoes, which makes me feel like I'm browsing someone else's screen. For a triggered cart email, the personalization should be tighter. Still, the core message lands and the offer is real.

---

## 2. Business Impact Score: **7 / 10**

Good trigger, right product, credible offer. Loses points for muddied product recs and a missed opportunity to remind me what I'm actually getting.

---

## 3. What's Working

- **The hero shoe is my shoe.** Skechers Slip-ins: Arch Fit Glide-Step - Larzo is right at the top, big and clear. I know exactly what I was looking at. That's the only thing that matters in a cart reminder.
- **"COMPLETE YOUR ORDER"** is a clean, unambiguous button. No clever copy, no guessing — just finish what I started. I appreciate directness.
- **20% off a single pair** is a legitimately good nudge. That banner is bold enough to catch my eye even when I'm scrolling on my phone. If I was on the fence before, that might be what puts me over.
- **"YOU LIKED THESE AND YOU WEREN'T WRONG."** — I'll admit, that opening copy made me smile a little. Feels like a buddy giving me a nudge instead of a robot chasing me down.

---

## 4. What's Weak

- **The product grid below the CTA is a mess for me.** I see women's shoes in there — pink ones, flats, things that don't belong anywhere near my cart. If you know I'm a 62-year-old guy who left a men's slip-in in my cart, why are you showing me women's Arch Fit Sneakers? It dilutes the whole "we know you" feeling the top of the email worked hard to build.
- **No mention of my Plus membership.** I've been a loyal member. A cart reminder is a perfect moment to say "your points are waiting" or "use your rewards on this." Total missed opportunity.
- **The subject line doesn't tell me what's expiring.** I get a generic "your cart expires soon" but no hint it's about a specific shoe I liked. That's a wasted character budget.
- **Small product thumbnails below the hero.** On a phone, those secondary product tiles are tiny. I can barely make out what they are. Tap targets on those are going to be rough.
- **Way too many navigation categories at the bottom.** WOMEN, MEN, KIDS, CLOTHING, NEW ARRIVALS, SALE — this is cluttering a triggered email that should stay laser-focused on converting me, not inviting me to browse all over again.

---

## 5. Recommendations

1. **Strip the women's product tiles.** Show only men's items — ideally other men's Slip-ins or Arch Fit styles I might pair or substitute. Personalization should go all the way down the email, not just the hero.
2. **Add a Plus member callout.** Something like "Your Points Balance: [X] — Apply them today" would make this feel like a message from a brand that knows me.
3. **Move the 20% off offer higher.** It's buried below the fold. On mobile, I might never scroll that far. Put it right under the "COMPLETE YOUR ORDER" button while my motivation is highest.
4. **Tighten the subject line.** Tell me it's the specific shoe, not just "your cart." Even "Your Arch Fit Slip-ins are waiting" does more work.
5. **Drop the navigation bar.** This isn't a newsletter. It's a recovery email. Every extra link I click that isn't "COMPLETE YOUR ORDER" is a lost conversion.

---

## 6. Bottom Line

I'd probably click. That shoe is one I genuinely considered, the button is obvious, and the 20% off gives me a reason to act now rather than tomorrow. But Skechers could've made me feel like a valued customer instead of a data point. The women's product recs break the spell and the Plus membership angle is sitting there unused. Close to a good cart email — just needs a tighter second half.

---

## 7. Subject Line Analysis

- **Subject:** `Your cart expires soon!`
- **Length:** 22 characters
- **Scores (1-10):** Clarity `8`, Curiosity `3`, Personalization `2`, Urgency `7`, Specificity `2`
- **Strengths:**
  - Clean and readable; no confusion about what the email is about
  - "Expires" creates mild urgency without being aggressive
- **Weaknesses:**
  - Zero product specificity — doesn't tell me what's in my cart
  - Feels like a system notification, not a personal nudge from a brand I like
- **Alt A:** `Your Arch Fit Slip-ins are almost gone, Walker`
- **Alt B:** `We saved your cart — 20% off if you finish today`

---

## 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — no intentional preheader visible in the render
- **Length:** N/A
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - N/A — no usable preheader present
- **Weaknesses:**
  - Missing preheader means inbox clients likely show filler text or the start of the email body — a wasted slot on a triggered email where every inch matters
  - Lost chance to reinforce the offer or name the product before I even open
- **Alt A:** `That pair of Slip-ins is still waiting for you — 20% off today`
- **Alt B:** `Your Arch Fit Glide-Step Larzo is almost sold out`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `6/10`
- **Rationale:** "Your cart expires soon" is familiar enough that I know it's about something I was already interested in — that gets me to open. But the subject gives me nothing specific, so my curiosity is moderate, not high. I trust the Skechers sender name, and I've gotten these before, so I know what to expect.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `7/10`
- **Rationale:** Once I'm inside and I see the actual shoe I was looking at — big, clear, right at the top — and a bold 20% off offer below, I'm likely to hit that button. The "COMPLETE YOUR ORDER" CTA is simple enough that I don't have to think. The women's product tiles are annoying but they don't stop me from clicking what I came to click.

---

## 11. Evidence

- **Overall purpose:** Cart abandonment recovery email, triggered by an abandoned Skechers Slip-ins product
- **Hero / primary value proposition:** Skechers Slip-ins: Arch Fit Glide-Step - Larzo shown large with a single prominent "COMPLETE YOUR ORDER" blue CTA button
- **Membership / benefits section:** No Plus member callout present anywhere in the visible render — notable absence
- **Product discoverability / recommendation modules:** Two rows of small product thumbnails below the hero; includes apparent women's styles (pink/rose Arch Fit models, flats) mixed with some men's items — poorly filtered for a male recipient
- **Utility / secondary modules:** "SHOP ALL BEST SELLERS" banner; "20% OFF A SINGLE PAIR — SHOP NOW" banner (prominent dark background); navigation links (WOMEN, MEN, KIDS, CLOTHING, NEW ARRIVALS, SALE); "LET'S GET TEXTING" SMS opt-in prompt; App Store / Google Play download links; Curbside Pickup; Shop Now Pay Later (Afterpay, Klarna); Find a Store; social follow icons
- **Bugs / friction / clarity issues:** No visible broken images or overlapping text; secondary product thumbnails are very small on mobile scale; no preheader copy — inbox preview likely shows unintended content

---

## Technical Audit

## Technical Audit — Skechers "Your cart expires soon!" (hello@msgs.skechers.com)

---

### 1. Technical Summary

Cart-abandonment email sent via Attentive (ESP domain: `skechers.attentivemail.com`). All links are wrapped in Attentive's click-tracking redirector. HTML is table-based with a mobile breakpoint at 620 px. The source provided is truncated, so compliance and personalization sections are partially assessed.

---

### 2. Link & Tracking Issues

**HTTP redirect endpoint (confirmed)**
All tracked links use `http://` (not `https://`):
```
http://skechers.attentivemail.com/ls/click?upn=u001.LNc6Vor...
```
Any MitM opportunity exists between the click and the final redirect. The final destination is likely HTTPS, but the intermediate hop is unencrypted. Attentive should be configured to serve `https://skechers.attentivemail.com`.

**UTM parameters not visible pre-redirect**
The `upn=` payload is base64/URL-encoded; UTM parameters (if any) are embedded inside. Cannot confirm `utm_campaign`, `utm_medium`, `utm_source` are present until redirect is followed. Risk: analytics attribution breaks if the redirect drops params on error.

**"web version" link**
Present and tracked. Destination cannot be verified from truncated source.

---

### 3. Rendering & Accessibility

**Empty `<title>` tag**
```html
<title></title>
```
Some email clients (notably Outlook on Windows) display the `<title>` value as the window title or in accessibility trees. Should be set to a meaningful string (e.g., `"Skechers — Complete Your Purchase"`).

**Preheader padding technique**
The preheader uses a large block of U+034F Combining Grapheme Joiner (`͏`) and soft-hyphen (`­`) characters to suppress inbox preview bleed. This is common practice, but the volume (300+ invisible characters) can trigger aggressive spam filters. No rendering defect, but worth noting as a deliverability risk.

**Image alt text** — Cannot confirm from truncated source. Logo image and product images must have non-empty `alt` attributes; linked images need descriptive alt text per WCAG 2.1 / email accessibility best practice.

**Fixed 600 px container**
`width:600px` is hardcoded on `.row-content`. Mobile breakpoint overrides to `100%` via media query. Confirmed correct; no issue.

---

### 4. Personalization & Merge Tokens

**Subject line has no first-name token**
`Your cart expires soon!` — no personalization visible. If Attentive's template has a first-name merge field, its absence here may indicate a fallback rendering issue or a deliberate choice; either way it should be documented as intentional.

**No cart item tokens visible in truncated source**
Cannot confirm whether product name, image, price, or quantity merge tags are present in the body. These are required for a functional abandoned-cart email and must be validated in a seed send with a known test cart.

---

### 5. Compliance

**Source is truncated** — full compliance audit requires the complete HTML. Based on what is visible:

- **Unsubscribe link**: Not visible in the provided excerpt. Attentive injects a footer; must be confirmed in the full render. CAN-SPAM requires a clear opt-out mechanism.
- **Physical mailing address**: Not visible in excerpt. CAN-SPAM §5(a)(5) requires a valid physical postal address.
- **Sender domain**: `msgs.skechers.com` — subdomain of `skechers.com`. SPF/DKIM/DMARC alignment should be verified against DNS records for this subdomain. Attentive typically handles signing, but alignment with `skechers.com` DMARC policy (`p=reject` or `p=quarantine`) must be confirmed.

---

### 6. Email-to-Site Continuity

**Cannot verify landing page URL from truncated source.** The Attentive redirect wraps destination URLs; the final cart/product page URL is not visible in the raw HTML.

**Risks to verify in full send:**
- Cart link should deep-link to the recipient's specific session/cart, not the generic cart page
- Landing page should not require re-login if the session token is embedded in the link
- UTM params (`utm_medium=email`, `utm_campaign=cart_abandonment`) should survive the redirect chain and appear in GA4/analytics

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | HTTP tracking domain | Confirm Attentive account is configured for HTTPS click tracking (`https://skechers.attentivemail.com`) |
| High | Truncated source — compliance unknown | Run full HTML through a CAN-SPAM checker (e.g., Litmus, Email on Acid) to confirm unsubscribe link and physical address are present |
| Medium | Empty `<title>` | Set to `"Skechers — Your Cart is Waiting"` or equivalent |
| Medium | UTM param verification | Trace one tracked link end-to-end in a browser; confirm UTM params land on the destination and appear in analytics |
| Medium | Cart merge token validation | Seed-send with a known test cart and verify product name/image/price render correctly |
| Low | Preheader invisible-character volume | Consider reducing padding character count; test deliverability against SpamAssassin |
## Recent history

- [[2026-04-22-find-your-material-match-suede-canvas-or-leather]] — 4/10 (2026-04-22)
- [[2026-04-22-mystery-deal]] — 3/10 (2026-04-22)
- [[2026-04-22-why-does-everyone-love-crocs]] — 3/10 (2026-04-22)

