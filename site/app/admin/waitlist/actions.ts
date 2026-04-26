"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db, tenants } from "@/lib/db/client";
import { requireAdmin } from "@/lib/dal";
import { approveWaitlistedTenant } from "@/lib/tenant-approval";

export type AdminActionResult = { ok: true } | { ok: false; error: string };

export async function approveTenantAction(
  fd: FormData
): Promise<AdminActionResult> {
  await requireAdmin();
  const tenantId = String(fd.get("tenantId") ?? "");
  if (!/^[0-9a-f-]{36}$/i.test(tenantId)) {
    return { ok: false, error: "Bad tenantId." };
  }

  let result;
  try {
    result = await approveWaitlistedTenant(tenantId);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return { ok: false, error: msg };
  }
  if (!result.approved && !result.alreadyApproved) {
    return { ok: false, error: "Tenant is banned or invalid." };
  }
  if (result.alreadyApproved) {
    return { ok: false, error: "Tenant already approved." };
  }

  revalidatePath("/admin/waitlist");
  revalidatePath("/admin");
  return { ok: true };
}

export async function approveTenantFormAction(fd: FormData): Promise<void> {
  const r = await approveTenantAction(fd);
  if (!r.ok) console.warn("approveTenantFormAction:", r.error);
}

export async function denyTenantFormAction(fd: FormData): Promise<void> {
  const r = await denyTenantAction(fd);
  if (!r.ok) console.warn("denyTenantFormAction:", r.error);
}

export async function denyTenantAction(
  fd: FormData
): Promise<AdminActionResult> {
  await requireAdmin();
  const tenantId = String(fd.get("tenantId") ?? "");
  if (!/^[0-9a-f-]{36}$/i.test(tenantId)) {
    return { ok: false, error: "Bad tenantId." };
  }
  await db
    .update(tenants)
    .set({ plan: "banned" })
    .where(eq(tenants.id, tenantId));
  revalidatePath("/admin/waitlist");
  return { ok: true };
}
