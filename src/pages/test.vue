<template>
  <div>
    <div class="w-full h-16 bg-black fixed top-0 left-0"></div>

    <div class="max-w-[1200px] p-5 mx-auto">
      <div class="h-96"></div>
    </div>

    <div class="max-w-[1200px] p-5 mx-auto flex">
      <div class="w-1/3 h-32 bg-red-500 sticky top-16"></div>
      <div class="grow">
        <div class="w-full h-32" :class="[i % 2 == 1 ? 'bg-blue-200' : 'bg-blue-300']" v-for="i in 32"></div>
      </div>
    </div>
  </div>
</template>
