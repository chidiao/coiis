<template>
  <a-config-provider
    :theme="{
      token: {
        fontSize: 12
      },
      algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm
    }"
  >
    <div class="font-sans">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>

      <UNotifications />
    </div>
  </a-config-provider>
</template>

<script setup lang="ts">
useHead({
  title: 'Coiis'
})
import { theme } from 'ant-design-vue'
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>
