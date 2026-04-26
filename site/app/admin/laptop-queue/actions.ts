"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db, laptopProvisioningJobs } from "@/lib/db/client";
import { requireAdmin } from "@/lib/dal";

function isUuid(s: string): boolean {
  return /^[0-9a-f-]{36}$/i.test(s);
}

export async function claimJobFormAction(fd: FormData): Promise<void> {
  await requireAdmin();
  const jobId = String(fd.get("jobId") ?? "");
  if (!isUuid(jobId)) return;
  await db
    .update(laptopProvisioningJobs)
    .set({ status: "running", claimedAt: new Date() })
    .where(eq(laptopProvisioningJobs.id, jobId));
  revalidatePath("/admin/laptop-queue");
}

export async function markDoneFormAction(fd: FormData): Promise<void> {
  await requireAdmin();
  const jobId = String(fd.get("jobId") ?? "");
  if (!isUuid(jobId)) return;
  await db
    .update(laptopProvisioningJobs)
    .set({ status: "done", doneAt: new Date() })
    .where(eq(laptopProvisioningJobs.id, jobId));
  revalidatePath("/admin/laptop-queue");
}
