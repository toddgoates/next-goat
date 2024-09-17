import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Todd Goates | Utah-Based, Full-Stack Developer",
  description:
    "The portfolio website of Todd Goates, a Full-Stack Web Developer from Utah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#a855f7" />
        <meta property="og:url" content="https://toddgoates.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Todd Goates | Utah-Based, Full-Stack Developer"
        />
        <meta
          property="og:description"
          content="The portfolio website of Todd Goates, a Full-Stack Web Developer from Utah"
        />
        <meta property="og:image" content="/images/meta-tag.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="toddgoates.com" />
        <meta property="twitter:url" content="https://toddgoates.com" />
        <meta
          name="twitter:title"
          content="Todd Goates | Utah-Based, Full-Stack Developer"
        />
        <meta
          name="twitter:description"
          content="The portfolio website of Todd Goates, a Full-Stack Web Developer from Utah"
        />
        <meta name="twitter:image" content="/images/meta-tag.png" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-touch-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon-180x180.png"
        />
      </head>
      <body className="h-full bg-gray-100 dark:bg-gray-700">
        <ThemeProvider attribute="class">
          <div className="flex flex-col justify-between h-full">
            <Navbar />
            <main className="grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
