"use server";

import { eq, and } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { requireAdmin } from "@/lib/dal";
import {
  db,
  personas,
  personaTemplates,
  templateRequests,
  tenants,
} from "@/lib/db/client";
import { forkTemplateForTenant } from "@/lib/persona-fork";
import { reportOnboardingStep } from "@/lib/persona-status";

const SlugSchema = z
  .string()
  .min(2)
  .max(60)
  .regex(/^[a-z][a-z0-9-]*$/, "invalid slug");

export async function toggleTemplateActiveAction(fd: FormData): Promise<void> {
  await requireAdmin();
  const slug = SlugSchema.parse(String(fd.get("slug") ?? ""));
  const next = String(fd.get("next") ?? "") === "1";
  await db
    .update(personaTemplates)
    .set({ isActive: next })
    .where(eq(personaTemplates.slug, slug));
  revalidatePath("/admin/templates");
  revalidatePath(`/admin/templates/${slug}`);
}

const FulfillSchema = z.object({
  requestId: z.string().uuid(),
  templateSlug: SlugSchema,
});

// Mark a template_request shipped + fork the just-built template into the
// requesting tenant. Idempotent on re-click: if the tenant already has a
// persona forked from this template, we still flip status to 'shipped' but
// don't double-insert a persona row.
export async function fulfillTemplateRequestAction(fd: FormData): Promise<void> {
  await requireAdmin();
  const parsed = FulfillSchema.safeParse({
    requestId: String(fd.get("requestId") ?? ""),
    templateSlug: String(fd.get("templateSlug") ?? ""),
  });
  if (!parsed.success) redirect("/admin/template-requests?error=invalid");

  const [req] = await db
    .select({
      id: templateRequests.id,
      tenantId: templateRequests.tenantId,
      status: templateRequests.status,
      industry: templateRequests.requestedIndustry,
    })
    .from(templateRequests)
    .where(eq(templateRequests.id, parsed.data.requestId))
    .limit(1);
  if (!req) redirect("/admin/template-requests?error=not-found");

  // Look up the requesting tenant for fork-slug naming.
  const [t] = await db
    .select({ id: tenants.id, slug: tenants.slug })
    .from(tenants)
    .where(eq(tenants.id, req.tenantId))
    .limit(1);
  if (!t) redirect("/admin/template-requests?error=tenant-missing");

  // Verify the chosen template exists + is active.
  const [tpl] = await db
    .select({ slug: personaTemplates.slug, isActive: personaTemplates.isActive })
    .from(personaTemplates)
    .where(eq(personaTemplates.slug, parsed.data.templateSlug))
    .limit(1);
  if (!tpl) redirect("/admin/template-requests?error=template-missing");
  if (!tpl.isActive) redirect("/admin/template-requests?error=template-inactive");

  // Fork unless one already exists for this tenant from this template.
  // (Admin already did the fork manually OR re-clicked this button.)
  const [forked] = await db
    .select({ id: personas.id })
    .from(personas)
    .where(
      and(
        eq(personas.tenantId, t.id),
        eq(personas.templateSlug, parsed.data.templateSlug)
      )
    )
    .limit(1);

  if (!forked) {
    try {
      const fork = await forkTemplateForTenant({
        templateSlug: parsed.data.templateSlug,
        tenantId: t.id,
        tenantSlug: t.slug,
        overrides: {},
      });
      await reportOnboardingStep(
        fork.personaSlug,
        "wizard",
        "done",
        `forked via concierge from ${parsed.data.templateSlug}`
      );
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      redirect(`/admin/template-requests?error=${encodeURIComponent(msg.slice(0, 200))}`);
    }
  }

  await db
    .update(templateRequests)
    .set({
      status: "shipped",
      shippedAt: new Date(),
      fulfilledTemplateSlug: parsed.data.templateSlug,
    })
    .where(eq(templateRequests.id, parsed.data.requestId));

  revalidatePath("/admin/template-requests");
  redirect("/admin/template-requests?ok=shipped");
}

export async function rejectTemplateRequestAction(fd: FormData): Promise<void> {
  await requireAdmin();
  const id = String(fd.get("requestId") ?? "");
  if (!id) redirect("/admin/template-requests?error=invalid");
  await db
    .update(templateRequests)
    .set({ status: "rejected" })
    .where(eq(templateRequests.id, id));
  revalidatePath("/admin/template-requests");
}
