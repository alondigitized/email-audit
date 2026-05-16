---
slug: 2026-05-16-one-time-code-to-access-your-ikea-account
type: email
date: 2026-05-16
persona: ivar-kallax-ikea-fap6e
score: "4/10"
sender: no.reply@ikea.com
subject: One-time code to access your IKEA account.
tags: [email, score-4, sender/no-reply-ikea-com]
---
# One-time code to access your IKEA account.
**Score:** 4/10 · **Type:** Email audit · **2026-05-16**
## Executive summary

- This is a transactional one-time password (OTP) email, not a marketing send. Applying a marketing rubric to it is inherently a mismatch — the email does exactly what it needs to do: surface a 6-digit code prominently and communicate the 5-minute expiry. There's no offer, no CTA, no personalization beyond the brand. IKEA's "Hej" opener and "Wonderful everyday" tagline are on-brand, which is a nice touch for a typically sterile email type.
- The email renders cleanly with no visible bugs. The OTP — **727867** — is the largest element on the page by a wide margin, and the expiry warning is placed immediately below. That hierarchy is correct for this email type.
- Judged as a transactional email: it passes. Judged as a marketing vehicle: it contributes nothing. The footer links to social channels and "local store" are a missed opportunity for a small soft upsell, but they're unobtrusive.

## What's working

- OTP code (`727867`) is large, bold, and impossible to miss — correct visual priority for this email type.
- 5-minute expiry warning is placed directly below the code, where the eye naturally goes next.
- "Hej" opener maintains IKEA's brand voice without feeling forced.
- Clean render — no broken images, no layout issues, no overlapping elements.
- Footer is minimal and complete (social, legal links, sender attribution).

## What's weak

- No name personalization on the greeting — "Hej [Name]" would take one merge tag and reinforce legitimacy.
- Subject line doesn't surface urgency ("expires in 5 minutes") — a user who sees this in a notification banner has no idea they need to act fast.
- Footer social links and "local store" CTA are noise in a transactional context — they slightly undercut the focused, high-urgency message.
- No copy explaining *why* they received this (e.g., "You requested this to sign in to your IKEA account") — phishing awareness has made users rightfully cautious about unexpected OTPs.

## Recommendations

- 1. **Add urgency to the subject line.** "Expires in 5 min" in the subject or preheader would stop people from opening this email 10 minutes later and wondering why the code doesn't work — the single highest-friction failure mode for OTP emails.
- 2. **Add sender context in the body.** One sentence: "You requested this code to sign in to your IKEA account. If this wasn't you, you can safely ignore this email." Reduces support contacts and phishing anxiety.
- 3. **Personalize the greeting.** Replace "Hej" with "Hej [First Name]" — trivial effort, meaningfully increases perceived legitimacy.
- 4. **Suppress the social footer on transactional sends.** The Pinterest/X/YouTube icons have no place here and dilute the focused purpose.
- **Subject Alt A:** `Your IKEA sign-in code: 727867 (expires in 5 min)`
- **Subject Alt B:** `IKEA access code — valid 5 minutes`
- **Preheader Alt A:** `Enter 727867 to sign in. Code expires in 5 minutes — don't share it.`
- **Preheader Alt B:** `Your one-time code is ready. Act within 5 minutes.`

## Full review
## 1. Overview

This is a transactional one-time password (OTP) email, not a marketing send. Applying a marketing rubric to it is inherently a mismatch — the email does exactly what it needs to do: surface a 6-digit code prominently and communicate the 5-minute expiry. There's no offer, no CTA, no personalization beyond the brand. IKEA's "Hej" opener and "Wonderful everyday" tagline are on-brand, which is a nice touch for a typically sterile email type.

The email renders cleanly with no visible bugs. The OTP — **727867** — is the largest element on the page by a wide margin, and the expiry warning is placed immediately below. That hierarchy is correct for this email type.

Judged as a transactional email: it passes. Judged as a marketing vehicle: it contributes nothing. The footer links to social channels and "local store" are a missed opportunity for a small soft upsell, but they're unobtrusive.

---

## 2. What worked

- OTP code (`727867`) is large, bold, and impossible to miss — correct visual priority for this email type.
- 5-minute expiry warning is placed directly below the code, where the eye naturally goes next.
- "Hej" opener maintains IKEA's brand voice without feeling forced.
- Clean render — no broken images, no layout issues, no overlapping elements.
- Footer is minimal and complete (social, legal links, sender attribution).

---

## 3. What didn't

- No name personalization on the greeting — "Hej [Name]" would take one merge tag and reinforce legitimacy.
- Subject line doesn't surface urgency ("expires in 5 minutes") — a user who sees this in a notification banner has no idea they need to act fast.
- Footer social links and "local store" CTA are noise in a transactional context — they slightly undercut the focused, high-urgency message.
- No copy explaining *why* they received this (e.g., "You requested this to sign in to your IKEA account") — phishing awareness has made users rightfully cautious about unexpected OTPs.

---

## 4. What I'd change

1. **Add urgency to the subject line.** "Expires in 5 min" in the subject or preheader would stop people from opening this email 10 minutes later and wondering why the code doesn't work — the single highest-friction failure mode for OTP emails.
2. **Add sender context in the body.** One sentence: "You requested this code to sign in to your IKEA account. If this wasn't you, you can safely ignore this email." Reduces support contacts and phishing anxiety.
3. **Personalize the greeting.** Replace "Hej" with "Hej [First Name]" — trivial effort, meaningfully increases perceived legitimacy.
4. **Suppress the social footer on transactional sends.** The Pinterest/X/YouTube icons have no place here and dilute the focused purpose.

- **Subject Alt A:** `Your IKEA sign-in code: 727867 (expires in 5 min)`
- **Subject Alt B:** `IKEA access code — valid 5 minutes`
- **Preheader Alt A:** `Enter 727867 to sign in. Code expires in 5 minutes — don't share it.`
- **Preheader Alt B:** `Your one-time code is ready. Act within 5 minutes.`

---

## 5. Business Impact Score (1-10)

**4/10**

- Sender is a brand you recognize / are subscribed to ✓
- Visual hierarchy is clear — the eye lands on the offer/hero first ✓ (OTP code dominates)
- No render bugs ✓

*(All other criteria are inapplicable — no offer, no marketing CTA, no demographic targeting, no campaign context.)*

---

## 6. Open Likelihood (persona-grounded)

- **Score:** 7/10
- **Signals counted:** Sender display name is recognizable; Subject is concrete; Subject is relevant to persona's focus area (triggered by account access); Subject is under ~50 chars (43 chars); No spam signals; Cadence feels right (one-time transactional).
- **Rationale:** The subject is unambiguous and the sender is trusted — a user who requested this code will open immediately. The missing point is urgency in the subject/preheader; a user who glances at their lock screen and doesn't open immediately has no signal that the code expires.

---

## 7. Click-Through Likelihood (persona-grounded)

- **Score:** 5/10
- **Signals counted:** Hero content (OTP code) is visible without scrolling; Offer is time-bounded with credible deadline (5 minutes); Brand voice is consistent; No friction — code is presented directly, no extra steps required.
- **Rationale:** There's nothing to click in a meaningful marketing sense — the user copies the code and returns to the app. The score reflects functional usability, not marketing effectiveness. The absence of a "copy code" button (common in modern OTP emails) is a minor friction point.

---

## 8. Subject

- **Subject:** `One-time code to access your IKEA account.`
- **Length:** 43 chars
- **Scores (1-10):** Clarity `9`, Curiosity `2`, Personalization `2`, Urgency `3`, Specificity `8`

---

## 9. Preview

- **Preview:** `(none / leaking junk)` — preview text is not visible in the webview render; cannot evaluate inbox display.
- **Length:** n/a
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`

*(Scored at floor because the preheader cannot be confirmed as intentional copy — and the biggest win available to this email is adding an urgency-bearing preheader, which is currently absent.)*

---

## Technical Audit

## Technical Audit — IKEA One-Time Code Email

### 1. Technical Summary

This is a transactional OTP email, not a promotional campaign — several QA FAIL/WARN flags are misclassified because CAN-SPAM's commercial email requirements do not apply to purely transactional messages. The primary technical issues are broken relative font paths and missing DKIM/SPF verification data.

---

### 2. Link & Tracking Issues

**No issues found** in the visible source for tracking pixels or click URLs (HTML is truncated before body links appear). No UTM parameters are expected in a transactional OTP email.

**Issue — External CSS blocked in many clients:**
`<link rel="stylesheet" href="https://www.ikea.com/global/assets/fonts/en/fonts.css">`
Gmail, Apple Mail, and several corporate clients strip `<link>` tags. If this stylesheet carries layout-critical rules, they will silently drop.

---

### 3. Rendering & Accessibility

**FAIL — Relative font paths will 404 in all email clients:**
```css
@font-face {
  src: url(Longproof/Fonts/NotoIKEALatin-Regular.woff) format('woff');
}
```
Relative URLs have no base in an email context. Every `NotoIKEALatin-*` variant (Regular, Bold, Italic, BoldItalic) shares this defect. The email falls back to system fonts silently, but the broken requests add load overhead. These must be absolute URLs or replaced by the base64 inline variant already present for `Noto IKEA`.

**Note — Two font-loading strategies in conflict:** The `@font-face` block uses relative `.woff` paths (broken), while `Noto IKEA` is loaded via a base64 `data:font/woff2` URI (valid). The inline approach should be applied consistently or the relative declarations removed entirely.

**No issues found** on `lang="en-US"` declaration, VML namespace declarations for Outlook, `format-detection` meta, or responsive breakpoints (`max-width: 639px`, `480px`, `360px`, `320px`).

---

### 4. Personalization & Merge Tokens

Cannot fully assess from truncated source. Expected token: the OTP code itself. No dangling `{{` / `%%` / `{%` merge tags visible in the provided excerpt.

---

### 5. Compliance

**CAN-SPAM classification: transactional — most flags do not apply.**
A one-time authentication code is a transactional/relationship message under 15 U.S.C. § 7702(17). The opt-out link requirement and physical address requirement apply to *commercial* emails. The QA tool's FAIL on "no unsubscribe link" is a false positive for this email type.

**WARN — Authentication-Results header absent (QA confirmed):**
SPF and DKIM pass/fail status is unknown due to AgentMail relay not capturing the header. This is the one deliverability-relevant flag here: if DKIM is not signing from `no.reply@ikea.com`, inbox placement will degrade and phishing filters may flag it. This needs verification at the MTA level, not in the HTML.

**WARN — List-Unsubscribe / RFC 8058 headers absent:**
Not required for transactional email, but Gmail and Yahoo now surface one-click unsubscribe for any high-volume sender regardless of email type. Including a `List-Unsubscribe: <mailto:...>` pointing to a "stop sending me these OTPs" preference is low-risk and improves sender reputation signals.

---

### 6. Email-to-Site Continuity

Not applicable. OTP emails should not carry UTM parameters; any "sign in" deep link would be generated server-side with the token. No issues found.

---

### 7. Recommendations

| Priority | Issue | Action |
|----------|-------|--------|
| High | Relative `@font-face` src paths | Replace `url(Longproof/Fonts/...)` with absolute `https://` URLs or remove the block and rely solely on the existing base64 inline variant |
| High | DKIM/SPF status unverifiable | Confirm Authentication-Results at MTA; ensure `no.reply@ikea.com` is covered by IKEA's DKIM signing policy and SPF record |
| Medium | External `<link>` stylesheet | Inline critical rules or accept graceful degradation; document which clients are expected to drop it |
| Low | List-Unsubscribe header | Add `List-Unsubscribe` and `List-Unsubscribe-Post` headers pointing to a preference center even for transactional sends — improves Gmail/Yahoo sender reputation scoring |
| Info | QA tool misconfiguration | Flag the unsubscribe FAIL and physical address WARN as transactional-email false positives; suppress or add an exception rule for OTP templates |
