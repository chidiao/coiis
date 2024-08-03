<template>
  <div class="w-full grid grid-cols-2 lg:grid-cols-4 gap-6">
    <div v-for="i in list" class="text-center border border-gray-200 border-solid rounded p-6">
      <div class="font-bold text-3xl">{{ i.title }}</div>
      <div class="text-gray-500 my-4">{{ i.subTitle }}</div>
    </div>
  </div>
</template>

<script setup>
const list = [
  { title: '6M+', subTitle: 'Developers' },
  { title: '27K+', subTitle: `API's in the Hub` },
  { title: '5B+', subTitle: 'API calls per month' },
  { title: '253K+', subTitle: 'Total users per month' }
]
</script>
