import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  test: {
    setupFiles: ["./test-setup.ts"],
    browser: {
      enabled: true,
      provider: "playwright",
      // https://vitest.dev/guide/browser/playwright
      instances: [
        {
          browser: "chromium",
          headless: true,
        },
      ],
    },
    coverage: {
      exclude: [
        "next.config.ts",
        "postcss.config.mjs",
        "tailwind.config.*",
        "src/app/layout.tsx",
        "**/*.d.ts",
        "node_modules/**",
        "coverage/**",
        "public/**",
        "**/*.config.*",
        ".next/**",
        "out/**",
      ],
    },
  },
});
