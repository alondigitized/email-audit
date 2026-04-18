---
slug: 2026-03-29-back-to-the-70s-with-handball-spezial
type: email
date: 2026-03-28
persona: walker
score: "4/10"
sender: adidas
subject: Back to the ’70s with Handball Spezial
tags: [email, score-4, sender/adidas]
---
# Back to the ’70s with Handball Spezial
**Score:** 4/10 · **Type:** Email audit · **2026-03-28**
## Executive summary

- **From:** adidas | **Subject:** Back to the '70s with Handball Spezial
- A stripped-down product email that leads with a discount offer but fails to build any real desire for the Handball Spezial before asking for the click. The product thumbnails are small and crowded, the headline lands below the shoes rather than above them, and there's no CTA in the product section. The '70s nostalgia angle has genuine potential here — adidas has a strong story to tell — but the execution buries it at the bottom as a few lines of body copy. This email converts on the promo code, not on the product.

## What's working

- **Promo banner is clear and prominent.** "Save 30% on eligible styles with code MARCH" with a "SHOP NOW" CTA sits right at the top — hard to miss, easy to act on.
- **Colorway variety is well-represented.** Five distinct colorways (navy, burgundy, leopard print, cream, black) communicate range and justify browsing.
- **Clean, uncluttered layout.** No visual noise competing with the product.

## What's weak

- **Headline sequence is inverted.** "THE '70S ARE BACK" appears *below* the product grid. The story should hook first; the product grid should land after emotional context is set.
- **Product thumbnails are too small.** Five shoes in a 2-column grid renders each image at minimal size — detail is lost, especially on the leopard and white colorways where texture is the selling point.
- **No product-level CTAs.** The grid has no "Shop This Color" links or individual buttons. After the top banner, the path to purchase disappears entirely.
- **Body copy is weak.** "Versatile enough for any look" is generic filler. The '70s positioning deserves something with more identity.
- **No price anchoring.** There's no original price shown alongside the 30% discount to reinforce perceived value.
- **The "STORIES, STYLES AND SPORTSWEAR AT ADIDAS, SINCE 1949" tagline is orphaned.** It appears isolated above the footer with no content surrounding it — reads like a broken module.

## Recommendations

- 1. **Flip the structure.** Lead with the headline and a hero lifestyle shot of the Handball Spezial being worn, then reveal the colorway grid below.
- 2. **Add individual colorway CTAs.** Each product thumbnail should link directly to that colorway's PDP, not to a generic landing page.
- 3. **Show original + sale price.** Even a "Was $110 → $77" format materially improves click-through on promo emails.
- 4. **Punch up the copy.** Lean harder into the archival angle — the Handball Spezial has a real '70s handball origin story. Use it.
- 5. **Remove or populate the orphaned tagline module.** If it's a brand statement, give it visual context. If it's filler, cut it.
- | Priority | Issue | Action |
- |---|---|---|
- | P0 | Broken CTA — relative URL in click resolver | Replace `/g/b17b7641...` with a fully-qualified `https://` destination URL and re-test the redirect chain |
- | P1 | Plain-text body absent | Add a text/plain alternative part; minimum viable version is subject line + plain-text CTAs + unsubscribe URL |
- | P1 | 6× arrow image + tracking pixel over HTTP | Update all `image.link.adidas.com` and `click.comms.adidas.com` asset URLs to `https://` |
- | P2 | Missing `alt` on product image | Add descriptive `alt` text (e.g., `alt="Handball Spezial shoe"`); set tracking pixel to `alt=""` |
- | P2 | Authentication header unverifiable | Confirm SPF/DKIM alignment for `us-news.comms.adidas.com` with the ESP; request relay headers for verification |
- | P3 | Duplicate `@font-face` blocks | Consolidate into a single `<style>` block during template build; standardize fallback list |
- | P3 | `<meta charset>` missing `http-equiv` | Correct to `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />` |

## Full review
## Email Review: "Back to the '70s with Handball Spezial"
**From:** adidas | **Subject:** Back to the '70s with Handball Spezial

---

### 1. Executive Summary

A stripped-down product email that leads with a discount offer but fails to build any real desire for the Handball Spezial before asking for the click. The product thumbnails are small and crowded, the headline lands below the shoes rather than above them, and there's no CTA in the product section. The '70s nostalgia angle has genuine potential here — adidas has a strong story to tell — but the execution buries it at the bottom as a few lines of body copy. This email converts on the promo code, not on the product.

---

### 2. Business Impact Score: **4 / 10**

---

### 3. What's Working

- **Promo banner is clear and prominent.** "Save 30% on eligible styles with code MARCH" with a "SHOP NOW" CTA sits right at the top — hard to miss, easy to act on.
- **Colorway variety is well-represented.** Five distinct colorways (navy, burgundy, leopard print, cream, black) communicate range and justify browsing.
- **Clean, uncluttered layout.** No visual noise competing with the product.

---

### 4. What's Weak

- **Headline sequence is inverted.** "THE '70S ARE BACK" appears *below* the product grid. The story should hook first; the product grid should land after emotional context is set.
- **Product thumbnails are too small.** Five shoes in a 2-column grid renders each image at minimal size — detail is lost, especially on the leopard and white colorways where texture is the selling point.
- **No product-level CTAs.** The grid has no "Shop This Color" links or individual buttons. After the top banner, the path to purchase disappears entirely.
- **Body copy is weak.** "Versatile enough for any look" is generic filler. The '70s positioning deserves something with more identity.
- **No price anchoring.** There's no original price shown alongside the 30% discount to reinforce perceived value.
- **The "STORIES, STYLES AND SPORTSWEAR AT ADIDAS, SINCE 1949" tagline is orphaned.** It appears isolated above the footer with no content surrounding it — reads like a broken module.

---

### 5. Recommendations

1. **Flip the structure.** Lead with the headline and a hero lifestyle shot of the Handball Spezial being worn, then reveal the colorway grid below.
2. **Add individual colorway CTAs.** Each product thumbnail should link directly to that colorway's PDP, not to a generic landing page.
3. **Show original + sale price.** Even a "Was $110 → $77" format materially improves click-through on promo emails.
4. **Punch up the copy.** Lean harder into the archival angle — the Handball Spezial has a real '70s handball origin story. Use it.
5. **Remove or populate the orphaned tagline module.** If it's a brand statement, give it visual context. If it's filler, cut it.

---

### 6. Bottom Line

This email will convert bargain hunters who already know the Handball Spezial. It will not convert anyone who needs to be sold on why they want it. The nostalgia positioning is squandered by an inverted layout and a product grid that shrinks the shoes to thumbnail size. A small structural reorder and bigger images would have a meaningful impact on engagement.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Drive purchase of Handball Spezial; secondary support from 30% off MARCH code |
| **Hero / primary value prop** | No hero image; product grid functions as hero but at insufficient scale |
| **Membership / benefits** | Not present |
| **Product discoverability** | 5-colorway grid (2-col layout); no individual CTAs or labels; images too small to show material detail |
| **Utility / secondary modules** | Orphaned brand tagline above footer; footer has My Account, Privacy, Support, Unsubscribe, adidas.com/us |
| **Bugs / friction / clarity issues** | None visible (no broken images, no overlapping text); the orphaned tagline is a structural gap, not a render bug |

---

## Technical Audit

## Technical Audit — adidas "Back to the '70s with Handball Spezial"
**From:** adidas@us-news.comms.adidas.com | **Date:** 2026-03-29

---

### 1. Technical Summary

The email has one confirmed broken CTA link caused by a relative URL being passed to the click-redirect resolver. Deliverability risk is elevated due to a missing plain-text body and unverifiable DKIM/SPF status. Several images are served over HTTP, which will be blocked by modern clients.

---

### 2. Link & Tracking Issues

**[FAIL] Broken click URL — relative path passed to redirect resolver**
The QA link check returned `unknown url type: '/g/b17b7641-f438-4464-885c-f1e88242f89e?txn=...'`. The `/g/...` path is a relative URL that was passed as the destination to the `dv.adidas.com` click-redirect wrapper instead of an absolute `https://` URL. Affected redirect:
```
https://dv.adidas.com/o/b17b7641-f438-4464-885c-f1e88242f89e?cp_tp=v3.eJzjYuII...
```
This CTA will resolve to a broken or unintended page for recipients.

**[WARN] 32 tracking links not validated** — all click-throughs route through `click.comms.adidas.com`; destination URLs were not probed. The broken link above is the only confirmed failure, but destination alignment cannot be confirmed for the remaining 31.

---

### 3. Rendering & Accessibility

**[WARN] Six instances of the same image served over HTTP**
The "arrow" graphic (`b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg`) appears 6 times via:
```
http://image.link.adidas.com/lib/fe6515707c62007e7715/m/3/b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg
```
Gmail, Outlook (cached images on), and Apple Mail will block mixed-content HTTP image loads. This will produce broken image icons in a large share of clients.

**[WARN] Tracking pixel served over HTTP**
```
http://click.comms.adidas.com/CI0/0102019d35d58f64-703d861e-5ec2-46a3-89a2-1c79d4978f55-000000/...
```
Open-tracking reliability will be degraded where clients block HTTP resources.

**[WARN] Two images missing `alt` text**
- Hero/product image: `b17b7641-f438-4464-885c-f1e88242f89e` (no `alt` attribute)
- Tracking pixel: `ryjIzSsVeoo4HjhxbLfFD7Oy6...` (no `alt`, though `alt=""` is acceptable for decorative/tracking pixels)

**[INFO] Duplicate `@font-face` declarations** — `AdihausDIN` and `AdineuePRO` are declared twice across two separate `<style>` blocks with slightly differing fallback lists (`Calibri` / `Sans Serif` present in block 1, absent in block 2). No rendering failure, but the redundancy indicates a template assembly issue.

**[INFO] `<meta charset>` missing `http-equiv`** — `<meta content="text/html; charset=UTF-8" />` should be `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />` for correct handling in legacy clients using the HTML 4.01 Transitional doctype declared.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens or exposed placeholder syntax (e.g., `{{first_name}}`, `%%first_name%%`) detected in the truncated source. No issues found.

---

### 5. Compliance

**[FAIL] Plain-text multipart/alternative body missing**
QA reports 0 characters in the text version. CAN-SPAM does not strictly require a text part, but its absence increases spam-filter score and breaks accessibility for text-only clients and screen readers. Best practice (and some ESP policies) treat this as a violation.

**[WARN] SPF/DKIM/DMARC authentication status unverifiable**
The `Authentication-Results` header was not present in the captured message (expected via AgentMail relay). Sending domain `us-news.comms.adidas.com` should have aligned SPF and DKIM records; status cannot be confirmed from available data.

**[INFO]** `<meta name="ROBOTS" content="NOINDEX, NOFOLLOW" />` and `<meta name="referrer" content="no-referrer" />` are present — correct for suppressing indexing and referrer leakage from webview renders.

Unsubscribe link presence could not be confirmed from the truncated source, but the sending domain and infrastructure (Salesforce Marketing Cloud pattern) typically includes this in the footer.

---

### 6. Email-to-Site Continuity

UTM parameters cannot be inspected directly — all 32 links route through `click.comms.adidas.com` redirects, which obscure the final destination and query strings. The one confirmed broken link (`/g/b17b7641-f438-4464-885c-f1e88242f89e`) means at least one CTA lands on a broken or incorrect page, representing a direct continuity failure. All other links are unvalidated.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| P0 | Broken CTA — relative URL in click resolver | Replace `/g/b17b7641...` with a fully-qualified `https://` destination URL and re-test the redirect chain |
| P1 | Plain-text body absent | Add a text/plain alternative part; minimum viable version is subject line + plain-text CTAs + unsubscribe URL |
| P1 | 6× arrow image + tracking pixel over HTTP | Update all `image.link.adidas.com` and `click.comms.adidas.com` asset URLs to `https://` |
| P2 | Missing `alt` on product image | Add descriptive `alt` text (e.g., `alt="Handball Spezial shoe"`); set tracking pixel to `alt=""` |
| P2 | Authentication header unverifiable | Confirm SPF/DKIM alignment for `us-news.comms.adidas.com` with the ESP; request relay headers for verification |
| P3 | Duplicate `@font-face` blocks | Consolidate into a single `<style>` block during template build; standardize fallback list |
| P3 | `<meta charset>` missing `http-equiv` | Correct to `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />` |
## Recent history

- [[2026-03-29-the-messi-collection]] — 5/10 (2026-03-28)
- [[2026-03-29-test-mkg-us-na-u-best-gender-en-03292026the-styles-everyone-s-searching-for]] — 5.5/10 (2026-03-27)
- [[2026-03-29-test-mkg-us-nonpur-u-best-nonpurch-en-03292026everybody-wants-these-styles]] — 6/10 (2026-03-27)

