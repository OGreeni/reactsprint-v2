import Link from "next/link";
import React from "react";

import animatedShapes from "@/json/animated-shapes.json";

import LottieWrapper from "./wrappers/lottie-wrapper";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn-ghost btn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <Link href="/challenge-board">Challenge Board</Link>
            </li>
            <li>
              <Link href="/contribute" className="justify-between">
                Contribute
              </Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn-ghost btn text-xl normal-case">
          <LottieWrapper
            play
            loop
            animationData={animatedShapes}
            className="h-10 w-10"
          />
          <span className="animate-text bg-gradient-to-r from-primary via-pink-500 to-purple-500 bg-clip-text text-transparent">
            ReactSprint
          </span>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Challenge Board</a>
          </li>
          <li>
            <a>Contribute</a>
          </li>
          <li>
            <a>Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
