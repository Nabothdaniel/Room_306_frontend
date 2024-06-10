import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // Proxy requests for images to a different server
      "/media": {
        target: "https://room35backend.onrender.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/images/, ""),
      },
    },
  },
  preview: {
    port: 8080,
  },
  build: {
    proxy: {
      // Proxy requests for images to a different server
      "/media": {
        target: "https://room35backend.onrender.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/images/, ""),
      },
    },
  },
  plugins: [react()],
});
