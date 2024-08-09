<template>
  <a-drawer width="300" placement="left" :open="open" @close="open = false">
    <Menu />
  </a-drawer>
</template>

<script setup>
import Menu from './Menu.vue'
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const open = defineModel()
const route = useRoute()

watch(
  () => route.path,
  (path) => {
    open.value = false
  },
  { immediate: true }
)
</script>
