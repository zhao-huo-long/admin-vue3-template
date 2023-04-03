<template>
  <template v-if="Array.isArray(menuData)">
    <template v-for="i in menuData">
      <el-sub-menu
        v-if="i.children?.length" 
        :title="i.title" 
        :index="i.path"
      >
        <template #title>{{ i.title }}</template>
        <SideMenu :menuData="i.children"></SideMenu>
      </el-sub-menu>
      <el-menu-item
        v-else 
        :title="i.title" 
        :index="i.path"
        @click="() => onClick({...i})"
      >
        {{ i.title }}
      </el-menu-item>
    </template>
  </template>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
defineProps<{
  menuData: MenuItem[] | MenuItem,
}>()
const router = useRouter()
const onClick = (config: MenuItem) => {
  if(config.href){
    window.open(config.href, '__blank')
    return
  }
  if(config.path){
    router.push(config.path)
  }
}

</script>

<style lang="less" scoped>
.menu {
  // color: #fff;
  // background-color: #545c64;
}
</style>