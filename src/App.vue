<template>
  <a-config-provider
    :theme="{
      fontSize: 12,
      algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm
    }"
  >
    <div class="font-sans dark:text-white">
      <RouterView />
    </div>
  </a-config-provider>
</template>

<script setup>
import { watch } from 'vue'
import { theme } from 'ant-design-vue'
import { useStorage } from '@vueuse/core'

const darkMode = useStorage('darkMode', false)
watch(
  darkMode,
  (val) => {
    if (val) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },
  { immediate: true }
)
</script>
