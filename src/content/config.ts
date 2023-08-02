import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    cover: z.string().optional(),
    description: z.string(),
  }),
});

export const collections = { blog: blog };
