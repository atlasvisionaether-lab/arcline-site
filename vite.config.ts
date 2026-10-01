import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

const siteUrlPlugin = () => ({
  name: 'site-url-metadata',
  transformIndexHtml(html) {
    const url = process.env.PUBLIC_SITE_URL || 
                (process.env.VERCEL_ENV === 'production' ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 
                 process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://arcline.io');
    
    return html.replace(/{{SITE_URL}}/g, url);
  },
});

export default defineConfig({
  plugins: [react(), tailwindcss(), siteUrlPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          return id.includes('node_modules/motion') ? 'motion' : undefined;
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
