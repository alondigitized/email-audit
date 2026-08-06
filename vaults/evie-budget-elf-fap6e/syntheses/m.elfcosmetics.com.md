---
kind: synthesis
persona: evie-budget-elf-fap6e
brand: m.elfcosmetics.com
reactions: 84
through: 2026-08-05T16:22:54.000Z
created_at: 2026-05-29T18:20:45.614Z
updated_at: 2026-08-06T18:18:17.040Z
---

# ### Technical Audit Summary

The email from e.l.f. Cosmetics for their birthday promotion has a few technical issues that need to be addressed, primarily around font-family declarations and personalization tokens. Here's the detailed summary:

#### 1. **Technical Issues**

- **Empty Font-Family Value:**
  - The CSS declaration `font-family:'',Verdana,Sans-serif` is malformed due to an empty string at the beginning.
  - Corrected version should be: `font-family:'Jost',Verdana,sans-serif`.

- **Empty Title Tag:**
  - An empty `<title>` tag can cause issues in some clients, such as Gmail web and iOS notifications. It should be filled with a relevant title.

#### 2. **Rendering & Accessibility**

- **Nested Table Issues:**
  - There is an unnecessary nesting of `nl-container` tables inside other elements, which could lead to layout inconsistencies in Outlook.
  
- **Google Font Loading:**
  - The Google Font `Jost` is loaded via `<link>` but not used in the CSS. This font will never render and should be removed or properly referenced.

#### 3. **Personalization & Merge Tokens**

- **First Name Personalization Missing:**
  - There's no visible first-name merge tag (`{{${first_name}}}`) in the preheader or hero row, which reduces personalization effectiveness.
  
- **Birthday Month Validation Logic:**
  - The logic for ensuring that the email is sent only during the recipient’s actual birth month cannot be verified from the HTML alone and requires a review of Braze Canvas/Campaign configuration.

#### 4. **Compliance (CAN-SPAM / Unsubscribe / Authentication)**

- **Unverifiable Compliance Elements:**
  - The source is truncated before the footer, so it's impossible to verify compliance with CAN-SPAM requirements (physical postal address), unsubscribe functionality, and List-Unsubscribe header presence.

#### Recommendations:

1. **Fix Font-Family Declaration:**
   ```css
   font-family:'Jost',Verdana,sans-serif;
   ```

2. **Add Title Tag Content:**
   - Ensure the `<title>` tag contains a relevant title for better inbox preview display.
   
3. **Remove Unused Google Fonts:**
   - Remove or properly reference any unused fonts to avoid unnecessary loading.

4. **Include First Name Personalization:**
   - Insert `{{${first_name}}}` in the preheader and hero row to enhance personalization.

5. **Verify Full Source for Compliance:**
   - Review the full source code, especially the footer section, to ensure compliance with CAN-SPAM, unsubscribe functionality, and List-Unsubscribe headers.

By addressing these technical issues, e.l.f. Cosmetics can improve the email's performance and user experience significantly.
