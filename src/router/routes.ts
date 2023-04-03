import Login from '../pages/login/index.vue'
import Index from '../pages/index/index.vue'
import admin from '../layouts/admin-layout/index.vue'
import { parseMenuConfig } from '../utils'


/**
 * 静态路由
 */
export const config: RouteMenuConfig[] = [
  {
    path: '/admin',
    layout: admin,
    redirect: '/admin/index',
    children: [
      {
        title: '首页',
        path: 'index',
        component: Index,
      },
      {
        title: 'utils',
        path: 'utils',
        children: [
          {
            title: '登陆',
            path: 'login',
            component: Login,
          },
        ],
      },
      {
        href: 'https://baidu.com',
        title: '百度'
      }
    ]
  },
  {
    path: '/login',
    component: Login,
    showInMenu: false
  },
  {
    path: '/',
    redirect: '/admin/index',
    showInMenu: false
  },
]


const { routes, menu: menuConfig } = parseMenuConfig('', config)

export {
  routes, 
  menuConfig,
}