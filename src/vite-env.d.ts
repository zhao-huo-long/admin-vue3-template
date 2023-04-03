/// <reference types="vite/client" />

interface RouteMenuConfig {
  /**
   * 
   */
  path?: string,
  /** 
   * 菜单名称
   */
  title?: string,
  
  /**
   * 菜单图标
   */
  icon?: string,

  /**
   * 菜单展示
   */
  showInMenu?: boolean,

  /**
   * 布局组件
   */
  layout?: any

  /**
   * component
   */
  component?: any

  /**
   * menuRoot
   */
  menuRoot?: false,
  auth?: () => boolean,
  href?: string,
  keep?: false,
  uuid?: string | number,
  children?: VueMenuConfig[],
  redirect?: string
}

interface MenuItem {
  title?: string,
  icon?: string,
  path?: string,
  href?: string,
  children?: MenuItem[]
}