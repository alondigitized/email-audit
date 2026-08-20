---
slug: 2026-08-20-another-miami-original--kai-stride-athletic-fap6e
type: email
date: 2026-08-20
persona: kai-stride-athletic-fap6e
score: "5/10"
sender: adidas
subject: Another Miami original
tags: [email, score-5, sender/adidas]
---
# Another Miami original
**Score:** 5/10 · **Type:** Email audit · **2026-08-20**
## Full review
## Technical Audit

1. Technical Summary
Email fails 6 of 8 automated QA checks (25% pass rate), primarily due to a doubled-domain URL bug, missing plain-text fallback, and unconfirmed unsubscribe/authentication headers.

2. Link & Tracking Issues
- **Doubled-domain bug (FAIL):** The click-tracking wrapper is malformed — the redirect target is percent-encoded *inside* the tracking path but the resulting URL structure shows domain duplication: `https://click.comms.adidas.com/CL0/https:%2F%2Fwww.adidas.com%2Fus%2Fhelp%2Fus-promotions-vouchers%2Fwhat-should-i-know-about-gift-cards/1/010201a02090e08d-.../YsIB0zVJidpaERYuDuhOf7SGq22zXCfjzBLDvdM2-j8=452`. This is the gift-card help link; verify the ESP's link-wrapping template isn't double-encoding the destination.
- 20 tracking/click-redirect links were skipped by the automated HTTP probe (expected behavior for redirect-domain links, not itself a defect — flagged as info only).

3. Rendering & Accessibility
- Two images are missing `alt` text:
  - `src="https://dv.adidas.com/o/12129dc8-a73c-4ed4-8c4b-24d437eca783?cp_tp=..."`
  - `src="http://click.comms.adidas.com/CI0/010201a02090e08d-.../r9mbQiLa0anzEoun2-jtLsAqr..."` (this one is itself a tracking-wrapped image pixel, so it's likely a tracked banner graphic, not a true decorative pixel — should still carry alt text)
- Non-HTTPS image sources (mixed content, may be blocked by mail clients):
  - `http://image.link.adidas.com/lib/fe6515707c62007e7715/m/3/b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg` ("arrow" image, referenced 3x)
  - `http://click.comms.adidas.com/CI0/010201a02090e08d-.../r9mbQiLa0anzEoun2-jtLsAqrLOv4g7XSCoDXBFHMYM=452` (same tracked image pixel noted above)

4. Personalization & Merge Tokens
No issues found in the visible HTML/QA data — no unresolved merge tags (e.g. `{{`, `%%`, `[FNAME]`) were flagged.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header not found (WARN):** Not present, or not captured by the relay — cannot confirm one-click unsubscribe support at the header level.
- **List-Unsubscribe-Post header not found (WARN):** RFC 8058 one-click POST unsubscribe not confirmed.
- **Authentication-Results header not found (WARN):** SPF/DKIM pass status cannot be verified from available headers.
- Note: the HTML source truncation provided doesn't include a footer/unsubscribe-link section, so in-body unsubscribe link presence/wording can't be confirmed from this excerpt.

6. Email-to-Site Continuity (UTM params, landing page alignment)
Cannot fully assess — the truncated HTML source does not expose the primary CTA/product links with query strings, only the gift-card help link (which is help-content, not a promo landing page) and tracking-pixel/image URLs. The one visible destination URL (`/us/help/us-promotions-vouchers/what-should-i-know-about-gift-cards`) carries no UTM parameters, so continuity/attribution for this link cannot be confirmed.

7. Recommendations
- Fix the link-wrapping/encoding logic that produces the doubled-domain gift-card URL before send; test the decoded redirect target resolves to a single clean adidas.com URL.
- Add descriptive `alt` text to both flagged images.
- Serve the "arrow" image and the tracked image pixel over HTTPS instead of HTTP to avoid mixed-content blocking in mail clients.
- Confirm `List-Unsubscribe` and `List-Unsubscribe-Post` headers are actually present in the raw sent message (may be a relay-capture gap rather than a true absence) — verify via raw header dump at the sending ESP.
- Confirm SPF/DKIM/DMARC alignment via `Authentication-Results` on a raw received copy, not just the relay.
- Add a plain-text MIME part — the current 0-char plain-text version will hurt deliverability and accessibility for text-only clients.
## Recent history

- [[2026-08-19-check-out-this-month-s-adiclub-benefits-here-is-your-august-newsletter-010201a01b392a63-f2e8b09--kai-stride-athletic-fap6e]] — 5/10 (2026-08-19)
- [[2026-08-19-check-out-this-month-s-adiclub-benefits-here-is-your-august-newsletter--kai-stride-athletic-fap6e]] — 5/10 (2026-08-19)
- [[2026-08-19-adidas-collaborations-archive-sale--kai-stride-athletic-fap6e]] — 4/10 (2026-08-19)

