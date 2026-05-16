---
slug: 2026-05-16-one-time-code-to-access-your-ikea-account-50168421-024c-f046-4705-
type: email
date: 2026-05-16
persona: ivar-kallax-ikea-fap6e
score: "2/10"
sender: no.reply@ikea.com
subject: One-time code to access your IKEA account.
tags: [email, score-2, sender/no-reply-ikea-com]
---
# One-time code to access your IKEA account.
**Score:** 2/10 · **Type:** Email audit · **2026-05-16**
## Executive summary

- This is a transactional one-time password (OTP) email, not a marketing email. IKEA sent a 6-digit login code — `727867` — with a 5-minute expiry. There's nothing promotional here: no offer, no product, no CTA beyond the implied "go back to where you came from and type this in." The rubric categories (open likelihood, click-through, business impact as a promo) don't really apply, but I'll score honestly against the signals that are observable.
- The email does its functional job competently. The code is large, legible, and the expiry window is stated plainly. IKEA's brand identity (logo, "Wonderful everyday," social links, footer) is present but minimal. The greeting "Hej" is a fun on-brand touch. That said, this email has exactly one job — deliver a code the user can read in under 3 seconds — and it does that.
- Treating this as a marketing send would be misleading. Scored against the rubric anyway, the numbers will be low simply because no promotional signals exist — not because the email is badly made.

## What's working

- **Code legibility is excellent** — `727867` is rendered at a very large font size, bold, instantly scannable even on a glance.
- **Expiry is stated clearly** — "valid only for 5 minutes" is in the body, giving the user urgency without manipulation.
- **Security framing is present** — "Please do not share this with anyone" is visible and appropriately positioned directly under the code.
- **No render bugs** — layout is clean, logo loads, footer links render, social icons display correctly.
- **IKEA brand is unmistakable** — dual logo placement, "Hej" greeting, and tagline all reinforce legitimacy.

## What's weak

- **No personalization whatsoever** — the greeting is "Hej," not the recipient's name; a transactional email like this should at minimum include the account email or first name.
- **No context for why the code was requested** — a "If you didn't request this, ignore this email" safety line is missing; this is a security best practice and user trust signal.
- **Footer is heavier than it needs to be** — social icons and "local store" link are noise in an OTP email; they dilute the single-action clarity.
- **No device/browser context** — modern OTP emails often state where the login was attempted ("from Chrome on Mac") to help users detect unauthorized access.

## Recommendations

- 1. **Add "If you didn't request this" language** — a single sentence immediately below the code: *"If you didn't request a code, you can safely ignore this email. Your account password has not changed."* This is table stakes for any auth email.
- 2. **Personalize the greeting** — replace "Hej" with "Hej [First name]" — IKEA has this data; use it to add trust signal and reduce phishing risk.
- 3. **Add request context** — one line: *"This code was requested on [date] at [time] from [browser/OS]."* Helps users verify legitimacy without adding friction.
- 4. **Strip the footer social icons** — Pinterest, YouTube, and X icons are dead weight in a security email; they add scroll and dilute the one action needed.
- **Subject Alt A:** `Your IKEA login code: 727867 (expires in 5 min)`
- **Subject Alt B:** `727867 — your IKEA one-time code`
- **Preheader Alt A:** `Enter this code to sign in. Valid for 5 minutes — do not share it.`
- **Preheader Alt B:** `Your 6-digit code is inside. Expires soon.`

## Full review
## 1. Overview

This is a transactional one-time password (OTP) email, not a marketing email. IKEA sent a 6-digit login code — `727867` — with a 5-minute expiry. There's nothing promotional here: no offer, no product, no CTA beyond the implied "go back to where you came from and type this in." The rubric categories (open likelihood, click-through, business impact as a promo) don't really apply, but I'll score honestly against the signals that are observable.

The email does its functional job competently. The code is large, legible, and the expiry window is stated plainly. IKEA's brand identity (logo, "Wonderful everyday," social links, footer) is present but minimal. The greeting "Hej" is a fun on-brand touch. That said, this email has exactly one job — deliver a code the user can read in under 3 seconds — and it does that.

Treating this as a marketing send would be misleading. Scored against the rubric anyway, the numbers will be low simply because no promotional signals exist — not because the email is badly made.

---

## 2. What worked

- **Code legibility is excellent** — `727867` is rendered at a very large font size, bold, instantly scannable even on a glance.
- **Expiry is stated clearly** — "valid only for 5 minutes" is in the body, giving the user urgency without manipulation.
- **Security framing is present** — "Please do not share this with anyone" is visible and appropriately positioned directly under the code.
- **No render bugs** — layout is clean, logo loads, footer links render, social icons display correctly.
- **IKEA brand is unmistakable** — dual logo placement, "Hej" greeting, and tagline all reinforce legitimacy.

---

## 3. What didn't

- **No personalization whatsoever** — the greeting is "Hej," not the recipient's name; a transactional email like this should at minimum include the account email or first name.
- **No context for why the code was requested** — a "If you didn't request this, ignore this email" safety line is missing; this is a security best practice and user trust signal.
- **Footer is heavier than it needs to be** — social icons and "local store" link are noise in an OTP email; they dilute the single-action clarity.
- **No device/browser context** — modern OTP emails often state where the login was attempted ("from Chrome on Mac") to help users detect unauthorized access.

---

## 4. What I'd change

1. **Add "If you didn't request this" language** — a single sentence immediately below the code: *"If you didn't request a code, you can safely ignore this email. Your account password has not changed."* This is table stakes for any auth email.
2. **Personalize the greeting** — replace "Hej" with "Hej [First name]" — IKEA has this data; use it to add trust signal and reduce phishing risk.
3. **Add request context** — one line: *"This code was requested on [date] at [time] from [browser/OS]."* Helps users verify legitimacy without adding friction.
4. **Strip the footer social icons** — Pinterest, YouTube, and X icons are dead weight in a security email; they add scroll and dilute the one action needed.

- **Subject Alt A:** `Your IKEA login code: 727867 (expires in 5 min)`
- **Subject Alt B:** `727867 — your IKEA one-time code`
- **Preheader Alt A:** `Enter this code to sign in. Valid for 5 minutes — do not share it.`
- **Preheader Alt B:** `Your 6-digit code is inside. Expires soon.`

---

## 5. Business Impact Score (1-10)

**2/10**

- Sender is recognizable (IKEA, no.reply@ikea.com) ✓
- No render bugs ✓

All other criteria are inapplicable: no offer, no promo CTA, no demographic targeting, no loyalty signals, no seasonal hook. This is a functional OTP — scored for what it is.

---

## 6. Open Likelihood (persona-grounded)

- **Score:** 5/10
- **Signals counted:** Sender display name is recognizable; subject is concrete ("One-time code"); subject is under ~50 chars; no spam signals; time-bounded urgency (5-minute expiry implied by subject context).
- **Rationale:** The subject line is utilitarian and clear — if you triggered this flow, you open immediately. If you didn't, the subject still reads as credible and non-spammy. Loses points because it's purely transactional with zero curiosity or personalization signals.

---

## 7. Click-Through Likelihood (persona-grounded)

- **Score:** 2/10
- **Signals counted:** No render bugs / no friction; brand voice is consistent and trusted.
- **Rationale:** There is no CTA to click — the email's job is to be read, not clicked. The user reads the code and returns to the login screen. The score is low by definition, not by failure.

---

## 8. Subject

- **Subject:** `One-time code to access your IKEA account.`
- **Length:** 41 characters
- **Scores (1-10):** Clarity `9`, Curiosity `2`, Personalization `1`, Urgency `4`, Specificity `7`

---

## 9. Preview

- **Preview:** `(none / leaking junk)` — no visible preheader text was set; inbox clients would pull the first body text ("Hej") or fall back to system-generated junk.
- **Length:** N/A
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`

---

## Technical Audit

## Technical Audit — IKEA One-Time Code Email

### 1. Technical Summary

Transactional OTP email with solid responsive scaffolding and MSO/VML compatibility. Two confirmed rendering bugs (malformed `Content-Type` meta and broken relative font paths) and unresolved authentication-header visibility through the AgentMail relay.

---

### 2. Link & Tracking Issues

**No issues found.** Transactional OTP emails correctly carry no marketing tracking links or UTM parameters. The truncated source shows no analytics pixels or redirect-wrapped URLs.

---

### 3. Rendering & Accessibility

**[FAIL] Malformed `Content-Type` meta tag — missing semicolon**

```html
<meta http-equiv="Content-Type" content="text/html charset=UTF-8">
```

Should be `content="text/html; charset=UTF-8"`. Without the semicolon the charset directive is invalid; some parsers will default to ASCII or Latin-1, risking mojibake on any non-ASCII characters.

**[FAIL] Relative `@font-face` paths will not resolve in email clients**

```css
@font-face {
  font-family: NotoIKEALatin;
  src: url(Longproof/Fonts/NotoIKEALatin-Regular.woff) format('woff');
}
```

There is no base URL in an email context. These paths will 404 in every client. The fallback `@font-face` block with the base64-encoded `woff2` data URI (also present in the `<style>`) is the only path that will actually load.

**[WARN] External stylesheet blocked by most clients**

```html
<link rel="stylesheet" href="https://www.ikea.com/global/assets/fonts/en/fonts.css">
```

Gmail, Outlook.com, and Apple Mail strip or block `<link rel="stylesheet">` tags. This stylesheet will not load for the majority of recipients. Styles must be inlined or in a `<style>` block.

**[PASS]** `lang="en-US"` set on `<html>`. MSO/VML namespace declarations present. Responsive media queries cover 320 px, 360 px, 480 px, and 639 px breakpoints. `a[x-apple-data-detectors]` override present.

---

### 4. Personalization & Merge Tokens

No merge token issues detectable in the truncated source. For an OTP email, the only expected dynamic field is the code itself; confirm in the full template that the token placeholder (e.g. `{{otp_code}}` or equivalent) is present and falls back gracefully if unrendered.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**[CONTEXT] Transactional email — most unsubscribe flags are expected false positives**

This is a one-time authentication code, which qualifies as a transactional message under CAN-SPAM. Transactional emails are exempt from the opt-out mechanism requirement (15 U.S.C. § 7702(17)). The QA tool's `[FAIL] No unsubscribe link found` and `List-Unsubscribe` warnings are therefore **not actionable compliance violations** for this send. No physical address is required either under the transactional exemption, though including one is a best practice.

**[WARN] Authentication-Results header not captured by AgentMail relay**

```
[WARN] Authentication-Results header not found: SPF/DKIM status unknown
```

`no.reply@ikea.com` should be covered by IKEA's published SPF record and DKIM signing. The missing header is most likely an artifact of the AgentMail relay stripping or not forwarding the header rather than an actual authentication failure. Verify by inspecting raw headers in a direct inbox (e.g. Gmail "Show original") and confirming `dkim=pass` and `spf=pass`.

---

### 6. Email-to-Site Continuity

**No issues found.** OTP emails do not require UTM-tagged landing pages. Any "go to IKEA" links in the full body should point to `ikea.com` with HTTPS; confirm those are not broken or wrapped in a tracking redirect that introduces latency on a time-sensitive code flow.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **High** | Fix `Content-Type` meta: add the missing semicolon — `content="text/html; charset=UTF-8"` |
| **High** | Remove the three relative `url(Longproof/Fonts/...)` `@font-face` declarations; they will never resolve. The existing inline base64 `woff2` block is the correct approach — keep only that. |
| **Medium** | Remove the `<link rel="stylesheet">` tag pointing to `ikea.com/global/assets/fonts/en/fonts.css`; it is blocked by all major clients and serves no function. |
| **Low** | Obtain raw headers from a delivered copy to confirm SPF/DKIM pass outside the AgentMail relay before treating the authentication warning as actionable. |
| **Low** | Add a physical mailing address to the footer as a belt-and-suspenders measure even for transactional sends — several ESPs and ISPs score it positively regardless of legal exemption. |
