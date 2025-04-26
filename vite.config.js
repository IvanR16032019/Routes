import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // <<<--- agrega esto para desarrollo
  },
  build: {
    outDir: 'dist', // opcional (esto ya es por defecto, pero explícito ayuda)
  },
})
