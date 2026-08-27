---
slug: 2026-08-27-lock-in-for-the-long-haul
type: email
date: 2026-08-27
persona: walker
score: "3/10"
sender: HOKA®
subject: Lock in for the long haul
tags: [email, score-3, sender/hoka]
---
# Lock in for the long haul
**Score:** 3/10 · **Type:** Email audit · **2026-08-27**
## Executive summary

- Twelfth one of these, and it's the same story: marathoners, carbon racing shoes, "You + 26.2" — none of it's for me. I'm not chasing a PR, I'm chasing a shoe that doesn't hurt after the grocery store and back. Cielo X1 3.0, Rocket X 3, arm sleeves and a hydration belt — that's a whole different customer than a 62-year-old comfort walker.
- The photography's sharp, I'll give them that, but it's all twentysomethings sprinting through city streets at night. Nothing here says cushioned, nothing says arch support, nothing says "walk all day without your feet screaming." I'm closing this one same as the last eleven.
- Not clicking, not forwarding. Marking it read and moving on.

## What's working

- Clean, uncluttered layout — easy enough to scroll on my phone without squinting.
- "Shop Now" and "Shop Apparel" buttons are big and easy to tap.
- At least the Road Running Guide at the bottom nods at fit/ride preferences, even if it's aimed at racers not walkers.

## What's weak

- Every single product is a racing shoe or racing kit — nothing casual, nothing cushioned, nothing for a guy who just wants comfort.
- Models are all young, lean marathon runners — doesn't look like anybody in my demographic.
- No price, no percent off, no sale — just full-price gear pitched at serious racers.
- Same well I've seen tapped eleven times now — HOKA still hasn't sent me a single email about their walking or lifestyle line.

## Recommendations

- 1. Segment me out of the racing-kit sends entirely — send me the Bondi or the walking/recovery shoes instead, since that's clearly not what this list is buying.
- 2. Lead with a comfort/support benefit up top instead of "You + 26.2" — that headline means nothing to me.
- 3. Show an actual offer — a price or a discount — since right now there's zero reason to click.
- 4. Feature a model or lifestyle shot that isn't a nighttime marathon pack.
- **Subject Alt A:** `All-day comfort, not just race day`
- **Subject Alt B:** `The HOKA shoe built for walking, not racing`
- **Preheader Alt A:** `Cushioned support for however far your day takes you`
- **Preheader Alt B:** `No marathon required — just real comfort`

## Full review
## 1. Overview

Twelfth one of these, and it's the same story: marathoners, carbon racing shoes, "You + 26.2" — none of it's for me. I'm not chasing a PR, I'm chasing a shoe that doesn't hurt after the grocery store and back. Cielo X1 3.0, Rocket X 3, arm sleeves and a hydration belt — that's a whole different customer than a 62-year-old comfort walker.

The photography's sharp, I'll give them that, but it's all twentysomethings sprinting through city streets at night. Nothing here says cushioned, nothing says arch support, nothing says "walk all day without your feet screaming." I'm closing this one same as the last eleven.

Not clicking, not forwarding. Marking it read and moving on.

## 2. What worked
- Clean, uncluttered layout — easy enough to scroll on my phone without squinting.
- "Shop Now" and "Shop Apparel" buttons are big and easy to tap.
- At least the Road Running Guide at the bottom nods at fit/ride preferences, even if it's aimed at racers not walkers.

## 3. What didn't
- Every single product is a racing shoe or racing kit — nothing casual, nothing cushioned, nothing for a guy who just wants comfort.
- Models are all young, lean marathon runners — doesn't look like anybody in my demographic.
- No price, no percent off, no sale — just full-price gear pitched at serious racers.
- Same well I've seen tapped eleven times now — HOKA still hasn't sent me a single email about their walking or lifestyle line.

## 4. What I'd change
1. Segment me out of the racing-kit sends entirely — send me the Bondi or the walking/recovery shoes instead, since that's clearly not what this list is buying.
2. Lead with a comfort/support benefit up top instead of "You + 26.2" — that headline means nothing to me.
3. Show an actual offer — a price or a discount — since right now there's zero reason to click.
4. Feature a model or lifestyle shot that isn't a nighttime marathon pack.
   - **Subject Alt A:** `All-day comfort, not just race day`
   - **Subject Alt B:** `The HOKA shoe built for walking, not racing`
   - **Preheader Alt A:** `Cushioned support for however far your day takes you`
   - **Preheader Alt B:** `No marathon required — just real comfort`

## 5. Business Impact Score (1-10)
**3/10**
- Sender is a brand you recognize / are subscribed to
- Primary CTA is unambiguous (clear button copy + visible button)
- Visual hierarchy is clear — the eye lands on the offer/hero first
- No render bugs (no overlapping text, broken images, lorem-ipsum, layout breakage)

## 6. Open Likelihood (persona-grounded)
- **Score:** `3/10`
- **Signals counted:** Sender display name is recognizable; Subject is under ~50 chars; No spam signals.
- **Rationale:** "Lock in for the long haul" is vague and reads like marathon-training talk, not my category at all — nothing about the sender or subject pulls me in.

## 7. Click-Through Likelihood (persona-grounded)
- **Score:** `2/10`
- **Signals counted:** Hero offer is visible without scrolling on mobile; Brand voice is consistent and trusted.
- **Rationale:** Every product shown is racing gear, not a single comfort/casual option, so there's nothing here I'd tap through for.

## 8. Subject
- **Subject:** `Lock in for the long haul`
- **Length:** 26
- **Scores (1-10):** Clarity 3, Curiosity 4, Personalization 1, Urgency 2, Specificity 2

## 9. Preview
- **Preview:** `(none / leaking junk)`
- **Length:** 0
- **Scores (1-10):** Complements subject 1, Specificity 1, Clarity 1, Inbox-fit 1

---

## Technical Audit

1. Technical Summary
The email has one broken redirect link (CDN return-start URL) and, more critically, a broken unsubscribe redirect, alongside a missing plain-text MIME part and widespread missing alt text.

2. Link & Tracking Issues
- **Broken tracked link (403):** The "hoka.com/en/us/return-start/" CTA redirects through Cordial's tracking domain (`e.emails.hoka.com/c2/...`) and returns HTTP 403. Decoded `jwtP` payload target: `https://www.hoka.com/en/us/return-start/?utm_source=US_Broadcast&utm_medium=email&utm_campaign=H_US_BR_20260827_MarathonPack_Launch_A180Day_720RacePurchasers_365RoadPurchasers_0310MarathonOpeners&hmail=...&cordial_id=69e560485cc95da09e001cd9`.
- Tracking wrapper structure (Cordial `/c2/{listId}:{hash}:ot:{orgId}:{n}/{linkId}`) is consistent across links, using JWT-encoded (`jwtH`/`jwtP`/`jwtS`) redirect payloads — no malformed token structure observed.
- QA probing scope: 12 material links probed, 12 skipped by design (footer/utility/social deprioritized); this is expected behavior, not a gap.

3. Rendering & Accessibility
- 10 images missing `alt` attributes, including all 8 primary content images (`US_20260827_MarathonPack_a.jpg` through `h.jpg`), the footer logo (`LogoFooterPrimary.png`), and 2 tracking pixels. Screen readers will announce these as unlabeled or fall back to filename/URL text.
- Responsive CSS shows broken/empty declarations that will fail silently on mobile: `.nav_padding {padding-top:px !important;padding-bottom:px !important;}` and `.nav_border {border-top:px solid ;}` — missing numeric values make these rules invalid CSS (no unit/value before `px`/`solid`), so they'll be dropped by parsers rather than applied.

4. Personalization & Merge Tokens
No merge tokens or dynamic personalization syntax (e.g. `{{...}}`, `%%...%%`) observed in the visible source; `hmail` (hashed email) is present only as a tracking parameter, not a rendered personalization token. No issues found.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **Unsubscribe link is broken (403):** the tracked unsubscribe redirect fails, decoding to target `https://options.hoka.com/unsubscribe?cid=69e560485cc95da09e001cd9&utm_source=US_Broadcast&utm_medium=email&utm_campaign=...&hmail=...&cordial_id=...`. A non-functional unsubscribe link is a CAN-SPAM compliance risk (15 U.S.C. §7704 requires a working opt-out mechanism) — this needs escalation, not just a UX note.
- **Missing plain-text MIME part:** QA reports plain-text fallback is 0 chars. This affects deliverability/spam scoring (many filters penalize HTML-only multipart messages) and is a CAN-SPAM/accessibility best-practice gap, not a hard violation by itself.
- Sender domain (`emails.hoka.com`) and tracking domain (`e.emails.hoka.com`) are consistent with a dedicated ESP subdomain (Cordial); no header data (SPF/DKIM/DMARC) was included in the provided source to verify authentication.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- UTM parameters are consistently applied across the decoded link: `utm_source=US_Broadcast`, `utm_medium=email`, `utm_campaign=H_US_BR_20260827_MarathonPack_Launch_A180Day_720RacePurchasers_365RoadPurchasers_0310MarathonOpeners`.
- Cannot verify landing page (`/en/us/return-start/`) content alignment since the link itself is broken (403) — continuity is unverifiable until the redirect/target is fixed.

7. Recommendations
1. Fix the 403 on the Cordial tracking redirect for the return-start CTA and the unsubscribe link — verify target URLs (`www.hoka.com/en/us/return-start/`, `options.hoka.com/unsubscribe`) are live and that the ESP's link-wrapping/JWT signing config isn't misconfigured for this send.
2. Restore the plain-text MIME alternative (currently 0 chars).
3. Add descriptive `alt` text to all 8 content images and the footer logo; tracking pixels can use `alt=""`.
4. Fix the malformed CSS declarations (`padding-top:px`, `border-top:px solid`) in the `@media (max-width:480px)` block — supply actual pixel/border values or remove the dead rules.
## Recent history

- [[2026-08-19-the-new-caf-slipper-is-here]] — 5/10 (2026-08-19)
- [[2026-08-19-intro-to-style-sneaker-trends]] — 4/10 (2026-08-19)
- [[2026-08-19-did-you-forget-something]] — 5/10 (2026-08-19)

