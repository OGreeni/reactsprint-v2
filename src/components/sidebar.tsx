import React from "react";

import { categories, difficulties } from "@/constants/challenge-options";
import type { ChallengeDocument } from "@/lib/contentful";

import { useStore } from "../store";

// TODO: zustand to synchronize clicked filters with the challenge board
// migrate search query to zustand

export default function Sidebar() {
  const {
    categoryFilters,
    difficultyFilters,
    setCategoryFilters,
    setDifficultyFilters,
  } = useStore();

  // const handleFilterClick = <
  //   T extends
  //     | ChallengeDocument["categories"]
  //     | ChallengeDocument["difficulty"][]
  // >({
  //   filter,
  //   prevFilters,
  //   setFilters,
  // }: {
  //   filter: T;
  //   prevFilters: T[];
  //   setFilters: (filters: T[]) => void;
  // }) => {
  //   if (prevFilters.includes(filter)) {
  //     setFilters(prevFilters.filter((f) => f !== filter));
  //   } else {
  //     setFilters([...prevFilters, filter]);
  //   }
  // };

  const handleFilterClick = <T extends any>({
    filter,
    prevFilters,
    setFilters,
  }: {
    filter: T;
    prevFilters: T[];
    setFilters: (filters: T[]) => void;
  }) => {
    if (prevFilters.includes(filter)) {
      setFilters(prevFilters.filter((f) => f !== filter));
    } else {
      setFilters([...prevFilters, filter]);
    }
  };

  return (
    <>
      <div className="h-full border-primary p-2 lg:block lg:rounded-l lg:border-y lg:border-l">
        <div className="h-1/2 overflow-auto border-b border-primary text-center">
          <div className="text-md mb-5 font-bold">Categories</div>
          <ul className="flex flex-col gap-1 p-1">
            {categories.map((category) => (
              <li key={category}>
                <button
                  className={`${
                    !categoryFilters.includes(category) && "btn-outline"
                  } btn-primary btn-sm btn h-max text-xs`}
                  onClick={() => {
                    handleFilterClick({
                      filter: category,
                      prevFilters: categoryFilters,
                      setFilters: setCategoryFilters,
                    });
                  }}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex h-1/2 flex-col justify-around text-center">
          <div className="text-md font-bold">Difficulty</div>
          <ul className="flex flex-col gap-1">
            <li>
              <button
                className={`btn-success btn-sm btn text-xs ${
                  !difficultyFilters.includes("easy") && "btn-outline"
                }`}
                onClick={() =>
                  handleFilterClick({
                    filter: "easy",
                    prevFilters: difficultyFilters,
                    setFilters: setDifficultyFilters,
                  })
                }
              >
                Easy
              </button>
            </li>
            <li>
              <button
                className={`btn-warning btn-sm btn text-xs ${
                  !difficultyFilters.includes("medium") && "btn-outline"
                }`}
                onClick={() =>
                  handleFilterClick({
                    filter: "medium",
                    prevFilters: difficultyFilters,
                    setFilters: setDifficultyFilters,
                  })
                }
              >
                Medium
              </button>
            </li>
            <li>
              <button
                className={`btn-error btn-sm btn text-xs ${
                  !difficultyFilters.includes("hard") && "btn-outline"
                }`}
                onClick={() =>
                  handleFilterClick({
                    filter: "hard",
                    prevFilters: difficultyFilters,
                    setFilters: setDifficultyFilters,
                  })
                }
              >
                Hard
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
