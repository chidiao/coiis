<template>
  <a-config-provider
    :theme="{
      token: {
        fontSize: 12
      },
      algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm
    }"
  >
    <a-extract-style>
      <div class="font-sans dark:text-white">
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </div>
    </a-extract-style>
  </a-config-provider>
</template>

<script setup lang="ts">
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
