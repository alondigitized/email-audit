---
kind: synthesis
persona: carla-clog-crocs-fap6e
brand: crocs-email.com
reactions: 27
through: 2026-06-12T17:02:29.000Z
created_at: 2026-06-16T18:20:49.542Z
updated_at: 2026-06-16T18:20:49.542Z
---

# ### Summary of Recommendations for Crocs Holiday Weekend Email

#### Priority: High

1. **Update Footer Images to HTTPS**
   - **Issue:** 7 footer images are served over HTTP.
   - **Fix:** Change the `src` scheme from `http://image.crocs-email.com/...png` to `https://image.crocs-email.com/...png`.

2. **Add RFC 8058 One-Click Unsubscribe Header**
   - **Issue:** Missing `List-Unsubscribe-Post` header.
   - **Fix:** Add the `List-Unsubscribe-Post: List-Unsubscribe=one-click; List-Unsubscribe=https://example.com/unsubscribe` header at the ESP level and verify that it is not being stripped by the relay.

3. **Confirm `List-Unsubscribe` Header Presence**
   - **Issue:** Unverifiable presence of `List-Unsubscribe` header.
   - **Fix:** Confirm the presence of the `List-Ununsubscribe` header via raw seed inbox or directly at the ESP level to ensure compliance with Gmail and Yahoo policies.

#### Priority: Medium

1. **Add Missing Alt Attribute for Tracking Pixel**
   - **Issue:** Adobe Audience Manager tracking pixel missing `alt=""`.
   - **Fix:** Add an empty `alt=""` attribute to the tracking pixel URL.

2. **Verify UTM Parameters on Redirected Links**
   - **Issue:** Cannot confirm presence of UTM parameters without resolving redirect chain.
   - **Fix:** Verify that all tracked links include appropriate UTM parameters (e.g., `utm_source=email`, `utm_medium=email`, `utm_campaign=memorial-day-2026`).

### Detailed Recommendations

#### 1. Update Footer Images to HTTPS
Ensure the following images are served over HTTPS:
- **Download on the App Store:** `https://image.crocs-email.com/9c36c0ef.png`
- **Get It On Google Play:** `https://image.crocs-email.com/13246762.png`
- **Find Your Store:** `https://image.crocs-email.com/c4df71ec.png`
- **Instagram:** `https://image.crocs-email.com/e18949ff.png`
- **Facebook:** `https://image.crocs-email.com/80f68cd8.png`
- **TikTok:** `https://image.crocs-email.com/51d8144e.png`
- **YouTube:** `https://image.crocs-email.com/1187ef58.png`

#### 2. Add RFC 8058 One-Click Unsubscribe Header
Add the following header to ensure compliance with Gmail and Yahoo policies:
```plaintext
List-Unsubscribe: <mailto:unsubscribe@example.com>, <https://example.com/unsubscribe>
```
Ensure this is correctly implemented at the ESP level.

#### 3. Confirm `List-Unsubscribe` Header Presence
Verify that the `List-Unsubscribe` header is present in raw seed inbox captures or directly from the ESP logs to ensure compliance with Gmail and Yahoo policies.

#### 4. Add Missing Alt Attribute for Tracking Pixel
Ensure the tracking pixel URL includes an empty alt attribute:
```html
<img src="https://demandwarecrocs.demdex.net/event?d_dpid=196107&c_emailopened=Yes&d_dpuid=1c110d5f7d8fbc329b0a8ea915c05b3c631d53c" alt="" />
```

#### 5. Verify UTM Parameters on Redirected Links
Manually follow one of the tracked links to ensure that:
- `utm_source` is set to `email`
- `utm_medium` is set to `email`
- `utm_campaign` references this specific send (e.g., `memorial-day-2026`)
- `utm_content` differentiates between hero CTA, product tiles, and footer links

By addressing these technical issues, the email will be more compliant with industry standards and improve user experience across various email clients.
