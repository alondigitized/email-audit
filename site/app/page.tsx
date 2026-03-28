import { getAuditIndex } from "@/lib/audits";
import { AuditList } from "@/components/AuditList";

export default function Home() {
  const audits = getAuditIndex();

  return (
    <>
      <div className="mb-5 py-6">
        <div className="text-muted text-sm">Skechers Digital</div>
        <h1 className="text-2xl font-bold mt-1 mb-2">Experience Review</h1>
        <p className="text-muted text-sm max-w-xl">
          AI-powered reviews of brand experiences — from marketing emails to
          website visits. Each review scores creative quality, technical health,
          accessibility, and deliverability, with actionable recommendations and
          automated QA results.
        </p>
      </div>
      <AuditList audits={audits} />
    </>
  );
}
