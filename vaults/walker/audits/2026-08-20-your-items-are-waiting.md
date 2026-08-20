---
slug: 2026-08-20-your-items-are-waiting
type: email
date: 2026-08-20
persona: walker
score: "3/10"
sender: SKECHERS
subject: Your Items Are Waiting!
tags: [email, score-3, sender/skechers]
---
# Your Items Are Waiting!
**Score:** 3/10 · **Type:** Email audit · **2026-08-20**
## Executive summary

- Well, there it is again. Same pink floral D'Lites - Spring Bloom sneaker, same "we noticed you noticing us" line, same "cart is still waiting" fiction — this is the identical email I got yesterday just with a different subject slapped on it ("Your Items Are Waiting!" instead of "Did you forget something?"). I never touched that shoe, I never had a cart, and I'm a 62-year-old guy — a floral embroidered women's sneaker isn't a mistake I'd make twice, let alone the six or seven times Skechers has shown it to me this week.
- The "more great options" grid underneath at least has some men's stuff in it — a couple of slip-ins, a relaxed-fit walking shoe — but it's buried below a fake cart pitch I'm never going to click. Nothing here reads current or seasonal, nothing acknowledges I'm the guy who wants cushioning and slip-on comfort, and nothing beats yesterday's actual good email with the real 40%-off deadline.
- Not clicking, not forwarding. This one gets archived same as the last five.

## What's working

- The men's slip-in and relaxed-fit options in the "more great options" row are at least in my category, if I ever got that far.
- Clean layout, no rendering bugs — text is legible, buttons are big enough to tap.
- "Shop Now, Pay Later" and "Find a Store" footer options are useful if I were actually shopping.

## What's weak

- Same fake abandoned-cart shoe as five previous sends this week — I never clicked it, never sized it, never had a cart.
- Hero product is a pink floral women's sneaker — zero relevance to a 62-year-old man's closet.
- No offer, no percentage off, no deadline — just a "complete your order" button for an order that doesn't exist.
- Feels like a bot cycling through the same template with a new subject line, not a real merchandiser looking at who I am.

## Recommendations

- 1. Kill the fake-cart gimmick entirely for men on this list — if there's no real cart, don't manufacture one.
- 2. Lead with an actual deal like yesterday's 40%-off summer send — that one worked, this one doesn't.
- 3. Put a men's comfort shoe in the hero slot, not buried in a six-pack below the fold.
- 4. Stop reusing the identical creative under a new subject — I can tell it's the same email.
- **Subject Alt A:** `Men's slip-ins, 40% off through Sunday`
- **Subject Alt B:** `New arrivals in men's comfort — Arch Fit, Slip-ins`
- **Preheader Alt A:** `No laces, no fuss — cushioned comfort built for daily wear.`
- **Preheader Alt B:** `Arch support that actually holds up on your feet all day.`

## Full review
## 1. Overview

Well, there it is again. Same pink floral D'Lites - Spring Bloom sneaker, same "we noticed you noticing us" line, same "cart is still waiting" fiction — this is the identical email I got yesterday just with a different subject slapped on it ("Your Items Are Waiting!" instead of "Did you forget something?"). I never touched that shoe, I never had a cart, and I'm a 62-year-old guy — a floral embroidered women's sneaker isn't a mistake I'd make twice, let alone the six or seven times Skechers has shown it to me this week.

The "more great options" grid underneath at least has some men's stuff in it — a couple of slip-ins, a relaxed-fit walking shoe — but it's buried below a fake cart pitch I'm never going to click. Nothing here reads current or seasonal, nothing acknowledges I'm the guy who wants cushioning and slip-on comfort, and nothing beats yesterday's actual good email with the real 40%-off deadline.

Not clicking, not forwarding. This one gets archived same as the last five.

## 2. What worked

- The men's slip-in and relaxed-fit options in the "more great options" row are at least in my category, if I ever got that far.
- Clean layout, no rendering bugs — text is legible, buttons are big enough to tap.
- "Shop Now, Pay Later" and "Find a Store" footer options are useful if I were actually shopping.

## 3. What didn't

- Same fake abandoned-cart shoe as five previous sends this week — I never clicked it, never sized it, never had a cart.
- Hero product is a pink floral women's sneaker — zero relevance to a 62-year-old man's closet.
- No offer, no percentage off, no deadline — just a "complete your order" button for an order that doesn't exist.
- Feels like a bot cycling through the same template with a new subject line, not a real merchandiser looking at who I am.

## 4. What I'd change

1. Kill the fake-cart gimmick entirely for men on this list — if there's no real cart, don't manufacture one.
2. Lead with an actual deal like yesterday's 40%-off summer send — that one worked, this one doesn't.
3. Put a men's comfort shoe in the hero slot, not buried in a six-pack below the fold.
4. Stop reusing the identical creative under a new subject — I can tell it's the same email.
   - **Subject Alt A:** `Men's slip-ins, 40% off through Sunday`
   - **Subject Alt B:** `New arrivals in men's comfort — Arch Fit, Slip-ins`
   - **Preheader Alt A:** `No laces, no fuss — cushioned comfort built for daily wear.`
   - **Preheader Alt B:** `Arch support that actually holds up on your feet all day.`

## 5. Business Impact Score (1-10)
**3/10**
- Sender is a brand you recognize / are subscribed to
- Primary CTA is unambiguous (clear button copy + visible button)
- No render bugs (no overlapping text, broken images, lorem-ipsum, layout breakage)

## 6. Open Likelihood (persona-grounded)
- **Score:** `3/10`
- **Signals counted:** Sender display name is recognizable; No spam signals (ALL CAPS, !!!, etc.)
- **Rationale:** Subject is generic filler I've already seen twice this week, and the cadence of near-identical "your cart" sends is wearing thin.

## 7. Click-Through Likelihood (persona-grounded)
- **Score:** `2/10`
- **Signals counted:** Hero offer is visible without scrolling on mobile (though it's not an offer, just a product)
- **Rationale:** The hero is a fake cart for a shoe I never touched, and there's no deal or urgency anywhere to pull me toward the button.

## 8. Subject
- **Subject:** `Your Items Are Waiting!`
- **Length:** 23
- **Scores (1-10):** Clarity `4`, Curiosity `3`, Personalization `2`, Urgency `4`, Specificity `2`

## 9. Preview
- **Preview:** `(none / leaking junk)`
- **Length:** 0
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`

---

## Technical Audit

1. Technical Summary
Email uses Attentive's link-wrapping/tracking domain for all links and images; automated QA confirms multiple broken tracked links, a missing plain-text part, and widespread use of non-HTTPS image sources.

2. Link & Tracking Issues
- All links route through `skechers.attentivemail.com/ls/click?upn=...` (Attentive ESP click-tracking wrapper).
- [FAIL] Broken link (401) on product image link: "Image of Men's OG Anunoby Limited Edition..." — the wrapped URL returns HTTP 401.
- [FAIL] Broken link (400) on CTA "LET'S GET TEXTING" — wrapped URL returns HTTP 400.
- [FAIL] Broken link (400) on "Unsubscribe" link — wrapped URL returns HTTP 400. This is a compliance-relevant failure (see Section 5).
- Two links ("Complete you Order", "We noticed you noticing us... Your cart is still waiting...") returned 429 (rate-limited) during probing — status inconclusive, not confirmed broken.
- QA probed 12 of 36 material links (24 skipped per click-likelihood ranking); unprobed links were not verified.

3. Rendering & Accessibility
- Two `<img>` elements missing `alt` text: `021bd784-11b5-4646-95f8-35c2bd27702a.gif` and `a6ec5198-5437-4eaa-8613-eacc775726f9.jpg`, plus the tracking pixel at `wf/open?upn=...` (open-tracking pixel missing alt, low impact but flagged by QA).
- 11 images served over plain `http://` (e.g. `http://image.emails.skechers.com/lib/.../dde00662-...png`, `.../dfcc8fd7-...jpg`, `.../737031d9-...jpg`, `.../a6ec5198-...jpg`, plus app-store, payment, social, and store-locator icons) — mixed-content sources risk being blocked or flagged by mail clients that enforce HTTPS.
- Responsive CSS present for `.row-16`/`.row-17`/`.row-19` and `.stack .column` breakpoints at 620px; no structural rendering defects found in the truncated markup.

4. Personalization & Merge Tokens
- No unresolved merge tags (e.g. `{{...}}`, `%%...%%`) or literal placeholder tokens observed in the provided HTML.
- No issues found.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- Unsubscribe link is present but returns HTTP 400 per QA probe — a functionally broken unsubscribe mechanism is a CAN-SPAM compliance risk (opt-out must be honored/functional).
- Sender identity present: `From: SKECHERS <hello@msgs.skechers.com>` — a dedicated subdomain, consistent with ESP-managed sending, but authentication headers (SPF/DKIM/DMARC) are not present in the supplied source/QA data and cannot be assessed from this material.
- Physical mailing address / postal footer not visible in the truncated HTML — cannot confirm CAN-SPAM footer requirement from available source.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- All outbound links are Attentive click-wrapper URLs (`upn=` opaque tokens); no visible UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`) on the destination side — continuity/attribution alignment cannot be verified from the wrapped URLs alone, since final redirect targets are not resolved in the provided data.
- "web version" link present (hosted/web copy of the email), also wrapped via the same tracker.

7. Recommendations
- Fix or re-issue the 401/400 broken links immediately, prioritizing the Unsubscribe link (compliance exposure) and the "LET'S GET TEXTING" CTA (primary conversion path).
- Re-probe the two 429-rate-limited links to confirm status before next send.
- Add a plain-text MIME alternative — current plain-text part is 0 chars, which hurts deliverability/spam scoring and accessibility for text-only clients.
- Switch all `http://image.emails.skechers.com/...` asset references to `https://` to prevent mixed-content blocking in HTTPS-enforcing mail clients.
- Add descriptive `alt` text to the two flagged content images; the open-tracking pixel's missing alt is low-priority and can be left as-is.
- Confirm SPF/DKIM/DMARC alignment for `msgs.skechers.com` and verify a CAN-SPAM-compliant physical address is present in the full (non-truncated) footer.
## Recent history

- [[2026-08-19-the-new-caf-slipper-is-here]] — 5/10 (2026-08-19)
- [[2026-08-19-intro-to-style-sneaker-trends]] — 4/10 (2026-08-19)
- [[2026-08-19-did-you-forget-something]] — 5/10 (2026-08-19)

