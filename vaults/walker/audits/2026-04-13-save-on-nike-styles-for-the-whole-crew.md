---
slug: 2026-04-13-save-on-nike-styles-for-the-whole-crew
type: email
date: 2026-04-13
persona: walker
score: "5/10"
sender: Shoe Carnival
subject: Save on Nike Styles for the Whole Crew
tags: [email, score-5, sender/shoe-carnival]
---
# Save on Nike Styles for the Whole Crew
**Score:** 5/10 · **Type:** Email audit · **2026-04-13**
## Executive summary

- A multi-brand sale email that promises Nike in the subject line but opens with New Balance as the hero. That bait-and-switch damages trust and wastes the scroll. The structure is long, covers several distinct modules (lifestyle hero, sale banner, whole-crew grid, a contest, and coupons), and each competes for attention without a clear primary action. The coupon module at the bottom is the most concrete offer in the email and arguably the most valuable, but it's buried. The preview text renders as a raw tracking URL — the most damaging cosmetic defect in the send.
- Functional but unfocused. The coupon and contest give recipients two real reasons to engage; everything else is visual filler that slows the path to conversion.

## What's working

- **Coupon module is clear and actionable.** "$10 off $74.99+" and "$25 off $149.99+" with an explicit online code (`SAVE4MORE`) and barcode is exactly what drives click-to-store and online conversion. Good CTAs here.
- **"For the Whole Crew" framing** aligns with the subject line and provides a household/family angle that broadens basket size.
- **Play. Shoot. Win. contest** ($100 prize) gives fence-sitters a non-purchase reason to click and builds list engagement.
- **Product grid (Women's / Men's / Kids)** efficiently segments the catalog in three tiles without clutter.

## What's weak

- **Preview text is a raw tracking URL.** This is the first thing recipients see in the inbox after the subject. It reads as spam and signals a broken send.
- **Hero image features New Balance, not Nike.** The subject line sets a Nike expectation; the hero immediately breaks it. Subscribers who opened for Nike have to scroll past an off-brand section before the promise is fulfilled.
- **No single dominant CTA.** The email asks recipients to shop a sale, shop by gender, enter a contest, and use a coupon — sequentially and without hierarchy. No one action stands out.
- **"Brands Starting at $59.98" sale section is vague.** Which brands? Only one shoe is shown. The ambiguity undercuts urgency.
- **Email length dilutes each module.** By the time the coupon appears, the reader has absorbed five distinct messages. The coupons are where the money is — they should be higher.

## Recommendations

- 1. **Fix the preview text immediately.** It should reinforce the subject line ("Shop Nike for the whole family — save up to $25 today").
- 2. **Match hero to subject.** If the subject says Nike, the hero image must show Nike product, not New Balance. Either reorder the modules or write a subject that reflects the actual lead brand.
- 3. **Elevate the coupon.** Move the $10/$25 offer above the fold or directly below the hero. Discount-led subject lines perform best when the discount is immediately visible.
- 4. **Sharpen the sale callout.** Replace "Brands starting at $59.98" with specific brand names or a tighter benefit statement.
- 5. **Give the contest a cleaner CTA.** "Enter to Win $100" is buried in a dense module. A standalone button would lift click rate.
- | Priority | Action |
- |---|---|
- | P0 | Strip U+200B from all tracking URL templates. Audit the template source and the system that generates these URLs — the character is likely in a template variable, not just the final output. |
- | P0 | Resolve or remove the `[UNIQUE]` token in `0di86k1v` redirect URLs. If this domain is no longer in use, remove the link entirely. |
- | P1 | Add descriptive `alt` text to both content images. Set `alt=""` on the two tracking pixel `<img>` tags. |
- | P1 | Verify SPF/DKIM pass status for `email.shoecarnival.com` using an authenticated header capture from a real inbox. |
- | P2 | Reduce URL density in the plain-text version to below 60% of total character count — replace long redirect URLs with shorter direct URLs or stub text. |
- | P2 | Confirm CAN-SPAM-compliant unsubscribe link exists in full HTML source if not visible in truncated sample. |

## Full review
## Shoe Carnival — "Save on Nike Styles for the Whole Crew"

---

### 1. Executive Summary

A multi-brand sale email that promises Nike in the subject line but opens with New Balance as the hero. That bait-and-switch damages trust and wastes the scroll. The structure is long, covers several distinct modules (lifestyle hero, sale banner, whole-crew grid, a contest, and coupons), and each competes for attention without a clear primary action. The coupon module at the bottom is the most concrete offer in the email and arguably the most valuable, but it's buried. The preview text renders as a raw tracking URL — the most damaging cosmetic defect in the send.

---

### 2. Business Impact Score: 5/10

Functional but unfocused. The coupon and contest give recipients two real reasons to engage; everything else is visual filler that slows the path to conversion.

---

### 3. What's Working

- **Coupon module is clear and actionable.** "$10 off $74.99+" and "$25 off $149.99+" with an explicit online code (`SAVE4MORE`) and barcode is exactly what drives click-to-store and online conversion. Good CTAs here.
- **"For the Whole Crew" framing** aligns with the subject line and provides a household/family angle that broadens basket size.
- **Play. Shoot. Win. contest** ($100 prize) gives fence-sitters a non-purchase reason to click and builds list engagement.
- **Product grid (Women's / Men's / Kids)** efficiently segments the catalog in three tiles without clutter.

---

### 4. What's Weak

- **Preview text is a raw tracking URL.** This is the first thing recipients see in the inbox after the subject. It reads as spam and signals a broken send.
- **Hero image features New Balance, not Nike.** The subject line sets a Nike expectation; the hero immediately breaks it. Subscribers who opened for Nike have to scroll past an off-brand section before the promise is fulfilled.
- **No single dominant CTA.** The email asks recipients to shop a sale, shop by gender, enter a contest, and use a coupon — sequentially and without hierarchy. No one action stands out.
- **"Brands Starting at $59.98" sale section is vague.** Which brands? Only one shoe is shown. The ambiguity undercuts urgency.
- **Email length dilutes each module.** By the time the coupon appears, the reader has absorbed five distinct messages. The coupons are where the money is — they should be higher.

---

### 5. Recommendations

1. **Fix the preview text immediately.** It should reinforce the subject line ("Shop Nike for the whole family — save up to $25 today").
2. **Match hero to subject.** If the subject says Nike, the hero image must show Nike product, not New Balance. Either reorder the modules or write a subject that reflects the actual lead brand.
3. **Elevate the coupon.** Move the $10/$25 offer above the fold or directly below the hero. Discount-led subject lines perform best when the discount is immediately visible.
4. **Sharpen the sale callout.** Replace "Brands starting at $59.98" with specific brand names or a tighter benefit statement.
5. **Give the contest a cleaner CTA.** "Enter to Win $100" is buried in a dense module. A standalone button would lift click rate.

---

### 6. Bottom Line

The ingredients are there — a real discount, a contest hook, a family framing, clear product segmentation — but the execution has a critical mismatch (Nike subject / New Balance hero) and a broken preview text. Fix those two issues and this send would perform materially better. As sent, the email risks eroding brand trust before the reader reaches the actual offer.

---

### 7. Subject Line Analysis

- **Subject:** `Save on Nike Styles for the Whole Crew`
- **Length:** 38 characters
- **Scores (1-10):** Clarity `7`, Curiosity `4`, Personalization `2`, Urgency `3`, Specificity `5`
- **Strengths:**
  - "For the Whole Crew" is inclusive and drives multi-unit basket thinking
  - Nike name-drop provides brand credibility and search relevance
- **Weaknesses:**
  - Zero urgency — no deadline, no percentage off, nothing perishable
  - "Save on" is generic filler; the actual discount ($10/$25) is more compelling and not mentioned
- **Alt A:** `Nike Styles for the Whole Family — $25 Off This Weekend`
- **Alt B:** `Your Crew Needs New Nikes. Use Code SAVE4MORE.`

---

### 8. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Multi-brand family footwear sale with a coupon incentive and a sweepstakes engagement hook |
| **Hero / primary value prop** | Woman in lifestyle pose, New Balance logo, "On Repeat" headline — brand-feel over offer clarity; misaligned with subject |
| **Membership / benefits** | None visible |
| **Product discoverability** | Three gender/age tiles (Women's, Men's, Kids) provide clean navigation; "For the Whole Crew" grid shows multiple Nike styles at small scale |
| **Utility / secondary modules** | Play. Shoot. Win. Nike contest with $100 prize; sale rail "Brands Starting at $59.98" |
| **Coupon module** | Two-tier coupon ($10/$25) with code SAVE4MORE and printable barcodes — clearest conversion path in the email |
| **Bugs / friction** | Preview text renders as a raw tracking URL (visible in inbox preview); no other visible rendering defects |

---

## Technical Audit

## Technical Audit — Shoe Carnival: "Save on Nike Styles for the Whole Crew"
**Date:** 2026-04-13 | **From:** shoecarnival@email.shoecarnival.com

---

### 1. Technical Summary

Six tracking URLs are broken due to an embedded Unicode zero-width space (U+200B) — a copy/paste artifact that will cause all associated click and open tracking to fail. A second tracking domain contains an unresolved merge token and timed out, indicating a mis-configured or stale redirect.

---

### 2. Link & Tracking Issues

**Critical — U+200B in tracking URLs (5 links)**

A zero-width space (`\u200b`) is appended to the `utm_campaign` value in every tracked URL on the primary `ieezzy5m.emltrk.com` domain:

```
https://ieezzy5m.emltrk.com/v2/ieezzy5m?rd&i=72180589&t=utm_campaign=SCA_20260413_nike_new_balance_AM​
                                                                                                      ^^ U+200B here (position 79)
```

Affected action parameters: `rd` (redirect), `rl`, `p`, `f`, and the open-pixel `?i=72180589&t=...`. Any downstream URL parser that enforces ASCII will reject these, and the UTM parameter value passed to GA/analytics will be silently malformed for any client that does resolve them.

**Critical — Unresolved merge token + timeout (1 link)**

```
https://0di86k1v.emltrk.com/v2/0di86k1v?rd&d=[UNIQUE]
```

`[UNIQUE]` was not substituted at send time. The domain also differs from the primary tracker (`0di86k1v` vs `ieezzy5m`), suggesting either a second ESP integration is partially configured or a template was merged incorrectly. QA probe timed out — the endpoint may be inactive.

**Info — 24 click-redirect links skipped**

Skipped by the probe due to redirect-domain detection. These are unverified and should be spot-checked manually.

---

### 3. Rendering & Accessibility

**Missing `alt` text on 4 images:**

| Image | URL |
|---|---|
| Product/content image | `...m/1/d29c1532-2df6-4064-bf36-ff265c357af5.png` |
| Product/content image | `...m/1/51373ebc-3ecf-4c5a-a6e2-ff3c944f881a.png` |
| Open-pixel tracker | `ieezzy5m.emltrk.com/v2/ieezzy5m?i=72180589&t=...` |
| Secondary tracker pixel | `0di86k1v.emltrk.com/v2/0di86k1v?d=[UNIQUE]` |

Content images must have descriptive `alt` text for screen readers and image-blocked clients. Tracking pixels should carry `alt=""` to suppress broken-image icons.

**No other rendering issues found.** Responsive breakpoints (320px, 450px, 600px, 660px) are present. Outlook/Hotmail/Gmail/Samsung/Apple Mail compatibility hacks are all applied. DOCTYPE HTML 4.01 Transitional is appropriate for email.

---

### 4. Personalization & Merge Tokens

**`[UNIQUE]` unresolved** — confirmed in the `0di86k1v` redirect URL (see §2). No other unresolved tokens detected in the visible HTML.

---

### 5. Compliance

**Authentication headers unverifiable.** `Authentication-Results` header was not present via the AgentMail relay used for QA. SPF and DKIM pass/fail status for `email.shoecarnival.com` cannot be confirmed from this check.

**Plain-text version is URL-saturated.** 9,453 of 12,106 characters (78%) in the plain-text part are URLs. This is above the threshold that triggers spam filters on several major MTA implementations. A spam classification failure here would suppress deliverability regardless of domain reputation.

CAN-SPAM unsubscribe link presence cannot be confirmed from the truncated HTML provided. Should be verified in the full source.

---

### 6. Email-to-Site Continuity

All five `ieezzy5m` tracking links carry `utm_campaign=SCA_20260413_nike_new_balance_AM​` with the trailing U+200B. Clients that successfully resolve the URL will pass the corrupted campaign string to Shoe Carnival's analytics, causing this send to appear under a malformed campaign key (`SCA_20260413_nike_new_balance_AM​` rather than `SCA_20260413_nike_new_balance_AM`) — attribution will be split or dropped entirely depending on how the analytics platform handles non-ASCII query values.

The `0di86k1v` redirect is dead, so any links using that domain contribute zero measurable clicks to site traffic.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| P0 | Strip U+200B from all tracking URL templates. Audit the template source and the system that generates these URLs — the character is likely in a template variable, not just the final output. |
| P0 | Resolve or remove the `[UNIQUE]` token in `0di86k1v` redirect URLs. If this domain is no longer in use, remove the link entirely. |
| P1 | Add descriptive `alt` text to both content images. Set `alt=""` on the two tracking pixel `<img>` tags. |
| P1 | Verify SPF/DKIM pass status for `email.shoecarnival.com` using an authenticated header capture from a real inbox. |
| P2 | Reduce URL density in the plain-text version to below 60% of total character count — replace long redirect URLs with shorter direct URLs or stub text. |
| P2 | Confirm CAN-SPAM-compliant unsubscribe link exists in full HTML source if not visible in truncated sample. |
## Recent history

- [[2026-04-13-your-cart-expires-soon]] — 5/10 (2026-04-13)
- [[2026-04-13-your-items-are-waiting]] — 5/10 (2026-04-13)
- [[2026-04-12-go-bold-in-adistar]] — 5/10 (2026-04-12)

