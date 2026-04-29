---
slug: 2026-04-29-here-s-your-one-time-code
type: email
date: 2026-04-29
persona: walker
score: "6/10"
sender: Nike
subject: "Here's your one-time code"
tags: [email, score-6, sender/nike]
---
# Here's your one-time code
**Score:** 6/10 · **Type:** Email audit · **2026-04-29**
## Executive summary

- This isn't a marketing email — it's a transactional one-time verification code from Nike. Clean, functional, no frills. The code is front and center in big bold numbers, the expiration warning is clear, and there's nothing to distract me. Honestly? This is exactly the kind of email I want when I'm trying to log in somewhere. Get in, get the code, get out. No complaints. But since it's not a promotional email, most of my usual scoring criteria just don't apply.
- *(Scored on transactional utility, not marketing effectiveness — this is not a marketing email.)*
- Does its job. Doesn't upsell, doesn't clutter, doesn't confuse. The only thing keeping it from a higher score is that it's a pure utility send — no secondary value delivered to me as a Nike Member, no soft nudge toward any product. Fine for what it is.

## What's working

- **The code is huge and readable.** `94241126` in big bold text — I can read it without squinting or pinching to zoom on my phone. That matters to me.
- **The expiration notice is bolded.** "This code expires after 15 minutes." stands out clearly. I'll know to move fast.
- **No clutter.** No product carousels, no "while you're here" banners, no aggressive upsells. Just the thing I came for.
- **Clean layout on mobile.** Looks like it renders well at phone width. Easy to copy or reference the code.

## What's weak

- **"Your Nike Member profile code" is a weird heading.** I would've expected something simpler like "Your verification code." The word "profile" threw me for a second — made me wonder if something was being changed on my account without my asking.
- **No Nike.com link context.** The footer just says "Nike.com" as a header but it's not clear why it's there — isn't a button, isn't a link as far as I can see. Feels vestigial.
- **No hint of what triggered this.** Was I logging in? Updating my email? It says "the code you requested" but doesn't say what for. For an older guy like me who occasionally gets phishing emails pretending to be brands I use, I'd appreciate one line saying "You requested this while signing into Nike.com."

## Recommendations

- Add one short context line: "You requested this code to sign in to your Nike Member account." Helps me trust it's legit.
- Consider a subtle footer nudge: "While you're in, check out what's new in Men's." Low pressure, doesn't clutter the utility message, but gives Nike a soft moment.
- The "Nike.com" footer header could link directly to the site — wasted space right now.
- | Priority | Issue | Action |
- |---|---|---|
- | High | Plain-text MIME part missing (0 chars) | Add a `text/plain` part to the multipart message. Minimum content: the OTP code and a "If you didn't request this, ignore it" disclaimer. Lack of a text part increases spam score and breaks delivery to plain-text-only clients. |
- | High | HTTP tracking pixel | Switch the open-tracking endpoint to HTTPS at the ESP configuration level: `https://url3775.click.notifications.nike.com/wf/open?...` |
- | Medium | AgentMail relay stripping headers | Investigate whether the relay is stripping `List-Unsubscribe` and related headers. If DKIM covers those headers and they're stripped post-signing, DKIM verification will fail at receiving MTAs. |
- | Low | Tracking pixel missing `alt=""` | Add explicit empty alt to suppress broken-image indicators in strict clients. |
- | Low | EOT/SVG font formats | Remove from `@font-face` declaration to reduce dead HTTP requests. Only WOFF2 and WOFF are needed. |

## Full review
---

## 1. Executive Summary

This isn't a marketing email — it's a transactional one-time verification code from Nike. Clean, functional, no frills. The code is front and center in big bold numbers, the expiration warning is clear, and there's nothing to distract me. Honestly? This is exactly the kind of email I want when I'm trying to log in somewhere. Get in, get the code, get out. No complaints. But since it's not a promotional email, most of my usual scoring criteria just don't apply.

---

## 2. Business Impact Score: 6/10

*(Scored on transactional utility, not marketing effectiveness — this is not a marketing email.)*

Does its job. Doesn't upsell, doesn't clutter, doesn't confuse. The only thing keeping it from a higher score is that it's a pure utility send — no secondary value delivered to me as a Nike Member, no soft nudge toward any product. Fine for what it is.

---

## 3. What's Working

- **The code is huge and readable.** `94241126` in big bold text — I can read it without squinting or pinching to zoom on my phone. That matters to me.
- **The expiration notice is bolded.** "This code expires after 15 minutes." stands out clearly. I'll know to move fast.
- **No clutter.** No product carousels, no "while you're here" banners, no aggressive upsells. Just the thing I came for.
- **Clean layout on mobile.** Looks like it renders well at phone width. Easy to copy or reference the code.

---

## 4. What's Weak

- **"Your Nike Member profile code" is a weird heading.** I would've expected something simpler like "Your verification code." The word "profile" threw me for a second — made me wonder if something was being changed on my account without my asking.
- **No Nike.com link context.** The footer just says "Nike.com" as a header but it's not clear why it's there — isn't a button, isn't a link as far as I can see. Feels vestigial.
- **No hint of what triggered this.** Was I logging in? Updating my email? It says "the code you requested" but doesn't say what for. For an older guy like me who occasionally gets phishing emails pretending to be brands I use, I'd appreciate one line saying "You requested this while signing into Nike.com."

---

## 5. Recommendations

- Add one short context line: "You requested this code to sign in to your Nike Member account." Helps me trust it's legit.
- Consider a subtle footer nudge: "While you're in, check out what's new in Men's." Low pressure, doesn't clutter the utility message, but gives Nike a soft moment.
- The "Nike.com" footer header could link directly to the site — wasted space right now.

---

## 6. Bottom Line

Does exactly what it needs to do, nothing more. I appreciated that it didn't try to sell me something when I was mid-login. This is a trust-building email by nature — keep it simple, but add one sentence of context so I'm not second-guessing whether it's a phish.

---

## 7. Subject Line Analysis

- **Subject:** `Here's your one-time code`
- **Length:** 26 characters
- **Scores (1-10):** Clarity `9`, Curiosity `3`, Personalization `3`, Urgency `5`, Specificity `7`
- **Strengths:**
  - Crystal clear — I know exactly what's inside before I open it
  - Short enough to fully render in any inbox preview on my phone
- **Weaknesses:**
  - Zero personalization — could be from any brand, any account
  - No urgency signal — the expiration window isn't hinted at
- **Alt A:** `Your Nike sign-in code (expires in 15 min)`
- **Alt B:** `Nike Member code: use it now`

---

## 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)`
- **Length:** N/A
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - *(none to speak of — no intentional preheader present)*
- **Weaknesses:**
  - Missing a preheader entirely — inbox likely showed filler text or the first line of body copy
  - A wasted opportunity to reinforce urgency before I even open
- **Alt A:** `94241126 — expires in 15 minutes. Open now.`
- **Alt B:** `Your Nike Member login code is ready — act fast, it expires soon.`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `9/10`
- **Rationale:** If I'm mid-login on Nike's site and I get an email saying "Here's your one-time code," I'm opening it immediately — that's the whole point. This is a pull email, not push. I opened it because I needed to.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `1/10`
- **Rationale:** There's nothing to click. The code is what I came for, I copy it, I go back to the Nike site. I'm not clicking anything in this email, and I wouldn't expect to. That's appropriate for a transactional send.

---

## 11. Evidence

- **Overall purpose:** Transactional — deliver a one-time verification code to authenticate a Nike Member login or profile action
- **Hero / primary value proposition:** The 8-digit code `94241126` in large bold type, centered, immediately below the heading
- **Membership / benefits section:** None — the heading references "Nike Member profile" but there's no benefits content
- **Product discoverability / recommendation modules:** None present
- **Utility / secondary modules:** Expiration warning ("expires after 15 minutes"), ignore instruction if not requested, footer with Nike.com label, Privacy Policy and Get Help links
- **Bugs / friction / clarity issues:** No visible broken images or layout problems; "Nike.com" footer label appears non-interactive (no visible link styling), which could be confusing

---

## Technical Audit

## Technical Audit — Nike OTP Email

---

### 1. Technical Summary

This is a transactional authentication email (one-time code delivery), not a promotional send, which changes the compliance calculus on several QA flags. Two hard failures — no plain-text MIME part and an HTTP-only tracking pixel — are genuine issues regardless of email type.

---

### 2. Link & Tracking Issues

**[FAIL] Open-tracking pixel uses HTTP, not HTTPS**
- `src: http://url3775.click.notifications.nike.com/wf/open?upn=u001.7nMkDPHKJYuSqu77FUwRx5aYih1RC1JYvx63s2buCgMMW5g7nz-2Btdjq2D`
- Gmail, Outlook.com, and Apple Mail proxy or block non-HTTPS image loads. This pixel will be blocked or silently proxied, making open-rate data unreliable.
- Fix: enforce HTTPS on the tracking endpoint at the ESP level.

**[WARN] Tracking pixel has no `alt` attribute**
- Standard for a 1×1 pixel, but some strict clients will render a broken-image placeholder. Add `alt=""` explicitly to suppress it.

No other links visible in the truncated source to audit for UTM or redirect correctness.

---

### 3. Rendering & Accessibility

- **No plain-text MIME part** (see Deliverability below — this is the same root issue).
- Custom font (`Nike Futura`) loaded from `https://www.nike.com/assets/ncss/2.2/dotcom/fonts/` via `@font-face`. Most email clients (Outlook, Gmail) block remote font loading; fallback stack (`Helvetica Neue, Arial, sans-serif`) is correctly specified in footer styles. No rendering break expected, but the font will never render in ~60% of clients.
- EOT and SVG font formats included — these are dead formats (IE6–IE8, SVG fonts deprecated in all browsers). They add HTTP overhead but cause no breakage.
- XHTML 1.0 Strict DOCTYPE — legacy but industry-standard for email; no issue.
- Foundation for Email grid framework detected (`small-float-center`, `small-text-center` classes) — well-supported, no issue.

---

### 4. Personalization & Merge Tokens

Cannot fully assess from truncated source. The OTP code itself is not visible in the provided HTML fragment — no unrendered/broken merge tokens (`{{`, `%%`, `*|`) are present in the visible portion. No issues found in the visible source.

---

### 5. Compliance

**Important context:** This is a transactional email (user-initiated OTP request). CAN-SPAM §7702(2)(B) and most ISP bulk-sender policies exempt purely transactional messages from unsubscribe requirements. The three QA flags below must be interpreted against this:

| Flag | Severity in Transactional Context | Notes |
|---|---|---|
| `List-Unsubscribe` header missing | Acceptable | Required for bulk/marketing; not mandated for transactional |
| `List-Unsubscribe-Post` (RFC 8058) missing | Acceptable | Gmail/Yahoo one-click requirement applies to bulk senders only |
| No unsubscribe link in body | Acceptable | CAN-SPAM unsubscribe requirement does not apply to transactional mail |

**If any promotional content appears alongside this OTP** (e.g., product recommendations, sale banners in the footer — not visible in truncated source), the email becomes a mixed-purpose message under CAN-SPAM and all three flags become real violations.

**DKIM/SPF/DMARC:** Sending domain is `notifications.nike.com`. Authentication headers are not included in the provided source. These must be verified at the MTA level; Nike's infrastructure generally has these configured, but the AgentMail relay warning about `List-Unsubscribe` not being captured suggests header stripping may be occurring at the relay layer, which could also affect DKIM signature validity on those headers.

---

### 6. Email-to-Site Continuity

No marketing links or CTAs are visible in the truncated HTML fragment. For a pure OTP email, UTM parameters are not applicable. No issues found based on available source.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | Plain-text MIME part missing (0 chars) | Add a `text/plain` part to the multipart message. Minimum content: the OTP code and a "If you didn't request this, ignore it" disclaimer. Lack of a text part increases spam score and breaks delivery to plain-text-only clients. |
| High | HTTP tracking pixel | Switch the open-tracking endpoint to HTTPS at the ESP configuration level: `https://url3775.click.notifications.nike.com/wf/open?...` |
| Medium | AgentMail relay stripping headers | Investigate whether the relay is stripping `List-Unsubscribe` and related headers. If DKIM covers those headers and they're stripped post-signing, DKIM verification will fail at receiving MTAs. |
| Low | Tracking pixel missing `alt=""` | Add explicit empty alt to suppress broken-image indicators in strict clients. |
| Low | EOT/SVG font formats | Remove from `@font-face` declaration to reduce dead HTTP requests. Only WOFF2 and WOFF are needed. |
## Recent history

- [[2026-04-29-59-98-nike-worth-the-hype]] — 3/10 (2026-04-29)
- [[2026-04-29-did-you-forget-something]] — 6/10 (2026-04-29)
- [[2026-04-29-last-day-for-15-off]] — 4/10 (2026-04-29)

