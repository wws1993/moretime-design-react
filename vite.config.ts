import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

const pathSrc = resolve(__dirname, 'src')

console.log('??');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': pathSrc,
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@moretime/design-react',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {}
    }
  }
})
