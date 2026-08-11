---
slug: 2026-08-11-top-picks-that-parents-love
type: email
date: 2026-08-11
persona: ceci-chrome-cb2-fap6e
score: "7/10"
sender: Crate & Kids
subject: ⭐⭐⭐⭐⭐Top picks that parents love →
tags: [email, score-7, sender/crate-kids]
---
# ⭐⭐⭐⭐⭐Top picks that parents love →
**Score:** 7/10 · **Type:** Email audit · **2026-08-11**
## Full review
## Technical Audit

## Technical Audit — Crate & Kids "Top picks that parents love"

### 1. Technical Summary
Email uses a legacy XHTML transitional table-based template with standard MSO/Outlook conditional comments; automated QA passed 57% of checks with 0 hard failures and 3 warning categories, concentrated in missing alt text and unverifiable auth/unsubscribe headers.

### 2. Link & Tracking Issues
- 75 tracking/click-redirect links were skipped by the automated HTTP prober (domain-based redirect wrappers) — destination validity could not be confirmed programmatically.
- Multiple tracking pixels/beacons present: `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png` (×6), `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif`, `sr.rlcdn.com/448796.gif` (×5, LiveRamp/RampID beacon), and `dv.crateandbarrel.com/o/ec140cbc-...?mi_mid=...&cp_tp=v` (likely DoubleVerify/viewability beacon). These are functioning as expected for open/viewability tracking; no anomalies detected beyond the standard volume.
- Recommend a manual click-through pass on the 75 skipped tracking links since automation could not confirm they resolve (vs. broken/404 redirects).

### 3. Rendering & Accessibility
- **31 images missing `alt` text**, including primary content images (e.g. `bbf6f9d4-...png`, `3ff87ae4-...jpg`, `cca69649-...jpg`) and several tracking/beacon pixels. Content images without alt text fail WCAG 1.1.1 and degrade the experience for screen-reader users and when images are blocked by default (common in Outlook/Gmail).
- Template includes standard responsive/MSO scaffolding (`@media max-width:460px`, Outlook VML conditionals, `x-apple-disable-message-reformatting`) — no structural rendering defects observed in the visible source.
- Beacon/tracking pixels (`sr.rlcdn.com`, `mi.crateandbarrel.com`) lacking alt text is expected/harmless (1×1 images); the finding is only material for the content images listed above.

### 4. Personalization & Merge Tokens
No unresolved merge tags (e.g. `{{first_name}}`, `%%FIELD%%`) or broken personalization syntax found in the visible source. Query-string identifiers (`mi_u=`, `mi_mid=`) appear to carry hashed subscriber IDs for tracking rather than on-page personalization — no issues found.

### 5. Compliance (CAN-SPAM, unsubscribe, authentication)
- **List-Unsubscribe header: not found** — may be relay-stripped (AgentMail) or genuinely absent; cannot confirm one-click unsubscribe compliance without raw headers from the originating MTA.
- **List-Unsubscribe-Post header: not found** — RFC 8058 one-click unsubscribe cannot be confirmed as supported.
- **Authentication-Results header: not found** — SPF/DKIM/DMARC pass/fail status is unknown from this capture; cannot verify sender authentication.
- These are flagged as WARN, not FAIL, because the AgentMail relay may not be surfacing/forwarding original headers — recommend checking headers at the originating MTA (Cheetah Mail/crateandbarrel.com sending infra) rather than the relay-captured copy before concluding non-compliance.
- No visible unsubscribe link/footer text in the truncated HTML sample — cannot confirm presence or wording; flagged for follow-up since the source was truncated before the footer.

### 6. Email-to-Site Continuity (UTM params, landing page alignment)
Cannot be verified — all outbound CTA links route through click-tracking redirect domains that were skipped by the automated prober, so destination URLs, UTM parameters, and final landing-page alignment are not observable in this dataset.

### 7. Recommendations
1. Add descriptive `alt` text to the 25 content images flagged (product/lifestyle images); tracking pixels can remain `alt=""` intentionally.
2. Manually resolve the 75 skipped tracking links to confirm they redirect to live, correct landing pages and inspect for UTM continuity with the destination site.
3. Re-run the header capture directly against the originating MTA (bypassing the AgentMail relay) to confirm List-Unsubscribe, List-Unsubscribe-Post, and Authentication-Results (SPF/DKIM/DMARC) are actually present and passing — current absence is inconclusive, not confirmed non-compliance.
4. Capture the full (untruncated) HTML to verify unsubscribe link presence/placement in the footer, which is required for CAN-SPAM compliance and wasn't visible in this sample.
## Recent history

- [[2026-08-11-new-a-beautiful-dining-room-built-for-the-way-you-live-89294c30-5408-4b7c-98e9-]] — 6/10 (2026-08-11)
- [[2026-08-10-going-fast-grab-their-school-gear-at-up-to-20-off-70ca159f-361c-4406-a766-]] — 8/10 (2026-08-10)
- [[2026-08-10-designed-by-andreas-hansen-in-copenhagen-e929e772-7c36-4514-8c79-]] — 5/10 (2026-08-10)

