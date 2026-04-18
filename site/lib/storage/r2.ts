import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// Cloudflare R2 client. R2 is S3-compatible, so we reuse the AWS SDK — the
// only surprise is the endpoint shape (account-scoped subdomain) and the
// fixed "auto" region. Credentials are read lazily so builds don't fail
// when the env isn't populated yet (e.g. on a fresh preview before user
// adds them).

const ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
const ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
export const R2_BUCKET = process.env.R2_BUCKET ?? "";

let clientInstance: S3Client | null = null;

export function r2Client(): S3Client {
  if (clientInstance) return clientInstance;
  if (!ACCOUNT_ID || !ACCESS_KEY_ID || !SECRET_ACCESS_KEY || !R2_BUCKET) {
    throw new Error(
      "R2 credentials not set (need R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET)."
    );
  }
  clientInstance = new S3Client({
    region: "auto",
    endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: ACCESS_KEY_ID,
      secretAccessKey: SECRET_ACCESS_KEY,
    },
  });
  return clientInstance;
}

export function r2IsConfigured(): boolean {
  return !!(ACCOUNT_ID && ACCESS_KEY_ID && SECRET_ACCESS_KEY && R2_BUCKET);
}

/** Upload bytes to R2. Overwrites any existing object at the same key. */
export async function putObject(
  key: string,
  body: Uint8Array | Buffer,
  contentType: string
): Promise<void> {
  await r2Client().send(
    new PutObjectCommand({
      Bucket: R2_BUCKET,
      Key: key,
      Body: body,
      ContentType: contentType,
    })
  );
}

/**
 * Generate a presigned GET URL. Client will use this URL directly from the
 * browser — bytes never flow through Vercel. TTL is short enough that a
 * leaked URL has a bounded blast radius; long enough that a user can read
 * the page and the image(s) render.
 */
export async function signGetUrl(
  key: string,
  expiresSeconds = 900
): Promise<string> {
  return getSignedUrl(
    r2Client(),
    new GetObjectCommand({ Bucket: R2_BUCKET, Key: key }),
    { expiresIn: expiresSeconds }
  );
}

/** Delete an object. Used by verify-pipeline cleanup. */
export async function deleteObject(key: string): Promise<void> {
  await r2Client().send(
    new DeleteObjectCommand({ Bucket: R2_BUCKET, Key: key })
  );
}
