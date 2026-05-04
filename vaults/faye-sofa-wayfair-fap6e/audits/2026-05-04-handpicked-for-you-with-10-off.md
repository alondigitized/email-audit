---
slug: 2026-05-04-handpicked-for-you-with-10-off
type: email
date: 2026-05-04
persona: faye-sofa-wayfair-fap6e
score: "6/10"
sender: Wayfair
subject: Handpicked for you... with 10% off!
tags: [email, score-6, sender/wayfair]
---
# Handpicked for you... with 10% off!
**Score:** 6/10 · **Type:** Email audit · **2026-05-04**
## Executive summary

- A standard Wayfair multi-category promotional email built around a 10%-off promo code. The email is clean, renders without obvious bugs, and hits several product verticals (outdoor structures, dining, pet, limited deals), but it sprawls rather than focuses. The hero promise — "home inspo. for you." — is soft when it could be anchored to the offer. With five or six distinct product modules competing for attention, nothing truly owns the send. Solid execution on a mediocre brief.

## What's working

- **Offer clarity in the hero.** The 10% off code is visible above the fold — readers don't have to hunt.
- **Price anchoring.** "$100" for gazebos and "$300" for dining sets give immediate reference points without requiring a click.
- **50% off deal badges.** The Limited-Time Deals module has prominent discount badges that create a genuine sense of value.
- **"Best-Selling" label on Cat Toppers.** The only social-proof signal in the email; it works.
- **App CTA near footer.** "Get Exclusive Deals on the App" with a visible download prompt is a useful secondary conversion.

## What's weak

- **Hero copy is vague.** "Home inspo. for you." communicates nothing the reader couldn't have guessed from seeing the Wayfair logo. The 10% off code is buried below it rather than leading the headline.
- **Too many vertical categories, zero editorial coherence.** Gazebos → dining → cat toppers → limited deals → app download is not a narrative; it's a category dump. The email reads like a weekly digest, not a curated send.
- **"Shop Now" CTAs are uniformly generic.** Not one button says what you're shopping for. "Shop Gazebos," "Shop Dining," or "Claim 10% Off" would all be stronger.
- **Promo code framing is oddly narrow.** "Bring prints home with the code" — prints? The featured products are outdoor furniture, dining tables, and cat accessories. The copy doesn't match the catalog.
- **No deadline on the 10% off.** The "Limited-Time Deals" section has urgency language, but the primary hero offer carries none, making it feel passive.
- **No personalization signal beyond "for you."** Wayfair has rich browse/purchase data. Nothing in this email reflects it — no "based on your recent views," no category affinity. The "Handpicked" subject line promise isn't delivered in the body.

## Recommendations

- 1. **Lead with the offer, not the vibe.** Swap the hero to "10% off your next order — code inside" with the category hook as secondary copy.
- 2. **Pick one hero category per send.** If the data says this segment shops outdoor, make it an outdoor email. Cross-category dilution lowers CTR.
- 3. **Add a deadline to the promo code.** Even "offer ends Sunday" converts harder than a perpetual-feeling discount.
- 4. **Rename CTAs to match the module.** "Shop Gazebos from $100" beats "Shop Now" every time.
- 5. **Fix the "prints" copy or drop it.** It reads like a copy/paste from a different campaign.
- | Priority | Issue | Action |
- |----------|-------|--------|
- | High | Custom font has no reliable cross-client fallback | Add a system font stack (`font-family: "Sofia", Arial, sans-serif`) to all font declarations consuming the custom face |
- | High | Fixed heights clip content silently | Replace `height: Npx` with `min-height: Npx` on all `.ProductRec-*` mobile overrides |
- | Medium | `word-break: break-all` is destructive | Change to `word-break: break-word` |
- | Low | `.woff` only, no `.woff2` | Non-issue for email (font will be ignored anyway), but wasted bytes if clients ever support it — consider removing the `@font-face` block entirely and relying on the `mso-font-alt` + system stack |

## Full review
---

## 1. Executive Summary

A standard Wayfair multi-category promotional email built around a 10%-off promo code. The email is clean, renders without obvious bugs, and hits several product verticals (outdoor structures, dining, pet, limited deals), but it sprawls rather than focuses. The hero promise — "home inspo. for you." — is soft when it could be anchored to the offer. With five or six distinct product modules competing for attention, nothing truly owns the send. Solid execution on a mediocre brief.

---

## 2. Business Impact Score

**6/10**

Criteria TRUE:
- Sender is recognizable (Wayfair, a top-of-mind home retailer)
- One concrete offer is visible (10% off with a promo code, hero section)
- Primary CTA is unambiguous (repeated "Shop Now" buttons throughout)
- No render bugs — clean layout, no broken images, no overlapping text
- Email reflects current seasonal framing (home refresh / spring inspiration)

Criteria NOT met: hero copy does not reference a specific persona focus area; demographic signals are neutral/invisible at screenshot scale; loyalty/member benefits are not surfaced; offer feels mildly obscured by the number of competing modules; the promo code language ("bring prints home") is oddly specific and slightly misaligned with most of the featured categories (furniture, outdoor).

---

## 3. What's Working

- **Offer clarity in the hero.** The 10% off code is visible above the fold — readers don't have to hunt.
- **Price anchoring.** "$100" for gazebos and "$300" for dining sets give immediate reference points without requiring a click.
- **50% off deal badges.** The Limited-Time Deals module has prominent discount badges that create a genuine sense of value.
- **"Best-Selling" label on Cat Toppers.** The only social-proof signal in the email; it works.
- **App CTA near footer.** "Get Exclusive Deals on the App" with a visible download prompt is a useful secondary conversion.

---

## 4. What's Weak

- **Hero copy is vague.** "Home inspo. for you." communicates nothing the reader couldn't have guessed from seeing the Wayfair logo. The 10% off code is buried below it rather than leading the headline.
- **Too many vertical categories, zero editorial coherence.** Gazebos → dining → cat toppers → limited deals → app download is not a narrative; it's a category dump. The email reads like a weekly digest, not a curated send.
- **"Shop Now" CTAs are uniformly generic.** Not one button says what you're shopping for. "Shop Gazebos," "Shop Dining," or "Claim 10% Off" would all be stronger.
- **Promo code framing is oddly narrow.** "Bring prints home with the code" — prints? The featured products are outdoor furniture, dining tables, and cat accessories. The copy doesn't match the catalog.
- **No deadline on the 10% off.** The "Limited-Time Deals" section has urgency language, but the primary hero offer carries none, making it feel passive.
- **No personalization signal beyond "for you."** Wayfair has rich browse/purchase data. Nothing in this email reflects it — no "based on your recent views," no category affinity. The "Handpicked" subject line promise isn't delivered in the body.

---

## 5. Recommendations

1. **Lead with the offer, not the vibe.** Swap the hero to "10% off your next order — code inside" with the category hook as secondary copy.
2. **Pick one hero category per send.** If the data says this segment shops outdoor, make it an outdoor email. Cross-category dilution lowers CTR.
3. **Add a deadline to the promo code.** Even "offer ends Sunday" converts harder than a perpetual-feeling discount.
4. **Rename CTAs to match the module.** "Shop Gazebos from $100" beats "Shop Now" every time.
5. **Fix the "prints" copy or drop it.** It reads like a copy/paste from a different campaign.

---

## 6. Bottom Line

Competent but unfocused. Wayfair is leaving personalization value on the table by serving a category-dump email when their data should support a tighter, higher-converting send. The 10% off hook is real — the email just doesn't commit to it.

---

## 7. Subject Line Analysis

- **Subject:** `Handpicked for you... with 10% off!`
- **Length:** 36 characters
- **Scores (1-10):** Clarity `7`, Curiosity `5`, Personalization `3`, Urgency `4`, Specificity `6`
- **Strengths:**
  - Concrete discount signal (10%) makes the value proposition scannable at inbox speed
  - Under 50 chars; renders cleanly on mobile without truncation
- **Weaknesses:**
  - "Handpicked for you" is mass-market language masquerading as personalization — the body doesn't back it up
  - No deadline or category qualifier; urgency is zero
- **Alt A:** `Your 10% off code — plus this week's best home finds`
- **Alt B:** `We pulled these for you — 10% off, code inside`

---

## 8. Preview Text Analysis

- **Preview:** `(none / leaking junk — nav link text "Shop Sale | Shop Grid | New Arrivals" likely bleeds into preheader)`
- **Length:** N/A — not legible as intentional preview copy
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `2`, Inbox-fit `1`
- **Strengths:**
  - None observable
- **Weaknesses:**
  - Top of the email appears to be navigation links, which will render as the preheader in most clients — wasting the most valuable real estate in the send
  - Subject does all the work; preheader adds nothing
- **Alt A:** `Your code: [CODE] — 10% off gazebos, dining, and more through Sunday`
- **Alt B:** `See what we pulled for you this week — tap to unlock 10% off`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `6/10`
- **Signals counted:** sender recognizable (Wayfair), subject concrete (specific % off), subject under 50 chars, no spam signals, personalization hint ("Handpicked for you")
- **Rationale:** Wayfair is a trusted household name and the subject delivers a clear dollar-adjacent hook. The "for you" framing nudges curiosity but the preheader likely leaks nav text, costing the email its best opportunity to extend the open argument.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `7/10`
- **Signals counted:** hero offer visible without scrolling, offer reduces price (10% off + 50% deal badges), time-bounded urgency in the deals module, price anchors visible ($100 gazebos, $300 dining), "Best-Selling" social proof on cat toppers, brand voice consistent throughout, no rendering friction
- **Rationale:** The deals section with 50% badges is genuinely compelling and would pull a click on impulse; the 10% off hero code is a low-friction, category-agnostic incentive. What's holding the score back: no single product hero, generic "Shop Now" CTAs, and zero personalization signals in the body despite the subject's promise.

---

## 11. Evidence

- **Overall purpose:** Drive site traffic and promo-code redemption across multiple home categories via a weekly digest-style send.
- **Hero / primary value proposition:** "Home inspo. for you." + 10% off promo code. The code is visible but the offer copy ("bring prints home") doesn't align with the featured products.
- **Membership / benefits section:** None visible. No loyalty tier callout, no member pricing. The app CTA near the footer is the closest proxy.
- **Product discoverability / recommendation modules:**
  - Gazebos & pergolas from $100 (Shop Now)
  - "Find your new fave" — a browse-oriented grid of shelving/storage items (no price anchors visible)
  - Drop-down dining from $300 (Shop Now)
  - Best-Selling Cat Toppers (Shop Now)
  - Shop Limited-Time Deals — multiple items with 50% off badges
- **Utility / secondary modules:**
  - Wayfair Brands section (brand awareness)
  - Flexible Financing callout
  - Get Exclusive Deals on the App (app install CTA with store badges)
- **Bugs / friction / clarity issues:** No broken images or overlapping text visible. The "bring prints home" copy in the hero is semantically mismatched with the featured non-print products — whether that's a copy error or a segmentation mismatch cannot be confirmed from the render alone, but it reads as friction. The email is long relative to the single promo-code hook, requiring multiple scrolls before reaching the highest-value deals module.

---

## Technical Audit

## Technical Audit — Wayfair "Handpicked for you... with 10% off!"

---

### 1. Technical Summary

Well-structured XHTML 1.0 Transitional email with client-specific hacks for Outlook, Gmail, and iOS. The HTML source is truncated, so link/tracking and compliance sections are assessed on observable structure only; flags below reflect confirmed evidence from the visible markup.

---

### 2. Link & Tracking Issues

**Cannot fully assess** — HTML is truncated before product links appear. No href values visible in provided source.

- Confirm all product/CTA links carry UTM parameters before sending.
- Confirm click-tracking wrapper (redirect domain) is present on every `<a>`.

---

### 3. Rendering & Accessibility

**Confirmed issues:**

- **Custom font will not render in most clients.** `@font-face` loads `sofia_reg.woff` from `secure.img.wfrcdn.com`. Gmail (web/Android), Outlook (Windows), and Yahoo all strip or ignore `@font-face`. Only `.woff` format declared — no `.woff2`, no system-font stack in the `@font-face` block itself. `mso-font-alt: "Arial"` covers Outlook only; all other blocking clients fall through to the browser default, not a controlled fallback.
  - Evidence: `src: url(https://secure.img.wfrcdn.com/st4/stores/common/fonts/sofia/sofia_reg.woff) format("woff"); mso-font-alt: "Arial"`

- **`word-break: break-all` on `.ProductRec-name`** breaks words at arbitrary byte boundaries, not word boundaries. Should be `word-break: break-word` or `overflow-wrap: anywhere`.
  - Evidence: `.ProductRec-name { word-break: break-all; overflow: hidden; display: block; height: 48px !important }`

- **Fixed pixel heights clip dynamic content silently.** `.ProductRec-stars`, `.ProductRec-shippingCopy` → `height: 16px`; `.ProductRec-price` → `height: 40px`; `.ProductRec-salesCopy` → `height: 28px`. Any content taller than the fixed height is clipped with no visual indicator.

- **`overflow: hidden` + `height: 48px` on `.ProductRec-name`** will silently truncate product names longer than two lines. No `text-overflow: ellipsis` equivalent exists in email — the text simply disappears.

---

### 4. Personalization & Merge Tokens

**Cannot assess** — no merge token syntax (`{{`, `%%`, `*|`, `${`) is visible in the truncated source. Verify in the full template that:
- No unresolved tokens render as literal placeholder strings on send.
- Personalization fallback values are set for recommendation slots if the engine returns fewer than the expected product count.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Cannot assess from truncated source** — unsubscribe link and physical address are typically in the footer, which is outside the visible HTML window.

Verify:
- Plaintext unsubscribe link present and functional (one-click or ≤2 step).
- Physical mailing address present in footer per CAN-SPAM §5(a)(5).
- `List-Unsubscribe` and `List-Unsubscribe-Post` headers set at the MTA level (not visible in HTML; check sending infrastructure config for `noreply@service.wayfair.com`).
- SPF/DKIM/DMARC pass for `service.wayfair.com` sending domain — not verifiable from HTML alone.

---

### 6. Email-to-Site Continuity

**Cannot assess** — no `<a href>` values present in truncated source. On full review, confirm:
- All links include `utm_source=email`, `utm_medium=email`, `utm_campaign=<campaign-id>`, and `utm_content=<slot-identifier>` for per-product click attribution.
- The 10% off discount is either auto-applied on landing or the landing page prominently surfaces the promo code — a broken discount path is the top abandonment cause for promo emails.

---

### 7. Recommendations

| Priority | Issue | Action |
|----------|-------|--------|
| High | Custom font has no reliable cross-client fallback | Add a system font stack (`font-family: "Sofia", Arial, sans-serif`) to all font declarations consuming the custom face |
| High | Fixed heights clip content silently | Replace `height: Npx` with `min-height: Npx` on all `.ProductRec-*` mobile overrides |
| Medium | `word-break: break-all` is destructive | Change to `word-break: break-word` |
| Low | `.woff` only, no `.woff2` | Non-issue for email (font will be ignored anyway), but wasted bytes if clients ever support it — consider removing the `@font-face` block entirely and relying on the `mso-font-alt` + system stack |
## Recent history

- [[2026-05-04-yesss-new-unique-novelty-rugs-have-arrived]] — 6/10 (2026-05-04)
- [[2026-05-03-coolers-up-to-70-off-hours-left]] — 5/10 (2026-05-03)
- [[2026-05-03-your-desk-search-is-over]] — 8/10 (2026-05-03)

