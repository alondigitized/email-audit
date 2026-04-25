CREATE TYPE "public"."tenant_plan" AS ENUM('waitlisted', 'free', 'pro', 'banned');--> statement-breakpoint
CREATE TABLE "tenant" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"plan" "tenant_plan" DEFAULT 'waitlisted' NOT NULL,
	"tier_started_at" timestamp,
	"tier_expires_at" timestamp,
	"referral_code" text,
	"referred_by_tenant_id" uuid,
	"referrals_made" integer DEFAULT 0 NOT NULL,
	"onboarding_research" jsonb,
	"competitor_target" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "tenant_slug_unique" UNIQUE("slug"),
	CONSTRAINT "tenant_referral_code_unique" UNIQUE("referral_code")
);
--> statement-breakpoint
ALTER TABLE "audit" ADD COLUMN "tenant_id" uuid;--> statement-breakpoint
ALTER TABLE "chat_thread" ADD COLUMN "tenant_id" uuid;--> statement-breakpoint
ALTER TABLE "persona" ADD COLUMN "tenant_id" uuid;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "tenant_id" uuid;--> statement-breakpoint
ALTER TABLE "audit" ADD CONSTRAINT "audit_tenant_id_tenant_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenant"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "chat_thread" ADD CONSTRAINT "chat_thread_tenant_id_tenant_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenant"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "persona" ADD CONSTRAINT "persona_tenant_id_tenant_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenant"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_tenant_id_tenant_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenant"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "audit_tenant_ts_idx" ON "audit" USING btree ("tenant_id","timestamp");