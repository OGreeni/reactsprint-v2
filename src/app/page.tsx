import { Inter } from "@next/font/google";
import { createClient } from "contentful";
import Link from "next/link";

import LottieWrapper from "@/components/wrappers/lottie-wrapper";
import animatedShapes from "@/json/animated-shapes.json";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  const response = await client.getEntries({ content_type: "challenge" });

  console.log(response.items[0].fields);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <LottieWrapper
          play
          loop
          animationData={animatedShapes}
          className="w-96 lg:w-auto"
        />
        <div>
          <p>Hey there 👋, welcome to:</p>
          <h1 className="text-5xl font-bold">ReactSprint</h1>
          <p className="py-6">
            Level up your React.js skills with free, engaging challenges.
          </p>
          <Link href="/challenge-board">
            <button className="btn-primary btn">Explore Challenges</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
