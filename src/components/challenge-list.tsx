import Link from "next/link";
import React from "react";

import { useStore } from "../store";
import ChallengePreview from "./challenge-preview";

const challengeMock = {
  title: "Challenge 1",
  slug: "challenge-1",
  index: 1,
  objective: "Create a simple website",
  difficulty: "easy",
  tags: ["html", "css", "javascript"],
};
const challengeArrayMock = new Array(5).fill(challengeMock);

// TODO: add react-query + fetch data from Contentful API

export default function ChallengeList() {
  const { searchQuery, categoryFilters, difficultyFilters } = useStore();

  const filteredChallenges = challengeArrayMock.filter((challenge) => {
    return (
      challenge.title.toLowerCase().includes(
        searchQuery
          .trim()
          .replace(/\s{2,}/g, " ")
          .toLowerCase()
      ) &&
      difficultyFilters.includes(challenge.difficulty) &&
      categoryFilters.every((category) => challenge.tags.includes(category))
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
