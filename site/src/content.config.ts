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
    bookKey: z.string().optional(),
  }),
});

const bookPages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/books" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    bookTitle: z.string(),
    bookKey: z.string(),
    lang: z.enum(["zh", "en"]),
    volume: z.number().int().nonnegative(),
    volumeTitle: z.string(),
    chapter: z.number().int().nonnegative(),
    order: z.number().int().nonnegative(),
    slug: z.string(),
    draft: z.boolean().default(false),
    sourceVersion: z.string(),
  }),
});

const courses = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/courses" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(["zh", "en"]),
    track: z.enum(["history", "economy", "math"]),
    lesson: z.number().int().positive(),
    tags: z.array(z.string()).default([]),
    image: z.string(),
    imageAlt: z.string(),
    imageCaption: z.string(),
    imageCreditUrl: z.string().url().optional(),
    sourceNote: z.string().default("根据过往公开课聊天记录整理"),
    quiz: z.object({
      questions: z.array(z.object({
        prompt: z.string(),
        options: z.array(z.string()).min(2),
        answer: z.number().int().nonnegative(),
        explanation: z.string(),
      })).min(1),
      reflectionPrompt: z.string(),
      submitLabel: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { blog, works, bookPages, courses };
