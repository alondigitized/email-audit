---
slug: 2026-04-07-shop-adizero-evo-sl-running-shoes
type: email
date: 2026-04-07
persona: walker
score: "6/10"
sender: adidas
subject: Shop Adizero Evo SL running shoes
tags: [email, score-6, sender/adidas]
---
# Shop Adizero Evo SL running shoes
**Score:** 6/10 · **Type:** Email audit · **2026-04-07**
## Executive summary

- A lean, performance-focused email built around the Adizero Evo SL launch. The creative is strong — action photography, clean typography, and a tight product grid — but the email is undermined by a visible character encoding bug in a key secondary headline. The Spotify Premium cross-promotion is a genuinely interesting value-add but lands awkwardly as a near-equal visual weight to the primary product push.

## What's working

- **Hero photography is sharp.** Two runners in motion, product on foot, high contrast — communicates performance without needing much copy.
- **Product grid is functional.** The 2x2 lifestyle grid shows the shoe across multiple contexts and complements the hero well.
- **Layout discipline.** The email doesn't overstuff. Each section has breathing room and a clear job to do.
- **Spotify partnership is differentiated.** Cross-brand offers in running emails are rare and can earn opens on their own. The concept is right.

## What's weak

- **Encoding bug in the Spotify headline — visible and bad.** The secondary section reads "RUN WITHOUT LIMITS â€" GET SPOTIFY PREMIUM" with garbled characters where the em dash should be. This is live in the render and degrades trust immediately.
- **CTA hierarchy is unclear.** The email has two distinct value propositions (buy shoes, get Spotify) with no visual signal that one outranks the other. The recipient has to decide which thing they're being asked to do.
- **Body copy is small and dense.** The intro paragraph below the hero is hard to read at a glance. It may say something important but it won't get read.
- **The Spotify module feels bolted on.** There's no visible transition or connective tissue between "buy this shoe" and "get Spotify Premium." The editorial logic isn't communicated.

## Recommendations

- 1. **Fix the encoding bug now.** The garbled em dash in the Spotify headline needs a resend or a correction. This is the top priority.
- 2. **Make the Spotify offer feel earned.** Add a single line of copy explaining the connection — e.g., "Every Adizero Evo SL purchase includes 3 months of Spotify Premium." Right now the pairing looks accidental.
- 3. **Elevate one primary CTA.** Either the shoe or the Spotify offer should be the clear hero. If Spotify is secondary, shrink it and push it below a prominent shoe CTA.
- 4. **Increase intro copy size or cut it.** If the body copy under the hero headline can't be skimmed in 3 seconds, it should be shorter or larger — not both small and long.
- 5. **Add a price anchor.** No price or urgency signal is visible anywhere. For a performance launch email, even a "Starting at $X" line gives the recipient a reason to click now vs. later.
- | Priority | Issue | Action |
- |----------|-------|--------|
- | **P0** | Store-locator link doubled-domain defect | Re-wrap the AppsFlyer URL through the SFMC click-tracker correctly — the inner URL must be URL-encoded as a single parameter, not concatenated into the path |
- | **P0** | Relative URL on dynamic content block (`d53c4f08`) | Confirm the merge token or dynamic content rule that generates this `href`; ensure the base domain (`https://www.adidas.com`) is prepended before send |
- | **P1** | Arrow image HTTP → HTTPS (`b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg`) | Update asset CDN reference to `https://image.link.adidas.com/...` across all 8 instances |
- | **P1** | Plain-text fallback absent | Add a meaningful `text/plain` MIME part (even a condensed version of the email body + key links) |
- | **P2** | Missing `alt` on dv.adidas.com image block | Add descriptive `alt` text to the dynamic content image |
- | **P2** | Duplicate `@font-face` declarations | Consolidate into a single `<style>` block |
- | **P3** | Authentication-Results not verified | Confirm SPF/DKIM alignment for `us-news.comms.adidas.com` in production send headers |

## Full review
## adidas — "Shop Adizero Evo SL Running Shoes"

---

### 1. Executive Summary

A lean, performance-focused email built around the Adizero Evo SL launch. The creative is strong — action photography, clean typography, and a tight product grid — but the email is undermined by a visible character encoding bug in a key secondary headline. The Spotify Premium cross-promotion is a genuinely interesting value-add but lands awkwardly as a near-equal visual weight to the primary product push.

---

### 2. Business Impact Score: **6 / 10**

---

### 3. What's Working

- **Hero photography is sharp.** Two runners in motion, product on foot, high contrast — communicates performance without needing much copy.
- **Product grid is functional.** The 2x2 lifestyle grid shows the shoe across multiple contexts and complements the hero well.
- **Layout discipline.** The email doesn't overstuff. Each section has breathing room and a clear job to do.
- **Spotify partnership is differentiated.** Cross-brand offers in running emails are rare and can earn opens on their own. The concept is right.

---

### 4. What's Weak

- **Encoding bug in the Spotify headline — visible and bad.** The secondary section reads "RUN WITHOUT LIMITS â€" GET SPOTIFY PREMIUM" with garbled characters where the em dash should be. This is live in the render and degrades trust immediately.
- **CTA hierarchy is unclear.** The email has two distinct value propositions (buy shoes, get Spotify) with no visual signal that one outranks the other. The recipient has to decide which thing they're being asked to do.
- **Body copy is small and dense.** The intro paragraph below the hero is hard to read at a glance. It may say something important but it won't get read.
- **The Spotify module feels bolted on.** There's no visible transition or connective tissue between "buy this shoe" and "get Spotify Premium." The editorial logic isn't communicated.

---

### 5. Recommendations

1. **Fix the encoding bug now.** The garbled em dash in the Spotify headline needs a resend or a correction. This is the top priority.
2. **Make the Spotify offer feel earned.** Add a single line of copy explaining the connection — e.g., "Every Adizero Evo SL purchase includes 3 months of Spotify Premium." Right now the pairing looks accidental.
3. **Elevate one primary CTA.** Either the shoe or the Spotify offer should be the clear hero. If Spotify is secondary, shrink it and push it below a prominent shoe CTA.
4. **Increase intro copy size or cut it.** If the body copy under the hero headline can't be skimmed in 3 seconds, it should be shorter or larger — not both small and long.
5. **Add a price anchor.** No price or urgency signal is visible anywhere. For a performance launch email, even a "Starting at $X" line gives the recipient a reason to click now vs. later.

---

### 6. Bottom Line

Solid production quality with real strategic upside from the Spotify partnership, but the encoding bug in that same module makes it the email's biggest liability. The creative earns a 7; execution lands at a 6. Fix the render issue and sharpen the CTA hierarchy before using this template again.

---

### 7. Evidence

**Overall purpose:** Drive awareness and purchase consideration for the Adizero Evo SL running shoe, with a secondary cross-promotional offer of Spotify Premium.

**Hero / primary value proposition:** Full-width action shot of two runners, overlaid with "ADIZERO EVO SL" in large type. Strong visual, minimal copy. Effective at establishing the shoe as a performance product.

**Membership / benefits section:** Not present. No adiClub callout, points offer, or member-exclusive framing visible.

**Product discoverability / recommendation modules:** 2x2 product/lifestyle grid showing the shoe in multiple looks and settings. No pricing, colorway labels, or ratings visible — functional but minimal.

**Utility / secondary modules:** Spotify Premium co-promotion module with a lifestyle image of a woman and bold headline text. Positioned as a near-equal section to the primary product push.

**Bugs / friction / clarity issues:** The Spotify section headline visibly reads "RUN WITHOUT LIMITS â€" GET SPOTIFY PREMIUM" — the em dash character has failed to render and is displaying as raw encoding artifacts. This is the only visible bug but it appears in a prominent, high-contrast headline.

---

## Technical Audit

## Technical Audit — adidas "Shop Adizero Evo SL" Email

**From:** adidas@us-news.comms.adidas.com | **Date:** 2026-04-06

---

### 1. Technical Summary

The email has two confirmed broken links (doubled-domain URL construction defect and a malformed relative URL), a missing plain-text fallback, and 8 instances of the same arrow image served over HTTP. Overall QA pass rate is 44%.

---

### 2. Link & Tracking Issues

**[FAIL] Doubled-domain URL — store locator link**
The "local adidas store." link wraps an AppsFlyer deep-link URL inside the click-tracking domain without proper encoding, creating a doubled-domain pattern that will likely 404 or redirect incorrectly:
```
https://click.comms.adidas.com/CL0/https:%2F%2Fgo.adidas.com%2Fihha%3Faf_ios_url=...
```
The outer tracker should encode the inner URL once; double-encoding `https://` as `https:%2F%2F` nested inside a `click.comms.adidas.com/CL0/` path is a known Salesforce Marketing Cloud wrapping defect. The same URL appears flagged twice (both the `[FAIL] Doubled-domain bug` and `[FAIL] Doubled-domain merge error` checks), confirming it is a single broken link hit by two detection rules.

**[FAIL] Malformed relative URL — dynamic content image link**
One link resolves to a relative path rather than an absolute URL:
```
unknown url type: '/g/d53c4f08-d290-4662-a0e5-3c149a613728?txn=...'
```
The `href` was apparently templated as a relative path (`/g/...`) but the base domain was never prepended — likely a merge token that did not resolve. The surrounding element is the `dv.adidas.com` dynamic content block (`d53c4f08-d290-4662-a0e5-3c149a613728`). This link is non-functional in all clients.

**38 tracking links skipped** from HTTP probe — not failures, but click-redirect domains (`click.comms.adidas.com`) were not validated for destination reachability.

---

### 3. Rendering & Accessibility

**[WARN] Arrow image served over HTTP (8 instances — same asset)**
All instances point to the same file:
```
http://image.link.adidas.com/lib/fe6515707c62007e7715/m/3/b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg
```
Gmail, Outlook.com, and Apple Mail proxy or block mixed-content HTTP images. The arrow will render as a broken image icon in any client that enforces HTTPS-only image loading. The asset should be served from `https://`.

**[WARN] Missing alt text — 2 images**
- Dynamic content image: `d53c4f08-d290-4662-a0e5-3c149a613728` (dv.adidas.com block)
- Tracking pixel: `0HgFmkrMZs9CvhR30bqWGT2EqKoFfLmivR57uDZ3Rdw=451` (click.comms.adidas.com open-tracking pixel — `alt=""` is acceptable here, but the flag suggests the attribute is absent entirely rather than empty)

The dv.adidas.com image missing alt text is the more significant accessibility gap; if images are blocked, the content conveys nothing.

**Custom fonts declared twice**
`AdihausDIN` and `AdineuePRO` `@font-face` blocks are duplicated across two separate `<style>` blocks with slightly different `src` fallback lists. This is harmless but bloats the `<head>` and may cause rendering inconsistency if clients apply the first or last declaration differently.

---

### 4. Personalization & Merge Tokens

**[FAIL] Unresolved merge token — dynamic content link**
The `href` value `/g/d53c4f08-d290-4662-a0e5-3c149a613728?txn=a9d1d880-3215-11f1-8deb-ae5aeed300aa` is a relative path fragment, consistent with a personalization or dynamic content token that did not resolve to a full URL at send time. No other unresolved tokens (e.g., `%%FIRST_NAME%%`, `[FIRST NAME]`) are visible in the truncated source.

---

### 5. Compliance

**[FAIL] Plain-text fallback missing**
The text/plain MIME part is 0 characters. CAN-SPAM does not explicitly mandate a plain-text part, but its complete absence degrades deliverability scoring (SpamAssassin, Postfix content filters penalize HTML-only messages) and breaks accessibility for screen-reader-only mail clients.

**[WARN] Authentication headers not verified**
SPF/DKIM/DMARC status could not be confirmed via the AgentMail relay — `Authentication-Results` header was not present in the captured data. Sending domain `us-news.comms.adidas.com` should have a published DMARC policy aligned to `adidas.com`; this could not be verified from available data.

Unsubscribe link and physical address presence cannot be confirmed from the truncated HTML, but no automated check flagged them as missing.

---

### 6. Email-to-Site Continuity

The store-locator AppsFlyer link contains UTM-equivalent parameters (`pid=Email`, `c=NAM-Retail_Stores`, `af_xp=email`) which are structurally correct for AppsFlyer attribution, but the link itself is broken (see §2), so no attribution will be captured for store-locator clicks regardless.

The `dv.adidas.com` dynamic content link is non-functional (relative URL), so any UTM params on its destination are also unreachable.

No issues found with UTM parameters on the remaining 38 tracked links (not probed for destination alignment, but parameter presence was not flagged).

---

### 7. Recommendations

| Priority | Issue | Action |
|----------|-------|--------|
| **P0** | Store-locator link doubled-domain defect | Re-wrap the AppsFlyer URL through the SFMC click-tracker correctly — the inner URL must be URL-encoded as a single parameter, not concatenated into the path |
| **P0** | Relative URL on dynamic content block (`d53c4f08`) | Confirm the merge token or dynamic content rule that generates this `href`; ensure the base domain (`https://www.adidas.com`) is prepended before send |
| **P1** | Arrow image HTTP → HTTPS (`b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg`) | Update asset CDN reference to `https://image.link.adidas.com/...` across all 8 instances |
| **P1** | Plain-text fallback absent | Add a meaningful `text/plain` MIME part (even a condensed version of the email body + key links) |
| **P2** | Missing `alt` on dv.adidas.com image block | Add descriptive `alt` text to the dynamic content image |
| **P2** | Duplicate `@font-face` declarations | Consolidate into a single `<style>` block |
| **P3** | Authentication-Results not verified | Confirm SPF/DKIM alignment for `us-news.comms.adidas.com` in production send headers |
## Recent history

- [[2026-04-06-test-mkg-us-na-u-sand-gender-en-04072026-b-v3one-pair-of-sandals-won-t-cut-it]] — 6.5/10 (2026-04-06)
- [[2026-04-06-test-mkg-us-na-u-sand-gender-en-04072026-b-v2one-pair-of-sandals-won-t-cut-it]] — 6.5/10 (2026-04-06)
- [[2026-04-06-test-mkg-us-na-u-sand-gender-en-04072026-bone-pair-of-sandals-won-t-cut-it]] — 6.5/10 (2026-04-06)

