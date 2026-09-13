---
kind: synthesis
persona: rosie-coupon-kohls-fap6e
brand: beauty.sephora.com
reactions: 87
through: 2026-09-12T16:23:39.000Z
created_at: 2026-08-08T18:21:53.871Z
updated_at: 2026-09-13T18:19:38.661Z
---

# ### Technical Audit Summary

The technical audit highlights several issues that could impact the user experience and accessibility of the Sephora "Starts today! You have 10% off" email. The main concerns are related to mobile zoom restrictions, redundant CSS rules, and incomplete source truncation which prevents a full audit.

### Detailed Findings

#### Rendering & Accessibility Issues
- **[HIGH] `maximum-scale=1` blocks pinch-to-zoom on mobile**
  - This meta tag restricts users from scaling the text size on mobile devices, violating WCAG guidelines. It should be removed or adjusted to allow for zooming.
  
- **[HIGH] `text-size-adjust: none` applied to body-level selectors**
  - The CSS rule overrides OS-level font scaling, which is a significant accessibility issue. This rule should be limited to specific layout containers rather than being applied globally.

#### Link & Tracking Issues
- **Cannot fully audit** — The HTML source is truncated before the `<body>` content, preventing a full review of links and tracking elements. This limits the ability to confirm whether all necessary href values are present and functional.

#### Personalization & Merge Tokens
- **[LOW] Subject line discount value appears static**
  - There's no merge token visible in the subject line for the discount percentage. If this is intended to be dynamic, it should use a merge token like `%%DISCOUNT%%`.

#### Compliance (CAN-SPAM, Unsubscribe, Authentication)
- **Cannot fully audit** — The HTML source is truncated before the footer section, preventing verification of compliance elements such as the physical mailing address and unsubscribe link.

### Recommendations

1. **Remove or Adjust Meta Tags**
   - Remove or adjust the `maximum-scale=1` meta tag to allow pinch-to-zoom on mobile devices.
   - Modify the CSS rule that sets `text-size-adjust: none` to limit it to specific layout containers rather than applying globally.

2. **Audit and Complete Source Code**
   - Ensure the full HTML source is available for a complete audit, particularly focusing on links, tracking elements, and compliance footer content.

3. **Implement Dynamic Personalization**
   - Use merge tokens in the subject line if the discount percentage needs to be dynamic.
   
4. **Ensure Compliance Elements**
   - Verify that all necessary CAN-SPAM compliance elements (physical address, unsubscribe link) are present and correctly formatted in the email footer.

### Conclusion

The technical audit reveals several critical issues related to mobile accessibility and incomplete source truncation. Addressing these will improve user experience and ensure full compliance with best practices for email marketing.
