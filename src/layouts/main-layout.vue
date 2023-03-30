<script lang="ts" setup>

import { RouterView, RouterLink } from 'vue-router';

const userInfo = {
  name: "admin",
  email: "zhao-huo-long@email.com"
}


</script>

<template>
  <div class="main-layout">
    main-layout
    <router-link to="/">首页</router-link>
    <router-link to="/login">login</router-link>
    <router-view />
  </div>
</template>
