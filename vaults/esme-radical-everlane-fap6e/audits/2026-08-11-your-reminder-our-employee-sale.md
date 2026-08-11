---
slug: 2026-08-11-your-reminder-our-employee-sale
type: email
date: 2026-08-11
persona: esme-radical-everlane-fap6e
score: "4/10"
sender: Everlane
subject: "Your Reminder: Our Employee Sale"
tags: [email, score-4, sender/everlane]
---
# Your Reminder: Our Employee Sale
**Score:** 4/10 · **Type:** Email audit · **2026-08-11**
## Executive summary

- This is the same all-copy "employee sale access" template Everlane sent on 8/5 ("We're Sharing Our Employee Sale Access," 4/10), now framed as a reminder — and it's got the same broken personalization bug: "Hi There, ," with a visible trailing comma where the first-name token failed to populate. No product shots, no hero image, just stacked text paragraphs and a single underlined text link.
- The offer itself (70% off and higher, no code) is genuinely strong and the urgency ("before your favorites are gone," expiring 8/30) is credible. But this is a reminder email that reads identically to the original send — there's no visual distinction, no countdown treatment, no "you haven't redeemed this yet" framing that would justify a second touch in the same inbox.
- Judgement: the offer is the strongest lever Everlane has pulled all month, but the execution is lazy and the merge-field bug is a real, visible defect that undercuts the "exclusive" framing the copy is going for.

## What's working

- The discount is concrete and aggressive — "70% off and higher" is a real number, not vague sale language.
- "No code needed" removes friction before the click.
- The urgency line ("before your favorites are gone") plus the fine-print deadline (8/30) gives a credible, non-manufactured time bound.
- The plain-text, no-hero-image format reads as a personal insider heads-up rather than a blast, which fits the "employee sale" premise.

## What's weak

- Broken personalization: "Hi There, ," shows an empty name token and a stray comma — a visible render bug.
- Zero product imagery — nothing shows what's actually on sale, so there's no visual hook to click toward.
- This is a reminder send with no visual or copy differentiation from the 8/5 original — same layout, same body copy pattern, missed opportunity to signal "time's running out" more urgently.
- Single CTA is a small underlined text link ("SHOP THE SALE"), not a button — weak visual hierarchy, easy to miss scanning on mobile.
- "All items are final sale" is buried in body copy right after the CTA, which reads as a mild bait-and-switch given how aggressive the discount claim is.

## Recommendations

- 1. Fix the merge-field bug immediately — "Hi There, ," is shipping with a broken token; QA every subject/body personalization field before send.
- 2. Turn "SHOP THE SALE" into an actual button, not an underlined text link — biggest single lift for click-through.
- 3. Add at least one product image or a small grid of best-sellers so the eye has something to land on beyond text.
- 4. Differentiate the reminder from the original — add a "last chance" or countdown treatment so this doesn't read as a duplicate of 8/5's send.
- **Subject Alt A:** `Last Call: Employee Sale Ends 8/30`
- **Subject Alt B:** `Your Private Link Is Still Active — 70% Off`
- **Preheader Alt A:** `Best-sellers won't last at these prices.`
- **Preheader Alt B:** `No code, no catch — just use your link before it's gone.`

## Full review
## 1. Overview

This is the same all-copy "employee sale access" template Everlane sent on 8/5 ("We're Sharing Our Employee Sale Access," 4/10), now framed as a reminder — and it's got the same broken personalization bug: "Hi There, ," with a visible trailing comma where the first-name token failed to populate. No product shots, no hero image, just stacked text paragraphs and a single underlined text link.

The offer itself (70% off and higher, no code) is genuinely strong and the urgency ("before your favorites are gone," expiring 8/30) is credible. But this is a reminder email that reads identically to the original send — there's no visual distinction, no countdown treatment, no "you haven't redeemed this yet" framing that would justify a second touch in the same inbox.

Judgement: the offer is the strongest lever Everlane has pulled all month, but the execution is lazy and the merge-field bug is a real, visible defect that undercuts the "exclusive" framing the copy is going for.

## 2. What worked

- The discount is concrete and aggressive — "70% off and higher" is a real number, not vague sale language.
- "No code needed" removes friction before the click.
- The urgency line ("before your favorites are gone") plus the fine-print deadline (8/30) gives a credible, non-manufactured time bound.
- The plain-text, no-hero-image format reads as a personal insider heads-up rather than a blast, which fits the "employee sale" premise.

## 3. What didn't

- Broken personalization: "Hi There, ," shows an empty name token and a stray comma — a visible render bug.
- Zero product imagery — nothing shows what's actually on sale, so there's no visual hook to click toward.
- This is a reminder send with no visual or copy differentiation from the 8/5 original — same layout, same body copy pattern, missed opportunity to signal "time's running out" more urgently.
- Single CTA is a small underlined text link ("SHOP THE SALE"), not a button — weak visual hierarchy, easy to miss scanning on mobile.
- "All items are final sale" is buried in body copy right after the CTA, which reads as a mild bait-and-switch given how aggressive the discount claim is.

## 4. What I'd change

1. Fix the merge-field bug immediately — "Hi There, ," is shipping with a broken token; QA every subject/body personalization field before send.
2. Turn "SHOP THE SALE" into an actual button, not an underlined text link — biggest single lift for click-through.
3. Add at least one product image or a small grid of best-sellers so the eye has something to land on beyond text.
4. Differentiate the reminder from the original — add a "last chance" or countdown treatment so this doesn't read as a duplicate of 8/5's send.
   - **Subject Alt A:** `Last Call: Employee Sale Ends 8/30`
   - **Subject Alt B:** `Your Private Link Is Still Active — 70% Off`
   - **Preheader Alt A:** `Best-sellers won't last at these prices.`
   - **Preheader Alt B:** `No code, no catch — just use your link before it's gone.`

## 5. Business Impact Score (1-10)

**4/10**
- One concrete offer is visible (70% off and higher)
- Primary CTA is unambiguous (clear text: "SHOP THE SALE")
- Offer feels honest (no code needed, deadline stated clearly)

## 6. Open Likelihood (persona-grounded)

- **Score:** `5/10`
- **Signals counted:** Sender display name is recognizable; Subject is concrete (specific offer reminder); Subject is relevant to persona's focus area; Subject is under ~50 chars; No spam signals.
- **Rationale:** "Your Reminder: Our Employee Sale" is short and unambiguous, and Everlane is a known sender, but it's a near-duplicate of the 8/5 send with no fresh hook.

## 7. Click-Through Likelihood (persona-grounded)

- **Score:** `3/10`
- **Signals counted:** Primary CTA is in category; CTA copy is specific ("Shop the Sale"); Offer is time-bounded with credible deadline.
- **Rationale:** The discount is compelling but there's no product to actually want — no image, no hero item — and the CTA is a small text link rather than a button, so there's little pulling the eye toward the click.

## 8. Subject

- **Subject:** `Your Reminder: Our Employee Sale`
- **Length:** 33
- **Scores (1-10):** Clarity `6`, Curiosity `4`, Personalization `2`, Urgency `4`, Specificity `4`

## 9. Preview

- **Preview:** `(none / leaking junk)`
- **Length:** 0
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `2`

---

## Technical Audit

## 1. Technical Summary
Klaviyo-generated MJML email with two broken relative-path CTA links and missing standard compliance/authentication headers; core rendering markup is otherwise well-formed.

## 2. Link & Tracking Issues
- **"Shop Men" CTA broken**: tracked link `https://trk.send.everlane.com/l/01KZRR26MJ7GZS734VMD00KS68_3` redirects to a relative path `/collections/shop-all-mens-clothing?_kx=...&bxid=...` with no scheme/host — QA flags "unknown url type." This will fail to resolve in most mail clients/link scanners.
- **"Everlane Logo" link broken**: same issue — `https://trk.send.everlane.com/l/01KZRR26MJ7GZS734VMD00KS68_0` redirects to relative path `/pages/womens?_kx=...&bxid=...&cm_flow_i...` (query string also appears truncated at `cm_flow_i`).
- Both use Klaviyo click-tracking redirects (`trk.send.everlane.com/l/...`) with `_kx` and `bxid` parameters intact, consistent with the rest of the campaign's tracking scheme — the destination path itself is the defect, not the tracking wrapper.
- 12 material links were probed by QA (5 footer/utility/social links deprioritized and skipped); an unsubscribe link was confirmed present.

## 3. Rendering & Accessibility
- **Missing alt text**: tracking pixel `https://trk.send.everlane.com/o/01KZRR26MJ7GZS734VMD00KS68` has no `alt` attribute. Low severity since it's an open-tracking pixel, not content, but flag per accessibility scan.
- MSO/Outlook conditional comments (`<!--[if mso]>`, `<!--[if lte mso 11]>`) and `.mj-outlook-group-fix` present — standard MJML/Outlook compatibility handling, no issues found.
- Responsive breakpoints via `@media (max-width: 480px)` are defined for headings, tables, and layout columns — no issues found.
- Preheader div present (`display:none;font-size:1px;co…`, truncated) — cannot fully verify preheader text content from truncated source.

## 4. Personalization & Merge Tokens
No merge tags/personalization variables visible in the provided source (e.g., no unresolved `{{ }}` or `*|MERGE|*` tokens). No issues found based on available markup.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header not found** (WARN): could not be confirmed as present — may be a relay capture gap (AgentMail) rather than a true absence, but unverifiable from available data.
- **List-Unsubscribe-Post header not found** (WARN): RFC 8058 one-click unsubscribe cannot be confirmed as supported.
- **Authentication-Results header not found** (WARN): SPF/DKIM pass/fail status unknown via the AgentMail relay — cannot confirm sender authentication.
- An in-body unsubscribe link is confirmed present per QA (footer link included in the skipped/deprioritized set), satisfying the visible CAN-SPAM unsubscribe requirement at the content level, though machine-readable header-based unsubscribe is unverified.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- No standard `utm_source`/`utm_medium`/`utm_campaign` parameters observed; tracking instead relies on Klaviyo's `_kx` and `bxid` parameters plus the `cm_flow_i...` (truncated) parameter — consistent internal tracking scheme, but not standard UTM, so cross-platform (GA4/non-Klaviyo) attribution may not tie back cleanly.
- Landing page alignment cannot be verified for "Shop Men" or "Everlane Logo" since both destination URLs are malformed (relative paths without host), which would also break any downstream landing-page/UTM continuity check.

## 7. Recommendations
1. Fix the two broken destination URLs by prefixing the intended host (likely `https://www.everlane.com`) so `/collections/shop-all-mens-clothing?...` and `/pages/womens?...` resolve to absolute URLs.
2. Add `alt=""` (empty, since it's a tracking pixel) to the `trk.send.everlane.com/o/...` image to close the accessibility gap cleanly.
3. Confirm with ESP (Klaviyo) that `List-Unsubscribe` and `List-Unsubscribe-Post` headers are being sent at the SMTP layer — verify independently of the AgentMail relay if header capture is suspected to be lossy.
4. Verify SPF/DKIM/DMARC alignment via a direct raw-header capture (bypassing the relay) to confirm Authentication-Results, since deliverability cannot be assessed from this data alone.
## Recent history

- [[2026-08-10-i-would-honestly-wear-this-t-shirt-anywhere]] — 6/10 (2026-08-10)
- [[2026-08-09-the-totes-doing-the-most]] — 6/10 (2026-08-09)
- [[2026-08-08-cult-favorites-styled-their-way]] — 7/10 (2026-08-08)

