<template>
  <div
    class="w-full p-3 border border-solid border-gray-200 dark:border-gray-700 rounded-lg group transition cursor-pointer bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700"
  >
    <img :src="`https://picsum.photos/200/300?${value}`" class="w-full aspect-[5/3] object-cover rounded-lg" />

    <div class="w-full flex flex-col h-[90px]">
      <div class="text-sm mt-3 transition-all group-hover:text-blue-500 hover:underline truncate dark:text-white">
        This is title
      </div>

      <div class="text-xs line-clamp-2 mt-1 text-gray-400">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id provident hic itaque possimus enim dolore. Quia,
        ipsa. Possimus asperiores blanditiis porro, ex voluptate quisquam pariatur velit doloribus reprehenderit quaerat
        mollitia.
      </div>

      <div class="text-xs text-blue-500 mt-auto">Browse Collection</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  value: {
    type: Number
  }
})
</script>
