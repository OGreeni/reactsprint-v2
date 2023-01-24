import React from "react";

import Heading from "@/components/heading";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <Heading>Challenge Board</Heading>
      <progress className="progress w-96"></progress>
    </div>
  );
}
