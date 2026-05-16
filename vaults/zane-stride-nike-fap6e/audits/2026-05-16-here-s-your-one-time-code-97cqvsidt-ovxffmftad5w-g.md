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

- This is a second Nike OTP email on the same day — same subject, same template, same stripped-down design as the send audited earlier today. It's a user-triggered transactional email, not a marketing email, so the rubric scores will be structurally low: there's no offer, no CTA, no creative ambition to evaluate. The only question worth asking is whether it does its one job — deliver the code clearly and without confusion.
- It does. The code `14155270` is large, centered, and impossible to miss. The 15-minute expiry warning is bolded and appropriately placed below the code. The "ignore this email" safety copy is a good-faith inclusion. There's nothing broken.
- The notable signal here is cadence: two OTP emails with the identical subject line within the same day is unusual. Either the user requested the code twice (forgot the first, timed out, or hit resend), or there's an account security event worth a second look. Nike doesn't flag this possibility in the email itself, which is the one real miss for a triggered transactional template.

## What's working

- OTP code is set in large, bold type — immediately readable at a glance, even on mobile.
- Expiry window ("15 minutes") is bolded and front-of-mind directly under the code.
- "Ignore this email" safety copy is present and correctly positioned — reduces confusion if the user didn't initiate this.
- Renders cleanly — no broken images, no layout issues, no truncation.

## What's weak

- No security nudge for a second same-day OTP send — if someone else is requesting codes on your account, Nike gives no hint of it.
- Footer links to `Nike.com` but no direct link to account security or "wasn't you? secure your account" CTA.
- Preview text almost certainly repeats or leaks body copy rather than adding useful context — this is the same template limitation flagged in the prior audit.
- Subject line is identical to the earlier same-day send: impossible to distinguish the two in an inbox without checking timestamps.

## Recommendations

- 1. **Add a "Wasn't you? Secure your account" link** below the ignore copy — standard practice for OTP emails and a meaningful trust signal, especially on a repeated same-day send.
- 2. **Differentiate subject on resend** — if the user hits "resend," the subject should become `Here's your new one-time code` or include a sequence indicator so the inbox doesn't look like a dupe.
- 3. **Preheader should be functional** — something like `Expires in 15 min · Requested at [time]` adds timestamp context that would distinguish multiple codes in an inbox.
- **Subject Alt A:** `Your new Nike verification code (expires in 15 min)`
- **Subject Alt B:** `Nike Member code — resent by request`
- **Preheader Alt A:** `Expires in 15 minutes. Didn't request this? Secure your account.`
- **Preheader Alt B:** `One-time code for your Nike Member profile — expires soon.`

## Full review
## 1. Overview

This is a second Nike OTP email on the same day — same subject, same template, same stripped-down design as the send audited earlier today. It's a user-triggered transactional email, not a marketing email, so the rubric scores will be structurally low: there's no offer, no CTA, no creative ambition to evaluate. The only question worth asking is whether it does its one job — deliver the code clearly and without confusion.

It does. The code `14155270` is large, centered, and impossible to miss. The 15-minute expiry warning is bolded and appropriately placed below the code. The "ignore this email" safety copy is a good-faith inclusion. There's nothing broken.

The notable signal here is cadence: two OTP emails with the identical subject line within the same day is unusual. Either the user requested the code twice (forgot the first, timed out, or hit resend), or there's an account security event worth a second look. Nike doesn't flag this possibility in the email itself, which is the one real miss for a triggered transactional template.

---

## 2. What worked

- OTP code is set in large, bold type — immediately readable at a glance, even on mobile.
- Expiry window ("15 minutes") is bolded and front-of-mind directly under the code.
- "Ignore this email" safety copy is present and correctly positioned — reduces confusion if the user didn't initiate this.
- Renders cleanly — no broken images, no layout issues, no truncation.

---

## 3. What didn't

- No security nudge for a second same-day OTP send — if someone else is requesting codes on your account, Nike gives no hint of it.
- Footer links to `Nike.com` but no direct link to account security or "wasn't you? secure your account" CTA.
- Preview text almost certainly repeats or leaks body copy rather than adding useful context — this is the same template limitation flagged in the prior audit.
- Subject line is identical to the earlier same-day send: impossible to distinguish the two in an inbox without checking timestamps.

---

## 4. What I'd change

1. **Add a "Wasn't you? Secure your account" link** below the ignore copy — standard practice for OTP emails and a meaningful trust signal, especially on a repeated same-day send.
2. **Differentiate subject on resend** — if the user hits "resend," the subject should become `Here's your new one-time code` or include a sequence indicator so the inbox doesn't look like a dupe.
3. **Preheader should be functional** — something like `Expires in 15 min · Requested at [time]` adds timestamp context that would distinguish multiple codes in an inbox.

- **Subject Alt A:** `Your new Nike verification code (expires in 15 min)`
- **Subject Alt B:** `Nike Member code — resent by request`
- **Preheader Alt A:** `Expires in 15 minutes. Didn't request this? Secure your account.`
- **Preheader Alt B:** `One-time code for your Nike Member profile — expires soon.`

---

## 5. Business Impact Score (1-10)

**5/10**

- Sender is a brand you recognize / are subscribed to ✓
- Visual hierarchy is clear — the eye lands on the code immediately ✓
- No render bugs ✓
- Offer feels honest (no manipulation, clean transactional copy) ✓

---

## 6. Open Likelihood (persona-grounded)

- **Score:** 6/10
- **Signals counted:** Sender display name recognizable; subject is concrete; subject under ~50 chars (26 chars); no spam signals; cadence feels right (user-triggered, always the right moment).
- **Rationale:** You open this because you requested the code — not because the subject is compelling. The 26-char subject is clean and mobile-friendly, but zero curiosity or urgency lives in the line itself.

---

## 7. Click-Through Likelihood (persona-grounded)

- **Score:** 3/10
- **Signals counted:** Brand voice consistent and trusted; no friction (code immediately visible, clean layout).
- **Rationale:** There is no CTA to click — the entire job of this email is to display a number. The rubric doesn't reward what isn't there, and correctly so.

---

## 8. Subject

- **Subject:** `Here's your one-time code`
- **Length:** 26 chars
- **Scores (1-10):** Clarity `9`, Curiosity `2`, Personalization `1`, Urgency `5`, Specificity `7`

---

## 9. Preview

- **Preview:** `(not visible in render — likely leaking body copy or "View in browser" junk based on identical template from prior same-day send)`
- **Length:** unknown
- **Scores (1-10):** Complements subject `3`, Specificity `2`, Clarity `3`, Inbox-fit `2`

---

## Technical Audit

## Technical Audit — Nike One-Time Code Email

### 1. Technical Summary

Transactional OTP email using a standard XHTML 1.0 Strict / table-based template. Two hard failures — no plain-text fallback and an HTTP-only tracking pixel — plus relay-level header gaps that leave SPF/DKIM status unverifiable.

---

### 2. Link & Tracking Issues

**[FAIL] Tracking pixel served over HTTP**
```
src: http://url3775.click.notifications.nike.com/wf/open?upn=u001.unHJZyh6Rw...
```
Non-HTTPS image sources are blocked by default in Gmail, Outlook (2013+), and Apple Mail on iOS 15+. The open-tracking pixel will silently fail for most recipients.

**No other link issues detected.** Click-redirect domain (`url3775.click.notifications.nike.com`) is consistent with Nike's ESP infrastructure. No broken or mismatched hrefs visible in the truncated source.

---

### 3. Rendering & Accessibility

**[WARN] Tracking pixel missing `alt` attribute**
The open-pixel `<img>` element carries no `alt=""`. While a blank alt is appropriate for decorative/tracking images, the attribute must be explicitly present to pass accessibility validators and avoid broken-image icon rendering in image-off environments.

**No other rendering issues found.** Responsive breakpoints at 640px are correctly implemented via `@media only screen and (max-width:640px)`. VML namespaces present for Outlook. Font stack falls back gracefully if `Nike Futura` woff2 fails to load.

---

### 4. Personalization & Merge Tokens

No unrendered merge tokens visible in the truncated source (e.g., no `{{code}}`, `*|OTP|*`, or `%TOKEN%` literals). The one-time code appears to have been injected server-side prior to send. Cannot fully verify without the complete HTML, but no evidence of broken substitution.

---

### 5. Compliance (CAN-SPAM / Unsubscribe / Authentication)

**[EXEMPTION — NOT A FAILURE] No unsubscribe link in body**
QA flagged this as `[FAIL]`, but this is a purely transactional authentication email (OTP/account security). CAN-SPAM Section 7 exempts transactional messages from the opt-out requirement. The flag is a false positive for this message type; no remediation needed.

**[WARN] List-Unsubscribe and List-Unsubscribe-Post headers not captured**
```
List-Unsubscribe: <not found>
List-Unsubscribe-Post: <not found>  (RFC 8058 one-click)
```
QA notes these may be absent due to AgentMail relay not forwarding them. Absent headers on a transactional OTP are acceptable, but if this template is ever repurposed for promotional sends, both headers become mandatory for Gmail/Yahoo bulk sender compliance (Feb 2024 requirements).

**[WARN] Authentication-Results header not found**
SPF/DKIM/DMARC pass status cannot be confirmed via the relay. Sending domain is `notifications.nike.com` — Nike's production DNS almost certainly has valid records, but the audit cannot attest to delivery-time authentication from available data.

---

### 6. Email-to-Site Continuity (UTM / Landing Page)

No issues found. This is a self-contained transactional email; the OTP code is the payload and no CTA links to a landing page. UTM attribution is not applicable. The redirect domain (`click.notifications.nike.com`) is consistent with Nike's ESP click-tracking infrastructure.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | HTTP tracking pixel | Change open-pixel `src` scheme to `https://` — one character fix, eliminates blocking by all major clients |
| High | No plain-text fallback (0 chars) | Generate a plain-text part with the OTP code and basic instructions; required for deliverability to some corporate MTAs and accessibility tools |
| Low | Tracking pixel missing `alt=""` | Add `alt=""` explicitly to the `<img>` tag |
| Info | Auth header visibility via relay | Confirm SPF/DKIM/DMARC pass with a direct header capture (e.g., `Authentication-Results` in raw source from Gmail); not actionable without relay fix |
## Recent history

- [[2026-05-16-here-s-your-one-time-code-lqbjdn-itycjcnne4jgfoa-g]] — 2/10 (2026-05-16)
- [[2026-05-16-here-s-your-one-time-code]] — 5/10 (2026-05-16)

