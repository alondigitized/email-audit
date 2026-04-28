import Link from "next/link";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { loadOnboardingState } from "@/lib/onboarding/state";
import { db, personas, subscriptionJobs } from "@/lib/db/client";
import { markBootstrapJobDoneAction } from "../actions";
import { CopyInboxButton } from "./CopyInboxButton";

export const dynamic = "force-dynamic";
export const metadata = { title: "Bootstrap · etell" };

type JobStatus =
  | "queued"
  | "running"
  | "auto_succeeded"
  | "manual_pending"
  | "manual_done"
  | "failed";

export default async function HandoffPage() {
  const state = await loadOnboardingState();
  if (!state.personaSlug) redirect("/onboarding");

  const [persona] = await db
    .select({
      slug: personas.slug,
      profile: personas.profile,
    })
    .from(personas)
    .where(eq(personas.slug, state.personaSlug))
    .limit(1);
  if (!persona) redirect("/onboarding");

  const inboxAddress =
    (persona.profile?.agentmail?.inbox_address as string | undefined) ?? null;

  const jobs = await db
    .select()
    .from(subscriptionJobs)
    .where(eq(subscriptionJobs.personaSlug, state.personaSlug));

  return (
    <div className="max-w-2xl mx-auto py-12">
      <div className="inline-block mb-4 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium tracking-wide uppercase">
        Persona created · {state.personaSlug}
      </div>
      <h1 className="text-3xl font-bold mb-3">Bootstrap their inbox</h1>
      <p className="text-muted text-base max-w-xl mb-8">
        Each brand below is being subscribed for this persona. Anything we
        can&apos;t auto-subscribe, you can finish in two clicks.
      </p>

      {inboxAddress && (
        <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5 mb-8">
          <div className="text-xs font-semibold uppercase tracking-wide text-sky-800 mb-2">
            Got brand emails already?
          </div>
          <p className="text-sm mb-3">
            Forward 2-3 existing emails to this address and the persona starts
            auditing immediately — no waiting on the auto-subscribe flow.
          </p>
          <CopyInboxButton address={inboxAddress} />
        </div>
      )}

      <div className="space-y-3 mb-8">
        {jobs.length === 0 && (
          <div className="text-sm text-muted bg-white border border-gray-200 rounded-2xl px-5 py-4">
            No brand subscriptions selected. Forward existing brand emails
            using the inbox address above to seed the audit.
          </div>
        )}
        {jobs.map((job) => (
          <JobTile
            key={job.id}
            jobId={job.id}
            brandDomain={job.brandDomain}
            status={job.status as JobStatus}
            inboxAddress={inboxAddress}
            lastError={job.lastError}
          />
        ))}
      </div>

      <div className="mt-10">
        <Link
          href="/chat"
          className="inline-block px-5 py-2.5 bg-accent text-white font-semibold rounded-xl text-[15px]"
        >
          Go to your dashboard →
        </Link>
      </div>
    </div>
  );
}

function JobTile({
  jobId,
  brandDomain,
  status,
  inboxAddress,
  lastError,
}: {
  jobId: string;
  brandDomain: string;
  status: JobStatus;
  inboxAddress: string | null;
  lastError: string | null;
}) {
  const succeeded = status === "auto_succeeded" || status === "manual_done";
  const inFlight = status === "queued" || status === "running";
  const needsManual = status === "manual_pending" || status === "failed";

  if (succeeded) {
    return (
      <div className="flex items-start gap-3 bg-white border border-emerald-200 rounded-2xl px-5 py-4">
        <span className="mt-1 text-emerald-600 text-lg leading-none">✓</span>
        <div className="flex-1">
          <div className="font-semibold text-sm">{brandDomain}</div>
          <div className="text-xs text-muted">
            {status === "manual_done"
              ? "Subscribed (manual)"
              : "Subscribed automatically"}
          </div>
        </div>
      </div>
    );
  }

  if (inFlight) {
    return (
      <div className="flex items-start gap-3 bg-white border border-amber-200 rounded-2xl px-5 py-4">
        <span className="mt-1 text-amber-600 text-lg leading-none">⋯</span>
        <div className="flex-1">
          <div className="font-semibold text-sm">{brandDomain}</div>
          <div className="text-xs text-muted">Subscribing… refresh to recheck.</div>
        </div>
      </div>
    );
  }

  if (needsManual) {
    return (
      <div className="bg-white border border-rose-200 rounded-2xl px-5 py-4">
        <div className="flex items-start gap-3 mb-3">
          <span className="mt-1 text-rose-600 text-lg leading-none">!</span>
          <div className="flex-1">
            <div className="font-semibold text-sm">{brandDomain}</div>
            <div className="text-xs text-muted">
              Couldn&apos;t auto-subscribe.
              {lastError && ` ${lastError.slice(0, 90)}`}
            </div>
          </div>
        </div>
        <div className="space-y-2 pl-7">
          <ol className="text-xs text-muted list-decimal list-inside space-y-1">
            <li>
              <a
                href={`https://${brandDomain}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-sky-700 hover:text-sky-900"
              >
                Open {brandDomain} →
              </a>
            </li>
            <li>
              Find their email-signup form and paste:
              {inboxAddress && (
                <div className="mt-1">
                  <CopyInboxButton address={inboxAddress} compact />
                </div>
              )}
            </li>
            <li>Submit, then click below.</li>
          </ol>
          <form action={markBootstrapJobDoneAction}>
            <input type="hidden" name="jobId" value={jobId} />
            <button
              type="submit"
              className="text-xs px-3 py-1.5 bg-accent text-white font-semibold rounded-lg hover:opacity-90"
            >
              I subscribed →
            </button>
          </form>
        </div>
      </div>
    );
  }

  return null;
}
