import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { SanityLive } from "@/sanity/lib/live";

import "@/app/globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
});

// const italiana = Italiana({
//   variable: "--font-italiana",
//   weight: ["400"],
// });

// const rockSalt = Rock_Salt({
//   variable: "--font-rock-salt",
//   weight: ["400"],
// });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://prestonlloyd.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Preston Lloyd — Software Engineer & Designer",
    template: "%s | Preston Lloyd",
  },
  description: "Preston Lloyd is a software engineer based in the US. Building web applications with React, Next.js, and modern tools.",
  openGraph: {
    title: "Preston Lloyd — Software Engineer & Designer",
    description: "Preston Lloyd is a software engineer based in the US.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.variable} antialiased`}>
        <a href="#main" className="sr-only">
          Skip to main content
        </a>

        <Header />

        <main id="main">
          {children}
        </main>

        <Footer />
      </body>

      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
      )}
      <SanityLive />
    </html>
  );
}
