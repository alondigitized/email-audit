---
kind: synthesis
persona: kai-stride-athletic-fap6e
brand: us-news.comms.adidas.com
reactions: 103
through: 2026-11-08T01:11:59.000Z
created_at: 2026-08-22T18:19:57.117Z
updated_at: 2026-11-08T20:19:35.362Z
---

# ### 6. Email-to-Site Continuity

**[WARN] UTM Parameters Unverifiable**
All 25 product and CTA links route through `click.comms.adidas.com`, making it impossible to verify the presence and correctness of UTM parameters. This is a significant issue as it hinders the ability to track and analyze user behavior effectively.

### Summary and Recommendations

#### Technical Summary
- **Broken Links:** Two gift card help links are broken due to malformed tracking wrappers and a 403 error.
- **Missing Plain-Text Fallback:** No plain-text MIME part is present, which is a best practice and a CAN-SPAM requirement.
- **HTTP Assets:** Multiple instances of HTTP images and tracking pixels that should be served over HTTPS.
- **Open-Tracking Pixel:** An open-tracking pixel is served over HTTP, which can be blocked by clients with mixed-content blocking.

#### Recommendations
1. **Fix Broken Links:**
   - Correct the malformed tracking wrapper for the gift card help link.
   - Investigate why the destination URL returns a 403 error and resolve it.

2. **Implement Plain-Text Fallback:**
   - Add a plain-text MIME part to the email to improve deliverability and provide a fallback for clients that do not render HTML.

3. **Secure HTTP Assets:**
   - Serve all images and tracking pixels over HTTPS to ensure they are not blocked by email clients.

4. **Secure Open-Tracking Pixel:**
   - Ensure all tracking pixels are served over HTTPS to avoid mixed-content blocking issues.

5. **Verify UTM Parameters:**
   - Directly probe the destination URLs to verify the presence and correctness of UTM parameters.

6. **Compliance Headers:**
   - Ensure that the `List-Unsubscribe` and `List-Unsubscribe-Post` headers are present in the SMTP envelope to comply with Google and Yahoo policies.

7. **Personalization and Merge Tokens:**
   - Double-check the personalization tokens to ensure they are correctly resolved and not causing any issues.

8. **Authentication Headers:**
   - Verify the presence of `Authentication-Results` headers to ensure SPF, DKIM, and DMARC pass/fail status is correctly captured.

By addressing these technical issues, adidas can improve the user experience, enhance deliverability, and ensure compliance with email best practices and regulations.
