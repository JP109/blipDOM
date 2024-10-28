import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.js",
      name: "BlipDOM",
      fileName: (format) => `my-framework.${format}.js`,
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
  server: {
    open: "/examples/example.html",
    port: 3000,
  },
});
