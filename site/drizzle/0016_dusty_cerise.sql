CREATE TABLE "chat_reflection" (
	"thread_id" uuid PRIMARY KEY NOT NULL,
	"persona_slug" text NOT NULL,
	"tenant_id" uuid,
	"title" text NOT NULL,
	"summary" text NOT NULL,
	"embedding" vector(1024) NOT NULL,
	"reflected_through_message_count" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "chat_reflection" ADD CONSTRAINT "chat_reflection_thread_id_chat_thread_id_fk" FOREIGN KEY ("thread_id") REFERENCES "public"."chat_thread"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "chat_reflection" ADD CONSTRAINT "chat_reflection_tenant_id_tenant_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenant"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "chat_reflection_hnsw_idx" ON "chat_reflection" USING hnsw ("embedding" vector_cosine_ops);--> statement-breakpoint
CREATE INDEX "chat_reflection_persona_idx" ON "chat_reflection" USING btree ("persona_slug");--> statement-breakpoint
CREATE INDEX "chat_reflection_tenant_idx" ON "chat_reflection" USING btree ("tenant_id");