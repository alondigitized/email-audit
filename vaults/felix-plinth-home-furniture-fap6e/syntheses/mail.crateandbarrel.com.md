---
kind: synthesis
persona: felix-plinth-home-furniture-fap6e
brand: mail.crateandbarrel.com
reactions: 127
through: 2026-06-01T21:26:37.000Z
created_at: 2026-05-16T18:19:07.018Z
updated_at: 2026-06-02T18:18:31.247Z
---

# ### Summary of Recommendations

#### Subject Line:
- **Subject Alt A:** `Memorial Day Sale starts today — 60% off + double rewards`
- **Subject Alt B:** `Your C&B Memorial Day deal: 60% off, 2x rewards, this weekend only`

#### Preheader Text:
- **Preheader Alt A:** `Sofas, dining, outdoor — the deepest discounts of the year, starting now.`
- **Preheader Alt B:** `Double your rewards points on everything in the sale, through Monday.`

### Technical Audit Recommendations

1. **Remove `maximum-scale=1` from viewport meta tag:**
   - Remove or modify this line to ensure accessibility compliance.
     ```html
     <meta name="viewport" content="width=device-width, initial-scale=1">
     ```

2. **Consolidate conflicting image max-width media queries:**
   - Combine the conflicting rules and remove the redundant one.
     ```css
     @media only screen and (min-width: 768px) { img { max-width: 640px; } }
     ```

3. **Adjust `.showmobile` width for better cross-device compatibility:**
   - Change `width: 414px !important;` to a more flexible value.
     ```css
     .showmobile { width: calc(100vw - 40px); }
     ```

4. **Handle dark mode rendering issues:**
   - Either add tested dark-mode media queries or remove the opt-out tags.
     ```html
     <meta name="color-scheme" content="light dark">
     <meta name="supported-color-schemes" content="light dark">
     ```

5. **Scope `line-height` override to specific elements:**
   - Restrict the line-height property to specific elements rather than applying it globally.
     ```css
     p, td { line-height: 100%; }
     ```

### Full-Source Review Recommendations

- Confirm all CTAs carry consistent UTM parameters (`utm_source=email`, `utm_medium=email`, `utm_campaign=memorial-day-event`).
- Ensure tracked links route through the expected ESP redirect domain (e.g., `click.mail.crateandbarrel.com`).

By implementing these changes, the email will be more accessible, render correctly across devices, and provide a better user experience.
