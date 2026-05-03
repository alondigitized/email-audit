---
slug: 2026-05-03-our-community-s-must-have-products
type: email
date: 2026-05-03
persona: rae-l
score: "7/10"
sender: Glossier
subject: Our community’s must-have products
tags: [email, score-7, sender/glossier]
---
# Our community’s must-have products
**Score:** 7/10 · **Type:** Email audit · **2026-05-03**
## Executive summary

- A clean, editorial Glossier email anchored in community endorsement, spotlighting three hero products — a face serum/oil, Boy Brow pomade, and Balm Dotcom lip balm. The email leans on social proof aggressively (9k+ 5-star reviews, a customer quote, "sold every 60 seconds") and has a playful "deserted island essentials" framing in the hero. The render is crisp and bug-free. The main drag: no urgency anywhere in the body, all four CTAs repeat the same generic "Shop now" copy, and the 10% off first-order banner feels misaligned for existing subscribers who have already purchased.

## What's working

- **Social proof density is the standout.** The email stacks three distinct proof signals: an in-email community quote with attribution, a "9k 5-star reviews" callout with rendered stars, and a velocity claim ("one's sold every 60 seconds"). That's meaningful for overcoming purchase hesitation.
- **Editorial hero framing.** "If we were stuck on a deserted island..." is a memorable content hook that differentiates this from a standard promo blast. It gives the whole email a curatorial angle.
- **Product specificity.** Each module focuses on exactly one product with a clear headline, one benefit claim, and one CTA. No carousel confusion.
- **Clean render.** No broken images, no layout bleed, consistent typography and spacing throughout. The product photography is high quality and brand-consistent.

## What's weak

- **All CTAs say "Shop now."** Four modules, four identical buttons. "Shop Boy Brow," "Get the Balm," or "Try the Serum" would be more persuasive and reduce decision fatigue.
- **Zero urgency.** No countdown, no "while supplies last," no end date on the 10% offer. This email could have been sent any day this year without a single edit.
- **The 10% off banner is for first-order customers only.** Visible at the very top, this offer is dead weight for existing subscribers. For a returning customer, it subtly signals "this isn't really for you."
- **The social proof quote is for Glossier You (the fragrance)** — "Cool Big Sister Energy" — but the section it's attached to rolls into Boy Brow. The quote and the product module feel loosely linked.
- **Preview text mismatch.** The preheader leads with the first-order discount, but the subject line is about community favorites. These are two separate value propositions that don't reinforce each other.

## Recommendations

- 1. **Segment the 10% off banner.** Suppress it for existing purchasers or replace it with a loyalty message ("Your favorites, back in stock"). The current version makes the email feel like an acquisition send dropped into an existing subscriber list.
- 2. **Differentiate CTA copy per module.** Each product deserves its own verb: "Try Boy Brow," "Shop Balm Dotcom," "Get Dewy Skin." This also helps attribution if you're tracking clicks per module.
- 3. **Anchor the social proof to the correct product.** Move the "Cool Big Sister Energy" quote to a Glossier You section, or replace it with a Boy Brow or Balm Dotcom review to match the modules below.
- 4. **Add one urgency lever.** Even "Shipping free this weekend" or "Limited shades available" would give a reason to click now rather than later.
- 5. **Rewrite the preheader to support the subject.** The subject sells community curation; the preheader should reinforce it: "Your community picks for the perfect routine" pairs better than a first-order discount offer.
- | Priority | Issue | Action |
- |---|---|---|
- | **High** | Full source needed | Re-run audit with complete HTML to verify unsubscribe footer, image alt text, and all link UTM coverage |
- | **Medium** | `@import` font loading | Accepted limitation of email clients — document as known behavior; no fix available without switching to web-safe fonts or inline base64 embedding (not recommended at scale) |
- | **Low** | Timestamp class names in hover CSS | Confirm ESP regenerates these per-send; if static, document that hover states are tied to the 2025-06-27 build date |
- | **Low** | Authentication headers | Confirm SPF/DKIM/DMARC pass on `eml.glossier.com` via raw message headers or ESP deliverability dashboard |

## Full review
---

## 1. Executive Summary

A clean, editorial Glossier email anchored in community endorsement, spotlighting three hero products — a face serum/oil, Boy Brow pomade, and Balm Dotcom lip balm. The email leans on social proof aggressively (9k+ 5-star reviews, a customer quote, "sold every 60 seconds") and has a playful "deserted island essentials" framing in the hero. The render is crisp and bug-free. The main drag: no urgency anywhere in the body, all four CTAs repeat the same generic "Shop now" copy, and the 10% off first-order banner feels misaligned for existing subscribers who have already purchased.

---

## 2. Business Impact Score

**7/10**

Criteria that were TRUE:
- Sender is a recognized brand (Glossier is a well-known DTC beauty brand)
- One concrete offer is visible (10% off first order in the top banner)
- Primary CTA is unambiguous (four "Shop now" buttons, clearly styled)
- Visual hierarchy is clear — hero module dominates, product modules stack cleanly below
- No render bugs — images load, text doesn't overlap, layout is intact
- Demographic signals match a beauty consumer persona (beauty models, skincare and makeup products)
- Offer feels honest — no buried fine print visible, product claims are specific ("lasts up to 12 hours," "over 12 million")

Criteria NOT met:
- Subject/hero copy doesn't explicitly reference a specific focus area (e.g., skincare vs. color vs. fragrance)
- No seasonal or campaign-specific framing — "community must-haves" is evergreen
- No loyalty or member pricing visible

---

## 3. What's Working

**Social proof density is the standout.** The email stacks three distinct proof signals: an in-email community quote with attribution, a "9k 5-star reviews" callout with rendered stars, and a velocity claim ("one's sold every 60 seconds"). That's meaningful for overcoming purchase hesitation.

**Editorial hero framing.** "If we were stuck on a deserted island..." is a memorable content hook that differentiates this from a standard promo blast. It gives the whole email a curatorial angle.

**Product specificity.** Each module focuses on exactly one product with a clear headline, one benefit claim, and one CTA. No carousel confusion.

**Clean render.** No broken images, no layout bleed, consistent typography and spacing throughout. The product photography is high quality and brand-consistent.

---

## 4. What's Weak

**All CTAs say "Shop now."** Four modules, four identical buttons. "Shop Boy Brow," "Get the Balm," or "Try the Serum" would be more persuasive and reduce decision fatigue.

**Zero urgency.** No countdown, no "while supplies last," no end date on the 10% offer. This email could have been sent any day this year without a single edit.

**The 10% off banner is for first-order customers only.** Visible at the very top, this offer is dead weight for existing subscribers. For a returning customer, it subtly signals "this isn't really for you."

**The social proof quote is for Glossier You (the fragrance)** — "Cool Big Sister Energy" — but the section it's attached to rolls into Boy Brow. The quote and the product module feel loosely linked.

**Preview text mismatch.** The preheader leads with the first-order discount, but the subject line is about community favorites. These are two separate value propositions that don't reinforce each other.

---

## 5. Recommendations

1. **Segment the 10% off banner.** Suppress it for existing purchasers or replace it with a loyalty message ("Your favorites, back in stock"). The current version makes the email feel like an acquisition send dropped into an existing subscriber list.

2. **Differentiate CTA copy per module.** Each product deserves its own verb: "Try Boy Brow," "Shop Balm Dotcom," "Get Dewy Skin." This also helps attribution if you're tracking clicks per module.

3. **Anchor the social proof to the correct product.** Move the "Cool Big Sister Energy" quote to a Glossier You section, or replace it with a Boy Brow or Balm Dotcom review to match the modules below.

4. **Add one urgency lever.** Even "Shipping free this weekend" or "Limited shades available" would give a reason to click now rather than later.

5. **Rewrite the preheader to support the subject.** The subject sells community curation; the preheader should reinforce it: "Your community picks for the perfect routine" pairs better than a first-order discount offer.

---

## 6. Bottom Line

A well-produced, brand-consistent email that leans on community proof to sell three iconic products. The editorial hook is memorable and the render is clean. But the absence of urgency, generic CTA copy, and a preheader/banner mismatch leave conversion points on the table. Works as awareness and consideration for someone in the consideration phase; less effective for driving same-session purchases.

---

## 7. Subject Line Analysis

- **Subject:** `Our community's must-have products`
- **Length:** 35 characters
- **Scores (1-10):** Clarity `7`, Curiosity `5`, Personalization `2`, Urgency `1`, Specificity `3`
- **Strengths:**
  - Short and mobile-safe at 35 chars
  - "Community" framing is on-brand for Glossier and implies curated social proof
- **Weaknesses:**
  - Zero urgency — no deadline, no quantity, nothing time-sensitive
  - "Must-have" is overused marketing language; doesn't tell you what categories or products are inside
- **Alt A:** `9,000+ reviews say these are worth it`
- **Alt B:** `The products your community repurchases most`

---

## 8. Preview Text Analysis

- **Preview:** `Enjoy 10% off your first order with a code` *(partial — banner text likely doubling as preheader)*
- **Length:** ~42 characters visible
- **Scores (1-10):** Complements subject `2`, Specificity `5`, Clarity `7`, Inbox-fit `3`
- **Strengths:**
  - Concrete offer (10% off) adds a tangible incentive not present in the subject
  - Copy is clean and readable — no inbox garbage
- **Weaknesses:**
  - "First order" explicitly excludes existing subscribers — the audience most likely to have this email in their inbox
  - Does not complement the community/curation angle of the subject at all; reads as a separate acquisition message layered on top
- **Alt A:** `The products your neighbors, coworkers, and feeds are obsessed with`
- **Alt B:** `Serum. Brows. Lip balm. Your community's desert island picks.`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `6/10`
- **Signals counted:** Sender display name recognizable (Glossier), subject relevant to beauty persona, preview text is real copy (not junk), subject under 50 chars, no spam signals, preview adds an offer not in subject
- **Rationale:** Glossier's brand recognition and the short, clean subject line will earn the open from fans, but the generic "must-have" framing and zero urgency make this easy to defer. The first-order offer in the preheader slightly undercuts trust for existing subscribers.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `7/10`
- **Signals counted:** Hero offer visible at top (10% off banner), primary CTAs are in the beauty category, offer reduces price (10% off), specific products featured per module (not just homepage links), product detail visible (12-hour wear claim, sold every 60 seconds velocity stat), reviews and social proof present (9k 5-stars + customer quote), brand voice consistent and trusted, no friction (clean render, no broken images)
- **Rationale:** The social proof stack — the review count, customer quote, and velocity claim — does real work for someone already interested in Glossier. The specific product modules give three clear paths to click. The main drag is that "Shop now" CTAs feel interchangeable and there's no deadline to act on.

---

## 11. Evidence

- **Overall purpose:** Community curation + product sell-in across three hero SKUs. Light acquisition element via the 10% first-order banner.
- **Hero / primary value prop:** "If we were stuck on a deserted island..." — editorial framing positions featured products as essential, community-endorsed must-haves.
- **Membership / benefits section:** None visible. The 10% off banner is acquisition-focused, not loyalty.
- **Product modules:**
  - *Futuredesk/Face Serum* — "An instant dewy glow that lasts" — 12-hour wear, hydration-forward messaging, one "Shop now" CTA
  - *Boy Brow* — "Brows so good, one's sold every 60 seconds!" — velocity social proof + close-up imagery
  - *Balm Dotcom* — "The original viral lip balm" — 12 million+ units social proof + product lineup shot
- **Social proof module:** Standalone section with "Over 9k 5-star reviews (and counting)!" star rendering + attributed customer quote about Glossier You fragrance
- **Utility / secondary modules:** None — no "shop all" grid, no "new arrivals" rail
- **Bugs / friction:** None visible. Render is clean. The only friction is structural: the 10% off first-order banner at the top of an existing-subscriber send is a relevance mismatch, not a render bug.

---

## Technical Audit

## Technical Audit — Glossier "Our community's must-have products"

---

### 1. Technical Summary

Standard layout-table email with proper MSO conditionals and responsive breakpoints. Primary technical concern is `@import`-based font loading, which is stripped by major clients; the HTML truncation prevents full compliance and link verification.

---

### 2. Link & Tracking Issues

**Cannot fully assess** — HTML is truncated before product CTAs and footer links appear. The following is confirmed from visible source:

- Font stylesheet pulled from Shopify CDN via `@import`: `https://cdn.shopify.com/s/files/1/0627/9164/7477/files/apercu.css?v=1691509522`. No click-tracking wrapper is visible on this asset, but it is a stylesheet, not a CTA, so that is expected.
- Timestamp-derived CSS class names (`cj-1750999477928`, `ck-1750999477928`, etc.) are present in hover-state rules. These are ESP-generated identifiers (consistent with Klaviyo/Stripo patterns) and are benign, but confirm the template was assembled at approximately 2025-06-27. If the same template is reused across sends without regeneration, these class names will remain stale — not a functional issue unless ESP injects new IDs per send and the CSS no longer matches.

**Action required:** Verify full link list and UTM coverage once untruncated source is available.

---

### 3. Rendering & Accessibility

**`@import` font loading will silently fail in major clients.**

```css
@import url(https://cdn.shopify.com/s/files/1/0627/9164/7477/files/apercu.css?v=1691509522);
```

Gmail (web and Android), Outlook (all versions), and Yahoo strip `@import` rules from `<style>` blocks. The declared fallback stack `Apercu, arial, sans-serif` means Arial renders in those clients — acceptable, but the custom brand font will not load for the majority of recipients. This is a known industry limitation; flag only if brand policy requires Apercu fidelity.

**No issues found** with:
- MSO conditional comments (`<!--[if gte mso 9]>`, `<!--[if mso]>`) — present and correctly structured
- `lang="en"` and `dir="ltr"` on `<html>` — correct
- `role="none"` on outer layout table — correct suppression of table semantics for screen readers
- Preheader implementation — `display:none`, `visibility:hidden`, `font-size:0`, `mso-hide:all` all applied; no rendering bleed risk
- Viewport meta — `width=device-width, initial-scale=1` present
- `x-apple-disable-message-reformatting` — present; prevents iOS auto-scaling

**Cannot confirm** `alt` attribute coverage on images — source truncated before `<img>` tags.

---

### 4. Personalization & Merge Tokens

No merge tokens are visible anywhere in the rendered source. Subject line ("Our community's must-have products") and preheader ("fall in love with them today") are fully static. No first-name token, no loyalty-tier or segment token.

This is not a defect unless the send configuration was supposed to include personalization — confirm against the ESP campaign settings.

---

### 5. Compliance

**Cannot confirm** — HTML truncates before the footer. The following **must** be verified in the full source:

| Requirement | Status |
|---|---|
| Physical mailing address (CAN-SPAM §5(a)(5)) | Unverifiable — footer not in scope |
| One-click unsubscribe link | Unverifiable — footer not in scope |
| Sender identification ("Glossier" in From name) | **Pass** — `"Glossier" <gTEAM@eml.glossier.com>` |
| Sending subdomain isolation | **Pass** — `eml.glossier.com` is correctly separated from root domain |

Authentication headers (SPF, DKIM, DMARC) are envelope-layer data not present in HTML source — must be pulled from raw message headers.

---

### 6. Email-to-Site Continuity

**Cannot assess** — product CTAs and destination URLs are in the truncated portion of the HTML. Once the full source is available, verify:

- UTM parameters present on all `glossier.com` links (`utm_source`, `utm_medium`, `utm_campaign` minimum)
- No redirect chains that drop UTM parameters before the landing page
- Product pages linked from email are live and match featured items

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **High** | Full source needed | Re-run audit with complete HTML to verify unsubscribe footer, image alt text, and all link UTM coverage |
| **Medium** | `@import` font loading | Accepted limitation of email clients — document as known behavior; no fix available without switching to web-safe fonts or inline base64 embedding (not recommended at scale) |
| **Low** | Timestamp class names in hover CSS | Confirm ESP regenerates these per-send; if static, document that hover states are tied to the 2025-06-27 build date |
| **Low** | Authentication headers | Confirm SPF/DKIM/DMARC pass on `eml.glossier.com` via raw message headers or ESP deliverability dashboard |
## Recent history

- [[2026-05-03-rae-this-mystery-offer-ends-soon-terms-apply]] — 7/10 (2026-05-03)
- [[2026-05-03-best-sellers-no-brainers-e7ed8f1f-21d6-445d-80a5-]] — 5/10 (2026-05-03)
- [[2026-05-02-summer-essentials-just-in-3fe5fbe8-f189-4d7a-84ea-]] — 5/10 (2026-05-02)

