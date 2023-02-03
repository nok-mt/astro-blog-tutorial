import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: "https://astro-blog-tutorial-202302.netlify.app/tags/",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>ja</language>`,
  });
}
