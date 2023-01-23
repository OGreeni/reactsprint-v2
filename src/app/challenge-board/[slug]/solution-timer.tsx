"use client";
import React, { useEffect } from "react";

interface Props {
  showSolution: boolean;
  onShowSolution: (state: boolean) => void;
}

export default function SolutionTimer({ showSolution, onShowSolution }: Props) {
  const [seconds, setSeconds] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);

  // fix possible memory leak
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds === 59) {
        setSeconds(0);
        setMinutes(minutes + 1);
      } else {
        setSeconds(seconds + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="flex items-center gap-2">
      <span className="countdown font-mono text-2xl">
        {/* @ts-ignore */}
        <span style={{ "--value": minutes }}></span>:{/* @ts-ignore */}
        <span style={{ "--value": seconds }}></span>
      </span>
      <button
        className="btn-ghost btn-sm btn p-1"
        onClick={() => {
          setSeconds(0);
          setMinutes(0);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </button>
      <button
        className={`btn-accent btn-sm btn ${
          !showSolution ? "btn-outline" : ""
        }`}
        onClick={() => onShowSolution(!showSolution)}
      >
        {showSolution ? "Hide" : "View"} Solution
      </button>
    </div>
  );
}
