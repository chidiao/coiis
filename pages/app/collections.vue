<template>
  <div class="container mx-auto p-5">
    <div class="flex flex-col justify-between items-start xl:flex-row xl:items-center">
      <div class="font-bold text-xl dark:text-white">Collections</div>

      <UInput
        class="max-w-64 mt-5 xl:mt-auto"
        icon="i-heroicons-magnifying-glass-20-solid"
        size="xs"
        color="white"
        :trailing="false"
        placeholder="Search..."
      />
    </div>

    <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-5 my-5">
      <CommonCollection v-for="i in 16" :value="i" />
    </div>
  </div>
</template>
