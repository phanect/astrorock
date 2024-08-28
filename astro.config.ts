import path from 'node:path';
import { defineConfig } from 'astro/config';

import nodejs from "@astrojs/node";
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import auth from "auth-astro";
import { responsiveTablesRehypePlugin, lazyImagesRehypePlugin } from './src/utils/frontmatter';

export default defineConfig({
  site: "https://astrorock.phanective.org",

  output: "hybrid",

  base: "/",
  trailingSlash: "never",

  security: {
    // CSRF protection
    checkOrigin: true,
  },

  i18n: {
    defaultLocale: "en",
    locales: [ "en" ],
  },

  adapter: nodejs({
    mode: "standalone",
  }),
  integrations: [
    auth(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),

    partytown({
      config: { forward: ['dataLayer.push'] },
    }),
  ],

  markdown: {
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
  },

  vite: {
    build: {
      // minify server side with esbuild, not only client side
      minify: "esbuild",
    },
    resolve: {
      alias: {
        '~': path.resolve(import.meta.dirname, './src'),
      },
    },
  },

  server: {
    port: 3000,
  },
});
