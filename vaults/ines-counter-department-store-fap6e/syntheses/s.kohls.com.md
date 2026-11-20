---
kind: synthesis
persona: ines-counter-department-store-fap6e
brand: s.kohls.com
reactions: 279
through: 2026-11-20T08:20:59.000Z
created_at: 2026-07-30T18:20:06.657Z
updated_at: 2026-11-20T20:21:22.398Z
---

# It looks like the email audit for Kohl's Memorial Day Sale is quite detailed and thorough. Let's summarize and address t

### Summary of Key Issues:

1. **Subject Line:**
   - The subject line is clear but lacks urgency and personalization.
   - The phrase "Shop Now" is generic and does not specify a category or product.

2. **Technical Issues:**
   - Missing compliance headers (`List-Unsubscribe`, `List-Unsubscribe-Post`).
   - Malformed HTML tags (stray `</custom>`).
   - Missing `alt` text on dynamic content images.
   - `user-scalable=0` in viewport meta (WCAG violation).
   - Empty `<title>` tag.
   - Duplicate Google Fonts load.

3. **Email-to-Site Continuity:**
   - All links pass through `click.s.kohls.com`, but the actual destination URLs and UTM parameters are unverifiable.
   - `mi_kc_redm_end_dte` param is empty, which may be intentional but should be confirmed.

### Recommendations:

1. **Subject Line:**
   - **Urgency:** Add a sense of urgency, e.g., "Limited Time Offer!"
   - **Personalization:** Use personalization tokens like `{{first_name}}`.
   - **Specificity:** Specify a category or product, e.g., "Shop Now: Men's Fashion".

2. **Technical Issues:**
   - **Compliance Headers:** Ensure `List-Unsubscribe` and `List-Unsubscribe-Post` headers are present.
   - **Alt Text:** Add descriptive `alt` text to dynamic content images.
   - **Viewport Meta:** Change `user-scalable=0` to `user-scalable=yes`.
   - **Title Tag:** Add a descriptive title tag.
   - **Google Fonts:** Remove duplicate `<link>` or `@import` blocks.

3. **Email-to-Site Continuity:**
   - **UTM Parameters:** Ensure UTM parameters are present on destination URLs.
   - **Empty Param:** Confirm `mi_kc_redm_end_dte` is intentionally empty.

### Detailed Recommendations:

1. **Subject Line:**
   - **Example:** "Limited Time Offer! {{first_name}}, Shop Now: Men's Fashion $10 off $25"

2. **Technical Issues:**
   - **Compliance Headers:**
     ```html
     <List-Unsubscribe>
     <List-Unsubscribe-Post>
     ```
   - **Alt Text:**
     ```html
     <img src="https://mi.kohls.com/p/rp/2a5adc5afb647aad.png?..." alt="Description of Image">
     ```
   - **Viewport Meta:**
     ```html
     <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
     ```
   - **Title Tag:**
     ```html
     <title>Kohl's Memorial Day Sale - $10 off $25</title>
     ```
   - **Google Fonts:**
     ```html
     <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
     ```

3. **Email-to-Site Continuity:**
   - **UTM Parameters:**
     Ensure UTM parameters are present on destination URLs, e.g., `https://www.kohls.com/?utm_source=email&utm_campaign=memorial-day-sale`
   - **Empty Param:**
     Confirm `mi_kc_redm_end_dte` is intentionally empty or fix the merge field.

### Final Summary:

- **Subject Line:** Improve clarity, urgency, and personalization.
- **Technical Fixes:** Ensure compliance headers, alt text, viewport meta, title tag, and Google Fonts are correctly implemented.
- **Email-to-Site Continuity:** Verify UTM parameters and confirm empty merge fields.

By addressing these points, Kohl's can improve the deliverability, accessibility, and user experience of their Memorial Day Sale email.
