import { getAuditIndex } from "@/lib/audits";
import { AuditCard } from "@/components/AuditCard";

export default function Home() {
  const audits = getAuditIndex();

  return (
    <>
      <div className="mb-5 py-6">
        <div className="text-muted text-sm">Skechers Digital</div>
        <h1 className="text-2xl font-bold mt-1 mb-2">Email Audit</h1>
        <p className="text-muted text-sm">
          Homepage index of conducted email audits, with links to detailed audit
          pages.
        </p>
      </div>
      <div className="flex flex-col gap-3.5">
        {audits.map((audit) => (
          <AuditCard key={audit.slug} audit={audit} />
        ))}
      </div>
    </>
  );
}
