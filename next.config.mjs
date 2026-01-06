import { createMDX } from "fumadocs-mdx/next";

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  reactCompiler: true,
  typedRoutes: true,
  experimental: {
    typedEnv: true,
  },
};

const withMDX = createMDX({
  configPath: "source.config.ts",
});

export default withMDX(config);
