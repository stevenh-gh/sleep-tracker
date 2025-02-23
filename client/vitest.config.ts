import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: ["./src/tests/setup.ts"],
    environment: "jsdom",
    globals: true,
  },
});