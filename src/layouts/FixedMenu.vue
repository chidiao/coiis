<template>
  <div class="w-full">
    <FixedHeader />

    <div>
      <div
        class="w-[240px] h-[calc(100vh-64px)] dark:bg-[#1f1f1f] border-r border-gray-200 dark:border-gray-700 fixed left-0 top-16 z-50 hidden xl:block"
      >
        <Menu />
      </div>

      <div class="flex justify-between bg-white dark:bg-[#212121]">
        <div class="w-[240px] shrink-0 hidden xl:block"></div>

        <div class="p-5">
          <div class="h-16"></div>
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import FixedHeader from './components/FixedHeader.vue'
import Menu from './components/Menu.vue'
</script>
