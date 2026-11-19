---
kind: synthesis
persona: ines-counter-department-store-fap6e
brand: e.neimanmarcus.com
reactions: 367
through: 2026-11-18T22:11:40.000Z
created_at: 2026-05-25T18:21:08.211Z
updated_at: 2026-11-19T20:19:47.630Z
---

# ### Technical Audit — "Join InCircle & unlock benefits as you shop

**From:** NeimanMarcus@e.neimanmarcus.com | **ESP:** Salesforce Marketing Cloud (AMPscript)

---

### 1. Technical Summary

The email is structurally sound but carries three compliance warnings from the relay layer (missing `List-Unsubscribe` headers, unknown DKIM/SPF status) and two AMPscript variable defects that could silently break identity tracking and campaign attribution.

---

### 2. Link & Tracking Issues

**36 click-redirect links skipped by QA probe** — destination URLs and UTM parameters are not visible.

---

### 3. AMPscript & Data Issues

**AMPscript Variable Defects:**

- **Identity Tracking:** The email uses `%%MemberID%%` and `%%jobid%%` but does not include `%%_subscriberkey%%`. This omission can cause issues with identity resolution and campaign tracking in Salesforce Marketing Cloud.
- **Campaign Attribution:** The email relies on `%%jobid%%` for tracking but does not use `%%_JobSubscriberID%%` or `%%_JobCustomerKey%%` for more granular campaign attribution.

**Consolidated Data Extensions:**

- **DE Consolidation:** The email references multiple data extensions (`NM_Subscriber_New_Consolidated` and `NM_CRM_Feed`) that could be merged into a single sendable data extension to reduce per-recipient AMPscript execution overhead.

---

### 4. Viewport Tags

**Commented-out Viewport Tags:**

- The email template contains three commented-out `<meta viewport>` lines, which should be pruned to reduce template debt and eliminate the risk of re-enabling `user-scalable=no`.

---

### 5. Recommendations

**P1** | Add `List-Unsubscribe` header | Add the `List-Unsubscribe` header to the email to comply with CAN-SPAM Act requirements and improve unsubscribe rates.

**P2** | Verify DKIM/SPF status | Confirm that the sending domain has valid DKIM and SPF records to ensure proper email authentication and delivery.

**P3** | Consolidate DE lookups | Merge `NM_Subscriber_New_Consolidated` and `NM_CRM_Feed` fields into the sendable DE to reduce per-recipient AMPscript execution overhead.

**P3** | Prune commented-out viewport tags | Remove the three commented-out `<meta viewport>` lines to reduce template debt and eliminate the risk of re-enabling `user-scalable=no`.

**P3** | Update AMPscript variables | Ensure that `%%_subscriberkey%%`, `%%_JobSubscriberID%%`, and `%%_JobCustomerKey%%` are used for identity tracking and campaign attribution to avoid silent failures in tracking and analytics.
