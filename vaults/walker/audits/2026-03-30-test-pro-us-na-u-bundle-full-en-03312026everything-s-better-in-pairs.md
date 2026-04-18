---
slug: 2026-03-30-test-pro-us-na-u-bundle-full-en-03312026everything-s-better-in-pairs
type: email
date: 2026-03-30
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: PRO_US_NA_U_BUNDLE_FULL_EN_03312026Everything's Better in Pairs"
tags: [email, score-5, sender/skechers]
---
# [Test]: PRO_US_NA_U_BUNDLE_FULL_EN_03312026Everything's Better in Pairs
**Score:** 5/10 · **Type:** Email audit · **2026-03-30**
## Executive summary

- A functional but visually underwhelming BOGO 50% off Spring Sale email. The offer is clear and prominent in the hero, but the email quickly devolves into a generic catalog layout with repetitive section headers and small, low-impact product imagery. The "Everything's Better in Pairs" concept from the subject line is entirely absent inside the email — a missed opportunity to create thematic cohesion between the offer and the creative.
- The deal is strong; the execution is mediocre. The offer communicates, but the email doesn't build desire or leverage the BOGO mechanic with any emotional or editorial lift.

## What's working

- **Hero offer is immediately legible.** "BUY ONE, GET ONE 50% OFF" in bold over the Spring Sale banner is the first thing the eye goes to — correct hierarchy.
- **Dual CTAs in the hero** ("SHOP NOW" and "FIND A STORE") appropriately serve both digital and in-store shoppers.
- **Category segmentation** (Women's, Men's, Kids') gives the email navigational utility. Each has a dedicated CTA button.
- **Footer utility is complete** — AfterPay, curbside pickup, Find a Store, app download, and social links are all present and visually organized.

## What's weak

- **The "Better in Pairs" concept disappears after the subject line.** There's no creative expression of the bundle/pairing theme inside the email — no editorial framing, no lifestyle imagery of two products together, no copy reinforcing the idea.
- **Product imagery is tiny.** Each category section shows a single small product shot. At this size they're decorative, not persuasive. Recipients can't evaluate what they're clicking toward.
- **"This Just In" module is visually buried.** Small label, ambiguous photo, weak hierarchy — it reads as an afterthought rather than a secondary promotional hook.
- **"Shop Additional Styles" text links (Women / Men / Kids / Clothing / New Arrivals / Sale)** are low-prominence plain-text navigation. They add clutter rather than value in an email context.
- **No price anchoring or product names visible.** With a BOGO offer this strong, showing an example — "Buy these $80 shoes, get another pair for $40" — would materially increase conversion intent.
- **Preheader is broken.** The preview text shows a raw URL string rather than marketing copy, which is a deliverability and first-impression problem visible before even opening.

## Recommendations

- 1. **Carry the "Better in Pairs" theme into the body.** Show two products side-by-side with copy like "Pick your pair. Pick another. Done." The concept is the campaign — use it.
- 2. **Increase product image size** or show 2–3 products per category to make the scroll feel rewarding rather than sparse.
- 3. **Add one example price pair** in or below the hero: anchor the BOGO value concretely.
- 4. **Fix the preheader.** It should be a short, punchy line that reinforces the offer — not a URL.
- 5. **Elevate "This Just In"** or remove it. If new arrivals matter enough to include, give them a real module with product tiles. If not, cut the clutter.
- 6. **Consolidate the text nav links** into the footer or remove them — they fragment attention in the middle of the email.
- | Priority | Issue | Action |
- |---|---|---|
- | P0 | `[Test]:` subject prefix | Strip before production deployment |
- | P1 | Return Path pixel — missing `https://` protocol | Fix to `https://pixel.app.returnpath.net/pixel.gif?r=...` |
- | P1 | All `image.emails.skechers.com` assets on HTTP | Update CDN base URL to `https://` or configure HTTPS on the asset host |
- | P1 | ink1000 pixel on HTTP | Update to HTTPS; confirm `mi_u` is a dynamic merge field |
- | P2 | SPF/DKIM not confirmed | Capture production `Authentication-Results` header and verify DKIM passes with `d=emails.skechers.com` |
- | P2 | 4 images missing `alt` text | Add descriptive alt for functional images; `alt=""` for decorative |
- | P2 | Krux `partner_uid=115584018` | Confirm this is a dynamic merge field, not a hardcoded test seed value |
- | P3 | `<meta>` tags missing `http-equiv` | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` |
- | P3 | UTM parameters unverifiable | Spot-check one production link via redirect trace to confirm UTM alignment |

## Full review
## 1. Executive Summary

A functional but visually underwhelming BOGO 50% off Spring Sale email. The offer is clear and prominent in the hero, but the email quickly devolves into a generic catalog layout with repetitive section headers and small, low-impact product imagery. The "Everything's Better in Pairs" concept from the subject line is entirely absent inside the email — a missed opportunity to create thematic cohesion between the offer and the creative.

---

## 2. Business Impact Score: 5/10

The deal is strong; the execution is mediocre. The offer communicates, but the email doesn't build desire or leverage the BOGO mechanic with any emotional or editorial lift.

---

## 3. What's Working

- **Hero offer is immediately legible.** "BUY ONE, GET ONE 50% OFF" in bold over the Spring Sale banner is the first thing the eye goes to — correct hierarchy.
- **Dual CTAs in the hero** ("SHOP NOW" and "FIND A STORE") appropriately serve both digital and in-store shoppers.
- **Category segmentation** (Women's, Men's, Kids') gives the email navigational utility. Each has a dedicated CTA button.
- **Footer utility is complete** — AfterPay, curbside pickup, Find a Store, app download, and social links are all present and visually organized.

---

## 4. What's Weak

- **The "Better in Pairs" concept disappears after the subject line.** There's no creative expression of the bundle/pairing theme inside the email — no editorial framing, no lifestyle imagery of two products together, no copy reinforcing the idea.
- **Product imagery is tiny.** Each category section shows a single small product shot. At this size they're decorative, not persuasive. Recipients can't evaluate what they're clicking toward.
- **"This Just In" module is visually buried.** Small label, ambiguous photo, weak hierarchy — it reads as an afterthought rather than a secondary promotional hook.
- **"Shop Additional Styles" text links (Women / Men / Kids / Clothing / New Arrivals / Sale)** are low-prominence plain-text navigation. They add clutter rather than value in an email context.
- **No price anchoring or product names visible.** With a BOGO offer this strong, showing an example — "Buy these $80 shoes, get another pair for $40" — would materially increase conversion intent.
- **Preheader is broken.** The preview text shows a raw URL string rather than marketing copy, which is a deliverability and first-impression problem visible before even opening.

---

## 5. Recommendations

1. **Carry the "Better in Pairs" theme into the body.** Show two products side-by-side with copy like "Pick your pair. Pick another. Done." The concept is the campaign — use it.
2. **Increase product image size** or show 2–3 products per category to make the scroll feel rewarding rather than sparse.
3. **Add one example price pair** in or below the hero: anchor the BOGO value concretely.
4. **Fix the preheader.** It should be a short, punchy line that reinforces the offer — not a URL.
5. **Elevate "This Just In"** or remove it. If new arrivals matter enough to include, give them a real module with product tiles. If not, cut the clutter.
6. **Consolidate the text nav links** into the footer or remove them — they fragment attention in the middle of the email.

---

## 6. Bottom Line

The BOGO 50% offer is doing the heavy lifting, but the email design lets it down. Weak creative execution, tiny product imagery, and a complete disconnect between the subject line concept and email body leave significant engagement and conversion on the table. A tighter layout with pair-focused creative and real product context would punch considerably harder.

---

## 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Drive BOGO 50% Spring Sale purchases online and in-store |
| **Hero / primary value prop** | "Spring Sale — Buy One, Get One 50% Off" — prominent, well-placed, dual CTA |
| **Membership / benefits** | Not present — no loyalty or ADIClub-style module |
| **Product discoverability** | Women's / Men's / Kids' sections each have one small product image and a shop CTA; minimal discovery value |
| **"This Just In" module** | Present but small and visually weak; unclear what product or category it promotes |
| **Utility / secondary modules** | "Shop Additional Styles" text links, AfterPay, curbside pickup, Find a Store, app download, social icons — all visible and functional |
| **Bugs / friction** | Preheader renders as a raw URL instead of copy — visible in the preview line before open |

---

## Technical Audit

## Technical Audit — PRO_US_NA_U_BUNDLE_FULL_EN_03312026 / "Everything's Better in Pairs"

---

### 1. Technical Summary

A BOGO bundle promotional email with systemic HTTP (non-HTTPS) image sourcing across 14+ assets and a broken Return Path seed pixel. SPF/DKIM authentication status is unverifiable from available headers, and the `[Test]:` subject prefix is a deployment risk if not stripped pre-send.

---

### 2. Link & Tracking Issues

**Return Path seed pixel — broken URL (no protocol)**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" />
```
Missing `https://` prefix entirely. This resolves as a relative path, not an absolute URL — the pixel will not fire and inbox placement monitoring via Return Path will be blind for this send.

**ink1000.com tracking pixel — HTTP**
```html
<img src="http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8104607450&mi_ecmp=PRO_US_NA_U_BUNDLE_FULL_EN_03312026" />
```
Unencrypted HTTP pixel. Will be blocked in Gmail, Outlook (image proxy), and most modern clients. Also missing `alt=""`.

**26 click-redirect links** — all routed through `click.emails.skechers.com` with encrypted `qs=` payloads. UTM parameters are not directly inspectable (see §6). Skipped by QA probe — not a defect, but noted.

**Krux DMP beacons — hardcoded subscriber ID**
```html
partner_uid=115584018
```
The `_subid` variant carries what appears to be a subscriber/seed ID. Confirm this is dynamically populated via merge field in production and not a hardcoded test value baked into the template.

---

### 3. Rendering & Accessibility

**`<meta>` tags missing required `http-equiv` attribute**
```html
<meta content="text/html; charset=utf-8" />       <!-- missing http-equiv="Content-Type" -->
<meta content="IE=Edge" />                          <!-- missing http-equiv="X-UA-Compatible" -->
```
Both tags are malformed — `content` without `http-equiv` is inert. Charset declaration will not be read by some parsers; IE compatibility directive is entirely non-functional. Low practical risk in modern clients, but technically incorrect per spec.

**14 images served over HTTP** — the entire `image.emails.skechers.com` asset library is HTTP-sourced:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-...png   (logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  (App Store)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...png  (Google Play)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/b782e0aa-...png  (Instagram)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/d76a5487-...png  (Twitter)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/a5c4cae0-...png  (Facebook)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/573ab181-...png  (Pinterest)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/8c5738fc-...png  (YouTube)
... + 5 additional unlabeled assets
```
Gmail proxies all images through its own HTTPS proxy, which mitigates the risk there, but Outlook desktop and Apple Mail do not — images may render broken or trigger mixed-content warnings for those clients.

**4 images missing `alt` text** (confirmed by QA):
- `o.gif` (ink1000 pixel) — tracking pixel, `alt=""` acceptable but absent
- `49468f73-...png` — unknown content, no alt
- `00100b23-...png` — unknown content, no alt
- `fc08601a-...png` — unknown content, no alt

Decorative images should carry `alt=""` explicitly; functional images (product, CTA) require descriptive alt text for screen reader compliance and image-off rendering.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (`%%`, `{{`, `[[`) visible in the truncated HTML source. Preheader text ("BOGO 50% off your second pair") is hardcoded — acceptable for a broadcast offer but not personalized.

The `mi_u=8104607450` parameter in the ink1000 pixel appears to be a hardcoded subscriber ID — verify this is dynamically substituted in production sends.

---

### 5. Compliance

**Subject line contains `[Test]:` prefix**
```
Subject: [Test]: PRO_US_NA_U_BUNDLE_FULL_EN_03312026Everything's Better in Pairs
```
This is a test deployment. If sent to a live list with this subject, it violates brand standards and may confuse recipients. The campaign code is also concatenated into the subject with no delimiter before "Everything's Better in Pairs" — confirm the production subject is clean.

**SPF/DKIM — unverifiable**
`Authentication-Results` header not present in the QA relay capture. Cannot confirm DKIM signing by `emails.skechers.com` or SPF alignment. This should be verified against a production header capture before deployment.

**CAN-SPAM** — physical postal address and unsubscribe mechanism are standard for Skechers templates; not contradicted by available source. Full compliance confirmation requires viewing the footer (truncated in provided source).

---

### 6. Email-to-Site Continuity

All destination URLs are wrapped in `click.emails.skechers.com/?qs=` encrypted redirects, preventing direct UTM inspection. The campaign identifier `PRO_US_NA_U_BUNDLE_FULL_EN_03312026` is present in:
- The Krux ad impression beacon (`campaignid=PRO_US_NA_U_BUNDLE_FULL_EN_03312026`)
- The ink1000 pixel (`mi_ecmp=PRO_US_NA_U_BUNDLE_FULL_EN_03312026`)

UTM parameter correctness on landing page URLs must be verified by decoding one sample redirect or clicking through in a staging environment to confirm `utm_campaign`, `utm_source`, and `utm_medium` values are populated and consistent with the campaign ID.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| P0 | `[Test]:` subject prefix | Strip before production deployment |
| P1 | Return Path pixel — missing `https://` protocol | Fix to `https://pixel.app.returnpath.net/pixel.gif?r=...` |
| P1 | All `image.emails.skechers.com` assets on HTTP | Update CDN base URL to `https://` or configure HTTPS on the asset host |
| P1 | ink1000 pixel on HTTP | Update to HTTPS; confirm `mi_u` is a dynamic merge field |
| P2 | SPF/DKIM not confirmed | Capture production `Authentication-Results` header and verify DKIM passes with `d=emails.skechers.com` |
| P2 | 4 images missing `alt` text | Add descriptive alt for functional images; `alt=""` for decorative |
| P2 | Krux `partner_uid=115584018` | Confirm this is a dynamic merge field, not a hardcoded test seed value |
| P3 | `<meta>` tags missing `http-equiv` | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` |
| P3 | UTM parameters unverifiable | Spot-check one production link via redirect trace to confirm UTM alignment |
## Recent history

- [[2026-04-01-test-pro-us-retpur-u-bundle-retail-en-03312026-bget-more-pairs-for-less]] — 5/10 (2026-03-30)
- [[2026-04-01-test-pro-us-retpur-u-bundle-retail-en-03312026-aget-more-pairs-for-less]] — 5/10 (2026-03-30)
- [[2026-03-30-test-pro-us-nonpur-u-bundle-nonpurch-en-03312026why-start-with-one-pair-when-you]] — 6/10 (2026-03-30)

