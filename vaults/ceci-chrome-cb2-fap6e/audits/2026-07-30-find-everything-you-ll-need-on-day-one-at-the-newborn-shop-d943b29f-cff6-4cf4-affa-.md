---
slug: 2026-07-30-find-everything-you-ll-need-on-day-one-at-the-newborn-shop-d943b29f-cff6-4cf4-affa-
type: email
date: 2026-07-30
persona: ceci-chrome-cb2-fap6e
score: "7/10"
sender: Crate & Kids
subject: Find everything you’ll need on day one at The Newborn Shop!
tags: [email, score-7, sender/crate-kids]
---
# Find everything you’ll need on day one at The Newborn Shop!
**Score:** 7/10 · **Type:** Email audit · **2026-07-30**
## Full review
## Technical Audit

# Technical Audit: Crate & Kids — "The Newborn Shop" Email

## 1. Technical Summary
Email uses a standard MSO-compatible XHTML transitional template with responsive breakpoints; automated QA returned a 57% pass rate with 0 failures and 3 warnings, all related to missing accessibility attributes and unconfirmed compliance/authentication headers.

## 2. Link & Tracking Issues
- 78 tracking/click-redirect links were present but skipped by the automated HTTP probe (by design, per QA INFO log) — destination URLs and redirect health were **not verified** in this pass.
- Multiple tracking pixels detected:
  - `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png` — fired **6 times** with identical `mi_u` parameter (Movable Ink render-tracking pixel)
  - `sr.rlcdn.com/448796.gif` — fired **5 times** with sequential `n=1` through `n=5` (LiveRamp/RampID identity pixel)
  - `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif` — open-tracking pixel
  - `dv.crateandbarrel.com/o/1a853515-589d-4ed1-b52b-80b2fc9cc69f` — third-party tracking/personalization call (`cp_tp=v` param)
- The repeated identical pixel calls (6x and 5x) warrant a check for redundant tag firing, though this cannot be confirmed as a bug vs. intentional multi-partner tracking from the truncated source alone.

## 3. Rendering & Accessibility
- **30 images missing `alt` text** across the email (confirmed via QA), including primary content images (`.jpg`/`.png` hero and product imagery from `image.mail.crateandbarrel.com` and `s7d5.scene7.com`) and tracking pixels. Missing alt text on content images degrades the experience when images are blocked by default (common in Outlook desktop) and fails WCAG 1.1.1.
- Template includes standard Outlook/MSO conditional comments (`<!--[if mso]>`, `<!--[if gte mso 9]>`) and Apple Mail reformatting guards (`x-apple-disable-message-reformatting`), indicating reasonable cross-client compatibility groundwork — no issues found here.
- Responsive breakpoints present at `max-width:460px`, `min-width:640px`, `min-width:768px` for mobile/desktop image scaling — no issues found.
- No structural rendering errors (unclosed tags, malformed tables) visible in the available source, though the source is truncated and a full DOM validation could not be completed.

## 4. Personalization & Merge Tokens
No merge tags (e.g. `{{FirstName}}`, `%%FIELD%%`, ESP-style personalization syntax) are visible in the captured HTML. **Note:** the source was truncated before the full body/CTA content rendered, so this section could not be fully audited — absence of visible tokens here should not be read as confirmation none exist elsewhere in the email.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header**: not found (WARN). Required for one-click unsubscribe support in Gmail/Yahoo bulk sender rules; may be a relay-capture limitation (AgentMail) rather than a true absence — needs verification against raw MIME headers.
- **List-Unsubscribe-Post header (RFC 8058)**: not found (WARN). Same caveat as above — one-click unsubscribe cannot be confirmed as functional.
- **Authentication-Results header**: not found (WARN). SPF/DKIM/DMARC pass/fail status is unknown from this capture.
- Footer unsubscribe link and physical mailing address (CAN-SPAM requirements) could not be confirmed or denied — not present in the truncated HTML segment provided.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
Could not be assessed: the 78 tracking/redirect links were skipped by the HTTP probe and the HTML truncated before exposing the primary CTA `href` values, so UTM parameter presence and landing-page alignment are unconfirmed in this pass.

## 7. Recommendations
1. Add descriptive `alt` text to all 24 content images currently missing it (tracking pixels can remain `alt=""`).
2. Verify `List-Unsubscribe` and `List-Unsubscribe-Post` headers exist in the raw MIME source (not just what AgentMail's relay captured) — required for Gmail/Yahoo bulk sender compliance.
3. Confirm SPF/DKIM/DMARC alignment via a full `Authentication-Results` header capture; currently unverifiable.
4. Re-run the link/UTM audit against the untruncated HTML and with tracking-link redirects resolved, to confirm landing-page continuity.
5. Review the 6x/5x duplicate pixel calls (`mi.crateandbarrel.com/p/rp/...`, `sr.rlcdn.com/448796.gif`) for unintended redundant firing.
## Recent history

- [[2026-07-30-this-home-office-is-a-study-in-creativity]] — 8/10 (2026-07-30)
- [[2026-07-30-vintage-vibes-are-here-meet-beatrix]] — 8/10 (2026-07-30)
- [[2026-07-30-shop-up-to-60-off-the-summer-sale]] — 8/10 (2026-07-30)

