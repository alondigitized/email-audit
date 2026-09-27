---
slug: 2026-09-21-new-to-covet-free-design-help--felix-plinth-home-furniture-fap6e
type: email
date: 2026-09-21
persona: felix-plinth-home-furniture-fap6e
score: "6/10"
sender: CB2 Free Design Services
subject: New to covet. Free design help.
tags: [email, score-6, sender/cb2-free-design-services]
---
# New to covet. Free design help.
**Score:** 6/10 · **Type:** Email audit · **2026-09-21**
## Full review
## Technical Audit

1. Technical Summary

Email renders via a legacy MSO/hybrid HTML template with heavy tracking-pixel and third-party redirect infrastructure; primary compliance and deliverability signals could not be confirmed, and multiple images lack alt text or use insecure (`http://`) sources.

2. Link & Tracking Issues

- 60 tracking/click-redirect links were present but skipped by automated HTTP probing (redirect/tracking domains excluded from live checks), so destination validity is unconfirmed.
- Multiple third-party ad-redirect calls to `ads.dotomi.com` (`pub1.php` through `pub10.php`, query param `d98e199bf5027afea04b790655b3dee2=1`) and `login.dotomi.com/ucm/UCMController` are served over plain `http://`, not `https://`. Non-HTTPS resources are commonly blocked or stripped by mail clients (Gmail, Outlook), which can silently break tracking/attribution.
- Tracking pixels present: `mi.cb2.com/p/up/.../o.gif` and `dv.cb2.com/o/55f96667-...` (MI/Bronto-style open tracking) — functioning as expected for open tracking, no issue beyond alt-text noted below.

3. Rendering & Accessibility

- 11 content images (`image.mail.cb2.com/lib/fe9213727564027a72/m/1/*.jpg`) are missing `alt` text — screen readers and image-blocked clients will show no fallback content.
- The `http://` ad-redirect images listed above are also missing `alt` attributes, compounding both the security/mixed-content and accessibility issues.
- Template uses legacy MSO conditional comments, XHTML transitional doctype, and `-ms-text-size-adjust`/`-webkit-text-size-adjust` resets — consistent with a hybrid Outlook/mobile-safe build; no structural rendering defects observed in the visible source.

4. Personalization & Merge Tokens

No merge tokens or personalization placeholders (e.g., `%%FIRSTNAME%%`, `{{first_name}}`) are visible in the truncated source. No issues found based on available evidence.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)

- `List-Unsubscribe` header not detected — may be a relay-capture limitation (AgentMail) rather than a true absence; cannot confirm compliance from this data alone.
- `List-Unsubscribe-Post` (RFC 8058, one-click unsubscribe) header not detected — same caveat; if genuinely absent, this is a Gmail/Yahoo bulk-sender requirement gap.
- `Authentication-Results` header (SPF/DKIM/DMARC status) not detected — authentication posture is unverified from this relay; recommend checking headers via a non-relayed capture (e.g., direct MX log or a service that preserves raw headers).
- In-body unsubscribe/footer link and physical address were not visible in the truncated HTML provided — cannot confirm CAN-SPAM footer compliance from the available source; flagging as unverified rather than a confirmed defect.

6. Email-to-Site Continuity (UTM params, landing page alignment)

Tracking/redirect links (60 total) were not probed, so UTM parameter presence and landing-page alignment with `cb2.com` cannot be verified from this data. No direct claim can be made either way.

7. Recommendations

- Re-run header capture through a non-relay path (direct SMTP/MX log) to get a definitive read on `List-Unsubscribe`, `List-Unsubscribe-Post`, and `Authentication-Results` before treating them as missing.
- Migrate the `ads.dotomi.com` and `login.dotomi.com` calls from `http://` to `https://` to avoid mixed-content blocking in modern mail clients.
- Add descriptive (or empty, if purely decorative) `alt` attributes to the 11 `image.mail.cb2.com` content images and all pixel/redirect `<img>` tags.
- Manually sample a subset of the 60 skipped tracking links to confirm they resolve and carry correct UTM parameters to `cb2.com` landing pages.
## Recent history

- [[2026-09-21-warehouse-sale-up-to-60-off-new-duvets-in-florals-plaids-solid-hues--felix-plinth-home-furniture-fap6e]] — 5/10 (2026-09-21)
- [[2026-09-21-caraway-made-for-cleaner-cooking-in-colors-you-ll-love--felix-plinth-home-furniture-fap6e]] — 6/10 (2026-09-21)
- [[2026-09-21-the-sofa-that-will-make-you-love-your-living-room--felix-plinth-home-furniture-fap6e]] — 6/10 (2026-09-21)

