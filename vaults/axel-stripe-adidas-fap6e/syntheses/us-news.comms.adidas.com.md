---
kind: synthesis
persona: axel-stripe-adidas-fap6e
brand: us-news.comms.adidas.com
reactions: 102
through: 2026-11-08T01:11:59.000Z
created_at: 2026-08-23T18:18:29.414Z
updated_at: 2026-11-08T20:21:35.772Z
---

# ### Technical Audit — adidas by Stella McCartney SS26

#### 1. Technical Summary
- **Broken Experience Failures:** Four confirmed broken-experience failures (one 403 destination URL and one malformed tracking wrapper).
- **Deliverability Risks:** Plain-text fallback is absent, and authentication headers were not captured.
- **Overall Assessment:** The email has significant technical issues that could impact user experience and deliverability.

#### 2. Link & Tracking Issues
- **[FAIL] Doubled-domain tracking wrap — gift card help link**
  - **Issue:** The click-wrapper URL encodes an already-absolute HTTPS URL as the path segment, producing an invalid double-domain structure.
  - **Solution:** Correct the ESP template to ensure URLs are correctly encoded and resolved.

- **[FAIL] Destination URL returns 403**
  - **Issue:** The destination URL returns HTTP 403, indicating the page either requires authentication, is geo-blocked, or has been removed.
  - **Solution:** Verify and correct the destination URL to ensure it returns a valid response.

- **[FAIL] Malformed URL fragment on personalization block**
  - **Issue:** The URL fragment is malformed due to incorrect prefixing with the host rather than resolving against the canonical base.
  - **Solution:** Ensure the personalization block URLs are correctly resolved and prefixed.

- **[WARN] 25 click-tracked links not probed**
  - **Issue:** All links routed through `click.comms.adidas.com` were skipped during HTTP probing.
  - **Solution:** Manually verify the health of these links to ensure they are functioning correctly.

#### 3. Rendering & Accessibility
- **[WARN] Four instances of the same HTTP image asset**
  - **Issue:** The "arrow" image is sourced over plain HTTP, which is blocked in clients with mixed-content blocking.
  - **Solution:** Serve the image over HTTPS to ensure it renders in all clients.

- **[WARN] Additional HTTP tracking pixel**
  - **Issue:** The open-tracking pixel is served over HTTP, which is blocked in clients with mixed-content blocking.
  - **Solution:** Serve the tracking pixel over HTTPS to ensure it tracks opens correctly.

- **[WARN] Two images missing `alt` text**
  - **Issue:** Two images lack `alt` text, which is an accessibility gap.
  - **Solution:** Add `alt` text to the images to improve accessibility and ensure screen readers can read them.

- **HTML doctype:** `HTML 4.01 Transitional` — outdated but functionally acceptable for email.
- **Font declarations:** `@font-face` blocks correctly fall back to system fonts via `local('Arial')`.

#### 4. Personalization & Merge Tokens
- **Issue:** No unresolved merge tokens detected in the truncated source.
- **Solution:** Ensure all merge tokens are correctly resolved in the full source.

#### 5. Compliance
- **[WARN] `List-Unsubscribe` header absent**
  - **Issue:** The header is missing, violating Google/Yahoo bulk sender requirements.
  - **Solution:** Add the `List-Unsubscribe` header to comply with bulk sender policies.

- **[WARN] `List-Unsubscribe-Post` header absent (RFC 8058)**
  - **Issue:** The header is missing, required for one-click unsubscribe functionality.
  - **Solution:** Add the `List-Unsubscribe-Post` header to enable one-click unsubscribe.

- **[FAIL] Plain-text MIME part: 0 characters**
  - **Issue:** No `text/plain` alternative is present, violating CAN-SPAM requirements and impacting deliverability.
  - **Solution:** Add a `text/plain` alternative to improve deliverability and meet CAN-SPAM requirements.

- **[WARN] `Authentication-Results` header not captured**
  - **Issue:** SPF, DKIM, and DMARC pass/fail status unknown.
  - **Solution:** Verify SPF, DKIM, and DMARC status at the SMTP layer to ensure proper authentication.

#### 6. Email-to-Site Continuity
- **Issue:** UTM parameters could not be verified due to the use of `click.comms.adidas.com` for all product/CTA links.
- **Solution:** Manually verify UTM parameters to ensure continuity and proper tracking.

#### 7. Recommendations
| Priority | Action |
|---|---|
| **P0** | Fix the doubled-domain tracking wrap and ensure all URLs are correctly resolved and accessible. |
| **P1** | Serve all images and tracking pixels over HTTPS to ensure they render and track correctly. |
| **P1** | Add `alt` text to all images to improve accessibility. |
| **P1** | Add `List-Unsubscribe` and `List-Unsubscribe-Post` headers to comply with bulk sender requirements. |
| **P1** | Add a `text/plain` alternative to meet CAN-SPAM requirements and improve deliverability. |
| **P2** | Manually verify the health of all click-tracked links to ensure they are functioning correctly. |
| **P2** | Verify and correct the destination URL for the gift card help link to ensure it returns a valid response. |
| **P2** | Verify SPF, DKIM, and DMARC status at the SMTP layer to ensure proper authentication. |

By addressing these issues, adidas can improve the technical reliability and user experience of their email campaigns, ensuring better deliverability and engagement.
