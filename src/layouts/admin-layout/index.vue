<script lang="ts" setup>

import Side from './components/side.vue'
import TopHeader from './components/top-header.vue'

</script>
<template>
  <el-container class="h-inherit">
    <el-aside width="220px">
      <side />
    </el-aside>
    <el-container>
      <el-header style="padding: 0;">
        <top-header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style></style>
