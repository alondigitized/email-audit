---
kind: synthesis
persona: ines-counter-department-store-fap6e
brand: s.kohls.com
reactions: 84
through: 2026-07-24T06:57:11.000Z
created_at: 2026-07-30T18:20:06.657Z
updated_at: 2026-07-30T18:20:06.657Z
---

# It seems like the email audit for Kohl's Memorial Day Sale has provided detailed insights into both its content strategy

### Content Strategy

#### Subject Line Analysis:
- **Subject:** `Memorial Day Sale ✅ $10 off your $25 purchase ✅ Kohl's Cash ✅`
  - **Scores (1-10):** Clarity `7`, Curiosity `3`, Personalization `1`, Urgency `6`, Specificity `8`

The subject line is clear and specific, but lacks personalization and curiosity. It effectively communicates the offer but could be more engaging.

#### Preview Text:
- **Preview:** `(none / leaking junk)` — The preview text is not visible in the rendered email screenshot due to the long subject line consuming most of the space.
  - **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`

The lack of a proper preheader can negatively impact open rates as it does not complement the subject or add value to the email.

### Technical Audit

#### Link & Tracking Issues:
- **22 tracking links skipped** — All click URLs route through redirect domains, and QA could not confirm final destination health.
- **Three distinct tracking pixel vendors** are loaded at document open: CoherentPath, MessageGears, Adobe Audience Manager, and ESP-level tracker.

This is a standard setup but the multiple trackers can be optimized for better performance and reduced load time. Ensure all tracking URLs pass through `click.s.kohls.com` with proper UTM parameters to maintain accurate analytics.

#### Rendering & Accessibility:
- **10 images missing `alt` text** — Tracking pixels should have empty alt tags, while dynamic content images need descriptive alt text.
- **Viewport meta tag issue:** Disables pinch-to-zoom (`user-scalable=0`), which is an accessibility violation (WCAG 1.4.4).
- **Empty `<title>` tag:** Affects screen reader announcements when the email opens in a browser.

#### Personalization & Merge Tokens:
- No unrendered merge tokens detected, but dynamic content images use query params suggesting server-side personalization.
  
Ensure that all merge fields are correctly populated and there's no risk of blank or incorrect data being sent out.

### Compliance

- **`List-Unsubscribe` header not found:** Required for Gmail/Yahoo bulk delivery compliance.
- **Physical mailing address in footer:** Verify full source contains CAN-SPAM-compliant postal address.
  
Ensure all regulatory requirements are met to avoid deliverability issues and legal penalties.

### Email-to-Site Continuity

- All outbound links pass through `click.s.kohls.com` for tracking, but the actual destination URLs need UTM parameters for accurate analytics attribution.
- **Empty `mi_kc_redm_end_dte` param:** Confirm this is intentional or a failed merge substitution.

Ensure that all tracking and personalization fields are correctly populated to avoid data discrepancies.

### Recommendations

#### High Priority:
1. **Confirm Headers in Raw SMTP Envelope:**
   - Verify the presence of `List-Unsubscribe` and `List-Unsubscribe-Post` headers for Gmail/Yahoo delivery compliance.
2. **Verify Physical Address in Footer:**
   - Ensure a valid physical postal address is included as per CAN-SPAM §5(a)(5).

#### Medium Priority:
1. **Remove Stray `</custom>` Tag:**
   - Correct the invalid HTML tag to avoid rendering issues.
2. **Optimize Google Fonts Load:**
   - Remove duplicate `<link>` and `@import` blocks for better performance.
3. **Add Descriptive Alt Text:**
   - Ensure dynamic content images have descriptive alt text while tracking pixels use empty alt tags.

#### Low Priority:
1. **Change Viewport Meta Tag:**
   - Update the viewport meta tag to allow pinch-to-zoom for accessibility compliance.
2. **Add a Descriptive Title:**
   - Include a title tag with a meaningful description for better browser rendering and screen reader announcements.
3. **Inspect Authentication Status:**
   - Confirm SPF/DKIM status via raw headers or mail client to ensure proper authentication.

### Summary

The email is technically sound but could benefit from improved personalization, clearer preview text, and adherence to accessibility standards. Ensuring compliance with regulatory requirements and maintaining accurate tracking will further enhance the effectiveness of the campaign.

By addressing these recommendations, Kohl's can improve both the user experience and the overall performance of their Memorial Day Sale email campaign.
