import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { RENDER_URL, LOCAL_URL } from "./url.js";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: `${RENDER_URL}`,
        changeOrigin: true,
      },
    },
  },
});
