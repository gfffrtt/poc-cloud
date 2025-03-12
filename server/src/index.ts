import { Hono } from "hono";
import { db } from "./db";
import { posts } from "./schema";

const app = new Hono();

app.get("/", async (c) => {
  const conn = db();
  await conn.insert(posts).values({
    title: "Hello",
    content: "World",
  });

  return c.json(await conn.select().from(posts));
});

export default app;
