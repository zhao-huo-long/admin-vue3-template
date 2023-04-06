<template>
  <router-view v-if="!loading"></router-view>
</template>
<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue';
import { RouterView } from 'vue-router';
import router, { addRoutes, routerReady } from '../router';
import { adminRoutes } from '../router/routes';
import { eventBus, parseMenuData } from '../utils'
import request from '../request';

const loading = ref(false)

onBeforeMount(async () => {
  loading.value = true
  eventBus.fire('progress', 'start')
  // const menu = await request("/menu.json")
  // const rs = parseMenuData(menu.data, adminRoutes)
  addRoutes('admin', adminRoutes)
  await router.replace(location.hash.slice(1))
  loading.value = false
  eventBus.fire('progress', 'end')
  router.beforeEach(to => {
    console.log("to", to)
    return true
  })
})
</script>