<template>
  <div class="container mx-auto">
    <CommonBanner
      title="Welcome to my website"
      sub-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam rerum similique temporibus molestiae, ex quis
          repudiandae et, iure quas ut voluptas! Tempora quod similique id vel, blanditiis repellat est numquam!"
      img="https://rapidapi.com/hub/_next/image?url=%2Fhub%2Fimages%2Fdiscovery-hero2.png&w=1080&q=75"
    >
      <a-button type="primary">Explore Blog</a-button>
    </CommonBanner>

    <Grids class="mt-5" />

    <div class="w-full mt-16">
      <div class="flex justify-between items-center">
        <div class="font-bold text-xl">Top Categories</div>

        <router-link to="/categories" class="text-blue-500 text-xs underline">View All Categories</router-link>
      </div>

      <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-5 my-5">
        <Categorie v-for="i in 4" :key="i" />
      </div>
    </div>

    <div class="w-full mt-16">
      <div class="flex justify-between items-center">
        <div class="font-bold text-xl">Top Collections</div>

        <router-link to="/collections" class="text-blue-500 text-xs underline">View All Collections</router-link>
      </div>

      <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-5 my-5">
        <Collection v-for="i in 4" :value="i" />
      </div>
    </div>

    <div class="w-full mt-16">
      <div class="flex justify-between items-center">
        <div class="font-bold text-xl">Trending APIs</div>

        <router-link to="/search" class="text-blue-500 text-xs underline">View All Trending APIs</router-link>
      </div>

      <div class="grid md:grid-cols-3 gap-5 my-5">
        <ApiCard
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
    </div>
  </div>
</template>

<script lang="ts" setup>
import CommonBanner from '@/components/common/Banner.vue'
import Grids from './components/Grids.vue'
import Categorie from '@/components/Categorie.vue'
import Collection from '@/components/Collection.vue'
import ApiCard from '@/components/api/Card.vue'
</script>
