<template>
  <template v-if="Array.isArray(menuData)">
    <template v-for="i in menuData">
      <el-sub-menu v-if="i.children?.length && !i.hide" :title="i.title" :index="i.path">
        <template #title>
          {{ i.title }}
        </template>
        <SideMenu :menuData="i.children" />
      </el-sub-menu>
      <el-menu-item  
        v-else-if="!i.hide" 
        :title="i.title" 
        :index="i.path" 
        @click="() => onClick({ ...i, })" 
        :route="i.href ? {} : i.path">
        {{ i.title }}
      </el-menu-item>
    </template>
  </template>
</template>

<script setup lang="ts">
const props = defineProps<{
  menuData: MenuItem[] | MenuItem,
}>()

const onClick = (config: MenuItem) => {
  if (config.href) {
    window.open(config.href)
    return
  }
}

</script>

<style lang="less" scoped>
.menu {
  // color: #fff;
  // background-color: #545c64;
}
</style>