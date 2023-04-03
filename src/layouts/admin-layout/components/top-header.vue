<template>
  <div class="top-header" style="box-shadow: var(--el-box-shadow);">
    <el-row class="h-inherit" align="middle">
      <el-col class="h-inherit nav-bread" :span="12">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>a</el-breadcrumb-item>
          <el-breadcrumb-item>b</el-breadcrumb-item>
          <el-breadcrumb-item>c</el-breadcrumb-item>
          <el-breadcrumb-item>d</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col class="h-inherit right-msg" :span="12">
        <avatar />
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts" setup>
import avatar from './avatar.vue'
</script>
<style lang="less" scoped>
.top-header {
  height: 50px;
  color: rgba(0, 0, 0, .65);
  padding: 10px;
  .nav-bread{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    flex-direction: row;
    align-items: center;
  }
  .right-msg {
    text-align: right;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    flex-direction: row-reverse;
    align-items: center;
  }
}
</style>