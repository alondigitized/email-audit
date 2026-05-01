---
kind: synthesis
persona: walker
brand: msgs.skechers.com
reactions: 61
through: 2026-04-30T13:28:01.000Z
created_at: 2026-05-01T18:21:04.242Z
updated_at: 2026-05-01T18:21:04.242Z
---

# ### 6. Email-to-Site Continuity (Continued)

**Key Risks:**

1. **UTM Parameters Missing**
   - If destination URLs lack UTM parameters, all click traffic will appear as direct in analytics rather than `email / abandoned_cart`. This can lead to a significant loss of attribution data and hinder the ability to measure email campaign effectiveness.

2. **Redirect Infrastructure Issues**
   - The Attentive redirect infrastructure uses HTTP instead of HTTPS, which exposes click data in transit and may trigger spam filters due to unencrypted redirects.
   - Ensuring that destination URLs are properly tagged with UTM parameters is crucial for accurate analytics tracking.

3. **Web Version Link Behavior**
   - The web version link also resolves through the same Attentive redirect infrastructure. If this link does not append proper UTM parameters, it will appear as direct traffic in Google Analytics or other analytics tools.
   - This can lead to inaccurate reporting and hinder the ability to measure email open rates and click-through rates accurately.

### Recommendations for Email-to-Site Continuity

1. **Ensure Proper URL Tagging**
   - Ensure that all destination URLs (including web version links) are tagged with UTM parameters such as `utm_source=email`, `utm_medium=abandoned_cart`, and `utm_campaign=skechers_abandonment`.
   - Use a consistent naming convention for campaigns to ensure proper tracking across different email campaigns.

2. **Use HTTPS Redirects**
   - Update the Attentive redirect infrastructure to use HTTPS instead of HTTP. This will secure click data in transit and avoid potential spam filter issues.
   - Ensure that all destination URLs are also served over HTTPS to maintain a consistent security posture throughout the user journey.

3. **Test Analytics Tracking**
   - After implementing changes, test the email by sending it to a small segment of users (e.g., a QA team) and verify that UTM parameters are correctly appended to all links.
   - Use tools like Google Tag Assistant or similar analytics debugging tools to ensure proper tracking.

### Conclusion

The current implementation of the abandoned cart email has several technical issues that need addressing, particularly around link security, URL tagging, and overall user experience. By ensuring proper HTTPS redirects and UTM parameter usage, you can significantly improve both the security and effectiveness of your email campaigns. Additionally, simplifying the bottom half of the email to focus on conversion will help drive more sales from abandoned carts.

### Final Recommendations

1. **Simplify Bottom Half**
   - Remove unnecessary utility modules (e.g., category navigation, social follow icons).
   - Include only essential secondary CTAs and utilities that directly support the primary goal of recovering abandoned carts.
   
2. **Enhance Hero Product Display**
   - Show the price next to the product name in the hero section.
   - Add a soft urgency signal such as "Items can sell out" or "Limited stock available."

3. **Optimize BOGO Offer Placement**
   - Either remove the BOGO offer if it competes with the primary CTA, or make it specific to the abandoned item.
   
4. **Improve Accessibility and Rendering**
   - Ensure proper `alt` text for images.
   - Add `role="presentation"` attributes to layout tables.

By addressing these technical and design issues, you can significantly enhance both the performance and user experience of your abandoned cart email campaign.
