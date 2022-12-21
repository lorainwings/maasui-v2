/// <reference types="vitest" />

import { defineConfig, UserConfigExport } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import dts from "vite-plugin-dts";
import Unocss from "./config/unocss";

export const config = {
  test: {
    globals: true,
    environment: "happy-dom",
    transformMode: {
      web: [/\.[tj]sx$/],
    },
    coverage: {
      provider: "istanbul", // or 'c8',
      reporter: ["text", "json", "html"],
    },
  },

  plugins: [
    vue(),
    vueJsx(),
    Unocss(),
    dts({
      outputDir: "./dist/types",
      insertTypesEntry: false, // 插入TS 入口
      copyDtsFiles: true, // 是否将源码里的 .d.ts 文件复制到 outputDir
    }),
  ],

  build: {
    rollupOptions: {
      external: ["vue", "vue-router"],
      output: {
        exports: "named",
        assetFileNames: "[name][extname]",
        globals: {
          vue: "Vue",
        },
      },
    },
    minify: "terser",
    // sourcemap: true, // 输出单独 source文件
    cssCodeSplit: true,
    brotliSize: true,
    lib: {
      entry: "./src/entry.ts",
      name: "MaasUI",
      fileName: "maas-ui",
      formats: ["es", "umd", "iife"],
    },
    outDir: "./dist",
  },
};

export default defineConfig(config as UserConfigExport);
