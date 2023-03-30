
import Login from '../pages/login/index.vue'
import Index from '../pages/index/index.vue'
import Secret from '../pages/secret/index.vue'

/**
 * 静态路由
 */
export const staticRoutes = [
  { path: '/', component: Index },
  { path: '/login', component: Login },
]

/**
 * 动态路由
 */
export const asyncRoutes = [
  {
    path: '/secret',
    component: Secret
  }
]