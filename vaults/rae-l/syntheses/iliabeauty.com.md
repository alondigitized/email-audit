---
kind: synthesis
persona: rae-l
brand: iliabeauty.com
reactions: 26
through: 2026-06-06T19:01:16.000Z
created_at: 2026-06-07T18:20:59.395Z
updated_at: 2026-06-07T18:20:59.395Z
---

# ## 4. What I'd change

1. **Lead the body with the offer, not the tagline.**
   - The hero should say "20% off everything — makeup, skincare, SPF" and put the promo code or CTA immediately below it.
   - Move brand positioning to secondary real estate.

2. **Add a hard deadline, prominently.**
   - Include "Ends midnight Sunday" or "Ends tonight" in the hero or immediately below it. This is critical for driving urgency and encouraging immediate action.

3. **Make "SHOP NOW" specific per section.**
   - Use more targeted CTAs like "Shop Lip Tints," "Shop SPF," and "Shop Skincare 20% Off." These segmented entry points can help drive conversions by providing clear next steps.

4. **Move "Cart Deco" up.**
   - If this is targeting near-converters, it should come before the subscriber loses interest scrolling.
   
5. **Consider sending to an engaged-only segment.**
   - At send nine, a suppressed fatigue segment would protect deliverability without sacrificing revenue.

### Subject Line Alternatives

- **Subject Alt A:** `Friends + Family ends tonight — 20% off`
- **Subject Alt B:** `Last call: 20% off makeup, skincare + SPF`

### Preheader Text Alternatives

- **Preheader Alt A:** `Your discount expires soon. Shop makeup, skincare, and SPF before it's gone.`
- **Preheader Alt B:** `Made for all skin types — shop your favorites at 20% off today!`

---

## Technical Audit Summary (Revised)

### 1. Technical Summary

Email is generated via Klaviyo/MJML with standard MSO/VML Outlook shims in place. The truncated source reveals several rendering and compliance items worth flagging; the body/footer is cut off, and assumptions can't be confirmed without full HTML.

---

### 2. Link & Tracking Issues

**`@import` for external fonts will be stripped by major clients:**
```css
@import url(https://static-forms.klaviyo.com/fonts/api/v1/SguDsz/custom_fonts.css);
@import url(https://fonts.googleapis.com/css?family=Montserrat&display=swap);
```
- **Action:** Replace `@import` with `<link>` tags in `<head>`, or accept system fallback fonts.

**Body links not auditable:**
- HTML is truncated before product/CTA links appear. UTM coverage and redirect chain health cannot be confirmed from this source alone.
- **Action:** Re-run audit against full source to ensure link tracking integrity.

---

### 3. Rendering & Accessibility

**Empty `<title>` tag:**
```html
<title> </title>
```
- **Action:** Set `<title>` to the email subject or a descriptive string for accessibility.

**All link states suppress hover affordance:**
```css
a:hover { color:#5f4b3c; text-decoration: none }
```
- **Action:** Consider adding `text-decoration: underline` on `a:hover` for web clients.

**Malformed conditional comment syntax:**
```html
<!--[if !mso]><!--><meta content="IE=edge" ...><!--<![endif]-->
```
- **Action:** Correct to `<![endif]-->`.

---

### 4. Personalization & Merge Tokens

No merge tokens or personalization variables are visible in the header section. Body is truncated — first-name tokens, conditional blocks, or dynamic product recommendations cannot be audited.
- **Action:** Re-run audit against full source.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Cannot confirm from truncated source:**
- Physical mailing address
- Unsubscribe link presence and one-click honor window
- `List-Unsubscribe` header value

**What is visible:** Preheader text reads "Save 20% sitewide" — no deceptive subject/preheader mismatch detectable.

**Authentication headers not present in provided data.**
- **Action:** Verify DKIM, SPF, and DMARC via seed-send tool (e.g., Mail-Tester or GlockApps).

---

### 6. Email-to-Site Continuity (UTM Params, Landing Page Alignment)

**Cannot confirm:**
- All `<a href>` tags are in the truncated body.
- UTM parameter coverage, click-tracking redirect chains, and landing page offer alignment require full HTML.

**Action:** Re-run audit against full source to ensure continuity between email and site.

---

### 7. Recommendations

| Priority | Item | Action |
|---|---|---|
| High | Font `@import` blocking | Replace `@import` with `<link>` tags in `<head>`, or accept system fallback fonts.
| Medium | Empty `<title>` | Set to subject line or descriptive label for accessibility.
| Medium | Full-source re-audit | Body/footer truncation leaves links, UTMs, CAN-SPAM footer, and merge tokens unverified.
| Low | Hover affordance | Consider adding `text-decoration: underline` on `a:hover` for web clients.
| Low | MSO comment syntax | Correct malformed conditional comments if generated manually; MJML users should update template.
