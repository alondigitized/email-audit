---
kind: synthesis
persona: ines-counter-department-store-fap6e
brand: beauty.sephora.com
reactions: 53
through: 2026-08-10T13:15:04.000Z
created_at: 2026-08-11T18:20:59.204Z
updated_at: 2026-08-11T18:20:59.204Z
---

# ### Technical Audit Summary for Sephora "LAST DAY 10% off" Email

#### Overview:
The email is built using XHTML 1.0 Transitional standards, but the provided HTML is truncated at the CSS block, making it impossible to fully verify link and tracking issues, personalization tokens, and compliance elements like unsubscribe mechanisms and CAN-SPAM requirements.

#### Issues Identified:

**Rendering & Accessibility:**
1. **User Zoom Disabled (WCAG 2.1 SC 1.4.4 Violation)**
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
   ```
   - **Issue:** The `maximum-scale=1` attribute blocks pinch-to-zoom on mobile devices.
   - **Solution:** Remove or replace with `user-scalable=yes`.

2. **Aggressive Text-Size Adjustment Suppression**
   ```css
   div, a, tr, table, body, span, img, strong, td {
     -webkit-text-size-adjust: none;
     -ms-text-size-adjust: none;
     -moz-text-size-adjust: none;
     text-size-adjust: none;
   }
   ```
   - **Issue:** This CSS rule disables OS-level text scaling for users who rely on it.
   - **Solution:** Scope this to specific elements with fixed font sizes, not globally.

3. **Malformed Robots Meta Value**
   ```html
   <meta name="robots" content="no index" />
   ```
   - **Issue:** The value should be `noindex` without a space.
   - **Severity:** Low in email context but indicates template hygiene issues.

#### Link & Tracking Issues:
- **Cannot fully verify** — the HTML is truncated before any `<a>` tags or tracking pixels appear. A complete audit requires the full source code.

#### Personalization & Merge Tokens:
- **Cannot verify** — no body content or merge token syntax is present in the truncated excerpt. Full source required to audit for unresolved tokens and personalization issues.

#### Compliance (CAN-SPAM, Unsubscribe, Authentication):
- **Cannot verify from HTML** — the excerpt ends inside the `<style>` block before any body content.
  - Physical mailing address (required by CAN-SPAM §7(a)(3))
  - One-click unsubscribe link / `List-Unsubscribe` header
  - Functional unsubscribe mechanism with ≤10-day processing window

#### Sending Domain Observation:
- **From:** shop@beauty.sephora.com
  - The sending domain should be verified for SPF, DKIM, and DMARC records to ensure proper email authentication.

### Recommendations:

1. **Remove or Adjust Viewport Meta Tag:**
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
   ```

2. **Scoping Text-Size Adjustment Rules:**
   Apply `-webkit-text-size-adjust` and similar rules only to specific elements where fixed font sizes are required.

3. **Correct Robots Meta Tag Value:**
   ```html
   <meta name="robots" content="noindex">
   ```

4. **Full Source Code Audit Required:**
   To fully verify links, tracking pixels, personalization tokens, and compliance requirements, the complete HTML source code is necessary.

5. **Ensure Proper Email Authentication:**
   Verify SPF, DKIM, and DMARC records for the sending domain to prevent email spoofing and ensure deliverability.

By addressing these issues, Sephora can improve the accessibility, user experience, and technical compliance of their emails, ensuring they meet best practices and standards for effective email marketing.
