---
slug: 2026-08-18-new-around-here-let-s-start-with-3-free-gifts
type: email
date: 2026-08-18
persona: rae-l
score: "4/10"
sender: ILIA
subject: New around here? Let’s start with 3 free gifts.
tags: [email, score-4, sender/ilia]
---
# New around here? Let’s start with 3 free gifts.
**Score:** 4/10 · **Type:** Email audit · **2026-08-18**
## Executive summary

- This is a render failure dressed up as a "personal note" email — and unlike ILIA's 08-13 back-to-school send, which deliberately used the plain-text "note from Marissa" format as a stylistic choice, this one shows the tell-tale sign of a broken merge tag: "New around here, ? Welcome to the world of ILIA." That comma-question-mark gap is where a first-name token failed to resolve, and it's sitting in the very first line of the email, visible before any scroll.
- Strip away that bug and there's a genuinely good offer underneath: a 3-piece Beauty of Clean gift set (Multi-Stick, Lip Sketch Crayon, Limitless Lash Mascara — Sephora's #1 mascara, per the copy) free with a $50 first order. That's a strong new-customer acquisition hook, and the bullet list of what's in the box is specific and appealing. But the email is 100% unstyled text — no logo, no product image, no hero, no button. The only clickable element is a bare blue hyperlink buried mid-paragraph.
- Judgement: the offer is a real win, but the execution is either broken (merge tag) or a template that hasn't loaded assets/styling for this send. As shipped, this reads more like a plain-text fallback than a finished campaign email, and it will underperform badly on click-through relative to ILIA's imagery-driven sends like 08-10's "Do you line, smudge, or wing it?" (8/10).

## What's working

- The core offer is concrete and generous: free 3-piece gift set with a $50+ first order, clearly stated with a specific value proposition.
- The gift contents are itemized with real product benefits (12-hour wear, clean formulas, Sephora's #1 mascara claim) rather than vague "free gift" language.
- Urgency is present and credible ("for the next couple days only") without feeling manufactured.
- Fine print is honest and visible — while supplies last, US only, new customers only, with a details link.

## What's weak

- Broken personalization token in the opening line ("New around here, ? Welcome...") — this is a visible render bug that undermines trust immediately.
- Zero visual design: no logo, no hero image, no product photography, no brand color, no button. It's indistinguishable from a plain-text template error.
- No CTA button — the only click path is a small inline text link ("your first $50+ order on ILIABeauty.com") that's easy to miss.
- No product imagery for a gift set that's inherently visual (makeup shades, packaging) — this is the category where a picture does real work.
- Compared to 08-12's "One, two, free" (7/10, also a GWP acquisition play), this send has none of the visual polish that made that one land.

## Recommendations

- 1. Fix the broken merge tag before anything else — "New around here, ?" reads as an obvious bug and will tank trust/deliverability perception. Test the send with a fallback ("New around here, friend?") for missing first names.
- 2. Add a hero image of the actual gift set (swatches of the Multi-Stick shade, the mascara, the Lip Sketch crayon) — this offer is highly visual and currently has zero product imagery.
- 3. Replace the buried text link with a real CTA button ("Claim Your Free Gift" or "Shop & Get Your Gifts") placed right after the offer paragraph.
- 4. Rebuild this in ILIA's standard branded template — logo header, brand color accents — rather than shipping what looks like an unstyled fallback.
- 5. Move the itemized gift list higher, right under the headline, so it's visible without scrolling.
- **Subject Alt A:** `Your welcome gift: 3 free ILIA minis (and one full-size)`
- **Subject Alt B:** `New here? Here's $65 in gifts, on us.`
- **Preheader Alt A:** `A hydrating tint, a 12-hour lip crayon, and Sephora's #1 mascara — free with your first order.`
- **Preheader Alt B:** `Ends in a couple days. New customers only.`

## Full review
## 1. Overview
This is a render failure dressed up as a "personal note" email — and unlike ILIA's 08-13 back-to-school send, which deliberately used the plain-text "note from Marissa" format as a stylistic choice, this one shows the tell-tale sign of a broken merge tag: "New around here, ? Welcome to the world of ILIA." That comma-question-mark gap is where a first-name token failed to resolve, and it's sitting in the very first line of the email, visible before any scroll.

Strip away that bug and there's a genuinely good offer underneath: a 3-piece Beauty of Clean gift set (Multi-Stick, Lip Sketch Crayon, Limitless Lash Mascara — Sephora's #1 mascara, per the copy) free with a $50 first order. That's a strong new-customer acquisition hook, and the bullet list of what's in the box is specific and appealing. But the email is 100% unstyled text — no logo, no product image, no hero, no button. The only clickable element is a bare blue hyperlink buried mid-paragraph.

Judgement: the offer is a real win, but the execution is either broken (merge tag) or a template that hasn't loaded assets/styling for this send. As shipped, this reads more like a plain-text fallback than a finished campaign email, and it will underperform badly on click-through relative to ILIA's imagery-driven sends like 08-10's "Do you line, smudge, or wing it?" (8/10).

## 2. What worked
- The core offer is concrete and generous: free 3-piece gift set with a $50+ first order, clearly stated with a specific value proposition.
- The gift contents are itemized with real product benefits (12-hour wear, clean formulas, Sephora's #1 mascara claim) rather than vague "free gift" language.
- Urgency is present and credible ("for the next couple days only") without feeling manufactured.
- Fine print is honest and visible — while supplies last, US only, new customers only, with a details link.

## 3. What didn't
- Broken personalization token in the opening line ("New around here, ? Welcome...") — this is a visible render bug that undermines trust immediately.
- Zero visual design: no logo, no hero image, no product photography, no brand color, no button. It's indistinguishable from a plain-text template error.
- No CTA button — the only click path is a small inline text link ("your first $50+ order on ILIABeauty.com") that's easy to miss.
- No product imagery for a gift set that's inherently visual (makeup shades, packaging) — this is the category where a picture does real work.
- Compared to 08-12's "One, two, free" (7/10, also a GWP acquisition play), this send has none of the visual polish that made that one land.

## 4. What I'd change
1. Fix the broken merge tag before anything else — "New around here, ?" reads as an obvious bug and will tank trust/deliverability perception. Test the send with a fallback ("New around here, friend?") for missing first names.
2. Add a hero image of the actual gift set (swatches of the Multi-Stick shade, the mascara, the Lip Sketch crayon) — this offer is highly visual and currently has zero product imagery.
3. Replace the buried text link with a real CTA button ("Claim Your Free Gift" or "Shop & Get Your Gifts") placed right after the offer paragraph.
4. Rebuild this in ILIA's standard branded template — logo header, brand color accents — rather than shipping what looks like an unstyled fallback.
5. Move the itemized gift list higher, right under the headline, so it's visible without scrolling.
   - **Subject Alt A:** `Your welcome gift: 3 free ILIA minis (and one full-size)`
   - **Subject Alt B:** `New here? Here's $65 in gifts, on us.`
   - **Preheader Alt A:** `A hydrating tint, a 12-hour lip crayon, and Sephora's #1 mascara — free with your first order.`
   - **Preheader Alt B:** `Ends in a couple days. New customers only.`

## 5. Business Impact Score (1-10)
**4/10**
- One concrete offer is visible (specific gift with $50+ order threshold)
- Offer feels honest (no buried fine print, exclusionary language, bait-and-switch)
- Sender is a brand you recognize / are subscribed to
- Email reflects current campaign / season (not stale promo language)

## 6. Open Likelihood (persona-grounded)
- **Score:** `5/10`
- **Signals counted:** Sender display name is recognizable; Subject is concrete (specific offer — "3 free gifts"); Subject is under ~50 chars; No spam signals (ALL CAPS/exclamation stacking).
- **Rationale:** "New around here? Let's start with 3 free gifts" is a clean, curiosity-driving subject with a real number attached, but it's a generic acquisition subject that doesn't reference eye-color personalization or the Thru Line arc ILIA subscribers have been tracking since 07-22.

## 7. Click-Through Likelihood (persona-grounded)
- **Score:** `2/10`
- **Signals counted:** Offer reduces price / free-gift value (GWP with $50 threshold); Offer is time-bounded with credible deadline.
- **Rationale:** The broken merge tag and complete absence of imagery or a CTA button make this feel unfinished; there's no visual reason to click, just a small embedded text link that's easy to scroll past.

## 8. Subject
- **Subject:** `New around here? Let's start with 3 free gifts.`
- **Length:** 49
- **Scores (1-10):** Clarity `7`, Curiosity `6`, Personalization `4`, Urgency `4`, Specificity `6`

## 9. Preview
- **Preview:** (none / leaking junk)
- **Length:** 0
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `2`

---

## Technical Audit

# Technical Audit — ILIA "3 free gifts" Email

## 1. Technical Summary
Email is built on Klaviyo's send infrastructure (`trk.send.iliabeauty.com`) with standard link/open tracking. Core structural issues are compliance-header gaps (unverifiable at the transport layer from source alone) and one unlabeled tracking pixel; link and rendering markup are otherwise clean.

## 2. Link & Tracking Issues
- All three content links (`_0`, `_1`, unsubscribe `_2`) route through Klaviyo's tracked redirector `https://trk.send.iliabeauty.com/l/01M0B3BQD2G18A4C1KJBWK5ZCC_*` — consistent, standard pattern.
- Links carry `rel="noopener noreferrer nofollow"` and `target="_blank"` — correct security attributes.
- Open-tracking pixel present: `https://trk.send.iliabeauty.com/o/01M0B3BQD2G18A4C1KJBWK5ZCC` (1x1, `alt=""`).
- No issues with link destinations resolving through a single consistent tracking domain.

## 3. Rendering & Accessibility
- **Missing alt text**: tracking pixel has `alt=""` (empty) rather than descriptive/absent alt — flagged by QA as missing alt text on `src=".../o/01M0B3BQD2G18A4C1KJBWK5ZCC"`. Low practical impact since it's a 1x1 tracking pixel, but fails strict accessibility checks.
- Preheader (`data-kl-sp`) uses a long run of zero-width joiners/`&nbsp;` as whitespace padding — a common Klaviyo pattern to push preview text; not a defect but worth noting if any client renders the invisible characters.
- Font import (`@import url(".../custom_fonts.css")`) is wrapped in an MSO conditional comment (`<!--[if !mso]><!--> ... <!--<![endif]-->`), correctly hiding the web-font `@import` from Outlook — good practice.
- No `<img>` tags with visible/meaningful content lack alt attributes (only the tracking pixel is flagged).

## 4. Personalization & Merge Tokens
- Subject line and preheader (`Beauty of Clean Makeup Set with your first $50+ order`) contain no merge tags — fully static copy.
- Body copy: `New around here, ?` — the stray `,` followed directly by `?` with no first-name token in between strongly suggests a broken/empty personalization merge tag (e.g., `{{ first_name }}` resolving to blank) rather than intentional punctuation. This is a rendering defect, not a design choice — flag for QA on the live send.
- No other dynamic/merge fields detected in the truncated source.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **Unsubscribe link present** in-body (`_2` tracked link, "click here"), satisfying the visible-unsubscribe requirement.
- **[WARN] No physical mailing address detected** in the HTML — CAN-SPAM requires a physical postal address in every commercial email; none found in the truncated source (footer table only contains the unsubscribe line).
- **[WARN] `List-Unsubscribe` header not found** — may be relay-side capture loss (AgentMail) rather than absence at origin; cannot confirm one-click unsubscribe support from HTML alone.
- **[WARN] `List-Unsubscribe-Post` header not found (RFC 8058)** — same caveat; if genuinely absent, mailbox providers (Gmail/Yahoo bulk-sender requirements) will not offer native one-click unsubscribe.
- **[WARN] `Authentication-Results` header not found** — SPF/DKIM/DMARC pass/fail status cannot be verified via this relay; recommend checking headers at a non-relay capture point.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- Both CTA links and the unsubscribe link route through Klaviyo's redirector, which resolves to `ILIABeauty.com` per the copy — cannot confirm final UTM parameters or landing-page targeting from the truncated tracked URLs alone (redirect target not exposed in source).
- No raw `iliabeauty.com` destination URL with UTM query params is present in the visible HTML to audit directly — recommend resolving the `_0`/`_1` redirect targets to confirm `utm_source`/`utm_medium`/`utm_campaign` presence and that the landing page matches the "$50+ order / free gift" offer stated in copy.

## 7. Recommendations
1. Add a physical mailing address to the email footer to satisfy CAN-SPAM (currently absent).
2. Verify `List-Unsubscribe` and `List-Unsubscribe-Post` headers are actually set at the sending MTA (Klaviyo) — if confirmed present at origin, this may just be an AgentMail relay capture gap; if absent, add them for RFC 8058 one-click unsubscribe support.
3. Confirm SPF/DKIM/DMARC pass status via a header capture point upstream of the relay, since `Authentication-Results` isn't visible here.
4. Investigate the `New around here, ?` string — looks like an empty/broken personalization token; verify against a live test send with populated and null first-name values.
5. Give the tracking pixel a non-empty `alt` or omit the attribute per best practice (minor).
6. Resolve the two tracked CTA links to confirm UTM parameters and that the landing page matches the stated $50+ order / free gift offer.
## Recent history

- [[2026-08-18-this-is-perfect-for-you]] — 7/10 (2026-08-18)
- [[2026-08-18-cheek-week-ends-tonight]] — 8/10 (2026-08-18)
- [[2026-08-17-more-than-just-makeup]] — 5/10 (2026-08-17)

