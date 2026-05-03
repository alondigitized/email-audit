---
slug: 2026-05-03-best-sellers-no-brainers
type: email
date: 2026-05-03
persona: walker
score: "7/10"
sender: SKECHERS
subject: Best Sellers & No Brainers
tags: [email, score-7, sender/skechers]
---
# Best Sellers & No Brainers
**Score:** 7/10 · **Type:** Email audit · **2026-05-03**
## Executive summary

- The BOGO offer and the Hands Free Slip-ins section caught my eye once I was in the email, and that's something. But getting me to open in the first place? That preview text was a wall of gibberish code — looked like my phone was broken. And once inside, the hero is a young woman holding a basketball. That's not me. I had to scroll past generic "best sellers" content before I found anything that felt like it was speaking to a guy my age who just wants a comfortable shoe he can slip on without bending over. The bones are okay, the execution is sloppy.

## What's working

- The BOGO 50% off banner is the first thing I see — that's money in my pocket and I notice it immediately. Hard to miss. The "HANDS FREE SLIP-INS" section further down is exactly what I'm after, and the CTA copy is specific: "SHOP HANDS FREE SLIP-INS." That's my language. The WALKING tab is there too, right next to CASUALS and RUNNING — at least they know I'm not doing 10Ks. The email renders clean, no broken images, no scrambled layout. I can tap the buttons without accidentally hitting something else. That matters on a phone.

## What's weak

- The hero image is a young woman in an athletic pose. That's not me. She looks like she's in a perfume ad, not shopping for comfortable walking shoes. If I'm not reading carefully, my first instinct is "wrong inbox." The "Winning Pairs" headline sounds like sports marketing copy, not comfort-first messaging for someone who just wants to get through a Costco run without his feet hurting.
- No Skechers Plus mention anywhere. I'm a member. Where's my price? Where's my points balance? That's a missed handshake with a loyal customer.
- The "COZY FIT" section sits below Slip-ins with another shoe photo but I can barely tell what differentiates it — no quick explanation of what "Cozy Fit" means technology-wise. And "25% OFF APPAREL" — I'm not shopping for clothes here. That whole block feels like filler for someone else.
- The additional styles grid at the bottom — WOMEN, MEN, KIDS, CLOTHING, NEW ARRIVALS, SALE — buries MEN in the middle of a list. I should be the first link, not the second.

## Recommendations

- **Lead with a men's model or at least a mixed-gender hero** — I don't need to see myself exactly, but a 60-something guy in casual Slip-ins would land differently than a basketball athlete.
- **Surface Skechers Plus benefits** — even a line like "Plus members: your BOGO stacks with your points" would make me feel seen as a loyal customer.
- **Fix the preview text** — the JSON-LD code leaking into the inbox preview is a technical embarrassment that actively hurts open rates (more on this below).
- **Move MEN to the top of the additional styles grid**, or make it the first dedicated tab.
- **Add a one-liner on what Cozy Fit means** — "extra-cushioned, room-to-breathe fit" would tell me if it's worth investigating.
- | Priority | Issue | Action |
- |---|---|---|
- | Critical | All `image.emails.skechers.com` assets served over HTTP | Enable HTTPS on the image CDN subdomain and update all `src` values |
- | Critical | HTTP tracking pixels (ink1000, Return Path) | Obtain HTTPS endpoints from vendors or replace with HTTPS equivalents |
- | High | QA tool summary bug | Fix summary aggregation — 14 `[WARN]` lines must not roll up as "0 warnings" |
- | High | 26 click links unprobed | Run full destination-URL probe to verify UTM params and offer alignment |
- | Medium | `-webkit-text-size-adjust: none` | Change to `100%` in the `* {}` rule |
- | Medium | Missing `alt` on content image `49468f73...png` | Add descriptive alt text |
- | Medium | Plaintext `partner_uid` to Krux DMP | Confirm this is covered by active consent; prefer hashed value to match the companion beacon |
- | Low | Malformed `<meta>` tags | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` |
- | Low | Duplicate CSS breakpoint blocks | Consolidate 375px and 640px rules into a single `<style>` block |

## Full review
---

## Walker Miles Reviews: "Best Sellers & No Brainers" — Skechers

---

### 1. Executive Summary

The BOGO offer and the Hands Free Slip-ins section caught my eye once I was in the email, and that's something. But getting me to open in the first place? That preview text was a wall of gibberish code — looked like my phone was broken. And once inside, the hero is a young woman holding a basketball. That's not me. I had to scroll past generic "best sellers" content before I found anything that felt like it was speaking to a guy my age who just wants a comfortable shoe he can slip on without bending over. The bones are okay, the execution is sloppy.

---

### 2. Business Impact Score

**7/10**

- Sender (Skechers) is a brand I recognize and am subscribed to
- One concrete offer is clearly visible — BOGO 50% off in the banner at the top
- Primary CTA ("SHOP BEST SELLERS") is a clearly labeled button
- Visual hierarchy is reasonable — banner offer → hero → category sections
- No visible render bugs — email looks clean and loads properly
- Email feels current, not stale or off-season
- The Slip-ins section is present with a dedicated CTA ("SHOP HANDS FREE SLIP-INS")

Not counted: Hero model is female and young (demographic mismatch), no Skechers Plus member benefit shown, subject line doesn't reference comfort/slip-ins/men's category.

---

### 3. What's Working

The BOGO 50% off banner is the first thing I see — that's money in my pocket and I notice it immediately. Hard to miss. The "HANDS FREE SLIP-INS" section further down is exactly what I'm after, and the CTA copy is specific: "SHOP HANDS FREE SLIP-INS." That's my language. The WALKING tab is there too, right next to CASUALS and RUNNING — at least they know I'm not doing 10Ks. The email renders clean, no broken images, no scrambled layout. I can tap the buttons without accidentally hitting something else. That matters on a phone.

---

### 4. What's Weak

The hero image is a young woman in an athletic pose. That's not me. She looks like she's in a perfume ad, not shopping for comfortable walking shoes. If I'm not reading carefully, my first instinct is "wrong inbox." The "Winning Pairs" headline sounds like sports marketing copy, not comfort-first messaging for someone who just wants to get through a Costco run without his feet hurting.

No Skechers Plus mention anywhere. I'm a member. Where's my price? Where's my points balance? That's a missed handshake with a loyal customer.

The "COZY FIT" section sits below Slip-ins with another shoe photo but I can barely tell what differentiates it — no quick explanation of what "Cozy Fit" means technology-wise. And "25% OFF APPAREL" — I'm not shopping for clothes here. That whole block feels like filler for someone else.

The additional styles grid at the bottom — WOMEN, MEN, KIDS, CLOTHING, NEW ARRIVALS, SALE — buries MEN in the middle of a list. I should be the first link, not the second.

---

### 5. Recommendations

- **Lead with a men's model or at least a mixed-gender hero** — I don't need to see myself exactly, but a 60-something guy in casual Slip-ins would land differently than a basketball athlete.
- **Surface Skechers Plus benefits** — even a line like "Plus members: your BOGO stacks with your points" would make me feel seen as a loyal customer.
- **Fix the preview text** — the JSON-LD code leaking into the inbox preview is a technical embarrassment that actively hurts open rates (more on this below).
- **Move MEN to the top of the additional styles grid**, or make it the first dedicated tab.
- **Add a one-liner on what Cozy Fit means** — "extra-cushioned, room-to-breathe fit" would tell me if it's worth investigating.

---

### 6. Bottom Line

I'd probably open it because I know Skechers and the subject line isn't offensive. But I wouldn't feel like they sent this email *to me* — I'd feel like I happened to receive it. The Slip-ins section saves it from being a complete miss. I might tap that one CTA. The BOGO is legitimately good and clear. But Skechers knows I'm a Plus member and a Slip-ins buyer — they could have leaned into that and didn't.

---

### 7. Subject Line Analysis

- **Subject:** `Best Sellers & No Brainers`
- **Length:** 27 characters
- **Scores (1-10):** Clarity `6`, Curiosity `5`, Personalization `1`, Urgency `2`, Specificity `3`
- **Strengths:**
  - Short, mobile-friendly, no spam triggers
  - "No Brainers" has mild hook quality — makes me curious what they're calling obvious
- **Weaknesses:**
  - Zero mention of an offer, price, category, or product — a best-sellers email could be anything
  - No personalization or segment signal — reads like it was sent to every address on the list
- **Alt A:** `BOGO 50% Off: Our Best-Selling Slip-ins`
- **Alt B:** `These Sell Out Fast — And They're Buy One, Get One`

---

### 8. Preview Text Analysis

- **Preview:** `[{ "@context": "http://schema.org/", "@type": "Organization", "logo": "https://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/cf08f473-a0fa-46dd-b25d-e95a9abb53fb.png" },{ "@context":`
- **Length:** ~200+ characters of raw JSON-LD markup
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - None. There is nothing to commend here.
- **Weaknesses:**
  - Structured data schema markup is bleeding directly into the inbox preheader — looks like a software crash to me
  - Destroys any chance of lift from a complementary preheader; first impression in the inbox is broken
- **Alt A:** `Buy one, get one 50% off — shop Hands Free Slip-ins and top-rated walking styles.`
- **Alt B:** `Your best sellers are waiting — plus BOGO 50% off today only.`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `5/10`
- **Signals counted:** Sender display name recognizable (SKECHERS), subject under 50 characters, no spam signals (no ALL-CAPS, no exclamation stacking), cadence feels appropriate
- **Rationale:** I recognize Skechers and the subject line won't scare me off, but "Best Sellers & No Brainers" tells me nothing specific and the preview text is broken code — that combo doesn't pull me in. I open mostly out of brand habit, not excitement.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `6/10`
- **Signals counted:** Hero offer (BOGO 50% off) visible without scrolling in the top banner, CTA copy is specific for Slip-ins ("SHOP HANDS FREE SLIP-INS"), offer reduces price, brand voice is consistent and trusted, no friction in the email render
- **Rationale:** The Slip-ins CTA is doing real work here — it's specific to what I actually buy. The BOGO is legitimately motivating. What keeps this from being a 7 or 8 is that the primary hero CTA ("SHOP BEST SELLERS") is generic and skews female, so I have to self-select to the right section rather than being guided there.

---

### 11. Evidence

- **Overall purpose:** Promote best-selling styles and the BOGO 50% off sitewide offer
- **Hero / primary value proposition:** "The Winning Pairs" — tried, tested, top-rated styles with a BOGO 50% offer in a persistent banner. Hero model is female/athletic, hero CTA is "SHOP BEST SELLERS"
- **Membership / benefits section:** None visible. No Skechers Plus acknowledgment anywhere in the email
- **Product discoverability / recommendation modules:** Three category tabs (CASUALS, WALKING, RUNNING) under hero; dedicated Hands Free Slip-ins block; Cozy Fit block; 25% Off Apparel block; WOMEN/MEN/KIDS/CLOTHING/NEW ARRIVALS/SALE text link grid
- **Utility / secondary modules:** Download the app, Curbside Pickup, Afterpay/Klarna payment options, Find a Store — all present in footer
- **Bugs / friction / clarity issues:** The preview text is visibly broken JSON-LD schema markup leaking into the inbox — confirmed visible in the inbox header of the screenshot. Everything else in the rendered email body appears clean with no broken images or layout issues

---

## Technical Audit

## Technical Audit — Skechers "Best Sellers & No Brainers" (2026-05-03)

---

### 1. Technical Summary

Systemic HTTP image sourcing across all hosted assets creates real mixed-content blocking risk in Gmail and modern clients. The automated QA tool has a summary-aggregation bug — it reports "0 warnings" while simultaneously emitting 14 `[WARN]` lines; results were not treated as passing.

---

### 2. Link & Tracking Issues

**26 click-redirect links unprobed.** QA skipped all ESP-wrapped destination URLs, so landing page health, UTM presence, and offer alignment are unverified.

**Plaintext subscriber ID leaked to third-party DMP.**
```
https://beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_subid
  &partner_uid=121173391
```
`partner_uid=121173391` is a raw internal subscriber identifier passed to Krux (Salesforce DMP). The companion beacon passes a SHA-256 hashed value — this plaintext variant is inconsistent and may exceed consent scope depending on privacy policy.

**Two HTTP tracking pixels will be blocked in Gmail.**
- `http://pixel.app.returnpath.net/pixel.gif` — Return Path inbox monitoring pixel
- `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` — secondary open-tracking pixel

Gmail rewrites `src` attributes through its HTTPS proxy; HTTP-only origins fail silently, producing false open-rate data.

---

### 3. Rendering & Accessibility

**HTTP image sourcing — systemic.** All content images are served from `http://image.emails.skechers.com/`. Affected assets include logo, product photos, app-store badges, social icons, and utility images (AfterPay, Curbside, Find A Store). Gmail's HTTPS image proxy will attempt rewriting; if the CDN doesn't support HTTPS on this subdomain, images render broken. Evidence (sample):
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png  (logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-4651-4af3-bea2-61d1ae5db486.png
```

**`-webkit-text-size-adjust: none` blocks iOS zoom.**
```css
* { -webkit-text-size-adjust: none; }
```
Value should be `100%`. `none` prevents user-initiated font scaling, which is an accessibility violation (WCAG 1.4.4).

**Missing `alt` attributes on two images.**
- `o.gif` (ink1000 tracking pixel) — should be `alt=""`
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — content image with no alt; needs descriptive text

**Malformed `<meta>` tags.**
```html
<meta content="text/html; charset=utf-8" />         <!-- missing http-equiv="Content-Type" -->
<meta content="IE=Edge" />                           <!-- missing http-equiv="X-UA-Compatible" -->
```
Outlook and legacy clients may fail to apply charset or compatibility mode without the `http-equiv` attribute.

**Breakpoint fragmentation.** Five separate breakpoints (375px, 480px, 640px, 680px, 768px) with duplicate rule sets for 375px and 640px split across two `<style>` blocks. Increases parse weight and creates maintenance risk for conflicting overrides.

---

### 4. Personalization & Merge Tokens

No unrendered merge tokens visible in the source — all tokens appear to have resolved correctly.

The plaintext `partner_uid=121173391` (noted above) is a rendered value, not a broken token, but should be reviewed for data governance implications.

---

### 5. Compliance

**Cannot fully verify from truncated source.** The unsubscribe mechanism and physical mailing address (required by CAN-SPAM §5) are in the footer section that was cut off. These must be confirmed present in the full render.

**Sender authentication** cannot be assessed from HTML — DKIM/SPF/DMARC alignment for `emails.skechers.com` requires header inspection of a received copy.

**`no-reply@` sender.** CAN-SPAM requires a functioning reply address or a working opt-out link in the email body. A `no-reply` sender satisfies this only if a compliant unsubscribe link exists; that link must be confirmed in the full HTML.

The Return Path/Validity pixel confirms active inbox-placement monitoring — good deliverability hygiene.

---

### 6. Email-to-Site Continuity

UTM parameter verification is blocked: all 26 click-redirect links were skipped by the QA probe. Cannot confirm:
- UTM source/medium/campaign are present and match campaign ID `MKG_US_NONPURCLICK_U_BEST_NONPURCH_EN_05032026`
- Destination pages reflect the BOGO 50% off / "Best Sellers" offer in the preheader

This is the highest-priority gap requiring a separate full-link probe run.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| Critical | All `image.emails.skechers.com` assets served over HTTP | Enable HTTPS on the image CDN subdomain and update all `src` values |
| Critical | HTTP tracking pixels (ink1000, Return Path) | Obtain HTTPS endpoints from vendors or replace with HTTPS equivalents |
| High | QA tool summary bug | Fix summary aggregation — 14 `[WARN]` lines must not roll up as "0 warnings" |
| High | 26 click links unprobed | Run full destination-URL probe to verify UTM params and offer alignment |
| Medium | `-webkit-text-size-adjust: none` | Change to `100%` in the `* {}` rule |
| Medium | Missing `alt` on content image `49468f73...png` | Add descriptive alt text |
| Medium | Plaintext `partner_uid` to Krux DMP | Confirm this is covered by active consent; prefer hashed value to match the companion beacon |
| Low | Malformed `<meta>` tags | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` |
| Low | Duplicate CSS breakpoint blocks | Consolidate 375px and 640px rules into a single `<style>` block |
## Recent history

- [[2026-05-03-last-day-bogo-50-off-shoes]] — 8/10 (2026-05-03)
- [[2026-05-03-meet-the-icons-samba-gazelle-and-spezial]] — 2/10 (2026-05-03)
- [[2026-05-02-new-for-the-season-color-refresh]] — 2/10 (2026-05-02)

