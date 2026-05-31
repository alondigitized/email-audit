---
kind: synthesis
persona: astrid-trend-hm-fap6e
brand: email.hm.com
reactions: 23
through: 2026-05-30T19:41:53.000Z
created_at: 2026-05-31T18:21:59.030Z
updated_at: 2026-05-31T18:21:59.030Z
---

# ## Technical Audit Summary for H&M "Coming soon: LOTTO H&M

### Overview
This email is a launch announcement for the Lotto × H&M collaboration, set to drop on May 21. The email's structure includes co-branded logos, lifestyle images, brand story, product details, and CTAs. However, it suffers from context fatigue due to being part of a series of soccer-themed sends over the past week.

### Key Issues

#### Visual Hierarchy and CTA Design
- **Ghost/Outline Buttons:** The primary "VIEW THE COLLECTION" button uses an outline style which is weak on white backgrounds.
- **Urgency Mechanism:** No countdown timer or explicit urgency banner to highlight the May 21 launch date.

#### Subject Line and Preheader
- **Subject Burying Collab Story:** The subject line does not convey the significance of Lotto's heritage, leading subscribers to miss the context.
- **No Intentional Preheader:** The email lacks a preheader that could provide additional context or urgency.

### Recommendations

#### Visual Improvements
1. **Primary CTA Button:**
   - Change "VIEW THE COLLECTION" button to a solid fill (e.g., black or Lotto red).
   - Move the secondary "FIND A STORE" link below the primary CTA as text.
   
2. **Urgency Banner/Countdown Timer:**
   - Add an urgency banner immediately below the co-branded logo stating "Drops May 21."
   - Consider a countdown timer if feasible to increase engagement.

#### Subject Line and Preheader Enhancements
3. **Revised Subject Line:**
   - `Lotto × H&M drops May 21`
   - `50 years of soccer heritage, now at H&M`

4. **Preheader Text:**
   - "The collection redefines Italian sport style — in stores and online this Thursday."
   - "Loose-fit soccer jerseys, tracksuits, and more. Launching May 21."

### Technical Issues

#### Schema.org JSON-LD
- **Stale Data:** The `availabilityStarts` field is set to an outdated date (2018).
- **Empty Fields:** Several fields in the schema are empty or contain placeholder values.

#### Font Loading
- **@import Blocked by Outlook/Gmail:**
   - Move font declarations inline or accept system font fallback.
   - Define explicit `font-family` fallback stacks.

### Full Audit Recommendations

| Priority | Issue | Fix |
|---|---|---|
| High | Stale JSON-LD data (`availabilityStarts`) | Populate dynamically at send time with actual campaign dates. |
| Medium | Empty JSON-LD fields (e.g., `subjectLine`, `url`, `image`, `discountCode`) | Populate or omit the schema blocks entirely to avoid malformed structured data. |
| Low | Ghost/outline CTA buttons on white background | Change primary CTA button to solid fill color and move secondary CTA below as text link. |
| Low | Missing urgency mechanism (countdown timer) | Add an urgency banner immediately below co-branded logo stating "Drops May 21." |

### Conclusion
The email is well-executed but suffers from context fatigue due to repeated soccer-themed sends. Enhancing the visual hierarchy, adding a countdown timer, and revising the subject line will significantly improve open and click-through rates.

By addressing these technical and design issues, H&M can better capitalize on the Lotto × H&M launch momentum and drive engagement effectively.
