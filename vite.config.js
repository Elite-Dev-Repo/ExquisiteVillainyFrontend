import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // This maps the "@" symbol to the "src" directory
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
