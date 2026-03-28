import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function stripPreamble(markdown: string): string {
  // Remove WALKER AUDIT header, Received line, and leading --- separators
  let text = markdown;
  const sepIdx = text.indexOf("\n---\n");
  if (sepIdx !== -1) {
    const before = text.slice(0, sepIdx).trim();
    // If preamble contains the WALKER header or metadata lines, strip it
    if (
      before.includes("WALKER") ||
      before.includes("*Received:") ||
      before.includes("Competitive Intelligence")
    ) {
      text = text.slice(sepIdx + 5);
    }
  }
  return text;
}

export function ReviewContent({ markdown }: { markdown: string }) {
  const cleaned = stripPreamble(markdown);

  return (
    <div className="prose prose-sm max-w-none overflow-hidden prose-headings:mt-5 prose-headings:mb-2 prose-h2:text-base prose-h3:text-sm prose-p:my-2 prose-li:my-1 prose-ul:my-2">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{cleaned}</ReactMarkdown>
    </div>
  );
}
