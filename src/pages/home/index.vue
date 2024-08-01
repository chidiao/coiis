<template>
  <div class="container mx-auto">
    <div class="w-full bg-[#fafafa] px-5 py-8 rounded grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <div class="font-bold text-2xl">Welcome to my website</div>

        <div class="mt-5 text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam rerum similique temporibus molestiae, ex quis
          repudiandae et, iure quas ut voluptas! Tempora quod similique id vel, blanditiis repellat est numquam!
        </div>

        <div class="mt-8">
          <a-button type="primary">Explore Blog</a-button>
        </div>
      </div>

      <div class="w-full flex justify-center items-center">
        <img
          src="https://rapidapi.com/hub/_next/image?url=%2Fhub%2Fimages%2Fdiscovery-hero2.png&w=1080&q=75"
          class="w-full max-w-64"
        />
      </div>
    </div>

    <Grids class="mt-5" />

    <div class="w-full mt-16">
      <div class="flex justify-between items-center">
        <div class="font-bold text-xl">Top Categories</div>

        <router-link to="/categories" class="text-blue-500 text-xs underline">View All Categories</router-link>
      </div>

      <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-5 my-5">
        <Categorie v-for="i in 4" />
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
  </div>
</template>

<script setup>
import Grids from './components/Grids.vue'
import Categorie from '@/components/Categorie.vue'
import Collection from '@/components/Collection.vue'
</script>
