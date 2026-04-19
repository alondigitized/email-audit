"use client";

import { useRouter } from "next/navigation";

// A Link-based "+ New thread" is a no-op when the user is already on
// /chat/{slug} with no thread selected — same URL, nothing happens.
// Push + refresh so the fresh-chat state re-renders unconditionally.
export function NewThreadButton({
  personaSlug,
  active,
}: {
  personaSlug: string;
  active: boolean;
}) {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => {
        router.push(`/chat/${personaSlug}`);
        router.refresh();
      }}
      className={`flex items-center justify-center gap-1 w-full py-2 rounded-xl text-sm font-semibold transition-colors ${
        active
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      + New thread
    </button>
  );
}
