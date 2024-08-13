<template>
  <div class="grid h-full grid-cols-1 justify-center gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
    <div
      class="h-full w-full rounded-[7px] bg-gradient-to-tr from-white to-gray-50 backdrop-blur-[214px] dark:bg-gradient-to-tl dark:from-zinc-900 dark:to-zinc-700"
    ></div>
    <div
      class="hidden lg:flex h-full w-full rounded-[7px] bg-gradient-to-tr from-white to-gray-50 backdrop-blur-[214px] dark:bg-gradient-to-tl dark:from-zinc-900 dark:to-zinc-700"
      v-for="i in 3"
      :key="i"
    ></div>
  </div>
</template>
