/// <reference types="vitest" />
import { vitePlugin as remix } from "@remix-run/dev";
import { flatRoutes } from "remix-flat-routes";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { coverageConfigDefaults } from "vitest/config";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

const isStorybook = process.argv[1]?.includes("storybook");

export default defineConfig({
  plugins: [
    !isStorybook &&
      remix({
        future: {
          v3_fetcherPersist: true,
          v3_relativeSplatPath: true,
          v3_throwAbortReason: true,
          v3_singleFetch: true,
          v3_lazyRouteDiscovery: true,
        },
        ignoredRouteFiles: ["**/*"],
        routes: async (defineRoutes) => flatRoutes("routes", defineRoutes),
      }),
    tsconfigPaths(),
  ],
  test: {
    coverage: {
      include: ["app/**"],
      exclude: ["**/*.stories.ts?(x)", ...coverageConfigDefaults.exclude],
    },
  },
});
