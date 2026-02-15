import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    compression({
      verbose: false,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    cssCodeSplit: true,
    reportCompressedSize: false,
    sourcemap: false,
  },
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
  },
})
