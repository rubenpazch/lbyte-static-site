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
      input: {
        main: 'index.html',
        servicios: 'servicios/index.html',
        nosotros: 'nosotros/index.html',
        contacto: 'contacto/index.html',
        faq: 'faq/index.html',
        blog: 'blog/index.html',
        blog1: 'blog/1/index.html',
        blog2: 'blog/2/index.html',
        blog3: 'blog/3/index.html',
        blog4: 'blog/4/index.html'
      },
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom']
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
