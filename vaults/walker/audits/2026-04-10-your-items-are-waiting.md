---
slug: 2026-04-10-your-items-are-waiting
type: email
date: 2026-04-10
persona: walker
score: "6/10"
sender: SKECHERS
subject: Your Items Are Waiting!
tags: [email, score-6, sender/skechers]
---
# Your Items Are Waiting!
**Score:** 6/10 · **Type:** Email audit · **2026-04-10**
## Executive summary

- A competent abandoned cart email that opens with charm but bleeds urgency as you scroll. The hero section is punchy and the cart item is prominently featured, but a visible copy error in the recommendation module undermines credibility, and the email quickly devolves into a full site-nav catalog that competes with the single job it was sent to do: recover the cart.
- Solid bones, meaningful drag from clutter and a distracting error in the product recommendation section.

## What's working

- **Hero headline lands.** "WE NOTICED YOU NOTICING US... YOUR CART IS STILL WAITING." is playful and self-aware — it disarms rather than guilt-trips. Good tone for the brand.
- **Cart item is front and center.** The abandoned shoe (blue/white running shoe) and the "COMPLETE YOUR ORDER" CTA are placed immediately after the hero. No confusion about what action is being requested.
- **20% OFF banner provides a nudge.** The promotional block mid-email gives fence-sitters a concrete reason to convert that wasn't in the subject line. Surprise discount as a recovery lever is smart.
- **App/utility footer is clean.** The "Let's Get Texting," Curbside Pickup, Shop Now Pay Later, and Find a Store blocks are visually compact and don't overwhelm.

## What's weak

- **Copy error in the recommendations header.** The module reads: *"HERE'S SOME MORE WORK GREAT OPTIONS WE THINK YOU'LL LOVE."* The word "WORK" is clearly erroneous — a word fragment left in from an editing pass. It reads as broken and reduces brand confidence at a key moment.
- **Recommendation product images are tiny and anonymous.** Three small, indistinct white shoe thumbnails with no visible names or prices. These cannot drive click intent. They're visual filler.
- **20% OFF is orphaned.** The discount banner appears with no stated conditions — no minimum spend, no expiry, no clear scope. The urgency signal is muted by ambiguity.
- **The email keeps going long past its purpose.** After the cart recovery and recommendations, there's a full category nav (Women, Men, Kids, Clothing, New Arrivals, Sale), then app download, curbside, BNPL, and store finder. This is a site homepage appended to a recovery email. It dilutes the conversion signal.
- **Product name in cart is clinical.** "Members Big-toe Box Cushioning Arch Fit 2.0 - Aeromil" is the raw product attribute string, not a human-readable name. It reads like a database field and reduces desirability.

## Recommendations

- 1. **Fix the recommendation headline immediately.** "HERE'S SOME MORE WORK GREAT OPTIONS" needs to ship correctly. A broken sentence in a transactional recovery email is a trust hit.
- 2. **Add price + product name to recommendation tiles.** If these are meant to offer alternatives to the abandoned item, buyers need to evaluate them. Names and prices are table stakes.
- 3. **Anchor the 20% OFF offer.** Add one line of scope — "20% off your order" or "20% off when you complete your purchase today" — and consider a countdown or expiry date to create urgency.
- 4. **Cut the category nav.** Women / Men / Kids / Clothing / New Arrivals / Sale has no place in an abandoned cart email. It invites browsing instead of buying.
- 5. **Rewrite the cart product name.** Use the consumer-facing name the shopper saw on the PDP, not the internal attribute string.
- | Priority | Issue | Action |
- |---|---|---|
- | High | All links and images use `http://` | Migrate to `https://` across all Attentive-hosted redirect and image URLs |
- | High | UTM parameters unverified | Decode `upn=` destination URLs and confirm all four UTM dimensions are present |
- | Medium | Empty `<title>` tag | Set to descriptive value; most clients render it somewhere |
- | Medium | Preheader uses mixed invisible Unicode character classes | Standardize to single character class (U+034F only) |
- | Medium | `target="_blank"` links missing `rel` attribute | Add `rel="noopener noreferrer"` to all external links |
- | Low | Personalization token resolution unconfirmed | Validate full rendered source shows resolved cart content, not raw tokens |
- | Low | Footer compliance unverified | Confirm physical address and unsubscribe link present in full HTML |
- | Info | SPF/DKIM/DMARC alignment for `msgs.skechers.com` | Run DNS/header check; confirm DMARC at least `p=quarantine` |

## Full review
## Skechers — "Your Items Are Waiting!" Abandoned Cart Email

---

### 1. Executive Summary

A competent abandoned cart email that opens with charm but bleeds urgency as you scroll. The hero section is punchy and the cart item is prominently featured, but a visible copy error in the recommendation module undermines credibility, and the email quickly devolves into a full site-nav catalog that competes with the single job it was sent to do: recover the cart.

---

### 2. Business Impact Score: **6 / 10**

Solid bones, meaningful drag from clutter and a distracting error in the product recommendation section.

---

### 3. What's Working

- **Hero headline lands.** "WE NOTICED YOU NOTICING US... YOUR CART IS STILL WAITING." is playful and self-aware — it disarms rather than guilt-trips. Good tone for the brand.
- **Cart item is front and center.** The abandoned shoe (blue/white running shoe) and the "COMPLETE YOUR ORDER" CTA are placed immediately after the hero. No confusion about what action is being requested.
- **20% OFF banner provides a nudge.** The promotional block mid-email gives fence-sitters a concrete reason to convert that wasn't in the subject line. Surprise discount as a recovery lever is smart.
- **App/utility footer is clean.** The "Let's Get Texting," Curbside Pickup, Shop Now Pay Later, and Find a Store blocks are visually compact and don't overwhelm.

---

### 4. What's Weak

- **Copy error in the recommendations header.** The module reads: *"HERE'S SOME MORE WORK GREAT OPTIONS WE THINK YOU'LL LOVE."* The word "WORK" is clearly erroneous — a word fragment left in from an editing pass. It reads as broken and reduces brand confidence at a key moment.
- **Recommendation product images are tiny and anonymous.** Three small, indistinct white shoe thumbnails with no visible names or prices. These cannot drive click intent. They're visual filler.
- **20% OFF is orphaned.** The discount banner appears with no stated conditions — no minimum spend, no expiry, no clear scope. The urgency signal is muted by ambiguity.
- **The email keeps going long past its purpose.** After the cart recovery and recommendations, there's a full category nav (Women, Men, Kids, Clothing, New Arrivals, Sale), then app download, curbside, BNPL, and store finder. This is a site homepage appended to a recovery email. It dilutes the conversion signal.
- **Product name in cart is clinical.** "Members Big-toe Box Cushioning Arch Fit 2.0 - Aeromil" is the raw product attribute string, not a human-readable name. It reads like a database field and reduces desirability.

---

### 5. Recommendations

1. **Fix the recommendation headline immediately.** "HERE'S SOME MORE WORK GREAT OPTIONS" needs to ship correctly. A broken sentence in a transactional recovery email is a trust hit.
2. **Add price + product name to recommendation tiles.** If these are meant to offer alternatives to the abandoned item, buyers need to evaluate them. Names and prices are table stakes.
3. **Anchor the 20% OFF offer.** Add one line of scope — "20% off your order" or "20% off when you complete your purchase today" — and consider a countdown or expiry date to create urgency.
4. **Cut the category nav.** Women / Men / Kids / Clothing / New Arrivals / Sale has no place in an abandoned cart email. It invites browsing instead of buying.
5. **Rewrite the cart product name.** Use the consumer-facing name the shopper saw on the PDP, not the internal attribute string.

---

### 6. Bottom Line

Skechers has the right intent and a solid top half. But the email tries to be a recovery email and a newsletter simultaneously. Trim everything after the recommendation module, fix the copy error, and tighten the discount CTA — this becomes a much stronger performer.

---

### 7. Evidence

**Overall purpose:** Abandoned cart recovery email. Clear from subject line, hero, and cart display module.

**Hero / primary value proposition:** "WE NOTICED YOU NOTICING US... YOUR CART IS STILL WAITING." Conversational, brand-appropriate. CTA: "COMPLETE YOUR ORDER" — direct and singular. Strong.

**Membership / benefits section:** None visible. No loyalty points, member perks, or account-based urgency referenced in this email.

**Product discoverability / recommendation modules:** One 3-tile row labeled "HERE'S SOME MORE WORK GREAT OPTIONS WE THINK YOU'LL LOVE." — copy error plainly visible. Tiles show white shoes with no names, prices, or ratings. Low utility. Followed by a "SHOP ALL BEST SELLERS" CTA on a dark banner.

**Utility / secondary modules:** Full site category nav (Women, Men, Kids, Clothing, New Arrivals, Sale), app download with app store badges, Curbside Pickup icon block, Shop Now Pay Later, Find a Store. Excessive for the email's purpose but individually well-rendered.

**Bugs / friction / clarity issues:**
- Visible copy error: "HERE'S SOME MORE **WORK** GREAT OPTIONS" — extraneous word, broken sentence.
- Product name in cart ("Members Big-toe Box Cushioning Arch Fit 2.0 - Aeromil") reads as an attribute dump rather than a product name.
- 20% OFF banner lacks stated terms or expiry — unclear what it applies to.

---

## Technical Audit

## Technical Audit — Skechers "Your Items Are Waiting!" Cart Abandonment Email

---

### 1. Technical Summary

Cart abandonment email sent via Attentive (click-tracking domain: `skechers.attentivemail.com`, image host: `image.emails.skechers.com`). The HTML is well-structured with standard MSO/responsive patterns, but several protocol, accessibility, and security hygiene issues are present. Full footer compliance cannot be verified due to HTML truncation.

---

### 2. Link & Tracking Issues

**HTTP protocol on all links and images — confirmed**

Both visible anchor hrefs and the image `src` use `http://`, not `https://`:
- `href="http://skechers.attentivemail.com/ls/click?upn=u001.LNc6Vor…"` (web version link)
- `href="http://skechers.attentivemail.com/ls/click?upn=u001.LNc6Vor…"` (logo link)
- `src="http://image.emails.skecher…"` (logo image, truncated)

Plain HTTP on click-redirect and image domains triggers security warnings in some clients (Gmail, Outlook 365) and may be flagged by ISP spam filters. Attentive supports HTTPS on its redirect infrastructure — all links should use `https://`.

**Missing `rel="noopener noreferrer"` on `target="_blank"` links**

The logo anchor has `target="_blank"` but no `rel` attribute:
```html
<a href="http://skechers.attentivemail.com/ls/click?..." target="_blank">
```
This is a minor phishing-vector risk; `rel="noopener noreferrer"` should be added to all external `target="_blank"` links.

**UTM parameters** — Cannot confirm presence or absence; the Attentive redirect URLs are base64/URL-encoded and the destination query string is not visible in the truncated source. UTM continuity is flagged for verification in §6.

---

### 3. Rendering & Accessibility

**Empty `<title>` tag**

```html
<title></title>
```
Several clients (Outlook desktop, Samsung Mail) display the `<title>` value in the tab or notification UI. An empty title is a missed opportunity and can look broken in some rendering environments. Recommend: `<title>Your Items Are Waiting | Skechers</title>`.

**Image alt text** — The `<img>` tag for the logo is truncated in the provided source; alt text cannot be confirmed. Must be verified against full source.

**Preheader padding uses mixed invisible Unicode character types**

The preheader spacer block mixes two distinct invisible character classes:
- U+034F COMBINING GRAPHEME JOINER (`͏`) — repeated ~150×
- U+00AD SOFT HYPHEN (`­`) — repeated ~200×

This two-class approach is intentional (to defeat preheader-reading in some clients) but is unusual. Some spam filters have started flagging high densities of these characters. Single-character-class padding (U+034F only, or zero-width non-joiners) is more broadly safe.

**`lang="en"` present on `<html>`** — No issue.

**Responsive breakpoint coverage** — Media query fires at `max-width:620px`; container is 600px. Standard and functional.

---

### 4. Personalization & Merge Tokens

**No visible personalization tokens in the truncated source.** For a cart abandonment email, the expected dynamic tokens are:
- First name in subject/preheader — subject is generic ("Your Items Are Waiting!")
- Abandoned cart item name(s), image(s), price(s)
- Cart recovery CTA URL with customer session token

None of these are visible in the provided HTML fragment. This may be because the source was captured in a rendered state (tokens already resolved) or the dynamic content block appears later in the truncated portion. Must verify the full source to confirm abandoned-cart product block is populated and not showing raw token strings (e.g., `{{product_name}}`, `{{cart_url}}`).

---

### 5. Compliance

**Cannot fully audit** — the footer/unsubscribe section is in the truncated portion of the HTML. The following must be verified against full source:

| Requirement | Status |
|---|---|
| Physical mailing address (CAN-SPAM §5) | Unverified — not in provided fragment |
| One-click unsubscribe link | Unverified — not in provided fragment |
| Unsubscribe honor within 10 days | Operational/ESP-level — outside HTML scope |
| Sender identity matches From header | `hello@msgs.skechers.com` domain matches Attentive's typical ESP subdomain pattern — verify SPF/DKIM alignment for `msgs.skechers.com` |

**SPF/DKIM/DMARC** — Sending domain is `msgs.skechers.com` (Attentive-managed subdomain). Confirm that:
1. SPF record for `msgs.skechers.com` includes Attentive's sending IPs
2. DKIM signature `d=` value aligns with `msgs.skechers.com` (not a generic Attentive domain)
3. DMARC policy on `skechers.com` is at least `p=quarantine`

These are infrastructure-level checks, not verifiable from HTML alone.

---

### 6. Email-to-Site Continuity

**UTM parameter verification required**

All CTA links route through Attentive's redirect chain (`skechers.attentivemail.com/ls/click?upn=...`). The destination URLs and any appended UTM parameters are encoded within the `upn=` value. Must decode or click-test to confirm:

- `utm_source` is set (expected: `attentive` or `email`)
- `utm_medium=email`
- `utm_campaign` matches this specific send (e.g., `cart_abandonment` or campaign ID)
- `utm_content` distinguishes individual CTAs (logo vs. product vs. primary CTA)

Without UTM tags on landing pages, abandoned-cart conversions from this send will be misattributed to direct/none in analytics.

**Cart session continuity** — The cart recovery URL must include a session or token parameter that pre-populates the cart for the specific recipient. This is ESP/backend logic but the token's presence in the CTA URL should be confirmed in the decoded destination URL.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | All links and images use `http://` | Migrate to `https://` across all Attentive-hosted redirect and image URLs |
| High | UTM parameters unverified | Decode `upn=` destination URLs and confirm all four UTM dimensions are present |
| Medium | Empty `<title>` tag | Set to descriptive value; most clients render it somewhere |
| Medium | Preheader uses mixed invisible Unicode character classes | Standardize to single character class (U+034F only) |
| Medium | `target="_blank"` links missing `rel` attribute | Add `rel="noopener noreferrer"` to all external links |
| Low | Personalization token resolution unconfirmed | Validate full rendered source shows resolved cart content, not raw tokens |
| Low | Footer compliance unverified | Confirm physical address and unsubscribe link present in full HTML |
| Info | SPF/DKIM/DMARC alignment for `msgs.skechers.com` | Run DNS/header check; confirm DMARC at least `p=quarantine` |
## Recent history

- [[2026-04-10-did-you-forget-something]] — 5/10 (2026-04-10)
- [[2026-04-10-enjoy-your-everyday-runs-in-the-new-supernova-rise-3]] — 6/10 (2026-04-10)
- [[2026-04-09-test-mkg-us-na-w-arch-gender-en-04102026-bthe-arcades-you-love-now-in-online-exc]] — 6/10 (2026-04-09)

