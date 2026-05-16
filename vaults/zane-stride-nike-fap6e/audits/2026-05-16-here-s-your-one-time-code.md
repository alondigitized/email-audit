---
slug: 2026-05-16-here-s-your-one-time-code
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

- This is not a marketing email — it's a triggered transactional OTP email. Nike sends this when someone requests a profile verification code. The design is intentionally stripped of all promotional content: no hero, no offer, no CTA button. That's correct behavior for this message type. Judged as a transactional email, it's clean and functional. Judged against a marketing rubric, it will score poorly — not because it's bad, but because the rubric criteria don't apply.
- The execution is solid. The OTP (`58158630`) renders large and legible, the 15-minute expiry is clearly called out in bold, and the fallback instruction ("ignore this email") is present. No render bugs. No extraneous content to distract.
- The one legitimate critique: Nike doesn't surface any warm-up moment post-auth — no "while you're here" link, no brand touchpoint. A transactional email this clean could still close with a single quiet line linking back to the membership hub without compromising deliverability or trust.

## What's working

- OTP code is displayed in a large, high-contrast typeface — easy to read and copy, even on a glance
- Expiry time ("15 minutes") is bolded and above the fold — reduces anxiety about code timing
- Ignore instruction present — reduces support tickets from accidental triggers
- Layout is completely clean: no broken images, no overlapping elements, no lorem ipsum
- Footer is complete with legal address, copyright, and support links

## What's weak

- No link to Nike.com or the Nike Member hub — a missed low-friction brand touchpoint after auth
- Subject ("Here's your one-time code") doesn't name Nike or indicate what the code is for — generic enough to pattern-match as phishing in a cluttered inbox
- "Your Nike Member profile code" heading is slightly awkward phrasing; "Member profile" isn't a term Nike typically uses in marketing copy
- No security reassurance (e.g., "If you didn't request this, you can safely ignore it — your account is secure") — the current copy is correct but minimal

## Recommendations

- 1. **Add brand to the subject line** — including "Nike" or "Nike Member" signals legitimacy and differentiates from generic OTP phishing; "Your Nike Member verification code" is more trustworthy
- 2. **Strengthen the security note** — replace the passive "ignore this email" with "Your account is secure — no action needed" to reduce user anxiety on unsolicited triggers
- 3. **Close with one quiet CTA** — a single text link ("Manage your Nike Member profile →") after the expiry block adds a conversion touchpoint without cluttering the transactional purpose
- 4. **Tighten the heading** — "Your Nike Member verification code" matches the subject and is clearer than "profile code"
- **Subject Alt A:** `Your Nike verification code (expires in 15 min)`
- **Subject Alt B:** `Nike Member code: 58158630`
- **Preheader Alt A:** `Use this code to confirm your Nike Member profile. It expires in 15 minutes.`
- **Preheader Alt B:** `One-time code for your Nike Member account — expires in 15 minutes.`

## Full review
## 1. Overview

This is not a marketing email — it's a triggered transactional OTP email. Nike sends this when someone requests a profile verification code. The design is intentionally stripped of all promotional content: no hero, no offer, no CTA button. That's correct behavior for this message type. Judged as a transactional email, it's clean and functional. Judged against a marketing rubric, it will score poorly — not because it's bad, but because the rubric criteria don't apply.

The execution is solid. The OTP (`58158630`) renders large and legible, the 15-minute expiry is clearly called out in bold, and the fallback instruction ("ignore this email") is present. No render bugs. No extraneous content to distract.

The one legitimate critique: Nike doesn't surface any warm-up moment post-auth — no "while you're here" link, no brand touchpoint. A transactional email this clean could still close with a single quiet line linking back to the membership hub without compromising deliverability or trust.

---

## 2. What worked

- OTP code is displayed in a large, high-contrast typeface — easy to read and copy, even on a glance
- Expiry time ("15 minutes") is bolded and above the fold — reduces anxiety about code timing
- Ignore instruction present — reduces support tickets from accidental triggers
- Layout is completely clean: no broken images, no overlapping elements, no lorem ipsum
- Footer is complete with legal address, copyright, and support links

---

## 3. What didn't

- No link to Nike.com or the Nike Member hub — a missed low-friction brand touchpoint after auth
- Subject ("Here's your one-time code") doesn't name Nike or indicate what the code is for — generic enough to pattern-match as phishing in a cluttered inbox
- "Your Nike Member profile code" heading is slightly awkward phrasing; "Member profile" isn't a term Nike typically uses in marketing copy
- No security reassurance (e.g., "If you didn't request this, you can safely ignore it — your account is secure") — the current copy is correct but minimal

---

## 4. What I'd change

1. **Add brand to the subject line** — including "Nike" or "Nike Member" signals legitimacy and differentiates from generic OTP phishing; "Your Nike Member verification code" is more trustworthy
2. **Strengthen the security note** — replace the passive "ignore this email" with "Your account is secure — no action needed" to reduce user anxiety on unsolicited triggers
3. **Close with one quiet CTA** — a single text link ("Manage your Nike Member profile →") after the expiry block adds a conversion touchpoint without cluttering the transactional purpose
4. **Tighten the heading** — "Your Nike Member verification code" matches the subject and is clearer than "profile code"

- **Subject Alt A:** `Your Nike verification code (expires in 15 min)`
- **Subject Alt B:** `Nike Member code: 58158630`
- **Preheader Alt A:** `Use this code to confirm your Nike Member profile. It expires in 15 minutes.`
- **Preheader Alt B:** `One-time code for your Nike Member account — expires in 15 minutes.`

---

## 5. Business Impact Score (1-10)

**5/10**

- Sender is a brand you recognize / are subscribed to (Nike) ✓
- Visual hierarchy is clear — the eye lands on the OTP code immediately ✓
- No render bugs ✓
- Offer feels honest — no deception, no buried fine print ✓

*(Four criteria TRUE: 1 + 4 = 5. Marketing-oriented criteria are structurally inapplicable to a transactional OTP email.)*

---

## 6. Open Likelihood (persona-grounded)

- **Score:** 6/10
- **Signals counted:** Sender display name is recognizable (Nike); Subject is concrete (delivers exactly what it promises); Subject is under ~50 chars (25 chars); No spam signals; Cadence feels right (triggered, expected)
- **Rationale:** If you just requested a code, open rate is effectively 100% — you're waiting for this. The subject is clear and not spammy. The only weakness is it doesn't name Nike or the context, which slightly erodes trust on first glance.

---

## 7. Click-Through Likelihood (persona-grounded)

- **Score:** 5/10
- **Signals counted:** Hero offer (OTP code) is visible without scrolling; Offer is time-bounded with credible deadline (15 min); Brand voice is consistent and trusted; No friction — code is immediately visible
- **Rationale:** There is no CTA to click — the conversion is copying the code. The email delivers it frictionlessly, which is a pass for its actual job. Six marketing click-signals are structurally inapplicable here.

---

## 8. Subject

- **Subject:** `Here's your one-time code`
- **Length:** 25 chars
- **Scores (1-10):** Clarity `8`, Curiosity `2`, Personalization `2`, Urgency `4`, Specificity `5`

---

## 9. Preview

- **Preview:** `(none / leaking junk)` — not visible in the rendered screenshot; no preheader text is observable
- **Length:** n/a
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`

---

## Technical Audit

## Technical Audit — Nike One-Time Code Email

**From:** nike@notifications.nike.com | **Subject:** Here's your one-time code

---

### 1. Technical Summary

This is a transactional OTP email rendered on a Foundation for Emails grid with XHTML 1.0 Strict markup. The QA scan reports a 38% pass rate driven by two hard failures: a missing plain-text MIME part and an HTTP-only open-tracking pixel, plus unresolved authentication header visibility through the AgentMail relay.

---

### 2. Link & Tracking Issues

| Issue | Evidence |
|---|---|
| **[FAIL] Open-tracking pixel served over HTTP** | `src="http://url3775.click.notifications.nike.com/wf/open?upn=u001.unHJZyh6Rw..."` — modern email clients (Gmail, Outlook 365, Apple Mail) block mixed-content or proxy images, which will zero out open-rate data. |
| **[WARN] Tracking pixel missing `alt` attribute** | Same `<img>` element has no `alt=""` — will render a broken-image indicator in some clients if blocked. Should be `alt=""` (empty, not absent). |

Click-tracking domain (`url3775.click.notifications.nike.com`) appears properly used for link wrapping; no bare redirect loops or malformed query strings visible in the truncated source.

---

### 3. Rendering & Accessibility

| Issue | Evidence |
|---|---|
| **`@font-face` declarations will be stripped** | `Nike Futura` loaded from `https://www.nike.com/assets/ncss/2.2/dotcom/fonts/nike-futura-extra-bold-v200.*` — Gmail, Outlook (Windows), and Samsung Mail strip `@font-face` entirely. The stack has no generic fallback (`sans-serif`) declared after the custom family, so the client falls back to its default serif. For an OTP code display, this is a functional risk if the code is styled exclusively with `Nike Futura`. |
| **VML namespace declared but use not visible** | `xmlns:v="urn:schemas-microsoft-com:vml"` present — acceptable if used for Outlook button/image fallbacks, but if unused it adds noise. Cannot confirm without full source. |
| **No plain-text MIME part** | [FAIL] Text version is 0 chars. Even for transactional email, a `text/plain` part is required by RFC 2822 and improves deliverability scoring. |

No issues found with table-based layout approach or mobile breakpoints; the `@media (max-width:640px)` responsive rules are structurally sound.

---

### 4. Personalization & Merge Tokens

Cannot fully assess from truncated source. The OTP value itself is the critical merge token — confirm it is server-rendered at send time, not injected client-side, and that the fallback state (token render failure) fails closed (email not sent) rather than delivering a blank or literal placeholder like `{{otp_code}}`.

No other unresolved merge tokens visible in the portion provided.

---

### 5. Compliance

| Severity | Finding |
|---|---|
| **[FAIL]** | **No unsubscribe link found in body.** The QA tool flags this under CAN-SPAM. *Caveat:* pure OTP/authentication emails are transactional and legally exempt from CAN-SPAM's opt-out requirement — but only if the message contains *no* commercial content. If the body includes any promotional messaging (e.g., a product banner, hero image, or promotional footer), the exemption is lost and a visible unsubscribe link is required. Verify against full rendered HTML. |
| **[WARN]** | `List-Unsubscribe` and `List-Unsubscribe-Post` (RFC 8058) headers not captured by AgentMail relay. If Nike's sending infrastructure does inject these headers, the relay is not forwarding them. One-click unsubscribe is required by Gmail and Yahoo for senders above 5k/day threshold regardless of transactional status, so header passthrough should be confirmed. |
| **[WARN]** | `Authentication-Results` header not found. SPF/DKIM/DMARC pass status is unverifiable through current relay configuration. This does not mean authentication is failing — only that the relay is not surfacing it. |

---

### 6. Email-to-Site Continuity

No UTM parameters are expected or appropriate on an OTP email — links (if any) should route directly to the verification flow without attribution tagging that could confuse session analytics. No issues found for a transactional send context.

If any supplemental links (e.g., "Visit Nike.com", footer nav) are present in the untruncated source, those should carry UTMs consistent with `utm_medium=email&utm_source=nike_transactional`.

---

### 7. Recommendations

**P0 — Fix before next send:**
1. **Upgrade tracking pixel to HTTPS.** Change `http://url3775.click...` → `https://url3775.click...`. Coordinate with the ESP (Salesforce Marketing Cloud / ExactTarget based on URL pattern) to reissue the signed open-tracking URL over TLS.
2. **Add plain-text MIME part.** Minimum viable content: sender name, the OTP code, expiry time, and a support URL. Required for RFC compliance and inbox placement.

**P1 — Address promptly:**
3. **Add `alt=""` to tracking pixel `<img>`.** Prevents broken-image indicators on pixel block.
4. **Audit for commercial content.** If any promotional element exists in full HTML, add a visible unsubscribe link and `List-Unsubscribe` headers unconditionally.
5. **Confirm relay header passthrough.** Verify AgentMail is forwarding `Authentication-Results`, `List-Unsubscribe`, and `DKIM-Signature` headers through to the audit pipeline so compliance checks get accurate signal.

**P2 — Best practice:**
6. **Add generic font fallback.** Append `sans-serif` to `font-family` declarations using `Nike Futura` so the OTP code renders in a readable font on clients that strip `@font-face`.
