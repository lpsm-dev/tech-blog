import type { CollectionEntry } from "astro:content";

/**
 * Ordena uma lista de posts por data de criação, da mais recente para a mais antiga.
 * @param posts - A lista de posts a ser ordenada.
 * @returns A lista de posts ordenada por data de criação.
 */
export function sortPostsByDate(
  posts: CollectionEntry<"blog">[],
): CollectionEntry<"blog">[] {
  return [...posts].sort((a, b) => {
    const dateA = a.data.created_date ?? new Date(0);
    const dateB = b.data.created_date ?? new Date(0);
    return dateB.valueOf() - dateA.valueOf();
  });
}
