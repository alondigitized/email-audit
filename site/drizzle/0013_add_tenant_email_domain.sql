ALTER TABLE "tenant" ADD COLUMN "email_domain" text;--> statement-breakpoint
ALTER TABLE "tenant" ADD CONSTRAINT "tenant_email_domain_unique" UNIQUE("email_domain");