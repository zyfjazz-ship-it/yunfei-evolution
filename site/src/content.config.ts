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

const courses = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/courses" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(["zh", "en"]),
    track: z.enum(["history", "economy"]),
    lesson: z.number().int().positive(),
    tags: z.array(z.string()).default([]),
    image: z.string(),
    imageAlt: z.string(),
    imageCaption: z.string(),
    imageCreditUrl: z.string().url().optional(),
    sourceNote: z.string().default("根据过往公开课聊天记录整理"),
  }),
});

export const collections = { blog, works, courses };
