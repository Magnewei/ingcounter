import { db } from "~/server/db";

export default async function Ing() {
  const ing = await db.query.ing.findFirst();
  return ing;
}
