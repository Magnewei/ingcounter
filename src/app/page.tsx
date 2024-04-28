import React from "react";
import { Ingle } from "~/components/Ingle";
import { IngCount } from "../actions/IngleAction";

export default async function HomePage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2 space-x-2 bg-black text-7xl font-bold text-white">
      <h1>[ ING COUNTER ]</h1>
      <p>{IngCount()}</p>
      <Ingle />
    </div>
  );
}
