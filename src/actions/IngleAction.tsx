"use server";
import { eq, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "~/server/db/index";
import { ing } from "~/server/db/schema";

export async function IncrementIngle(): Promise<void> {
  const increment = await db
    .update(ing)
    .set({ ingle: sql`${ing.ingle} + 1` })
    .where(eq(ing.id, 1));

  if (!increment) throw new Error("Bad ing increment");

  // Refresh data.
  revalidatePath("/");
}

export async function IngCount(): Promise<number> {
  const ing = await db.query.ing.findFirst();
  if (!ing) throw new Error("Bad ing count");

  return ing.ingle;
}
