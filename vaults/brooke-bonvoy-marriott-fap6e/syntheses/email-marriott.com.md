---
kind: synthesis
persona: brooke-bonvoy-marriott-fap6e
brand: email-marriott.com
reactions: 34
through: 2026-09-10T11:13:31.000Z
created_at: 2026-09-12T18:21:17.181Z
updated_at: 2026-09-12T18:21:17.181Z
---

# ### Summary of Recommendations

Based on the detailed analysis provided for Marriott's email campaign, here are the key recommendations:

1. **Focus on a Single Conversion Goal:**
   - Collapse the email into one module with a clear summer parking offer.
   - Include a hard booking deadline (e.g., "Book by July 15") to create urgency.

2. **Reintroduce Personalization in the Subject Line:**
   - Use Brooke's first name in the subject line, as it has historically resulted in higher open rates and engagement scores.

3. **Highlight Loyalty Benefits:**
   - Include a mention of earning Bonvoy points for every night booked to leverage the loyalty program effectively.

4. **Address Technical Issues:**
   - Change `http://` font URLs to `https://` for security.
   - Replace non-standard `format('otf')` with `format('opentype')`.
   - Remove unnecessary SVG format declarations.

### Detailed Recommendations

1. **Single Conversion Goal Module**

   The email should focus on a single, compelling offer:
   - **Headline:** "Drive In, Park Easy, Do NOLA"
   - **Hero Image:** French Quarter street scene
   - **Offer Details:**
     - Summer parking included for bookings made by July 15.
     - Specific dates and availability details (e.g., July through August).
   - **Call-to-Action:** "Book Your Stay Now"

2. **Reintroduce Personalization**

   Modify the subject line to include Brooke's first name:
   ```plaintext
   Subject: Brooke, Drive In, Park Easy, Do NOLA This Summer!
   ```

3. **Highlight Loyalty Benefits**

   Include a clear mention of earning Bonvoy points in the body copy:
   - "Earn Bonvoy points on every night booked."
   - "Join Marriott Bonvoy and unlock exclusive perks like free nights and more."

4. **Technical Fixes**

   Ensure all technical issues are addressed to improve rendering across different clients:

   - Change `http://` URLs for fonts to `https://`:
     ```css
     url('https://cache.marriott.com/aka-fonts/MarriottDigital/AldineforMarriott-Roman.woff')
     url('https://cache.marriott.com/aka-fonts/MarriottDigital/AldineforMarriott-Italic.woff')
     ```

   - Replace `format('otf')` with `format('opentype')`:
     ```css
     @font-face {
       font-family: 'Aldine-Light';
       src: url('https://cache.marriott.com/aka-fonts/MarriottDigital/AldineforMarriott-Light.woff2') format('woff2'),
            url('https://cache.marriott.com/aka-fonts/MarriottDigital/AldineforMarriott-Light.otf') format('opentype');
     }
     ```

   - Remove unnecessary SVG font declarations:
     ```css
     @font-face {
       font-family: 'Aldine-Light';
       src: url('https://cache.marriott.com/aka-fonts/MarriottDigital/AldineforMarriott-Light.woff2') format('woff2'),
            url('https://cache.marriott.com/aka-fonts/MarriottDigital/AldineforMarriott-Light.otf') format('opentype');
     }
     ```

### Final Thoughts

By focusing on a single, clear offer with a hard deadline and reintroducing personalized elements, Marriott can significantly improve the email's effectiveness. Addressing technical issues will ensure consistent rendering across various clients, enhancing overall user experience.

If you need further assistance or have additional questions, feel free to reach out!
