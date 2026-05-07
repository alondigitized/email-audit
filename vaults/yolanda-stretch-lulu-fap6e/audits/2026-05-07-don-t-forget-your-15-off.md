---
slug: 2026-05-07-don-t-forget-your-15-off
type: email
date: 2026-05-07
persona: yolanda-stretch-lulu-fap6e
score: "5/10"
sender: lululemon
subject: Don’t forget your 15% off
tags: [email, score-5, sender/lululemon]
---
# Don’t forget your 15% off
**Score:** 5/10 · **Type:** Email audit · **2026-05-07**
## Executive summary

- This is a transactional-style promotional email reminding a named recipient (Hayla) of an active 15% off offer. The email is functionally competent — the discount is clear, the expiry date is explicit, and the mechanic is explained step-by-step. But the render is a mixed bag: the hero image that should provide lifestyle aspiration is either missing or extremely dark/compressed, leaving a heavy gray block at the top. The copy is wordy and the email reads more like a support ticket than a brand moment.

## What's working

- **Personalization is front and center.** The recipient's name ("HAYLA") appears prominently in the hero area, which immediately signals this is a targeted send, not a blast.
- **Crystal-clear expiry.** "Shop now, offer ends Thursday, May 14, 2026 at 11:59pm PT" removes all ambiguity about urgency.
- **Mechanics are explained.** Four numbered steps walk through exactly how to redeem. Good for a friction-heavy offer that requires in-browser action.
- **Dual CTA placement.** Two "Sign In and Shop Now" buttons bracket the instructions, reducing drop-off from readers who skim.

## What's weak

- **Hero image is broken/extremely dark.** The top third of the email is dominated by a near-black rectangle. No product, no model, no lifestyle context — the aspirational anchor lululemon depends on is absent.
- **Cold, utilitarian tone.** The opening reads like a password-reset email. "Heads up. You've got 15% off…" does the job but wastes the brand equity.
- **CTA copy is weak.** "Sign In and Shop Now" leads with account friction, not with the benefit. This plants doubt before the click.
- **Heavy fine print block.** A long asterisk block is visible mid-email. On mobile it looks like a wall of gray text.
- **Secondary modules are tacked on.** "Download the App," "Shop What's New," "Find a Store" footer rail adds length without contributing to the conversion goal.

## Recommendations

- 1. **Fix the hero image.** Even a single product shot or athlete image would restore the brand experience and give the eye a landing pad.
- 2. **Rewrite the CTA.** Try "Shop Your 15% Off" or "Claim Your Offer" — benefit-first, no mention of the login step in the button itself.
- 3. **Tighten the opening.** "Your 15% off expires May 14 — here's how to use it" is shorter, warmer, and still functional.
- 4. **Move fine print to footer.** The asterisk block in the middle of the email interrupts the flow. Collapse it to a one-liner linked to full terms, then push full text to footer.
- 5. **Add one product recommendation.** Even a 2-tile row of bestsellers in the recipient's category would give them something to click toward while motivation is high.
- | Priority | Issue | Action |
- |---|---|---|
- | P0 | Promo CTA returns 403 | Verify `cpnId` validity in SFMC; check WAF rules on `shop.lululemon.com` for external relay IPs |
- | P0 | All web fonts return 403 | Audit CDN CORS/hotlink policy on `globalstaticassets.lululemon.com`; fix malformed `woff)` URLs in CSS |
- | P1 | List-Unsubscribe headers missing | Confirm headers are set at SFMC/MTA level; required for Gmail/Yahoo bulk sender compliance |
- | P1 | Logo has no alt text | Add `alt="lululemon"` to masthead image |
- | P2 | CTA URL missing UTM params | Append `utm_source=email&utm_medium=email&utm_campaign=welcome15` to promo URL |
- | P2 | Decorative arrows missing `alt=""` | Add explicit empty alt to all three footer arrow images |
- | P3 | Homepage link returns 403 | Re-probe from non-relay IP to distinguish WAF block from genuine misconfiguration |

## Full review
---

## 1. Executive Summary

This is a transactional-style promotional email reminding a named recipient (Hayla) of an active 15% off offer. The email is functionally competent — the discount is clear, the expiry date is explicit, and the mechanic is explained step-by-step. But the render is a mixed bag: the hero image that should provide lifestyle aspiration is either missing or extremely dark/compressed, leaving a heavy gray block at the top. The copy is wordy and the email reads more like a support ticket than a brand moment.

---

## 2. Business Impact Score

**5/10**

- Specific % offer visible (15% off full-price items) ✓
- Primary CTA is unambiguous ("Sign in and Shop Now" button appears twice) ✓
- No render bugs in text/layout ✓
- Email reflects a current, time-bounded campaign (expires May 14, 2026) ✓
- Offer feels honest — fine print is present but the core terms are stated plainly ✓

Not counted: hero image is dark/missing, killing visual hierarchy; no demographic/style signals visible; loyalty/member benefit framing is absent; brand voice is cold/mechanical.

---

## 3. What's Working

- **Personalization is front and center.** The recipient's name ("HAYLA") appears prominently in the hero area, which immediately signals this is a targeted send, not a blast.
- **Crystal-clear expiry.** "Shop now, offer ends Thursday, May 14, 2026 at 11:59pm PT" removes all ambiguity about urgency.
- **Mechanics are explained.** Four numbered steps walk through exactly how to redeem. Good for a friction-heavy offer that requires in-browser action.
- **Dual CTA placement.** Two "Sign In and Shop Now" buttons bracket the instructions, reducing drop-off from readers who skim.

---

## 4. What's Weak

- **Hero image is broken/extremely dark.** The top third of the email is dominated by a near-black rectangle. No product, no model, no lifestyle context — the aspirational anchor lululemon depends on is absent.
- **Cold, utilitarian tone.** The opening reads like a password-reset email. "Heads up. You've got 15% off…" does the job but wastes the brand equity.
- **CTA copy is weak.** "Sign In and Shop Now" leads with account friction, not with the benefit. This plants doubt before the click.
- **Heavy fine print block.** A long asterisk block is visible mid-email. On mobile it looks like a wall of gray text.
- **Secondary modules are tacked on.** "Download the App," "Shop What's New," "Find a Store" footer rail adds length without contributing to the conversion goal.

---

## 5. Recommendations

1. **Fix the hero image.** Even a single product shot or athlete image would restore the brand experience and give the eye a landing pad.
2. **Rewrite the CTA.** Try "Shop Your 15% Off" or "Claim Your Offer" — benefit-first, no mention of the login step in the button itself.
3. **Tighten the opening.** "Your 15% off expires May 14 — here's how to use it" is shorter, warmer, and still functional.
4. **Move fine print to footer.** The asterisk block in the middle of the email interrupts the flow. Collapse it to a one-liner linked to full terms, then push full text to footer.
5. **Add one product recommendation.** Even a 2-tile row of bestsellers in the recipient's category would give them something to click toward while motivation is high.

---

## 6. Bottom Line

A serviceable reminder email that gets the mechanics right but fails on brand execution. The broken hero image is the single largest problem — without it, this looks like a customer service notice, not a lululemon send. Fix the hero, soften the CTA copy, and trim the fine print, and this becomes a genuinely solid retention touch.

---

## 7. Subject Line Analysis

- **Subject:** `Don't forget your 15% off`
- **Length:** 27 chars
- **Scores (1-10):** Clarity `8`, Curiosity `4`, Personalization `3`, Urgency `5`, Specificity `6`
- **Strengths:**
  - Short, mobile-friendly, and instantly legible
  - "15% off" is a concrete number — no vagueness
- **Weaknesses:**
  - "Don't forget" is overused abandon-cart language; feels automated
  - No brand name, no product category, no deadline in subject — urgency lives only in the body
- **Alt A:** `Hayla, your 15% off expires May 14`
- **Alt B:** `Last chance: 15% off full-price lululemon ends Thursday`

---

## 8. Preview Text Analysis

- **Preview:** `Heads up. You've got 15% off* full-priced items online (excluding accessories, bags, gift cards, and We Made Too Much) waiting for you. Go ahead, make your move.`
- **Length:** ~158 chars
- **Scores (1-10):** Complements subject `5`, Specificity `7`, Clarity `6`, Inbox-fit `4`
- **Strengths:**
  - Specific about exclusions — sets accurate expectations before the open
  - "Make your move" adds a mild brand-voice moment
- **Weaknesses:**
  - The exclusion list ("excluding accessories, bags, gift cards…") is too heavy for a preheader — it reads like fine print at the inbox level
  - Leads with "Heads up" — filler phrase that wastes the first two words of visible preview space
- **Alt A:** `Your 15% off full-price items expires May 14 — here's how to use it`
- **Alt B:** `Hayla, 15% off is waiting. Offer ends Thursday at 11:59pm PT.`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** 5/10
- **Signals counted:** sender recognizable (lululemon), subject is concrete (specific % off), subject under 50 chars, no spam signals, preview text is real copy (not junk)
- **Rationale:** The sender name alone carries weight, and a specific percentage discount is a strong opener. But the subject line's "don't forget" framing signals automation fatigue, and there's no personalization or urgency in the subject itself — both are buried in the preview.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** 4/10
- **Signals counted:** offer reduces price (15% off), offer is time-bounded with credible deadline, brand voice is consistent and trusted, no broken-image friction in the text/CTA area
- **Rationale:** The offer is real and the deadline is clear, but the broken hero image kills motivation before the reader reaches the CTA, and leading the button copy with "Sign In" introduces friction. A warm, product-forward design would meaningfully lift this score.

---

## 11. Evidence

- **Overall purpose:** Reminder email for an existing 15% off offer tied to a specific recipient (Hayla), with a hard expiry of May 14, 2026.
- **Hero / primary value prop:** "Your 15% off is ready to go." — stated in large display type. Intended to be anchored by a lifestyle image, but the image renders as a near-black rectangle, gutting visual impact.
- **Membership / benefits section:** Not present as a distinct module. The offer is framed as a direct discount, not a member reward.
- **Product discoverability / recommendation modules:** None. No product tiles, no category links beyond the generic "Shop What's New" footer rail.
- **Utility / secondary modules:** "Download the App," "Shop What's New," "Find a Store" — standard footer rail, low conversion value in this context.
- **Bugs / friction / clarity issues:** The hero/header image renders as a solid dark block — no visible product or model imagery. The long asterisk-prefixed fine print block appears in the mid-email body, visually interrupting the flow between the instructions and the second CTA. The "View in browser" link is visible at the bottom as expected footer placement (not leaking into preheader).

---

## Technical Audit

## Technical Audit — lululemon "Don't forget your 15% off"

**From:** hello@e.lululemon.com | **Date:** 2026-05-07

---

### 1. Technical Summary

Five web font assets are returning 403, which will cause system font fallback across all clients. The promo code redemption link — the core CTA for this campaign — is also returning 403, meaning recipients cannot redeem the offer.

---

### 2. Link & Tracking Issues

**Critical — broken CTA:**
- `https://shop.lululemon.com/account/login?mode=promo-code&create=true&cpnId=WELCOME15LIAXZ4MO9ZA` → **403**. This is the promo code redemption URL. Every recipient who clicks it hits an error page. Campaign is non-functional until resolved.

**Critical — broken homepage link:**
- `https://www.lululemon.com` → **403**. Linked via footer text "www.lululemon.com". Suggests the probe IP or relay IP may be blocked by lululemon's WAF/CDN, but should be verified from a real client IP before ruling out a genuine misconfiguration.

**Note on tracking links:**
- 33 click-redirect links were skipped by the probe (redirect domains excluded from HTTP checks). Destination health of tracked links is unverified.

---

### 3. Rendering & Accessibility

**Web fonts — all five returning 403:**
```
https://globalstaticassets.lululemon.com/fonts/Saans-Light.woff
https://globalstaticassets.lululemon.com/fonts/Saans-Regular.woff
https://globalstaticassets.lululemon.com/fonts/Saans-Medium.woff
https://globalstaticassets.lululemon.com/fonts/Saans-SemiBold.woff
https://globalstaticassets.lululemon.com/fonts/KHGiga-Light.woff
```
CSS fallbacks (`Helvetica Neue, sans-serif` / `Times New Roman, serif`) will engage. Typography will degrade but remain readable. Root cause likely a CDN auth policy blocking external hotlinking — the `.woff` URLs lack the closing `)` in the `@font-face` declarations for four of five files, which may also cause parse failures in strict CSS engines.

**Missing alt text (4 images):**
| Image | src |
|---|---|
| Logo masthead | `SFMC_Email_Masthead_Yogotype_PureWhite_FFFFFF` |
| Footer arrow (×3) | `SFMC_Email_Footer_Arrow-Right` |

Logo missing alt is an accessibility failure (WCAG 2.1 §1.1.1). The arrow images are decorative and should carry `alt=""` explicitly rather than omitting the attribute, which some screen readers will announce the filename for.

**Dark mode:** Implementation present and appears complete — Gmail, Outlook.com, and Outlook Android are all targeted via separate CSS blocks. No issues found.

**Doctype:** HTML 4.01 Transitional declared. Expected for email; no issue.

---

### 4. Personalization & Merge Tokens

The promo code `WELCOME15LIAXZ4MO9ZA` appears hardcoded in the CTA URL rather than injected via a merge field. If this is a batch send with per-recipient unique codes, the URL construction is incorrect. If it is a single shared code, the hardcoding is intentional — but the 403 still makes it unreachable.

No unresolved merge token syntax (e.g., `%%`, `{{`, `[[`) visible in the truncated source.

---

### 5. Compliance

**List-Unsubscribe header:** Not detected by relay. CAN-SPAM and Gmail/Yahoo 2024 bulk sender requirements mandate this header. If absent at the MTA level (not just undetected by the AgentMail relay), this is a compliance and deliverability risk.

**List-Unsubscribe-Post (RFC 8058):** Not detected. One-click unsubscribe is required by Gmail/Yahoo for bulk senders (>5k/day). Missing this header will cause Gmail to surface its own unsubscribe UI, which counts against sender reputation.

**SPF/DKIM/DMARC:** `Authentication-Results` header not captured by relay — authentication status unverified. Sending domain is `e.lululemon.com` (SFMC subdomain); alignment should be confirmed at the MTA.

**Physical address and unsubscribe link in body:** Not verifiable from truncated source, but these are CAN-SPAM requirements — confirm presence in footer.

---

### 6. Email-to-Site Continuity

The promo CTA URL (`?mode=promo-code&create=true&cpnId=...`) carries no UTM parameters. If the 403 is resolved and users land successfully, session attribution will be lost — the visit will appear as direct traffic rather than email.

The 33 tracked links routed through click-redirect infrastructure may carry UTM parameters at the redirect destination, but this was not verifiable in the probe.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| P0 | Promo CTA returns 403 | Verify `cpnId` validity in SFMC; check WAF rules on `shop.lululemon.com` for external relay IPs |
| P0 | All web fonts return 403 | Audit CDN CORS/hotlink policy on `globalstaticassets.lululemon.com`; fix malformed `woff)` URLs in CSS |
| P1 | List-Unsubscribe headers missing | Confirm headers are set at SFMC/MTA level; required for Gmail/Yahoo bulk sender compliance |
| P1 | Logo has no alt text | Add `alt="lululemon"` to masthead image |
| P2 | CTA URL missing UTM params | Append `utm_source=email&utm_medium=email&utm_campaign=welcome15` to promo URL |
| P2 | Decorative arrows missing `alt=""` | Add explicit empty alt to all three footer arrow images |
| P3 | Homepage link returns 403 | Re-probe from non-relay IP to distinguish WAF block from genuine misconfiguration |
## Recent history

- [[2026-05-06-meet-the-new-weightlifting-short-f990a73f-9d6f-41b9-82b1-]] — 9/10 (2026-05-06)
- [[2026-05-05-new-hot-pilates-sets-breathe-freely]] — 8/10 (2026-05-05)
- [[2026-05-04-gifts-that-deliver-for-mother-s-day]] — 8/10 (2026-05-04)

