import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import visualizer from "rollup-plugin-visualizer";
import path from "path";
import { configDefaults } from "vitest/config";

export default defineConfig(({ mode }) => {
  const plugins: any[] = [react()];

  if (process.env.ANALYZE === "true") {
    plugins.push(
      visualizer({
        open: true,
        filename: "bundle-report.html",
        gzipSize: true,
        brotliSize: true,
      }) as any
    );
  }

  return {
    plugins,
    base: "./",
    resolve: {
      alias: {
        "@store": path.resolve(__dirname, "src/store"),
        "@components": path.resolve(__dirname, "src/components"),
        "@features": path.resolve(__dirname, "src/features"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
        "@services": path.resolve(__dirname, "src/services"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@pages": path.resolve(__dirname, "src/pages"),
      },
    },
    build: {
      sourcemap: false,
      outDir: "dist",
      emptyOutDir: true,
      rollupOptions: {
        treeshake: true,
      },
    },
    publicDir: "public",
    server: {
      port: 3000,
      open: true,
      host: true,
      allowedHosts: ["7d75-79-110-129-250.ngrok-free.app"],
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/test/setup.ts",
      exclude: [...configDefaults.exclude, "node_modules/**"],
    },
  };
});
