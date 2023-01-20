"use client";
import Link from "next/link";
import React, { useState } from "react";

import ChallengeList from "@/components/challenge-list";
import Heading from "@/components/heading";
import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Heading className="text-center">Challenge Board</Heading>
      <div className="relative mb-20 p-2 lg:mb-0">
        <div
          className={`absolute left-[0.6rem] top-[4.6rem] z-10 h-[69.9vh] bg-gray-50 shadow-2xl transition-all duration-200 ease-in-out lg:hidden ${
            !isSidebarOpen
              ? "-translate-x-20 opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          <Sidebar />
        </div>
        <div className="mx-auto h-[70vh] max-w-7xl grid-cols-[1fr_8fr] grid-rows-[1fr_7fr] lg:grid lg:shadow-xl">
          <div className={`row-span-2 hidden lg:block`}>
            <Sidebar />
          </div>
          <div className="flex items-center rounded-tr border border-primary p-2">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-6 w-6 lg:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <Topbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
          <div className="col-start-2 row-start-2 flex h-full flex-col gap-8 overflow-y-auto overflow-x-hidden rounded-br border-x border-b border-primary p-2">
            <ChallengeList searchQuery={searchQuery} />
          </div>
        </div>
      </div>
    </>
  );
}
