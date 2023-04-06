import Login from '../pages/login/index.vue'
import Index from '../pages/index/index.vue'
import A from '../pages/a.vue'
import B from '../pages/b.vue'
import C from '../pages/c.vue'
import admin from '../layouts/admin-layout/index.vue'
import { parseMenuConfig } from '../utils'
import { reqFaker } from 'js-utils-collection';


export const adminRoutes = [
  {
    title: '登陆',
    path: '/admin/utils/login',
    component: () => reqFaker(Login, 2000),
  },
  {
    title: 'a',
    path: '/admin/test/a',
    component: () => reqFaker(A, 2000),
  },
  {
    title: 'c',
    path: '/admin/test/c',
    component: () => reqFaker(C, 2000),
  },
  {
    title: 'b',
    path: '/admin/test/b',
    component: () => reqFaker(B, 2000),
  },
]

export const basicRoutes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    redirect: '/admin',
  },
  {
    path: '/admin',
    component: admin,
    name: 'admin',
    redirect: '/admin/index',
    children: [
      {
        title: '首页',
        path: '/admin/index',
        component: Index,
      },
    ]
  }
]


// const { routes, menu: menuConfig } = parseMenuConfig('', config)

// export {
//   routes, 
//   menuConfig,
// }