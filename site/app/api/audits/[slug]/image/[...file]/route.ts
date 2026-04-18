import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { z } from "zod";
import { currentUser } from "@/lib/dal";
import { getAuditBySlugForUser } from "@/lib/audits";

// S7 + S8: authenticated, persona-scoped access to audit screenshots.
// Files live outside /public so Next.js static asset handling does NOT serve
// them directly. Every read goes through this handler, which verifies:
//   1. Session (requireUser equivalent)
//   2. User owns the audit's persona (via getAuditBySlugForUser)
//   3. Requested path doesn't escape the audit's private dir

const PRIVATE_DIR = path.join(
  process.cwd(),
  "private-content",
  "audits"
);

const SlugSchema = z.string().regex(/^[a-z0-9-]+$/).max(128);
const FileSchema = z
  .string()
  .regex(/^[a-z0-9._-]+$/i)
  .max(256);

const MIME_BY_EXT: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
};

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string; file: string[] }> }
) {
  const { slug: rawSlug, file: fileParts } = await params;

  const slug = SlugSchema.safeParse(rawSlug);
  if (!slug.success) return new NextResponse("Not found", { status: 404 });

  // Catch-all param yields an array; we only serve one file per path.
  if (!Array.isArray(fileParts) || fileParts.length !== 1) {
    return new NextResponse("Not found", { status: 404 });
  }
  const file = FileSchema.safeParse(fileParts[0]);
  if (!file.success) return new NextResponse("Not found", { status: 404 });

  const user = await currentUser();
  if (!user) return new NextResponse("Unauthorized", { status: 401 });

  const audit = getAuditBySlugForUser(slug.data, user.personas);
  if (!audit) return new NextResponse("Not found", { status: 404 });

  const absPath = path.join(PRIVATE_DIR, slug.data, file.data);
  // Defense-in-depth: ensure resolved path stays under PRIVATE_DIR.
  const resolved = path.resolve(absPath);
  if (!resolved.startsWith(path.resolve(PRIVATE_DIR) + path.sep)) {
    return new NextResponse("Not found", { status: 404 });
  }
  if (!fs.existsSync(resolved) || !fs.statSync(resolved).isFile()) {
    return new NextResponse("Not found", { status: 404 });
  }

  const buf = await fs.promises.readFile(resolved);
  const ext = path.extname(resolved).toLowerCase();
  const contentType = MIME_BY_EXT[ext] ?? "application/octet-stream";

  return new NextResponse(new Uint8Array(buf), {
    status: 200,
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "private, max-age=60",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
