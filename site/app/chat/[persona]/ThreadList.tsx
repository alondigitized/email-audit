import Link from "next/link";

type Thread = {
  id: string;
  title: string | null;
  updatedAt: string;
};

function groupThreads(threads: Thread[]) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const yesterday = new Date(today.getTime() - 86400000);
  const weekAgo = new Date(today.getTime() - 7 * 86400000);

  const groups: { label: string; items: Thread[] }[] = [
    { label: "Today", items: [] },
    { label: "Yesterday", items: [] },
    { label: "This week", items: [] },
    { label: "Earlier", items: [] },
  ];

  for (const t of threads) {
    const d = new Date(t.updatedAt);
    if (d >= today) groups[0].items.push(t);
    else if (d >= yesterday) groups[1].items.push(t);
    else if (d >= weekAgo) groups[2].items.push(t);
    else groups[3].items.push(t);
  }

  return groups.filter((g) => g.items.length > 0);
}

export function ThreadList({
  personaSlug,
  activeThreadId,
  threads,
}: {
  personaSlug: string;
  activeThreadId: string | null;
  threads: Thread[];
}) {
  const groups = groupThreads(threads);

  return (
    <aside className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
      <div className="px-4 py-3 border-b border-gray-200">
        <Link
          href={`/chat/${personaSlug}`}
          className={`flex items-center justify-center gap-1 w-full py-2 rounded-xl text-sm font-semibold transition-colors ${
            !activeThreadId
              ? "bg-gray-900 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          + New thread
        </Link>
      </div>
      <div className="flex-1 overflow-y-auto px-2 py-3">
        {groups.length === 0 ? (
          <div className="px-3 py-4 text-xs text-muted text-center">
            No conversations yet.
          </div>
        ) : (
          groups.map((g) => (
            <div key={g.label} className="mb-4">
              <div className="text-[11px] uppercase tracking-wide text-muted px-3 mb-1 font-semibold">
                {g.label}
              </div>
              {g.items.map((t) => {
                const active = t.id === activeThreadId;
                return (
                  <Link
                    key={t.id}
                    href={`/chat/${personaSlug}?thread=${t.id}`}
                    className={`block px-3 py-2 rounded-lg text-sm no-underline ${
                      active
                        ? "bg-gray-900 text-white"
                        : "text-ink hover:bg-gray-100"
                    }`}
                  >
                    <div className="truncate">
                      {t.title ?? "Untitled"}
                    </div>
                  </Link>
                );
              })}
            </div>
          ))
        )}
      </div>
    </aside>
  );
}
