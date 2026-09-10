---
kind: synthesis
persona: vera-glow-beauty-fap6e
brand: beauty.sephora.com
reactions: 155
through: 2026-09-09T13:03:35.000Z
created_at: 2026-08-01T18:21:50.950Z
updated_at: 2026-09-10T18:21:41.426Z
---

# It looks like the technical audit for Sephora's "Ends Today" email is incomplete due to a truncated HTML source, which m

### 1. Technical Summary
The email uses a standard XHTML 1.0 Transitional table-based layout with extensive CSS media queries for responsive design.

### 2. Link & Tracking Issues
- **Cannot fully assess** — The HTML source is truncated before any `<a href>` tags appear, so the following cannot be confirmed or denied:
  - Click-tracking domain presence
  - Redirect chain depth
  - UTM parameter consistency

Flag for full-source re-run.

### 3. Rendering & Accessibility Issues
- **`maximum-scale=1` on viewport meta — Confirmed Issue**
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  ```
  This blocks pinch-to-zoom on iOS/Android and fails WCAG 1.4.4. Remove `maximum-scale=1`.

- **`text-size-adjust: none` applied to nearly all elements — Confirmed Issue**
  ```css
  div, a, tr, table, body, span, img, strong, td {
    -webkit-text-size-adjust: none;
    -ms-text-size-adjust: none;
    -moz-text-size-adjust: none;
    text-size-adjust: none;
  }
  ```
  This suppresses OS-level font scaling for users with low-vision settings. Overrides user accessibility preferences across the entire email body.

- **`robots` meta value has a space — Minor**
  ```html
  <meta name="robots" content="no index" />
  ```
  Should be `noindex` (no space). Technically invalid; most crawlers handle it, but it's a spec deviation.

- **Duplicate `.appear` class definition — Minor**
  The `.appear` ruleset is declared twice identically within the `@media only screen and (max-width: 480px)` block, adding dead weight to the CSS payload.

### 4. Personalization & Merge Tokens
**Cannot assess** — No body content visible in the truncated source. Full-source review needed to check for unfired/exposed tokens in body copy.

### 5. Compliance
- **Sender domain:** `shop@beauty.sephora.com` — Subdomain sender is expected for ESP delivery; DKIM/SPF/DMARC authentication cannot be verified from HTML alone (requires raw email headers).
  
- **Unsubscribe link, physical address (CAN-SPAM §5), and List-Unsubscribe header** — Cannot confirm. These are body/footer elements not yet visible in the truncated source.

### 6. Email-to-Site Continuity
**Cannot assess** — No `<a href>` tags are present in the truncated HTML to evaluate email-to-site continuity.

---

### Recommendations

1. **Remove `maximum-scale=1` from viewport meta tag** to ensure pinch-to-zoom functionality is available on mobile devices.
2. **Remove or modify CSS rules that set `text-size-adjust: none`** to respect user accessibility settings.
3. **Correct the `robots` meta value** to remove the space between "no" and "index".
4. **Review full HTML source for merge tokens and tracking links** to ensure personalization and click-tracking are functioning correctly.
5. **Verify compliance elements (unsubscribe, physical address, List-Unsubscribe header)** in the full email body.

By addressing these technical issues, you can improve the accessibility and user experience of the email while ensuring it adheres to best practices for deliverability and compliance.
