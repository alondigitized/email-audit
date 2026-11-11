---
kind: synthesis
persona: bree-stuffed-buildabear-fap6e
brand: ebuildabear.com
reactions: 128
through: 2026-11-08T18:08:35.000Z
created_at: 2026-06-13T18:20:23.336Z
updated_at: 2026-11-11T20:18:47.012Z
---

# It looks like the technical audit for the Build-A-Bear "Summer Collection" email is incomplete due to truncation. I'll s

### 2. Link & Tracking Issues
- **UTM Parameters**: Ensure that all links in the email are properly tagged with UTM parameters to track performance and analytics.
- **Redirect Chains**: Verify that any redirects used in the email links are secure and do not cause issues with tracking or user experience.

### 3. Rendering & Accessibility
#### Critical Issues
1. **Broken X-UA-Compatible Meta Tag**
   ```html
   <meta http-equiv="X-UA-Compatible" Aontent="IE=edge" />
   ```
   **Fix**: Correct the typo `Aontent` to `content`.
   ```html
   <meta http-equiv="X-UA-Compatible" content="IE=edge" />
   ```

2. **Malformed VML XML (Outlook Conditional Block)**
   ```html
   <o:PixelsPerInch>96</o:PixelsPerInch></o:PixelsPerInch>
   <o:OfficeDocumentSettings></o:OfficeDocumentSettings></o:OfficeDocumentSettings>
   ```
   **Fix**: Remove the redundant closing tags.
   ```html
   <o:PixelsPerInch>96</o:PixelsPerInInch>
   <o:OfficeDocumentSettings></o:OfficeDocumentSettings>
   ```

#### Non-Critical Issues
1. **Invalid CSS Shorthand**
   ```css
   #table-container { border: 10px; border-radius: 20px 20px 20px 20px !important; }
   ```
   **Fix**: Specify the border style.
   ```css
   #table-container { border: 10px solid black; border-radius: 20px !important; }
   ```

2. **Non-standard CSS Property Casing**
   ```css
   p { Margin: 0px !important; Padding: 0px !important; }
   ```
   **Fix**: Use lowercase for property names.
   ```css
   p { margin: 0px !important; padding: 0px !important; }
   ```

3. **Redundant Duplicate Rule**
   ```css
   .gmailfix { display: none; display: none !important; }
   ```
   **Fix**: Remove the redundant rule.
   ```css
   .gmailfix { display: none !important; }
   ```

4. **Mobile-only Class Definition**
   Ensure that `.shop-now-button` is defined for both mobile and desktop views if used in desktop markup.

5. **Trailing Whitespace in `<title>`**
   ```html
   <title>Build-A-Bear </title>
   ```
   **Fix**: Remove the trailing space.
   ```html
   <title>Build-A-Bear</title>
   ```

### 4. Personalization & Merge Tokens
- **Merge Tokens**: Ensure that any merge tokens used in the email are correctly implemented and tested.

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)
- **Unsubscribe Link and Physical Mailing Address**: Ensure these are present in the footer.
- **Preheader Implementation**: Ensure the preheader is correctly double-suppressed.
- **Authentication**: Verify that `ebuildabear.com` has proper SPF, DKIM, and DMARC records.

### Recommendations
1. **Testing**: Use a testing tool like Litmus or Email on Acid to ensure the email renders correctly across different clients.
2. **Validation**: Run the HTML and CSS through a validator to catch any additional issues.
3. **Review**: Double-check the footer for unsubscribe and physical mailing address information.

By addressing these issues, the email will be more likely to render correctly and comply with best practices, improving both deliverability and user experience.
