import type { CollectionEntry } from "astro:content"

export const sortArticleByPublicationDate = (
  a: CollectionEntry<"articles">,
  b: CollectionEntry<"articles">,
) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
