// Pipeline-side R2 uploader. The daemons (email-monitor + site-monitor)
// call putMedia() after they render a screenshot and before they push the
// audit.json. The returned key is persisted into audit.json so the site
// can generate a signed GET URL at render time.

import fs from 'node:fs';
import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';

let clientInstance = null;
function client() {
  if (clientInstance) return clientInstance;
  const { R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY } = process.env;
  if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY) {
    throw new Error('R2 credentials missing — set R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY');
  }
  clientInstance = new S3Client({
    region: 'auto',
    endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: R2_ACCESS_KEY_ID,
      secretAccessKey: R2_SECRET_ACCESS_KEY,
    },
  });
  return clientInstance;
}

export function r2Bucket() {
  const b = process.env.R2_BUCKET;
  if (!b) throw new Error('R2_BUCKET not set');
  return b;
}

export function mediaConfigured() {
  return !!(
    process.env.R2_ACCOUNT_ID &&
    process.env.R2_ACCESS_KEY_ID &&
    process.env.R2_SECRET_ACCESS_KEY &&
    process.env.R2_BUCKET
  );
}

/**
 * Upload a local file to R2. Returns the stored key.
 */
export async function putMedia({ filePath, key, contentType = 'image/png' }) {
  const body = fs.readFileSync(filePath);
  await client().send(
    new PutObjectCommand({
      Bucket: r2Bucket(),
      Key: key,
      Body: body,
      ContentType: contentType,
    }),
  );
  return key;
}

/**
 * Delete every object under a given prefix. Used by verify-pipeline cleanup.
 * R2 has no batch delete via PutObject path — iterate known keys from the
 * caller side instead. This helper is a convenience for a single key.
 */
export async function deleteMedia(key) {
  await client().send(
    new DeleteObjectCommand({
      Bucket: r2Bucket(),
      Key: key,
    }),
  );
}

/**
 * Canonical key shape. Keep stable — keys are persisted in audit.json and
 * change-proof migrations are harder than getting this right once.
 */
export function auditMediaKey(slug, filename) {
  return `audits/${slug}/${filename}`;
}
