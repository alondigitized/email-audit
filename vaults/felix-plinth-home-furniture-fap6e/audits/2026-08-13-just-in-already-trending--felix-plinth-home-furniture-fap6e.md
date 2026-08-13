---
slug: 2026-08-13-just-in-already-trending--felix-plinth-home-furniture-fap6e
type: email
date: 2026-08-13
persona: felix-plinth-home-furniture-fap6e
score: "4/10"
sender: CB2
subject: Just in. Already trending.
tags: [email, score-4, sender/cb2]
---
# Just in. Already trending.
**Score:** 4/10 · **Type:** Email audit · **2026-08-13**
## Full review
## Technical Audit

## 1. Technical Summary
This CB2 promotional email is a legacy-template MIME/table-based HTML build with functioning core structure, but it fails several compliance and privacy checks — most notably missing unsubscribe headers and a stack of insecure legacy ad-tracking pixels.

## 2. Link & Tracking Issues
- 70 tracking/click-redirect links were present in the HTML but skipped by automated HTTP probing (redirect/tracking domains are excluded from probes) — link destinations are unverified in this pass.
- Legacy third-party ad pixels load over **plain HTTP**, which most modern mail clients (Gmail, Outlook, Apple Mail) will block or strip as mixed content, silently killing that tracking:
  - `http://login.dotomi.com/ucm/UCMController?dtm_com=2&dtm_cid=2437&dtm_cmagic=654788&dtm_fid=103&dtm_format=6&cli_promo_id`
  - `http://ads.dotomi.com/cookieredir/2437/pub1.php` through `pub10.php` (10 sequential pixels, same pattern, all HTTP)
- Legitimate tracking pixels are present over HTTPS and load correctly: `mi.cb2.com/p/up/.../o.gif`, `dv.cb2.com/o/...`.

## 3. Rendering & Accessibility
- 9 content images are missing `alt` text (e.g. `cc2db6d2-...jpg`, `545b0c59-...jpg`, `3556dae9-...jpg`, `18eb54b8-...jpg`, `3264bfcd-...jpg`, `5c3273a3-...jpg`, `998a9699-...jpg`, `d3d24584-...gif`, `4c520e07-...jpg`, `b3987305-...jpg`) — screen readers and blocked-image fallback states will show nothing.
- Tracking pixels (dotomi UCMController/pubN.php, o.gif) are also flagged as missing `alt`, but as 1x1 non-content pixels this is not a real accessibility concern — expected and low priority.
- Template uses standard Outlook MSO conditional comments, `-ms-text-size-adjust`/`-webkit-text-size-adjust` resets, and mobile media queries (max-width: 418px) — no structural rendering defects observed in the visible markup.
- Multiple `@font-face` declarations reference `cb2.com` and `crateandbarrel.com` font assets over HTTPS — no mixed-content risk there.

## 4. Personalization & Merge Tokens
No merge tokens or personalization placeholders (e.g. `%%FIRSTNAME%%`, `{{...}}`) are visible in the truncated source. No issues found in the reviewed portion.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header not found** — could not be confirmed present; if genuinely absent this is a CAN-SPAM/deliverability risk (major inbox providers increasingly require it). Note QA flags this may be a relay artifact (AgentMail may not surface the header) rather than a true absence — needs verification against the raw SMTP headers.
- **List-Unsubscribe-Post header not found (RFC 8058)** — one-click unsubscribe cannot be confirmed; same relay-capture caveat applies.
- **Authentication-Results header not found** — SPF/DKIM pass/fail status is unknown from this capture; cannot confirm sender authentication is correctly configured. Same relay-capture caveat.
- In-body unsubscribe/footer link was not visible in the truncated HTML provided, so footer-level CAN-SPAM compliance (physical address, unsubscribe link in body) could not be assessed — recommend reviewing the untruncated footer markup.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
Not assessable from the truncated source — no destination/CTA URLs with UTM parameters were included in the provided HTML excerpt. Flagging as unverified rather than assuming an issue.

## 7. Recommendations
1. Convert the 11 `dotomi.com` ad-tracking pixels from `http://` to `https://`, or remove them if the vendor relationship is deprecated — as-is they are likely non-functional in modern clients.
2. Add descriptive (or explicitly empty `alt=""` for purely decorative) `alt` attributes to the 9 content images missing them.
3. Verify List-Unsubscribe / List-Unsubscribe-Post / Authentication-Results directly against raw SMTP headers at the sending MTA (not just the AgentMail-relayed capture) to rule out a relay-capture artifact before treating these as real gaps.
4. Request the full (non-truncated) HTML to verify footer unsubscribe link and physical mailing address for full CAN-SPAM compliance, and to audit UTM parameters on CTA links for site-continuity.
## Recent history

- [[2026-08-13-not-sure-which-sheets-let-us-help--felix-plinth-home-furniture-fap6e]] — 5/10 (2026-08-13)
- [[2026-08-13-inspired-by-fairy-tales-the-fall-2026-lookbook-is-here--felix-plinth-home-furniture-fap6e]] — 5/10 (2026-08-13)
- [[2026-08-13-on-now-up-to-25-off-your-bedroom-refresh--felix-plinth-home-furniture-fap6e]] — 8/10 (2026-08-13)

