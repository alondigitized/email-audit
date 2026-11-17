---
kind: synthesis
persona: martha
brand: emails.skechers.com
reactions: 168
through: 2026-11-16T15:04:23.000Z
created_at: 2026-05-03T18:21:46.005Z
updated_at: 2026-11-17T20:20:01.059Z
---

# It seems like the email review is nearly complete, but it cuts off at the end. Here's a summary and some final touches t

### 8. Evidence

- **Overall Purpose:** The email aims to promote Skechers' "Made to Move" campaign with a BOGO 50% off offer across various categories (Walking, Running, Outdoor). The goal is to drive traffic and sales by highlighting the brand's commitment to active lifestyles.

### 9. Technical Analysis Summary

- **Doubled-Domain URL:** `skechers.com/www.Skechers.com` — This is a merge tag issue that needs fixing in the SFMC template.
- **Mixed Content:** 13 images served over HTTP; update CDN/image library base URL to `https://image.emails.skechers.com`.
- **Open-Tracking Pixel:** Migrate to HTTPS endpoint or switch to ESP-native open tracking.
- **Missing Alt Text:** Add descriptive alt text to product/hero images; use `alt=""` for decorative images.
- **SPF/DKIM Verification:** Capture raw headers on next seed send to confirm DMARC alignment.
- **UTM Attribution:** Resolve one click-redirect URL to verify UTM parameters are appended.
- **Krux Identity Sync Pixel:** Confirm GDPR/CCPA consent scope covers cross-site DMP sync.

### 10. Final Recommendations

1. **Visual Appeal:**
   - Swap the hero image to a woman hiking or a family engaging in an outdoor activity.
   - Create a dedicated kids' shoe module with 2-3 product tiles to drive clicks from parents.

2. **Product Information:**
   - Add product names and a price anchor to each category module.
   - Include ratings or reviews to build trust.

3. **Personalization:**
   - Personalize the subject line or preheader to include the recipient's name or past purchase history.
   - Add a one-liner about Skechers Elite rewards to encourage loyalty.

4. **Preview Text:**
   - Fix the preview text to something like "BOGO 50% off — move in style this season."

5. **CTA Clarity:**
   - Ensure CTAs are clear and actionable, such as "Shop Now" with relevant product categories.

### 11. Conclusion

The email has a solid offer but lacks personalization and visual appeal, which can significantly impact engagement and conversion rates. By addressing the technical issues and enhancing the content, Skechers can improve the overall effectiveness of the email campaign.

---

This summary and the additional recommendations should provide a comprehensive review and actionable insights for the email campaign.
