"use server";

import { eq, and, sql as raw } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db, defects } from "@/lib/db/client";
import { requireAdmin } from "@/lib/dal";

const PATH = "/admin/defect-queue";

function isUuid(s: string): boolean {
  return /^[0-9a-f-]{36}$/i.test(s);
}

/**
 * Approve a defect for filing. Deliberately does NOT submit anything — the
 * Skechers intake form is reCAPTCHA-protected and the human step is the
 * point. Approving moves it to the "ready to file" list, where the queue
 * hands you a copy-ready payload.
 *
 * Guarded on status='verified': a candidate that hasn't survived the
 * refutation pass cannot be approved, so a flaky finding can't reach
 * Skechers just because someone clicked too fast.
 */
export async function approveDefectAction(fd: FormData): Promise<void> {
  const admin = await requireAdmin();
  const id = String(fd.get("defectId") ?? "");
  if (!isUuid(id)) return;

  const note = String(fd.get("reviewNote") ?? "").slice(0, 2000) || null;
  // Editable before filing — reviewers routinely tighten an LLM's wording.
  const description = String(fd.get("description") ?? "").slice(0, 4000);
  const urgency = String(fd.get("urgency") ?? "");

  await db
    .update(defects)
    .set({
      status: "approved",
      reviewedBy: admin.email ?? "admin",
      reviewedAt: new Date(),
      reviewNote: note,
      ...(description ? { description } : {}),
      ...(["High", "Medium", "Low"].includes(urgency) ? { urgency } : {}),
      updatedAt: new Date(),
    })
    .where(and(eq(defects.id, id), eq(defects.status, "verified")));

  revalidatePath(PATH);
}

export async function rejectDefectAction(fd: FormData): Promise<void> {
  const admin = await requireAdmin();
  const id = String(fd.get("defectId") ?? "");
  if (!isUuid(id)) return;
  const note = String(fd.get("reviewNote") ?? "").slice(0, 2000) || null;

  await db
    .update(defects)
    .set({
      status: "rejected",
      reviewedBy: admin.email ?? "admin",
      reviewedAt: new Date(),
      reviewNote: note,
      updatedAt: new Date(),
    })
    .where(eq(defects.id, id));

  revalidatePath(PATH);
}

/**
 * Suppress the whole class, not just this row. Because insertCandidateDefects
 * skips any dedupe_key already present in a terminal state, suppressing here
 * stops every future sweep from re-filing the same issue — which is what
 * stops the queue turning into noise.
 */
export async function suppressDefectAction(fd: FormData): Promise<void> {
  const admin = await requireAdmin();
  const id = String(fd.get("defectId") ?? "");
  if (!isUuid(id)) return;
  const note = String(fd.get("reviewNote") ?? "").slice(0, 2000) || null;

  await db
    .update(defects)
    .set({
      status: "suppressed",
      reviewedBy: admin.email ?? "admin",
      reviewedAt: new Date(),
      reviewNote: note,
      updatedAt: new Date(),
    })
    .where(eq(defects.id, id));

  revalidatePath(PATH);
}

/**
 * Record that you filed it into Smartsheet by hand. `submissionRef` is
 * whatever identifies the row once it exists (row number, confirmation id,
 * or just a date) — free text, since v1 has no API receipt to capture.
 */
export async function markSubmittedAction(fd: FormData): Promise<void> {
  await requireAdmin();
  const id = String(fd.get("defectId") ?? "");
  if (!isUuid(id)) return;
  const ref = String(fd.get("submissionRef") ?? "").slice(0, 500) || null;

  await db
    .update(defects)
    .set({
      status: "submitted",
      submittedAt: new Date(),
      submissionRef: ref,
      updatedAt: new Date(),
    })
    .where(and(eq(defects.id, id), eq(defects.status, "approved")));

  revalidatePath(PATH);
}

/** Send an approved item back for another look. */
export async function unapproveDefectAction(fd: FormData): Promise<void> {
  await requireAdmin();
  const id = String(fd.get("defectId") ?? "");
  if (!isUuid(id)) return;

  await db
    .update(defects)
    .set({ status: "verified", reviewedAt: null, updatedAt: new Date() })
    .where(and(eq(defects.id, id), eq(defects.status, "approved")));

  revalidatePath(PATH);
}

/** Counts per status, for the queue header. */
export async function defectCounts(): Promise<Record<string, number>> {
  const rows = await db
    .select({ status: defects.status, n: raw<number>`count(*)::int` })
    .from(defects)
    .groupBy(defects.status);
  return Object.fromEntries(rows.map((r) => [r.status, r.n]));
}
