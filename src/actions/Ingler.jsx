"use client";
import { eq, sql } from "drizzle-orm";
import React from "react";
import { db } from "~/server/db/index";
import { ing } from "~/server/db/schema";

export function IngParagraph({ count }) {
  "use client";
  return <p>{count}</p>;
}

export function IngButton({ ingFunc }) {
  "use client";
  <button onClick={ingFunc}>Ing</button>;
}

export async function MongoButton() {
  const incrementIngle = async () => {
    await db
      .update(ing)
      .set({ ingle: sql`${ing.ingle} + 1` })
      .where(eq(ing.id, 1));
  };

  return <button onClick={() => incrementIngle}>Something</button>;
}
