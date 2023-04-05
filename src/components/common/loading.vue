<template>
  <el-progress 
    v-show="!!v" 
    :duration="5" 
    :percentage="v" 
    :stroke-width="3" 
    class="progress"  
    :show-text="false" 
  />
</template>

<script lang="ts" setup>

import { eventBus } from '../../utils'
import { ref } from 'vue'
import { interval } from 'js-utils-collection'

const v = ref(0);
let clear = () => {};

eventBus.on('progress', (type) => {
  clear()
  if(type === 'start'){
    v.value = 0
    clear = interval(() => {
      v.value = v.value + 5 > 99 ? 99 : v.value + 5
    }, 150)
  }
  if(type === 'end'){
    v.value = 100
    setTimeout(() => {
      v.value = 0
    }, 300)
  }
})

</script>

<style lang="less" scoped>
.progress{
  position: absolute;
  top: 0;
  width: 100%;
}
</style>