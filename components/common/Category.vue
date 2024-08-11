<template>
  <div
    class="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg group transition cursor-pointer bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700"
  >
    <div class="text-black dark:text-white">
      <div class="size-6 mb-3">
        <img :src="category_logo" class="size-full" />
      </div>

      <div class="w-full">
        <div
          class="text-sm font-semibold line-clamp-1 group-hover:text-sky-500 hover:underline transition-all duration-300"
        >
          {{ category_name }}
        </div>
        <div class="text-xs h-12 line-clamp-3 my-1 text-gray-500 dark:text-zinc-400">{{ category_description }}</div>
      </div>

      <NuxtLink class="text-xs text-blue-500 dark:text-slate-500 hover:underline flex mt-4">Browse Category</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  id?: number
  category_name?: string
  category_logo?: string
  category_description?: string
  gmt_create?: number
  gmt_modified?: number
  status?: number
  data_state?: boolean
  tenant_code?: string
}>()
</script>
