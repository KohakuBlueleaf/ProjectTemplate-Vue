import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts';

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import viteCompression from 'vite-plugin-compression';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import commonjs from '@rollup/plugin-commonjs';

import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), Pages(), Layouts(),
    viteCommonjs(), 
    commonjs({
      transformMixedEsModules: true
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    viteCompression(),
    VitePWA({
      workbox: {
        //loading all html, css, js... files under /dist folder
        globPatterns: ['**/*.{html,css,js,svg,png,ico}'],
      },
      registerType: 'autoUpdate',
      base: '/',
      manifest: {
        theme_color: '#1d2630',
        icons: [
          {
            src: 'haku-river144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'haku-river512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'haku-river512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      devOptions: {
        enabled: true,
        type: 'module',
        navigateFallback: 'index.html',
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  }
})
