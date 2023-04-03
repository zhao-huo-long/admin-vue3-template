import { createApp } from 'vue'
import './style.css'
import App from './root.vue'
import router from './router'
import request from './request'
import 'element-plus/dist/index.css'
import elementPlus  from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app
.use(router)
.use(elementPlus)
.mount('#app')
