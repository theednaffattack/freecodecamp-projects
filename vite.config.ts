import { globSync } from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: globSync(path.resolve(__dirname, "src", "*.html")),
    },
    outDir: "dist",
    emptyOutDir: true,
  },
  optimizeDeps: {
    entries: "src/**/*{.html,.css,.js}",
  },
});
