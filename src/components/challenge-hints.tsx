"use client";
import React, { useState } from "react";

// TODO: parse hints from markdown, preserve inline code
interface Props {
  hints: string[];
}

export default function ChallengeHints({ hints }: Props) {
  const [currentHint, setCurrentHint] = useState(0);

  return (
    <>
      {hints.map((hint, index) => {
        if (index >= currentHint) return;

        return (
          <div className="my-4 flex flex-col" key={hint}>
            <div className="flex items-center">
              <span className="mr-2 text-xl font-bold">{index + 1}.</span>
              <span className="block w-full rounded-md bg-base-200 p-4 text-base-content">
                {hint.split("`").map((substring, index) => {
                  if (index % 2 === 0) {
                    return substring;
                  }
                  // this is inline code so we'll wrap it in a code tag
                  return (
                    <code
                      className="rounded-md bg-base-300 p-1 font-mono"
                      key={substring}
                    >
                      {substring}
                    </code>
                  );
                })}
              </span>
            </div>
          </div>
        );
      })}
      <button
        className={`btn-info btn-sm btn mt-2 ${
          currentHint === hints.length ? "btn-disabled" : ""
        }`}
        onClick={() => {
          if (currentHint < hints.length) {
            setCurrentHint(currentHint + 1);
          }
        }}
      >
        Show Hint
      </button>
    </>
  );
}
