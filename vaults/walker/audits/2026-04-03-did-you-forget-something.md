---
slug: 2026-04-03-did-you-forget-something
type: email
date: 2026-04-03
persona: walker
score: "5/10"
sender: SKECHERS
subject: Did you forget something?
tags: [email, score-5, sender/skechers]
---
# Did you forget something?
**Score:** 5/10 · **Type:** Email audit · **2026-04-03**
## Executive summary

- A functional but unfocused cart abandonment email. The core abandoned-cart mechanic is present — product surfaced, CTA visible, urgency implied — but the email keeps stacking modules after the point of action, diluting the single goal of recovering the sale. The BOGO 50% banner is a meaningful conversion lever buried too low. The overall structure reads more like a weekly newsletter than a precision recovery email.
- Gets the basics right; leaves conversion on the table through structural bloat and buried incentives.

## What's working

- **Hero hook is sharp.** "WE NOTICED YOU NOTICING US... YOUR CART IS STILL WAITING..." is direct, slightly playful, and fits the cart abandonment context well.
- **Abandoned product is visible.** The specific product image and name appear above the fold alongside a clear "COMPLETE YOUR ORDER" CTA — the primary job is technically done.
- **BOGO 50% Off** is a real incentive and could meaningfully close the hesitant buyer.
- **App download + pay-later options** (Afterpay/Klarna) address two common barriers: access and price — smart inclusions for a footwear brand.

## What's weak

- **The BOGO offer is buried.** The single highest-value conversion incentive sits below the recommendations grid, after the CTA. A shopper who bailed on price should see this *before* being asked to complete the order, not after.
- **Over-moduled for the mission.** After the hero and product, the email adds: a 4-product recs grid, a best sellers CTA, a BOGO banner, a gender nav, a text-signup prompt, app download, curbside pickup, BNPL, find-a-store, and social follow. Cart abandonment emails work best as tight two-act structures (your product → push to buy). This is an eight-act play.
- **Product text is too small.** The abandoned product name and details render at a size that's essentially unreadable in the thumbnail view. The product should feel premium and identifiable, not a footnote.
- **"SHOP ALL BEST SELLERS" dilutes intent.** Placing a full category CTA immediately after the abandoned product actively redirects the user away from the recovery goal.
- **"LET'S GET TEXTING" module has no place here.** A cart recovery email is not the moment to start a separate acquisition flow. It fragments attention.

## Recommendations

- 1. **Move the BOGO banner directly under the hero / above the CTA.** Sequence: Hook → Abandoned product → Incentive → CTA. Don't make the buyer scroll to find the reason to say yes.
- 2. **Cut to three modules max:** Hero + cart product, BOGO incentive, and a lean "You might also like" (2–3 items, not 4+). Eliminate text signup, app, curbside, BNPL from this specific touchpoint — those belong in onboarding or newsletter flows.
- 3. **Increase the abandoned product rendering size.** The product image and name should be at least 2× larger and legible at a glance — this is the item they considered buying.
- 4. **Remove "SHOP ALL BEST SELLERS" CTA.** It's a direct competitor to "COMPLETE YOUR ORDER."
- 5. **Add a scarcity or urgency signal** near the product — stock level, cart expiry, or even a simple "Still yours for now" label — to motivate action without additional modules.
- | Priority | Action |
- |---|---|
- | High | Confirm cart product merge tokens exist in full source; if absent, escalate to ESP implementation team |
- | Medium | Upgrade all click-tracker and image asset URLs to HTTPS (`https://skechers.attentivemail.com/…`, `https://image.emails.skechers.com/…`) |
- | Medium | Add `alt="Skechers"` to logo `<img>` |
- | Medium | Verify footer contains CAN-SPAM physical address and functional unsubscribe in full HTML |
- | Medium | Decode and audit at least 3 destination URLs for UTM parameter completeness |
- | Low | Populate `<title>` with a descriptive string |
- | Low | Inspect live send headers for DKIM/DMARC alignment on `msgs.skechers.com` |

## Full review
## Skechers — "Did you forget something?" Cart Abandonment Review

---

### 1. Executive Summary

A functional but unfocused cart abandonment email. The core abandoned-cart mechanic is present — product surfaced, CTA visible, urgency implied — but the email keeps stacking modules after the point of action, diluting the single goal of recovering the sale. The BOGO 50% banner is a meaningful conversion lever buried too low. The overall structure reads more like a weekly newsletter than a precision recovery email.

---

### 2. Business Impact Score: **5 / 10**

Gets the basics right; leaves conversion on the table through structural bloat and buried incentives.

---

### 3. What's Working

- **Hero hook is sharp.** "WE NOTICED YOU NOTICING US... YOUR CART IS STILL WAITING..." is direct, slightly playful, and fits the cart abandonment context well.
- **Abandoned product is visible.** The specific product image and name appear above the fold alongside a clear "COMPLETE YOUR ORDER" CTA — the primary job is technically done.
- **BOGO 50% Off** is a real incentive and could meaningfully close the hesitant buyer.
- **App download + pay-later options** (Afterpay/Klarna) address two common barriers: access and price — smart inclusions for a footwear brand.

---

### 4. What's Weak

- **The BOGO offer is buried.** The single highest-value conversion incentive sits below the recommendations grid, after the CTA. A shopper who bailed on price should see this *before* being asked to complete the order, not after.
- **Over-moduled for the mission.** After the hero and product, the email adds: a 4-product recs grid, a best sellers CTA, a BOGO banner, a gender nav, a text-signup prompt, app download, curbside pickup, BNPL, find-a-store, and social follow. Cart abandonment emails work best as tight two-act structures (your product → push to buy). This is an eight-act play.
- **Product text is too small.** The abandoned product name and details render at a size that's essentially unreadable in the thumbnail view. The product should feel premium and identifiable, not a footnote.
- **"SHOP ALL BEST SELLERS" dilutes intent.** Placing a full category CTA immediately after the abandoned product actively redirects the user away from the recovery goal.
- **"LET'S GET TEXTING" module has no place here.** A cart recovery email is not the moment to start a separate acquisition flow. It fragments attention.

---

### 5. Recommendations

1. **Move the BOGO banner directly under the hero / above the CTA.** Sequence: Hook → Abandoned product → Incentive → CTA. Don't make the buyer scroll to find the reason to say yes.
2. **Cut to three modules max:** Hero + cart product, BOGO incentive, and a lean "You might also like" (2–3 items, not 4+). Eliminate text signup, app, curbside, BNPL from this specific touchpoint — those belong in onboarding or newsletter flows.
3. **Increase the abandoned product rendering size.** The product image and name should be at least 2× larger and legible at a glance — this is the item they considered buying.
4. **Remove "SHOP ALL BEST SELLERS" CTA.** It's a direct competitor to "COMPLETE YOUR ORDER."
5. **Add a scarcity or urgency signal** near the product — stock level, cart expiry, or even a simple "Still yours for now" label — to motivate action without additional modules.

---

### 6. Bottom Line

Skechers has the ingredients for a strong recovery email but hasn't enforced hierarchy. The result is a cart abandonment email that looks like a homepage. Tighten to: hook, product, incentive, CTA — and this scores an 8+. As built, it diffuses the shopper's intent across too many competing paths.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Cart abandonment / order recovery |
| **Hero / primary value prop** | "We noticed you noticing us... your cart is still waiting" — effective, conversational tone |
| **Abandoned product** | Visible with image and name; CTA "COMPLETE YOUR ORDER" in teal is prominent but product detail is hard to read |
| **Membership / benefits** | None visible |
| **Recommendation module** | 4-product "We think you'll love" grid + "SHOP ALL BEST SELLERS" bar — competitive with primary CTA |
| **Promotional module** | BOGO 50% Off banner — correctly incentivizing but positioned too low |
| **Utility / secondary modules** | Text signup, app download, curbside pickup, BNPL (Afterpay/Klarna), find-a-store, gender nav links, social follow |
| **Visual bugs** | None observed — images render, text displays cleanly, no broken elements visible |

---

## Technical Audit

## Technical Audit: Skechers "Did you forget something?" — Abandoned Cart Email

**From:** hello@msgs.skechers.com | **ESP:** Attentive (`skechers.attentivemail.com`)

---

### 1. Technical Summary

Standard Attentive-built abandoned cart trigger using table-based layout with a single responsive breakpoint at 620px. Two confirmed infrastructure issues: HTTP-only click/image URLs and a missing `alt` attribute on at least one image. Compliance and personalization sections are partially assessable due to HTML truncation.

---

### 2. Link & Tracking Issues

**HTTP click-tracker URLs — Medium**
All CTA and logo links route through `http://skechers.attentivemail.com/ls/click?upn=…` using plain HTTP. Example from the web version link:
```
http://skechers.attentivemail.com/ls/click?upn=u001.LNc6VorXOZu5...
```
Attentive will 301-redirect to HTTPS at the destination, but the initial hop is unencrypted. Any network-level observer or open Wi-Fi user can see the tracking click URL in plaintext before the redirect. The click-tracker domain itself should serve over HTTPS.

**HTTP image host — Medium**
The logo `<img>` src begins with `http://image.emails.skechers.…` (truncated). If served over HTTP, Gmail and other clients that enforce mixed-content policies may block the image or show a security warning in some environments. Asset CDN should be HTTPS.

**UTM parameter visibility — Unverifiable**
Destination URLs are fully opaque behind the Attentive redirect wrapper. UTM continuity cannot be confirmed from this source alone; see Section 6.

---

### 3. Rendering & Accessibility

**Empty `<title>` tag — Low**
```html
<title></title>
```
Screen readers that surface the document title in some webmail clients will read nothing. Should contain a descriptive string (e.g., the email subject).

**Missing `alt` on logo image — Medium**
The logo `<img>` tag is truncated immediately after the `src` attribute with no visible `alt`. If omitted, screen readers skip the image entirely and images-off rendering shows a blank. An `alt="Skechers"` (or empty `alt=""` if purely decorative) is required.

**Responsive implementation — No issues found**
A single `@media (max-width:620px)` breakpoint with `display:block` stacking, explicit mobile padding overrides, and font-size escalations on `.row-21` and `.row-23` paragraphs are all present and structurally valid.

**MSO table reset — No issues found**
`mso-table-lspace:0;mso-table-rspace:0` is applied consistently. Outlook rendering gaps should not occur.

**Preheader padding technique — No issues found**
Uses a mix of `U+034F` (combining grapheme joiner) and `U+00AD` (soft hyphen) invisible characters to push preheader text to 200+ chars and suppress subject-line bleed-through in Gmail. This is standard and intentional.

---

### 4. Personalization & Merge Tokens

**No cart product tokens visible — High**
For an abandoned cart trigger, no product name, image, price, or "items left in cart" merge tokens appear in the truncated HTML. If the full source also lacks them, this is a significant implementation gap — the email asserts abandonment without surfacing what was abandoned. Expected tokens: `{{product_name}}`, `{{product_image}}`, `{{product_price}}`, or Attentive equivalent.

**No recipient name token visible — Low**
No `{{first_name}}` or equivalent in the visible portion. Not blocking for an abandoned cart email, but a missed personalization opportunity.

*(Both findings are flagged as unverifiable due to truncation — must confirm against full source.)*

---

### 5. Compliance (CAN-SPAM / Unsubscribe / Authentication)

**Footer not assessable — HTML truncated**
The unsubscribe link, physical mailing address (required by CAN-SPAM), and any CCPA/privacy disclosure cannot be confirmed from the provided source. Must verify in full HTML that:
- A one-click (or clearly labeled) unsubscribe link is present
- A valid US postal address is included in plain text
- Any state-specific opt-out language required for CA recipients is present

**Sending domain — No issues found**
`hello@msgs.skechers.com` is a dedicated sending subdomain (`msgs.skechers.com`), appropriate for transactional/triggered isolation from the root domain's reputation.

**Authentication headers — Not assessable from HTML source**
DKIM, SPF, and DMARC must be verified via email headers (not HTML). Attentive-managed sends typically handle SPF/DKIM alignment, but should be confirmed via MX Toolbox or header inspection on a live send.

---

### 6. Email-to-Site Continuity

**UTM parameters unverifiable — Unverifiable**
All destination URLs are wrapped in Attentive's click-tracker (`/ls/click?upn=…`). The decoded destinations need to be confirmed for:
- `utm_source=email`
- `utm_medium=abandoned_cart` (or equivalent)
- `utm_campaign` value consistent with the send

Without decoding the `upn` parameter, it is unknown whether landing pages receive UTM attribution. Attentive's platform should be configured to append UTMs at the link-management level.

**Web version link — No issues found**
A "web version" link is present in the header, routed through the same Attentive click tracker, which is standard.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| High | Confirm cart product merge tokens exist in full source; if absent, escalate to ESP implementation team |
| Medium | Upgrade all click-tracker and image asset URLs to HTTPS (`https://skechers.attentivemail.com/…`, `https://image.emails.skechers.com/…`) |
| Medium | Add `alt="Skechers"` to logo `<img>` |
| Medium | Verify footer contains CAN-SPAM physical address and functional unsubscribe in full HTML |
| Medium | Decode and audit at least 3 destination URLs for UTM parameter completeness |
| Low | Populate `<title>` with a descriptive string |
| Low | Inspect live send headers for DKIM/DMARC alignment on `msgs.skechers.com` |
## Recent history

- [[2026-04-11-test-pro-us-na-u-bundle-full-en-04042026this-is-a-get-two-kind-of-sale]] — 5/10 (2026-04-02)
- [[2026-04-11-test-pro-us-retpurl24-u-bundle-retail-en-04042026your-chance-to-stock-up-is-comi]] — 5/10 (2026-04-02)
- [[2026-04-02-test-pro-us-ecmpurl24-u-bundle-ecom-en-04042026this-is-a-get-two-kind-of-sale]] — 6/10 (2026-04-02)

