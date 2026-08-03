---
kind: synthesis
persona: ines-counter-department-store-fap6e
brand: e.neimanmarcus.com
reactions: 137
through: 2026-07-24T21:09:29.000Z
created_at: 2026-05-25T18:21:08.211Z
updated_at: 2026-07-30T18:18:22.344Z
---

# Based on the provided technical audit summary, here are the key issues to address:

1. **Compliance Warnings:**
   - Missing `List-Unsubscribe` headers.
   - Unknown DKIM/SPF status.

2. **AMPscript Variable Defects:**
   - Potential identity tracking and campaign attribution issues due to AMPscript variable defects.

3. **Link & Tracking Issues:**
   - 36 click-redirect links were skipped by the QA probe, indicating possible issues with destination URLs or UTM parameters.

### Recommendations

1. **Compliance Warnings:**

   - **List-Unsubscribe Headers:** Ensure that all emails include a `List-Unsubscribe` header to comply with CAN-SPAM regulations and improve unsubscribe rates.
     ```html
     <meta name="mailing-list-unsub" content="https://example.com/unsubscribe?email={{subscriberkey}}">
     ```
   
   - **DKIM/SPF Status:** Verify that your domain's DKIM (DomainKeys Identified Mail) and SPF (Sender Policy Framework) records are correctly set up to avoid email delivery issues.
     ```plaintext
     # Example SPF record
     v=spf1 include:_spf.google.com ~all
     
     # Example DKIM record
     v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC57s9tBvzJ2wPZyYj6XkLlTmVU...
     ```

2. **AMPscript Variable Defects:**

   - Review and fix AMPscript variables to ensure proper identity tracking and campaign attribution.
     ```ampscript
     %%[ 
       var @subscriberkey, @campaign_id
       
       set @subscriberkey = AttributeValue("SubscriberKey")
       set @campaign_id = RequestParameter("cid")

       if empty(@subscriberkey) then
         raiseError('Subscriber key is missing')
       endif

       if empty(@campaign_id) then
         raiseError('Campaign ID is missing')
       endif
     ]%%
     ```

3. **Link & Tracking Issues:**

   - Verify all redirect links and ensure that destination URLs are correctly configured with proper UTM parameters for tracking.
     ```html
     <a href="https://example.com/product?utm_source=neimanmarcus&utm_medium=email&utm_campaign=circle_recruitment&utm_term=in_circle&utm_content=apply_now" target="_blank">Apply Now</a>
     ```

### Summary

- **List-Unsubscribe Headers:** Add `List-Unsubscribe` header to comply with CAN-SPAM regulations.
- **DKIM/SPF Setup:** Ensure your domain's DKIM and SPF records are correctly configured for email delivery.
- **AMPscript Fixes:** Review AMPscript variables to ensure proper identity tracking and campaign attribution.
- **Link Verification:** Verify all redirect links and UTM parameters for accurate tracking.

By addressing these technical issues, you will improve the overall compliance, reliability, and performance of your email campaigns.
