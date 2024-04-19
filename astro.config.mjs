import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  site: "https://seallity.gitlab.io",
  base: "tu1millon",
  server: {
    // delete server, antes de subir cambios.
    // port: 3000,
    host: "0.0.0.0",
  },
});
