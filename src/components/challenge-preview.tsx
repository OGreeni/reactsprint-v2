import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  index: number;
  objective: string;
  difficulty: "easy" | "medium" | "hard";
  tags: string[];
}

export default function ChallengePreview({
  title,
  index,
  objective,
  difficulty,
  tags,
}: Props) {
  let difficultyColor = "";
  if (difficulty === "easy") {
    difficultyColor = "text-success";
  } else if (difficulty === "medium") {
    difficultyColor = "text-warning";
  } else {
    difficultyColor = "text-error";
  }

  return (
    <div className="card shadow-md transition-colors hover:bg-base-300">
      <div className="card-body">
        <h2 className="card-title">
          {index}. {title}
        </h2>
        <p>
          <span className="font-bold">Objective:</span> {objective}
        </p>

        <div className="font-bold">
          Difficulty:{" "}
          <span className={`${difficultyColor} uppercase`}>{difficulty}</span>
        </div>
        <div className="inline">
          <span className="font-bold">Tags:</span>{" "}
          <ul className="inline">
            {tags.map((tag) => (
              <li className="inline" key={tag}>
                <Link href="/" className="link-primary">
                  #{tag}{" "}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
