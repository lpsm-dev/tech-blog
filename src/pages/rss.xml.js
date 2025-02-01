import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { getUrl } from "../utils/url";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
  const posts = await getCollection("blog", ({ data }) => {
    return data.publish !== false;
  });

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description || "",
      pubDate: post.data.created_date || new Date(),
      link: getUrl(`/${post.id}/`),
      author: post.data.author,
      categories: post.data.tags || [],
    })),
  });
}
