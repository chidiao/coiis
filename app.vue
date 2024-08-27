<template>
  <div class="font-sans">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <Toast />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Coiis'
})

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
