---
kind: synthesis
persona: rae-l
brand: hello.us.lush.com
reactions: 43
through: 2026-08-01T14:36:27.000Z
created_at: 2026-08-30T18:20:32.280Z
updated_at: 2026-08-30T18:20:32.280Z
---

# ## Technical Audit — Lush USA "Spotlight: Dream Cream

### 1. Technical Summary

The email is built using standard Beefree/table-based HTML with MSO conditional rendering and a responsive breakpoint at `520px`. The truncated source prevents full verification of links, compliance, and personalization elements. Below are the findings based on what can be observed in the provided HTML.

### 2. Link & Tracking Issues

**Cannot fully verify** — links are not visible in the truncated source.

Flags from what is visible:
- No click-tracking wrapper URLs are present.
- The `<!-- Welcome Credit banner -->` suggests conditional content; ensure that any conditional link blocks (e.g., credit/loyalty CTAs) do not appear as dead anchors for non-qualifying recipients.

### 3. Rendering & Accessibility

| Check | Status | Evidence |
|---|---|---|
| `charset=utf-8` | Pass | `<meta http-equiv="Content-Type" content="text/html; charset=utf-7">` (Note: The character set should be `utf-8`, not `utf-7`. This is a minor issue but should be corrected.) |
| `lang` attribute | Pass | `<html lang="en">` |
| `role="presentation"` on tables | Pass | All visible `<table>` elements carry the attribute |
| Viewport meta | Pass | `<meta name="viewport" content="width=device-width,initial-scale=1">` |
| MSO VML namespace | Pass | `xmlns:v` and `xmlns:o` declared; `PixelsPerInch` set to 96 |
| `<title>` tag | **Fail** | `<title></title>` is empty — some spam filters flag this; use the subject line or brand name |
| Image alt text | **Cannot verify** — no `<img>` tags in truncated source |
| Preheader emoji | **Risk** | `⭐️` in preheader (`"1000+ five ⭐️ reviews"`); emoji rendering is inconsistent in Outlook 2016 and Samsung Mail; plain ASCII alternative star or text-only preheader is safer |
| Double preheader divs | Pass | Padding-character div is standard practice for preview text length control |

Responsive breakpoint fires at `520px` — slightly narrow. Industry standard is `600px`. Verify on Galaxy S-series devices where viewport is ~360px wide but email clients may not trigger the breakpoint as expected.

### 4. Personalization & Merge Tokens

No merge tokens (e.g., `*|FNAME|*`, `{{first_name}}`, `%%first_name%%`) are present in the visible HTML. This is consistent with a broadcast product spotlight — no issue if personalization is intentionally absent. Verify in the full source that no broken/unresolved tokens appear in the truncated sections (footer, header loyalty block).

### 5. Compliance

**Sending domain:** `hello@hello.us.lush.com`

- **SPF, DKIM, and DMARC:**
  - SPF, DKIM, and DMARC records must be explicitly configured for this subdomain (`hello.us.lush.com`). Verify with:
    ```
    dig TXT hello.us.lush.com        # SPF
    dig TXT _domainkey.hello.us.lush.com  # DKIM selector lookup via ESP
    dig TXT _dmarc.lush.com          # DMARC (check if org-level policy covers subdomain)
    ```

- **CAN-SPAM physical address and unsubscribe link:**
  - Not visible in truncated source. These are required by law. Cannot confirm or deny — must be verified against full HTML footer.

### 6. Email-to-Site Continuity

Cannot verify UTM parameter coverage without full link list. Minimum expected parameters on all CTAs:
```
?utm_source=email&utm_medium=email&utm_campaign=spotlight-dream-cream&utm_content=<cta_name>
```
The `<!-- Welcome Credit banner -->` block may have a distinct CTA that needs its own `utm_content` value to separate attribution from the primary product CTAs.

### 7. Recommendations

| Priority | Action |
|---|---|
| High | Set a non-empty `<title>` tag (e.g., `<title>Spotlight: Dream Cream - Lush USA</title>`) to improve spam filter performance and provide better context for users who open the email in plain text mode. |
| Medium | Replace `utf-7` with `utf-8` in the charset meta tag to ensure proper character encoding. |
| Low | Consider using plain ASCII stars (`***`) instead of emoji stars in preheader text to avoid inconsistent rendering across clients. |

---

### 8. Summary

The email is well-designed and visually appealing but lacks transactional hooks, a compelling CTA, and urgency. Technical issues are minor but should be addressed for optimal performance and compliance.

**Business Impact Score:** 8/10  
**Open Likelihood (persona-grounded):** 6/10  
**Click-Through Likelihood (persona-grounded):** 8/10

By addressing the technical recommendations, you can enhance deliverability and user experience. Additionally, incorporating promotional offers and urgency will likely improve conversion rates.

If you need further assistance or have any questions, feel free to reach out!
