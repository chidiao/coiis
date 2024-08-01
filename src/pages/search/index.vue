<template>
  <div class="container mx-auto p-5">
    <div class="w-full h-96 bg-pink-400"></div>

    <div class="w-full flex mt-8">
      <div class="w-64">
        <div class="font-bold text-xl">Show APIs</div>

        <div class="font-bold my-5">Filter by</div>

        <div class="text-xs my-5">Category</div>

        <div class="py-2 space-y-1 max-h-96 overflow-y-scroll">
          <CategoryItem is-active :count="1321" />
          <CategoryItem v-for="i in 24" :count="666" />
        </div>

        <div class="w-full my-2 h-px bg-gray-100"></div>
      </div>

      <div class="grow rounded-xl mx-5 border p-8">
        <div class="text-xl font-bold">All Results (650)</div>
        <div class="h-screen"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CategoryItem from './components/CategoryItem.vue'
</script>
