import { createRouter, createWebHashHistory, loadRouteLocation } from 'vue-router'
import { routes, basicRoutes } from './routes'
import type { RouteRecordRaw } from 'vue-router'
import { eventBus } from '../utils'

const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes,
})

export function addRoutes(name: string, routes: RouteRecordRaw[]){
  routes.forEach(route => router.addRoute(name, route))
}

export function routerReady(){
  router.beforeEach(async function(to){
    eventBus.fire('progress', 'start');
    await loadRouteLocation(to)
    eventBus.fire('progress', 'end');
    return true
  })
}

export default router