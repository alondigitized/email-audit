---
kind: synthesis
persona: leo-brick-lego-fap6e
brand: e.crm.lego.com
reactions: 37
through: 2026-09-09T22:28:02.000Z
created_at: 2026-09-10T18:20:11.427Z
updated_at: 2026-09-10T18:20:11.427Z
---

# ## Summary and Recommendations

### Overview
This is a birthday trigger email from LEGO that aims to celebrate subscribers with personalized content, nostalgia-inducing imagery, and an exclusive discount. The concept is strong, but there are execution issues that need addressing.

### Key Issues
1. **Promo Code Placement**: The promo code ("4NXVWURMKA") is buried below two full content blocks, making it hard for subscribers to find quickly.
2. **Nostalgia Block Inertness**: The vintage Star Wars Death Star II set (item 10143) lacks a buy link or any actionable call-to-action, reducing its impact.

### Technical Audit Summary
- **Google Fonts Issues**: Redundant and incompatible Google Fonts loading methods.
- **Missing Alt Text**: 23 images lack descriptive `alt` attributes.
- **Compliance Gaps**: Missing `List-Unsubscribe` headers and high URL density in plain text body.
- **Rendering & Accessibility Concerns**: Duplicate media queries, commented-out CSS rules.

### Recommendations

| Priority | Issue | Action |
|---|---|---|
| P0 | `List-Unsubscribe` / `List-Unsubscribe-Post` headers missing | Confirm ESP injects both headers at send time; if not, configure in SMC send settings. |
| P0 | Alt text absent on 23 images | Add descriptive `alt` attributes to functional images and use empty alt for decorative spacers (`alt=""`). |
| P1 | Plain-text part is 85% URLs | Replace with readable plain-text mirror of email content, ensuring it provides value without being URL-heavy. |
| P1 | SPF/DKIM status unconfirmed | Pull a delivered message header to verify `dkim=pass` on `e.crm.lego.com`. |
| P2 | Redundant `<link>` tag for Noto Sans Display | Remove the first `<link>` (wght@700 only); keep the combined wght@400;700 tag. |
| P2 | `@import` for Google Fonts | Remove — stripped by Gmail and redundant given `<link>` tags. |
| P3 | Three duplicate `@media (max-width:599px)` blocks | Consolidate into one block to reduce parse time and maintenance risk. |
| P3 | `NotoB` selector commented out | Audit HTML for `style*="NotoB"` usage; either remove the dead selector or restore the rule if needed. |

### Email Content Improvements

1. **Promo Code Placement**:
   - Move the promo code to a more prominent position, ideally near the top of the email body.
   - Consider adding a clear call-to-action (CTA) button directly above the promo code with text like "Use Your Birthday Discount Now!".

2. **Nostalgia Block Enhancement**:
   - Add a buy link or a "Back in Stock" message if the set is available again.
   - If not, consider providing related products or sets that are currently available and relevant to the vintage item.

3. **CTA Clarity**:
   - Ensure all CTAs are clear and actionable with descriptive text like "Shop Now," "Learn More," etc.
   - Use consistent styling for CTAs to make them stand out visually.

### Additional Considerations

- **Timing**: Avoid sending multiple high-priority emails on the same day. Spread out sends to reduce inbox pressure.
- **Personalization**: Ensure that personalization tokens are correctly applied and tested before send.
- **Testing**: Conduct thorough testing across various email clients (Gmail, Outlook, etc.) to ensure consistent rendering.

### Final Thoughts
The concept of this birthday trigger email is strong, but the execution needs refinement. Addressing these issues will improve both user experience and engagement rates.
