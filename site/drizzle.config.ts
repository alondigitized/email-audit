import { defineConfig } from "drizzle-kit";

// For `drizzle-kit generate` (schema-only), URL is unused.
// For `drizzle-kit migrate`, DATABASE_URL_UNPOOLED (or DATABASE_URL) must be set.
const url =
  process.env.DATABASE_URL_UNPOOLED ??
  process.env.DATABASE_URL ??
  "postgres://placeholder";

export default defineConfig({
  schema: "./lib/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: { url },
  strict: true,
  verbose: true,
});
