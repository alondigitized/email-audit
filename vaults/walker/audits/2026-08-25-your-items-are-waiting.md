---
slug: 2026-08-25-your-items-are-waiting
type: email
date: 2026-08-25
persona: walker
score: "5/10"
sender: SKECHERS
subject: Your Items Are Waiting!
tags: [email, score-5, sender/skechers]
---
# Your Items Are Waiting!
**Score:** 5/10 · **Type:** Email audit · **2026-08-25**
## Executive summary

- There it is one more time — that same pink floral D'Lites Spring Bloom sneaker, "WE NOTICED YOU NOTICING US..." sitting under a cart that isn't mine. I've now seen this exact shoe in five straight emails this week and I did not put it there. At this point it's not marketing, it's just noise I've learned to scroll past.
- The one thing that actually earned a second look was buried two-thirds of the way down: 20% off sitewide for Skechers Plus members, code SXXPLUS, through 8/25. That's a real, concrete offer and I am a member. If that had been up top instead of the phantom cart, I'd have clicked through to see what's on sale in men's.
- As it stands — mark as read, don't forward, don't click. I've said the same thing about this shoe four times already this week and I'm tired of saying it.

## What's working

- The "here's some more great options" grid actually surfaces men's product — Delson 3.0 Roth shoes, Arch Fit Arcade slip-ons — that's closer to my lane.
- The 20% off Plus member sale block is a real offer with a code, a deadline (8/25), and a clear "SHOP THE SALE" link.
- Logo and layout are clean, no rendering glitches, text is readable at a decent size.

## What's weak

- That pink floral women's sneaker again, as the hero image, in a cart I never touched — this is the fifth time this week.
- The whole top half of the email is dead air pushing a phantom cart instead of leading with the actual offer (the 20% off deal), which is buried below the fold.
- Zero men's comfort/arch-support framing anywhere near the top — nothing about cushioning, slip-on ease, or arch support up front, even though that grid below has relevant product.

## Recommendations

- 1. Lead with the 20% off Plus sale and a men's hero shoe — that's the actual offer, put it where the eye lands first, not buried under a cart I never filled.
- 2. Drop the "your cart is waiting" framing entirely for a shoe I never added — if the cart-recovery logic can't tell what a customer actually browsed, don't send it as often as it has been this week.
- 3. Put a men's arch-support/slip-on product in the hero slot, not as one tile in a six-shoe grid.
- **Subject Alt A:** `Skechers Plus: 20% off sitewide, ends today`
- **Subject Alt B:** `Your arch support upgrade is 20% off`
- **Preheader Alt A:** `Members save 20% sitewide with code SXXPLUS — today only`
- **Preheader Alt B:** `Slip-ins, arch support, and more — 20% off through 8/25`

## Full review
## 1. Overview

There it is one more time — that same pink floral D'Lites Spring Bloom sneaker, "WE NOTICED YOU NOTICING US..." sitting under a cart that isn't mine. I've now seen this exact shoe in five straight emails this week and I did not put it there. At this point it's not marketing, it's just noise I've learned to scroll past.

The one thing that actually earned a second look was buried two-thirds of the way down: 20% off sitewide for Skechers Plus members, code SXXPLUS, through 8/25. That's a real, concrete offer and I am a member. If that had been up top instead of the phantom cart, I'd have clicked through to see what's on sale in men's.

As it stands — mark as read, don't forward, don't click. I've said the same thing about this shoe four times already this week and I'm tired of saying it.

## 2. What worked
- The "here's some more great options" grid actually surfaces men's product — Delson 3.0 Roth shoes, Arch Fit Arcade slip-ons — that's closer to my lane.
- The 20% off Plus member sale block is a real offer with a code, a deadline (8/25), and a clear "SHOP THE SALE" link.
- Logo and layout are clean, no rendering glitches, text is readable at a decent size.

## 3. What didn't
- That pink floral women's sneaker again, as the hero image, in a cart I never touched — this is the fifth time this week.
- The whole top half of the email is dead air pushing a phantom cart instead of leading with the actual offer (the 20% off deal), which is buried below the fold.
- Zero men's comfort/arch-support framing anywhere near the top — nothing about cushioning, slip-on ease, or arch support up front, even though that grid below has relevant product.

## 4. What I'd change
1. Lead with the 20% off Plus sale and a men's hero shoe — that's the actual offer, put it where the eye lands first, not buried under a cart I never filled.
2. Drop the "your cart is waiting" framing entirely for a shoe I never added — if the cart-recovery logic can't tell what a customer actually browsed, don't send it as often as it has been this week.
3. Put a men's arch-support/slip-on product in the hero slot, not as one tile in a six-shoe grid.
   - **Subject Alt A:** `Skechers Plus: 20% off sitewide, ends today`
   - **Subject Alt B:** `Your arch support upgrade is 20% off`
   - **Preheader Alt A:** `Members save 20% sitewide with code SXXPLUS — today only`
   - **Preheader Alt B:** `Slip-ins, arch support, and more — 20% off through 8/25`

## 5. Business Impact Score (1-10)
**5/10**
- Sender is a brand you recognize / are subscribed to
- One concrete offer is visible (20% off, code SXXPLUS)
- Primary CTA is unambiguous ("COMPLETE YOUR ORDER" / "SHOP THE SALE")
- No render bugs
- Loyalty / member benefits visible if you are a member

## 6. Open Likelihood (persona-grounded)
- **Score:** 4/10
- **Signals counted:** Sender display name is recognizable; Subject is concrete; No spam signals
- **Rationale:** I recognize the sender and the subject is at least specific, but this is the same cart-abandon beat for the fifth time this week and there's no personalization or urgency that feels credible to me.

## 7. Click-Through Likelihood (persona-grounded)
- **Score:** 3/10
- **Signals counted:** One specific product / hero linked; No friction (no view-in-browser gate)
- **Rationale:** The hero product is a shoe I never looked at, so nothing pulls me toward that CTA — the one thing that could've earned a click, the 20% off deal, is stuck below the fold where I might not even scroll to it.

## 8. Subject
- **Subject:** `Your Items Are Waiting!`
- **Length:** 24
- **Scores (1-10):** Clarity 5, Curiosity 3, Personalization 2, Urgency 4, Specificity 2

## 9. Preview
- **Preview:** (none / leaking junk)
- **Length:** 0
- **Scores (1-10):** Complements subject 1, Specificity 1, Clarity 1, Inbox-fit 1

---

## Technical Audit

1. Technical Summary
Email loads correctly with functioning tracking/redirect infrastructure, but ships with a broken product deep-link, a broken unsubscribe link, and no plain-text fallback — the last two are compliance-relevant defects.

2. Link & Tracking Issues
- Broken link (401) on product image CTA "Image of Men's OG Anunoby Limited Edition: SKX Nexus NYC Blue (Pre-Order) Basket" — the attentivemail.com/ls/click redirect returns 401 Unauthorized, meaning this product link is non-functional for recipients.
- Broken link (400) on the **Unsubscribe** link — returns 400 Bad Request. This is a functional failure on top of being a compliance issue (see Section 5).
- Two links ("Complete you Order" CTA and the "We noticed you noticing us..." cart-reminder link) returned 429 (rate limited) during automated probing — status inconclusive, recommend manual re-verification since automated checks could not confirm validity.
- All probed links route through Attentive's click-tracking domain (skechers.attentivemail.com/ls/click?upn=...) consistent with standard redirect/tracking wrapping; no malformed tracking parameters observed in the sampled links.
- QA scope note: 12 of 37 material links were probed (25 skipped per click-likelihood prioritization) — footer/utility/social links were deprioritized and not fully verified.

3. Rendering & Accessibility
- 3+ images served over `http://` instead of `https://` (e.g., header logo `dde00662-...png`, "Complete you Order" CTA image, and the "more great options" product image, plus app-store/social icons and `a6ec5198-...jpg`) — non-HTTPS resources may be blocked or flagged by mail clients enforcing mixed-content policies.
- Two images missing `alt` text: a tracking/decorative GIF (`021bd784-...gif`) and product image `a6ec5198-...jpg` — the latter also lacks HTTPS, compounding accessibility and rendering risk since screen readers and blocked-image fallbacks both lose meaning.
- The open-tracking pixel (`wf/open?upn=...`) also lacks alt text, which is standard/expected for tracking pixels and not a real issue.
- Responsive CSS present (`@media max-width:620px` with `.stack`, `.mobile_hide`, `.desktop_hide` rules) — no structural mobile-rendering issues detected in the sampled markup.

4. Personalization & Merge Tokens
No issues found — no unresolved merge tags (e.g. `{{...}}`, `%%...%%`) or broken personalization tokens observed in the truncated HTML source.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **Unsubscribe link is broken (400 Bad Request)** — this is a CAN-SPAM compliance risk, as the law requires a working opt-out mechanism. Confirmed via QA findings, not just probabilistic.
- Sender is `hello@msgs.skechers.com`, a plausible dedicated sending subdomain; no authentication header data (SPF/DKIM/DMARC) was included in the provided source, so pass/fail cannot be assessed — recommend pulling raw headers separately to confirm alignment.
- Physical mailing address / CAN-SPAM footer content was not present in the truncated HTML sample — cannot confirm compliance; recommend reviewing the untruncated footer.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- All sampled links route through Attentive's tracking redirect (`skechers.attentivemail.com/ls/click?upn=...`) rather than direct UTM-tagged destination URLs — actual landing page and UTM parameters are only visible after redirect resolution, which could not be fully verified due to the 401/400/429 responses above.
- Given the 401 on the primary product CTA, that click path cannot currently reach any landing page — a direct continuity failure for the highest-intent link in the email.

7. Recommendations
- Priority 1: Fix the 401 error on the "SKX Nexus NYC Blue (Pre-Order)" product link — verify the underlying destination URL/campaign ID is active in Attentive.
- Priority 1: Fix the unsubscribe link (400 error) — this blocks legally required opt-out functionality.
- Priority 2: Add a plain-text MIME alternative (current fallback is 0 chars) — improves deliverability and accessibility for text-only clients.
- Priority 2: Serve all image assets over HTTPS (`image.emails.skechers.com` currently mixed HTTP/HTTPS) to prevent blocked images in HTTPS-enforcing mail clients.
- Priority 3: Add descriptive `alt` text to the two flagged product/decorative images.
- Priority 3: Manually re-verify the two 429-rate-limited links ("Complete you Order", cart-reminder CTA) outside of automated probing to confirm they resolve correctly.
## Recent history

- [[2026-08-19-the-new-caf-slipper-is-here]] — 5/10 (2026-08-19)
- [[2026-08-19-intro-to-style-sneaker-trends]] — 4/10 (2026-08-19)
- [[2026-08-19-did-you-forget-something]] — 5/10 (2026-08-19)

