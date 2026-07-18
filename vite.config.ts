import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import prerenderHead from "./vite-plugin-prerender";

export default defineConfig({
  plugins: [react(), prerenderHead()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
