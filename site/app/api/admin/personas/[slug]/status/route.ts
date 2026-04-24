import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { requireAdmin } from "@/lib/dal";
import { db, personas } from "@/lib/db/client";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Lightweight status readback. Used by the wizard's HandoffChecklist which
// polls every 3s while the page is open. Admin-only; returns last_status
// JSONB verbatim (or {} if missing).

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  await requireAdmin();
  const { slug } = await params;
  const rows = await db
    .select({ lastStatus: personas.lastStatus })
    .from(personas)
    .where(eq(personas.slug, slug))
    .limit(1);
  if (rows.length === 0) {
    return new NextResponse("Not found", { status: 404 });
  }
  return NextResponse.json(rows[0].lastStatus ?? {});
}
