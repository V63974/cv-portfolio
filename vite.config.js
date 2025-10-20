import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// automatically set correct base for local vs GitHub Pages
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base:'/cv-portfolio/', // ✅ local uses "/", deploy uses "/cv-portfolio/"
}))
