"use client";
import React from "react";
import { IncrementIngle } from "../actions/IngleAction";

export function Ingle() {
  let isClicked = false;
  const sendForm = () => {
    const formAction = isClicked ? IncrementIngle() : undefined;
    return formAction;
  };

  return (
    <form action={() => sendForm()} method="post">
      <button
        className="rounded border border-blue-500 bg-white px-4 py-2 text-3xl font-bold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
        type="submit"
        onClick={() => {
          isClicked = true;
        }}
      >
        ING!
      </button>
    </form>
  );
}
