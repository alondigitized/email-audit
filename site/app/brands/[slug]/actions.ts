"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db, opportunities } from "@/lib/db/client";
import { requireAdmin } from "@/lib/dal";

// Allowed transitions. Machine writes always land at 'hypothesis'; every
// promotion toward 'presented'/'accepted' is a human act, and 'dismissed'
// is kept (not deleted) so synthesis precision stays measurable.
const TRANSITIONS: Record<string, string[]> = {
  hypothesis: ["validated", "dismissed"],
  validated: ["presented", "dismissed"],
  presented: ["accepted", "dismissed"],
  accepted: [],
  dismissed: ["hypothesis"], // allow resurrecting a wrongly-dismissed one
};

export async function setOpportunityStatusAction(fd: FormData): Promise<void> {
  const admin = await requireAdmin();
  const id = String(fd.get("id") ?? "");
  const to = String(fd.get("to") ?? "");
  const note = String(fd.get("note") ?? "").slice(0, 2000) || null;
  if (!/^[0-9a-f-]{36}$/i.test(id)) return;

  const row = await db
    .select({ status: opportunities.status, brandSlug: opportunities.brandSlug })
    .from(opportunities)
    .where(eq(opportunities.id, id))
    .limit(1);
  if (!row.length) return;
  if (!(TRANSITIONS[row[0].status] ?? []).includes(to)) return;

  await db
    .update(opportunities)
    .set({
      status: to as typeof opportunities.$inferSelect.status,
      reviewedBy: admin.email ?? "admin",
      reviewedAt: new Date(),
      ...(note ? { reviewNote: note } : {}),
      updatedAt: new Date(),
    })
    .where(eq(opportunities.id, id));

  revalidatePath(`/brands/${row[0].brandSlug}`);
}
