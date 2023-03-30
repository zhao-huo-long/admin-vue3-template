import { createRouter, createWebHashHistory } from 'vue-router'
import { staticRoutes } from './routes'
import type { RouteRecordRaw } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: staticRoutes,
})

export function addRoutes(routes: RouteRecordRaw){
  router.addRoute(routes)
}

export default router