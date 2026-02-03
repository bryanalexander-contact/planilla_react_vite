import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import Sitemap from 'vite-plugin-sitemap' 

// Configuración para que __dirname funcione en ESM (Vite)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Rutas para el Sitemap
const routes = ['/', '/citas', '/contacto', '/servicios'] 

export default defineConfig({
  plugins: [
    react(),
    // Configuración del generador de Sitemap y Robots.txt
    Sitemap({ 
      hostname: 'https://tu-sitio-web.com', // RECUERDA: Cambia esto por tu dominio real después
      dynamicRoutes: routes,
      generateRobotsTxt: true, 
      robots: [{
        userAgent: '*',
        allow: '/',
        disallow: '/admin', 
      }]
    })
  ],
  resolve: {
    alias: {
      // Configuración del alias @ para apuntar a la carpeta src
      '@': path.resolve(__dirname, './src'),
    },
  },
})