---
slug: 2026-03-31-your-items-are-waiting
type: email
date: 2026-03-31
persona: walker
score: "6/10"
sender: SKECHERS
subject: Your Items Are Waiting!
tags: [email, score-6, sender/skechers]
---
# Your Items Are Waiting!
**Score:** 6/10 · **Type:** Email audit · **2026-03-31**
## Executive summary

- A competent but diluted abandoned cart email. Skechers gets the core mechanic right — surface the abandoned product, name it, and drive a single recovery CTA — but then undermines urgency by layering in a BOGO promotion, best-seller recommendations, app install prompts, and a full category nav. The email can't decide if it's a cart-recovery message or a broadcast promotional send, and that tension costs it conversions. The product is front and center, which is the right call; everything below it needs a harder edit.
- Core job (get them back to the cart) is attempted. Execution diffuses that intent too broadly to score higher.

## What's working

- **Hero product clarity.** The abandoned item — a white/blue athletic sneaker — is rendered prominently with its name visible and a clean "COMPLETE YOUR ORDER" CTA. No ambiguity about what this email is for.
- **Headline voice.** "WE NOTICED YOU NOTICING US…" with the subhead "YOUR CART IS STILL WAITING" is punchy, self-aware, and on-brand. It earns attention without being annoying.
- **Recommendation module.** The four-product "Here's Some Great Options We Think You'll Love" row adds legitimate upsell utility and gives the email a second reason to convert if the original item no longer fits.
- **Utility cluster.** The BOGO offer, payment flexibility (Klarna/Afterpay), and curbside pickup signals address three distinct purchase objections — price, friction, and logistics — in compact space.

## What's weak

- **Urgency is absent.** Nothing in this email communicates scarcity or a deadline. "Your cart is still waiting" is neutral, not pressured. A cart-recovery email that doesn't communicate time or stock risk leaves most of its leverage on the table.
- **BOGO offer placement and clarity.** "Buy One, Get One 50% Off" appears well below the fold, sandwiched between recommendations and nav links. It reads as a separate broadcast offer rather than a targeted incentive to recover the specific cart. If this deal applies to the cart item, it should be elevated into the hero — that's a compelling close.
- **Category nav is noise.** WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE is a homepage navigation block dropped into an abandoned cart email. It exits the user off the recovery path entirely rather than funneling them to the abandoned item.
- **"Let's Get Texting" app module.** An SMS/app-install CTA competes with the recovery goal and belongs in a welcome series, not here. It dilutes the single action the email should drive.
- **Four competing CTAs below the hero.** By the time a reader reaches the footer, they've seen: Complete Your Order, Shop All Best Sellers, BOGO CTA, Download App, Curbside Pickup, Shop Now Pay Later, Find a Store. That's CTA overload for a triggered recovery flow.

## Recommendations

- 1. **Move the BOGO offer into the hero**, adjacent to the product shot, framed as an incentive: "Complete your order — and get 50% off your second pair." This transforms a passive reminder into an active offer.
- 2. **Add a time or stock signal.** Even soft language ("selling fast," "only a few left in your size") increases urgency without fabricating scarcity.
- 3. **Cut the category nav entirely.** It belongs in a newsletter, not a recovery email.
- 4. **Remove or relocate the app install module.** Surface it in a post-purchase confirmation instead.
- 5. **Tighten below-the-fold modules to two:** the recommendation row (keep it) and the payment flexibility callout (Klarna/Afterpay directly removes a purchase barrier). Everything else is noise in this context.
- | Priority | Issue | Action |
- |---|---|---|
- | High | HTTP click-tracking and image URLs | Switch Attentive send config to enforce HTTPS on `skechers.attentivemail.com` and `image.emails.skechers.com` |
- | High | Unsubscribe / CAN-SPAM footer (unverified) | Confirm `List-Unsubscribe-Post` header present; verify footer renders in all clients |
- | Medium | Empty `<title>` tag | Set to something meaningful, e.g., `Your Cart is Waiting — Skechers` |
- | Medium | Cart merge token fallbacks | Define non-empty fallback values for all product tokens to prevent blank abandoned-cart blocks |
- | Medium | UTM parameter audit | Decode 3–5 sample redirects; confirm all five UTM fields are populated and correctly scoped to this campaign |
- | Low | Preheader Unicode spacers | Monitor spam filter scores; consider replacing with HTML spacer approach if deliverability degrades |
- | Low | Responsive breakpoint at 620px | Evaluate whether `600px` is more appropriate to avoid edge-case layout mismatches |

## Full review
## Skechers — "Your Items Are Waiting!" | Abandoned Cart Email Review

---

### 1. Executive Summary

A competent but diluted abandoned cart email. Skechers gets the core mechanic right — surface the abandoned product, name it, and drive a single recovery CTA — but then undermines urgency by layering in a BOGO promotion, best-seller recommendations, app install prompts, and a full category nav. The email can't decide if it's a cart-recovery message or a broadcast promotional send, and that tension costs it conversions. The product is front and center, which is the right call; everything below it needs a harder edit.

---

### 2. Business Impact Score: **6 / 10**

Core job (get them back to the cart) is attempted. Execution diffuses that intent too broadly to score higher.

---

### 3. What's Working

- **Hero product clarity.** The abandoned item — a white/blue athletic sneaker — is rendered prominently with its name visible and a clean "COMPLETE YOUR ORDER" CTA. No ambiguity about what this email is for.
- **Headline voice.** "WE NOTICED YOU NOTICING US…" with the subhead "YOUR CART IS STILL WAITING" is punchy, self-aware, and on-brand. It earns attention without being annoying.
- **Recommendation module.** The four-product "Here's Some Great Options We Think You'll Love" row adds legitimate upsell utility and gives the email a second reason to convert if the original item no longer fits.
- **Utility cluster.** The BOGO offer, payment flexibility (Klarna/Afterpay), and curbside pickup signals address three distinct purchase objections — price, friction, and logistics — in compact space.

---

### 4. What's Weak

- **Urgency is absent.** Nothing in this email communicates scarcity or a deadline. "Your cart is still waiting" is neutral, not pressured. A cart-recovery email that doesn't communicate time or stock risk leaves most of its leverage on the table.
- **BOGO offer placement and clarity.** "Buy One, Get One 50% Off" appears well below the fold, sandwiched between recommendations and nav links. It reads as a separate broadcast offer rather than a targeted incentive to recover the specific cart. If this deal applies to the cart item, it should be elevated into the hero — that's a compelling close.
- **Category nav is noise.** WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE is a homepage navigation block dropped into an abandoned cart email. It exits the user off the recovery path entirely rather than funneling them to the abandoned item.
- **"Let's Get Texting" app module.** An SMS/app-install CTA competes with the recovery goal and belongs in a welcome series, not here. It dilutes the single action the email should drive.
- **Four competing CTAs below the hero.** By the time a reader reaches the footer, they've seen: Complete Your Order, Shop All Best Sellers, BOGO CTA, Download App, Curbside Pickup, Shop Now Pay Later, Find a Store. That's CTA overload for a triggered recovery flow.

---

### 5. Recommendations

1. **Move the BOGO offer into the hero**, adjacent to the product shot, framed as an incentive: "Complete your order — and get 50% off your second pair." This transforms a passive reminder into an active offer.
2. **Add a time or stock signal.** Even soft language ("selling fast," "only a few left in your size") increases urgency without fabricating scarcity.
3. **Cut the category nav entirely.** It belongs in a newsletter, not a recovery email.
4. **Remove or relocate the app install module.** Surface it in a post-purchase confirmation instead.
5. **Tighten below-the-fold modules to two:** the recommendation row (keep it) and the payment flexibility callout (Klarna/Afterpay directly removes a purchase barrier). Everything else is noise in this context.

---

### 6. Bottom Line

This email does enough to function but not enough to convert at ceiling. The abandoned product is visible and the headline earns attention — those are the most important things to get right, and they did. But the BOGO offer is buried where it should be leading, urgency is missing entirely, and the lower half of the email is a broadcast menu grafted onto a triggered flow. A focused edit on modules 3–7 would meaningfully lift recovery rate without any creative overhaul.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Abandoned cart recovery — single product, single cart, personalized trigger |
| **Hero / primary value prop** | White/blue athletic sneaker with product name, prominent image, "COMPLETE YOUR ORDER" CTA. Clear and functional. |
| **Membership / benefits** | Not present — no loyalty or rewards mention visible |
| **Product recommendation module** | Four-product "You'll Love" row below the hero; images, names, and prices visible; "SHOP ALL BEST SELLERS" CTA follows |
| **Promotional module** | "Buy One, Get One 50% Off" strip — below recommendations, fine print present; visually undersized for a BOGO |
| **Utility / secondary modules** | Category nav (Women/Men/Kids/Clothing/New Arrivals/Sale); App install "Let's Get Texting"; Curbside Pickup; Shop Now Pay Later (Klarna + Afterpay); Find a Store; social icons (Facebook, Instagram) |
| **Bugs / friction / clarity** | No visible rendering bugs. Legal footer text is very small but readable. All product images in recommendation row appear loaded correctly. |

---

## Technical Audit

## Technical Audit — "Your Items Are Waiting!" (Skechers Abandoned Cart)
**From:** hello@msgs.skechers.com | **ESP:** Attentive (attentivemail.com)

---

### 1. Technical Summary
Table-based 600px HTML email rendered via Attentive's click-tracking infrastructure. The truncated source exposes several HTTP-vs-HTTPS issues and an empty `<title>` tag; full compliance assessment is limited by source truncation.

---

### 2. Link & Tracking Issues

**HTTP click-tracking domain** — all links route through `http://skechers.attentivemail.com/ls/click?upn=...` (unencrypted). Both confirmed links in the visible source use `http://`, not `https://`:
- Web version: `http://skechers.attentivemail.com/ls/click?upn=u001.LNc6Vor...`
- Logo link: `http://skechers.attentivemail.com/ls/click?upn=u001.LNc6Vor...`

Risk: mixed-content warnings in webmail clients; some corporate proxies will block or flag HTTP tracking pixels/redirects. Verify whether Attentive's redirect domain supports HTTPS and confirm the sending config enforces it.

**Final destination UTM parameters** — cannot be verified because all destinations are behind Attentive redirects. See section 6.

---

### 3. Rendering & Accessibility

**Empty `<title>` tag** — `<title></title>` at line 1. Some email clients (notably Outlook web) display the title as the tab label; an empty value degrades usability.

**HTTP image source** — `<img src="http://image.emails.skechers.com/..."`. HTTP image URLs can be blocked by Gmail's image proxy (which re-hosts images over HTTPS). Confirm all `src` attributes use `https://`.

**Preheader padding technique** — the preheader uses a mix of Unicode Hangul filler characters (`͏`) and soft hyphens (`­`) as invisible spacers. This is a known compatibility hack but some spam filters flag high concentrations of non-printable Unicode. No functional breakage, but worth monitoring deliverability signals.

**Responsive breakpoint** — media query triggers at `max-width: 620px` which is slightly below standard (usually 600px). Devices rendering at exactly 600–620px wide may receive an unintended hybrid layout.

**Source truncated** — cannot audit alt text coverage on all images from available source.

---

### 4. Personalization & Merge Tokens

**Cart item personalization unverifiable** — this is an abandoned cart trigger email; dynamic product tokens (name, image, price, URL) should be injected per-recipient. None are visible in the truncated source. Confirm the Attentive template contains valid merge tags (e.g., `{{product.name}}`, `{{product.image_url}}`) and that fallback values are defined to prevent blank renders on token failure.

**No first-name personalization visible** in the subject line or preheader — the subject is static ("Your Items Are Waiting!"). This is not an error, but note it for completeness.

---

### 5. Compliance (CAN-SPAM / Unsubscribe / Auth)

**Cannot confirm from truncated source:**
- Physical mailing address (required by CAN-SPAM §5(a)(5))
- Unsubscribe mechanism / one-click list-unsubscribe header (RFC 8058 / Gmail/Yahoo 2024 requirements)

These are almost certainly present in the footer, but the source is cut before the footer renders. **Verify before deployment:**
1. Physical address block is present and not hidden via CSS
2. `List-Unsubscribe` and `List-Unsubscribe-Post` headers are set at the ESP level
3. DKIM, SPF, and DMARC pass for `msgs.skechers.com` — check sending domain alignment against `hello@msgs.skechers.com`

---

### 6. Email-to-Site Continuity

**UTM parameters unverifiable** — all CTAs route through Attentive's `upn=` redirects. Decode a sample redirect to confirm:
- `utm_source` is set (e.g., `email`)
- `utm_medium` is set (e.g., `triggered`)
- `utm_campaign` identifies this as the abandoned cart flow
- `utm_content` differentiates CTA positions if multiple links go to the same product

**Landing page alignment** — as an abandoned cart email, links should deep-link to the recipient's cart or the specific product, not the homepage. Cannot confirm without decoding redirects.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | HTTP click-tracking and image URLs | Switch Attentive send config to enforce HTTPS on `skechers.attentivemail.com` and `image.emails.skechers.com` |
| High | Unsubscribe / CAN-SPAM footer (unverified) | Confirm `List-Unsubscribe-Post` header present; verify footer renders in all clients |
| Medium | Empty `<title>` tag | Set to something meaningful, e.g., `Your Cart is Waiting — Skechers` |
| Medium | Cart merge token fallbacks | Define non-empty fallback values for all product tokens to prevent blank abandoned-cart blocks |
| Medium | UTM parameter audit | Decode 3–5 sample redirects; confirm all five UTM fields are populated and correctly scoped to this campaign |
| Low | Preheader Unicode spacers | Monitor spam filter scores; consider replacing with HTML spacer approach if deliverability degrades |
| Low | Responsive breakpoint at 620px | Evaluate whether `600px` is more appropriate to avoid edge-case layout mismatches |
## Recent history

- [[2026-03-31-trail-tested-track-ready-meet-the-new-agravic]] — 6/10 (2026-03-31)
- [[2026-03-30-test-pro-us-na-u-bundle-full-en-03312026everything-s-better-in-pairs]] — 5/10 (2026-03-30)
- [[2026-04-01-test-pro-us-retpur-u-bundle-retail-en-03312026-bget-more-pairs-for-less]] — 5/10 (2026-03-30)

