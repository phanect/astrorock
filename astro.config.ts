import path from 'path';
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import { responsiveTablesRehypePlugin, lazyImagesRehypePlugin } from './src/utils/frontmatter';

export default defineConfig({
  site: "https://astrowind.vercel.app",

  output: 'static',

  base: "/",
  trailingSlash: "never",

  i18n: {
    defaultLocale: "en",
    locales: [ "en" ],
  },

  integrations: [
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
