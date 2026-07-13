import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(["zh", "en"]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    series: z.string().optional(),
    series_order: z.number().int().positive().optional(),
    translationKey: z.string(),
  }),
});

const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/works" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    createdAt: z.coerce.date(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    lang: z.enum(["zh", "en"]),
    draft: z.boolean().default(false),
    translationKey: z.string(),
    relatedPosts: z.array(z.string()).default([]),
    category: z.enum(["book", "technology", "video", "creative"]).optional(),
  }),
});

export const collections = { blog, works };
