---
kind: synthesis
persona: ines-counter-department-store-fap6e
brand: beauty.sephora.com
reactions: 130
through: 2026-10-30T14:13:08.000Z
created_at: 2026-08-11T18:20:59.204Z
updated_at: 2026-10-31T18:22:01.662Z
---

# ### Technical Audit — Sephora "LAST DAY 10% off" Email

---

### 1. Technical Summary

The email uses a standard XHTML 1.0 Transitional broadcast template. The provided HTML is truncated at the CSS block, preventing full link, compliance, and tracking verification. Findings below are limited to what is observable in the `<head>` excerpt.

---

### 2. Link & Tracking Issues

**Cannot fully verify** — the HTML is truncated before any `<a>` tags or tracking pixels appear. A complete audit requires the full source.

---

### 3. Rendering & Accessibility

**Issue 1 — User zoom disabled (WCAG 2.1 SC 1.4.4 violation)**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```
`maximum-scale=1` blocks pinch-to-zoom for low-vision users on mobile. Should be removed or replaced with `user-scalable=yes`.

**Issue 2 — Aggressive text-size-adjust suppression**
```css
div, a, tr, table, body, span, img, strong, td {
  -webkit-text-size-adjust: none;
  -ms-text-size-adjust: none;
  -moz-text-size-adjust: none;
  text-size-adjust: none;
}
```
Applied globally across nearly every element. This disables OS-level text scaling for users who rely on it. Should be scoped only to elements with intentionally fixed font sizes (e.g., a specific pixel-locked header `td`), not `body` and `div` broadly.

**Issue 3 — Malformed robots meta value**
```html
<meta name="robots" content="no index" />
```
The value is `no index` (with a space) rather than the correct `noindex`. Most parsers will ignore this entirely. Low severity in email context, but indicates template hygiene issue.

---

### 4. Personalization & Merge Tokens

**Cannot verify** — no body content or merge token syntax is present in the truncated excerpt. Full source required to audit for unresolved `{{tokens}}`, `%%VARIABLE%%`, or similar patterns.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Cannot verify from HTML** — the excerpt ends inside the `<style>` block before any body content. The following cannot be confirmed without the full source:
- Physical mailing address (CAN-SPAM §7(a)(3))
- One-click unsubscribe link / `List-Unsubscribe` header
- Functional unsubscribe mechanism with ≤10-day processing window

**Sending domain observation** — `From: shop@beauty.sephora.com` uses a subdomain that may need to be verified for proper SPF, DKIM, and DMARC alignment to ensure deliverability and authentication.

---

### 6. Recommendations

1. **Remove `maximum-scale=1` from viewport meta tag** to allow pinch-to-zoom for low-vision users.
2. **Restrict `-text-size-adjust: none` to specific elements** rather than applying it globally.
3. **Correct the `robots` meta tag value** to `noindex` without the space.
4. **Provide full HTML source** for a comprehensive audit of links, tracking, personalization, and compliance.
5. **Verify sending domain authentication** to ensure proper SPF, DKIM, and DMARC alignment.

By addressing these issues, Sephora can improve the accessibility, compliance, and overall user experience of their email campaigns.
