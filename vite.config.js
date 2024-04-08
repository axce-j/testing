import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 
// https://vitejs.dev/config/
export default defineConfig({
  base:"/tutorial",
  plugins: [react()],
})
// import { defineConfig } from 'vite'
// import React from '@vitejs/plugin-react'
// import { ghPages } from 'vite-plugin-gh-pages'

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: "/portfolio-react-threejs",
//   plugins: [
//     react(),
//     ghPages(),
//   ],
// });