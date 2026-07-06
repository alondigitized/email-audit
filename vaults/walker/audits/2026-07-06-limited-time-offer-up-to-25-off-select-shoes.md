---
slug: 2026-07-06-limited-time-offer-up-to-25-off-select-shoes
type: email
date: 2026-07-06
persona: walker
score: "6/10"
sender: New Balance Offers
subject: "Limited time offer: up to 25% off select shoes"
tags: [email, score-6, sender/new-balance-offers]
---
# Limited time offer: up to 25% off select shoes
**Score:** 6/10 · **Type:** Email audit · **2026-07-06**
## Full review
## Technical Audit

## Technical Audit — New Balance "Up to 25% off" Email

---

### 1. Technical Summary

The template is built on HTML 4.01 Transitional with an XHTML namespace — a common but inconsistent email foundation. Several CSS defects are confirmed in the `<head>` block; compliance and UTM coverage cannot be fully assessed from the truncated source.

---

### 2. Link & Tracking Issues

**HTTP background image URL:**
```css
.bgwhite { background-image: url('http://image.XXXXX.png'); }
```
The scheme is `http://`, not `https://`. Mixed-content policies in modern webmail (Gmail, Outlook.com) will block or flag insecure resource loads. Even if `XXXXX` is a redaction artifact, the bare `http://` scheme must be corrected to `https://` before send.

**Cannot verify:** Link-level UTM parameters and click-tracking redirects are not visible in the truncated source — see §6.

---

### 3. Rendering & Accessibility

**a. Duplicate `.bg1` class with conflicting values (CSS override bug):**
```css
/* Line ~10 */
.bg1 { background-color: #ffffff; }

/* Line ~130 */
.bg1 { background: #58546d; }
```
The second declaration silently wins everywhere `.bg1` is used. Any element expecting a white background will render dark purple instead. One definition must be removed or renamed.

**b. Malformed `@font-face` — duplicate `font-family` property:**
```css
@font-face {
  font-family: proxima-nova,sans-serif;
  font-weight: 700;
  font-style: italic;
  font-family: proxima-nova,sans-serif;  /* duplicate, ignored */
}
```
The second `font-family` declaration is discarded by parsers. Not a rendering failure, but signals a copy-paste error in the stylesheet.

**c. All `@font-face` rules lack `src:` declarations:**
Every `@font-face` block (proxima-nova, linotype-didot, etc.) declares only `font-family`/`font-weight`/`font-style` — no `src:` URL. These rules do nothing on their own; the fonts only render if an external Adobe Fonts/Typekit stylesheet is loaded. External stylesheets are stripped by Gmail, Outlook.com, and Apple Mail. Recipients without the system fonts installed will fall back to Arial/Times New Roman silently.

**d. Malformed `<meta>` IE compatibility tag:**
```html
<meta content="IE=edge" />
```
Missing the required `http-equiv="X-UA-Compatible"` attribute. Should be:
```html
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
```
Without `http-equiv`, the tag is inert in IE/Outlook rendering engine.

**e. Dark mode implementation is present and structurally correct** — `:root { color-scheme: light dark; }`, `<html style="color-scheme:light dark">`, and `@media (prefers-color-scheme: dark)` are all in place. Note the `color-scheme` is declared redundantly in both the `<html>` style attribute and CSS `:root`; harmless but can be consolidated.

**f. Image alt text:** Cannot confirm from truncated source — must be verified in full render.

---

### 4. Personalization & Merge Tokens

No unrendered merge tokens (e.g., `%%FIRST_NAME%%`, `{{first_name}}`, `[firstname]`) are visible in the provided excerpt. Full-source review required to confirm none appear in product names, pricing, or footer blocks.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Cannot confirm from truncated source:**
- Physical mailing address (required by CAN-SPAM §5(a)(5))
- Unsubscribe mechanism and one-click list-unsubscribe header (RFC 8058 / Gmail/Yahoo 2024 bulk sender requirement)
- Authentication headers (SPF, DKIM, DMARC) — sender domain is `email.newbalance.com`; must be verified via DNS/header inspection on a live send

**Sender domain:** `newbalance@email.newbalance.com` uses a dedicated ESP subdomain, which is correct practice. Verify DKIM `d=` tag aligns with `email.newbalance.com` or `newbalance.com` in the signed header.

---

### 6. Email-to-Site Continuity (UTM Params, Landing Page Alignment)

**Cannot confirm from truncated source.** All CTA links and product links must be checked for:
- Presence of `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` on every outbound URL
- No bare `newbalance.com` links without tracking parameters
- Destination page offer consistency (25% off messaging must be reflected on landing page; mismatches cause attribution drop-off and potential FTC deception risk)

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | HTTP background image URL | Change `http://` → `https://` in `.bgwhite` |
| **P0** | Duplicate `.bg1` with color conflict | Remove or rename the `#58546d` definition |
| **P1** | `@font-face` missing `src:` | Either add hosted font `src:` URLs or remove the dead rules |
| **P1** | IE `<meta>` missing `http-equiv` | Add `http-equiv="X-UA-Compatible"` |
| **P1** | Compliance fields unverified | Confirm physical address, unsubscribe link, and List-Unsubscribe header in full source |
| **P1** | UTM coverage unverified | Audit all outbound links in full source for tracking parameters |
| **P2** | Duplicate `font-family` in `@font-face` | Remove the redundant declaration |
| **P2** | Redundant `color-scheme` declarations | Consolidate to CSS `:root` only |
## Recent history

- [[2026-07-05-final-hours-25-off]] — 6/10 (2026-07-05)
- [[2026-07-05-faster-fastest-adizero]] — 5/10 (2026-07-05)
- [[2026-07-05-comfort-that-s-built-for-men]] — 7/10 (2026-07-05)

