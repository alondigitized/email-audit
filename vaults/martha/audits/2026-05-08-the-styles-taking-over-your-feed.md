---
slug: 2026-05-08-the-styles-taking-over-your-feed
type: email
date: 2026-05-08
persona: martha
score: "8/10"
sender: SKECHERS
subject: The Styles Taking Over Your Feed
tags: [email, score-8, sender/skechers]
---
# The Styles Taking Over Your Feed
**Score:** 8/10 · **Type:** Email audit · **2026-05-08**
## Executive summary

- I'm staring at an email from Skechers and I genuinely cannot figure out who they thought they were sending this to. The whole thing is men's boat shoes and men's sneakers. There's a good BOGO deal buried in there, and sure, Skechers is a brand I actually buy, but I'm a mom shopping for a 5-year-old girl and a 9-year-old boy — and I'm going to scroll past every single one of these photos without feeling like any of this is for me. The subject line told me nothing useful, and whatever my inbox showed as the preview text was pure gibberish — literally looked like computer code. Not a great first impression. I'd probably open it because I recognize Skechers and I'm always hunting a BOGO, but I'd close it frustrated.
- **8/10**
- Sender is a brand I recognize and am subscribed to
- One concrete offer is visible: "BUY ONE, GET ONE 50% OFF on select styles" — right at the top of the hero
- Primary CTA is unambiguous: "SHOP NOW" button is clearly visible
- Visual hierarchy is clear — BOGO hero is the first thing the eye hits
- No visible render bugs — email displays cleanly, images load, text isn't broken
- Email reflects a current/seasonal feel — "Just Landed / What's Hot Right Now" language
- Offer feels honest — "on select styles" qualifier is present, no bait-and-switch vibe
- **FALSE criteria:** Subject/hero does NOT reference my focus area (kids, women's comfort); demographic signals do NOT match my persona (every model and product showcase is male); no loyalty/member benefits visible anywhere.

## What's working

- **The BOGO is front and center.** "Buy One, Get One 50% Off" in the hero is the kind of deal that makes me stop regardless of what I'm doing with the kids. I notice it immediately.
- **The visual design is clean.** Images load, layout is structured, no obvious crashes. On my phone I can tap through without squinting.
- **Section CTAs are specific enough** — "Shop Boat Shoes," "Shop Casual Sneakers," "Shop Athletic Styles" — so I know what I'm clicking into.
- **The 25% Off Apparel callout** catches my eye briefly — if I ever shop Skechers clothing, that's a decent hook.
- **Bottom navigation links** (Women / Men / Kids / Clothing / New Arrivals) at least acknowledge that kids and women exist, even if the actual email doesn't.
- **Shop Now, Pay Later (Klarna/Afterpay)** is a nice trust signal for a price-sensitive shopper like me.

## What's weak

- **It's a men's email.** Every single product photo, every lifestyle shot, every hero model — male. I'm a mom of two who shops for herself last. This doesn't speak to me or my kids at all.
- **The preview text is completely broken.** What I saw in my inbox was raw JSON-LD schema markup: `[{ "@context": "http://schema.org/"...` That's the only thing shown next to the subject line. This is genuinely embarrassing. I'd assume it was a spam email for a split second.
- **The subject line wastes the BOGO.** "The Styles Taking Over Your Feed" doesn't tell me there's a discount. It sounds like an influencer caption, not a reason to open an email during naptime.
- **No kids' products appear anywhere** in the main body content. KIDS is a tiny lowercase text link near the footer. That's it. For someone like me, who is primarily browsing for her 5-year-old's velcro sneakers and her son's durable lace-ups, this email has zero relevance.
- **No loyalty mention.** I'm a Skechers rewards member and I watch my points. If there were bonus points tied to this BOGO, I'd probably buy something tonight. That's not here.
- **No urgency or deadline.** BOGO is compelling but there's no "ends Sunday" or "while supplies last" signal that would get me to act now versus close the tab and forget.

## Recommendations

- 1. **Surface the BOGO in the subject line.** "BOGO 50% Off — Styles Just Landed" does more work than "The Styles Taking Over Your Feed."
- 2. **Fix the preheader immediately.** The JSON schema data should never reach the inbox. Drop in a real 80–100 character preheader that references the deal.
- 3. **Segment by past purchase behavior.** I've bought kids' shoes through Skechers. If they know that, the hero should be a family lifestyle shot or a dedicated kids section at the top — not a solo male model.
- 4. **Add a Kids module with BOGO callout.** Even one row showing light-up sneakers for girls and durable lace-ups for boys, with the BOGO applied, would change my conversion likelihood dramatically.
- 5. **Include a loyalty rewards callout.** Something like "Members earn 2x points on BOGO orders — this week only" would make me feel seen.
- 6. **Add a deadline.** Even a vague "offer ends May 11" creates urgency on a deal that currently has none.
- | Priority | Issue | Action |
- |---|---|---|
- | **Critical** | Empty first-name merge token | Add fallback value in ESP (e.g., `%%=IIF(EMPTY(FirstName), "there", FirstName)=%%`); re-audit segment for missing first-name data before next send |
- | **High** | 13 images over HTTP | Migrate `image.emails.skechers.com` CDN to HTTPS; update all `src` attributes to `https://` |
- | **High** | ink1000 pixel on HTTP | Change to `https://www.ink1000.com/...` or confirm provider supports HTTPS |
- | **High** | Return Path pixel — no protocol | Change to explicit `https://pixel.app.returnpath.net/...` |
- | **Medium** | Missing alt on product image `49468f73` | Add descriptive alt text |
- | **Low** | Duplicate media query blocks | Consolidate into a single `<style>` block to reduce parse overhead |
- | **Low** | UTM verification | Manually confirm UTM params on 2–3 click-through URLs before next campaign |

## Full review
---

## 1. Executive Summary

I'm staring at an email from Skechers and I genuinely cannot figure out who they thought they were sending this to. The whole thing is men's boat shoes and men's sneakers. There's a good BOGO deal buried in there, and sure, Skechers is a brand I actually buy, but I'm a mom shopping for a 5-year-old girl and a 9-year-old boy — and I'm going to scroll past every single one of these photos without feeling like any of this is for me. The subject line told me nothing useful, and whatever my inbox showed as the preview text was pure gibberish — literally looked like computer code. Not a great first impression. I'd probably open it because I recognize Skechers and I'm always hunting a BOGO, but I'd close it frustrated.

---

## 2. Business Impact Score (1-10)

**8/10**

- Sender is a brand I recognize and am subscribed to
- One concrete offer is visible: "BUY ONE, GET ONE 50% OFF on select styles" — right at the top of the hero
- Primary CTA is unambiguous: "SHOP NOW" button is clearly visible
- Visual hierarchy is clear — BOGO hero is the first thing the eye hits
- No visible render bugs — email displays cleanly, images load, text isn't broken
- Email reflects a current/seasonal feel — "Just Landed / What's Hot Right Now" language
- Offer feels honest — "on select styles" qualifier is present, no bait-and-switch vibe

**FALSE criteria:** Subject/hero does NOT reference my focus area (kids, women's comfort); demographic signals do NOT match my persona (every model and product showcase is male); no loyalty/member benefits visible anywhere.

---

## 3. What's Working

- **The BOGO is front and center.** "Buy One, Get One 50% Off" in the hero is the kind of deal that makes me stop regardless of what I'm doing with the kids. I notice it immediately.
- **The visual design is clean.** Images load, layout is structured, no obvious crashes. On my phone I can tap through without squinting.
- **Section CTAs are specific enough** — "Shop Boat Shoes," "Shop Casual Sneakers," "Shop Athletic Styles" — so I know what I'm clicking into.
- **The 25% Off Apparel callout** catches my eye briefly — if I ever shop Skechers clothing, that's a decent hook.
- **Bottom navigation links** (Women / Men / Kids / Clothing / New Arrivals) at least acknowledge that kids and women exist, even if the actual email doesn't.
- **Shop Now, Pay Later (Klarna/Afterpay)** is a nice trust signal for a price-sensitive shopper like me.

---

## 4. What's Weak

- **It's a men's email.** Every single product photo, every lifestyle shot, every hero model — male. I'm a mom of two who shops for herself last. This doesn't speak to me or my kids at all.
- **The preview text is completely broken.** What I saw in my inbox was raw JSON-LD schema markup: `[{ "@context": "http://schema.org/"...` That's the only thing shown next to the subject line. This is genuinely embarrassing. I'd assume it was a spam email for a split second.
- **The subject line wastes the BOGO.** "The Styles Taking Over Your Feed" doesn't tell me there's a discount. It sounds like an influencer caption, not a reason to open an email during naptime.
- **No kids' products appear anywhere** in the main body content. KIDS is a tiny lowercase text link near the footer. That's it. For someone like me, who is primarily browsing for her 5-year-old's velcro sneakers and her son's durable lace-ups, this email has zero relevance.
- **No loyalty mention.** I'm a Skechers rewards member and I watch my points. If there were bonus points tied to this BOGO, I'd probably buy something tonight. That's not here.
- **No urgency or deadline.** BOGO is compelling but there's no "ends Sunday" or "while supplies last" signal that would get me to act now versus close the tab and forget.

---

## 5. Recommendations

1. **Surface the BOGO in the subject line.** "BOGO 50% Off — Styles Just Landed" does more work than "The Styles Taking Over Your Feed."
2. **Fix the preheader immediately.** The JSON schema data should never reach the inbox. Drop in a real 80–100 character preheader that references the deal.
3. **Segment by past purchase behavior.** I've bought kids' shoes through Skechers. If they know that, the hero should be a family lifestyle shot or a dedicated kids section at the top — not a solo male model.
4. **Add a Kids module with BOGO callout.** Even one row showing light-up sneakers for girls and durable lace-ups for boys, with the BOGO applied, would change my conversion likelihood dramatically.
5. **Include a loyalty rewards callout.** Something like "Members earn 2x points on BOGO orders — this week only" would make me feel seen.
6. **Add a deadline.** Even a vague "offer ends May 11" creates urgency on a deal that currently has none.

---

## 6. Bottom Line

This is the right brand, with the right offer, sent to completely the wrong version of me. A BOGO deal at Skechers should have me adding three pairs of kids' shoes to the cart — that's exactly how I shop. Instead I got a men's lookbook with broken preview text. I'd open it out of habit, scroll down hoping to find kids' shoes, not find them fast enough, and close. They left money on the table.

---

## 7. Subject Line Analysis

- **Subject:** `The Styles Taking Over Your Feed`
- **Length:** 34 chars
- **Scores (1-10):** Clarity `4`, Curiosity `5`, Personalization `1`, Urgency `1`, Specificity `2`
- **Strengths:**
  - Under 50 chars, renders comfortably on mobile without truncation
  - Social-adjacent framing ("Your Feed") has mild scroll-stop energy
- **Weaknesses:**
  - BOGO 50% offer is completely invisible — the biggest hook in the email is not in the subject
  - Zero personalization, zero product category signal — could be from literally any fashion brand
- **Alt A:** `BOGO 50% Off: New Styles Just Landed for the Whole Family`
- **Alt B:** `Buy One, Get One 50% — including kids' new arrivals`

---

## 8. Preview Text Analysis

- **Preview:** `[{ "@context": "http://schema.org/", "@type": "Organization", "logo": "https://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/cf08f473-a0fa-46dd-b25d-e95a9abb53fb.png" },{...`
- **Length:** 200+ chars of raw JSON (truncated by inbox)
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - None. This is a production implementation error.
- **Weaknesses:**
  - JSON-LD schema markup is leaking into the preheader position, showing machine-readable code instead of human copy
  - Completely destroys inbox trust — looks like spam or a broken send to any reader
- **Alt A:** `BOGO 50% off is here — shop new arrivals for women, men & kids`
- **Alt B:** `Just landed: this season's must-haves, now buy one get one 50% off`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `5/10`
- **Signals counted:** Sender display name is recognizable (SKECHERS), subject is under 50 chars, no spam signals (no ALL CAPS / !!!), cadence feels right for a periodic Skechers promo
- **Rationale:** I recognize Skechers and I'm always looking for a deal, but the subject gives me no concrete reason to open and the preview text looks like a coding error — that combination makes me hesitate before tapping.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `7/10`
- **Signals counted:** Hero offer visible without scrolling, CTA copy is specific in body sections ("Shop Boat Shoes," "Shop Casual Sneakers"), offer reduces price (BOGO 50%), hero links to a specific category rather than homepage, brand voice is consistent and trusted, email renders without friction
- **Rationale:** The BOGO is strong enough that I'd probably click "Shop Now" hoping kids' and women's styles are included — but the male-only content makes it feel like I wandered into the wrong section of the store, and I'd likely bounce before adding anything to cart.

---

## 11. Evidence

- **Overall purpose:** New arrivals launch ("Just Landed: What's Hot Right Now") anchored to a BOGO 50% off sitewide promotion
- **Hero / primary value prop:** BOGO 50% off on select styles; lifestyle shot of a man in boat shoes; "Shop Now" CTA
- **Membership / benefits section:** None visible — no Skechers Elite, no rewards points callout anywhere in the email
- **Product discoverability modules:** Three category rows — Boat Shoes, Sneakers, Elevated Comfort — each with two product shots and a category CTA; a Best Sellers collage grid midway down; all skewing visibly male
- **Utility / secondary modules:** 25% Off Apparel section; navigation links for Women / Men / Kids / Clothing / New Arrivals; "Let's Get Texting" SMS opt-in; "Download the App"; Summer Pickup / curbside reference; Shop Now Pay Later (Klarna/Afterpay logos); Find a Store; social follow icons
- **Bugs / friction / clarity issues:** The preheader/preview text is the only visible issue — it renders as raw JSON-LD schema markup in the inbox preview, which is a significant implementation error. The email body itself renders cleanly with no visible broken images, overlapping text, or layout failures.

---

## Technical Audit

## Technical Audit — Skechers "The Styles Taking Over Your Feed" (2026-05-08)

---

### 1. Technical Summary

One confirmed broken experience (empty personalization token in greeting) and a pervasive HTTP image-serving issue that will cause image suppression in security-enforcing clients (Gmail, iOS Mail). All other infrastructure appears functional but warrants the specific callouts below.

---

### 2. Link & Tracking Issues

**HTTP tracking pixel — ink1000.com**
`http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` is served over plain HTTP. Modern clients that enforce HTTPS mixed-content rules will silently suppress this pixel, causing open-rate undercounting for this sender/ESP pairing.

**Return Path pixel — protocol-relative URL**
`pixel.app.returnpath.net/pixel.gif?r=964ce1dbf...` is written without a protocol (`http://` or `https://`). Depending on how the ESP renders this, it may resolve as a relative path (broken) or inherit `http://` context. Should be explicitly `https://`.

**27 click links skipped**
QA was unable to probe destination URLs — all route through `click.emails.skechers.com` redirect wrapper. UTM parameter presence and redirect chain integrity could not be verified (see Section 6).

**Krux/Salesforce beacons**
Three `beacon.krxd.net` pixels are present, including a user-match pixel exposing a hashed subscriber UID (`partner_uid=adf27fee...sha25`) and a raw subscriber ID (`partner_uid=122277199`). These are standard DMP sync pixels, but confirm PII-adjacent data is being transmitted to a third party on open.

---

### 3. Rendering & Accessibility

**HTTP image sources — 13 images affected**
The entire image library is served from `http://image.emails.skechers.com/...`. Gmail (since 2013), iOS Mail, and Outlook 2019+ proxy or block non-HTTPS image sources. Affected assets include the Skechers logo, app store badges, social icons, and at least one product image:

- `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png` (logo)
- `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-4651-4af3-bea2-61d1ae5db486.png` (unlabeled)
- + 11 footer/social images

All should be migrated to `https://`.

**Missing alt text — 2 images**
- `o.gif` (ink1000 open pixel) — alt="" is present but empty, acceptable for tracking pixels
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — no alt attribute at all; if this is a content image, screen readers will skip it or announce the filename

**Dual mobile/desktop content via CSS display toggling**
The template uses `.mobile-content`/`.desktop-content` classes with `display:none !important` toggling. Screen readers on some clients ignore `display:none` and will read both content trees, potentially doubling content for AT users.

**Duplicate responsive breakpoints**
Two `<style>` blocks define overlapping media queries (`max-width: 375px`, `max-width: 480px`, `max-width: 640px`). This is functional but creates maintenance risk and redundant specificity resolution.

---

### 4. Personalization & Merge Tokens

**FAIL — Empty greeting field**
QA confirms: `Greeting has empty name field (e.g. "Hi ,")`. A merge token for subscriber first name was not populated at send time. This is a broken experience affecting the full send cohort. The fallback value (e.g., "Hi there," or "Hi, [First Name]") was not configured in the ESP template.

No other unpopulated merge tokens were detected in the visible HTML, though the truncated source limits full coverage.

---

### 5. Compliance

**CAN-SPAM**
HTML is truncated — physical mailing address and unsubscribe mechanism are not visible in the provided source. These are standard Skechers ESP footer elements and presumed present, but cannot be confirmed from this excerpt.

**Authentication headers**
Not available from HTML source alone. SPF/DKIM/DMARC status for `emails.skechers.com` cannot be assessed without access to raw message headers. Recommend verifying via MX Toolbox or the ESP's authentication report.

**Third-party data transmission on open**
As noted in Section 2, a hashed subscriber email (`sha25` fingerprint) and a raw internal subscriber ID (`122277199`) are transmitted to `beacon.krxd.net` on pixel load. Ensure this is covered in the privacy policy and consent scope for the subscriber segment receiving this email.

---

### 6. Email-to-Site Continuity

Campaign identifier `MKG_US_NONPURCLICK_U_TREND_PROD_NONPURCH_05082026` is present in both the Krux impression pixel and the ink1000 open pixel, confirming consistent campaign tagging at the pixel level.

Click link UTM parameters could **not** be verified — all 27 links are wrapped in `click.emails.skechers.com` redirect URLs and were skipped by the HTTP prober. Manually spot-check 2–3 CTA destinations to confirm `utm_source`, `utm_medium`, and `utm_campaign` are appended correctly and land on in-stock product pages matching the promoted items.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **Critical** | Empty first-name merge token | Add fallback value in ESP (e.g., `%%=IIF(EMPTY(FirstName), "there", FirstName)=%%`); re-audit segment for missing first-name data before next send |
| **High** | 13 images over HTTP | Migrate `image.emails.skechers.com` CDN to HTTPS; update all `src` attributes to `https://` |
| **High** | ink1000 pixel on HTTP | Change to `https://www.ink1000.com/...` or confirm provider supports HTTPS |
| **High** | Return Path pixel — no protocol | Change to explicit `https://pixel.app.returnpath.net/...` |
| **Medium** | Missing alt on product image `49468f73` | Add descriptive alt text |
| **Low** | Duplicate media query blocks | Consolidate into a single `<style>` block to reduce parse overhead |
| **Low** | UTM verification | Manually confirm UTM params on 2–3 click-through URLs before next campaign |
## Recent history

- [[2026-05-07-don-t-miss-your-beauty-refresh]] — 7/10 (2026-05-07)
- [[2026-05-07-a-little-something-for-mom-and-you-with-bogo-50-off]] — 9/10 (2026-05-07)
- [[2026-05-05-select-ion-care-30-off]] — 7/10 (2026-05-05)

