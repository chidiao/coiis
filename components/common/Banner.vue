<template>
  <div class="grid gap-8 xl:grid-cols-2 justify-items-center my-8 bg-[#fafafa] dark:bg-[#262626] rounded-xl p-5">
    <div class="flex flex-col">
      <div class="line-clamp-2 text-xl font-semibold leading-7 dark:text-white cursor-pointer">
        {{ title }}
      </div>

      <div class="line-clamp-4 text-sm font-normal leading-tight text-gray-500 dark:text-zinc-400 cursor-pointer mt-4">
        {{ subTitle }}
      </div>

      <div class="mt-8">
        <slot></slot>
      </div>
    </div>

    <div class="size-full flex justify-center items-center">
      <img :src="img" class="max-h-[180px]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  subTitle: string
  img: string
}>()
</script>
