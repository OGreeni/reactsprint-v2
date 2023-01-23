import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export const getEntries = async ({ contentType }: { contentType: string }) => {
  const entries = await client.getEntries({
    content_type: contentType,
  });

  return entries;
};

export const getEntry = async ({ id }: { id: string }) => {
  const entry = await client.getEntry(id);
};
