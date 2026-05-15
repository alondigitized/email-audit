---
slug: 2026-05-15-your-temporary-password
type: email
date: 2026-05-15
persona: curt-aadvantage-aa-fap6e
score: "6/10"
sender: American Airlines
subject: Your temporary password
tags: [email, score-6, sender/american-airlines]
---
# Your temporary password
**Score:** 6/10 · **Type:** Email audit · **2026-05-15**
## Executive summary

- This is not a marketing email — it's a transactional password-reset email from American Airlines. Scoring it on a marketing rubric is an apples-to-oranges exercise, but the rubric still reveals something useful: AA executes the functional brief cleanly. The temporary password code (`DRSR-S29C-T5BW`) is large and legible, the "Log in" CTA is unambiguous, and the layout is devoid of clutter. The brand header (AA centennial logo) anchors trust immediately.
- Where it falls short for a transactional email: there's no visible expiry window on the temporary password. A recipient who gets this email hours after requesting it has no idea if the code is still valid. That's a functional gap, not a cosmetic one. The footer loads a dense block of legal text that reads like an ad-tech disclaimer dragged into a security email — incongruous and slightly trust-eroding.
- This is a competent, unremarkable transactional send. It does the job. It doesn't do more.

## What's working

- **Temporary password is the visual anchor.** The code is displayed in a high-contrast, monospace-style block — impossible to miss or misread.
- **CTA is unambiguous.** "Log in" button is clearly rendered, centered, and visually distinct from body text.
- **No render bugs.** Layout is clean — no broken images, no overlapping text, no empty fields visible.
- **Brand trust is immediate.** AA centennial logo and blue header establish sender legitimacy above the fold.
- **Fraud warning is present.** "If you didn't request this" callout with a support number is a security best practice and visible without scrolling.

## What's weak

- **No password expiry window.** The single most critical piece of information for a security email — how long the code is valid — is not visible anywhere in the render.
- **Footer is disproportionately long.** A dense paragraph of legal/trademark disclaimers dominates the bottom third of the email; it belongs in a collapsed or shorter form in a security send.
- **No personalization.** No name, no AAdvantage number, no account hint — a phishing email looks identical. A single masked email or loyalty ID would add meaningful authenticity.
- **App download badges are off-brand for context.** Promoting app downloads inside a security-action email is a mismatch — it dilutes urgency and adds noise.

## Recommendations

- 1. **Add a visible expiry statement** directly under the password code: e.g., "This code expires in 24 hours." This is the single highest-impact change — it's a security expectation, not a nice-to-have.
- 2. **Add a masked account identifier** ("Sent to a\*\*\*\*@gmail.com" or "AAdvantage #\*\*\*1234") so the recipient can self-authenticate the request without calling support.
- 3. **Remove the app download CTAs.** Save them for a welcome email or a post-login prompt; they dilute the one job this email has.
- 4. **Collapse the legal footer** to a single shorter line with a "full terms" link — it's currently outsized for a transactional send.
- **Subject Alt A:** `Your AA temporary password (expires in 24 hrs)`
- **Subject Alt B:** `Action needed: reset your American Airlines password`
- **Preheader Alt A:** `Use code DRSR-S29C-T5BW to log in and set a new password — expires soon.`
- **Preheader Alt B:** `Your one-time code is ready. Log in now to complete your password reset.`

## Full review
## 1. Overview

This is not a marketing email — it's a transactional password-reset email from American Airlines. Scoring it on a marketing rubric is an apples-to-oranges exercise, but the rubric still reveals something useful: AA executes the functional brief cleanly. The temporary password code (`DRSR-S29C-T5BW`) is large and legible, the "Log in" CTA is unambiguous, and the layout is devoid of clutter. The brand header (AA centennial logo) anchors trust immediately.

Where it falls short for a transactional email: there's no visible expiry window on the temporary password. A recipient who gets this email hours after requesting it has no idea if the code is still valid. That's a functional gap, not a cosmetic one. The footer loads a dense block of legal text that reads like an ad-tech disclaimer dragged into a security email — incongruous and slightly trust-eroding.

This is a competent, unremarkable transactional send. It does the job. It doesn't do more.

---

## 2. What worked

- **Temporary password is the visual anchor.** The code is displayed in a high-contrast, monospace-style block — impossible to miss or misread.
- **CTA is unambiguous.** "Log in" button is clearly rendered, centered, and visually distinct from body text.
- **No render bugs.** Layout is clean — no broken images, no overlapping text, no empty fields visible.
- **Brand trust is immediate.** AA centennial logo and blue header establish sender legitimacy above the fold.
- **Fraud warning is present.** "If you didn't request this" callout with a support number is a security best practice and visible without scrolling.

---

## 3. What didn't

- **No password expiry window.** The single most critical piece of information for a security email — how long the code is valid — is not visible anywhere in the render.
- **Footer is disproportionately long.** A dense paragraph of legal/trademark disclaimers dominates the bottom third of the email; it belongs in a collapsed or shorter form in a security send.
- **No personalization.** No name, no AAdvantage number, no account hint — a phishing email looks identical. A single masked email or loyalty ID would add meaningful authenticity.
- **App download badges are off-brand for context.** Promoting app downloads inside a security-action email is a mismatch — it dilutes urgency and adds noise.

---

## 4. What I'd change

1. **Add a visible expiry statement** directly under the password code: e.g., "This code expires in 24 hours." This is the single highest-impact change — it's a security expectation, not a nice-to-have.
2. **Add a masked account identifier** ("Sent to a\*\*\*\*@gmail.com" or "AAdvantage #\*\*\*1234") so the recipient can self-authenticate the request without calling support.
3. **Remove the app download CTAs.** Save them for a welcome email or a post-login prompt; they dilute the one job this email has.
4. **Collapse the legal footer** to a single shorter line with a "full terms" link — it's currently outsized for a transactional send.

- **Subject Alt A:** `Your AA temporary password (expires in 24 hrs)`
- **Subject Alt B:** `Action needed: reset your American Airlines password`
- **Preheader Alt A:** `Use code DRSR-S29C-T5BW to log in and set a new password — expires soon.`
- **Preheader Alt B:** `Your one-time code is ready. Log in now to complete your password reset.`

---

## 5. Business Impact Score (1-10)

**6/10**

- Sender is a brand I recognize
- Primary CTA is unambiguous ("Log in" button, clear)
- Visual hierarchy is clear — eye lands on the code and button first
- No render bugs visible
- Offer feels honest — no fine print obscuring the core action

---

## 6. Open Likelihood (persona-grounded)

- **Score:** 6/10
- **Signals counted:** Sender display name is recognizable (American Airlines); Subject is concrete ("Your temporary password"); Subject is under 50 chars (~22 chars); No spam signals (no ALL CAPS, no !!!); Cadence feels right (one-off transactional, opens on demand)
- **Rationale:** "Your temporary password" is direct enough that anyone who triggered a reset opens immediately. The five-point floor is the recognizable sender + clean subject — no urgency marker or name personalization to push it higher.

---

## 7. Click-Through Likelihood (persona-grounded)

- **Score:** 7/10
- **Signals counted:** Hero content visible without scrolling; CTA copy is specific ("Log in"); One specific destination linked (not homepage); The temporary password itself is the key product detail — visible and legible; Brand voice is consistent and trusted; No friction (no broken images, no "view in browser" wall)
- **Rationale:** Once opened, clicking is nearly automatic — the entire email funnels to one action. The missing expiry date is the only real hesitation: if a user opens late, they don't know whether clicking is worth it.

---

## 8. Subject

- **Subject:** `Your temporary password`
- **Length:** 22 characters
- **Scores (1-10):** Clarity `9`, Curiosity `2`, Personalization `1`, Urgency `4`, Specificity `8`

---

## 9. Preview

- **Preview:** `(none / leaking junk)` — no distinct preheader is visible in the render; inbox clients likely surface the first body line ("Here's the information you need to set up a new password"), which is functional but unoptimized
- **Length:** ~52 characters (inferred from first body line)
- **Scores (1-10):** Complements subject `4`, Specificity `4`, Clarity `6`, Inbox-fit `3`

---

## Technical Audit

## Technical Audit — American Airlines "Your temporary password" / "Reset your password"

**From:** `no-reply@connect.email.aa.com` | **Date:** 2026-05-15

---

### 1. Technical Summary

All tracked links are returning 403 from the ESP click-tracking domain (`url2268.connect.email.aa.com`), making every CTA non-functional. Combined with a missing plain-text body, absent unsubscribe infrastructure, and unverifiable authentication, this email has critical deliverability and compliance failures.

---

### 2. Link & Tracking Issues

| Severity | Finding | Evidence |
|---|---|---|
| FAIL | **All ESP-wrapped links return 403** — logo, "Log in" CTA, and "Your account" nav link are all dead | QA: `https://url2268.connect.email.aa.com/ls/click?upn=u001.U5VkKTa5...` → HTTP 403 |
| FAIL | **Google Fonts request returns 400** — `http://fonts.googleapis.com/css?family=Arial` is malformed; Arial is a system font, not a Google Font — the `family=` value is invalid for the Fonts API | QA: `<link href="http://fonts.googleapis.com/css?family=Arial">` → HTTP 400 |
| FAIL | **Tracking pixel domain also 403-scoped** — open-tracking pixel at `url2268.connect.email.aa.com/wf/open?upn=...` likely returns the same error, meaning open events are not recorded | QA: `[WARN] Image missing alt text: open: src: https://url2268.connect.email.aa.com/wf/open?...` |
| WARN | **Relative URL exposed in QA error** — `unknown url type: '/aadvantage-program/profile/account-summary'` suggests a relative path was passed as the `upn` destination before encoding, indicating an ESP configuration error at link-wrap time | QA link error for "Your account" |

**Root cause assessment:** The `url2268` subdomain is either misconfigured, the link-wrapping job used stale/expired signing keys, or the send was triggered outside a valid ESP campaign context (e.g., a test send with no active campaign record).

---

### 3. Rendering & Accessibility

| Severity | Finding | Evidence |
|---|---|---|
| WARN | **Tracking pixel has no `alt` attribute** — open-beacon `<img>` is missing `alt=""`, which triggers accessibility linters and some spam filters | QA: `[WARN] Image missing alt text: open:` |
| INFO | **`display: flex` on `<a>` and `<td>`** — `style="display: flex"` is applied to a logo `<a>` tag and a `<td>`. Flex is unsupported in Outlook (all versions) and some older iOS Mail; the MSO conditional `<!--[if gte mso 9]>` block in `<head>` is present but empty, offering no fallback | `<a href="..." style="display: flex;">` and `<td ... style="display: flex;">` |
| INFO | **`<meta http-equiv="X-UA-Compatible" content="IE=11">`** — targets a retired browser; harmless but signals template age | `<head>` |

---

### 4. Personalization & Merge Tokens

| Severity | Finding | Evidence |
|---|---|---|
| WARN | **Header account-info spans are empty** — three `<span>` tags in the top-right header that typically render AAdvantage number, member name, and status tier contain no content and no merge tokens | `<span style="vertical-align: middle; ..."></span>` × 3 in header `<td>` |

No unfired/unresolved `{{token}}` or `%%token%%` patterns are visible in the truncated source. The empty spans may be intentional for non-logged-in resets, but they produce blank whitespace in the header layout and should be conditionally hidden if empty.

---

### 5. Compliance

| Severity | Finding | Evidence |
|---|---|---|
| **FAIL** | **No unsubscribe link in body** — CAN-SPAM §5(a)(5) requires a functional opt-out mechanism in every commercial email. None is detected in body | QA: `[FAIL] No unsubscribe link found in body` |
| WARN | **`List-Unsubscribe` header absent** — RFC 2369 header not captured; one-click unsubscribe (RFC 8058 `List-Unsubscribe-Post`) also missing. Gmail and Yahoo now require this for bulk senders (≥5k/day) | QA: two header warnings |
| WARN | **SPF/DKIM status unverifiable** — `Authentication-Results` header not present in relay capture; cannot confirm DKIM signing by `connect.email.aa.com` | QA: `[WARN] Authentication-Results header not found` |
| INFO | **Transactional exemption may apply** — subject line "Your temporary password" could qualify as a transactional message under CAN-SPAM, which would exempt it from the unsubscribe requirement — *but* the HTML subject in the blue banner reads "Reset your password," and the email contains what appears to be account nav and loyalty program links, which may push it into the commercial category. The classification should be confirmed with legal/compliance before relying on the exemption. | Subject vs. `<h1 class="header">Reset your password</h1>` |

---

### 6. Email-to-Site Continuity

| Severity | Finding | Evidence |
|---|---|---|
| FAIL | **No UTM parameters visible** — because all links return 403 and the destination URLs are opaque ESP redirects, UTM attribution cannot be verified. The QA-exposed raw destination `/aadvantage-program/profile/account-summary` contains no UTM params | Link error: `unknown url type: '/aadvantage-program/profile/account-summary'` |
| FAIL | **"Log in" CTA is non-functional** — the primary conversion action in a password-reset flow is broken; recipients cannot complete the intended action | QA: `[FAIL] Broken link (403): (link text: "Log in")` |

---

### 7. Recommendations

**P0 — Fix before any send/resend:**

1. **Diagnose the 403s on `url2268.connect.email.aa.com`** — all click-tracked links and the open pixel are dead. Likely causes: expired campaign token, wrong subdomain CNAME, or ESP account/IP restriction. Re-wrap links in a valid active campaign.
2. **Add a plain-text body** — currently 0 characters. Required by many spam filters and improves deliverability. The ESP should auto-generate from HTML if configured correctly; if not, add a manual multipart/alternative text part.
3. **Add an unsubscribe link or confirm transactional classification** — if commercial, a one-click unsubscribe is required by CAN-SPAM and now enforced by Gmail/Yahoo bulk sender policies. If transactional, document the legal basis.

**P1 — Fix before production volume:**

4. **Add `List-Unsubscribe` and `List-Unsubscribe-Post` headers** — required for bulk sender compliance with Gmail/Yahoo (≥5k/day threshold).
5. **Fix the Google Fonts request** — change to a valid web-safe font stack (`font-family: Roboto, Arial, sans-serif`) or load Roboto correctly via `family=Roboto`. The current `family=Arial` request is invalid and will always 400.
6. **Replace `display: flex` on `<a>` and `<td>` with Outlook-safe layout** — use `display: block` + `mso-line-height-rule` inside the existing `<!--[if gte mso 9]>` block, or remove flex entirely and rely on the table layout already present.

**P2 — Clean up:**

7. **Hide or conditionally populate empty header `<span>` tags** — wrap in `<!--[if !mso]>` or use ESP conditional logic to suppress blank member-status cells when values are absent.
8. **Add `alt=""` to the tracking pixel** — suppresses accessibility warnings; the value should be empty string, not descriptive text.
9. **Resolve the "Log in" vs. "Reset your password" subject/body mismatch** — subject says "Your temporary password" while the body headline says "Reset your password." Ensure both reflect the same transactional intent to maintain consistent deliverability classification.
