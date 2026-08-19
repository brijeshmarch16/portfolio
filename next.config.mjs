/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  reactCompiler: true,
  typedRoutes: true,
  experimental: {
    typedEnv: true,
    // TS is aliased to @typescript/typescript6 (API for typescript-eslint)
    // with native TS 7 as @typescript/native for `tsc`; Next's CLI checker
    // needs `typescript/bin/tsc`, so type-check via the TS 6 API instead.
    // Drop the alias and this flag once TS 7.1 + typescript-eslint support it.
    useTypeScriptCli: false,
  },
};

export default config;
