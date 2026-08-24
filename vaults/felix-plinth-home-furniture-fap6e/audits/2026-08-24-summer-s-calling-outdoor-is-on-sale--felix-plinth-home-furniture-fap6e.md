---
slug: 2026-08-24-summer-s-calling-outdoor-is-on-sale--felix-plinth-home-furniture-fap6e
type: email
date: 2026-08-24
persona: felix-plinth-home-furniture-fap6e
score: "6/10"
sender: CB2
subject: Summer’s calling. Outdoor is on sale.
tags: [email, score-6, sender/cb2]
---
# Summer’s calling. Outdoor is on sale.
**Score:** 6/10 · **Type:** Email audit · **2026-08-24**
## Full review
## Technical Audit

1. Technical Summary
CB2's HTML uses an MI/ExactTarget-based ESP template with standard MSO/media-query boilerplate. Automated QA found no broken links but flagged missing alt text, insecure (http://) tracking pixels, and no visible unsubscribe/authentication headers in the captured payload.

2. Link & Tracking Issues
- 63 tracking/click-redirect links were skipped from HTTP probing (redirect domains, not independently verifiable) — no confirmed breakage, but unverified.
- Multiple http:// (non-HTTPS) tracking pixels from dotomi.com: `http://login.dotomi.com/ucm/UCMController?dtm_com=2&dtm_cid=2437...`, and `pub1.php` through `pub10.php` at `http://ads.dotomi.com/cookieredir/2437/`. Non-HTTPS resources risk being blocked by mail clients enforcing mixed-content/TLS policies, potentially causing tracking data loss.
- Secondary tracking pixels (`mi.cb2.com/p/up/.../o.gif`, `dv.cb2.com/o/...`) are served over HTTPS — no issue.

3. Rendering & Accessibility
- 7 content images missing `alt` text (UUID-named .jpg assets served from `image.mail.cb2.com`), plus the dotomi tracking pixels also lack alt attributes. Missing alt text on content images degrades screen-reader accessibility and shows blank space if images are blocked.
- Template includes standard Outlook/MSO conditional comments, `-webkit-text-size-adjust` resets, and responsive media queries (`max-width: 418px`, `min-width: 690px`/`768px`) — no structural rendering issues detected in the visible source.

4. Personalization & Merge Tokens
No merge tokens or personalization placeholders visible in the truncated source. No issues found.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- List-Unsubscribe header not found — may be a capture limitation of the AgentMail relay rather than an actual absence; cannot confirm CAN-SPAM one-click compliance from this data.
- List-Unsubscribe-Post (RFC 8058) header not found — one-click unsubscribe support unconfirmed.
- Authentication-Results header (SPF/DKIM/DMARC) not found — sender authentication status unknown from this capture.
- These are relay-capture warnings, not confirmed violations; flagging as unverified rather than as defects.

6. Email-to-Site Continuity (UTM params, landing page alignment)
Cannot assess — the 63 tracking/redirect links were skipped by the QA probe, so destination URLs and UTM parameters were not resolved or captured in the provided data. No landing page URLs available for comparison.

7. Recommendations
- Add descriptive `alt` text to the 7 content images (`c5033802...`, `621c54e7...`, `179cd525...`, `b2de3bb8...`, `c2425545...`, `ea4d3afd...`, `54cccecb...`).
- Migrate the dotomi.com tracking pixels/redirects to HTTPS to prevent mixed-content blocking in email clients.
- Verify List-Unsubscribe / List-Unsubscribe-Post and Authentication-Results headers directly against raw SMTP headers (outside the relay) to confirm actual CAN-SPAM and authentication compliance, since this capture method could not observe them.
- Re-run link resolution on the 63 skipped tracking links to confirm final destination URLs and UTM alignment with landing pages.
## Recent history

- [[2026-08-24-find-bedding-in-your-favorite-color--felix-plinth-home-furniture-fap6e]] — 6/10 (2026-08-24)
- [[2026-08-24-outdoor-furniture-up-to-50-off--felix-plinth-home-furniture-fap6e]] — 6/10 (2026-08-24)
- [[2026-08-24-new-bed-alert-meet-the-miila-collection--felix-plinth-home-furniture-fap6e]] — 6/10 (2026-08-24)

