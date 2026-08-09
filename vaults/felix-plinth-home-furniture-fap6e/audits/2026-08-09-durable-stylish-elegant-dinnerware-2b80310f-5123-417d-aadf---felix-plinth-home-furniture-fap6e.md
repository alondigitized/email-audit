---
slug: 2026-08-09-durable-stylish-elegant-dinnerware-2b80310f-5123-417d-aadf---felix-plinth-home-furniture-fap6e
type: email
date: 2026-08-09
persona: felix-plinth-home-furniture-fap6e
score: "5/10"
sender: Crate & Barrel
subject: "\"Durable, stylish, elegant\" dinnerware"
tags: [email, score-5, sender/crate-barrel]
---
# "Durable, stylish, elegant" dinnerware
**Score:** 5/10 · **Type:** Email audit · **2026-08-09**
## Full review
## Technical Audit

## Technical Email Audit — Crate & Barrel "Durable, stylish, elegant" dinnerware

**1. Technical Summary**
Standard MessageGears/CheetahMail-style responsive HTML template with heavy legacy MSO/Outlook conditional CSS; core rendering scaffolding is sound, but the message is missing standard unsubscribe/authentication headers and has systemic accessibility gaps across all images.

**2. Link & Tracking Issues**
- 72 tracking/click-redirect links were present but skipped by automated HTTP probing (expected behavior for redirect-domain links; not itself a defect, but means link-destination validity is unconfirmed).
- Multiple pixel trackers present: `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png` (6 instances), `sr.rlcdn.com/448796.gif` (5 instances, LiveRamp/RampID), and `dv.crateandbarrel.com/o/...?cp_tp=v` (DoubleVerify open/viewability pixel). Volume of duplicate pixel calls (6x same MI pixel) is unusual and worth confirming isn't a template bug causing redundant fires.
- No broken/malformed href patterns identified in the visible source.

**3. Rendering & Accessibility**
- **All 24+ content images and all tracking pixels are missing `alt` attributes** — confirmed by QA scan (e.g., `bbf6f9d4-86cc-437a-aa80-391067b74306.png`, `c59e1899-f4fb-4b17-b918-c4a6c61afe9c.jpg`, etc.). This fails WCAG 1.1.1 and degrades the experience for screen-reader users and anyone with images blocked (a common default in Outlook/Gmail).
- Template includes standard dark-mode suppression (`meta name="color-scheme" content="light"`, `supported-color-schemes" content="light"`) and Apple Mail format-detection overrides — functioning as intended, no issues.
- MSO conditional blocks and `@media` breakpoints (460px, 640px, 768px) are present and structurally well-formed.

**4. Personalization & Merge Tokens**
- No unresolved merge tags (e.g., `{{first_name}}`, `%%FIELD%%`) visible in the truncated source.
- Tracking URLs contain a consistent `mi_u=` / `s=` hashed subscriber identifier across pixels, consistent with proper per-recipient personalization at the tracking layer.
- No issues found in the visible source; full body was truncated so downstream personalized content blocks were not fully inspectable.

**5. Compliance (CAN-SPAM, unsubscribe, authentication headers)**
- **List-Unsubscribe header not found** — QA flags this may be an artifact of the AgentMail relay not capturing/forwarding the header rather than the sender omitting it; cannot confirm CAN-SPAM one-click compliance from this data alone.
- **List-Unsubscribe-Post header not found (RFC 8058)** — same caveat; if genuinely absent, the message doesn't support one-click unsubscribe per Gmail/Yahoo bulk sender requirements (effective since Feb 2024).
- **Authentication-Results header not found** — SPF/DKIM/DMARC pass/fail status cannot be verified from available data; also attributed to relay capture rather than confirmed sender misconfiguration.
- Recommend re-verifying headers directly against the raw source (not via the AgentMail relay) before treating these as sender-side defects.

**6. Email-to-Site Continuity (UTM params, landing page alignment)**
- Truncated source did not expose destination CTA URLs (all under skipped tracking-redirect domains), so UTM parameter presence/consistency could not be verified in this pass.
- No issues found in the visible source.

**7. Recommendations**
1. Add descriptive `alt` text to all 24 content images (empty `alt=""` is acceptable only for the 8 purely-decorative tracking pixels/gifs, not for product imagery).
2. Reduce redundant pixel firing — 6x identical `mi.crateandbarrel.com` open-tracking pixel in one send is likely a template/loop bug worth flagging to ESP ops.
3. Re-check List-Unsubscribe / List-Unsubscribe-Post / Authentication-Results directly from the originating MTA rather than through the AgentMail relay, since the relay is a known point of header loss — don't treat these as confirmed sender defects yet.
4. Spot-check a sample of the 72 skipped tracking/redirect links manually to confirm final destination and UTM parameter integrity, since automated probing was skipped for all of them.
## Recent history

- [[2026-08-09-new-introducing-howell-x-harrier-for-crate-barrel-5ab0f6b4-3d06-4ed3-ba73---felix-plinth-home-furniture-fap6e]] — 7/10 (2026-08-09)
- [[2026-08-09-up-to-60-off-furniture-bedding-more-dbe29dd3-dc10-43e6-8432---felix-plinth-home-furniture-fap6e]] — 5/10 (2026-08-09)
- [[2026-08-09-yesss-new-corner-bookcases-have-arrived-2efeb019-0d9d-462a-8413---felix-plinth-home-furniture-fap6e]] — 5/10 (2026-08-09)

