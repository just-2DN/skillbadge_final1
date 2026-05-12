import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
 base: '/skillbadge_final1/',
  resolve: {
    alias: { '@': '/src' },
  },
  define: { global: 'globalThis' },
})
