---
slug: 2026-08-29-going-going-flash-sale-ends-tomorrow
type: email
date: 2026-08-29
persona: buck-field-tractorsupply-fap6e
score: "7/10"
sender: Tractor Supply Company
subject: 🚨 Going, Going… Flash Sale Ends TOMORROW
tags: [email, score-7, sender/tractor-supply-company]
---
# 🚨 Going, Going… Flash Sale Ends TOMORROW
**Score:** 7/10 · **Type:** Email audit · **2026-08-29**
## Full review
## Technical Audit

1. Technical Summary
The email uses ez.tractorsupply.com/e.ez.tractorsupply.com (likely a Bluecore/Cheetah Digital-style ESP) for tracked links and pixels; automated QA shows widespread link-probe timeouts, a broken (403) unsubscribe link, and missing standard email authentication/compliance headers.

2. Link & Tracking Issues
- 11 of 12 probed material links returned "read operation timed out" errors, including the primary hero CTAs ("Tractor Supply Co.", "82926_FW35LaborDayFlashSale_Hero", "...FW35FlashSaleHero2", "...SimpsonPressureWashers", "...SportMixDryCatFood", "MoreDeals" x2). All routed through `e.ez.tractorsupply.com/click?...` redirect tokens — the redirector endpoint itself is likely down or blocking automated probes.
- The unsubscribe/preferences link returned a **403 Forbidden**: `https://e.ez.tractorsupply.com/click?ZdNHfbpswFAZwnsVSelUy2xhwKqGNhSVNRemipUTjJjL2ISMF4tmw_Jn27hNSO20Xe4HvO9_vfCoH-eJWNTTK7Y2Q_dHYQevm4lZCB_ABemiaqdDamf9Eba3QHSIh55hQTjgOGC8ZD5kSNJzN0C2SPbpDvZWuNkflamGg612PBaJSlS9l4FFMhcdAVCzwK4wJ9RV3CbpFZoz-og...` (link text "Update your preferences or unsubscribe") — this is a compliance-critical failure, not just a broken CTA.
- Duplicate click-tracking URLs appear for the same creative (two identical-looking tokens each for "Hero", "FlashSaleHero2", "MoreDeals"), consistent with an image + text link pair sharing one tracked destination — not itself a bug, but doubles exposure to the same redirector failure.
- 36 non-material (footer/social/utility) links were not probed per QA scope; cannot confirm their status.

3. Rendering & Accessibility
- Three images are missing `alt` text: the open-tracking pixel `o.gif` (`https://mi.tractorsupply.com/p/cp/76ddd2c9608d17c7/o.gif?mi_u=60740592613`), the Everest Engagement pixel (`https://eaAnalyticsTSC.everestengagement.com/ea/o8uREqbKQf/?...`), and the ESP open-tracking pixel (`https://e.ez.tractorsupply.com/open?...`). These are tracking pixels rather than content images, so missing alt text is low-impact but still fails strict accessibility linting.
- HTML uses legacy HTML4.01 Transitional doctype and Outlook/VML namespaces (`xmlns:v`, `xmlns:o`) — standard for MSO-compatible email builds, no issue.
- `<meta name="ROBOTS" content="NOINDEX, NOFOLLOW">` and `<meta name="referrer" content="no-referrer">` are present and appropriate for a hosted email view.

4. Personalization & Merge Tokens
No merge tokens or personalization placeholders are visible in the truncated source (no `{{}}`, `%%%%`, or unresolved `[FIRSTNAME]`-style tags). No issues found in the visible markup.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- Unsubscribe link present in markup but returns 403 on probe (see Section 2) — this is a functional compliance risk if reproducible outside the QA tool, since CAN-SPAM requires a working opt-out mechanism.
- `List-Unsubscribe` header not detected — no one-click unsubscribe support signaled at the header level.
- `List-Unsubscribe-Post` (RFC 8058) header not detected — cannot confirm RFC 8058 one-click compliance.
- `Authentication-Results` header not detected — SPF/DKIM/DMARC pass/fail status cannot be verified from available data.
Note: the last three are flagged WARN because the relay (AgentMail) may simply not be capturing/forwarding these headers, not necessarily because the sending infrastructure lacks them — cannot confirm true header absence at the source MTA.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- Click URLs use opaque ESP redirect tokens (`e.ez.tractorsupply.com/click?<encoded-blob>`) rather than direct UTM-tagged destination URLs, so UTM parameter presence/alignment cannot be assessed from the HTML alone — final destination and query string are only resolved after redirect.
- Given all destination links are timing out (Section 2), landing page alignment cannot be verified at all for this send.

7. Recommendations
- Investigate `e.ez.tractorsupply.com` click-redirect availability immediately — near-total link timeout suggests an ESP-side or CDN outage affecting this send, not isolated bad links.
- Treat the 403 on the unsubscribe link as high priority: verify manually in a browser from a real inbox send, since a non-functional opt-out mechanism is a CAN-SPAM exposure.
- Confirm with the ESP/deliverability team whether `List-Unsubscribe` / `List-Unsubscribe-Post` / `Authentication-Results` headers are actually being sent — this may be an AgentMail relay capture gap rather than a real absence; re-check against a direct-to-inbox header dump.
- Add descriptive or empty `alt=""` attributes to the three tracking pixels for strict accessibility compliance (cosmetic, low priority).
## Recent history

- [[2026-08-17-exclusive-animal-days-savings-are-live]] — 9/10 (2026-08-17)
- [[2026-08-14-animal-days-in-store-event-is-tomorrow-8-15]] — 8/10 (2026-08-14)
- [[2026-08-10-animal-days-starts-now-save-big-on-tsc-exclusives]] — 9/10 (2026-08-10)

