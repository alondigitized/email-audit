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
