import react from '@vitejs/plugin-react'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import { resolve } from 'path'

export default defineConfig({
  main: {
    root: 'src',
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    root: 'src',
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    root: 'src',
    resolve: {
      alias: {
        '@renderer': resolve('app/renderer/src')
      }
    },
    plugins: [react()]
  }
})
