<template>
  <div class="flex flex-col">
    <NuxtLink class="pl-[50px]" :class="[baseClass, colorClass]" v-for="i in short" :to="`/api/${i.id}`">
      {{ i.category_name }}
    </NuxtLink>
    <NuxtLink class="pl-[50px]" :class="[baseClass, colorClass]" to="/app/category">All Categories</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { baseClass, colorClass } from './config'
const { applicationApi } = useApis()
const { data: list } = useAsyncData('topCategory', async () => {
  const { data } = await applicationApi.getCategoryList()

  return data?.slice(0, 8) || []
})

const short = computed(() => {
  if (!list.value) return []

  return list.value.slice(0, 8).filter((i) => i.category_name && i.category_name.length < 20)
})
</script>
