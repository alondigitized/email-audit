---
slug: 2026-05-01-verify-your-account-you-re-almost-done-gq9tnsoetx-1snwnprk0nq-g
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

- This is a transactional verification email — OTP delivery, nothing more. The design is minimal and functional: a large 6-digit code on a light gray tile, two lines of instruction, a safety disclaimer, and a legal footer. There is nothing promotional here to evaluate for conversion. The relevant question for a transactional email is whether it does its one job clearly and without friction. It mostly does, though there are minor clarity and trust gaps worth noting.

## What's working

- **Code is visually prominent.** The gray tile + bold blue `946444` is instantly scannable. No hunting required.
- **Safety copy is present.** "If you didn't request this, you can ignore this email." covers the most important user concern.
- **Extremely low cognitive load.** One instruction, one code, done. No distractions.
- **Legal footer is complete.** Address, copyright, trademark notice — covers CAN-SPAM basics.

## What's weak

- **No expiry information.** The email says nothing about how long the code is valid. This is the single most common user anxiety with OTPs and its absence will drive support contacts.
- **"Verify Your Account" subject line mismatches the body headline.** The subject signals a flow ("you're almost done"), but the body opens with "All set, here's your code:" — slightly contradictory framing that may confuse users who weren't sure they initiated anything.
- **No direct link or next-step CTA.** For users who left the tab, there's no "Go back to Lowe's" or "Continue setup" button. They have to navigate back manually, adding friction.
- **Brand feels cold.** Aside from the logo, there's zero brand warmth. For a first-touch verification email this is a missed moment to reinforce trust ("Welcome to Lowe's — you're almost ready to access your account").
- **"Thank you for your business"** in the footer is semantically odd for an account-creation flow. The user hasn't transacted yet. Minor, but slightly off.

## Recommendations

- 1. **Add an expiry line.** A single sentence — "This code expires in 15 minutes." — directly below the code eliminates the most common OTP anxiety.
- 2. **Add a "Return to Lowe's" button.** Even a plain text link would reduce drop-off for users who navigated away.
- 3. **Align subject and body headline.** Either change the subject to match "All set, here's your code" or change the headline to match "You're almost done." Pick one framing.
- 4. **Add one sentence of context.** "You're verifying your Lowe's account at lowes.com." Ground the user. This also reduces phishing ambiguity.
- 5. **Replace "Thank you for your business"** with something appropriate for a pre-transaction touchpoint, e.g., "We're glad you're joining Lowe's."
- | Priority | Issue | Fix |
- |---|---|---|
- | High | Nested `<!DOCTYPE html>` inside `<td>` | Extract inner content into the outer document's body; remove the inner `<!DOCTYPE>`, `<html>`, `<head>`, `<body>` tags entirely |
- | High | `font-color` invalid CSS on anchor | Replace `font-color: #000000` with `color: #000000` |
- | Medium | Logo `<img>` missing `alt` | Add `alt="Lowe's"` |
- | Medium | Empty preheader module | Add meaningful preheader text (e.g., "Your Lowe's verification code is inside") |
- | Low | `<center>` deprecated | Replace with `style="text-align:center"` on parent elements |
- | Low | `<h5>` for disclaimer | Change to `<p>` with explicit styling |
- | Low | Fixed `height:50px` on OTP container | Switch to `min-height:50px` |
- | Info | Authentication-Results unavailable | Verify SPF/DKIM records for `e.lowes.com` via SendGrid directly |

## Full review
---

## 1. Executive Summary

This is a transactional verification email — OTP delivery, nothing more. The design is minimal and functional: a large 6-digit code on a light gray tile, two lines of instruction, a safety disclaimer, and a legal footer. There is nothing promotional here to evaluate for conversion. The relevant question for a transactional email is whether it does its one job clearly and without friction. It mostly does, though there are minor clarity and trust gaps worth noting.

---

## 2. Business Impact Score

**6/10** — It completes the functional task but underperforms on reassurance and brand reinforcement, which matter in account-verification flows where phishing anxiety is high.

---

## 3. What's Working

- **Code is visually prominent.** The gray tile + bold blue `946444` is instantly scannable. No hunting required.
- **Safety copy is present.** "If you didn't request this, you can ignore this email." covers the most important user concern.
- **Extremely low cognitive load.** One instruction, one code, done. No distractions.
- **Legal footer is complete.** Address, copyright, trademark notice — covers CAN-SPAM basics.

---

## 4. What's Weak

- **No expiry information.** The email says nothing about how long the code is valid. This is the single most common user anxiety with OTPs and its absence will drive support contacts.
- **"Verify Your Account" subject line mismatches the body headline.** The subject signals a flow ("you're almost done"), but the body opens with "All set, here's your code:" — slightly contradictory framing that may confuse users who weren't sure they initiated anything.
- **No direct link or next-step CTA.** For users who left the tab, there's no "Go back to Lowe's" or "Continue setup" button. They have to navigate back manually, adding friction.
- **Brand feels cold.** Aside from the logo, there's zero brand warmth. For a first-touch verification email this is a missed moment to reinforce trust ("Welcome to Lowe's — you're almost ready to access your account").
- **"Thank you for your business"** in the footer is semantically odd for an account-creation flow. The user hasn't transacted yet. Minor, but slightly off.

---

## 5. Recommendations

1. **Add an expiry line.** A single sentence — "This code expires in 15 minutes." — directly below the code eliminates the most common OTP anxiety.
2. **Add a "Return to Lowe's" button.** Even a plain text link would reduce drop-off for users who navigated away.
3. **Align subject and body headline.** Either change the subject to match "All set, here's your code" or change the headline to match "You're almost done." Pick one framing.
4. **Add one sentence of context.** "You're verifying your Lowe's account at lowes.com." Ground the user. This also reduces phishing ambiguity.
5. **Replace "Thank you for your business"** with something appropriate for a pre-transaction touchpoint, e.g., "We're glad you're joining Lowe's."

---

## 6. Bottom Line

Functional, not remarkable. The code is delivered clearly, but the email does almost nothing to reduce user anxiety, reorient users who lost their place in the flow, or reinforce brand trust at a high-intent moment. For a transactional email, these gaps directly affect completion rates. Small fixes — expiry time, a return link, one line of context — would materially improve the experience with zero design cost.

---

## 7. Subject Line Analysis

- **Subject:** `Verify Your Account: You're Almost Done`
- **Length:** 38 characters
- **Scores (1-10):** Clarity `7`, Curiosity `3`, Personalization `2`, Urgency `4`, Specificity `5`
- **Strengths:**
  - Clear transactional intent — recipient immediately knows this is account-related
  - "Almost Done" provides mild positive momentum
- **Weaknesses:**
  - Generic enough to pattern-match as phishing (no brand name in subject)
  - Zero personalization and no signal of what specifically triggered this
- **Alt A:** `Lowe's: Your verification code is ready`
- **Alt B:** `Your Lowe's account code — expires soon`

---

## 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — no intentional preheader visible; inbox likely shows the first body text "All set, here's your code:"
- **Length:** N/A (uncontrolled)
- **Scores (1-10):** Complements subject `4`, Specificity `3`, Clarity `5`, Inbox-fit `3`
- **Strengths:**
  - "All set, here's your code:" is at least action-relevant if it leaks as preview
- **Weaknesses:**
  - No dedicated preheader means preview content is unpredictable across clients
  - A phishing-anxious user sees "Verify Your Account" + leaked body text with no brand reassurance before opening
- **Alt A:** `Your 6-digit code is inside — expires in 15 minutes`
- **Alt B:** `One step left to access your Lowe's account`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `7/10`
- **Rationale:** If I just tried to create or log into a Lowe's account, I open this immediately because I need the code. If I didn't initiate it, the generic subject ("Verify Your Account" with no brand name) raises a mild phishing flag — I might hesitate briefly before recognizing the sender domain.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `3/10`
- **Rationale:** There is no CTA to click — the email's only job is code delivery, and I copy-paste the number manually. The lack of a return link means there's nothing to click even if I wanted to, so this score reflects pure structural absence rather than poor persuasion.

---

## 11. Evidence

- **Overall purpose:** OTP/verification code delivery for account creation or login
- **Hero / primary value proposition:** The `946444` code in a gray tile — the entire email exists to surface this number
- **Membership / benefits section:** None
- **Product discoverability / recommendation modules:** None
- **Utility / secondary modules:** Safety disclaimer ("If you didn't request this…"), legal footer with address and trademarks
- **Bugs / friction / clarity issues:** No expiry time stated anywhere visible; no return-to-site link; "Thank you for your business" footer copy is semantically misaligned with a pre-transaction verification flow

---

## Technical Audit

## Technical Audit — Lowe's "Verify Your Account" Email

### 1. Technical Summary

This is a transactional OTP email built on SendGrid, embedded inside a Sendwithus/SG-Campaigns outer wrapper. The most significant technical defect is a malformed nested document structure (`<!DOCTYPE html>` inside a `<td>`), accompanied by an invalid CSS property and deprecated HTML elements.

---

### 2. Link & Tracking Issues

**Click tracking:** All links route through `u17155529.ct.sendgrid.net/ls/click` — standard SendGrid redirect. Destination URL is truncated in the provided source; full destination cannot be confirmed.

**Open tracking pixel:** Present at `https://u17155529.ct.sendgrid.net/wf/open?upn=...` — no `alt` attribute, but this is acceptable for tracking pixels (empty alt is standard).

**No UTM parameters visible** on the truncated click URL. For a transactional email this is acceptable, but if the destination lands on a page with analytics, the session will appear as direct traffic.

---

### 3. Rendering & Accessibility

**Critical — nested document structure:** A second `<!DOCTYPE html>` and `<html><head><body>` tree is injected directly inside a `<td>` in the outer wrapper:

```html
<td height="100%" valign="top" data-role="module-content">
  <!DOCTYPE html>      <!-- invalid: DOCTYPE inside body -->
  <html>
    <head>
      <center><img src="...logo..."></center>
      <title>Lowe's</title>
    </head>
    <body>...</body>
  </html>
</td>
```

Email clients will handle this inconsistently — Gmail strips the inner `<html>`/`<head>`/`<body>` tags entirely and may misplace the logo. Outlook's Word renderer ignores nested doctypes but the resulting DOM is unpredictable.

**Invalid CSS property:** The "Thank you" anchor uses `font-color` which is not a valid CSS property:

```html
<a style="font-color: #000000; text-decoration: none;" href="...">
```

`font-color` has no effect. The link will inherit the outer rule `body a { color: #1188E6; }` and render in blue, not black as intended.

**Deprecated elements:** `<center>` is used three times. While most email clients tolerate it, it violates the XHTML Strict doctype declared in the outer wrapper (`"-//W3C//DTD XHTML 1.0 Strict//EN"`), which explicitly prohibits presentational elements.

**Missing alt text:** Logo image has no `alt` attribute (QA WARN confirmed):
```
src: https://image.e.lowes.com/lib/fe9515707364027471/m/59/14f6b444-13d4-4f6b-a52a-df9473ac4be2.png
```
With images blocked (common in corporate mail clients), the logo renders as a broken image with no fallback text.

**Semantic heading misuse:** `<h5>` is used for the "If you didn't request this" disclaimer — two heading levels below the surrounding `<h2>`, with no intervening `<h3>`/`<h4>`. Screen readers will announce this as a heading, which is incorrect for disclaimer copy.

**Empty preheader:** The preheader module contains `<p></p>` with no text. Inbox preview will pull the first visible body text ("All set, here's your code:") instead of a crafted preheader.

**OTP container height risk:** The code container is fixed at `height: 50px`. If a client increases font size or wraps the 6-digit code, the container clips the display.

---

### 4. Personalization & Merge Tokens

No unreplaced merge tokens detected. The verification code `946444` appears fully substituted. No `{{placeholder}}` or `[TOKEN]` artifacts present.

---

### 5. Compliance

**CAN-SPAM / unsubscribe:**

QA flags a FAIL for no unsubscribe link in the body. This email is transactional (OTP/account verification), which is exempt from CAN-SPAM's opt-out requirement under 15 U.S.C. § 7702(2)(A) provided it contains no commercial content. The body is purely transactional — no promotional offers, cross-sells, or commercial messaging — so the exemption applies. The QA FAIL is a false positive for this email type.

**List-Unsubscribe headers:** Not captured by the AgentMail relay (QA WARN). Expected to be absent for transactional mail; no issue.

**Authentication-Results:** Not forwarded through the relay (QA WARN). SPF/DKIM status for `noreply.lowes.com` via SendGrid cannot be confirmed from the available data. Sending domain should have SPF (`include:sendgrid.net`) and DKIM (`d=lowes.com` or `d=e.lowes.com`) configured — cannot verify here.

**Physical address:** Not present in the truncated source. CAN-SPAM requires a valid physical postal address in commercial email; transactional-only emails are exempt, but if any commercial content exists in the full email, this becomes a violation. Confirm the full source contains no promotional content.

---

### 6. Email-to-Site Continuity

The sole CTA link routes through SendGrid to an unresolvable destination (URL truncated). No UTM parameters are visible. For a pure verification flow, UTM attribution is not expected or necessary — the user's next action (entering the code on the website) is the conversion event, not a click.

No landing page mismatch can be assessed without the full destination URL.

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| High | Nested `<!DOCTYPE html>` inside `<td>` | Extract inner content into the outer document's body; remove the inner `<!DOCTYPE>`, `<html>`, `<head>`, `<body>` tags entirely |
| High | `font-color` invalid CSS on anchor | Replace `font-color: #000000` with `color: #000000` |
| Medium | Logo `<img>` missing `alt` | Add `alt="Lowe's"` |
| Medium | Empty preheader module | Add meaningful preheader text (e.g., "Your Lowe's verification code is inside") |
| Low | `<center>` deprecated | Replace with `style="text-align:center"` on parent elements |
| Low | `<h5>` for disclaimer | Change to `<p>` with explicit styling |
| Low | Fixed `height:50px` on OTP container | Switch to `min-height:50px` |
| Info | Authentication-Results unavailable | Verify SPF/DKIM records for `e.lowes.com` via SendGrid directly |
## Recent history

- [[2026-05-01-verify-your-account-you-re-almost-done]] — 6/10 (2026-05-01)

