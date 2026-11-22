---
kind: synthesis
persona: walker
brand: emails.skechers.com
reactions: 338
through: 2026-11-21T16:20:46.000Z
created_at: 2026-05-01T18:19:23.162Z
updated_at: 2026-11-22T20:20:30.903Z
---

# ### 5. Compliance (continued)

**[WARN] Authentication-Results header not available** — SPF/DKIM pass/fail status could not be verified via the AgentMail relay. This should be confirmed against the actual delivered message headers (`Authentication-Results: mx.google.com` or equivalent) before deployment sign-off.

**[INFO]** CAN-SPAM structural elements (physical address, unsubscribe link) were not flagged as missing by automated checks — assume compliance unless otherwise indicated. However, it is essential to verify these elements manually in the actual delivered email.

---

### 6. Recommendations

1. **Fix iGoDigital recommendation links:**
   - Ensure that the `item=pr…` parameter is fully URL-encoded and does not contain non-ASCII characters.
   - Test the links in a live environment to confirm they work as expected.

2. **Resolve HTTP image issues:**
   - Switch all HTTP image sources to HTTPS to ensure secure content loading and avoid blocking by modern email clients.
   - Verify that the `http://image.emails.skechers.com` domain is updated to `https://image.emails.skechers.com`.

3. **Add plain-text alternative:**
   - Ensure that the email includes a functional `text/plain` part. This is crucial for deliverability and accessibility.

4. **Improve tracking pixel security:**
   - Update the tracking pixel to use HTTPS.
   - Add an `alt` attribute to the tracking pixel to ensure it renders correctly in case of issues.

5. **Address missing `alt` text:**
   - Add `alt=""` attributes to all images that lack them, especially the recommendation images and tracking pixels.

6. **Correct meta tags:**
   - Ensure that `<meta>` tags include the `http-equiv` attribute to ensure proper functionality.

7. **Handle empty merge tokens:**
   - Define a fallback value for the greeting slot to avoid rendering as `"Hi ,"`.

8. **Verify subscriber-specific parameters:**
   - Ensure that the `mi_u=810766165` parameter is dynamically substituted for each recipient.

9. **Confirm authentication status:**
   - Verify SPF and DKIM pass/fail status via the actual delivered message headers before deployment.

---

### 7. Conclusion

The email has several technical issues that need to be addressed to ensure proper rendering, accessibility, and deliverability. The primary issues involve broken recommendation links, missing plain-text content, and insecure image sources. Addressing these issues will improve the overall performance and user experience of the email.

---

### 8. Evidence

**Overall purpose:** Drive Skechers Plus members to complete their loyalty profile in exchange for points rewards.

**Hero / primary value proposition:** "Help us get to know you (and earn points too)" — positions profile data as a mutual exchange. Three clearly itemized incentives (+25 birthday, +50 footwear preferences, +25 full name) make the reward structure transparent.

**Membership / benefits section:** The points-per-action breakdown effectively functions as a mini benefits module. The explanatory note ("Visit the my account page to update your profile and earn points for every question you answer") is helpful but slightly redundant given the visual list above it.

**Product discoverability / recommendation modules:** Three shoe thumbnails labeled "Styles we think you'll love..." appear mid-email. Images are small and the module is logically premature given the email's stated goal of collecting preference data. Adds scroll length without adding value.

**Utility / secondary modules:** App download block (750 bonus points) is visually strong but strategically misplaced. Category nav, utility bar (Afterpay, Klarna, Curbside Pickup, Find a Store), and social links crowd the footer. Each element is individually fine; collectively they make the email feel unfocused.

**Bugs / friction / clarity issues:** No visible broken images, overlapping text, or empty fields. All CTA buttons and app store badges render cleanly. Rendering appears intact.

**Technical issues:**
- Broken iGoDigital recommendation links due to ASCII encoding errors.
- Missing plain-text alternative part.
- HTTP image sources causing potential blocking by modern email clients.
- Empty greeting merge token.
- Tracking pixel over HTTP without `alt` attribute.
- Missing `alt` text on images.

---

By addressing these technical issues, the email will be more robust and effective in driving the desired user action.
