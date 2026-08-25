---
kind: synthesis
persona: ines-counter-department-store-fap6e
brand: s.kohls.com
reactions: 134
through: 2026-08-25T06:45:54.000Z
created_at: 2026-07-30T18:20:06.657Z
updated_at: 2026-08-25T18:20:47.967Z
---

# It sounds like you've been quite busy auditing Kohl's email campaigns recently! Let's take a moment to summarize the key

### Summary

**Date:** 2026-05-21  
**Subject:** `Memorial Day Sale ✅ $10 off your $25 purchase ✅ Kohl's Cash ✅`  
**Length:** 61 characters  

#### Scores:
- **Clarity:** 7/10
- **Curiosity:** 3/10
- **Personalization:** 1/10
- **Urgency:** 6/10
- **Specificity:** 8/10

### Key Findings and Recommendations:

#### Content Analysis:
1. **Subject Line:**
   - **Strengths:** The subject line is clear, concise, and specific about the offer.
   - **Weaknesses:** It lacks personalization and curiosity elements that could drive higher open rates.

2. **Preview Text:**
   - No preview text visible in the email client, which means there's no opportunity to complement the subject with additional context or urgency.

3. **Call-to-Action (CTA):**
   - The CTA "Shop Now" is generic and doesn't provide specific category information or beauty signals that could drive higher conversion rates.
   - Recommendation: Use a more targeted CTA like "Shop Women's Fashion for Memorial Day Sale" or "Get $10 off Your Favorite Brands."

#### Technical Audit:
1. **Link & Tracking Issues:**
   - Multiple tracking pixels (CoherentPath, MessageGears, Adobe AAM) are loaded on document open.
   - Recommendation: Consolidate the number of tracking calls to improve load times and reduce potential rendering issues.

2. **Accessibility & Rendering:**
   - 10 images missing `alt` text, which is an accessibility issue.
   - Recommendation: Add descriptive `alt` text for all images, especially dynamic content images.
   
3. **Compliance Headers:**
   - Missing `List-Unsubscribe`, `List-Unsubscribe-Post`, and physical mailing address in the email body.
   - Recommendation: Ensure these headers are present to comply with Gmail/Yahoo bulk sender policies.

4. **Email-to-Site Continuity:**
   - No referrer data is passed on outbound clicks due to the `no-referrer` meta tag, leading to potential attribution issues.
   - Recommendation: Use UTM parameters consistently across all outbound links to ensure proper tracking and analytics.

5. **Other Technical Issues:**
   - Stray `</custom>` tag in the HTML.
   - Duplicate Google Fonts load via `<link>` and `@import`.
   - `user-scalable=0` viewport setting, which is an accessibility violation.
   
### Recommendations:

1. **Content Enhancements:**
   - Personalize the subject line with recipient-specific information (e.g., "Hi [First Name], Get $10 off Your $25 Purchase").
   - Add a compelling preview text that complements the subject and drives opens.

2. **Technical Fixes:**
   - Ensure all images have descriptive `alt` text.
   - Remove the stray `</custom>` tag in the HTML code.
   - Change the viewport setting to allow pinch-to-zoom (`user-scalable=yes`).
   - Add a `<title>` element with a descriptive title for better browser rendering.

3. **Compliance and Best Practices:**
   - Include `List-Unsubscribe`, `List-Unsubscribe-Post`, and physical mailing address in the email body.
   - Use UTM parameters consistently to ensure proper tracking on all outbound links.
   - Verify SPF/DKIM status via raw headers or mail client.

By addressing these issues, Kohl's can improve both the user experience and technical performance of their Memorial Day Sale email campaign.
