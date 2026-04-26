// Best-effort scrape of a company's homepage. Used as additional context for
// the persona research prompt. Bot-protected sites (Cloudflare/Kasada) will
// return a challenge page or block; we tolerate that and fall back to
// "domain-only" prompting where the LLM relies on training knowledge.

const FETCH_TIMEOUT_MS = 4000;
const MAX_BYTES = 256 * 1024; // 256 KB cap before parsing
const MAX_OUT_CHARS = 6000; // ~1500 tokens of context for the LLM

const UA =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 " +
  "(KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1";

export async function fetchSiteSummary(
  domain: string
): Promise<string | null> {
  const url = `https://${domain.replace(/^https?:\/\//, "").replace(/\/.*$/, "")}/`;
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "User-Agent": UA,
        Accept: "text/html,application/xhtml+xml",
        "Accept-Language": "en-US,en;q=0.9",
      },
      signal: ctl.signal,
      redirect: "follow",
    });
    if (!res.ok) return null;
    const reader = res.body?.getReader();
    if (!reader) return null;

    let total = 0;
    const chunks: Uint8Array[] = [];
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.byteLength;
      chunks.push(value);
      if (total >= MAX_BYTES) {
        // Drop the rest; we only need the head/hero.
        try {
          await reader.cancel();
        } catch {
          // ignore
        }
        break;
      }
    }
    const html = new TextDecoder("utf-8", { fatal: false }).decode(
      Buffer.concat(chunks.map((c) => Buffer.from(c)))
    );
    return extractReadable(html).slice(0, MAX_OUT_CHARS);
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

// Strip <script>/<style> and HTML tags. Cheap regex extraction — good enough
// for "what does this brand do" context. Not a full DOM parse.
function extractReadable(html: string): string {
  let s = html;
  s = s.replace(/<script[\s\S]*?<\/script>/gi, " ");
  s = s.replace(/<style[\s\S]*?<\/style>/gi, " ");
  s = s.replace(/<noscript[\s\S]*?<\/noscript>/gi, " ");

  const titleMatch = s.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : "";

  const metaDesc = matchMeta(s, "description") ?? matchMeta(s, "og:description");
  const ogTitle = matchMeta(s, "og:title");

  // Headings + first 30 paragraphs.
  const headings: string[] = [];
  for (const m of s.matchAll(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/gi)) {
    const t = stripTags(m[1]).trim();
    if (t) headings.push(t);
    if (headings.length >= 12) break;
  }
  const paras: string[] = [];
  for (const m of s.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)) {
    const t = stripTags(m[1]).trim();
    if (t.length > 30) paras.push(t);
    if (paras.length >= 30) break;
  }

  const lines: string[] = [];
  if (title) lines.push(`TITLE: ${title}`);
  if (ogTitle && ogTitle !== title) lines.push(`OG_TITLE: ${ogTitle}`);
  if (metaDesc) lines.push(`META_DESCRIPTION: ${metaDesc}`);
  if (headings.length) lines.push("HEADINGS:\n- " + headings.join("\n- "));
  if (paras.length) lines.push("BODY:\n" + paras.join("\n\n"));
  return lines.join("\n\n");
}

function stripTags(s: string): string {
  return s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function matchMeta(html: string, name: string): string | null {
  const re = new RegExp(
    `<meta[^>]*(?:name|property)=["']${name}["'][^>]*content=["']([^"']+)["']`,
    "i"
  );
  const m = html.match(re);
  return m ? m[1].trim() : null;
}
