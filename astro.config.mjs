import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import netlify from '@astrojs/netlify';
import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  site: "https://marcomattiuz.dev/",
  integrations: [preact(), db()]
});