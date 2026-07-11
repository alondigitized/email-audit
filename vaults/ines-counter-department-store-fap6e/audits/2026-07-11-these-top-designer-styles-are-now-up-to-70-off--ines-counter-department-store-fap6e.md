---
slug: 2026-07-11-these-top-designer-styles-are-now-up-to-70-off--ines-counter-department-store-fap6e
type: email
date: 2026-07-11
persona: ines-counter-department-store-fap6e
score: "8/10"
sender: Neiman Marcus
subject: These top designer styles are now up to 70% off...
tags: [email, score-8, sender/neiman-marcus]
---
# These top designer styles are now up to 70% off...
**Score:** 8/10 · **Type:** Email audit · **2026-07-11**
## Full review
## Technical Audit

## Technical Audit — Neiman Marcus "Up to 70% Off" Email

---

### 1. Technical Summary

The email is a Salesforce Marketing Cloud (SFMC) AMPscript-driven send with a table-based HTML structure. Four QA warnings are present, two of which are high-severity deliverability/compliance issues; the HTML source also exposes internal data architecture in rendered comments and contains a potentially broken personalization variable.

---

### 2. Link & Tracking Issues

**26 tracking links unprobed**
All click-redirect URLs (domain: `e.neimanmarcus.com`) were skipped during automated probing. No broken-link confirmation is possible from this audit.

**Plain-text body is 86% URLs**
QA finding: 5,268 of 6,101 plain-text characters are URLs. The plain-text alternative lacks substantive readable content — it is effectively a URL dump. This is a strong spam-filter signal and degrades the fallback experience in clients that strip HTML.

---

### 3. Rendering & Accessibility

**`maximum-scale=1` blocks user zoom**
Active viewport tag:
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
```
`maximum-scale=1` prevents users from pinching to zoom — an accessibility violation (WCAG 1.4.4) that also breaks usability on small screens.

**Dead viewport meta tags in source**
Three commented-out viewport variants remain in the `<head>`:
```html
<!--<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />-->
<!--<meta name="viewport" content="width=320, initial-scale=0.29">-->
<!--<meta name="viewport" content="width=1024">-->
```
Dead code; no rendering impact, but indicates template hygiene issues.

**Legacy iOS 9 animation hack still present**
```css
body { -webkit-animation: bugfix infinite 1s; }
@-webkit-keyframes bugfix { from { padding: 0; } to { padding: 0; } }
```
iOS 9 shipped in 2015. This hack fires an infinite animation on `body` in every modern WebKit client for no benefit.

**`<title>` has trailing whitespace**
```html
<title>Neiman Marcus </title>
```
Minor, but used in some clients as the preview/tab label.

---

### 4. Personalization & Merge Tokens

**Internal data architecture exposed in rendered HTML comment**
The top of the document contains a multi-line HTML comment (not AMPscript, so it renders to subscribers' inboxes) that discloses:
- Data extension names: `NM_Subscriber_New_Consolidated`, `NM_CRM_Feed`
- Internal field names: `EMAIL_ID`, `uEm`, `cmdid`
- Lookup logic and variable wiring

This is an information disclosure. Strip this block before send or move it to an AMPscript comment (`%%[/* ... */]%%`) which is stripped server-side.

**`@user` SHA256 assignment commented out**
```html
<!--/* SET @user = HASHED_EMAIL_SHA256 */ -->
```
The comment block instructs implementers to "CHOOSE ONE SCENARIO" but the SHA256 assignment is commented out. If `@user` is used in downstream tracking parameters or identity resolution and this branch was intended to be active, personalization/attribution will fall back to a less-precise identifier silently — no AMPscript error will surface.

**No-op `CONCAT` on `@refid`**
```
@refid = CONCAT(@base_refid,"")
```
Concatenating with an empty string is a no-op. This is either a placeholder for a suffix that was never added or dead logic.

---

### 5. Compliance

**`List-Unsubscribe` header absent** — HIGH SEVERITY
QA finding: header not captured by relay. Since February 2024, Gmail and Yahoo require `List-Unsubscribe` on all bulk commercial mail (>5,000 sends/day). Missing this header increases inbox placement risk and can trigger bulk/spam classification.

**`List-Unsubscribe-Post` (RFC 8058) absent** — HIGH SEVERITY
One-click unsubscribe is also required under the same 2024 Gmail/Yahoo bulk sender policy. Without `List-Unsubscribe-Post: List-Unsubscribe=One-Click`, Gmail wraps unsubscribes in its own UI and may penalize deliverability.

**Authentication status unknown**
QA finding: `Authentication-Results` header not captured via AgentMail relay — SPF/DKIM/DMARC pass/fail cannot be confirmed. Given the sending domain (`e.neimanmarcus.com`) is a dedicated ESP subdomain, DKIM alignment should be in place, but cannot be verified from this sample.

---

### 6. Email-to-Site Continuity

The truncated HTML source does not show UTM parameters on any destination URLs; all 26 links route through the `e.neimanmarcus.com` click-redirect domain. UTM attribution depends entirely on what the redirect injects. This cannot be verified without probing the redirects — which the automated check skipped.

No issues confirmed; UTM coverage is **unverifiable** from available data.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| Critical | Confirm `List-Unsubscribe` and `List-Unsubscribe-Post` headers are present in actual SMTP delivery (not just relay capture). Fix before next send if absent. |
| Critical | Verify `@user` SHA256 scenario selection is intentional; document which branch is active and remove the dead branch from the template. |
| High | Rewrite the plain-text alternative with real copy. Replace the URL dump with a summarized version of the offer text. |
| High | Move or delete the `<!--REQUIRED variables...-->` HTML comment block — convert to AMPscript comments if documentation is needed. |
| Medium | Remove `maximum-scale=1` from the viewport meta tag to restore user zoom. |
| Medium | Probe the 26 click-redirect URLs in a controlled environment to confirm UTM params are injected and destinations are correct. |
| Low | Remove the iOS 9 animation hack, dead viewport comments, and the empty-string `CONCAT` on `@refid`. |
| Low | Obtain a full SMTP header capture (not relay-filtered) to confirm SPF/DKIM/DMARC alignment on `e.neimanmarcus.com`. |
## Recent history

- [[2026-07-11-save-20-on-summer-home-must-haves-more--ines-counter-department-store-fap6e]] — 7/10 (2026-07-11)
- [[2026-07-10-chic-looks-for-warm-getaways--ines-counter-department-store-fap6e]] — 9/10 (2026-07-10)
- [[2026-07-10-need-a-summer-refresh-shop-up-to-70-off-l-agence-manolo-blahnik-more--ines-counter-department-store-fap6e]] — 8/10 (2026-07-10)

