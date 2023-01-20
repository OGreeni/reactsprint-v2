import React from "react";

const categories = [
  "Hooks",
  "State",
  "Props",
  "Event Handling",
  "Effects",
  "Memo",
  "Debugging",
  "Refactoring",
  "Optimization",
  "Forms",
  "Pure Components",
  "Context",
  "Refs",
  "Error Boundaries",
  "Suspense",
] as const;

const difficulties = ["easy", "medium", "hard"] as const;

export type Category = (typeof categories)[number];
export type Difficulty = (typeof difficulties)[number];

export default function Sidebar() {
  return (
    <>
      {/* todo: moobile sidebar */}
      <div className="h-full border-primary p-2 lg:block lg:rounded-l lg:border-y lg:border-l">
        <div className="h-1/2 overflow-auto border-b border-primary text-center">
          <div className="text-md mb-5 font-bold">Categories</div>
          <ul className="flex flex-col gap-1 p-1">
            {categories.map((category) => (
              <li key={category}>
                <button className="btn-outline btn-primary btn-sm btn h-max text-xs">
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
              <button className="btn-outline btn-success btn-sm btn text-xs">
                Easy
              </button>
            </li>
            <li>
              <button className="btn-outline btn-warning btn-sm btn text-xs">
                Medium
              </button>
            </li>
            <li>
              <button className="btn-outline btn-error btn-sm btn text-xs">
                Hard
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
