"use client";
import { Sandpack } from "@codesandbox/sandpack-react";
import React, { useState } from "react";

import sampleChallenge from "@/data/sample-challenge.json";

import SolutionTimer from "./solution-timer";

export default function CodeSandbox() {
  const [activeLanguage, setActiveLanguage] = useState<"js" | "ts">("js");
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="flex w-full flex-col">
      <div className="my-2 flex justify-between">
        <div className="flex gap-3">
          <button
            onClick={() => setActiveLanguage("js")}
            className={`btn-primary btn ${
              activeLanguage !== "js" ? "btn-outline" : ""
            }`}
          >
            JavaScript
          </button>
          <button
            onClick={() => setActiveLanguage("ts")}
            className={`btn-secondary btn ${
              activeLanguage !== "ts" ? "btn-outline" : ""
            }`}
          >
            TypeScript
          </button>
        </div>
        <SolutionTimer
          showSolution={showSolution}
          onShowSolution={() => setShowSolution(!showSolution)}
        />
      </div>
      <div className="overflow-hidden rounded-md shadow-md">
        <Sandpack
          template={activeLanguage === "js" ? "react" : "react-ts"}
          options={{
            externalResources: [
              "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css",
            ],
            showInlineErrors: true,
            showTabs: true,
            showConsoleButton: true,
            editorHeight: "60vh",
            recompileMode: "delayed",
            recompileDelay: 200,
          }}
          files={
            activeLanguage === "js"
              ? {
                  "/App.js": showSolution
                    ? sampleChallenge.jsSolution
                    : sampleChallenge.jsStarter,
                }
              : {
                  "/App.tsx": showSolution
                    ? sampleChallenge.tsSolution
                    : sampleChallenge.tsStarter,
                }
          }
        />
      </div>
    </div>
  );
}
