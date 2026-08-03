---
kind: synthesis
persona: walker
brand: email.famousfootwear.com
reactions: 80
through: 2026-07-24T14:35:03.000Z
created_at: 2026-05-05T18:19:13.638Z
updated_at: 2026-08-02T18:20:20.592Z
---

# ### Summary of Technical Audit Findings

The technical audit of the Famous Footwear "Last Call Extra 25% off Clearance" email reveals several issues that could negatively impact deliverability, accessibility, and user experience. Here are the key findings:

- **Link & Tracking Issues**
  - **34 unverifiable tracking links**: All CTAs route through a redirect domain (`click.email.famousfootwear.com`), making it impossible to verify their destination URLs and HTTP status codes.
  - **Plain-text part is URL-heavy**: The plain text version of the email contains an excessive number of URLs, which can trigger spam filters due to its high ratio of URLs to human-readable content.

- **Rendering & Accessibility**
  - **34 images without alt attributes**: All product, promotional, and UI images lack descriptive `alt` tags, making them inaccessible to screen readers.
  - **Mixed-content HTTP image**: A non-HTTPS image source is used, which will be blocked by most email clients due to security concerns.
  - **Viewport meta issues**: The viewport settings (`user-scalable=0`, `maximum-scale=1`) prevent pinch-to-zoom on mobile devices and are ignored by iOS 10+.
  - **Missing HTTP-EQUIV attribute in charset declaration**: The `<meta>` tag for character encoding is missing the required `http-equiv` attribute, rendering it ineffective in some clients.

### Recommendations

#### Link & Tracking Issues
- **Verify Redirect URLs**: Ensure all tracking links are functioning correctly and have appropriate destination URLs.
- **Reduce URL Density in Plain Text**: Minimize the number of URLs in the plain text version to avoid triggering spam filters. Include more human-readable content instead.

#### Rendering & Accessibility
- **Add Alt Attributes to Images**: Provide descriptive `alt` tags for all images to improve accessibility and ensure screen readers can describe them.
- **Use HTTPS for All Resources**: Replace any HTTP resources with their HTTPS equivalents to prevent blocking by email clients.
- **Remove Viewport Meta Settings**: Remove the problematic viewport settings (`user-scalable=0`, `maximum-scale=1`) as they are ignored by modern devices and may cause accessibility issues.
- **Correct Charset Declaration**: Add the required `http-equiv` attribute to the charset declaration `<meta>` tag.

### Detailed Recommendations

#### Link & Tracking Issues
1. **Verify Redirect URLs**
   - Use a tool like Postman or similar to test all tracking links (`click.email.famousfootwear.com`) and ensure they are functioning correctly.
   - Verify that each link redirects to an appropriate destination URL with the correct HTTP status code (e.g., 200 OK).

2. **Reduce URL Density in Plain Text**
   - Rewrite the plain text version of the email to include more human-readable content instead of just URLs.
   - For example, replace:
     ```
     https://www.famousfootwear.com/clearance
     ```
     with:
     ```
     Visit our clearance section at famousfootwear.com for great deals!
     ```

#### Rendering & Accessibility
1. **Add Alt Attributes to Images**
   - Ensure every image has a descriptive `alt` attribute that describes the content of the image.
   - Example:
     ```html
     <img src="https://image.email.famousfootwear.com/3b6a7dc1-6955-49f8-868a-bf62a15122ee.png" alt="Famous Footwear logo">
     ```

2. **Use HTTPS for All Resources**
   - Replace any HTTP resources with their HTTPS equivalents.
   - Example:
     ```html
     <img src="https://secure.image.email.famousfootwear.com/3b6a7dc1-6955-49f8-868a-bf62a15122ee.png" alt="Famous Footwear logo">
     ```

3. **Remove Viewport Meta Settings**
   - Remove the problematic viewport settings:
     ```html
     <meta name="viewport" content="width=device-width, initial-scale=1">
     ```
   - This will allow users to zoom in and out on mobile devices.

4. **Correct Charset Declaration**
   - Ensure the charset declaration includes the `http-equiv` attribute:
     ```html
     <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
     ```

### Conclusion

Addressing these technical issues will improve the email's deliverability, accessibility, and overall user experience. Ensuring that images have proper alt attributes, using HTTPS for all resources, removing problematic viewport settings, and correcting character encoding declarations are critical steps to enhance the email's performance across different clients and devices.
