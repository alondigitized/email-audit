CREATE TABLE "tenant_persona_grant" (
	"tenant_id" uuid NOT NULL,
	"persona_slug" text NOT NULL,
	"mode" text DEFAULT 'read' NOT NULL,
	"granted_by" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "tenant_persona_grant_tenant_id_persona_slug_pk" PRIMARY KEY("tenant_id","persona_slug")
);
--> statement-breakpoint
ALTER TABLE "tenant_persona_grant" ADD CONSTRAINT "tenant_persona_grant_tenant_id_tenant_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenant"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tenant_persona_grant" ADD CONSTRAINT "tenant_persona_grant_persona_slug_persona_slug_fk" FOREIGN KEY ("persona_slug") REFERENCES "public"."persona"("slug") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tenant_persona_grant" ADD CONSTRAINT "tenant_persona_grant_granted_by_user_id_fk" FOREIGN KEY ("granted_by") REFERENCES "public"."user"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "tenant_persona_grant_persona_idx" ON "tenant_persona_grant" USING btree ("persona_slug");