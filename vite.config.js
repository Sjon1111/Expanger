import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/ change code
export default defineConfig({
  plugins: [react()],
},
  {
    "css.lint.unknownAtRules": "ignore"
  })
