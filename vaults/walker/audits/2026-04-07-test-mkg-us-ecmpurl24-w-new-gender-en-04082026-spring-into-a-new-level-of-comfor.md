---
slug: 2026-04-07-test-mkg-us-ecmpurl24-w-new-gender-en-04082026-spring-into-a-new-level-of-comfor
type: email
date: 2026-04-07
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_ECMPURL24_W_NEW_GENDER_EN_04082026🌱 Spring into a new level of comfort"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_ECMPURL24_W_NEW_GENDER_EN_04082026🌱 Spring into a new level of comfort
**Score:** 5/10 · **Type:** Email audit · **2026-04-07**
## Executive summary

- A clean, category-navigation-forward email targeting women with a spring refresh message. The promotional hook ("Buy One Get One 50% Off") is present but undersells itself — it lives in a small banner at the top rather than being the headline. The email functions more as a product catalog than a promotional event, which creates a disconnect: there's a real offer here, but the email doesn't build urgency or emotional momentum around it.
- Competent execution with a wasted opportunity. The BOGO offer is the strongest conversion lever in this email and it's buried. The category structure is useful but generic, and the creative lacks a seasonal "spring" punch despite the subject line promising it.

## What's working

- **Hero module is clear and on-brand.** "NEW for HER" with a featured women's sneaker shot communicates the gender targeting and newness story effectively.
- **Category architecture is logical.** Casual Sneakers → Slip-Ins → Sandals → Wide Fit follows a sensible priority order (bestsellers to seasonal to niche needs).
- **Visual consistency.** Product photography is clean and uniform across modules; white backgrounds keep it professional.
- **Wide Fit callout is a smart inclusion.** It serves an underserved need and signals inclusivity without making it feel like an afterthought.
- **Footer utility is complete.** Account, shop-by-gender, clothing, new arrivals, and sale links round out navigation well.

## What's weak

- **The BOGO offer is invisible.** "Buy One Get One 50% Off" sits in a small red banner above the hero. It reads as a site-wide ribbon, not the primary offer driving this email. The subject line and hero make zero reference to a deal — a reader who skims past the top strip misses the entire incentive.
- **"Spring into a new level of comfort" is undelivered.** The subject line promises seasonal energy; the email delivers a product grid. There's no spring color story, no seasonal imagery, and no copy that connects the products to the season.
- **Hero CTA is generic.** "Shop Women's" is the default fallback CTA — no offer, no urgency, no category specificity tied to what's being highlighted.
- **Category modules are product-light.** Each category (Casuals, Slip-Ins, Sandals, Wide Fit) shows one image and a "Shop [Category]" CTA. No price points, no "new" badges, no bestseller callouts — nothing to create preference between clicking now vs. later.
- **Slip-Ins has no differentiation.** It gets the same template treatment as Casuals and Sandals despite being a proprietary Skechers technology that deserves a stronger sell.

## Recommendations

- 1. **Promote the BOGO offer into the hero.** Make it the headline — "New for Her. Buy One, Get One 50% Off." The offer and the newness story aren't in conflict; combine them.
- 2. **Add price anchors or savings callouts to category modules.** Even "from $65" or "Save up to $XX" gives the reader a reason to click through a specific category rather than bouncing.
- 3. **Give Slip-Ins a dedicated sell line.** One sentence on the no-lace convenience positions it above generic category browsing.
- 4. **Add spring color or seasonal framing.** A banner or product colorway story using pastels/warm tones would justify the subject line and increase perceived relevance.
- 5. **Sharpen the hero CTA to tie back to the offer.** "Shop the BOGO Event" or "Shop New Arrivals — BOGO 50% Off" converts better than the generic fallback.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | `[Test]:` in subject | Remove before production send |
- | **P0** | `partner_uid=7187828` static value | Replace with dynamic subscriber ID merge token in Krux beacon |
- | **P1** | All `image.emails.skechers.com` assets on HTTP | Re-publish or repoint to `https://image.emails.skechers.com/...` — same domain, protocol change only |
- | **P1** | `ink1000.com` open pixel on HTTP | Switch to HTTPS endpoint or confirm vendor provides one; re-verify `mi_u` is a merge token |
- | **P1** | ReturnPath pixel missing protocol | Add `https://` to `src` attribute |
- | **P2** | 4 images missing alt text | Add descriptive alt text to `49468f73`, `00100b23`, `fc08601a` PNGs; use `alt=""` on o.gif tracking pixel |
- | **P2** | Authentication headers unresolved | Confirm DKIM signing active for `emails.skechers.com` in ESP sending profile |
- | **P3** | `-webkit-text-size-adjust: none` globally | Scope only to elements requiring fixed size; remove from global `*` rule |

## Full review
## 1. Executive Summary

A clean, category-navigation-forward email targeting women with a spring refresh message. The promotional hook ("Buy One Get One 50% Off") is present but undersells itself — it lives in a small banner at the top rather than being the headline. The email functions more as a product catalog than a promotional event, which creates a disconnect: there's a real offer here, but the email doesn't build urgency or emotional momentum around it.

---

## 2. Business Impact Score: 5/10

Competent execution with a wasted opportunity. The BOGO offer is the strongest conversion lever in this email and it's buried. The category structure is useful but generic, and the creative lacks a seasonal "spring" punch despite the subject line promising it.

---

## 3. What's Working

- **Hero module is clear and on-brand.** "NEW for HER" with a featured women's sneaker shot communicates the gender targeting and newness story effectively.
- **Category architecture is logical.** Casual Sneakers → Slip-Ins → Sandals → Wide Fit follows a sensible priority order (bestsellers to seasonal to niche needs).
- **Visual consistency.** Product photography is clean and uniform across modules; white backgrounds keep it professional.
- **Wide Fit callout is a smart inclusion.** It serves an underserved need and signals inclusivity without making it feel like an afterthought.
- **Footer utility is complete.** Account, shop-by-gender, clothing, new arrivals, and sale links round out navigation well.

---

## 4. What's Weak

- **The BOGO offer is invisible.** "Buy One Get One 50% Off" sits in a small red banner above the hero. It reads as a site-wide ribbon, not the primary offer driving this email. The subject line and hero make zero reference to a deal — a reader who skims past the top strip misses the entire incentive.
- **"Spring into a new level of comfort" is undelivered.** The subject line promises seasonal energy; the email delivers a product grid. There's no spring color story, no seasonal imagery, and no copy that connects the products to the season.
- **Hero CTA is generic.** "Shop Women's" is the default fallback CTA — no offer, no urgency, no category specificity tied to what's being highlighted.
- **Category modules are product-light.** Each category (Casuals, Slip-Ins, Sandals, Wide Fit) shows one image and a "Shop [Category]" CTA. No price points, no "new" badges, no bestseller callouts — nothing to create preference between clicking now vs. later.
- **Slip-Ins has no differentiation.** It gets the same template treatment as Casuals and Sandals despite being a proprietary Skechers technology that deserves a stronger sell.

---

## 5. Recommendations

1. **Promote the BOGO offer into the hero.** Make it the headline — "New for Her. Buy One, Get One 50% Off." The offer and the newness story aren't in conflict; combine them.
2. **Add price anchors or savings callouts to category modules.** Even "from $65" or "Save up to $XX" gives the reader a reason to click through a specific category rather than bouncing.
3. **Give Slip-Ins a dedicated sell line.** One sentence on the no-lace convenience positions it above generic category browsing.
4. **Add spring color or seasonal framing.** A banner or product colorway story using pastels/warm tones would justify the subject line and increase perceived relevance.
5. **Sharpen the hero CTA to tie back to the offer.** "Shop the BOGO Event" or "Shop New Arrivals — BOGO 50% Off" converts better than the generic fallback.

---

## 6. Bottom Line

This email will drive some category traffic but leaves conversion on the table. The BOGO offer is real and valuable — it just isn't working because the email never presents it as a reason to act now. Fix the offer hierarchy and this email earns a 7+.

---

## 7. Evidence

**Overall purpose:** Drive women's footwear sales through new arrival category browsing, backed by a BOGO 50% off sitewide promotion.

**Hero / primary value proposition:** "NEW for HER" headline with a featured white sneaker. Strong gender and newness signal, but the promotional offer in the red top banner is visually disconnected from the hero and gets no reinforcement in the main body copy or CTA.

**Membership / benefits section:** Not present. No loyalty/Skechers Plus integration visible.

**Product discoverability / recommendation modules:** Four category modules — Casual Sneakers, Slip-Ins, Sandals, Wide Fit — each with a single lifestyle/product image and one CTA. Functional but minimal; no individual product tiles, prices, or editorial context.

**Utility / secondary modules:** Footer contains a full secondary nav (Account, Men, Kids, Clothing, New Arrivals, Sale) plus "Get Our App," "Find a Store," and social icons. Well-organized and useful.

**Bugs / friction / clarity issues:** None visible. No broken images, overlapping text, or empty fields detected in the render.

---

## Technical Audit

## Technical Audit — Skechers Spring Gender Email
**Campaign:** `MKG_US_ECMPURL24_W_NEW_GENDER_EN_04082026` | **Reviewed:** 2026-04-07

---

### 1. Technical Summary
This is a test-flagged send (subject prefix `[Test]:`) with a systemic HTTP/mixed-content image problem across all hosted assets on `image.emails.skechers.com`, plus a third-party open-tracking pixel served over plain HTTP. Authentication header status is unresolved at relay level.

---

### 2. Link & Tracking Issues

**Hardcoded subscriber ID in Krux beacon:**
```
https://beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_subid&partner_uid=7187828
```
`partner_uid=7187828` appears to be a static test subscriber ID rather than a dynamic merge token. In production this would send every recipient's impression tagged to a single subscriber.

**Ink1000 open pixel over HTTP:**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=9012945763&mi_ecmp=MKG_US_ECMPURL24_W_NEW_GENDER_EN_04082026
```
Plain HTTP — will be blocked or upgraded by modern clients, breaking open measurement for this vendor. `mi_u=9012945763` may also be a hardcoded test value rather than a dynamic subscriber token.

**ReturnPath pixel — missing protocol:**
```
pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499
```
No `http://` or `https://` prefix in the `src` attribute. This renders as a relative path and will 404 in all clients.

**29 click-tracking links** all route through `click.emails.skechers.com` with encrypted `qs=` payloads — destination URLs cannot be statically verified. No broken link confirmation from QA (probes skipped), so this is a coverage gap rather than a confirmed failure.

---

### 3. Rendering & Accessibility

**Systemic HTTP image serving** — all assets on `image.emails.skechers.com` use `http://`:
- Logo: `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png`
- App Store, Google Play, social icons (Instagram, Twitter, Facebook, Pinterest, YouTube), AfterPay badge, and additional unnamed assets — 13 HTTP image URLs confirmed by QA

iOS Mail (iOS 15+), Gmail, and Outlook.com all enforce HTTPS for remote content. These images will either be blocked or trigger mixed-content warnings.

**Missing alt text** on 4 images:
| File | URL |
|---|---|
| `o.gif` | `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` |
| `49468f73-4651-4af3-bea2-61d1ae5db486.png` | `http://image.emails.skechers.com/.../m/11/49468f73...` |
| `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png` | `http://image.emails.skechers.com/.../m/11/00100b23...` |
| `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png` | `http://image.emails.skechers.com/.../m/11/fc08601a...` |

Missing alt text on the three hosted images is a WCAG 2.1 failure and degrades the images-blocked fallback experience.

**`-webkit-text-size-adjust: none`** declared globally in `<style>`. This suppresses iOS font scaling for all elements, which can fail WCAG 1.4.4 (Resize Text) and may affect readability at system-level accessibility font sizes.

---

### 4. Personalization & Merge Tokens

No unresolved merge token strings (e.g., `%%FIELD%%` or `{{field}}`) are visible in the truncated source. However, as noted above, `partner_uid=7187828` and `mi_u=9012945763` in tracking pixels appear static rather than dynamically substituted — confirm these are properly templatized in the ESP before production send.

---

### 5. Compliance

**Subject line contains `[Test]:` prefix** — must be removed before production deployment.

**Authentication header unresolved:** The AgentMail relay did not expose `Authentication-Results` headers, so SPF/DKIM pass/fail cannot be confirmed from this review. Verify DKIM signing is active for `emails.skechers.com` before send.

CAN-SPAM physical address and unsubscribe link presence cannot be confirmed from the truncated HTML provided. These must be verified in the full source — standard Skechers footers typically include both, but this is unverified here.

---

### 6. Email-to-Site Continuity

Click URLs use encrypted `qs=` parameters through `click.emails.skechers.com`, preventing static UTM inspection. Campaign ID `MKG_US_ECMPURL24_W_NEW_GENDER_EN_04082026` is consistently present across all tracking pixels, indicating campaign tagging is wired correctly at the pixel level. UTM parameter pass-through to landing pages requires live click verification.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | `[Test]:` in subject | Remove before production send |
| **P0** | `partner_uid=7187828` static value | Replace with dynamic subscriber ID merge token in Krux beacon |
| **P1** | All `image.emails.skechers.com` assets on HTTP | Re-publish or repoint to `https://image.emails.skechers.com/...` — same domain, protocol change only |
| **P1** | `ink1000.com` open pixel on HTTP | Switch to HTTPS endpoint or confirm vendor provides one; re-verify `mi_u` is a merge token |
| **P1** | ReturnPath pixel missing protocol | Add `https://` to `src` attribute |
| **P2** | 4 images missing alt text | Add descriptive alt text to `49468f73`, `00100b23`, `fc08601a` PNGs; use `alt=""` on o.gif tracking pixel |
| **P2** | Authentication headers unresolved | Confirm DKIM signing active for `emails.skechers.com` in ESP sending profile |
| **P3** | `-webkit-text-size-adjust: none` globally | Scope only to elements requiring fixed size; remove from global `*` rule |
## Recent history

- [[2026-04-07-test-mkg-us-nonpur180-w-new-nonpurch-en-04082026-v2-spring-into-comfort-like-you]] — 5/10 (2026-04-07)
- [[2026-04-07-test-mkg-us-nonpur180-w-new-nonpurch-en-04082026-spring-into-comfort-like-you-ve]] — 5/10 (2026-04-07)
- [[2026-04-07-test-mkg-us-na-u-golf-perf-en-04082026-v2find-the-right-shoe-for-your-game]] — 6/10 (2026-04-07)

