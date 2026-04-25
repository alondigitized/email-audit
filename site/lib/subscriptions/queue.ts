import { db, subscriptionJobs } from "@/lib/db/client";

// Enqueue a single (persona, brand) subscription job. Caller-side concern;
// the auto-subscribe runner picks rows up where status='queued'.
export async function enqueueSubscriptionJob(args: {
  tenantId: string;
  personaSlug: string;
  brandDomain: string;
  inboxAddress: string;
}): Promise<void> {
  await db.insert(subscriptionJobs).values({
    tenantId: args.tenantId,
    personaSlug: args.personaSlug,
    brandDomain: args.brandDomain.replace(/^https?:\/\//, "").replace(/\/.*$/, ""),
    inboxAddress: args.inboxAddress,
    status: "queued",
  });
}
