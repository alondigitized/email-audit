---
slug: 2026-06-06-vacuums-steamers-up-to-70-off-ends-tomorrow--felix-plinth-home-furniture-fap6e
type: email
date: 2026-06-06
persona: felix-plinth-home-furniture-fap6e
score: "7/10"
sender: Wayfair
subject: VACUUMS & STEAMERS ⌛ UP TO 70% OFF ⌛ ENDS TOMORROW ⌛ 
tags: [email, score-7, sender/wayfair]
---
# VACUUMS & STEAMERS ⌛ UP TO 70% OFF ⌛ ENDS TOMORROW ⌛ 
**Score:** 7/10 · **Type:** Email audit · **2026-06-06**
## Full review
## Technical Audit

## Technical Audit — Wayfair "Vacuums & Steamers" Email

### 1. Technical Summary
Standard XHTML 1.0 Transitional email with responsive breakpoints and multi-client compatibility fixes. Analysis is limited to the truncated HTML provided; footer, body links, and personalization blocks are not visible.

---

### 2. Link & Tracking Issues
**Cannot fully assess** — the HTML is truncated before any `<a href>` body links appear. Visible CDN asset URL (`https://secure.img.wfrcdn.com/`) is HTTPS, which is correct. No link tracking parameters visible in the provided portion.

---

### 3. Rendering & Accessibility
- **Web font fallback is correct**: `@font-face` for "Sofia" specifies `mso-font-alt: "Arial"`, which is the required Outlook fallback. However, Sofia will silently fail in Gmail, Yahoo, and most mobile clients — rendering will fall back to Arial/system fonts everywhere except Apple Mail and a small set of clients.
- **Gmail Dark Mode / Blue Links**: `u ~ div { min-width: 100vw }` and the `.Gmail` class selector are present, indicating awareness of Gmail rendering quirks.
- **Outlook stacking fix** (`body[data-outlook-cycle] .u-OutlookAppStackingFix`) is present — appropriate.
- **iOS Safari stacking fix** (`@supports (-webkit-touch-callout: none)`) for `.u-HalfWidthBlock img` is present — appropriate.
- **Alt text on images**: Cannot verify — image tags are not visible in the truncated HTML. This is a common failure point and should be confirmed in the full source.
- **Subject line: three identical ⌛ emojis** — repeated identical emoji in a subject line is a pattern flagged by Barracuda, SpamAssassin, and Gmail's bulk classifier. Single use is safe; three back-to-back identical characters increases spam score risk.
- **Subject line is fully uppercase** — `VACUUMS & STEAMERS`, `UP TO 70% OFF`, `ENDS TOMORROW` are all caps. This is a confirmed spam filter signal in SpamAssassin (`SUBJ_ALL_CAPS` rule). Combined with three emojis, the subject line composite score is likely elevated.

---

### 4. Personalization & Merge Tokens
**Cannot assess** — body content is not visible in the truncated HTML. No unrendered merge tokens (e.g., `{{first_name}}`, `[FIRST_NAME]`) are visible in the head/CSS portion.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)
- **Unsubscribe link**: Not visible in truncated HTML. Must be confirmed present in the footer (CAN-SPAM §7(a)(3)).
- **Physical mailing address**: Not visible in truncated HTML. Must be confirmed present in the footer (CAN-SPAM §7(a)(5)).
- **Sender domain**: `editor@members.wayfair.com` — subdomain sender is fine; SPF/DKIM/DMARC alignment must be confirmed for `members.wayfair.com` specifically, not just `wayfair.com`. Subdomain misalignment is a common authentication gap.
- **Authentication headers**: Not provided in this audit data. Should verify `Authentication-Results` header shows `dkim=pass`, `spf=pass`, `dmarc=pass` for the `members.wayfair.com` subdomain.

---

### 6. Email-to-Site Continuity (UTM / Landing Page)
**Cannot assess** — no body links visible in the truncated HTML. Confirm that all CTA links include consistent UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`) and that landing pages surface the same sale framing ("UP TO 70% OFF", "ENDS TOMORROW") to prevent conversion drop from message mismatch.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | Subject line spam signals | Reduce to one ⌛ emoji; use mixed case for words ("Vacuums & Steamers") |
| Medium | Subdomain SPF/DKIM/DMARC alignment | Verify `members.wayfair.com` DNS records are independently signed, not relying on parent domain alignment |
| Medium | Image alt text (unverified) | Audit full HTML for `<img>` tags missing `alt` attributes — required for accessibility and images-off rendering |
| Low | CAN-SPAM footer elements (unverified) | Confirm physical address and one-click unsubscribe are present in footer |
| Low | Web font reach | Sofia will not render for ~85% of recipients; no action required if design degrades gracefully to Arial |
## Recent history

- [[2026-06-06-17-easy-to-clean-washable-rugs--felix-plinth-home-furniture-fap6e]] — 7/10 (2026-06-06)
- [[2026-06-06-new-washable-rugs-are-here--felix-plinth-home-furniture-fap6e]] — 6/10 (2026-06-06)
- [[2026-06-06-weekend-forecast-up-to-30-off-outdoor-perfect-summer-weather-f8241d10-c99f-434d-adcc---felix-plinth-home-furniture-fap6e]] — 8/10 (2026-06-06)

