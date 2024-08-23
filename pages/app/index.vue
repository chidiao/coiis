<template>
  <div class="container mx-auto">
    <CommonBanner
      title="Welcome to my website"
      sub-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam rerum similique temporibus molestiae, ex quis
          repudiandae et, iure quas ut voluptas! Tempora quod similique id vel, blanditiis repellat est numquam!"
      img="https://rapidapi.com/hub/_next/image?url=%2Fhub%2Fimages%2Fdiscovery-hero2.png&w=1080&q=75"
    >
      <UButton>Explore Blog</UButton>
    </CommonBanner>

    <TopGrids class="mt-5" />

    <TopSection title="Top Categories" more="View All Categories" to="/app/category">
      <TopCategories :list="topCategory" />
    </TopSection>

    <TopSection title="Top Collections" more="View All Collections" to="/app/collections">
      <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
        <CommonCollection v-for="i in 4" :value="i" />
      </div>
    </TopSection>

    <TopSection title="Trending APIs" more="View All Trending APIs" to="/api/search">
      <div class="grid md:grid-cols-3 gap-5">
        <ApiCard
          tag="Sports"
          :is-like="i % 2 == 1"
          :icon="`https://picsum.photos/200/300`"
          title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem quaerat eius earum quisquam sunt cum omnis ipsum cumque, modi non maiores debitis vitae doloremque! Ad natus quaerat minus quibusdam ut."
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem quaerat eius earum quisquam sunt cum omnis ipsum cumque, modi non maiores debitis vitae doloremque! Ad natus quaerat minus quibusdam ut."
          :score="(i * 2) / 10"
          :latency="2341"
          :level="i * 3"
          v-for="i in 6"
        />
      </div>
    </TopSection>
  </div>
</template>

<script setup>
const { applicationApi } = useApis()
const { data: categoryList, categoryStatus } = useAsyncData('topCategory', async () => {
  const { data } = await applicationApi.getCategoryList()

  return data
})

const topCategory = computed(() => {
  if (!categoryList.value) return []

  return categoryList.value.slice(0, 8)
})

// const { data: groupList } = useAsyncData('topGroup', async () => {
//   const { data } = await applicationApi.getGroupList()

//   return data
// })
</script>
