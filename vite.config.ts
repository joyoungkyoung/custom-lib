import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";
import { viteVConsole } from "vite-plugin-vconsole";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, ".env") };

  return defineConfig({
    envDir: ".env",
    base: "/mobile",
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/assets/styles/index.scss";',
        },
      },
    },
    plugins: [
      svgr({
        exportAsDefault: true,
      }),
      react(),
      viteVConsole({
        entry: path.resolve("src/main.tsx"),
        enabled: mode === "dev",
        config: {
          maxLogNumber: 1000,
          theme: "dark",
        },
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: 3000,
      open: true,
      proxy: {
        "/api": {
          target: process.env.VITE_API_BASE_URL,
          changeOrigin: false,
          secure: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  });
};
