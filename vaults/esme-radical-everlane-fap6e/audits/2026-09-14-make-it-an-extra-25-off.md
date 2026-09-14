---
slug: 2026-09-14-make-it-an-extra-25-off
type: email
date: 2026-09-14
persona: esme-radical-everlane-fap6e
score: "5/10"
sender: Everlane
subject: Make It an Extra 25% Off
tags: [email, score-5, sender/everlane]
---
# Make It an Extra 25% Off
**Score:** 5/10 · **Type:** Email audit · **2026-09-14**
## Executive summary

- This is the third near-identical "extra 25% off sale styles" plain-text-styled blast from Everlane in as many days, and it repeats the exact same broken-personalization bug seen in the 2026-09-12 "About That Extra 25%..." send: "Hi There, ," with an empty first-name token and a stray comma, sitting right at the top of the email where every recipient sees it. There's no product imagery, no hero shot, just underlined text links and a generic nav footer — this reads more like an internal test send than a finished campaign.
- The offer itself (extra 25% off already-discounted sale styles, up to 70% off, with a real deadline of 09/14/2026 11:59 PM PST) is genuinely decent and time-bound, but the execution completely undersells it. Given this is functionally the same email as two prior sends this week with a still-unfixed personalization bug, this is a clear miss — ship the fix before this template goes out a fourth time.

## What's working

- The offer stack is legible: extra 25% + up to 70% off + a real VIP code (EXTRA25), all in the first two sentences.
- A hard deadline is stated in the footer fine print (09/14/2026 11:59 PM PST), giving genuine urgency.
- Clean, uncluttered layout with no overlapping elements or broken images.
- Category links (sweaters, outerwear) give a way into the sale beyond the code itself.

## What's weak

- Broken personalization token: "Hi There, ," — visible empty first-name field with a dangling comma, identical to the bug flagged in the 2026-09-12 send two days ago and still not fixed.
- No product photography or hero image at all — this is a wall of text dressed as an email, which undersells a 70%-off offer.
- No single clear CTA button — "extra 25%," "already up to 70% off," "sweaters," "outerwear," and "more" are all underlined text links competing for the click.
- This is essentially a repeat of "About That Extra 25% Off…" (2026-09-12, 4.00/10) with no new creative — same offer, same structure, same bug, just two days later.
- "Only for special customers" personalization claim rings hollow next to a visibly broken name field.

## Recommendations

- 1. Fix the personalization fallback immediately — QA every send for empty-token rendering before it goes out; this same bug has now shipped twice.
- 2. Add a hero product image or three-item grid above the copy so there's something to look at besides text links.
- 3. Convert the offer into one bold, high-contrast CTA button ("Shop Sale with Code EXTRA25") instead of five competing underlined links.
- 4. Space out cadence — this is the third "extra 25%" variant this week; either escalate the offer or skip a cycle to avoid list fatigue.
- **Subject Alt A:** `Your VIP Code: Extra 25% Off Sale, Ends Tonight`
- **Subject Alt B:** `Sale + Extra 25% = Up to 70% Off Fall Styles`
- **Preheader Alt A:** `Sweaters, outerwear & more — code expires 11:59PM PST`
- **Preheader Alt B:** `Your extra 25% off sale styles ends tonight`

## Full review
## 1. Overview

This is the third near-identical "extra 25% off sale styles" plain-text-styled blast from Everlane in as many days, and it repeats the exact same broken-personalization bug seen in the 2026-09-12 "About That Extra 25%..." send: "Hi There, ," with an empty first-name token and a stray comma, sitting right at the top of the email where every recipient sees it. There's no product imagery, no hero shot, just underlined text links and a generic nav footer — this reads more like an internal test send than a finished campaign.

The offer itself (extra 25% off already-discounted sale styles, up to 70% off, with a real deadline of 09/14/2026 11:59 PM PST) is genuinely decent and time-bound, but the execution completely undersells it. Given this is functionally the same email as two prior sends this week with a still-unfixed personalization bug, this is a clear miss — ship the fix before this template goes out a fourth time.

## 2. What worked

- The offer stack is legible: extra 25% + up to 70% off + a real VIP code (EXTRA25), all in the first two sentences.
- A hard deadline is stated in the footer fine print (09/14/2026 11:59 PM PST), giving genuine urgency.
- Clean, uncluttered layout with no overlapping elements or broken images.
- Category links (sweaters, outerwear) give a way into the sale beyond the code itself.

## 3. What didn't

- Broken personalization token: "Hi There, ," — visible empty first-name field with a dangling comma, identical to the bug flagged in the 2026-09-12 send two days ago and still not fixed.
- No product photography or hero image at all — this is a wall of text dressed as an email, which undersells a 70%-off offer.
- No single clear CTA button — "extra 25%," "already up to 70% off," "sweaters," "outerwear," and "more" are all underlined text links competing for the click.
- This is essentially a repeat of "About That Extra 25% Off…" (2026-09-12, 4.00/10) with no new creative — same offer, same structure, same bug, just two days later.
- "Only for special customers" personalization claim rings hollow next to a visibly broken name field.

## 4. What I'd change

1. Fix the personalization fallback immediately — QA every send for empty-token rendering before it goes out; this same bug has now shipped twice.
2. Add a hero product image or three-item grid above the copy so there's something to look at besides text links.
3. Convert the offer into one bold, high-contrast CTA button ("Shop Sale with Code EXTRA25") instead of five competing underlined links.
4. Space out cadence — this is the third "extra 25%" variant this week; either escalate the offer or skip a cycle to avoid list fatigue.
   - **Subject Alt A:** `Your VIP Code: Extra 25% Off Sale, Ends Tonight`
   - **Subject Alt B:** `Sale + Extra 25% = Up to 70% Off Fall Styles`
   - **Preheader Alt A:** `Sweaters, outerwear & more — code expires 11:59PM PST`
   - **Preheader Alt B:** `Your extra 25% off sale styles ends tonight`

## 5. Business Impact Score (1-10)

**5/10**
- One concrete offer is visible (specific %/$ off, free-shipping, BOGO)
- No render bugs (no overlapping text, broken images, lorem-ipsum, layout breakage) — layout itself is intact even though personalization is broken
- Email reflects current campaign / season (fall wardrobe framing)
- Sender is a brand you recognize / are subscribed to

## 6. Open Likelihood (persona-grounded)

- **Score:** `4/10`
- **Signals counted:** Sender display name is recognizable; Subject is concrete (specific offer); Subject is under ~50 chars; No spam signals (ALL CAPS, !!!)
- **Rationale:** The sender and offer are clear enough to register at a glance, but this is the third nearly identical "extra 25%" subject line from Everlane in a matter of days, which flattens any urgency or curiosity on open.

## 7. Click-Through Likelihood (persona-grounded)

- **Score:** `4/10`
- **Signals counted:** Hero offer is visible without scrolling on mobile; Offer reduces price OR has loyalty member pricing; Offer is time-bounded with credible deadline; Brand voice is consistent and trusted
- **Rationale:** The offer is visible and time-bound, but there's no single specific product to click into and no imagery to pull the eye toward any one CTA — plus the visible personalization bug undercuts trust right at the top.

## 8. Subject

- **Subject:** `Make It an Extra 25% Off`
- **Length:** 25
- **Scores (1-10):** Clarity `6`, Curiosity `3`, Personalization `2`, Urgency `4`, Specificity `5`

## 9. Preview

- **Preview:** `(none / leaking junk)`
- **Length:** 0
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`

---

## Technical Audit

Technical Email Audit — Everlane "Make It an Extra 25% Off"

**1. Technical Summary**
This is a Klaviyo-generated MJML/HTML email with two broken CTA links, missing compliance headers, and one accessibility gap; overall automated QA pass rate is 38%.

**2. Link & Tracking Issues**
- Logo link fails resolution: `https://trk.send.everlane.com/l/01M2EP649ME677QPZY40SR6CH8_0` → resolves to `/pages/womens?_kx=...` and errors with "unknown url type." Link text: "Everlane Logo."
- "Shop Men" CTA fails resolution: `https://trk.send.everlane.com/l/01M2EP649ME677QPZY40SR6CH8_8` → resolves to `/collections/shop-all-mens-clothing?_kx=...` and errors with "unknown url type."
- Both failing links carry Klaviyo `_kx` exchange tokens and Braze `bxid`/`cm_flow` parameters together — mixed ESP tracking params on the same URL is unusual and may indicate a redirect-chain misconfiguration between Klaviyo click-tracking and a Braze-fed destination.
- 12 material links were identified; only 2 were probed and failed, 10 were deprioritized (footer/utility/social) and not tested — actual link health across the full email is unconfirmed.

**3. Rendering & Accessibility**
- Tracking pixel missing alt text: `<img src="https://trk.send.everlane.com/o/01M2EP649ME677QPZY40SR6CH8">` (open-tracking beacon) — low impact since it's a 1x1 pixel, but flagged by automated a11y check.
- Extensive MSO/Outlook conditional comments and mobile media queries are present and well-formed (`@media max-width:480px` blocks, `mso-table-lspace/rspace` resets) — no structural rendering issues detected in the provided source.

**4. Personalization & Merge Tokens**
- No unresolved merge tags (e.g. `{{ }}`, `*|...|*`) visible in the truncated source.
- No issues found in the visible HTML for personalization tokens; note the source was truncated so hidden preview text and body copy beyond the head block weren't inspected.

**5. Compliance (CAN-SPAM, unsubscribe, authentication headers)**
- `List-Unsubscribe` header not detected — either absent from the send or not captured by the AgentMail relay; cannot confirm CAN-SPAM one-click compliance from headers alone.
- `List-Unsubscribe-Post` (RFC 8058) not detected — one-click unsubscribe support unconfirmed.
- `Authentication-Results` header not detected — SPF/DKIM/DMARC pass/fail status unknown via this relay.
- QA notes an unsubscribe link is always included in the footer (not probed in this pass), so a functional unsubscribe link's presence in-body is unconfirmed but stated as standard for this template.

**6. Email-to-Site Continuity (UTM params, landing page alignment)**
- Destination paths appear to route to genuine site collections (`/pages/womens`, `/collections/shop-all-mens-clothing`), consistent with the email's stated CTAs — no mismatch between link intent and landing page path.
- No standard UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`) are visible in the decoded destination URLs; tracking relies solely on Klaviyo `_kx` and Braze `bxid`/`cm_flow_id` params. If cross-platform (e.g. GA4) attribution is expected on-site, this is a gap.
- Cannot verify final landing page rendering/alignment since both probed links failed resolution before reaching the destination.

**7. Recommendations**
- Fix the two failing tracked links (`_0` logo, `_8` Shop Men) — investigate the redirect chain between `trk.send.everlane.com` and the destination; the mixed Klaviyo/Braze parameters suggest a misconfigured ESP handoff.
- Add descriptive (or empty `alt=""`) attribute to the tracking pixel to satisfy accessibility linting, even though it's non-visual.
- Confirm `List-Unsubscribe` and `List-Unsubscribe-Post` headers are actually being sent by the ESP; if present but stripped, this is a relay/monitoring gap, not a sender defect — verify against raw SMTP headers outside AgentMail.
- Confirm SPF/DKIM/DMARC status via a direct header capture, since `Authentication-Results` wasn't available through this relay.
- Consider adding standard UTM parameters alongside existing Klaviyo/Braze tracking if cross-platform analytics attribution is required.
- Expand probing coverage to the remaining 10 deprioritized links to rule out additional broken destinations.
## Recent history

- [[2026-08-19-don-t-miss-your-exclusive-access]] — 5/10 (2026-08-19)
- [[2026-08-18-way-high-denim-now-way-lower-price]] — 5/10 (2026-08-18)
- [[2026-08-17-forget-sale-try-better-prices]] — 5/10 (2026-08-17)

