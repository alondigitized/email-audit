"use client";

import { useRouter } from "next/navigation";

// Clicking "+ New thread" always routes to /chat/{slug}?compose=1:
//   - desktop: visually same (both panes shown), URL change forces a
//     fresh ChatClient mount via page.tsx's `key`
//   - mobile: flips visibility so the chat input becomes visible instead
//     of staying stuck on the thread list
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
        router.push(`/chat/${personaSlug}?compose=1`);
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
