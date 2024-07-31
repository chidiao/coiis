<template>
  <div class="container mx-auto p-5">
    <div class="font-bold text-xl flex justify-between items-center">
      <div>Collections</div>

      <a-input placeholder="search" class="max-w-64">
        <template #prefix>
          <SearchOutlined />
        </template>
      </a-input>
    </div>

    <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-5 my-5">
      <Collection v-for="i in 16" :value="i" />
    </div>
  </div>
</template>

<script setup>
import Collection from '@/components/Collection.vue'
import { SearchOutlined } from '@ant-design/icons-vue'
</script>
