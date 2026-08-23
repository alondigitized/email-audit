---
slug: 2026-08-23-ends-tonight-10-off
type: email
date: 2026-08-23
persona: walker
score: "4/10"
sender: DSW
subject: Ends tonight! $10 off >>>
tags: [email, score-4, sender/dsw]
---
# Ends tonight! $10 off >>>
**Score:** 4/10 · **Type:** Email audit · **2026-08-23**
## Full review
## Technical Audit

# Technical Audit: DSW "Ends tonight! $10 off" Email

## 1. Technical Summary
This is a Braze-served (`e.dsw.com`, `braze-images.com`, `ablink.dsw.com` click-tracking) HTML email with one confirmed broken CTA link and two missing-alt-text images; core structure (DOCTYPE, meta resets, dark-mode media queries) is otherwise sound.

## 2. Link & Tracking Issues
- **[FAIL] Broken link (400)** on CTA "Opt-In to Texts Get 15% Off" — target `https://ablink.dsw.com/f/a/WOhfQ2BfAuCGF8kIm6AAow~~/AAQRxRA~/dLplBh...` (Braze redirect wrapper) returns HTTP 400. This is a functional defect, not just a tracking artifact — the link is dead for recipients.
- All other probed links route through the Braze click-tracking domain `ablink.dsw.com` — consistent with the platform, no anomalies found in the 12 material links checked.
- QA probed 12 of 70 total links (material/high-click-likelihood links); 58 footer/utility/social links were deprioritized and not verified — those are unconfirmed, not passed.

## 3. Rendering & Accessibility
- **Missing `alt` text** on two images:
  - `VBDIKx7N9g9XDavTDoDMTfqyAHpdrYUGwnnJ3M_Wm-MQQOD_iX` (content image served via `ablink.dsw.com/q/...`)
  - `o.gif` (1×1 open-tracking pixel at `mi.dsw.com/p/up/...`) — tracking pixels are typically fine without alt text, but should carry `alt=""` explicitly rather than omitting the attribute, for stricter HTML validation/screen-reader handling.
- Head includes standard reset/dark-mode scaffolding (`color-scheme: light dark`, `prefers-color-scheme` overrides, Outlook/MSO fixes, gutter-hack media queries for 320/375/414px breakpoints) — no structural rendering issues found in the visible source.
- Custom web fonts (Futura PT, HelveticaNow) loaded via `@font-face` from `braze-images.com` with no fallback stack shown in the truncated snippet — cannot confirm whether a system-font fallback is declared on text elements; flag for spot-check if full source is available.

## 4. Personalization & Merge Tokens
- No unresolved Liquid/merge tags (e.g. `{{`, `${`) visible in the truncated source.
- Subject line and creative are static/broadcast (no visible name or product personalization tokens) — no issues found, nothing to validate.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **Unsubscribe link presence could not be confirmed** — QA tooling notes "an unsubscribe link is always included" in its probing methodology, but the footer was truncated/deprioritized and not in the visible HTML sample. Recommend explicit confirmation before sign-off.
- **Physical mailing address** (required by CAN-SPAM) not present in the visible/truncated source — cannot confirm compliance from available evidence.
- **Authentication headers** (SPF/DKIM/DMARC for `e.dsw.com`) were not included in the provided data — not evaluated; flag as out of scope for this pass unless header data is supplied.
- From address `dsw@e.dsw.com` is a standard Braze subdomain send pattern — no issue.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- Tracking pixel URL includes campaign metadata: `mi_ecmp=20260823_P261212_V1_W-_Offer_New_1` — consistent, machine-readable campaign tagging.
- All content links are wrapped in Braze redirect tokens (`ablink.dsw.com/f/a/...`), so destination UTM parameters are not visible in the source — cannot verify UTM presence/alignment with landing pages without following redirects.
- Broken CTA (Section 2) breaks continuity outright for the texts opt-in flow — no landing page reachable from that link.

## 7. Recommendations
1. **Fix/republish the broken "Opt-In to Texts" link (400 error)** before this send goes further — it's a dead CTA.
2. Add explicit `alt` attributes to both flagged images (`alt=""` for the tracking pixel, descriptive `alt` for the content image).
3. Confirm unsubscribe link and physical address are present in the full (non-truncated) footer — not verifiable from the provided source and required for CAN-SPAM.
4. Request SPF/DKIM/DMARC header data for `e.dsw.com` to complete the authentication compliance check.
5. Spot-check the remaining 58 unprobed links (especially footer/legal links) given the unsubscribe/compliance gap above.
## Recent history

- [[2026-08-19-the-new-caf-slipper-is-here]] — 5/10 (2026-08-19)
- [[2026-08-19-intro-to-style-sneaker-trends]] — 4/10 (2026-08-19)
- [[2026-08-19-did-you-forget-something]] — 5/10 (2026-08-19)

