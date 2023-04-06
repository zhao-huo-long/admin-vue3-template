<script setup lang="ts">

import MainLayout from './layouts/main-layout.vue';
import WaitLoading from './components/common/loading.vue'

</script>

<template>
  <div class="root-element h-inherit">
    <wait-loading />
    <main-layout />
  </div>
</template>

<style>
.root-element{
  height: 100%;
  width: 100%;
}
</style>
