import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@salonx/ui': path.resolve(__dirname, '../../packages/ui/src'),
      '@salonx/api': path.resolve(__dirname, '../../packages/api/src'),
      '@salonx/types': path.resolve(__dirname, '../../packages/types/src'),
    },
  },
  server: {
    port: 3000,
  },
}) 