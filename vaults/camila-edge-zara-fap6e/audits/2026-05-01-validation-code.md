---
slug: 2026-05-01-validation-code
type: email
date: 2026-05-01
persona: camila-edge-zara-fap6e
score: "4/10"
sender: Zara
subject: Validation code
tags: [email, score-4, sender/zara]
---
# Validation code
**Score:** 4/10 · **Type:** Email audit · **2026-05-01**
## Executive summary

- This is a transactional authentication email — a one-time validation code triggered by a login or account action. It is not a marketing email. There is no promotional content, offer, hero image, or CTA beyond the code itself. The email does its job: deliver a six-digit code cleanly. But it does only the bare minimum, and several small executional gaps leave the experience slightly below the standard set by top-tier transactional email.
- Low ceiling by design — it's a utility email, not a revenue driver. The score reflects execution quality relative to what a transactional email *should* do. It's functional but unpolished, and the security guidance copy is generic.

## What's working

- **Code legibility.** The six-digit code (`445109`) is displayed in a large, well-spaced monospace-style font. It is immediately readable, which is the one job this email must do.
- **Clean layout.** White background, Zara logo top-center, minimal chrome. No visual noise to distract from the code.
- **Security safety note.** "If you do not recognize this request, please change your password" is present — a baseline trust signal.
- **Brand identity intact.** Logo and typography are consistent with Zara's aesthetic.

## What's weak

- **No context.** There is nothing telling the recipient *what* they were validating — login, checkout, account creation, password reset? A user who triggered this five minutes ago and got distracted has no reminder of why this arrived.
- **No expiry window.** "This code can only be used once" is present, but there is no time limit stated. Most users expect to know if the code expires in 10 minutes or 24 hours.
- **Generic security copy.** "Please change your password" is the correct instruction, but there is no link to do so. Making the user go find that themselves adds friction in a moment of potential account compromise.
- **Footer is layout-broken.** The social links (TikTok, Instagram, Facebook, Pinterest, YouTube, Spotify) are rendered as plain left-aligned text in a single line that runs too wide for the container on smaller renders. They do not appear as icons or visually grouped buttons. "DOWNLOAD OUR APP" sits orphaned below with no store badge or link visible.
- **No legal/copyright line.** No address, no unsubscribe note (expected for transactional), no copyright. This may be compliant depending on jurisdiction, but it's sparse.
- **Unnecessary footer for this email type.** Social channels and "Download Our App" are promotional footer modules. They feel out of place and slightly dilute the urgency of a security-triggered email.

## Recommendations

- 1. **Add expiry time.** "This code expires in 10 minutes" immediately after the code display. Non-negotiable for transactional UX.
- 2. **Add context line.** One sentence above the code: "You requested this code to [verify your login / complete your purchase / create your account]." Reduces user confusion and phishing risk perception.
- 3. **Link the security warning.** Replace "please change your password" with "please [change your password](link) immediately." Remove one step of friction from a time-sensitive security action.
- 4. **Fix the social footer.** Either render social links as proper icon buttons or remove this footer entirely from the transactional template. Plain text "TIK TOK INSTAGRAM…" in a row reads as broken and erodes brand trust.
- 5. **Add a contact/help link that works.** "HELP" is listed but doesn't visually read as clickable in this render.
- **Priority 1 — Fix before next send**
- 1. **Fix logo HTTP → HTTPS**: Change `http://static.zara.net/photos/contents/apps/logo_Zara_2019.png` to `https://`. Blocking in Gmail/Outlook.com is immediate.
- 2. **Add `alt` to logo image**: `alt="ZARA"` minimum.
- 3. **Add plain-text MIME part**: Even a minimal "Your Zara validation code is [CODE]" body is sufficient; zero-char text part guarantees spam-folder placement in some filters.
- **Priority 2 — Compliance**
- 4. **Add physical address to footer**: Inditex SA's registered address satisfies CAN-SPAM if this email is classified commercial.
- 5. **Add unsubscribe link or confirm transactional classification**: If commercial, a footer unsubscribe link is required. If purely transactional, document that classification.
- 6. **Add `List-Unsubscribe` + `List-Unsubscribe-Post` headers** at the ESP level to satisfy Gmail/Yahoo bulk sender requirements (applies if send volume exceeds 5K/day).
- **Priority 3 — Asset cleanup**
- 7. **Remove or fix the two 404 SVG font URLs**: Either host the files at the declared paths or remove the `svg` format entries from the `@font-face` stack. The malformed `url("#https://...")` pattern on the `.eot` variant should also be corrected to a standard URL.
- 8. **Set `lang="en"` (or appropriate locale)** on `<html>` to enable correct screen reader pronunciation and bidirectional resolution.

## Full review
---

## 1. Executive Summary

This is a transactional authentication email — a one-time validation code triggered by a login or account action. It is not a marketing email. There is no promotional content, offer, hero image, or CTA beyond the code itself. The email does its job: deliver a six-digit code cleanly. But it does only the bare minimum, and several small executional gaps leave the experience slightly below the standard set by top-tier transactional email.

---

## 2. Business Impact Score: 4/10

Low ceiling by design — it's a utility email, not a revenue driver. The score reflects execution quality relative to what a transactional email *should* do. It's functional but unpolished, and the security guidance copy is generic.

---

## 3. What's Working

- **Code legibility.** The six-digit code (`445109`) is displayed in a large, well-spaced monospace-style font. It is immediately readable, which is the one job this email must do.
- **Clean layout.** White background, Zara logo top-center, minimal chrome. No visual noise to distract from the code.
- **Security safety note.** "If you do not recognize this request, please change your password" is present — a baseline trust signal.
- **Brand identity intact.** Logo and typography are consistent with Zara's aesthetic.

---

## 4. What's Weak

- **No context.** There is nothing telling the recipient *what* they were validating — login, checkout, account creation, password reset? A user who triggered this five minutes ago and got distracted has no reminder of why this arrived.
- **No expiry window.** "This code can only be used once" is present, but there is no time limit stated. Most users expect to know if the code expires in 10 minutes or 24 hours.
- **Generic security copy.** "Please change your password" is the correct instruction, but there is no link to do so. Making the user go find that themselves adds friction in a moment of potential account compromise.
- **Footer is layout-broken.** The social links (TikTok, Instagram, Facebook, Pinterest, YouTube, Spotify) are rendered as plain left-aligned text in a single line that runs too wide for the container on smaller renders. They do not appear as icons or visually grouped buttons. "DOWNLOAD OUR APP" sits orphaned below with no store badge or link visible.
- **No legal/copyright line.** No address, no unsubscribe note (expected for transactional), no copyright. This may be compliant depending on jurisdiction, but it's sparse.
- **Unnecessary footer for this email type.** Social channels and "Download Our App" are promotional footer modules. They feel out of place and slightly dilute the urgency of a security-triggered email.

---

## 5. Recommendations

1. **Add expiry time.** "This code expires in 10 minutes" immediately after the code display. Non-negotiable for transactional UX.
2. **Add context line.** One sentence above the code: "You requested this code to [verify your login / complete your purchase / create your account]." Reduces user confusion and phishing risk perception.
3. **Link the security warning.** Replace "please change your password" with "please [change your password](link) immediately." Remove one step of friction from a time-sensitive security action.
4. **Fix the social footer.** Either render social links as proper icon buttons or remove this footer entirely from the transactional template. Plain text "TIK TOK INSTAGRAM…" in a row reads as broken and erodes brand trust.
5. **Add a contact/help link that works.** "HELP" is listed but doesn't visually read as clickable in this render.

---

## 6. Bottom Line

Functional but barely. The core job — showing the code — is done well. Everything around it is either missing (expiry, context) or noise (promotional footer). For a brand as design-conscious as Zara, this transactional template is well below the visual and copy standard of their owned channels.

---

## 7. Subject Line Analysis

- **Subject:** `Validation code`
- **Length:** 15 characters
- **Scores (1-10):** Clarity `8`, Curiosity `1`, Personalization `1`, Urgency `3`, Specificity `5`
- **Strengths:**
  - Clear and unambiguous — the recipient knows exactly what type of email this is
  - Low phishing-risk framing (no "Your account is suspended!" panic language)
- **Weaknesses:**
  - Zero urgency — doesn't signal that the code expires or requires immediate action
  - Generic to the point of being invisible in a busy inbox
- **Alt A:** `Your Zara login code — expires in 10 min`
- **Alt B:** `445109 is your Zara code`

---

## 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)`
- **Length:** N/A
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - (None visible — no preheader text was set)
- **Weaknesses:**
  - Missing entirely; inbox will pull the first body text ("Your validation code is:") which adds nothing
  - Missed opportunity to surface the expiry window or reassure the user before they open
- **Alt A:** `Your one-time code is ready — use it now before it expires`
- **Alt B:** `Code inside — expires in 10 minutes. Didn't request this? Change your password.`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `8/10`
- **Rationale:** "Validation code" from Zara is immediately recognized as something I triggered — a login or checkout step. I open it reflexively because I need the code to proceed. The open is driven by functional necessity, not curiosity or brand pull.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `1/10`
- **Rationale:** There is no CTA to click. I copy the code, close the email, and move on. The social links and app download in the footer are invisible to me in this context — I'm not browsing Zara right now, I'm completing an account action.

---

## 11. Evidence

- **Overall purpose:** Transactional one-time-password (OTP) / account verification email
- **Hero / primary value proposition:** Six-digit code `445109` displayed in large, spaced numerals — the sole purpose of the email, executed cleanly
- **Membership / benefits section:** None present
- **Product discoverability / recommendation modules:** None present
- **Utility / secondary modules:** Single-use warning + security advisory copy; footer links (Help, Conditions of Purchase, Privacy Policy); social channel text links; "Download Our App" line
- **Bugs / friction / clarity issues (visible in render):**
  - Social footer links rendered as raw all-caps text in a single left-aligned row — no icons, no visual grouping, reads as layout failure
  - "DOWNLOAD OUR APP" orphaned below social row with no visible badge or actionable link
  - No expiry information visible anywhere in the email body

---

## Technical Audit

## Technical Audit — Zara "Validation code" Email

**From:** noreply@zara.com | **Subject:** Validation code | **Date:** 2026-05-01

---

### 1. Technical Summary

This is a transactional OTP email built on MJML with a solid responsive table structure, but it has multiple compliance failures (missing unsubscribe link, no physical address, absent plain-text fallback) that create CAN-SPAM exposure, plus broken SVG font assets and an HTTP image source that will be blocked in secure clients.

---

### 2. Link & Tracking Issues

| Severity | Issue | Evidence |
|---|---|---|
| FAIL | Two SVG font files return 404 | `NeueHelveticaforZara-MdCn.svg#{NeueHelveticaforZara-MdCn}` and `NeueHelveticaforZara-LtCn.svg#{NeueHelveticaforZara-LtCn}` — both 404 per QA |
| WARN | Broken `src` pattern on `.eot` font variant | Second `src:` rule uses `url("#https://...")` — the leading `#` makes it an invalid URL fragment, not a real font reference |

No click-tracking or UTM links detected in truncated source — consistent with a transactional OTP flow, but see §6.

---

### 3. Rendering & Accessibility

| Severity | Issue | Evidence |
|---|---|---|
| WARN | Logo image has no `alt` text | `logo_Zara_2019.png` — `[WARN] Image missing alt text` |
| WARN | Logo served over HTTP | `src="http://static.zara.net/photos/contents/apps/logo_Zara_2019.png"` — Gmail, Outlook.com, and iOS Mail block mixed-content HTTP images; logo will not render |
| WARN | Tracking pixel has no `alt` | `e.gif` at `ir.zara.com` — screen readers will announce filename |
| INFO | `lang=""` on `<html>` | `lang` attribute is empty; assistive technology cannot determine language for correct pronunciation |
| INFO | `dir="auto"` used throughout | Combined with empty `lang`, bidirectional resolution is indeterminate |
| INFO | SVG 404s mean Neue-Helvetica will not load in legacy iOS Mail | Fallback stack not confirmed in truncated source — rendering will degrade silently |

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (`{{`, `%7B%7B`, `*|`, `[%`) visible in truncated source. Email appears to be a static OTP template with no dynamic personalization beyond the validation code itself (code block not visible in truncated source — verify the OTP injection point is present in full source).

---

### 5. Compliance

| Severity | Issue | Evidence |
|---|---|---|
| FAIL | No unsubscribe link in body | QA: `[FAIL] No unsubscribe link found in body` — CAN-SPAM §5(a)(5) requires a visible opt-out mechanism in every commercial email |
| FAIL | No physical mailing address | QA: `[WARN] No physical address detected` — CAN-SPAM §5(a)(5)(A) requires sender's postal address |
| FAIL | Plain-text MIME part absent | QA: `Text version is 0 chars` — spam filters penalize HTML-only messages; RFC 2822 best practice requires a `text/plain` alternative |
| WARN | `List-Unsubscribe` header not captured | QA: both `List-Unsubscribe` and `List-Unsubscribe-Post` (RFC 8058) absent — Gmail and Yahoo one-click unsubscribe requirement not met |
| WARN | SPF/DKIM status unknown | `Authentication-Results` header not present in relay capture — cannot confirm DMARC alignment |

**Note:** If this email is classified as purely transactional (OTP only, no promotional content), CAN-SPAM's commercial-email requirements may not apply. However, the subject line "Validation code" gives no commercial signal — verify classification before relying on the transactional exemption.

---

### 6. Email-to-Site Continuity

No actionable links (CTAs, product links) are visible in the truncated source beyond font/asset URLs. If the full email body contains any link back to zara.com, verify:

- UTM parameters present (`utm_source=email&utm_medium=transactional`)
- Links use HTTPS
- Landing page matches stated intent (OTP validation, not a marketing page)

No issues confirmed from available source.

---

### 7. Recommendations

**Priority 1 — Fix before next send**

1. **Fix logo HTTP → HTTPS**: Change `http://static.zara.net/photos/contents/apps/logo_Zara_2019.png` to `https://`. Blocking in Gmail/Outlook.com is immediate.
2. **Add `alt` to logo image**: `alt="ZARA"` minimum.
3. **Add plain-text MIME part**: Even a minimal "Your Zara validation code is [CODE]" body is sufficient; zero-char text part guarantees spam-folder placement in some filters.

**Priority 2 — Compliance**

4. **Add physical address to footer**: Inditex SA's registered address satisfies CAN-SPAM if this email is classified commercial.
5. **Add unsubscribe link or confirm transactional classification**: If commercial, a footer unsubscribe link is required. If purely transactional, document that classification.
6. **Add `List-Unsubscribe` + `List-Unsubscribe-Post` headers** at the ESP level to satisfy Gmail/Yahoo bulk sender requirements (applies if send volume exceeds 5K/day).

**Priority 3 — Asset cleanup**

7. **Remove or fix the two 404 SVG font URLs**: Either host the files at the declared paths or remove the `svg` format entries from the `@font-face` stack. The malformed `url("#https://...")` pattern on the `.eot` variant should also be corrected to a standard URL.
8. **Set `lang="en"` (or appropriate locale)** on `<html>` to enable correct screen reader pronunciation and bidirectional resolution.
