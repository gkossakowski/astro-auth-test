import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import clerk from "astro-clerk-auth";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [clerk(), react()],
  output: "server",
  adapter: vercel()
});