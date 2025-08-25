"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Section from "@/components/Section";
import Alert from "@/components/Alert";
import Badge from "@/components/Badge";
import type { BlogPost } from "@/lib/blog";

export default function BlogPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const selectedTag = searchParams.get("tag");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/blog");
        const posts = await response.json();
        setAllPosts(posts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (selectedTag) {
      const filtered = allPosts.filter(post => 
        post.tags.some(tag => tag.toLowerCase() === selectedTag.toLowerCase())
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(allPosts);
    }
  }, [selectedTag, allPosts]);

  const handleTagClick = (tag: string) => {
    const params = new URLSearchParams(searchParams);
    if (selectedTag === tag) {
      params.delete("tag");
    } else {
      params.set("tag", tag);
    }
    router.push(`/blog?${params.toString()}`);
  };

  const displayPosts = filteredPosts;

  return (
    <Section>
      <>
        <h2 className="mb-8 text-center text-4xl">Blog</h2>
        <p className="mb-8 text-center text-lg text-pretty italic">
          Just some of Todd's many thoughts about technical and non-technical
          topics.
        </p>
        {selectedTag && (
          <div className="mb-6 text-center">
            <p className="text-lg">
              Showing posts tagged with:{" "}
              <span className="font-semibold">{selectedTag}</span>
              <button
                onClick={() => handleTagClick(selectedTag)}
                className="ml-2 text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
              >
                (clear filter)
              </button>
            </p>
          </div>
        )}
        {loading ? (
          <div className="text-center">
            <p className="text-lg">Loading posts...</p>
          </div>
        ) : displayPosts.length === 0 ? (
          <Alert type="error">
            {selectedTag 
              ? `No posts found with tag "${selectedTag}". Try a different tag!`
              : "Whoops! I forgot to write something. Check back later!"
            }
          </Alert>
        ) : (
          <div className="space-y-8">
            {displayPosts.map((post) => (
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
                    <time className="mb-2 block text-sm text-gray-500 dark:text-gray-400">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  )}
                  {post.tags.length > 0 && (
                    <div className="mb-3 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <button
                          key={tag}
                          onClick={(e) => {
                            e.preventDefault();
                            handleTagClick(tag);
                          }}
                          className={`transition-colors hover:opacity-80 ${
                            selectedTag === tag ? "ring-2 ring-purple-400" : ""
                          }`}
                        >
                          <Badge>{tag}</Badge>
                        </button>
                      ))}
                    </div>
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
