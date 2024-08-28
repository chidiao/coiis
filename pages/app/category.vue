<template>
  <div class="container mx-auto p-5">
    <div class="flex flex-col justify-between items-start xl:flex-row xl:items-center">
      <div class="w-full xl:w-1/2">
        <div class="font-bold text-xl dark:text-white">API Categories</div>
        <div class="text-sm text-gray-500 dark:text-zinc-400 mt-2">
          Embark on a journey through our extensive array of categories, where you'll find a treasure trove of
          exceptional APIs, just waiting to be discovered and utilized for your specific needs.
        </div>
      </div>

      <IconField class="mt-5">
        <InputIcon class="pi pi-search" />
        <InputText v-model="value1" placeholder="Search" />
      </IconField>
    </div>

    <div v-auto-animate>
      <AppLoading v-if="status == 'pending'" />

      <div class="py-5 xl:py-8" v-else>
        <TopCategories :list="list" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { applicationApi } = useApis()
const { data: list, status } = useAsyncData('category', async () => {
  const { data } = await applicationApi.getCategoryList()

  return data
})
</script>
