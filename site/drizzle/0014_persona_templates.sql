CREATE TYPE "public"."template_request_status" AS ENUM('queued', 'building', 'shipped', 'rejected');--> statement-breakpoint
CREATE TABLE "persona_template" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"short" text NOT NULL,
	"industry" text NOT NULL,
	"profile" jsonb,
	"last_status" jsonb,
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "persona_template_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "template_request" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"requested_industry" text NOT NULL,
	"brand_domain" text NOT NULL,
	"status" "template_request_status" DEFAULT 'queued' NOT NULL,
	"requested_at" timestamp DEFAULT now() NOT NULL,
	"shipped_at" timestamp,
	"fulfilled_template_slug" text
);
--> statement-breakpoint
ALTER TABLE "persona" ADD COLUMN "template_slug" text;--> statement-breakpoint
ALTER TABLE "template_request" ADD CONSTRAINT "template_request_tenant_id_tenant_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenant"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "persona" ADD CONSTRAINT "persona_template_slug_persona_template_slug_fk" FOREIGN KEY ("template_slug") REFERENCES "public"."persona_template"("slug") ON DELETE set null ON UPDATE no action;