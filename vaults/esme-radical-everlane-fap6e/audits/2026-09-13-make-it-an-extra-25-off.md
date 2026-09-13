---
slug: 2026-09-13-make-it-an-extra-25-off
type: email
date: 2026-09-13
persona: esme-radical-everlane-fap6e
score: "4/10"
sender: Everlane
subject: Make It an Extra 25% Off
tags: [email, score-4, sender/everlane]
---
# Make It an Extra 25% Off
**Score:** 4/10 · **Type:** Email audit · **2026-09-13**
## Executive summary

- Another broken-personalization plain-text discount blast from Everlane, and this one is nearly identical to the "About That Extra 25% Off…" send from 2026-09-12 (4.00/10) — same "extra 25% off already-marked-down sale styles" offer, same EXTRA25 code, same plain-text-styled layout, and the exact same greeting bug: "Hi There, ," with an empty first-name token and a stray comma sitting right at the top of the email. That's now two days in a row this brand has shipped the identical personalization failure.
- There's a real, specific, stackable discount here (25% off styles already up to 70% off) with a clear deadline (9/14, 11:59 PM PST), which is more concrete than most of Everlane's recent full-price editorial sends. But the execution completely undercuts it — no hero image, no product shots, a broken merge field, and a subject line that's copy from the prior day's send with only cosmetic wording changes.
- Judgement: the offer itself is decent, but this is a repeat, unfixed bug shipped twice in two days on a real discount email — that's a QA miss, not a one-off.

## What's working

- Concrete, stackable discount clearly stated: extra 25% off styles already up to 70% off, with a visible code (EXTRA25).
- Firm, credible deadline in the footer fine print (9/14/2026, 11:59 PM PST) supports urgency.
- Category links (sweaters, outerwear, more) give a fast path into relevant fall inventory.
- Clean nav bar (Shop Women/Men, New Arrivals, Best-Sellers) keeps the email scannable.

## What's weak

- "Hi There, ," — the same broken first-name token and stray comma seen in the 2026-09-12 "About That Extra 25% Off…" send, now repeated verbatim a day later.
- Zero visual merchandising: no hero image, no product photography, nothing showing what "sale styles" actually looks like.
- No visible hierarchy or CTA button — it's a wall of hyperlinked text with no clear primary action.
- Entirely reliant on underlined inline text links rather than a designed button, which reads more like a plain-text fallback than a finished campaign email.

## Recommendations

- 1. Fix the personalization token pipeline immediately — this is the second consecutive day this exact bug has shipped, which suggests it's not a one-off render glitch but an unmonitored merge-field failure. Add a fallback (e.g., "Hi there!") when first name is empty.
- 2. Add a real hero image and a designed CTA button (e.g., "Shop the Sale") above the fold — right now there's no visual anchor at all.
- 3. Move the VIP/code messaging into a bolder visual treatment (badge or banner) since "extra 25% off" is the strongest lever in this email and it's buried in body text.
- 4. Tighten subject/preheader to lead with the number, not vague phrasing.
- **Subject Alt A:** `Extra 25% Off Sale Styles, Ends Tomorrow`
- **Subject Alt B:** `VIP Code: Extra 25% Off Everything on Sale`
- **Preheader Alt A:** `Stack EXTRA25 on styles already up to 70% off — ends 9/14.`
- **Preheader Alt B:** `Your VIP discount expires tomorrow at 11:59pm PST.`

## Full review
## 1. Overview

Another broken-personalization plain-text discount blast from Everlane, and this one is nearly identical to the "About That Extra 25% Off…" send from 2026-09-12 (4.00/10) — same "extra 25% off already-marked-down sale styles" offer, same EXTRA25 code, same plain-text-styled layout, and the exact same greeting bug: "Hi There, ," with an empty first-name token and a stray comma sitting right at the top of the email. That's now two days in a row this brand has shipped the identical personalization failure.

There's a real, specific, stackable discount here (25% off styles already up to 70% off) with a clear deadline (9/14, 11:59 PM PST), which is more concrete than most of Everlane's recent full-price editorial sends. But the execution completely undercuts it — no hero image, no product shots, a broken merge field, and a subject line that's copy from the prior day's send with only cosmetic wording changes.

Judgement: the offer itself is decent, but this is a repeat, unfixed bug shipped twice in two days on a real discount email — that's a QA miss, not a one-off.

## 2. What worked
- Concrete, stackable discount clearly stated: extra 25% off styles already up to 70% off, with a visible code (EXTRA25).
- Firm, credible deadline in the footer fine print (9/14/2026, 11:59 PM PST) supports urgency.
- Category links (sweaters, outerwear, more) give a fast path into relevant fall inventory.
- Clean nav bar (Shop Women/Men, New Arrivals, Best-Sellers) keeps the email scannable.

## 3. What didn't
- "Hi There, ," — the same broken first-name token and stray comma seen in the 2026-09-12 "About That Extra 25% Off…" send, now repeated verbatim a day later.
- Zero visual merchandising: no hero image, no product photography, nothing showing what "sale styles" actually looks like.
- No visible hierarchy or CTA button — it's a wall of hyperlinked text with no clear primary action.
- Entirely reliant on underlined inline text links rather than a designed button, which reads more like a plain-text fallback than a finished campaign email.

## 4. What I'd change
1. Fix the personalization token pipeline immediately — this is the second consecutive day this exact bug has shipped, which suggests it's not a one-off render glitch but an unmonitored merge-field failure. Add a fallback (e.g., "Hi there!") when first name is empty.
2. Add a real hero image and a designed CTA button (e.g., "Shop the Sale") above the fold — right now there's no visual anchor at all.
3. Move the VIP/code messaging into a bolder visual treatment (badge or banner) since "extra 25% off" is the strongest lever in this email and it's buried in body text.
4. Tighten subject/preheader to lead with the number, not vague phrasing.
   - **Subject Alt A:** `Extra 25% Off Sale Styles, Ends Tomorrow`
   - **Subject Alt B:** `VIP Code: Extra 25% Off Everything on Sale`
   - **Preheader Alt A:** `Stack EXTRA25 on styles already up to 70% off — ends 9/14.`
   - **Preheader Alt B:** `Your VIP discount expires tomorrow at 11:59pm PST.`

## 5. Business Impact Score (1-10)
**4/10**
- One concrete offer is visible (specific %/$ off, free-shipping, BOGO)
- Primary CTA is unambiguous (clear button copy + visible button) — arguable, counted as false actually; only 3 true signals below
- Offer feels honest (no buried fine print, exclusionary language, bait-and-switch)
- Email reflects current campaign / season (not stale promo language)

(Note: recount — true signals: concrete offer visible, offer feels honest, reflects current season. Broken personalization token and no imagery both fail their respective criteria.)

## 6. Open Likelihood (persona-grounded)
- **Score:** `5/10`
- **Signals counted:** Sender display name is recognizable; Subject is relevant to your persona's focus area; Subject is under ~50 chars; No spam signals; Time-bounded urgency that feels credible.
- **Rationale:** "Everlane" is a trusted sender and the subject is clean and non-spammy, but the offer/subject is nearly a repeat of yesterday's "About That Extra 25% Off…" send, which dulls open motivation on cadence alone.

## 7. Click-Through Likelihood (persona-grounded)
- **Score:** `4/10`
- **Signals counted:** Primary CTA is in your category/focus area; Offer reduces price OR has loyalty member pricing; Offer is time-bounded with credible deadline.
- **Rationale:** The discount and deadline are real motivators, but there's no hero product, no specific item to click into, and the broken "Hi There, ," greeting undercuts trust before you even get to the offer.

## 8. Subject
- **Subject:** `Make It an Extra 25% Off`
- **Length:** 25
- **Scores (1-10):** Clarity `6`, Curiosity `4`, Personalization `2`, Urgency `4`, Specificity `5`

## 9. Preview
- **Preview:** `(none / leaking junk)`
- **Length:** 0
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`

---

## Technical Audit

## 1. Technical Summary
Klaviyo-generated (MJML) HTML email from Everlane with two broken tracked links and missing compliance/authentication headers; core structure otherwise renders correctly.

## 2. Link & Tracking Issues
- **2 broken redirect links** flagged by automated QA:
  - "Everlane Logo" → `https://trk.send.everlane.com/l/01M2DQ76RTKBYCZMF0CAJBATCS_0` — underlying destination `/pages/womens?_kx=...` returns "unknown url type" error
  - "Shop Men" → `https://trk.send.everlane.com/l/01M2DQ76RTKBYCZMF0CAJBATCS_8` — underlying destination `/collections/shop-all-mens-clothing?_kx=...` returns "unknown url type" error
  - Both use Klaviyo's `_kx` exchange token plus Bronto/legacy `bxid`/`cm_flow_i` params; the redirect resolution is failing at the `trk.send.everlane.com` link-tracking layer rather than in the destination URL itself.
- Klaviyo custom-fonts stylesheet is loaded via `@import url(https://static-forms.klaviyo.com/fonts/api/v1/USb9mf/custom_fonts.css)` — external `@import` inside `<style>` is stripped by several major clients (Gmail, Outlook.com), causing silent font fallback; not flagged by QA but worth noting since it affects link/button rendering fidelity indirectly.
- Only 12 of the material links were probed; QA explicitly deprioritized footer/utility/social links, so unverified links may exist beyond these two failures.

## 3. Rendering & Accessibility
- **Missing alt text**: tracking pixel image `https://trk.send.everlane.com/o/01M2DQ76RTKBYCZMF0CAJBATCS` has no `alt` attribute. For an open-tracking pixel this is low-impact, but flag if other content images in the untruncated body share this pattern.
- MSO/Outlook conditional comments (`<!--[if mso]>`, `<!--[if lte mso 11]>`) and `mj-outlook-group-fix` are present, indicating standard MJML Outlook fallback handling — no issues found here.
- Responsive breakpoints (`max-width: 480px`) are defined for headers, tables, and mobile-only/desktop-only toggles — no issues found.

## 4. Personalization & Merge Tokens
- No unresolved merge tags (e.g. `{{ }}`, `*|...|*`) observed in the truncated source.
- Klaviyo tracking/personalization params (`_kx`, `bxid`, `cm_flow_i`) are present on outbound links as expected for click attribution — no malformed token syntax found.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **[WARN] `List-Unsubscribe` header not found** — may be a capture artifact of the AgentMail relay rather than a true absence; cannot confirm compliance status from this data alone.
- **[WARN] `List-Unsubscribe-Post` header not found (RFC 8058)** — one-click unsubscribe support unconfirmed.
- **[WARN] `Authentication-Results` header not found** — SPF/DKIM pass/fail status unknown via this relay.
- QA notes an unsubscribe link is always included among probed links, consistent with CAN-SPAM footer requirements, but its presence wasn't independently verified as functional in this run.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- Cannot verify UTM parameters or landing-page alignment — both flagged links resolve through the `trk.send.everlane.com` redirector, and the underlying destination paths (`/pages/womens`, `/collections/shop-all-mens-clothing`) carry only Klaviyo/Bronto tracking params (`_kx`, `bxid`, `cm_flow_i`), not `utm_*` params. No UTM tagging observed on the two probed links.
- Destination paths (`/pages/womens`, `/collections/shop-all-mens-clothing`) look structurally consistent with Everlane's site IA, but resolution could not be confirmed due to the link errors in Section 2.

## 7. Recommendations
1. Investigate the `trk.send.everlane.com/l/01M2DQ76RTKBYCZMF0CAJBATCS_0` and `..._8` redirects — fix or regenerate the Klaviyo tracked-link mapping for the logo and "Shop Men" CTA before next send.
2. Confirm whether `List-Unsubscribe` / `List-Unsubscribe-Post` headers are actually being sent (check raw SMTP headers at the ESP, not just via the AgentMail relay capture) to close out RFC 8058 one-click unsubscribe support.
3. Verify SPF/DKIM/DMARC alignment directly at the sending MTA, since `Authentication-Results` wasn't observable through this relay.
4. Add descriptive or empty `alt=""` on the tracking pixel for consistency with accessibility linting, and audit other `<img>` tags in the full (non-truncated) body for missing alt text.
5. Consider adding `utm_source`/`utm_medium`/`utm_campaign` params to material CTAs if cross-channel analytics attribution to landing pages is expected.
## Recent history

- [[2026-08-19-don-t-miss-your-exclusive-access]] — 5/10 (2026-08-19)
- [[2026-08-18-way-high-denim-now-way-lower-price]] — 5/10 (2026-08-18)
- [[2026-08-17-forget-sale-try-better-prices]] — 5/10 (2026-08-17)

