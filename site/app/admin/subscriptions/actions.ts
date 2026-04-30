"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db, subscriptionJobs } from "@/lib/db/client";
import { requireAdmin } from "@/lib/dal";
import { tryAutoSubscribeJob } from "@/lib/subscriptions/auto";

function isUuid(s: string): boolean {
  return /^[0-9a-f-]{36}$/i.test(s);
}

export async function markJobDoneFormAction(fd: FormData): Promise<void> {
  await requireAdmin();
  const jobId = String(fd.get("jobId") ?? "");
  if (!isUuid(jobId)) return;
  await db
    .update(subscriptionJobs)
    .set({ status: "manual_done", updatedAt: new Date() })
    .where(eq(subscriptionJobs.id, jobId));
  revalidatePath("/admin/subscriptions");
}

export async function retryJobFormAction(fd: FormData): Promise<void> {
  await requireAdmin();
  const jobId = String(fd.get("jobId") ?? "");
  if (!isUuid(jobId)) return;
  await tryAutoSubscribeJob(jobId);
  revalidatePath("/admin/subscriptions");
}

// Drain the entire queued backlog. Used after bulk-enqueueing from the
// top-50 seed (which bypasses the wizard's inline auto-subscribe) so the
// admin doesn't have to click "Retry auto" 50 times. Caps at 100/run to
// keep the server-action under Vercel's 300s function budget.
export async function runAllQueuedFormAction(): Promise<void> {
  await requireAdmin();
  const rows = await db
    .select({ id: subscriptionJobs.id })
    .from(subscriptionJobs)
    .where(eq(subscriptionJobs.status, "queued"))
    .limit(100);
  await Promise.allSettled(rows.map((r) => tryAutoSubscribeJob(r.id)));
  revalidatePath("/admin/subscriptions");
}
