<template>
  <div
    class="w-full h-8 p-2 flex justify-between items-center rounded cursor-pointer hover:bg-gray-100"
    :class="{
      'bg-gray-200': isActive
    }"
  >
    <div class="text-xs">Sports</div>

    <div class="text-xs px-2 py-1 rounded" :class="[isActive ? 'bg-[#3b82f6] text-white' : 'bg-[#f3f4f6] text-black']">
      {{ count }}
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  category?: string
  count?: number
  isActive?: boolean
}>()
</script>
