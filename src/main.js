import '@/utils'

const $ = require('jquery')
window.$ = $

import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHistory(),
  routes,
})

import '../scss/custom.scss'
import 'bootstrap'

const app = createApp(App)

app.use(router)
app.mount('#app')