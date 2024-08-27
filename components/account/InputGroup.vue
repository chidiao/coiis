<template>
  <div
    class="flex flex-col gap-2 py-5 border-b dark:border-zinc-600 lg:py-8 md:flex-row md:items-center md:justify-between"
  >
    <div class="flex flex-col gap-2 md:w-1/2">
      <label>{{ label }}</label>
      <small class="text-zinc-500">{{ desc }}</small>
    </div>

    <div class="flex flex-col gap-2 md:w-1/2 md:max-w-md">
      <slot />
      <small class="text-red-500">{{ help }}</small>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  label?: string
  desc?: string
  help?: string
}>()
</script>
