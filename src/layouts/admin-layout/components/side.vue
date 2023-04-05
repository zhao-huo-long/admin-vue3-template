<template>
  <div class="side">
    <website />
    <el-row>
      <el-col>
        <el-menu 
          class="side-el-menu" 
          background-color="#545c64"
          text-color="#fff"
          :router="true"
          :default-active="router.currentRoute.value.path"
        >
          <side-menu :parents="[]"  :menuData="menu" />
         </el-menu>
      </el-col>
    </el-row>

  </div>
</template>

<script lang="ts" setup>
import website from './website.vue'
import SideMenu from './side-menu.vue'
import { menuConfig } from '../../../router/routes';
import router from '../../../router';
import { onMounted, ref } from 'vue';
import request from '../../../request';

const menu = ref<any[]>([])

onMounted(async () => {
  const res = await request("/menu.json")
  menu.value = res.data
})

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