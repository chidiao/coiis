<template>
  <div class="w-full rounded-xl bg-[#fafafa] dark:bg-[#262626] min-h-[144px] p-5">
    <div class="size-full flex flex-col justify-center items-center gap-5">
      <div class="text-2xl font-bold dark:text-white">{{ category?.category_name ?? 'Search your' }} APIs</div>
      <div class="text-sm text-gray-500 dark:text-zinc-400 max-w-3xl text-center mx-auto">
        {{ category?.category_description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  category: {
    category_name?: string
    category_description?: string
  }
}>()
</script>
