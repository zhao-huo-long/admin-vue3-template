<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue';
import { mockReq } from '../../utils'
import router, { addRoutes, } from '../../router';
import Side from './components/side.vue'

const loading = ref(false)

onBeforeMount(async () => {
  // loading.value = true
  // await mockReq({
  //   data: {
  //     name: 'jerry',
  //     age: 28,
  //   }
  // })
  // router.replace(router.currentRoute.value.fullPath)
  //   .finally(() => loading.value = false)
})

</script>

<template>
  <div class="admin-layout h-inherit">
    <div class="h-inherit" v-loading="loading">
      <div v-if="loading">
        ...
      </div>
      <template v-if="!loading">
        <el-container class="h-inherit">
          <el-aside width="220px"><side></side></el-aside>
          <el-container>
            <el-header>Header</el-header>
            <el-main>
              <router-view>
              </router-view>
            </el-main>
          </el-container>
        </el-container>
      </template>
    </div>
  </div>
</template>

<style></style>
