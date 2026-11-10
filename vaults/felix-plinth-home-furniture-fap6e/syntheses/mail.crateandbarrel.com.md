---
kind: synthesis
persona: felix-plinth-home-furniture-fap6e
brand: mail.crateandbarrel.com
reactions: 1295
through: 2026-11-09T22:37:11.000Z
created_at: 2026-05-16T18:19:07.018Z
updated_at: 2026-11-10T20:19:24.012Z
---

# ### Technical Audit: Crate & Barrel — Memorial Day Event Email

---

### 1. Technical Summary

The email uses a well-established XHTML 1.0 Transitional table-based template with standard MSO conditional comments. Several residual developer artifacts and CSS conflicts were identified in the `<head>`; the body is truncated so link, compliance, and personalization sections are partially assessable.

---

### 2. Link & Tracking Issues

**Cannot fully assess** — HTML is truncated before anchor tags appear. No href values are present in the provided source to audit for UTM parameters, redirect chains, or dead links.

**Flag for full-source review:**
- Confirm all CTAs carry consistent UTM params (`utm_source=email`, `utm_medium=email`, `utm_campaign=memorial-day-event` or equivalent).
- Confirm tracked links route through the expected ESP redirect domain (typically `click.mail.crateandbarrel.com` or similar), not bare destination URLs.

---

### 3. Rendering & Accessibility

**Confirmed issues:**

**3a. `maximum-scale=1` in viewport meta — accessibility violation**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```
Prevents pinch-to-zoom. WCAG 2.1 SC 1.4.4 (Resize text) violation. Remove `maximum-scale=1`.

**3b. Conflicting desktop image max-width media queries**
```css
@media only screen and (min-width: 768px) { img { max-width: 600px } }
@media only screen and (min-width: 640px) { img { max-width: 640px } }
```
At viewport widths ≥768px, both rules apply. Because the `640px` breakpoint is declared *after* the `768px` one, it wins via cascade — images cap at `640px` even on wide viewports. The `768px` rule is effectively dead. Consolidate to a single rule.

**3c. `.showmobile` hardcoded to `414px`**
```css
.showmobile { width: 414px !important; }
```
Hardcodes to iPhone X/11/12 width. On small Android devices (360px wide), this causes horizontal overflow. Use `100%` or `calc(100vw - 40px)` instead.

**3d. Dark mode explicitly disabled**
```html
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
```
Apple Mail and Gmail on iOS will attempt an auto-invert that may distort the `#e6e7e8` background and image assets. Either add a tested dark-mode media query or accept the rendering risk — but the current opt-out with no fallback leaves dark mode clients unstyled.

**3e. Wildcard `line-height` override**
```css
* { line-height: 100%; }
```
Applies to every element including `<td>`, `<img>`, and `<span>`. Can collapse line-height on multi-line text blocks. Scope this to specific selectors.

---

### 4. CSS & HTML Issues

**4a. Residual developer artifacts in `<head>`**
```html
<!--[if gte mso 9]>
<style>
.vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .vcard .v
