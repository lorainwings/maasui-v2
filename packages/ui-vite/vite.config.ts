/// <reference types="vitest" />

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocss";

export default defineConfig({
  test: {
    globals: true,
    environment: "happy-dom",
    transformMode: {
      web: [/\.[tj]sx$/],
    },
  },

  plugins: [vue(), vueJsx(), Unocss()],

  build: {
    rollupOptions: {
      external: ["vue", "vue-router"],
      output: {
        assetFileNames: "assets/[name][extname]",
        globals: {
          vue: "Vue",
        },
      },
    },
    minify: "terser",
    sourcemap: true, // 输出单独 source文件
    cssCodeSplit: true,
    lib: {
      entry: "./src/entry.ts",
      name: "MaasUI",
      fileName: "maas-ui",
      formats: ["es", "umd", "iife"],
    },
  },
});
