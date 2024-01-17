import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/catatan-belanja/",
  build: {
    outDir: "dist",
    assetsDir: "./", // add this line
    rollupOptions: {
      input: "index.html",
    },
  },
});
