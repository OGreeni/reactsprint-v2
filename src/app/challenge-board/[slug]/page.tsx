import React from "react";
import { z } from "zod";

import ChallengeHints from "@/components/challenge-hints";
import Heading from "@/components/heading";
import LinkWithFilter from "@/components/link-with-filter";
import type { Category, Difficulty } from "@/components/sidebar";
import sampleChallenge from "@/data/sample-challenge.json";
import { getEntryByFilter } from "@/service/sdk";
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

// sampleChallenge.jsStarter = formatCode(sampleChallenge.jsStarter);
// sampleChallenge.jsSolution = formatCode(sampleChallenge.jsSolution);
// sampleChallenge.tsStarter = formatCode(sampleChallenge.tsStarter);
// sampleChallenge.tsSolution = formatCode(sampleChallenge.tsSolution);

export default async function Page({ params: { slug } }: Props) {
  const challenge = await getEntryByFilter({
    contentType: "challenge",
    filterType: "slug",
    filterValue: slug,
  });

  return (
    <div className="mx-auto max-w-7xl p-2">
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
                    />
                  </>
                ))}
              </p>
            </li>
          </ul>
          <ChallengeHints hints={challenge.hints} />
          <div className="mt-4">
            <CodeSandbox
              code={{
                jsStarter: formatCode(challenge.jsStarter),
                jsSolution: formatCode(challenge.jsSolution),
                tsStarter: formatCode(challenge.tsStarter),
                tsSolution: formatCode(challenge.tsSolution),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
