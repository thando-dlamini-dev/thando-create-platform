import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: ['**/*.glb'],
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Your backend server
        changeOrigin: true,
        secure: false,
      }
    }
  },
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
  define: {

  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
