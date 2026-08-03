---
slug: 2026-07-26-half-off-everything-16-wow-jeans-permission-to-go-cart-wild-be95a7b0-8001-4030-a024-
type: email
date: 2026-07-26
persona: hazel-blue-oldnavy-fap6e
score: "8/10"
sender: Old Navy Haul into Fall
subject: HALF OFF EVERYTHING* + $16 Wow jeans (🤪 permission to go cart-wild!)
tags: [email, score-8, sender/old-navy-haul-into-fall]
---
# HALF OFF EVERYTHING* + $16 Wow jeans (🤪 permission to go cart-wild!)
**Score:** 8/10 · **Type:** Email audit · **2026-07-26**
## Full review
## Technical Audit

## Technical Audit — Old Navy "Half Off Everything" Email

### 1. Technical Summary
The email is a standard MSO-conditional, table-based responsive template (639px breakpoint) served via Salesforce Marketing Cloud–style infrastructure (`email.oldnavy.com`, `click.email.oldnavy.com`) with a secondary loyalty/tracking redirector (`mi.oldnavy.com`, `cp.oldnavy.com`). Automated QA passed 25% of checks, with 1 broken link, 3 compliance warnings, and 2 deliverability warnings.

### 2. Link & Tracking Issues
- **[FAIL] Broken redirect link (HTTP 400)** — anchor text "Display images to show real-time content": `https://mi.oldnavy.com/p/cp/0b03a64563bcff52/c?mi_u=473097083&EV=ONUSFF3PMCPATHTFREQTESTSLPCTRLJOB535557_UNKPSPILPNCROF07262026&...&url=https%3A%2F%2Fmi.oldnavy.com%2Fp%2Frp%2F266650ae62bdbfd2%2Furl&url_sig=y9VLeOEJgYNeIm`. The nested `url_sig` parameter appears truncated, which is consistent with a signature-validation failure at the redirect endpoint. This link should be excluded from send.
- **106 tracking/redirect links** were present but skipped by automated HTTP probing (expected behavior for click-tracking domains that require live session tokens) — these were not individually verified and should be spot-checked manually before send.
- Two open-tracking pixels are present: `click.email.oldnavy.com/open.aspx?...&d=60268&bmt=0` (SFMC open pixel) and `cp.oldnavy.com/o/dc3d3d88-cc63-4068-9560-3241b0da526a?mi_mid=...` (secondary/DV tracking pixel). Both are functioning as expected structurally.

### 3. Rendering & Accessibility
- **[WARN] Missing alt attribute** on the tracking pixel `https://cp.oldnavy.com/o/dc3d3d88-cc63-4068-9560-3241b0da526a?...` (`width="1" height="1"`, no `alt`). Low visual impact (1x1 pixel) but should still carry `alt=""` for HTML validity/consistency — the sibling open-pixel already does this correctly (`alt=""`).
- Template includes proper Outlook MSO conditional blocks (`<!--[if gte mso 9]>`), `ExternalClass` resets, and a single 639px mobile breakpoint — no structural rendering defects found in the provided source.
- Desktop/mobile content toggle (`.desktop-content` / `.mobile-content`) relies on `display:none`, standard for hybrid email coding; no broken selector pairs identified in the truncated CSS.

### 4. Personalization & Merge Tokens
No merge/personalization tokens (e.g., AMPscript, Handlebars, `%%Field%%`) are present in the provided source. Cannot fully confirm personalization logic due to HTML truncation — recommend re-checking the untruncated body for merge fields before send.

### 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **[WARN] `List-Unsubscribe` header not found** — may be a relay-capture artifact (AgentMail) rather than a true absence; verify against raw MTA headers.
- **[WARN] `List-Unsubscribe-Post` header not found (RFC 8058)** — one-click unsubscribe cannot be confirmed as supported.
- **[WARN] No physical mailing address detected** in the parsed content — CAN-SPAM requires one; could not be verified due to HTML truncation, but flagged as unresolved.
- **[WARN] `Authentication-Results` header not found** — SPF/DKIM/DMARC status unknown via this relay; cannot confirm sender authentication passed.

### 6. Email-to-Site Continuity (UTM params, landing page alignment)
No standard `utm_source` / `utm_medium` / `utm_campaign` parameters appear in the sampled links. Click attribution instead relies on proprietary tokens (`mi_mid`, `mi_cid`, `cp_tp`, `cp_cid`, `EV=`, `DI=`) native to the `mi.oldnavy.com` / `cp.oldnavy.com` tracking layer. If the landing site's analytics (e.g., GA4/Adobe) expect UTM parameters for channel attribution, email traffic from this send may not be correctly attributed without a server-side redirect that injects UTM values — this should be confirmed against the landing page's expected query params.

### 7. Recommendations
1. Fix or remove the broken redirect link (400 response) at `mi.oldnavy.com/p/cp/0b03a64563bcff52/c` before send.
2. Add `alt=""` to the `cp.oldnavy.com/o/...` tracking pixel for markup consistency.
3. Confirm `List-Unsubscribe` / `List-Unsubscribe-Post` headers are present at the raw MTA level (not just as parsed via the AgentMail relay) to guarantee RFC 8058 one-click unsubscribe support.
4. Verify a CAN-SPAM-compliant physical address exists in the full (non-truncated) footer.
5. Confirm SPF/DKIM/DMARC alignment directly against the sending MTA, since `Authentication-Results` wasn't observable through this relay.
6. Spot-check a sample of the 106 skipped tracking links manually, since automated probing excluded them.
7. Confirm whether the landing site expects UTM parameters for attribution; if so, verify the `mi.oldnavy.com`/`cp.oldnavy.com` redirect chain appends them before the final landing URL.
## Recent history

- [[2026-07-26-this-is-huge-here-s-fifty-percent-off-everything-even-new-arrivals-16-wow-jeans]] — 8/10 (2026-07-26)
- [[2026-07-25-not-a-drill-16-wow-jeans]] — 5/10 (2026-07-25)
- [[2026-07-25-don-t-wait-get-wow-jeans-for-16-be8f9308-5dc1-4d62-91d2-]] — 8/10 (2026-07-25)

