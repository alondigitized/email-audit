import type { PersonaOnboarding, PersonaProfile } from "@/lib/schema/persona";
import {
  setChecklistItemAndRefresh,
  provisionInboxAndRefresh,
} from "./actions";

// Laptop-bound bootstrap checklist. Each item surfaces the *exact command*
// the admin needs to run on their daemon host. State persists in
// profile.onboarding so the checkmarks survive page reloads.
//
// What's automated from Vercel:
// - agentmail_inbox — provisioned via AgentMail API (Phase 4)
// - retailer_accounts — checklist only; CAPTCHAs defeat automation
// - cookies — laptop Chrome required; shows the command to run
// - credentials — laptop .env edit required; shows env keys to paste
// - brand_subscriptions — manual; links to retailer signup forms
// - launchagent — plist generation via bootstrap-export script
// - daemon_restart — laptop launchctl commands
// - smoke_test — one-shot site-review run

type Step = {
  key: keyof typeof STEP_DEFINITIONS | string;
  title: string;
  body: React.ReactNode;
  // "automated" items don't count toward manual checklist — they flip to
  // "done" automatically when the underlying action completes.
  automated?: boolean;
};

const STEP_DEFINITIONS = {
  retailer_accounts: "Create retailer accounts",
  credentials: "Add credentials to laptop .env",
  cookies: "Capture login cookies",
  brand_subscriptions: "Subscribe to brand email lists",
  launchagent: "Install daemon LaunchAgent",
  daemon_restart: "Restart daemons to pick up the new persona",
  smoke_test: "Smoke test the persona",
} as const;

export function ChecklistSection({
  slug,
  profile,
}: {
  slug: string;
  profile: PersonaProfile;
}) {
  const onboarding: PersonaOnboarding = profile.onboarding ?? {};
  const envPrefix =
    profile.journey.credentials_env_prefix ?? `PERSONA_${slug.toUpperCase()}`;
  const inbox = profile.agentmail.inbox_address ?? `${slug}@agentmail.to`;
  const site = profile.journey.site ?? "https://www.skechers.com";
  const hostname = (() => {
    try {
      return new URL(site).hostname.replace(/^www\./, "");
    } catch {
      return "skechers.com";
    }
  })();

  const steps: Step[] = [
    {
      key: "agentmail_inbox",
      title: `AgentMail inbox (${inbox})`,
      automated: true,
      body: profile.agentmail.inbox_id ? (
        <p className="text-sm text-muted">
          Provisioned via AgentMail API on {profile.agentmail.provisioned_at?.slice(0, 10) ?? "unknown date"} ·
          id <code className="px-1 py-0.5 bg-gray-100 rounded text-[11px]">{profile.agentmail.inbox_id}</code>
        </p>
      ) : (
        <div className="space-y-2">
          <p className="text-sm text-muted">
            Provisions <code className="px-1 py-0.5 bg-gray-100 rounded text-[12px]">{inbox}</code> via AgentMail API and stores the inbox id on this persona.
          </p>
          <form action={provisionInboxAndRefresh}>
            <input type="hidden" name="slug" value={slug} />
            <button
              type="submit"
              className="bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold px-3 py-1.5 rounded-xl"
            >
              Provision inbox
            </button>
          </form>
        </div>
      ),
    },
    {
      key: "retailer_accounts",
      title: STEP_DEFINITIONS.retailer_accounts,
      body: (
        <p className="text-sm">
          Open{" "}
          <a
            href={site}
            target="_blank"
            rel="noreferrer"
            className="text-sky-700 underline"
          >
            {hostname}
          </a>{" "}
          and create an account using <code className="px-1 py-0.5 bg-gray-100 rounded text-[12px]">{inbox}</code>. CAPTCHAs make this untrustworthy to automate — stays manual.
        </p>
      ),
    },
    {
      key: "credentials",
      title: STEP_DEFINITIONS.credentials,
      body: (
        <>
          <p className="text-sm mb-2">
            Paste this into{" "}
            <code className="px-1 py-0.5 bg-gray-100 rounded text-[12px]">
              site-monitor/.env
            </code>{" "}
            on the laptop:
          </p>
          <pre className="bg-gray-900 text-gray-50 rounded-xl px-3 py-2 text-[12px] overflow-x-auto">
{`${envPrefix}_EMAIL=${inbox}
${envPrefix}_PASSWORD=<generated-password>`}
          </pre>
        </>
      ),
    },
    {
      key: "cookies",
      title: STEP_DEFINITIONS.cookies,
      body: (
        <>
          <p className="text-sm mb-2">
            One-time browser login. Run on laptop:
          </p>
          <pre className="bg-gray-900 text-gray-50 rounded-xl px-3 py-2 text-[12px] overflow-x-auto">
{`cd site-monitor && node save-cookies.mjs --persona ${slug}`}
          </pre>
        </>
      ),
    },
    {
      key: "brand_subscriptions",
      title: STEP_DEFINITIONS.brand_subscriptions,
      body: (
        <p className="text-sm">
          Visit brand footer signup forms (skechers.com, adidas.com, crocs.com, hoka.com, …) and subscribe using{" "}
          <code className="px-1 py-0.5 bg-gray-100 rounded text-[12px]">{inbox}</code>.
          Double opt-in emails land in the inbox automatically.
        </p>
      ),
    },
    {
      key: "launchagent",
      title: STEP_DEFINITIONS.launchagent,
      body: (
        <>
          <p className="text-sm mb-2">
            Generate the plist + install (Phase 4 adds a single-command bootstrap script; for now this is a copy-paste):
          </p>
          <pre className="bg-gray-900 text-gray-50 rounded-xl px-3 py-2 text-[12px] overflow-x-auto">
{`node scripts/persona-bootstrap-export.mjs ${slug}
cp site-monitor/launchd/ai.openclaw.${slug}.site-review.plist ~/Library/LaunchAgents/
launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/ai.openclaw.${slug}.site-review.plist`}
          </pre>
        </>
      ),
    },
    {
      key: "daemon_restart",
      title: STEP_DEFINITIONS.daemon_restart,
      body: (
        <>
          <p className="text-sm mb-2">
            Picks up the new inbox mapping + any profile edits:
          </p>
          <pre className="bg-gray-900 text-gray-50 rounded-xl px-3 py-2 text-[12px] overflow-x-auto">
{`launchctl bootout gui/$(id -u) ~/Library/LaunchAgents/com.walker.agentmail-monitor.plist
launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.walker.agentmail-monitor.plist`}
          </pre>
        </>
      ),
    },
    {
      key: "smoke_test",
      title: STEP_DEFINITIONS.smoke_test,
      body: (
        <>
          <p className="text-sm mb-2">
            Confirm journey + email paths work end-to-end:
          </p>
          <pre className="bg-gray-900 text-gray-50 rounded-xl px-3 py-2 text-[12px] overflow-x-auto">
{`cd site-monitor && node site-review.mjs --persona ${slug}`}
          </pre>
        </>
      ),
    },
  ];

  return (
    <section className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
      <h2 className="text-sm font-semibold text-muted uppercase tracking-wide mb-1">
        Onboarding checklist
      </h2>
      <p className="text-xs text-muted mb-4 max-w-2xl">
        Laptop-bound steps Vercel can't automate. Check off each one as you
        complete it — state persists per persona.
      </p>
      <ol className="space-y-3">
        {steps.map((step, i) => {
          const state = onboarding[step.key] ?? "pending";
          return (
            <li
              key={step.key}
              className={`flex items-start gap-3 rounded-xl border p-3 ${
                state === "done"
                  ? "border-emerald-200 bg-emerald-50/50"
                  : state === "skipped"
                    ? "border-gray-200 bg-gray-50/50 opacity-60"
                    : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex-shrink-0 w-6 text-center text-xs font-bold text-muted tabular-nums mt-0.5">
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-3 flex-wrap mb-1">
                  <div className="font-semibold text-sm">
                    {step.title}
                    {step.automated && (
                      <span className="ml-2 text-[10px] uppercase tracking-wide font-semibold text-sky-700 bg-sky-50 px-1.5 py-0.5 rounded">
                        auto
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    {(["pending", "done", "skipped"] as const).map((s) => (
                      <form key={s} action={setChecklistItemAndRefresh}>
                        <input type="hidden" name="slug" value={slug} />
                        <input type="hidden" name="key" value={step.key} />
                        <input type="hidden" name="status" value={s} />
                        <button
                          type="submit"
                          className={`text-[11px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full transition-colors ${
                            state === s
                              ? s === "done"
                                ? "bg-emerald-600 text-white"
                                : s === "skipped"
                                  ? "bg-gray-400 text-white"
                                  : "bg-gray-700 text-white"
                              : "text-muted hover:bg-gray-100"
                          }`}
                        >
                          {s}
                        </button>
                      </form>
                    ))}
                  </div>
                </div>
                <div className="text-sm">{step.body}</div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
