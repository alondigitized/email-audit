"use client";

import { useRouter } from "next/navigation";

// In-page "Back to all reviews" link. Uses router.back() so the user
// returns to the list page with their filter state intact (filters are
// persisted in the URL by HomeContent via router.replace). Falls back
// to a hard-nav to "/" when there's no history entry — first-page-load
// case where the user opened the audit via direct link.
export function BackLink({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  function onClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  }
  return (
    <a
      href="/"
      onClick={onClick}
      className="text-ink no-underline hover:underline cursor-pointer"
    >
      {children}
    </a>
  );
}
