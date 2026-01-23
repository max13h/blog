import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { articlesSchema } from "./data/validation.ts"

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/articles" }),
  schema: articlesSchema,
})

export const collections = { articles }
