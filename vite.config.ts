import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // 🔹 Importante para que las rutas funcionen en GitHub Pages
  publicDir: "public", // 🔹 Asegura que Vite copie archivos estáticos

  build: {
    target: "esnext",
    assetsInlineLimit: 0, 
    rollupOptions: {
      output: {
        entryFileNames: `[name].mjs`,
        chunkFileNames: `[name].mjs`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
});
