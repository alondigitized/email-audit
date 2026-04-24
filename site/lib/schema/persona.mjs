// Single source of truth for persona profile shape. Lives in Postgres as a
// JSONB column on the `persona` table; both the site (consumer) and daemons
// (email-monitor, site-monitor — producers of behavior that depends on
// profile config) import from this file. Breaking changes here are
// breaking changes to every consumer.
//
// Written in .mjs so the pipeline daemons can import it directly; the site
// re-exports types through `z.infer<typeof schema>` in persona.ts.

import { z } from 'zod';

// ─── Leaf schemas ──────────────────────────────────────────────────────────

// Identity card — the persona's demographic + psychographic voice. Read by
// the chat reviewer as the persona's first-person perspective, and by the
// admin UI as the editable form fields.
export const personaIdentitySchema = z.object({
  name: z.string().min(1),
  age: z.number().int().min(1).max(150),
  generation: z.string().min(1), // "Boomer", "Gen X", "Millennial", "Gen Z", ...
  gender: z.string().min(1),
  style: z.string().min(1),
  shopping_habits: z.string().min(1),
  tech_comfort: z.string().min(1),
  focus_areas: z.array(z.string()).default([]),
});

// A single shopping "intent" inside a journey — e.g. Martha browsing for
// her 5-year-old girl vs her 9-year-old boy in the same run. Optional;
// personas that shop for one thing only (Walker, Calvin) use the
// top-level search_term + category_path fields and leave targets empty.
export const personaJourneyTargetSchema = z.object({
  label: z.string().min(1),
  search_term: z.string().nullable().optional(),
  category_path: z.array(z.string()).default([]),
});

// Daemon-only journey config. Read by site-monitor when running site
// reviews. Optional for personas that are email-only (no site journey).
export const personaJourneySchema = z.object({
  site: z.string().url().nullable().optional(),
  search_term: z.string().nullable().optional(),
  category_path: z.array(z.string()).default([]),
  credentials_env_prefix: z.string().nullable().optional(),
  targets: z.array(personaJourneyTargetSchema).default([]),
});

// AgentMail inbox binding. Populated at create time when the admin UI
// provisions an inbox via the AgentMail API; hand-filled for legacy personas.
export const personaAgentmailSchema = z.object({
  inbox_address: z.string().nullable().optional(),
  inbox_id: z.string().nullable().optional(),
  provisioned_at: z.string().nullable().optional(), // ISO timestamp
});

// Onboarding checklist state — tracks which laptop-side steps the admin
// has confirmed done. Free-form keyed dictionary so new steps can be added
// without migrations. Values are "pending" | "done" | "skipped".
export const personaOnboardingSchema = z.record(
  z.string(),
  z.enum(['pending', 'done', 'skipped'])
);

// ─── Root schema ───────────────────────────────────────────────────────────

export const personaProfileSchema = z.object({
  schema_version: z.number().default(1),
  identity: personaIdentitySchema,
  journey: personaJourneySchema.default({}),
  agentmail: personaAgentmailSchema.default({}),
  onboarding: personaOnboardingSchema.default({}),
  // UI accent color (hex, e.g. "#4269d0"). Falls back to a slug-hash color
  // at display time when unset, so old personas render fine.
  color: z.string().regex(/^#[0-9a-fA-F]{6}$/).nullable().optional(),
  // Free-form human-maintained notes. Mirrors the vault README body so
  // Obsidian readers keep a single source of truth.
  notes: z.string().nullable().optional(),
  // Wizard-created personas start as "draft" and graduate to "active"
  // after the handoff step completes. Drafts are hidden from chat/audits
  // and the default /admin/personas list view. Missing status on legacy
  // rows means active.
  status: z.enum(["draft", "active"]).default("active"),
});

export function parsePersonaProfile(input) {
  return personaProfileSchema.parse(input);
}

export function safeParsePersonaProfile(input) {
  const r = personaProfileSchema.safeParse(input);
  return r.success ? { ok: true, data: r.data } : { ok: false, error: r.error };
}
