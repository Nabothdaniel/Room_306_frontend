import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VitePWA(manifestForPlugin), react()],
  server: {
    proxy: {
      // Proxy requests for images to a different server
      "/media": {
        target: "https://room35backend.onrender.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/images/, ""),
      },
    },
  },
});
