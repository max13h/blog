// @ts-check
import { defineConfig } from "astro/config"

import vue from "@astrojs/vue"

import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
  site: "https://blog.hmae.fr",
  integrations: [
    vue(),
    icon({
      iconDir: "src/assets/icons",
    }),
  ],
})
