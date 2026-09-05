---
kind: synthesis
persona: vera-glow-beauty-fap6e
brand: cheers.drunkelephant.com
reactions: 68
through: 2026-09-04T16:02:04.000Z
created_at: 2026-06-16T18:18:49.855Z
updated_at: 2026-09-05T18:18:22.975Z
---

# It looks like there was an issue with the HTML comments inside a CSS `@media` block. Let's address this and other techni

### Technical Audit — Drunk Elephant Friends & Family Sale

#### 1. Technical Summary
The email is built on a legacy XHTML 1.0 Transitional table layout with VML Outlook support. Two confirmed CSS bugs and a redundant font-loading architecture are the primary technical risks; compliance and tracking cannot be fully assessed from the truncated source.

---

### 2. Link & Tracking Issues

**Cannot fully assess — HTML truncated before anchor tags appear.**

- **Sending Domain:**
  - Sending domain is `cheers.drunkelephant.com` (subdomain).
  - If click-tracking redirects route through a different domain, ensure that the redirect domain shares DKIM alignment with the envelope sender or Gmail/Yahoo may flag it.

---

### 3. Rendering & Accessibility

**[HIGH] Invalid HTML comment syntax inside CSS `@media` block**
```css
@media only screen and (max-width: 600px) {
  *[class=hide] { display: none !important; }
  /* Remove the following lines as they are invalid */
  <!-- *[class=contenttable] { width:414px !important;} -->
  <!-- *[class=mobile] { width:414px !important;height: auto !important;} -->
```
- **Fix:** Remove or correct the HTML comment syntax inside CSS blocks.

**[LOW] Redundant font-loading architecture**
```html
<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
</style>
```
- **Fix:** Remove one of the redundant font loading methods. Keep either `<link>` or `@import` but not both.

**[LOW] CSS bug: Display none on inline elements**
```css
*[class=hide] { display: none !important; }
```
- **Fix:** Ensure that elements with class `hide` are block-level elements if you want them to be hidden. Inline elements should use `visibility: hidden;` or `opacity: 0;`.

---

### Recommendations

1. **Remove Invalid Comments**
   - Remove the invalid HTML comments inside CSS blocks.

2. **Optimize Font Loading**
   - Choose one method for loading fonts (either `<link>` or `@import`) and remove the other.

3. **Ensure Proper Display Properties**
   - Ensure that elements with class `hide` are block-level elements if you want them to be hidden. For inline elements, use `visibility: hidden;` or `opacity: 0;`.

4. **Check for Other CSS Bugs**
   - Review the full source code for any other CSS bugs or inconsistencies.

5. **Ensure Proper Tracking Parameters**
   - Ensure that tracking parameters are correctly implemented in all links, especially if redirects are involved.

By addressing these issues, you can improve the rendering consistency and accessibility of your email across different clients.
