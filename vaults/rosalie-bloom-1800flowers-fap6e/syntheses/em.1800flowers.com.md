---
kind: synthesis
persona: rosalie-bloom-1800flowers-fap6e
brand: em.1800flowers.com
reactions: 54
through: 2026-08-11T05:06:47.000Z
created_at: 2026-08-11T18:19:20.305Z
updated_at: 2026-08-11T18:19:20.305Z
---

# ### Summary of Technical Audit for 1-800-FLOWERS.COM (June 5, 2026)

The email from 1-800-FLOWERS.COM has several technical issues that need to be addressed to improve rendering consistency and accessibility across various clients. Here's a detailed breakdown:

---

### 1. Technical Summary

**Email Structure:**
- **Standard XHTML:** The email uses XHTML 1.0 Transitional, which is widely supported.
- **VML Namespace Support:** VML namespace is included for Outlook compatibility.

**Dark Mode Meta Tags:**
- Dark mode meta tags are present but may not be fully utilized due to other CSS issues.

---

### 2. Link & Tracking Issues

**Evaluation Limitations:**
- The HTML source is truncated, preventing a full evaluation of link and tracking mechanisms.
- **Action:** Verify all `href` values pass through click-tracking redirects (e.g., `em.1800flowers.com`) and ensure no raw HTTP links are present.

---

### 3. Rendering & Accessibility

**Non-standard Mobile Breakpoint:**
- The mobile breakpoint is set at `418px`, which targets only iPhone SE and similar small screens.
- **Action:** Adjust the breakpoint to a standard value like `480px` or `600px`.

**Duplicate Media Queries:**
- Two media queries apply identical behavior for images (`min-width: 768px` and `min-width: 640px`).
- **Action:** Remove the redundant `@media only screen and (min-width: 768px)` rule.

**Missing `lang` Attribute:**
- The `<html>` tag lacks a `lang="en"` attribute, which is crucial for screen readers.
- **Action:** Add `lang="en"` to ensure proper pronunciation rules are selected by screen readers.

**Aggressive Text Size Reset:**
- The CSS rule `* {-webkit-text-size-adjust:none}` disables automatic text scaling on WebKit clients.
- **Action:** Change this to `100%` or remove it entirely to allow for better readability and accessibility.

**Global `mso-line-height-rule`:**
- Applying `mso-line-height-rule:exactly` globally can cause issues with dynamically-sized content in Outlook.
- **Action:** Apply this rule only to elements where explicit line heights are set.

**Web Font Fallback Inconsistency:**
- Some Playfair Display weights lack the necessary fallback font declaration (`mso-font-alt:'Times New Roman'`) for Outlook.
- **Action:** Ensure all weights have a consistent and appropriate fallback font declared.

**Font Format Inconsistency:**
- The 900-weight normal variant of Playfair Display uses `.woff` instead of `.woff2`.
- **Action:** Switch to `.woff2` for better performance and broader support.

---

### 4. Personalization & Merge Tokens

**Subject Line Credit Value:**
- The `$13.80` value in the subject line is ambiguous; it could be a hardcoded promotional amount or a personalized merge token.
- **Action:** Seed-test with an account that has no credit balance to ensure the subject line renders safely.

---

### 5. Compliance

**Footer Elements:**
- Physical mailing address, unsubscribe link, and commercial message identification are required by CAN-SPAM §5(a).
- **Action:** Verify these elements are present in the footer of the email.

**Authentication Headers:**
- Authentication headers (SPF, DKIM, DMARC) need to be verified for proper alignment.
- **Action:** Check MX Toolbox or mail header of a delivered copy to ensure proper authentication.

---

### 6. Email-to-Site Continuity

**CTA Links:**
- Ensure all CTA links carry consistent UTM parameters and land on authenticated pages when necessary.
- **Action:** Verify that the `$13.80 credit` CTA lands on an authenticated page if applicable.

---

### Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | Missing `lang="en"` on `<html>` | Add attribute; screen reader compliance |
| High | `-webkit-text-size-adjust:none` | Change to `100%` on `body`, remove from `*` wildcard |
| Medium | Mobile breakpoint at 418px | Raise to `480px`; remove hardcoded `414px` width values |
| Medium | Verify `$13.80` subject-line token renders safely | Seed-test with zero-credit account |
| Medium | Playfair 900 missing `mso-font-alt` and uses `.woff` | Add fallback; switch to `.woff2` |
| Low | Duplicate `min-width` media queries | Remove the `768px` rule |

---

By addressing these issues, 1-800-FLOWERS.COM can improve their email's rendering consistency, accessibility, and compliance across various clients.
