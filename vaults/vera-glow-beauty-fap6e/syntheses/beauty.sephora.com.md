---
kind: synthesis
persona: vera-glow-beauty-fap6e
brand: beauty.sephora.com
reactions: 248
through: 2026-10-28T13:11:32.000Z
created_at: 2026-08-01T18:21:50.950Z
updated_at: 2026-10-29T18:21:25.118Z
---

# ## Technical Audit Summary

### 1. Technical Summary
The email uses a standard XHTML 1.0 Transitional table-based layout with extensive CSS media-query stacking. The HTML is truncated, limiting a full assessment of links and tracking. Key findings are based on the visible HTML.

### 2. Link & Tracking Issues
- **Cannot fully assess** — HTML is truncated before any `<a href>` tags appear. The following cannot be confirmed or denied from the provided source:
  - Click-tracking domain presence
  - Redirect chain depth
  - UTM parameter consistency

### 3. Rendering & Accessibility
- **`maximum-scale=1` on viewport meta — confirmed issue**
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  ```
  Blocks pinch-to-zoom on iOS/Android. WCAG 1.4.4 failure. Remove `maximum-scale=1`.

- **`text-size-adjust: none` applied to nearly all elements — confirmed issue**
  ```css
  div, a, tr, table, body, span, img, strong, td {
    -webkit-text-size-adjust: none;
    -ms-text-size-adjust: none;
    -moz-text-size-adjust: none;
    text-size-adjust: none;
  }
  ```
  Suppresses OS-level font scaling for users with low-vision settings. Overrides user accessibility preferences across the entire email body.

- **`robots` meta value has a space — minor**
  ```html
  <meta name="robots" content="no index" />
  ```
  Should be `noindex` (no space). Technically invalid; most crawlers handle it, but it's a spec deviation.

- **Duplicate `.appear` class definition — minor**
  The `.appear` ruleset is declared twice identically within the `@media only screen and (max-width: 480px)` block, adding dead weight to the CSS payload.

- **Alt text on images — cannot assess** (source truncated before `<img>` tags).

### 4. Personalization & Merge Tokens
- **Cannot assess** — no body content visible in the truncated source. No merge tokens (`{{first_name}}`, `*|FNAME|*`, etc.) are visible in the `<head>` section, which is expected. Full-source review needed to check for unfired/exposed tokens in body copy.

### 5. Compliance
- **Sender domain:** `shop@beauty.sephora.com` — subdomain sender is expected for ESP delivery; DKIM/SPF/DMARC authentication cannot be verified from HTML alone (requires raw email headers).

- **Unsubscribe link, physical address (CAN-SPAM §5), and List-Unsubscribe header — cannot confirm** from truncated source. These are body/footer elements not yet visible.

### 6. Email-to-Site Continuity
- **Cannot assess** — no `<a href>` tags are present in the truncated source.

### Recommendations
1. **Remove `maximum-scale=1`** from the viewport meta tag to allow pinch-to-zoom on mobile devices.
2. **Remove `text-size-adjust: none`** from all elements to respect user accessibility settings.
3. **Correct `robots` meta value** to `noindex` without a space.
4. **Remove duplicate `.appear` class definitions** to reduce CSS payload.
5. **Review full source code** for links, tracking, personalization, and compliance elements.

By addressing these technical issues, the email will be more accessible, compliant, and user-friendly.
