import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 8080,
    host: true,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  preview: {
    port: 8080,
    host: true,
    open: true,
  },
  optimizeDeps: {
    include: ['vue'],
  },
  define: {
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false,
  },
});
