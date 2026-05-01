// Single source of truth for audit data shape. Both daemons (producers)
// and the Next.js site (consumer) import from this file. Any change here
// is a breaking change to the producer-consumer contract.
//
// Written in .mjs so the pipeline daemons can import it directly. The
// site imports it via relative path; TypeScript derives types through
// `z.infer<typeof schema>` in site/lib/schema/audit.ts.

import { z } from 'zod';

// ─── Leaf schemas ──────────────────────────────────────────────────────────

export const journeyStepSchema = z.object({
  step: z.number(),
  label: z.string(),
  viewport_screenshot: z.string().nullable(),
  viewport_screenshot_key: z.string().nullable().optional(),
  fullpage_screenshot: z.string().nullable(),
  fullpage_screenshot_key: z.string().nullable().optional(),
  url: z.string(),
  status: z.string().optional(),
});

export const perfStepSchema = z.object({
  step: z.number(),
  label: z.string(),
  url: z.string(),
  ttfb_ms: z.number().nullable().optional(),
  lcp_ms: z.number().nullable().optional(),
  cls: z.number().nullable().optional(),
});

// Review sections can be partial (site journey audits emit {} today; email
// audits emit all seven arrays). Kept permissive so real data parses.
// Persona-grounded funnel predictions. Emitted by the email reviewer
// alongside the qualitative critique so the UI can surface open/click
// likelihood as pills. Both are 1-10 persona-reaction scores, NOT
// probability percentages — frame them honestly.
export const predictionScoreSchema = z.object({
  score: z.number().min(1).max(10),
  rationale: z.string(),
});

export const predictionsSchema = z
  .object({
    open_likelihood: predictionScoreSchema.nullable().optional(),
    click_likelihood: predictionScoreSchema.nullable().optional(),
  })
  .partial();

export const reviewSectionsSchema = z
  .object({
    executive_summary: z.array(z.string()),
    business_impact_score: z.array(z.string()),
    whats_working: z.array(z.string()),
    whats_weak: z.array(z.string()),
    recommendations: z.array(z.string()),
    bottom_line: z.array(z.string()),
    subject_line: z.array(z.string()),
    preview_text: z.array(z.string()),
    open_likelihood: z.array(z.string()),
    click_likelihood: z.array(z.string()),
    evidence: z.array(z.string()),
  })
  .partial();

export const qaCheckSchema = z.object({
  check_id: z.string(),
  status: z.enum(['pass', 'warn', 'fail', 'info']),
  label: z.string(),
  detail: z.string(),
  url: z.string().optional(),
});

// Categories carry category-level counts plus the check list. Some
// categories (the 'info' one) expose additional aggregate counters; use
// passthrough so unknown future keys don't fail parsing.
export const qaCategorySchema = z
  .object({
    passed: z.number(),
    warned: z.number(),
    failed: z.number(),
    checks: z.array(qaCheckSchema),
    info: z.number().optional(),
  })
  .passthrough();

export const qaSummarySchema = z.object({
  overall_pass_rate: z.string(),
  total_checks: z.number(),
  total_issues: z.number(),
  total_warnings: z.number(),
});

export const qaReportSchema = z.object({
  summary: qaSummarySchema,
  categories: z.record(z.string(), qaCategorySchema),
});

// ─── Double-opt-in auto-confirm ────────────────────────────────────────────
// Brand newsletter signups frequently land a "confirm your email" message
// in the persona's inbox. We detect it on ingest, extract the primary CTA
// URL, fetch it, and record the result here so the audit page can show
// "Auto-confirmed at 4:51 PM" without the user having to click around.

export const autoConfirmSchema = z.object({
  // The URL we clicked (post-quoted-printable decode).
  url: z.string(),
  attempted_at: z.string(),
  // HTTP status from the GET. Null if the fetch threw (DNS, timeout, etc.).
  http_status: z.number().nullable().optional(),
  // True iff http_status is 2xx or 3xx (most brand DOI endpoints either
  // 200 with a thank-you page or 302 to one).
  success: z.boolean(),
  error: z.string().nullable().optional(),
});

// ─── Inventory audit (Ivy) ─────────────────────────────────────────────────
// Recurring inventory audit by the secret-shopper persona (Ivy Inventory).
// Captures size availability across the top-N styles per PLP for a brand.
// Lives under audit.data.inventory; the audit row has type='site' so the
// existing audit list renders it like a site experience review. Email block
// is faked to a placeholder line.

export const inventorySizeSchema = z.object({
  size: z.string(),
  available: z.boolean(),
});

// One row per (color, width) combination on a PDP. Width is null when the
// style ships in a single width (Skechers exposes a width selector only on
// styles that come in Medium/Wide/etc.); flattening color × width keeps the
// aggregation logic simple and the data layout uniform.
export const inventoryVariantSchema = z.object({
  color: z.string(),
  width: z.string().nullable().optional(),
  pdp_url: z.string().nullable().optional(),
  pdp_screenshot_key: z.string().nullable().optional(),
  sizes: z.array(inventorySizeSchema),
  available_count: z.number(),
  total_count: z.number(),
});

export const inventoryStyleSchema = z.object({
  rank: z.number(),
  name: z.string(),
  url: z.string(),
  variants: z.array(inventoryVariantSchema),
});

export const inventoryPlpSchema = z.object({
  category: z.string(),
  url: z.string(),
  styles: z.array(inventoryStyleSchema),
  error: z.string().nullable().optional(),
});

export const inventoryTotalsSchema = z.object({
  plps_audited: z.number(),
  plps_failed: z.number(),
  styles: z.number(),
  // Total (color, width) variants audited.
  variants: z.number(),
  // 0–1 fraction; UI multiplies by 100 for display.
  avg_size_coverage: z.number(),
});

export const inventoryAuditSchema = z.object({
  site: z.string(),
  scope: z.string(),
  plps: z.array(inventoryPlpSchema),
  totals: inventoryTotalsSchema,
  // R2 key for the per-(PLP, style, color, width, size) detail spreadsheet
  // (CSV). Audit detail page mints a signed GET URL for it so the user can
  // download the raw data underlying the narrative + summary table.
  csv_key: z.string().nullable().optional(),
});

// ─── Root schemas ──────────────────────────────────────────────────────────

export const auditTypeSchema = z.enum(['email', 'site']);

export const auditDataSchema = z.object({
  schema_version: z.number(),
  slug: z.string(),
  type: auditTypeSchema.optional(),
  persona: z.string().nullable().optional(),
  email: z.object({
    subject: z.string(),
    preheader: z.string().nullable().optional(),
    from: z.string(),
    from_display_name: z.string(),
    timestamp_iso: z.string().nullable(),
    date_formatted: z.string(),
  }),
  review: z.object({
    score: z.string(),
    raw_markdown: z.string(),
    sections: reviewSectionsSchema,
    predictions: predictionsSchema.nullable().optional(),
  }),
  qa: qaReportSchema.nullable(),
  assets: z.object({
    render_image: z.string().nullable(),
    render_image_key: z.string().nullable().optional(),
    pdf: z.string().nullable(),
    webview_url: z.string().nullable(),
    journey_steps: z.array(journeyStepSchema).optional(),
  }),
  performance: z
    .object({
      steps: z.array(perfStepSchema),
    })
    .optional(),
  inventory: inventoryAuditSchema.nullable().optional(),
  auto_confirm: autoConfirmSchema.nullable().optional(),
});

export const auditSummarySchema = z.object({
  slug: z.string(),
  subject: z.string(),
  from_display_name: z.string(),
  timestamp_iso: z.string().nullable(),
  score: z.string(),
  qa_summary: qaSummarySchema.nullable(),
  has_image: z.boolean(),
  type: auditTypeSchema.optional(),
  persona: z.string().nullable().optional(),
  // Persona display fields resolved server-side at list query time so the
  // client/AuditCard doesn't need a separate persona registry. Optional for
  // legacy rows where no persona match exists.
  persona_name: z.string().nullable().optional(),
  persona_short: z.string().nullable().optional(),
  persona_color: z.string().nullable().optional(),
  open_likelihood: z.number().nullable().optional(),
  click_likelihood: z.number().nullable().optional(),
});

// ─── Helpers ───────────────────────────────────────────────────────────────

/**
 * Producer-side parse. Throws with a readable error if the shape drifts —
 * daemons should fail loudly rather than ship a malformed audit.
 */
export function parseAuditData(input) {
  return auditDataSchema.parse(input);
}

/**
 * Consumer-side parse. Returns `{ ok: true, data }` on success, or
 * `{ ok: false, error }` with zod's issue list on failure. Callers decide
 * whether to skip the record, surface an error boundary, or fall back.
 */
export function safeParseAuditData(input) {
  const r = auditDataSchema.safeParse(input);
  return r.success
    ? { ok: true, data: r.data }
    : { ok: false, error: r.error };
}
