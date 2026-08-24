---
kind: synthesis
persona: walker
brand: msgs.skechers.com
reactions: 118
through: 2026-08-24T09:48:01.000Z
created_at: 2026-05-01T18:21:04.242Z
updated_at: 2026-08-24T18:20:58.119Z
---

# ### 1. Executive Summary

Skechers' "Your Items Are Waiting!" abandoned cart email effectively highlights the specific item left in the cart but suffers from information overload due to excessive content beneath the main product focus. The primary issue lies in the inclusion of multiple promotional elements and utility links that dilute the urgency and clarity of the core call-to-action (CTA). This overabundance of content can distract recipients, reducing the likelihood of a successful conversion.

### 2. Design & Content Analysis

#### Key Elements
- **Hero Section:** The email starts with a clear hero section featuring the abandoned product image, name, and a prominent "Complete Your Order" CTA button.
- **Product Recommendations:** A secondary recommendation section is present but includes too many small thumbnails that are difficult to read or click on.
- **Utility Sections:** Numerous utility sections such as category navigation links, SMS opt-in, app download prompts, payment options, and social media follow buttons clutter the email.

#### Issues Identified
1. **Overwhelming Content Below Hero Section:**
   - The email includes multiple promotional offers and utility features below the hero section, which distracts from the primary goal of recovering the abandoned cart.
2. **Small Thumbnail Recommendations:**
   - Product thumbnails are too small to be readable or clickable, reducing their effectiveness in driving additional sales.

### 3. Email Structure & Flow

#### Current Structure
1. **Hero Section:** Abandoned product image and CTA button.
2. **Recommendations Section:** Small thumbnail recommendations with a "Shop All Best Sellers" CTA bar.
3. **Utility Sections:** Category navigation, SMS opt-in, app download, payment options, and social media follow.

#### Recommended Structure
1. **Hero Section:** Abandoned product image, name, and prominent "Complete Your Order" CTA button.
2. **Recommendations Section (Optional):** Large, readable thumbnail recommendations with clear CTAs.
3. **Utility Sections (Minimalist Approach):**
   - Minimal category navigation links if necessary.
   - Remove the SMS opt-in for now; consider a dedicated lifecycle trigger instead.

### 4. Call-to-Action

#### Current CTA
- The primary "Complete Your Order" button is clear and prominent but needs to be more visually distinct from other CTAs in the email.
- Additional utility CTAs (e.g., "Shop All Best Sellers") are present but should not compete with the main recovery CTA.

#### Recommendations
1. **Primary CTA:** Ensure that the primary "Complete Your Order" button is larger, bolder, and more visually distinct from other elements in the email.
2. **Remove Secondary CTAs:** Remove or minimize secondary CTAs to avoid diluting focus on the primary goal of recovering the abandoned cart.

### 5. Personalization

#### Current State
- The email lacks personalization tokens such as the customer's first name and dynamic product details, which can significantly improve engagement rates.
  
#### Recommendations
1. **Add Personalization Tokens:** Include personalized elements like the recipient’s first name in the subject line or body copy to enhance relevance.
2. **Dynamic Product Content:** Ensure that the template includes placeholders for dynamic product names, images, prices, and cart links.

### 6. Technical & Compliance

#### Issues Identified
1. **HTTP Links:** All clickable links use `http://` instead of `https://`, which can trigger mixed-content warnings in modern email clients.
2. **Empty `<title>` Element:** The `<title>` element is empty, causing screen readers to announce the document name incorrectly.
3. **Malformed Charset Meta Tag:** The charset meta tag lacks the `http-equiv="Content-Type"` attribute.

#### Recommendations
1. **Switch All Links to HTTPS:** Ensure all links and image URLs use `https://`.
2. **Add Descriptive Title:** Add a descriptive title string such as "Skechers — Complete Your Purchase".
3. **Correct Charset Meta Tag:** Correct the charset meta tag by adding `http-equiv="Content-Type"`.

### 7. Evidence

**Overall Purpose:** Abandoned cart recovery, reminding recipients that an item is still in their cart and prompting purchase completion.
- **Hero Section:** Well-executed with a clear product image, name, and prominent CTA button.
- **Recommendations Section:** Logical placement but small thumbnails are difficult to read or click on.
- **Utility Sections:** Category navigation links, SMS opt-in, app download prompts, payment options, and social media follow buttons.

### 8. Technical Audit

#### Issues Identified
1. **HTTP Links (Not HTTPS):** All clickable links use `http://` instead of `https://`.
2. **Empty `<title>` Element:** The `<title>` element is empty.
3. **Malformed Charset Meta Tag:** Missing `http-equiv="Content-Type"` attribute.

#### Recommendations
1. **Switch to HTTPS Links:** Ensure all links and image URLs use `https://`.
2. **Add Descriptive Title String:** Add a descriptive title string such as "Skechers — Complete Your Purchase".
3. **Correct Charset Meta Tag:** Correct the charset meta tag by adding `http-equiv="Content-Type"`.

### 9. Recommendations Summary

| Priority | Issue | Action |
|---|---|---|
| High | All links and image URLs use HTTP | Switch all `http://` to `https://` in Attentive template settings |
| High | Personalization tokens absent | Confirm product dynamic content blocks exist in full template; if not, add `{{product_name}}`, `{{product_image}}`, and `{{cart_url}}` tokens |
| Medium | Empty `<title>` tag | Add descriptive title string |
| Medium | Malformed charset meta | Add `http-equiv="Content-Type"` attribute |
| Medium | UTM parameters unverified | Decode
