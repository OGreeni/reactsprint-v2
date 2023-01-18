"use client";
import { Sandpack, SandpackProps } from "@codesandbox/sandpack-react";
import React from "react";

export default function SandpackWrapper(props: SandpackProps) {
  return <Sandpack {...props} />;
}
