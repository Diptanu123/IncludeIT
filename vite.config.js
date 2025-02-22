import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('@monaco-editor')) {
              return 'monaco-editor';
            }
            return 'vendor';
          }
        }
      }
    }
  },
  optimizeDeps: {
    include: ['@monaco-editor/react'],
    esbuildOptions: {
      target: 'es2020'
    }
  },
  server: {
    fs: {
      strict: false
    }
  },
  define: {
    'process.env': {}
  }
})
