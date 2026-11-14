---
kind: synthesis
persona: curt-aadvantage-aa-fap6e
brand: loyalty.ms.aa.com
reactions: 48
through: 2026-11-14T01:50:28.000Z
created_at: 2026-11-14T20:20:16.839Z
updated_at: 2026-11-14T20:20:16.839Z
---

# It looks like the technical audit for the American Airlines AAdvantage email campaign is incomplete due to a truncation.

### 2. Link & Tracking Issues

**Sender domain mismatch risk:** Envelope sender is `loyalty@loyalty.ms.aa.com`. If the DKIM `d=` tag signs for `ms.aa.com` or `aa.com` rather than `loyalty.ms.aa.com`, strict DMARC alignment (`adkim=s`) will fail. Cannot confirm without headers, but the three-level subdomain warrants verification.

**Missing UTM parameters:** The email lacks UTM parameters in the links, which makes it difficult to track the performance of the email in analytics tools like Google Analytics. Adding UTM parameters to the links will help in measuring the effectiveness of the email campaign.

**Untracked links:** The email contains links to external resources (e.g., sweepstakes entry form, FOX One app download) without any tracking parameters. This makes it impossible to track the performance of these links.

### 3. Technical Issues

**Unclosed CSS media query:** There is an unclosed CSS media query block that needs to be fixed. The block should be closed with a `}` before the `</style>` tag.

**Duplicate MSO conditional comment block:** There is a duplicate MSO conditional comment block in the email source. This should be removed to reduce the size of the email and improve load times.

**Duplicate Google Fonts load:** The email loads Google Fonts twice, which is unnecessary and increases the load time. The duplicate `<link>` tag should be removed.

**Background URL issue:** The `#swapbg` background URL is set to a relative path, which can cause issues in some email clients. It should be changed to an absolute `https://` path.

**Text size adjustment:** The `* { -webkit-text-size-adjust: none }` rule should be changed to `body { -webkit-text-size-adjust: 100% }` for better accessibility and rendering across different clients.

**Dark mode styling:** The dark mode styling should be scoped to a container class to avoid affecting the entire email. This will help in maintaining a clean and consistent design.

### 4. Recommendations

| Priority | Action |
|---|---|
| P0 | Fix `#swapbg` background URL — change to absolute `https://` path |
| P0 | Close the `@media (prefers-color-scheme:dark)` block with `}` before `</style>` |
| P1 | Remove duplicate `@import` Google Fonts call; keep `<link>` only |
| P1 | Remove duplicate MSO conditional comment block |
| P1 | Change `maximum-scale=1` → `maximum-scale=5` for accessibility |
| P2 | Scope dark-mode `span, a, td` override to a container class |
| P2 | Change `* { -webkit-text-size-adjust: none }` → `body { -webkit-text-size-adjust: 100% }` |
| P2 | Add UTM parameters to all links for tracking |
| P2 | Re-audit with full HTML source to confirm links, UTMs, unsubscribe, and physical address |

### 5. Final Thoughts

The email is well-designed and has a strong conversion focus, but there are technical issues that need to be addressed to ensure optimal performance and tracking. By fixing these issues, the email will render consistently across different clients and provide valuable data for future campaigns.

Would you like to proceed with any specific actions or further refinements?
