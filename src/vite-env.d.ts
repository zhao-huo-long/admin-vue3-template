/// <reference types="vite/client" />

interface MenuItem {
  /**
   * 菜单路由路径
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
  hide?: boolean,

  /**
   * 角色列表
   */
  roles?: string[],

  /**
   * link
   */
  href?: string,

  /**
   * keep
   */
  keep?: boolean,

  /**
   * uuid
   */
  uuid?: string | number,

  /**
   * 子菜单
   */
  children?: MenuItem[],
}