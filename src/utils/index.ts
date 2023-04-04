import type { RouteRecordRaw } from "vue-router"
import { newEventBus, treeToMap } from 'js-utils-collection'

interface EventBus {
  progress: 'start' | 'end'
}
export const eventBus = newEventBus<EventBus>()

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
    if (!item.href) {
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


export interface MenuData {
  /**
   * 菜单路径
   */
  path?: string;
  /**
   * 菜单名称
   */
  title?: string;

  /**
   * 菜单图标
   */
  icon?: string;

  /**
   * 菜单展示
   */
  hide: boolean;

  /**
   * 允许访问
   */
  auth?: string[];

  /**
   * 外链菜单
   */
  href?: string;

  /**
   * 保持活性
   */
  keep?: boolean;

  /**
   * 菜单编码
   */
  code?: string | number;

  /**
   *
   */

  /**
   * 子菜单
   */
  children?: MenuData[];

}

export interface Route {
  path?: string;
  children?: Route[];
  [i: string]: unknown;
  redirect?: string;
}

export function parseMenuData(
  menu: MenuData[] = [],
  originRoutes: Route[] = []
) {
  const menuTree = [...menu];
  const routesRes: Route[] = [];
  const map = treeToMap(originRoutes, "path");
  while (menuTree.length) {
    const item = menuTree.shift();
    if(item?.children?.length){
      menuTree.unshift(...item.children)
    }
    if (typeof item?.path === 'string') {
      if(!/^\//.test(item.path)){
        console.warn(`[${item.path}], 请使用 / 开头的路径`)
        continue
      }
      routesRes.push({
        path: item.path,
        ...map[item.path],
        meta: {
          keep: item.keep,
          title: item.title,
          code: item.code,
        },
      });
    }
  }
  return routesRes.filter(i => !!i.component);
}
