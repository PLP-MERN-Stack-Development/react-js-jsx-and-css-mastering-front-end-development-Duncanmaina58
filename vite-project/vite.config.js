import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/

// const repoName = 'react-js-jsx-and-css-mastering-front-end-development-Duncanmaina58';
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: `/react-js-jsx-and-css-mastering-front-end-development-Duncanmaina58/`,
})
