import "../styles/global.css";

import { ClerkProvider } from "@clerk/nextjs/app-beta";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head />
        <body className="flex min-h-screen flex-col">
          <Navbar />
          <main className="grow">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
