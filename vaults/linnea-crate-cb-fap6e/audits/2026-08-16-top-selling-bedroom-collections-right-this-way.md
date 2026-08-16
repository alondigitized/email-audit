---
slug: 2026-08-16-top-selling-bedroom-collections-right-this-way
type: email
date: 2026-08-16
persona: linnea-crate-cb-fap6e
score: "6/10"
sender: Crate & Kids
subject: Top-selling bedroom collections right this way →
tags: [email, score-6, sender/crate-kids]
---
# Top-selling bedroom collections right this way →
**Score:** 6/10 · **Type:** Email audit · **2026-08-16**
## Full review
## Technical Audit

## Technical Audit — "Top-selling bedroom collections right this way →" (Crate & Kids)

**1. Technical Summary**
Standard Salesforce Marketing Cloud/MI-templated HTML email with heavy legacy MSO/Outlook conditional CSS; automated QA passed 57% with 0 hard issues and 3 warning categories (compliance headers, missing alt text, unprobed tracking links).

**2. Link & Tracking Issues**
- 65 tracking/click-redirect links were skipped by the automated HTTP prober (domains flagged as tracking/redirect infrastructure, not content links) — link destinations are unverified and should be manually click-tested before send.
- Multiple pixel trackers present: `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png` (6 instances), `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif`, `dv.crateandbarrel.com/o/af2e1902-...` (Salesforce MI open/view tracking), and `sr.rlcdn.com/448796.gif` (LiveRamp/RampID identity resolution pixel, fired 5x with sequential `n=1..5` params) — consistent with standard MC personalization/identity stitching, not flagged as anomalous.
- No broken/malformed `href` values found in the visible source excerpt.

**3. Rendering & Accessibility**
- 22 images flagged missing `alt` attributes across both content images (Scene7 CDN: `s7d5.scene7.com/is/image/Crate/042025_CBK_FurnitureCollections2_*`) and transactional/tracking pixels (Salesforce MI, LiveRamp). Content images lacking alt text is an accessibility gap (screen readers, images-blocked email clients); tracking pixels lacking alt text is expected/non-issue since they're 1x1 or decorative.
- Template includes standard defensive CSS for Outlook/MSO (`mso-table-lspace`, conditional comments), Apple Mail reformatting prevention (`x-apple-disable-message-reformatting`), and `format-detection` meta tags to suppress auto-linking of phone/date/address — no issues found in this layer.
- `color-scheme`/`supported-color-schemes` locked to `light` only — no dark-mode-specific stylesheet provided, which can cause forced/inverted rendering in dark-mode-only clients (Outlook.com, some Gmail dark mode). Not flagged by QA but worth noting given no dark variant is defined.

**4. Personalization & Merge Tokens**
No merge/personalization tokens (e.g. `%%FirstName%%`, AMPscript `%%=...=%%`) visible in the truncated source. No issues found in the visible portion; recommend confirming the untruncated body doesn't contain unresolved token syntax before send.

**5. Compliance (CAN-SPAM, unsubscribe, authentication headers)**
- **[WARN]** `List-Unsubscribe` header not detected — may be a relay artifact (AgentMail may not surface the header) rather than a true absence; verify against raw source headers from the original ESP send, not just the relay copy.
- **[WARN]** `List-Unsubscribe-Post` (RFC 8058 one-click unsubscribe) not detected — same caveat; if genuinely absent, this is a Gmail/Yahoo bulk sender requirement gap as of their 2024 sender guidelines.
- **[WARN]** `Authentication-Results` header (SPF/DKIM/DMARC pass/fail) not present via the AgentMail relay — authentication status cannot be verified from this data; requires checking original headers at the receiving MTA.
- Physical mailer address / footer unsubscribe link were not visible in the truncated HTML — cannot confirm CAN-SPAM footer compliance from available source; flag for manual check of the untruncated footer.

**6. Email-to-Site Continuity (UTM params, landing page alignment)**
Cannot verify — the 65 tracking/redirect links were skipped by the prober, so final landing-page URLs and UTM parameters are unknown. Recommend manually resolving a sample of CTA links (header nav, hero CTA, product tiles, footer) through the redirect chain to confirm they land on live, matching pages with correct `utm_source`/`utm_medium`/`utm_campaign` values.

**7. Recommendations**
1. Add descriptive `alt` text to the 4 content images (Scene7 furniture collection images); leave tracking pixels as-is (`alt=""` is acceptable/expected for these).
2. Manually resolve a sample of the 65 skipped tracking links to confirm they redirect to live, correctly-tagged landing pages.
3. Verify `List-Unsubscribe` / `List-Unsubscribe-Post` headers and `Authentication-Results` (SPF/DKIM/DMARC) directly against the original ESP send headers, since the AgentMail relay may simply not be surfacing them rather than them being absent.
4. Confirm the untruncated HTML contains no unresolved personalization tokens and includes a compliant CAN-SPAM footer (physical address + unsubscribe link).
## Recent history

- [[2026-08-16-twin-tween-room-makeover-see-how-they-worked-with-the-design-desk]] — 5/10 (2026-08-16)
- [[2026-08-16-our-bedroom-bestsellers-up-to-25-off-for-a-limited-time]] — 6/10 (2026-08-16)
- [[2026-08-15-people-coming-for-dinner-start-here]] — 5/10 (2026-08-15)

