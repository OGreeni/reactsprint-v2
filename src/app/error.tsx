"use client";

import { useEffect } from "react";

import Heading from "@/components/heading";

interface Props {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
    // Log the error to an error reporting service
  }, [error]);

  return (
    <div>
      <Heading className="text-center">Something went wrong!</Heading>
      <p className="text-center text-lg">
        An error occured during the rendering of this page. Please try again.
      </p>
      <p className="text-center text-lg">
        If the problem persists, please let us know by opening an issue on{" "}
        <a
          href="https://github.com/ogreeni/temp"
          target="_blank"
          rel="noreferrer"
          className="link-primary link"
        >
          GitHub
        </a>
        .
      </p>
      <button
        onClick={() => reset()}
        className="btn-primary btn mx-auto mt-10 block"
      >
        Try again
      </button>
    </div>
  );
}
