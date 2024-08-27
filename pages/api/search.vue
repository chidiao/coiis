<template>
  <div class="w-full max-w-screen-2xl mx-auto p-5 pb-0 dark:bg-[#212121]">
    <ApiBanner :category="category" />

    <div class="w-full grid xl:flex mt-8 mx-auto">
      <ApiCategoryList v-model="category" />

      <div class="grow rounded-xl border dark:border-gray-700 p-8">
        <div class="flex justify-between items-center">
          <div class="text-xl font-bold dark:text-white">All Results (650)</div>

          <Select v-model="value" :options="options" />
        </div>

        <div class="flex flex-col py-8">
          <IconField>
            <InputIcon class="pi pi-search" />
            <InputText placeholder="Search" class="w-full" />
          </IconField>
        </div>

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

const category = ref({})
</script>
