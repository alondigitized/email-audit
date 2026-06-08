---
kind: synthesis
persona: lila-hearth-potterybarn-fap6e
brand: e.potterybarn.com
reactions: 87
through: 2026-06-07T22:12:54.000Z
created_at: 2026-05-08T18:19:07.702Z
updated_at: 2026-06-08T18:21:12.605Z
---

# ### Email Review: Pottery Barn — "Your first look at the NEW catalog

#### 1. Executive Summary

The email is well-executed in terms of design and branding, with a clear seasonal hook and organized category navigation. However, it lacks urgency and any price-based offers that could drive immediate action from recipients. It reads as more of an invitation to browse rather than a call to purchase.

---

#### 2. Business Impact Score

**7/10**

### Criteria Assessment:

- **Sender Recognition:** TRUE (Pottery Barn is clearly recognized)
- **Primary CTA Clarity:** TRUE ("BROWSE NOW" button is clear and prominent)
- **Visual Hierarchy:** TRUE (Summer Catalog hero image draws immediate attention)
- **Render Quality:** TRUE (No rendering issues; images load properly, text is legible)
- **Campaign Relevance:** TRUE ("The Summer Catalog" aligns with the current season)
- **Loyalty Benefits Visible:** TRUE ("Earn 10% Back in Rewards" section included)
- **Honest Offer Presentation:** TRUE (No deceptive pricing or hidden exclusions)

### Areas for Improvement:

- **Concrete Offers:** FALSE (No specific %/$ offers visible in hero content)
- **Demographic Signals:** FALSE (No persona-specific focus signals at thumbnail resolution)
- **Persona-Specific Subject Line:** FALSE (Subject does not address a specific persona's needs)

---

#### 3. Technical Audit

### Link & Tracking Issues:

**Critical — Broken Links:**

1. **Credit Card Apply-and-Buy Banner:** `https://clickcp.potterybarn.com/c/da01b407-b21c-4618-a71b-f83bef0dd682?brandCode=POTTERYBARNCB&marketingChannelCode=APPLYANDBUY…` — returns  **HTTP 403**. Any recipient clicking this CTA will hit a dead end.
   
2. **West Elm Cross-Brand Spacer:** `http://edm.westelm.com/we/evergreen/spacer_0.gif` — returns **HTTP 403** and is an HTTP asset, indicating a copy-paste error from a shared template.

### HTTP Assets:

| Asset | URL |
|---|---|
| `spacer_0.gif` | `http://edm.westelm.com/...` |
| `Foot_NonMem_PB.jpg` | `http://edm.potterybarn.com/pb/thekey/CC_Banner/PB/...` |
| `slices_02.jpg` | `http://edm.potterybarn.com/pb/2022/0311_Key_CC_Email_BrandBanner/...` |
| Open-pixel | `http://svopn.potterybarn.com/?sv_cid=0053_00597&sv_emopen=true...` |

**Recommendations:**

- **P0:** Remove broken credit card CTA link.
- **P1:** Replace West Elm spacer with a Pottery Barn asset or 1px transparent GIF served over HTTPS.
- **P1:** Migrate all HTTP image sources to HTTPS.

### Rendering & Accessibility:

**Invalid CSS — PHP Code in `<style>` Block:**

```css
/* inside <style> tag — this is not CSS */
header('Content-Type: image/jpeg');
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
```

**Recommendations:**

- **P0:** Remove PHP `header()` calls from `<style>` block.

### Personalization & Merge Tokens:

No unfired merge tokens visible in the source.

### Compliance:

| Check | Status | Detail |
|---|---|---|
| `List-Unsubscribe` header | MISSING | Not captured by AgentMail relay |
| `List-Unsubscribe-Post` (RFC 8058) | MISSING | One-click unsubscribe not detectable |
| `Authentication-Results` (SPF/DKIM) | UNKNOWN | Not captured by relay |

**Recommendations:**

- **P0:** Confirm and add `List-Unsubscribe` / `List-Unsubscribe-Post` headers.

### Email-to-Site Continuity:

The primary CTA links route through `click.e.potterybarn.com`, which should pass UTM parameters to destination URLs. The broken credit card CTA means that entire conversion path is dead.

**Recommendations:**

- **P0:** Fix or remove the broken credit card CTA link.
- **P1:** Audit for any West Elm destination links in footer module.

---

### Recommendations Summary

| Priority | Action |
|---|---|
| **P0** | Remove PHP `header()` calls from `<style>` block. |
| **P0** | Fix or remove broken credit card CTA link (403 at `clickcp.potterybarn.com`). |
| **P0** | Confirm and add `List-Unsubscribe` / `List-Unsubscribe-Post` headers in raw SMTP headers. |
| **P1** | Replace West Elm spacer with Pottery Barn asset or 1px transparent GIF served over HTTPS. |
| **P1** | Migrate all HTTP image sources to HTTPS, especially the open-tracking pixel. |
| **P2** | Add descriptive `alt` text to all content images; use `alt=""` for decorative spacers. |

---

### Strategic Recommendations

- **Add Urgency:** Include a time-limited offer or deadline to drive immediate action.
- **Concrete Offers:** Introduce specific discounts or rewards in the hero section to incentiv
