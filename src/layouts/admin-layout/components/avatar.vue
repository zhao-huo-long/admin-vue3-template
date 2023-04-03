<template>
  <div >
    <el-dropdown role="" class="avatar">
      <div class="el-dropdown-link">
        <el-avatar style="padding:6px 0;" :size="36" />
        <span>admin</span>
        <el-icon  class="el-icon--right">
          <arrow-down />
        </el-icon>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item disabled>Action 4</el-dropdown-item>
          <el-dropdown-item divided>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
.el-dropdown-link{
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 8px;
  &::focus-visible{
    outline: none;
  }
}
</style>