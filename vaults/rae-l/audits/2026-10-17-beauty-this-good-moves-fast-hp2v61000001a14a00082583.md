---
slug: 2026-10-17-beauty-this-good-moves-fast-hp2v61000001a14a00082583
type: email
date: 2026-10-17
persona: rae-l
score: "7/10"
sender: Sephora Insider
subject: Beauty this good moves fast 👀
tags: [email, score-7, sender/sephora-insider]
---
# Beauty this good moves fast 👀
**Score:** 7/10 · **Type:** Email audit · **2026-10-17**
## Full review
## Technical Audit

## 1. Technical Summary
The email's HTML source has no confirmed link failures, but it has no plain-text part and several small accessibility defects. The header-based compliance and authentication checks could not be verified because the AgentMail relay didn't capture the headers. The source was truncated, so footer, unsubscribe, and most link markup were not inspected.

## 2. Link & Tracking Issues
- No broken links were reported. 12 material links were probed and 57 were skipped by design, so most links are unverified.
- The first flagged image is `https://app.sephora.com/O/AQEAAZcF2gAndjYxMDAwMDAxYS0x...`. Its path format looks like an ESP open-tracking pixel. If so, the missing alt is harmless, but it should carry `alt=""` and a 1x1 size.
- UTM and click-tracking parameters could not be inspected because the truncated source didn't include the anchors.

## 3. Rendering & Accessibility
- **Missing alt text (QA-confirmed, 4 images):**
  - `2021_Navs_Header_06.jpg`
  - `20261017_Selling_Fast_02.gif`
  - `US_4XHYDRATE_Barcode.jpg`
  - the `app.sephora.com/O/...` image
  The first three are on `images.harmony.epsilon.com`. The barcode image likely carries functional content (a promo code) that screen readers and image-blocked clients will miss.
- **Zoom disabled:** `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">` blocks pinch-zoom on mobile.
- **Text resizing disabled:** the CSS sets `-webkit-text-size-adjust: none` and `text-size-adjust: none` on `div, a, tr, table, body, span, img, strong, td`. This disables user and OS text scaling in some clients.
- **Invalid robots value:** `<meta name="robots" content="no index">` has a space. The valid token is `noindex`, so the directive may be ignored. This only matters for web-hosted copies.
- **Generic title:** `<title>Sephora</title>` is not descriptive, though it has minimal impact in email.
- **Plain-text part (QA FAIL):** the text version is 0 characters. This is a multipart/alternative defect and also a deliverability and accessibility concern.

## 4. Personalization & Merge Tokens
No issues found. No unresolved tokens (`{{ }}`, `%%`, `[FIRST_NAME]`) appear in the visible source or subject. The truncated portion could not be checked.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe and List-Unsubscribe-Post (RFC 8058):** QA could not find either header. QA itself attributes this to the AgentMail relay, so it is unconfirmed rather than a proven sender defect. Gmail and Yahoo bulk-sender rules require both, so check the raw message headers.
- **Authentication-Results:** not captured, so SPF, DKIM, and DMARC status are unknown. This is also relay-related.
- **Footer, unsubscribe link, and postal address:** not visible in the truncated source and not verified. QA says an unsubscribe link is always probed, but it reported no result for it.

## 6. Email-to-Site Continuity
Insufficient evidence. The truncated source doesn't show destination URLs, UTM parameters, or landing-page alignment, and QA reported no redirect or landing-page failures among the 12 probed links.

## 7. Recommendations
1. **Add a plain-text alternative** (QA FAIL). Include the primary offer, key links, and the unsubscribe URL.
2. **Add meaningful `alt` text.** Use the offer and code text for `20261017_Selling_Fast_02.gif` and `US_4XHYDRATE_Barcode.jpg`, and `alt=""` for decorative images and the tracking pixel.
3. **Remove `maximum-scale=1`** from the viewport meta, and drop `text-size-adjust: none` where it isn't needed for Outlook or iOS rendering workarounds.
4. **Fix `content="no index"` to `noindex`**, or remove the tag.
5. **Verify headers from the raw source**, since the relay stripped them. Confirm `List-Unsubscribe`, `List-Unsubscribe-Post: List-Unsubscribe=One-Click`, and SPF/DKIM/DMARC alignment for `beauty.sephora.com`.
6. **Re-run the audit on the full HTML** to cover the footer, unsubscribe link, UTM parameters, and the 57 unprobed links.
## Recent history

- [[2026-08-19-this-style-has-limited-availability]] — 5/10 (2026-08-19)
- [[2026-08-19-your-fall-beauty-routine-starts-here-4793d7c9-b378-4388-a060-]] — 7/10 (2026-08-19)
- [[2026-08-19-1-free-mini-3-ways-to-wear]] — 7/10 (2026-08-19)

