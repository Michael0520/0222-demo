import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import path from "path";

export default defineConfig({
  //   base: "/qtcomm-frontend/",
  build: {
    outDir: "dist",
    rollupOptions: {
      // 多頁面打包
      //       input: {
      //         main: resolve(__dirname, "index.html"),
      //         article: resolve(__dirname, "article/index.html"),
      //       },
      // 保留原檔案名稱，不要預設 vite 幫我帶上隨機的 hash
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },

  resolve: {
    alias: {
      "/src": path.resolve(__dirname, "src"),
      "/images": path.resolve(__dirname, "src/assets/images"),
      "/styles": path.resolve(__dirname, "src/assets/styles"),
    },
  },
  // global css
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "@src/assets/styles/app.scss";`,
      },
    },
  },

  server: {
    port: 8080,
    host: "0.0.0.0",
    open: true,
  },

  plugins: [
    createHtmlPlugin({
      inject: {
        ejsOptions: {
          views: ["./partials"],
        },
      },
    }),
  ],
});
