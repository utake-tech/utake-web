import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  srcDir: "./src",
  output: "static",
  adapter: vercel(),
});
