---
slug: 2026-08-08-this-celeb-baby-s-new-nursery-paradise
type: email
date: 2026-08-08
persona: ceci-chrome-cb2-fap6e
score: "7/10"
sender: Crate & Kids
subject: This celeb baby’s new nursery? Paradise →
tags: [email, score-7, sender/crate-kids]
---
# This celeb baby’s new nursery? Paradise →
**Score:** 7/10 · **Type:** Email audit · **2026-08-08**
## Full review
## Technical Audit

# Technical Audit — Crate & Kids "This celeb baby's new nursery? Paradise →"

## 1. Technical Summary
This is a Marigold/Cheetah Mail (MI)-templated HTML email with standard Outlook/mobile hack scaffolding; automated QA returned a 50% pass rate driven by missing unsubscribe headers, absent authentication data, and widespread missing `alt` attributes.

## 2. Link & Tracking Issues
- 108 tracking/click-redirect links were skipped by the HTTP prober (destination validity unconfirmed) — cannot verify these don't 404 or redirect incorrectly.
- Multiple tracking pixels fire on open:
  - `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif` — MI open-tracking pixel.
  - `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png` — appears **6 times** in source (same `mi_u` param each time), which is redundant duplication rather than a single fire.
  - `sr.rlcdn.com/448796.gif` (LiveRamp) — appears **5 times** with sequential `n=1` through `n=5` params, i.e. 5 separate identity-sync calls per open. Worth flagging as excessive redundant third-party calls, which adds load time and duplicate data-broker pings for no apparent functional benefit.
  - `dv.crateandbarrel.com/o/7ada2e7d-2a1d-4462-94d4-703953eb2fb1?mi_mid=...&cp_tp=v` — a dynamic-content/personalization endpoint call fired at render time.

## 3. Rendering & Accessibility
- **~60 images missing `alt` text** (per QA), spanning primary content images, spacer/divider images, and all tracking pixels — a genuine accessibility gap for screen readers and image-blocked clients (alt text should at minimum be empty `alt=""` for decorative/pixel images, and descriptive for content images).
- Leftover unfinished template placeholder shipped to production: `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` (note the typo "IMPUT") — indicates an ESP build step wasn't cleaned up before send.
- Redundant/duplicate `<meta name="format-detection">` declarations: one combined tag (`telephone=no,address=no,email=no,date=no,url=no`) followed by three more individual tags repeating `date=no`, `address=no`, `telephone=no`. Not a functional bug, but dead weight in the `<head>`.
- Legacy XHTML 1.0 Transitional doctype + full MSO conditional/VML scaffolding present — expected for this ESP, no defects observed in the provided fragment.

## 4. Personalization & Merge Tokens
Source provided is truncated before the body content, and no merge tags (e.g. `%%FIRSTNAME%%`, `{{token}}`) appear in the header/style block supplied. Insufficient data to confirm presence or correctness of personalization tokens — not marked "no issues" since this couldn't actually be verified.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header not found** — no header-level one-click unsubscribe mechanism detected.
- **List-Unsubscribe-Post header not found (RFC 8058)** — even if a List-Unsubscribe header exists elsewhere, one-click (POST) unsubscribe per Gmail/Yahoo bulk-sender requirements is not confirmed present.
- **Authentication-Results header not found** — SPF/DKIM/DMARC pass/fail status cannot be verified from the captured headers (may be a relay-capture limitation rather than an actual authentication failure — flagged as unknown, not confirmed-failing).

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
Cannot assess: all 108 outbound links were skipped by the prober and the provided HTML is truncated before any CTA `href` values are visible, so UTM parameters and landing-page alignment can't be confirmed from available data.

## 7. Recommendations
- Add `alt=""` to decorative/tracking images and descriptive `alt` text to the ~50 content images flagged.
- Remove the leftover `<!--[IMPUT HERE...]-->` placeholder comment before future sends.
- Confirm List-Unsubscribe / List-Unsubscribe-Post headers are actually being sent (may be an AgentMail relay capture gap — verify against the raw MTA transaction, not just this capture).
- Investigate why the `rp/f3c0d22992a01946.png` pixel and `sr.rlcdn.com` sync pixel each fire multiple redundant times (6x and 5x respectively) — likely a template loop bug rather than intentional behavior.
- Re-run link/UTM continuity checks against the full (untruncated) HTML to confirm landing-page alignment, since this pass couldn't evaluate it.
## Recent history

- [[2026-08-08-time-for-a-new-coffee-table-here-s-how-to-pick-one]] — 6/10 (2026-08-08)
- [[2026-08-07-the-best-living-rooms-on-our-feed]] — 5/10 (2026-08-07)
- [[2026-08-07-nursery-faves-at-prices-you-ll-love]] — 8/10 (2026-08-07)

