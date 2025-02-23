import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Meu App PWA',
        short_name: 'AppPWA',
        description: 'Um exemplo de PWA com React e Vite',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'favicon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'favicon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});