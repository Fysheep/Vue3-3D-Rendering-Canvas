import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { ThemeStore } from './stores/theme'

const app = createApp(App)

{
  /* PINIA */
  app.use(createPinia()) // initialize Pinia
  ThemeStore() // initialize themes
}

app.use(router)

app.mount('#app')
