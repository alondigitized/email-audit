import Link from "next/link";

// Wizard shell — progress bar across 4 steps + slug badge + Abandon button.
// Each step page passes `current` (the active step key) so the bar's
// active/done/pending states match.

const STEPS = [
  { key: "identity", label: "Identity" },
  { key: "journey", label: "Journey" },
  { key: "inbox", label: "Inbox" },
  { key: "handoff", label: "Handoff" },
] as const;

export function WizardLayout({
  slug,
  current,
  children,
}: {
  slug: string;
  current: (typeof STEPS)[number]["key"];
  children: React.ReactNode;
}) {
  const currentIdx = STEPS.findIndex((s) => s.key === current);

  return (
    <div className="mb-10 space-y-5 max-w-3xl">
      <div className="flex items-center gap-3 text-sm text-muted">
        <Link href="/admin/personas" className="underline">
          Personas
        </Link>
        <span>/</span>
        <span>New</span>
        <span>/</span>
        <code className="px-1 rounded bg-gray-100 text-ink text-xs">{slug}</code>
      </div>

      <nav className="flex items-center gap-1 text-[13px] font-semibold">
        {STEPS.map((s, i) => {
          const state =
            i < currentIdx ? "done" : i === currentIdx ? "current" : "pending";
          return (
            <div key={s.key} className="flex items-center gap-1">
              {i > 0 && (
                <span
                  className={`w-6 h-px ${state === "pending" ? "bg-gray-200" : "bg-gray-900"}`}
                  aria-hidden
                />
              )}
              <span
                className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full ${
                  state === "current"
                    ? "bg-gray-900 text-white"
                    : state === "done"
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-gray-100 text-muted"
                }`}
              >
                <span className="text-[10px] tabular-nums opacity-70">
                  {i + 1}
                </span>
                <span>{s.label}</span>
              </span>
            </div>
          );
        })}
      </nav>

      {children}
    </div>
  );
}
