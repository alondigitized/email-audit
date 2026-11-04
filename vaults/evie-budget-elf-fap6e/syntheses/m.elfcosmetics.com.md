---
kind: synthesis
persona: evie-budget-elf-fap6e
brand: m.elfcosmetics.com
reactions: 152
through: 2026-10-29T17:04:44.000Z
created_at: 2026-05-29T18:20:45.614Z
updated_at: 2026-11-03T20:19:32.207Z
---

# ### Summary of Technical Audit for e.l.f. Cosmetics Birthday Email

#### 1. Technical Summary
- **ESP:** Braze
- **Font Stack Bug:** Empty font-family first value (`''` should be `'Jost'`)
- **Empty `<title>` Tag:** Missed opportunity for personalization
- **Nested Tables:** Minor issue with nested `nl-container` tables
- **Positive Findings:** Proper use of `role="presentation"`, correct MSO conditional wrapping, and proper `alt` and `title` attributes on images

#### 2. Link & Tracking Issues
- **Braze Click-Wrapping:** Confirmed and expected
- **UTM Verification:** Requires decoding the redirect chain

#### 3. Rendering & Accessibility
- **Font Stack Bug:** Confirmed and should be fixed
- **Empty `<title>` Tag:** Minor issue, should be filled with a relevant title
- **Nested Tables:** Minor issue, can cause Outlook line-height inheritance bugs

#### 4. Personalization & Merge Tokens
- **First-Name Merge Tag:** Absent in the preheader and hero row
- **Birthday Month Validation:** Unverifiable from HTML alone, requires Braze Canvas/Campaign configuration review

#### 5. Compliance (CAN-SPAM / Unsubscribe / Authentication)
- **Physical Postal Address:** Unverifiable from truncated source
- **Unsubscribe Link:** Unverifiable from truncated source
- **List-Unsubscribe Header:** Unverifiable from truncated source
- **Sending Domain:** `makeup@m.elfcosmetics.com`

### Recommendations

1. **Fix Font Stack Bug:**
   - Ensure the font stack is correctly set to `font-family: 'Jost', Verdana, sans-serif`.

2. **Fill `<title>` Tag:**
   - Add a relevant title tag to improve personalization and ensure proper rendering in clients that use it.

3. **Remove Nested Tables:**
   - Simplify the table structure to avoid unnecessary DOM depth and potential Outlook issues.

4. **Add First-Name Merge Tag:**
   - Include `{{${first_name}}}` in the preheader or hero row to enhance personalization.

5. **Verify Compliance:**
   - Ensure the full footer is present and includes the required CAN-SPAM elements, unsubscribe link, and List-Unsubscribe header.

### Final Score

**Technical Audit Score: 7/10**

- **Positive Findings:** Proper use of `role="presentation"`, correct MSO conditional wrapping, and proper `alt` and `title` attributes on images.
- **Minor Issues:** Empty `<title>` tag, nested tables, and font stack bug.
- **Unverifiable:** Physical postal address, unsubscribe link, and List-Unsubscribe header due to truncated source.

By addressing these issues, e.l.f. Cosmetics can improve the technical quality and user experience of their birthday email campaign.
