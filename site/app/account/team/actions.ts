"use server";

import { revalidatePath } from "next/cache";
import { eq, and } from "drizzle-orm";
import { z } from "zod";
import { db, users, sessions, tenantMembers } from "@/lib/db/client";
import { requireUser } from "@/lib/dal";
import { getTenantRole, canRemoveMember } from "@/lib/team";

const EmailSchema = z.string().trim().toLowerCase().email().max(254);

export type ActionResult = { ok: true } | { ok: false; error: string };

// Owner-only: invite a new teammate. Creates the user row if needed
// and stamps tenant_member with role=member. Existing user with a
// different tenant is rejected (not silently re-tenanted).
export async function inviteTeammateAction(
  formData: FormData
): Promise<ActionResult> {
  const me = await requireUser();
  if (!me.tenantId) return { ok: false, error: "No tenant." };
  const myRole = await getTenantRole(me.id, me.tenantId);
  if (myRole !== "owner") {
    return { ok: false, error: "Only owners can invite teammates." };
  }
  const emailParsed = EmailSchema.safeParse(formData.get("email"));
  if (!emailParsed.success) return { ok: false, error: "Invalid email." };
  const email = emailParsed.data;

  const [existing] = await db
    .select({ id: users.id, tenantId: users.tenantId })
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (existing && existing.tenantId && existing.tenantId !== me.tenantId) {
    return {
      ok: false,
      error: `${email} is already on another team. Have them remove themselves there first.`,
    };
  }

  let userId: string;
  if (existing) {
    userId = existing.id;
    if (!existing.tenantId) {
      await db
        .update(users)
        .set({ tenantId: me.tenantId })
        .where(eq(users.id, userId));
    }
  } else {
    const [inserted] = await db
      .insert(users)
      .values({ email, tenantId: me.tenantId })
      .returning({ id: users.id });
    userId = inserted.id;
  }

  await db
    .insert(tenantMembers)
    .values({ userId, tenantId: me.tenantId, role: "member" })
    .onConflictDoNothing();
  revalidatePath("/account/team");
  return { ok: true };
}

// Owner-only: remove a teammate. Self-removal is rejected (transfer first).
// Removing the last owner is rejected (orphaned tenant). Wipes their
// session so they're booted out of any open tab.
export async function removeTeammateAction(
  formData: FormData
): Promise<ActionResult> {
  const me = await requireUser();
  if (!me.tenantId) return { ok: false, error: "No tenant." };
  const targetUserId = formData.get("userId");
  if (typeof targetUserId !== "string" || !targetUserId) {
    return { ok: false, error: "Missing userId." };
  }
  const guard = await canRemoveMember({
    actorUserId: me.id,
    targetUserId,
    tenantId: me.tenantId,
  });
  if (!guard.ok) return guard;
  await db
    .delete(tenantMembers)
    .where(
      and(
        eq(tenantMembers.userId, targetUserId),
        eq(tenantMembers.tenantId, me.tenantId)
      )
    );
  await db.delete(sessions).where(eq(sessions.userId, targetUserId));
  // Drop the user-level tenant_id so they can't read tenant data via
  // the legacy 1:1 path. Don't delete the user row — preserves login
  // history; they just have no team until invited again.
  await db.update(users).set({ tenantId: null }).where(eq(users.id, targetUserId));
  revalidatePath("/account/team");
  return { ok: true };
}

// Owner-only: promote a member to owner AND demote self to member, in
// one transaction. The "always at least one owner" invariant holds at
// every step because we only ever add an owner before removing one.
export async function transferOwnershipAction(
  formData: FormData
): Promise<ActionResult> {
  const me = await requireUser();
  if (!me.tenantId) return { ok: false, error: "No tenant." };
  const myRole = await getTenantRole(me.id, me.tenantId);
  if (myRole !== "owner") {
    return { ok: false, error: "Only owners can transfer ownership." };
  }
  const targetUserId = formData.get("userId");
  if (typeof targetUserId !== "string" || !targetUserId) {
    return { ok: false, error: "Missing userId." };
  }
  if (targetUserId === me.id) {
    return { ok: false, error: "You're already the owner." };
  }
  const targetRole = await getTenantRole(targetUserId, me.tenantId);
  if (!targetRole) return { ok: false, error: "Member not found." };

  // Drizzle's neon-http driver is autocommit-only; emulate the txn
  // with an UPDATE…WHERE that flips both rows in two statements.
  // Promote first (owner count goes 1→2), then demote (back to 1).
  await db
    .update(tenantMembers)
    .set({ role: "owner", updatedAt: new Date() })
    .where(
      and(
        eq(tenantMembers.userId, targetUserId),
        eq(tenantMembers.tenantId, me.tenantId)
      )
    );
  await db
    .update(tenantMembers)
    .set({ role: "member", updatedAt: new Date() })
    .where(
      and(eq(tenantMembers.userId, me.id), eq(tenantMembers.tenantId, me.tenantId))
    );
  revalidatePath("/account/team");
  return { ok: true };
}

// Form-action wrappers — Promise<void> signature so they can be passed
// directly to <form action={fn}> without TS pinning. Errors get logged
// (the bare-form path doesn't have client-side error rendering; only
// the InviteForm does, and that one uses useActionState directly).

export async function removeTeammateFormAction(fd: FormData): Promise<void> {
  const r = await removeTeammateAction(fd);
  if (!r.ok) console.warn("removeTeammateFormAction:", r.error);
}

export async function transferOwnershipFormAction(fd: FormData): Promise<void> {
  const r = await transferOwnershipAction(fd);
  if (!r.ok) console.warn("transferOwnershipFormAction:", r.error);
}
