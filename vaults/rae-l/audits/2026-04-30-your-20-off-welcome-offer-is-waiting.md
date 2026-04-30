---
slug: 2026-04-30-your-20-off-welcome-offer-is-waiting
type: email
date: 2026-04-30
persona: rae-l
score: "5/10"
sender: SKECHERS
subject: Your 20% Off Welcome Offer is waiting!
tags: [email, score-5, sender/skechers]
---
# Your 20% Off Welcome Offer is waiting!
**Score:** 5/10 · **Type:** Email audit · **2026-04-30**
## Executive summary

- This is a welcome/acquisition email with a clear purpose: redeem the 20% off first-order promo code. The hero is unambiguous — code, discount, and CTA are all above the fold. After that, the email sprawls into a wide but shallow catalog experience (size grids, category nav, Skechers Plus pitch, utility links) that dilutes the urgency without adding meaningful discovery. The structure is functional but unfocused, and the visual energy drops sharply after the fold.
- The core conversion mechanic is intact, but the email does little to earn the click beyond displaying a code. No social proof, no product storytelling, no personalization signal — it reads like a templated onboarding drip that could've gone to any new subscriber.

## What's working

- **Code is front and center.** `WEL20-Z6M2MWMLH5` appears in the hero banner with a contrasting background and a "SHOP NOW" CTA directly beneath — zero hunting required.
- **"Something for Everyone" framing.** The lifestyle hero image pairs men's, women's, and athletic styles, which correctly signals broad catalog range to a new subscriber who may not yet know their preferred category.
- **Skechers Plus recruitment module** has a clean three-icon benefit list (exclusive offers, free shipping/returns, birthday surprises) — right call to introduce loyalty at the welcome stage.
- **Utility footer** covers SMS opt-in, app download, curbside pickup, find-a-store, and BNPL options in one compact row — handles multiple purchase journeys without dominating.

## What's weak

- **Size grid modules are noise.** The women's, men's, and kids' size tables occupy a massive chunk of the email body and deliver no persuasion value in a marketing email. This looks like a transactional/order-confirmation module accidentally dropped into a promotional template.
- **No product featured.** There's not a single specific shoe shown below the hero. A welcome email is a prime opportunity to surface a bestseller or trending style — this one skips it entirely.
- **Category nav is redundant with the website.** "WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE" as stacked text links adds length without adding discovery or desire.
- **Visual momentum collapses after the hero.** The bright banner gives way to a white expanse of tables and text links with no imagery to re-engage.
- **CTA count is low relative to scroll depth.** One "SHOP NOW" button at the top, then a "JOIN NOW" for Skechers Plus — nothing else pulls the reader back to transacting after the size tables.

## Recommendations

- 1. **Remove the size grids entirely.** They belong in a size-guide page, not a promotional email. Reclaim that vertical space.
- 2. **Add a 3-product bestseller row** with images, names, and prices below the hero — give the 20% off offer something concrete to land on.
- 3. **Add a second "SHOP NOW" CTA** after the product row so readers who scroll don't have to scroll back up.
- 4. **Replace the category text links with image tiles** — a small grid of Women/Men/Kids with lifestyle photos converts better than a plain-text list.
- 5. **Tighten the Skechers Plus section.** It's well-structured but buried under size grids. Move it higher or give it a colorblock background to make it feel like a second offer, not an afterthought.
- | Priority | Issue | Action |
- |---|---|---|
- | P0 | Broken destination URL (`/www.Skechers.com`) | Fix template variable double-interpolation before next send; audit all URL-constructing merge logic |
- | P1 | 11+ images served over HTTP | Update CDN references to HTTPS on `image.emails.skechers.com`; all assets should be HTTPS |
- | P1 | List-Unsubscribe headers absent or uncaptured | Confirm headers exist at MTA level; if missing, add RFC 2369 + RFC 8058 headers to comply with Gmail/Yahoo bulk sender policy |
- | P2 | Authentication-Results not surfaced | Configure AgentMail relay to preserve and forward authentication headers for audit visibility |
- | P2 | 6 images missing alt text | Add descriptive `alt` text to content images; set `alt=""` on all tracking/pixel images |
- | P2 | Plain-text body >70% URLs | Rewrite plain-text part as human-readable prose; URLs should supplement content, not constitute it |
- | P3 | `maximum-scale=1` on viewport | Remove `maximum-scale=1` to restore mobile zoom accessibility |
- | P3 | Dark mode block forces white | Implement actual dark mode color overrides or remove the media query to avoid false confidence |
- | P3 | `text-size-adjust: none` on `*` | Scope to specific elements or remove; global suppression breaks user accessibility settings |

## Full review
---

## 1. Executive Summary

This is a welcome/acquisition email with a clear purpose: redeem the 20% off first-order promo code. The hero is unambiguous — code, discount, and CTA are all above the fold. After that, the email sprawls into a wide but shallow catalog experience (size grids, category nav, Skechers Plus pitch, utility links) that dilutes the urgency without adding meaningful discovery. The structure is functional but unfocused, and the visual energy drops sharply after the fold.

---

## 2. Business Impact Score: **5/10**

The core conversion mechanic is intact, but the email does little to earn the click beyond displaying a code. No social proof, no product storytelling, no personalization signal — it reads like a templated onboarding drip that could've gone to any new subscriber.

---

## 3. What's Working

- **Code is front and center.** `WEL20-Z6M2MWMLH5` appears in the hero banner with a contrasting background and a "SHOP NOW" CTA directly beneath — zero hunting required.
- **"Something for Everyone" framing.** The lifestyle hero image pairs men's, women's, and athletic styles, which correctly signals broad catalog range to a new subscriber who may not yet know their preferred category.
- **Skechers Plus recruitment module** has a clean three-icon benefit list (exclusive offers, free shipping/returns, birthday surprises) — right call to introduce loyalty at the welcome stage.
- **Utility footer** covers SMS opt-in, app download, curbside pickup, find-a-store, and BNPL options in one compact row — handles multiple purchase journeys without dominating.

---

## 4. What's Weak

- **Size grid modules are noise.** The women's, men's, and kids' size tables occupy a massive chunk of the email body and deliver no persuasion value in a marketing email. This looks like a transactional/order-confirmation module accidentally dropped into a promotional template.
- **No product featured.** There's not a single specific shoe shown below the hero. A welcome email is a prime opportunity to surface a bestseller or trending style — this one skips it entirely.
- **Category nav is redundant with the website.** "WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE" as stacked text links adds length without adding discovery or desire.
- **Visual momentum collapses after the hero.** The bright banner gives way to a white expanse of tables and text links with no imagery to re-engage.
- **CTA count is low relative to scroll depth.** One "SHOP NOW" button at the top, then a "JOIN NOW" for Skechers Plus — nothing else pulls the reader back to transacting after the size tables.

---

## 5. Recommendations

1. **Remove the size grids entirely.** They belong in a size-guide page, not a promotional email. Reclaim that vertical space.
2. **Add a 3-product bestseller row** with images, names, and prices below the hero — give the 20% off offer something concrete to land on.
3. **Add a second "SHOP NOW" CTA** after the product row so readers who scroll don't have to scroll back up.
4. **Replace the category text links with image tiles** — a small grid of Women/Men/Kids with lifestyle photos converts better than a plain-text list.
5. **Tighten the Skechers Plus section.** It's well-structured but buried under size grids. Move it higher or give it a colorblock background to make it feel like a second offer, not an afterthought.

---

## 6. Bottom Line

The welcome offer is visible and actionable, which is the most important thing. But the email doesn't sell anything specific — it sells the idea of a website. For a first-touch email where brand equity is still forming, the lack of product photography below the fold is a missed conversion opportunity. Fix the size grid clutter and add one featured product row; this email goes from functional to effective.

---

## 7. Subject Line Analysis

- **Subject:** `Your 20% Off Welcome Offer is waiting!`
- **Length:** 39 characters
- **Scores (1-10):** Clarity `8`, Curiosity `4`, Personalization `5`, Urgency `5`, Specificity `7`
- **Strengths:**
  - Discount amount is explicit — no bait-and-switch anxiety
  - "Waiting" implies the subscriber has already earned it, reducing friction
- **Weaknesses:**
  - Generic welcome-email phrasing; nearly every brand uses this template
  - No expiry or product hook to sharpen urgency
- **Alt A:** `WEL20 is yours — 20% off your first Skechers order`
- **Alt B:** `New here? Here's 20% off — but it won't wait forever`

---

## 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — the visible preheader appears to be a small fine-print/offer-validity line rather than intentional preview copy
- **Length:** N/A (no deliberate preheader visible)
- **Scores (1-10):** Complements subject `2`, Specificity `2`, Clarity `2`, Inbox-fit `1`
- **Strengths:**
  - At minimum it doesn't repeat the subject word-for-word
- **Weaknesses:**
  - No crafted preheader means the inbox shows either offer legalese or blank space — a wasted impression
  - Opportunity to reinforce urgency or tease a specific product is entirely missed
- **Alt A:** `First order only. Use code WEL20-Z6M2MWMLH5 at checkout.`
- **Alt B:** `Shoes for everyone — and 20% off to get you started.`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `6/10`
- **Rationale:** "Your 20% Off Welcome Offer is waiting!" reads as a straightforward welcome drip — I'd open it because I just signed up and want the code, not because the subject line is compelling. Sender recognition (Skechers) and the explicit discount amount are enough to earn the open; curiosity plays no role.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `4/10`
- **Rationale:** The code is easy to find and the CTA is immediately below it, so if I'm ready to buy right now I'll click. But the email shows me nothing specific to want — no shoe, no style, no "here's what $X looks like after your discount." Without a product to desire, the click depends entirely on pre-existing intent I brought in from outside the email.

---

## 11. Evidence

- **Overall purpose:** Welcome drip / first-order promo activation. Goal is to convert a new email subscriber into a first-time buyer using a personalized one-time discount code.
- **Hero / primary value proposition:** Bold banner — "REMINDER: USE YOUR CODE FOR 20% OFF YOUR FIRST ORDER / USE CODE: WEL20-Z6M2MWMLH5" — with a single black "SHOP NOW" CTA button. Clean, high-contrast, actionable.
- **Lifestyle imagery:** A full-width "Something for Everyone" composite image showing multiple shoe styles across demographics. Functional but not aspirational.
- **Size grid modules:** Three consecutive tables — Women's Sizes, Men's Sizes, Kids' Sizes (including "Little Kids" and "Big Kids" sub-headers). Each is a grid of size ranges. Visually heavy, no persuasion value in this context.
- **Category navigation:** Plain-text stacked links: WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE.
- **Skechers Plus recruitment block:** Blue-bordered module with lock/truck/birthday icons and a "JOIN NOW" CTA. Benefit copy is legible and specific.
- **Utility row:** SMS ("Text SKECHERS to 83928"), App Store / Google Play download badges, Curbside Pickup icon, Find a Store link, Afterpay and Klarna BNPL logos.
- **Footer:** Standard legal copy, unsubscribe, mailing address.
- **Bugs / friction visible in render:** None — no broken images, no garbled text, no clipped CTAs. The size tables render cleanly but are contextually out of place.

---

## Technical Audit

## Technical Audit — Skechers Welcome Email (TRG_US_EN_NONMEMWELCOME_3_04082026)

---

### 1. Technical Summary

One confirmed broken destination URL due to a doubled-domain merge error will send recipients to a 404. Multiple images are served over HTTP and will be blocked by modern email clients, and authentication header capture failed, leaving SPF/DKIM status unverifiable through the relay.

---

### 2. Link & Tracking Issues

**FAIL — Doubled-domain merge error**
`http://www.skechers.com/www.Skechers.com` — a destination URL has the domain interpolated twice. This is a hard broken link, not a tracking redirect. Likely caused by a template variable like `{{site_url}}` resolving to `www.Skechers.com` and being appended to a base URL that already contained the domain.

**WARN — 22 tracking links unverifiable**
All click-redirect links route through `click.emails.skechers.com`. HTTP probing was skipped for all 22. Destination health cannot be confirmed from the source alone; a post-send spot-check is recommended.

**INFO — Tracking pixel inventory**
Five distinct third-party pixels are loaded in a hidden `<div style="display:none">`:
- Salesforce MC open pixel (`click.emails.skechers.com/open.aspx`)
- Two Krux/Salesforce DMP user-match beacons (`beacon.krxd.net/1x1_usermatch.gif`)
- Krux ad impression pixel (`beacon.krxd.net/1x1_ad_impression.gif`)
- Return Path reputation pixel (`pixel.app.returnpath.net/pixel.gif`) — served over HTTP (no `https://` prefix in source)
- MovableInk personalization pixel (`http://www.ink1000.com/...`) — HTTP

Campaign ID is consistent across Krux and MovableInk pixels (`TRG_US_EN_NONMEMWELCOME_3_04082026`), which is correct.

---

### 3. Rendering & Accessibility

**HTTP image sources — 13 affected assets**
The following are served over `http://` and will be blocked by Gmail, Apple Mail, and Outlook with default settings:

| Asset | Source |
|---|---|
| MovableInk pixel | `http://www.ink1000.com/...o.gif` |
| Skechers logo | `http://image.emails.skechers.com/.../dde00662-...png` |
| Unnamed image | `http://image.emails.skechers.com/.../49468f73-...png` |
| App Store badge | `http://image.emails.skechers.com/.../0ec56c9f-...png` |
| Google Play badge | `http://image.emails.skechers.com/.../9bb508d0-...png` |
| Unnamed image | `http://image.emails.skechers.com/.../00100b23-...png` |
| AfterPay logo | `http://image.emails.skechers.com/.../07cb60b5-...png` |
| Unnamed image | `http://image.emails.skechers.com/.../fc08601a-...png` |
| Instagram icon | `http://image.emails.skechers.com/.../b782e0aa-...png` |
| Facebook icon | `http://image.emails.skechers.com/.../a5c4cae0-...png` |
| YouTube icon | `http://image.emails.skechers.com/.../8c5738fc-...png` |
| `<link rel="icon">` | `http://image.emails.nl.skechers.com/.../70bf5f91-...png` |

The hero image (`bcc16007-...jpg`) uses HTTPS correctly — the rest of the CDN path does not.

**Missing alt text — 6 images**
- `o.gif` (MovableInk pixel) — missing `alt`
- `bcc16007-...jpg` (hero/main product image) — missing `alt`
- `49468f73-...png` — missing `alt`
- `00100b23-...png` — missing `alt`
- `fc08601a-...png` — missing `alt`

Decorative tracking pixels should use `alt=""` explicitly. The hero image missing alt text is a meaningful accessibility gap.

**Dark mode CSS does not implement dark mode**
The `@media (prefers-color-scheme: dark)` block forces `background-color: #ffffff` and `background-color: white` — it resets to light rather than adapting. Dark mode detection is present but non-functional.

**Viewport prevents user zoom**
`<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">` — `maximum-scale=1` blocks pinch-to-zoom on mobile, which is an accessibility violation (WCAG 1.4.4).

**`text-size-adjust: none` on `*`**
Global suppression of text scaling interferes with user accessibility preferences across all elements.

---

### 4. Personalization & Merge Tokens

No unresolved `%%` or `{{}}` merge tokens are visible in the truncated HTML. However, the broken URL (`http://www.skechers.com/www.Skechers.com`) is consistent with a double-interpolation failure — a personalization variable resolved to a full domain string rather than a path segment. The template logic for constructing destination URLs should be audited at the ESP template level.

---

### 5. Compliance

**List-Unsubscribe / List-Unsubscribe-Post — not captured**
Both headers are absent from what the AgentMail relay surfaced. If they are present at the MTA level but stripped by the relay, this is a relay configuration gap. If they are genuinely absent, one-click unsubscribe (RFC 8058) is not supported, which is required for bulk senders under Gmail/Yahoo 2024 sender requirements.

**Authentication-Results — not captured**
SPF and DKIM pass/fail status is unknown. The sending domain is `emails.skechers.com`; DMARC alignment cannot be confirmed without authentication headers. This is a relay capture issue, not necessarily a deliverability failure, but it leaves the audit blind to auth status.

**Plain-text URL density**
Plain-text body is 3,855 of 5,459 characters of URLs (70.6%). This is above the threshold that some spam filters flag for link-heavy plain-text parts. The plain-text version should be rewritten to human-readable prose with URLs inline rather than as the dominant content.

**CAN-SPAM physical address**
Not visible in the truncated HTML — cannot confirm presence. Physical mailing address is required; should be verified in the full source footer.

---

### 6. Email-to-Site Continuity

**Broken landing page**
The doubled-domain URL (`http://www.skechers.com/www.Skechers.com`) represents at least one call-to-action link that delivers to a non-functional destination. The specific CTA this belongs to is not determinable from the truncated HTML.

**UTM parameter coverage — unverifiable**
All 22 destination links route through `click.emails.skechers.com` redirects, which were not probed. Whether UTM params (`utm_source`, `utm_medium`, `utm_campaign`) are appended at redirect resolution cannot be confirmed. The campaign ID `TRG_US_EN_NONMEMWELCOME_3_04082026` is consistent in pixel tagging, which is a positive signal that naming conventions are in place.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| P0 | Broken destination URL (`/www.Skechers.com`) | Fix template variable double-interpolation before next send; audit all URL-constructing merge logic |
| P1 | 11+ images served over HTTP | Update CDN references to HTTPS on `image.emails.skechers.com`; all assets should be HTTPS |
| P1 | List-Unsubscribe headers absent or uncaptured | Confirm headers exist at MTA level; if missing, add RFC 2369 + RFC 8058 headers to comply with Gmail/Yahoo bulk sender policy |
| P2 | Authentication-Results not surfaced | Configure AgentMail relay to preserve and forward authentication headers for audit visibility |
| P2 | 6 images missing alt text | Add descriptive `alt` text to content images; set `alt=""` on all tracking/pixel images |
| P2 | Plain-text body >70% URLs | Rewrite plain-text part as human-readable prose; URLs should supplement content, not constitute it |
| P3 | `maximum-scale=1` on viewport | Remove `maximum-scale=1` to restore mobile zoom accessibility |
| P3 | Dark mode block forces white | Implement actual dark mode color overrides or remove the media query to avoid false confidence |
| P3 | `text-size-adjust: none` on `*` | Scope to specific elements or remove; global suppression breaks user accessibility settings |
## Recent history

- [[2026-04-30-smells-like-30-off]] — 6.5/10 (2026-04-30)
- [[2026-04-29-over-10k-5-star-reviews-and-counting]] — 5/10 (2026-04-29)
- [[2026-04-29-rae-your-mystery-flash-offer-is-waiting-terms-apply]] — 6/10 (2026-04-29)

