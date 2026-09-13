---
slug: 2026-09-13-just-in-new-dream-angels-bras
type: email
date: 2026-09-13
persona: lacey-belle-vs-fap6e
score: "5/10"
sender: "Victoria's Secret"
subject: "Just In: NEW Dream Angels Bras"
tags: [email, score-5, sender/victoria-s-secret]
---
# Just In: NEW Dream Angels Bras
**Score:** 5/10 · **Type:** Email audit · **2026-09-13**
## Full review
## Technical Audit

## 1. Technical Summary
Standard Salesforce Marketing Cloud (SFMC) transactional template with an open-tracking pixel and click-redirect domain (`click.e1.victoriassecret.com`); QA flagged missing unsubscribe/authentication headers and several insecure/inaccessible image tags from a third-party ad-tracking vendor (dotomi.com).

## 2. Link & Tracking Issues
- Open-tracking pixel present at top of document: `https://click.e1.victoriassecret.com/open.aspx?AYGUSFIVI3YEVDZJADNTHUOYCQ.70246&d=70246&bmt=0` (duplicated twice in the truncated source — once in `<body>`, once inside the nested `stylingblock-content-wrapper`).
- 47 tracking/click-redirect links were present but skipped by the automated HTTP prober (expected behavior for redirect domains, not itself a defect — cannot confirm live status from this data).
- Third-party ad pixel/redirect calls to `dotomi.com` (Merkle/Dentsu) present as 11 separate `<img>` requests: 1× `login.dotomi.com/ucm/UCMController` and 10× `ads.dotomi.com/cookieredir/2482/pub1.php` through `pub10.php`. All 11 use plain `http://`, not `https://` — flagged by QA as "Non-HTTPS source may be blocked."

## 3. Rendering & Accessibility
- All 11 dotomi.com tracking images are missing `alt` attributes (QA: "Image missing alt text"). Since these are invisible 1×1 pixel beacons, the missing alt is low-impact but technically fails accessibility linting.
- The 12th flagged image, `5bcec3ac-502d-4d8f-b48c-0a3d20e6e3c2.png` (served from `image.e1.victoriassecret.com`), is also missing `alt` text — this one is more likely a real content/product image, so the missing alt text has actual screen-reader impact.
- Template includes standard Outlook (`mso`) conditional font fix and mobile media queries (`max-width:480px`/`640px`) with fluid image/table rules — no structural rendering issues found in the visible markup.
- `<title>` tag is empty (`<title style="display:none;...">`) — not a defect for HTML email (title is routinely suppressed), but worth noting no fallback preheader text is visible in the truncated source.

## 4. Personalization & Merge Tokens
No merge/personalization tokens (e.g., AMPscript `%%...%%` or Handlebars `{{...}}`) are present in the visible source. The `<div id="AMPScript">` block exists but its AMPscript content is empty (`<!-- Ampscript v0 START --><!-- Ampscript v0 END -->`) — placeholder scaffolding with no active injection in this send.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header**: not found by QA. Cannot confirm one-click unsubscribe support at the header level; note this may be an artifact of the AgentMail relay not surfacing/preserving the header rather than the sender omitting it.
- **List-Unsubscribe-Post header (RFC 8058)**: not found — one-click unsubscribe compliance (required by Gmail/Yahoo bulk sender rules) cannot be confirmed from available data.
- **Authentication-Results header** (SPF/DKIM/DMARC): not found — sending domain authentication status is unverified via this relay.
- No unsubscribe link or physical address was visible in the truncated HTML body provided, so in-body CAN-SPAM footer compliance cannot be assessed from this excerpt.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
Cannot assess — no destination/CTA link URLs (beyond the tracking/redirect and ad-pixel domains already listed) were present in the truncated HTML source, so UTM parameters and landing-page alignment cannot be verified.

## 7. Recommendations
1. Migrate the 11 `dotomi.com` tracking calls to `https://` — plain-`http://` image sources are increasingly blocked by mail clients (Gmail, Outlook) and will silently fail to fire, undercounting ad attribution.
2. Add empty `alt=""` to the 11 dotomi.com tracking pixels (correct accessibility practice for decorative/non-content images) and a descriptive `alt` to the `5bcec3ac...png` product image.
3. Re-run the header audit directly against the raw SMTP/API payload (bypassing the AgentMail relay) to confirm whether `List-Unsubscribe`, `List-Unsubscribe-Post`, and `Authentication-Results` are genuinely absent or just stripped in transit — this materially affects CAN-SPAM/RFC 8058 compliance conclusions.
4. Obtain the full (untruncated) HTML to verify CTA link UTM parameters and unsubscribe-footer presence, which could not be assessed from the provided excerpt.
## Recent history

- [[2026-08-19-last-day-25-off-when-you-spend-75]] — 6/10 (2026-08-19)
- [[2026-08-18-final-hours-40-off-extra-10-off-for-members]] — 7/10 (2026-08-18)
- [[2026-08-18-40-off-extra-10-off-for-members]] — 6/10 (2026-08-18)

