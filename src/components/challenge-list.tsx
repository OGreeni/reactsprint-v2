import Link from "next/link";
import React from "react";

import sampleChalenge from "@/data/sample-challenge.json";

import { useStore } from "../store";
import ChallengePreview from "./challenge-preview";

const sampleChallengeArray = new Array(5).fill(sampleChalenge);

// TODO: add react-query + fetch data from Contentful API

export default function ChallengeList() {
  const { searchQuery, categoryFilters, difficultyFilters } = useStore();

  const filteredChallenges = sampleChallengeArray.filter((challenge) => {
    return (
      challenge.title.toLowerCase().includes(
        searchQuery
          .trim()
          .replace(/\s{2,}/g, " ")
          .toLowerCase()
      ) &&
      difficultyFilters.includes(challenge.difficulty) &&
      categoryFilters.every((category) =>
        challenge.categories.includes(category)
      )
    );
  });

  return (
    <>
      {filteredChallenges.map((challenge) => (
        <Link href={`challenge-board/${challenge.slug}`} key={challenge.index}>
          <ChallengePreview {...challenge} />
        </Link>
      ))}
    </>
  );
}
