import { createClient } from 'contentful';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default async function Home() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  const response = await client.getEntries({ content_type: 'challenge' });

  console.log(response.items[0].fields);

  return (
    <div>
      {response.items.map((challenge) =>
        JSON.stringify(challenge.toPlainObject)
      )}
    </div>
  );
}
