---
slug: 2026-05-01-verify-your-account-you-re-almost-done
type: email
date: 2026-05-01
persona: cole-drywall-lowes-fap6e
score: "6/10"
sender: "Lowe's"
subject: "Verify Your Account: You're Almost Done"
tags: [email, score-6, sender/lowe-s]
---
# Verify Your Account: You're Almost Done
**Score:** 6/10 · **Type:** Email audit · **2026-05-01**
## Executive summary

- This is a transactional verification email, not a marketing email. It delivers a one-time code (162279) with a clear headline, minimal chrome, and zero friction. For its function — account verification — it executes cleanly. There is nothing to sell, no hierarchy to critique, and no conversion goal beyond "user enters the code." Judged as a transactional email, it's competent and complete.
- Appropriate for the task. The email does its job without embarrassing the brand. The score is not higher because there is no secondary value delivered — no brand moment, no gentle nudge toward the next step post-verification. For a transactional email this is acceptable; for a brand that could use the touchpoint, it's a missed low-effort opportunity.

## What's working

- **Clarity is immediate.** "All set, here's your code:" is conversational and removes anxiety ("am I almost done? what do I do?"). The code itself is visually isolated in a light gray box in large blue text — scannable in under a second.
- **Safety copy is present.** "If you didn't request this, you can ignore this email." — exactly right, placed below the CTA.
- **Minimal chrome.** No distracting promotions, no hero image, no nav bar. The signal-to-noise ratio is excellent for a transactional flow.
- **Legal footer is clean.** Business address, trademark notice, and privacy statement are all present, which is table stakes for compliance but executed without visual clutter.

## What's weak

- **No next-step guidance.** After entering the code, what happens? The email doesn't tell the user where to go back to (website tab, app, specific page). This creates a minor "now what?" moment.
- **No brand warmth.** This is a zero-investment design. The Lowe's brand — home improvement, DIY confidence — is entirely absent beyond the logo. One sentence ("You're all set to start saving on your next project") would add personality at zero cost.
- **Code is not copyable by design.** Rendering the code as styled text inside a box is fine, but there's no "copy" affordance and no "click here to verify" button. Some users — especially mobile — would benefit from a direct verify link.
- **Subject line and email headline are slightly misaligned.** Subject says "You're Almost Done"; email says "All set, here's your code." These are close enough not to cause confusion, but "almost done" sets a different expectation than "all set."

## Recommendations

- 1. **Add a verify button** alongside the code. Not instead of it — some users prefer typing, but a deep link to the verification page removes friction for mobile users.
- 2. **Add one warm sentence** post-code acknowledging what the user is unlocking ("You're verified — welcome to your Lowe's account").
- 3. **Align subject to headline.** Either change the subject to "All set — here's your verification code" or change the headline to "You're almost done — here's your code." Pick one framing and be consistent.
- 1. **Unsubscribe audit (priority):** Confirm with legal whether this email qualifies as purely transactional. If any doubt, add a footer unsubscribe link. Either way, add `List-Unsubscribe` and `List-Unsubscribe-Post` headers at the ESP level to satisfy Gmail/Yahoo bulk sender requirements.
- 2. **Fix the nested DOCTYPE:** Move the custom code module content out of the nested `<html>` wrapper — strip the inner `<!DOCTYPE>`, `<html>`, `<head>`, and `<body>` tags; content should live as bare HTML inside the `<td>`.
- 3. **Fix `font-color` → `color`** on the `<a>` element to correctly suppress the blue link style.
- 4. **Add `alt` text** to the Lowe's logo (`alt="Lowe's"`) and `alt=""` to the tracking pixel.
- 5. **Decode and verify the SendGrid click-tracking URL** to confirm it resolves to `lowes.com` with UTM parameters applied.
- 6. **Remove `maximum-scale=1`** from the viewport meta tag, or replace with `viewport-fit=cover` only, to restore user zoom ability (WCAG 1.4.4).
- 7. **Authentication header capture:** Verify AgentMail relay is forwarding `Authentication-Results` (SPF/DKIM) so deliverability monitoring has a signal to work with.

## Full review
## Email Review: Lowe's Account Verification

---

### 1. Executive Summary

This is a transactional verification email, not a marketing email. It delivers a one-time code (162279) with a clear headline, minimal chrome, and zero friction. For its function — account verification — it executes cleanly. There is nothing to sell, no hierarchy to critique, and no conversion goal beyond "user enters the code." Judged as a transactional email, it's competent and complete.

---

### 2. Business Impact Score: 6/10

Appropriate for the task. The email does its job without embarrassing the brand. The score is not higher because there is no secondary value delivered — no brand moment, no gentle nudge toward the next step post-verification. For a transactional email this is acceptable; for a brand that could use the touchpoint, it's a missed low-effort opportunity.

---

### 3. What's Working

- **Clarity is immediate.** "All set, here's your code:" is conversational and removes anxiety ("am I almost done? what do I do?"). The code itself is visually isolated in a light gray box in large blue text — scannable in under a second.
- **Safety copy is present.** "If you didn't request this, you can ignore this email." — exactly right, placed below the CTA.
- **Minimal chrome.** No distracting promotions, no hero image, no nav bar. The signal-to-noise ratio is excellent for a transactional flow.
- **Legal footer is clean.** Business address, trademark notice, and privacy statement are all present, which is table stakes for compliance but executed without visual clutter.

---

### 4. What's Weak

- **No next-step guidance.** After entering the code, what happens? The email doesn't tell the user where to go back to (website tab, app, specific page). This creates a minor "now what?" moment.
- **No brand warmth.** This is a zero-investment design. The Lowe's brand — home improvement, DIY confidence — is entirely absent beyond the logo. One sentence ("You're all set to start saving on your next project") would add personality at zero cost.
- **Code is not copyable by design.** Rendering the code as styled text inside a box is fine, but there's no "copy" affordance and no "click here to verify" button. Some users — especially mobile — would benefit from a direct verify link.
- **Subject line and email headline are slightly misaligned.** Subject says "You're Almost Done"; email says "All set, here's your code." These are close enough not to cause confusion, but "almost done" sets a different expectation than "all set."

---

### 5. Recommendations

1. **Add a verify button** alongside the code. Not instead of it — some users prefer typing, but a deep link to the verification page removes friction for mobile users.
2. **Add one warm sentence** post-code acknowledging what the user is unlocking ("You're verified — welcome to your Lowe's account").
3. **Align subject to headline.** Either change the subject to "All set — here's your verification code" or change the headline to "You're almost done — here's your code." Pick one framing and be consistent.

---

### 6. Bottom Line

Functional transactional email that does its job without getting in the way. The only material improvement is adding a verify button for mobile users. Everything else is polish.

---

### 7. Subject Line Analysis

- **Subject:** `Verify Your Account: You're Almost Done`
- **Length:** 38 characters
- **Scores (1-10):** Clarity `8`, Curiosity `3`, Personalization `2`, Urgency `5`, Specificity `7`
- **Strengths:**
  - Clear two-part structure — action + progress cue — tells the user exactly where they are in a flow
  - "Almost Done" reduces drop-off anxiety; it signals a short remaining step
- **Weaknesses:**
  - Zero personalization and zero curiosity; reads like a system notification, not a human message
  - "Verify Your Account" is boilerplate — nearly identical to every other verification email in every inbox
- **Alt A:** `Your Lowe's code is waiting — one step left`
- **Alt B:** `One quick step to finish setting up your Lowe's account`

---

### 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — no intentional preheader visible; inbox would fall through to body text ("All set, here's your code:" or the code itself)
- **Length:** N/A
- **Scores (1-10):** Complements subject `N/A`, Specificity `1`, Clarity `1`, Inbox-fit `2`
- **Strengths:**
  - Body text that leaks ("All set, here's your code:") is at least coherent and not raw HTML
- **Weaknesses:**
  - No intentional preheader means the inbox preview is random body text — a missed chance to reinforce trust ("Your verification code is inside — expires soon")
  - Leaking the code itself into the preview pane is a minor security/privacy concern on shared or preview-visible devices
- **Alt A:** `Your one-time verification code is inside — takes 30 seconds`
- **Alt B:** `Enter this code on Lowe's to finish setting up your account`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `9/10`
- **Rationale:** I just created an account and am actively waiting for this email — the subject line "Verify Your Account: You're Almost Done" is the expected trigger. Sender recognition (Lowe's) plus the verification context makes this a near-certain open; the only reason it's not 10 is that I might open it slightly late if distracted mid-flow.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `3/10`
- **Rationale:** There is no clickable CTA — just a code to manually copy and a privacy statement link. I'll read the code, tab back to the browser, and type it in. The email served its function without requiring a click inside the email itself, so "click-through" as a metric doesn't meaningfully apply here.

---

### 11. Evidence

- **Overall purpose:** Transactional OTP/verification email triggered by account creation or login.
- **Hero / primary value proposition:** The verification code (162279) rendered large in a gray box with blue numerals — immediately scannable.
- **Membership / benefits section:** None present.
- **Product discoverability / recommendation modules:** None present.
- **Utility / secondary modules:** Safety copy ("If you didn't request this, you can ignore this email") and a standard legal footer with privacy statement link, company address, and trademark notice.
- **Bugs / friction / clarity issues:** No visible rendering bugs. The only friction is the absence of a verify button for mobile users who would prefer not to manually transcribe a six-digit code across apps.

---

## Technical Audit

## Technical Audit — Lowe's "Verify Your Account" Email

### 1. Technical Summary

Transactional verification email sent via SendGrid, relayed through AgentMail. Critical CAN-SPAM compliance failure (no unsubscribe mechanism) and missing authentication header capture are the primary issues; the rest are minor accessibility and inline-HTML hygiene problems.

---

### 2. Link & Tracking Issues

- **Nested `<!DOCTYPE>` inside `<td>`** — the custom code module at `data-muid="uVY3pW1ehAzD8Wfd8Vp6WF"` opens a second `<!DOCTYPE html><html><head>` block inside a table cell. This is invalid HTML and will be silently dropped or cause parser tree corruption in strict renderers (Outlook, older Samsung Mail).
- **Redirect chain on CTA link** — the "Thank you for your business" href resolves through `https://u17155529.ct.sendgrid.net/ls/click?upn=...`. Destination URL is truncated in the source; the final landing page URL and UTM state cannot be verified. See §6.
- **Tracking pixel** — `https://u17155529.ct.sendgrid.net/wf/open?upn=...` is present; this is expected SendGrid open-tracking. No issue beyond the missing `alt` attribute (§3).

---

### 3. Rendering & Accessibility

| Issue | Evidence |
|---|---|
| Lowe's logo `<img>` has no `alt` attribute | `src: https://image.e.lowes.com/lib/fe9515707364027471/m/59/14f6b444...png` — QA WARN |
| Tracking pixel `<img>` has no `alt=""` | `src: https://u17155529.ct.sendgrid.net/wf/open?upn=...` — QA WARN; should be `alt=""` to silence screen readers |
| `<h1>` / `<h2>` / `<h5>` inside a `<td>` within a nested-DOCTYPE block | Heading hierarchy is rendered inside malformed HTML; heading level jumps from `<h2>` to `<h5>`, skipping `<h3>`/`<h4>` |
| `font-color` is not a valid CSS property | `<a style="font-color: #000000; ...">` — should be `color`; link will render as inherited blue (`#1188E6`) instead of black |
| `<center>` tag used | Deprecated HTML4 element used in three places; replaced by `text-align:center` in modern renderers but harmless in practice |
| `max-width:1, minimum-scale:1, maximum-scale=1` on viewport | Locks zoom on mobile, which is an accessibility anti-pattern (WCAG 1.4.4) |

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens detected. The verification code (`162279`) appears to be a static value correctly injected at send time. No `{{` / `}}` or `%`-style placeholder leakage visible in the truncated source.

---

### 5. Compliance (CAN-SPAM / RFC 8058)

| Check | Result | Evidence |
|---|---|---|
| Unsubscribe link in body | **FAIL** | QA: `No unsubscribe link found in body` — CAN-SPAM §5(a)(3) requires a visible opt-out mechanism in all commercial email |
| `List-Unsubscribe` header | **WARN** | Not captured by AgentMail relay — may be present upstream but not surfaced |
| `List-Unsubscribe-Post` (RFC 8058) | **WARN** | Not found — one-click unsubscribe (required by Gmail/Yahoo bulk sender policy for >5k/day senders) may not function |
| Physical mailing address | Cannot confirm — body is truncated; no address visible in the captured HTML |

**Note:** Transactional verification emails are often exempt from CAN-SPAM opt-out requirements if they contain no commercial content beyond the transactional trigger. This email appears to be purely transactional, so the `FAIL` from the automated checker may be a false positive. Confirm with legal/compliance whether "Thank you for your business" copy is sufficient to classify it as commercial.

---

### 6. Email-to-Site Continuity

The single actionable link (`https://u17155529.ct.sendgrid.net/ls/click?upn=...`) is truncated in the captured source — the final destination URL is unverifiable. Specifically:

- UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`) cannot be confirmed present or absent on the final URL.
- The `upn=` payload is base64/URL-encoded; it should be decoded and audited to confirm it resolves to `lowes.com` (not a third-party domain), and that UTM tagging is applied.

No issues found with the verification code display itself — it is rendered inline as static text, no redirect required.

---

### 7. Recommendations

1. **Unsubscribe audit (priority):** Confirm with legal whether this email qualifies as purely transactional. If any doubt, add a footer unsubscribe link. Either way, add `List-Unsubscribe` and `List-Unsubscribe-Post` headers at the ESP level to satisfy Gmail/Yahoo bulk sender requirements.
2. **Fix the nested DOCTYPE:** Move the custom code module content out of the nested `<html>` wrapper — strip the inner `<!DOCTYPE>`, `<html>`, `<head>`, and `<body>` tags; content should live as bare HTML inside the `<td>`.
3. **Fix `font-color` → `color`** on the `<a>` element to correctly suppress the blue link style.
4. **Add `alt` text** to the Lowe's logo (`alt="Lowe's"`) and `alt=""` to the tracking pixel.
5. **Decode and verify the SendGrid click-tracking URL** to confirm it resolves to `lowes.com` with UTM parameters applied.
6. **Remove `maximum-scale=1`** from the viewport meta tag, or replace with `viewport-fit=cover` only, to restore user zoom ability (WCAG 1.4.4).
7. **Authentication header capture:** Verify AgentMail relay is forwarding `Authentication-Results` (SPF/DKIM) so deliverability monitoring has a signal to work with.
