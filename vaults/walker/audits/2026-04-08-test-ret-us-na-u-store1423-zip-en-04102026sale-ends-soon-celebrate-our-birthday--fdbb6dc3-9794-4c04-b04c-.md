---
slug: 2026-04-08-test-ret-us-na-u-store1423-zip-en-04102026sale-ends-soon-celebrate-our-birthday--fdbb6dc3-9794-4c04-b04c-
type: email
date: 2026-04-08
persona: walker
score: "6/10"
sender: SKECHERS STORES
subject: "[Test]: RET_US_NA_U_STORE1423_ZIP_EN_04102026SALE Ends Soon! Celebrate our Birthday in Ridgewood"
tags: [email, score-6, sender/skechers-stores]
---
# [Test]: RET_US_NA_U_STORE1423_ZIP_EN_04102026SALE Ends Soon! Celebrate our Birthday in Ridgewood
**Score:** 6/10 · **Type:** Email audit · **2026-04-08**
## Executive summary

- A clean, locally-targeted birthday sale email driving in-store traffic to the Skechers Ridgewood location. The core offer is clear and the local store details are prominent. However, the email is visually thin — the product imagery is minimal and the additional styles navigation adds little without actual product images. The sense of urgency is present but the creative doesn't fully deliver on the "birthday celebration" emotional promise.
- Functional but not inspiring. Gets the job done for foot traffic; leaves conversion on the table by not showing product.

## What's working

- **Offer clarity is strong.** "Buy 2 Pairs, Get the 3rd Free" is bold, readable, and impossible to miss.
- **Local personalization lands.** Store name ("Skechers Ridgewood"), full address, and phone number are all visible. The Get Directions CTA is well-placed directly below.
- **Date urgency is specific.** "4/3 – 4/12" with "Limited Time Only" creates a real deadline.
- **Confetti/celebratory visual framing** reinforces the birthday theme without being garish.
- **Footer utility** (Download the App, Curbside Pickup, Shop Now Pay Later, Find a Store) is compact and well-organized.

## What's weak

- **Hero image undersells the offer.** The lifestyle photo of a woman holding sneakers is pleasant but generic — it doesn't show the breadth of styles on sale or anything distinctly "birthday."
- **"Shop Additional Styles" section is empty.** The WOMEN / MEN / KIDS / WIDE navigation appears as plain text links with no product thumbnails, images, or any visual hook. This module contributes nothing and creates visual dead space.
- **No product is shown at sale price.** A buy-2-get-1 offer works better when the recipient can see what they'd actually be buying. There's no product grid, no featured item, no "starting at $X."
- **Birthday theming is skin-deep.** Outside the headline and confetti dots, there's no emotional warmth or brand storytelling that makes this feel like a celebration rather than a generic sale.
- **Subject line is polluted with test metadata.** "[Test]: RET_US_NA_U_STORE1423_ZIP_EN_04102026..." would be a deliverability/professionalism issue if sent to real customers — but this appears to be a test send.

## Recommendations

- 1. **Add a product grid under the hero.** Show 3–4 bestselling or sale-eligible styles with imagery. Even a 2-column grid dramatically increases intent.
- 2. **Give "Shop Additional Styles" visual weight.** Replace text-only category links with category tiles or small imagery.
- 3. **Introduce a price anchor.** "Styles from $45 — Buy 2, Get 3rd Free" reduces friction and sets expectations before the customer visits the store.
- 4. **Lean harder into birthday storytelling.** A brief one-liner ("We're celebrating XX years — and we want you to party with us") adds warmth without length.
- 5. **Strip the test prefix before any live send.** Subject line test metadata must be removed.
- | Priority | Item |
- |---|---|
- | **Critical** | Strip `[Test]:` from subject line before production deploy |
- | **Critical** | Migrate all `http://image.emails.skechers.com` asset URLs to `https://` |
- | **High** | Fix the Return Path seed pixel — add `https://` protocol to the `src` attribute |
- | **High** | Verify SPF/DKIM/DMARC alignment for `emails.skechers.com` before send |
- | **Medium** | Add descriptive `alt` text to hero images (`dde00662`, `49468f73`) |
- | **Medium** | Spot-check 3–5 live click-redirect URLs for UTM parameter propagation |
- | **Low** | Review use of `-webkit-text-size-adjust: none` on `*` selector; scope to layout containers only to preserve accessibility scaling |
- | **Low** | Confirm Krux `partner_uid` subscriber ID data-share is reflected in current privacy policy and consent records |

## Full review
## Email Review: Skechers Birthday Sale — Ridgewood Store

---

### 1. Executive Summary

A clean, locally-targeted birthday sale email driving in-store traffic to the Skechers Ridgewood location. The core offer is clear and the local store details are prominent. However, the email is visually thin — the product imagery is minimal and the additional styles navigation adds little without actual product images. The sense of urgency is present but the creative doesn't fully deliver on the "birthday celebration" emotional promise.

---

### 2. Business Impact Score: 6/10

Functional but not inspiring. Gets the job done for foot traffic; leaves conversion on the table by not showing product.

---

### 3. What's Working

- **Offer clarity is strong.** "Buy 2 Pairs, Get the 3rd Free" is bold, readable, and impossible to miss.
- **Local personalization lands.** Store name ("Skechers Ridgewood"), full address, and phone number are all visible. The Get Directions CTA is well-placed directly below.
- **Date urgency is specific.** "4/3 – 4/12" with "Limited Time Only" creates a real deadline.
- **Confetti/celebratory visual framing** reinforces the birthday theme without being garish.
- **Footer utility** (Download the App, Curbside Pickup, Shop Now Pay Later, Find a Store) is compact and well-organized.

---

### 4. What's Weak

- **Hero image undersells the offer.** The lifestyle photo of a woman holding sneakers is pleasant but generic — it doesn't show the breadth of styles on sale or anything distinctly "birthday."
- **"Shop Additional Styles" section is empty.** The WOMEN / MEN / KIDS / WIDE navigation appears as plain text links with no product thumbnails, images, or any visual hook. This module contributes nothing and creates visual dead space.
- **No product is shown at sale price.** A buy-2-get-1 offer works better when the recipient can see what they'd actually be buying. There's no product grid, no featured item, no "starting at $X."
- **Birthday theming is skin-deep.** Outside the headline and confetti dots, there's no emotional warmth or brand storytelling that makes this feel like a celebration rather than a generic sale.
- **Subject line is polluted with test metadata.** "[Test]: RET_US_NA_U_STORE1423_ZIP_EN_04102026..." would be a deliverability/professionalism issue if sent to real customers — but this appears to be a test send.

---

### 5. Recommendations

1. **Add a product grid under the hero.** Show 3–4 bestselling or sale-eligible styles with imagery. Even a 2-column grid dramatically increases intent.
2. **Give "Shop Additional Styles" visual weight.** Replace text-only category links with category tiles or small imagery.
3. **Introduce a price anchor.** "Styles from $45 — Buy 2, Get 3rd Free" reduces friction and sets expectations before the customer visits the store.
4. **Lean harder into birthday storytelling.** A brief one-liner ("We're celebrating XX years — and we want you to party with us") adds warmth without length.
5. **Strip the test prefix before any live send.** Subject line test metadata must be removed.

---

### 6. Bottom Line

Solid local retail email with a competent offer and good store-level personalization. It gets a customer to the door but doesn't excite them on the way there. Adding product imagery and removing the hollow category-link module would meaningfully lift engagement.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Drive in-store traffic to Ridgewood location for a birthday buy-2-get-1-free sale, 4/3–4/12 |
| **Hero / primary value prop** | Lifestyle image with "Celebrate Our Birthday! / Skechers Ridgewood" + BOGO offer + dates. Clear but light on product |
| **Membership / benefits** | Not present |
| **Product discoverability** | None beyond category text links. No product images, no featured SKUs |
| **Utility / secondary modules** | Store address + phone + Get Directions CTA (strong); App download, Curbside Pickup, Pay Later, Find a Store (adequate) |
| **Bugs / friction / clarity issues** | "Shop Additional Styles" (WOMEN, MEN, KIDS, WIDE) renders as plain text-only links with no imagery — visually inert and borderline broken-looking |

---

## Technical Audit

## Technical Audit — Skechers Store Birthday Sale (STORE1423, 04/10/2026)

---

### 1. Technical Summary

A store-localized retail email deployed via Salesforce Marketing Cloud with third-party audience sync pixels (Krux/Salesforce DMP, ink1000, Return Path). Thirteen-plus asset URLs are served over HTTP rather than HTTPS, creating a systemic image-blocking risk across modern email clients; this is the highest-severity infrastructure issue in the send.

---

### 2. Link & Tracking Issues

**Subject line test prefix not stripped**
The subject line retains `[Test]:` — if this is a production deployment, the prefix was never removed before send.

**Unverified click links (28 total)**
All CTA links route through `click.emails.skechers.com` redirects. QA probes were skipped; no broken-link confirmation is possible. Destination URL integrity cannot be asserted from this review.

**Return Path seed pixel — missing protocol**
```
src="pixel.app.returnpath.net/pixel.gif?r=964ce..."
```
The `src` attribute has no scheme (`http://` or `https://`). This is a malformed URL; the pixel will not fire in any standards-compliant email client.

**Krux audience-sync pixels expose subscriber identifiers**
Two `beacon.krxd.net` calls pass:
- `partner_uid=c30973d6f4e31a55c5dcae7d3c3df0d73fcb04747ff44220a92abd05cee475c2` (SHA-256 hash, likely of the subscriber email)
- `partner_uid=75909571` (plaintext subscriber/list ID)

Both fire from inside a `display:none` wrapper, but the network request is still made. Confirm this data-share is covered by the subscriber consent model and privacy policy.

---

### 3. Rendering & Accessibility

**HTTP image sources — systemic (13 URLs affected)**

Gmail, Apple Mail, and Outlook proxy/block mixed-content images. All assets served from `http://image.emails.skechers.com` will be blocked or proxied with a security warning. Affected images include functional UI elements:

| Image | src (scheme) |
|---|---|
| Hero images (dde00662, 49468f73) | `http://` |
| App Store badge | `http://` |
| Google Play badge | `http://` |
| Curbside Pickup icon | `http://` |
| AfterPay logo | `http://` |
| Find A Store icon | `http://` |
| Instagram, Facebook, YouTube icons | `http://` |
| ink1000 tracking pixel | `http://` |

All `http://image.emails.skechers.com` references need an `https://` scheme.

**Missing alt text — 2 confirmed images**
- `dde00662-169f-447d-b0e2-fc65f6c2290c.png` — no `alt` attribute
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — no `alt` attribute

Both are served from `http://image.emails.skechers.com`. With images blocked, subscribers see blank space with no text fallback.

**`-webkit-text-size-adjust: none` applied globally**
```css
* { -webkit-text-size-adjust: none; ... }
```
This suppresses iOS's automatic text scaling. WCAG 1.4.4 (Resize Text) is affected for users with vision impairment who rely on system font scaling.

---

### 4. Personalization & Merge Tokens

No unfired merge tokens (e.g., `%%FIRSTNAME%%`, `{{variable}}`) are visible in the truncated source. The store ID (1423), ZIP targeting, and campaign date (04/10/2026) are correctly embedded in the tracking pixel `campaignid` parameter:
```
campaignid=RET_US_NA_U_STORE1423_ZIP_EN_04102026
```

The preheader text (`Buy 2 Pairs, Get the 3rd Free`) is static and does not contain tokens. No issues found beyond the test-subject-line flag above.

---

### 5. Compliance

**SPF/DKIM authentication — unverified**
The `Authentication-Results` header was not present in the relay sample. SPF/DKIM pass/fail status for `emails.skechers.com` cannot be confirmed. A failed or missing DKIM signature increases spam-folder placement risk and fails DMARC alignment checks.

**CAN-SPAM / unsubscribe** — cannot be fully verified from the truncated HTML. The physical mailing address and one-click unsubscribe mechanism must be present in the footer; this should be confirmed against the full render.

---

### 6. Email-to-Site Continuity

The campaign ID `RET_US_NA_U_STORE1423_ZIP_EN_04102026` is consistently applied across all three pixel systems (SFMC open pixel, Krux impression pixel, ink1000 pixel). UTM parameter coverage on the 28 click-redirect links cannot be verified because QA probes were skipped — this must be spot-checked manually against a live deployment link to confirm `utm_campaign`, `utm_source`, and `utm_medium` are populated before send.

---

### 7. Recommendations

| Priority | Item |
|---|---|
| **Critical** | Strip `[Test]:` from subject line before production deploy |
| **Critical** | Migrate all `http://image.emails.skechers.com` asset URLs to `https://` |
| **High** | Fix the Return Path seed pixel — add `https://` protocol to the `src` attribute |
| **High** | Verify SPF/DKIM/DMARC alignment for `emails.skechers.com` before send |
| **Medium** | Add descriptive `alt` text to hero images (`dde00662`, `49468f73`) |
| **Medium** | Spot-check 3–5 live click-redirect URLs for UTM parameter propagation |
| **Low** | Review use of `-webkit-text-size-adjust: none` on `*` selector; scope to layout containers only to preserve accessibility scaling |
| **Low** | Confirm Krux `partner_uid` subscriber ID data-share is reflected in current privacy policy and consent records |
## Recent history

- [[2026-04-08-test-ret-us-na-u-store1423-zip-en-04102026sale-ends-soon-celebrate-our-birthday-]] — 5/10 (2026-04-08)
- [[2026-04-11-test-pro-us-na-u-sitebundle-full-en-04092026step-into-the-right-shoes-for-right-]] — 5/10 (2026-04-08)
- [[2026-04-08-test-pro-us-ecmpurl24-u-sitebundle-ecom-en-04092026step-into-the-right-shoes-for]] — 5/10 (2026-04-08)

