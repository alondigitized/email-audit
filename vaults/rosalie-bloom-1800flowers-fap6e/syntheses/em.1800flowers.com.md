---
kind: synthesis
persona: rosalie-bloom-1800flowers-fap6e
brand: em.1800flowers.com
reactions: 116
through: 2026-11-06T05:33:37.000Z
created_at: 2026-08-11T18:19:20.305Z
updated_at: 2026-11-06T20:19:16.242Z
---

# ### Technical Audit Summary

The email from 1-800-FLOWERS.COM on June 5, 2026, has several technical issues that need to be addressed to ensure proper rendering and accessibility across different email clients. The main issues include rendering inconsistencies, accessibility concerns, and potential personalization errors. Below is a detailed breakdown of the findings and recommendations.

---

### 1. Technical Summary

- **Email Standard:** XHTML 1.0 Transitional with VML support for Outlook.
- **Dark Mode Support:** Dark mode meta tags are correctly declared.
- **Rendering Issues:** Several CSS and font-loading issues create rendering risk across major clients.

---

### 2. Link & Tracking Issues

**Cannot fully evaluate** — HTML source is truncated before body links appear. 

- **Action:** Verify all `href` values pass through a click-tracking redirect (e.g., `em.1800flowers.com` domain) and that the redirect chain does not exceed 2 hops.
- **Action:** Confirm no raw `http://` (non-TLS) destination links are present.

---

### 3. Rendering & Accessibility

**Non-standard mobile breakpoint — Medium risk**
- **Issue:** `@media only screen and (max-width: 418px)` targets only iPhone SE / small screens. Standard practice is `480px` or `600px`.
- **Action:** Raise the breakpoint to `480px` and remove hardcoded `414px` width values.

**Duplicate, redundant media queries**
- **Issue:** Two separate rules apply identical behavior:
  ```css
  @media only screen and (min-width: 768px) { img {max-width:640px} }
  @media only screen and (min-width: 640px) { img {max-width:640px} }
  ```
- **Action:** Remove the `768px` rule as it is fully superseded by the `640px` rule.

**Missing `lang` attribute on `<html>` tag**
- **Issue:** The opening `<html>` element uses `xmlns` attributes but no `lang="en"`.
- **Action:** Add `lang="en"` to the `<html>` tag for screen reader compliance.

**Aggressive text-size reset**
- **Issue:** `* {-webkit-text-size-adjust:none}` disables automatic text scaling on WebKit clients.
- **Action:** Change to `* {-webkit-text-size-adjust:100%}` to ensure text remains readable.

**`mso-line-height-rule:exactly` on wildcard selector**
- **Issue:** `* {mso-line-height-rule:exactly}` applies to every element.
- **Action:** Apply this rule only to elements with explicit `line-height` settings.

**Web font fallback inconsistency**
- **Issue:** Playfair Display weights 400, 600 italic, and 400 italic declare `mso-font-alt:'Times New Roman'`. Weights 900 normal and 900 italic lack this declaration.
- **Action:** Add `mso-font-alt:'Times New Roman'` for weights 900 normal and 900 italic.

**`.woff` format for Playfair Display 900**
- **Issue:** All other weights load `.woff2`, but weight 900 normal loads `.woff`.
- **Action:** Replace `.woff` with `.woff2` for weight 900 normal.

**External font loading blocked by Gmail and Outlook**
- **Issue:** All `@font-face` rules pull from `fonts.gstatic.com`.
- **Action:** Ensure every text element that uses Playfair Display or Lato has an explicit `font-family` stack ending in a web-safe font.

---

### 4. Personalization & Merge Tokens

**Subject line credit value — ambiguous**
- **Issue:** Subject line `"Send something special (+ $13.80 credit)"` may be a hardcoded promotional amount or a personalized merge token.
- **Action:** Seed-test with a zero-credit account to verify the subject line and body render gracefully.

---

### 5. Compliance

**Cannot fully evaluate** — footer not visible in truncated source.
- **Action:** Verify the footer includes:
  - Physical mailing address (CAN-SPAM §5(a)(5))
  - One-click unsubscribe link (CAN-SPAM §5(a)(3))
  - "This is a commercial message" identification

**Sender Domain Authentication:**
- **Action:** Check authentication headers (SPF, DKIM, DMARC) on `em.1800flowers.com`.

---

### 6. Email-to-Site Continuity

**Cannot evaluate** — no destination URLs visible in the truncated HTML.
- **Action:** Verify all CTA links carry consistent UTM parameters and ensure the `$13.80 credit` CTA lands on an authenticated account page.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **High** | Missing `lang="en"` on `<html>` | Add `lang="en"` to `<html>` for screen reader compliance. |
| **High** | `-webkit-text-size-adjust:none` | Change to `100%` on `body`, remove from `*` wildcard. |
| **Medium** | Mobile breakpoint at 418px | Raise to `480px`; remove hardcoded `414px` width values. |
| **Medium** | Verify `$13.80` subject-line token renders safely | Seed-test with zero-credit account. |
| **Medium** | Playfair 900 missing `mso-font-alt` and
