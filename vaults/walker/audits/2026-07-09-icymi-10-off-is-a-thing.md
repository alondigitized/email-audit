---
slug: 2026-07-09-icymi-10-off-is-a-thing
type: email
date: 2026-07-09
persona: walker
score: "7/10"
sender: DSW
subject: "ICYMI: $10 OFF IS A THING"
tags: [email, score-7, sender/dsw]
---
# ICYMI: $10 OFF IS A THING
**Score:** 7/10 · **Type:** Email audit · **2026-07-09**
## Full review
## Technical Audit

## Technical Audit — DSW "ICYMI: $10 OFF" Email

---

### 1. Technical Summary

DSW email rendered via Braze, XHTML 1.0 Transitional doctype, with two custom web font families (Futura PT, HelveticaNow) served from `braze-images.com`. Source is truncated — link, UTM, and compliance sections can only be partially assessed.

---

### 2. Link & Tracking Issues

**Cannot fully audit** — HTML is truncated before CTA links appear. No link hrefs visible in the provided source to verify click-tracking wrappers or redirect chains.

Flagged for follow-up: verify all CTAs route through Braze click tracking and that destination URLs are not double-encoded.

---

### 3. Rendering & Accessibility

**[BUG] `<meta content="text/html; charset=utf-8" />` is missing `http-equiv="Content-Type"`**
As written, this tag has no `name` or `http-equiv` attribute, so the charset declaration is inert — email clients that parse headers for encoding fallback won't pick it up. Correct form:
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
```

**[BUG] `<meta content="IE=Edge" />` is missing `http-equiv="X-UA-Compatible"`**
Without `http-equiv`, this tag does nothing. While IE is obsolete, this is a copy/paste defect that signals sloppy template hygiene.
```html
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
```

**[ACCESSIBILITY] `maximum-scale=1` in viewport meta**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```
Blocks user zoom on mobile — violates WCAG 1.4.4 (Resize Text, Level AA). Remove `maximum-scale=1`.

**[MINOR] Inconsistent font asset cache-busting**
HelveticaNow `.ttf` files include cache-bust timestamps (`?1755182939`), but Futura PT `.woff` files do not. If Futura PT assets are ever refreshed at the same URL, stale cached versions will persist for some clients.

**[INFO] Dark mode implementation is correct** — `color-scheme` meta, `prefers-color-scheme` media query, and corresponding `.dm-*` utility classes are all present and consistent.

---

### 4. Personalization & Merge Tokens

**Cannot audit** — the truncated source contains no visible Braze Liquid tags or merge fields. Full source required to check for unrendered tokens (e.g., `{{first_name}}` fallbacks, conditional logic).

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Cannot audit unsubscribe link or physical address** — both are expected in the email footer, which is in the truncated portion. Confirm:
- One-click unsubscribe link present and functional
- DSW's physical mailing address present in footer (CAN-SPAM §5)
- `List-Unsubscribe` and `List-Unsubscribe-Post` headers set at the MTA level (Braze typically handles this)

Authentication headers (SPF, DKIM, DMARC) are MTA-level and not visible in HTML source — verify via a received email's raw headers.

---

### 6. Email-to-Site Continuity (UTM Params, Landing Page Alignment)

**Cannot audit** — no destination URLs visible in truncated source. When full HTML is available, confirm:
- All CTAs carry `utm_source=email&utm_medium=email&utm_campaign=<campaign_id>` (or Braze equivalent)
- `$10 OFF` offer code or discount is active and surfaced on the linked landing page
- No UTM parameters stripped by redirect chains

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | Missing `http-equiv` on charset meta | Add `http-equiv="Content-Type"` |
| Medium | `maximum-scale=1` blocks zoom | Remove from viewport meta |
| Low | Missing `http-equiv` on IE meta | Add `http-equiv="X-UA-Compatible"` (or drop the tag) |
| Low | Inconsistent font cache-busting | Add timestamps to Futura PT URLs |
| — | Full source required | Re-run audit on complete HTML to cover links, UTM, unsubscribe, and merge tokens |
## Recent history

- [[2026-07-09-10-off-summer-sandals]] — 7/10 (2026-07-09)
- [[2026-07-09-fresh-materials-to-get-giddy-over]] — 7/10 (2026-07-09)
- [[2026-07-09-train-hard-play-hard-in-nike]] — 8/10 (2026-07-09)

