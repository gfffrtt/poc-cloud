import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const posts = pgTable("posts", {
  id: uuid().primaryKey().default(`uuid_generate_v4()`),
  title: varchar().notNull(),
  content: varchar().notNull(),
});
