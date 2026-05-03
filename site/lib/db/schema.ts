import {
  pgTable,
  pgEnum,
  text,
  timestamp,
  primaryKey,
  integer,
  uuid,
  boolean,
  vector,
  index,
  numeric,
  jsonb,
} from "drizzle-orm/pg-core";
import type { AdapterAccountType } from "next-auth/adapters";
import type { AuditData } from "@/lib/schema/audit";
import type { PersonaProfile } from "@/lib/schema/persona";

// One row per signed-up account. Created at signup with plan='waitlisted',
// flipped to 'free' on admin approval (which also stamps tier_started_at +
// tier_expires_at = +14d). Pro plans have tier_expires_at = NULL (unlimited).
// Banned tenants cannot sign in. The tenant is the unit of multi-tenant
// isolation: every persona/audit/chat_thread row carries a tenant_id and
// queries filter by the actor's tenant (admin users bypass via dal.ts).
//
// referred_by_tenant_id is a self-FK (no DB constraint — application enforced)
// pointing at the tenant whose /r/{code} link the user signed up through.
// Credit applies on approval, not signup, to dodge waitlist gaming.
export const tenantPlanEnum = pgEnum("tenant_plan", [
  "waitlisted",
  "free",
  "pro",
  "banned",
]);

// Membership role on a (user, tenant) pair. Owner can manage the team;
// member cannot. We're staying with two roles in v1 — adding manager /
// viewer / billing is a Phase-2 concern once tenants ask for it.
export const tenantMemberRoleEnum = pgEnum("tenant_member_role", [
  "owner",
  "member",
]);

// Wizard scratch — populated in Phase C. Declared here so the column type is
// stable across phases. Consumers tolerate undefined fields.
//
// As of the persona-templates refactor, the wizard no longer LLM-generates
// Output of the single combined research call (lib/onboarding/research.ts):
// 3 LLM-generated personas + 2 competitors + which persona is recommended.
// Templates are no longer used in the public funnel; admin uses them via
// /admin/personas/new directly. Legacy fields (industry classifier, template
// slugs, unlocked_proposals, recommended_competitor_idx) are kept typed only
// for read-tolerance against pre-refactor rows — the new flow never writes
// them.
export type TenantOnboardingResearch = {
  site_summary?: string | null;
  generations?: number;
  // New flow — written by startWizardStep1Action.
  personas?: unknown[];
  competitors?: unknown[];
  recommended_persona_idx?: number;
  // Legacy — read-tolerated, no longer written.
  industry?: string;
  industry_confidence?: "high" | "medium" | "low";
  industry_alternates?: string[];
  available_template_slugs?: string[];
  chosen_template_slug?: string;
  recommended_competitor_idx?: number;
  unlocked_proposals?: unknown[];
};

export const tenants = pgTable("tenant", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").unique().notNull(),
  name: text("name").notNull(),
  // Tenant identity: every signup at the same registered work-email domain
  // (e.g. @skechers.com) lands in the same tenant. Apex domain only — we
  // strip +aliases but do NOT collapse subdomains. Unique so two signups
  // from one company can't race-create rival tenants. NULL is reserved
  // for the founder/admin tenant ('alon') which predates this model and
  // is bypassed by the lookup-by-domain code paths.
  emailDomain: text("email_domain").unique(),
  plan: tenantPlanEnum("plan").notNull().default("waitlisted"),
  tierStartedAt: timestamp("tier_started_at", { mode: "date" }),
  tierExpiresAt: timestamp("tier_expires_at", { mode: "date" }),
  referralCode: text("referral_code").unique(),
  referredByTenantId: uuid("referred_by_tenant_id"),
  referralsMade: integer("referrals_made").default(0).notNull(),
  onboardingResearch: jsonb("onboarding_research").$type<TenantOnboardingResearch>(),
  competitorTarget: jsonb("competitor_target"),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
});

export const users = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").unique().notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow().notNull(),
  isAdmin: boolean("isAdmin").default(false).notNull(),
  lastSignInAt: timestamp("lastSignInAt", { mode: "date" }),
  // Nullable during the Phase A backfill window; flipped to NOT NULL in a
  // follow-up migration once every row points at a tenant. Each user belongs
  // to exactly one tenant in v1 (no multi-tenant memberships).
  tenantId: uuid("tenant_id").references(() => tenants.id, { onDelete: "restrict" }),
});

// Cross-tenant persona grants. The persona is OWNED by the tenant in
// `personas.tenant_id`, but additional tenants can be granted read-only
// access — used when a brand-specific persona was forked under Alon's
// founder tenant ('alon') and we want to give the brand's own tenant
// visibility into it (e.g. Kohl's reads `rosie-coupon-kohls` audits).
//
// `mode` is read-only in v1; future modes (chat, admin) get a new enum
// value without a schema change. Application code must check mode on
// any write path that's exposed across tenants.
export const tenantPersonaGrants = pgTable(
  "tenant_persona_grant",
  {
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    personaSlug: text("persona_slug")
      .notNull()
      .references(() => personas.slug, { onDelete: "cascade" }),
    mode: text("mode").notNull().default("read"),
    grantedBy: text("granted_by").references(() => users.id, {
      onDelete: "set null",
    }),
    createdAt: timestamp("created_at", { mode: "date" })
      .defaultNow()
      .notNull(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.tenantId, t.personaSlug] }),
    personaIdx: index("tenant_persona_grant_persona_idx").on(t.personaSlug),
  })
);

// Tenant team membership. Composite PK on (user_id, tenant_id) so the
// shape supports future multi-tenant memberships without schema rework,
// even though v1 keeps the user.tenant_id 1:1 invariant. Always at
// least one `owner` per tenant (enforced application-side at remove +
// transfer time, not in DB).
export const tenantMembers = pgTable(
  "tenant_member",
  {
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    role: tenantMemberRoleEnum("role").notNull().default("member"),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.userId, t.tenantId] }),
    tenantIdx: index("tenant_member_tenant_idx").on(t.tenantId),
  })
);

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccountType>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    pk: primaryKey({ columns: [account.provider, account.providerAccountId] }),
  })
);

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

// S1: token column stores the SHA-256 hash of the raw token, not the raw token.
export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    pk: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
);

// Persona roster. `profile` JSONB holds the full identity card + daemon
// journey config + AgentMail binding + onboarding checklist state;
// zod-validated at the boundary via site/lib/schema/persona.mjs.
// Column is optional for a clean migration — Phase 1 adds it empty, Phase 1
// backfill populates walker/martha, Phase 2+ makes it authoritative.
// Live operational status per persona — updated by the daemons on every
// audit, by onboard-persona.mjs on every bootstrap step, and by the admin
// UI on URL-validation saves. Read by /admin/personas to show green/amber/
// red health at a glance. JSONB (not columns) so new status fields can be
// added without migrations; consumers tolerate missing keys.
export type PersonaLastStatus = {
  last_audit_at?: string | null;
  last_audit_score?: string | null;
  last_audit_slug?: string | null;
  last_cookies_at?: string | null;
  last_inbox_poll_at?: string | null;
  last_journey_status?: "ok" | "failed" | null;
  onboarding?: Record<string, {
    status: "pending" | "done" | "failed";
    at: string;
    detail?: string;
  }>;
  url_validation?: {
    at: string;
    results: Array<{ step_id: string; url: string; status: number | "error"; detail?: string }>;
  } | null;
};

// Curated persona library — etell.app's IP. Tenants don't own templates;
// they fork them at signup. A template's slug is the canonical reference
// for read-merging audit/email/chat history into forks (see lib/personas-db.ts
// getReadableSlugsForPersona). Industry tag drives the wizard's picker.
//
// Templates are inserted manually by admins (or by the
// scripts/promote-personas-to-templates.ts one-shot for Walker/Martha/Calvin).
// is_active=false hides a template from the picker without deleting it
// (preserves provenance for already-forked instances).
export const personaTemplates = pgTable("persona_template", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").unique().notNull(),
  name: text("name").notNull(),
  short: text("short").notNull(),
  industry: text("industry").notNull(),
  profile: jsonb("profile").$type<PersonaProfile>(),
  lastStatus: jsonb("last_status").$type<PersonaLastStatus>(),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
});

export const personas = pgTable("persona", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").unique().notNull(),
  name: text("name").notNull(),
  short: text("short").notNull(),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow().notNull(),
  profile: jsonb("profile").$type<PersonaProfile>(),
  lastStatus: jsonb("last_status").$type<PersonaLastStatus>(),
  // Persona ownership. Backfilled to Alon's tenant for the legacy 3 personas
  // (walker/martha/calvin-haze). Public wizard-created personas inherit the
  // signed-up user's tenant.
  tenantId: uuid("tenant_id").references(() => tenants.id, { onDelete: "restrict" }),
  // Pointer back to the persona_template this row was forked from. NULL
  // means a direct/legacy persona (created before templates existed, or
  // an admin-curated one-off). Read paths use this to OR-match the
  // template's slug into queries — see lib/personas-db.ts
  // getReadableSlugsForPersona.
  templateSlug: text("template_slug").references(() => personaTemplates.slug, {
    onDelete: "set null",
  }),
});

// Concierge queue: when a tenant signs up at /signup but no persona_template
// matches their industry, we don't fall back to LLM-gen — we drop a row
// here. Admin sees it at /admin/template-requests, builds the template
// manually, then fires "Mark shipped" which auto-forks the new template
// for the requesting tenant + emails them.
export const templateRequestStatusEnum = pgEnum("template_request_status", [
  "queued",
  "building",
  "shipped",
  "rejected",
]);

export const templateRequests = pgTable("template_request", {
  id: uuid("id").primaryKey().defaultRandom(),
  tenantId: uuid("tenant_id")
    .notNull()
    .references(() => tenants.id, { onDelete: "cascade" }),
  requestedIndustry: text("requested_industry").notNull(),
  brandDomain: text("brand_domain").notNull(),
  status: templateRequestStatusEnum("status").notNull().default("queued"),
  requestedAt: timestamp("requested_at", { mode: "date" }).defaultNow().notNull(),
  shippedAt: timestamp("shipped_at", { mode: "date" }),
  // The template slug we ended up shipping for this request. Lets us
  // backfill the requesting tenant by re-running the fork action against
  // this template once the row flips to status='shipped'.
  fulfilledTemplateSlug: text("fulfilled_template_slug"),
});

export const userPersonas = pgTable(
  "userPersona",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    personaId: uuid("personaId")
      .notNull()
      .references(() => personas.id, { onDelete: "cascade" }),
    role: text("role").default("owner").notNull(),
    grantedAt: timestamp("grantedAt", { mode: "date" }).defaultNow().notNull(),
  },
  (up) => ({
    pk: primaryKey({ columns: [up.userId, up.personaId] }),
  })
);

// Rate-limit ledger for magic-link requests. One row per attempt
// regardless of outcome. Keyed twice — once by sha256(email), once by
// source IP — so we can throttle both burst-from-one-sender and
// distributed-across-many-emails attacks. Pruned opportunistically
// (old rows past the window are ignored; cleanup is a future tidy).
export const signInRateLimit = pgTable(
  "signInRateLimit",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    keyType: text("keyType").notNull(), // "email" | "ip"
    keyValue: text("keyValue").notNull(),
    ts: timestamp("ts", { mode: "date" }).defaultNow().notNull(),
  },
  (t) => ({
    keyTsIdx: index("signInRateLimit_key_ts_idx").on(t.keyType, t.keyValue, t.ts),
  })
);

export const signInEvents = pgTable("signInEvent", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  ts: timestamp("ts", { mode: "date" }).defaultNow().notNull(),
  ipHash: text("ipHash"),
});

// Engagement: one row per detail-page view by an authenticated user.
// Captures /audits/{slug} and /analysis/{slug}. Path is stored for later
// per-content breakdowns; kind is a cheap rollup dimension.
export const pageViews = pgTable("pageView", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  kind: text("kind").notNull(), // "audit" | "analysis"
  path: text("path").notNull(), // full pathname, e.g. "/audits/<slug>"
  ts: timestamp("ts", { mode: "date" }).defaultNow().notNull(),
});

// One row per audit, persona-scoped, embedded once by the pipeline via
// audit-pipeline/embed.mjs. Default embedder is Ollama mxbai-embed-large
// (1024 dims) — swap via LLM_EMBED_MODEL. Used by the chat API to
// retrieve the persona's most relevant past experiences for a given user
// question. HNSW cosine index added in the migration raw SQL.
export const auditEmbedding = pgTable(
  "audit_embedding",
  {
    auditSlug: text("audit_slug").primaryKey(),
    persona: text("persona").notNull(),
    indexedText: text("indexed_text").notNull(),
    embedding: vector("embedding", { dimensions: 1024 }).notNull(),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  },
  (t) => ({
    embeddingIdx: index("audit_embedding_hnsw_idx").using(
      "hnsw",
      t.embedding.op("vector_cosine_ops")
    ),
    personaIdx: index("audit_embedding_persona_idx").on(t.persona),
  })
);

// A chat thread between one user and one persona. Title auto-generated from
// the first user turn; updatedAt bumps on every new message for sidebar sort.
export const chatThread = pgTable("chat_thread", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  personaSlug: text("persona_slug").notNull(),
  title: text("title"),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
  tenantId: uuid("tenant_id").references(() => tenants.id, { onDelete: "restrict" }),
});

// One row per message. retrievedSlugs holds the audit slugs used to ground
// the assistant reply — surfaced in the UI as a "sources" expander.
export const chatMessage = pgTable("chat_message", {
  id: uuid("id").primaryKey().defaultRandom(),
  threadId: uuid("thread_id")
    .notNull()
    .references(() => chatThread.id, { onDelete: "cascade" }),
  role: text("role").notNull(), // 'user' | 'assistant' | 'system'
  content: text("content").notNull(),
  retrievedSlugs: text("retrieved_slugs").array(),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
});

// Admin-toggleable app flags. One row per registered app key. Seeded via
// the app-flag migration with the initial app set.
export const appFlag = pgTable("app_flag", {
  key: text("key").primaryKey(),
  enabled: boolean("enabled").default(false).notNull(),
  updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
  updatedBy: text("updated_by").references(() => users.id),
});

// One row per audit. Replaces the filesystem-based content/audits/{slug}/
// audit.json + index.json pair. Producer daemons INSERT/UPSERT; the site
// reads through lib/audits.ts. The full audit payload lives in `data` as
// JSONB (zod-validated at the producer boundary); the typed columns
// exist for query planning (filter by persona, sort by timestamp).
//
// No FK on persona yet — persona slugs are referenced by name in several
// tables (auditEmbedding, chatThread) without a FK either. Phase 6 will
// consolidate that.
export const audits = pgTable(
  "audit",
  {
    slug: text("slug").primaryKey(),
    persona: text("persona").notNull(),
    type: text("type").notNull(), // 'email' | 'site'
    timestamp: timestamp("timestamp", { mode: "date", withTimezone: true }).notNull(),
    score: numeric("score", { precision: 5, scale: 2 }),
    data: jsonb("data").$type<AuditData>().notNull(),
    mediaKeys: jsonb("media_keys").default({}),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
    // Stamped at write time by audit-pipeline/publish.mjs from the persona's
    // tenant_id. Every audit-list query filters by the actor's tenant_id
    // (admin bypasses).
    tenantId: uuid("tenant_id").references(() => tenants.id, { onDelete: "restrict" }),
  },
  (t) => ({
    personaTsIdx: index("audit_persona_ts_idx").on(t.persona, t.timestamp),
    typeTsIdx: index("audit_type_ts_idx").on(t.type, t.timestamp),
    tenantTsIdx: index("audit_tenant_ts_idx").on(t.tenantId, t.timestamp),
  })
);

// Inbound email landing zone. Cloudflare Email Worker POSTs every email
// arriving at *@etell.app to /api/email/inbound, which inserts a row here.
// The email-monitor daemon reads unprocessed rows (processed_at IS NULL),
// runs the Claude review pipeline, then stamps processed_at + audit_slug.
//
// Replaces the AgentMail polling loop. Each persona's inbox is just a
// recipient string; no per-inbox API call is needed and there is no
// upstream cap. Persona's inbox address lives on persona.profile.agentmail.
// inbox_address (kept the field name to avoid a profile-schema migration —
// the value is now `<slug>@etell.app` instead of `<slug>@agentmail.to`).
export const emailMessages = pgTable(
  "email_message",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    personaSlug: text("persona_slug").notNull(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    toAddress: text("to_address").notNull(),
    fromAddress: text("from_address").notNull(),
    fromDomain: text("from_domain").notNull(),
    subject: text("subject"),
    // Message-Id header — used to dedupe retries from the Worker.
    messageId: text("message_id"),
    html: text("html"),
    textBody: text("text_body"),
    // R2 key for the raw .eml (best-effort, optional).
    rawKey: text("raw_key"),
    receivedAt: timestamp("received_at", { mode: "date", withTimezone: true }).notNull(),
    // Set by the daemon once the review pipeline succeeds.
    processedAt: timestamp("processed_at", { mode: "date", withTimezone: true }),
    auditSlug: text("audit_slug"),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  },
  (t) => ({
    // Unique per (persona, message-id) so the Worker can safely retry. Only
    // applies when message_id is non-null; null message_ids skip the
    // constraint and are treated as fresh inserts.
    msgIdUnique: index("email_message_msgid_idx").on(t.personaSlug, t.messageId),
    // Hot path: daemon polls for unprocessed messages per persona ordered
    // by receipt time. Partial index would be ideal but drizzle doesn't
    // expose `WHERE` clauses for indexes inline; full index is fine at
    // expected scale.
    unprocessedIdx: index("email_message_unprocessed_idx").on(
      t.personaSlug,
      t.processedAt,
      t.receivedAt
    ),
    tenantIdx: index("email_message_tenant_idx").on(t.tenantId),
  })
);

// Phase D — brand-newsletter subscription queue. One row per
// (persona, brand_domain) pair. Status flow:
//   manual_pending — fresh insert, waiting for the admin / tenant member
//                    to subscribe via the brand's signup form
//   manual_done — someone clicked "Mark done" or the welcome email landed
//   failed — admin marked the brand unreachable (e.g. signup region-locked)
//
// Legacy values still present in the column (no migration yet):
//   queued, auto_succeeded — created during the auto-subscribe era
//   (removed; substring-matching Klaviyo signups covered too few brands).
export const subscriptionJobs = pgTable("subscription_job", {
  id: uuid("id").primaryKey().defaultRandom(),
  tenantId: uuid("tenant_id")
    .notNull()
    .references(() => tenants.id, { onDelete: "cascade" }),
  personaSlug: text("persona_slug").notNull(),
  brandDomain: text("brand_domain").notNull(),
  inboxAddress: text("inbox_address").notNull(),
  status: text("status").notNull().default("queued"),
  attempts: integer("attempts").default(0).notNull(),
  lastError: text("last_error"),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
});

// Brand-opt-out blocklist. Brands or their legal teams who don't want
// us subscribing personas to their email programs email alon@etell.app
// (per /terms section 6) and we add their domain here. Future
// enqueueSubscriptionJob calls reject before the row is inserted.
// Apex domain match — substring check covers `em.brand.com` and any
// other ESP subdomain off the same brand.
export const brandBlocklist = pgTable("brand_blocklist", {
  domain: text("domain").primaryKey(),
  reason: text("reason"),
  addedBy: text("added_by").references(() => users.id),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
});

// Phase C handoff: when a public-tenant user finishes the wizard, we enqueue
// a row here. Alon claims the row at /admin/laptop-queue, which prints the
// `node scripts/onboard-persona.mjs <slug>` command. status flips through
// 'queued' → 'running' → 'done' (or 'failed') as the laptop script reports
// progress via persona.last_status.onboarding.
export const laptopProvisioningJobs = pgTable("laptop_provisioning_job", {
  id: uuid("id").primaryKey().defaultRandom(),
  tenantId: uuid("tenant_id")
    .notNull()
    .references(() => tenants.id, { onDelete: "cascade" }),
  personaSlug: text("persona_slug").notNull(),
  status: text("status").notNull().default("queued"), // queued | running | done | failed
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  claimedAt: timestamp("claimed_at", { mode: "date" }),
  doneAt: timestamp("done_at", { mode: "date" }),
  error: text("error"),
});

// ─── Experience / Reaction split (v3 — replaces audit) ───────────────────
//
// The legacy `audit` row fused two things into one: the brand-side
// experience (email arrived at this inbox, with these contents and this
// rendered screenshot) AND a persona's voiced review of that experience.
// V3 separates them so a tenant-fork can inherit the brand corpus
// (experiences) without inheriting the template's voice (reactions).
//
// Read semantics:
//   - experience: read-shared with forks via `expandReadableSlugs`
//     (`persona_slug ∈ [forkSlug, templateSlug]`). Same OR-match pattern
//     today's audits use.
//   - reaction: read-isolated. A fork only sees its own reactions; the
//     template's reactions stay private to the template's persona row
//     in Alon's tenant. Per the locked design (2026-04-27), forks do
//     NOT auto-react to inherited experiences — they accumulate
//     reactions only from new mail going forward.
//
// Audit and audit_embedding stay as deprecated legacy tables for 7 days
// post-cutover for rollback safety; scheduled drop 2026-05-04+.

export const experiences = pgTable(
  "experience",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    // Inbox owner — the persona whose @etell.app inbox received the
    // email (or whose site-monitor journey produced the audit). Forks
    // read-merge against this column via expandReadableSlugs.
    personaSlug: text("persona_slug").notNull(),
    // Tenant scope mirrors audit.tenant_id — every list query filters
    // by the actor's tenant_id (admin bypass).
    tenantId: uuid("tenant_id").references(() => tenants.id, { onDelete: "restrict" }),
    // 'email' (inbox-delivered) or 'site' (daemon journey).
    type: text("type").notNull(),
    // Sender domain extracted at ingest time. Cheap filter for
    // brand-scoped queries; nullable for site-journey audits.
    brandDomain: text("brand_domain"),
    // Message-Id header, when present. Allows dedup across daemon
    // restarts and (eventually) across Cloudflare Worker retries.
    // Nullable — legacy AgentMail audits don't have a stable id.
    messageId: text("message_id"),
    // Original receipt or journey timestamp.
    receivedAt: timestamp("received_at", { mode: "date", withTimezone: true }).notNull(),
    // Email metadata block (subject, preheader, from*, date_formatted).
    // For site-journeys this is null; the journey lives in `assets`.
    emailData: jsonb("email_data"),
    // Persona-agnostic QA: link checks, accessibility, compliance.
    // Run by qa_checks.py — same regardless of which persona reviews.
    qaFindings: jsonb("qa_findings"),
    // Render screenshot key + pdf + webview URL + journey steps.
    // assets.render_image_key is the R2 key the site mints signed URLs
    // from at request time.
    assets: jsonb("assets"),
    // Site-journey performance metrics; null for email audits.
    performance: jsonb("performance"),
    // Inventory audit payload (Ivy). Only set on inventory audits — null
    // for email audits and Walker-style site journeys. Carries the full
    // PLP × style × variant × size grid plus per-(color, width) screenshot
    // keys + the sidecar CSV key.
    inventory: jsonb("inventory"),
    // Double-opt-in auto-confirm result. Set on email audits where the
    // ingest pipeline detected a "confirm your email" message and clicked
    // the primary CTA. Null on every other email and on site/inventory
    // audits. Shape: { url, attempted_at, http_status, success, error }.
    autoConfirm: jsonb("auto_confirm"),
    // R2 key of the raw .eml — best-effort archive for re-processing.
    rawKey: text("raw_key"),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
  },
  (t) => ({
    personaTsIdx: index("experience_persona_ts_idx").on(t.personaSlug, t.receivedAt),
    typeTsIdx: index("experience_type_ts_idx").on(t.type, t.receivedAt),
    tenantTsIdx: index("experience_tenant_ts_idx").on(t.tenantId, t.receivedAt),
    brandIdx: index("experience_brand_idx").on(t.brandDomain),
    // Dedup natural key when message_id is present — partial unique
    // declared in the migration's raw SQL since drizzle-kit doesn't
    // emit partial uniques cleanly.
  })
);

export const reactions = pgTable(
  "reaction",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    experienceId: uuid("experience_id")
      .notNull()
      .references(() => experiences.id, { onDelete: "cascade" }),
    // The persona whose voice produced this review. Equal to
    // experience.personaSlug for the inbox-owner's first-pass review,
    // or different for any future "fork re-reacted to inherited
    // experience" path (not enabled in v1 per locked decision).
    personaSlug: text("persona_slug").notNull(),
    // URL-friendly identifier. Backfill preserves the legacy audit slug
    // so existing /audits/<slug> links don't 404.
    slug: text("slug").unique().notNull(),
    score: numeric("score", { precision: 5, scale: 2 }),
    // The persona's voiced review (sections, raw_markdown, predictions).
    reviewData: jsonb("review_data").notNull(),
    // Persona-voiced rewrite alternatives generated on-demand from the
    // audit detail page. Shape: { generated_at, baseline_score,
    // alternatives: [{ dimension, text, predicted_score, rationale }] }.
    // Null until the user clicks "Ask {persona} to rewrite".
    rewrites: jsonb("rewrites"),
    // Tenant scope mirrors the experience's tenant scope.
    tenantId: uuid("tenant_id").references(() => tenants.id, { onDelete: "restrict" }),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
  },
  (t) => ({
    personaTsIdx: index("reaction_persona_ts_idx").on(t.personaSlug, t.createdAt),
    experienceIdx: index("reaction_experience_idx").on(t.experienceId),
    tenantTsIdx: index("reaction_tenant_ts_idx").on(t.tenantId, t.createdAt),
  })
);

// Replaces audit_embedding. Indexes the persona's voiced review (not
// the brand-side experience), so retrieval grounding is always from
// the requesting persona's own perspective.
export const reactionEmbedding = pgTable(
  "reaction_embedding",
  {
    reactionId: uuid("reaction_id")
      .primaryKey()
      .references(() => reactions.id, { onDelete: "cascade" }),
    persona: text("persona").notNull(),
    indexedText: text("indexed_text").notNull(),
    embedding: vector("embedding", { dimensions: 1024 }).notNull(),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  },
  (t) => ({
    embeddingIdx: index("reaction_embedding_hnsw_idx").using(
      "hnsw",
      t.embedding.op("vector_cosine_ops")
    ),
    personaIdx: index("reaction_embedding_persona_idx").on(t.persona),
  })
);

// Stage C — chat-thread reflections. After a thread settles (no new
// activity for ~30 min), a background job summarizes the conversation
// into a first-person "reflection" memory the persona retains. The
// summary is embedded and surfaced alongside reactions during retrieval,
// so the persona's chat output continues to feed its own brain.
//
// One reflection per thread. Re-running the summarizer on the same
// thread updates the row in place (`reactedThroughMessageCount` tracks
// how far the summary covers; if new turns arrive after, we re-summarize).
export const chatReflection = pgTable(
  "chat_reflection",
  {
    threadId: uuid("thread_id")
      .primaryKey()
      .references(() => chatThread.id, { onDelete: "cascade" }),
    personaSlug: text("persona_slug").notNull(),
    tenantId: uuid("tenant_id").references(() => tenants.id, {
      onDelete: "restrict",
    }),
    // 4-8 word title, like a vault note title.
    title: text("title").notNull(),
    // 2-4 paragraph first-person summary. Same content gets mirrored to
    // vaults/{persona}/reflections/{date}-{thread-id}.md.
    summary: text("summary").notNull(),
    // Embedding of `summary` so chat retrieval can semantic-match against
    // the reflection alongside reaction embeddings.
    embedding: vector("embedding", { dimensions: 1024 }).notNull(),
    // How many messages this summary covers. If a thread grows past this
    // count (user comes back, asks more questions), the reflector re-runs.
    reflectedThroughMessageCount: integer("reflected_through_message_count")
      .notNull()
      .default(0),
    // Set by the email-monitor daemon's mirror-reflections pass once the
    // markdown twin lands at vaults/{persona}/reflections/...md and
    // gets git-pushed. Vercel functions can't commit, so the daemon
    // owns this side-effect.
    vaultSyncedAt: timestamp("vault_synced_at", { mode: "date" }),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
  },
  (t) => ({
    embeddingIdx: index("chat_reflection_hnsw_idx").using(
      "hnsw",
      t.embedding.op("vector_cosine_ops")
    ),
    personaIdx: index("chat_reflection_persona_idx").on(t.personaSlug),
    tenantIdx: index("chat_reflection_tenant_idx").on(t.tenantId),
  })
);

// Stage D — cross-audit synthesis. Periodic LLM job clusters a
// persona's reactions by brand and writes one dense POV note per
// (persona, brand) pair: "Walker on Skechers, April 2026". The note
// distills 10s-100s of individual reactions into one synthesized
// opinion the persona can recall instead of (or alongside) raw
// reactions. Embedded so chat retrieval surfaces it on relevant
// queries.
//
// Re-synthesizes when the underlying reaction count grows past the
// previous summary's coverage. Vault-mirroring lives in the daemon
// (audit-pipeline/mirror-syntheses.mjs), same shape as reflections.
export const personaSyntheses = pgTable(
  "persona_synthesis",
  {
    personaSlug: text("persona_slug").notNull(),
    brandDomain: text("brand_domain").notNull(),
    tenantId: uuid("tenant_id").references(() => tenants.id, {
      onDelete: "restrict",
    }),
    title: text("title").notNull(),
    summary: text("summary").notNull(),
    embedding: vector("embedding", { dimensions: 1024 }).notNull(),
    // How many reactions this synthesis covers. When count grows past
    // this number, re-summarize.
    reactionCount: integer("reaction_count").notNull(),
    // Newest reaction timestamp covered. Used by the resynthesis check
    // ("are there any reactions newer than this?").
    throughReceivedAt: timestamp("through_received_at", {
      mode: "date",
      withTimezone: true,
    }),
    vaultSyncedAt: timestamp("vault_synced_at", { mode: "date" }),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.personaSlug, t.brandDomain] }),
    embeddingIdx: index("persona_synthesis_hnsw_idx").using(
      "hnsw",
      t.embedding.op("vector_cosine_ops")
    ),
    personaIdx: index("persona_synthesis_persona_idx").on(t.personaSlug),
  })
);

// Per-user access to apps. Row present = user has access to that app
// (in addition to the global app_flag being on). Admins bypass both gates.
export const userAppAccess = pgTable(
  "user_app_access",
  {
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    appKey: text("app_key").notNull(),
    grantedAt: timestamp("granted_at", { mode: "date" }).defaultNow().notNull(),
    grantedBy: text("granted_by").references(() => users.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.userId, t.appKey] }),
  })
);
