---
kind: synthesis
persona: walker
brand: us-news.comms.adidas.com
reactions: 51
through: 2026-05-14T23:08:55.000Z
created_at: 2026-05-02T18:18:49.139Z
updated_at: 2026-05-15T18:20:07.798Z
---

# **[FAIL] Broken redirect — malformed href**
QA extracted a relative-path href `/g/bf4c0485-2527-41ac-b292-227d0bac76fd?t

**[WARN] 25 tracking links not probed**
All click-redirect domains were skipped during HTTP validation. Destination URLs and redirect chain integrity are unconfirmed.

**[INFO] `<meta name="referrer" content="no-referrer">`**
This header suppresses the HTTP referrer on all link clicks, which will cause referrer-based analytics attribution to report `(direct)` for all traffic sourced from this email, independent of UTM parameters.

---

### 4. Recommendations

| Priority | Issue | Action |
|---|---|---|
| P0 | Broken redirect — malformed href | Validate the relative path `/g/bf4c0485-2527-41ac-b292-227d0bac76fd?txn=5dd5c280-2b89-11f1-bce3-9a305ea1f7ea` and ensure it resolves to the correct absolute URL. |
| P0 | Missing plain-text body | Add a plain-text MIME alternative with key offer text, product description, and unsubscribe link. Ensure it aligns with HTML version for consistency. |
| P1 | Non-HTTPS images (6 instances) | Update all non-secure image sources to HTTPS URLs to ensure they render correctly in major email clients. |
| P2 | `<meta name="referrer" content="no-referrer">` | Remove or modify this meta tag if not intentionally suppressing referrer data; use UTM parameters for analytics attribution instead. |
| P3 | Unprobed tracking links | Manually validate all unprobed tracking URLs to ensure they carry consistent UTM parameters and resolve correctly. |

---

### 5. Summary

The email has several technical issues that impact its performance and user experience:

1. **Broken Redirect**: The relative path href is not resolving properly, causing a portion of recipients to be unable to click through.
2. **Missing Plain-Text Body**: This increases the risk of CAN-SPAM compliance issues and reduces accessibility for plain-text email clients.
3. **Non-HTTPS Images**: Major email clients block non-secure images, leading to render failures.
4. **Referrer Suppression**: The `no-referrer` meta tag disrupts analytics attribution by stripping referrer data.

Addressing these technical issues will improve the reliability and effectiveness of the email campaign.
