---
kind: synthesis
persona: cole-drywall-lowes-fap6e
brand: e.lowes.com
reactions: 42
through: 2026-06-15T20:08:44.000Z
created_at: 2026-05-18T18:19:10.971Z
updated_at: 2026-06-19T18:21:04.063Z
---

# ### Technical Audit — Lowe's "Save big on your outdoor reset" Email

#### Summary:
The email is sent via Listrak ESP (`e.lowes.com`, `sli.lowes.com`) with standard click-tracking and impression pixels. The technical audit highlights several issues related to accessibility, overlapping responsive breakpoints, missing `alt` attributes, and incomplete compliance header capture.

### Detailed Findings:

1. **Technical Summary:**
   - Email is sent via Listrak ESP.
   - Standard click-tracking and impression pixels are used.
   - No broken merge tokens detected in visible source but 8 content/tracking images lack `alt` attributes.
   - Compliance headers (e.g., `List-Unsubscribe`) not captured by the relay.

2. **Link & Tracking Issues:**
   - **21 tracking links skipped:** All routed through Listrak click-redirect domains (`e.lowes.com`). This is expected ESP behavior, but final destination URLs and UTM parameters cannot be verified without following redirects.
   - **Impression/open pixels confirmed firing:**
     - Open pixel URL: `https://mi.lowes.com/p/cp/e756885def464aa2/o.gif?mi_u=410146703`
       - Subscriber ID is populated.
     - Engagement tracking pixels (Listrak):
       - Multiple `sli.lowes.com/imp` URLs with subscriber and campaign fields.

3. **Rendering & Accessibility:**
   - **Missing `alt` attributes on 8 images:** 
     - Hero image URL: `image.e.lowes.com/…/c301e24e-201b-46f9-8172-27b5acdcbf99.jpg`
     - Content image URL: `image.e.lowes.com/…/ad569dc5-361d-4d7d-8bc0-1ae6ec389f05.png`
     - Open pixel URL: `mi.lowes.com/p/cp/e756885def464aa2/o.gif`
     - Impression pixels (×5): `sli.lowes.com/imp?s=1090834…` through `s=1090838`
   - **Tracking and pixel images should have `alt=""`:**
     - Tracking/pixel images (`o.gif`, `imp` endpoints) should carry `alt=""`.
     - Content images require descriptive alt text.
   - **Overlapping responsive breakpoints:**
     - Two media queries target overlapping ranges:
       - `(min-width: 375px) and (max-width: 600px)`
       - `(max-width: 480px)`
     - Rules in the 375–480px range will apply from both blocks. Cascade order determines which `.container`, `.drop`, and `.photo` overrides win.
   - **Web fonts (Fellix, DIN Next) loaded via WOFF only:**
     - No WOFF2 variant or `format('woff2')` hint.
     - Fallback stack behavior depends on full `font-family` declarations.

4. **Personalization & Merge Tokens:**
   - No unfired merge tokens (`{{`, `*|`, `%%`) visible in the available HTML source.
   - Subscriber-specific fields in tracking pixels are all resolved (e.g., `mi_u=410146703`, `lctg=410146703`, `e=cole-drywall-lowes-fap6e@etell.app`).

5. **Compliance:**
   - **`List-Unsubscribe` header not captured:** QA flagged this as missing, but it is likely present on the originating Listrak delivery.
   - **`List-Unsubscribe-Post` (RFC 8058) not captured:** Same relay limitation applies.

### Recommendations:

1. **Add `alt` Attributes:**
   - Ensure all images have appropriate `alt` attributes:
     - Tracking/pixel images should use `alt=""`.
     - Content images should have descriptive alt text.
   
2. **Optimize Web Fonts:**
   - Add WOFF2 variants and `format('woff2')` hints to improve performance for clients that support it.

3. **Resolve Overlapping Breakpoints:**
   - Verify and adjust the CSS rules in overlapping breakpoint ranges (375–480px) to ensure consistent rendering across devices.

4. **Compliance Headers:**
   - Ensure `List-Unsubscribe` and `List-Unsubscribe-Post` headers are correctly set up and captured by ESP delivery logs for verification purposes.

By addressing these technical issues, the email will be more accessible, performant, and compliant with best practices, leading to better engagement and user experience.
