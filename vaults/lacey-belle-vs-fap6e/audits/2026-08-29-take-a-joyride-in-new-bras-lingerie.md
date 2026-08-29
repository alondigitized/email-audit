---
slug: 2026-08-29-take-a-joyride-in-new-bras-lingerie
type: email
date: 2026-08-29
persona: lacey-belle-vs-fap6e
score: "8/10"
sender: "Victoria's Secret"
subject: Take a Joyride in NEW Bras & Lingerie
tags: [email, score-8, sender/victoria-s-secret]
---
# Take a Joyride in NEW Bras & Lingerie
**Score:** 8/10 · **Type:** Email audit · **2026-08-29**
## Full review
## Technical Audit

## 1. Technical Summary
Standard SFMC-templated marketing email; renders responsively with mobile media queries, but ships one broken CTA link and several unencrypted third-party tracking pixels flagged by automated QA.

## 2. Link & Tracking Issues
- **Broken link (400):** SMS signup CTA → `https://vs.attn.tv/p/TaM/email` returns HTTP 400 (link text: "Let's text. Sign up for SMS..."). This is a functional defect, not just a tracking miss.
- Open-tracking pixel present twice: `https://click.e1.victoriassecret.com/open.aspx?ES3ERMXSZR5ENI24NAKOQYY66I.70247&d=70247&bmt=0` (both instances identical — duplicate, likely template artifact from nested wrapper tables).
- 41 additional tracking/click-redirect links were skipped by the automated prober (expected — these are SFMC `click.e1.victoriassecret.com` redirect wrappers, not directly resolvable via HTTP probe). Not flagged as broken, but unverified individually.
- 10 sequential Dotomi ad pixels (`pub1.php`–`pub10.php`) load over plain `http://` — see Compliance/Rendering notes below; functionally these are third-party ad-tracking beacons, not content images.

## 3. Rendering & Accessibility
- **Missing `alt` text** on 12 images, including the primary content image `5bcec3ac-502d-4d8f-b48c-0a3d20e6e3c2.png` (`image.e1.victoriassecret.com`) and all 10 Dotomi tracking pixels plus the `dotomi.com/ucm/UCMController` pixel.
- **Mixed content / non-HTTPS sources:** 11 images load via `http://` (`login.dotomi.com/ucm/UCMController...` and `ads.dotomi.com/cookieredir/2482/pub1.php` through `pub10.php`). On an HTTPS-loaded webmail client these will be blocked or flagged as insecure content; at minimum they degrade to broken/blocked image icons in strict clients (Gmail, Outlook web).
- Media queries and MSO conditional comments are present and structured correctly (`@media max-width:480px`, `@media max-width:640px`, `<!--[if mso]-->` font fix) — no structural rendering defects found in the truncated markup.
- `<title>` tag is empty and hidden via inline style (`display:none;max-height:0px`) — cosmetic, not a functional bug.

## 4. Personalization & Merge Tokens
No AMPscript or merge-token placeholders visible in the truncated source — the `<div id="AMPScript">` block only wraps empty `<!-- Ampscript v0 START/END -->` comments. No unresolved `%%=...=%%` tokens or literal placeholder text detected in the provided excerpt. Cannot confirm behavior for the truncated remainder of the email.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header:** not found in the captured headers (may be an artifact of the AgentMail relay rather than the sender's actual header — cannot confirm from this data alone).
- **List-Unsubscribe-Post (RFC 8058):** not found — one-click unsubscribe support unconfirmed.
- **Authentication-Results (SPF/DKIM/DMARC):** not found — authentication status unknown via this relay.
- No unsubscribe link or physical-address footer is visible in the truncated HTML body provided, so CAN-SPAM footer compliance cannot be verified from this excerpt.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- SMS signup CTA is broken (400) rather than a continuity mismatch — see Section 2.
- The 41 skipped tracking links use SFMC's `click.e1.victoriassecret.com` redirect domain, which is standard for UTM/click-tracking pass-through; destination/UTM alignment on the landing pages could not be verified since the prober did not resolve them.

## 7. Recommendations
1. Fix or remove the SMS signup CTA (`https://vs.attn.tv/p/TaM/email`) — currently returns HTTP 400.
2. Upgrade all Dotomi pixel/ad-tracking sources from `http://` to `https://` (11 instances: `login.dotomi.com`, `ads.dotomi.com/cookieredir/2482/pub1–10.php`) to prevent mixed-content blocking.
3. Add `alt=""` (decorative) to tracking pixels and meaningful `alt` text to the primary content image `5bcec3ac-502d-4d8f-b48c-0a3d20e6e3c2.png`.
4. Verify `List-Unsubscribe` / `List-Unsubscribe-Post` and `Authentication-Results` are actually present in the raw sender headers — current absence may be a relay artifact rather than a true compliance gap; confirm with a direct header capture outside AgentMail.
5. Remove the duplicate open-tracking pixel if it's not intentional (same tracking URL appears twice in the head of the document).
## Recent history

- [[2026-08-19-last-day-25-off-when-you-spend-75]] — 6/10 (2026-08-19)
- [[2026-08-18-final-hours-40-off-extra-10-off-for-members]] — 7/10 (2026-08-18)
- [[2026-08-18-40-off-extra-10-off-for-members]] — 6/10 (2026-08-18)

