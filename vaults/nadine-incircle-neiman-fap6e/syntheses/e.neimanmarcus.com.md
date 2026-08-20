---
kind: synthesis
persona: nadine-incircle-neiman-fap6e
brand: e.neimanmarcus.com
reactions: 188
through: 2026-08-19T22:02:27.000Z
created_at: 2026-05-23T18:20:32.077Z
updated_at: 2026-08-20T18:20:12.381Z
---

# It sounds like there are several areas where improvements can be made to ensure the Designer Sale emails from Neiman Mar

### Immediate Fixes

1. **Resolve Subject Line Mismatch**
   - Ensure that the subject line accurately reflects the content inside the email.
   - If Ferragamo is indeed part of the sale, include it in the product grid or mention it prominently elsewhere in the email.

2. **Add Urgency and Deadlines**
   - Clearly state when the sale ends (e.g., "Sale Ends Sunday" or "Sale Ends in 3 Days").
   - Use a countdown timer if possible to enhance urgency.

### Creative Enhancements

1. **Show Actual Sale Prices**
   - Include price anchors such as original prices and discounted prices for products.
   - Example: “Was $895, Now $447” next to product images or descriptions.

2. **Incorporate InCircle Loyalty Context**
   - Add a callout that mentions the benefits of being an InCircle member (e.g., "InCircle members earn double points today").
   - This can differentiate the email from others and provide additional value for loyalty program members.

### Structural Improvements

1. **Diversify CTAs and Content**
   - Vary the content to avoid repetition. For example, highlight different product categories or brands in each send.
   - Use dynamic content blocks that change based on subscriber preferences or past behavior.

2. **Optimize Product Grid Layout**
   - Ensure the grid is visually appealing and easy to navigate.
   - Consider adding hover effects or additional information (e.g., reviews, ratings) for products.

### Technical Enhancements

1. **Verify Tracking Links**
   - Use a link checker that follows redirects to ensure all tracking links resolve correctly.
   - Confirm UTM parameters are properly set up on each landing page.

2. **Improve Media Queries and Accessibility**
   - Ensure media queries are not nested incorrectly (e.g., move `.ImgSize2x2` / `.TxtSize2x2` rules to a separate non-nested `@media only screen and (max-width: 520px)` block).
   - Remove dead commented-out viewport tags and ensure font stacks are correctly formatted.

### Compliance and Best Practices

1. **List-Unsubscribe Headers**
   - Ensure both `List-Unsubscribe` and `List-Unsubscribe-Post` headers are present in the email.
   - Add RFC 8058 one-click unsubscribe support if not already implemented.

2. **Authentication Verification**
   - Verify SPF, DKIM, and DMARC authentication via raw header inspection before sending emails.

3. **Physical Address**
   - Confirm that a physical mailing address is included in the footer of the email as required by CAN-SPAM regulations.

### Summary

By addressing these issues, Neiman Marcus can improve the effectiveness and engagement of their Designer Sale emails. Here’s a concise list of high-priority actions:

1. **Fix Subject Line Mismatch**
2. **Add Urgency with Concrete Deadlines**
3. **Show Actual Sale Prices in Product Grids**
4. **Incorporate InCircle Loyalty Benefits**
5. **Verify Tracking Links and UTM Parameters**
6. **Improve Media Queries and Remove Dead Code**
7. **Ensure Proper List-Unsubscribe Headers**

Implementing these changes will help Neiman Marcus maintain subscriber engagement and ensure compliance with email marketing best practices.

Would you like to proceed with any specific action items or need further assistance?
