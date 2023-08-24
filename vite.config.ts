import react from "@vitejs/plugin-react";
import { join } from "path";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

import postcss from "./postcss.config";

export default defineConfig({
  server: {
    port: 3000,
    host: true
  },
  plugins: [tsconfigPaths(), react(), checker({ typescript: true })],
  build: {
    sourcemap: true,
    target: "es2021",
    outDir: "build",
    chunkSizeWarningLimit: 2000,
  },
  test: {
    environment: "jsdom",
    globals: true,
    watch: false,
  },
  css: {
    postcss,
  },
  resolve: {
    alias: {
      src: join(__dirname, "src"),
    },
  },
});
