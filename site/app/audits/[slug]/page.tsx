import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAuditBySlugForUser } from "@/lib/audits";
import { requireUser } from "@/lib/dal";
import { recordPageView } from "@/lib/analytics";
import { BackLink } from "./BackLink";
import { ShareButton } from "./ShareButton";
import { AuditBody } from "./AuditBody";

// S7: per-user filtering means we can't statically pre-render slugs.
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const user = await requireUser();
  const audit = await getAuditBySlugForUser(slug, user.personas);
  return { title: audit?.email.subject ?? "Audit" };
}

export default async function AuditPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const user = await requireUser();
  const audit = await getAuditBySlugForUser(slug, user.personas);
  if (!audit) notFound();
  await recordPageView({
    userId: user.id,
    isAdmin: user.isAdmin,
    kind: "audit",
    path: `/audits/${slug}`,
  });

  return (
    <>
      <div className="mb-4 flex items-center justify-between gap-3 flex-wrap">
        <BackLink>&larr; Back to all reviews</BackLink>
        <ShareButton slug={slug} />
      </div>
      <AuditBody audit={audit} showRewrites={true} />
    </>
  );
}
