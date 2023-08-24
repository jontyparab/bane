import path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://github.com/vuejs/language-tools/issues/918#issuecomment-1282277805
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4567
  },
  preview: {
    port: 5567
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})
