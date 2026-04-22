---
slug: 2026-04-22-find-your-material-match-suede-canvas-or-leather
type: email
date: 2026-04-22
persona: walker
score: "4/10"
sender: SKECHERS
subject: Find Your Material Match - Suede, Canvas, or Leather
tags: [email, score-4, sender/skechers]
---
# Find Your Material Match - Suede, Canvas, or Leather
**Score:** 4/10 · **Type:** Email audit · **2026-04-22**
## Executive summary

- **From:** SKECHERS | **Subject:** Find Your Material Match - Suede, Canvas, or Leather | **Date:** 2026-04-22
- This one missed me. I'm a Slip-ins guy who shops comfort first — and this email organized the entire experience around fabric types I've never once thought about when buying shoes. Leather, canvas, suede — that's how a 30-year-old shops at a boutique, not how I think about it. I want to know if a shoe is comfortable, if it's easy to get on, and if it's on sale. The BOGO banner at the top got my attention, but then I kept scrolling and nothing spoke to me until I hit the "Slip Into Comfort" block near the bottom — which felt like an afterthought. To make matters worse, whatever was supposed to show in my inbox preview was completely garbled — raw code, basically. That alone makes me wonder if something went wrong with the email before I even opened it.
- The BOGO offer has real pull for someone price-conscious like me, but the editorial concept — organizing by material — doesn't match how I browse or buy. The Slip-ins I love are buried. The canvas section imagery looked like it was aimed at teenage girls, not 62-year-old guys. Half the real estate in this email doesn't apply to me, and the broken preview text is just unprofessional.

## What's working

- **BOGO 50% OFF banner is front and center.** First thing I see. That number makes me pause — it's a real incentive for someone watching their wallet.
- **"Slip Into Comfort" module exists.** It's there. Small, lower in the email, but it exists. That's my language.
- **Suede section imagery** is the most age-appropriate in the email — understated earth tones, relaxed silhouettes. I can picture myself in those.
- **The scroll layout is clean.** No clutter, easy enough to move through on a phone.

## What's weak

- **The canvas section imagery is completely wrong for me.** Bright neon colors, youth-fashion sneakers — I scrolled right past it. That wasn't pitched at a 62-year-old guy.
- **Materials as the organizing concept is backwards for comfort shoppers.** I don't start with "I want a suede shoe." I start with "I want something easy to slip on that doesn't hurt my feet." Organize by comfort tech or use case and I'm engaged. Organize by fabric and I'm confused.
- **No Skechers Plus recognition.** I'm a member. Treat me like one. There's no acknowledgment that I have points, special access, or a member benefit tied to this BOGO.
- **Slip Into Comfort is buried near the bottom.** That's my product category. It should be above the fold or at least in the second block — not an afterthought after three material sections.
- **No comfort technology callouts.** No mention of Air-Cooled Memory Foam, no Relaxed Fit callouts. Nothing that tells me these shoes are built for my lifestyle, not just my wardrobe.
- **Broken preview text.** Whatever was supposed to show up before I opened this looked like computer code in my inbox. That's a bad first impression — made me wonder if the email was even from Skechers.

## Recommendations

- 1. **Lead with Slip-ins or comfort tech for members with my profile.** I've shown you what I buy. Put that first.
- 2. **Reframe the concept from material to lifestyle.** "Whether you're heading out or slipping on for a walk" lands better for me than "leather vs. suede."
- 3. **Acknowledge the BOGO with a member angle.** "As a Skechers Plus member, your BOGO just goes further" — that's personal. That makes me feel known.
- 4. **Fix the preheader immediately.** The JSON code showing in my inbox is embarrassing and erodes trust before I even open.
- 5. **Pull the Suede section up and swap canvas position.** The suede imagery felt closest to my taste — that should come second, not third.
- 6. **Bigger CTA text on mobile.** "SHOP NOW" buttons are workable, but a larger tap area and slightly larger type would help someone reading on a phone without squinting.
- | Priority | Issue | Fix |
- |---|---|---|
- | **Critical** | All `image.emails.skechers.com` src URLs use `http://` | Migrate CDN to HTTPS or update all `src` attributes to use `https://` |
- | **Critical** | Return Path pixel missing protocol | Change `src="pixel.app.returnpath.net/..."` to `src="https://pixel.app.returnpath.net/..."` |
- | **High** | ink1000.com tracking pixel is HTTP | Switch to `https://` or confirm pixel vendor supports HTTPS |
- | **High** | SPF/DKIM status unverified | Pull raw headers from a seed inbox delivery and confirm pass for `emails.skechers.com` |
- | **Medium** | Two images missing `alt=""` | Add `alt=""` to `o.gif` and `49468f73-...png` |
- | **Medium** | `maximum-scale=1` + `-webkit-text-size-adjust: none` | Remove both; they block user zoom and fail WCAG 1.4.4 |
- | **Medium** | 26 CTA redirect destinations not probed | Run click-redirect probe to verify UTM params and landing page availability |
- | **Low** | Duplicate media query blocks | Consolidate into a single `<style>` block; remove the redundant 480px block or merge into the 375px rule |
- | **Low** | Krux audience-match pixels | Confirm subscriber consent covers third-party DMP data transfer |

## Full review
---

## Email Review — Walker Miles
**From:** SKECHERS | **Subject:** Find Your Material Match - Suede, Canvas, or Leather | **Date:** 2026-04-22

---

### 1. Executive Summary

This one missed me. I'm a Slip-ins guy who shops comfort first — and this email organized the entire experience around fabric types I've never once thought about when buying shoes. Leather, canvas, suede — that's how a 30-year-old shops at a boutique, not how I think about it. I want to know if a shoe is comfortable, if it's easy to get on, and if it's on sale. The BOGO banner at the top got my attention, but then I kept scrolling and nothing spoke to me until I hit the "Slip Into Comfort" block near the bottom — which felt like an afterthought. To make matters worse, whatever was supposed to show in my inbox preview was completely garbled — raw code, basically. That alone makes me wonder if something went wrong with the email before I even opened it.

---

### 2. Business Impact Score: 4/10

The BOGO offer has real pull for someone price-conscious like me, but the editorial concept — organizing by material — doesn't match how I browse or buy. The Slip-ins I love are buried. The canvas section imagery looked like it was aimed at teenage girls, not 62-year-old guys. Half the real estate in this email doesn't apply to me, and the broken preview text is just unprofessional.

---

### 3. What's Working

- **BOGO 50% OFF banner is front and center.** First thing I see. That number makes me pause — it's a real incentive for someone watching their wallet.
- **"Slip Into Comfort" module exists.** It's there. Small, lower in the email, but it exists. That's my language.
- **Suede section imagery** is the most age-appropriate in the email — understated earth tones, relaxed silhouettes. I can picture myself in those.
- **The scroll layout is clean.** No clutter, easy enough to move through on a phone.

---

### 4. What's Weak

- **The canvas section imagery is completely wrong for me.** Bright neon colors, youth-fashion sneakers — I scrolled right past it. That wasn't pitched at a 62-year-old guy.
- **Materials as the organizing concept is backwards for comfort shoppers.** I don't start with "I want a suede shoe." I start with "I want something easy to slip on that doesn't hurt my feet." Organize by comfort tech or use case and I'm engaged. Organize by fabric and I'm confused.
- **No Skechers Plus recognition.** I'm a member. Treat me like one. There's no acknowledgment that I have points, special access, or a member benefit tied to this BOGO.
- **Slip Into Comfort is buried near the bottom.** That's my product category. It should be above the fold or at least in the second block — not an afterthought after three material sections.
- **No comfort technology callouts.** No mention of Air-Cooled Memory Foam, no Relaxed Fit callouts. Nothing that tells me these shoes are built for my lifestyle, not just my wardrobe.
- **Broken preview text.** Whatever was supposed to show up before I opened this looked like computer code in my inbox. That's a bad first impression — made me wonder if the email was even from Skechers.

---

### 5. Recommendations

1. **Lead with Slip-ins or comfort tech for members with my profile.** I've shown you what I buy. Put that first.
2. **Reframe the concept from material to lifestyle.** "Whether you're heading out or slipping on for a walk" lands better for me than "leather vs. suede."
3. **Acknowledge the BOGO with a member angle.** "As a Skechers Plus member, your BOGO just goes further" — that's personal. That makes me feel known.
4. **Fix the preheader immediately.** The JSON code showing in my inbox is embarrassing and erodes trust before I even open.
5. **Pull the Suede section up and swap canvas position.** The suede imagery felt closest to my taste — that should come second, not third.
6. **Bigger CTA text on mobile.** "SHOP NOW" buttons are workable, but a larger tap area and slightly larger type would help someone reading on a phone without squinting.

---

### 6. Bottom Line

I'd probably open it because I saw "50% off" in the notification on my phone — not because the subject line excited me. Once inside, I'd scroll through quickly, pause at the Suede section, check the Slip Into Comfort block, and maybe click through if I recognized a shoe I liked. But the email didn't feel like it was written for me. It felt like a general catalog blast that happened to land in my inbox. I wouldn't forward this to anyone.

---

### 7. Subject Line Analysis

- **Subject:** `Find Your Material Match - Suede, Canvas, or Leather`
- **Length:** 52 characters
- **Scores (1-10):** Clarity `7`, Curiosity `4`, Personalization `2`, Urgency `2`, Specificity `7`
- **Strengths:**
  - Clear and literal — you know exactly what the email is about
  - Three concrete materials give the subject specificity
- **Weaknesses:**
  - "Material Match" is a style/fashion concept — doesn't resonate with comfort-first shoppers
  - Zero urgency, zero personalization, and the BOGO inside the email isn't telegraphed at all
- **Alt A:** `Walker, Your Next Slip-in Is 50% Off a Second Pair`
- **Alt B:** `BOGO 50% Off — Suede, Canvas & Leather Comfort Styles`

---

### 8. Preview Text Analysis

- **Preview:** `[{ "@context": "http://schema.org/", "@type": "Organization", "logo": "https://image.emails.skechers.com/...` *(none / leaking junk — raw JSON-LD schema markup)*
- **Length:** 130+ characters of machine code
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - None visible to a human reader
- **Weaknesses:**
  - Raw JSON-LD schema is leaking directly into the preheader — completely unreadable in the inbox
  - Actively undermines trust; looks like a broken/spam email before it's even opened
- **Alt A:** `Buy one, get one 50% off — shop leather, canvas, and suede styles now`
- **Alt B:** `BOGO 50% off this week. Find your fit in suede, canvas, or leather.`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `5/10`
- **Rationale:** I recognized the Skechers sender name and I'm a loyal member, so I give it a look — but "Find Your Material Match" doesn't make me curious. I buy shoes for comfort, not because I'm shopping a material category. The broken preview text in my inbox actually made me hesitate for a second, wondering if something was off.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `4/10`
- **Rationale:** Once inside, the BOGO banner keeps me scrolling, and if I spot a suede Slip-in I recognize, I'd click. But most of the email — especially the canvas section — felt aimed at someone younger. The Slip Into Comfort module is the one block that could have sealed a click, and it's too small and too far down.

---

### 11. Evidence

- **Overall purpose:** Promotional catalog email organized by material type (leather/vegan leather, canvas, suede), with an embedded BOGO 50% off offer.
- **Hero / primary value proposition:** "PREMIUM MATERIALS FOR EVERY LOOK" with a sub-headline referencing comfort and style. The BOGO banner rides above the hero but the two aren't connected — the deal floats separately from the editorial.
- **Membership / benefits section:** Absent. No Skechers Plus acknowledgment, no points reminder, no member-exclusive framing around the BOGO.
- **Product discoverability / recommendation modules:** Three material-based editorial blocks (Leather/Vegan Leather, Canvas, Suede), each with a "SHOP NOW" CTA. A fourth "SLIP INTO COMFORT" module appears below. A compact "SHOP ADDITIONAL STYLES" navigation row includes Women, Men, Kids, Clothing, New Arrivals, Sale.
- **Utility / secondary modules:** App download prompt, curbside pickup callout, buy-now-pay-later options (Afterpay, Klarna), Find a Store link, social follow icons.
- **Bugs / friction / clarity issues:**
  - Preview text is visibly broken JSON-LD schema markup — confirmed visible in inbox before open.
  - Canvas imagery skews heavily toward youth/fashion palette (bright neons, women's silhouettes) — the "MEN" audience is not clearly represented in that block.
  - The "SLIP INTO COMFORT" module is visually small relative to the material blocks — headline and CTA are noticeably less prominent.

---

## Technical Audit

## Technical Audit — Skechers "Find Your Material Match" (04-22-2026)

---

### 1. Technical Summary

All body images are served over HTTP rather than HTTPS, creating a pervasive mixed-content issue that will cause images to be blocked or proxied in every major email client. One third-party tracking pixel has a malformed URL (missing protocol prefix) and will silently fail to load.

---

### 2. Link & Tracking Issues

**Malformed Return Path pixel URL**
The inbox-placement beacon is missing its protocol prefix:
```
src="pixel.app.returnpath.net/pixel.gif?r=964ce1db..."
```
Email clients will treat this as a relative path, not a URL. The pixel will fail to load, breaking any Return Path/Validity inbox monitoring for this send.

**Third-party audience-match pixels firing in hidden div**
Three Krux/Salesforce DMP pixels fire on open, passing hashed subscriber identifiers to `beacon.krxd.net`:
```
partner_uid=9153f33fe5cdf59baf088bb835d3b39ef90f188bd8540a4faba92899227ced00
partner_uid=121173391
```
These are outbound data transfers to a third party. Confirm these are covered by the subscriber consent model and privacy policy.

**26 click-redirect links not probed**
All CTA links wrap through `click.emails.skechers.com`. Destination URL health and UTM parameter presence could not be verified (see §6).

---

### 3. Rendering & Accessibility

**HTTP image sources — 11 affected images**
Every image served from `image.emails.skechers.com` uses `http://`, not `https://`. Gmail, Outlook.com, and Apple Mail will proxy or block these:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-...png  (Skechers logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png  (decorative — no alt)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  (App Store badge)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...png  (Google Play badge)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/00100b23-...png  (Curbside Pickup)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/07cb60b5-...png  (AfterPay)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/fc08601a-...png  (Find A Store)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/b782e0aa-...png  (Instagram)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/a5c4cae0-...png  (Facebook)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/8c5738fc-...png  (YouTube)
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif                                 (tracking pixel)
```
The ink1000.com tracking pixel is also HTTP. This pixel additionally has no `alt` attribute.

**Missing alt text — 2 images**
- `o.gif` (ink1000.com tracking pixel) — no `alt` attribute at all
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — no `alt` attribute

Screen readers will announce the full filename for both. Decorative images should carry `alt=""`.

**`-webkit-text-size-adjust: none` + `maximum-scale=1`**
The global CSS applies `-webkit-text-size-adjust: none` to all elements (`*` selector), and the viewport meta sets `maximum-scale=1`. Together these prevent user-initiated text zoom on mobile — a WCAG 1.4.4 failure.

**Duplicate media query blocks**
The 375px and 640px breakpoints are declared twice in the `<head>` — once in the first `<style>` block, once in the second. The second `<style>` block at `max-width: 480px` partially overlaps. This is dead weight and risks specificity conflicts in parsing-strict clients.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens are visible in the truncated source. The Krux pixels carry what appear to be pre-resolved subscriber identifiers (`mi_u=8107766165`, hashed email). No issues found in the visible markup, but full source verification is needed given truncation.

---

### 5. Compliance

**SPF/DKIM status unknown**
The AgentMail relay did not capture `Authentication-Results` headers, so SPF/DKIM pass/fail cannot be confirmed. Sending domain is `emails.skechers.com`; alignment with the `From:` domain should be verified directly against mail headers received by a seed inbox.

**Unsubscribe and physical address**
The HTML source is truncated — CAN-SPAM-required physical mailing address and one-click unsubscribe link presence cannot be confirmed from the provided excerpt. Must verify against full source.

**Preheader suppression**
The preheader div applies `display:none !important` twice — once via a `<style>` block injected immediately after `<body>`, and once via inline style. This is redundant but not a compliance issue.

---

### 6. Email-to-Site Continuity

The campaign identifier `MKG_US_NONPURCLICK_U_MULTI_NONPURCH_EN_04222026` appears in two pixel parameters (`mi_ecmp`, `campaignid`), confirming campaign-level tracking is configured. However, because all 26 CTA links were wrapped in `click.emails.skechers.com` redirects and not probed, it cannot be confirmed that:
- UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`) are appended to landing page URLs
- Destination pages resolve and match the promoted material categories (suede/canvas/leather)

These should be spot-checked manually or via a redirect-following probe.

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| **Critical** | All `image.emails.skechers.com` src URLs use `http://` | Migrate CDN to HTTPS or update all `src` attributes to use `https://` |
| **Critical** | Return Path pixel missing protocol | Change `src="pixel.app.returnpath.net/..."` to `src="https://pixel.app.returnpath.net/..."` |
| **High** | ink1000.com tracking pixel is HTTP | Switch to `https://` or confirm pixel vendor supports HTTPS |
| **High** | SPF/DKIM status unverified | Pull raw headers from a seed inbox delivery and confirm pass for `emails.skechers.com` |
| **Medium** | Two images missing `alt=""` | Add `alt=""` to `o.gif` and `49468f73-...png` |
| **Medium** | `maximum-scale=1` + `-webkit-text-size-adjust: none` | Remove both; they block user zoom and fail WCAG 1.4.4 |
| **Medium** | 26 CTA redirect destinations not probed | Run click-redirect probe to verify UTM params and landing page availability |
| **Low** | Duplicate media query blocks | Consolidate into a single `<style>` block; remove the redundant 480px block or merge into the 375px rule |
| **Low** | Krux audience-match pixels | Confirm subscriber consent covers third-party DMP data transfer |
## Recent history

- [[2026-04-22-mystery-deal]] — 3/10 (2026-04-22)
- [[2026-04-22-why-does-everyone-love-crocs]] — 3/10 (2026-04-22)
- [[2026-04-21-new-arrivals-for-off-road]] — 2/10 (2026-04-21)

