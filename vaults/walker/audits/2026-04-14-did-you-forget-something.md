---
slug: 2026-04-14-did-you-forget-something
type: email
date: 2026-04-14
persona: walker
score: "5/10"
sender: SKECHERS
subject: Did you forget something?
tags: [email, score-5, sender/skechers]
---
# Did you forget something?
**Score:** 5/10 · **Type:** Email audit · **2026-04-14**
## What's working

- **Hero is unambiguous.** "Ready to Check Out? Complete Your Order" is immediately legible and on-message. The gold/yellow framing creates enough visual contrast to separate it from the white background.
- **Cart item is visible.** The abandoned product (Skechers Slip-ins, Max Cushioning Glide-Step) is shown with an image and name, which is the core job of an abandoned cart email.
- **Primary CTA is repeated.** "Complete Your Order" appears both in the hero banner and again below the product image, reducing friction for intent-to-purchase visitors.
- **Best sellers module.** Four shoes displayed in a row give visitors an off-ramp if the cart item no longer appeals — smart recovery logic.

## What's weak

- **No urgency or scarcity.** Nothing in the email creates a reason to act now. No "in stock" indicator, no time-limited discount, no "selling fast" signal. Abandoned-cart emails live and die by urgency.
- **No personalization.** The product is shown but there's no "Hi [Name]" or any acknowledgment that this is tailored to the recipient. The email feels templated.
- **Lower half is noise.** After the best sellers row, the email piles on: six category nav links, a divider, an "Offers" text row, app download badges, curbside pickup, "Shop Now Pay Later," store finder, social icons, and a lengthy legal block. This is homepage structure dropped into a conversion email. It diffuses focus.
- **20% Off banner.** The banner appears but it's unclear from the render if this discount is tied to the cart recovery or is a general promotion. If it's not tied to completing the order, it's a missed personalization moment. If it is, the connection isn't communicated.
- **Category nav module adds no value here.** Women / Men / Kids / Clothing / New Arrivals / Sale links belong on a homepage, not an abandoned-cart email targeting someone who already had a specific product in hand.

## Recommendations

- 1. **Add urgency to the hero.** "Your cart expires soon" or "Only X left in your size" would increase open-to-click conversion meaningfully.
- 2. **Tie the 20% off explicitly to the cart item.** "20% off when you complete your order today" is a far stronger hook than a generic discount banner.
- 3. **Cut everything below the best sellers row.** App download, store finder, category nav, and social links belong in a newsletter — not a recovery email. End with a clean CTA and legal text.
- 4. **Add a first name.** Even "[First Name], you left something behind" in the subject or preheader dramatically increases open rates on this email type.
- 5. **Improve the subject line.** "Did you forget something?" is the most overused abandoned-cart subject in retail email. Test a more specific or benefit-led alternative (see Section 7).
- | Priority | Issue | Action |
- |----------|-------|--------|
- | High | HTTP tracking links | Change all `http://skechers.attentivemail.com` to `https://` |
- | High | UTM parameters | Confirm Attentive appends UTMs at redirect; if not, embed in source links |
- | High | Cart session token in CTA | Verify cart ID is passed through the redirect chain to the landing URL |
- | Medium | Malformed `<meta>` charset | Add `http-equiv="Content-Type"` attribute |
- | Medium | Missing image `alt` text | Add descriptive `alt` on product images; `alt=""` on decorative images |
- | Medium | Global link style override | Scope `color:inherit;text-decoration:none` only to `.image_block a`, not all `#MessageViewBody a` |
- | Medium | Merge token presence | Confirm cart item tokens render in lower body; if absent, add dynamic product block |
- | Low | Empty `<title>` | Add descriptive title for web version accessibility |
- | Low | Mixed preheader filler characters | Standardize to single invisible character type (`&zwnj;`) |
- | Low | Footer compliance | Manually verify CAN-SPAM address and unsubscribe link in full HTML |

## Full review
## 2. Business Impact Score

**5 / 10**

Gets the basics right but leaves significant conversion lift on the table through weak urgency, a cluttered lower half, and no personalization beyond showing the cart item.

---

## 3. What's Working

- **Hero is unambiguous.** "Ready to Check Out? Complete Your Order" is immediately legible and on-message. The gold/yellow framing creates enough visual contrast to separate it from the white background.
- **Cart item is visible.** The abandoned product (Skechers Slip-ins, Max Cushioning Glide-Step) is shown with an image and name, which is the core job of an abandoned cart email.
- **Primary CTA is repeated.** "Complete Your Order" appears both in the hero banner and again below the product image, reducing friction for intent-to-purchase visitors.
- **Best sellers module.** Four shoes displayed in a row give visitors an off-ramp if the cart item no longer appeals — smart recovery logic.

---

## 4. What's Weak

- **No urgency or scarcity.** Nothing in the email creates a reason to act now. No "in stock" indicator, no time-limited discount, no "selling fast" signal. Abandoned-cart emails live and die by urgency.
- **No personalization.** The product is shown but there's no "Hi [Name]" or any acknowledgment that this is tailored to the recipient. The email feels templated.
- **Lower half is noise.** After the best sellers row, the email piles on: six category nav links, a divider, an "Offers" text row, app download badges, curbside pickup, "Shop Now Pay Later," store finder, social icons, and a lengthy legal block. This is homepage structure dropped into a conversion email. It diffuses focus.
- **20% Off banner.** The banner appears but it's unclear from the render if this discount is tied to the cart recovery or is a general promotion. If it's not tied to completing the order, it's a missed personalization moment. If it is, the connection isn't communicated.
- **Category nav module adds no value here.** Women / Men / Kids / Clothing / New Arrivals / Sale links belong on a homepage, not an abandoned-cart email targeting someone who already had a specific product in hand.

---

## 5. Recommendations

1. **Add urgency to the hero.** "Your cart expires soon" or "Only X left in your size" would increase open-to-click conversion meaningfully.
2. **Tie the 20% off explicitly to the cart item.** "20% off when you complete your order today" is a far stronger hook than a generic discount banner.
3. **Cut everything below the best sellers row.** App download, store finder, category nav, and social links belong in a newsletter — not a recovery email. End with a clean CTA and legal text.
4. **Add a first name.** Even "[First Name], you left something behind" in the subject or preheader dramatically increases open rates on this email type.
5. **Improve the subject line.** "Did you forget something?" is the most overused abandoned-cart subject in retail email. Test a more specific or benefit-led alternative (see Section 7).

---

## 6. Bottom Line

Skechers has a functioning abandoned-cart flow but it's running at maybe 60% of its potential. The hero and cart item module are solid; everything below the fold dilutes what should be a tight, one-job email. The biggest missed opportunity is the complete absence of urgency and personalization — the two highest-leverage levers in cart recovery. A few focused cuts and a subject line rewrite would meaningfully lift performance.

---

## 7. Subject Line Analysis

- **Subject:** `Did you forget something?`
- **Length:** 23 characters
- **Scores (1-10):** Clarity `6`, Curiosity `5`, Personalization `3`, Urgency `4`, Specificity `2`
- **Strengths:**
  - Short and mobile-friendly; loads instantly
  - Conversational tone avoids the spam-trigger feel of aggressive discount lines
- **Weaknesses:**
  - Most overused abandoned-cart subject line in retail email — recipients are conditioned to ignore it
  - Zero specificity: no brand signal, no product, no urgency, no name
- **Alt A:** `Your Skechers are waiting — complete your order`
- **Alt B:** `[First Name], you left your shoes behind (still in stock)`

---

## 8. Evidence

- **Overall purpose:** Abandoned cart recovery — the recipient left a product in their cart without purchasing.
- **Hero / primary value proposition:** "Ready to Check Out? Complete Your Order" — clear headline in a gold/tan bordered frame with a contained CTA button. Functional but not differentiated.
- **Cart product module:** Skechers Slip-ins Max Cushioning Glide-Step shown with product image, name, and a repeat CTA button. No price, no size/color confirmation, no stock indicator.
- **Discount banner:** "20% OFF" with a "SHOP NOW" button. Relationship to the cart item is ambiguous from the render.
- **Best sellers module:** "Shop All Best Sellers" text header above a 4-product grid of shoes with names and prices. Reasonable secondary path.
- **Category nav block:** Six text links (Women, Men, Kids, Clothing, New Arrivals, Sale) — standard nav chrome that adds length without adding conversion value in this context.
- **Utility modules:** App download (iOS/Android), curbside pickup, Shop Now Pay Later, Find a Store — all present and functional-looking, all dilutive in this context.
- **Social/follow block:** Facebook, Twitter, Instagram, YouTube — standard footer row.
- **Legal block:** Dense fine-print text block at bottom of the email, normal for retail.
- **Bugs / friction:** None visible. Images render, text is legible, CTAs appear properly sized. No broken image placeholders or overlapping elements observed.

---

## Technical Audit

## Technical Audit — SKECHERS "Did you forget something?" Abandoned Cart Email

---

### 1. Technical Summary

The email is built on a standard Attentive ESP platform with table-based layout and a single responsive breakpoint. Several low-to-medium severity technical issues are present, primarily around click-tracking link protocol, a malformed charset meta tag, missing image alt attributes, and unconfirmed UTM attribution.

---

### 2. Link & Tracking Issues

**HTTP tracking links (medium severity)**
All click-tracking URLs use `http://` rather than `https://`:
```
href="http://skechers.attentivemail.com/ls/click?upn=u001.LNc..."
```
This exposes the unencrypted initial redirect hop to passive inspection. Some corporate security gateways flag or strip HTTP links. Should be `https://skechers.attentivemail.com/ls/click?...`.

**UTM parameters not present in source links**
No `utm_source`, `utm_medium`, `utm_campaign`, or `utm_content` parameters are embedded in the tracking URLs. Attentive may append them post-redirect, but this cannot be confirmed from the source. If they are not appended at redirect time, cart abandonment sessions will be attributed to `(direct)` in GA4/analytics.

---

### 3. Rendering & Accessibility

**Malformed charset meta tag**
```html
<meta content="text/html; charset=utf-8" />
```
Missing `http-equiv="Content-Type"`. Correct form:
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
```
Without `http-equiv`, the attribute is ignored by strict parsers; Outlook desktop renders via Word engine and may fall back to system encoding.

**Empty `<title>` element**
```html
<title></title>
```
Screen readers (NVDA, VoiceOver) announce the title when the email opens in a browser-based web view. An empty title is a WCAG 2.4.2 failure for the web version link.

**Global link style override removes visual affordance**
```css
#MessageViewBody a { color: inherit; text-decoration: none; }
```
This blanket rule strips underline and color from all links in Gmail's web client, making linked text indistinguishable from body text for low-vision users. It should be scoped only to decorative or image links.

**Image alt attributes not present in visible source**
The `image_block` elements in rows 2+ contain `<img>` tags with no `alt` attributes visible in the provided truncation. If absent on product images, this fails WCAG 1.1.1 (Non-text Content) and degrades experience when images are blocked (default in Outlook, many corporate clients).

**Preheader padding uses mixed invisible character sets**
The preheader uses both U+034F (Combining Grapheme Joiner, `͏`) and U+00AD (soft hyphen, `­`) as filler:
```
͏ ͏ ͏ ... ­ ­ ­ ...
```
Mixing two different zero-width/invisible characters can cause some spam filters to flag the message as obfuscated content. Standard practice is to use a single character type (typically `&zwnj;` or `&#8204;`).

---

### 4. Personalization & Merge Tokens

No merge tokens are visible in the provided HTML (no `{{first_name}}`, `{{cart_items}}`, `{{product_image_url}}`, or equivalent Attentive liquid/handlebar syntax). For an abandoned cart trigger, the absence of dynamic cart item rendering tokens in the source is notable — these may appear in the truncated lower body, but cannot be confirmed. If absent, the email sends a generic prompt with no cart contents shown, which significantly reduces conversion relevance.

---

### 5. Compliance

**Cannot fully verify from truncated source:**
- CAN-SPAM physical mailing address (required in footer — not present in visible HTML)
- Unsubscribe mechanism (required — not present in visible HTML)

These elements are expected in the footer rows not included in the truncation. Flag for manual footer verification before send.

**Sending domain:** `msgs.skechers.com` (subdomain of `skechers.com`). SPF/DKIM/DMARC alignment should be verified against Attentive's documented DNS configuration for this subdomain. Cannot confirm from HTML source alone.

---

### 6. Email-to-Site Continuity

**UTM attribution gap (see §2)**
If UTM parameters are not appended by Attentive at redirect resolution, abandoned cart sessions landing on `skechers.com` will be unattributed. Verify by clicking a tracking link in a test send and inspecting the final URL.

**No cart session restoration token visible**
Abandoned cart emails typically embed a session token or cart ID in the CTA URL to auto-restore the cart on landing. No such parameter is visible in the tracking URLs provided. If absent, customers must manually rebuild their cart, reducing recovery rate.

---

### 7. Recommendations

| Priority | Issue | Action |
|----------|-------|--------|
| High | HTTP tracking links | Change all `http://skechers.attentivemail.com` to `https://` |
| High | UTM parameters | Confirm Attentive appends UTMs at redirect; if not, embed in source links |
| High | Cart session token in CTA | Verify cart ID is passed through the redirect chain to the landing URL |
| Medium | Malformed `<meta>` charset | Add `http-equiv="Content-Type"` attribute |
| Medium | Missing image `alt` text | Add descriptive `alt` on product images; `alt=""` on decorative images |
| Medium | Global link style override | Scope `color:inherit;text-decoration:none` only to `.image_block a`, not all `#MessageViewBody a` |
| Medium | Merge token presence | Confirm cart item tokens render in lower body; if absent, add dynamic product block |
| Low | Empty `<title>` | Add descriptive title for web version accessibility |
| Low | Mixed preheader filler characters | Standardize to single invisible character type (`&zwnj;`) |
| Low | Footer compliance | Manually verify CAN-SPAM address and unsubscribe link in full HTML |
## Recent history

- [[2026-04-13-test-mkg-us-nonpurclick-u-glide-nonpurch-en-04142026-v2more-comfort-less-effort-]] — 5/10 (2026-04-13)
- [[2026-04-13-test-mkg-us-nonpurclick-u-glide-nonpurch-en-04142026more-comfort-and-a-little-ex]] — 4/10 (2026-04-13)
- [[2026-04-13-test-mkg-us-na-u-glide-gender-en-04142026family-comfort-unlocked-bogo-50-off]] — 4/10 (2026-04-13)

