// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
const DEV_PORT = Number.parseInt(process.env.PORT || '3032', 10) || 3032;

export default defineConfig({
  site: 'https://example.com',
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
