import { table } from "console";
import Link from "next/link";
import { db } from "~/server/db";
import IngCounter from "./components/IngCounter";
import { incrementIngle, Ingle } from "./components/incrementIngle";

export default async function HomePage() {
  return (
    <div>
      <p>{Ingle()}</p>
      <button onClick={incrementIngle()}>ING</button>
    </div>
  );
}
