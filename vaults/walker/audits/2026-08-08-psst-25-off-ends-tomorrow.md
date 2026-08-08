---
slug: 2026-08-08-psst-25-off-ends-tomorrow
type: email
date: 2026-08-08
persona: walker
score: "5/10"
sender: DSW
subject: Psst...25% off ends tomorrow
tags: [email, score-5, sender/dsw]
---
# Psst...25% off ends tomorrow
**Score:** 5/10 · **Type:** Email audit · **2026-08-08**
## Full review
## Technical Audit

# DSW Email Technical Audit — "Psst...25% off ends tomorrow"

## 1. Technical Summary
Email built on Salesforce Marketing Cloud (ablink.dsw.com tracking domain) with Braze-hosted font assets; one broken CTA link and a plain-text/URL-ratio warning are the primary defects, with no other confirmed structural failures in the reviewed source.

## 2. Link & Tracking Issues
- **[FAIL] Broken link (400)** — CTA text "Opt-In to Texts Get 15% Off" resolves to a 400 error:
  `https://ablink.dsw.com/f/a/Jqfo38PyS3mKDV2OBF-nFw~~/AAQRxRA~/j6t0bmP8VXPSYfCufSLDfONTpuEUbeUNshGvqIT-GUfGWUgqfGnrb-...`
  This is a live redirect failure on a material CTA and will drop click-through entirely for that offer.
- 12 material links were probed (ranked by click likelihood); 81 lower-priority (footer/utility/social) links were not probed and remain unverified.
- No other broken links confirmed in the probed set.

## 3. Rendering & Accessibility
- **[WARN] Missing alt text** on two `<img>` elements:
  - `cEdrJqcoPMX5rVPvV1_3rN_6eQXJvDHSUaJQ4wIVcC6vtg5Ene` (`src: https://ablink.dsw.com/q/E9pUojApHfDZe1NTAGglXA~~/AAQRxRA~/cEdrJqcoPMX5rVPvV1_3rN_6eQXJvDHSUaJQ4wIVcC6vtg5EneOJbdk9Qgur2`)
  - `o.gif` (`src: https://mi.dsw.com/p/up/e6f23fb024fdcb2cc855b9ed672710d4/o.gif?mi_u=225090073&mi_ecmp=20260808_P251273_V1_WM-_Offer_MI_2`) — this is a tracking pixel, so missing alt is low-impact, but the first image appears to be content-bearing and should carry descriptive alt text for screen readers.
- Dark-mode support is implemented via `prefers-color-scheme` media query with `.dm-bg-*` / `.dm-font-*` overrides and `color-scheme`/`supported-color-schemes` meta tags — no issues found.
- Outlook/MSO conditional resets (`mso-table-lspace`, `mso-line-height-rule`) and Gmail-specific hacks (`u ~ div .email-container` width classes, `.im`, `.a6S`) are present — no issues found in the visible source.
- Custom web fonts (Futura PT, HelveticaNow) are declared via `@font-face` pointing to `braze-images.com`; note the CSS property is capitalized `Src:` rather than `src:` in several declarations (e.g. `Src: url(...)`). Most mail clients strip custom CSS/fonts regardless, but this is technically invalid CSS syntax and won't validate in clients that do support `@font-face`.

## 4. Personalization & Merge Tokens
- No unresolved merge tags (e.g. `%%FirstName%%`, `{{...}}`, `[[...]]`) or broken personalization blocks visible in the reviewed source.
- Image query params show campaign/tracking IDs (`mi_u=225090073`, `mi_ecmp=20260808_P251273_V1_WM-_Offer_MI_2`) populated with real values, not placeholder tokens — no issues found.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- The truncated HTML source does not include the footer/unsubscribe block or physical mailing address, so unsubscribe-link presence and CAN-SPAM footer compliance cannot be confirmed from the provided source. QA notes "an unsubscribe link is always included" in its probing methodology, implying one was detected, but its destination was not part of the probed/failed set — treat as unverified rather than confirmed.
- No SPF/DKIM/DMARC header data was provided in this audit payload — authentication headers cannot be assessed. Recommend pulling raw headers separately to confirm alignment for `e.dsw.com`.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- All links route through the `ablink.dsw.com` Salesforce Marketing Cloud click-tracking/redirect domain rather than exposing direct landing-page URLs with UTM parameters in the source — actual destination and UTM alignment can't be verified without following redirects.
- Given the broken 400 on the SMS opt-in CTA (Section 2), that redirect chain is confirmed non-functional; all other redirect destinations are unverified from source alone.

## 7. Recommendations
1. Fix/replace the broken `ablink.dsw.com` redirect behind "Opt-In to Texts Get 15% Off" (currently 400) — highest priority, it's a promoted CTA.
2. Add descriptive `alt` text to the content image (`cEdrJqcoPMX5rVPvV1_3rN_6eQXJvDHSUaJQ4wIVcC6vtg5Ene`); alt text on the `o.gif` tracking pixel is optional.
3. Reduce plain-text-part URL density (currently 35,414/40,858 chars, ~87%, vs. the >70% warning threshold) by shortening or removing redundant tracking links in the text alternative to improve deliverability/spam scoring.
4. Correct the `Src:` → `src:` casing in the `@font-face` declarations for CSS spec compliance, even though most clients will ignore custom fonts regardless.
5. Confirm SPF/DKIM/DMARC alignment for `e.dsw.com` and verify the unsubscribe link's actual destination — both fell outside the data available in this audit and should be checked directly against raw headers/full HTML.
## Recent history

- [[2026-08-08-complete-your-school-fits-with-must-have-sneakers]] — 4/10 (2026-08-08)
- [[2026-08-08-snap-worthy-for-the-first-day]] — 5/10 (2026-08-08)
- [[2026-08-08-every-step-effortlessly-smooth]] — 7/10 (2026-08-08)

