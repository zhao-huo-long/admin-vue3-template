<template>
  <div class="side">
    <website />
    <el-row>
      <el-col>
        <el-menu class="side-el-menu" 
          background-color="#545c64"
          text-color="#fff"
          >
            <side-menu  :menuData="menu" />
         </el-menu>
      </el-col>
    </el-row>

  </div>
</template>

<script lang="ts" setup>
import website from './website.vue'
import SideMenu from './side-menu.vue'
import { menuConfig } from '../../../router/routes';

const menu = menuConfig?.[0]?.children || []

</script>
<style scoped lang="less">
.side {
  height: inherit;
  color: #fff;
  width: inherit;
  background-color: #545c64;
  .side-el-menu{
    border: none;
  }
}
</style>