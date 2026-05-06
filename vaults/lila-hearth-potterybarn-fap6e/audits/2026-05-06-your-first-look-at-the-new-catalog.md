---
slug: 2026-05-06-your-first-look-at-the-new-catalog
type: email
date: 2026-05-06
persona: lila-hearth-potterybarn-fap6e
score: "7/10"
sender: Pottery Barn
subject: Your first look at the NEW catalog
tags: [email, score-7, sender/pottery-barn]
---
# Your first look at the NEW catalog
**Score:** 7/10 · **Type:** Email audit · **2026-05-06**
## Executive summary

- A clean, on-brand catalog launch email from Pottery Barn that does the basics well: recognizable sender, clear seasonal hook, organized category navigation, and a loyalty reward mention. What it lacks is urgency and any price-based offer. It reads as a "come browse" email rather than a "buy now" email — appropriate for a catalog reveal, but it won't drive aggressive click behavior. Execution is polished; strategy is passive.

## What's working

- **Brand execution**: The Pottery Barn visual identity is consistent top-to-bottom — typography, muted palette, lifestyle product photography.
- **Category nav**: The "New Arrivals" grid (Pillows & Decor, Outdoor, Bedding, Bathroom Furniture, Dining Furniture, Tabletop) lets browsers self-select quickly.
- **Personalized rec module**: "Recommended Just for You" is above the fold-ish — good placement for driving relevant clicks.
- **Rewards mention**: "Earn 10% Back in Rewards" with the Affirm section adds dual purchase incentives for buyers close to a decision.
- **Utility bar**: "In-Stock Furniture Delivered in 1-4 Weeks" addresses a real purchase objection (delivery uncertainty for large furniture) before anyone has to ask.

## What's weak

- **No offer in the hero**: This is a catalog email, not a sale email — but for a subscriber inbox, the absence of any discount or threshold offer ("Free shipping on orders $99+", "New arrivals, 10% off your first pick") means low urgency. Browsing the catalog is a low-commitment ask.
- **CTA copy is generic**: "BROWSE NOW" does not communicate what happens next or why it matters. "Shop the Summer Catalog" or "See What's New" is more specific.
- **No deadline**: Nothing time-bounds this send. "New catalog" implies freshness but doesn't create urgency.
- **Recommended module is small**: The "Recommended Just for You" product images are thumbnail-sized at mobile scale, making it hard to engage with specific products.
- **Design Classes section feels inserted**: The in-store Design Classes callout ("Let our designers show you the art skills behind our collections") is a non-sequitur mid-flow — it interrupts the product-discovery intent with an offline event plug.

## Recommendations

- 1. **Add a threshold offer to the hero** — even a seasonal-only free shipping threshold tied to the catalog launch would give subscribers a reason to click today rather than "later."
- 2. **Replace "BROWSE NOW" with a more specific CTA** — "Shop the Summer Catalog" or "See New Summer Arrivals" tells people what they're getting.
- 3. **Move or remove the Design Classes block** — it doesn't belong between category nav and product recs. Either drop it to the bottom utility tier or cut it for this send.
- 4. **Add a deadline hook** — "New arrivals land weekly — shop early for best selection" or a countdown to a catalog event would create forward momentum.
- 5. **Increase product thumbnail size** in the rec module on mobile — small images don't convert.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | Credit card CTA returns 403 | Revalidate `clickcp.potterybarn.com` campaign token; re-test before any resend |
- | **P0** | Open-pixel is HTTP | Migrate `svopn.potterybarn.com` beacon to HTTPS; open-rate data is currently unreliable |
- | **P1** | 3 images served over HTTP | Force HTTPS on `edm.potterybarn.com` and `edm.westelm.com` asset URLs |
- | **P1** | West Elm spacer 403 | Remove or replace the cross-brand spacer asset; it serves no content value |
- | **P1** | `List-Unsubscribe` headers | Confirm headers are set upstream of relay; required for Gmail/Yahoo bulk sender compliance |
- | **P2** | PHP headers in `<style>` | Investigate build/template pipeline; these lines should never reach the rendered HTML |
- | **P2** | 44 images missing alt text | Add descriptive `alt` on product and catalog images; use `alt=""` only for purely decorative spacers |
- | **P3** | UTM param verification | Confirm click redirector appends UTM params; audit one resolved link to verify |

## Full review
## Email Review: Pottery Barn — "Your first look at the NEW catalog"

---

### 1. Executive Summary

A clean, on-brand catalog launch email from Pottery Barn that does the basics well: recognizable sender, clear seasonal hook, organized category navigation, and a loyalty reward mention. What it lacks is urgency and any price-based offer. It reads as a "come browse" email rather than a "buy now" email — appropriate for a catalog reveal, but it won't drive aggressive click behavior. Execution is polished; strategy is passive.

---

### 2. Business Impact Score

**7/10**

Rubric criteria that were TRUE:
- Sender is a brand you recognize / are subscribed to (Pottery Barn, clearly branded)
- Primary CTA is unambiguous — "BROWSE NOW" button is visible and obvious
- Visual hierarchy is clear — Summer Catalog hero is the immediate focus
- No render bugs — layout is clean, images load, text is legible
- Email reflects current campaign / season — "The Summer Catalog" is timely
- Loyalty / member benefits visible — "Earn 10% Back in Rewards" section present
- Offer feels honest — no deceptive pricing language or buried exclusions

Not awarded:
- No concrete %/$ offer visible in the hero (catalog reveal, not a sale)
- No clear demographic model signals visible at thumbnail resolution
- Subject doesn't explicitly address a persona-specific focus

---

### 3. What's Working

- **Brand execution**: The Pottery Barn visual identity is consistent top-to-bottom — typography, muted palette, lifestyle product photography.
- **Category nav**: The "New Arrivals" grid (Pillows & Decor, Outdoor, Bedding, Bathroom Furniture, Dining Furniture, Tabletop) lets browsers self-select quickly.
- **Personalized rec module**: "Recommended Just for You" is above the fold-ish — good placement for driving relevant clicks.
- **Rewards mention**: "Earn 10% Back in Rewards" with the Affirm section adds dual purchase incentives for buyers close to a decision.
- **Utility bar**: "In-Stock Furniture Delivered in 1-4 Weeks" addresses a real purchase objection (delivery uncertainty for large furniture) before anyone has to ask.

---

### 4. What's Weak

- **No offer in the hero**: This is a catalog email, not a sale email — but for a subscriber inbox, the absence of any discount or threshold offer ("Free shipping on orders $99+", "New arrivals, 10% off your first pick") means low urgency. Browsing the catalog is a low-commitment ask.
- **CTA copy is generic**: "BROWSE NOW" does not communicate what happens next or why it matters. "Shop the Summer Catalog" or "See What's New" is more specific.
- **No deadline**: Nothing time-bounds this send. "New catalog" implies freshness but doesn't create urgency.
- **Recommended module is small**: The "Recommended Just for You" product images are thumbnail-sized at mobile scale, making it hard to engage with specific products.
- **Design Classes section feels inserted**: The in-store Design Classes callout ("Let our designers show you the art skills behind our collections") is a non-sequitur mid-flow — it interrupts the product-discovery intent with an offline event plug.

---

### 5. Recommendations

1. **Add a threshold offer to the hero** — even a seasonal-only free shipping threshold tied to the catalog launch would give subscribers a reason to click today rather than "later."
2. **Replace "BROWSE NOW" with a more specific CTA** — "Shop the Summer Catalog" or "See New Summer Arrivals" tells people what they're getting.
3. **Move or remove the Design Classes block** — it doesn't belong between category nav and product recs. Either drop it to the bottom utility tier or cut it for this send.
4. **Add a deadline hook** — "New arrivals land weekly — shop early for best selection" or a countdown to a catalog event would create forward momentum.
5. **Increase product thumbnail size** in the rec module on mobile — small images don't convert.

---

### 6. Bottom Line

A competent, visually clean catalog launch email. Pottery Barn's brand does the heavy lifting. Without a price incentive or urgency driver, the email is a passive invitation to browse — open and click rates will be loyalty-driven, not campaign-driven. Solid execution on a modest strategic ambition.

---

### 7. Subject Line Analysis

- **Subject:** `Your first look at the NEW catalog`
- **Length:** 35 characters
- **Scores (1-10):** Clarity `7`, Curiosity `5`, Personalization `2`, Urgency `3`, Specificity `4`
- **Strengths:**
  - Short and mobile-friendly; no truncation risk
  - "First look" implies exclusivity, which is a mild curiosity hook
- **Weaknesses:**
  - "The NEW catalog" is vague — what catalog? What's in it? No product category, season, or benefit named
  - Zero personalization and no urgency signal
- **Alt A:** `The Summer Catalog is here — new arrivals inside`
- **Alt B:** `First look: our Summer Catalog just dropped`

---

### 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — visible top-of-email copy reads as the utility bar: *"In-Stock Furniture Delivered in 1-4 Weeks"*, which likely bleeds into the preheader slot unintentionally
- **Length:** ~45 characters if this is what's rendering
- **Scores (1-10):** Complements subject `3`, Specificity `5`, Clarity `6`, Inbox-fit `3`
- **Strengths:**
  - The delivery-time promise is actually a strong objection-buster if it renders clearly
  - Specific and factual
- **Weaknesses:**
  - Does not complement the subject — "Your first look at the NEW catalog" followed by delivery times is a non-sequitur in the inbox
  - Feels like a utility bar leaking, not intentional preheader copy
- **Alt A:** `New ways to bring summer home — explore the full catalog`
- **Alt B:** `The new looks are here. Browse outdoor, bedding, dining & more.`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `6/10`
- **Signals counted:** sender recognizable, subject is concrete (catalog), relevant to home/lifestyle persona, under 50 characters, no spam signals
- **Rationale:** Pottery Barn is a trusted sender that earns the open by brand alone, but "Your first look at the NEW catalog" is familiar and low-urgency — it won't spike curiosity for someone who's received previous Pottery Barn sends this week.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `5/10`
- **Signals counted:** hero offer visible without scrolling, CTA in relevant category (home/lifestyle), product recommendations module present, brand voice consistent and trusted, no friction in email layout
- **Rationale:** The recommended products module is the strongest click driver here — if the algorithm served relevant items, that section converts. The hero "BROWSE NOW" is too passive to pull a click on its own without a discount hook.

---

### 11. Evidence

- **Overall purpose:** Announce the arrival of Pottery Barn's Summer Catalog; drive traffic to the site to browse new arrivals
- **Hero / primary value prop:** "The Summer Catalog — Your first look has arrived. Get inspired with new ways to bring home the beauty of this season." + BROWSE NOW button
- **Loyalty / benefits:** "Earn 10% Back in Rewards" section mid-lower email; Affirm "Buy Now, Pay Over Time" with Learn More link
- **Product discoverability:** New Arrivals category grid (6 categories) + "Recommended Just for You" carousel with product thumbnails (appears to include platform beds, side tables, dining furniture, textiles)
- **Utility / secondary modules:** In-Stock Furniture delivery promise (top bar), Design Classes in-store events callout, App download CTA, social follow prompt (@potterybarn)
- **Bugs / friction / clarity issues:** No visible render bugs. The Design Classes callout image appears dark/textured but renders intact. Product recommendation thumbnails are small at mobile scale but not broken.

---

## Technical Audit

## Technical Audit — Pottery Barn "New Catalog" Email

**Date:** 2026-05-06 | **Sender:** PotteryBarn@e.potterybarn.com

---

### 1. Technical Summary

Two links return HTTP 403 (one a credit card apply/buy CTA, one a West Elm spacer asset), blocking a key conversion path and producing a broken image. The email also embeds PHP `header()` calls as literal text inside a `<style>` block — dead code that signals a templating error in the build pipeline.

---

### 2. Link & Tracking Issues

**FAIL — 403 on credit card CTA:**
```
https://clickcp.potterybarn.com/c/da01b407-b21c-4618-a71b-f83bef0dd682
  ?brandCode=POTTERYBARNCB&marketingChannelCode=APPLYANDBUY
  &external_id=PB_Email_MemberBanner&cm_ite=PB_header_nonmember
```
This is the "Apply & Buy" / The Key credit card banner link. A 403 means the redirect endpoint is rejecting the request — likely a misconfigured permission or expired campaign token. Any recipient who clicks this CTA hits a dead end.

**FAIL — 403 on West Elm spacer:**
```
http://edm.westelm.com/we/evergreen/spacer_0.gif
```
Cross-brand asset served from a sibling domain that is actively refusing connections. This is a 1×1 tracking/spacer pixel; its failure produces a broken image indicator in clients that render it.

**24 tracking links skipped** by the probe — no actionable issue, but the click domain `click.e.potterybarn.com` should be confirmed as DKIM-aligned with the sending domain.

---

### 3. Rendering & Accessibility

**PHP headers in `<style>` block (templating artifact):**
```css
header('Content-Type: image/jpeg');
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
```
These are PHP function calls that were never executed — they leaked into the CSS block verbatim. They have no rendering effect but confirm a broken template pipeline step.

**Alt text missing on 44 images.** The full catalog slice sequence (`slices_01` through `slices_18`), all product images, and all footer images carry no `alt` attributes. In image-blocking clients (common in Outlook, corporate environments), the email renders as a blank grid with no recoverable content. Critical images affected include:
- `H25_TOP_InStockFurniture.jpg`
- `S26_Bottom_UpTo30OffOutdoor.jpg`
- All 13 `slices_*.jpg/gif` in the catalog section

**3 images served over HTTP (not HTTPS):**
```
http://edm.westelm.com/we/evergreen/spacer_0.gif          ← also 403
http://edm.potterybarn.com/pb/thekey/CC_Banner/PB/Foot_NonMem_PB.jpg
http://edm.potterybarn.com/pb/2022/0311_Key_CC_Email_BrandBanner/slices_02.jpg
http://svopn.potterybarn.com/?sv_cid=0053_00597&sv_emopen=true&...  ← open-pixel
```
Gmail, Apple Mail, and Outlook proxy images over HTTPS; mixed-content HTTP sources are blocked or silently dropped in most modern clients.

**Open-pixel over HTTP:**
```
http://svopn.potterybarn.com/?sv_cid=0053_00597&sv_emopen=true&sv_sveme=lila-hearth-potterybarn-fap6e@etell.app
```
The open-tracking beacon is HTTP. Most clients will block it, making open-rate data for this send unreliable.

---

### 4. Personalization & Merge Tokens

No unfired merge tokens (e.g., `{{first_name}}`, `%%FIRST_NAME%%`) visible in the truncated source. The recipient email address (`lila-hearth-potterybarn-fap6e@etell.app`) is correctly interpolated into the `coreemail.html` beacon and the open-pixel URL, confirming token substitution ran. No issues found beyond what's noted in §3.

---

### 5. Compliance

**WARN — `List-Unsubscribe` header not detected** by the relay. CAN-SPAM requires a functional unsubscribe mechanism; Gmail and Yahoo additionally require `List-Unsubscribe` + `List-Unsubscribe-Post` (RFC 8058) for bulk senders or they suppress the send. These headers may have been stripped by the AgentMail relay rather than absent from the original, but cannot be confirmed either way.

**WARN — `Authentication-Results` not captured.** SPF/DKIM/DMARC pass/fail status is unknown. The sending domain `e.potterybarn.com` is an ESP subdomain; alignment with `potterybarn.com` (the `From:` header domain) must be verified. No issues confirmed, but no clean bill of health either.

Physical address and unsubscribe link are present in the footer (standard CAN-SPAM requirements) — no issues found there.

---

### 6. Email-to-Site Continuity

The logo link resolves through `click.e.potterybarn.com` with a query-string token but no visible UTM parameters in the truncated source. The 24 tracked links should carry consistent UTM tagging (`utm_source=email`, `utm_medium=email`, `utm_campaign=SummerDigitalCatalog` or similar) for attribution. Cannot confirm UTM presence without resolving the click redirects, but the absence of UTM params in the raw `href` values before the click wrapper is a yellow flag — if the redirect service is not appending them on the way through, catalog traffic will appear as direct in analytics.

The broken 403 credit card CTA (`cm_ite=PB_header_nonmember`) would drop any UTM chain entirely for that path.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | Credit card CTA returns 403 | Revalidate `clickcp.potterybarn.com` campaign token; re-test before any resend |
| **P0** | Open-pixel is HTTP | Migrate `svopn.potterybarn.com` beacon to HTTPS; open-rate data is currently unreliable |
| **P1** | 3 images served over HTTP | Force HTTPS on `edm.potterybarn.com` and `edm.westelm.com` asset URLs |
| **P1** | West Elm spacer 403 | Remove or replace the cross-brand spacer asset; it serves no content value |
| **P1** | `List-Unsubscribe` headers | Confirm headers are set upstream of relay; required for Gmail/Yahoo bulk sender compliance |
| **P2** | PHP headers in `<style>` | Investigate build/template pipeline; these lines should never reach the rendered HTML |
| **P2** | 44 images missing alt text | Add descriptive `alt` on product and catalog images; use `alt=""` only for purely decorative spacers |
| **P3** | UTM param verification | Confirm click redirector appends UTM params; audit one resolved link to verify |
## Recent history

- [[2026-05-05-celebrate-mom-with-the-perfect-gift]] — 6/10 (2026-05-05)
- [[2026-05-05-get-the-look-with-free-design-services]] — 7/10 (2026-05-05)
- [[2026-05-05-summer-new-arrivals-behind-the-designs]] — 7/10 (2026-05-05)

