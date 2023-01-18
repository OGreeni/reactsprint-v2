import Link from "next/link";
import React from "react";

import ChallengePreview from "@/components/challenge-preview";
import Heading from "@/components/heading";
import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

const challengeMock = {
  title: "Challenge 1",
  slug: "challenge-1",
  index: 1,
  objective: "Create a simple website",
  difficulty: "easy",
  tags: ["html", "css", "javascript"],
};
const challengeArrayMock = new Array(5).fill(challengeMock);

export default function Page() {
  return (
    <>
      <Heading className="text-center">Challenge Board</Heading>
      <div className="mx-auto grid h-[70vh] max-w-7xl grid-cols-[1fr_8fr] grid-rows-[1fr_7fr] shadow-md">
        <div className="row-span-2">
          <Sidebar />
        </div>
        <div className="flex items-center rounded-tr border border-primary p-2">
          <Topbar />
        </div>
        <div className="col-start-2 row-start-2 flex h-full flex-col gap-8 overflow-scroll rounded-br border-x border-b border-primary p-2">
          {challengeArrayMock.map((challenge) => (
            <Link href={challenge.slug} key={challenge.index}>
              <ChallengePreview {...challenge} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
