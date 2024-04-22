"use client";
import React, { useState } from "react";
import Shrek from "./Shrek.jsx";

export default function IngCounter() {
  const [ing, setIng] = useState(0);

  return (
    <>
      <p>Ings i dag: {ing} </p>
      <button onClick={() => setIng(ing + 1)}>Ing it up</button>
    </>
  );
}
