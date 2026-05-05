import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAuditByShareToken } from "@/lib/share";
import { AuditBody } from "@/app/audits/[slug]/AuditBody";

// Tokens are opaque, so per-page metadata stays generic to avoid
// leaking the audit subject in social previews unless someone really
// is on the page.
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ token: string }>;
}): Promise<Metadata> {
  const { token } = await params;
  const audit = await getAuditByShareToken(token);
  return {
    title: audit?.email.subject
      ? `${audit.email.subject} · shared on etell`
      : "Shared report · etell",
    robots: { index: false, follow: false },
  };
}

export default async function SharePage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const audit = await getAuditByShareToken(token);
  if (!audit) notFound();

  return (
    <>
      <div className="mb-3 text-[11px] text-muted">
        You are viewing a shared experience report.
      </div>
      <AuditBody audit={audit} showRewrites={false} />
    </>
  );
}
