---
slug: 2026-07-30-hurry-17-powersoft-leggings-won-t-last-neither-will-50-off-everything
type: email
date: 2026-07-30
persona: hazel-blue-oldnavy-fap6e
score: "7/10"
sender: Old Navy Haul into Fall
subject: "Hurry — $17 PowerSoft leggings won't last (& neither will 50% OFF everything*!)"
tags: [email, score-7, sender/old-navy-haul-into-fall]
---
# Hurry — $17 PowerSoft leggings won't last (& neither will 50% OFF everything*!)
**Score:** 7/10 · **Type:** Email audit · **2026-07-30**
## Full review
## Technical Audit

# Technical Audit — Old Navy "Hurry — $17 PowerSoft leggings" Email

## 1. Technical Summary
The email is a standard MSO/Outlook-compatible HTML table layout with responsive breakpoints, but QA shows a broken tracking/redirect link, missing unsubscribe headers, and no detectable physical address — a 25% automated pass rate overall.

## 2. Link & Tracking Issues
- **[FAIL] Broken link (400)** on link text "Display images to show real-time content": `https://mi.oldnavy.com/p/cp/0b03a64563bcff52/c?mi_u=473097083&EV=ONUSFF6PMCPATHTFREQTESTSLPCTRLJOB536398_UNKPSPILPNCROF07292026&DI=473097083&...&url=https%3A%2F%2Fmi.oldnavy.com%2Fp%2Frp%2F266650ae62bdbfd2%2Furl&url_sig=y9VLeOEJgYNeIm` — returns HTTP 400. The truncated `url_sig` param is suspicious; this could indicate the signature was cut off in the source capture or is genuinely malformed.
- 68 additional tracking/click-redirect links were present but skipped by the automated HTTP probe (expected behavior for redirect domains — not itself a defect, but means those links are unverified).
- Open-tracking pixel confirmed: `https://click.email.oldnavy.com/open.aspx?LHVEKJPL7LVUPB4IIUMNY36XYI.60263&d=60263&bmt=0`.
- Secondary tracking pixel present: `https://cp.oldnavy.com/o/80abe775-abc8-4eaf-a69b-97a7d38620b2?mi_mid=019fb50a-9f00-7000-ba25-df368fb8b927&cp_tp=v3.eJzj...` (labeled `<!--DV TRACKING PIXEL-->`).

## 3. Rendering & Accessibility
- **Missing alt text**: tracking pixel `https://cp.oldnavy.com/o/80abe775-abc8-4eaf-a69b-97a7d38620b2?...` has no `alt` attribute. Low-impact since it's a 1x1 hidden pixel, but flagged by QA.
- Note: the open-tracking pixel (`click.email.oldnavy.com/open.aspx`) does include `alt=""`, so this is inconsistent within the same document.
- MSO conditional comments (`<!--[if gte mso 9]>`) and `.ExternalClass`/`.ReadMsgBody` resets are present, indicating standard Outlook rendering support.
- Responsive breakpoint is set at `max-width: 639px` with `.desktop-content` / `.mobile-content` toggling — structurally sound in the visible source, no broken selector pairs detected.

## 4. Personalization & Merge Tokens
No merge tags, personalization fields (e.g., `%%FIRSTNAME%%`, `{{first_name}}`), or dynamic content blocks are visible in the provided HTML. No issues found based on available source — note the source is truncated, so tokens later in the document would not be visible in this review.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **[WARN] `List-Unsubscribe` header not found** — may be a relay artifact (AgentMail) rather than a true sender omission, but cannot be confirmed from headers available.
- **[WARN] `List-Unsubscribe-Post` header not found (RFC 8058)** — one-click unsubscribe cannot be confirmed as supported.
- **[WARN] No physical mailing address detected** in the parsed content — CAN-SPAM requires a visible physical postal address; not present in the truncated source or flagged by QA as absent overall.
- **[WARN] No `Authentication-Results` header found** — SPF/DKIM/DMARC pass/fail status is unknown from this capture.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- Tracking/redirect links use proprietary Old Navy/Merkle-style parameters (`mi_u`, `EV`, `DI`, `cp_tp`, `mi_cid`, `cp_cid`, `url_sig`) rather than standard `utm_source`/`utm_medium`/`utm_campaign` query params — no standard UTM tagging is present in any link inspected, so campaign attribution in web analytics (e.g., GA4) would need to rely on these vendor-specific redirect params or a separate mapping layer.
- Cannot confirm final landing-page alignment (e.g., that the $17 PowerSoft leggings promo lands on a matching PDP/PLP) because all links route through `mi.oldnavy.com`/`cp.oldnavy.com` redirect chains that were skipped by the HTTP probe (68 tracking links) or returned 400 (the one failure above).

## 7. Recommendations
1. Fix or regenerate the broken redirect link (`mi.oldnavy.com/p/cp/0b03a64563bcff52/c?...url_sig=y9VLeOEJgYNeIm`) — confirm `url_sig` isn't being truncated at send time and that the destination resolves with a 200.
2. Add an `alt=""` attribute to the `cp.oldnavy.com` tracking pixel for consistency with the other tracking pixel in the document.
3. Verify `List-Unsubscribe` and `List-Unsubscribe-Post` headers are actually being sent at the MTA level (not just missing due to relay stripping) — RFC 8058 one-click unsubscribe is increasingly required by Gmail/Yahoo bulk sender rules.
4. Confirm a physical mailing address is present somewhere in the full (non-truncated) footer to satisfy CAN-SPAM.
5. Manually verify SPF/DKIM/DMARC pass status via a raw header capture outside the AgentMail relay, since `Authentication-Results` wasn't observed here.
6. Consider standard UTM parameters alongside the proprietary tracking params if GA4/site-side attribution depends on them.
## Recent history

- [[2026-07-29-50-off-everything-ending-soon-get-17-powersoft-leggings-for-the-workout-girlies]] — 9/10 (2026-07-29)
- [[2026-07-29-deals-on-deals-get-50-off-everything-snag-pjs-for-12-a31c4fef-f738-4097-9bf6-]] — 7/10 (2026-07-29)
- [[2026-07-28-just-dropped-12-pjs-50-off-everything]] — 5/10 (2026-07-28)

