"use client";
import Link from "next/link";
import React from "react";

import { useStore } from "../store";
import type { Category } from "./sidebar";

interface Props {
  value: Category;
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
