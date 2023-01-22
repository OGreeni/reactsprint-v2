"use client";
import React, { useState } from "react";
import { z } from "zod";

import Heading from "@/components/heading";
import LinkWithFilter from "@/components/link-with-filter";
import type { Category, Difficulty } from "@/components/sidebar";
import SandpackWrapper from "@/components/wrappers/sandpack-wrapper";
import { formatCode } from "@/utils/helpers";

interface Props {
  params: {
    slug: string;
  };
}

// TODO: fetch data from Contentful API and add react-query
// TODO: add hints and solution
// authentication with auth zero

const getDifficultyTextColor = (difficulty: Difficulty) => {
  switch (difficulty) {
    case "easy":
      return "text-success";
    case "medium":
      return "text-warning";
    case "hard":
      return "text-error";
  }
};

const challengeSchema = z.object({
  title: z.string(),
  slug: z.string(),
  index: z.number(),
  objective: z.string(),
  difficulty: z.string(),
  categories: z.array(z.string()),
  code: z.object({
    js: z.object({
      starter: z.string().url(),
      solution: z.string().url(),
    }),
    ts: z.object({
      starter: z.string().url(),
      solution: z.string().url(),
    }),
  }),
  hints: z.array(z.string()),
});

const mockChallenge = {
  title: "Challenge 1",
  slug: "challenge-1",
  index: 1,
  objective: "Create a simple website",
  difficulty: "easy",
  categories: ["html", "css", "javascript"],
  code: {
    js: {
      starter: formatCode(
        `import React from "react";
    
            export default function App() {
                return (
                    <div>
                        <h1>Hello World!</h1>
                    </div>
                );
            }`
      ),
      solution: formatCode(
        `import React from "react";
    
            export default function App() {
                return (
                    <div>
                        <h1>Hello World!</h1>
                    </div>
                );
            }`
      ),
    },
    ts: {
      starter: formatCode(
        `import React from "react";
    
            export default function App() {
                return (
                    <div>
                        <h1>Hello World!</h1>
                    </div>
                );
            }`
      ),
      solution: formatCode(
        `import React from "react";
    
            export default function App() {
                return (
                    <div>
                        <h1>Hello World!</h1>
                    </div>
                );
            }`
      ),
    },
  },
  hints: [
    "Use the `<h1>` tag to create a heading",
    "Use the `<div>` tag to create a container",
  ],
};

type Challenge = z.infer<typeof challengeSchema>;

export default function Page({ params: { slug } }: Props) {
  const [activeTab, setActiveTab] = useState<"js" | "ts">("js");

  // const challenge = challengeSchema.parse(mockChallenge);

  return (
    <div className="mx-auto max-w-7xl p-2">
      {/* 
        Todo: add a sidebar with the challenge details
        and a button to reveal the solution
        and a button to reveal the hints
        and a button to mark the challenge as complete
        and rating stars
    */}
      <Heading className="text-center">{slug}</Heading>
      <div className="mockup-window my-10 grow border border-base-300 text-lg shadow-md">
        <div className="p-3">
          <ul>
            <li>
              <p>
                <span className="font-bold">Objective:</span>{" "}
                {mockChallenge.objective}
              </p>
            </li>
            <li>
              <p>
                <span className="font-bold">Difficulty:</span>{" "}
                <span
                  className={`font-bold ${getDifficultyTextColor(
                    mockChallenge.difficulty as Difficulty
                  )}`}
                >
                  {mockChallenge.difficulty.toUpperCase()}
                </span>
              </p>
            </li>
            <li>
              <p>
                <span className="font-bold">Categories:</span>{" "}
                {mockChallenge.categories.map((category) => (
                  <>
                    <LinkWithFilter
                      key={category}
                      value={category as Category}
                    />{" "}
                  </>
                ))}
              </p>
            </li>
          </ul>
          <div className="mt-10 flex gap-4">
            <button
              className="btn-primary btn"
              onClick={() => setActiveTab("js")}
            >
              JavaScript
            </button>
            <button
              className="btn-outline btn-secondary btn"
              onClick={() => setActiveTab("ts")}
            >
              TypeScript
            </button>
          </div>
        </div>
        {/* <SandpackWrapper
          template="react"
          options={{
            externalResources: [
              "https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp",
            ],
            showTabs: true,
            editorHeight: "50vh",
          }}
          files={{
            "/App.js": mockChallenge.code.js.starter,
          }}
        /> */}
      </div>
    </div>
  );
}
