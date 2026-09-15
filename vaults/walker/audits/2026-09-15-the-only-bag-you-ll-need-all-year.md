---
slug: 2026-09-15-the-only-bag-you-ll-need-all-year
type: email
date: 2026-09-15
persona: walker
score: "3/10"
sender: adidas
subject: "The only bag you'll need all year"
tags: [email, score-3, sender/adidas]
---
# The only bag you'll need all year
**Score:** 3/10 · **Type:** Email audit · **2026-09-15**
## Executive summary

- Backpacks. I don't have kids in school and my grandkids' parents buy their own gear — so right off the bat this one's not for me. It's at least a normal, real product photo this time, not soccer cleats or a K-pop star, so credit where it's due for that. But "Back to School Backpacks" with no price anywhere in sight, no mention of shoes, comfort, or anything I'd actually shop for, means I'm scrolling past this one in about two seconds.
- No CTA is going to catch me here — there's nothing to connect to. I'm not clicking, not forwarding it to anybody, and it's getting marked read and forgotten just like the Man U jacket and the soccer cleats did.

## What's working

- The hero photo is clean and real — three backpacks on school chairs against a brick wall, no weird graphics or mascots this time.
- Layout is simple and readable, big black "SHOP NOW" button stands out fine on my phone screen.
- No render bugs — everything loaded, nothing overlapping.

## What's weak

- Backpacks have nothing to do with me — no shoes, no comfort, no arch support, nothing in my category at all.
- No price shown anywhere, so even if I cared about backpacks I couldn't tell if it's a deal.
- No offer or discount visible — just "shop our selection," which isn't a reason to click.
- Nothing about this suggests adidas knows I'm a 62-year-old guy who buys walking shoes, not backpacks for kids.

## Recommendations

- 1. Segment this out of my inbox entirely — send backpack/back-to-school content to parents, not to me. That's the single biggest lift.
- 2. If adidas wants my click, put a shoe in the hero image with an actual percentage off.
- 3. Add a real price or discount somewhere in the body — "there's still time to shop" isn't an offer.
- 4. Cut the whitespace-heavy layout; this email is mostly empty space below the copy block.
- **Subject Alt A:** `Men's walking shoes, back in stock`
- **Subject Alt B:** `Comfort shoes for your daily walk — 30% off`
- **Preheader Alt A:** `Cushioned, slip-on styles built for all-day wear.`
- **Preheader Alt B:** `Your size, your comfort — new arrivals just dropped.`

## Full review
## 1. Overview

Backpacks. I don't have kids in school and my grandkids' parents buy their own gear — so right off the bat this one's not for me. It's at least a normal, real product photo this time, not soccer cleats or a K-pop star, so credit where it's due for that. But "Back to School Backpacks" with no price anywhere in sight, no mention of shoes, comfort, or anything I'd actually shop for, means I'm scrolling past this one in about two seconds.

No CTA is going to catch me here — there's nothing to connect to. I'm not clicking, not forwarding it to anybody, and it's getting marked read and forgotten just like the Man U jacket and the soccer cleats did.

## 2. What worked

- The hero photo is clean and real — three backpacks on school chairs against a brick wall, no weird graphics or mascots this time.
- Layout is simple and readable, big black "SHOP NOW" button stands out fine on my phone screen.
- No render bugs — everything loaded, nothing overlapping.

## 3. What didn't

- Backpacks have nothing to do with me — no shoes, no comfort, no arch support, nothing in my category at all.
- No price shown anywhere, so even if I cared about backpacks I couldn't tell if it's a deal.
- No offer or discount visible — just "shop our selection," which isn't a reason to click.
- Nothing about this suggests adidas knows I'm a 62-year-old guy who buys walking shoes, not backpacks for kids.

## 4. What I'd change

1. Segment this out of my inbox entirely — send backpack/back-to-school content to parents, not to me. That's the single biggest lift.
2. If adidas wants my click, put a shoe in the hero image with an actual percentage off.
3. Add a real price or discount somewhere in the body — "there's still time to shop" isn't an offer.
4. Cut the whitespace-heavy layout; this email is mostly empty space below the copy block.
   - **Subject Alt A:** `Men's walking shoes, back in stock`
   - **Subject Alt B:** `Comfort shoes for your daily walk — 30% off`
   - **Preheader Alt A:** `Cushioned, slip-on styles built for all-day wear.`
   - **Preheader Alt B:** `Your size, your comfort — new arrivals just dropped.`

## 5. Business Impact Score (1-10)
**3/10**
- Sender is a brand you recognize / are subscribed to
- Visual hierarchy is clear — the eye lands on the offer/hero first
- No render bugs (no overlapping text, broken images, lorem-ipsum, layout breakage)

## 6. Open Likelihood (persona-grounded)
- **Score:** `3/10`
- **Signals counted:** Sender display name is recognizable; Subject is concrete (specific product); Subject is under ~50 chars.
- **Rationale:** I'd recognize the sender, but "the only bag you'll need all year" doesn't tell me anything about shoes, so it's not pulling me in.

## 7. Click-Through Likelihood (persona-grounded)
- **Score:** `2/10`
- **Signals counted:** Hero offer is visible without scrolling on mobile; No friction — no "view in browser" first, no broken-image gaps.
- **Rationale:** The button's easy to find, but there's nothing in my category and no price to react to, so there's no reason for me to tap it.

## 8. Subject
- **Subject:** `The only bag you'll need all year`
- **Length:** 35
- **Scores (1-10):** Clarity `5`, Curiosity `4`, Personalization `1`, Urgency `1`, Specificity `4`

## 9. Preview
- **Preview:** `(none / leaking junk)`
- **Length:** 0
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`

---

## Technical Audit

1. Technical Summary
Standard adidas ExactTarget/SFMC-generated marketing email; HTML renders with expected responsive scaffolding, but has broken plain-text fallback and several non-HTTPS asset/tracking sources.

2. Link & Tracking Issues
- 13 tracking/click-redirect links (`click.comms.adidas.com`, `CI0/...` format) were skipped from HTTP probing per QA policy — no destination validation available for these.
- One click-tracking redirect is served over plain HTTP: `http://click.comms.adidas.com/CI0/010201a0a30aa5c1-d4e7f8a4-3891-4361-b167-90ac17037422-000000/0Wne7Z592-aceb6MQMmSkFPvb...` — mixed-content risk in clients that flag HTTP resources.

3. Rendering & Accessibility
- Non-HTTPS image source: `http://image.link.adidas.com/lib/fe6515707c62007e7715/m/3/b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg` ("arrow" asset, referenced twice) — may be blocked or show as broken in clients that strip HTTP resources.
- Missing `alt` text on two images: `ae378444-2dec-4ad1-a6ff-1df4bb7d6ff2` (dv.adidas.com CDN image) and `0Wne7Z592-aceb6MQMmSkFPvb4qJt9EEYB3mBfIWfkE=452` (the same HTTP tracking-pixel-style image flagged above) — screen readers and image-blocked clients get no fallback text.
- Extensive `@media` breakpoints (768px/640px/480px/414px/320px) and MSO/Outlook conditional handling present — no structural rendering errors observed in the truncated source.

4. Personalization & Merge Tokens
No issues found — no merge tokens or personalization placeholders visible in the truncated HTML source provided.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- Unsubscribe link/footer and authentication headers (SPF/DKIM/DMARC) are not present in the truncated HTML/data provided — cannot confirm compliance either way from available evidence. Flagging as unverified rather than fabricating a pass/fail.
- Sending domain `us-news.comms.adidas.com` is a dedicated subdomain, consistent with typical ESP authentication setups, but no header data was supplied to confirm SPF/DKIM/DMARC alignment.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- Cannot assess — no destination/landing-page URLs or UTM parameters were included in the truncated HTML or QA data provided.

7. Recommendations
- Serve the "arrow" image and the `0Wne7Z592...` tracking image over HTTPS to prevent blocking/mixed-content warnings.
- Add descriptive (or explicitly empty `alt=""` for decorative) alt attributes to `ae378444-2dec-4ad1-a6ff-1df4bb7d6ff2` and `0Wne7Z592-aceb6MQMmSkFPvb4qJt9EEYB3mBfIWfkE=452`.
- Fix plain-text MIME part generation — current text version is 0 characters, which hurts deliverability/spam scoring and breaks accessibility for text-only clients.
- Migrate the HTTP click-redirect link to HTTPS to match the rest of the tracking domain's TLS posture.
## Recent history

- [[2026-08-19-the-new-caf-slipper-is-here]] — 5/10 (2026-08-19)
- [[2026-08-19-intro-to-style-sneaker-trends]] — 4/10 (2026-08-19)
- [[2026-08-19-did-you-forget-something]] — 5/10 (2026-08-19)

