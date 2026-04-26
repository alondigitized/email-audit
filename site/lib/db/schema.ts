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

// Wizard scratch — populated in Phase C. Declared here so the column type is
// stable across phases. Consumers tolerate undefined fields.
export type TenantOnboardingResearch = {
  site_summary?: string | null;
  generations?: number;
  personas?: unknown[];
  competitors?: unknown[];
  recommended_persona_idx?: number;
  recommended_competitor_idx?: number;
  // The 2 personas the user did *not* pick during the wizard. Surfaced as
  // upgrade bait in the dashboard. No persona row exists for these yet.
  unlocked_proposals?: unknown[];
};

export const tenants = pgTable("tenant", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").unique().notNull(),
  name: text("name").notNull(),
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

// Phase D — brand-newsletter subscription queue. One row per
// (persona, brand_domain) pair. Status flow:
//   queued — fresh insert, awaiting auto-subscribe attempt
//   auto_succeeded — auto path subscribed + welcome email confirmed
//   manual_pending — auto path failed (form blocked etc); human takes over
//   manual_done — admin clicked "mark done" or email-monitor confirmed
//   failed — terminal failure (auto failed + admin marked unreachable)
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
