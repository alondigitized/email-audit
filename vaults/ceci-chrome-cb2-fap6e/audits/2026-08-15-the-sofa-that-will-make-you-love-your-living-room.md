---
slug: 2026-08-15-the-sofa-that-will-make-you-love-your-living-room
type: email
date: 2026-08-15
persona: ceci-chrome-cb2-fap6e
score: "5/10"
sender: Crate & Barrel
subject: The sofa that will make you LOVE your living room
tags: [email, score-5, sender/crate-barrel]
---
# The sofa that will make you LOVE your living room
**Score:** 5/10 · **Type:** Email audit · **2026-08-15**
## Full review
## Technical Audit

# Technical Audit: Crate & Barrel — "The sofa that will make you LOVE your living room"

## 1. Technical Summary
Standard MessageGears-style responsive HTML email (MSO conditionals, fluid/hybrid grid, `max-width:460px` breakpoints) with heavy third-party tracking instrumentation; automated QA passed 57% of checks with 3 warnings and no hard errors, concentrated in missing alt text and unverifiable email-auth/unsubscribe headers.

## 2. Link & Tracking Issues
- 76 click-redirect/tracking links were present but skipped by the automated HTTP probe (tracking/redirect domains), so final destination URLs and their HTTP status could not be verified in this pass.
- Multiple third-party tracking pixels are embedded: `mi.crateandbarrel.com/p/rp/*.png` (×7) and `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif` (open tracking), `sr.rlcdn.com/448796.gif` (×5, LiveRamp/RLCDN data-broker beacon), and `dv.crateandbarrel.com/o/...` (conversion/measurement pixel). None of these are functional problems but they represent significant cross-domain tracking surface.
- No broken (`href="#"` or empty) links were flagged by QA.

## 3. Rendering & Accessibility
- 33 `<img>` elements are missing `alt` text, spanning hero/product imagery (`image.mail.crateandbarrel.com/lib/...`), a Scene7 asset (`2026_0203_CB_NewBedding_secondary_story`), and all tracking pixels (`mi.crateandbarrel.com`, `sr.rlcdn.com`, `dv.crateandbarrel.com`). Tracking-pixel `alt` omission is acceptable (decorative/1×1), but the product/hero images should carry descriptive `alt` for screen-reader users and to satisfy WCAG 1.1.1.
- Markup includes standard Outlook/MSO fixes (`mso-table-lspace`, conditional VML comments) and Apple Mail resets (`x-apple-disable-message-reformatting`, `a[x-apple-data-detectors]`), indicating normal cross-client hardening — no issues found here.
- Media queries target `max-width:460px` for mobile and `min-width:640/768px` for desktop image scaling — no rendering conflicts detected in the available source.

## 4. Personalization & Merge Tokens
No merge tags (e.g. `%%FIRSTNAME%%`, `{{first_name}}`) or personalization blocks were visible in the truncated HTML provided. This cannot be fully confirmed given the source was cut off mid-document — recommend re-running the check against the full, untruncated HTML before ruling this out.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- `List-Unsubscribe` header was not found in the captured headers — may be an artifact of the AgentMail relay not forwarding it rather than a true absence at the source MTA; needs verification directly against the originating SMTP transaction.
- `List-Unsubscribe-Post` (RFC 8058 one-click unsubscribe) was not found, meaning one-click unsubscribe support could not be confirmed.
- `Authentication-Results` header (SPF/DKIM/DMARC outcome) was not found, so authentication status is unknown from this capture.
- In-body unsubscribe link/physical mailing address (required by CAN-SPAM) could not be confirmed or denied — the footer/compliance block falls outside the truncated HTML window provided.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
Cannot be assessed: all 76 outbound links route through tracking/redirect domains that were skipped by the HTTP probe, so neither UTM parameters nor final landing-page URLs are available for comparison against crateandbarrel.com.

## 7. Recommendations
1. Re-run header capture directly at the originating mail server (bypassing the AgentMail relay) to get a definitive read on `List-Unsubscribe`, `List-Unsubscribe-Post`, and `Authentication-Results` before flagging as compliance failures.
2. Add descriptive `alt` text to the 27 non-pixel product/hero images; tracking pixels can remain `alt=""`.
3. Resolve the 76 tracking redirects to their final URLs and confirm UTM parameters land on matching product/category pages on crateandbarrel.com.
4. Obtain the full (untruncated) HTML to verify presence of the CAN-SPAM footer (unsubscribe link + physical address) and check for any merge-token personalization.
## Recent history

- [[2026-08-15-proof-onyx-belongs-in-every-room]] — 5/10 (2026-08-15)
- [[2026-08-15-nesting-our-new-nursery-chair-works-in-any-space]] — 7/10 (2026-08-15)
- [[2026-08-15-the-only-flatware-shopping-guide-you-ll-ever-need]] — 6/10 (2026-08-15)

