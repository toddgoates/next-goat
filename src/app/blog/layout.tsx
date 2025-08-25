import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Todd Goates | Blog",
  description: "Thoughts and writings by Todd Goates",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}