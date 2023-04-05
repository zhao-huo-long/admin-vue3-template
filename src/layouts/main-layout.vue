<template>
  <router-view v-if="!loading"></router-view>
  <wait-loading />
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { RouterView } from 'vue-router';
import router, { addRoutes, routerReady } from '../router';
import { adminRoutes } from '../router/routes';
import WaitLoading from '../components/common/loading.vue'
import { eventBus, parseMenuData } from '../utils'
import request from '../request';

const loading = ref(false)

onMounted(async () => {
  loading.value = true
  eventBus.fire('progress', 'start')
  const res = await request("/menu.json")
  const rs = parseMenuData(res.data, adminRoutes)
  addRoutes('admin', rs)
  await router.replace(location.hash.slice(1))
  loading.value = false
  eventBus.fire('progress', 'end')
  routerReady()
})
</script>