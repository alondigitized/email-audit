---
kind: synthesis
persona: walker
brand: msgs.skechers.com
reactions: 283
through: 2026-11-27T12:01:54.000Z
created_at: 2026-05-01T18:21:04.242Z
updated_at: 2026-11-27T20:21:20.785Z
---

# ### 1. Executive Summary

Skechers' "Your Items Are Waiting!" email is a competent but diluted abandoned cart recovery email. The core mechanics are solid: the abandoned product is prominently featured, named, and a clear recovery CTA is provided. However, the email undermines its urgency and focus by including a BOGO promotion, best-seller recommendations, app install prompts, and a full category navigation. This dilution causes confusion and reduces the email's effectiveness. The email should prioritize the abandoned cart recovery and remove extraneous elements to enhance conversion rates.

---

### 2. Content Review

**Hero Section:**
- **Product Image & Name:** The abandoned product is clearly visible and named.
- **CTA:** The "Complete Your Order" button is prominent and clear.
- **Subject Line:** "Your Items Are Waiting!" effectively communicates urgency and relevance.

**Recommendation Section:**
- **Best-Seller Recommendations:** The recommendation section is not aligned with the abandoned cart recovery goal. It should be removed or significantly reduced in prominence.

**Promotions:**
- **BOGO Offer:** The BOGO promotion is distracting and reduces the urgency of the abandoned cart recovery. It should be removed or moved to a dedicated promotional email.

**Utility Sections:**
- **Category Navigation:** The full category navigation is unnecessary and should be removed.
- **App Install & Curbside Pickup:** These utility sections are better suited for lifecycle emails and should be removed from this recovery email.
- **Social Follow & Texting Opt-In:** These elements should be removed or moved to a dedicated lifecycle email.

---

### 3. Design Review

**Layout:**
- **Hero Section:** The hero section is well-designed and clear.
- **Recommendation Thumbnails:** The recommendation thumbnails are too small and should be enlarged or removed.
- **Footer:** The footer is cluttered and should be simplified.

**Visual Elements:**
- **Image Quality:** The product images are clear and high-quality.
- **Color Scheme:** The color scheme is consistent with Skechers' branding but should be more focused on the abandoned cart recovery.

---

### 4. Call to Action

**Primary CTA:**
- **Placement:** The primary CTA is well-placed and prominent.
- **Text:** The CTA text ("Complete Your Order") is clear and actionable.

**Secondary CTAs:**
- **App Install & Curbside Pickup:** These secondary CTAs should be removed or moved to a dedicated lifecycle email.
- **Social Follow:** This should be removed or moved to a dedicated lifecycle email.

---

### 5. Email-to-Site Continuity

**UTM Parameters:**
- **Verification:** Ensure that UTM parameters are correctly set and verifiable.
- **Decoding:** Decode the UTM parameters to confirm their correctness.

**Web Version Link:**
- **Destination:** The web version link should resolve to a hosted version of this specific email.

---

### 6. Technical Audit Summary

**Link & Tracking Issues:**
- **HTTP Links:** Switch all `http://` to `https://`.
- **`target="_blank"`:** Add `rel="noopener noreferrer"` to all external link targets.
- **UTM Parameters:** Decode and verify UTM parameters.

**Rendering & Accessibility:**
- **Empty `<title>` Element:** Add a descriptive title string.
- **Malformed Charset Meta Tag:** Correct the charset meta tag.
- **Image Alt Text:** Verify all images have descriptive `alt` text.

**Personalization & Merge Tokens:**
- **Personalization Tokens:** Confirm product dynamic content blocks exist in the full template.

**Compliance:**
- **CAN-SPAM:** Confirm the physical address and unsubscribe block exist in the full template.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **High** | All links and image URLs use HTTP | Switch all `http://` to `https://` in Attentive template settings |
| **High** | Personalization tokens absent | Confirm product dynamic content blocks exist in full template; if not, add `{{product_name}}`, `{{product_image}}`, and `{{cart_url}}` tokens |
| **High** | Cluttered content | Remove all non-essential elements (BOGO offer, best-seller recommendations, category navigation, app install prompts, social follow, and texting opt-in) |
| **Medium** | Empty `<title>` tag | Add descriptive title string |
| **Medium** | Malformed charset meta | Add `http-equiv="Content-Type"` attribute |
| **Medium** | UTM parameters unverified | Decode 3–5 CTA URLs and confirm UTM schema before send |
| **Medium** | CAN-SPAM footer unverified | Confirm physical address and unsubscribe block exist in full template |
| **Low** | `target="_blank"` missing `rel` | Add `rel="noopener noreferrer"` to all external link targets |
| **Low** | Image alt text unconfirmed | Audit full HTML for empty or missing `alt` attributes on all `<img>` tags |

---

### 8. Final Thoughts

The email should focus solely on recovering the abandoned cart. Remove all extraneous elements and ensure the email is concise and compelling. By doing so, the email will be more effective in driving conversions and increasing customer satisfaction.
