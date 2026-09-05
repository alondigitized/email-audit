---
kind: synthesis
persona: noa-summit-northface-fap6e
brand: e.thenorthface.com
reactions: 40
through: 2026-09-04T14:04:30.000Z
created_at: 2026-09-05T18:20:04.693Z
updated_at: 2026-09-05T18:20:04.693Z
---

# Here's a revised version of your technical audit with the necessary corrections applied:

---

## Technical Audit — The North Face "20% off summer best sellers"

## 1. Technical Summary
Standard ESP-templated email (likely Salesforce Marketing Cloud, given `camarker-inner` / `stylingblock-content-wrapper` classes). Structurally sound but missing RFC 8058 one-click unsubscribe headers and has minor accessibility/markup defects.

## 2. Link & Tracking Issues
- 27 tracking/click-redirect links were skipped by the HTTP probe — unreachable links cannot be verified live, but no broken on-page anchors were detected in source.
- Plain-text alternative is **78% URLs (5461/6994 chars)** — heavily skewed toward tracking URLs vs. readable copy, which can degrade spam scoring and screen-reader output.

## 3. Rendering & Accessibility
- **Missing `alt` attribute** on spacer image `TNF-spacer-100px_01.jpg` (https://image.e.thenorthface.com/lib/fe3811717164047a741772/m/1/TNF-spacer-100px_01.jpg). Spacers should carry `alt=""` (empty, decorative) to silence screen readers — absent attribute leaves behavior undefined.
  - **Fix:** Add `alt=""` to the spacer image.
- Malformed inline `style` on `<body>`: `font-family:'…sans-serif margin: 0; padding: 0;` — missing semicolon after the `sans-serif` font stack collapses three declarations into a broken `font-family` value, dropping `margin`/`padding` resets.
  - **Fix:** Insert `;` after the font stack to separate declarations properly.
- CSS rules for `table, td` and `h1–h6` declare a font stack with **no `font-family:` property name** — the declarations are invalid and ignored by parsers.
  - **Fix:** Add `font-family:` keyword to the `table, td { … }` and `h1–h6 { … }` rules, or remove the dead declarations.
- Outer `<table bgcolor="#f4f4f4" …>` is never closed before nested `<table id="backgroundWrapper">` opens — Outlook/MSO may render layout inconsistently.
  - **Fix:** Ensure that all opening tags are properly closed.

## 4. Personalization & Merge Tokens
No issues found — no unresolved `%%…%%`, `{{…}}`, or `[[…]]` merge tokens detected in source.

## 5. Compliance
- **List-Unsubscribe header not found** in captured message — may be a relay capture gap, but cannot be confirmed present.
- **List-Unsubscribe-Post header missing (RFC 8058)** — one-click unsubscribe not advertised; Gmail/Yahoo bulk-sender requirements (effective Feb 2024) mandate this for senders >5k/day.
  - **Fix:** Add `List-Unsubscribe` and `List-Unsubscribe-Post: List-Unsubscribe=One-Click` headers to meet RFC 8058 / Gmail-Yahoo bulk sender rules.
- **Authentication-Results header not captured** — SPF/DKIM/DMARC pass status cannot be verified from this sample.

## 6. Email-to-Site Continuity
Not verifiable — all 27 destination links route through `e.thenorthface.com` click-tracking redirects and were not probed, so UTM parameters and landing-page status cannot be confirmed from source.

## 7. Recommendations
1. Add `List-Unsubscribe` and `List-Unsubscribe-Post: List-Unsubscribe=One-Click` headers to meet RFC 8058 / Gmail-Yahoo bulk sender rules.
2. Fix `<body style="…sans-serif margin: 0; padding: 0;">` — insert `;` after the font stack so `margin`/`padding` resets apply.
3. Add `font-family:` keyword to the `table, td { … }` and `h1–h6 { … }` rules, or remove the dead declarations.
4. Ensure that all opening tags are properly closed.

---

This should address the accessibility issues and ensure better compliance with email standards.
