import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  server: {
    origin: "http://localhost:2004",
    port: 2004,
  },
  base: "http://localhost:2004/",
  plugins: [
    react(),
    federation({
      name: "licence",
      manifest: true, // 🔑 generates mf-manifest.json
      exposes: {
        "./LicenceCard": "./src/LicenceCard.jsx",
      },
      shared: {
        react: { singleton: true, eager: true },
        "react-dom": { singleton: true, eager: true },
      },
    }),
  ],
  build: {
    target: "chrome89",
  },
});
