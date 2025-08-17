import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  content: string;
}

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title || slug,
        date: matterResult.data.date || "",
        excerpt: matterResult.data.excerpt || "",
        content: matterResult.content,
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      slug,
      title: matterResult.data.title || slug,
      date: matterResult.data.date || "",
      excerpt: matterResult.data.excerpt || "",
      content: matterResult.content,
    };
  } catch (error) {
    return null;
  }
}
