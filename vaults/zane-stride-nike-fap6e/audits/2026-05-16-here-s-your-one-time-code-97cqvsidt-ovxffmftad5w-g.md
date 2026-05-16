---
slug: 2026-05-16-here-s-your-one-time-code-97cqvsidt-ovxffmftad5w-g
type: email
date: 2026-05-16
persona: zane-stride-nike-fap6e
score: "5/10"
sender: Nike
subject: "Here's your one-time code"
tags: [email, score-5, sender/nike]
---
# Here's your one-time code
**Score:** 5/10 · **Type:** Email audit · **2026-05-16**
## Executive summary

- This is the second Nike OTP email from the same date — 2026-05-16 — carrying a different code (14155270 vs the prior send). Same template, same sender, same subject line, different digits. Two verification requests in one day from the same account suggests either a failed first attempt, a session timeout, or someone testing access. Regardless of the cause, Nike's job here was to deliver a code fast and clearly. It did that.
- There is nothing to critique as a marketing email because this is not one. No offer, no CTA, no hero image, no product. The entire email exists to surface one 8-digit number in large, legible type above a 15-minute expiry warning. It accomplishes its one job without friction.
- Compared to the earlier send today, this is functionally identical. The only difference is the code value. Nike is deploying a stripped, correct transactional template — minimal chrome, no promotional contamination, no broken assets.

## What's working

- Code is immediately visible — large, bold, centered, impossible to miss
- 15-minute expiry is explicitly stated and bolded, reducing confusion
- Clean Nike-only branding (swoosh, Nike.com footer) without promotional noise
- Footer includes Privacy Policy and Get Help — standard trust signals for a transactional send
- No render bugs: layout holds, no broken images, no overlapping elements

## What's weak

- Subject line is identical to the earlier send today — a subscriber glancing at their inbox sees two "Here's your one-time code" threads from Nike with no distinguishing signal
- No "Did you request this?" secondary message — standard security hygiene that Nike omits here
- Sender address (`nike@notifications.nike.com`) is not the primary Nike address, which could cause a brief moment of phishing doubt for cautious users

## Recommendations

- 1. **Differentiate the subject when multiple OTPs fire in one session.** Two identical subjects on the same day creates inbox ambiguity. A simple addition like "Here's your new one-time code" or appending "(2nd request)" would help a user know which thread is active.
- 2. **Add a "Didn't request this? Secure your account" line** beneath the expiry notice — one sentence with a link. Industry standard for OTP emails.
- 3. **Subject Alt A:** `Your new Nike verification code`
- 4. **Subject Alt B:** `Nike code: use this one (previous expired)`
- 5. **Preheader Alt A:** `Your Nike Member profile code — expires in 15 min`
- 6. **Preheader Alt B:** `New code requested — the previous one is no longer valid`

## Full review
## 1. Overview

This is the second Nike OTP email from the same date — 2026-05-16 — carrying a different code (14155270 vs the prior send). Same template, same sender, same subject line, different digits. Two verification requests in one day from the same account suggests either a failed first attempt, a session timeout, or someone testing access. Regardless of the cause, Nike's job here was to deliver a code fast and clearly. It did that.

There is nothing to critique as a marketing email because this is not one. No offer, no CTA, no hero image, no product. The entire email exists to surface one 8-digit number in large, legible type above a 15-minute expiry warning. It accomplishes its one job without friction.

Compared to the earlier send today, this is functionally identical. The only difference is the code value. Nike is deploying a stripped, correct transactional template — minimal chrome, no promotional contamination, no broken assets.

## 2. What worked

- Code is immediately visible — large, bold, centered, impossible to miss
- 15-minute expiry is explicitly stated and bolded, reducing confusion
- Clean Nike-only branding (swoosh, Nike.com footer) without promotional noise
- Footer includes Privacy Policy and Get Help — standard trust signals for a transactional send
- No render bugs: layout holds, no broken images, no overlapping elements

## 3. What didn't

- Subject line is identical to the earlier send today — a subscriber glancing at their inbox sees two "Here's your one-time code" threads from Nike with no distinguishing signal
- No "Did you request this?" secondary message — standard security hygiene that Nike omits here
- Sender address (`nike@notifications.nike.com`) is not the primary Nike address, which could cause a brief moment of phishing doubt for cautious users

## 4. What I'd change

1. **Differentiate the subject when multiple OTPs fire in one session.** Two identical subjects on the same day creates inbox ambiguity. A simple addition like "Here's your new one-time code" or appending "(2nd request)" would help a user know which thread is active.
2. **Add a "Didn't request this? Secure your account" line** beneath the expiry notice — one sentence with a link. Industry standard for OTP emails.
3. **Subject Alt A:** `Your new Nike verification code`
4. **Subject Alt B:** `Nike code: use this one (previous expired)`
5. **Preheader Alt A:** `Your Nike Member profile code — expires in 15 min`
6. **Preheader Alt B:** `New code requested — the previous one is no longer valid`

---

## 5. Business Impact Score (1-10)

**5/10**
- Sender is a brand you recognize / are subscribed to ✓
- Visual hierarchy is clear — the eye lands on the code immediately ✓
- No render bugs ✓
- Offer feels honest — no deception, no buried conditions ✓

## 6. Open Likelihood (persona-grounded)

- **Score:** 8/10
- **Signals counted:** Sender display name recognizable, subject is concrete, preview text is real copy, preview complements (does not repeat) subject, subject under 50 chars (26), no spam signals, cadence feels right (triggered transactional — expected)
- **Rationale:** You open this because you need the code; the subject does nothing to impede that impulse. The only miss is zero personalization and no urgency signal in the subject itself.

## 7. Click-Through Likelihood (persona-grounded)

- **Score:** 4/10
- **Signals counted:** Offer is time-bounded with credible deadline (15 min, bolded), brand voice consistent and trusted, no friction (no view-in-browser gate, no broken images)
- **Rationale:** There is no CTA to click — the entire interaction is read-and-type. The score reflects what the rubric can measure, not user failure. The email does what it needs to without a click.

## 8. Subject

- **Subject:** `Here's your one-time code`
- **Length:** 26 chars
- **Scores (1-10):** Clarity `9`, Curiosity `2`, Personalization `1`, Urgency `5`, Specificity `7`

## 9. Preview

- **Preview:** `Your Nike Member profile code Here's the one-time verification code you requested:`
- **Length:** ~82 chars (inferred from visible body copy; inbox client will truncate to ~90)
- **Scores (1-10):** Complements subject `6`, Specificity `5`, Clarity `8`, Inbox-fit `6`

---

## Technical Audit

## Technical Audit — Nike "Here's your one-time code"

### 1. Technical Summary

This is a transactional OTP email built on a table-based XHTML 1.0 Strict foundation with Foundation for Emails responsive grid. The automated QA pipeline flagged two hard failures and three warnings, with the most critical being a missing unsubscribe mechanism and absent plain-text fallback.

---

### 2. Link & Tracking Issues

**Pixel tracker uses HTTP (not HTTPS)**
- `src: http://url3775.click.notifications.nike.com/wf/open?upn=u001.unHJZyh6RwckUCFFVJt0ZOu1UjslD60fxdUH5dKFep5Yfpn0qOh5L9pX6Nb`
- Modern clients (Gmail, Apple Mail) block mixed-content HTTP resources. The open-tracking pixel will be silently suppressed in most environments, making open-rate data unreliable for this send.

**No issues found** with click-tracking link structure (truncated HTML did not expose broken hrefs).

---

### 3. Rendering & Accessibility

**Missing alt text on tracking pixel**
- The open-pixel `<img>` has no `alt` attribute. While a blank `alt=""` is acceptable for decorative/tracking pixels, its absence causes screen readers to announce the raw URL string.
- Evidence: QA flag on `http://url3775.click.notifications.nike.com/wf/open?upn=…`

**Custom web font via `@font-face`**
- Nike Futura is loaded from `https://www.nike.com/assets/ncss/2.2/dotcom/fonts/`. Outlook (Windows) and most mobile clients will ignore this entirely and fall back to the stack's default. No fallback font-family is declared in the truncated source — verify a safe web-safe fallback (`Arial`, `Helvetica`) is present in the inline `font-family` declarations.

**No issues found** with responsive grid implementation or VML conditionals (standard Foundation for Emails patterns observed).

---

### 4. Personalization & Merge Tokens

No unrendered merge tokens (e.g., `{{first_name}}`, `%7C*TO_FNAME*%7C`) visible in the truncated source. OTP code rendering cannot be confirmed from the truncated HTML — no issues flagged but full source should be verified to ensure the code block has a fallback for null/empty token state.

---

### 5. Compliance

**[FAIL] No unsubscribe link detected in body**
- CAN-SPAM §5(a)(3) requires a clear, functioning opt-out mechanism in every commercial email. The QA scanner found none. Even for transactional OTP emails, if any commercial content exists alongside the code, this is a violation.
- If this is purely transactional (OTP only, zero marketing content), CAN-SPAM exempts it — but the classification must be confirmed. If any promotional copy is present in the untruncated source, the failure stands.

**[WARN] List-Unsubscribe and List-Unsubscribe-Post headers absent**
- The AgentMail relay may not be forwarding these headers. Without `List-Unsubscribe-Post` (RFC 8058), Gmail and Apple Mail cannot render their native one-click unsubscribe UI. This increases spam complaint risk even for transactional mail.

**[WARN] Authentication-Results header not found**
- SPF/DKIM/DMARC pass/fail status is unknown due to relay header stripping. Sending domain `notifications.nike.com` almost certainly has DMARC enforcement, but confirmation requires raw header inspection outside the AgentMail relay.

---

### 6. Email-to-Site Continuity

No action CTAs are visible in the truncated source beyond the OTP code itself, which is expected for this email type. No UTM parameters to audit. If the email contains any "Shop Now" or secondary links in the untruncated footer (common in Nike transactional templates), those should be verified for `utm_source=email&utm_medium=transactional` tagging.

---

### 7. Recommendations

| Priority | Issue | Action |
|----------|-------|--------|
| **High** | HTTP open-tracking pixel | Update pixel URL to HTTPS at the ESP/template level |
| **High** | Missing plain-text fallback (0 chars) | Generate a minimal text/plain MIME part with the OTP code — required for deliverability and accessibility |
| **Medium** | Unsubscribe link absent | Confirm transactional classification; add opt-out if any commercial content exists |
| **Medium** | List-Unsubscribe headers stripped by relay | Configure AgentMail to pass through `List-Unsubscribe` and `List-Unsubscribe-Post` headers from the upstream ESP |
| **Low** | Tracking pixel alt attribute | Set `alt=""` explicitly to suppress screen reader announcement |
| **Low** | Font fallback verification | Confirm inline `font-family` stacks include `Arial` or `Helvetica` after `Nike Futura` |
## Recent history

- [[2026-05-16-here-s-your-one-time-code-lqbjdn-itycjcnne4jgfoa-g]] — 2/10 (2026-05-16)
- [[2026-05-16-here-s-your-one-time-code]] — 5/10 (2026-05-16)

