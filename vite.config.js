import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' //tich hop tailwind css vao project trên trang tailwindcss.com có huong dan cai dat
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss() //tich hop tailwind css vao project trên trang tailwindcss.com có huong dan cai dat
  ],
})
