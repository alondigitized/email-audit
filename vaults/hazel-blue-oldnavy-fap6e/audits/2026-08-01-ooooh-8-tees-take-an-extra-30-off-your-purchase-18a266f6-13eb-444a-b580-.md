---
slug: 2026-08-01-ooooh-8-tees-take-an-extra-30-off-your-purchase-18a266f6-13eb-444a-b580-
type: email
date: 2026-08-01
persona: hazel-blue-oldnavy-fap6e
score: "9/10"
sender: Old Navy
subject: Ooooh! 👀$8 tees + take an EXTRA 30% off your purchase*
tags: [email, score-9, sender/old-navy]
---
# Ooooh! 👀$8 tees + take an EXTRA 30% off your purchase*
**Score:** 9/10 · **Type:** Email audit · **2026-08-01**
## Full review
## Technical Audit

# Technical Audit: Old Navy — "$8 tees + EXTRA 30% off" Email

## 1. Technical Summary
This is a Responsys/Oracle Marketing Cloud–served promotional email (click.email.oldnavy.com, cp.oldnavy.com, mi.oldnavy.com infrastructure) with a standard fluid/hybrid table layout. Automated QA returned a 25% pass rate with 1 broken link, 1 accessibility gap, and 4 compliance/deliverability warnings.

## 2. Link & Tracking Issues
- **[FAIL] Broken redirect (HTTP 400)**: link text "Display images to show real-time content" resolves to `https://mi.oldnavy.com/p/cp/0b03a64563bcff52/c?mi_u=473097083&EV=ONUSFF3AMCPATHTFREQTESTSLPCTRLJOB537130_UNKPSPILPNCROF08012026&DI=473097083&...&url=https%3A%2F%2Fmi.oldnavy.com%2Fp%2Frp%2F266650ae62bdbfd2%2Furl&url_sig=...`. The link text itself is a fallback/alt string (typical of an Intelligent Landing Page "live content" block), suggesting this is an image-dependent dynamic content module that fails when the redirect chain returns 400 rather than rendering the fallback creative.
- **83 tracking/redirect links** were present but skipped from HTTP probing (click.email.oldnavy.com, mi.oldnavy.com, cp.oldnavy.com domains) — expected behavior for redirect-wrapped links, not itself a defect, but means link-destination validity beyond the one confirmed failure is unverified.

## 3. Rendering & Accessibility
- **[WARN] Missing alt text**: image `https://cp.oldnavy.com/o/f19869a6-5765-46ad-98e5-605eddcdef86?mi_mid=019fbbb1-8080-7000-af4f-613b289e88f8&cp_tp=v3.eJyNk...` has no `alt` attribute. Combined with the global CSS rule `img { display:block; }`, a broken/blocked image here will render as a blank block with no accessible text alternative for screen readers or images-off clients.
- Desktop/mobile toggle CSS (`.desktop-content` / `.mobile-content`) and the `@media (max-width:639px)` breakpoint are implemented conventionally (Outlook `mso` conditional block included for the height-fix hack); no structural rendering defects found in the visible markup.

## 4. Personalization & Merge Tokens
No issues found. No unresolved merge tags (e.g. `%%FIELD%%`, `{{token}}`, `[[ ]]`) are present in the visible HTML; the org/logo `itemscope` block resolves to static values ("Old Navy" / logo URL). Note: source is truncated, so tokens later in the document could not be verified.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **[WARN] `List-Unsubscribe` header not found** — may not have been captured by the relay, but if genuinely absent, this is a Gmail/Yahoo bulk-sender requirement violation (both mandate one-click unsubscribe as of their 2024 sender guidelines).
- **[WARN] `List-Unsubscribe-Post` header not found (RFC 8058)** — one-click unsubscribe likely unsupported, compounding the above.
- **[WARN] No physical mailing address detected** — CAN-SPAM §7704 requires a valid physical postal address in the message; not confirmed in the (truncated) body or footer.
- **[WARN] `Authentication-Results` header not found** — SPF/DKIM/DMARC pass/fail status could not be determined via the AgentMail relay.

These four warnings should be prioritized — unsubscribe and sender-address requirements are legally mandated, and missing authentication results block any deliverability diagnosis.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- Links use proprietary Responsys ILP tracking parameters (`mi_u`, `EV`, `DI`, `CD`, `ilp_promo_start_date`, `ilp_brand`, `cp_tp`, `mi_cid`, `cp_cid`) rather than standard UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`). No standard UTM parameters were found in any sampled URL, so continuity with a UTM-based web analytics stack (e.g., GA4) cannot be confirmed from this source — attribution likely depends entirely on the ESP's own click-tracking/landing-page resolution instead.
- The failing redirect (`mi.oldnavy.com/p/cp/0b03a64563bcff52/c`) is itself part of the landing-page resolution chain, so the broken link in §2 directly breaks email-to-site continuity for whatever offer/module it targets.

## 7. Recommendations
1. Fix the 400 error on the `mi.oldnavy.com/p/cp/0b03a64563bcff52/c` redirect chain (item in §2) — confirm the downstream `url=` target and `url_sig` are still valid.
2. Add `alt` text to the `cp.oldnavy.com/o/f19869a6-...` image (§3).
3. Verify `List-Unsubscribe` / `List-Unsubscribe-Post` headers are actually present at the SMTP layer (may be a relay-capture gap rather than a true absence) — confirm with raw headers from the original send, not just the AgentMail-relayed copy.
4. Confirm a physical mailing address is present in the full (untruncated) footer to satisfy CAN-SPAM.
5. Obtain raw `Authentication-Results` (SPF/DKIM/DMARC) from the sending path to validate deliverability posture.
6. If GA4/web-analytics attribution is required, add standard UTM parameters alongside the existing Responsys ILP params, or confirm the ILP → landing-page mapping is captured server-side.
## Recent history

- [[2026-07-31-make-it-count-50-off-everything-ends-soon]] — 8/10 (2026-07-31)
- [[2026-07-30-that-s-right-get-50-off-e-v-e-r-y-t-h-i-n-g]] — 7/10 (2026-07-30)
- [[2026-07-30-hurry-17-powersoft-leggings-won-t-last-neither-will-50-off-everything]] — 7/10 (2026-07-30)

