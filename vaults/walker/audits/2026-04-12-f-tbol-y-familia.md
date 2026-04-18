---
slug: 2026-04-12-f-tbol-y-familia
type: email
date: 2026-04-12
persona: walker
score: "5/10"
sender: adidas
subject: Fútbol y familia
tags: [email, score-5, sender/adidas]
---
# Fútbol y familia
**Score:** 5/10 · **Type:** Email audit · **2026-04-12**
## Executive summary

- Strong individual assets (Messi, a product with clear visual identity) are undermined by a fractured narrative, a subject-to-body mismatch, and a sweepstakes module that pulls focus from product purchase.

## What's working

- **Samba Messi module** is the visual standout — the teal/coral colorway pops and the shoe is immediately identifiable. Product photography earns its real estate.
- **"Built for Greatness" hero** sets an aspirational tone and the Messi Collection framing provides a coherent entry point.
- **Harden sweepstakes** has genuine value as an incentive for members, and the Superstar silhouette is iconic enough to carry weight.
- Banner strip at top ("Explore the latest adidas best sellers" + SHOP NOW) gives immediate escape hatch for transactional readers.

## What's weak

- **Subject line-to-body disconnect is severe.** "Fútbol y familia" promises a culturally resonant, family-oriented soccer story. The body delivers two soccer modules and then a Harden sweepstakes with zero family angle anywhere.
- **The Harden module doesn't belong here.** Basketball and "Win an Icon" sweepstakes land in a completely different register than the Messi Collection lifestyle narrative. It reads like two separate emails were merged.
- **No Spanish in the body.** The subject sets a Spanish-language expectation that is immediately abandoned. For Latino audience targeting this is a trust-breaking mismatch.
- **"Familia" theme is invisible.** There's no product, copy, or imagery in the body that references family. The subject line promises something the email never delivers.
- **Single CTA per module is fine, but CTAs are hard to read** at render size — they appear light/small against the module backgrounds.
- **Copy density is low.** The email is short, which isn't inherently bad, but the Messi narrative ("Channel his vibe going confidence…") reads as incomplete and slightly awkward.

## Recommendations

- 1. **Separate the campaigns.** Messi Collection and Harden sweepstakes should be different sends. Mixing them dilutes both.
- 2. **Honor the subject line.** If you're going to use "Fútbol y familia," show families — kids in Sambas, Messi with his sons, generational soccer themes. Or drop the Spanish hook entirely.
- 3. **Localize the body copy** if the subject line is in Spanish. Either go bilingual or stay English — the current split feels unintentional.
- 4. **Strengthen CTAs.** Every module needs a high-contrast, clearly labeled button. The member sweepstakes CTA in particular should be unmissable.
- 5. **Tighten the Messi narrative.** Pick one angle — heritage, performance, or style — and commit. The Samba module copy trailing off undercuts the storytelling.
- | Priority | Issue | Action |
- |----------|-------|--------|
- | P0 | Broken `/g/` redirect on at least one CTA | Audit all encoded redirect destinations for relative-path encoding; rebuild affected links with absolute URLs |
- | P0 | Plain-text MIME part is empty | Generate and attach a plain-text alternative with all key links and required footer content |
- | P1 | Six HTTP arrow images | Update `image.link.adidas.com` asset URLs to HTTPS; confirm CDN supports TLS |
- | P1 | HTTP tracking pixel | Migrate open-tracking beacon to HTTPS endpoint |
- | P2 | Missing `alt` on content image | Add descriptive `alt` text to `589c406e-...` image |
- | P2 | `alt=""` on tracking pixel | Set `alt=""` explicitly on the tracking beacon `<img>` |
- | P3 | Duplicate `@font-face` blocks | Consolidate into single `<style>` block to reduce payload |
- | P3 | Authentication-Results verification | Confirm DKIM signature on delivered headers; validate DMARC alignment for `us-news.comms.adidas.com` |

## Full review
## 2. Business Impact Score: 5/10

Strong individual assets (Messi, a product with clear visual identity) are undermined by a fractured narrative, a subject-to-body mismatch, and a sweepstakes module that pulls focus from product purchase.

---

## 3. What's Working

- **Samba Messi module** is the visual standout — the teal/coral colorway pops and the shoe is immediately identifiable. Product photography earns its real estate.
- **"Built for Greatness" hero** sets an aspirational tone and the Messi Collection framing provides a coherent entry point.
- **Harden sweepstakes** has genuine value as an incentive for members, and the Superstar silhouette is iconic enough to carry weight.
- Banner strip at top ("Explore the latest adidas best sellers" + SHOP NOW) gives immediate escape hatch for transactional readers.

---

## 4. What's Weak

- **Subject line-to-body disconnect is severe.** "Fútbol y familia" promises a culturally resonant, family-oriented soccer story. The body delivers two soccer modules and then a Harden sweepstakes with zero family angle anywhere.
- **The Harden module doesn't belong here.** Basketball and "Win an Icon" sweepstakes land in a completely different register than the Messi Collection lifestyle narrative. It reads like two separate emails were merged.
- **No Spanish in the body.** The subject sets a Spanish-language expectation that is immediately abandoned. For Latino audience targeting this is a trust-breaking mismatch.
- **"Familia" theme is invisible.** There's no product, copy, or imagery in the body that references family. The subject line promises something the email never delivers.
- **Single CTA per module is fine, but CTAs are hard to read** at render size — they appear light/small against the module backgrounds.
- **Copy density is low.** The email is short, which isn't inherently bad, but the Messi narrative ("Channel his vibe going confidence…") reads as incomplete and slightly awkward.

---

## 5. Recommendations

1. **Separate the campaigns.** Messi Collection and Harden sweepstakes should be different sends. Mixing them dilutes both.
2. **Honor the subject line.** If you're going to use "Fútbol y familia," show families — kids in Sambas, Messi with his sons, generational soccer themes. Or drop the Spanish hook entirely.
3. **Localize the body copy** if the subject line is in Spanish. Either go bilingual or stay English — the current split feels unintentional.
4. **Strengthen CTAs.** Every module needs a high-contrast, clearly labeled button. The member sweepstakes CTA in particular should be unmissable.
5. **Tighten the Messi narrative.** Pick one angle — heritage, performance, or style — and commit. The Samba module copy trailing off undercuts the storytelling.

---

## 6. Bottom Line

Good bones, bad assembly. The Messi Collection assets are strong and the Samba product photography is compelling. But the email tries to do two things at once (product campaign + sweepstakes), breaks its own cultural promise (Spanish subject, English body, no "familia"), and leaves the reader without a clear reason to act. A focused Messi-only email with a genuine cultural throughline would be measurably more effective.

---

## 7. Subject Line Analysis

- **Subject:** `Fútbol y familia`
- **Length:** 16 characters
- **Scores (1-10):** Clarity `5`, Curiosity `6`, Personalization `6`, Urgency `2`, Specificity `3`
- **Strengths:**
  - Culturally coded — signals Latino/Hispanic targeting with emotional resonance
  - Short and punchy; stands out in an English-language inbox
- **Weaknesses:**
  - Zero specificity — no product, no offer, no hook beyond a vibe
  - Urgency is nonexistent; no time pressure or reason to open now
- **Alt A:** `Messi + Samba: Built for the Beautiful Game`
- **Alt B:** `El Fútbol Corre en Familia — Messi Collection`

---

## 8. Evidence

- **Overall purpose:** Promote the adidas Messi Collection (lifestyle/performance crossover) with a secondary sweepstakes mechanic for members.
- **Hero / primary value proposition:** "Built for Greatness" — aspirational Messi Collection branding with atmospheric athlete photography. Value prop is identity/lifestyle, not a specific offer.
- **Membership / benefits section:** Harden sweepstakes module explicitly calls out adidas membership as the entry mechanism — the one place membership is made visible.
- **Product discoverability / recommendation modules:** One product module (Samba Messi, teal/coral colorway). No additional product grid or recommendation rail — missed opportunity for cross-sell.
- **Utility / secondary modules:** Top banner serves as a navigational escape valve. Footer contains standard account/legal links.
- **Bugs / friction / clarity issues:** No broken images or rendering failures visible. Copy in the Samba module appears to have an incomplete or awkward phrase ("Channel his vibe going confidence") — may be a copywriting issue rather than a render bug.

---

## Technical Audit

## Technical Audit — adidas "Fútbol y familia"

**From:** adidas@us-news.comms.adidas.com
**Date:** 2026-04-11

---

### 1. Technical Summary

The email has two blocking issues: a malformed redirect URL producing a broken click experience, and a missing plain-text MIME alternative that will trigger spam filters and fail accessibility requirements. Several non-HTTPS image assets compound deliverability and rendering risk.

---

### 2. Link & Tracking Issues

**[FAIL] Broken redirect URL — broken click experience**

The QA probe flagged an unresolvable URL type in one tracked link:

```
unknown url type: '/g/589c406e-574b-418b-ac89-ff562183681f?txn=1846da00-...'
```

The raw destination path begins with `/g/` (a relative path), but the outer wrapper resolves to:
```
https://dv.adidas.com/o/589c406e-574b-418b-ac89-ff562183681f?cp_tp=v3.eJx1z79...
```

The click redirect appears to be encoding a relative path as the destination rather than an absolute URL. Any recipient clicking this link lands on a broken page. This is the single highest-priority fix.

**[WARN] 31 tracking links skipped** — all click-redirect links pass through `click.comms.adidas.com`. QA could not probe destinations; no additional broken links confirmed, but the `/g/` pattern above may affect other links in the same campaign template.

---

### 3. Rendering & Accessibility

**[WARN] HTTP image assets — may be blocked**

Six instances of the same arrow image are served over HTTP:
```
http://image.link.adidas.com/lib/fe6515707c62007e7715/m/3/b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg
```
Modern email clients (Gmail, Outlook.com, Apple Mail) block mixed-content HTTP images. This asset will render as a broken image icon in most environments.

Additionally, the tracking pixel/open pixel is served over HTTP:
```
http://click.comms.adidas.com/CI0/0102019d7f3a025f-4fc6a05a-df06-4eb0-8955-7d0e05eca2cd-000000/...
```
HTTP tracking pixels are routinely stripped by clients and proxies, degrading open-rate measurement accuracy.

**[WARN] Missing `alt` text on two images**

- `589c406e-574b-418b-ac89-ff562183681f` (content image, no `alt` attribute)
- `G2a3bUVHgNphlTI9zcVJXpaSH...` (tracking pixel, no `alt=""`)

Content images without `alt` text fail WCAG 2.1 SC 1.1.1 and render blank in image-off environments. Decorative/tracking images must have `alt=""` explicitly set.

**Font declarations duplicated across two `<style>` blocks** — `AdihausDIN` and `AdineuePRO` `@font-face` rules appear in both the first and third `<style>` blocks with slightly differing fallback lists. This is benign in most clients but adds unnecessary payload and indicates template hygiene issues.

**DOCTYPE is HTML 4.01 Transitional** — acceptable for email, no defect, noted for record.

---

### 4. Personalization & Merge Tokens

No unrendered merge tokens (e.g., `{{first_name}}`, `%FNAME%`) visible in the truncated source. Cannot fully verify without complete HTML; no issues confirmed.

---

### 5. Compliance

**[FAIL] Plain-text MIME alternative missing**

```
Text version is 0 chars
```

CAN-SPAM does not mandate a plain-text part, but its absence:
- Raises spam scores across most MTAs (SpamAssassin `MISSING_MIMEOLE`, Barracuda rules)
- Fails RFC 2822 best-practice for multipart/alternative
- Breaks accessibility for screen-reader-only mail clients

A minimum viable plain-text part with unsubscribe URL and physical address is required.

**[WARN] Authentication-Results header not present**

SPF/DKIM status could not be verified via the AgentMail relay. The sending domain `us-news.comms.adidas.com` should be covered by adidas's ESP DKIM signing; this should be confirmed against raw headers in the delivered copy. DMARC alignment (SPF or DKIM) is a prerequisite for inbox placement at major providers.

**CAN-SPAM physical address and unsubscribe** — present in footer per standard adidas template (not flagged by QA); no issues confirmed.

---

### 6. Email-to-Site Continuity

The broken `/g/` redirect (§2) means at least one CTA does not successfully reach a landing page — UTM parameter analysis is moot for that link until the URL is fixed.

The 31 remaining tracked links pass through `click.comms.adidas.com` with encoded payloads (`cp_tp`, `cp_cid`, `mi_cid`, `mi_mid` parameters visible in the one inspectable URL). Destination UTM coverage cannot be confirmed without decoding the redirect targets. If the broken-link pattern is template-wide, additional CTAs may carry the same `/g/`-path defect.

---

### 7. Recommendations

| Priority | Issue | Action |
|----------|-------|--------|
| P0 | Broken `/g/` redirect on at least one CTA | Audit all encoded redirect destinations for relative-path encoding; rebuild affected links with absolute URLs |
| P0 | Plain-text MIME part is empty | Generate and attach a plain-text alternative with all key links and required footer content |
| P1 | Six HTTP arrow images | Update `image.link.adidas.com` asset URLs to HTTPS; confirm CDN supports TLS |
| P1 | HTTP tracking pixel | Migrate open-tracking beacon to HTTPS endpoint |
| P2 | Missing `alt` on content image | Add descriptive `alt` text to `589c406e-...` image |
| P2 | `alt=""` on tracking pixel | Set `alt=""` explicitly on the tracking beacon `<img>` |
| P3 | Duplicate `@font-face` blocks | Consolidate into single `<style>` block to reduce payload |
| P3 | Authentication-Results verification | Confirm DKIM signature on delivered headers; validate DMARC alignment for `us-news.comms.adidas.com` |
## Recent history

- [[2026-04-11-earn-50-points-for-completing-your-profile]] — 3/10 (2026-04-11)
- [[2026-04-11-more-sun-more-savings]] — 6/10 (2026-04-11)
- [[2026-04-11-your-cart-expires-soon-y1wbjitythgbzzghoyf2zq-g]] — 5/10 (2026-04-11)

