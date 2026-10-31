---
kind: synthesis
persona: walker
brand: msgs.skechers.com
reactions: 242
through: 2026-10-31T11:02:59.000Z
created_at: 2026-05-01T18:21:04.242Z
updated_at: 2026-10-31T18:19:19.742Z
---

# ### 1. Executive Summary

Skechers' "Your Items Are Waiting!" abandoned cart email effectively surfaces the abandoned product and includes a clear CTA to complete the purchase. However, the email loses focus by incorporating multiple promotional elements and utility features, which dilutes the urgency and primary goal of recovering the abandoned cart. The email needs to be streamlined to enhance conversion rates by focusing solely on the abandoned product and a single recovery CTA.

---

### 2. Key Takeaways

- **Product Visibility:** The abandoned product is prominently displayed with a clear image and name.
- **Primary CTA:** The "Complete Your Order" button is well-placed and stands out.
- **Promotional Content:** The BOGO offer and best-seller recommendations detract from the main goal.
- **Utility Features:** App installation prompts and category navigation links are unnecessary in an abandoned cart email.
- **Layout and Design:** The layout is clean but overcrowded with secondary content.

---

### 3. Detailed Review

#### 3.1. Hook and Primary Value Proposition

- **Hero Section:** The hero section effectively highlights the abandoned product with a clear image and name. The "Complete Your Order" CTA is well-placed and stands out.
- **Subject Line:** The subject line "Your Items Are Waiting!" is clear and effective in conveying urgency.

#### 3.2. Product Discoverability and Recommendations

- **Recommendation Thumbnails:** The recommendation thumbnails are too small and lack clarity. Enlarging them would improve click-through rates.
- **BOGO Offer:** The BOGO offer is distracting and undermines the urgency of the abandoned cart recovery. It should be removed or relegated to a follow-up email.

#### 3.3. Utility and Secondary Modules

- **App Installation Prompts:** Prompts to download the app and opt-in for SMS notifications are unnecessary in an abandoned cart email. These should be reserved for lifecycle emails.
- **Category Navigation Links:** The inclusion of category navigation links is redundant and distracts from the primary goal of recovering the abandoned cart.

#### 3.4. Layout and Design

- **Layout:** The layout is clean but overcrowded with secondary content. The email needs to be more focused and concise.
- **Visual Hierarchy:** The visual hierarchy is good, but the secondary content needs to be minimized to avoid diluting the primary message.

---

### 4. Recommendations

1. **Remove Promotional Content:** Remove the BOGO offer and best-seller recommendations to avoid diluting the primary goal of recovering the abandoned cart.
2. **Simplify Utility Features:** Remove app installation prompts and category navigation links. These should be reserved for lifecycle emails.
3. **Enlarge Recommendation Thumbnails:** Enlarge the recommendation thumbnails to improve clarity and click-through rates.
4. **Focus on Primary CTA:** Ensure the "Complete Your Order" CTA is the only prominent CTA in the email to maintain focus on the abandoned cart recovery.

---

### 5. Technical Audit Summary

- **Link & Tracking Issues:** All links and image URLs should be switched to HTTPS.
- **Rendering & Accessibility:** Ensure all images have descriptive alt text and the `<title>` element is descriptive.
- **Personalization:** Confirm that product dynamic content blocks are present in the full template.
- **Compliance:** Verify the CAN-SPAM footer, physical address, and unsubscribe mechanism.
- **Email-to-Site Continuity:** Ensure UTM parameters are correctly set and verified.

---

### 6. Evidence

**Overall purpose:** Abandoned cart recovery — reminding the recipient that a specific product is still in their cart and prompting purchase completion.

**Hero / primary value proposition:** Bold headline with playful copy, specific cart product image, product name, and "Complete Your Order" CTA button. Well-executed at the top of the email.

**Product discoverability / recommendation modules:** A "Here's Some Great Options We Think You'll Love" section shows four small product thumbnails with names. Logical placement but images are too small to be compelling. Followed by a "SHOP ALL BEST SELLERS" dark CTA bar.

**Utility / secondary modules:** Heavy utility tail — category navigation links, SMS opt-in, app store badges, payment options, and social follow section. All appear below the fold in sequence.

**Bugs / friction / clarity issues:** No visible broken images or overlapping text. Fine print at the very bottom is extremely small and likely unreadable without zooming. The BOGO offer block text is difficult to read at rendered size.

---

### 7. Technical Audit

#### 7.1. Link & Tracking Issues

- **HTTP links:** All links should be switched to HTTPS.
- **`target="_blank"`:** Add `rel="noopener noreferrer"` to all `target="_blank"` links.
- **UTM parameters:** Verify UTM parameters in the redirect chain.

#### 7.2. Rendering & Accessibility

- **Empty `<title>` element:** Add a descriptive title string.
- **Malformed charset meta tag:** Correct the charset meta tag.
- **Image alt text:** Verify all images have descriptive alt text.

#### 7.3. Personalization & Merge Tokens

- **Personalization tokens:** Confirm product dynamic content blocks are present in the full template.

#### 7.4. Compliance

- **CAN-SPAM:** Verify the footer contains the physical mailing address and clear unsubscribe mechanism.
- **Sending domain authentication:** Confirm proper SPF/DKIM/DMARC segmentation.

#### 7.5. Email-to-Site Continuity

- **UTM parameters:** Decode and verify UTM parameters in the redirect chain.
- **Web version link:** Verify the web version link resolves to a hosted version of the email.

---

### 8. Recommendations Table

| Priority | Issue | Action |
|---|---|---|
| High | All links
