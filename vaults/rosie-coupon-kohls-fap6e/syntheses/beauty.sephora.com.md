---
kind: synthesis
persona: rosie-coupon-kohls-fap6e
brand: beauty.sephora.com
reactions: 52
through: 2026-08-06T13:23:01.000Z
created_at: 2026-08-08T18:21:53.871Z
updated_at: 2026-08-08T18:21:53.871Z
---

# ### Summary and Recommendations

The Sephora "Starts today! You have 10% off" email has several technical issues that need addressing for better accessibility and user experience. Here are the key points from the audit, along with actionable recommendations:

---

## Technical Audit Summary

### Rendering & Accessibility Issues:
- **[HIGH]** `maximum-scale=1` blocks pinch-to-zoom on mobile.
  - **Fix:** Remove or set to `maximum-scale=5`.
  
- **[HIGH]** `text-size-adjust: none` applied to body-level selectors.
  - **Fix:** Limit this style to specific layout containers, not global elements.

### Rendering & Accessibility Information:
- **[LOW]** Duplicate `.appear` rule block in mobile media query.
  - **Fix:** Remove redundant declarations.

### Personalization & Merge Tokens:
- **[LOW]** Subject line discount value appears static.
  - **Recommendation:** Ensure the subject uses a dynamic merge token if applicable.

### Compliance (CAN-SPAM, Unsubscribe, Authentication):
- **Cannot fully audit** — HTML is truncated before footer. Required CAN-SPAM elements are not visible in the provided source.
  - **Fix:** Ensure physical mailing address and unsubscribe link are present in the email footer.

---

## Recommendations

1. **Remove or Adjust `maximum-scale=1`**
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   ```
   This will allow users to zoom in on mobile devices for better accessibility.

2. **Limit `text-size-adjust: none` to Specific Elements**
   ```css
   div.container, a.button, tr.layout, table.header, span.text {
     -webkit-text-size-adjust: none;
     -ms-text-size-adjust: none;
     text-size-adjust: none;
   }
   ```
   This ensures that only specific layout elements are affected, not the entire body.

3. **Remove Duplicate CSS Rule**
   ```css
   *[class=appear], .appear {
     display: block !important; 
     width: 100% !important; 
   }
   ```

4. **Ensure Dynamic Discount Value in Subject Line**
   Use a merge token like `%%DISCOUNT%%`:
   ```html
   <meta property="og:title" content="Starts today! You have %%DISCOUNT%% off 🎉">
   ```
   
5. **Add Required CAN-SPAM Elements to Footer**
   Ensure the footer includes:
   - Physical mailing address.
   - Unsubscribe link with clear instructions.

6. **Correct Malformed `robots` Meta Tag**
   ```html
   <meta name="robots" content="noindex, nofollow">
   ```

---

## Additional Recommendations for Email Content

1. **Fix Sequence Logic**
   - Explicitly state the offer extension: "We extended your 10% off."
   
2. **Replace Illustrated Panel with Category Picker**
   - Use tappable tiles for "Skincare," "Makeup," and "Fragrance."

3. **Improve CTA Specificity**
   - Replace "SHOP NOW" with more specific CTAs like "Shop my recommendations" or "Redeem 10% off."
   
4. **Rewrite Preheader to Reinforce Offer**
   - Use alternatives like:
     - `Code SE3ARPH unlocks 10% off your first order — expires June 1`
     - `Your Beauty Insider welcome offer just activated — here's your code`

---

## Business Impact and Persona-Grounded Analysis

### Business Impact Score (9/10)
- **Strengths:** Clear hero offer, trusted sender, concrete deadline.
- **Weaknesses:** Cadence contradiction, generic CTA, misleading preheader.

### Open Likelihood (8/10)
- **Signals:** Recognizable sender, clear subject, time-bound urgency.
  
### Click-Through Likelihood (8/10)
- **Signals:** Clear offer, visible product recommendations, consistent brand voice.

By addressing the technical issues and refining the content strategy, the email can significantly improve user experience and conversion rates.
