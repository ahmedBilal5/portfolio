import { readdir } from "fs/promises";
import path from "path";
import { Post } from "../../blog/[slug]/_utils/getPost";

export async function getAllPosts() {
  const postsPath = path.join(process.cwd(), "public/posts");

  // Get all MDX files
  const files = (await readdir(postsPath, { withFileTypes: true }))
    .filter((file) => file.isFile() && file.name.endsWith(".mdx"))
    .map((file) => file.name);

  // Retrieve metadata from MDX files
  const posts = await Promise.all(
    files.map(async (filename) => {
      const slug = filename.replace(/\.mdx$/, ""); // Remove .mdx extension to get slug
      const { metadata } = await import(`../../../public/posts/${filename}`);
      return { slug, ...metadata };
    }),
  );

  // Sort posts from newest to oldest
  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return posts as Post[];
}