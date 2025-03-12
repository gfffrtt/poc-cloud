import { drizzle } from "drizzle-orm/node-postgres";

export const db = () => {
  return drizzle(process.env.COCKROACH_DB_URL!);
};
