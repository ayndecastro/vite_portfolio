import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // Ensure all asset URLs are relative
  plugins: [react()],
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    // this sets a default port to 3000
    port: 3000,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    outDir: '../server/build', // Specify the output directory
    rollupOptions: {
      input: 'index.html', // Ensure this points to your entry HTML file
    },
    sourcemap: true, // Enable source maps
  },
});
