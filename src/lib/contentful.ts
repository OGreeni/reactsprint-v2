import { createClient } from "contentful";
import { z } from "zod";

import { categories, difficulties } from "@/constants/challenge-options";

const challengeDocumentSchema = z.object({
  title: z.string(),
  slug: z.string(),
  objective: z.string(),
  difficulty: z.enum(difficulties),
  categories: z.array(z.enum(categories)),
  jsStarter: z.string(),
  jsSolution: z.string(),
  tsStarter: z.string(),
  tsSolution: z.string(),
  hints: z.array(z.string()),
});

export type ChallengeDocument = z.infer<typeof challengeDocumentSchema>;

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export const getEntries = async ({ contentType }: { contentType: string }) => {
  const entries = await client.getEntries({
    content_type: contentType,
  });

  return entries.items.map((entry) => {
    const document = challengeDocumentSchema.parse(entry.fields);

    return {
      id: entry.sys.id,
      ...document,
    };
  });
};

export const getEntryById = async ({ id }: { id: string }) => {
  const entry = await client.getEntry(id);
  const document = challengeDocumentSchema.parse(entry.fields);

  return {
    id: entry.sys.id,
    ...document,
  };
};

export const getEntryByFilter = async ({
  contentType,
  filterType,
  filterValue,
}: {
  contentType: string;
  filterType: string;
  filterValue: string;
}) => {
  const filterQuery = "fields." + filterType;
  const queryObject = {
    content_type: contentType,
    [filterQuery]: filterValue,
  };

  const entries = await client.getEntries(queryObject);

  const entry = entries.items[0];
  const document = challengeDocumentSchema.parse(entry.fields);

  return {
    id: entry.sys.id,
    ...document,
  };
};
