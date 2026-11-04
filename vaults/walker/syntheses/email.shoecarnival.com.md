---
kind: synthesis
persona: walker
brand: email.shoecarnival.com
reactions: 171
through: 2026-10-31T21:28:14.000Z
created_at: 2026-05-02T18:20:19.324Z
updated_at: 2026-11-03T20:22:06.132Z
---

# ## Technical Audit Summary

### 1. Critical Issues
- **Zero-width space in UTM parameter:** This issue breaks all primary tracking links, rendering click tracking and open tracking non-functional.
- **Open-pixel domain timeout:** The open-tracking domain timed out, likely due to an unresolved variable or infrastructure issue.

### 2. Link & Tracking Issues
- **Zero-width space in UTM parameter:** The zero-width space (`\u200b`) was introduced via copy-paste from a rich-text source, breaking all tracking links.
- **Open-pixel domain timeout:** The open-tracking domain timed out, suggesting a separate tracking pixel domain issue or an unresolved variable in the send template.
- **24 tracking links skipped:** The QA probe skipped 24 click-redirect URLs, and their reachability is unknown.

### 3. Rendering & Accessibility
- **Missing alt text:** Four images lack `alt=""` attributes, which is required for meaningful accessibility and informational images.
- **HTML 4.01 Transitional DOCTYPE:** This is intentional for legacy client compatibility and not a defect.
- **Responsive breakpoint overlap:** There is a gap between two media query blocks targeting `max-width: 600px` and `max-width: 660px`, which can cause layout artifacts on some tablet clients.

### 4. Personalization & Merge Tokens
- **Unresolved token:** `[UNIQUE]` is present as a literal string in the rendered email, indicating an unresolved variable in the send template.

### Recommendations

1. **Fix Zero-width Space:**
   - Identify and remove the zero-width space (`\u200b`) from the UTM parameter string in the tracking links.
   - Ensure all tracking links are properly encoded and tested.

2. **Resolve Open-Tracking Domain Timeout:**
   - Investigate the open-tracking domain (`0di86k1v.emltrk.com`) to ensure it is correctly configured and reachable.
   - Verify that the `[UNIQUE]` token is properly resolved in the send template.

3. **Add Alt Text:**
   - Add `alt=""` attributes to all images that are decorative.
   - Provide meaningful `alt` text for informational images.

4. **Address Responsive Breakpoint Overlap:**
   - Adjust media queries to ensure consistent layout across different screen sizes.

5. **Ensure Proper Token Resolution:**
   - Verify that all merge tokens are correctly resolved in the send template to avoid literal string issues.

By addressing these technical issues, the email will be more functional, accessible, and user-friendly, enhancing the overall customer experience.
