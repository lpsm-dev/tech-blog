import type { CollectionEntry } from "astro:content";
import { POSTS_PER_PAGE } from "../consts";

export function paginatePosts(posts: CollectionEntry<"blog">[]) {
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const pages = Array.from({ length: totalPages }, (_, i) => {
    const start = i * POSTS_PER_PAGE;
    const end = start + POSTS_PER_PAGE;
    return {
      page: i + 1,
      posts: posts.slice(start, end),
    };
  });
  return pages;
}
