---
slug: 2026-03-23-your-first-pair-just-became-2-bogo-50-off
type: email
date: 2026-03-23
persona: walker
score: "5/10"
sender: SKECHERS
subject: Your First Pair Just Became 2 — BOGO 50% Off!
tags: [email, score-5, sender/skechers]
---
# Your First Pair Just Became 2 — BOGO 50% Off!
**Score:** 5/10 · **Type:** Email audit · **2026-03-23**
## Executive summary

- Skechers leads with a strong promotional offer — Buy One, Get One 50% Off — but buries it under three clinical size-chart tables that consume the majority of the email. The hero communicates the deal clearly, but every module below it shifts into utility mode with zero product photography anywhere in the send. For a BOGO promotion, this email should be driving desire; instead, it reads like a sizing reference guide with a discount attached.

## What's working

- **Hero headline is unambiguous.** "BUY ONE, GET ONE 50% OFF" is large, bold, and instantly legible. No confusion about the offer.
- **Dual CTAs at hero level.** "SHOP NOW" and "FIND A STORE" cover both online and in-store intent — smart omnichannel split.
- **Spring Sale framing** with a mint/floral background is seasonally appropriate and visually distinct from everyday sends.
- **Utility footer is complete.** App download, Afterpay, Curbside Pickup, and Find a Store are all cleanly laid out with icons — low friction for in-store shoppers.

## What's weak

- **No product photography.** The entire email — hero to footer — contains zero shoe images. A BOGO promotion lives or dies on product desire, and there is nothing here to make the subscriber want to buy a first pair, let alone a second.
- **Three size-chart tables dominate the body.** Women's, Men's, and Kids' size grids occupy the middle third of the email. These are functional, but they are completely misplaced in a promotional send. They kill purchase momentum.
- **Size charts are disconnected from the offer.** Each size grid has its own "SHOP NOW" button, but there is no product, no category highlight, and no visual hook to motivate a click. Clicking feels arbitrary.
- **"SHOP ADDITIONAL STYLES" section is text-only links.** WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE — no imagery, no price callouts, no urgency. It reads as a duplicate nav bar, not a product discovery module.
- **Subject line and preview text mismatch.** The subject promises excitement ("Your First Pair Just Became 2"); the preview text shows a raw URL, which is a deliverability and trust issue visible before even opening.
- **Offer mechanics never explained.** There is no visible "how it works" module — how does the BOGO apply? Automatically at cart, on specific styles, on full price only? The small disclaimer beneath the hero is too small to read in the render.

## Recommendations

- 1. **Replace size charts with curated product tiles.** Show 3–6 featured shoes with BOGO pricing logic (e.g., "Pair 1: $75 / Pair 2: $37.50") to make the deal tangible and visually appealing.
- 2. **Add a "How It Works" strip.** One row, three icons: Buy Any Pair → Add a Second → 50% Applied at Cart. This removes hesitation and explains the mechanic clearly.
- 3. **Segment the size charts into a separate utility email** or move them to a collapsible "need help finding your size?" accordion — do not let them own the promotional layout.
- 4. **Fix the preview text.** It is rendering as a raw URL. Replace with a human-readable line that reinforces the offer: "Spring Sale: BOGO 50% off — shop now."
- 5. **Add urgency.** No end date, no "limited time" signal, no countdown. At minimum, add a one-line offer expiry beneath the hero CTA.
- 6. **Upgrade the secondary styles section** with at least one visual per category (Women, Men, Kids) to give subscribers a visual reason to click through to each.
- | Priority | Issue | Action |
- |---|---|---|
- | **High** | ReturnPath pixel missing URL scheme | Add `https://` to `pixel.app.returnpath.net/pixel.gif...` |
- | **High** | All `image.emails.skechers.com` assets on HTTP | Migrate CDN to HTTPS or update image base URL in SFMC template |
- | **High** | ink1000 open pixel on HTTP | Update to HTTPS endpoint or replace with SFMC native open tracking |
- | **Medium** | `maximum-scale=1` disables zoom | Remove `maximum-scale=1` from viewport meta |
- | **Medium** | 3 content images missing alt text | Add descriptive alt to `49468f73`, `00100b23`, `fc08601a` PNGs |
- | **Medium** | UTM params unverifiable | Manually resolve one click link to confirm `utm_campaign=PRO_US_NA_U_BUNDLE_NONPURCH_EN_03232026` reaches landing page |
- | **Low** | Malformed `<meta>` tags missing `http-equiv` | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` attributes |
- | **Low** | Authentication headers not captured | Verify SPF/DKIM alignment for `emails.skechers.com` sending domain |

## Full review
## Email Review: "Your First Pair Just Became 2 — BOGO 50% Off!" (Skechers)

---

### 1. Executive Summary

Skechers leads with a strong promotional offer — Buy One, Get One 50% Off — but buries it under three clinical size-chart tables that consume the majority of the email. The hero communicates the deal clearly, but every module below it shifts into utility mode with zero product photography anywhere in the send. For a BOGO promotion, this email should be driving desire; instead, it reads like a sizing reference guide with a discount attached.

---

### 2. Business Impact Score

**5 / 10**

The offer is compelling and correctly placed above the fold. Everything after it works against conversion.

---

### 3. What's Working

- **Hero headline is unambiguous.** "BUY ONE, GET ONE 50% OFF" is large, bold, and instantly legible. No confusion about the offer.
- **Dual CTAs at hero level.** "SHOP NOW" and "FIND A STORE" cover both online and in-store intent — smart omnichannel split.
- **Spring Sale framing** with a mint/floral background is seasonally appropriate and visually distinct from everyday sends.
- **Utility footer is complete.** App download, Afterpay, Curbside Pickup, and Find a Store are all cleanly laid out with icons — low friction for in-store shoppers.

---

### 4. What's Weak

- **No product photography.** The entire email — hero to footer — contains zero shoe images. A BOGO promotion lives or dies on product desire, and there is nothing here to make the subscriber want to buy a first pair, let alone a second.
- **Three size-chart tables dominate the body.** Women's, Men's, and Kids' size grids occupy the middle third of the email. These are functional, but they are completely misplaced in a promotional send. They kill purchase momentum.
- **Size charts are disconnected from the offer.** Each size grid has its own "SHOP NOW" button, but there is no product, no category highlight, and no visual hook to motivate a click. Clicking feels arbitrary.
- **"SHOP ADDITIONAL STYLES" section is text-only links.** WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE — no imagery, no price callouts, no urgency. It reads as a duplicate nav bar, not a product discovery module.
- **Subject line and preview text mismatch.** The subject promises excitement ("Your First Pair Just Became 2"); the preview text shows a raw URL, which is a deliverability and trust issue visible before even opening.
- **Offer mechanics never explained.** There is no visible "how it works" module — how does the BOGO apply? Automatically at cart, on specific styles, on full price only? The small disclaimer beneath the hero is too small to read in the render.

---

### 5. Recommendations

1. **Replace size charts with curated product tiles.** Show 3–6 featured shoes with BOGO pricing logic (e.g., "Pair 1: $75 / Pair 2: $37.50") to make the deal tangible and visually appealing.
2. **Add a "How It Works" strip.** One row, three icons: Buy Any Pair → Add a Second → 50% Applied at Cart. This removes hesitation and explains the mechanic clearly.
3. **Segment the size charts into a separate utility email** or move them to a collapsible "need help finding your size?" accordion — do not let them own the promotional layout.
4. **Fix the preview text.** It is rendering as a raw URL. Replace with a human-readable line that reinforces the offer: "Spring Sale: BOGO 50% off — shop now."
5. **Add urgency.** No end date, no "limited time" signal, no countdown. At minimum, add a one-line offer expiry beneath the hero CTA.
6. **Upgrade the secondary styles section** with at least one visual per category (Women, Men, Kids) to give subscribers a visual reason to click through to each.

---

### 6. Bottom Line

The offer is right. The creative execution isn't. Skechers is sending a BOGO email with no shoes in it — that's the central problem. A subscriber motivated by the subject line will open, scroll past three size tables, and close without buying. Swapping the size charts for product photography with dual-price BOGO callouts would likely double this email's click-through rate without changing a single word of the headline.

---

### 7. Evidence

**Overall purpose:** Spring promotional send driving BOGO 50% off purchases online and in-store.

**Hero / primary value proposition:** "SPRING SALE — BUY ONE, GET ONE 50% OFF" on a mint green background with two CTAs. Clear and above the fold. Disclaimer text is present but too small to read in the render.

**Membership / benefits section:** Not present. No Skechers Plus loyalty tie-in or member exclusivity messaging visible.

**Product discoverability / recommendation modules:** Absent. The three size-chart tables (Women's Sizes, Men's Sizes, Kids' Shoe Sizes) with "SHOP NOW" buttons are the closest equivalent — but they contain no products, no imagery, and no pricing context.

**Utility / secondary modules:** Strong footer row: App download (Apple + Google badges), Curbside Pickup icon, Afterpay "Shop Now, Pay Later," and Find a Store. "LET'S GET TEXTING" SMS opt-in module visible. Social follow row with platform icons. Navigation links (About, Customer Service, Privacy Policy, Terms, Unsubscribe) in fine print.

**Bugs / friction / clarity issues:** Preview text renders as a raw URL rather than marketing copy — visible in the email client before opening. No other visual rendering bugs (broken images, overlapping text, empty fields) are visible in the screenshot.

---

## Technical Audit

## Technical Audit — SKECHERS "BOGO 50% Off" (2026-03-23)

---

### 1. Technical Summary

The email is structurally sound with proper responsive breakpoints and Salesforce Marketing Cloud infrastructure, but has a systemic HTTP (non-HTTPS) image hosting problem across all `image.emails.skechers.com` assets, plus a missing-protocol tracking pixel that will silently fail in most clients.

---

### 2. Link & Tracking Issues

**Missing protocol on ReturnPath pixel** — The inbox placement monitoring pixel has no URL scheme:
```
src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499"
```
Without `https://`, this is a broken relative URL and will not fire, invalidating inbox placement monitoring for this send.

**HTTP tracking pixel (ink1000.com)** — Third-party open-tracking pixel uses plain HTTP:
```
src="http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8107766165&mi_ecmp=PRO_US_NA_U_BUNDLE_NONPURCH_EN_03232026"
```
Gmail, Outlook.com, and Apple Mail all proxy or block non-HTTPS image requests.

**36 click-redirect links** — All route through `click.emails.skechers.com` (SFMC standard). Not an issue, but none could be probed for destination validation.

**Krux/Salesforce DMP beacons** — Two user-match pixels present (`beacon.krxd.net`). These use HTTPS and are expected, but should be reviewed for current data privacy/consent compliance if applicable to this audience segment.

---

### 3. Rendering & Accessibility

**Systemic HTTP image hosting** — 14 images served from `http://image.emails.skechers.com`. Affected assets include the Skechers logo, footer icons (Instagram, Twitter, Facebook, Pinterest, YouTube), app store badges, and footer imagery. Modern clients that enforce HTTPS (Gmail proxy, iOS Mail) will either block or re-proxy these, potentially breaking layout.

**Missing alt text** — 5 images have empty or absent `alt` attributes:
- `o.gif` (ink1000 open pixel) — expected blank, acceptable
- `49468f73...png` — unknown content image, needs descriptive alt
- `00100b23...png` — unknown content image, needs descriptive alt
- `fc08601a...png` — unknown content image, needs descriptive alt

Images with functional meaning (app store badges, social icons) do have alt text and are not flagged here.

**Zoom disabled on mobile** — The viewport meta includes `maximum-scale=1`, which prevents user-initiated zoom on iOS. This is a WCAG 1.4.4 violation and blocks accessibility for low-vision users.

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```

**`<meta http-equiv>` tags missing `http-equiv` attribute** — Two meta tags in `<head>` are malformed:
```html
<meta content="text/html; charset=utf-8" />
<meta content="IE=Edge" />
```
Both are missing their `http-equiv` attribute name (`http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` respectively). These are no-ops in current clients but indicate a template authoring error.

---

### 4. Personalization & Merge Tokens

No unresolved or exposed merge tokens (e.g., `%%field%%`, `{{field}}`) visible in the truncated source. No issues found in the provided HTML.

---

### 5. Compliance

**SPF/DKIM authentication unknown** — The AgentMail relay did not capture `Authentication-Results` headers, so SPF/DKIM/DMARC pass/fail cannot be confirmed. Sending domain is `emails.skechers.com`; authentication records should be verified directly against the SFMC sending IP range.

**CAN-SPAM physical address and unsubscribe** — Not visible in the truncated HTML provided. These are required and assumed present in the footer; a full-source review should confirm their presence before sign-off.

---

### 6. Email-to-Site Continuity

**Campaign ID present in pixel URLs** — The campaign identifier `PRO_US_NA_U_BUNDLE_NONPURCH_EN_03232026` appears consistently across tracking pixels (ink1000, Krux impression beacon), indicating campaign-level tagging is in place.

**UTM parameter verification blocked** — All 36 destination links route through `click.emails.skechers.com` click-redirect and could not be probed. UTM parameter presence on landing pages (`utm_source`, `utm_medium`, `utm_campaign`) cannot be confirmed without resolving the redirect chain.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **High** | ReturnPath pixel missing URL scheme | Add `https://` to `pixel.app.returnpath.net/pixel.gif...` |
| **High** | All `image.emails.skechers.com` assets on HTTP | Migrate CDN to HTTPS or update image base URL in SFMC template |
| **High** | ink1000 open pixel on HTTP | Update to HTTPS endpoint or replace with SFMC native open tracking |
| **Medium** | `maximum-scale=1` disables zoom | Remove `maximum-scale=1` from viewport meta |
| **Medium** | 3 content images missing alt text | Add descriptive alt to `49468f73`, `00100b23`, `fc08601a` PNGs |
| **Medium** | UTM params unverifiable | Manually resolve one click link to confirm `utm_campaign=PRO_US_NA_U_BUNDLE_NONPURCH_EN_03232026` reaches landing page |
| **Low** | Malformed `<meta>` tags missing `http-equiv` | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` attributes |
| **Low** | Authentication headers not captured | Verify SPF/DKIM alignment for `emails.skechers.com` sending domain |
## Recent history

- [[2026-03-29-disney-s-goofy-soccermania]] — 3/10 (2026-03-23)
- [[2026-03-22-take-your-first-step-into-comfort]] — 5/10 (2026-03-22)
- [[2026-03-20-newest-drop-this-is-only-the-start]] — 6/10 (2026-03-20)

