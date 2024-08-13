<template>
  <div class="w-full my-8">
    <div class="w-full flex justify-between items-center py-8 cursor-pointer">
      <div class="text-xl font-bold">{{ title }}</div>

      <NuxtLink class="text-xs text-blue-500 underline" :to="to">{{ more }}</NuxtLink>
    </div>

    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title?: string
  more?: string
  to?: string
}>()
</script>
