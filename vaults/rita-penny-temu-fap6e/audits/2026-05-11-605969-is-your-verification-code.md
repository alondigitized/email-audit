---
slug: 2026-05-11-605969-is-your-verification-code
type: email
date: 2026-05-11
persona: rita-penny-temu-fap6e
score: "1/10"
sender: Temu
subject: 605969 is your verification code
tags: [email, score-1, sender/temu]
---
# 605969 is your verification code
**Score:** 1/10 · **Type:** Email audit · **2026-05-11**
## Executive summary

- This is not a marketing email. It's a transactional verification code email from Temu — the kind triggered when a user logs in or creates an account. There is no offer, no CTA, no product, no promotional content. Scoring it against a marketing rubric is an exercise in watching almost every criterion fail, because none of them apply here.
- The email does its functional job adequately: the 6-digit code is large, prominent, and readable. The 10-minute expiry is communicated clearly. The security warning ("DO NOT share your code with anyone") is present. For a one-purpose transactional send, the essentials are covered.
- Judgment: wrong email type for this audit pipeline. If this ended up in the queue, it likely got swept in by a domain or sender filter that didn't discriminate between Temu marketing and Temu system mail. Flag and skip for campaign analysis purposes.

## Recommendations

- This is a transactional email, not a campaign, so campaign-optimization changes don't apply. The one functional improvement worth noting: the social media footer module is unnecessary friction in a security-critical flow. Users who receive a verification code are in a high-intent, time-pressured moment — the 10-minute window is right there in the copy. A "FIND US ON" block adds noise and dilutes the security-first tone. Remove it from transactional sends.
- **Subject Alt A:** `Your Temu verification code: 605969`
- **Subject Alt B:** `605969 — expires in 10 minutes`
- **Preheader Alt A:** `Enter this code in the Temu app to complete verification.`
- **Preheader Alt B:** `Valid for 10 minutes. Do not share this code.`

## Full review
## 1. Take

This is not a marketing email. It's a transactional verification code email from Temu — the kind triggered when a user logs in or creates an account. There is no offer, no CTA, no product, no promotional content. Scoring it against a marketing rubric is an exercise in watching almost every criterion fail, because none of them apply here.

The email does its functional job adequately: the 6-digit code is large, prominent, and readable. The 10-minute expiry is communicated clearly. The security warning ("DO NOT share your code with anyone") is present. For a one-purpose transactional send, the essentials are covered.

Judgment: wrong email type for this audit pipeline. If this ended up in the queue, it likely got swept in by a domain or sender filter that didn't discriminate between Temu marketing and Temu system mail. Flag and skip for campaign analysis purposes.

## 2. What stood out

The verification code itself — rendered in large, bold numerals — is the only visual anchor, and it works. Everything else in the email is plain grey text on white, which is appropriate for a transactional send. The greeting shows a partially masked name (`ri***6e`), which is standard practice for security emails. There is no hero image, no product module, no offer, no CTA button. The footer is minimal: social icons for Facebook, Instagram, and Twitter, a Boston mailing address, and links to Privacy/Cookie Policy and Terms & Conditions. No render bugs visible — layout is clean, no broken images, no overlapping text. The "FIND US ON" social module is mildly odd for a verification email (you don't typically prompt social follows mid-auth flow), but it doesn't break anything.

## 3. What I'd change

This is a transactional email, not a campaign, so campaign-optimization changes don't apply. The one functional improvement worth noting: the social media footer module is unnecessary friction in a security-critical flow. Users who receive a verification code are in a high-intent, time-pressured moment — the 10-minute window is right there in the copy. A "FIND US ON" block adds noise and dilutes the security-first tone. Remove it from transactional sends.

- **Subject Alt A:** `Your Temu verification code: 605969`
- **Subject Alt B:** `605969 — expires in 10 minutes`
- **Preheader Alt A:** `Enter this code in the Temu app to complete verification.`
- **Preheader Alt B:** `Valid for 10 minutes. Do not share this code.`

## 4. Business Impact Score (1-10)

**1/10**

- No rubric criteria are TRUE. This is a transactional email — no offer, no CTA, no product, no campaign, no demographic targeting, no loyalty signal.

## 5. Open Likelihood (persona-grounded)

- **Score:** 3/10
- **Signals counted:** Sender display name is recognizable (Temu); No spam signals (clean subject, no ALL CAPS or !!!); Subject is under ~50 chars (37 chars).
- **Rationale:** A verification code subject is functional, not persuasive. You open it because you need the code, not because the subject compelled you. Three mechanical signals fire, nothing more.

## 6. Click-Through Likelihood (persona-grounded)

- **Score:** 1/10
- **Signals counted:** No friction — layout is clean, no broken images.
- **Rationale:** There is nothing to click. No CTA button, no product link, no offer. The email fulfills its purpose without requiring a click.

## 7. Subject

- **Subject:** `605969 is your verification code`
- **Length:** 34 chars
- **Scores (1-10):** Clarity `8`, Curiosity `1`, Personalization `3`, Urgency `4`, Specificity `7`

## 8. Preview

- **Preview:** `(none / leaking junk)` — no preheader set; inbox clients would pull the first body line: `Hi ri***6e,`
- **Length:** N/A (no explicit preheader)
- **Scores (1-10):** Complements subject `2`, Specificity `1`, Clarity `3`, Inbox-fit `2`

---

## Technical Audit

## Technical Audit — Temu Verification Email

**From:** `temu@users.temu.com` | **Subject:** `605969 is your verification code`

---

### 1. Technical Summary

MJML-generated transactional OTP email with two confirmed rendering bugs (broken CSS `@import` block, malformed media query syntax) and four images lacking alt text. Authentication status is unverifiable through the AgentMail relay, and SPF/DKIM pass/fail is unknown.

---

### 2. Link & Tracking Issues

**Non-standard tracking parameters only.** The single CTA link uses proprietary Temu params with no UTM equivalents:

```
https://www.temu.com?msgid=211-20260511-08-B-995855316011544576-290-sj3xDyrK&_p_landing=1&_x_src=mail
```

No `utm_source`, `utm_medium`, or `utm_campaign` present. If this traffic flows into any shared analytics stack, it will appear as direct.

**Invalid anchor structure.** The logo `<a>` tag is placed directly inside `<tr>` with no wrapping `<td>`:

```html
<tr><a href="https://www.temu.com?..."><img src="..."></a></tr>
```

This is invalid HTML; some email clients will strip or reposition the link.

---

### 3. Rendering & Accessibility

**Broken CSS `@import` block.** The inline `<style>` block concatenates three import URLs into a single malformed string:

```css
@import url(https:@import url(https:@import url(https:
```

All three `@import` rules are non-functional. Google Fonts load via `<link>` tags above (email-client-dependent), so fallback fonts apply everywhere `@import` would have been the only mechanism.

**Malformed media query — missing space before parenthesis.** Both responsive breakpoints are broken:

```css
@media only screen and(min-width:480px) { … }
@media only screen and(max-width:480px) { … }
```

Should be `and (min-width:480px)`. Invalid syntax causes the entire block to be ignored in WebKit/Blink clients; layout will not reflow on mobile.

**`visibility: none` is invalid CSS.** The preheader/subtitle div uses:

```html
style="opacity: 0; display: none; visibility: none;"
```

`visibility: none` is not a valid value (valid values: `hidden`, `visible`, `collapse`). This is harmless here because `display: none` already hides the element, but it indicates a template authoring error that could surface problems elsewhere.

**Four images missing `alt` text** (confirmed by QA):

| Image | URL |
|---|---|
| Logo | `aimg.kwcdn.com/…/45e11d4c-….png.slim.png` |
| Body image 1 | `aimg.kwcdn.com/…/af10ee3f-….png.slim.png` |
| Body image 2 | `aimg.kwcdn.com/…/d5354e0c-….png.slim.png` |
| Body image 3 | `aimg.kwcdn.com/…/1b900dab-….png.slim.png` |

Images-off rendering (default in Outlook, Gmail for new senders) will show blank boxes with no context.

---

### 4. Personalization & Merge Tokens

Template delimiters are present but appear correctly resolved — `{{mail_sub_title begin/end}}` and `{{header_pic begin/end}}` markers are visible as HTML comments (not raw tokens), and the OTP code `605969` is rendered inline. No unresolved `{{token}}` placeholders found in the truncated source.

---

### 5. Compliance (CAN-SPAM / Unsubscribe / Authentication)

**Transactional email context:** As an OTP/verification message, CAN-SPAM's unsubscribe and physical address requirements do not apply per 16 CFR § 316.3. The missing `List-Unsubscribe` headers flagged by QA are not a compliance violation here.

**Authentication status unknown.** QA confirmed `Authentication-Results` header is absent from what the AgentMail relay captured:

```
[WARN] Authentication-Results header not found — SPF/DKIM status unknown
```

Without this header, deliverability classification (spam vs. inbox) cannot be confirmed. This is a relay instrumentation gap, not necessarily a sending-side failure, but it should be verified at the MTA level.

---

### 6. Email-to-Site Continuity (UTM / Landing Page)

No UTM parameters on any link. The destination (`temu.com`) is the homepage root, not a deep-link back into the verification flow. For an OTP email this is acceptable (the code itself is the continuity mechanism), but attribution is fully opaque to any analytics tooling that expects UTM-tagged campaigns.

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| High | Malformed media queries (`and(` → `and (`) | Add missing space in MJML source before regenerating |
| High | Broken `@import` block | Remove the malformed `<style>` block; `<link>` tags above are sufficient |
| Medium | `<a>` directly inside `<tr>` (no `<td>`) | Wrap anchor/image in a `<td>` |
| Medium | 4 images missing `alt` text | Add descriptive alt values; at minimum `alt=""` for decorative images |
| Low | `visibility: none` → `visibility: hidden` | Fix in template to eliminate invalid CSS |
| Low | Authentication-Results visibility | Configure AgentMail relay to preserve/forward the header for auditability |
| Info | No UTM params | Acceptable for transactional; add if cross-channel attribution is needed |
