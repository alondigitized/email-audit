---
slug: 2026-03-29-did-you-forget-something
type: email
date: 2026-03-28
persona: walker
score: "6/10"
sender: SKECHERS
subject: Did you forget something?
tags: [email, score-6, sender/skechers]
---
# Did you forget something?
**Score:** 6/10 · **Type:** Email audit · **2026-03-28**
## Executive summary

- A structurally sound abandoned cart email that loses its urgency by piling on too many secondary modules. The core recovery loop — hero reminder, cart item, CTA — is solid, but a BOGO 50% off offer buried mid-email should be the headline and isn't. The email reads like a sitewide broadcast that had a cart-recovery module stapled to the top.
- Good bones, poor prioritization. The recovery mechanic works but the promotional lever is underdeployed.

## What's working

- **Hero copy lands.** "WE NOTICED YOU NOTICING US... YOUR CART IS STILL WAITING" is playful and on-brand without being desperate. It earns attention.
- **Cart item is visible and specific.** The product image and name ("Maximize Warrior: Men Cushioning Arch Fit 2.0 - Aquatic") is shown with a dedicated "COMPLETE YOUR ORDER" CTA — this is the right mechanic.
- **BOGO 50% Off is a real incentive.** If someone was on the fence about price, this closes the loop — it just needs to be positioned to do that job.
- **Product recommendation module** ("Here's Some Great Options We Think You'll Love") gives an alternative path to purchase if the cart item isn't the right fit.

## What's weak

- **The BOGO offer is buried after the product recs.** A discount of this size should either appear in the hero to create urgency or immediately follow the cart CTA as the conversion nudge — not third in the stack.
- **Too many modules for a recovery email.** Category nav (Women, Men, Kids, Clothing, New Arrivals, Sale), app download, curbside pickup, BNPL, find a store — these dilute the recovery intent and give the eye too many exits before the purchase.
- **"LET'S GET TEXTING" is confusing as a header for app download buttons.** The section shows App Store/Google Play badges but the headline reads like an SMS opt-in. Unclear purpose at a glance.
- **No urgency signal.** The email has no scarcity copy ("limited stock," "your cart expires soon," a countdown). The cart message is soft — it invites, but doesn't compel.
- **Product rec images are small and undifferentiated** at this rendering size — hard to distinguish styles, reducing their conversion contribution.

## Recommendations

- 1. **Surface the BOGO offer directly beneath the cart CTA** — frame it as "Plus, complete your order now and use BOGO 50% Off on your second pair." Make the offer the reason to act today.
- 2. **Cut the module count in half.** Strip the category nav, app download, and curbside pickup out of this email. Reserve those for post-purchase or browse emails. A cart recovery email should have one job.
- 3. **Add a light urgency signal** — even "Items in your cart are popular and may sell out" is enough to shift behavior without being heavy-handed.
- 4. **Clarify the app section header** — if it's an app download CTA, rename it. If it's an SMS opt-in, make that explicit with a separate design treatment.
- 5. **Increase product rec image size** or reduce to 3 items so each is more legible and shoppable.
- | Priority | Issue | Action |
- |---|---|---|
- | High | HTTP tracking/image URLs | Enable HTTPS in Attentive link settings; confirm image CDN is TLS-enabled |
- | Medium | UTM coverage | Resolve 2–3 sample tracking URLs and verify all required UTM params are appended |
- | Medium | Compliance elements | Audit full HTML for physical address and unsubscribe link; confirm List-Unsubscribe header is set |
- | Medium | Image alt text | Confirm all `<img>` tags carry descriptive `alt` attributes, especially product images |
- | Low | Preheader spacer chars | Replace `U+00AD` soft hyphens with `U+034F` only to avoid visible dash artifacts |
- | Low | Empty `<title>` | Populate with campaign name or brand name |
- | Low | DMARC subdomain policy | Verify `msgs.skechers.com` is covered by org-level DMARC policy |

## Full review
### 1. Executive Summary

A structurally sound abandoned cart email that loses its urgency by piling on too many secondary modules. The core recovery loop — hero reminder, cart item, CTA — is solid, but a BOGO 50% off offer buried mid-email should be the headline and isn't. The email reads like a sitewide broadcast that had a cart-recovery module stapled to the top.

---

### 2. Business Impact Score: **6/10**

Good bones, poor prioritization. The recovery mechanic works but the promotional lever is underdeployed.

---

### 3. What's Working

- **Hero copy lands.** "WE NOTICED YOU NOTICING US... YOUR CART IS STILL WAITING" is playful and on-brand without being desperate. It earns attention.
- **Cart item is visible and specific.** The product image and name ("Maximize Warrior: Men Cushioning Arch Fit 2.0 - Aquatic") is shown with a dedicated "COMPLETE YOUR ORDER" CTA — this is the right mechanic.
- **BOGO 50% Off is a real incentive.** If someone was on the fence about price, this closes the loop — it just needs to be positioned to do that job.
- **Product recommendation module** ("Here's Some Great Options We Think You'll Love") gives an alternative path to purchase if the cart item isn't the right fit.

---

### 4. What's Weak

- **The BOGO offer is buried after the product recs.** A discount of this size should either appear in the hero to create urgency or immediately follow the cart CTA as the conversion nudge — not third in the stack.
- **Too many modules for a recovery email.** Category nav (Women, Men, Kids, Clothing, New Arrivals, Sale), app download, curbside pickup, BNPL, find a store — these dilute the recovery intent and give the eye too many exits before the purchase.
- **"LET'S GET TEXTING" is confusing as a header for app download buttons.** The section shows App Store/Google Play badges but the headline reads like an SMS opt-in. Unclear purpose at a glance.
- **No urgency signal.** The email has no scarcity copy ("limited stock," "your cart expires soon," a countdown). The cart message is soft — it invites, but doesn't compel.
- **Product rec images are small and undifferentiated** at this rendering size — hard to distinguish styles, reducing their conversion contribution.

---

### 5. Recommendations

1. **Surface the BOGO offer directly beneath the cart CTA** — frame it as "Plus, complete your order now and use BOGO 50% Off on your second pair." Make the offer the reason to act today.
2. **Cut the module count in half.** Strip the category nav, app download, and curbside pickup out of this email. Reserve those for post-purchase or browse emails. A cart recovery email should have one job.
3. **Add a light urgency signal** — even "Items in your cart are popular and may sell out" is enough to shift behavior without being heavy-handed.
4. **Clarify the app section header** — if it's an app download CTA, rename it. If it's an SMS opt-in, make that explicit with a separate design treatment.
5. **Increase product rec image size** or reduce to 3 items so each is more legible and shoppable.

---

### 6. Bottom Line

The email does the minimum required of an abandoned cart flow — it identifies the product and offers a path back. But it wastes its best conversion lever (the BOGO offer) by burying it, and it pads out the experience with browse-mode modules that don't serve recovery. Tighten the focus and move the incentive up — this email has the ingredients, just the wrong recipe.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Abandoned cart recovery — remind, show product, recover the sale |
| **Hero / primary value prop** | "WE NOTICED YOU NOTICING US... YOUR CART IS STILL WAITING" — playful and appropriate; product shown with dedicated CTA |
| **Membership / benefits** | None visible |
| **Product rec module** | 4-item grid, "Great Options We Think You'll Love" — small images, limited legibility at render size |
| **BOGO Promotion** | "Buy One, Get One 50% Off" — mid-email placement, should be the urgency hook for cart recovery |
| **Utility / secondary modules** | Category nav, app download ("LET'S GET TEXTING"), curbside pickup, BNPL (Afterpay/Klarna), Find a Store, social links — excessive for recovery context |
| **Bugs / friction** | No visible broken images or rendering errors; "LET'S GET TEXTING" header is semantically confusing given it shows app badges |

---

## Technical Audit

## Technical Audit — SKECHERS "Did you forget something?" (Abandoned Cart)
**From:** hello@msgs.skechers.com | **ESP:** Attentive

---

### 1. Technical Summary
Abandoned cart trigger email delivered via Attentive. Primary technical concerns are HTTP (non-TLS) click-tracking and image URLs, an empty `<title>` element, and unverifiable UTM coverage due to opaque redirect chains. Compliance elements are not visible in the truncated source and require full-HTML verification.

---

### 2. Link & Tracking Issues

**HTTP tracking URLs (High)**
All click links and the image CDN use plain HTTP:
```
http://skechers.attentivemail.com/ls/click?upn=u001...
http://image.emails.skecher…
```
Modern email clients (Gmail, Apple Mail) flag or strip insecure resources. Attentive supports HTTPS tracking — this appears to be a configuration omission rather than a platform limitation.

**Web version link uses same HTTP tracking wrapper**
```
href="http://skechers.attentivemail.com/ls/click?upn=u001.LNc6Vor..."
```
Should resolve over HTTPS.

---

### 3. Rendering & Accessibility

**Empty `<title>` element**
```html
<head><title></title>...
```
Some email clients (notably Outlook on the web) surface the `<title>` value in tab/window labels. Empty title is low-risk but non-compliant with WCAG 2.4.2.

**`lang="en"` present** — correct.

**Image `alt` text** — the `<img>` tag is truncated in the source excerpt; cannot confirm `alt` attribute presence. If omitted (common in image-heavy emails), screen readers will skip product images silently with no fallback text.

**Preheader padding technique** — uses both `U+034F` (combining grapheme joiner) and `U+00AD` (soft hyphen) as spacer characters:
```
͏ ͏ ͏ … ­ ­ ­ …
```
This is a known anti-Gmail-clipping technique but `U+00AD` soft hyphens render as visible dashes in a small number of webmail clients. Using only `U+034F` (zero-width) is safer.

**Fixed 600px width** — `width:600px` on `.row-content` with no fluid fallback outside the `@media (max-width:620px)` block. Clients that ignore media queries (Outlook, some Gmail app versions) will render at exactly 600px regardless of device width. Acceptable for this template pattern but worth noting.

**No `role="presentation"` on layout tables** — minor; best practice for screen reader passthrough.

---

### 4. Personalization & Merge Tokens

The preheader text is fully static:
```
You left something in your cart, get it before it's gone!
```
No recipient name token or cart item name visible. For an abandoned cart email, dynamic cart contents (product name, image, price) and a personalized greeting are expected. The truncated source does not show whether these are present lower in the template — **requires full-HTML review to confirm**.

No unresolved/broken merge token syntax (e.g., `{{first_name}}`, `%FNAME%`) visible in the provided excerpt.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Not verifiable from truncated source:**
- Physical mailing address (required by CAN-SPAM §5(a)(5))
- Unsubscribe link and mechanism (required within 10 business days of request)
- List-Unsubscribe header

These must be confirmed in the full HTML render. Attentive typically injects these automatically, but custom template overrides can suppress them.

**Sending domain:** `msgs.skechers.com` (subdomain of `skechers.com`)
SPF/DKIM/DMARC alignment should be verified for this subdomain separately from the root domain — subdomains do not automatically inherit parent-domain DMARC policy unless `p=reject`/`quarantine` is set at the org level with no `sp=` override.

---

### 6. Email-to-Site Continuity (UTM Params, Landing Page Alignment)

All destination URLs are wrapped in Attentive's opaque redirect:
```
http://skechers.attentivemail.com/ls/click?upn=u001...
```
UTM parameters cannot be confirmed without resolving the redirects. Attentive's link manager should be audited to verify:
- `utm_source=attentive` (or equivalent)
- `utm_medium=email`
- `utm_campaign` matches the send campaign name
- `utm_content` differentiates CTA positions (hero vs. secondary links)

Landing page alignment (abandoned cart deep-link vs. generic homepage) is unverifiable from source alone.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | HTTP tracking/image URLs | Enable HTTPS in Attentive link settings; confirm image CDN is TLS-enabled |
| Medium | UTM coverage | Resolve 2–3 sample tracking URLs and verify all required UTM params are appended |
| Medium | Compliance elements | Audit full HTML for physical address and unsubscribe link; confirm List-Unsubscribe header is set |
| Medium | Image alt text | Confirm all `<img>` tags carry descriptive `alt` attributes, especially product images |
| Low | Preheader spacer chars | Replace `U+00AD` soft hyphens with `U+034F` only to avoid visible dash artifacts |
| Low | Empty `<title>` | Populate with campaign name or brand name |
| Low | DMARC subdomain policy | Verify `msgs.skechers.com` is covered by org-level DMARC policy |
## Recent history

- [[2026-03-29-back-to-the-70s-with-handball-spezial]] — 4/10 (2026-03-28)
- [[2026-03-29-the-messi-collection]] — 5/10 (2026-03-28)
- [[2026-03-29-test-mkg-us-na-u-best-gender-en-03292026the-styles-everyone-s-searching-for]] — 5.5/10 (2026-03-27)

