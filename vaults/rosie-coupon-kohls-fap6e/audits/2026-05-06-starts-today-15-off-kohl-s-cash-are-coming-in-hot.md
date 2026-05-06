---
slug: 2026-05-06-starts-today-15-off-kohl-s-cash-are-coming-in-hot
type: email
date: 2026-05-06
persona: rosie-coupon-kohls-fap6e
score: "7/10"
sender: Kohl’s
subject: "Starts today: 15% off + Kohl's Cash are coming in hot 🔥"
tags: [email, score-7, sender/kohl-s]
---
# Starts today: 15% off + Kohl's Cash are coming in hot 🔥
**Score:** 7/10 · **Type:** Email audit · **2026-05-06**
## Executive summary

- A densely packed Mother's Day promotional email from Kohl's that does the seasonal basics well — timely campaign, multiple stacked offers (15% off, Kohl's Cash, $10 off $50 in jewelry, 70% clearance), and clean rendering — but suffers from CTA overload and no meaningful personalization. The email functions as a broadcast leaflet, not a targeted send. Strong on deal volume; weak on focus.

## What's working

- **Seasonal timing is perfect.** Sent May 6 for a Mother's Day push — relevant window, not stale.
- **Kohl's Cash integration is smart.** The earn mechanic ($10 KC for every $50 through 05/11) is surfaced multiple times, reinforcing loyalty value.
- **Price anchoring works.** "Save up to 70%" in the hero + clearance module creates strong value perception at a glance.
- **Clean grid layout.** The "$25 & under" and "Pajamas" product tile modules are easy to scan and feel shoppable.
- **The jewelry sub-offer is specific.** "$10 off your $50 purchase in Jewelry & Watches" is a concrete, category-scoped incentive that gives gift-buyers a clear path.

## What's weak

- **CTA proliferation dilutes attention.** "Shop Now" appears at least five distinct times across different modules. There is no single dominant action to take.
- **No personalization.** Nothing in the visible copy reflects this recipient's name, browse history, or loyalty tier — it reads as a blast to everyone.
- **The 15% off offer is buried relative to the subject line's promise.** The subject leads with it, but in the body it appears lower in the email as a small coupon strip — the hero module doesn't match the hook.
- **"Mom likes compliments, so she'll love these picks" module** shows clothing thumbnails that are small and hard to evaluate at a glance. No price, no product name visible in the screenshot — just images.
- **Offer stacking confusion.** Multiple distinct discount mechanics (15% coupon + Kohl's Cash earn + $10 off $50 jewelry + 70% clearance) without clear rules on combinability creates cognitive friction.

## Recommendations

- 1. **Unify the hero with the subject promise.** The subject says "15% off + Kohl's Cash" — the hero should lead with exactly that, not bury it below the fold. Put the 15% coupon strip at the top.
- 2. **One primary CTA per email.** Choose the highest-intent action (gift shop) and demote secondary CTAs to text links. "Shop Now" in five places means "go nowhere in particular."
- 3. **Name and price products in the recommendation grid.** Thumbnails with no copy are decoration, not conversion. Add product name + price to each tile.
- 4. **Segment the jewelry offer.** If Kohl's has data on jewelry purchasers, make that the hero for those recipients — a targeted $10 off jewelry send would outperform this catch-all.
- 5. **Simplify the offer stack.** Consider presenting one headline deal (15% off everything) and one loyalty bonus (Kohl's Cash) rather than four parallel offers. Fewer choices = more clicks.
- | Priority | Issue | Action |
- |---|---|---|
- | **High** | Physical address absent from visible source | Confirm it exists below truncation; if absent, add before next send — CAN-SPAM violation |
- | **High** | List-Unsubscribe-Post missing | Confirm ESP injects RFC 8058 header at SMTP layer; if not, enable — required for Gmail bulk sender compliance |
- | **High** | `</custom>` invalid tag | Remove; invalid element adjacent to SFMC pixel div |
- | **Medium** | 9 tracking/content images missing `alt=""` | Add `alt="" aria-hidden="true"` to all tracking pixels; add descriptive alt to content images |
- | **Medium** | `user-scalable=0` | Remove `maximum-scale=1, user-scalable=0` — blocked by iOS 10+, WCAG 1.4.4 violation |
- | **Medium** | UTM integrity on click destinations | Spot-check 3+ redirect destinations for correct UTM params |
- | **Medium** | Triple Google Fonts load | Deduplicate to single `<link>` per family; already MSO-guarded so safe to consolidate |
- | **Low** | Empty `<title>` | Add a descriptive title (e.g., "Kohl's — 15% off + Kohl's Cash") |
- | **Low** | 4 open-tracking pixels | Audit cross-platform open deduplication; confirm which pixel is source-of-truth for reporting |

## Full review
---

## 1. Executive Summary

A densely packed Mother's Day promotional email from Kohl's that does the seasonal basics well — timely campaign, multiple stacked offers (15% off, Kohl's Cash, $10 off $50 in jewelry, 70% clearance), and clean rendering — but suffers from CTA overload and no meaningful personalization. The email functions as a broadcast leaflet, not a targeted send. Strong on deal volume; weak on focus.

---

## 2. Business Impact Score

**7/10**

Rubric criteria that were TRUE:
- Sender is a brand I recognize / am subscribed to (Kohl's)
- One concrete offer is visible — multiple in fact: 15% off, Kohl's Cash, $10 off $50, save up to 70%
- Primary CTA is unambiguous ("Explore the Gift Shop" + "Shop Now" buttons are clearly rendered)
- Visual hierarchy is clear — Mother's Day hero draws the eye first
- No render bugs visible in the screenshot (no broken images, no overlapping text)
- Email reflects current campaign/season — Mother's Day, sent May 6
- Loyalty / member benefits visible — Kohl's Cash prominently called out ($10 per $50 through 05/11)

**Not TRUE:**
- No persona-specific targeting (no athletic/lifestyle signal for Walker)
- Demographic signal is generic (floral-dressed woman = "mom" archetype, not segmented)
- Offer density borders on bait-and-switch feeling — too many stacked conditions (coupon + jewelry minimum + clearance stacking)

---

## 3. What's Working

- **Seasonal timing is perfect.** Sent May 6 for a Mother's Day push — relevant window, not stale.
- **Kohl's Cash integration is smart.** The earn mechanic ($10 KC for every $50 through 05/11) is surfaced multiple times, reinforcing loyalty value.
- **Price anchoring works.** "Save up to 70%" in the hero + clearance module creates strong value perception at a glance.
- **Clean grid layout.** The "$25 & under" and "Pajamas" product tile modules are easy to scan and feel shoppable.
- **The jewelry sub-offer is specific.** "$10 off your $50 purchase in Jewelry & Watches" is a concrete, category-scoped incentive that gives gift-buyers a clear path.

---

## 4. What's Weak

- **CTA proliferation dilutes attention.** "Shop Now" appears at least five distinct times across different modules. There is no single dominant action to take.
- **No personalization.** Nothing in the visible copy reflects this recipient's name, browse history, or loyalty tier — it reads as a blast to everyone.
- **The 15% off offer is buried relative to the subject line's promise.** The subject leads with it, but in the body it appears lower in the email as a small coupon strip — the hero module doesn't match the hook.
- **"Mom likes compliments, so she'll love these picks" module** shows clothing thumbnails that are small and hard to evaluate at a glance. No price, no product name visible in the screenshot — just images.
- **Offer stacking confusion.** Multiple distinct discount mechanics (15% coupon + Kohl's Cash earn + $10 off $50 jewelry + 70% clearance) without clear rules on combinability creates cognitive friction.

---

## 5. Recommendations

1. **Unify the hero with the subject promise.** The subject says "15% off + Kohl's Cash" — the hero should lead with exactly that, not bury it below the fold. Put the 15% coupon strip at the top.
2. **One primary CTA per email.** Choose the highest-intent action (gift shop) and demote secondary CTAs to text links. "Shop Now" in five places means "go nowhere in particular."
3. **Name and price products in the recommendation grid.** Thumbnails with no copy are decoration, not conversion. Add product name + price to each tile.
4. **Segment the jewelry offer.** If Kohl's has data on jewelry purchasers, make that the hero for those recipients — a targeted $10 off jewelry send would outperform this catch-all.
5. **Simplify the offer stack.** Consider presenting one headline deal (15% off everything) and one loyalty bonus (Kohl's Cash) rather than four parallel offers. Fewer choices = more clicks.

---

## 6. Bottom Line

A competent but unfocused seasonal broadcast. Kohl's shoppers who already plan to buy a Mother's Day gift will find this useful and may redeem the Kohl's Cash mechanic. Non-Kohl's loyalists or anyone not in "gift mode" will scan past it. The offer value is genuinely solid — execution just needs consolidation to convert better.

---

## 7. Subject Line Analysis

- **Subject:** `Starts today: 15% off + Kohl's Cash are coming in hot 🔥`
- **Length:** 56 characters (with emoji)
- **Scores (1-10):** Clarity `7`, Curiosity `4`, Personalization `1`, Urgency `7`, Specificity `7`
- **Strengths:**
  - "Starts today" + named discount (15% off) + loyalty benefit (Kohl's Cash) packs high signal density for a promo subject
  - Urgency framing ("starts today") implies a window without fake scarcity
- **Weaknesses:**
  - 56 chars is slightly over the ~50-char mobile crop — "are coming in hot 🔥" adds flair but no information and pushes length
  - Zero personalization; no Mother's Day mention despite the entire send being a Mother's Day campaign
- **Alt A:** `Starts today: 15% off everything + earn Kohl's Cash for Mom`
- **Alt B:** `Mother's Day sale starts now — 15% off + Kohl's Cash`

---

## 8. Preview Text Analysis

- **Preview:** `Need gifts by Mother's Day? Shop Now — Plus, earn Kohl's Cash`
- **Length:** ~60 characters visible
- **Scores (1-10):** Complements subject `6`, Specificity `5`, Clarity `7`, Inbox-fit `6`
- **Strengths:**
  - Question format ("Need gifts by Mother's Day?") creates relevance at a glance for the target occasion
  - Echoes Kohl's Cash mention from subject without word-for-word duplication
- **Weaknesses:**
  - "Shop Now" in the preview text is a wasted call-to-action — clicking preview opens the email, not the store; the CTA adds no value here
  - Doesn't extend or amplify the 15% off hook from the subject — the best preview text would add a detail the subject omitted
- **Alt A:** `Save 15% + earn $10 Kohl's Cash for every $50 — through 05/11`
- **Alt B:** `Last-minute gifts under $25 — plus Kohl's Cash on every purchase`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `6/10`
- **Signals counted:** sender recognizable (Kohl's), subject concrete (15% off + Kohl's Cash spelled out), subject relevant to seasonal shopping, preview text is real copy (not junk), time-bounded urgency ("Starts today"), no spam signals (single emoji, no ALL CAPS)
- **Rationale:** The sender name and specific offer figures are the main draws — a Kohl's loyalist with upcoming gifting needs will open. Without a name or category signal, a lapsed or non-loyal shopper will skip.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `6/10`
- **Signals counted:** hero offer visible near top of email, offers reduce price (15% off, 70% clearance, $10 off $50), offer is time-bounded (Kohl's Cash through 05/11), gift shop CTA is more specific than generic homepage link, brand voice consistent and trusted, no visible friction or render breaks
- **Rationale:** The offer stack is genuinely attractive for a Mother's Day shopper, but the multiplicity of "Shop Now" buttons and competing modules scatter intent — a reader who wants to act has to choose among five separate destinations, which often means choosing none.

---

## 11. Evidence

- **Overall purpose:** Mother's Day gift promotion anchored by a 15% off coupon and Kohl's Cash earn incentive
- **Hero / primary value prop:** "Mom deserves a great gift. You'll love these savings too." with "Save up to 70%" and gift shop CTA — occupies roughly the top third of the email
- **Membership / benefits section:** Kohl's Cash earn mechanic ($10 per $50 through 05/11) is called out in a dedicated strip near the bottom — benefit is visible but not hero-positioned
- **Product discoverability modules:** "$25 & under" and "Pajamas" category tiles in a horizontal grid; image thumbnails without visible product names or prices in the screenshot
- **Utility / secondary modules:** Clearance callout (Men / Women / Kids) with up to 70% off; jewelry-specific offer ($10 off $50 min)
- **Bugs / friction:** No visible broken images or overlapping text. The fine print at the very bottom is extremely small and dense — readable on desktop, likely unreadable on mobile. The "15% off" coupon strip appears visually subordinate to the clearance and Kohl's Cash modules despite being the subject line's lead offer.

---

## Technical Audit

## Technical Audit — Kohl's "15% off + Kohl's Cash" (2026-05-06)

---

### 1. Technical Summary

The email uses a standard HTML 4.01 Transitional table-based layout with dual-stack MSO/non-MSO rendering paths and three separate pixel-tracking systems. The primary technical concerns are missing compliance signals (unsubscribe headers, physical address) and pervasive missing alt text on tracking pixels, which will generate accessibility warnings in major inbox scanners.

---

### 2. Link & Tracking Issues

**Three concurrent tracking stacks detected — potential over-firing risk:**

| Stack | Domain | Evidence |
|---|---|---|
| CoherentPath | `click.chp.kohls.com` | Open pixel in `<body>` first `<img>` |
| Kohl's MI | `mi.kohls.com` | `o.gif?mi_u=604230016` |
| Salesforce MC (SFMC) | `click.s.kohls.com` | `open.aspx?6C34FCJAQ6DUJHFU3EOSGPUHYI` |
| Adobe AAM | `kohls.demdex.net` | `event?d_sid=13245196` |

Four independent open-tracking pixels firing simultaneously. If any pixel is also used for open-rate reporting, opens will be double- or triple-counted across platforms.

**22 click links use redirect domains** — QA probe was skipped for all. Destination URLs and UTM parameter integrity cannot be confirmed without manual spot-checks or an allow-listed crawler.

**Malformed HTML tag:** `</custom>` closing tag found adjacent to the SFMC open pixel div — not a valid HTML element; may break rendering in strict parsers.

---

### 3. Rendering & Accessibility

**Missing alt text — 10 images flagged by QA:**

All four tracking pixels (`5b8749b6...`, `o.gif`, `event`, and `open.aspx`) have no `alt=""` attribute. Six content images served from `mi.kohls.com/p/rp/` also lack alt text. The tracking pixels should carry `alt="" aria-hidden="true"` (the `o.gif` pixel does set `aria-hidden="true"` correctly — the others do not).

**`<title>` is empty:** `<title></title>` — screen readers and some inbox clients announce the document title; an empty value is an accessibility gap.

**`user-scalable=0` in viewport meta:** `maximum-scale=1, user-scalable=0` prevents pinch-to-zoom, which is an accessibility violation (WCAG 1.4.4) and blocked by iOS 10+.

**Google Fonts loaded three ways redundantly** — via `<link>`, `<link>` again for Montserrat, and `@import` inside `<style>`. The triple load adds unnecessary DNS lookups and will fail in image-only mode (common in Outlook); the `[if !mso]` guard correctly wraps it, but the duplication is wasteful.

**MSO conditional style block includes empty rule:** `td,th,div,p,a {}` — no-op but noise.

---

### 4. Personalization & Merge Tokens

No unresolved merge token syntax (`{{`, `%%`, `[[`) visible in the truncated source. The `mi_u=604230016` and `mi_ecmp=1011842_202656` parameters in tracking URLs appear to be static campaign values, not per-recipient tokens, which is expected for batch sends. No issues found beyond what's observable in the truncated source.

---

### 5. Compliance

**CAN-SPAM:**
- `[WARN]` **No physical mailing address detected** in the visible HTML. CAN-SPAM §5(a)(5) requires a valid physical postal address. Either it's below the truncation point or it is absent — must be verified against the full source.
- `[WARN]` **List-Unsubscribe header not found** — not captured by the AgentMail relay. RFC 2369 compliance cannot be confirmed. If Kohl's ESP injects this header at send time, it would not appear in the relay capture; this should be verified against a raw SMTP header dump.
- `[WARN]` **List-Unsubscribe-Post header not found** — RFC 8058 one-click unsubscribe is absent per relay capture. Gmail and Apple Mail enforce this for bulk senders (>5k/day); absence risks inbox placement degradation.

**`<meta name="robots" content="noindex, nofollow" />` and `<meta name="referrer" content="no-referrer" />`** are present — correct practice to prevent indexing and referrer leakage from email web-views.

---

### 6. Email-to-Site Continuity

**UTM parameters cannot be confirmed** — all 22 click links pass through `click.chp.kohls.com` or `click.s.kohls.com` redirects, which the QA probe skipped. UTM attachment on final destination URLs is unverifiable from this audit. Manual spot-check of 2–3 representative CTAs (e.g., the primary "15% off" CTA) is required.

The `mi_ecmp=1011842_202656` and `email_name=260506_DG_Email_Wednesda` parameters in image URLs confirm campaign-level tagging is wired into the MI tracking system, but this does not confirm UTM params on click destinations.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **High** | Physical address absent from visible source | Confirm it exists below truncation; if absent, add before next send — CAN-SPAM violation |
| **High** | List-Unsubscribe-Post missing | Confirm ESP injects RFC 8058 header at SMTP layer; if not, enable — required for Gmail bulk sender compliance |
| **High** | `</custom>` invalid tag | Remove; invalid element adjacent to SFMC pixel div |
| **Medium** | 9 tracking/content images missing `alt=""` | Add `alt="" aria-hidden="true"` to all tracking pixels; add descriptive alt to content images |
| **Medium** | `user-scalable=0` | Remove `maximum-scale=1, user-scalable=0` — blocked by iOS 10+, WCAG 1.4.4 violation |
| **Medium** | UTM integrity on click destinations | Spot-check 3+ redirect destinations for correct UTM params |
| **Medium** | Triple Google Fonts load | Deduplicate to single `<link>` per family; already MSO-guarded so safe to consolidate |
| **Low** | Empty `<title>` | Add a descriptive title (e.g., "Kohl's — 15% off + Kohl's Cash") |
| **Low** | 4 open-tracking pixels | Audit cross-platform open deduplication; confirm which pixel is source-of-truth for reporting |
## Recent history

- [[2026-05-03-last-day-25-off-up-to-85-off-clearance-5d4e065f-3552-4928-9261-]] — 6/10 (2026-05-03)
- [[2026-05-03-last-day-25-off-up-to-85-off-clearance]] — 8/10 (2026-05-03)
- [[2026-05-02-save-25-these-active-looks-are-in-it-for-the-long-run]] — 5/10 (2026-05-02)

