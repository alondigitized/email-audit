---
slug: 2026-05-08-the-styles-taking-over-your-feed-1134578b-f07b-4590-8544-
type: email
date: 2026-05-08
persona: walker
score: "8/10"
sender: SKECHERS
subject: The Styles Taking Over Your Feed
tags: [email, score-8, sender/skechers]
---
# The Styles Taking Over Your Feed
**Score:** 8/10 · **Type:** Email audit · **2026-05-08**
## Executive summary

- **From:** SKECHERS | **Subject:** The Styles Taking Over Your Feed
- Alright, so I opened this one because I recognized Skechers in the sender field and there's a BOGO 50% off offer right at the top — that got my attention. But honestly? The subject line lost me before I even got in the door. "The Styles Taking Over Your Feed" sounds like something my granddaughter would say. I'm not on TikTok watching feeds. I'm looking for a comfortable pair of shoes I can slip on without bending down. Once I'm inside the email, there's good stuff — boat shoes, an Elevated Comfort section, Airfit styles — but it's buried under a pile of categories that don't interest me, including women's, kids', and apparel. Too much scrolling, not enough "here's the shoe for you, Walker."
- **8/10**
- Sender is a brand I recognize and am subscribed to
- One concrete offer is visible — BOGO 50% off at the top banner
- Primary CTA is unambiguous — "SHOP NOW," "SHOP BOAT SHOES," "SHOP AIRFIT STYLES" are all clear
- No render bugs — images loaded clean, layout held together
- Demographic signals match — male model in casual linen gear, men's product sections front and center
- Email reflects a current/fresh campaign — "Just Landed" framing
- Offer feels honest — BOGO is stated plainly, no obvious bait-and-switch visible
- *Not counted:* Subject/hero copy doesn't name comfort or slip-ins explicitly; visual hierarchy is diluted by too many competing sections; no Skechers Plus member benefits called out.

## What's working

- The BOGO 50% off banner at the very top is the smartest thing in this email. That's the kind of offer that makes me stop scrolling. Boat shoes showing up early is a win — that's the kind of casual, easy shoe I actually wear. The Elevated Comfort and Airfit sections hit squarely in my wheelhouse. The male model in the hero looks like a real person in real clothes, not some 25-year-old influencer doing a backflip. I appreciate that. Section headers like "BOAT SHOES" and "ELEVATED COMFORT" are big, readable, and get to the point. No squinting required.

## What's weak

- That subject line is not for me. "The Styles Taking Over Your Feed" — I don't have a feed. That framing signals this email was written for someone thirty years younger. The preview text is where things really fall apart: it showed raw computer code in my inbox (something about schema.org), which made me think the email was broken before I even opened it. Lucky I recognized the Skechers name.
- The email also keeps sliding into territory I don't care about: women's, kids', apparel. Every extra section dilutes the stuff that would've made me click. And there's zero mention of my Skechers Plus membership — if I'm a loyal member, where's my benefit? Where's the "member price" or the early access angle? That's table stakes for a loyalty program email.
- The Best Sellers section has a "SALE" label but the images are small and I can't tell what the price is without clicking. On my phone that's a dead zone.

## Recommendations

- 1. **Lead with comfort, not trends.** Change the subject and hero to something like "New Slip-ins & Boat Shoes — BOGO 50% Off." Cut the social media language.
- 2. **Fix that preview text immediately.** Whatever code is leaking into the preheader needs to be replaced with real copy — something like "BOGO 50% ends soon — shop Men's Boat Shoes & Slip-ins."
- 3. **Surface the Skechers Plus benefit.** If I'm a member, tell me what I'm getting that non-members aren't. Even one line — "Member exclusive: free shipping on your BOGO order."
- 4. **Trim the email in half.** Boat Shoes → Elevated Comfort → BOGO offer. Done. Cut women's, kids', and apparel from this send for the men's segment.
- 5. **Show a price on the Best Sellers.** Even a "Was $75, now $50" label earns the click. Right now it's just a pretty picture.
- | Priority | Issue | Fix |
- |---|---|---|
- | **Critical** | Empty `First Name` merge token renders as `"Hi ,"` | Add AMPscript/SSJS fallback (`"there"` or `"friend"`) before send |
- | **High** | 11 content images served over HTTP | Change `http://image.emails.skechers.com` → `https://` in template |
- | **High** | ink1000 open pixel served over HTTP | Update pixel URL to HTTPS or replace with SFMC native open tracking |
- | **High** | Return Path pixel missing URL scheme | Prepend `https://` to `pixel.app.returnpath.net/pixel.gif?r=...` |
- | **Medium** | Product image `49468f73...png` has no `alt` text | Add descriptive `alt` attribute |
- | **Low** | Confirm unsubscribe link + physical address present in footer | Manual review of full HTML |

## Full review
---

## Walker Miles — Email Review
**From:** SKECHERS | **Subject:** The Styles Taking Over Your Feed

---

### 1. Executive Summary

Alright, so I opened this one because I recognized Skechers in the sender field and there's a BOGO 50% off offer right at the top — that got my attention. But honestly? The subject line lost me before I even got in the door. "The Styles Taking Over Your Feed" sounds like something my granddaughter would say. I'm not on TikTok watching feeds. I'm looking for a comfortable pair of shoes I can slip on without bending down. Once I'm inside the email, there's good stuff — boat shoes, an Elevated Comfort section, Airfit styles — but it's buried under a pile of categories that don't interest me, including women's, kids', and apparel. Too much scrolling, not enough "here's the shoe for you, Walker."

---

### 2. Business Impact Score (1-10)

**8/10**

- Sender is a brand I recognize and am subscribed to
- One concrete offer is visible — BOGO 50% off at the top banner
- Primary CTA is unambiguous — "SHOP NOW," "SHOP BOAT SHOES," "SHOP AIRFIT STYLES" are all clear
- No render bugs — images loaded clean, layout held together
- Demographic signals match — male model in casual linen gear, men's product sections front and center
- Email reflects a current/fresh campaign — "Just Landed" framing
- Offer feels honest — BOGO is stated plainly, no obvious bait-and-switch visible

*Not counted:* Subject/hero copy doesn't name comfort or slip-ins explicitly; visual hierarchy is diluted by too many competing sections; no Skechers Plus member benefits called out.

---

### 3. What's Working

The BOGO 50% off banner at the very top is the smartest thing in this email. That's the kind of offer that makes me stop scrolling. Boat shoes showing up early is a win — that's the kind of casual, easy shoe I actually wear. The Elevated Comfort and Airfit sections hit squarely in my wheelhouse. The male model in the hero looks like a real person in real clothes, not some 25-year-old influencer doing a backflip. I appreciate that. Section headers like "BOAT SHOES" and "ELEVATED COMFORT" are big, readable, and get to the point. No squinting required.

---

### 4. What's Weak

That subject line is not for me. "The Styles Taking Over Your Feed" — I don't have a feed. That framing signals this email was written for someone thirty years younger. The preview text is where things really fall apart: it showed raw computer code in my inbox (something about schema.org), which made me think the email was broken before I even opened it. Lucky I recognized the Skechers name.

The email also keeps sliding into territory I don't care about: women's, kids', apparel. Every extra section dilutes the stuff that would've made me click. And there's zero mention of my Skechers Plus membership — if I'm a loyal member, where's my benefit? Where's the "member price" or the early access angle? That's table stakes for a loyalty program email.

The Best Sellers section has a "SALE" label but the images are small and I can't tell what the price is without clicking. On my phone that's a dead zone.

---

### 5. Recommendations

1. **Lead with comfort, not trends.** Change the subject and hero to something like "New Slip-ins & Boat Shoes — BOGO 50% Off." Cut the social media language.
2. **Fix that preview text immediately.** Whatever code is leaking into the preheader needs to be replaced with real copy — something like "BOGO 50% ends soon — shop Men's Boat Shoes & Slip-ins."
3. **Surface the Skechers Plus benefit.** If I'm a member, tell me what I'm getting that non-members aren't. Even one line — "Member exclusive: free shipping on your BOGO order."
4. **Trim the email in half.** Boat Shoes → Elevated Comfort → BOGO offer. Done. Cut women's, kids', and apparel from this send for the men's segment.
5. **Show a price on the Best Sellers.** Even a "Was $75, now $50" label earns the click. Right now it's just a pretty picture.

---

### 6. Bottom Line

Good bones, weak headline. The product content earns my interest once I'm inside, but the subject line and broken preview text nearly cost them the open. Skechers knows what I like — they just didn't put it front and center. If they'd led with "New Boat Shoes & Slip-ins — BOGO 50% Off," I'd have clicked through in thirty seconds. Instead I spent two minutes scrolling past women's sandals and kids' section to find my stuff.

---

### 7. Subject Line Analysis

- **Subject:** `The Styles Taking Over Your Feed`
- **Length:** 34 characters
- **Scores (1-10):** Clarity `5`, Curiosity `4`, Personalization `2`, Urgency `1`, Specificity `2`
- **Strengths:**
  - Short and mobile-friendly at 34 chars, no truncation risk
  - No spam signals — clean, no all-caps or exclamation stacking
- **Weaknesses:**
  - "Feed" is social-media language that alienates older demographics; a 62-year-old isn't thinking about his feed
  - Zero offer or product specificity — gives me no reason to open vs. archive
- **Alt A:** `New Boat Shoes & Slip-ins — BOGO 50% Off`
- **Alt B:** `Walker, your BOGO deal just landed — Men's Comfort Styles`

---

### 8. Preview Text Analysis

- **Preview:** `[{ "@context": "http://schema.org/", "@type": "Organization", "logo": "https://image.emails.skechers.com/...`
- **Length:** ~120+ characters of raw JSON
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - None — this is a broken preheader
- **Weaknesses:**
  - Raw schema.org JSON data is leaking as the preheader; it looks like a corrupted email in the inbox
  - Completely wastes the preview slot — no offer, no copy, no call to action
- **Alt A:** `BOGO 50% off ends soon — shop new Men's Boat Shoes & Airfit Styles`
- **Alt B:** `Just landed: Slip-ins, Boat Shoes, and more — plus BOGO 50% off select styles`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `5/10`
- **Signals counted:** Sender display name recognizable (Skechers), subject under 50 chars, no spam signals, cadence feels like a normal Skechers promo cycle
- **Rationale:** The sender name is the only real hook here. The subject doesn't reference comfort or shoes at all, the preview text is broken JSON, and there's no personalization pulling me in. I opened it because it said "Skechers," not because the subject earned it.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `6/10`
- **Signals counted:** Hero offer visible without scrolling (BOGO 50% off banner), primary CTA in my category (men's boat shoes, elevated comfort), CTA copy is specific (SHOP BOAT SHOES, SHOP AIRFIT STYLES), offer reduces price (BOGO), brand voice is consistent and trusted
- **Rationale:** Once I'm inside, the Boat Shoes and Elevated Comfort sections do real work — those are the two sections I'd actually tap. The BOGO offer seals it. But I have to wade past too many irrelevant sections to get there, and that friction chips away at my patience on a phone.

---

### 11. Evidence

- **Overall purpose:** Showcase new and best-selling men's (and general) styles with a BOGO 50% off promotional hook
- **Hero / primary value proposition:** "Just Landed — What's Hot Right Now" hero image with a male model in casual wear; BOGO 50% off on select styles banner immediately above
- **Membership / benefits section:** None visible — Skechers Plus is not referenced anywhere in the visible email
- **Product discoverability / recommendation modules:** Three distinct product category rows — Boat Shoes (with at least two color variants visible), Sneakers (casual), and Elevated Comfort / Airfit Styles — each with a dedicated shop CTA; Best Sellers module appears below with a "SALE" badge
- **Utility / secondary modules:** 25% Off Apparel section (not relevant to me), navigation strip (WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS), "Let's Get Texting" app/SMS signup prompt, social media follow block, standard footer with unsubscribe
- **Bugs / friction / clarity issues:** The most glaring issue is the preheader — raw schema.org JSON is displaying as the preview text in the inbox, making the email look broken before it's even opened. No visible issues with image rendering inside the email body itself. Best Sellers pricing is too small to read at mobile scale.

---

## Technical Audit

## Technical Audit — SKECHERS "The Styles Taking Over Your Feed" (2026-05-08)

---

### 1. Technical Summary

One critical personalization failure (broken greeting) and a systemic HTTP/mixed-content issue affecting 13+ image assets. No structural rendering failures, but the mixed-content warnings represent a deliverability and rendering risk in privacy-strict clients.

---

### 2. Link & Tracking Issues

**No broken destination links detected.** 27 click-redirect links were skipped by the probe (expected — `click.emails.skechers.com` requires a live recipient token to resolve).

**Third-party pixel inventory:**
- `beacon.krxd.net` — 2× user-match pixels + 1× ad impression pixel. All loaded in a hidden `display:none` `<div>`. Krux/Salesforce DMP sync is present.
- `ink1000.com/o.gif` — additional open-tracking pixel served over **HTTP** (see §3).
- `pixel.app.returnpath.net` — Validity/Return Path inbox monitoring pixel. Served without protocol prefix (`pixel.app.returnpath.net/pixel.gif` — missing `http://` or `https://` scheme). This is a malformed URL and the pixel will silently fail to fire.

**Evidence:** `<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499"` — no protocol.

---

### 3. Rendering & Accessibility

**HTTP mixed-content — 13 assets** are served over `http://` instead of `https://`. Modern email clients (Gmail, Outlook.com, Apple Mail on iOS 14+) block or proxy HTTP image loads. Affected assets:

| Asset | URL |
|---|---|
| Open-tracking pixel | `http://www.ink1000.com/p/up/...` |
| Skechers logo | `http://image.emails.skechers.com/.../dde00662...png` |
| Hero/product image | `http://image.emails.skechers.com/.../49468f73...png` |
| App Store badge | `http://image.emails.skechers.com/.../0ec56c9f...png` |
| Google Play badge | `http://image.emails.skechers.com/.../9bb508d0...png` |
| Curbside Pickup icon | `http://image.emails.skechers.com/.../00100b23...png` |
| AfterPay icon | `http://image.emails.skechers.com/.../07cb60b5...png` |
| Find A Store icon | `http://image.emails.skechers.com/.../fc08601a...png` |
| Instagram icon | `http://image.emails.skechers.com/.../b782e0aa...png` |
| Facebook icon | `http://image.emails.skechers.com/.../a5c4cae0...png` |
| YouTube icon | `http://image.emails.skechers.com/.../8c5738fc...png` |

`image.emails.skechers.com` almost certainly supports HTTPS — this is a template configuration error, not a missing CDN capability.

**Missing alt text — 2 images:**
- `o.gif` (ink1000 tracking pixel) — acceptable for a tracking pixel
- `49468f73...png` — product/content image with no `alt` attribute. Fails WCAG 2.1 AA (SC 1.1.1) and degrades experience in image-blocked clients.

---

### 4. Personalization & Merge Tokens

**FAIL — Empty greeting slot.** QA detected a rendered greeting of the form `"Hi ,"` with a blank name field. The merge token (likely `%%First Name%%` or equivalent AMPscript/SSJS) resolved to an empty string rather than a fallback value.

This is a **critical broken experience** — it is recipient-visible and erodes trust. The fix is a conditional fallback:

```
/* AMPscript example */
%%[
  SET @fname = AttributeValue("First Name")
  IF EMPTY(@fname) THEN SET @fname = "there" ENDIF
]%%
Hi %%=v(@fname)=%%,
```

---

### 5. Compliance

**CAN-SPAM / unsubscribe:** Not fully verifiable from the truncated HTML, but standard Skechers footer patterns include a physical address and unsubscribe link — flag for manual confirmation that both are present in the live send.

**Authentication headers:** Not inspectable from HTML source alone. Should be verified via received headers:
- SPF: `emails.skechers.com` should have a valid SPF record.
- DKIM: `no-reply@emails.skechers.com` signature should be present.
- DMARC: `skechers.com` policy should be `p=quarantine` or `p=reject`.

No compliance issues are confirmed from the available source, but the HTTP pixel from `ink1000.com` is a third-party domain — confirm it is an authorized data processor under any applicable CCPA/privacy policy disclosure.

---

### 6. Email-to-Site Continuity

27 tracked links all route through `click.emails.skechers.com` — UTM parameters are injected at redirect time by Salesforce Marketing Cloud, so parameter coverage depends on the SFMC link-tracking configuration, not the raw HTML. The campaign ID string `MKG_US_NONPURCLICK_U_TREND_PROD_NONPURCH_05082026` is consistent across the Krux impression pixel and the ink1000 pixel, indicating campaign tagging is aligned.

No issues confirmed from the available source.

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| **Critical** | Empty `First Name` merge token renders as `"Hi ,"` | Add AMPscript/SSJS fallback (`"there"` or `"friend"`) before send |
| **High** | 11 content images served over HTTP | Change `http://image.emails.skechers.com` → `https://` in template |
| **High** | ink1000 open pixel served over HTTP | Update pixel URL to HTTPS or replace with SFMC native open tracking |
| **High** | Return Path pixel missing URL scheme | Prepend `https://` to `pixel.app.returnpath.net/pixel.gif?r=...` |
| **Medium** | Product image `49468f73...png` has no `alt` text | Add descriptive `alt` attribute |
| **Low** | Confirm unsubscribe link + physical address present in footer | Manual review of full HTML |
## Recent history

- [[2026-05-08-almost-over-10-off]] — 8/10 (2026-05-08)
- [[2026-05-08-tell-us-your-birthday-and-we-ll-send-you-something-special]] — 5/10 (2026-05-08)
- [[2026-05-08-i-can-t-believe-these-are-crocs]] — 5/10 (2026-05-08)

