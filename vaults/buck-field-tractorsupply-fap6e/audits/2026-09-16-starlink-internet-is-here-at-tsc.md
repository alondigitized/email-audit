---
slug: 2026-09-16-starlink-internet-is-here-at-tsc
type: email
date: 2026-09-16
persona: buck-field-tractorsupply-fap6e
score: "7/10"
sender: Tractor Supply Company
subject: Starlink Internet Is Here at TSC 📶
tags: [email, score-7, sender/tractor-supply-company]
---
# Starlink Internet Is Here at TSC 📶
**Score:** 7/10 · **Type:** Email audit · **2026-09-16**
## Full review
## Technical Audit

## 1. Technical Summary
This Tractor Supply "Starlink" email uses a standard MCID-style ESP (e.ez.tractorsupply.com) with click-tracking redirects and a separate mi.tractorsupply.com/everestengagement.com open-pixel stack; automated QA shows widespread link-probe timeouts, one 403 on the preference-center link, and several accessibility/compliance gaps.

## 2. Link & Tracking Issues
- 9 of 12 probed links returned "read operation timed out" errors (Tractor Supply Co., Hero ×2, 4HYouth ×2, NEWBanner ×2, LearnMore ×2) against `e.ez.tractorsupply.com/click?...` redirect URLs. This indicates the redirect/tracking endpoint is unresponsive or blocking automated probes — cannot confirm final landing destinations for these CTAs.
- The "Update your preferences or unsubscribe" link returned **HTTP 403**: `https://e.ez.tractorsupply.com/click?ZdNHRbpswFAZgnsVSe1U6jGsbKqGNJUtKm7J1y4jKTWSODx0ZUGLDSJj27lOkdtou9gL_f_7vfCgG...` — this is a compliance-relevant link and a 403 on it is a functional failure, not just a tracking anomaly.
- Two "material" links were skipped by the prober (deprioritized footer/utility/social per QA methodology) — not evaluated.

## 3. Rendering & Accessibility
- Three images are missing `alt` text:
  - `o.gif` (open-tracking pixel): `https://mi.tractorsupply.com/p/cp/76ddd2c9608d17c7/o.gif?mi_u=60740592613`
  - Open-tracking pixel: `https://eaAnalyticsTSC.everestengagement.com/ea/o8uREqbKQf/?e=60740592613&c=091626_TSC_TGT_Starlink`
  - Open-pixel: `https://e.ez.tractorsupply.com/open?ZPM3PSgMxEIDx...`
  - These are all 1x1 tracking pixels, so missing `alt` is low-severity (screen readers should skip them, but best practice is `alt=""` explicitly rather than omitting the attribute).
- The HTML doctype is HTML 4.01 Transitional with extensive legacy Outlook/VML/mso conditional CSS and standard email-client resets (`.ExternalClass`, `mso-table-lspace`, `-ms-text-size-adjust`) — consistent with typical ESP boilerplate, no issues found.

## 4. Personalization & Merge Tokens
No unresolved merge tags, broken personalization syntax (e.g. `{{...}}`, `%%...%%`), or fallback-value errors found in the truncated source or QA output.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header not found** — QA notes this may be a relay-capture limitation (AgentMail) rather than confirmed absence; cannot conclusively fail this on current evidence.
- **List-Unsubscribe-Post header not found (RFC 8058)** — same caveat; one-click unsubscribe support unconfirmed.
- **Authentication-Results header not found** — SPF/DKIM pass/fail status unknown via this relay; cannot confirm authentication compliance from available data.
- The in-body unsubscribe/preference-center link exists but returns 403 (see §2) — this is the concrete, confirmed compliance issue, independent of the header warnings above.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- Cannot evaluate — all primary CTA links (Hero, 4HYouth, NEWBanner, LearnMore, "Tractor Supply Co.") resolved through the `e.ez.tractorsupply.com/click?` redirector timed out before reaching final landing URLs, so no UTM parameters or landing-page destinations are visible in QA data or the truncated HTML source.

## 7. Recommendations
1. Fix or investigate the 403 on the unsubscribe/preference-center link — this is a compliance-relevant failure and should be prioritized over the timeout errors.
2. Re-run link probes against `e.ez.tractorsupply.com` directly (outside the relay) to determine whether the 9 timeouts reflect real endpoint issues or QA-tool/relay throttling before escalating as broken links.
3. Confirm List-Unsubscribe / List-Unsubscribe-Post / Authentication-Results headers via a direct SMTP capture (bypassing AgentMail relay) to get a conclusive compliance/deliverability read, since current results are inconclusive rather than failing.
4. Add explicit `alt=""` to the three tracking pixels for accessibility hygiene (cosmetic, low priority).
## Recent history

- [[2026-08-17-exclusive-animal-days-savings-are-live]] — 9/10 (2026-08-17)
- [[2026-08-14-animal-days-in-store-event-is-tomorrow-8-15]] — 8/10 (2026-08-14)
- [[2026-08-10-animal-days-starts-now-save-big-on-tsc-exclusives]] — 9/10 (2026-08-10)

