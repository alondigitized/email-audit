---
kind: synthesis
persona: rosie-coupon-kohls-fap6e
brand: beauty.sephora.com
reactions: 142
through: 2026-11-06T18:04:02.000Z
created_at: 2026-08-08T18:21:53.871Z
updated_at: 2026-11-07T20:18:50.392Z
---

# ### Summary of Technical Audit

The email from Sephora, titled "Starts today! You have 10% off 🎉", has several technical issues that need to be addressed to improve accessibility and compliance. Here is a detailed breakdown of the issues and recommendations:

---

### 1. Technical Summary

The email uses XHTML 1.0 Transitional with Outlook VML namespaces and a fluid/responsive CSS approach. However, the HTML is truncated before the `<body>` content, preventing a full audit of links, compliance footers, and merge tokens. This truncation limits the ability to fully assess the email's technical integrity.

---

### 2. Link & Tracking Issues

**Cannot fully audit** — The HTML is truncated before `<body>` content, so no href values are visible in the provided source. No issues confirmed from the available source.

---

### 3. Rendering & Accessibility

**[HIGH] `maximum-scale=1` blocks pinch-to-zoom on mobile**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```
**Issue:** This declaration prevents users from scaling text on mobile devices, violating WCAG 1.4.4. **Recommendation:** Remove `maximum-scale=1` or set it to `maximum-scale=5` to allow users to zoom in.

**[HIGH] `text-size-adjust: none` applied to body-level selectors**
```css
div, a, tr, table, body, span, img, strong, td {
  -webkit-text-size-adjust: none;
  -ms-text-size-adjust: none;
  -moz-text-size-adjust: none;
  text-size-adjust: none;
}
```
**Issue:** This broad selector list includes `body` and `div`, which suppresses accessibility zoom across all content. **Recommendation:** Limit this declaration to specific layout containers instead of applying it globally.

**[LOW] Duplicate `.appear` rule block in mobile media query**
```css
*[class=appear], .appear { display: block !important; width: 100% !important; ... }
/* ... defined again three lines later with identical declarations */
```
**Issue:** This is a redundant declaration that indicates a copy-paste error in the CSS build. **Recommendation:** Remove the duplicate block to clean up the CSS.

**[INFO] Image alt text and role attributes** — cannot audit from truncated source.
**Recommendation:** Ensure all images have appropriate `alt` text and `role` attributes for accessibility.

---

### 4. Personalization & Merge Tokens

**[LOW] Subject line discount value appears static**
```
Subject: Starts today! You have 10% off 🎉
```
**Issue:** No merge token visible for the discount value. If this is a dynamic offer, the value should be token-driven. **Recommendation:** Confirm if the discount value is dynamic and use merge tokens if necessary.

No exposed/unfired merge tokens visible in the available source.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Cannot fully audit** — The HTML is truncated before the footer, so the physical mailing address and unsubscribe link are not visible in the provided source.

**[LOW] `robots` meta tag has malformed value**
```html
<meta name="robots" content="no index" />
```
**Issue:** The `no index` value is malformed. **Recommendation:** Correct the value to `noindex, nofollow`.

---

### Recommendations

1. **Fix the HTML truncation issue** to ensure a full audit of the email's technical integrity.
2. **Remove or modify** the `maximum-scale=1` and `text-size-adjust: none` declarations to improve accessibility.
3. **Clean up the CSS** by removing duplicate `.appear` rule blocks.
4. **Ensure proper personalization** by using merge tokens for dynamic values.
5. **Verify CAN-SPAM compliance** by ensuring the physical mailing address and unsubscribe link are present.
6. **Correct the `robots` meta tag** to `noindex, nofollow`.

By addressing these issues, the email will be more accessible, compliant, and technically sound, enhancing the overall user experience and conversion rates.
