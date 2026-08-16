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
    // Increase chunk size limit since the CSS bundle is large
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
      output: {
        // Keep asset filenames readable
        assetFileNames: 'assets/[name][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        // Don't try to tree-shake legacy Next.js bundles
        manualChunks: undefined
      },
      // Treat pre-built Next.js JS files as external (they're loaded via <script> tags already)
      external: (id) => {
        if (id.startsWith('assets/js/') && !id.includes('main.js')) return false;
        return false;
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    // Enable gzip compression in dev
    headers: {
      'Cache-Control': 'no-cache'
    }
  },
  // Optimize CSS: don't inline CSS into JS
  css: {
    devSourcemap: false
  },
  // Avoid processing assets/js/*.js files as ES modules 
  optimizeDeps: {
    exclude: []
  },
  assetsInclude: ['**/*.bin']
});
