---
slug: 2026-04-24-our-best-selling-style-now-for-all-ages
type: email
date: 2026-04-24
persona: walker
score: "4/10"
sender: SKECHERS
subject: Our Best-Selling Style, Now for All Ages
tags: [email, score-4, sender/skechers]
---
# Our Best-Selling Style, Now for All Ages
**Score:** 4/10 · **Type:** Email audit · **2026-04-24**
## Executive summary

- Alright, so I opened this one up and the first thing I see is a "Buy One, Get One 50% Off" banner — okay, that gets my attention because I'm always looking to stretch a dollar. But then I scroll down and the whole thing is screaming "ENTIRE FAMILY" at me. Women, kids, kids again, sandals... where's my stuff? I'm a 62-year-old guy who buys Skechers because my feet don't lie to me anymore, and this email treated me like I was shopping for the whole household. There's a Men's section — but it's sandwiched between Women and Kids and the shoes shown are lace-ups, not the slip-ins I actually buy. No mention of my Plus membership, no comfort tech callout, nothing that says "hey Walker, this is for you." Felt like a Black Friday circular, not a message to a loyal customer.
- The deal is real, but the targeting isn't. A BOGO offer buried inside a family blast for a 62-year-old Boomer male who wants slip-ins is a missed conversion. I might click once out of curiosity about the deal, but I'm not browsing Women's or Kids' shoes.

## What's working

- **The BOGO offer is front and center.** "Buy One, Get One 50% Off" banner right at the top — I spotted that immediately and it made me keep scrolling. Price-conscious me appreciates that they led with the deal.
- **Men's section exists.** At least they included a Men's section with actual shoes. The dark casual sneakers they showed look reasonably comfortable and wearable.
- **Layout is clean and readable.** Each section has a clear header label and a button. On my phone I could tap those without squinting too hard, which I appreciate.
- **Utility section at the bottom is useful.** Curbside Pickup and Find a Store are the kind of options that matter to me — I don't always want to wait on shipping.

## What's weak

- **This is a family email, not a men's email.** The hero is literally "FAN-FAVORITE STYLE FOR THE ENTIRE FAMILY." Women lead the product stack. Kids show up twice. Men are in the middle. For a 62-year-old guy, this feels like I accidentally opened my daughter-in-law's email.
- **Zero slip-in or comfort tech mention.** That's why I'm a Skechers customer. "Hands Free Slip-ins," "Air-Cooled Memory Foam," "ARCH FIT" — none of that is visible anywhere. The shoes shown in Men's are lace-ups. Not for me.
- **No Plus member acknowledgment.** I've been a Skechers Plus member long enough that I expect them to know my name. This email treats me like a cold prospect.
- **Glide Step and Cozy Fit modules are intriguing but underdeveloped.** Those two sections near the bottom sound like they could be right up my alley — but there's no copy explaining what they are. Just a category photo and a "Shop Now." Not enough to make me click.
- **The BOGO fine print isn't visible.** I can see "sign off + a single pair" near the top but that language is confusing. What does "sign off" mean? Is this a members-only deal? It's too vague and I'd hesitate.

## Recommendations

- 1. **Separate the men's send from the family blast.** I shouldn't be looking at Women's and Kids shoes when I open a Skechers email. A men's-targeted version of this BOGO offer would convert me a lot faster.
- 2. **Lead Men's with slip-ins.** If you know I buy Hands Free Slip-ins, show me slip-ins in the Men's hero. That's table stakes personalization.
- 3. **Explain the BOGO terms more clearly.** "Sign off + a single pair" reads like a typo or truncated fine print on mobile. Spell it out so I know what I'm actually getting.
- 4. **Give Glide Step and Cozy Fit a one-line description.** I don't know what those are from a category photo. One line — "lightweight slip-on built for all-day comfort" — and I'd click immediately.
- 5. **Acknowledge the Plus membership.** Even a "Members, here's your exclusive BOGO" would make me feel seen instead of blasted.
- | Priority | Item |
- |---|---|
- | P0 | Fix Return Path pixel — add `https://` prefix to `src="pixel.app.returnpath.net/pixel.gif?r=..."` |
- | P0 | Upgrade all `image.emails.skechers.com` assets to HTTPS — contact ESP/CDN team to enforce HTTPS on the image subdomain |
- | P0 | Upgrade `http://www.ink1000.com/` tracking pixel to HTTPS |
- | P1 | Add `http-equiv="Content-Type"` to charset meta; add `http-equiv="X-UA-Compatible"` to IE meta |
- | P1 | Add descriptive `alt` text to `49468f73...png` content image |
- | P1 | Confirm SPF/DKIM authentication is passing at the MTA level (not visible in relay capture) |
- | P1 | Audit Krux `partner_uid=121173391` — confirm this is a resolved dynamic token, not a hardcoded static value |
- | P2 | Scope `-webkit-text-size-adjust: none` away from the `*` selector — target specific layout containers only |
- | P2 | Probe a sample of the 26 click links through the redirect chain to confirm UTM parameters are appended to destination URLs |
- | P2 | Consolidate duplicate `@media` breakpoint blocks into a single `<style>` tag |

## Full review
---

## 1. Executive Summary

Alright, so I opened this one up and the first thing I see is a "Buy One, Get One 50% Off" banner — okay, that gets my attention because I'm always looking to stretch a dollar. But then I scroll down and the whole thing is screaming "ENTIRE FAMILY" at me. Women, kids, kids again, sandals... where's my stuff? I'm a 62-year-old guy who buys Skechers because my feet don't lie to me anymore, and this email treated me like I was shopping for the whole household. There's a Men's section — but it's sandwiched between Women and Kids and the shoes shown are lace-ups, not the slip-ins I actually buy. No mention of my Plus membership, no comfort tech callout, nothing that says "hey Walker, this is for you." Felt like a Black Friday circular, not a message to a loyal customer.

---

## 2. Business Impact Score: 4/10

The deal is real, but the targeting isn't. A BOGO offer buried inside a family blast for a 62-year-old Boomer male who wants slip-ins is a missed conversion. I might click once out of curiosity about the deal, but I'm not browsing Women's or Kids' shoes.

---

## 3. What's Working

- **The BOGO offer is front and center.** "Buy One, Get One 50% Off" banner right at the top — I spotted that immediately and it made me keep scrolling. Price-conscious me appreciates that they led with the deal.
- **Men's section exists.** At least they included a Men's section with actual shoes. The dark casual sneakers they showed look reasonably comfortable and wearable.
- **Layout is clean and readable.** Each section has a clear header label and a button. On my phone I could tap those without squinting too hard, which I appreciate.
- **Utility section at the bottom is useful.** Curbside Pickup and Find a Store are the kind of options that matter to me — I don't always want to wait on shipping.

---

## 4. What's Weak

- **This is a family email, not a men's email.** The hero is literally "FAN-FAVORITE STYLE FOR THE ENTIRE FAMILY." Women lead the product stack. Kids show up twice. Men are in the middle. For a 62-year-old guy, this feels like I accidentally opened my daughter-in-law's email.
- **Zero slip-in or comfort tech mention.** That's why I'm a Skechers customer. "Hands Free Slip-ins," "Air-Cooled Memory Foam," "ARCH FIT" — none of that is visible anywhere. The shoes shown in Men's are lace-ups. Not for me.
- **No Plus member acknowledgment.** I've been a Skechers Plus member long enough that I expect them to know my name. This email treats me like a cold prospect.
- **Glide Step and Cozy Fit modules are intriguing but underdeveloped.** Those two sections near the bottom sound like they could be right up my alley — but there's no copy explaining what they are. Just a category photo and a "Shop Now." Not enough to make me click.
- **The BOGO fine print isn't visible.** I can see "sign off + a single pair" near the top but that language is confusing. What does "sign off" mean? Is this a members-only deal? It's too vague and I'd hesitate.

---

## 5. Recommendations

1. **Separate the men's send from the family blast.** I shouldn't be looking at Women's and Kids shoes when I open a Skechers email. A men's-targeted version of this BOGO offer would convert me a lot faster.
2. **Lead Men's with slip-ins.** If you know I buy Hands Free Slip-ins, show me slip-ins in the Men's hero. That's table stakes personalization.
3. **Explain the BOGO terms more clearly.** "Sign off + a single pair" reads like a typo or truncated fine print on mobile. Spell it out so I know what I'm actually getting.
4. **Give Glide Step and Cozy Fit a one-line description.** I don't know what those are from a category photo. One line — "lightweight slip-on built for all-day comfort" — and I'd click immediately.
5. **Acknowledge the Plus membership.** Even a "Members, here's your exclusive BOGO" would make me feel seen instead of blasted.

---

## 6. Bottom Line

The deal is the only thing that kept me scrolling. But the email is built for a family shopper, not a 62-year-old guy who wants slip-ins and comfort tech. I might hit the Men's section once to poke around, but I'm not converting on this version. Fix the targeting and I'd be a much easier click.

---

## 7. Subject Line Analysis

- **Subject:** `Our Best-Selling Style, Now for All Ages`
- **Length:** 38 characters
- **Scores (1-10):** Clarity `6`, Curiosity `4`, Personalization `2`, Urgency `2`, Specificity `3`
- **Strengths:**
  - Clean and readable — no gimmicks or emoji clutter, which I can respect
  - "Best-Selling" signals social proof without being pushy
- **Weaknesses:**
  - "For All Ages" is the opposite of targeted — it tells me this is a mass blast, not something for me
  - No mention of the BOGO deal, which is the strongest hook in the email; the subject is burying the lead
- **Alt A:** `BOGO 50% Off: Our Best-Selling Style Is Back for Men`
- **Alt B:** `Men's Favorite Is On Sale — Buy One, Get One 50% Off`

---

## 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — raw JSON-LD schema markup rendered as the preheader (`[{ "@context": "http://schema.org/", "@type": "Organization", "logo": "https://image.emails.skechers.com/...`)
- **Length:** ~200+ characters of garbage
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - None. This is broken.
- **Weaknesses:**
  - The preheader is structured data code, not human-readable text — any inbox that shows preview text (Gmail, Apple Mail, Outlook) shows raw JSON to the reader
  - Paired with a weak subject line, this actively kills open rates — if I see code in my inbox preview I assume it's spam or a broken email
- **Alt A:** `Buy one pair, get one 50% off — Men's styles included. Shop the deal now.`
- **Alt B:** `BOGO 50% off our fan-favorite style. Shop men's now — offer ends soon.`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `4/10`
- **Rationale:** "Now for All Ages" tells me this is a family blast before I even open it — not exactly a hook for a 62-year-old guy shopping for himself. The broken preview text showing raw code would make me hesitate and wonder if the email is even legitimate. I know Skechers, so I'd probably open it eventually, but not right away and not with any excitement.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `3/10`
- **Rationale:** Once I'm inside, the BOGO banner is the only thing pushing me toward a click — but the Men's section shows lace-ups, not slip-ins, and there's no comfort tech mentioned anywhere. The Glide Step and Cozy Fit modules sound promising but give me nothing to go on. I'd probably tap Men's once out of habit and leave if I don't see slip-ins immediately.

---

## 11. Evidence

- **Overall purpose:** Promote a BOGO 50% off offer on what Skechers calls a "fan-favorite" style, framed as a family-wide campaign covering Women, Men, and Kids.
- **Hero / primary value proposition:** "FAN-FAVORITE STYLE FOR THE ENTIRE FAMILY" with a BOGO 50% off banner above it. Body copy mentions the style is available across women, men, and kids. SHOP NOW CTA present.
- **Membership / benefits section:** None visible. No Plus member callout, no loyalty points mention, no personalized greeting anywhere in the email.
- **Product discoverability / recommendation modules:** Three gender/age segments (Women, Men, Kids) each with a product photo and category CTA. Below that, four additional modules: Cozy Fit, Glide Step, Kids (again), and Sandals — each with a photo and Shop Now button. No product names, prices, or comfort descriptors are visible in any module.
- **Utility / secondary modules:** Text nav links for Women, Men, Kids, Clothing, New Arrivals, Sale. Below that: Download the App, Curbside Pickup, Shop Now Pay Later (via Zip/Afterpay logos), Find a Store. Social follow section with platform icons.
- **Bugs / friction / clarity issues:** The BOGO header text includes "SIGN OFF + A SINGLE PAIR" which is truncated or confusingly worded on mobile — it's unclear what action is required. The preheader text (JSON schema data) is the most significant rendering failure visible from the inbox side, though once inside the email the body renders cleanly.

---

## Technical Audit

## Technical Audit — Skechers "Best-Selling Style, Now for All Ages" (2026-04-24)

---

### 1. Technical Summary

The email has a systemic HTTP (non-HTTPS) image protocol issue affecting all hosted content assets, a broken tracking pixel URL (missing protocol), and two malformed `<meta>` tags. Core table-based structure and responsive media queries are functional, but the HTTP issues will trigger blocking or mixed-content warnings in Gmail and most modern clients.

---

### 2. Link & Tracking Issues

**26 click links** routed through `click.emails.skechers.com` (Salesforce Marketing Cloud) — not directly probed; UTM coverage unverifiable from source alone.

**5 tracking pixels identified:**

| Pixel | Domain | Protocol | Issue |
|---|---|---|---|
| SFMC open pixel | `click.emails.skechers.com` | HTTPS | OK |
| Krux user-match (SHA-256) | `beacon.krxd.net` | HTTPS | OK |
| Krux user-match (subid) | `beacon.krxd.net` | HTTPS | `partner_uid=121173391` appears static — verify this is a resolved merge token, not a hardcoded fallback |
| Krux ad impression | `beacon.krxd.net` | HTTPS | OK |
| Return Path inbox monitoring | `pixel.app.returnpath.net` | **Missing** | `src="pixel.app.returnpath.net/pixel.gif?r=..."` — no protocol prefix; browser/client treats this as a relative path. Pixel will fail to load entirely. |
| ink1000.com open tracking | `www.ink1000.com` | **HTTP** | Will be blocked by Gmail |

**Return Path pixel broken URL** (confirmed in source):
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" width="1" height="1" />
```
Missing `https://` — this is a broken asset, not just a protocol warning.

---

### 3. Rendering & Accessibility

**HTTP images (13 confirmed):** All assets hosted on `image.emails.skechers.com` and `www.ink1000.com` use `http://` — Gmail blocks these silently; Outlook may prompt a security warning.

Affected asset domains:
- `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/` (logo)
- `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/` (all footer icons: App Store, Google Play, social, Curbside Pickup, AfterPay, Find A Store)
- `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` (tracking pixel)

**Missing alt text (2 images):**
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — content image with no `alt`; screen readers get nothing
- `o.gif` (ink1000) — tracking pixel, `alt=""` is acceptable here; low severity

**Malformed meta tags (2):**
```html
<!-- Missing http-equiv="Content-Type" -->
<meta content="text/html; charset=utf-8" />

<!-- Missing http-equiv="X-UA-Compatible" -->
<meta content="IE=Edge" />
```
Both will be ignored by conforming parsers. Charset declaration may fall back to client default in edge cases.

**Accessibility — text resize:**
```css
* { -webkit-text-size-adjust: none; }
```
Applied globally. Prevents user-initiated text scaling. Violates WCAG 1.4.4 (Resize Text, AA). Scope should be limited to specific elements, not `*`.

**Duplicate media query breakpoints:** `@media only screen and (max-width: 375px)` and `@media only screen and (max-width: 480px)` each appear in two separate `<style>` blocks. Rule ordering is deterministic but maintenance-risky and harder to audit. Merge into a single block.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (e.g., `%%field%%`) visible in the truncated source — substitution appears to have run.

**Flag:** Krux subid pixel contains `partner_uid=121173391` as an apparent literal integer. If this is the rendered email for a specific recipient, it may be correct. If the template sends this static value to all recipients, Krux audience data will be corrupted (all impressions attributed to one subscriber). Verify the SFMC AMPscript or personalization string backing this parameter.

---

### 5. Compliance

**SPF/DKIM:** Authentication-Results header not present in the relay capture. SPF/DKIM pass/fail status unconfirmed. Deliverability risk is unknown.

**CAN-SPAM / unsubscribe:** HTML is truncated — physical mailing address and unsubscribe mechanism not visible in source provided. Cannot confirm or deny compliance from this sample. These must be verified against the full render.

**Third-party data sharing:** Krux pixels transmit a subscriber identifier (SHA-256 hash of email + numeric ID) to `beacon.krxd.net` (Salesforce DMP). Ensure the privacy policy disclosed at time of opt-in covers cross-domain audience matching.

---

### 6. Email-to-Site Continuity

Campaign ID `MKG_US_NONPURCLICK_U_CATEGORY_NONPURCH_EN_04242026` appears consistently across the Krux impression pixel and ink1000 pixel — internally consistent.

**UTM parameters on the 26 click links:** Cannot confirm coverage without probing `click.emails.skechers.com` redirect destinations. The click-tracking wrapper may or may not append UTM params to destination URLs. This needs a live probe or redirect chain inspection against a sample of links.

**Landing page alignment:** Not verifiable from source alone.

---

### 7. Recommendations

| Priority | Item |
|---|---|
| P0 | Fix Return Path pixel — add `https://` prefix to `src="pixel.app.returnpath.net/pixel.gif?r=..."` |
| P0 | Upgrade all `image.emails.skechers.com` assets to HTTPS — contact ESP/CDN team to enforce HTTPS on the image subdomain |
| P0 | Upgrade `http://www.ink1000.com/` tracking pixel to HTTPS |
| P1 | Add `http-equiv="Content-Type"` to charset meta; add `http-equiv="X-UA-Compatible"` to IE meta |
| P1 | Add descriptive `alt` text to `49468f73...png` content image |
| P1 | Confirm SPF/DKIM authentication is passing at the MTA level (not visible in relay capture) |
| P1 | Audit Krux `partner_uid=121173391` — confirm this is a resolved dynamic token, not a hardcoded static value |
| P2 | Scope `-webkit-text-size-adjust: none` away from the `*` selector — target specific layout containers only |
| P2 | Probe a sample of the 26 click links through the redirect chain to confirm UTM parameters are appended to destination URLs |
| P2 | Consolidate duplicate `@media` breakpoint blocks into a single `<style>` tag |
## Recent history

- [[2026-04-24-10-off]] — 3/10 (2026-04-24)
- [[2026-04-24-choose-your-mach]] — 3/10 (2026-04-24)
- [[2026-04-23-need-new-nike]] — 3/10 (2026-04-23)

