"use client";
import Link from "next/link";
import React, { useState } from "react";

import ChallengeList from "@/components/challenge-list";
import Heading from "@/components/heading";
import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Heading className="text-center">Challenge Board</Heading>
      <div className="p-2">
        <div className="mx-auto grid h-[70vh] max-w-7xl grid-cols-[1fr_8fr] grid-rows-[1fr_7fr] shadow-xl">
          <div className="row-span-2">
            <Sidebar />
          </div>
          <div className="flex items-center rounded-tr border border-primary p-2">
            <Topbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
          <div className="col-start-2 row-start-2 flex h-full flex-col gap-8 overflow-scroll rounded-br border-x border-b border-primary p-2">
            <ChallengeList searchQuery={searchQuery} />
          </div>
        </div>
      </div>
    </>
  );
}
