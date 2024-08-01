<template>
  <div class="font-sans">
    <RouterView />
  </div>
</template>

<script setup>
import DefaultLayout from '@/layouts/Default.vue'
</script>

<style>
::-webkit-scrollbar {
  background-color: transparent;
  border: 0;
  width: 8px;
}
::-webkit-scrollbar-thumb {
  border-radius: 8px;
  width: 8px;
  background-color: #f1f1f1;
}
::-webkit-scrollbar-track {
  border-radius: 8px;
  width: 8px;
  background-color: transparent;
}
</style>
