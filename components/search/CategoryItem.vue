<template>
  <div
    class="w-full h-8 p-1 flex justify-between items-center rounded cursor-pointer hover:bg-gray-200 dark:hover:bg-[#3f3f46]"
    :class="{
      'bg-gray-200 dark:bg-[#3f3f46]': isActive
    }"
  >
    <div class="text-xs dark:text-white truncate mr-5">{{ category }}</div>

    <div
      class="text-xs px-[6px] py-[2px] rounded transition"
      :class="[isActive ? 'bg-[#3b82f6] text-white' : 'bg-[#f3f4f6] dark:bg-[#3f3f46] text-black dark:text-white']"
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
