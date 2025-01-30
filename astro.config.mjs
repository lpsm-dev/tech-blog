// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import expressiveCode from "astro-expressive-code";
import remarkMermaid from "remark-mermaid";

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://blogger.lpsm.cloud",
  base: "/",
  markdown: {
    remarkPlugins: [
      [
        remarkMermaid,
        {
          simple: true,
          wrap: null,
          mermaidConfig: {
            theme: "default",
            securityLevel: "loose",
            startOnLoad: true,
          },
        },
      ],
    ],
  },
  integrations: [
    expressiveCode(),
    mdx(),
    sitemap(),
    tailwind(),
    sentry(),
    spotlightjs(),
  ],
  output: "static",
});
