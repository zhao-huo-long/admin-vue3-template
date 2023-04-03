import { createApp } from 'vue'
import './style.css'
import App from './root.vue'
import router from './router'
import request from './request'
import 'element-plus/dist/index.css'
import elementPlus  from 'element-plus'

createApp(App)
.use(router)
.use(elementPlus)
.mount('#app')
