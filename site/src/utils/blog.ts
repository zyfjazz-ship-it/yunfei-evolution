import type { CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;

export const sortPostsByDate = (posts: BlogPost[]) => [...posts].sort((a, b) => {
  const dateDifference = b.data.date.valueOf() - a.data.date.valueOf();
  return dateDifference || a.id.localeCompare(b.id);
});

export const sortPosts = (posts: BlogPost[]) => {
  const groups = new Map<string, { posts: BlogPost[]; latestDate: number; series?: string }>();

  for (const post of posts) {
    const series = post.data.series?.trim();
    const key = series ? `series:${post.data.lang}:${series}` : `post:${post.id}`;
    const group = groups.get(key) ?? { posts: [], latestDate: 0, series };

    group.posts.push(post);
    group.latestDate = Math.max(group.latestDate, post.data.date.valueOf());
    groups.set(key, group);
  }

  return [...groups.values()]
    .sort((a, b) => b.latestDate - a.latestDate || (a.series ?? a.posts[0].id).localeCompare(b.series ?? b.posts[0].id))
    .flatMap((group) => {
      if (!group.series) return sortPostsByDate(group.posts);

      return [...group.posts].sort((a, b) => {
        const orderDifference = (a.data.series_order ?? Number.MAX_SAFE_INTEGER)
          - (b.data.series_order ?? Number.MAX_SAFE_INTEGER);
        const dateDifference = b.data.date.valueOf() - a.data.date.valueOf();
        return orderDifference || dateDifference || a.id.localeCompare(b.id);
      });
    });
};

export const tagSlug = (tag: string) => tag
  .trim()
  .toLocaleLowerCase()
  .normalize("NFKC")
  .replace(/\s+/g, "-")
  .replace(/[^\p{Letter}\p{Number}-]/gu, "")
  .replace(/-+/g, "-")
  .replace(/^-|-$/g, "");

export const postSlug = (post: BlogPost) => post.id.replace(`${post.data.lang}/`, "");
