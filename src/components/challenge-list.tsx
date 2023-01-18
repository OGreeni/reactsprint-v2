import Link from "next/link";
import React from "react";

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

interface Props {
  searchQuery: string;
}

export default function ChallengeList({ searchQuery }: Props) {
  const filteredChallenges = challengeArrayMock.filter((challenge) => {
    return challenge.title.toLowerCase().includes(
      searchQuery
        .trim()
        .replace(/\s{2,}/g, " ")
        .toLowerCase()
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
