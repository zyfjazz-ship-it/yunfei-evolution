import type { CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;

export const sortPosts = (posts: BlogPost[]) => [...posts].sort((a, b) => {
  const dateDifference = b.data.date.valueOf() - a.data.date.valueOf();
  return dateDifference || a.id.localeCompare(b.id);
});

export const tagSlug = (tag: string) => tag
  .trim()
  .toLocaleLowerCase()
  .normalize("NFKC")
  .replace(/\s+/g, "-")
  .replace(/[^\p{Letter}\p{Number}-]/gu, "")
  .replace(/-+/g, "-")
  .replace(/^-|-$/g, "");

export const postSlug = (post: BlogPost) => post.id.replace(`${post.data.lang}/`, "");
