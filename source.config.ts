import {
  defineCollections,
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from "fumadocs-mdx/config";
import lastModified from "fumadocs-mdx/plugins/last-modified";
import z from "zod";

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
  docs: {
    schema: frontmatterSchema,
  },
  meta: {
    schema: metaSchema,
  },
});

export const blogPosts = defineCollections({
  type: "doc",
  dir: "src/content/blog",
  schema: frontmatterSchema.extend({
    coverImage: z.string().optional(),
    publishedAt: z.string().optional(),
    status: z.enum(["published", "draft"]).optional(),
    author: z
      .object({
        name: z.string(),
        avatar: z.string(),
        x: z.string(),
        linkedin: z.string(),
      })
      .optional(),
  }),
});

export default defineConfig({
  plugins: [lastModified()],
});
