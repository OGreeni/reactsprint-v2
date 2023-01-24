import React from "react";

import { getEntries } from "@/service/sdk";

import Content from "./content";

export default async function Page() {
  const entries = await getEntries({
    contentType: "challenge",
  });

  return <Content challenges={entries} />;
}
