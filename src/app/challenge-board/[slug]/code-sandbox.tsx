"use client";
import { Sandpack } from "@codesandbox/sandpack-react";
import React, { useState } from "react";

import SolutionTimer from "./solution-timer";

export default function CodeSandbox() {
  const [activeLanguage, setActiveLanguage] = useState<"js" | "ts">("js");

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
        <SolutionTimer />
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
                  "/App.js":
                    "import React from 'react';\n\nexport default function App() {\n  return <div>Hello World</div>;\n}",
                }
              : {
                  "/App.tsx":
                    "import React from 'react';\n\nexport default function App() {\n  return <div>Hello World</div>;\n}",
                }
          }
        />
      </div>
    </div>
  );
}
