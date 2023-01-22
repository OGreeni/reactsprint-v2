import React from "react";
import { z } from "zod";

import ChallengeHints from "@/components/challenge-hints";
import Heading from "@/components/heading";
import LinkWithFilter from "@/components/link-with-filter";
import type { Category, Difficulty } from "@/components/sidebar";
import sampleChallenge from "@/data/sample-challenge.json";
import { formatCode } from "@/utils/helpers";

import CodeSandbox from "./code-sandbox";

interface Props {
  params: {
    slug: string;
  };
}

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
      starter: z.string(),
      solution: z.string(),
    }),
    ts: z.object({
      starter: z.string(),
      solution: z.string(),
    }),
  }),
  hints: z.array(z.string()),
});

sampleChallenge.code.js.starter = formatCode(sampleChallenge.code.js.starter);
sampleChallenge.code.js.solution = formatCode(sampleChallenge.code.js.solution);
sampleChallenge.code.ts.starter = formatCode(sampleChallenge.code.ts.starter);
sampleChallenge.code.ts.solution = formatCode(sampleChallenge.code.ts.solution);

type Challenge = z.infer<typeof challengeSchema>;

export default function Page({ params: { slug } }: Props) {
  const challenge = challengeSchema.parse(sampleChallenge);

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
                {challenge.objective}
              </p>
            </li>
            <li>
              <p>
                <span className="font-bold">Difficulty:</span>{" "}
                <span
                  className={`font-bold ${getDifficultyTextColor(
                    challenge.difficulty as Difficulty
                  )}`}
                >
                  {challenge.difficulty.toUpperCase()}
                </span>
              </p>
            </li>
            <li>
              <p>
                <span className="font-bold">Categories:</span>{" "}
                {challenge.categories.map((category) => (
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
          <ChallengeHints />
          <div className="mt-4">
            <CodeSandbox />
          </div>
        </div>
      </div>
    </div>
  );
}
