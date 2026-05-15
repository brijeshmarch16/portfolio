/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  reactCompiler: true,
  typedRoutes: true,
  async redirects() {
    return [
      {
        source: "/blog/building-ai-interview-self-hosted-ai-voice-interviews",
        destination: "/blog/foloup-alternative-self-hosted-ai-interview-platform",
        permanent: true,
      },
      {
        source: "/blog/built-an-open-source-ai-voice-interview-platform",
        destination: "/blog/foloup-alternative-self-hosted-ai-interview-platform",
        permanent: true,
      },
      {
        source:
          "/blog/building-a-self-hosted-ai-voice-interview-platform-inspired-by-foloup",
        destination: "/blog/foloup-alternative-self-hosted-ai-interview-platform",
        permanent: true,
      },
    ];
  },
  experimental: {
    typedEnv: true,
  },
};

export default config;
