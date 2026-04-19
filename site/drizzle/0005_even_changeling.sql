CREATE TABLE IF NOT EXISTS "audit" (
	"slug" text PRIMARY KEY NOT NULL,
	"persona" text NOT NULL,
	"type" text NOT NULL,
	"timestamp" timestamp with time zone NOT NULL,
	"score" numeric(5, 2),
	"data" jsonb NOT NULL,
	"media_keys" jsonb DEFAULT '{}'::jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "audit_persona_ts_idx" ON "audit" USING btree ("persona","timestamp");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "audit_type_ts_idx" ON "audit" USING btree ("type","timestamp");