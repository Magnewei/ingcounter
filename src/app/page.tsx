import React from "react";
import Footer from "~/components/Footer";
import { Ingle } from "~/components/Ingle";
import { IngCount } from "../actions/IngleAction";

export default async function HomePage() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center gap-2 space-x-2 bg-black text-white">
        <h1 className="text-7xl font-bold">[ ING COUNTER ]</h1>
        <p className="text-7xl font-bold">{IngCount()}</p>
        <Ingle />
      </div>
    </>
  );
}
