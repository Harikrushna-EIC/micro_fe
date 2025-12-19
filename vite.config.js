import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  base: "https://micro-fe-ashy.vercel.app/",
  plugins: [
    react(),
    federation({
      name: "licence",
      filename: "remoteEntry.js", // still needed for webpack hosts
      library: {
        type: "var",
        name: "licence",
      },
      exposes: {
        "./LicenceCard": "./src/LicenceCard.jsx",
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: false },
        "react-dom": { singleton: true, eager: true, requiredVersion: false },
      },
    }),
  ],
  build: {
    target: "chrome89",
  },
});
