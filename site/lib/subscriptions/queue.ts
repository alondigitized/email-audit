import { sql as drizzleSql } from "drizzle-orm";
import { db, subscriptionJobs } from "@/lib/db/client";

// Enqueue a single (persona, brand) subscription job. Lands at
// status='manual_pending' immediately — there is no auto-subscribe layer
// any more (most retailers gate their signup behind bot management; the
// Klaviyo-only auto path covered too few brands to be worth maintaining).
//
// Returns the new job id, or `null` when the brand is blocklisted (a brand
// or their legal team requested we not subscribe personas to their list,
// per /terms section 6). Callers in the wizard / commitPersonaAction
// silently skip the brand on null.
export async function enqueueSubscriptionJob(args: {
  tenantId: string;
  personaSlug: string;
  brandDomain: string;
  inboxAddress: string;
}): Promise<string | null> {
  const brandDomain = args.brandDomain
    .replace(/^https?:\/\//, "")
    .replace(/\/.*$/, "")
    .toLowerCase();

  // Substring blocklist match — `brand.com` blocks `em.brand.com`,
  // `track.brand.com`, etc. Cheap query at expected blocklist size; if
  // the list grows past hundreds add a btree index on domain.
  const blocked = await db.execute(drizzleSql`
    SELECT 1 FROM brand_blocklist
    WHERE ${brandDomain} LIKE '%' || domain || '%'
       OR domain LIKE '%' || ${brandDomain} || '%'
    LIMIT 1
  `);
  if ((blocked.rows ?? []).length > 0) {
    console.warn(
      `enqueueSubscriptionJob: refusing ${brandDomain} (brand_blocklist)`
    );
    return null;
  }

  const [row] = await db
    .insert(subscriptionJobs)
    .values({
      tenantId: args.tenantId,
      personaSlug: args.personaSlug,
      brandDomain,
      inboxAddress: args.inboxAddress,
      status: "manual_pending",
    })
    .returning({ id: subscriptionJobs.id });
  return row.id;
}
