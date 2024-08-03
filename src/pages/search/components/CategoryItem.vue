<template>
  <div
    class="w-full h-8 p-1 flex justify-between items-center rounded cursor-pointer hover:bg-gray-100"
    :class="{
      'bg-gray-200': isActive
    }"
  >
    <div class="text-xs">Sports</div>

    <div
      class="text-xs px-[6px] py-[2px] rounded"
      :class="[isActive ? 'bg-[#3b82f6] text-white' : 'bg-[#f3f4f6] text-black']"
    >
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
