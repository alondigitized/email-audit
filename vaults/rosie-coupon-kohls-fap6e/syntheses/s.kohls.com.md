---
kind: synthesis
persona: rosie-coupon-kohls-fap6e
brand: s.kohls.com
reactions: 244
through: 2026-10-28T06:56:43.000Z
created_at: 2026-05-19T18:20:00.229Z
updated_at: 2026-10-28T18:18:45.397Z
---

# ### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `6/10`
- **Signals counted:** hero offer visible without scrolling, CTA in the right category (Mother's Day home gifts), offer reduces price (15% off + $10 off), offer is time-bounded (tomorrow), brand voice consistent and trusted
- **Rationale:** The discount is real and the timing creates genuine motivation to act. What prevents a higher score:
  - **CTA Copy is Generic:** "Shop Now" does not connect the action to the Mother's Day context.
  - **No Shipping Guarantee:** The email does not address the critical concern of last-minute shipping.
  - **Dual Coupon Structure:** The presence of two coupons introduces confusion and decision paralysis.

---

### 11. Technical Review

- **High** | 1 SPF record mismatch, 1 DMARC failure | Ensure `YourResults` passes on `s.kohls.com`; check DMARC alignment |
- **Medium** | 11 images missing `alt` attributes | Set `alt=""` on all tracking pixels; add descriptive alt on content images |
- **Medium** | `</custom>` stray tag | Remove from ESP template; invalid HTML |
- **Low** | `<title>` empty | Set to "Kohl's — [campaign name]" for client compatibility |
- **Low** | Google Fonts triple-loaded | Remove `@import` duplication; keep `<link>` only (or neither, since most email clients block it) |
- **Low** | `user-scalable=0` in viewport | Remove or set `user-scalable=yes` for WCAG 1.4.4 compliance |

---

### 12. Summary and Next Steps

#### Summary

The email is well-timed and offers substantial discounts, but it lacks clarity and focus. The dual coupon structure and the shift from gifting to general home discovery mid-email dilute the urgency and create unnecessary decision fatigue. The missing shipping guarantee and generic CTA copy further detract from the conversion potential.

#### Recommendations

1. **Simplify the Offer Structure:**
   - Collapse to one coupon (preferably the 15% off).
   - Remove the dual coupon confusion.

2. **Add a Shipping Guarantee:**
   - Include a "ships by Mother's Day" guarantee to address last-minute concerns.

3. **Enhance CTA Relevance:**
   - Replace "Shop Now" with more relevant and gift-focused CTA copy.

4. **Surface Social Proof:**
   - Add a "Most gifted this week" badge or star rating to increase click confidence.

5. **Tighten the Category Grid:**
   - Rename the section header to something gift-anchored or consider removing it.

#### Next Steps

1. **Implement the Simplified Offer Structure:**
   - Remove the $10 off coupon and focus on the 15% off offer.

2. **Add a Shipping Guarantee:**
   - Include a clear "ships by Mother's Day" guarantee in the hero or near the CTAs.

3. **Enhance CTA Copy:**
   - Replace "Shop Now" with more relevant and gift-focused CTA copy.

4. **Surface Social Proof:**
   - Add a "Most gifted this week" badge or star rating on the hero product.

5. **Tighten the Category Grid:**
   - Rename the section header to something gift-anchored or consider removing it.

By addressing these issues, the email will be more focused, clear, and compelling, leading to higher conversion rates.

---

**Final Score: 7/10**

The email does the basics well but can be significantly improved with the recommended changes.
