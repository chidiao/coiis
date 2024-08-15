<template>
  <div class="flex flex-col">
    <NuxtLink :class="[sizeClass, colorClass]" v-for="i in short" :to="`/api/${i.id}`">
      {{ i.category_name }}
    </NuxtLink>
    <NuxtLink :class="[sizeClass, colorClass]" to="/app/category">All Categories</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const sizeClass = 'pl-[50px] px-5 py-3 text-xs rounded-md'
const colorClass = 'text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 dark:text-zinc-400 dark:hover:text-white'

const { applicationApi } = useApis()
const { data: list } = useAsyncData('category', async () => {
  const { data } = await applicationApi.getCategoryList()

  return data?.slice(0, 8) || []
})

const short = computed(() => {
  if (!list.value) return []

  return list.value.slice(0, 8).filter((i) => i.category_name && i.category_name.length < 20)
})
</script>
