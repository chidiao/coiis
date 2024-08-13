<template>
  <div class="size-[31px]" v-auto-animate>
    <UButton
      class="size-full flex justify-center items-center"
      icon="i-heroicons-moon"
      color="white"
      @click="toggle"
      v-if="isDark"
    />
    <UButton
      class="size-full flex justify-center items-center"
      icon="i-heroicons-sun"
      color="white"
      @click="toggle"
      v-else
    />
  </div>
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
