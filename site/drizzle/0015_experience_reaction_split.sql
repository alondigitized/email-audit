CREATE TABLE "experience" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"persona_slug" text NOT NULL,
	"tenant_id" uuid,
	"type" text NOT NULL,
	"brand_domain" text,
	"message_id" text,
	"received_at" timestamp with time zone NOT NULL,
	"email_data" jsonb,
	"qa_findings" jsonb,
	"assets" jsonb,
	"performance" jsonb,
	"raw_key" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "reaction_embedding" (
	"reaction_id" uuid PRIMARY KEY NOT NULL,
	"persona" text NOT NULL,
	"indexed_text" text NOT NULL,
	"embedding" vector(1024) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "reaction" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"experience_id" uuid NOT NULL,
	"persona_slug" text NOT NULL,
	"slug" text NOT NULL,
	"score" numeric(5, 2),
	"review_data" jsonb NOT NULL,
	"tenant_id" uuid,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "reaction_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "experience" ADD CONSTRAINT "experience_tenant_id_tenant_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenant"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reaction_embedding" ADD CONSTRAINT "reaction_embedding_reaction_id_reaction_id_fk" FOREIGN KEY ("reaction_id") REFERENCES "public"."reaction"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reaction" ADD CONSTRAINT "reaction_experience_id_experience_id_fk" FOREIGN KEY ("experience_id") REFERENCES "public"."experience"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reaction" ADD CONSTRAINT "reaction_tenant_id_tenant_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenant"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "experience_persona_ts_idx" ON "experience" USING btree ("persona_slug","received_at");--> statement-breakpoint
CREATE INDEX "experience_type_ts_idx" ON "experience" USING btree ("type","received_at");--> statement-breakpoint
CREATE INDEX "experience_tenant_ts_idx" ON "experience" USING btree ("tenant_id","received_at");--> statement-breakpoint
CREATE INDEX "experience_brand_idx" ON "experience" USING btree ("brand_domain");--> statement-breakpoint
CREATE INDEX "reaction_embedding_hnsw_idx" ON "reaction_embedding" USING hnsw ("embedding" vector_cosine_ops);--> statement-breakpoint
CREATE INDEX "reaction_embedding_persona_idx" ON "reaction_embedding" USING btree ("persona");--> statement-breakpoint
CREATE INDEX "reaction_persona_ts_idx" ON "reaction" USING btree ("persona_slug","created_at");--> statement-breakpoint
CREATE INDEX "reaction_experience_idx" ON "reaction" USING btree ("experience_id");--> statement-breakpoint
CREATE INDEX "reaction_tenant_ts_idx" ON "reaction" USING btree ("tenant_id","created_at");--> statement-breakpoint
-- Dedup natural key: per-inbox uniqueness on Message-Id when present.
-- Partial unique because legacy AgentMail audits don't have a stable
-- message_id; multiple NULLs are allowed.
CREATE UNIQUE INDEX "experience_persona_msgid_uniq" ON "experience" ("persona_slug", "message_id") WHERE "message_id" IS NOT NULL;