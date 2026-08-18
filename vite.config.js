import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    minify: 'esbuild',
    cssMinify: true,
    chunkSizeWarningLimit: 3000,
    rollupOptions: {
      input: { main: resolve(__dirname, 'index.html') },
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
      }
    },
    // Don't try to process the old Next.js script tags as ES modules
    assetsInlineLimit: 0,
  },
  server: {
    port: 3000,
    open: true,
  },
  // Suppress PostCSS warnings from the legacy _bundle.css
  css: {
    devSourcemap: false,
    postcss: {
      plugins: []
    }
  }
});
