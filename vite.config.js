import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel / local: leave unset → base "/"
// GitHub Pages project site: build with VITE_BASE=/your-repo-name/ (see .github/workflows)
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
})
