import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS()],
  esbuild: {
    minify: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "ViteUmdBug"
    },
    rollupOptions: {
      external: ["vue"],
      output: [{
        format: "esm",
        esModule: true,
        exports: "named",
        globals: {
          vue: "Vue"
        }
      }, {
        format: "umd",
        inlineDynamicImports: true,
        interop: "esModule",
        exports: "named",
        globals: {
          vue: "Vue"
        }
      }],

    }
  },
});
