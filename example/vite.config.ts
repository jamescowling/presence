import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    conditions: ["@convex-dev/component-source"],
    alias: {
      "@": "/src",
    },
  },
});
