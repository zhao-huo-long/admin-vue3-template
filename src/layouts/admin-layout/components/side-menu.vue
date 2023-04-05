<template>
  <template v-if="Array.isArray(menuData)">
    <template v-for="i in menuData">
      <el-sub-menu v-if="i.children?.length" :title="i.title" :index="i.path">
        <template #title>
          {{ i.title }}
        </template>
        <SideMenu :menuData="i.children" :parents="[...parents, i.title]" />
      </el-sub-menu>
      <el-menu-item 
        v-else 
        :title="i.title" 
        :index="i.path" 
        @click="() => onClick({ ...i, parents: [...parents, i.title!] })"
        :route="i.href ? {} : i.path">
        {{ i.title }}
      </el-menu-item>
    </template>
  </template>
</template>

<script setup lang="ts">
const props = defineProps<{
  menuData: MenuItem[] | MenuItem,
  parents: string[]
}>()

const onClick = (config: MenuItem & { parents: string[] }) => {
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