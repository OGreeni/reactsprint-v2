"use client";
import Link from "next/link";
import React from "react";

import type { ChallengeDocument } from "@/lib/contentful";

import { useStore } from "../store";

interface Props {
  value: ChallengeDocument["categories"][number];
}

export default function LinkWithFilter({ value }: Props) {
  const { setCategoryFilters, setDifficultyFilters } = useStore();

  const handleClick = () => {
    setCategoryFilters([value]);
    setDifficultyFilters(["easy", "medium", "hard"]);
  };
  return (
    <Link
      className="link-primary link"
      href="/challenge-board"
      onClick={() => handleClick()}
    >
      #{value}
    </Link>
  );
}
