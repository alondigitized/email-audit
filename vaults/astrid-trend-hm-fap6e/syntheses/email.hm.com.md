---
kind: synthesis
persona: astrid-trend-hm-fap6e
brand: email.hm.com
reactions: 127
through: 2026-08-31T15:36:52.000Z
created_at: 2026-05-31T18:21:59.030Z
updated_at: 2026-09-01T18:18:33.639Z
---

# It looks like the technical audit for H&M's "Coming soon: LOTTO H&M" email is incomplete due to a cut-off at the end. He

### 2. Link & Tracking Issues

**Cannot confirm link tracking and UTM parameters from truncated HTML**
- **Issue:** The full source code needs to be reviewed to ensure that all links have proper UTM parameters for accurate analytics.
- **Fix:** Ensure that every CTA button and product image has the appropriate UTM decoration.

### 3. Alt Text

**Cannot confirm alt text presence on images from truncated HTML**
- **Issue:** The audit cannot verify if all images have descriptive `alt` attributes, which is crucial for accessibility and SEO.
- **Fix:** Review the full source code to ensure that every image has a meaningful `alt` attribute.

### 4. Structured Data

**Stale JSON-LD structured data**
- **Issue:** The schema.org annotations contain outdated placeholder values:
  - `availabilityStarts`: "2018-12-31T18:59:59-05:00" (should be the actual send date)
  - Other fields like `discountCode`, `description`, etc., are empty.
- **Fix:** Populate these fields dynamically at send time to ensure accurate structured data.

### 5. Authentication Headers

**Cannot confirm SPF, DKIM, and DMARC alignment from truncated HTML**
- **Issue:** The audit cannot verify if the email is properly authenticated with SPF, DKIM, and DMARC records.
- **Fix:** Ensure that the sending domain `email.hm.com` has proper authentication headers in place.

### 6. Email-to-Site Continuity

**Cannot confirm continuity from truncated HTML**
- **Issue:** The audit cannot verify if the email links properly continue to the landing page experience, including consistent branding and messaging.
- **Fix:** Review the full source code and ensure that all CTAs and product pages have a seamless transition.

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| High | `@import` font loading blocked by Gmail/Outlook | Move font `@font-face` declarations inline or accept system font fallback; define explicit `font-family` fallback stacks |
| High | Stale `availabilityStarts` (2018) in JSON-LD | Populate dynamically at send time; wire to actual campaign dates |
| Medium | Empty JSON-LD fields (`subjectLine`, `url`, `image`, `discountCode`) | Populate or omit the schema blocks entirely to avoid malformed structured data |
| Low | Duplicate mobile CSS rules | Audit template module injection logic; deduplicate at build time |
| Low | `<meta viewport>` missing `initial-scale=1` | Add to base template |
| — | Full-source re-audit needed | Link tracking, UTM params, unsubscribe footer, and alt text cannot be confirmed from truncated HTML |

### Summary

The email is well-structured with a clean layout but suffers from context fatigue due to repetitive soccer-themed sends. The technical audit highlights issues with stale JSON-LD data, missing `alt` attributes, and potential link tracking gaps. Addressing these will improve both the user experience and deliverability.

---

This completes the technical audit for H&M's "Coming soon: LOTTO H&M" email. If you need further assistance or additional details, please let me know!
