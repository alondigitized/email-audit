---
kind: synthesis
persona: cole-drywall-lowes-fap6e
brand: e.lowes.com
reactions: 15
through: 2026-05-17T13:50:52.000Z
created_at: 2026-05-18T18:19:10.971Z
updated_at: 2026-05-18T18:19:10.971Z
---

# It seems like the technical audit for Lowe's "Save big on your outdoor reset" email is quite thorough, but there are a f

### Key Findings

1. **Missing `alt` Attributes:**
   - 8 images lack `alt` attributes, which can impact accessibility and SEO.
   - Tracking pixels should use `alt=""`.

2. **Overlapping Responsive Breakpoints:**
   - Two media queries overlap between `(min-width: 375px) and (max-width: 600px)` and `(max-width: 480px)`. This can cause CSS conflicts, though it's not a hard failure.

3. **Web Fonts:**
   - Web fonts are loaded via WOFF only without WOFF2 support or `format('woff2')` hinting.
   - Adding WOFF2 support would be beneficial for performance and compatibility with modern clients.

4. **Compliance Headers:**
   - The `List-Unsubscribe` and `List-Unsubscribe-Post` headers are not captured by the relay, but it's likely they are present in the original delivery.

### Recommendations

1. **Add Missing `alt` Attributes:**
   - Ensure all images have descriptive `alt` attributes.
   - Tracking pixels should use `alt=""`.

2. **Optimize Responsive Breakpoints:**
   - Verify and adjust CSS rules to avoid overlapping breakpoints, ensuring consistent styling across devices.

3. **Web Font Optimization:**
   - Add WOFF2 support for web fonts by including the `format('woff2')` hint in your font-family declarations.
   - Example:
     ```css
     @font-face {
       font-family: 'Fellix';
       src: url('/fonts/fellix.woff2') format('woff2'),
            url('/fonts/fellix.woff') format('woff');
       font-weight: normal;
       font-style: normal;
     }
     ```

4. **Verify Compliance Headers:**
   - Confirm the presence of `List-Unsubscribe` and `List-Unsubscribe-Post` headers in the original delivery.
   - Ensure these headers are correctly formatted and include unsubscribe mechanisms.

### Detailed Recommendations

#### 1. Missing `alt` Attributes
Ensure that all images have appropriate `alt` attributes:
```html
<img src="https://image.e.lowes.com/…/c301e24e-201b-46f9-8172-27b5acdcbf99.jpg" alt="Covered backyard patio with string lights">
```
For tracking pixels:
```html
<img src="https://mi.lowes.com/p/cp/e756885def464aa2/o.gif?mi_u=410146703" alt="">
```

#### 2. Overlapping Breakpoints
Adjust CSS to avoid overlapping rules:
```css
/* Example for resolving overlap */
@media (min-width: 375px) and (max-width: 480px) {
  .container { width: 100%; }
}

@media (min-width: 481px) and (max-width: 600px) {
  .container { width: calc(100% - 20px); }
}
```

#### 3. Web Font Optimization
Ensure web fonts are loaded with WOFF2 support:
```css
@font-face {
  font-family: 'Fellix';
  src: url('/fonts/fellix.woff2') format('woff2'),
       url('/fonts/fellix.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
```

#### 4. Compliance Headers
Verify the presence of `List-Unsubscribe` and `List-Unsubscribe-Post` headers in the original delivery:
```html
<!-- Example header -->
<List-Unsubscribe>mailto:unsubscribe@example.com</List-Unsubscribe>
<List-Unsubscribe-Post>InboxAction; Label="Unsubscribe"; DN="1"</List-Unsubscribe-Post>
```

By addressing these areas, Lowe's can improve the accessibility, performance, and compliance of their email campaigns.
