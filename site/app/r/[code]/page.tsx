import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { db, tenants } from "@/lib/db/client";

// Referral landing. Validates the code exists, then sends the visitor to the
// signup form with `?ref={code}` pre-filled. Unknown codes still send to
// /signup so the URL doesn't leak which codes are valid.
export const dynamic = "force-dynamic";

export default async function ReferralLanding({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const safe = /^[A-Za-z0-9_-]{4,16}$/.test(code) ? code : "";
  if (!safe) redirect("/signup");

  const ref = await db
    .select({ id: tenants.id })
    .from(tenants)
    .where(eq(tenants.referralCode, safe))
    .limit(1);
  // Always redirect to /signup. If the code was invalid or expired we still
  // forward (without ?ref) so the user can sign up clean. Don't reveal the
  // referrer's identity here.
  if (ref.length === 0) redirect("/signup");
  redirect(`/signup?ref=${encodeURIComponent(safe)}`);
}
