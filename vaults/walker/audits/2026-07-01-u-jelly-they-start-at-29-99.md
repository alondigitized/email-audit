---
slug: 2026-07-01-u-jelly-they-start-at-29-99
type: email
date: 2026-07-01
persona: walker
score: "7/10"
sender: DSW
subject: U jelly? They start at $29.99
tags: [email, score-7, sender/dsw]
---
# U jelly? They start at $29.99
**Score:** 7/10 · **Type:** Email audit · **2026-07-01**
## Full review
## Technical Audit

## Technical Audit — DSW "U jelly? They start at $29.99"

---

### 1. Technical Summary

Braze-templated XHTML 1.0 Transitional email with custom web fonts served from `braze-images.com`. The HTML source provided is truncated before the body content, so link, tracking, personalization, and compliance elements cannot be fully audited — findings below are limited to the `<head>` and CSS blocks visible.

---

### 2. Link & Tracking Issues

**Cannot audit** — body content was truncated before any `<a href>` tags appear. A full-source review is required to verify:
- Click-tracking redirect chains (Braze typically wraps via `click.e.dsw.com` or similar)
- UTM parameter presence and consistency
- Broken or placeholder URLs

---

### 3. Rendering & Accessibility

**`Src:` capitalized in all `@font-face` declarations (9 occurrences)**
CSS spec requires lowercase `src:`. While major browsers tolerate this, strict parsers in some email clients (notably older Outlook WebView) will silently drop the font and fall through to system fallbacks.
```css
/* All @font-face blocks have: */
Src: url("https://braze-images.com/...") format('woff');
/* Should be: */
src: url("https://braze-images.com/...") format('woff');
```

**`-ms-text-size-adjust` set to conflicting values in a single rule**
```css
* {
  -ms-text-size-adjust: 100%;   /* set first */
  -ms-text-size-adjust: none;   /* immediately overrides — effectively disables scaling */
}
```
The `none` value overrides `100%` in the same declaration block. On older Windows Phone / IE Mobile, this disables text size adjustment entirely rather than preserving it at 100%.

**`<meta>` tags missing required `http-equiv` attribute**
```html
<meta content="text/html; charset=utf-8" />        <!-- missing http-equiv="Content-Type" -->
<meta content="IE=Edge" />                          <!-- missing http-equiv="X-UA-Compatible" -->
```
Both tags are inert as written. Without `http-equiv`, the charset directive is not honoured by legacy Outlook/IE rendering engines. The correct forms:
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
```

**No format fallback for web fonts**
Futura PT variants are served as `.woff` only; HelveticaNow variants as `.ttf` only. No `format()` fallback chain means clients that don't support the single format served silently drop to the CSS font stack. Low severity but worth noting for broad client coverage.

**`#000001` near-black** (`.dm-font-black`, `.border-top-black`) — this is an intentional and correct pattern to prevent Gmail dark mode from auto-inverting pure `#000000`. Not an issue.

---

### 4. Personalization & Merge Tokens

**Cannot audit** — source truncated before body. Verify in full source that no raw Braze Liquid tokens (e.g., `{{${first_name}}}`, `{%`) appear unrendered in the final send, particularly in the subject line and preheader.

---

### 5. Compliance (CAN-SPAM / Unsubscribe / Auth Headers)

**Cannot audit from truncated source.** Required checks on full source:
- Physical mailing address present in footer
- One-click or clearly visible unsubscribe link
- Sender domain (`e.dsw.com`) should have SPF, DKIM, and DMARC records aligned — not verifiable from HTML alone; check authentication headers on a received copy

**Sender domain noted:** `dsw@e.dsw.com` — `e.dsw.com` is a dedicated ESP subdomain, which is correct practice for deliverability isolation.

---

### 6. Email-to-Site Continuity (UTM / Landing Page)

**Cannot audit** — no links visible in truncated source. When reviewing full source, confirm:
- All CTAs carry `utm_source=email&utm_medium=email&utm_campaign=<campaign_id>` (or DSW's equivalent schema)
- Campaign and creative IDs are consistent across all links in the send
- Landing pages are live and not returning 3xx/4xx at send time

---

### 7. Recommendations

| Priority | Issue | Action |
|----------|-------|--------|
| High | `http-equiv` missing on charset and IE meta tags | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` |
| Medium | `Src:` capitalized in all 9 `@font-face` blocks | Lowercase to `src:` |
| Medium | `-ms-text-size-adjust` conflict (`100%` then `none`) | Remove the redundant `none` override or consolidate to `100%` only |
| Low | Single-format font declarations | Add `woff2` + `woff` chain for Futura PT; add `woff2`/`woff` for HelveticaNow or accept system fallback |
| Blocked | Links, UTM, tokens, compliance footer | Re-audit with full HTML source |
## Recent history

- [[2026-06-30-major-savings-are-happening-now]] — 8/10 (2026-06-30)
- [[2026-06-30-feel-good-with-bobs-styles-5ab5118c-7b04-4792-abf3-]] — 7/10 (2026-06-30)
- [[2026-06-30-the-iconic-adidas-samba-is-here-a3-a5-49434-dece34a6-i-0]] — 7/10 (2026-06-30)

