import type { Metadata } from "next";
import Link from "next/link";

import Section from "@/components/Section";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Todd Goates | Blog",
  description: "Thoughts and writings by Todd Goates",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <Section>
      <>
        <h2 className="mb-12 text-center text-4xl">Blog</h2>
        {posts.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400">
            Whoops! I forgot to write something. Check back later!
          </p>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="border-b border-gray-200 bg-gray-50 p-5 shadow-lg last:border-b-0 dark:border-gray-700 dark:bg-slate-800"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block hover:opacity-80"
                >
                  <h3 className="mb-2 text-2xl font-semibold group-hover:text-purple-600 dark:group-hover:text-purple-400">
                    {post.title}
                  </h3>
                  {post.date && (
                    <time className="mb-4 block text-sm text-gray-500 dark:text-gray-400">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  )}
                  {post.excerpt && (
                    <p className="text-gray-600 dark:text-gray-300">
                      {post.excerpt}
                    </p>
                  )}
                </Link>
              </article>
            ))}
          </div>
        )}
      </>
    </Section>
  );
}
