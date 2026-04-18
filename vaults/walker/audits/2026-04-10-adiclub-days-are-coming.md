---
slug: 2026-04-10-adiclub-days-are-coming
type: email
date: 2026-04-10
persona: walker
score: "6/10"
sender: adidas
subject: adiClub Days are coming
tags: [email, score-6, sender/adidas]
---
# adiClub Days are coming
**Score:** 6/10 · **Type:** Email audit · **2026-04-10**
## Executive summary

- A loyalist-targeted adiClub newsletter announcing an upcoming adiClub Days sale event. The email leads with a strong discount hook ("Members Get Up to 40% Off"), layers in a points-earning incentive, and builds anticipation with a countdown teaser. The structure is logical but the execution is passive — heavy on awareness, light on urgency mechanics that would actually drive action before the event starts. The email primes but doesn't punch.
- Solid foundation for a pre-event announcement. Loses points for weak urgency signaling, a thin CTA strategy, and a final countdown module that teases without delivering a real hook.

## What's working

- **The discount headline lands immediately.** "Members Get Up to 40% Off" is the right value prop in the right position. No ambiguity, no burying the lede.
- **Double Points is a meaningful differentiator.** It adds a second reason to act beyond the discount, which is valuable for members who are already engaged with the points system.
- **Visual hierarchy is clean.** The newsletter flows from brand block → discount hook → earn mechanic → countdown teaser. Each section has its own visual weight without chaos.
- **"adiClub Days Countdown" creates anticipation.** The naming is branded and the section does the job of signaling that something is coming.

## What's weak

- **No countdown timer or specific date visible.** The countdown headline promises urgency but the body appears to deliver prose, not an actual date or clock mechanism. If the event date isn't surfaced prominently, the tease has no teeth.
- **CTAs are underpowered.** "Shop Now" (on the Double Points module) is present but appears small. The overall email doesn't have a dominant, repeated CTA driving to a dedicated landing page or campaign hub.
- **The footer is dense text.** Legal copy at the bottom is visually heavy and runs long — a common issue that clutters the close of the email and dilutes the final impression.
- **Hero image reads as generic lifestyle.** The group outdoor photo doesn't feel specific to adiClub Days as an event. There's no visual identity for the sale itself — no badge, no custom treatment that makes this feel like a distinct branded moment.
- **The "Stories, Styles and Sportswear" line near the bottom is a category dump.** It doesn't serve this email's goal. It reads like filler or a remnant from a template.

## Recommendations

- 1. **Surface a specific date or countdown.** The word "countdown" means nothing without a number. Add "Starts April 14" or an actual date callout in the Countdown module.
- 2. **Add a primary CTA above the fold.** Drop a button directly under the 40% Off headline — something like "Preview Member Deals" or "Explore adiClub Days."
- 3. **Give adiClub Days a visual identity.** Create a lockup or badge specific to the event. Right now the hero looks like any adidas email, not an event announcement.
- 4. **Remove or minimize the "Stories, Styles and Sportswear" section.** It dilutes focus. This email has one job: prime members for adiClub Days. Side content pulls attention away.
- 5. **Trim footer legal copy** or collapse it — it's visually overwhelming relative to the rest of the email's clean layout.
- | Priority | Issue | Action |
- |----------|-------|--------|
- | **Critical** | Broken `/g/` redirect link on hero image | Fix the link template — confirm `/g/` vs `/o/` path in the ESP redirect config before send |
- | **Critical** | Plain-text fallback is empty | Generate a minimal text version with key CTAs and unsubscribe URL |
- | **High** | 4 HTTP arrow images + 1 HTTP tracking pixel | Update all `src` values to `https://` equivalents |
- | **High** | Hero image missing alt text | Add descriptive `alt` to the hero; use `alt=""` on the tracking pixel |
- | **Medium** | Missing `http-equiv` on charset meta | Add `http-equiv="Content-Type"` to the meta tag |
- | **Medium** | Duplicate `@font-face` blocks | Consolidate into one `<style>` block with a single set of declarations |
- | **Medium** | Authentication headers unverifiable | Confirm SPF/DKIM/DMARC alignment on `us-news.comms.adidas.com` |
- | **Low** | UTM attribution gap | Confirm server-side mapping from adidas internal params to analytics dimensions |

## Full review
## Email Review: adidas — "adiClub Days Are Coming"

---

### 1. Executive Summary

A loyalist-targeted adiClub newsletter announcing an upcoming adiClub Days sale event. The email leads with a strong discount hook ("Members Get Up to 40% Off"), layers in a points-earning incentive, and builds anticipation with a countdown teaser. The structure is logical but the execution is passive — heavy on awareness, light on urgency mechanics that would actually drive action before the event starts. The email primes but doesn't punch.

---

### 2. Business Impact Score: **6 / 10**

Solid foundation for a pre-event announcement. Loses points for weak urgency signaling, a thin CTA strategy, and a final countdown module that teases without delivering a real hook.

---

### 3. What's Working

- **The discount headline lands immediately.** "Members Get Up to 40% Off" is the right value prop in the right position. No ambiguity, no burying the lede.
- **Double Points is a meaningful differentiator.** It adds a second reason to act beyond the discount, which is valuable for members who are already engaged with the points system.
- **Visual hierarchy is clean.** The newsletter flows from brand block → discount hook → earn mechanic → countdown teaser. Each section has its own visual weight without chaos.
- **"adiClub Days Countdown" creates anticipation.** The naming is branded and the section does the job of signaling that something is coming.

---

### 4. What's Weak

- **No countdown timer or specific date visible.** The countdown headline promises urgency but the body appears to deliver prose, not an actual date or clock mechanism. If the event date isn't surfaced prominently, the tease has no teeth.
- **CTAs are underpowered.** "Shop Now" (on the Double Points module) is present but appears small. The overall email doesn't have a dominant, repeated CTA driving to a dedicated landing page or campaign hub.
- **The footer is dense text.** Legal copy at the bottom is visually heavy and runs long — a common issue that clutters the close of the email and dilutes the final impression.
- **Hero image reads as generic lifestyle.** The group outdoor photo doesn't feel specific to adiClub Days as an event. There's no visual identity for the sale itself — no badge, no custom treatment that makes this feel like a distinct branded moment.
- **The "Stories, Styles and Sportswear" line near the bottom is a category dump.** It doesn't serve this email's goal. It reads like filler or a remnant from a template.

---

### 5. Recommendations

1. **Surface a specific date or countdown.** The word "countdown" means nothing without a number. Add "Starts April 14" or an actual date callout in the Countdown module.
2. **Add a primary CTA above the fold.** Drop a button directly under the 40% Off headline — something like "Preview Member Deals" or "Explore adiClub Days."
3. **Give adiClub Days a visual identity.** Create a lockup or badge specific to the event. Right now the hero looks like any adidas email, not an event announcement.
4. **Remove or minimize the "Stories, Styles and Sportswear" section.** It dilutes focus. This email has one job: prime members for adiClub Days. Side content pulls attention away.
5. **Trim footer legal copy** or collapse it — it's visually overwhelming relative to the rest of the email's clean layout.

---

### 6. Bottom Line

This email does the basics right — clear benefit, logical structure, relevant audience. But it misses the opportunity to feel like an event. adiClub Days should feel special; this reads like a newsletter that happens to mention it. Sharpen the urgency, give the event a visual identity, and make the CTA unavoidable.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Pre-event announcement email for adiClub Days sale targeting adiClub members |
| **Hero / primary value prop** | Group lifestyle photo with "Members Get More" brand statement; discount headline ("Members Get Up to 40% Off") immediately below |
| **Membership / benefits section** | "Earn Double Points" module with supporting image and body copy; "Shop Now" CTA present but small |
| **Product discoverability** | No product grid or product recommendation module visible — this is purely a brand/event awareness email |
| **Utility / secondary modules** | "adiClub Days Countdown" module with body copy but no visible date or timer; "Stories, Styles and Sportswear at adidas" tagline with minimal content |
| **Bugs / friction** | No visible broken images or overlapping text. Footer legal block is dense and long but renders cleanly. No visible empty fields or broken rendering artifacts. |

---

## Technical Audit

## Technical Audit — adidas "adiClub Days are coming"
**From:** adidas <adidas@us-news.comms.adidas.com>

---

### 1. Technical Summary

The email has two hard failures: a broken click-through link and a completely absent plain-text alternative. Several images are served over HTTP and lack alt text, and authentication header data was unavailable for verification. 62% QA pass rate.

---

### 2. Link & Tracking Issues

**[FAIL] Broken destination link**
The QA probe reported `unknown url type: '/g/b476192e-decd-4cfb-ae62-0cd6abce6073?txn=ba31ce00-3509-11f1-9e3f-ae5aeed300aa'` — a relative-style `/g/` path that could not be resolved. The wrapped URL resolves to:
```
https://dv.adidas.com/o/b476192e-decd-4cfb-ae62-0cd6abce6073?cp_tp=v3...
```
The mismatch between the `/g/` path in the `txn`-param href and the `/o/` path on the resolved destination suggests a broken redirect rule or mis-generated link in the ESP template. This link likely leads to a dead or incorrect page for recipients.

**[WARN] 26 tracking redirects not probed**
All click links pass through `click.comms.adidas.com`. Destination health could not be confirmed programmatically. Manual spot-check of final destinations is recommended pre-send.

---

### 3. Rendering & Accessibility

**[WARN] Missing `http-equiv` on charset meta**
```html
<meta content="text/html; charset=UTF-8" />
```
The `http-equiv="Content-Type"` attribute is absent. Some older clients (Outlook, legacy Android) rely on this for correct character encoding. Should be:
```html
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
```

**[WARN] Duplicate `@font-face` declarations**
`AdihausDIN` and `AdineuePRO` are declared twice across two separate `<style>` blocks with inconsistent fallback lists (first block adds `local('Calibri'), local('Sans Serif')`; second does not). The latter declaration takes precedence, making the first block dead code. Consolidate into a single declaration.

**[WARN] 5 images served over HTTP**
All instances are the same arrow icon repeated 4 times plus one tracking pixel:
- `http://image.link.adidas.com/lib/fe6515707c62007e7715/m/3/b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg` (×4)
- `http://click.comms.adidas.com/CI0/0102019d789d3245-77cf9792-ff70-40e8-943a-6f56ad15fced-000000/...` (tracking pixel)

Gmail and Outlook.com enforce HTTPS for externally loaded images; HTTP sources are blocked or proxied, causing broken image renders.

**[WARN] 2 images missing alt text**
- Hero image: `b476192e-decd-4cfb-ae62-0cd6abce6073` (the broken-link image above — doubly impactful)
- Tracking pixel: `QW_GVxkfiOya1WRaTO3jNvd6YWSB4pVWzA0ZlxE2GbQ=452`

Screen readers will skip these silently. The hero image missing alt text combined with the broken link creates a fully broken experience for image-blocked and assistive-technology users.

---

### 4. Personalization & Merge Tokens

No unresolved or exposed merge tokens visible in the truncated HTML source. Cannot fully verify from truncated source — confirm no `%%`, `{{`, or `[%` tokens appear unfilled in the deployed version.

---

### 5. Compliance

**[FAIL] Plain-text alternative is 0 characters**
The text/plain MIME part is empty. CAN-SPAM does not mandate a text part, but major ISPs (Gmail, Yahoo) use its absence as a spam signal, and accessibility best practice requires it. WCAG and M3AAWG both recommend a substantive plain-text fallback.

**[WARN] Authentication-Results header not available**
SPF and DKIM pass/fail status could not be confirmed via the AgentMail relay. Verify that:
- SPF: `us-news.comms.adidas.com` is included in adidas's SPF record
- DKIM: `d=comms.adidas.com` (or equivalent) signature is present and valid
- DMARC policy is published and aligned

Physical mailing address and unsubscribe mechanism are expected in the footer (not visible in truncated source) — confirm both are present in the full render.

---

### 6. Email-to-Site Continuity

The broken `/g/`-path link (section 2) means at least one CTA does not reach its intended destination. Tracking parameters on the working links use adidas-internal params (`cp_tp`, `cp_cid`, `mi_cid`, `mi_mid`) rather than standard UTM params — this is consistent with their ESP setup, but means web analytics platforms that rely on `utm_source/utm_campaign` will not attribute traffic from this send correctly unless server-side mapping is in place.

---

### 7. Recommendations

| Priority | Issue | Action |
|----------|-------|--------|
| **Critical** | Broken `/g/` redirect link on hero image | Fix the link template — confirm `/g/` vs `/o/` path in the ESP redirect config before send |
| **Critical** | Plain-text fallback is empty | Generate a minimal text version with key CTAs and unsubscribe URL |
| **High** | 4 HTTP arrow images + 1 HTTP tracking pixel | Update all `src` values to `https://` equivalents |
| **High** | Hero image missing alt text | Add descriptive `alt` to the hero; use `alt=""` on the tracking pixel |
| **Medium** | Missing `http-equiv` on charset meta | Add `http-equiv="Content-Type"` to the meta tag |
| **Medium** | Duplicate `@font-face` blocks | Consolidate into one `<style>` block with a single set of declarations |
| **Medium** | Authentication headers unverifiable | Confirm SPF/DKIM/DMARC alignment on `us-news.comms.adidas.com` |
| **Low** | UTM attribution gap | Confirm server-side mapping from adidas internal params to analytics dimensions |
## Recent history

- [[2026-04-10-test-mkg-us-na-u-bobs-prod-en-04112026feel-good-styles-for-you-them]] — 5/10 (2026-04-10)
- [[2026-04-10-test-ret-us-na-u-store1423-zip-en-04102026-v2sale-ends-soon-celebrate-our-birthd]] — 6/10 (2026-04-10)
- [[2026-04-10-your-perfect-first-pair-is-here]] — 5/10 (2026-04-10)

