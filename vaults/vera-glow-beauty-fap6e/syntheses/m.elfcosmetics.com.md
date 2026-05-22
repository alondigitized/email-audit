---
kind: synthesis
persona: vera-glow-beauty-fap6e
brand: m.elfcosmetics.com
reactions: 14
through: 2026-05-21T17:50:12.000Z
created_at: 2026-05-22T18:21:05.038Z
updated_at: 2026-05-22T18:21:05.038Z
---

# ## Technical Audit (Continued)

### 4. Personalization & Merge Tokens

**[RISK] No first-name merge tag visible:** In the truncated source, no `{{first_name}}` or similar personalization tokens are present in the preheader or hero row. For a birthday-triggered email, it's standard to include personalized greetings like "Happy Birthday [First Name]!" This absence could indicate that the personalization is not being applied correctly.

**[RISK] No birthday month validation:** The email mentions "during your birthday month," but there are no merge tags or conditional logic visible in the truncated source. If this is a triggered send, it should have clear indicators of personalized content based on user data (e.g., `{{birthday_month}}`).

### 5. Compliance & Best Practices

**[CONFIRMED BUG] Empty font-family first value:** The leading empty string `''` in the font stack causes rendering issues:
```css
font-family:'',Verdana,Sans-serif
```
This should be corrected to:
```css
font-family:'Jost',Verdana,sans-serif
```

**[MINOR] Empty `<title>` tag:**
```html
<title></title>
```
Filling this with a relevant title like "e.l.f. Birthday Gift" would enhance accessibility and tab/notification context.

### 6. UTM Parameters & Tracking

**UTM Verification Required:** The Braze click-tracking URLs (`https://links.elfcosmetics.com/f/a/...`) encode destination URLs, making it impossible to verify the presence of UTM parameters (e.g., `utm_source`, `utm_medium`, `utm_campaign`). This requires decoding the redirect chain or inspecting the actual URL destinations.

### 7. Rendering Across Clients

**[POSITIVE] Proper MSO conditional wrapping:** The Google Fonts `<link>` is wrapped correctly with MSO conditionals:
```html
<!--[if !mso]><!-->
<link href="https://fonts.googleapis.com/css?family=Jost:400,500" rel="stylesheet">
<!--<![endif]-->
```
This ensures that Outlook does not attempt to load the Google Fonts.

**[POSITIVE] Nested tables with `role="presentation"`:** All layout tables use `role="presentation"` and are nested correctly. This is a best practice for ensuring proper rendering across clients, especially in older email clients like Outlook 2013/2016.

### 8. Accessibility & Usability

**[POSITIVE] Alt text present on images:**
```html
<img src="..." alt="e.l.f. beauty squad">
```
This is crucial for screen readers and ensures that the content description is available to users with visual impairments.

**[MINOR] Nested tables:** The double-nesting of `nl-container` tables can cause line-height inheritance issues in Outlook, but this is a minor issue compared to other rendering problems.

### 9. Summary & Recommendations

#### Positive Findings:
- Proper use of MSO conditionals and Google Fonts wrapping.
- Use of `role="presentation"` on layout tables.
- Alt text present on images for accessibility.
- Clear visual hierarchy with the hero image and bold headline.

#### Issues to Address:
1. **Empty Font Family:** Correct the font stack to remove the leading empty string.
2. **Empty Title Tag:** Fill the `<title>` tag with a relevant title.
3. **Personalization Tokens:** Ensure that first-name personalization is applied correctly in the preheader or hero row.
4. **UTM Verification:** Verify UTM parameters are present and correctly formatted in tracked URLs.

#### Recommendations:
- Review the source code for any missed personalization tokens, especially `{{first_name}}`.
- Correct the font-family declaration to ensure proper rendering across all clients.
- Fill the `<title>` tag with a relevant title for better accessibility and tab/notification context.
- Verify UTM parameters are present in tracked URLs.

By addressing these issues, e.l.f. can improve both the technical performance and user experience of their birthday email campaign.
