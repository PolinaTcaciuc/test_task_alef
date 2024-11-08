import '@/assets/styles/main.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import BaseIcon from '@/components/base/BaseIcon.vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('BaseIcon', BaseIcon)

app.mount('#app')
