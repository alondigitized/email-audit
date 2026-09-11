---
slug: 2026-09-11-don-t-miss-this-appiversary-treat-8a05b738-2a25-4776-bf6c-
type: email
date: 2026-09-11
persona: rae-l
score: "6/10"
sender: Sally Beauty
subject: Don’t miss this Appiversary treat 💅
tags: [email, score-6, sender/sally-beauty]
---
# Don’t miss this Appiversary treat 💅
**Score:** 6/10 · **Type:** Email audit · **2026-09-11**
## Full review
## Technical Audit

## Technical Audit — "Don't miss this Appiversary treat 💅" (Sally Beauty)

**1. Technical Summary**
Email uses a standard responsive VML/MSO template with third-party tracking pixels; automated QA passed 57% of checks with 3 warnings and no hard failures, primarily around missing email-authentication headers and one non-HTTPS tracking beacon.

**2. Link & Tracking Issues**
- 57 tracking/click-redirect links detected and skipped from HTTP probing (standard for ESP click-tracking domains) — not independently verifiable as functional from source alone.
- `UCMController` pixel loads over plain HTTP: `http://login.dotomi.com/ucm/UCMController?dtm_com=2&dtm_cid=2990&dtm_cmagic=f6b5f8&dtm_fid=103&dtm_format=6&cli_promo_id` — non-HTTPS resources are frequently blocked or stripped by mail clients (Gmail/Outlook proxy image loading over HTTPS only), risking silent tracking failure.

**3. Rendering & Accessibility**
- Three tracking/impression pixels missing `alt` text:
  - `pxl.mon-trk.com/987bfe61-.../003aZ00000rqS8GQAU`
  - `t.myvisualiq.net/impression_pixel?...`
  - `login.dotomi.com/ucm/UCMController?...`
  These are 1x1 beacons, not content images, so the missing alt has no visible accessibility impact for sighted/screen-reader users but is worth noting for completeness.
- Template includes standard MSO/VML conditionals and Outlook-safe font fallbacks (`Founders Grotesk, Helvetica, sans-serif`); no broken conditional comments observed in the visible source.
- Custom `@font-face` (Open Sans via Google Fonts CDN) has no fallback guarantee in clients that block remote font loading (Outlook desktop) — mitigated by the `sans-serif` fallback in the `a` selector, but body text font-family wasn't visible in the truncated source to confirm the same fallback is applied broadly.

**4. Personalization & Merge Tokens**
No unresolved merge tags (e.g., `{{first_name}}`, `%%TOKEN%%`) or empty personalization blocks found in the visible/truncated HTML.

**5. Compliance (CAN-SPAM, unsubscribe, authentication headers)**
- `List-Unsubscribe` header not detected — QA notes this may be a relay artifact (AgentMail) rather than a true absence at the source ESP; cannot confirm compliance status from this data alone.
- `List-Unsubscribe-Post` (RFC 8058 one-click unsubscribe) not detected, consistent with the above.
- `Authentication-Results` header (SPF/DKIM/DMARC) not found — cannot confirm sending-domain authentication status; this is a relay-visibility gap, not necessarily an ESP-side failure.
- No in-body unsubscribe link/footer content was visible in the truncated HTML to confirm CAN-SPAM footer compliance (physical address, unsubscribe link) — recommend reviewing full source/footer directly.

**6. Email-to-Site Continuity (UTM params, landing page alignment)**
Not verifiable from the truncated source — the 57 tracking links were skipped from probing, so destination URLs, UTM parameters, and landing-page alignment cannot be confirmed in this pass.

**7. Recommendations**
- Replace the HTTP `dotomi.com` UCMController pixel with an HTTPS endpoint to avoid mixed-content blocking by mail clients.
- Add empty `alt=""` attributes to tracking pixels for clean HTML/accessibility validation (no visual effect, silences automated alt-text warnings).
- Confirm with the ESP/ISP relay (AgentMail) whether `List-Unsubscribe`, `List-Unsubscribe-Post`, and `Authentication-Results` headers are being stripped in transit vs. genuinely absent at origin — this materially affects deliverability and CAN-SPAM one-click compliance and should be verified against raw SMTP headers, not just this relay capture.
- Re-run link/UTM audit against the full (untruncated) HTML with tracking-domain probing enabled or an unwrapped click-map to confirm landing-page and UTM alignment.
## Recent history

- [[2026-08-19-this-style-has-limited-availability]] — 5/10 (2026-08-19)
- [[2026-08-19-your-fall-beauty-routine-starts-here-4793d7c9-b378-4388-a060-]] — 7/10 (2026-08-19)
- [[2026-08-19-1-free-mini-3-ways-to-wear]] — 7/10 (2026-08-19)

