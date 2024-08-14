<template>
  <div class="container mx-auto dark:text-white">
    <div class="text-xl font-bold py-5">Top organization</div>

    <div v-auto-animate>
      <AppLoading v-if="status == 'pending'" />

      <div class="py-5" v-else>
        <CommonOrganization v-for="i in list" v-bind="i" :key="i.id" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { organizationApi } = useApis()

const { data: star, status: starStatus } = useAsyncData('organizationStar', async () => {
  const { data } = await organizationApi.getStarList()

  return data
})

const total = ref()
const { data: list, status } = useAsyncData('organizationList', async () => {
  const { data } = await organizationApi.getList({ page: 1 })
  total.value = data.count

  return data.results
})
</script>
