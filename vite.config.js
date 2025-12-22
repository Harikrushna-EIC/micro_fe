import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  base: "https://micro-fe-ashy.vercel.app/",
  server: {
    port: 2004,
    origin: "https://micro-fe-ashy.vercel.app", // ensures correct URLs
    cors: true,
  },
  plugins: [
    react(),
    federation({
      name: "licence",
      filename: "remoteEntry.js",
      exposes: {
        "./LicenceCard": "./src/LicenceCard.jsx",
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: false },
        "react-dom": { singleton: true, eager: true, requiredVersion: false },
      },
      css: {
        inject: true,
      },
    }),
  ],
  build: {
    target: "chrome89",
  },
});
