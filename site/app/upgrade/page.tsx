import { requireUser } from "@/lib/dal";

export const dynamic = "force-dynamic";
export const metadata = { title: "Upgrade · etell" };

export default async function UpgradePage() {
  const user = await requireUser();
  const subject = encodeURIComponent("Upgrade to Pro");
  const body = encodeURIComponent(
    `Hi Alon,\n\nI'd like to upgrade my etell account (${user.email}) to Pro.\n\nThanks,\n`
  );

  return (
    <div className="max-w-xl mx-auto py-16 text-center">
      <h1 className="text-3xl font-bold mb-3">Upgrade to Pro</h1>
      <p className="text-muted text-base max-w-md mx-auto mb-8">
        Self-serve checkout is on the way. Until then, ping us — we&apos;ll get
        you on Pro within a day, no card games required.
      </p>
      <a
        href={`mailto:alon@etell.app?subject=${subject}&body=${body}`}
        className="inline-block px-5 py-2.5 bg-accent text-white font-semibold rounded-xl text-[15px]"
      >
        Email alon@etell.app
      </a>
      <div className="mt-10">
        <a href="/chat" className="text-sm underline text-muted">
          ← Back to dashboard
        </a>
      </div>
    </div>
  );
}
