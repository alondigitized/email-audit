CREATE TABLE "email_message" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"persona_slug" text NOT NULL,
	"tenant_id" uuid NOT NULL,
	"to_address" text NOT NULL,
	"from_address" text NOT NULL,
	"from_domain" text NOT NULL,
	"subject" text,
	"message_id" text,
	"html" text,
	"text_body" text,
	"raw_key" text,
	"received_at" timestamp with time zone NOT NULL,
	"processed_at" timestamp with time zone,
	"audit_slug" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "email_message" ADD CONSTRAINT "email_message_tenant_id_tenant_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenant"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "email_message_msgid_idx" ON "email_message" USING btree ("persona_slug","message_id");--> statement-breakpoint
CREATE INDEX "email_message_unprocessed_idx" ON "email_message" USING btree ("persona_slug","processed_at","received_at");--> statement-breakpoint
CREATE INDEX "email_message_tenant_idx" ON "email_message" USING btree ("tenant_id");