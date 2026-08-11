---
slug: 2026-08-11-wild-for-western
type: email
date: 2026-08-11
persona: walker
score: "4/10"
sender: Famous Footwear
subject: Wild for western 🤠 👢
tags: [email, score-4, sender/famous-footwear]
---
# Wild for western 🤠 👢
**Score:** 4/10 · **Type:** Email audit · **2026-08-11**
## Full review
## Technical Audit

# Technical Audit — Famous Footwear "Wild for western 🤠 👢"

## 1. Technical Summary
Standard ESP-templated (transactional table-based) HTML email with legacy HTML4 doctype and full mobile media-query scaffolding; primary technical issues are widespread missing `alt` attributes and heavy reliance on opaque tracking-redirect URLs.

## 2. Link & Tracking Issues
- Open-tracking pixel confirmed: `https://click.email.famousfootwear.com/open.aspx?TTSIUSJOK62UTMCHVVRUR6KR7I.70253&d=70253&bmt=0` (1×1, `font-size:0;line-height:0` wrapper — correctly hidden).
- All content links route through `click.email.famousfootwear.com/?qs=<opaque-token>` (ESP click-redirect, e.g. the header logo link and the "Want Free Shipping?" link share an identical `qs=` token, consistent with ESP link-wrapping rather than a bug).
- QA flagged **47 tracking/click-redirect links skipped** from HTTP probing — expected behavior for wrapped links, but means final destination and redirect health are unverified by automated QA. Recommend manual click-through spot-check before send.
- No raw/unwrapped destination URLs are visible in the truncated source, so UTM parameter presence on the *landing* side cannot be confirmed (see §6).

## 3. Rendering & Accessibility
- **29 images missing `alt` text** per QA (logo, divider rule, and all product imagery, e.g. `3b6a7dc1-6955-49f8-868a-bf62a15122ee.png`, `4ccff4ad-f402-43de-a027-5eb147b6f238.jpg` [flagged twice — used in two placements], `2204e501-20df-4bd1-a0ef-bd919596253a.gif`, plus ~24 more). All have `alt=""`. Empty alt is acceptable for the purely decorative divider image, but is a real accessibility/deliverability-with-images-off gap for product and promo images that carry the message content (screen readers and blocked-image clients see nothing).
- Mobile responsiveness scaffolding is present and reasonably thorough: `max-width:480px` and `max-width:640px` media queries, `.fluid`/`.fluid-centered`/`.responsive-td` fluid-image classes, and explicit mobile type-size overrides (`body{font-size:16px!important}` etc.).
- Legacy Outlook/webmail resets present (`ReadMsgBody`, `.ExternalClass` line-height fixes, `-ms-text-size-adjust`) — appropriate for a table-based HTML4 template targeting older Outlook/webmail clients.
- Preheader text implemented correctly via hidden `div.preheader` with `display:none!important` and inline `font-size:1px`.

## 4. Personalization & Merge Tokens
No merge tags, personalization fields, or dynamic content blocks (`{{...}}`, `%%...%%`, AMPscript, etc.) present in the visible/truncated source. No issues found — but note the HTML is truncated, so this cannot be confirmed for the full message body.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- The visible source ends mid-body; **unsubscribe link, physical mailing address, and footer are not present in the truncated portion**, so CAN-SPAM footer compliance cannot be verified from the data provided — this needs to be checked against the full HTML, not flagged as a defect.
- Sender address `famousfootwear@email.famousfootwear.com` uses a dedicated subdomain, consistent with SPF/DKIM/DMARC alignment on a bulk-sending subdomain — but no raw headers were supplied, so authentication (SPF/DKIM/DMARC pass/fail) cannot be assessed from this data.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
All outbound links are ESP-wrapped redirects (`click.email.famousfootwear.com/?qs=...`) with opaque tokens rather than plain query-string UTMs, so UTM parameter presence/consistency cannot be verified from the HTML alone — this is expected for this ESP's link-tracking implementation, not necessarily a defect. QA's skip of these 47 links for HTTP probing means final landing-page URLs and their querystrings are unverified.

## 7. Recommendations
1. Add descriptive `alt` text to the ~28 content-bearing product/promo images (keep `alt=""` only for the purely decorative divider rule).
2. Manually resolve a sample of the 47 wrapped tracking links to confirm final destinations are live and (if applicable) carry correct UTM parameters — QA cannot verify these automatically.
3. Obtain the full (untruncated) HTML to confirm CAN-SPAM footer elements (unsubscribe link, physical address) are present and functional.
4. Plain-text part is 70%+ URLs by character count — consider whether the plain-text fallback needs more descriptive surrounding copy for spam-filter/deliverability heuristics.
## Recent history

- [[2026-08-11-it-s-new-arrivals-daaaay]] — 3/10 (2026-08-11)
- [[2026-08-11-did-you-forget-something]] — 5/10 (2026-08-11)
- [[2026-08-11-your-items-are-waiting]] — 4/10 (2026-08-11)

