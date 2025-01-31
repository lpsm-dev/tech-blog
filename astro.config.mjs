import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import pagefind from "astro-pagefind";
import icon from "astro-icon";
import expressiveCode from "astro-expressive-code";
import { mermaid } from "./src/plugins/astro-mermaid";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.lpsm.cloud",
  base: "/",
  markdown: {
    remarkPlugins: [mermaid],
  },
  integrations: [
    expressiveCode(),
    mdx(),
    sitemap(),
    icon(),
    tailwind(),
    pagefind(),
  ],
  output: "static",
  prefetch: {
    defaultStrategy: "tap",
  },
});
