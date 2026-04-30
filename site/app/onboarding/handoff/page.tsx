import Link from "next/link";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { loadOnboardingState } from "@/lib/onboarding/state";
import { db, personas, subscriptionJobs } from "@/lib/db/client";
import { markBootstrapJobDoneAction } from "../actions";
import { CopyInboxButton } from "./CopyInboxButton";
import { SubscribeButton } from "./SubscribeButton";

export const dynamic = "force-dynamic";
export const metadata = { title: "Bootstrap · etell" };

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

  // `auto_succeeded` is a legacy value; new jobs land at manual_pending and
  // flip to manual_done when the user clicks "I've subscribed" or the
  // welcome email lands.
  const done = jobs.filter(
    (j) => j.status === "auto_succeeded" || j.status === "manual_done"
  );
  const pending = jobs.filter(
    (j) =>
      j.status === "queued" ||
      j.status === "manual_pending" ||
      j.status === "failed"
  );

  return (
    <div className="max-w-2xl mx-auto py-12">
      <div className="inline-block mb-4 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium tracking-wide uppercase">
        Persona created · {state.personaSlug}
      </div>
      <h1 className="text-3xl font-bold mb-3">Subscribe to your starter brands</h1>
      <p className="text-muted text-base max-w-xl mb-8">
        Each click below opens the brand and copies your persona&apos;s inbox.
        Paste it into their email signup form, then come back and mark it done.
        Auditing starts the moment the first email lands. The persona will
        also start running scheduled site-experience reviews against the
        brand homepage — first one shows up after the next overnight sweep.
      </p>

      {inboxAddress && (
        <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5 mb-8">
          <div className="text-xs font-semibold uppercase tracking-wide text-sky-800 mb-2">
            Already have brand emails?
          </div>
          <p className="text-sm mb-3">
            Forward 2-3 existing emails to this address and your persona
            starts auditing immediately — skip the signup loop entirely.
          </p>
          <CopyInboxButton address={inboxAddress} />
        </div>
      )}

      {pending.length > 0 && (
        <div className="mb-8">
          <SectionLabel>Subscribe these brands</SectionLabel>
          <div className="space-y-3">
            {pending.map((job) => (
              <PendingTile
                key={job.id}
                jobId={job.id}
                brandDomain={job.brandDomain}
                inboxAddress={inboxAddress}
              />
            ))}
          </div>
        </div>
      )}

      {done.length > 0 && (
        <div className="mb-8">
          <SectionLabel>Already subscribed</SectionLabel>
          <div className="space-y-2">
            {done.map((job) => (
              <DoneTile key={job.id} brandDomain={job.brandDomain} />
            ))}
          </div>
        </div>
      )}

      {jobs.length === 0 && (
        <div className="text-sm text-muted bg-white border border-gray-200 rounded-2xl px-5 py-4 mb-8">
          No brand subscriptions selected. Forward existing brand emails to
          the inbox above to seed the audit.
        </div>
      )}

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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs uppercase tracking-wide text-muted font-medium mb-3">
      {children}
    </div>
  );
}

function PendingTile({
  jobId,
  brandDomain,
  inboxAddress,
}: {
  jobId: string;
  brandDomain: string;
  inboxAddress: string | null;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5">
      <div className="font-semibold text-sm mb-3">{brandDomain}</div>
      <div className="flex flex-col gap-3">
        {inboxAddress && (
          <SubscribeButton
            brandDomain={brandDomain}
            inboxAddress={inboxAddress}
          />
        )}
        <form action={markBootstrapJobDoneAction}>
          <input type="hidden" name="jobId" value={jobId} />
          <button
            type="submit"
            className="text-xs text-muted underline hover:text-ink"
          >
            I&apos;ve subscribed — mark this done
          </button>
        </form>
      </div>
    </div>
  );
}

function DoneTile({ brandDomain }: { brandDomain: string }) {
  return (
    <div className="flex items-center gap-3 bg-white border border-emerald-200 rounded-2xl px-5 py-3">
      <span className="text-emerald-600 text-base leading-none">✓</span>
      <div className="flex-1 flex items-baseline justify-between gap-3">
        <span className="font-semibold text-sm">{brandDomain}</span>
        <span className="text-[11px] text-muted">Subscribed</span>
      </div>
    </div>
  );
}
