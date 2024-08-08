<template>
  <div class="w-full">
    <FixedHeader />

    <div class="bg-white">
      <div class="h-16"></div>
      <RouterView />
    </div>
  </div>
  <a-layout> </a-layout>
</template>

<script setup>
import FixedHeader from './components/FixedHeader.vue'
</script>
