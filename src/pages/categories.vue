<template>
  <div class="container mx-auto p-5">
    <div class="flex flex-col justify-between items-start xl:flex-row xl:items-center">
      <div class="w-full xl:w-1/2">
        <div class="font-bold text-xl dark:text-white">API Categories</div>
        <div class="text-sm text-gray-400 mt-2">
          Embark on a journey through our extensive array of categories, where you'll find a treasure trove of
          exceptional APIs, just waiting to be discovered and utilized for your specific needs.
        </div>
      </div>

      <a-input placeholder="search" class="max-w-64 mt-5 xl:mt-auto">
        <template #prefix>
          <SearchOutlined />
        </template>
      </a-input>
    </div>

    <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-5 my-5">
      <Categorie v-for="i in 16" :value="i" @click="router.push('/search')" />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Categorie from '@/components/Categorie.vue'
import { SearchOutlined } from '@ant-design/icons-vue'

const router = useRouter()
</script>
