import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), Pages(), Layouts()],
  // base: "/",
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "https://your-railway-backend-url", // Replace with your actual Railway backend URL
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        api: "modern-compiler",
      },
    },
  },
  build: {
    outDir: "dist",
  },
});
