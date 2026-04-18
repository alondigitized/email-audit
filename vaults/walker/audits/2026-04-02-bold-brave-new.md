---
slug: 2026-04-02-bold-brave-new
type: email
date: 2026-04-02
persona: walker
score: "5/10"
sender: adidas
subject: Bold. Brave. New.
tags: [email, score-5, sender/adidas]
---
# Bold. Brave. New.
**Score:** 5/10 · **Type:** Email audit · **2026-04-02**
## Executive summary

- This is a brand-editorial email announcing the adidas x Audi Revolt F1 Team collection. The creative is clean and the F1 positioning is compelling, but the email is almost entirely devoid of commercial infrastructure — no product tiles, no pricing, no inline CTAs tied to the collection. It reads like a press release wrapped in brand photography. The sole "Shop Now" button is buried in a top banner that's thematically disconnected from the F1 launch content below it. A subscriber who wants to buy after reading this has nowhere obvious to go.
- Strong brand moment, weak conversion engine.

## What's working

- **Hero photography is premium.** The three-person podium shot in Audi F1 gear is confident and on-brand. The image commands attention.
- **Headline copy lands.** "COMING FOR THE PODIUM" is punchy and contextually appropriate — no ambiguity about the storyline.
- **Second image carries the momentum.** The solo athlete shot in the sand/cream colorway contrasts well with the dark hero and keeps the scroll going.
- **Brand voice is consistent.** "Bold. Brave. New." as subject line aligns with the editorial tone throughout.

## What's weak

- **Zero collection CTAs below the fold.** After two compelling images and two paragraphs of copy, there is no button or link directing the reader to shop the Audi Revolt collection. The email ends with a tagline. That's a full conversion gap.
- **The top banner is a non-sequitur.** "Explore the latest adidas best sellers — SHOP NOW" drops the reader into generic best-sellers before they've even seen the F1 launch. It dilutes the premium positioning of the collection announcement immediately.
- **No product discoverability.** No tiles, no individual product callouts, no prices. A subscriber cannot learn what's in the collection or what it costs from this email alone.
- **"READY TO TAKEOVER" is a grammatical error.** Should read "READY TO TAKE OVER" — visible to every reader, undermines the premium tone.
- **Body copy is vague.** "Future classics," "upset the balance," "heralds in a bold new era" — this is aspirational filler. It tells the reader nothing concrete about the collection (silhouettes, price point, availability).
- **Social proof hook goes unused.** The "13.4k others" label at the top is a missed social proof signal — it goes nowhere and has no functional role in the email.

## Recommendations

- 1. **Add a dedicated collection CTA** below each content block — "Shop the Audi Revolt Collection" — linked directly to the collection landing page. This is non-negotiable for a launch email.
- 2. **Remove or relocate the best-sellers banner.** It cannibalizes the F1 announcement's premium feel at first glance. If cross-sell is needed, put it in the footer, not above the hero.
- 3. **Fix "READY TO TAKEOVER" → "READY TO TAKE OVER."** Simple copy error, high visibility.
- 4. **Add 2–3 product tiles** mid-email: jersey, jacket, at minimum. Show the product, show the price. Give the reader a reason to click beyond brand sentiment.
- 5. **Sharpen the body copy.** Replace vague brand-speak with specifics: what's in the collection, when it drops, whether it's limited.
- | Priority | Issue | Fix |
- |----------|-------|-----|
- | P0 | Broken link (`/g/de020a12...`) | Resolve relative URL to absolute before send; verify CTA destination resolves |
- | P0 | Plain-text body is empty | Generate a stripped-text multipart alternative (min ~200 chars) |
- | P1 | HTTP image sources (5 instances) | Change `http://image.link.adidas.com/...` and `http://click.comms.adidas.com/...` to `https://` |
- | P1 | SPF/DKIM unverifiable | Confirm DKIM record is published for `us-news.comms.adidas.com` and passes in a seed test before next send |
- | P2 | Missing alt text (2 images) | Add descriptive `alt=""` (or empty string for decorative) to both flagged images |
- | P3 | Duplicate `@font-face` blocks | Deduplicate the two `<style>` font declarations |
- | P3 | Malformed charset meta | Add `http-equiv="Content-Type"` attribute |

## Full review
### 1. Executive Summary

This is a brand-editorial email announcing the adidas x Audi Revolt F1 Team collection. The creative is clean and the F1 positioning is compelling, but the email is almost entirely devoid of commercial infrastructure — no product tiles, no pricing, no inline CTAs tied to the collection. It reads like a press release wrapped in brand photography. The sole "Shop Now" button is buried in a top banner that's thematically disconnected from the F1 launch content below it. A subscriber who wants to buy after reading this has nowhere obvious to go.

---

### 2. Business Impact Score: **5 / 10**

Strong brand moment, weak conversion engine.

---

### 3. What's Working

- **Hero photography is premium.** The three-person podium shot in Audi F1 gear is confident and on-brand. The image commands attention.
- **Headline copy lands.** "COMING FOR THE PODIUM" is punchy and contextually appropriate — no ambiguity about the storyline.
- **Second image carries the momentum.** The solo athlete shot in the sand/cream colorway contrasts well with the dark hero and keeps the scroll going.
- **Brand voice is consistent.** "Bold. Brave. New." as subject line aligns with the editorial tone throughout.

---

### 4. What's Weak

- **Zero collection CTAs below the fold.** After two compelling images and two paragraphs of copy, there is no button or link directing the reader to shop the Audi Revolt collection. The email ends with a tagline. That's a full conversion gap.
- **The top banner is a non-sequitur.** "Explore the latest adidas best sellers — SHOP NOW" drops the reader into generic best-sellers before they've even seen the F1 launch. It dilutes the premium positioning of the collection announcement immediately.
- **No product discoverability.** No tiles, no individual product callouts, no prices. A subscriber cannot learn what's in the collection or what it costs from this email alone.
- **"READY TO TAKEOVER" is a grammatical error.** Should read "READY TO TAKE OVER" — visible to every reader, undermines the premium tone.
- **Body copy is vague.** "Future classics," "upset the balance," "heralds in a bold new era" — this is aspirational filler. It tells the reader nothing concrete about the collection (silhouettes, price point, availability).
- **Social proof hook goes unused.** The "13.4k others" label at the top is a missed social proof signal — it goes nowhere and has no functional role in the email.

---

### 5. Recommendations

1. **Add a dedicated collection CTA** below each content block — "Shop the Audi Revolt Collection" — linked directly to the collection landing page. This is non-negotiable for a launch email.
2. **Remove or relocate the best-sellers banner.** It cannibalizes the F1 announcement's premium feel at first glance. If cross-sell is needed, put it in the footer, not above the hero.
3. **Fix "READY TO TAKEOVER" → "READY TO TAKE OVER."** Simple copy error, high visibility.
4. **Add 2–3 product tiles** mid-email: jersey, jacket, at minimum. Show the product, show the price. Give the reader a reason to click beyond brand sentiment.
5. **Sharpen the body copy.** Replace vague brand-speak with specifics: what's in the collection, when it drops, whether it's limited.

---

### 6. Bottom Line

Adidas is sitting on a genuinely exciting brand story — a new F1 team, a premium collaboration, strong creative assets — and then sending subscribers home with no way to act on it. The email generates awareness but abandons the conversion entirely. One CTA button and a product module would meaningfully change the performance of this send.

---

### 7. Evidence

**Overall purpose:** Launch announcement for the adidas x Audi Revolt F1 Team fanwear collection.

**Hero / primary value proposition:** Three F1 team members in full kit, headline "COMING FOR THE PODIUM." Strong visual entry, but no CTA is paired with it.

**Membership / benefits section:** None visible.

**Product discoverability / recommendation modules:** None visible. No product tiles, no SKUs, no pricing anywhere in the email body.

**Utility / secondary modules:** Top banner ("Explore the latest adidas best sellers — SHOP NOW") functions as the only active commercial module, but it's thematically misaligned with the F1 launch content. Footer includes standard links: My Account, Privacy Statement, Support, Unsubscribe, adidas.com/us.

**Bugs / friction / clarity issues:**
- "READY TO TAKEOVER" — grammatical error visible in the second section headline.
- No CTA buttons tied to the F1 collection anywhere in the main email body — a structural gap, not a rendering bug.
- The "13.4k others" label in the header appears orphaned — no context or action attached to it.

---

## Technical Audit

## Technical Audit — adidas "Bold. Brave. New." (2026-04-02)

---

### 1. Technical Summary

Two hard failures: a broken product link and a missing plain-text body. Five additional warnings cover HTTP image sources and missing alt attributes, which affect rendering in security-strict clients and screen reader accessibility.

---

### 2. Link & Tracking Issues

**[FAIL] Malformed link — broken URL type**

The QA probe flagged `unknown url type` for:
```
/g/de020a12-f506-4a6d-ba76-f53ae0dec709?txn=9b459300-2e9c-11f1-8f22-8668c83b363d
```
This is a relative path that was not resolved to an absolute URL before send. The wrapping redirect URL (`https://dv.adidas.com/o/de020a12...`) is valid, but the inner destination is malformed — clicks on this CTA will 404 or error.

**[INFO] 24 tracking links** use click-redirect domains and were not HTTP-probed. Destination validity for these CTAs is unverified.

---

### 3. Rendering & Accessibility

**[WARN] HTTP image sources (not HTTPS) — may be blocked**

The arrow icon is loaded 4× via plain HTTP:
```
http://image.link.adidas.com/lib/fe6515707c62007e7715/m/3/b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg
```
Gmail, Outlook.com, and Apple Mail all proxy or block mixed-content HTTP image loads. This image will be invisible in those clients.

The tracking pixel is also HTTP:
```
http://click.comms.adidas.com/CI0/0102019d4e7fa4bb-c4f0671d-1e57-4f91-b211-91fe96a5f163-000000/...
```
Open tracking will undercount in clients that block HTTP resources.

**[WARN] Missing alt text on 2 images**

- `de020a12-f506-4a6d-ba76-f53ae0dec709` (product/hero image via `dv.adidas.com`)
- `NJ5cJu1R32Qcii28q19L__aJDRwrlSavm65GT8G91FU=451` (tracking pixel via `click.comms.adidas.com`)

Images-off rendering and screen readers receive no description for either.

**[INFO] Malformed charset meta tag**

```html
<meta content="text/html; charset=UTF-8" />
```
Missing `http-equiv="Content-Type"`. Correct form:
```html
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
```
Most clients are tolerant, but this is technically invalid HTML 4.01.

**[INFO] Duplicate `@font-face` declarations**

`AdihausDIN` and `AdineuePRO` are each declared twice across two separate `<style>` blocks with identical `src` values. No functional breakage, but adds ~1 KB of dead CSS.

---

### 4. Personalization & Merge Tokens

No issues found. No unresolved `{{token}}` or `%%token%%` patterns visible in the provided source.

---

### 5. Compliance

**[FAIL] Plain-text fallback absent**

QA reports text version is 0 characters. CAN-SPAM and most ESP policies require a multipart/alternative text body. This is also a deliverability signal — spam filters treat HTML-only messages as higher risk.

**[WARN] Authentication-Results header not present**

SPF/DKIM validation status could not be confirmed via the AgentMail relay. Sending domain is `us-news.comms.adidas.com` (Salesforce Marketing Cloud). If DKIM is misconfigured on this subdomain, inbox placement is at risk.

---

### 6. Email-to-Site Continuity

The broken inner URL (`/g/de020a12...`) defeats tracking for that specific CTA — any click revenue attribution is lost regardless of UTM presence in the outer redirect.

For the 24 functioning tracking links, UTM-equivalent parameters (`cp_tp`, `cp_cid`, `mi_cid`, `mi_mid`) are present in the encoded redirect payloads. Full landing page UTM mapping could not be verified without probing the destinations.

---

### 7. Recommendations

| Priority | Issue | Fix |
|----------|-------|-----|
| P0 | Broken link (`/g/de020a12...`) | Resolve relative URL to absolute before send; verify CTA destination resolves |
| P0 | Plain-text body is empty | Generate a stripped-text multipart alternative (min ~200 chars) |
| P1 | HTTP image sources (5 instances) | Change `http://image.link.adidas.com/...` and `http://click.comms.adidas.com/...` to `https://` |
| P1 | SPF/DKIM unverifiable | Confirm DKIM record is published for `us-news.comms.adidas.com` and passes in a seed test before next send |
| P2 | Missing alt text (2 images) | Add descriptive `alt=""` (or empty string for decorative) to both flagged images |
| P3 | Duplicate `@font-face` blocks | Deduplicate the two `<style>` font declarations |
| P3 | Malformed charset meta | Add `http-equiv="Content-Type"` attribute |
## Recent history

- [[2026-04-02-your-items-are-waiting]] — 6/10 (2026-04-02)
- [[2026-04-01-test-ret-us-na-u-store1423-zip-en-04022026celebrate-our-birthday-in-ridgewood]] — 6/10 (2026-04-01)
- [[2026-04-01-test-mkg-us-ecmpur-u-arch-ecom-en-04032026-ayour-go-to-arch-fit-upgraded]] — 5/10 (2026-04-01)

