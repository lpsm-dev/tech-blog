import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// Custom date schema that handles invalid dates gracefully
const dateSchema = z.preprocess(
  (val) => {
    // Ensure val is a type that can be passed to new Date()
    if (
      typeof val === "string" ||
      typeof val === "number" ||
      val instanceof Date
    ) {
      const date = new Date(val);
      return isNaN(date.getTime()) ? null : date;
    }
    return null;
  },
  z.date().nullable().default(new Date()), // Provide a valid date object as the default value
);

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    publish: z.boolean().default(true),
    created_date: dateSchema,
    updated_date: dateSchema,
    featured_image: z.string().optional().nullable(),
    featured_image_alt: z.string().optional().nullable(),
    slug: z.string().optional().nullable(),
    tags: z.array(z.string()).default([]).nullable(),
    // SEO specific fields
    meta_title: z.string().optional().nullable(),
    meta_description: z.string().optional().nullable(),
    canonical_url: z.string().optional().nullable(),
    og_title: z.string().optional().nullable(),
    og_description: z.string().optional().nullable(),
    og_image: z.string().optional().nullable(),
    og_type: z.string().default("article"),
    twitter_title: z.string().optional().nullable(),
    twitter_description: z.string().optional().nullable(),
    twitter_image: z.string().optional().nullable(),
    twitter_card: z.string().default("summary_large_image"),
    keywords: z.array(z.string()).default([]).nullable(),
    author: z.string().optional().nullable(),
    reading_time: z.number().optional().nullable(),
    no_index: z.boolean().default(false),
  }),
});

export const collections = { blog };
