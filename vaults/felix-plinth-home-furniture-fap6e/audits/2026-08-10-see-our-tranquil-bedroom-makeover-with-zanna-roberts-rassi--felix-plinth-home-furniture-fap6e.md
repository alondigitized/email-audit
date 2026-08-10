---
slug: 2026-08-10-see-our-tranquil-bedroom-makeover-with-zanna-roberts-rassi--felix-plinth-home-furniture-fap6e
type: email
date: 2026-08-10
persona: felix-plinth-home-furniture-fap6e
score: "7/10"
sender: Crate & Barrel
subject: See our tranquil bedroom makeover with Zanna Roberts Rassi
tags: [email, score-7, sender/crate-barrel]
---
# See our tranquil bedroom makeover with Zanna Roberts Rassi
**Score:** 7/10 · **Type:** Email audit · **2026-08-10**
## Full review
## Technical Audit

# Technical Email Audit: Crate & Barrel — "Tranquil Bedroom Makeover"

**1. Technical Summary**
Email uses a standard MI/Cheetah Digital-style responsive table layout with heavy legacy Outlook/mso conditional CSS. Core technical issues are missing image alt text across all content and tracking images, and unconfirmed unsubscribe/authentication headers at the transport layer.

**2. Link & Tracking Issues**
- 73 tracking/click-redirect links present (skipped in HTTP probe — domain-based redirect wrappers, consistent with standard ESP click tracking).
- Multiple open-tracking pixels detected: `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png` (6 instances) and `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif` — standard MI (Cheetah Digital) open tracking.
- Third-party tracking pixel from `sr.rlcdn.com` (LiveRamp/RampID) present 5 times with sequential `n=1`–`n=5` params — third-party data-partner sync pixels, not core ESP tracking.
- Additional beacon at `dv.crateandbarrel.com/o/62b394cb-...?mi_mid=...&cp_tp=v` — dynamic content/view-tracking beacon.
- No broken or malformed link syntax found in the visible source.

**3. Rendering & Accessibility**
- **34 images missing `alt` text**, including all primary content images (lifestyle/product photography) and all tracking pixels/GIFs. Content images lacking alt text fail WCAG 1.1.1 and degrade the message when images are blocked (a common default in Outlook/Gmail).
- Markup includes standard legacy fixes (`mso-*` conditionals, `ExternalClass`, `-webkit-text-size-adjust`) appropriate for cross-client rendering; no structural rendering defects found in the truncated source.
- Stray HTML comment typo `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` — cosmetic template artifact, not rendering-impacting.

**4. Personalization & Merge Tokens**
No merge tokens or personalization placeholders (e.g. `{{FirstName}}`, unresolved `%%...%%`) found in the truncated source. No issues found.

**5. Compliance (CAN-SPAM, unsubscribe, authentication headers)**
- **List-Unsubscribe header not found** — could not confirm one-click unsubscribe support at the header level; may be a relay-capture limitation (AgentMail) rather than a true absence. Needs verification directly against the raw source MIME headers.
- **List-Unsubscribe-Post header not found** (RFC 8058) — same caveat; if genuinely absent, mailbox providers (Gmail/Yahoo) may not surface one-click unsubscribe, which is a bulk-sender requirement as of 2024.
- **Authentication-Results header not found** — SPF/DKIM/DMARC pass/fail status unknown from this data; likely stripped by the AgentMail relay rather than a true auth failure. Cannot confirm compliance either way from available evidence.
- Footer/unsubscribe link presence in-body was not visible in the truncated HTML — cannot confirm CAN-SPAM footer requirements (physical address, in-body unsubscribe link) from the provided source excerpt.

**6. Email-to-Site Continuity (UTM params, landing page alignment)**
Cannot verify — all outbound links are wrapped in click-tracking redirects (`mi_u=...` tokens) and were skipped by the HTTP probe, so destination URLs and UTM parameters are not visible in this data. Recommend resolving a sample of redirect links to confirm they land on matching bedroom/Zanna Roberts Rassi campaign pages with correct UTM tagging.

**7. Recommendations**
1. Add descriptive `alt` text to all 25 content images (empty `alt=""` is acceptable only for the tracking pixels/beacons, not for lifestyle/product imagery).
2. Verify List-Unsubscribe / List-Unsubscribe-Post headers against the raw MIME source (not just the AgentMail-relayed copy) to confirm RFC 8058 one-click compliance.
3. Verify Authentication-Results (SPF/DKIM/DMARC) against raw headers — current "not found" is inconclusive due to relay stripping, not evidence of failure.
4. Resolve a sample of the 73 tracking redirect links to confirm final destination URLs carry correct UTM parameters and land on live, matching pages.
5. Fix the stray template placeholder comment (`[IMPUT HERE CLIENT...]`) before next send cycle — indicates an unfinished ESP template variable.
## Recent history

- [[2026-08-10-in-stock-on-sale-furniture-more--felix-plinth-home-furniture-fap6e]] — 5/10 (2026-08-10)
- [[2026-08-10-our-best-gazebo-deals--felix-plinth-home-furniture-fap6e]] — 2/10 (2026-08-10)
- [[2026-08-09-win-a-cubs-game--felix-plinth-home-furniture-fap6e]] — 5/10 (2026-08-09)

