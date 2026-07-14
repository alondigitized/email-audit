---
slug: 2026-07-14-2nd-restock-act-fast-gloss-mode-treatment-oil--vera-glow-beauty-fap6e
type: email
date: 2026-07-14
persona: vera-glow-beauty-fap6e
score: "9/10"
sender: e.l.f. Hair
subject: 2nd restock, act fast! ✨💛 Gloss Mode Treatment Oil
tags: [email, score-9, sender/e-l-f-hair]
---
# 2nd restock, act fast! ✨💛 Gloss Mode Treatment Oil
**Score:** 9/10 · **Type:** Email audit · **2026-07-14**
## Full review
## 5. Business Impact Score (1-10)

**9/10**

- Subject references persona's focus area (beauty/hair launch tracking) ✓
- Sender recognizable (e.l.f. Hair, active subscriber, 4+ recent sends) ✓
- Concrete offer visible ($13 in hero copy) ✓
- Primary CTA unambiguous (SHOP NOW, yellow button, above fold) ✓
- Visual hierarchy clear (hero → collection → top picks) ✓
- No render bugs visible ✓
- Demographic signals match (young woman, natural curly hair model) ✓
- Email reflects current campaign/restock urgency ✓
- Loyalty/member benefits visible → **FALSE** (Beauty Squad is footer-only, no "earn X points" in body) ✗
- Offer feels honest → **FALSE** (second "act fast" restock in 4 days manufactures urgency; face products in Top Picks undercut hair sub-brand coherence) ✗

*8 criteria TRUE → 1 + 8 = 9/10*

---

## 6. Open Likelihood (persona-grounded)

- **Score:** 6/10
- **Signals counted:** Sender display name recognizable (e.l.f. Hair) ✓ · Subject is concrete (product name + "2nd restock") ✓ · Subject relevant to persona focus area ✓ · No spam signals (no ALL CAPS, no !!! stacking) ✓ · Time-bounded urgency ("act fast!" + restock framing) ✓
- **Rationale:** The restock hook is a real open trigger — "2nd restock" implies the first run sold out, which is credible scarcity for a $13 viral product. But the July 10 send used nearly identical subject structure and emoji pair, so inbox pattern recognition kicks in and dulls the urgency. Cadence for a single SKU is approaching fatigue territory.

---

## 7. Click-Through Likelihood (persona-grounded)

- **Score:** 8/10
- **Signals counted:** Hero offer visible without scrolling ✓ · Primary CTA in persona's category (hair/beauty) ✓ · One specific product linked (Gloss Mode Treatment Oil) ✓ · Product detail visible ("glossy styling oil that strengthens hair") ✓ · Social proof visible ("Everyone's obsessed" in hero subtext) ✓ · Brand voice consistent and trusted ✓ · No friction (SHOP NOW button immediate, no interstitial) ✓
- **Rationale:** The hero does enough — $13, restock urgency, and "everyone's obsessed" is light social proof but it lands. The click would happen at the hero SHOP NOW before I even reach the confused "Top Picks" block below; the bottom half would have dropped this if I were on the fence.

---

## 8. Subject

- **Subject:** `2nd restock, act fast! ✨💛 Gloss Mode Treatment Oil`
- **Length:** 52 characters (emoji counted as 1 char each)
- **Scores (1-10):** Clarity `8`, Curiosity `4`, Personalization `2`, Urgency `7`, Specificity `8`

---

## 9. Preview

- **Preview:** `(none / leaking junk — no preheader visible in rendered screenshot; hero image loads first, likely pulls raw HTML fallback in inbox view)`
- **Length:** 0 intentional chars
- **Scores (1-10):** Complements subject `2`, Specificity `1`, Clarity `1`, Inbox-fit `1`

---

## Technical Audit

## Technical Audit — e.l.f. Hair "Gloss Mode Treatment Oil" Restock Email

---

### 1. Technical Summary

HTML email built in Beefree/BEE editor, delivered via Braze. The visible source is structurally sound for Outlook/Gmail compatibility but has several accessibility deficiencies, an anomalous nested template structure, and compliance items that cannot be fully verified due to source truncation.

---

### 2. Link & Tracking Issues

**Redirect domain:** All links wrap through `links.elfcosmetics.com` using Braze PowerLink encoding (signature pattern: `~/AAQRxRA~/`). This is expected.

**UTM verification blocked:** Redirect wrappers are opaque encoded URLs. UTM parameters on destination pages cannot be confirmed from HTML alone — requires resolving redirects (e.g., `curl -IL <url>`).

**Logo link:** The header `<img>` links to the full redirect chain. The image asset resolves to `braze-images.com/appboy/...` with a timestamp query param (`?1697823889`) — that timestamp is from 2023-10-20, suggesting this asset was reused from a prior campaign rather than freshly uploaded.

---

### 3. Rendering & Accessibility

| Issue | Evidence |
|---|---|
| Empty `<title>` tag | `<title></title>` — screen readers announce the subject line instead; some clients show a blank tab |
| Logo link removed from keyboard tab order | `tabindex="-1"` on `<a>` wrapping the logo — prevents keyboard navigation to the primary brand link |
| Focus indicator suppressed | `style="outline:none"` on the same `<a>` — removes visible focus ring for keyboard users |
| Google Fonts will not render | `<link href="https://fonts.googleapis.com/css?family=Open+Sans">` — Gmail, Outlook, and Apple Mail strip external `<link>` tags; falls back to `Arial,Sans-serif` (declared in fallback stack — correct fallback, but the load is wasted and adds a DNS request in clients that do allow it) |
| Three empty content blocks | `block-2`, `block-3`, `block-4` each contain only a whitespace `<div>` — dead markup adding ~300 bytes with no rendered output |
| Nested `nl-container` anomaly | Inside `html_block block-1`, there is a full second `nl-container` → `row-1` → `row-content` → `column-1` tree, mirroring the outer wrapper. This indicates a module was pasted into an existing layout block rather than placed at the root level — redundant wrapper tables that could cause width/alignment drift in some clients |

**Not flagged:** `role="presentation"` on tables is correct; `lang="en"` on `<html>` is present; preheader text (`"It's your hair's time to shine."`) is correctly hidden using the standard zero-dimension/opacity technique.

---

### 4. Personalization & Merge Tokens

No merge tokens visible in the truncated source. No `{{first_name}}`, `{{custom_attribute.*}}`, or fallback defaults observed. If this is a broadcast (non-personalized) send, no issue. If subscriber name personalization is intended in the subject or body, it is absent from the visible markup.

---

### 5. Compliance

**Cannot fully verify** due to source truncation. Items to confirm in the full source:

- **Physical mailing address** (CAN-SPAM §7(a)(1)(A)) — not present in visible portion; must appear in footer
- **Unsubscribe link** (CAN-SPAM §7(a)(1)(B)) — not visible; must be functional and honored within 10 business days
- **Sender identity mismatch:** From display name is `"e.l.f. Hair"` but sending address is `makeup@m.elfcosmetics.com`. The subdomain `m.elfcosmetics.com` and localpart `makeup` do not align with the Hair product line being promoted — minor but can increase spam-filter scoring on name/domain mismatch heuristics
- **Authentication headers:** Not derivable from HTML source; DKIM/SPF/DMARC status for `m.elfcosmetics.com` must be verified via received headers or a tool like MXToolbox

---

### 6. Email-to-Site Continuity

**Cannot confirm** without resolving redirect URLs. The Braze PowerLink wrapper (`links.elfcosmetics.com/f/a/...`) encodes the destination — UTM attribution (`utm_source`, `utm_medium`, `utm_campaign`) must be verified by following the redirect chain and inspecting the final URL.

**Action:** Run `curl -sIL <redirect_url> | grep -i location` on each CTA link to confirm `utm_source=email&utm_medium=...&utm_campaign=gloss-mode-restock` (or equivalent) reaches the landing page.

---

### 7. Recommendations

1. **Set a descriptive `<title>`** — e.g., `<title>Gloss Mode Treatment Oil — 2nd Restock</title>`
2. **Remove `tabindex="-1"` from the logo/CTA link** — or replace with `tabindex="0"` if the image is meant to be interactive
3. **Replace `outline:none` with `outline:none; outline-offset:0`** and add a `:focus-visible` rule (or use `outline:2px solid #000` for clients that support it) to restore keyboard focus visibility
4. **Remove the empty `block-2/3/4` tables** — they add no layout value
5. **Fix the nested `nl-container` structure** in `block-1` — flatten the inner template to sit directly in the outer column rather than wrapping in a second full container tree
6. **Resolve all CTA redirect URLs** and verify UTM params reach the product page
7. **Verify full footer in un-truncated source** for CAN-SPAM physical address and unsubscribe link
8. **Review `makeup@m.elfcosmetics.com`** sender address — consider aligning subdomain/localpart to the Hair brand (e.g., `hair@m.elfcosmetics.com`) to reduce name-mismatch spam scoring
## Recent history

- [[2026-07-14-new-brown-mascara-made-mini--vera-glow-beauty-fap6e]] — 9/10 (2026-07-14)
- [[2026-07-14-meet-i-ny-balm-dotcom--vera-glow-beauty-fap6e]] — 8/10 (2026-07-14)
- [[2026-07-14-hair-care-for-pool-days-heat-waves-18814cab-1f72-4a9e-9098---vera-glow-beauty-fap6e]] — 8/10 (2026-07-14)

