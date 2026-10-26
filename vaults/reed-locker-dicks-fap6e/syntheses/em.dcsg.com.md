---
kind: synthesis
persona: reed-locker-dicks-fap6e
brand: em.dcsg.com
reactions: 116
through: 2026-10-25T20:07:07.000Z
created_at: 2026-10-26T18:19:21.217Z
updated_at: 2026-10-26T18:19:21.217Z
---

# It sounds like you're analyzing an email campaign from DICK'S Sporting Goods that's been running for several days with a

## 1. Overview

This email is the latest in a series of re-sent "UP TO 50% OFF" offers from DICK'S Sporting Goods. The hero creative is identical to previous sends, and the email includes multiple modules and product categories. The subject line and preview text signal a repeat send, which may reduce open and click-through rates.

## 2. Hero and Visuals

- **Hero:** The hero image is the same "UP TO 50% OFF" banner that has been used in previous emails. While it's clear and visually appealing, its repetition may lead to fatigue among recipients.
- **Visuals:** The email includes multiple product images and categories, but the visual hierarchy is cluttered, making it difficult for the recipient to focus on the primary offer.

## 3. Messaging and Tone

- **Subject Line:** "Have you shopped our EPIC End-of-Summer Sale yet?!" This subject line signals a repeat send, which is less effective than a fresh offer or deadline.
- **Hero Message:** "UP TO 50% OFF" is prominently displayed, but the lack of urgency and unique messaging weakens the impact.
- **Body:** The email body includes multiple modules and product categories, diluting the focus on the primary offer.
- **Clearance Banner:** A secondary banner promoting "HUNDREDS OF NEW CLEARANCE STYLES" competes with the hero's own message for attention, further diluting the primary offer.

## 4. What I'd Change

1. **Hero Creative:** Swap in a genuinely different visual or skip this send to this segment entirely. A new hero image or product focus would provide a fresh reason to open and click.
2. **Email Structure:** Simplify the email body to three or four modules, focusing on the primary offer and a few related categories. This will reduce clutter and improve focus.
3. **Urgency:** Add a real deadline near the hero, such as a specific end date or countdown timer, to create a sense of urgency.
4. **Clearance Banner:** Move the "HUNDREDS OF NEW CLEARANCE STYLES" banner to the top if it's meant to be a secondary hook, or remove it entirely to avoid competing with the hero message.

## 5. Business Impact Score (1-10)

**5/10**
- **Pros:**
  - One concrete offer is visible (up to 50% off).
  - Primary CTA is unambiguous (Shop Now button, clear placement).
  - Visual hierarchy is clear — hero lands first.
  - No render bugs.
  - Offer feels honest (no buried fine print visible in the render).
- **Cons:**
  - Repeated hero creative and subject line signal a repeat send.
  - Lack of urgency and unique messaging.
  - Cluttered visual hierarchy and body structure.

## 6. Open Likelihood (persona-grounded)

- **Score:** `4/10`
- **Signals counted:**
  - Sender display name is recognizable.
  - Subject is relevant to persona's focus area.
  - Subject is long (94 characters), which is a negative signal.
  - No ALL CAPS/exclamation stacking beyond one "?!".
- **Rationale:** Recognizable sender and on-topic subject carry it, but the subject's self-aware "have you shopped yet?!" framing signals a repeat send rather than fresh news, and cadence fatigue (fifth+ similar send since 8/16) works against opening.

## 7. Click-Through Likelihood (persona-grounded)

- **Score:** `5/10`
- **Signals counted:**
  - Hero offer is visible without scrolling.
  - CTA copy is specific enough ("Shop Now" tied to visible offer).
  - Offer reduces price.
  - One specific product/hero linked at top.
  - Brand voice is consistent and trusted.
  - No friction (no view-in-browser interstitial visible).
- **Rationale:** The hero and top CTA are easy to act on immediately, but the nine-module wall beneath it splits attention across too many categories, and the repeated creative gives no new reason to click over yesterday's identical email.

## 8. Subject

- **Subject:** `Have you shopped our EPIC End-of-Summer Sale yet?! Up to 50% off deals are one click away...`
- **Length:** 94
- **Scores (1-10):**
  - Clarity: `5`
  - Curiosity: `4`
  - Personalization: `3`
  - Urgency: `4`
  - Specificity: `5`

## 9. Preview

- **Preview:** (none / leaking junk)
- **Length:** 0
- **Scores (1-10):**
  - Complements subject: `1`
  - Specificity: `1`
  - Clarity: `1`
  - Inbox-fit: `1`

---

## Technical Audit

1. **Technical Summary**
   - Standard DSG ESP-generated marketing email with heavy MSO/Outlook conditionals and mobile media queries.
   - Automated QA flags a broken plain-text fallback, missing unsubscribe/authentication headers, and 12 images with no alt text.

2. **Link & Tracking Issues**
   - All probed links route through the em.dcsg.com click-tracking redirector.
   - Open-tracking pixel present and functioning as expected.
   - QA note: 12 of 63 total links
