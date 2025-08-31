import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
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
