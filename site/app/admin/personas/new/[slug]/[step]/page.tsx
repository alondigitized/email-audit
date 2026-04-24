import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { requireAdmin } from "@/lib/dal";
import { db, personas } from "@/lib/db/client";
import { eq } from "drizzle-orm";
import type { PersonaProfile } from "@/lib/schema/persona";
import type { PersonaLastStatus } from "@/lib/db/schema";
import { buildJourneySteps, journeyUrls } from "@/lib/journey-preview";
import { WizardLayout } from "../../WizardLayout";
import {
  saveIdentityAndAdvance,
  saveJourneyAndAdvance,
  advanceToHandoff,
  finalizeAndRedirect,
  abandonDraftAndRedirect,
} from "../../wizard-actions";
import { provisionInboxAndRefresh } from "../../../actions";
import { HandoffChecklist } from "../../HandoffChecklist";

export const dynamic = "force-dynamic";

const VALID_STEPS = ["identity", "journey", "inbox", "handoff"] as const;
type Step = (typeof VALID_STEPS)[number];

type Search = { [key: string]: string | string[] | undefined };

export default async function WizardStepPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string; step: string }>;
  searchParams: Promise<Search>;
}) {
  await requireAdmin();
  const { slug, step } = await params;
  if (!(VALID_STEPS as readonly string[]).includes(step)) notFound();
  const sp = await searchParams;
  const error = typeof sp.error === "string" ? sp.error : undefined;

  const rows = await db
    .select({
      name: personas.name,
      profile: personas.profile,
      lastStatus: personas.lastStatus,
    })
    .from(personas)
    .where(eq(personas.slug, slug))
    .limit(1);
  if (rows.length === 0) {
    redirect(
      `/admin/personas/new?error=${encodeURIComponent(`Persona "${slug}" not found`)}`
    );
  }
  const { name, profile, lastStatus } = rows[0];
  if (!profile) {
    redirect(
      `/admin/personas/new?error=${encodeURIComponent("Draft has no profile — start again")}`
    );
  }

  return (
    <WizardLayout slug={slug} current={step as Step}>
      {error && (
        <div className="rounded-xl px-4 py-3 text-sm bg-rose-50 border border-rose-200 text-rose-800">
          {error}
        </div>
      )}
      {step === "identity" && (
        <IdentityStep slug={slug} profile={profile} name={name} />
      )}
      {step === "journey" && <JourneyStep slug={slug} profile={profile} />}
      {step === "inbox" && <InboxStep slug={slug} profile={profile} />}
      {step === "handoff" && (
        <HandoffStep slug={slug} profile={profile} lastStatus={lastStatus ?? null} />
      )}
      <DraftAbandonRow slug={slug} />
    </WizardLayout>
  );
}

// ─── Step 1 — Identity ────────────────────────────────────────────────────

function IdentityStep({
  slug,
  profile,
  name,
}: {
  slug: string;
  profile: PersonaProfile;
  name: string;
}) {
  const id = profile.identity;
  return (
    <form action={saveIdentityAndAdvance} className="space-y-4">
      <input type="hidden" name="slug" value={slug} />
      <fieldset className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-4">
        <legend className="px-2 text-sm font-semibold text-muted uppercase tracking-wide">
          Identity
        </legend>
        <p className="text-xs text-muted -mt-2 max-w-2xl">
          How the persona speaks and what they care about. This drives the
          system prompt the chat uses when the persona answers questions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Field label="Display name">
            <input name="name" required defaultValue={id.name || name} className={input} />
          </Field>
          <Field label="Short label" hint="Shown on pills. Usually first name.">
            <input name="short" defaultValue={name.split(/\s+/)[0]} className={input} />
          </Field>
          <Field label="Age">
            <input type="number" name="age" min={1} max={150} required defaultValue={id.age} className={input} />
          </Field>
          <Field label="Generation">
            <input name="generation" required defaultValue={id.generation} className={input} />
          </Field>
          <Field label="Gender">
            <input name="gender" required defaultValue={id.gender} className={input} />
          </Field>
          <Field label="Accent color">
            <input type="color" name="color" defaultValue={profile.color ?? "#4269d0"} className="h-10 w-20 rounded-lg border border-gray-200 cursor-pointer" />
          </Field>
        </div>
        <Field label="Style" hint="One-line summary of how they dress/shop.">
          <input name="style" required defaultValue={id.style} className={input} />
        </Field>
        <Field label="Shopping habits">
          <textarea name="shopping_habits" rows={2} required defaultValue={id.shopping_habits} className={input + " resize-y"} />
        </Field>
        <Field label="Tech comfort">
          <textarea name="tech_comfort" rows={2} required defaultValue={id.tech_comfort} className={input + " resize-y"} />
        </Field>
        <Field label="Focus areas" hint="One per line — specifics they notice in emails/sites.">
          <textarea name="focus_areas" rows={3} defaultValue={(id.focus_areas ?? []).join("\n")} className={input + " resize-y"} />
        </Field>
        <Field label="Notes" hint="Optional — prepended to the system prompt if set.">
          <textarea name="notes" rows={3} defaultValue={profile.notes ?? ""} className={input + " resize-y"} />
        </Field>
      </fieldset>
      <div className="flex justify-between items-center">
        <Link href="/admin/personas" className="text-sm text-muted hover:text-ink underline">
          Save & exit
        </Link>
        <button type="submit" className="bg-gray-900 text-white text-sm font-semibold px-4 py-2 rounded-xl">
          Next → Journey
        </button>
      </div>
    </form>
  );
}

// ─── Step 2 — Journey ─────────────────────────────────────────────────────

function JourneyStep({ slug, profile }: { slug: string; profile: PersonaProfile }) {
  const j = profile.journey;
  // Live preview: compute on the current saved state. Users who want
  // instant feedback can click Save to re-compute.
  const preview = buildJourneySteps({
    site: j.site ?? undefined,
    search_term: j.search_term ?? undefined,
    category_path: j.category_path ?? [],
    targets: (j.targets ?? []).map((t) => ({
      label: t.label,
      search_term: t.search_term ?? undefined,
      category_path: t.category_path ?? [],
    })),
  });
  const urls = journeyUrls({
    site: j.site ?? undefined,
    targets: (j.targets ?? []).map((t) => ({
      label: t.label,
      category_path: t.category_path ?? [],
    })),
    category_path: j.category_path ?? [],
  });

  return (
    <form action={saveJourneyAndAdvance} className="space-y-4">
      <input type="hidden" name="slug" value={slug} />
      <fieldset className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-4">
        <legend className="px-2 text-sm font-semibold text-muted uppercase tracking-wide">
          Journey
        </legend>
        <p className="text-xs text-muted -mt-2 max-w-2xl">
          Where the site-monitor journey goes. Leave targets empty for a
          single-track journey (Walker-style). Add multiple targets for
          cases like Martha shopping for different kids in one session.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Field label="Site URL">
            <input type="url" name="site" defaultValue={j.site ?? ""} placeholder="https://www.skechers.com" className={input} />
          </Field>
          <Field label="Credentials env prefix" hint="Daemon reads {PREFIX}_EMAIL / {PREFIX}_PASSWORD">
            <input name="credentials_env_prefix" defaultValue={j.credentials_env_prefix ?? ""} placeholder="SKECHERS_MARTHA" className={input} />
          </Field>
          <Field label="Default search term">
            <input name="search_term" defaultValue={j.search_term ?? ""} className={input} />
          </Field>
          <Field label="Default category path" hint="Comma or newline separated, e.g. kids,girls,shoes">
            <input name="category_path" defaultValue={(j.category_path ?? []).join(", ")} className={input} />
          </Field>
        </div>
        <Field label="Shopping targets (JSON)" hint={`Array of { label, search_term, category_path }. Example:\n[{"label":"5yo girl","search_term":"girls shoes","category_path":["kids","girls","shoes"]}]`}>
          <textarea
            name="targets_json"
            rows={6}
            defaultValue={JSON.stringify(j.targets ?? [], null, 2)}
            className={input + " resize-y font-mono text-[12px]"}
          />
        </Field>
      </fieldset>

      <fieldset className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-2">
        <legend className="px-2 text-sm font-semibold text-muted uppercase tracking-wide">
          Preview ({preview.length} steps)
        </legend>
        <ol className="space-y-1 text-[12.5px] font-mono">
          {preview.map((s, i) => (
            <li key={s.id} className="flex items-center gap-2">
              <span className="w-6 text-right text-muted tabular-nums">{i + 1}.</span>
              <span className="flex-1 truncate">{s.label}</span>
            </li>
          ))}
        </ol>
        {urls.length > 0 && (
          <div className="text-[11px] text-muted pt-2">
            Will HEAD-check {urls.length} URL{urls.length === 1 ? "" : "s"} on
            save; results appear as badges on the persona edit page.
          </div>
        )}
      </fieldset>

      <div className="flex justify-between items-center">
        <Link href={`/admin/personas/new/${slug}/identity`} className="text-sm text-muted hover:text-ink underline">
          ← Back
        </Link>
        <button type="submit" className="bg-gray-900 text-white text-sm font-semibold px-4 py-2 rounded-xl">
          Next → Inbox
        </button>
      </div>
    </form>
  );
}

// ─── Step 3 — Inbox ───────────────────────────────────────────────────────

function InboxStep({ slug, profile }: { slug: string; profile: PersonaProfile }) {
  const am = profile.agentmail;
  const provisioned = !!am.inbox_id;
  return (
    <div className="space-y-4">
      <fieldset className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-3">
        <legend className="px-2 text-sm font-semibold text-muted uppercase tracking-wide">
          AgentMail inbox
        </legend>
        <p className="text-xs text-muted -mt-2 max-w-2xl">
          Provisions <code className="px-1 rounded bg-gray-100 text-[12px]">{slug}@agentmail.to</code>{" "}
          via the AgentMail API. Requires <code className="px-1 rounded bg-gray-100 text-[12px]">AGENTMAIL_API_KEY</code>{" "}
          on Vercel. Already-provisioned personas can advance without re-running.
        </p>
        {provisioned ? (
          <div className="flex items-center gap-2 text-sm">
            <span className="inline-block px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xs font-semibold">
              provisioned
            </span>
            <code className="px-1 rounded bg-gray-100 text-[12px]">{am.inbox_address}</code>
            {am.provisioned_at && (
              <span className="text-xs text-muted">
                on {new Date(am.provisioned_at).toLocaleDateString()}
              </span>
            )}
          </div>
        ) : (
          <form action={provisionInboxAndRefresh}>
            <input type="hidden" name="slug" value={slug} />
            <button
              type="submit"
              className="bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold px-3 py-1.5 rounded-xl"
            >
              Provision inbox
            </button>
          </form>
        )}
      </fieldset>

      <form action={advanceToHandoff} className="flex justify-between items-center">
        <input type="hidden" name="slug" value={slug} />
        <Link href={`/admin/personas/new/${slug}/journey`} className="text-sm text-muted hover:text-ink underline">
          ← Back
        </Link>
        <button
          type="submit"
          disabled={!provisioned}
          className="bg-gray-900 text-white text-sm font-semibold px-4 py-2 rounded-xl disabled:opacity-40"
        >
          Next → Handoff
        </button>
      </form>
    </div>
  );
}

// ─── Step 4 — Handoff ─────────────────────────────────────────────────────

function HandoffStep({
  slug,
  profile,
  lastStatus,
}: {
  slug: string;
  profile: PersonaProfile;
  lastStatus: PersonaLastStatus | null;
}) {
  return (
    <div className="space-y-4">
      <fieldset className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-3">
        <legend className="px-2 text-sm font-semibold text-muted uppercase tracking-wide">
          Laptop handoff
        </legend>
        <p className="text-sm">
          Run this one command on the laptop that runs email-monitor and
          site-monitor. It prompts for the retailer password, writes{" "}
          <code className="px-1 rounded bg-gray-100 text-[12px]">.env</code>,
          captures cookies, installs the LaunchAgent, and runs a dry-run
          site-review smoke test.
        </p>
        <pre className="bg-gray-900 text-gray-50 rounded-xl px-3 py-2 text-[12.5px] overflow-x-auto">
{`node scripts/onboard-persona.mjs ${slug}`}
        </pre>
        <p className="text-[11px] text-muted">
          Requires <code className="px-1 rounded bg-gray-100">DATABASE_URL_UNPOOLED</code> in the shell env.
        </p>
      </fieldset>

      <HandoffChecklist slug={slug} initialStatus={lastStatus} />

      <form action={finalizeAndRedirect} className="flex justify-between items-center">
        <input type="hidden" name="slug" value={slug} />
        <Link href={`/admin/personas/new/${slug}/inbox`} className="text-sm text-muted hover:text-ink underline">
          ← Back
        </Link>
        <button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-xl">
          Mark active & finish
        </button>
      </form>
      <p className="text-xs text-muted">
        You can leave and come back — the draft persists until finalized.
        &quot;Mark active&quot; flips the slug out of draft mode so it appears in chat and audits.
      </p>

      <PersonaProfileSummary profile={profile} />
    </div>
  );
}

function PersonaProfileSummary({ profile }: { profile: PersonaProfile }) {
  return (
    <details className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm text-sm">
      <summary className="cursor-pointer text-muted font-semibold text-xs uppercase tracking-wide">
        Saved profile (for reference)
      </summary>
      <pre className="mt-3 text-[11.5px] overflow-x-auto bg-gray-50 rounded p-3">
        {JSON.stringify(profile, null, 2)}
      </pre>
    </details>
  );
}

// ─── Shared ────────────────────────────────────────────────────────────────

function DraftAbandonRow({ slug }: { slug: string }) {
  return (
    <form
      action={abandonDraftAndRedirect}
      className="pt-6 border-t border-gray-100 text-right"
    >
      <input type="hidden" name="slug" value={slug} />
      <button
        type="submit"
        className="text-xs text-rose-700 hover:text-rose-900 underline"
      >
        Abandon & delete draft
      </button>
    </form>
  );
}

const input =
  "w-full rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-500";

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-xs font-semibold text-muted space-y-1">
      <span>{label}</span>
      <span className="block font-normal">{children}</span>
      {hint && <span className="block text-[11px] font-normal text-muted whitespace-pre-line">{hint}</span>}
    </label>
  );
}
