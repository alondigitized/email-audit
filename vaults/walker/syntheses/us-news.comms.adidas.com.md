---
kind: synthesis
persona: walker
brand: us-news.comms.adidas.com
reactions: 127
through: 2026-08-27T14:06:43.000Z
created_at: 2026-05-02T18:18:49.139Z
updated_at: 2026-08-28T18:18:24.474Z
---

# It appears that there are several critical issues and recommendations outlined in the technical audit for the adidas "Me

### Technical Summary
- **Broken redirect link**: A relative path href is not resolving correctly.
- **Missing plain-text body**: The email lacks a plain text version, which poses CAN-SPAM compliance risks.
- **Non-HTTPS images**: Multiple image sources are using HTTP instead of HTTPS, causing them to be blocked by major email clients.
- **Unverified authentication headers**: DKIM/SPF status is unconfirmed due to relay configuration.

### Recommendations

#### Link & Tracking Issues
1. **Broken Redirect Fix**:
   - Validate the offer ID `bf4c0485-2527-41ac-b292-227d0bac76fd` in the offer management platform.
   - Ensure that the redirect path type matches (`/o/` vs `/g/`) and correct any malformed hrefs to ensure they are absolute URLs.

2. **Probing Tracking Links**:
   - Verify all destination URLs and redirect chain integrity for the 25 unprobed tracking links.

3. **Referrer Header Suppression**:
   - Remove or scope the `<meta name="referrer" content="no-referrer">` tag unless intentionally suppressing referrer data.
   - Ensure that UTM parameters are consistent across all destination URLs to maintain proper attribution.

#### Rendering & Accessibility
1. **Missing Plain-Text Body**:
   - Add a plain-text MIME alternative with at least the subject line, key offer text, and unsubscribe URL.

2. **Non-HTTPS Images**:
   - Update image sources from HTTP to HTTPS (e.g., `https://image.link.adidas.com/...`).

3. **Authentication Headers**:
   - Pull delivery headers from the ESP for this send and confirm that DKIM/SPF are aligned with `adidas.com`.

### Additional Recommendations
1. **Hero Image Improvement**:
   - Replace the small product image with a more engaging, human-centered visual of an athlete in action.

2. **CTA Visibility**:
   - Add a visible CTA button below the product copy for the Supernova Rise 3 Adaptive section.

3. **Product Focus**:
   - Remove or de-emphasize the Handball Spezial module to maintain focus on the adaptive product launch.
   
4. **Promo Code Contextualization**:
   - Tie the promo code more closely to the featured product by restating it adjacent to the CTA and specifying its applicability.

5. **Body Copy Expansion**:
   - Expand the body copy to include specific features or benefits of the Supernova Rise 3 Adaptive.

### Conclusion
By addressing these technical issues and implementing the design recommendations, the email campaign can significantly improve both its technical reliability and user engagement, thereby enhancing the overall effectiveness of the product launch.
