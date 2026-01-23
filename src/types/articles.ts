import { z } from "astro/zod"
import type { articlesSchema } from "../data/validation.ts"

export type Article = z.infer<typeof articlesSchema>
