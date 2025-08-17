import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import Section from "@/components/Section";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Todd Goates`,
    description: post.excerpt || `Blog post: ${post.title}`,
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Section>
      <article className="prose prose-lg dark:prose-invert mx-auto max-w-4xl">
        <header className="mb-8 border-b border-gray-200 pb-8 dark:border-gray-700">
          <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
          {post.date && (
            <time className="text-gray-500 dark:text-gray-400">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
        </header>
        <div className="mdx-content">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </Section>
  );
}
