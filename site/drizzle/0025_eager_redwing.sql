CREATE TABLE "audit_share_token" (
	"token" text PRIMARY KEY NOT NULL,
	"audit_slug" text NOT NULL,
	"created_by" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"revoked_at" timestamp
);
--> statement-breakpoint
ALTER TABLE "audit_share_token" ADD CONSTRAINT "audit_share_token_audit_slug_reaction_slug_fk" FOREIGN KEY ("audit_slug") REFERENCES "public"."reaction"("slug") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "audit_share_token" ADD CONSTRAINT "audit_share_token_created_by_user_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "audit_share_token_audit_idx" ON "audit_share_token" USING btree ("audit_slug");