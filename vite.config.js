import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url' // Importa esta utilidad

// Crea el equivalente a __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Ahora __dirname funcionará correctamente
      '@': path.resolve(__dirname, './src'),
    },
  },
})