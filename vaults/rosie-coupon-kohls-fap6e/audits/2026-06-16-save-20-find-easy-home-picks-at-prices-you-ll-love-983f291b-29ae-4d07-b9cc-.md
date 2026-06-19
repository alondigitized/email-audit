---
slug: 2026-06-16-save-20-find-easy-home-picks-at-prices-you-ll-love-983f291b-29ae-4d07-b9cc-
type: email
date: 2026-06-16
persona: rosie-coupon-kohls-fap6e
score: "7/10"
sender: Kohl’s
subject: "Save 20% | Find easy home picks at prices you'll love 🥰"
tags: [email, score-7, sender/kohl-s]
---
# Save 20% | Find easy home picks at prices you'll love 🥰
**Score:** 7/10 · **Type:** Email audit · **2026-06-16**
## Full review
## Technical Audit

## Technical Audit — Kohl's "Save 20% | Find easy home picks" (2026-06-19)

---

### 1. Technical Summary

The email uses a standard ESP/CDP stack (Coherent Path + MessageMedia + Adobe Audience Manager) with no structural HTML errors, but has multiple compliance gaps and pervasive missing alt text on tracking pixels. Authentication headers are unverifiable through the AgentMail relay.

---

### 2. Link & Tracking Issues

- **22 click-redirect links skipped** by HTTP probe — all route through `click.s.kohls.com` and `click.chp.kohls.com`. Destination resolution was not confirmed; broken landing pages cannot be ruled out.
- **Three separate tracking pixel systems** fire on load:
  - `click.chp.kohls.com` (Coherent Path open pixel)
  - `mi.kohls.com/p/up/` (MessageMedia open tracker)
  - `click.s.kohls.com/open.aspx` (Salesforce Marketing Cloud open pixel)
  - `kohls.demdex.net/event` (Adobe Audience Manager sync)
- The `<img>` for the SFMC open pixel contains a malformed closing tag: `</custom>` instead of a valid element close. While browsers are permissive, this is invalid HTML 4.01 and may cause parse issues in strict renderers.

```html
<img src="https://click.s.kohls.com/open.aspx?..." width="1" height="1" alt=""></custom>
```

---

### 3. Rendering & Accessibility

- **11 images are missing `alt` text** per QA findings. Affected images include all `mi.kohls.com/p/rp/*.png` content images — these appear to be product/editorial images (not just tracking pixels), meaning screen reader users get no content description.
- Tracking pixels (`3ff4a474`, `o.gif`, `event`) are also missing `alt=""` (empty string) — they should carry `alt="" aria-hidden="true"` for accessibility compliance. Only one pixel (`o.gif`) has `aria-hidden="true"` set correctly.
- `<meta name="viewport" content="..., user-scalable=0">` disables pinch-to-zoom, which fails WCAG 2.1 SC 1.4.4 (Resize Text). This is a common but real accessibility defect.
- `<title></title>` is empty — some screen readers announce the document title when an email opens; an empty title provides no context.
- Google Fonts are loaded via both `<link>` and `@import` for the same families (Roboto, Montserrat), which is redundant and adds two extra render-blocking requests for no benefit.
- `maximum-scale=1` in the viewport meta further restricts zoom on iOS Safari in addition to `user-scalable=0`.

---

### 4. Personalization & Merge Tokens

- One image URL contains what appears to be an unresolved or partially populated merge token:

```
mi_kc_redm_end_dte=&mi_kc_event_pe
```

The `mi_kc_redm_end_dte` parameter value is empty and `mi_kc_event_pe` appears truncated (value absent). This suggests a merge field that was not populated at send time. No unfired `{{ }}` or `%` tokens are visible in the truncated source, but the empty query param is evidence of a mapping failure.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

| Check | Status | Evidence |
|---|---|---|
| List-Unsubscribe header | **WARN** | Not captured by relay; one-click unsubscribe (RFC 8058) unconfirmed |
| List-Unsubscribe-Post | **WARN** | Absent — Gmail/Apple Mail one-click unsubscribe will not activate |
| Physical mailing address | **WARN** | Not detected in truncated source — CAN-SPAM §5(a)(5) requires a valid postal address in body |
| SPF/DKIM/DMARC | **WARN** | `Authentication-Results` header absent from relay capture; pass/fail unknown |
| `<meta name="robots" content="noindex, nofollow">` | Pass | Present |
| `<meta name="referrer" content="no-referrer">` | Pass | Present |

The missing physical address is the highest-severity compliance issue — if it's absent from the full (non-truncated) email body, this is a CAN-SPAM violation.

---

### 6. Email-to-Site Continuity (UTM Params, Landing Page Alignment)

- All destination URLs are wrapped in `click.s.kohls.com` or `click.chp.kohls.com` redirects; UTM parameter pass-through to final landing pages cannot be confirmed without resolving the redirect chain.
- The `cp_tp` parameter on Coherent Path links contains a base64/encoded payload (personalization data) — this is expected behavior but means UTM values, if present, are embedded inside the opaque token rather than as visible query params.
- No naked destination URLs are visible in the truncated source to verify UTM consistency or landing page alignment.

---

### 7. Recommendations

1. **Physical address** — Verify it appears in the full email body; if absent, add it to comply with CAN-SPAM. This is the only potentially legally actionable issue.
2. **`List-Unsubscribe-Post` header** — Add RFC 8058 one-click unsubscribe header at the ESP level to satisfy Gmail and Apple Mail requirements and avoid spam classification.
3. **Alt text on content images** — All `mi.kohls.com/p/rp/*.png` images should carry descriptive `alt` attributes. Tracking pixels should have `alt="" aria-hidden="true"`.
4. **Fix malformed `</custom>` tag** — Replace with nothing (self-closing `<img>` needs no closing tag in HTML 4.01) to avoid parser quirks.
5. **Remove duplicate Google Fonts requests** — Drop the `@import` block; the `<link>` tags are sufficient. Saves two render-blocking requests.
6. **Restore `user-scalable`** — Remove `user-scalable=0` and `maximum-scale=1` from the viewport meta to meet WCAG 2.1 SC 1.4.4.
7. **Populate or gate the `mi_kc_redm_end_dte` merge token** — Either supply a value or use conditional logic to omit the parameter when empty, to avoid passing a broken query string.
8. **Resolve click-redirect chain in QA** — Configure the link-checking probe to follow redirects through `click.s.kohls.com` to verify destination URLs and UTM carryover before send.
## Recent history

- [[2026-06-15-get-gifts-dad-loves-even-in-a-time-crunch-plus-save-20-25f49493-9508-407e-af0f-]] — 9/10 (2026-06-15)
- [[2026-06-13-save-20-there-s-still-time-to-treat-dad-to-a-great-gift-82c69d53-7417-484e-9684-]] — 7/10 (2026-06-13)
- [[2026-06-11-starts-today-up-to-50-off-select-beauty-hp2v610000019eb6cab12890]] — 9/10 (2026-06-11)

