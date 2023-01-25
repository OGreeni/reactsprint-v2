"use client";
import { Sandpack } from "@codesandbox/sandpack-react";
import React, { useState } from "react";

import SolutionTimer from "./solution-timer";

interface Props {
  code: {
    jsStarter: string;
    jsSolution: string;
    tsStarter: string;
    tsSolution: string;
  };
}

export default function CodeSandbox({
  code: { jsStarter, jsSolution, tsStarter, tsSolution },
}: Props) {
  const [activeLanguage, setActiveLanguage] = useState<"js" | "ts">("js");
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="flex w-full flex-col">
      <div className="my-2 flex flex-col justify-between gap-6 lg:flex-row">
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
        {/* TODO: fix showSolution button not working */}
        <SolutionTimer
          showSolution={showSolution}
          onShowSolution={setShowSolution}
        />
      </div>

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
                "/App.js": showSolution ? jsSolution : jsStarter,
              }
            : {
                "/App.tsx": showSolution ? tsSolution : tsStarter,
              }
        }
      />
    </div>
  );
}
