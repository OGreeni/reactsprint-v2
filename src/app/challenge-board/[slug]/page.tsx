import React from "react";

import Heading from "@/components/heading";
import WrappedSandpack from "@/components/wrappers/sandpack-wrapper";
import { formatCode } from "@/utils/helpers";

interface Props {
  params: {
    slug: string;
  };
}

// TODO: fetch data from Contentful API and add react-query

const mockChallenge = {
  title: "Challenge 1",
  slug: "challenge-1",
  index: 1,
  objective: "Create a simple website",
  difficulty: "easy",
  tags: ["html", "css", "javascript"],
  code: formatCode(
    `import React from "react";

        export default function App() {
            return (
                <div>
                    <h1>Hello World!</h1>
                </div>
            );
        }`
  ),
  rating: 4.5,
  hints: [
    "Use the `<h1>` tag to create a heading",
    "Use the `<div>` tag to create a container",
  ],
};

export default function Page({ params: { slug } }: Props) {
  return (
    <div className="mx-auto max-w-7xl p-2">
      {/* 
        Todo: add a sidebar with the challenge details
        and a button to reveal the solution
        and a button to reveal the hints
        and a button to mark the challenge as complete
        and rating stars
    */}
      <Heading className="text-center">{slug}</Heading>
      <div className="mockup-window border border-base-300">
        <WrappedSandpack
          template="react"
          options={{
            externalResources: [
              "https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp",
            ],
            showTabs: true,
          }}
          files={{
            "/App.js": mockChallenge.code,
          }}
        />
      </div>
    </div>
  );
}
