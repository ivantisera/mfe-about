import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import singleSpa from 'vite-plugin-single-spa';

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    singleSpa({
      type: 'mife',
      serverPort: 7101,
    }),
  ],

  build: {
    target: 'esnext',
    minify: mode === 'production',
    rollupOptions: {
      input: {
        'mfe-template': './src/spa.ts',
      },
      output: {
        format: 'system',
        entryFileNames: 'mfe-template.js',
        dir: 'dist',
      },
      external: ['@shared/tolgee'],
    },
  },

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
}));
