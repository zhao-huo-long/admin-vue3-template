import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'
import type { RouteRecordRaw } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export function addRoutes(routes: RouteRecordRaw[]){
  routes.forEach(route => router.addRoute(route))
}

export default router