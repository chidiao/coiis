<template>
  <div class="w-full xl:w-64 shrink-0 mr-6 py-8 xl:sticky top-16 z-20" style="height: calc(100vh - 64px)">
    <div class="font-bold text-xl">Show APIs</div>

    <div class="font-semibold text-lg mt-5">Filter by</div>

    <div class="font-semibold text-xs mt-5">Category</div>

    <div class="space-y-1 max-h-96 overflow-y-scroll mt-4">
      <CategoryItem is-active :count="1321" />
      <CategoryItem v-for="i in 24" :count="666" />
    </div>

    <div class="h-4 border-b border-gray-100 dark:border-gray-700"></div>
  </div>
</template>

<script setup>
import CategoryItem from './CategoryItem.vue'
</script>
