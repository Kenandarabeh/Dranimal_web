import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: process.env.NODE_ENV === 'production' ? '/Dranimal_web/' : '/',
  server: {
    host: "::",
    port: 8080,
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  preview: {
    port: 5000,
    open: true,
  }
}));
