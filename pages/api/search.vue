<template>
  <div class="w-full max-w-screen-2xl mx-auto p-5 pb-0 dark:bg-[#212121]">
    <div class="w-full rounded-xl bg-[#fafafa] dark:bg-[#262626] min-h-[144px] p-5">
      <div class="size-full flex flex-col justify-center items-center gap-5">
        <div class="text-2xl font-bold dark:text-white">Sports APIs</div>
        <div class="text-sm text-gray-400">
          Sports APIs encompass various categories such as sports odds, top scores, NCAA, football, women's sports, and
          trending sports news.
        </div>
      </div>
    </div>

    <div class="w-full grid xl:flex mt-8 mx-auto">
      <SearchCategoryList v-model="category" />

      <div class="grow rounded-xl border dark:border-gray-700 p-8">
        <div class="flex justify-between items-center">
          <div class="text-xl font-bold dark:text-white">All Results (650)</div>

          <USelectMenu v-model="value" :options="options" />
        </div>

        <UInput
          class="w-full my-8"
          icon="i-heroicons-magnifying-glass-20-solid"
          size="xs"
          color="white"
          :trailing="false"
          placeholder="Search..."
        />

        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <ApiCard
            :tag="category?.category_name ?? 'Data'"
            :is-like="i % 2 == 1"
            :icon="`https://picsum.photos/200/300`"
            title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem quaerat eius earum quisquam sunt cum omnis ipsum cumque, modi non maiores debitis vitae doloremque! Ad natus quaerat minus quibusdam ut."
            desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem quaerat eius earum quisquam sunt cum omnis ipsum cumque, modi non maiores debitis vitae doloremque! Ad natus quaerat minus quibusdam ut."
            :score="(i * 2) / 10"
            :latency="2341"
            :level="i * 3"
            v-for="i in 30"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'fixed-header'
})

const options = ['Alphabetical', 'Relevance', 'Last Updated', 'Trending']
const value = ref('Alphabetical')

const category = ref({
  category_name: ''
})
</script>
