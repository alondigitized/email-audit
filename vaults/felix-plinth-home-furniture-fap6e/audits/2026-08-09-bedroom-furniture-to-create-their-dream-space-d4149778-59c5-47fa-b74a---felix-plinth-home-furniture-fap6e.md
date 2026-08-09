---
slug: 2026-08-09-bedroom-furniture-to-create-their-dream-space-d4149778-59c5-47fa-b74a---felix-plinth-home-furniture-fap6e
type: email
date: 2026-08-09
persona: felix-plinth-home-furniture-fap6e
score: "5/10"
sender: Crate & Kids
subject: Bedroom furniture to create their dream space →
tags: [email, score-5, sender/crate-kids]
---
# Bedroom furniture to create their dream space →
**Score:** 5/10 · **Type:** Email audit · **2026-08-09**
## Full review
## Technical Audit

# Technical Email QA Audit — Crate & Kids "Bedroom furniture to create their dream space"

## 1. Technical Summary
The email is a standard MSO/Outlook-hardened HTML table layout with heavy tracking instrumentation (pixels, click-redirects, RudderStack); automated QA passed at 57% with 3 warnings and 0 hard failures, driven mainly by missing `alt` text and unverifiable compliance/auth headers.

## 2. Link & Tracking Issues
- 83 tracking/click-redirect links were present but skipped by the automated HTTP prober (expected behavior for `mi.crateandbarrel.com`-style redirect wrappers — not independently verifiable from static HTML alone).
- Multiple beacon/pixel trackers confirmed in source: `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png` (6 instances), `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif`, `sr.rlcdn.com/448796.gif` (5 sequential instances, `n=1`–`n=5`, LiveRamp/RampID sync), and `dv.crateandbarrel.com/o/0663af54-...?mi_mid=...&cp_tp=v` (Movable Ink dynamic content/personalization call).
- No broken or malformed `href` values found in the visible source; full link-by-link resolution not possible since redirect targets were not probed.

## 3. Rendering & Accessibility
- 34 `<img>` elements are missing `alt` attributes, including primary content images (`bbf6f9d4-...png`, product photography under `image.mail.crateandbarrel.com/lib/fe9013727564027a7c/...`) and the Scene7 hero asset `2026_0710_Kids_StorybookLookbook...`. This fails WCAG 1.1.1 and will render as blank/unlabeled for screen reader users and in blocked-image clients.
- Tracking pixels/beacons (RudderStack `448796.gif`, Movable Ink pixel, MI `o.gif`) are also missing `alt`, which is acceptable for non-content beacons but is flagged indiscriminately by the automated check alongside real content images — these should be excluded from remediation scope.
- Markup includes standard MSO conditional comments, `x-apple-disable-message-reformatting`, and dual `@media` breakpoints (460px, 640px, 768px) — no rendering-breaking issues found in the head/style block itself.
- One image `src` shows a malformed/unencoded parameter: `2026%5F0710%5FDTP%5FKids%5FStorybookLookbook%5FSec` — the `%5F` (underscore) encoding suggests a double-encoded or truncated Scene7 asset path; worth confirming the image actually renders rather than 404s, since the source was truncated and the full querystring wasn't visible.

## 4. Personalization & Merge Tokens
- No unresolved merge tags (e.g. `{{`, `%%`, `[[`) or broken personalization syntax found in the visible source.
- Dynamic/personalized content is handled via the Movable Ink call (`dv.crateandbarrel.com/o/...?mi_mid=019fe4e4-6080-7000-9587-e9165d35d7f7&cp_tp=v`) rather than inline merge fields — this is an external dependency; if that endpoint fails, the corresponding content block would silently fail to render (not verifiable from static HTML).

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header**: not found in the captured headers. Per CAN-SPAM this isn't strictly required (a working unsubscribe link in-body suffices), but its absence means no one-click unsubscribe surfaces in Gmail/Yahoo/Outlook UI, which is a deliverability risk beyond legal compliance.
- **List-Unsubscribe-Post header (RFC 8058)**: not found — one-click unsubscribe (POST) is not supported, reinforcing the above.
- **Authentication-Results header**: not found, so SPF/DKIM/DMARC pass/fail status is unknown from this capture. This is flagged as a QA/relay limitation (AgentMail may not be surfacing it) rather than confirmed evidence of an authentication failure — do not treat as a deliverability failure without direct header inspection at the receiving MTA.
- In-body unsubscribe/physical address footer was not visible in the truncated HTML sample provided, so CAN-SPAM footer compliance cannot be confirmed or denied from available evidence.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- Not verifiable from the provided evidence: all outbound CTA links route through `mi.crateandbarrel.com` tracking redirects, which were skipped by the prober, so destination URLs, UTM parameters, and final landing-page alignment cannot be confirmed in this pass.

## 7. Recommendations
1. Add descriptive `alt` text to the 27 content images (product/lifestyle photography, hero banner) — exclude the 8 tracking pixels/beacons (`rlcdn`, `mi.crateandbarrel.com/p/*`, MI beacon `o.gif`) from this fix, as empty `alt=""` is correct for non-content beacons.
2. Verify the malformed-looking Scene7 URL segment (`...StorybookLookbook_Sec` with `%5F` encoding) actually resolves; confirm it isn't a truncated/broken asset reference.
3. Add `List-Unsubscribe` and `List-Unsubscribe-Post` headers if not already sent (may already exist and simply not be captured by the AgentMail relay — confirm against the raw MTA-received headers before treating this as a real gap).
4. Confirm SPF/DKIM/DMARC alignment directly at the receiving mail server, since `Authentication-Results` wasn't captured here and its absence is inconclusive.
5. Re-run link resolution with tracking-redirect probing enabled (or manually spot-check a sample of the 83 skipped links) to confirm UTM parameters and landing-page continuity before sign-off.
## Recent history

- [[2026-08-09-shop-furniture-you-ll-love-now-forever-994d8353-4799-4b28-9336---felix-plinth-home-furniture-fap6e]] — 5/10 (2026-08-09)
- [[2026-08-09-durable-stylish-elegant-dinnerware-2b80310f-5123-417d-aadf---felix-plinth-home-furniture-fap6e]] — 5/10 (2026-08-09)
- [[2026-08-09-new-introducing-howell-x-harrier-for-crate-barrel-5ab0f6b4-3d06-4ed3-ba73---felix-plinth-home-furniture-fap6e]] — 7/10 (2026-08-09)

