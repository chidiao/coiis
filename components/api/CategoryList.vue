<template>
  <div class="w-full xl:w-64 shrink-0 mr-6 py-8 xl:sticky top-16 z-20" style="height: calc(100vh - 64px)">
    <div class="dark:text-white">
      <div class="font-bold text-xl">Show APIs</div>
      <div class="font-semibold text-lg mt-5">Filter by</div>
      <div class="font-semibold text-xs mt-5">Category</div>
    </div>

    <div class="space-y-1 max-h-96 overflow-y-scroll mt-4">
      <AppLoading v-if="status == 'pending'" />

      <div v-else>
        <ApiCategoryItem
          v-for="i in list"
          :category="i"
          :count="i?.category_description?.length || 0"
          :is-active="model?.category_name == i.category_name"
        />
      </div>
    </div>

    <div class="h-4 border-b border-gray-100 dark:border-gray-700"></div>
  </div>
</template>

<script setup>
const { applicationApi } = useApis()
const { data: list, status } = useAsyncData('category', async () => {
  const { data } = await applicationApi.getCategoryList()

  return data
})

const model = defineModel()
const updateInfo = () => {
  if (model.value.category_description) return
  if (status.value == 'pending') return

  let isExsit = list.value.find((i) => i.id == model.value.id)
  if (isExsit) model.value = isExsit
}

watch([model, status], () => {
  updateInfo()
})
</script>
