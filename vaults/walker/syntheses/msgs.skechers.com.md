---
kind: synthesis
persona: walker
brand: msgs.skechers.com
reactions: 70
through: 2026-05-05T13:45:04.000Z
created_at: 2026-05-01T18:21:04.242Z
updated_at: 2026-05-06T18:20:49.968Z
---

# ### Summary of Recommendations and Technical Audit Findings

#### Email Design & Content Improvements:

1. **Remove or Reposition BOGO Offer:**
   - Move the "Buy One, Get One 50% Off" offer below the fold to avoid diluting the primary CTA.
   
2. **Show Product Price on Hero Image:**
   - Display the price next to the product name in the hero image section.

3. **Improve Recommendation Grid Visibility:**
   - Increase the size of recommended products, making them more legible and visually appealing.

4. **Simplify Bottom Utility Stack:**
   - Remove unnecessary utility modules like category navigation and social icons.
   - Keep only essential secondary CTAs (e.g., "Shop All Best Sellers," app download).

5. **Add Urgency Signal:**
   - Include a soft urgency message such as "Items in your cart can sell out" or add low-stock badges.

#### Technical Audit Findings:

1. **HTTP Redirect URLs:**
   - Ensure all links use HTTPS to secure click data and avoid spam filter penalties.
   
2. **Empty `<title>` Tag:**
   - Add a meaningful title tag for better user experience when opening the email in a browser.

3. **Mixed Preheader Padding Characters:**
   - Replace soft hyphens (`­`) with additional U+034F (COMBINING GRAPHEME JOINER) characters or zero-width non-breaking spaces (U+FEFF).

4. **Image `alt` Text:**
   - Ensure all images have proper `alt` text for accessibility and rendering in image-off environments.

5. **Table Accessibility:**
   - Add `role="presentation"` to layout tables to prevent screen readers from announcing them as data tables.

6. **Merge Tokens:**
   - Verify that customer personalization tokens (e.g., first name, product details) are present in the full template.
   
7. **Unsubscribe Link and Physical Address:**
   - Confirm presence of unsubscribe link and physical mailing address in the footer.
   
8. **Sending Domain Compliance:**
   - Validate SPF, DKIM, and DMARC alignment for `msgs.skechers.com`.

9. **Email-to-Site Continuity:**
   - Ensure destination URLs contain UTM parameters to maintain proper analytics tracking.

### Detailed Recommendations:

1. **Content & Design Adjustments:**

   - **Hero Section:**
     ```html
     <div class="hero">
       <img src="maximus_warrior.jpg" alt="Maximus Warrior Shoe">
       <h2>Maximus Warrior</h2>
       <p>$99.99</p>
       <button onclick="completeOrder()">Complete Your Order</button>
     </div>
     ```

   - **BOGO Offer:**
     ```html
     <div class="bogo-offer">
       <img src="bogo-banner.jpg" alt="Buy One, Get One 50% Off">
       <p>Get 50% off a second pair!</p>
     </div>
     ```

   - **Product Recommendations:**
     ```html
     <div class="recommendations">
       <h3>Here's Some Great Options We Think You'll Love</h3>
       <div class="product-grid">
         <a href="product1.html"><img src="product1.jpg" alt="Product 1"></a>
         <a href="product2.html"><img src="product2.jpg" alt="Product 2"></a>
         <a href="product3.html"><img src="product3.jpg" alt="Product 3"></a>
       </div>
     </div>
     ```

   - **Bottom Utility Stack:**
     ```html
     <div class="footer-utilities">
       <button onclick="shopBestSellers()">Shop All Best Sellers</button>
       <a href="appstore.html"><img src="app-store-badge.png" alt="Download App"></a>
       <a href="find-a-store.html">Find a Store Near You</a>
     </div>
     ```

2. **Technical Adjustments:**

   - **Title Tag:**
     ```html
     <title>SKECHERS Abandoned Cart Recovery Email</title>
     ```

   - **Preheader Padding Characters:**
     ```html
     <meta name="msapplication-TileColor" content="#ffffff">
     <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
     <meta name="theme-color" content="#ffffff">
     ```

   - **Image `alt` Text:**
     ```html
     <img src="maximus_warrior.jpg" alt="Maximus Warrior Shoe">
     ```

   - **Table Accessibility:**
     ```html
     <table role="presentation">
       <!-- Table Content -->
     </table>
     ```

3. **Compliance Checks:**

   - Ensure the unsubscribe link and physical mailing address are present in the footer.
   - Validate SPF, DKIM, and DMARC records for `msgs.skechers.com`.

4. **Email-to-Site Continuity:**

   - Append UTM parameters to all destination URLs:
     ```html
     <a href="https://www.example.com/product1?utm_source=email&utm_medium=abandoned_cart&utm_campaign=maximus_warrior">Product 1</a>
     ```

By implementing these changes, the abandoned cart email will be more effective in driving conversions and adhering to best practices for both design and technical compliance.
