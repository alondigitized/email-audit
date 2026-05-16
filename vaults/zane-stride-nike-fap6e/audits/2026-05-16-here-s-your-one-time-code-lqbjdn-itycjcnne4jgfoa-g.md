---
slug: 2026-05-16-here-s-your-one-time-code-lqbjdn-itycjcnne4jgfoa-g
type: email
date: 2026-05-16
persona: zane-stride-nike-fap6e
score: "2/10"
sender: Nike
subject: "Here's your one-time code"
tags: [email, score-2, sender/nike]
---
# Here's your one-time code
**Score:** 2/10 · **Type:** Email audit · **2026-05-16**
## Executive summary

- This is a transactional OTP email, not a marketing email. Nike sent a one-time verification code for a Member profile action — the entire body is a single 8-digit code (`58158630`) with a 15-minute expiry notice. There is nothing here to "market": no offer, no CTA, no product. The rubric criteria mostly don't apply and the scores will reflect that honestly.
- The email executes its narrow job well: the code is enormous, impossible to miss, and the expiry window is stated in bold. Clean Swoosh logo, white background, minimal copy. For a security-critical transactional email, simplicity is correct — don't clutter it with promotions.
- The only legitimate critique is that the subject line ("Here's your one-time code") is functionally accurate but bland, and the surrounding persona-matching/offer-conversion scoring framework simply doesn't apply to this send type.

## What's working

- **Code is unmissable** — large, bold, center-aligned type makes `58158630` easy to read and copy on any device.
- **Expiry prominently bolded** — "This code expires after 15 minutes." is the first thing the eye lands on below the code, which is exactly right for a time-sensitive auth flow.
- **Zero render bugs** — clean white layout, logo loads, text doesn't overlap, footer links are present.
- **Correct tone** — the "ignore if you didn't request this" copy is calm, not alarmist, which is good security UX.

## What's weak

- **Not a marketing email** — the entire rubric is built for promotional sends; this email has no offer, no CTA, no hero, no product. Scores below are structurally low by design, not by failure.
- **Subject is functional but forgettable** — "Here's your one-time code" does the job but is indistinguishable from every other OTP email across every brand in the inbox.
- **No contextual reminder of WHY the code was triggered** — "You requested this to access your Nike Member profile" would reduce phishing anxiety and help users who have multiple tabs open.

## Recommendations

- 1. **Add the triggering action to the body** — replace "Here's the one-time verification code you requested:" with "You requested a code to sign in to your Nike Member profile on [device/browser]. Use it within 15 minutes." This is the single change that most reduces phishing confusion and support contacts.
- 2. **Differentiate the subject** — the current subject is generic across all OTP senders.
- **Subject Alt A:** `Your Nike sign-in code: 58158630`
- **Subject Alt B:** `Nike Member code — expires in 15 min`
- **Preheader Alt A:** `Use this code to access your Nike Member profile. Expires in 15 minutes.`
- **Preheader Alt B:** `Didn't request this? Ignore it — your account is safe.`
- 3. **Add a "Get Help" link inline** — the footer has "Get Help" but a user who's confused mid-auth won't scroll. A small text link below the expiry line ("Not you? Get help.") would reduce friction.

## Full review
## 1. Overview

This is a transactional OTP email, not a marketing email. Nike sent a one-time verification code for a Member profile action — the entire body is a single 8-digit code (`58158630`) with a 15-minute expiry notice. There is nothing here to "market": no offer, no CTA, no product. The rubric criteria mostly don't apply and the scores will reflect that honestly.

The email executes its narrow job well: the code is enormous, impossible to miss, and the expiry window is stated in bold. Clean Swoosh logo, white background, minimal copy. For a security-critical transactional email, simplicity is correct — don't clutter it with promotions.

The only legitimate critique is that the subject line ("Here's your one-time code") is functionally accurate but bland, and the surrounding persona-matching/offer-conversion scoring framework simply doesn't apply to this send type.

---

## 2. What worked

- **Code is unmissable** — large, bold, center-aligned type makes `58158630` easy to read and copy on any device.
- **Expiry prominently bolded** — "This code expires after 15 minutes." is the first thing the eye lands on below the code, which is exactly right for a time-sensitive auth flow.
- **Zero render bugs** — clean white layout, logo loads, text doesn't overlap, footer links are present.
- **Correct tone** — the "ignore if you didn't request this" copy is calm, not alarmist, which is good security UX.

---

## 3. What didn't

- **Not a marketing email** — the entire rubric is built for promotional sends; this email has no offer, no CTA, no hero, no product. Scores below are structurally low by design, not by failure.
- **Subject is functional but forgettable** — "Here's your one-time code" does the job but is indistinguishable from every other OTP email across every brand in the inbox.
- **No contextual reminder of WHY the code was triggered** — "You requested this to access your Nike Member profile" would reduce phishing anxiety and help users who have multiple tabs open.

---

## 4. What I'd change

1. **Add the triggering action to the body** — replace "Here's the one-time verification code you requested:" with "You requested a code to sign in to your Nike Member profile on [device/browser]. Use it within 15 minutes." This is the single change that most reduces phishing confusion and support contacts.
2. **Differentiate the subject** — the current subject is generic across all OTP senders.
   - **Subject Alt A:** `Your Nike sign-in code: 58158630`
   - **Subject Alt B:** `Nike Member code — expires in 15 min`
   - **Preheader Alt A:** `Use this code to access your Nike Member profile. Expires in 15 minutes.`
   - **Preheader Alt B:** `Didn't request this? Ignore it — your account is safe.`
3. **Add a "Get Help" link inline** — the footer has "Get Help" but a user who's confused mid-auth won't scroll. A small text link below the expiry line ("Not you? Get help.") would reduce friction.

---

## 5. Business Impact Score (1-10)

**2/10**

- Sender is a brand you recognize / are subscribed to ✓
- No render bugs ✓

All other criteria (offer, CTA, hero, demographic signals, seasonal campaign, loyalty benefits, honest offer) are structurally absent — this is a transactional auth email, not a promotional send.

---

## 6. Open Likelihood (persona-grounded)

- **Score:** 5/10
- **Signals counted:** Sender display name is recognizable; Subject is concrete (specific offer/product/urgency); Subject is under ~50 chars; No spam signals (ALL CAPS, !!!, stacking); Time-bounded urgency that feels credible.
- **Rationale:** Nike is a recognized sender and the subject signals an expected, time-sensitive action — if you triggered this flow, you open immediately. Without that context, the subject is generic enough that it could be ignored.

---

## 7. Click-Through Likelihood (persona-grounded)

- **Score:** 1/10**
- **Signals counted:** No friction — no "view in browser" first, no broken-image gaps ✓
- **Rationale:** There is no CTA to click — the user copies a code and switches back to the browser. Click-through is not the success metric for this email type; completion of the auth flow is.

---

## 8. Subject

- **Subject:** `Here's your one-time code`
- **Length:** 26 chars
- **Scores (1-10):** Clarity `8`, Curiosity `2`, Personalization `1`, Urgency `4`, Specificity `5`

---

## 9. Preview

- **Preview:** `(none / leaking junk)` — no visible preheader; inbox clients would pull the first body copy: "Your Nike Member profile code"
- **Length:** n/a (no explicit preheader set)
- **Scores (1-10):** Complements subject `4`, Specificity `3`, Clarity `5`, Inbox-fit `3`

---

## Technical Audit

## Technical Audit — Nike "Here's your one-time code"

---

### 1. Technical Summary

Transactional OTP email with moderate infrastructure issues: missing plain-text fallback, an unresolved compliance failure on unsubscribe (unusual for a transactional send), and a mixed-content pixel. Authentication header capture is incomplete through the AgentMail relay.

---

### 2. Link & Tracking Issues

- **Tracking pixel uses HTTP**: `http://url3775.click.notifications.nike.com/wf/open?upn=u001.unHJZyh6Rw...` — non-HTTPS open-tracker will be blocked by Gmail, Apple Mail, and most modern clients. Open rate data for this send is unreliable.
- All other click links appear to route through `url3775.click.notifications.nike.com` (Nike's ESP click domain). No direct evidence of broken redirects, but HTTPS status of click links was not validated in QA.

---

### 3. Rendering & Accessibility

- **Missing alt text on tracking pixel**: `<img src="http://url3775.click.notifications.nike.com/wf/open?...">` has no `alt=""` attribute. Screen readers will attempt to read the raw URL.
- **Plain-text fallback is 0 characters**: Multi-part MIME requires a `text/plain` part. Its absence degrades deliverability scoring and breaks text-only clients and accessibility tools.
- Custom font (`Nike Futura`) loaded via `@font-face` with `url()` references — this is standard but will silently fall back in most email clients (Outlook, older iOS). Not a bug, but fallback stack should be verified in the CSS.

---

### 4. Personalization & Merge Tokens

No unrendered merge tokens (`{{`, `%%`, `*|`) detected in the truncated source. OTP code itself is not visible in the truncated HTML so cannot confirm whether it was injected correctly, but no raw token artifacts are present.

---

### 5. Compliance

- **[FAIL] No unsubscribe link detected in body**: CAN-SPAM §5(a)(3) requires a visible opt-out mechanism in all commercial email. For a pure transactional OTP this may be intentionally omitted under the transactional exemption — but that exemption only holds if the email contains *no* commercial content. If the truncated footer contains any promotional copy or product links, this is a violation.
- **[WARN] `List-Unsubscribe` header not captured**: May be a relay artifact (AgentMail). If the upstream ESP sends it, it should pass through; worth confirming the relay preserves this header.
- **[WARN] `List-Unsubscribe-Post` (RFC 8058) not found**: Gmail and Apple Mail use this for one-click unsubscribe UI. Missing for the same likely relay reason.
- **[WARN] `Authentication-Results` not captured**: SPF/DKIM/DMARC pass status is unknown. Nike's sending domain (`notifications.nike.com`) is expected to be properly authenticated, but the relay is not surfacing the results header for verification.

---

### 6. Email-to-Site Continuity

- No UTM parameters are expected or appropriate for a transactional OTP email — any links to nike.com in the footer should be checked to confirm they do not carry promotional UTMs that would misattribute traffic.
- Landing page continuity is not applicable for the primary CTA (OTP codes have no click destination).

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | Plain-text fallback missing (0 chars) | Add `text/plain` MIME part with OTP code and support contact |
| High | Open pixel over HTTP | Switch tracking pixel to HTTPS or update ESP configuration |
| Medium | Transactional exemption audit | Confirm footer contains no commercial content; if it does, add unsubscribe link |
| Medium | Relay header passthrough | Verify AgentMail forwards `List-Unsubscribe`, `List-Unsubscribe-Post`, and `Authentication-Results` headers |
| Low | Alt text on pixel | Add `alt=""` to suppress screen reader URL readout |
