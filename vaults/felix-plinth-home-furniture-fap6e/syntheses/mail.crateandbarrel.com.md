---
kind: synthesis
persona: felix-plinth-home-furniture-fap6e
brand: mail.crateandbarrel.com
reactions: 63
through: 2026-05-23T21:49:37.000Z
created_at: 2026-05-16T18:19:07.018Z
updated_at: 2026-05-26T18:20:43.214Z
---

# ### Summary of Findings and Recommendations

#### Subject Line Analysis:
- **Current Subject:** `STARTS NOW! Up to 60% off The Memorial Day Event + 2x Rewards!`
- **Length:** 62 characters
- **Scores (1-10):**
  - Clarity: 8
  - Curiosity: 3
  - Personalization: 1
  - Urgency: 7
  - Specificity: 6

#### Recommendations:
1. **Subject Line Rewrite:**
   - **Alt A:** `Memorial Day Sale starts today — 60% off + double rewards`
   - **Alt B:** `Your C&B Memorial Day deal: 60% off, 2x rewards, this weekend only`

2. **Hero Subhead Update:**
   - Add category specificity to the hero subhead (e.g., "Sofas, dining tables, outdoor seating — up to 60% off").

3. **Personalized Product Module:**
   - Include a personalized product module above the fold ("top picks in living room" or similar).

4. **Rewards Math Clarification:**
   - Make the rewards math concrete (e.g., "Earn an extra $20 in rewards for every $200 you spend this weekend").

5. **Hero Image Labeling:**
   - Add a small text callout to label the hero image's destination (e.g., "Shop the Coastal Living Collection").

#### Technical Audit Findings:

1. **Viewport Meta Issue:**
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1">
   ```
   Remove `maximum-scale=1` to allow pinch-to-zoom.

2. **Conflicting Image Max-Width Media Queries:**
   - Consolidate conflicting media queries:
     ```css
     @media only screen and (min-width: 640px) { img { max-width: 640px } }
     ```

3. **Hardcoded Mobile Width:**
   - Update `.showmobile` to use `100%` or `calc(100vw - 40px)`:
     ```css
     .showmobile { width: calc(100vw - 40px) !important; }
     ```

4. **Dark Mode Handling:**
   - Add a tested dark-mode media query or remove the explicit opt-out:
     ```html
     <meta name="color-scheme" content="light">
     <meta name="supported-color-schemes" content="light">
     ```

5. **Line Height Override:**
   - Scope `line-height` to specific elements instead of applying it globally:
     ```css
     .content { line-height: 100%; }
     ```

#### Full Source Review Recommendations:

- Confirm all CTAs carry consistent UTM parameters.
- Ensure tracked links route through the expected ESP redirect domain.

### Final Subject Line and Preheader Suggestions:

**Subject Alt A:** `Memorial Day Sale starts today — 60% off + double rewards`
- **Preheader Alt A:** `Sofas, dining, outdoor — the deepest discounts of the year, starting now.`

**Subject Alt B:** `Your C&B Memorial Day deal: 60% off, 2x rewards, this weekend only`
- **Preheader Alt B:** `Double your rewards points on everything in the sale, through Monday.`

By implementing these changes, you can improve both the user experience and the effectiveness of the email campaign.
