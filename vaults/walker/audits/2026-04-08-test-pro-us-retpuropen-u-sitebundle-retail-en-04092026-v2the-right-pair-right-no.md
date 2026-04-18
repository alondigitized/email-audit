---
slug: 2026-04-08-test-pro-us-retpuropen-u-sitebundle-retail-en-04092026-v2the-right-pair-right-no
type: email
date: 2026-04-08
persona: walker
score: "4/10"
sender: SKECHERS
subject: "[Test]: PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04092026_V2The right pair, right now, whenever you want to shop!"
tags: [email, score-4, sender/skechers]
---
# [Test]: PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04092026_V2The right pair, right now, whenever you want to shop!
**Score:** 4/10 · **Type:** Email audit · **2026-04-08**
## Executive summary

- The BOGO offer is strong enough to drive conversions — but the test subject line and broken preheader alone would tank deliverability and first-impression trust if sent live. Strip those out and the structural weaknesses keep it from performing above average.

## What's working

- **Hero offer is unambiguous.** "BUY ONE, GET ONE 50% OFF or 20% off 1 item" is readable, hierarchy is correct (percentage is the dominant visual), and the SHOP NOW CTA is visible.
- **New Arrivals module has product imagery.** The horizontal product strip gives the email a browsable, merchandised feel.
- **SHOP NEW ARRIVALS CTA** in a contrasting teal/green stands out well from the surrounding content.
- **Gender navigation tiles** (SHOP WOMEN'S, SHOP MEN'S, SHOP BOYS) give the email wayfinding utility and serve the broad audience segment this appears to target.

## What's weak

- **Subject line is in QA/test state.** "[Test]: PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04092026_V2..." is a deployment blocker. If this hit a live list, it signals broken deployment process.
- **Preheader is raw JSON schema markup.** The preview text reads as `[{ "@context": "http://schema.org/"...` — a severe rendering bug that destroys the first impression before the email is even opened.
- **Module sprawl.** Hero → New Arrivals → Gender tiles → Sale tease → Text nav links → SMS opt-in → App download → Social is eight distinct asks. There's no hierarchy of priority beyond the hero.
- **Product imagery is too small.** The new arrivals strip renders the shoes at thumbnail scale — not enough to drive desire or differentiation.
- **Sale module is underpowered.** A "SALE" label appears mid-email with no visible price, product imagery, or urgency cue at scroll depth — it's easy to miss and underperforms what a sale callout should do.
- **Hero shoe image is a single product.** One beige/tan sneaker for a BOGO offer misses the obvious opportunity to show two complementary products reinforcing the "buy one, get one" concept.
- **SHOP BOYS tile** appears isolated without a corresponding SHOP GIRLS tile — asymmetric and potentially off-brand.

## Recommendations

- 1. **Do not deploy this version.** The test subject line and JSON preheader are launch-blocking bugs. Fix both before any live send.
- 2. **Preheader:** Replace the JSON leak with a human-readable hook tied to the BOGO offer — e.g., "Your next pair is half off. Shop new arrivals now."
- 3. **Hero creative:** Swap single shoe for a two-product pairing shot that visually communicates "buy one, get one."
- 4. **Trim modules.** Collapse the text nav links (WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS) — these are redundant with the gender tiles above them. Cut or move the SMS and app modules to footer. This email should have a clear two-act structure: BOGO hero → browse new arrivals → one CTA.
- 5. **Sale module:** Either give it a real editorial treatment (product image, percentage off, deadline) or remove it. A "SALE" label with no context wastes real estate.
- 6. **Product strip sizing:** Increase product tile size or reduce to 3 products shown larger to make the new arrivals actually shoppable on scroll.
- | Priority | Action |
- |---|---|
- | P0 | Remove `[Test]:` prefix from subject line before any production resend |
- | P0 | Fix empty `FirstName` merge token — add a fallback default (e.g., `%%=v(@FirstName, "there")=%%`) |
- | P1 | Migrate all `image.emails.skechers.com` assets to HTTPS — affects ~15 images including logo and all footer assets |
- | P1 | Fix `ink1000.com` open pixel to use HTTPS |
- | P1 | Add `https://` scheme to Return Path seed pixel (`pixel.app.returnpath.net`) |
- | P2 | Add descriptive `alt` text to 4 images flagged as missing it |
- | P2 | Confirm SPF/DKIM alignment via ESP logs before production send |
- | P2 | Verify CAN-SPAM footer (unsubscribe link + physical address) is present in full HTML |
- | P3 | Consolidate duplicate `@media` blocks in `<style>` tags |
- | P3 | Consider changing `webkit-text-size-adjust: none` to `100%` for accessibility compliance |

## Full review
## 2. Business Impact Score: 4/10

The BOGO offer is strong enough to drive conversions — but the test subject line and broken preheader alone would tank deliverability and first-impression trust if sent live. Strip those out and the structural weaknesses keep it from performing above average.

---

## 3. What's Working

- **Hero offer is unambiguous.** "BUY ONE, GET ONE 50% OFF or 20% off 1 item" is readable, hierarchy is correct (percentage is the dominant visual), and the SHOP NOW CTA is visible.
- **New Arrivals module has product imagery.** The horizontal product strip gives the email a browsable, merchandised feel.
- **SHOP NEW ARRIVALS CTA** in a contrasting teal/green stands out well from the surrounding content.
- **Gender navigation tiles** (SHOP WOMEN'S, SHOP MEN'S, SHOP BOYS) give the email wayfinding utility and serve the broad audience segment this appears to target.

---

## 4. What's Weak

- **Subject line is in QA/test state.** "[Test]: PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04092026_V2..." is a deployment blocker. If this hit a live list, it signals broken deployment process.
- **Preheader is raw JSON schema markup.** The preview text reads as `[{ "@context": "http://schema.org/"...` — a severe rendering bug that destroys the first impression before the email is even opened.
- **Module sprawl.** Hero → New Arrivals → Gender tiles → Sale tease → Text nav links → SMS opt-in → App download → Social is eight distinct asks. There's no hierarchy of priority beyond the hero.
- **Product imagery is too small.** The new arrivals strip renders the shoes at thumbnail scale — not enough to drive desire or differentiation.
- **Sale module is underpowered.** A "SALE" label appears mid-email with no visible price, product imagery, or urgency cue at scroll depth — it's easy to miss and underperforms what a sale callout should do.
- **Hero shoe image is a single product.** One beige/tan sneaker for a BOGO offer misses the obvious opportunity to show two complementary products reinforcing the "buy one, get one" concept.
- **SHOP BOYS tile** appears isolated without a corresponding SHOP GIRLS tile — asymmetric and potentially off-brand.

---

## 5. Recommendations

1. **Do not deploy this version.** The test subject line and JSON preheader are launch-blocking bugs. Fix both before any live send.
2. **Preheader:** Replace the JSON leak with a human-readable hook tied to the BOGO offer — e.g., "Your next pair is half off. Shop new arrivals now."
3. **Hero creative:** Swap single shoe for a two-product pairing shot that visually communicates "buy one, get one."
4. **Trim modules.** Collapse the text nav links (WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS) — these are redundant with the gender tiles above them. Cut or move the SMS and app modules to footer. This email should have a clear two-act structure: BOGO hero → browse new arrivals → one CTA.
5. **Sale module:** Either give it a real editorial treatment (product image, percentage off, deadline) or remove it. A "SALE" label with no context wastes real estate.
6. **Product strip sizing:** Increase product tile size or reduce to 3 products shown larger to make the new arrivals actually shoppable on scroll.

---

## 6. Bottom Line

Strong offer, broken execution. The BOGO mechanic has genuine pull for a retention audience, but this email has pre-production bugs that make it unsendable as-is, and structural bloat that would suppress performance even after fixes. Needs QA cleanup first, then a module audit to focus the email around a single conversion action.

---

## 7. Evidence

**Overall purpose:** Retention/re-engagement promotional email for existing Skechers customers, driving purchase via a BOGO 50% offer tied to new arrivals browsing.

**Hero / primary value proposition:** "BUY ONE, GET ONE 50% OFF or 20% off 1 item" with a single product hero image (beige casual sneaker) and a "SHOP NOW" button. Offer mechanics are clear; creative undersells the BOGO concept.

**Membership / benefits section:** Not present as a standalone module. No Skechers+ or loyalty content visible in the main body (may be in the collapsed utility section at bottom).

**Product discoverability / recommendation modules:** One horizontal new arrivals product strip (approx. 4–5 product thumbnails, small scale) followed by a "SHOP NEW ARRIVALS" CTA. Products are too small to evaluate or create desire individually.

**Utility / secondary modules:** Gender navigation tiles (SHOP WOMEN'S, SHOP MEN'S, SHOP BOYS with lifestyle imagery), a text-link nav row (WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS), an SMS/text opt-in module ("SIGN UP FOR TEXTING"), an app download CTA ("DOWNLOAD THE APP" / "SKECHERS PLUS"), social follow icons, and a standard legal footer.

**Bugs / friction / clarity issues (visible in render):**
- Subject line contains "[Test]:" prefix and full internal campaign code — not consumer-ready.
- Preheader displays raw JSON-LD schema markup instead of human-readable preview text — severe rendering bug visible before the email is opened.
- "SHOP BOYS" tile appears without a matching "SHOP GIRLS" tile, creating an asymmetric and incomplete category navigation experience.

---

## Technical Audit

## Technical Audit — Skechers PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04092026_V2

---

### 1. Technical Summary

This email has one broken-experience defect (empty merge token in greeting), a systemic HTTP image URL issue affecting ~15 assets, and a missing protocol on the Return Path seed pixel. SPF/DKIM authentication status could not be confirmed via relay headers.

---

### 2. Link & Tracking Issues

**[CRITICAL] "[Test]:" prefix in subject line**
Subject reads: `[Test]: PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04092026_V2The right pair...`
The `[Test]:` tag prefix and the bare campaign ID are exposed in the subscriber-facing subject line. If this send reached live recipients, it is a production defect.

**[WARN] Return Path seed pixel missing URL scheme**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" />
```
No `https://` protocol prefix. Browsers/clients will interpret this as a relative path, breaking inbox placement monitoring for this seed send.

**[INFO] 25 click-redirect links not probed**
All CTA links route through `click.emails.skechers.com` — standard ESP redirect behavior. Link destination health not verifiable from this audit.

**[INFO] Third-party DMP beacons present**
Krux (`beacon.krxd.net`) user-match and impression pixels fire on open. The `partner_uid` in the subid pixel (`75909571`) appears to be a static subscriber ID, not a dynamic merge field — confirm this is intentional.

---

### 3. Rendering & Accessibility

**[HIGH] Widespread HTTP image URLs — ~15 assets**
All images hosted on `image.emails.skechers.com` use `http://`. Modern email clients (Gmail, Outlook.com, Apple Mail) proxy or block mixed-content images, causing broken image rendering for a significant portion of recipients. Affected assets include logo, footer social icons (Instagram, Twitter, Facebook, Pinterest, YouTube), app store badges, Afterpay badge, and at least 3 unidentified content images.

Example:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png
```

**[HIGH] Third-party tracking pixel on HTTP**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif
```
Non-HTTPS, missing alt text.

**[MED] Missing alt text — 4 confirmed images**
- `o.gif` (ink1000 pixel)
- `49468f73...png` (unidentified content image)
- `00100b23...png` (unidentified content image)
- `fc08601a...png` (unidentified content image)

Impacts screen reader users and image-blocked rendering fallback.

**[INFO] Duplicate media query blocks**
`@media only screen and (max-width: 375px)` and `@media only screen and (max-width: 640px)` rules are fully duplicated across two `<style>` blocks. No functional breakage, but increases parse weight unnecessarily.

**[INFO] `-webkit-text-size-adjust: none` applied globally**
`* { -webkit-text-size-adjust: none; }` disables user font-size scaling on iOS, which is an accessibility concern for low-vision users.

---

### 4. Personalization & Merge Tokens

**[CRITICAL] Empty greeting — broken merge token**
QA confirms: greeting renders as `"Hi ,"` — first name field is empty/unresolved. The subscriber's `%%FirstName%%` (or equivalent) token evaluated to null without a fallback default. This is a live deliverable defect if the send reached production subscribers.

No other unresolved merge tokens were detectable in the truncated source.

---

### 5. Compliance

**[WARN] SPF/DKIM authentication status unknown**
`Authentication-Results` header was not present in the relay path captured by AgentMail. Cannot confirm DKIM signing via `emails.skechers.com` or SPF alignment. This should be verified against ESP send logs before treating as a gap.

**[INFO] Sending domain:** `no-reply@emails.skechers.com` — subdomain ESP configuration is standard practice.

**CAN-SPAM:** Unsubscribe mechanism and physical mailing address presence could not be confirmed from the truncated HTML. These are required elements — confirm they exist in the footer.

**Preheader:** Present and populated (`BOGO 50% or 20% off 1 pair online only`), correctly hidden via `display:none`.

---

### 6. Email-to-Site Continuity

**[INFO] UTM parameters not verifiable**
All links pass through `click.emails.skechers.com` redirects, so UTM parameters on destination URLs cannot be inspected without following the redirects. The campaign code `PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04092026` is present in the Krux impression pixel `campaignid` parameter, confirming campaign ID consistency at the tracking layer.

No issues found in link structure beyond the tracking-domain redirect pattern.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| P0 | Remove `[Test]:` prefix from subject line before any production resend |
| P0 | Fix empty `FirstName` merge token — add a fallback default (e.g., `%%=v(@FirstName, "there")=%%`) |
| P1 | Migrate all `image.emails.skechers.com` assets to HTTPS — affects ~15 images including logo and all footer assets |
| P1 | Fix `ink1000.com` open pixel to use HTTPS |
| P1 | Add `https://` scheme to Return Path seed pixel (`pixel.app.returnpath.net`) |
| P2 | Add descriptive `alt` text to 4 images flagged as missing it |
| P2 | Confirm SPF/DKIM alignment via ESP logs before production send |
| P2 | Verify CAN-SPAM footer (unsubscribe link + physical address) is present in full HTML |
| P3 | Consolidate duplicate `@media` blocks in `<style>` tags |
| P3 | Consider changing `webkit-text-size-adjust: none` to `100%` for accessibility compliance |
## Recent history

- [[2026-04-08-test-pro-us-retpuropen-u-sitebundle-retail-en-04092026the-right-pair-right-now-w]] — 5/10 (2026-04-08)
- [[2026-04-08-spring-into-comfort-like-you-ve-never-felt-before]] — 5.5/10 (2026-04-08)
- [[2026-04-11-your-cart-expires-soon-rzgoegk0t-k-ndansihenw-g]] — 5/10 (2026-04-08)

