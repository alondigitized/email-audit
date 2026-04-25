CREATE TABLE "laptop_provisioning_job" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"persona_slug" text NOT NULL,
	"status" text DEFAULT 'queued' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"claimed_at" timestamp,
	"done_at" timestamp,
	"error" text
);
--> statement-breakpoint
ALTER TABLE "laptop_provisioning_job" ADD CONSTRAINT "laptop_provisioning_job_tenant_id_tenant_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenant"("id") ON DELETE cascade ON UPDATE no action;