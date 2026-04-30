CREATE TABLE "persona_synthesis" (
	"persona_slug" text NOT NULL,
	"brand_domain" text NOT NULL,
	"tenant_id" uuid,
	"title" text NOT NULL,
	"summary" text NOT NULL,
	"embedding" vector(1024) NOT NULL,
	"reaction_count" integer NOT NULL,
	"through_received_at" timestamp with time zone,
	"vault_synced_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "persona_synthesis_persona_slug_brand_domain_pk" PRIMARY KEY("persona_slug","brand_domain")
);
--> statement-breakpoint
ALTER TABLE "persona_synthesis" ADD CONSTRAINT "persona_synthesis_tenant_id_tenant_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenant"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "persona_synthesis_hnsw_idx" ON "persona_synthesis" USING hnsw ("embedding" vector_cosine_ops);--> statement-breakpoint
CREATE INDEX "persona_synthesis_persona_idx" ON "persona_synthesis" USING btree ("persona_slug");