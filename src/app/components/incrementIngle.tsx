import { eq, sql } from "drizzle-orm";
import { db } from "~/server/db";
import { ing } from "~/server/db/schema";

export async function incrementIngle() {
  await db
    .update(ing)
    .set({ ingle: sql`${ing.ingle} +1` })
    .where(eq(ing.id, 1));
}

export async function Ingle() {
  const ing = await db.query.ing.findFirst();
  return ing?.ingle;
}
