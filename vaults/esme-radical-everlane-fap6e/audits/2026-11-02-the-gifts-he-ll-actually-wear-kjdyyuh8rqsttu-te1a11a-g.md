---
slug: 2026-11-02-the-gifts-he-ll-actually-wear-kjdyyuh8rqsttu-te1a11a-g
type: email
date: 2026-11-02
persona: esme-radical-everlane-fap6e
score: "3/10"
sender: Everlane
subject: The Gifts He’ll Actually Wear
tags: [email, score-3, sender/everlane]
---
# The Gifts He’ll Actually Wear
**Score:** 3/10 · **Type:** Email audit · **2026-11-02**
## Executive summary

- This render is mostly broken. Every image slot (logo, hero, product grids, gift guide banner) shows a broken-image icon with alt text and a large empty box. The logo, the "Better Gifts For Him" hero and the "Shop Now" tile are all blank, so the recipient sees no product and no brand mark. What's left is a text skeleton: one line of copy, two "Gifts Under" headings, one burgundy "SHOP NOW" button and a footer.
- The strategy underneath is sound. "Gifts He'll Actually Wear" is a clear gifting angle with a price-tier structure ($100 and $50) and a "certified materials" quality claim. None of that lands when the visuals are missing. This is a gift email with no gifts visible, and the only salvageable element is the single button. Judgement: as rendered, it's a failed send.

## What's working

- The copy "Premium sweaters and cold-weather layers that show you care without trying too hard" is on-voice and seasonal.
- The price-tier headings "Gifts Under $100" and "Gifts Under $50" give shoppers an easy way to browse by budget.
- The burgundy "SHOP NOW" button is clear and high-contrast against the white background.
- The footer is clean and well organized, with Shop Women/Men/New Arrivals/Best-Sellers, find a store, text signup, help center and legal text.

## What's weak

- Every image fails to render: the logo, hero, both product grids, the second "Shop Now" tile and the gift guide banner. The page is large empty boxes with alt text.
- With no logo, nothing identifies the brand except the sender name.
- No product, price or visual offer is visible. "Under $100" and "Under $50" are headings with nothing under them.
- Only one real button is visible. The "Shop Now" and "Shop The Gift Guide" slots are broken images, so their clickability is unclear.
- The alt text is raw and unstyled: "Image | Better Gifts For Him", "Image | Best-sellers that are better for his wardrobe and your wallet. | Certified materials made to last." Nothing has styled fallback text.

## Recommendations

- 1. Fix image delivery (hosting or loading) so the hero and product grids render. Everything else depends on this. Run a render test across clients before sending.
- 2. Add a live-text hero headline and a styled "bgcolor" fallback behind each image block, so the message survives when images are blocked.
- 3. Put the first CTA above the fold and name the product: "Shop Men's Sweaters" instead of a bare "Shop Now".
- 4. Show 3–4 products with prices under each price-tier heading, so "Under $50" has something to point at.
- 5. Style the alt text (font, size, colour) so a blocked-image view still reads as designed.
- **Subject Alt A:** `Gifts for him, all under $100`
- **Subject Alt B:** `Sweaters he'll actually wear`
- **Preheader Alt A:** `Best-sellers under $100, made with certified materials.`
- **Preheader Alt B:** `Layers for every guy on your list, starting under $50.`

## Full review
## 1. Overview

This render is mostly broken. Every image slot (logo, hero, product grids, gift guide banner) shows a broken-image icon with alt text and a large empty box. The logo, the "Better Gifts For Him" hero and the "Shop Now" tile are all blank, so the recipient sees no product and no brand mark. What's left is a text skeleton: one line of copy, two "Gifts Under" headings, one burgundy "SHOP NOW" button and a footer.

The strategy underneath is sound. "Gifts He'll Actually Wear" is a clear gifting angle with a price-tier structure ($100 and $50) and a "certified materials" quality claim. None of that lands when the visuals are missing. This is a gift email with no gifts visible, and the only salvageable element is the single button. Judgement: as rendered, it's a failed send.

## 2. What worked

- The copy "Premium sweaters and cold-weather layers that show you care without trying too hard" is on-voice and seasonal.
- The price-tier headings "Gifts Under $100" and "Gifts Under $50" give shoppers an easy way to browse by budget.
- The burgundy "SHOP NOW" button is clear and high-contrast against the white background.
- The footer is clean and well organized, with Shop Women/Men/New Arrivals/Best-Sellers, find a store, text signup, help center and legal text.

## 3. What didn't

- Every image fails to render: the logo, hero, both product grids, the second "Shop Now" tile and the gift guide banner. The page is large empty boxes with alt text.
- With no logo, nothing identifies the brand except the sender name.
- No product, price or visual offer is visible. "Under $100" and "Under $50" are headings with nothing under them.
- Only one real button is visible. The "Shop Now" and "Shop The Gift Guide" slots are broken images, so their clickability is unclear.
- The alt text is raw and unstyled: "Image | Better Gifts For Him", "Image | Best-sellers that are better for his wardrobe and your wallet. | Certified materials made to last." Nothing has styled fallback text.

## 4. What I'd change

1. Fix image delivery (hosting or loading) so the hero and product grids render. Everything else depends on this. Run a render test across clients before sending.
2. Add a live-text hero headline and a styled "bgcolor" fallback behind each image block, so the message survives when images are blocked.
3. Put the first CTA above the fold and name the product: "Shop Men's Sweaters" instead of a bare "Shop Now".
4. Show 3–4 products with prices under each price-tier heading, so "Under $50" has something to point at.
5. Style the alt text (font, size, colour) so a blocked-image view still reads as designed.

- **Subject Alt A:** `Gifts for him, all under $100`
- **Subject Alt B:** `Sweaters he'll actually wear`
- **Preheader Alt A:** `Best-sellers under $100, made with certified materials.`
- **Preheader Alt B:** `Layers for every guy on your list, starting under $50.`

## 5. Business Impact Score (1-10)

**3/10**
- Sender is a recognizable brand.
- One CTA button is clearly visible.
- The email reflects the current season (holiday gifting, cold-weather layers).

## 6. Open Likelihood (persona-grounded)

- **Score:** `5/10`
- **Signals counted:** Sender display name is recognizable; subject is relevant to a gifting focus; subject is under ~50 chars; no spam signals (no caps or exclamation marks); time-bounded seasonal context (holiday gifting). I could not see the preview text, so I did not credit preview-related signals.
- **Rationale:** "Everlane" is a trusted sender and the subject is short and clean. It is not specific, though: there is no offer, number or urgency.

## 7. Click-Through Likelihood (persona-grounded)

- **Score:** `2/10`
- **Signals counted:** Primary CTA copy is a verb plus a noun ("SHOP NOW"), which is weak but counts; brand voice is consistent in the visible copy.
- **Rationale:** With no hero, products or offer visible, there is little to click for. The button is clear but unsupported, and the broken-image gaps add friction.

## 8. Subject

- **Subject:** `The Gifts He’ll Actually Wear`
- **Length:** 30
- **Scores (1-10):** Clarity `7`, Curiosity `5`, Personalization `3`, Urgency `2`, Specificity `4`

## 9. Preview

- **Preview:** `(none / leaking junk)` — the preheader isn't visible in the render, so I can't verify it.
- **Length:** 0
- **Scores (1-10):** Complements subject `3`, Specificity `2`, Clarity `2`, Inbox-fit `3`

---

## Technical Audit

## 1. Technical Summary
The HTML is a Klaviyo/MJML-style template. All 12 probed links failed with DNS resolution errors on the tracking host `trk.send.everlane.com`, which drives the 17% pass rate. Because the failure is uniform and at the DNS layer, it is unconfirmed whether the domain is broken or the probe environment can't resolve it.

## 2. Link & Tracking Issues
- **All 12 probed links failed.** The error is `urlopen error [Errno 8] nodename nor servname provided, or not known`, which is a DNS failure, not an HTTP status. Failing URLs follow `https://trk.send.everlane.com/l/01M6EJDDEXCNNSADC6B9E9GP6A_{0..9,13,22}`. They cover the logo (`_0`), hero image (`_1`), the "Shop Now" CTAs (`_2`, `_4`, `_6`), "Shop The Gift Guide" (`_7`), "Shop Women"/"Shop Men" (`_8`, `_9`), "Sign Up for Texts" (`_13`) and **Unsubscribe** (`_22`).
- **Severity is unconfirmed.** Every link on a single host failing identically points to either a real DNS problem or probe-side resolution. A real outage would mean no link in the email works, including unsubscribe. Re-probe from a second resolver (for example `dig trk.send.everlane.com` and `curl -I`) before treating this as a sender defect.
- **Redirect destinations are not verified.** Every link is wrapped, so the final landing URLs are not visible in the source or QA data.
- 11 of 23 or so links (`_0` through `_22`) were not probed, mostly footer and social links. Their health is unknown.

## 3. Rendering & Accessibility
- **Empty `<title>`.** The source has `<title> </title>`. This is minor, but it matters for web-view and clipping contexts.
- **Missing alt text on the tracking pixel.** The QA flag points to `https://trk.send.everlane.com/o/01M6EJDDEXCNNSADC6B9E9GP6A`, which is the open-tracking beacon (`/o/` path). This is low severity. `alt=""` is the correct value for a decorative pixel, so confirm it is empty rather than absent.
- **Non-descriptive link text.** There are three identical "Shop Now" links (`_2`, `_4`, `_6`) pointing to different destinations. Screen-reader users get no context from the link text alone.
- **Redundant alt prefixes.** Alt text begins with "Image |" and "Icon |" (for example `Image | Better Gifts For Him`, `Icon | Sign Up for Texts`), so screen readers announce "Image" twice.
- **Possible small mobile heading.** The `h4` rule drops to `font-size: 10px` at `max-width: 480px`. This is only a problem if `h4` is used for readable copy, which the truncated source doesn't show.
- No other rendering defects are confirmed. The MSO conditionals, `viewport` meta and `max-width:100%` image rules look standard. The source is truncated, so the body markup could not be audited.

## 4. Personalization & Merge Tokens
No issues found. No unrendered tokens (`{{ }}`, `*|…|*`, `%%…%%`) appear in the visible source or the QA data. The truncated body leaves this only partly verified.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **Unsubscribe link:** a body link exists (`…_22`, text "Unsubscribe"). It currently fails to resolve in the probe (see §2).
- **`List-Unsubscribe` and `List-Unsubscribe-Post` (RFC 8058) not found.** The QA tool itself says the AgentMail relay may strip them. This is **not confirmed as a sender defect**. Check the raw message headers from a direct inbox, since Gmail and Yahoo bulk-sender rules require one-click unsubscribe.
- **`Authentication-Results` missing.** SPF, DKIM and DMARC status is unknown, and this is also attributed to the relay. Verify with a direct seed test.
- **Physical postal address:** not visible in the truncated source, so it can't be confirmed.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
Not assessable. Every link is wrapped by `trk.send.everlane.com`, and the probe never resolved a redirect. UTM parameters and landing-page alignment for the "Better Gifts For Him" and "Shop The Gift Guide" CTAs can't be confirmed.

## 7. Recommendations
1. **Re-run the link probe** from a different network or resolver, and manually resolve `trk.send.everlane.com`. If it fails everywhere, this is a critical issue because every link, including unsubscribe, is dead. If it resolves, discount the 17% pass rate as a probe artifact.
2. **Capture raw headers** (`List-Unsubscribe`, `List-Unsubscribe-Post`, `Authentication-Results`) from a direct seed inbox. Don't rely on the AgentMail relay for these checks.
3. **Follow redirects** on the wrapped links to record final URLs and UTM parameters, and check the unsubscribe flow.
4. **Make link text unique**, for example "Shop Best-Sellers" instead of three "Shop Now" links, and remove the "Image |" and "Icon |" alt prefixes.
5. **Set `alt=""`** on the `/o/` tracking pixel and add a non-empty `<title>`.
6. **Confirm the physical address** in the footer and review the full, untruncated HTML for merge tokens and the mobile `h4` size.
