---
slug: 2026-04-15-test-mkg-us-na-u-best-full-en-04162026loved-reviewed-and-ready-for-your-closet
type: email
date: 2026-04-15
persona: walker
score: "4/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_U_BEST_FULL_EN_04162026Loved, Reviewed, and Ready for Your Closet"
tags: [email, score-4, sender/skechers]
---
# [Test]: MKG_US_NA_U_BEST_FULL_EN_04162026Loved, Reviewed, and Ready for Your Closet
**Score:** 4/10 · **Type:** Email audit · **2026-04-15**
## Executive summary

- Solid creative execution, but the delivery-layer failures (subject line, preview text) are the first things every subscriber sees. Those two failures significantly undercut the impact of otherwise decent content.

## What's working

- **BOGO banner is immediate and prominent.** "BUY ONE, GET ONE 50% OFF" dominates the top fold and is impossible to miss. The fallback offer ("OR 25% OFF A SINGLE PAIR") is a smart hedge.
- **"Most Talked About" framing is credible.** Pairing star ratings with brief customer verbatim quotes creates lightweight but effective social proof without being overwhelming.
- **Three-product structure is focused.** Cozy Fit, Arch Fit, Glide-Step each get their own moment, reducing visual clutter versus a sprawling grid.
- **Mid-email CTA + category nav is well placed.** "SHOP ALL BEST-SELLING STYLES" above the WOMEN / MEN / KIDS row acts as a natural bridge between editorial and discovery.
- **Footer utility stack is complete.** App download, curbside pickup, BNPL (AfterPay, Klarna), store finder, and SMS opt-in are all present and logically grouped.

## What's weak

- **Subject line is broken.** The `[Test]:` prefix combined with a raw internal campaign code (`MKG_US_NA_U_BEST_FULL_EN_04162026`) is concatenated with no delimiter before the actual subject line copy. This looks like a QA/staging send that escaped to production, or a build script that failed to strip the test tag before sending.
- **Preview text is raw JSON-LD schema markup.** The visible preview is `[{ "@context": "http://schema.org/", "@type": "Organization", "logo": "https://...` — structural metadata that was never meant to be seen by subscribers. This fills the entire preview pane with garbage text, eliminating any chance of the preview doing persuasive work.
- **Customer quotes are generic.** "Skechers are the only shoes for me" and "Very light comfortable and so easy to just slip your feet on" are faint praise. These read like pulled-from-reviews copy-paste rather than curated social proof. Higher-specificity quotes would land harder.
- **Product name suffixes look like rendering artifacts.** "COZY FIT**9**" and "ARCH FIT**9**" appear in the CTAs. Whether these are intentional product line designations or data-merge artifacts is unclear from the render, but they look odd and reduce credibility.

## Recommendations

- 1. **Fix the subject line pipeline immediately.** Strip `[Test]:` prefixes before any live send. Separate the internal campaign code from the subject line copy — they should never be concatenated. This is a process failure, not a copywriting one.
- 2. **Fix the preview text.** The JSON-LD schema block should be in the email's `<head>`, not readable as body content. Set explicit preview copy that reinforces the BOGO offer, e.g., "Customer favorites + buy one, get one 50% off."
- 3. **Upgrade the pull quotes.** Find quotes that name a specific benefit, occasion, or comparison. "I wore these for a 12-hour shift — no foot pain" outperforms "the only shoes for me" every time.
- 4. **Verify Cozy Fit9 / Arch Fit9 naming.** Confirm these are the correct product names and not a merge artifact. If they're correct, consider whether the number adds clarity or confusion for new customers.
- 5. **Add urgency to the BOGO.** The offer has no visible end date. Even a "limited time" label would add pressure without requiring an actual deadline.
- | Priority | Action |
- |---|---|
- | P0 | Fix Return Path pixel: add `https://` scheme to `pixel.app.returnpath.net/pixel.gif` |
- | P0 | Resolve SPF/DKIM authentication before production send |
- | P0 | Fix subject-line template: add space/delimiter between campaign-ID variable and subject-copy variable |
- | P0 | Remove `[Test]:` prefix from production job configuration |
- | P1 | Migrate all 14 HTTP image assets to `https://` on `image.emails.skechers.com` and `ink1000.com` |
- | P1 | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` to the two malformed `<meta>` tags |
- | P1 | Verify `partner_uid` and `mi_u` values in Krux/ink1000 pixels are per-subscriber tokens, not hardcoded IDs |
- | P2 | Add `alt` text to the content image (`49468f73` PNG) |
- | P2 | Close the 641px–767px breakpoint gap by adjusting `max-width: 640px` → `max-width: 767px` or adding an explicit mid-range block |
- | P2 | Crawl all 26 click-redirect chains in QA to confirm UTM parameter integrity on landing pages |

## Full review
## 2. Business Impact Score: **4 / 10**

Solid creative execution, but the delivery-layer failures (subject line, preview text) are the first things every subscriber sees. Those two failures significantly undercut the impact of otherwise decent content.

---

## 3. What's Working

- **BOGO banner is immediate and prominent.** "BUY ONE, GET ONE 50% OFF" dominates the top fold and is impossible to miss. The fallback offer ("OR 25% OFF A SINGLE PAIR") is a smart hedge.
- **"Most Talked About" framing is credible.** Pairing star ratings with brief customer verbatim quotes creates lightweight but effective social proof without being overwhelming.
- **Three-product structure is focused.** Cozy Fit, Arch Fit, Glide-Step each get their own moment, reducing visual clutter versus a sprawling grid.
- **Mid-email CTA + category nav is well placed.** "SHOP ALL BEST-SELLING STYLES" above the WOMEN / MEN / KIDS row acts as a natural bridge between editorial and discovery.
- **Footer utility stack is complete.** App download, curbside pickup, BNPL (AfterPay, Klarna), store finder, and SMS opt-in are all present and logically grouped.

---

## 4. What's Weak

- **Subject line is broken.** The `[Test]:` prefix combined with a raw internal campaign code (`MKG_US_NA_U_BEST_FULL_EN_04162026`) is concatenated with no delimiter before the actual subject line copy. This looks like a QA/staging send that escaped to production, or a build script that failed to strip the test tag before sending.
- **Preview text is raw JSON-LD schema markup.** The visible preview is `[{ "@context": "http://schema.org/", "@type": "Organization", "logo": "https://...` — structural metadata that was never meant to be seen by subscribers. This fills the entire preview pane with garbage text, eliminating any chance of the preview doing persuasive work.
- **Customer quotes are generic.** "Skechers are the only shoes for me" and "Very light comfortable and so easy to just slip your feet on" are faint praise. These read like pulled-from-reviews copy-paste rather than curated social proof. Higher-specificity quotes would land harder.
- **Product name suffixes look like rendering artifacts.** "COZY FIT**9**" and "ARCH FIT**9**" appear in the CTAs. Whether these are intentional product line designations or data-merge artifacts is unclear from the render, but they look odd and reduce credibility.

---

## 5. Recommendations

1. **Fix the subject line pipeline immediately.** Strip `[Test]:` prefixes before any live send. Separate the internal campaign code from the subject line copy — they should never be concatenated. This is a process failure, not a copywriting one.
2. **Fix the preview text.** The JSON-LD schema block should be in the email's `<head>`, not readable as body content. Set explicit preview copy that reinforces the BOGO offer, e.g., "Customer favorites + buy one, get one 50% off."
3. **Upgrade the pull quotes.** Find quotes that name a specific benefit, occasion, or comparison. "I wore these for a 12-hour shift — no foot pain" outperforms "the only shoes for me" every time.
4. **Verify Cozy Fit9 / Arch Fit9 naming.** Confirm these are the correct product names and not a merge artifact. If they're correct, consider whether the number adds clarity or confusion for new customers.
5. **Add urgency to the BOGO.** The offer has no visible end date. Even a "limited time" label would add pressure without requiring an actual deadline.

---

## 6. Bottom Line

The creative structure earns its keep — social proof framing, a clear offer, and focused product selection are all aligned. But this email was shipped broken. The subject line and preview text failures are visible before the email is even opened. If this went to a real list, it would look like a test send to every subscriber who read the subject line. Fix the QA pipeline; the content itself is largely ready.

---

## 7. Subject Line Analysis

- **Subject:** `[Test]: MKG_US_NA_U_BEST_FULL_EN_04162026Loved, Reviewed, and Ready for Your Closet`
- **Length:** 75 characters (actual intended subject: "Loved, Reviewed, and Ready for Your Closet" = 43 chars)
- **Scores (1-10):** Clarity `2`, Curiosity `3`, Personalization `1`, Urgency `2`, Specificity `3`
- **Strengths:**
  - The underlying copy ("Loved, Reviewed, and Ready for Your Closet") is benefit-forward and sets up the social proof angle cleanly
  - Rhythmic three-part structure is pleasant and readable on its own
- **Weaknesses:**
  - `[Test]:` prefix and raw campaign code are present in the rendered subject — this alone disqualifies the line in production
  - No mention of the BOGO offer, which is the strongest conversion lever in the email
- **Alt A:** `Your top-rated picks — buy one, get one 50% off`
- **Alt B:** `Customers love these. You get 50% off a second pair.`

---

## 8. Evidence

- **Overall purpose:** Promotional email combining a BOGO offer with a social proof editorial frame ("Most Talked About") to drive product page traffic and conversion.
- **Hero / primary value prop:** BOGO 50% off banner at top fold; clearly positioned as the commercial hook before editorial content begins.
- **Membership / benefits section:** None visible. No loyalty tier, points balance, or member-exclusive callout present.
- **Product discoverability / recommendation modules:** Three hero product panels (Cozy Fit, Arch Fit, Glide-Step) each with a customer quote, star rating, and individual CTA. Followed by a horizontal category nav (Women, Men, Kids, Clothing, New Arrivals, Sale).
- **Utility / secondary modules:** SMS opt-in ("Let's Get Texting"), app download (App Store), curbside pickup, BNPL logos (AfterPay, Klarna), store finder, and social follow icons — all in the footer.
- **Bugs / friction / clarity issues (visible in render):**
  - Subject line: `[Test]:` prefix + internal campaign code concatenated without separator
  - Preview text: raw JSON-LD schema.org markup rendering as visible preview copy
  - CTA text "SHOP COZY FIT9" and "SHOP ARCH FIT9" — trailing digit looks anomalous

---

## Technical Audit

## Technical Audit — SKECHERS MKG_US_NA_U_BEST_FULL_EN_04162026

---

### 1. Technical Summary

The email contains a protocol-stripped tracking pixel that will silently fail, a widespread HTTP-only image asset pattern that modern clients will block, and two malformed `<meta>` tags that undermine IE/legacy client compatibility. The subject line also carries a concatenated campaign ID with no delimiter, indicating a templating defect.

---

### 2. Link & Tracking Issues

**Critical — Missing protocol on Return Path pixel**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" ...>
```
No `https://` scheme. This will be resolved as a relative URL path and will 404 silently, breaking inbox-placement monitoring for this send.

**Warning — Hardcoded subscriber IDs in Krux/DMP pixels**
```
partner_uid=32884357   (beacon.krxd.net, second pixel)
mi_u=8004129222        (ink1000.com pixel)
```
If these are literal values rather than rendered personalization tokens, every recipient receives the same IDs, corrupting DMP identity matching. Verify these were correctly substituted from the subscriber record for the test seed address.

**Info — 26 click-redirect links**
All pass through `click.emails.skechers.com`. Expected for SFMC; UTM params cannot be verified from source (see §6).

---

### 3. Rendering & Accessibility

**High — 14 image assets served over HTTP**

All `image.emails.skechers.com` assets use `http://`. Gmail, Outlook.com, and Apple Mail proxy or block mixed-content images. Affected assets include the Skechers logo, app store badges, social icons, and footer icons:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-...png  (logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/*.png            (13 footer assets)
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif                                (tracking pixel)
```
All must be migrated to `https://`.

**Medium — Malformed `<meta>` tags**
```html
<meta content="text/html; charset=utf-8" />          <!-- missing http-equiv="Content-Type" -->
<meta content="IE=Edge" />                            <!-- missing http-equiv="X-UA-Compatible" -->
```
Both are missing their `http-equiv` attribute. Without it, the charset declaration and IE edge-mode directive are inert.

**Medium — Responsive breakpoint gap (641px–767px)**

The CSS defines:
- Mobile overrides at `max-width: 640px`
- Desktop overrides at `min-width: 768px`

The range 641px–767px receives neither, leaving `.desktop-content { display: none }` in force with no mobile override active. On narrow tablets/landscape phones in this range, desktop content is hidden and mobile content is shown, but without the mobile layout rules applied.

**Low — Missing alt text on 2 images**
```
o.gif     — http://www.ink1000.com/...  (tracking pixel; alt="" is acceptable, but absent entirely)
49468f73-4651-4af3-bea2-61d1ae5db486.png — http://image.emails.skechers.com/...
```
The product/content image (49468f73) must have descriptive alt text for screen readers and image-off rendering.

---

### 4. Personalization & Merge Tokens

**High — Campaign ID concatenated into subject line with no delimiter**

Subject as received:
```
[Test]: MKG_US_NA_U_BEST_FULL_EN_04162026Loved, Reviewed, and Ready for Your Closet
```
`MKG_US_NA_U_BEST_FULL_EN_04162026` runs directly into `Loved` with no space. This is a template assembly defect — the campaign-ID variable and the subject-copy variable appear to have been concatenated without a separator, or the subject-copy variable was not preceded by a space in the template.

**High — `[Test]:` prefix present in subject**

Must be stripped before production deployment. If this is injected by the ESP seed-list/test-send configuration, confirm the production job profile does not include it.

---

### 5. Compliance

**High — SPF/DKIM authentication status unknown**

QA finding:
```
[WARN] Authentication-Results header not found: Expected via AgentMail relay
```
Cannot confirm SPF pass or DKIM signature validity from available headers. This must be resolved before send — unauthenticated mail from `no-reply@emails.skechers.com` will fail DMARC alignment and face aggressive spam-filtering or rejection.

**Unsubscribe — Cannot confirm from truncated source**

The HTML is cut off before the footer. CAN-SPAM requires a functioning postal address and one-click unsubscribe mechanism. Verify these are present and that the unsubscribe link resolves correctly against the sending list.

---

### 6. Email-to-Site Continuity

All 26 click links route through `click.emails.skechers.com` redirects; final destination UTM parameters cannot be confirmed from source HTML. The campaign ID `MKG_US_NA_U_BEST_FULL_EN_04162026` appears consistently in tracking pixels (Krux impression beacon, ink1000 pixel), confirming consistent tagging at the pixel layer. UTM parameter correctness on destination URLs should be verified by crawling redirect chains in QA.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| P0 | Fix Return Path pixel: add `https://` scheme to `pixel.app.returnpath.net/pixel.gif` |
| P0 | Resolve SPF/DKIM authentication before production send |
| P0 | Fix subject-line template: add space/delimiter between campaign-ID variable and subject-copy variable |
| P0 | Remove `[Test]:` prefix from production job configuration |
| P1 | Migrate all 14 HTTP image assets to `https://` on `image.emails.skechers.com` and `ink1000.com` |
| P1 | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` to the two malformed `<meta>` tags |
| P1 | Verify `partner_uid` and `mi_u` values in Krux/ink1000 pixels are per-subscriber tokens, not hardcoded IDs |
| P2 | Add `alt` text to the content image (`49468f73` PNG) |
| P2 | Close the 641px–767px breakpoint gap by adjusting `max-width: 640px` → `max-width: 767px` or adding an explicit mid-range block |
| P2 | Crawl all 26 click-redirect chains in QA to confirm UTM parameter integrity on landing pages |
## Recent history

- [[2026-04-15-test-mkg-us-na-u-multi-full-en-04162026loved-reviewed-and-ready-for-your-closet]] — 5/10 (2026-04-15)
- [[2026-04-15-test-mkg-us-na-u-multi-gender-en-04162026loved-reviewed-and-ready-for-your-close]] — 5/10 (2026-04-15)
- [[2026-04-15-spring-styles-20-off-the-perfect-pair]] — 5/10 (2026-04-15)

