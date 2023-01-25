import Link from "next/link";
import React from "react";

import { ChallengeDocument } from "@/lib/contentful";

import { useStore } from "../store";
import ChallengePreview from "./challenge-preview";

interface ChallengeData extends ChallengeDocument {
  id: string;
}

interface Props {
  challenges: ChallengeData[];
}

export default function ChallengeList({ challenges }: Props) {
  const { searchQuery, categoryFilters, difficultyFilters } = useStore();

  const filteredChallenges = challenges.filter((challenge) => {
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
        <Link href={`challenge-board/${challenge.slug}`} key={challenge.id}>
          <ChallengePreview {...challenge} />
        </Link>
      ))}
    </>
  );
}
