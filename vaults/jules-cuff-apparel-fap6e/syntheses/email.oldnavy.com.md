---
kind: synthesis
persona: jules-cuff-apparel-fap6e
brand: email.oldnavy.com
reactions: 91
through: 2026-07-24T19:21:18.000Z
created_at: 2026-05-30T18:21:03.121Z
updated_at: 2026-07-31T18:21:28.483Z
---

# ## Technical Audit — Old Navy "6 tees & $5 tanks + 50% off everything

---

### 1. Technical Summary

- **Broken Link:** One broken link on the Movable Ink content/open pixel.
- **Compliance Gaps:** Unsubscribe headers and physical address are missing, which could not be confirmed due to relay header stripping.
- **Plain Text Part:** The plain text version is essentially non-functional — 90% of its content consists of URLs.

---

### 2. Detailed Findings

#### Broken Links
**Movable Ink Content/Open Pixel:**
The Movable Ink content/open pixel (`https://click.email.oldnavy.com/c?e=1684375422&l=2039873-335409`) redirects to an invalid URL type, which breaks tracking and analytics.

#### Compliance Gaps
**Unsubscribe Headers:**
The `List-Unsubscribe` and `List-Unsubscribe-Post` headers are missing. These headers are required for Google and Yahoo bulk sender compliance.

**Physical Address:**
The physical address is absent from the visible source. This could be a CAN-SPAM violation if confirmed to be missing in the full HTML version.

#### Plain Text Part
The plain text part of the email is 90% URLs, which triggers Spamassassin rules and degrades deliverability scoring.

---

### 3. Recommendations

| Priority | Issue | Action |
|---|---|---|
| P0 | Broken `cp.oldnavy.com` pixel redirect | Report to Salesforce Personalization team; the origin is returning a relative `Location` header. Verify beacon fires in Interaction Studio reporting. |
| P1 | `List-Unsubscribe` / `List-Unsubscribe-Post` missing | Confirm against raw SMTP headers (not relay-captured). If absent, add both to ESP send config. Required for Google/Yahoo bulk sender compliance. |
| P1 | Physical address absent from visible source | Confirm footer is present in full HTML. If omitted, add before next send — CAN-SPAM violation. |
| P2 | Tracking pixel `alt` attribute missing | Add `alt=""` to `cp.oldnavy.com` `<img>` tag. |
| P2 | Plain-text version is 88% URLs | Generate a proper plain-text counterpart. High URL ratio in plain-text triggers Spamassassin rules and degrades deliverability scoring. |
| P3 | Duplicate `.MspaceTop` / `.MspaceBot` CSS rules | De-duplicate to avoid silent specificity bugs in future edits. |

---

### 4. Additional Recommendations

- **Content Optimization:**
  - Reduce the number of emails sent within a short period.
  - Focus on one clear hero offer per email instead of stacking multiple offers.
  
- **Personalization and Loyalty Tie-In:**
  - Include a callout for Old Navy rewards members to use their Super Cash.
  - Add a family/kids lane to cater to parents buying for children.

---

### Conclusion

This email has several technical issues that need immediate attention, particularly the broken tracking pixel and missing compliance headers. Additionally, there are opportunities to improve the content's focus and personalization to enhance user engagement and reduce fatigue from frequent sends. Addressing these issues will help maintain deliverability and ensure a better user experience.

---
