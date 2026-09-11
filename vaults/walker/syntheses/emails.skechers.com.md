---
kind: synthesis
persona: walker
brand: emails.skechers.com
reactions: 293
through: 2026-09-10T14:06:17.000Z
created_at: 2026-05-01T18:19:23.162Z
updated_at: 2026-09-11T18:18:36.959Z
---

# ### 5. Compliance

**[WARN] Authentication-Results header not available**
The SPF/DKIM pass/fail status could not be verified via the AgentMail relay. This should be confirmed against the actual delivered message headers (`Authentication-Results: mx.google.com` or equivalent) before deployment sign-off.

**[INFO]** CAN-SPAM structural elements (physical address, unsubscribe link) were not flagged as missing by automated checks — assume compliance unless explicitly stated otherwise in the audit report.

---

### 6. Recommendations

1. **Fix iGoDigital recommendation links:**
   - Ensure all URLs are properly URL-encoded and free of non-ASCII characters.
   - Replace `item=pr…` with the full parameter value to avoid truncation issues.

2. **Resolve HTTP image sources:**
   - Migrate all images from `http://image.emails.skechers.com/...` to their HTTPS equivalents (`https://image.emails.skechers.com/...`).
   - Verify that this change does not break any existing links or assets.

3. **Add plain-text alternative part:**
   - Ensure the email has a valid `text/plain` MIME part with fallback content.
   - This should include all key CTAs, offers, and information in text-only format.

4. **Implement proper tracking pixel attributes:**
   - Add an empty `alt=""` attribute to any image-based tracking pixels (`<img src="..." alt="">`).
   - Ensure the open pixel is served over HTTPS if possible.

5. **Ensure consistent personalization tokens:**
   - Define a fallback greeting message such as "Hi there," or "Hi Skechers Plus member" for cases where `first_name` is empty.
   - Verify that subscriber identifiers like `mi_u=8107697324` are dynamically substituted per recipient.

6. **Verify CAN-SPAM compliance:**
   - Double-check the physical address and unsubscribe link to ensure they meet CAN-SPAM requirements.
   - Ensure all links in the email (including tracking URLs) are functional and lead to valid destinations.

---

### 7. Conclusion

This profile-completion triggered email has several technical issues that need addressing before deployment:

1. **Broken recommendation links** due to ASCII encoding errors.
2. **Missing plain-text alternative part**, which is critical for deliverability and accessibility.
3. **Pervasive HTTP image sources**, leading to potential blocking in modern clients.
4. **Empty greeting slot**, requiring a fallback message.

Addressing these technical issues will improve the email's performance, ensure proper rendering across all clients, and enhance user experience by providing clear calls-to-action and personalized content.

---

### 8. Evidence

**Overall purpose:** Drive Skechers Plus members to complete their loyalty profile in exchange for points rewards.
- **Hero / primary value proposition:** "Help us get to know you (and earn points too)" — positions profile data as a mutual exchange with clear incentives.
- **Membership / benefits section:** The points-per-action breakdown is transparent and motivates users to complete their profiles.
- **Product discoverability / recommendation modules:** Three shoe thumbnails labeled "Styles we think you'll love..." appear mid-email but are logically premature and add no value in this context.
- **Utility / secondary modules:** App download block (750 bonus points) is visually strong but strategically misplaced. Category nav, utility bar (Afterpay, Klarna, Curbside Pickup, Find a Store), and social links crowd the footer.
- **Bugs / friction / clarity issues:** No visible broken images or overlapping text, except for the recommendation links and HTTP image sources.

---

By addressing these technical and structural issues, the email will be more effective in driving user engagement and completing profiles.
