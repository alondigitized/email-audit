"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { startResearchAction } from "./actions";

export function ResearchTrigger() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const r = await startResearchAction();
      if (!mounted) return;
      if (r.ok) {
        router.replace("/onboarding/picker");
      } else {
        setError(r.error);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [router]);

  if (error) {
    return (
      <div className="max-w-md mx-auto text-sm text-amber-800 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
        <strong>Research failed.</strong> {error}
        <div className="mt-2">
          <a href="/onboarding" className="underline">
            Try again
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 text-sm text-muted">
      <span className="inline-block w-3 h-3 rounded-full bg-sky-500 animate-pulse" />
      Reading the site, picking 3 personas, ranking 5 competitors…
    </div>
  );
}
