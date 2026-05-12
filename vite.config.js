import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/skillbadge/',   // ← IMPORTANT pour GitHub Pages
  resolve: {
    alias: { '@': '/src' },
  },
  define: { global: 'globalThis' },
})