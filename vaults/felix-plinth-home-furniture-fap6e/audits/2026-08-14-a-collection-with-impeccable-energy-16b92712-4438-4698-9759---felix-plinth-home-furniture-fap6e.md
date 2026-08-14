---
slug: 2026-08-14-a-collection-with-impeccable-energy-16b92712-4438-4698-9759---felix-plinth-home-furniture-fap6e
type: email
date: 2026-08-14
persona: felix-plinth-home-furniture-fap6e
score: "6/10"
sender: CB2
subject: A collection with impeccable energy
tags: [email, score-6, sender/cb2]
---
# A collection with impeccable energy
**Score:** 6/10 · **Type:** Email audit · **2026-08-14**
## Full review
## Technical Audit

1. Technical Summary
CB2 promotional email built on the "MI" (Marigold/Cheetah Digital) ESP template, with a Dotomi/Merkle third-party ad-sync pipeline embedded. 57% automated pass rate driven by unsubscribe-header gaps, missing image alt text, and multiple insecure `http://` tracking pixels.

2. Link & Tracking Issues
- 10 sequential `http://ads.dotomi.com/cookieredir/2437/pub{1-10}.php?d98e199bf5027afea04b790655b3dee2=1` calls plus `http://login.dotomi.com/ucm/UCMController?dtm_com=2&dtm_cid=2437&dtm_cmagic=654788&dtm_fid=103&dtm_format=6&cli_promo_id` — all served over plaintext HTTP. Modern mail clients (Outlook, Gmail image proxy) commonly block or strip non-HTTPS image/pixel requests, meaning this cookie-sync chain likely fails silently for a large share of opens.
- 68 outbound tracking/click-redirect links were present but skipped by the automated HTTP prober (expected behavior for redirect-domain links); no destination-resolution issues can be confirmed or ruled out from this pass.
- Legitimate first-party tracking pixels present and HTTPS: `https://mi.cb2.com/p/up/09aebc5b21344cf7/o.gif` and `https://dv.cb2.com/o/8ea97b7c-8b24-4267-917e-a74d727a2e16`.

3. Rendering & Accessibility
- 9 content images missing `alt` text (all `image.mail.cb2.com/lib/fe9213727564027a72/m/1/*.jpg`), plus the 11 Dotomi pixel/redirect images also flagged for missing alt — screen readers and image-blocked clients get no fallback context.
- Template uses standard MSO conditional comments, `@media` breakpoints at 418px/690px/768px, and `-ms-text-size-adjust`/`-webkit-text-size-adjust` resets — no structural rendering defects detected in the truncated source.
- Multiple `@font-face` declarations (Lineto Brown, GT Sectra, HNW05 via crateandbarrel.com) with no fallback stack failure risk noted, though heavy custom-font reliance means Outlook/Windows Mail will render fallback sans-serif only (expected, not a bug).

4. Personalization & Merge Tokens
No merge tokens or personalization placeholders (e.g. `%%FIRSTNAME%%`, `{{...}}`) found in the truncated HTML source. No issues found.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- `List-Unsubscribe` header not detected — may be an AgentMail relay capture gap rather than a true absence; cannot confirm CAN-SPAM one-click compliance from this data alone.
- `List-Unsubscribe-Post` (RFC 8058) header not detected — one-click unsubscribe cannot be confirmed as supported.
- `Authentication-Results` header (SPF/DKIM/DMARC) not found — sender authentication status is unverified via this relay; recommend checking raw headers at the source MTA rather than the relay-captured copy.

6. Email-to-Site Continuity (UTM params, landing page alignment)
Not assessable — the truncated HTML source does not include the visible CTA `href` destinations, and the 68 tracking links were skipped by the prober, so UTM parameter presence/consistency and landing-page alignment cannot be confirmed either way.

7. Recommendations
- Migrate the 10 Dotomi `pub*.php` cookie-sync calls and the `UCMController` pixel to HTTPS to avoid silent blocking by mail clients that reject mixed/insecure content.
- Add descriptive `alt` text to all 9 `image.mail.cb2.com` content images for accessibility and image-blocked rendering.
- Verify `List-Unsubscribe` / `List-Unsubscribe-Post` headers directly at the originating MTA (outside the AgentMail relay) to confirm true CAN-SPAM/RFC 8058 compliance status.
- Re-run link/UTM continuity checks against the full (non-truncated) HTML to validate CTA destinations and landing-page parameter alignment, since this pass could not assess section 6.
## Recent history

- [[2026-08-14-new-high-chair-that-will-look-beautiful-in-your-dining-room--felix-plinth-home-furniture-fap6e]] — 5/10 (2026-08-14)
- [[2026-08-14-the-high-chair-they-ll-use-until-middle-school-really-in-our-exclusive-color--felix-plinth-home-furniture-fap6e]] — 5/10 (2026-08-14)
- [[2026-08-14-introducing-our-new-kravet-collection--felix-plinth-home-furniture-fap6e]] — 5/10 (2026-08-14)

