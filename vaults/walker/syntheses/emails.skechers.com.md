---
kind: synthesis
persona: walker
brand: emails.skechers.com
reactions: 200
through: 2026-05-12T13:11:54.000Z
created_at: 2026-05-01T18:19:23.162Z
updated_at: 2026-05-13T18:19:01.709Z
---

# ### Summary and Recommendations

The "Tell us more about you!" email from SKECHERS PLUS has several technical issues that need to be addressed before deployment. The primary concerns are broken links, missing plain-text alternative, HTTP image sources, and empty merge tokens. Here's a detailed breakdown of the issues and recommendations:

#### 1. Link & Tracking Issues
- **[FAIL] iGoDigital recommendation links — ASCII encoding error (3 links)**
  - **Recommendation:** Ensure all URLs are properly URL-encoded to avoid truncations or non-ASCII characters. The `item=pr…` parameter should be fully expanded and encoded.

- **[WARN] click.emails.skechers.com links returning 400 (3 links)**
  - **Recommendation:** Verify that the tracking link tokens are correctly generated for production deployment. Ensure that any test/seed sends do not interfere with live deployments.

- **[WARN] Main CTA links rate-limited (429)**
  - **Recommendation:** This is a probe-side issue and does not indicate broken links. Confirm that the destination URLs work as expected in production environments.

#### 2. Rendering & Accessibility
- **[FAIL] Plain-text alternative missing**
  - **Recommendation:** Add a plain-text version of the email to ensure deliverability and accessibility for text-only clients.

- **[WARN] Pervasive HTTP image sources (10 images)**
  - **Recommendation:** Update all image URLs to use HTTPS. This will prevent blocking by modern email clients that enforce secure content loading.

- **[WARN] Open pixel over HTTP**
  - **Recommendation:** Serve tracking pixels over HTTPS and add an `alt` attribute if necessary for accessibility.

- **[WARN] Missing `alt` text on 4 images**
  - **Recommendation:** Add `alt=""` attributes to all images that lack them. This ensures that broken image states are handled gracefully.

#### 3. Personalization & Merge Tokens
- **[FAIL] Empty greeting slot**
  - **Recommendation:** Define a fallback value for the greeting merge token (e.g., "Hi there,") in the ESP template to avoid empty slots.

- **[INFO]** Verify that subscriber identifiers are dynamically substituted.
  - **Recommendation:** Ensure dynamic substitution of `mi_u=8107766165` parameter to prevent hardcoded values from test records.

#### 4. Compliance
- **[WARN] Authentication-Results header not available**
  - **Recommendation:** Verify SPF and DKIM authentication results against actual delivered message headers before deployment.

### Additional Recommendations

1. **Reorder or Remove the App Download Module:**
   - Ensure that the app download module is placed after the profile completion CTA or removed entirely to avoid diluting focus.

2. **Cut Inconsistent Product Recommendation Module:**
   - Remove the product recommendation module since it undermines the email's primary goal of collecting preference data.

3. **Trim Utility Bar:**
   - Reduce the utility bar to essential elements (e.g., "Find a Store") and remove redundant options like Curbside Pickup, AfterPay, etc.

4. **Add Progress Indicator:**
   - Include a progress indicator above the CTA to personalize the email for members who have partially completed their profile.

### Final Checklist

- Ensure all URLs are properly encoded.
- Verify tracking link tokens for production deployment.
- Add plain-text alternative and HTTPS images.
- Update `alt` attributes on images.
- Define fallback values for merge tokens.
- Verify dynamic substitution of subscriber identifiers.
- Confirm SPF/DKIM authentication results.
- Reorder or remove the app download module.
- Remove inconsistent product recommendation module.
- Trim utility bar to essential elements.
- Add a progress indicator above the CTA.

By addressing these issues, the email will be more effective in driving profile completion and maintaining high standards of technical performance.
