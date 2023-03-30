import { createApp } from 'vue'
import './style.css'
import App from './root.vue'
import router from './router'
import request from './request'

request('/')

createApp(App)
.use(router)
.mount('#app')
