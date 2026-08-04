---
slug: 2026-08-02-sculpt-bronze-slay-your-way
type: email
date: 2026-08-02
persona: evie-budget-elf-fap6e
score: "7/10"
sender: e.l.f. Cosmetics
subject: Sculpt, bronze & slay your way 🤎
tags: [email, score-7, sender/e-l-f-cosmetics]
---
# Sculpt, bronze & slay your way 🤎
**Score:** 7/10 · **Type:** Email audit · **2026-08-02**
## Full review
## Technical Audit

# Technical Audit: e.l.f. Cosmetics — "Sculpt, bronze & slay your way 🤎"

## 1. Technical Summary
The email is a standard multi-table HTML build (Bronto/Cheetah-style `links.elfcosmetics.com` click tracking, Braze-hosted images) with a 27% automated QA pass rate driven by four broken destination links, a missing plain-text part, and absent compliance/authentication headers.

## 2. Link & Tracking Issues
- **4 broken tracked links** — the click-tracker (`links.elfcosmetics.com/f/a/...`) resolves to a **relative path** instead of a fully-qualified URL, causing `unknown url type` errors:
  - `/products/power-grip-primer?Size=Regular+0.8+oz+%2F+24+ml` (link text: "Shop Now")
  - `/products/holy-hydration-face-cream?Size=Mini+0.529+oz+%2F+15+g` (link text: "Shop Now")
  - `/account/login?return_to=%2Faccount` (link text: "Receipt scanning - Earn rewards anywhere you shop e.l.f.")
  - `/pages/mobile-app?deep_link_value=com.elfcosmetics.app%3A%2F%2Fhome&pid=Email&utm_campaign=080226_bronzer_difference&is_retargeting` (link text: "beauty squad - Download the e.l.f. app")

  All four appear to be product/account/app-deeplink destinations configured without a domain prefix (e.g., missing `https://www.elfcosmetics.com`) in the ESP redirect mapping. This will break in any client/tool that does not silently prepend a base domain.
- **12 of 41 material links probed** (29 skipped per the tool's click-likelihood ranking, footer/utility/social deprioritized) — coverage is partial by design, not a defect.
- Hero banner link uses the same `links.elfcosmetics.com/f/a/...` redirect pattern and resolved successfully (not flagged), so the click-tracking mechanism itself is functional — the failures are isolated to the four destination mappings above.

## 3. Rendering & Accessibility
- **Missing alt text**: image asset `rcE0kGXydX6hzBQvU6F3UwQbEyOs7PpO3_f8Fp5w2OGknx2W-T` (`src: https://links.elfcosmetics.com/q/9UXpHZOJQaOedu_izoJJxg~~/AAQRxRA~/rcE0kGXydX6hzBQvU6F3UwQbEyOs7PpO3_f8Fp5w2OGknx2W-T6_i`) has no `alt` attribute.
- Hero image (`e.l.f.` logo/banner) correctly includes `alt="e.l.f."` and `title="e.l.f."`.
- Preheader text block uses standard hidden-preheader pattern (`display:none!important;...opacity:0`) — no issue.
- Responsive `@media (max-width:660px)` rules and MSO conditional comments (Outlook VML/Word settings) are present for cross-client support — no issues found in the truncated source.

## 4. Personalization & Merge Tokens
No merge tags, Liquid/Handlebars syntax, or Braze personalization placeholders (e.g. `{{first_name}}`, `${...}`) were observed in the truncated HTML source. No issues found in the reviewed portion.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **[WARN] `List-Unsubscribe` header not found** — may be a capture gap in the AgentMail relay rather than a true absence; cannot confirm one-click unsubscribe support from headers alone.
- **[WARN] `List-Unsubscribe-Post` header not found (RFC 8058)** — one-click unsubscribe (Gmail/Yahoo bulk sender requirement) cannot be confirmed as supported.
- **[WARN] `Authentication-Results` header not found** — SPF/DKIM/DMARC pass/fail status is unknown from the captured headers; this is a relay-capture gap, not necessarily an authentication failure.
- An unsubscribe link is confirmed present in-body (per QA tool note: "an unsubscribe link is always included"), but was not one of the 12 probed/verified links.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- Only one link exposes UTM parameters in plaintext prior to redirect resolution: the app-download link carries `pid=Email&utm_campaign=080226_bronzer_difference&is_retargeting`. All other tracked links are opaque `links.elfcosmetics.com/f/a/...` tokens, so UTM/landing-page alignment cannot be verified without following each redirect.
- Of the visible post-redirect destinations, three are relative paths lacking a domain (`/products/...`, `/account/login...`, `/pages/mobile-app...`) — this is the same root cause as the Section 2 link failures and will also break email-to-site continuity checks that expect absolute landing-page URLs.

## 7. Recommendations
1. Fix the ESP link mapping for the four failing destinations so the tracked redirect resolves to an absolute URL (e.g., `https://www.elfcosmetics.com/products/power-grip-primer?...`) rather than a relative path.
2. Add `alt` text to image asset `rcE0kGXydX6hzBQvU6F3UwQbEyOs7PpO3_f8Fp5w2OGknx2W-T`.
3. Generate and include a non-empty plain-text MIME part (currently 0 chars) for deliverability and accessibility.
4. Confirm with the sending platform whether `List-Unsubscribe` / `List-Unsubscribe-Post` headers are actually being sent — verify against raw SMTP headers rather than the relay capture, given Gmail/Yahoo's bulk-sender enforcement.
5. Verify SPF/DKIM/DMARC alignment directly at the sending MTA, since `Authentication-Results` was not captured by the relay.
## Recent history

- [[2026-07-31-last-chance-to-grab-your-lippie-gift]] — 9/10 (2026-07-31)
- [[2026-07-30-we-re-taking-care-of-frizzness-33-02-12818-1e88b6a6-i-0]] — 8/10 (2026-07-30)
- [[2026-07-29-get-a-glow-reviver-lip-oil-stick-on-us]] — 8/10 (2026-07-29)

