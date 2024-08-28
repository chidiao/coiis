<template>
  <Button size="small" :icon="isDark ? 'pi pi-moon' : 'pi pi-sun'" @click="toggle"> </Button>
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

const toggle = () => {
  isDark.value = !isDark.value
}
</script>
