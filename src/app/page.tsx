import { eq, sql } from "drizzle-orm";
import React from "react";
import { db } from "~/server/db/index";
import { ing } from "~/server/db/schema";
import { IngButton, IngParagraph, MongoButton } from "../actions/Ingler";

export default async function HomePage() {
  const IngCount = await db.query.ing.findFirst();
  return (
    <div>
      <div>
        <p>{IngCount?.ingle}</p>
        <MongoButton />
      </div>
    </div>
  );
}
