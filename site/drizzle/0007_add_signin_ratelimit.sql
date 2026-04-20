CREATE TABLE "signInRateLimit" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"keyType" text NOT NULL,
	"keyValue" text NOT NULL,
	"ts" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX "signInRateLimit_key_ts_idx" ON "signInRateLimit" USING btree ("keyType","keyValue","ts");