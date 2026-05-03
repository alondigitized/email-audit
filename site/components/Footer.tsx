import Link from "next/link";

export function Footer() {
  return (
    <footer className="max-w-[980px] mx-auto px-5 py-6 mt-12 border-t border-gray-200">
      <div className="flex items-center justify-between text-xs text-muted">
        <div>© {new Date().getFullYear()} etell.app</div>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-1 justify-end">
          <Link
            href="/scoring"
            className="hover:text-ink transition-colors"
          >
            How scoring works
          </Link>
          <Link
            href="/terms"
            className="hover:text-ink transition-colors"
          >
            Terms of Use
          </Link>
          <Link
            href="/privacy"
            className="hover:text-ink transition-colors"
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
