---
slug: 2026-05-16-your-confirmation-code-is-110546
type: email
date: 2026-05-16
persona: aria-superhost-airbnb-fap6e
score: "4/10"
sender: Airbnb
subject: Your confirmation code is 110546
tags: [email, score-4, sender/airbnb]
---
# Your confirmation code is 110546
**Score:** 4/10 · **Type:** Email audit · **2026-05-16**
## Executive summary

- This is not a marketing email — it's a transactional one-time confirmation code send from Airbnb. Judging it on promotional criteria is largely beside the point, but the rubric applies uniformly, so here goes. The email does exactly what it needs to do: deliver a six-digit code legibly, warn the recipient not to share it, and offer a safety escape hatch if they didn't request it. That's the whole job, and it mostly succeeds.
- What stands out negatively isn't a copy or strategy problem — it's a rendering one. The content block occupies the top ~5% of a canvas that is absurdly tall, leaving an enormous blank white void below the footer. This is almost certainly a screenshot/webview artifact rather than what a real inbox renders, but it's jarring at image scale. The actual content area is clean and renders without bugs.
- Bottom line: solid transactional email that punches exactly at the level it needs to. No promotional value, by design.

## What's working

- **Code is the hero.** "110546" is displayed in large, bold type — the one thing the reader needs is immediately scannable.
- **Security warning is front and center.** "Never share your confirmation code with anyone—Airbnb employees will never ask for it" appears directly under the heading, which is exactly the right placement for phishing resistance.
- **Safety escape hatch is clear.** "Don't recognize this? Let us know" with a linked account-review action is well-placed and appropriately low-friction.
- **No visual clutter.** No promotional banners, no upsell blocks, no distraction from the transactional purpose.

## What's weak

- **Massive empty canvas below the footer.** The render shows ~95% blank white space below the content — likely a webview artifact, but visually broken at screenshot scale.
- **No CTA button — only a text link.** "Review your account" as a small inline hyperlink is easy to miss and easy to mis-tap on mobile; a button would be more accessible.
- **No explicit code expiry shown.** OTP emails ideally state "expires in 10 minutes" or similar — the urgency is implied but not stated, leaving the reader uncertain if a stale code will work.
- **Footer social icons feel incongruous.** Facebook/Twitter/Instagram icons on a security-sensitive transactional email invite distraction and seem vestigial.

## Recommendations

- 1. **Add an expiry timestamp to the code block.** "This code expires in 15 minutes" directly beneath "110546" reduces support volume and sets correct expectations.
- 2. **Upgrade the safety CTA to a button.** Replace the inline "review your account" text link with a red or high-contrast button labeled "Secure My Account" — more tappable, more urgent, less likely to be missed.
- 3. **Remove social media icons from the footer.** They're friction on a security email and inconsistent with the "do not share / act immediately" tone.
- 4. **Fix the canvas height** (if controllable) — trim the email template's minimum height so the webview doesn't render a blank scroll tomb.
- **Subject Alt A:** `Your Airbnb login code: 110546 (expires soon)`
- **Subject Alt B:** `110546 — your one-time Airbnb code`
- **Preheader Alt A:** `Valid for a limited time. Don't share it with anyone, including Airbnb staff.`
- **Preheader Alt B:** `Enter this code to continue. Never share it — Airbnb will never ask.`

## Full review
## 1. Overview

This is not a marketing email — it's a transactional one-time confirmation code send from Airbnb. Judging it on promotional criteria is largely beside the point, but the rubric applies uniformly, so here goes. The email does exactly what it needs to do: deliver a six-digit code legibly, warn the recipient not to share it, and offer a safety escape hatch if they didn't request it. That's the whole job, and it mostly succeeds.

What stands out negatively isn't a copy or strategy problem — it's a rendering one. The content block occupies the top ~5% of a canvas that is absurdly tall, leaving an enormous blank white void below the footer. This is almost certainly a screenshot/webview artifact rather than what a real inbox renders, but it's jarring at image scale. The actual content area is clean and renders without bugs.

Bottom line: solid transactional email that punches exactly at the level it needs to. No promotional value, by design.

---

## 2. What worked

- **Code is the hero.** "110546" is displayed in large, bold type — the one thing the reader needs is immediately scannable.
- **Security warning is front and center.** "Never share your confirmation code with anyone—Airbnb employees will never ask for it" appears directly under the heading, which is exactly the right placement for phishing resistance.
- **Safety escape hatch is clear.** "Don't recognize this? Let us know" with a linked account-review action is well-placed and appropriately low-friction.
- **No visual clutter.** No promotional banners, no upsell blocks, no distraction from the transactional purpose.

---

## 3. What didn't

- **Massive empty canvas below the footer.** The render shows ~95% blank white space below the content — likely a webview artifact, but visually broken at screenshot scale.
- **No CTA button — only a text link.** "Review your account" as a small inline hyperlink is easy to miss and easy to mis-tap on mobile; a button would be more accessible.
- **No explicit code expiry shown.** OTP emails ideally state "expires in 10 minutes" or similar — the urgency is implied but not stated, leaving the reader uncertain if a stale code will work.
- **Footer social icons feel incongruous.** Facebook/Twitter/Instagram icons on a security-sensitive transactional email invite distraction and seem vestigial.

---

## 4. What I'd change

1. **Add an expiry timestamp to the code block.** "This code expires in 15 minutes" directly beneath "110546" reduces support volume and sets correct expectations.
2. **Upgrade the safety CTA to a button.** Replace the inline "review your account" text link with a red or high-contrast button labeled "Secure My Account" — more tappable, more urgent, less likely to be missed.
3. **Remove social media icons from the footer.** They're friction on a security email and inconsistent with the "do not share / act immediately" tone.
4. **Fix the canvas height** (if controllable) — trim the email template's minimum height so the webview doesn't render a blank scroll tomb.

- **Subject Alt A:** `Your Airbnb login code: 110546 (expires soon)`
- **Subject Alt B:** `110546 — your one-time Airbnb code`
- **Preheader Alt A:** `Valid for a limited time. Don't share it with anyone, including Airbnb staff.`
- **Preheader Alt B:** `Enter this code to continue. Never share it — Airbnb will never ask.`

---

## 5. Business Impact Score (1-10)

**4/10**

- Sender is a brand I recognize / am subscribed to ✓
- Visual hierarchy is clear — the eye lands on the code first ✓
- No render bugs in the content area ✓
- Offer feels honest — no fine print, no bait ✓

*(All promotional criteria — specific % off, seasonal campaign, demographic match, loyalty benefits, unambiguous CTA button — are inapplicable by design. This is transactional.)*

---

## 6. Open Likelihood (persona-grounded)

- **Score:** 7/10
- **Signals counted:** Sender display name is recognizable; subject is concrete (specific code + number); subject is relevant (it's my account); subject is under 50 chars (33); no spam signals; personalization present (unique code); time-bounded urgency implied (OTP); cadence feels right (one-time triggered send).
- **Rationale:** A six-digit code in the subject line is about as concrete and actionable as a subject gets — open rate on triggered OTP emails is near-universal because the recipient either just requested it or is alarmed they didn't. The 33-char subject is clean on mobile.

---

## 7. Click-Through Likelihood (persona-grounded)

- **Score:** 3/10**
- **Signals counted:** Brand voice is consistent and trusted; no friction in the content render (clean, no broken images).
- **Rationale:** There's nothing to click for the primary use case — you read the code and go use it elsewhere. The only CTA is a safety fallback for unrecognized sends, which most recipients won't need. Low click rate is correct behavior for this email type.

---

## 8. Subject

- **Subject:** `Your confirmation code is 110546`
- **Length:** 33 chars
- **Scores (1-10):** Clarity `9`, Curiosity `3`, Personalization `6`, Urgency `5`, Specificity `9`

---

## 9. Preview

- **Preview:** `(not visible in render — likely bleeds into body copy: "Never share your confirmation code with anyone")`
- **Length:** ~50 chars estimated
- **Scores (1-10):** Complements subject `6`, Specificity `5`, Clarity `7`, Inbox-fit `5`

---

## Technical Audit

## Technical Audit — Airbnb Verification Email

### 1. Technical Summary

This account-verification email has two blocking defects: critical merge tokens (`user_id`, `rya_flow_token`) rendered empty in the primary CTA URL, and a missing unsubscribe mechanism that puts the send in CAN-SPAM violation. Four legacy font fallback assets are also returning 404.

---

### 2. Link & Tracking Issues

**[FAIL] Empty merge tokens in primary CTA**
The `review_your_account` destination URL contains unresolved parameters:
```
https://www.airbnb.com/review_your_account?alert_name=&c=.pi80...&euid=8eb31876-...&rya_flow_token=&user_id=
```
Both `user_id=` and `rya_flow_token=` are blank. The QA checker confirms the URL resolves to a `/login?redirect_url=...` wall rather than the intended destination — this means the verification CTA is non-functional for the recipient.

**[FAIL] HTTP open-tracking pixel**
```
http://email.airbnbmail.com/wf/open?upn=u001.UMJ59gW55cOya3jHED-2Bj...
```
Served over plain HTTP. Modern email clients (Gmail, Apple Mail) block mixed-content images, silently voiding open-rate data. Should be `https://`.

**[WARN] Social redirect links — QA checker false positives (low confidence)**
Links to TikTok, Instagram, and Twitter route through `/external_link?...url=...` which issues a `/interstitial` redirect. The QA checker cannot follow this redirect chain and flags them as broken. Likely functional for real users, but the interstitial redirect layer should be verified end-to-end against the current production routing middleware.

**[INFO] No UTM parameters**
All tracked links use a proprietary `c=.pi80...` parameter. No `utm_source`, `utm_medium`, or `utm_campaign` values present. See §6.

---

### 3. Rendering & Accessibility

**[FAIL] Four `.woff` fallback font assets return 404**
```
AirbnbCereal_W_Bk.d5933bc735ca9031c13adadc2e16a14b.woff  → 404
AirbnbCereal_W_Md.6c30b9f8c60a0fb0c1df4f4bade89656.woff  → 404
AirbnbCereal_W_SBd.6df76d286d3f6387d3fc010c17b60485.woff → 404
AirbnbCereal_W_Bd.de94633934407484fd02223ab2624a06.woff  → 404
```
The `.woff2` equivalents (different hash suffix) are not confirmed broken, so rendering degrades only on clients without woff2 support (older Outlook, some Android webviews). The content-hashed filenames suggest a stale asset manifest — the build pipeline deployed new woff2 hashes but did not invalidate or redirect the old woff paths.

**[WARN] Open-tracking pixel missing `alt` attribute**
```html
<img src="http://email.airbnbmail.com/wf/open?upn=..." width="1" height="1" border="0" />
```
No `alt=""` present. Screen readers will announce the raw URL string.

**[INFO] Linaria CSS in `<head>`**
`<style data-linaria="true">` contains responsive media queries. Gmail strips `<head>` styles; the responsive breakpoints at `max-width:560px` will not fire in Gmail webmail. This is a known Airbnb architectural tradeoff — calling it out for the record, not necessarily a regression.

**[INFO] Outlook conditional comments present**
MSO fallback block (`<!--[if (mso)|(IE)]>`) is present and includes explicit `padding`, font-size, and button border overrides. No issues detected.

---

### 4. Personalization & Merge Tokens

**[FAIL] `user_id` and `rya_flow_token` not substituted**

In the primary CTA and the inline "review your account" text link, both parameters are empty strings:
```
&rya_flow_token=&user_id=
```
The `euid` field (`8eb31876-d7a8-b287-9fc8-02f280e5b9be`) appears populated. This partial substitution pattern suggests the templating system injected `euid` from one data source but `user_id`/`rya_flow_token` from a second source that returned null or was skipped.

**[INFO] Confirmation code in subject only**
The subject carries `110546`. Whether the same code appears in the body could not be confirmed from the truncated HTML — verify that the body template references the same merge field, not a hardcoded value.

---

### 5. Compliance

**[FAIL] No unsubscribe link in body**
CAN-SPAM §5(a)(3) requires a functional opt-out mechanism visible in the message body. None detected. This is expected for a transactional/verification email under some interpretations, but Airbnb's own footer typically includes an unsubscribe or preference link — its absence here may indicate a template error rather than intentional omission.

**[WARN] `List-Unsubscribe` and `List-Unsubscribe-Post` headers not captured**
RFC 2369 and RFC 8058 one-click unsubscribe headers are absent from what the relay captured. If this email is classified as transactional these headers are optional, but Gmail and Yahoo now factor their presence into deliverability scoring regardless of category.

**[WARN] No physical mailing address**
CAN-SPAM requires a valid physical postal address in the message body. Not detected in the available HTML. May exist in the truncated footer section — confirm against full source.

**[WARN] SPF/DKIM authentication status unknown**
`Authentication-Results` header not present in relay capture. Sending domain is `airbnbmail.com` (not `airbnb.com`). Confirm DMARC alignment: the `From:` header uses `automated@airbnb.com` while the sending infrastructure is under `airbnbmail.com`. If SPF/DKIM are aligned to `airbnbmail.com` but the `From:` domain is `airbnb.com`, DMARC may be failing in strict mode.

---

### 6. Email-to-Site Continuity

No UTM parameters present on any link. Attribution for this send will be invisible to any GA4 / analytics stack relying on `utm_source`. Airbnb's proprietary `c=.pi80.pkb3RwL2VtYWlsX3ZlcmlmaWNhdGlvbg==` parameter (base64: `\x02\x97\x6f\x74\x70\x2f\x65\x6d\x61\x69\x6c\x5f\x76\x65\x72\x69\x66\x69\x63\x61\x74\x69\x6f\x6e` ≈ `otp/email_verification`) is a first-party tracking token only — it will not populate standard acquisition reports.

The primary CTA resolves to a login redirect rather than the verification flow (§2), so even if the user clicks the link they cannot complete the intended action.

---

### 7. Recommendations

| Priority | Issue | Action |
|----------|-------|--------|
| P0 | Empty `user_id` + `rya_flow_token` | Audit the template rendering pipeline — identify which data source is failing to inject these fields before next send |
| P0 | No unsubscribe link in body | Add preference-center or unsubscribe link to footer unless legal has explicitly documented transactional exemption |
| P1 | HTTP open-tracking pixel | Update ESP/sending platform config to serve tracking pixel over HTTPS |
| P1 | Missing physical address | Confirm full footer renders in production; add if absent |
| P1 | `.woff` 404s | Repoint `@font-face` src to current content-hashed woff filenames, or add CDN redirects from old hashes to current |
| P2 | DMARC alignment | Verify `airbnbmail.com` is covered by `airbnb.com` DMARC policy or has its own aligned policy |
| P2 | `List-Unsubscribe-Post` header | Add RFC 8058 one-click header even for transactional sends — required by Gmail/Yahoo bulk sender guidelines |
| P3 | Open-pixel alt attribute | Add `alt=""` to suppress screen-reader URL announcement |
| P3 | UTM parameters | Add `utm_source=email&utm_medium=transactional&utm_campaign=email_verification` to CTA links for attribution |
