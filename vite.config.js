import { defineConfig } from "vite";


export default defineConfig({
    plugins: [],
    server: { port: 1337 },
    build: { outDir: "dist" },
    root: __dirname,
    __dirname: __dirname,
    __filename: __filename,
    // base: "/",
    // publicDir: "public",
    // assetsInclude: "public",
    // assetsDir: "assets",
    // css: { preprocessorOptions: { scss: { additionalData: "@import 'src/styles/variables.scss';" } } },
    // resolve: { alias: { "@": "/src" } },
});
