---
slug: 2026-04-18-last-call-to-use-your-20-off-welcome-offer
type: email
date: 2026-04-18
persona: martha
score: "6/10"
sender: SKECHERS
subject: Last Call to use your 20% Off Welcome Offer!
tags: [email, score-6, sender/skechers]
---
# Last Call to use your 20% Off Welcome Offer!
**Score:** 6/10 · **Type:** Email audit · **2026-04-18**
## Executive summary

- This is a clean, functional welcome-series email that leads hard with a 20% off code and a visible CTA — which honestly, as someone who nearly forgot I even signed up, got my attention. But once I scroll past that hero, it loses me fast. Every product image is adult athletic wear, there's zero kids' content despite me shopping for two little ones, and the whole thing feels like it was blasted to a hundred thousand people with no idea who I am. The offer is good. The targeting is lazy.
- The discount alone will drive some clicks, but it's leaving money on the table by ignoring the family/kids angle and doing zero personalization.

## What's working

- **The hero is doing its job.** "Last Call! 20% OFF" in big bold text with the actual code (`WEL20-ZLS2L7QDPW`) right there and a clear SHOP NOW button — no hunting for the deal. On mobile this scans instantly.
- **Buy Now, Pay Later options.** Afterpay and Klarna in the footer? Yes. As a mom watching her budget, that matters. I noticed it.
- **Skechers Plus pitch is tidy.** The three-icon membership block (member-only offers, free shipping + 90-day returns, birthday surprises) is visually digestible and speaks directly to how I shop — I'm a rewards program person.
- **No broken elements.** Everything renders cleanly. Images load, text is legible, no obvious display bugs.

## What's weak

- **Zero kids' content in the product grid.** I literally shop KIDS more than any other category and the six product thumbnails are all adult slip-ons and walking shoes. The nav says KIDS — prove it. Show me something.
- **Product thumbnails are tiny.** Six shoes crammed into two rows — on a phone screen I genuinely cannot tell what I'm looking at without squinting. These need to breathe.
- **"Welcome Offer" is impersonal.** They know my name (I signed up with my email), but they opened with a generic greeting and a generic code. A 34-year-old millennial who's been conditioned by Amazon and Target knows what good personalization feels like. This isn't it.
- **The lifestyle section ("Best Sellers / New Arrivals") shows adults running and walking.** Cool for them, irrelevant for me. Not one image of a kid, a family, or anything that signals Skechers knows I'm shopping for more than myself.
- **Fine print is dense and tiny.** Asterisks everywhere on the 20% offer but the explanation is buried at the very bottom in micro-text. What's excluded? I shouldn't have to reach for my reading glasses to find out.

## Recommendations

- 1. **Add a kids' product row.** Even a single "Shop Kids' Styles" banner with one or two cute kid shoes would make this feel relevant to me. Bundle it — "Grab one for you, one for the kids."
- 2. **Lead with my name or a personal hook.** "Martha, your 20% is about to expire" hits differently than "Last Call."
- 3. **Simplify the product grid.** Four larger tiles instead of six tiny ones. Let me see what the shoe actually looks like.
- 4. **Make the exclusions scannable.** One bolded line near the CTA: "Excludes X, Y, Z." I'll trust you more, not less.
- 5. **Promote the Plus membership higher.** Free shipping + 90-day returns is genuinely compelling for a repeat buyer — put it closer to the hero, not buried below the fold.
- | Priority | Issue | Fix |
- |---|---|---|
- | P0 | Doubled-domain URL `skechers.com/www.Skechers.com` | Fix merge tag in SFMC template before next send |
- | P1 | 13 images served over HTTP | Update CDN/image library base URL to `https://image.emails.skechers.com` |
- | P1 | Open-tracking pixel over HTTP (`ink1000.com`) | Migrate to HTTPS endpoint or switch to ESP-native open tracking |
- | P2 | 4 images missing `alt` text | Add descriptive alt to product/hero images; `alt=""` on decorative ones |
- | P2 | SPF/DKIM unverified | Capture raw headers on next seed send and confirm DMARC alignment |
- | P3 | UTM attribution unconfirmed | Resolve one click-redirect URL and verify UTM params are appended |
- | P3 | Krux identity sync pixel | Confirm GDPR/CCPA consent scope covers cross-site DMP sync |

## Full review
### 1. Executive Summary

This is a clean, functional welcome-series email that leads hard with a 20% off code and a visible CTA — which honestly, as someone who nearly forgot I even signed up, got my attention. But once I scroll past that hero, it loses me fast. Every product image is adult athletic wear, there's zero kids' content despite me shopping for two little ones, and the whole thing feels like it was blasted to a hundred thousand people with no idea who I am. The offer is good. The targeting is lazy.

---

### 2. Business Impact Score: **6/10**

The discount alone will drive some clicks, but it's leaving money on the table by ignoring the family/kids angle and doing zero personalization.

---

### 3. What's Working

- **The hero is doing its job.** "Last Call! 20% OFF" in big bold text with the actual code (`WEL20-ZLS2L7QDPW`) right there and a clear SHOP NOW button — no hunting for the deal. On mobile this scans instantly.
- **Buy Now, Pay Later options.** Afterpay and Klarna in the footer? Yes. As a mom watching her budget, that matters. I noticed it.
- **Skechers Plus pitch is tidy.** The three-icon membership block (member-only offers, free shipping + 90-day returns, birthday surprises) is visually digestible and speaks directly to how I shop — I'm a rewards program person.
- **No broken elements.** Everything renders cleanly. Images load, text is legible, no obvious display bugs.

---

### 4. What's Weak

- **Zero kids' content in the product grid.** I literally shop KIDS more than any other category and the six product thumbnails are all adult slip-ons and walking shoes. The nav says KIDS — prove it. Show me something.
- **Product thumbnails are tiny.** Six shoes crammed into two rows — on a phone screen I genuinely cannot tell what I'm looking at without squinting. These need to breathe.
- **"Welcome Offer" is impersonal.** They know my name (I signed up with my email), but they opened with a generic greeting and a generic code. A 34-year-old millennial who's been conditioned by Amazon and Target knows what good personalization feels like. This isn't it.
- **The lifestyle section ("Best Sellers / New Arrivals") shows adults running and walking.** Cool for them, irrelevant for me. Not one image of a kid, a family, or anything that signals Skechers knows I'm shopping for more than myself.
- **Fine print is dense and tiny.** Asterisks everywhere on the 20% offer but the explanation is buried at the very bottom in micro-text. What's excluded? I shouldn't have to reach for my reading glasses to find out.

---

### 5. Recommendations

1. **Add a kids' product row.** Even a single "Shop Kids' Styles" banner with one or two cute kid shoes would make this feel relevant to me. Bundle it — "Grab one for you, one for the kids."
2. **Lead with my name or a personal hook.** "Martha, your 20% is about to expire" hits differently than "Last Call."
3. **Simplify the product grid.** Four larger tiles instead of six tiny ones. Let me see what the shoe actually looks like.
4. **Make the exclusions scannable.** One bolded line near the CTA: "Excludes X, Y, Z." I'll trust you more, not less.
5. **Promote the Plus membership higher.** Free shipping + 90-day returns is genuinely compelling for a repeat buyer — put it closer to the hero, not buried below the fold.

---

### 6. Bottom Line

I'd probably click the SHOP NOW button because 20% off is legitimately good and I've been meaning to grab myself a pair of slip-ons for daycare pickup. But I wouldn't forward this to anyone, I wouldn't screenshot it, and I wouldn't remember it tomorrow. It got the functional job done. It missed the relational one.

---

### 7. Subject Line Analysis

- **Subject:** `Last Call to use your 20% Off Welcome Offer!`
- **Length:** 43 characters
- **Scores (1-10):** Clarity `8`, Curiosity `3`, Personalization `2`, Urgency `7`, Specificity `7`
- **Strengths:**
  - Clear offer value (20%) and scarcity signal ("Last Call") in one line
  - Short enough to render fully on mobile without truncation
- **Weaknesses:**
  - Zero personalization — "Welcome Offer" is the most generic framing possible
  - No curiosity gap; tells me exactly what it is with no reason to want more
- **Alt A:** `Martha, your 20% expires soon — don't leave it`
- **Alt B:** `Last chance: 20% off everything (including kids' styles)`

---

### 8. Evidence

- **Overall purpose:** Welcome series email with a time-limited 20% off first-purchase code to drive conversion from email signup to first order.
- **Hero / primary value proposition:** Large "Last Call! 20% OFF YOUR FIRST PURCHASE*" block with promo code and a "SHOP NOW" button. Visually dominant and clear.
- **Membership / benefits section:** Skechers Plus block below the product grid with three iconographic benefits (member deals, free shipping/90-day returns, birthday surprises) and a "JOIN NOW" CTA. Well-designed but positioned too far down.
- **Product discoverability / recommendation modules:** Two rows of ~6 small product thumbnails (adult slip-ons and sneakers) with product names beneath. "Best Sellers" and "New Arrivals" labeled with lifestyle photos of adults. No kids' products anywhere in the visual flow despite KIDS appearing in the category nav.
- **Utility / secondary modules:** Text opt-in (SKECHERS to 83928), app download badges, curbside pickup, AfterPay/Klarna callout, Find a Store, and social icons. Functional but the lower third gets cluttered.
- **Bugs / friction / clarity issues:** No visible render bugs. Fine print is very small and dense — the offer exclusions are functionally unreadable at standard mobile zoom.

---

## Technical Audit

## Technical Audit — Skechers "Last Call: 20% Off Welcome Offer"

**From:** no-reply@emails.skechers.com | **Date:** 2026-04-18

---

### 1. Technical Summary

The email has one broken-experience bug (doubled-domain URL) and a systemic HTTP image-serving problem affecting ~13 assets. Deliverability authentication could not be verified through the relay.

---

### 2. Link & Tracking Issues

**[FAIL] Doubled-domain merge error**
- URL: `http://www.skechers.com/www.Skechers.com`
- A template merge variable resolved into the base URL instead of a path, producing a broken destination. Any CTA pointing here will 404.
- **Action required:** Identify the source template block and correct the merge tag (likely `%%=RedirectTo(CloudPagesURL(...))=%%` or equivalent SFMC syntax).

**25 tracking links skipped** — click-redirect domains (`click.emails.skechers.com`) not probed; assumed functional but unverified in this pass.

---

### 3. Rendering & Accessibility

**HTTP image sources (13 assets)** — the following asset base path is served over HTTP, not HTTPS:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/
```
Affected images include the Skechers logo, app store badges, AfterPay logo, social icons, and several content images. iOS Mail and Chrome-based clients with mixed-content blocking will silently suppress these images.

**Missing `alt` text on 4 images:**
- `bcc16007...jpg` — likely a hero/product image; missing alt leaves screen readers with no context
- `49468f73...png`, `00100b23...png`, `fc08601a...png` — footer/content images, also missing alt

**HTTP tracking pixel:**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif
```
Mixed-content; will be blocked in secure mail clients. This breaks open-rate measurement for a segment of recipients.

**Open-pixel missing alt:** `o.gif` has no `alt=""` — should be explicitly empty for accessibility compliance.

**`<meta http-equiv>` malformed:** `<meta content="text/html; charset=utf-8" />` is missing the required `http-equiv="Content-Type"` attribute. Most clients tolerate this but it is invalid XHTML 1.0 Transitional per the declared doctype.

---

### 4. Personalization & Merge Tokens

No unrendered merge tokens (e.g. `%%FIRST_NAME%%`, `{{{token}}}`) visible in the truncated source. The doubled-domain URL (section 2) is consistent with a merge variable that resolved to a full URL string instead of a relative path — the root cause is a personalization/template error, not a hardcoded typo.

---

### 5. Compliance

**CAN-SPAM:** Physical address and unsubscribe mechanism not visible in the truncated source — assumed present in footer (standard Skechers template); cannot confirm from available HTML.

**Authentication:**
- `Authentication-Results` header not found via AgentMail relay — SPF/DKIM pass/fail status unknown for this capture.
- Sending domain is `emails.skechers.com`; DMARC alignment requires SPF or DKIM to align to this subdomain or `skechers.com`. Cannot confirm without header data.
- **Recommended:** Re-capture with full headers or verify via MX Toolbox against `emails.skechers.com`.

**Krux/Salesforce DMP pixel:**
```
https://beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_sha25&partner_uid=adf27fee...
```
The `partner_uid` value appears to be a SHA-256 hashed email. Under GDPR/CCPA this constitutes cross-site identity syncing — confirm consent basis is captured before send to EU/CA recipients.

---

### 6. Email-to-Site Continuity

No UTM parameters observed on CTA links in the visible HTML. Links route through `click.emails.skechers.com` (click-redirect), which may append UTMs server-side — unverifiable without resolving the redirect chain. If UTMs are not appended at redirect resolution, campaign attribution in GA4/Adobe will be lost and traffic will appear as direct.

The broken-domain URL (section 2) represents a complete continuity failure for whichever CTA it backs.

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| P0 | Doubled-domain URL `skechers.com/www.Skechers.com` | Fix merge tag in SFMC template before next send |
| P1 | 13 images served over HTTP | Update CDN/image library base URL to `https://image.emails.skechers.com` |
| P1 | Open-tracking pixel over HTTP (`ink1000.com`) | Migrate to HTTPS endpoint or switch to ESP-native open tracking |
| P2 | 4 images missing `alt` text | Add descriptive alt to product/hero images; `alt=""` on decorative ones |
| P2 | SPF/DKIM unverified | Capture raw headers on next seed send and confirm DMARC alignment |
| P3 | UTM attribution unconfirmed | Resolve one click-redirect URL and verify UTM params are appended |
| P3 | Krux identity sync pixel | Confirm GDPR/CCPA consent scope covers cross-site DMP sync |
## Recent history

- [[2026-04-18-bogo-50-off-your-go-to-spring-picks-e06a33d8-2c35-4cb3-87c8-]] — 5/10 (2026-04-18)
- [[2026-04-16-loved-reviewed-and-ready-for-your-closet-abc03e52-37dd-4270-8885-]] — 6/10 (2026-04-16)
- [[2026-04-15-spring-styles-bogo-50-off-the-perfect-pair]] — 5/10 (2026-04-15)

