---
kind: synthesis
persona: tank-stud-home-improvement-fap6e
brand: e.lowes.com
reactions: 92
through: 2026-08-04T13:27:32.000Z
created_at: 2026-06-06T18:20:50.493Z
updated_at: 2026-08-05T18:20:37.955Z
---

# ### Technical Audit Summary

The Lowe's Memorial Day Savings email has several technical issues that need to be addressed to improve compliance, security, and user experience. Here’s a detailed breakdown of the findings:

---

### 1. **Technical Summary**

- **HTML Compliance:** XHTML 1.0 Transitional with functional responsive breakpoints.
- **Compliance Gaps:**
  - Missing `List-Unsubscribe` header (required by major email providers).
  - SPF/DKIM status unknown via relay (should be verified and configured).
- **Data Exposure:** Five tracking pixels expose the recipient's email address in plaintext URLs, which can be logged by proxies or security appliances.

---

### 2. **Link & Tracking Issues**

**Tracking Pixels Exposing PII:**
Five beacon URLs include the recipient’s email address as a query parameter:

```
https://sli.lowes.com/imp?s=1090838&e=cole-drywall-lowes-fap6e@etell.app&p=5172026&lctg=410146703&stpe=static
```

- **Risk:** Any proxy, CDN, or mail security appliance that logs image requests will capture the email address.
- **Recommendation:** Use non-personalized tracking URLs or ensure PII is encrypted and not exposed in plaintext.

---

### 3. **Rendering & Accessibility**

**Missing `alt` Text:**
Eight images lack descriptive alt text:

| Image | URL (truncated) |
|---|---|
| Hero image | `.../c301e24e-201b-46f9-8172-27b5acdcbf99.jpg` |
| Open-pixel | `mi.lowes.com/p/cp/.../o.gif?mi_u=410146703` |
| 5× impression beacons | `sli.lowes.com/imp?s=...` |
| Promo image | `.../ad569dc5-361d-4d7d-8bc0-1ae6ec389f05.png` |

- **Recommendation:** Add descriptive alt text for hero and promo images, and use `alt=""` for tracking pixels to suppress screen-reader announcements.

**Responsive Breakpoints:**
Two overlapping media queries defined:
- `min-width: 375px AND max-width: 600px` (WebKit-only)
- `max-width: 480px`

- **Issue:** Devices between 480–600px get only the WebKit-scoped styles, not full mobile ruleset.
- **Recommendation:** Ensure consistent media queries to cover all devices.

**Font Loading:**
Four `@font-face` blocks load `.woff` only (no `.woff2` fallback).

- **Recommendation:** Add `.woff2` fallback for better performance and compatibility with modern clients.

---

### 4. **Personalization & Merge Tokens**

No unresolved merge tokens visible in the truncated source.
- **lctg=410146703** and **mi_u=410146703** consistently applied, suggesting correct subscriber ID usage.
- **Recommendation:** Ensure all personalization tokens are correctly resolved before sending.

---

### 5. **Compliance**

**List-Unsubscribe Header:**
Not found in the email headers (required by Gmail and Yahoo).

- **Risk:** Missing header can lead to increased spam complaints or delivery issues.
- **Recommendation:** Add a `List-Unsubscribe` header at the ESP level or via relay configuration.

---

### Recommendations

1. **Add List-Unsubscribe Header:**
   - Ensure the email includes a `List-Unsubscribe` header for better compliance and deliverability.

2. **Secure Tracking URLs:**
   - Use non-personalized tracking URLs to avoid exposing PII in plaintext.
   
3. **Improve Image Accessibility:**
   - Add descriptive alt text for hero and promo images, and use empty `alt=""` for tracking pixels.

4. **Consistent Responsive Design:**
   - Ensure consistent media queries to cover all device sizes without overlap.

5. **Optimize Font Loading:**
   - Use `.woff2` fallbacks for better performance on modern clients.

By addressing these technical issues, Lowe's can improve the email’s compliance, security, and user experience, leading to higher engagement rates and reduced delivery issues.
