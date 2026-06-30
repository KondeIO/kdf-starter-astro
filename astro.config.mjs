// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
const DEV_PORT = Number.parseInt(process.env.PORT || '3032', 10) || 3032;

export default defineConfig({
  // Replace with your actual production domain for sitemap generation
  site: process.env.SITE || 'https://example.com',
  integrations: [sitemap()],
  server: {
    host: true, // Required for Konde Studio tunnel/proxy
    port: DEV_PORT,
  },
  // Disable Astro Dev Toolbar
  devToolbar: { enabled: false },
  vite: {
    server: {
      allowedHosts: true,
      hmr: {
        protocol: 'wss',
        clientPort: 443,
      },
      watch: {
        usePolling: true,
        interval: 300,
      },
    },
    define: {
      'process.env.KDF_DIR': JSON.stringify('designs'),
    },
  },
});
