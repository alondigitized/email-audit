---
slug: 2026-08-17-quality-crafted-new-arrivals--felix-plinth-home-furniture-fap6e
type: email
date: 2026-08-17
persona: felix-plinth-home-furniture-fap6e
score: "3/10"
sender: Crate & Kids
subject: Quality-crafted new arrivals →
tags: [email, score-3, sender/crate-kids]
---
# Quality-crafted new arrivals →
**Score:** 3/10 · **Type:** Email audit · **2026-08-17**
## Full review
## Technical Audit

1. Technical Summary
Standard Crate & Barrel/Crate & Kids MI (Mediaplex) template with heavy tracking pixel load and no delivery-time compliance headers captured by the relay; core rendering/personalization markup is otherwise clean.

2. Link & Tracking Issues
- 80 tracking/click-redirect links were skipped by the automated HTTP probe (unable to confirm live destinations) — no confirmed broken links, but link health is unverified for this send.
- Multiple beacon/pixel trackers present: `mi.crateandbarrel.com/p/rp/...` (repeated 6x), `mi.crateandbarrel.com/p/up/.../o.gif`, `sr.rlcdn.com/448796.gif` (LiveRamp/RampID, fired 5x with incrementing `n=` param), and `dv.crateandbarrel.com/o/...?cp_tp=v` (Data Vault/conversion pixel). Volume is high but consistent with standard MI retail deployments — not itself a defect.

3. Rendering & Accessibility
- 32 images/tracking pixels are missing `alt` text, including content images (e.g., `bbf6f9d4-...png`, `8ede251b-...jpg`, `971aa10f-...jpg`) as well as 1x1 tracking gifs. Content images without alt text degrade screen-reader and image-blocked (Outlook default) experiences; tracking pixels lack alt by convention and are low priority.
- Table-based layout with MSO conditional comments and `.mobile`/`.showmobile`/media-query breakpoints at 460px is present, indicating standard responsive/Outlook fallback handling — no structural rendering defects observed in the truncated source.

4. Personalization & Merge Tokens
- No unresolved merge tags (e.g. `%%`, `{{`, `[FNAME]`) or broken personalization tokens found in the visible HTML.
- No issues found.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- `List-Unsubscribe` header not found in the captured headers — required for CAN-SPAM/bulk-sender compliance; may be a relay capture gap (AgentMail) rather than a true absence at origin.
- `List-Unsubscribe-Post` (RFC 8058 one-click unsubscribe) header not found — same caveat.
- `Authentication-Results` header (SPF/DKIM/DMARC outcome) not found — cannot confirm authentication passed at this hop.
- Note: all three are flagged WARN due to relay visibility limits, not confirmed absent at the sending MTA — recommend verifying directly against raw headers from the originating ESP (Mediaplex/Crate & Barrel) rather than the AgentMail-relayed copy before treating as a hard compliance failure.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- Truncated source does not expose final (post-redirect) landing page URLs — all outbound links route through tracking/redirect domains, so UTM parameter presence/alignment on the destination page cannot be confirmed from this data.
- No issues found in available data; recommend a live click-through check to verify UTM tagging and landing page match.

7. Recommendations
- Add descriptive `alt` text to the 26 content images currently missing it (tracking pixels can remain `alt=""`).
- Verify `List-Unsubscribe` / `List-Unsubscribe-Post` / `Authentication-Results` directly against raw MTA headers (not the AgentMail relay copy) to confirm true compliance status.
- Manually click-resolve a sample of the 80 skipped tracking links to confirm final destinations and UTM parameter integrity.
## Recent history

- [[2026-08-17-heirloom-inspired-rugs-that-stand-up-to-real-life-b9903dc0-f90a-4f44-bd73---felix-plinth-home-furniture-fap6e]] — 5/10 (2026-08-17)
- [[2026-08-17-heirloom-inspired-rugs-that-stand-up-to-real-life--felix-plinth-home-furniture-fap6e]] — 6/10 (2026-08-17)
- [[2026-08-17-bath-towels-from-24-50-free-shipping--felix-plinth-home-furniture-fap6e]] — 6/10 (2026-08-17)

