<template>
  <div
    class="w-full p-3 border border-solid border-gray-200 rounded-lg group transition cursor-pointer bg-white hover:bg-gray-100"
  >
    <img :src="`https://picsum.photos/200/300?${value}`" class="w-full aspect-[5/3] object-cover rounded-lg" />

    <div class="w-full flex flex-col h-[90px]">
      <div class="text-sm mt-3 transition-all text-black group-hover:text-blue-500 hover:underline truncate">
        This is title
      </div>

      <div class="text-xs line-clamp-2 mt-1 text-gray-500">
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
