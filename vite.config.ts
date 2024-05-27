import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],  resolve: {
    alias: {
      'common': path.resolve(__dirname, 'src/common'),
      'modules': path.resolve(__dirname, 'src/modules')
    }
  } 
})
