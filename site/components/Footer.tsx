import Link from "next/link";

export function Footer() {
  return (
    <footer className="max-w-[980px] mx-auto px-5 py-6 mt-12 border-t border-gray-200">
      <div className="flex items-center justify-between text-xs text-muted">
        <div>© {new Date().getFullYear()} etell.app</div>
        <nav className="flex items-center gap-4">
          <Link
            href="/terms"
            className="hover:text-ink transition-colors"
          >
            Terms of Use
          </Link>
        </nav>
      </div>
    </footer>
  );
}
