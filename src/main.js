import { createApp } from 'vue'

import '@fontsource/roboto'
import './style.css'

import App from './App.vue'
import router from './routes'

const app = createApp(App)
app.use(router)
router.isReady().then(() => {
  app.mount('#app')
})
