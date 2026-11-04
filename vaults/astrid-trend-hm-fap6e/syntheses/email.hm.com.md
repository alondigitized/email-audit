---
kind: synthesis
persona: astrid-trend-hm-fap6e
brand: email.hm.com
reactions: 191
through: 2026-10-31T15:26:56.000Z
created_at: 2026-05-31T18:21:59.030Z
updated_at: 2026-11-03T20:20:56.501Z
---

# ### 2. Link & Tracking Issues

**Cannot assess link tracking and UTM parameters from truncated HTML**

The provided HTML excerpt does not contain any CTA links or tracking parameters. To properly assess link tracking and UTM decoration, a full HTML source review is necessary. This includes verifying that:

- All CTAs and product links are properly instrumented with UTM parameters.
- The links are correctly tracking opens, clicks, and conversions.
- The UTM parameters are consistent and provide valuable data for analytics.

### 3. Mobile & Desktop Rendering

**Mobile CSS rules are duplicated**

The mobile CSS rules are duplicated in the HTML, which can lead to inconsistent rendering and performance issues. This should be addressed by ensuring that the mobile styles are properly deduplicated and applied only when needed.

**`<meta viewport>` tag is missing `initial-scale=1`**

The `<meta viewport>` tag is missing the `initial-scale=1` attribute, which can cause rendering issues on mobile devices. Adding this attribute will ensure that the email renders correctly on mobile devices.

### 4. HTML & CSS Issues

**`@import` font loading blocked by Gmail/Outlook**

The `@import` font loading mechanism is blocked by Gmail and Outlook, leading to potential font fallback issues. To resolve this, the font `@font-face` declarations should be moved inline or the font should be defined with explicit fallbacks.

### 5. Structured Data

**Stale and incomplete JSON-LD structured data**

The JSON-LD structured data contains stale and incomplete information, which can negatively impact Gmail's promotional annotations and other features. This should be updated to reflect the actual campaign dates and relevant information.

### 6. Unsubscribe & CAN-SPAM Compliance

**Unsubscribe and CAN-SPAM footer not visible in truncated HTML**

The unsubscribe and CAN-SPAM footer cannot be assessed from the truncated HTML. A full HTML source review is required to ensure compliance with these requirements.

### 7. Authentication Headers

**SPF, DKIM, and DMARC headers cannot be assessed from HTML**

The authentication headers (SPF, DKIM, and DMARC) cannot be assessed from the HTML. The sending domain `email.hm.com` should be verified for proper alignment and authentication.

### 8. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| High | `@import` font loading blocked by Gmail/Outlook | Move font `@font-face` declarations inline or accept system font fallback; define explicit `font-family` fallback stacks |
| High | Stale `availabilityStarts` (2018) in JSON-LD | Populate dynamically at send time; wire to actual campaign dates |
| Medium | Empty JSON-LD fields (`subjectLine`, `url`, `image`, `discountCode`) | Populate or omit the schema blocks entirely to avoid malformed structured data |
| Low | Duplicate mobile CSS rules | Audit template module injection logic; deduplicate at build time |
| Low | `<meta viewport>` missing `initial-scale=1` | Add to base template |
| — | Full-source re-audit needed | Link tracking, UTM params, unsubscribe footer, and alt text cannot be confirmed from truncated HTML |

### 9. Conclusion

The email is well-structured and on-brand, but there are several technical issues that need to be addressed to ensure optimal performance and compliance. A full HTML source review is necessary to address the missing elements and ensure proper link tracking, compliance, and structured data accuracy.
