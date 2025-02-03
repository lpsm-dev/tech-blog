import type { CollectionEntry } from "astro:content";
import { POSTS_PER_PAGE } from "../consts";

export function paginatePosts(posts: CollectionEntry<"blog">[], page: number) {
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  return posts.slice(start, end);
}
