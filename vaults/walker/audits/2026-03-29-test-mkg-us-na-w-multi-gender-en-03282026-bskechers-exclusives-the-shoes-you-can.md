---
slug: 2026-03-29-test-mkg-us-na-w-multi-gender-en-03282026-bskechers-exclusives-the-shoes-you-can
type: email
date: 2026-03-27
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_W_MULTI_GENDER_EN_03282026_BSkechers Exclusives: The Shoes You Can't Get Anywhere Else"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_NA_W_MULTI_GENDER_EN_03282026_BSkechers Exclusives: The Shoes You Can't Get Anywhere Else
**Score:** 5/10 · **Type:** Email audit · **2026-03-27**
## Executive summary

- A Skechers exclusives-focused email with a clear hero message, but severely undermined by low-resolution product photography that makes the actual shoes hard to evaluate. The "Only at Skechers" positioning is strong and differentiated — exclusivity is a compelling hook — but the visual execution doesn't hold up its end of the bargain. The promotional banner at the top competes with the exclusives narrative, creating two conflicting calls to action before the scroll even begins.
- Strong concept, weak execution. The exclusivity angle has real purchase intent potential, but the imagery quality and cluttered structure dilute the conversion signal.

## What's working

- **"Only at Skechers" hero** is clear, confident, and differentiated — exclusivity framing is one of the strongest retail hooks available
- **Hero product image** shows an espadrille-style sandal in a lifestyle context that feels on-brand and seasonally appropriate
- **"Shop Skechers Exclusives" CTA** is prominent and action-oriented directly below the hero
- **"Best Selling Styles Going Fast" module** adds urgency and social proof in the mid-email position — a smart placement to catch scrollers who bypassed the hero
- **Utility footer** (Download App, Pay Later, Find a Store, social icons) is well-organized and covers key secondary conversion paths

## What's weak

- **Top banner promotion (50% OFF) competes directly with the exclusives headline.** Two different value propositions fight for attention before the reader has a chance to orient. The discount banner undercuts the premium/exclusive positioning.
- **Product thumbnail row is too small and low-contrast.** The four product tiles between the hero and the urgency module are barely distinguishable — different colorways and silhouettes blend together at this size. Recipients cannot evaluate product appeal.
- **"Shop Additional Styles" section is a text-link dump.** Women / Men / Kids / Clothing / New Arrivals / Sale — zero visual differentiation, no imagery, no hierarchy. This reads like a nav bar, not editorial content.
- **Subject line mismatch visible in preview text.** The preview text exposes a raw URL string, which damages inbox presentation before the email is even opened. While this is an inbox-level issue, it signals a QA gap.
- **"[Test]:" prefix in subject line** is visible — this should not be in a production send.

## Recommendations

- 1. **Separate the discount and exclusives messages.** Either lead with 50% OFF as the primary hook *or* lead with exclusivity — not both. If exclusivity is the campaign theme, move the promotional banner below the fold or remove it.
- 2. **Increase product tile size or reduce tile count.** Four small images in a horizontal strip are not doing the work. Either go 2-up with larger imagery or use a 3-column grid with visible product names and prices.
- 3. **Replace text-link "Additional Styles" section with a visual module.** Even a simple 3-column grid with category imagery would convert better than a bulleted text list.
- 4. **Fix preview text before production send.** The raw URL in preview text needs to be replaced with editorial copy that extends the exclusives message.
- 5. **Remove [Test]: prefix** from subject line for production deployment.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | `[Test]:` prefix in subject + campaign ID fused to subject text | Fix template subject field before any live send |
- | **P1** | All `image.emails.skechers.com` assets served over HTTP | Update CDN/ESP asset library URLs to `https://` |
- | **P1** | `ink1000.com` tracking pixel over HTTP | Switch to HTTPS endpoint or remove |
- | **P1** | SPF/DKIM unconfirmed | Validate `emails.skechers.com` DNS records; review relay authentication chain |
- | **P2** | 4 images missing alt text | Add descriptive alt text to `49468f73`, `00100b23`, `fc08601a` PNGs and the `o.gif` pixel |
- | **P2** | Malformed `<meta>` tags (missing `http-equiv`) | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` respectively |
- | **P2** | UTM params unverifiable | Resolve a sample of the 26 click redirect URLs and confirm UTM parameters are present on landing pages |
- | **P3** | CAN-SPAM footer (truncated source) | Confirm physical address and one-click unsubscribe are present in full HTML |

## Full review
## Executive Summary

A Skechers exclusives-focused email with a clear hero message, but severely undermined by low-resolution product photography that makes the actual shoes hard to evaluate. The "Only at Skechers" positioning is strong and differentiated — exclusivity is a compelling hook — but the visual execution doesn't hold up its end of the bargain. The promotional banner at the top competes with the exclusives narrative, creating two conflicting calls to action before the scroll even begins.

---

## Business Impact Score: 5/10

Strong concept, weak execution. The exclusivity angle has real purchase intent potential, but the imagery quality and cluttered structure dilute the conversion signal.

---

## What's Working

- **"Only at Skechers" hero** is clear, confident, and differentiated — exclusivity framing is one of the strongest retail hooks available
- **Hero product image** shows an espadrille-style sandal in a lifestyle context that feels on-brand and seasonally appropriate
- **"Shop Skechers Exclusives" CTA** is prominent and action-oriented directly below the hero
- **"Best Selling Styles Going Fast" module** adds urgency and social proof in the mid-email position — a smart placement to catch scrollers who bypassed the hero
- **Utility footer** (Download App, Pay Later, Find a Store, social icons) is well-organized and covers key secondary conversion paths

---

## What's Weak

- **Top banner promotion (50% OFF) competes directly with the exclusives headline.** Two different value propositions fight for attention before the reader has a chance to orient. The discount banner undercuts the premium/exclusive positioning.
- **Product thumbnail row is too small and low-contrast.** The four product tiles between the hero and the urgency module are barely distinguishable — different colorways and silhouettes blend together at this size. Recipients cannot evaluate product appeal.
- **"Shop Additional Styles" section is a text-link dump.** Women / Men / Kids / Clothing / New Arrivals / Sale — zero visual differentiation, no imagery, no hierarchy. This reads like a nav bar, not editorial content.
- **Subject line mismatch visible in preview text.** The preview text exposes a raw URL string, which damages inbox presentation before the email is even opened. While this is an inbox-level issue, it signals a QA gap.
- **"[Test]:" prefix in subject line** is visible — this should not be in a production send.

---

## Recommendations

1. **Separate the discount and exclusives messages.** Either lead with 50% OFF as the primary hook *or* lead with exclusivity — not both. If exclusivity is the campaign theme, move the promotional banner below the fold or remove it.
2. **Increase product tile size or reduce tile count.** Four small images in a horizontal strip are not doing the work. Either go 2-up with larger imagery or use a 3-column grid with visible product names and prices.
3. **Replace text-link "Additional Styles" section with a visual module.** Even a simple 3-column grid with category imagery would convert better than a bulleted text list.
4. **Fix preview text before production send.** The raw URL in preview text needs to be replaced with editorial copy that extends the exclusives message.
5. **Remove [Test]: prefix** from subject line for production deployment.

---

## Bottom Line

The exclusivity strategy is sound and the hero lands cleanly, but execution falters at the product level where purchase decisions actually happen. Fix the competing top banner, enlarge the product tiles, and replace the text-link dump with a visual grid — this email has the bones to convert well if the imagery gets the same attention as the headline.

---

## Evidence

| Module | Assessment |
|---|---|
| **Overall purpose** | Drive traffic to Skechers-exclusive styles not available at other retailers |
| **Hero / primary value prop** | "Only at Skechers" with espadrille sandal lifestyle image — clear and seasonally relevant |
| **Promotional banner** | 50% OFF competing offer at top — creates narrative conflict |
| **Product discovery row** | Four small horizontal thumbnails — too small to drive interest or differentiation |
| **Urgency module** | "Best Selling Styles Going Fast" with Shop Now CTA — functional mid-email hook |
| **Additional styles section** | Text-only navigation links (Women/Men/Kids etc.) — no visual support, low engagement potential |
| **Utility footer** | App download, Pay Later, Find a Store — well-structured, covers secondary conversion paths |
| **Visible bugs/friction** | [Test]: prefix in subject line; preview text exposes raw URL (inbox-level, visible before open) |

---

## Technical Audit

## Technical Audit — MKG_US_NA_W_MULTI_GENDER_EN_03282026_B
**From:** SKECHERS `<no-reply@emails.skechers.com>`
**Subject:** [Test]: MKG_US_NA_W_MULTI_GENDER_EN_03282026_BSkechers Exclusives...

---

### 1. Technical Summary
The email contains a pervasive HTTP (non-HTTPS) image-hosting issue across all footer/asset images from `image.emails.skechers.com`, plus a malformed subject line concatenation indicating a production-readiness defect. SPF/DKIM authentication status could not be confirmed via relay headers.

---

### 2. Link & Tracking Issues

**Subject line concatenation bug**
The campaign code is fused directly to the subject without a delimiter:
`MKG_US_NA_W_MULTI_GENDER_EN_03282026_B` + `Skechers Exclusives...` → renders as `03282026_BSkechers Exclusives...` in the raw subject header. This suggests a template variable substitution failure where the campaign ID field and subject field are not separated by a space/pipe.

**[Test] prefix present**
Subject begins with `[Test]:` — confirms this is not a clean production send. If deployed to live list, this will be visible to recipients.

**26 encrypted click-redirect links**
All CTAs route through `click.emails.skechers.com/?qs=<encrypted_payload>`. Destination URLs and UTM parameters cannot be inspected directly without resolving the redirects. QA skipped HTTP probing on all 26.

**Third-party tracking beacons**
Three Krux/Salesforce DMP pixels fire on open:
- `beacon.krxd.net/1x1_usermatch.gif` (user-match, ×2)
- `beacon.krxd.net/1x1_ad_impression.gif` (impression, campaign ID in query string)

One ink1000.com pixel fires over **plain HTTP**:
`http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=9015215849&mi_ecmp=...`

Return Path seed/reputation pixel present:
`pixel.app.returnpath.net/pixel.gif` — loaded without explicit scheme (protocol-relative), behavior depends on client context.

---

### 3. Rendering & Accessibility

**HTTP image sources (critical in modern clients)**
All assets served from `image.emails.skechers.com` use `http://` not `https://`. Gmail, Outlook.com, and Apple Mail proxy/block mixed-content images. Affected images (14 total):

| Image | Alt Text | HTTP URL |
|---|---|---|
| Logo (dde00662…) | "Skechers" | `http://image.emails.skechers.com/…/dde00662….png` |
| Footer icon (49468f73…) | **missing** | `http://image.emails.skechers.com/…/49468f73….png` |
| App Store badge (0ec56c9f…) | "Available on the App Store" | `http://…` |
| Google Play badge (9bb508d0…) | "Android App on Google Play" | `http://…` |
| Unknown (00100b23…) | **missing** | `http://…` |
| AfterPay (07cb60b5…) | "AfterPay" | `http://…` |
| Unknown (fc08601a…) | **missing** | `http://…` |
| Social icons: Instagram, Twitter, Facebook, Pinterest, YouTube | named | `http://…` (all 5) |

**Missing alt text on 4 images**
`o.gif`, `49468f73….png`, `00100b23….png`, `fc08601a….png` have empty or absent `alt` attributes. Renders as broken icons when images are blocked (common default in Outlook desktop).

**Malformed meta tags**
Two `<meta>` tags are missing the `http-equiv` attribute:
```html
<!-- Missing http-equiv="Content-Type" -->
<meta content="text/html; charset=utf-8" />
<!-- Missing http-equiv="X-UA-Compatible" -->
<meta content="IE=Edge" />
```
Without `http-equiv`, these directives have no effect. Charset declaration failure can cause encoding errors in some clients.

---

### 4. Personalization & Merge Tokens

No unresolved merge token syntax (e.g., `%%FIELD%%`, `{{field}}`) is visible in the truncated source. The subscriber identifier (`2396422`) appears hardcoded in the Krux `partner_uid` parameter — this appears intentional for DMP matching, not a template fault.

No issues found with dynamic content blocks from the visible HTML.

---

### 5. Compliance

**SPF/DKIM status unknown**
QA finding: `Authentication-Results header not found` via AgentMail relay. Cannot confirm SPF pass/DKIM signature for `emails.skechers.com`. This is a deliverability risk — inbox placement depends on proper authentication.

**CAN-SPAM / unsubscribe**
HTML source is truncated; physical mailing address and unsubscribe mechanism presence cannot be confirmed from available source. These are mandatory under CAN-SPAM. If absent, this is a legal violation.

---

### 6. Email-to-Site Continuity

All destination URLs are encrypted behind `click.emails.skechers.com/?qs=<base64_payload>` — UTM parameter values (source, medium, campaign, content) cannot be verified without resolving the redirects. QA bypassed all 26 links.

Campaign ID embedded in the Krux impression pixel (`campaignid=MKG_US_NA_W_MULTI_GENDER_EN_03282026_B`) matches the email campaign code, confirming the DMP impression attribution is correctly wired.

**Risk:** If the encrypted click redirects do not append UTM params to destination URLs, all sessions will land as direct/none traffic in analytics — making campaign ROI unmeasurable.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | `[Test]:` prefix in subject + campaign ID fused to subject text | Fix template subject field before any live send |
| **P1** | All `image.emails.skechers.com` assets served over HTTP | Update CDN/ESP asset library URLs to `https://` |
| **P1** | `ink1000.com` tracking pixel over HTTP | Switch to HTTPS endpoint or remove |
| **P1** | SPF/DKIM unconfirmed | Validate `emails.skechers.com` DNS records; review relay authentication chain |
| **P2** | 4 images missing alt text | Add descriptive alt text to `49468f73`, `00100b23`, `fc08601a` PNGs and the `o.gif` pixel |
| **P2** | Malformed `<meta>` tags (missing `http-equiv`) | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` respectively |
| **P2** | UTM params unverifiable | Resolve a sample of the 26 click redirect URLs and confirm UTM parameters are present on landing pages |
| **P3** | CAN-SPAM footer (truncated source) | Confirm physical address and one-click unsubscribe are present in full HTML |
## Recent history

- [[2026-03-29-test-mkg-us-na-w-multi-gender-en-03282026-a-v3fresh-spring-styles-to-step-up-you]] — 5/10 (2026-03-27)
- [[2026-03-29-test-mkg-us-ecmpur-u-seasonal-ecom-en-03302026-bnew-colors-you-ll-keep-coming-ba]] — 6.5/10 (2026-03-27)
- [[2026-03-29-test-mkg-us-ecmpur-u-best-ecom-en-03292026-b-v2the-styles-everyone-s-searching-f]] — 6/10 (2026-03-27)

