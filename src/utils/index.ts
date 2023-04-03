import { VNode } from "vue"
import { RouteRecordRaw } from "vue-router"

export function mockReq<T>(data: T) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(data)
    }, 0)
  })
}



export function parseMenuConfig(parentPath = '', configs: RouteMenuConfig[] = []) {
  const menu: MenuItem[] = []
  const routes: RouteRecordRaw[] = []
  for (const item of configs) {
    const path = item.path?.startsWith('/') ? item.path : `${parentPath}/${item.path || item.title}`
    const { menu: menuChildren, routes: routesChildren } = parseMenuConfig(path, item.children || [])
    if (item.showInMenu === undefined || item.showInMenu === true) {
      menu.push({
        title: item.title,
        icon: item.icon,
        href: item.href,
        path,
        children: menuChildren,
      })
    } 
    if(!item.href){
      routes.push({
        path,
        meta: {
          auth: item.auth,
          keep: item.keep,
        },
        component: item.layout || item.component,
        redirect: item.redirect,
        children: routesChildren,
      })
    }
  }
  return {
    menu,
    routes
  }
}