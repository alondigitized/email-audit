---
slug: 2026-09-01-get-this-fun-look-stripe-drenching
type: email
date: 2026-09-01
persona: linnea-crate-cb-fap6e
score: "6/10"
sender: Crate & Kids
subject: "Get this fun look: stripe drenching!"
tags: [email, score-6, sender/crate-kids]
---
# Get this fun look: stripe drenching!
**Score:** 6/10 · **Type:** Email audit · **2026-09-01**
## Full review
## Technical Audit

## Technical Audit: "Get this fun look: stripe drenching!" (Crate & Kids)

**1. Technical Summary**
Standard Crate & Barrel/MI Symphony (Cheetah Digital) email template with heavy tracking pixel/beacon load; core technical gaps are missing authentication/unsubscribe headers and universal absence of image alt text.

**2. Link & Tracking Issues**
- 105 tracking/click-redirect links detected and skipped for HTTP probing — volume is consistent with MI Symphony link-wrapping but could not be individually validated for destination validity.
- Multiple tracking pixels/beacons present: `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png` (fired 6×), `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif` (open pixel), `sr.rlcdn.com/448796.gif` (LiveRamp/RampID, fired 5× with incrementing `n=` param), and `dv.crateandbarrel.com/o/7d3125dd-...` (likely DoubleVerify/viewability pixel). No functional defects found in these; flagged only as evidence of tracking density.
- No broken or malformed `href` values found in the visible source; full link inventory not resolvable from truncated HTML.

**3. Rendering & Accessibility**
- **All images missing `alt` text** — 60 image tags flagged, including primary content images, spacer/tracking gifs, and MI pixel images (`bbf6f9d4-...png`, `b79e3f41-...gif`, product photos, `25_MI_Bottom_Spacer_40px_White`, etc.). This affects screen-reader users and any client with images blocked by default (text-only fallback shows nothing).
- Extensive MSO/Outlook conditional comments and legacy DOCTYPE (XHTML 1.0 Transitional) present — standard for enterprise ESP templates, no issues found.
- Responsive breakpoints defined at 460px (mobile) and 640px/768px (desktop image max-width) — structurally sound, not independently render-tested.

**4. Personalization & Merge Tokens**
No merge tokens or unresolved personalization placeholders (e.g., `%%FIRSTNAME%%`, `{{...}}`) visible in the provided HTML excerpt. Cannot confirm status for the truncated remainder of the document.

**5. Compliance (CAN-SPAM, unsubscribe, authentication headers)**
- `List-Unsubscribe` header not found in transport headers — one-click unsubscribe not exposed at the mail-client level (relies on in-body link only, not independently confirmed in truncated HTML).
- `List-Unsubscribe-Post` (RFC 8058) not found — cannot support true one-click unsubscribe (Gmail/Yahoo bulk-sender requirements).
- `Authentication-Results` header not found — SPF/DKIM/DMARC pass/fail status unverifiable via the AgentMail relay capture.
- Physical mailing address / CAN-SPAM footer not visible in truncated source — cannot confirm compliance.

**6. Email-to-Site Continuity (UTM params)**
Not verifiable — CTA destination URLs are wrapped in MI Symphony tracking redirects (`mi.crateandbarrel.com`/click-tracking domains) and were skipped by the HTTP probe, so final landing-page URLs and UTM parameters are not visible in the current dataset.

**7. Recommendations**
- Add descriptive `alt` text to all content/product images at minimum (decorative spacers and 1x1 tracking pixels can use `alt=""`) — currently 100% of flagged images lack it.
- Confirm `List-Unsubscribe` and `List-Unsubscribe-Post` headers are actually sent at the SMTP layer; if AgentMail's relay is stripping them, verify with a direct-to-mailbox capture before concluding they're absent client-side.
- Verify SPF/DKIM/DMARC alignment directly against `mail.crateandbarrel.com`'s sending infrastructure, since `Authentication-Results` wasn't captured through this relay.
- Resolve at least a sample of the 105 tracking-redirect URLs to confirm final landing pages carry correct UTM parameters and don't 404.
## Recent history

- [[2026-08-19-can-t-figure-it-out-let-our-designers-help-for-free]] — 5/10 (2026-08-19)
- [[2026-08-19-the-ultimate-bedroom-makeover-inspo]] — 7/10 (2026-08-19)
- [[2026-08-18-bestselling-sofas-made-even-more-beautiful]] — 6/10 (2026-08-18)

