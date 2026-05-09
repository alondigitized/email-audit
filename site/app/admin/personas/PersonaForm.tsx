import type { PersonaProfile } from "@/lib/schema/persona";
import type { PersonaLastStatus } from "@/lib/db/schema";
import { buildJourneySteps } from "@/lib/journey-preview";
import { KNOWN_INDUSTRIES } from "@/lib/industries";

// Server-rendered, uncontrolled form. Submit posts to the action passed
// in via `action`. Used by both edit (/[slug]) and create (/new) pages —
// mode toggles a few labels and whether slug is editable.

type Mode = "create" | "edit";

export function PersonaForm({
  mode,
  action,
  slug,
  name,
  short,
  profile,
  lastStatus,
  kind,
  industry,
  error,
  saved,
}: {
  mode: Mode;
  action: (fd: FormData) => void | Promise<void>;
  slug?: string;
  name?: string;
  short?: string;
  profile?: PersonaProfile | null;
  lastStatus?: PersonaLastStatus | null;
  kind?: "brand" | "industry";
  industry?: string | null;
  error?: string;
  saved?: boolean;
}) {
  const id = profile?.identity;
  const j = profile?.journey;
  const agentmail = profile?.agentmail;

  return (
    <form action={action} className="space-y-5">
      {(error || saved) && (
        <div
          className={`rounded-xl px-4 py-3 text-sm ${
            error
              ? "bg-rose-50 border border-rose-200 text-rose-800"
              : "bg-emerald-50 border border-emerald-200 text-emerald-800"
          }`}
        >
          {error ?? "Saved."}
        </div>
      )}

      <Section title="Identity" subtitle="How the persona speaks and what they care about. Edit anything here and the chat picks it up on the next turn.">
        <Row>
          <Field label="Kind" hint="Brand: single-brand customer with own inbox. Industry: cross-brand lens (no inbox; gets fan-out audits from same-industry brand personas).">
            <select
              name="kind"
              defaultValue={kind ?? "brand"}
              className={inputCls}
            >
              <option value="brand">Brand</option>
              <option value="industry">Industry</option>
            </select>
          </Field>
          <Field label="Industry" hint="Required for kind=industry. Matches persona_template.industry on the brand side.">
            <input
              type="text"
              name="industry"
              defaultValue={industry ?? ""}
              placeholder="e.g. apparel, electronics, beauty"
              list="known-industries"
              className={inputCls}
            />
            <datalist id="known-industries">
              {KNOWN_INDUSTRIES.map((i) => (
                <option key={i} value={i} />
              ))}
            </datalist>
          </Field>
        </Row>
        <Row>
          <Field label="Slug" hint="URL-safe, lowercase. Cannot change after create.">
            <input
              type="text"
              name="slug"
              required
              defaultValue={slug}
              readOnly={mode === "edit"}
              pattern="[a-z0-9\-]{2,64}"
              className={inputCls + (mode === "edit" ? " bg-gray-50 text-muted" : "")}
            />
          </Field>
          <Field label="Display name">
            <input
              type="text"
              name="name"
              required
              defaultValue={name ?? id?.name ?? ""}
              className={inputCls}
            />
          </Field>
          <Field label="Short label" hint="Used on pills. Usually first name.">
            <input
              type="text"
              name="short"
              defaultValue={short}
              className={inputCls}
            />
          </Field>
        </Row>
        <Row>
          <Field label="Age">
            <input
              type="number"
              name="age"
              min={1}
              max={150}
              required
              defaultValue={id?.age ?? 30}
              className={inputCls}
            />
          </Field>
          <Field label="Generation" hint="Boomer · Gen X · Millennial · Gen Z · Gen Alpha">
            <input
              type="text"
              name="generation"
              required
              defaultValue={id?.generation ?? ""}
              className={inputCls}
            />
          </Field>
          <Field label="Gender">
            <input
              type="text"
              name="gender"
              required
              defaultValue={id?.gender ?? ""}
              className={inputCls}
            />
          </Field>
        </Row>
        <Field label="Style" hint="One-line summary of how they dress / shop.">
          <input
            type="text"
            name="style"
            required
            defaultValue={id?.style ?? ""}
            className={inputCls}
          />
        </Field>
        <Field label="Shopping habits">
          <textarea
            name="shopping_habits"
            rows={2}
            required
            defaultValue={id?.shopping_habits ?? ""}
            className={inputCls + " resize-y"}
          />
        </Field>
        <Field label="Tech comfort">
          <textarea
            name="tech_comfort"
            rows={2}
            required
            defaultValue={id?.tech_comfort ?? ""}
            className={inputCls + " resize-y"}
          />
        </Field>
        <Field label="Focus areas" hint="One per line — specific things they notice in emails/sites.">
          <textarea
            name="focus_areas"
            rows={3}
            defaultValue={(id?.focus_areas ?? []).join("\n")}
            className={inputCls + " resize-y"}
          />
        </Field>
        <Field label="Notes" hint="Free-form. Surfaces inside the persona's system prompt if set.">
          <textarea
            name="notes"
            rows={3}
            defaultValue={profile?.notes ?? ""}
            className={inputCls + " resize-y"}
          />
        </Field>
      </Section>

      <Section title="Daemon journey config" subtitle="Used by site-monitor when running site journeys as this persona. Email-only personas can leave these blank.">
        <Row>
          <Field label="Site URL">
            <input
              type="url"
              name="site"
              defaultValue={j?.site ?? ""}
              placeholder="https://www.skechers.com"
              className={inputCls}
            />
          </Field>
          <Field label="Search term" hint="Typed into the site's search box during the journey.">
            <input
              type="text"
              name="search_term"
              defaultValue={j?.search_term ?? ""}
              className={inputCls}
            />
          </Field>
        </Row>
        <Row>
          <Field label="Category path" hint="Comma or newline separated, e.g. Men, Shoes">
            <input
              type="text"
              name="category_path"
              defaultValue={(j?.category_path ?? []).join(", ")}
              className={inputCls}
            />
          </Field>
          <Field
            label="Credentials env prefix"
            hint="Daemon reads {PREFIX}_EMAIL / {PREFIX}_PASSWORD from .env"
          >
            <input
              type="text"
              name="credentials_env_prefix"
              defaultValue={j?.credentials_env_prefix ?? ""}
              placeholder="SKECHERS_MARTHA"
              className={inputCls}
            />
          </Field>
        </Row>
      </Section>

      {profile && (
        <JourneyPreview profile={profile} lastStatus={lastStatus ?? null} />
      )}

      <Section title="Inbox & display" subtitle="AgentMail inbox this persona polls. UI accent color used on pills.">
        <Row>
          <Field
            label="AgentMail inbox address"
            hint="Provision via the checklist below, or paste an existing one."
          >
            <input
              type="text"
              name="inbox_address"
              defaultValue={agentmail?.inbox_address ?? ""}
              placeholder="walker@agentmail.to"
              className={inputCls}
            />
          </Field>
          <Field label="Accent color" hint="Picker serializes as #rrggbb.">
            <input
              type="color"
              name="color"
              defaultValue={profile?.color ?? "#4269d0"}
              className="h-10 w-20 rounded-lg border border-gray-200 cursor-pointer"
            />
          </Field>
        </Row>
      </Section>

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          className="bg-gray-900 text-white text-sm font-semibold px-4 py-2 rounded-xl"
        >
          {mode === "create" ? "Create persona" : "Save changes"}
        </button>
        <a
          href="/admin/personas"
          className="text-sm text-muted hover:text-ink underline"
        >
          Cancel
        </a>
      </div>
    </form>
  );
}

// ─── Layout helpers ────────────────────────────────────────────────────────

const inputCls =
  "w-full rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-500";

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-4">
      <legend className="px-2 text-sm font-semibold text-muted uppercase tracking-wide">
        {title}
      </legend>
      {subtitle && (
        <p className="text-xs text-muted -mt-2 max-w-2xl">{subtitle}</p>
      )}
      {children}
    </fieldset>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {children}
    </div>
  );
}

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
      {hint && (
        <span className="block text-[11px] font-normal text-muted">{hint}</span>
      )}
    </label>
  );
}

// ─── Journey preview ───────────────────────────────────────────────────────
//
// Renders the exact step list buildJourneySteps() will produce for this
// persona's SAVED journey config, plus URL-validation badges from the
// last save. The preview reflects saved state (not form draft) — live-
// update-as-you-type is a Phase C wizard feature.

function JourneyPreview({
  profile,
  lastStatus,
}: {
  profile: PersonaProfile;
  lastStatus: PersonaLastStatus | null;
}) {
  const steps = buildJourneySteps({
    site: profile.journey.site ?? undefined,
    search_term: profile.journey.search_term ?? undefined,
    category_path: profile.journey.category_path ?? [],
    targets: (profile.journey.targets ?? []).map((t) => ({
      label: t.label,
      search_term: t.search_term ?? undefined,
      category_path: t.category_path ?? [],
    })),
  });

  const validation = lastStatus?.url_validation ?? null;
  const byStepId = new Map(
    (validation?.results ?? []).map((r) => [r.step_id, r])
  );

  return (
    <fieldset className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-3">
      <legend className="px-2 text-sm font-semibold text-muted uppercase tracking-wide">
        Journey preview
      </legend>
      <p className="text-xs text-muted -mt-2 max-w-2xl">
        The {steps.length}-step journey site-monitor will run on the next schedule. URL
        badges come from the last save&apos;s HEAD check — fix any red rows before
        Saturday.{" "}
        {validation?.at ? (
          <>Validated {new Date(validation.at).toLocaleString()}.</>
        ) : (
          <>No URL validation on record yet — save once to run it.</>
        )}
      </p>
      <ol className="space-y-1.5 text-sm">
        {steps.map((step, i) => {
          const v = byStepId.get(step.id);
          return (
            <li
              key={step.id}
              className="flex items-center gap-2.5 font-mono text-[12.5px]"
            >
              <span className="w-6 text-right text-muted tabular-nums">{i + 1}.</span>
              <span className="inline-block w-6 text-muted">{step.action === "nav_direct" ? "→" : step.action === "nav_category" ? "▸" : step.action === "nav_subcategory" ? "▸▸" : "·"}</span>
              <span className="flex-1 min-w-0 truncate">{step.label}</span>
              {v ? <UrlStatusBadge status={v.status} /> : null}
            </li>
          );
        })}
      </ol>
    </fieldset>
  );
}

function UrlStatusBadge({ status }: { status: number | "error" }) {
  const isErr = status === "error";
  const is2xx = typeof status === "number" && status >= 200 && status < 300;
  const is3xx = typeof status === "number" && status >= 300 && status < 400;
  const is4xx = typeof status === "number" && status >= 400 && status < 500;
  const is5xx = typeof status === "number" && status >= 500;
  const cls = is2xx
    ? "bg-emerald-50 text-emerald-800 border-emerald-200"
    : is3xx
      ? "bg-sky-50 text-sky-800 border-sky-200"
      : is4xx || is5xx || isErr
        ? "bg-rose-50 text-rose-800 border-rose-200"
        : "bg-gray-100 text-gray-600 border-gray-200";
  return (
    <span
      className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold border tabular-nums ${cls}`}
      title={isErr ? "Fetch errored (timeout / DNS / abort)" : `HTTP ${status}`}
    >
      {isErr ? "ERR" : status}
    </span>
  );
}
